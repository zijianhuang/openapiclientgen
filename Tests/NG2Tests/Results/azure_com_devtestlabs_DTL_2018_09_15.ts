import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
	export interface ApplicableSchedule {

		/**
		 * Properties of a schedules applicable to a virtual machine.
		 * Required
		 */
		properties: ApplicableScheduleProperties;
	}

	/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
	export interface ApplicableScheduleFormProperties {
	}
	export function CreateApplicableScheduleFormGroup() {
		return new FormGroup<ApplicableScheduleFormProperties>({
		});

	}


	/** Properties of a schedules applicable to a virtual machine. */
	export interface ApplicableScheduleProperties {

		/** A schedule. */
		labVmsShutdown?: Schedule;

		/** A schedule. */
		labVmsStartup?: Schedule;
	}

	/** Properties of a schedules applicable to a virtual machine. */
	export interface ApplicableSchedulePropertiesFormProperties {
	}
	export function CreateApplicableSchedulePropertiesFormGroup() {
		return new FormGroup<ApplicableSchedulePropertiesFormProperties>({
		});

	}


	/** A schedule. */
	export interface Schedule {

		/**
		 * Properties of a schedule.
		 * Required
		 */
		properties: ScheduleProperties;
	}

	/** A schedule. */
	export interface ScheduleFormProperties {
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
		});

	}


	/** Properties of a schedule. */
	export interface ScheduleProperties {

		/** The creation date of the schedule. */
		createdDate?: Date | null;

		/** Properties of a daily schedule. */
		dailyRecurrence?: DayDetails;

		/** Properties of an hourly schedule. */
		hourlyRecurrence?: HourDetails;

		/** Notification settings for a schedule. */
		notificationSettings?: NotificationSettings;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status?: NotificationSettingsStatus | null;

		/** The resource ID to which the schedule belongs */
		targetResourceId?: string | null;

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType?: string | null;

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** Properties of a weekly schedule. */
		weeklyRecurrence?: WeekDetails;
	}

	/** Properties of a schedule. */
	export interface SchedulePropertiesFormProperties {

		/** The creation date of the schedule. */
		createdDate: FormControl<Date | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The resource ID to which the schedule belongs */
		targetResourceId: FormControl<string | null | undefined>,

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType: FormControl<string | null | undefined>,

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateSchedulePropertiesFormGroup() {
		return new FormGroup<SchedulePropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<string | null | undefined>(undefined),
			timeZoneId: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a daily schedule. */
	export interface DayDetails {

		/** The time of day the schedule will occur. */
		time?: string | null;
	}

	/** Properties of a daily schedule. */
	export interface DayDetailsFormProperties {

		/** The time of day the schedule will occur. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateDayDetailsFormGroup() {
		return new FormGroup<DayDetailsFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an hourly schedule. */
	export interface HourDetails {

		/**
		 * Minutes of the hour the schedule will run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute?: number | null;
	}

	/** Properties of an hourly schedule. */
	export interface HourDetailsFormProperties {

		/**
		 * Minutes of the hour the schedule will run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute: FormControl<number | null | undefined>,
	}
	export function CreateHourDetailsFormGroup() {
		return new FormGroup<HourDetailsFormProperties>({
			minute: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Notification settings for a schedule. */
	export interface NotificationSettings {

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient?: string | null;

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale?: string | null;

		/** If notifications are enabled for this schedule (i.e. Enabled, Disabled). */
		status?: NotificationSettingsStatus | null;

		/**
		 * Time in minutes before event at which notification will be sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeInMinutes?: number | null;

		/** The webhook URL to which the notification will be sent. */
		webhookUrl?: string | null;
	}

	/** Notification settings for a schedule. */
	export interface NotificationSettingsFormProperties {

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient: FormControl<string | null | undefined>,

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale: FormControl<string | null | undefined>,

		/** If notifications are enabled for this schedule (i.e. Enabled, Disabled). */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/**
		 * Time in minutes before event at which notification will be sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeInMinutes: FormControl<number | null | undefined>,

		/** The webhook URL to which the notification will be sent. */
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSettingsFormGroup() {
		return new FormGroup<NotificationSettingsFormProperties>({
			emailRecipient: new FormControl<string | null | undefined>(undefined),
			notificationLocale: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			timeInMinutes: new FormControl<number | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotificationSettingsStatus { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Properties of a weekly schedule. */
	export interface WeekDetails {

		/** The time of the day the schedule will occur. */
		time?: string | null;

		/** The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.). */
		weekdays?: Array<string>;
	}

	/** Properties of a weekly schedule. */
	export interface WeekDetailsFormProperties {

		/** The time of the day the schedule will occur. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateWeekDetailsFormGroup() {
		return new FormGroup<WeekDetailsFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
	export interface ApplicableScheduleFragment {

		/** Properties of a schedules applicable to a virtual machine. */
		properties?: ApplicableSchedulePropertiesFragment;
	}

	/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
	export interface ApplicableScheduleFragmentFormProperties {
	}
	export function CreateApplicableScheduleFragmentFormGroup() {
		return new FormGroup<ApplicableScheduleFragmentFormProperties>({
		});

	}


	/** Properties of a schedules applicable to a virtual machine. */
	export interface ApplicableSchedulePropertiesFragment {

		/** A schedule. */
		labVmsShutdown?: ScheduleFragment;

		/** A schedule. */
		labVmsStartup?: ScheduleFragment;
	}

	/** Properties of a schedules applicable to a virtual machine. */
	export interface ApplicableSchedulePropertiesFragmentFormProperties {
	}
	export function CreateApplicableSchedulePropertiesFragmentFormGroup() {
		return new FormGroup<ApplicableSchedulePropertiesFragmentFormProperties>({
		});

	}


	/** A schedule. */
	export interface ScheduleFragment {

		/** Properties of a schedule. */
		properties?: SchedulePropertiesFragment;
	}

	/** A schedule. */
	export interface ScheduleFragmentFormProperties {
	}
	export function CreateScheduleFragmentFormGroup() {
		return new FormGroup<ScheduleFragmentFormProperties>({
		});

	}


	/** Properties of a schedule. */
	export interface SchedulePropertiesFragment {

		/** Properties of a daily schedule. */
		dailyRecurrence?: DayDetailsFragment;

		/** Properties of an hourly schedule. */
		hourlyRecurrence?: HourDetailsFragment;

		/** Notification settings for a schedule. */
		notificationSettings?: NotificationSettingsFragment;

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status?: NotificationSettingsStatus | null;

		/** The resource ID to which the schedule belongs */
		targetResourceId?: string | null;

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType?: string | null;

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId?: string | null;

		/** Properties of a weekly schedule. */
		weeklyRecurrence?: WeekDetailsFragment;
	}

	/** Properties of a schedule. */
	export interface SchedulePropertiesFragmentFormProperties {

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The resource ID to which the schedule belongs */
		targetResourceId: FormControl<string | null | undefined>,

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType: FormControl<string | null | undefined>,

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateSchedulePropertiesFragmentFormGroup() {
		return new FormGroup<SchedulePropertiesFragmentFormProperties>({
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<string | null | undefined>(undefined),
			timeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a daily schedule. */
	export interface DayDetailsFragment {

		/** The time of day the schedule will occur. */
		time?: string | null;
	}

	/** Properties of a daily schedule. */
	export interface DayDetailsFragmentFormProperties {

		/** The time of day the schedule will occur. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateDayDetailsFragmentFormGroup() {
		return new FormGroup<DayDetailsFragmentFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an hourly schedule. */
	export interface HourDetailsFragment {

		/**
		 * Minutes of the hour the schedule will run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute?: number | null;
	}

	/** Properties of an hourly schedule. */
	export interface HourDetailsFragmentFormProperties {

		/**
		 * Minutes of the hour the schedule will run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute: FormControl<number | null | undefined>,
	}
	export function CreateHourDetailsFragmentFormGroup() {
		return new FormGroup<HourDetailsFragmentFormProperties>({
			minute: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Notification settings for a schedule. */
	export interface NotificationSettingsFragment {

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient?: string | null;

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale?: string | null;

		/** If notifications are enabled for this schedule (i.e. Enabled, Disabled). */
		status?: NotificationSettingsStatus | null;

		/**
		 * Time in minutes before event at which notification will be sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeInMinutes?: number | null;

		/** The webhook URL to which the notification will be sent. */
		webhookUrl?: string | null;
	}

	/** Notification settings for a schedule. */
	export interface NotificationSettingsFragmentFormProperties {

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient: FormControl<string | null | undefined>,

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale: FormControl<string | null | undefined>,

		/** If notifications are enabled for this schedule (i.e. Enabled, Disabled). */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/**
		 * Time in minutes before event at which notification will be sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeInMinutes: FormControl<number | null | undefined>,

		/** The webhook URL to which the notification will be sent. */
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSettingsFragmentFormGroup() {
		return new FormGroup<NotificationSettingsFragmentFormProperties>({
			emailRecipient: new FormControl<string | null | undefined>(undefined),
			notificationLocale: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			timeInMinutes: new FormControl<number | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a weekly schedule. */
	export interface WeekDetailsFragment {

		/** The time of the day the schedule will occur. */
		time?: string | null;

		/** The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.). */
		weekdays?: Array<string>;
	}

	/** Properties of a weekly schedule. */
	export interface WeekDetailsFragmentFormProperties {

		/** The time of the day the schedule will occur. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateWeekDetailsFragmentFormGroup() {
		return new FormGroup<WeekDetailsFragmentFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for applying artifacts to a virtual machine. */
	export interface ApplyArtifactsRequest {

		/** The list of artifacts to apply. */
		artifacts?: Array<ArtifactInstallProperties>;
	}

	/** Request body for applying artifacts to a virtual machine. */
	export interface ApplyArtifactsRequestFormProperties {
	}
	export function CreateApplyArtifactsRequestFormGroup() {
		return new FormGroup<ApplyArtifactsRequestFormProperties>({
		});

	}


	/** Properties of an artifact. */
	export interface ArtifactInstallProperties {

		/** The artifact's identifier. */
		artifactId?: string | null;

		/** The artifact's title. */
		artifactTitle?: string | null;

		/** The status message from the deployment. */
		deploymentStatusMessage?: string | null;

		/** The time that the artifact starts to install on the virtual machine. */
		installTime?: Date | null;

		/** The parameters of the artifact. */
		parameters?: Array<ArtifactParameterProperties>;

		/** The status of the artifact. */
		status?: string | null;

		/** The status message from the virtual machine extension. */
		vmExtensionStatusMessage?: string | null;
	}

	/** Properties of an artifact. */
	export interface ArtifactInstallPropertiesFormProperties {

		/** The artifact's identifier. */
		artifactId: FormControl<string | null | undefined>,

		/** The artifact's title. */
		artifactTitle: FormControl<string | null | undefined>,

		/** The status message from the deployment. */
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** The time that the artifact starts to install on the virtual machine. */
		installTime: FormControl<Date | null | undefined>,

		/** The status of the artifact. */
		status: FormControl<string | null | undefined>,

		/** The status message from the virtual machine extension. */
		vmExtensionStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateArtifactInstallPropertiesFormGroup() {
		return new FormGroup<ArtifactInstallPropertiesFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			artifactTitle: new FormControl<string | null | undefined>(undefined),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			installTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			vmExtensionStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact parameter. */
	export interface ArtifactParameterProperties {

		/** The name of the artifact parameter. */
		name?: string | null;

		/** The value of the artifact parameter. */
		value?: string | null;
	}

	/** Properties of an artifact parameter. */
	export interface ArtifactParameterPropertiesFormProperties {

		/** The name of the artifact parameter. */
		name: FormControl<string | null | undefined>,

		/** The value of the artifact parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateArtifactParameterPropertiesFormGroup() {
		return new FormGroup<ArtifactParameterPropertiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure Resource Manager template. */
	export interface ArmTemplate {

		/**
		 * Properties of an Azure Resource Manager template.
		 * Required
		 */
		properties: ArmTemplateProperties;
	}

	/** An Azure Resource Manager template. */
	export interface ArmTemplateFormProperties {
	}
	export function CreateArmTemplateFormGroup() {
		return new FormGroup<ArmTemplateFormProperties>({
		});

	}


	/** Properties of an Azure Resource Manager template. */
	export interface ArmTemplateProperties {

		/** The contents of the ARM template. */
		contents?: string | null;

		/** The creation date of the armTemplate. */
		createdDate?: Date | null;

		/** The description of the ARM template. */
		description?: string | null;

		/** The display name of the ARM template. */
		displayName?: string | null;

		/** Whether or not ARM template is enabled for use by lab user. */
		enabled?: boolean | null;

		/** The URI to the icon of the ARM template. */
		icon?: string | null;

		/** File name and parameter values information from all azuredeploy.*.parameters.json for the ARM template. */
		parametersValueFilesInfo?: Array<ParametersValueFileInfo>;

		/** The publisher of the ARM template. */
		publisher?: string | null;
	}

	/** Properties of an Azure Resource Manager template. */
	export interface ArmTemplatePropertiesFormProperties {

		/** The contents of the ARM template. */
		contents: FormControl<string | null | undefined>,

		/** The creation date of the armTemplate. */
		createdDate: FormControl<Date | null | undefined>,

		/** The description of the ARM template. */
		description: FormControl<string | null | undefined>,

		/** The display name of the ARM template. */
		displayName: FormControl<string | null | undefined>,

		/** Whether or not ARM template is enabled for use by lab user. */
		enabled: FormControl<boolean | null | undefined>,

		/** The URI to the icon of the ARM template. */
		icon: FormControl<string | null | undefined>,

		/** The publisher of the ARM template. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateArmTemplatePropertiesFormGroup() {
		return new FormGroup<ArmTemplatePropertiesFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file containing a set of parameter values for an ARM template. */
	export interface ParametersValueFileInfo {

		/** File name. */
		fileName?: string | null;

		/** Contents of the file. */
		parametersValueInfo?: string | null;
	}

	/** A file containing a set of parameter values for an ARM template. */
	export interface ParametersValueFileInfoFormProperties {

		/** File name. */
		fileName: FormControl<string | null | undefined>,

		/** Contents of the file. */
		parametersValueInfo: FormControl<string | null | undefined>,
	}
	export function CreateParametersValueFileInfoFormGroup() {
		return new FormGroup<ParametersValueFileInfoFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			parametersValueInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a generated ARM template. */
	export interface ArmTemplateInfo {

		/** The parameters of the ARM template. */
		parameters?: string | null;

		/** The template's contents. */
		template?: string | null;
	}

	/** Information about a generated ARM template. */
	export interface ArmTemplateInfoFormProperties {

		/** The parameters of the ARM template. */
		parameters: FormControl<string | null | undefined>,

		/** The template's contents. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateArmTemplateInfoFormGroup() {
		return new FormGroup<ArmTemplateInfoFormProperties>({
			parameters: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface ArmTemplateList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ArmTemplate>;
	}

	/** The response of a list operation. */
	export interface ArmTemplateListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateArmTemplateListFormGroup() {
		return new FormGroup<ArmTemplateListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an Azure Resource Manager template parameter. */
	export interface ArmTemplateParameterProperties {

		/** The name of the template parameter. */
		name?: string | null;

		/** The value of the template parameter. */
		value?: string | null;
	}

	/** Properties of an Azure Resource Manager template parameter. */
	export interface ArmTemplateParameterPropertiesFormProperties {

		/** The name of the template parameter. */
		name: FormControl<string | null | undefined>,

		/** The value of the template parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateArmTemplateParameterPropertiesFormGroup() {
		return new FormGroup<ArmTemplateParameterPropertiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an Azure Resource Manager template parameter. */
	export interface ArmTemplateParameterPropertiesFragment {

		/** The name of the template parameter. */
		name?: string | null;

		/** The value of the template parameter. */
		value?: string | null;
	}

	/** Properties of an Azure Resource Manager template parameter. */
	export interface ArmTemplateParameterPropertiesFragmentFormProperties {

		/** The name of the template parameter. */
		name: FormControl<string | null | undefined>,

		/** The value of the template parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateArmTemplateParameterPropertiesFragmentFormGroup() {
		return new FormGroup<ArmTemplateParameterPropertiesFragmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An artifact. */
	export interface Artifact {

		/**
		 * Properties of an artifact.
		 * Required
		 */
		properties: ArtifactProperties;
	}

	/** An artifact. */
	export interface ArtifactFormProperties {
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
		});

	}


	/** Properties of an artifact. */
	export interface ArtifactProperties {

		/** The artifact's creation date. */
		createdDate?: Date | null;

		/** The artifact's description. */
		description?: string | null;

		/** The file path to the artifact. */
		filePath?: string | null;

		/** The URI to the artifact icon. */
		icon?: string | null;

		/** The artifact's parameters. */
		parameters?: string | null;

		/** The artifact's publisher. */
		publisher?: string | null;

		/** The artifact's target OS. */
		targetOsType?: string | null;

		/** The artifact's title. */
		title?: string | null;
	}

	/** Properties of an artifact. */
	export interface ArtifactPropertiesFormProperties {

		/** The artifact's creation date. */
		createdDate: FormControl<Date | null | undefined>,

		/** The artifact's description. */
		description: FormControl<string | null | undefined>,

		/** The file path to the artifact. */
		filePath: FormControl<string | null | undefined>,

		/** The URI to the artifact icon. */
		icon: FormControl<string | null | undefined>,

		/** The artifact's parameters. */
		parameters: FormControl<string | null | undefined>,

		/** The artifact's publisher. */
		publisher: FormControl<string | null | undefined>,

		/** The artifact's target OS. */
		targetOsType: FormControl<string | null | undefined>,

		/** The artifact's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateArtifactPropertiesFormGroup() {
		return new FormGroup<ArtifactPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			targetOsType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact deployment. */
	export interface ArtifactDeploymentStatusProperties {

		/**
		 * The total count of the artifacts that were successfully applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		artifactsApplied?: number | null;

		/** The deployment status of the artifact. */
		deploymentStatus?: string | null;

		/**
		 * The total count of the artifacts that were tentatively applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalArtifacts?: number | null;
	}

	/** Properties of an artifact deployment. */
	export interface ArtifactDeploymentStatusPropertiesFormProperties {

		/**
		 * The total count of the artifacts that were successfully applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		artifactsApplied: FormControl<number | null | undefined>,

		/** The deployment status of the artifact. */
		deploymentStatus: FormControl<string | null | undefined>,

		/**
		 * The total count of the artifacts that were tentatively applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalArtifacts: FormControl<number | null | undefined>,
	}
	export function CreateArtifactDeploymentStatusPropertiesFormGroup() {
		return new FormGroup<ArtifactDeploymentStatusPropertiesFormProperties>({
			artifactsApplied: new FormControl<number | null | undefined>(undefined),
			deploymentStatus: new FormControl<string | null | undefined>(undefined),
			totalArtifacts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact deployment. */
	export interface ArtifactDeploymentStatusPropertiesFragment {

		/**
		 * The total count of the artifacts that were successfully applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		artifactsApplied?: number | null;

		/** The deployment status of the artifact. */
		deploymentStatus?: string | null;

		/**
		 * The total count of the artifacts that were tentatively applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalArtifacts?: number | null;
	}

	/** Properties of an artifact deployment. */
	export interface ArtifactDeploymentStatusPropertiesFragmentFormProperties {

		/**
		 * The total count of the artifacts that were successfully applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		artifactsApplied: FormControl<number | null | undefined>,

		/** The deployment status of the artifact. */
		deploymentStatus: FormControl<string | null | undefined>,

		/**
		 * The total count of the artifacts that were tentatively applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalArtifacts: FormControl<number | null | undefined>,
	}
	export function CreateArtifactDeploymentStatusPropertiesFragmentFormGroup() {
		return new FormGroup<ArtifactDeploymentStatusPropertiesFragmentFormProperties>({
			artifactsApplied: new FormControl<number | null | undefined>(undefined),
			deploymentStatus: new FormControl<string | null | undefined>(undefined),
			totalArtifacts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact. */
	export interface ArtifactInstallPropertiesFragment {

		/** The artifact's identifier. */
		artifactId?: string | null;

		/** The artifact's title. */
		artifactTitle?: string | null;

		/** The status message from the deployment. */
		deploymentStatusMessage?: string | null;

		/** The time that the artifact starts to install on the virtual machine. */
		installTime?: Date | null;

		/** The parameters of the artifact. */
		parameters?: Array<ArtifactParameterPropertiesFragment>;

		/** The status of the artifact. */
		status?: string | null;

		/** The status message from the virtual machine extension. */
		vmExtensionStatusMessage?: string | null;
	}

	/** Properties of an artifact. */
	export interface ArtifactInstallPropertiesFragmentFormProperties {

		/** The artifact's identifier. */
		artifactId: FormControl<string | null | undefined>,

		/** The artifact's title. */
		artifactTitle: FormControl<string | null | undefined>,

		/** The status message from the deployment. */
		deploymentStatusMessage: FormControl<string | null | undefined>,

		/** The time that the artifact starts to install on the virtual machine. */
		installTime: FormControl<Date | null | undefined>,

		/** The status of the artifact. */
		status: FormControl<string | null | undefined>,

		/** The status message from the virtual machine extension. */
		vmExtensionStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateArtifactInstallPropertiesFragmentFormGroup() {
		return new FormGroup<ArtifactInstallPropertiesFragmentFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			artifactTitle: new FormControl<string | null | undefined>(undefined),
			deploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			installTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			vmExtensionStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact parameter. */
	export interface ArtifactParameterPropertiesFragment {

		/** The name of the artifact parameter. */
		name?: string | null;

		/** The value of the artifact parameter. */
		value?: string | null;
	}

	/** Properties of an artifact parameter. */
	export interface ArtifactParameterPropertiesFragmentFormProperties {

		/** The name of the artifact parameter. */
		name: FormControl<string | null | undefined>,

		/** The value of the artifact parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateArtifactParameterPropertiesFragmentFormGroup() {
		return new FormGroup<ArtifactParameterPropertiesFragmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface ArtifactList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Artifact>;
	}

	/** The response of a list operation. */
	export interface ArtifactListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateArtifactListFormGroup() {
		return new FormGroup<ArtifactListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an artifact source. */
	export interface ArtifactSource {

		/**
		 * Properties of an artifact source.
		 * Required
		 */
		properties: ArtifactSourceProperties;
	}

	/** Properties of an artifact source. */
	export interface ArtifactSourceFormProperties {
	}
	export function CreateArtifactSourceFormGroup() {
		return new FormGroup<ArtifactSourceFormProperties>({
		});

	}


	/** Properties of an artifact source. */
	export interface ArtifactSourceProperties {

		/** The folder containing Azure Resource Manager templates. */
		armTemplateFolderPath?: string | null;

		/** The artifact source's branch reference. */
		branchRef?: string | null;

		/** The artifact source's creation date. */
		createdDate?: Date | null;

		/** The artifact source's display name. */
		displayName?: string | null;

		/** The folder containing artifacts. */
		folderPath?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The security token to authenticate to the artifact source. */
		securityToken?: string | null;

		/** The artifact source's type. */
		sourceType?: ArtifactSourcePropertiesSourceType | null;

		/** Indicates if the artifact source is enabled (values: Enabled, Disabled). */
		status?: NotificationSettingsStatus | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** The artifact source's URI. */
		uri?: string | null;
	}

	/** Properties of an artifact source. */
	export interface ArtifactSourcePropertiesFormProperties {

		/** The folder containing Azure Resource Manager templates. */
		armTemplateFolderPath: FormControl<string | null | undefined>,

		/** The artifact source's branch reference. */
		branchRef: FormControl<string | null | undefined>,

		/** The artifact source's creation date. */
		createdDate: FormControl<Date | null | undefined>,

		/** The artifact source's display name. */
		displayName: FormControl<string | null | undefined>,

		/** The folder containing artifacts. */
		folderPath: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The security token to authenticate to the artifact source. */
		securityToken: FormControl<string | null | undefined>,

		/** The artifact source's type. */
		sourceType: FormControl<ArtifactSourcePropertiesSourceType | null | undefined>,

		/** Indicates if the artifact source is enabled (values: Enabled, Disabled). */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,

		/** The artifact source's URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateArtifactSourcePropertiesFormGroup() {
		return new FormGroup<ArtifactSourcePropertiesFormProperties>({
			armTemplateFolderPath: new FormControl<string | null | undefined>(undefined),
			branchRef: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			securityToken: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<ArtifactSourcePropertiesSourceType | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactSourcePropertiesSourceType { VsoGit = 'VsoGit', GitHub = 'GitHub' }


	/** Properties of an artifact source. */
	export interface ArtifactSourceFragment {

		/** Properties of an artifact source. */
		properties?: ArtifactSourcePropertiesFragment;
	}

	/** Properties of an artifact source. */
	export interface ArtifactSourceFragmentFormProperties {
	}
	export function CreateArtifactSourceFragmentFormGroup() {
		return new FormGroup<ArtifactSourceFragmentFormProperties>({
		});

	}


	/** Properties of an artifact source. */
	export interface ArtifactSourcePropertiesFragment {

		/** The folder containing Azure Resource Manager templates. */
		armTemplateFolderPath?: string | null;

		/** The artifact source's branch reference. */
		branchRef?: string | null;

		/** The artifact source's display name. */
		displayName?: string | null;

		/** The folder containing artifacts. */
		folderPath?: string | null;

		/** The security token to authenticate to the artifact source. */
		securityToken?: string | null;

		/** The artifact source's type. */
		sourceType?: ArtifactSourcePropertiesSourceType | null;

		/** Indicates if the artifact source is enabled (values: Enabled, Disabled). */
		status?: NotificationSettingsStatus | null;

		/** The artifact source's URI. */
		uri?: string | null;
	}

	/** Properties of an artifact source. */
	export interface ArtifactSourcePropertiesFragmentFormProperties {

		/** The folder containing Azure Resource Manager templates. */
		armTemplateFolderPath: FormControl<string | null | undefined>,

		/** The artifact source's branch reference. */
		branchRef: FormControl<string | null | undefined>,

		/** The artifact source's display name. */
		displayName: FormControl<string | null | undefined>,

		/** The folder containing artifacts. */
		folderPath: FormControl<string | null | undefined>,

		/** The security token to authenticate to the artifact source. */
		securityToken: FormControl<string | null | undefined>,

		/** The artifact source's type. */
		sourceType: FormControl<ArtifactSourcePropertiesSourceType | null | undefined>,

		/** Indicates if the artifact source is enabled (values: Enabled, Disabled). */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The artifact source's URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateArtifactSourcePropertiesFragmentFormGroup() {
		return new FormGroup<ArtifactSourcePropertiesFragmentFormProperties>({
			armTemplateFolderPath: new FormControl<string | null | undefined>(undefined),
			branchRef: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			securityToken: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<ArtifactSourcePropertiesSourceType | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface ArtifactSourceList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ArtifactSource>;
	}

	/** The response of a list operation. */
	export interface ArtifactSourceListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateArtifactSourceListFormGroup() {
		return new FormGroup<ArtifactSourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the disk to attach. */
	export interface AttachDiskProperties {

		/** The resource ID of the Lab virtual machine to which the disk is attached. */
		leasedByLabVmId?: string | null;
	}

	/** Properties of the disk to attach. */
	export interface AttachDiskPropertiesFormProperties {

		/** The resource ID of the Lab virtual machine to which the disk is attached. */
		leasedByLabVmId: FormControl<string | null | undefined>,
	}
	export function CreateAttachDiskPropertiesFormGroup() {
		return new FormGroup<AttachDiskPropertiesFormProperties>({
			leasedByLabVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties to attach new disk to the Virtual Machine. */
	export interface AttachNewDataDiskOptions {

		/** The name of the disk to be attached. */
		diskName?: string | null;

		/**
		 * Size of the disk to be attached in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType?: AttachNewDataDiskOptionsDiskType | null;
	}

	/** Properties to attach new disk to the Virtual Machine. */
	export interface AttachNewDataDiskOptionsFormProperties {

		/** The name of the disk to be attached. */
		diskName: FormControl<string | null | undefined>,

		/**
		 * Size of the disk to be attached in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,
	}
	export function CreateAttachNewDataDiskOptionsFormGroup() {
		return new FormGroup<AttachNewDataDiskOptionsFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined),
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
		});

	}

	export enum AttachNewDataDiskOptionsDiskType { Standard = 'Standard', Premium = 'Premium', StandardSSD = 'StandardSSD' }


	/** Properties to attach new disk to the Virtual Machine. */
	export interface AttachNewDataDiskOptionsFragment {

		/** The name of the disk to be attached. */
		diskName?: string | null;

		/**
		 * Size of the disk to be attached in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType?: AttachNewDataDiskOptionsDiskType | null;
	}

	/** Properties to attach new disk to the Virtual Machine. */
	export interface AttachNewDataDiskOptionsFragmentFormProperties {

		/** The name of the disk to be attached. */
		diskName: FormControl<string | null | undefined>,

		/**
		 * Size of the disk to be attached in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,
	}
	export function CreateAttachNewDataDiskOptionsFragmentFormGroup() {
		return new FormGroup<AttachNewDataDiskOptionsFragmentFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined),
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
		});

	}


	/** Parameters for creating multiple virtual machines as a single action. */
	export interface BulkCreationParameters {

		/**
		 * The number of virtual machine instances to create.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount?: number | null;
	}

	/** Parameters for creating multiple virtual machines as a single action. */
	export interface BulkCreationParametersFormProperties {

		/**
		 * The number of virtual machine instances to create.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount: FormControl<number | null | undefined>,
	}
	export function CreateBulkCreationParametersFormGroup() {
		return new FormGroup<BulkCreationParametersFormProperties>({
			instanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters for creating multiple virtual machines as a single action. */
	export interface BulkCreationParametersFragment {

		/**
		 * The number of virtual machine instances to create.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount?: number | null;
	}

	/** Parameters for creating multiple virtual machines as a single action. */
	export interface BulkCreationParametersFragmentFormProperties {

		/**
		 * The number of virtual machine instances to create.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount: FormControl<number | null | undefined>,
	}
	export function CreateBulkCreationParametersFragmentFormGroup() {
		return new FormGroup<BulkCreationParametersFragmentFormProperties>({
			instanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Error from a REST request. */
	export interface CloudError {

		/** Body of an error from a REST request. */
		error?: CloudErrorBody;
	}

	/** Error from a REST request. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Body of an error from a REST request. */
	export interface CloudErrorBody {

		/** The error code. */
		code?: string | null;

		/** Inner errors. */
		details?: Array<CloudErrorBody>;

		/** The error message. */
		message?: string | null;

		/** The error target. */
		target?: string | null;
	}

	/** Body of an error from a REST request. */
	export interface CloudErrorBodyFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data disks attached to a virtual machine. */
	export interface ComputeDataDisk {

		/**
		 * Gets data disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** When backed by a blob, the URI of underlying blob. */
		diskUri?: string | null;

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId?: string | null;

		/** Gets data disk name. */
		name?: string | null;
	}

	/** A data disks attached to a virtual machine. */
	export interface ComputeDataDiskFormProperties {

		/**
		 * Gets data disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** When backed by a blob, the URI of underlying blob. */
		diskUri: FormControl<string | null | undefined>,

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId: FormControl<string | null | undefined>,

		/** Gets data disk name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateComputeDataDiskFormGroup() {
		return new FormGroup<ComputeDataDiskFormProperties>({
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskUri: new FormControl<string | null | undefined>(undefined),
			managedDiskId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data disks attached to a virtual machine. */
	export interface ComputeDataDiskFragment {

		/**
		 * Gets data disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** When backed by a blob, the URI of underlying blob. */
		diskUri?: string | null;

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId?: string | null;

		/** Gets data disk name. */
		name?: string | null;
	}

	/** A data disks attached to a virtual machine. */
	export interface ComputeDataDiskFragmentFormProperties {

		/**
		 * Gets data disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** When backed by a blob, the URI of underlying blob. */
		diskUri: FormControl<string | null | undefined>,

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId: FormControl<string | null | undefined>,

		/** Gets data disk name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateComputeDataDiskFragmentFormGroup() {
		return new FormGroup<ComputeDataDiskFragmentFormProperties>({
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskUri: new FormControl<string | null | undefined>(undefined),
			managedDiskId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information about a virtual machine. */
	export interface ComputeVmInstanceViewStatus {

		/** Gets the status Code. */
		code?: string | null;

		/** Gets the short localizable label for the status. */
		displayStatus?: string | null;

		/** Gets the message associated with the status. */
		message?: string | null;
	}

	/** Status information about a virtual machine. */
	export interface ComputeVmInstanceViewStatusFormProperties {

		/** Gets the status Code. */
		code: FormControl<string | null | undefined>,

		/** Gets the short localizable label for the status. */
		displayStatus: FormControl<string | null | undefined>,

		/** Gets the message associated with the status. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateComputeVmInstanceViewStatusFormGroup() {
		return new FormGroup<ComputeVmInstanceViewStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			displayStatus: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information about a virtual machine. */
	export interface ComputeVmInstanceViewStatusFragment {

		/** Gets the status Code. */
		code?: string | null;

		/** Gets the short localizable label for the status. */
		displayStatus?: string | null;

		/** Gets the message associated with the status. */
		message?: string | null;
	}

	/** Status information about a virtual machine. */
	export interface ComputeVmInstanceViewStatusFragmentFormProperties {

		/** Gets the status Code. */
		code: FormControl<string | null | undefined>,

		/** Gets the short localizable label for the status. */
		displayStatus: FormControl<string | null | undefined>,

		/** Gets the message associated with the status. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateComputeVmInstanceViewStatusFragmentFormGroup() {
		return new FormGroup<ComputeVmInstanceViewStatusFragmentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			displayStatus: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a virtual machine returned by the Microsoft.Compute API. */
	export interface ComputeVmProperties {

		/** Gets data disks blob uri for the virtual machine. */
		dataDiskIds?: Array<string>;

		/** Gets all data disks attached to the virtual machine. */
		dataDisks?: Array<ComputeDataDisk>;

		/** Gets the network interface ID of the virtual machine. */
		networkInterfaceId?: string | null;

		/** Gets OS disk blob uri for the virtual machine. */
		osDiskId?: string | null;

		/** Gets the OS type of the virtual machine. */
		osType?: string | null;

		/** Gets the statuses of the virtual machine. */
		statuses?: Array<ComputeVmInstanceViewStatus>;

		/** Gets the size of the virtual machine. */
		vmSize?: string | null;
	}

	/** Properties of a virtual machine returned by the Microsoft.Compute API. */
	export interface ComputeVmPropertiesFormProperties {

		/** Gets the network interface ID of the virtual machine. */
		networkInterfaceId: FormControl<string | null | undefined>,

		/** Gets OS disk blob uri for the virtual machine. */
		osDiskId: FormControl<string | null | undefined>,

		/** Gets the OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** Gets the size of the virtual machine. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateComputeVmPropertiesFormGroup() {
		return new FormGroup<ComputeVmPropertiesFormProperties>({
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
			osDiskId: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a virtual machine returned by the Microsoft.Compute API. */
	export interface ComputeVmPropertiesFragment {

		/** Gets data disks blob uri for the virtual machine. */
		dataDiskIds?: Array<string>;

		/** Gets all data disks attached to the virtual machine. */
		dataDisks?: Array<ComputeDataDiskFragment>;

		/** Gets the network interface ID of the virtual machine. */
		networkInterfaceId?: string | null;

		/** Gets OS disk blob uri for the virtual machine. */
		osDiskId?: string | null;

		/** Gets the OS type of the virtual machine. */
		osType?: string | null;

		/** Gets the statuses of the virtual machine. */
		statuses?: Array<ComputeVmInstanceViewStatusFragment>;

		/** Gets the size of the virtual machine. */
		vmSize?: string | null;
	}

	/** Properties of a virtual machine returned by the Microsoft.Compute API. */
	export interface ComputeVmPropertiesFragmentFormProperties {

		/** Gets the network interface ID of the virtual machine. */
		networkInterfaceId: FormControl<string | null | undefined>,

		/** Gets OS disk blob uri for the virtual machine. */
		osDiskId: FormControl<string | null | undefined>,

		/** Gets the OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** Gets the size of the virtual machine. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateComputeVmPropertiesFragmentFormGroup() {
		return new FormGroup<ComputeVmPropertiesFragmentFormProperties>({
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
			osDiskId: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a cost threshold item. */
	export interface CostThresholdProperties {

		/** Indicates whether this threshold will be displayed on cost charts. */
		displayOnChart?: NotificationSettingsStatus | null;

		/** Indicates the datetime when notifications were last sent for this threshold. */
		notificationSent?: string | null;

		/** Properties of a percentage cost threshold. */
		percentageThreshold?: PercentageCostThresholdProperties;

		/** Indicates whether notifications will be sent when this threshold is exceeded. */
		sendNotificationWhenExceeded?: NotificationSettingsStatus | null;

		/** The ID of the cost threshold item. */
		thresholdId?: string | null;
	}

	/** Properties of a cost threshold item. */
	export interface CostThresholdPropertiesFormProperties {

		/** Indicates whether this threshold will be displayed on cost charts. */
		displayOnChart: FormControl<NotificationSettingsStatus | null | undefined>,

		/** Indicates the datetime when notifications were last sent for this threshold. */
		notificationSent: FormControl<string | null | undefined>,

		/** Indicates whether notifications will be sent when this threshold is exceeded. */
		sendNotificationWhenExceeded: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The ID of the cost threshold item. */
		thresholdId: FormControl<string | null | undefined>,
	}
	export function CreateCostThresholdPropertiesFormGroup() {
		return new FormGroup<CostThresholdPropertiesFormProperties>({
			displayOnChart: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			notificationSent: new FormControl<string | null | undefined>(undefined),
			sendNotificationWhenExceeded: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			thresholdId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a percentage cost threshold. */
	export interface PercentageCostThresholdProperties {

		/**
		 * The cost threshold value.
		 * Type: double
		 */
		thresholdValue?: number | null;
	}

	/** Properties of a percentage cost threshold. */
	export interface PercentageCostThresholdPropertiesFormProperties {

		/**
		 * The cost threshold value.
		 * Type: double
		 */
		thresholdValue: FormControl<number | null | undefined>,
	}
	export function CreatePercentageCostThresholdPropertiesFormGroup() {
		return new FormGroup<PercentageCostThresholdPropertiesFormProperties>({
			thresholdValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A custom image. */
	export interface CustomImage {

		/**
		 * Properties of a custom image.
		 * Required
		 */
		properties: CustomImageProperties;
	}

	/** A custom image. */
	export interface CustomImageFormProperties {
	}
	export function CreateCustomImageFormGroup() {
		return new FormGroup<CustomImageFormProperties>({
		});

	}


	/** Properties of a custom image. */
	export interface CustomImageProperties {

		/** The author of the custom image. */
		author?: string | null;

		/** The creation date of the custom image. */
		creationDate?: Date | null;

		/** Properties for plan on a custom image. */
		customImagePlan?: CustomImagePropertiesFromPlan;

		/** Storage information about the data disks present in the custom image */
		dataDiskStorageInfo?: Array<DataDiskStorageTypeInfo>;

		/** The description of the custom image. */
		description?: string | null;

		/** Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment */
		isPlanAuthorized?: boolean | null;

		/** The Managed Image Id backing the custom image. */
		managedImageId?: string | null;

		/** The Managed Snapshot Id backing the custom image. */
		managedSnapshotId?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** Properties for creating a custom image from a VHD. */
		vhd?: CustomImagePropertiesCustom;

		/** Properties for creating a custom image from a virtual machine. */
		vm?: CustomImagePropertiesFromVm;
	}

	/** Properties of a custom image. */
	export interface CustomImagePropertiesFormProperties {

		/** The author of the custom image. */
		author: FormControl<string | null | undefined>,

		/** The creation date of the custom image. */
		creationDate: FormControl<Date | null | undefined>,

		/** The description of the custom image. */
		description: FormControl<string | null | undefined>,

		/** Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment */
		isPlanAuthorized: FormControl<boolean | null | undefined>,

		/** The Managed Image Id backing the custom image. */
		managedImageId: FormControl<string | null | undefined>,

		/** The Managed Snapshot Id backing the custom image. */
		managedSnapshotId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFormGroup() {
		return new FormGroup<CustomImagePropertiesFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isPlanAuthorized: new FormControl<boolean | null | undefined>(undefined),
			managedImageId: new FormControl<string | null | undefined>(undefined),
			managedSnapshotId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for plan on a custom image. */
	export interface CustomImagePropertiesFromPlan {

		/** The id of the plan, equivalent to name of the plan */
		id?: string | null;

		/** The offer for the plan from the marketplace image the custom image is derived from */
		offer?: string | null;

		/** The publisher for the plan from the marketplace image the custom image is derived from */
		publisher?: string | null;
	}

	/** Properties for plan on a custom image. */
	export interface CustomImagePropertiesFromPlanFormProperties {

		/** The id of the plan, equivalent to name of the plan */
		id: FormControl<string | null | undefined>,

		/** The offer for the plan from the marketplace image the custom image is derived from */
		offer: FormControl<string | null | undefined>,

		/** The publisher for the plan from the marketplace image the custom image is derived from */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFromPlanFormGroup() {
		return new FormGroup<CustomImagePropertiesFromPlanFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Storage information about the data disks present in the custom image */
	export interface DataDiskStorageTypeInfo {

		/** Disk Lun */
		lun?: string | null;

		/** Disk Storage Type */
		storageType?: AttachNewDataDiskOptionsDiskType | null;
	}

	/** Storage information about the data disks present in the custom image */
	export interface DataDiskStorageTypeInfoFormProperties {

		/** Disk Lun */
		lun: FormControl<string | null | undefined>,

		/** Disk Storage Type */
		storageType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,
	}
	export function CreateDataDiskStorageTypeInfoFormGroup() {
		return new FormGroup<DataDiskStorageTypeInfoFormProperties>({
			lun: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
		});

	}


	/** Properties for creating a custom image from a VHD. */
	export interface CustomImagePropertiesCustom {

		/** The image name. */
		imageName?: string | null;

		/**
		 * The OS type of the custom image (i.e. Windows, Linux)
		 * Required
		 */
		osType: CustomImagePropertiesCustomOsType;

		/** Indicates whether sysprep has been run on the VHD. */
		sysPrep?: boolean | null;
	}

	/** Properties for creating a custom image from a VHD. */
	export interface CustomImagePropertiesCustomFormProperties {

		/** The image name. */
		imageName: FormControl<string | null | undefined>,

		/**
		 * The OS type of the custom image (i.e. Windows, Linux)
		 * Required
		 */
		osType: FormControl<CustomImagePropertiesCustomOsType | null | undefined>,

		/** Indicates whether sysprep has been run on the VHD. */
		sysPrep: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomImagePropertiesCustomFormGroup() {
		return new FormGroup<CustomImagePropertiesCustomFormProperties>({
			imageName: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<CustomImagePropertiesCustomOsType | null | undefined>(undefined, [Validators.required]),
			sysPrep: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CustomImagePropertiesCustomOsType { Windows = 'Windows', Linux = 'Linux', None = 'None' }


	/** Properties for creating a custom image from a virtual machine. */
	export interface CustomImagePropertiesFromVm {

		/** Information about a Linux OS. */
		linuxOsInfo?: LinuxOsInfo;

		/** The source vm identifier. */
		sourceVmId?: string | null;

		/** Information about a Windows OS. */
		windowsOsInfo?: WindowsOsInfo;
	}

	/** Properties for creating a custom image from a virtual machine. */
	export interface CustomImagePropertiesFromVmFormProperties {

		/** The source vm identifier. */
		sourceVmId: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFromVmFormGroup() {
		return new FormGroup<CustomImagePropertiesFromVmFormProperties>({
			sourceVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Linux OS. */
	export interface LinuxOsInfo {

		/** The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). */
		linuxOsState?: LinuxOsInfoLinuxOsState | null;
	}

	/** Information about a Linux OS. */
	export interface LinuxOsInfoFormProperties {

		/** The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). */
		linuxOsState: FormControl<LinuxOsInfoLinuxOsState | null | undefined>,
	}
	export function CreateLinuxOsInfoFormGroup() {
		return new FormGroup<LinuxOsInfoFormProperties>({
			linuxOsState: new FormControl<LinuxOsInfoLinuxOsState | null | undefined>(undefined),
		});

	}

	export enum LinuxOsInfoLinuxOsState { NonDeprovisioned = 'NonDeprovisioned', DeprovisionRequested = 'DeprovisionRequested', DeprovisionApplied = 'DeprovisionApplied' }


	/** Information about a Windows OS. */
	export interface WindowsOsInfo {

		/** The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). */
		windowsOsState?: WindowsOsInfoWindowsOsState | null;
	}

	/** Information about a Windows OS. */
	export interface WindowsOsInfoFormProperties {

		/** The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). */
		windowsOsState: FormControl<WindowsOsInfoWindowsOsState | null | undefined>,
	}
	export function CreateWindowsOsInfoFormGroup() {
		return new FormGroup<WindowsOsInfoFormProperties>({
			windowsOsState: new FormControl<WindowsOsInfoWindowsOsState | null | undefined>(undefined),
		});

	}

	export enum WindowsOsInfoWindowsOsState { NonSysprepped = 'NonSysprepped', SysprepRequested = 'SysprepRequested', SysprepApplied = 'SysprepApplied' }


	/** A custom image. */
	export interface CustomImageFragment {

		/** Properties of a custom image. */
		properties?: CustomImagePropertiesFragment;
	}

	/** A custom image. */
	export interface CustomImageFragmentFormProperties {
	}
	export function CreateCustomImageFragmentFormGroup() {
		return new FormGroup<CustomImageFragmentFormProperties>({
		});

	}


	/** Properties of a custom image. */
	export interface CustomImagePropertiesFragment {

		/** The author of the custom image. */
		author?: string | null;

		/** Properties for plan on a custom image. */
		customImagePlan?: CustomImagePropertiesFromPlanFragment;

		/** Storage information about the data disks present in the custom image */
		dataDiskStorageInfo?: Array<DataDiskStorageTypeInfoFragment>;

		/** The description of the custom image. */
		description?: string | null;

		/** Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment */
		isPlanAuthorized?: boolean | null;

		/** The Managed Image Id backing the custom image. */
		managedImageId?: string | null;

		/** The Managed Snapshot Id backing the custom image. */
		managedSnapshotId?: string | null;

		/** Properties for creating a custom image from a VHD. */
		vhd?: CustomImagePropertiesCustomFragment;

		/** Properties for creating a custom image from a virtual machine. */
		vm?: CustomImagePropertiesFromVmFragment;
	}

	/** Properties of a custom image. */
	export interface CustomImagePropertiesFragmentFormProperties {

		/** The author of the custom image. */
		author: FormControl<string | null | undefined>,

		/** The description of the custom image. */
		description: FormControl<string | null | undefined>,

		/** Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment */
		isPlanAuthorized: FormControl<boolean | null | undefined>,

		/** The Managed Image Id backing the custom image. */
		managedImageId: FormControl<string | null | undefined>,

		/** The Managed Snapshot Id backing the custom image. */
		managedSnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFragmentFormGroup() {
		return new FormGroup<CustomImagePropertiesFragmentFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isPlanAuthorized: new FormControl<boolean | null | undefined>(undefined),
			managedImageId: new FormControl<string | null | undefined>(undefined),
			managedSnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for plan on a custom image. */
	export interface CustomImagePropertiesFromPlanFragment {

		/** The id of the plan, equivalent to name of the plan */
		id?: string | null;

		/** The offer for the plan from the marketplace image the custom image is derived from */
		offer?: string | null;

		/** The publisher for the plan from the marketplace image the custom image is derived from */
		publisher?: string | null;
	}

	/** Properties for plan on a custom image. */
	export interface CustomImagePropertiesFromPlanFragmentFormProperties {

		/** The id of the plan, equivalent to name of the plan */
		id: FormControl<string | null | undefined>,

		/** The offer for the plan from the marketplace image the custom image is derived from */
		offer: FormControl<string | null | undefined>,

		/** The publisher for the plan from the marketplace image the custom image is derived from */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFromPlanFragmentFormGroup() {
		return new FormGroup<CustomImagePropertiesFromPlanFragmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Storage information about the data disks present in the custom image */
	export interface DataDiskStorageTypeInfoFragment {

		/** Disk Lun */
		lun?: string | null;

		/** Disk Storage Type */
		storageType?: AttachNewDataDiskOptionsDiskType | null;
	}

	/** Storage information about the data disks present in the custom image */
	export interface DataDiskStorageTypeInfoFragmentFormProperties {

		/** Disk Lun */
		lun: FormControl<string | null | undefined>,

		/** Disk Storage Type */
		storageType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,
	}
	export function CreateDataDiskStorageTypeInfoFragmentFormGroup() {
		return new FormGroup<DataDiskStorageTypeInfoFragmentFormProperties>({
			lun: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
		});

	}


	/** Properties for creating a custom image from a VHD. */
	export interface CustomImagePropertiesCustomFragment {

		/** The image name. */
		imageName?: string | null;

		/** The OS type of the custom image (i.e. Windows, Linux) */
		osType?: CustomImagePropertiesCustomOsType | null;

		/** Indicates whether sysprep has been run on the VHD. */
		sysPrep?: boolean | null;
	}

	/** Properties for creating a custom image from a VHD. */
	export interface CustomImagePropertiesCustomFragmentFormProperties {

		/** The image name. */
		imageName: FormControl<string | null | undefined>,

		/** The OS type of the custom image (i.e. Windows, Linux) */
		osType: FormControl<CustomImagePropertiesCustomOsType | null | undefined>,

		/** Indicates whether sysprep has been run on the VHD. */
		sysPrep: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomImagePropertiesCustomFragmentFormGroup() {
		return new FormGroup<CustomImagePropertiesCustomFragmentFormProperties>({
			imageName: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<CustomImagePropertiesCustomOsType | null | undefined>(undefined),
			sysPrep: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties for creating a custom image from a virtual machine. */
	export interface CustomImagePropertiesFromVmFragment {

		/** Information about a Linux OS. */
		linuxOsInfo?: LinuxOsInfoFragment;

		/** The source vm identifier. */
		sourceVmId?: string | null;

		/** Information about a Windows OS. */
		windowsOsInfo?: WindowsOsInfoFragment;
	}

	/** Properties for creating a custom image from a virtual machine. */
	export interface CustomImagePropertiesFromVmFragmentFormProperties {

		/** The source vm identifier. */
		sourceVmId: FormControl<string | null | undefined>,
	}
	export function CreateCustomImagePropertiesFromVmFragmentFormGroup() {
		return new FormGroup<CustomImagePropertiesFromVmFragmentFormProperties>({
			sourceVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Linux OS. */
	export interface LinuxOsInfoFragment {

		/** The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). */
		linuxOsState?: LinuxOsInfoLinuxOsState | null;
	}

	/** Information about a Linux OS. */
	export interface LinuxOsInfoFragmentFormProperties {

		/** The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). */
		linuxOsState: FormControl<LinuxOsInfoLinuxOsState | null | undefined>,
	}
	export function CreateLinuxOsInfoFragmentFormGroup() {
		return new FormGroup<LinuxOsInfoFragmentFormProperties>({
			linuxOsState: new FormControl<LinuxOsInfoLinuxOsState | null | undefined>(undefined),
		});

	}


	/** Information about a Windows OS. */
	export interface WindowsOsInfoFragment {

		/** The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). */
		windowsOsState?: WindowsOsInfoWindowsOsState | null;
	}

	/** Information about a Windows OS. */
	export interface WindowsOsInfoFragmentFormProperties {

		/** The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). */
		windowsOsState: FormControl<WindowsOsInfoWindowsOsState | null | undefined>,
	}
	export function CreateWindowsOsInfoFragmentFormGroup() {
		return new FormGroup<WindowsOsInfoFragmentFormProperties>({
			windowsOsState: new FormControl<WindowsOsInfoWindowsOsState | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface CustomImageList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<CustomImage>;
	}

	/** The response of a list operation. */
	export interface CustomImageListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCustomImageListFormGroup() {
		return new FormGroup<CustomImageListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for adding a new or existing data disk to a virtual machine. */
	export interface DataDiskProperties {

		/** Properties to attach new disk to the Virtual Machine. */
		attachNewDataDiskOptions?: AttachNewDataDiskOptions;

		/** Specifies the existing lab disk id to attach to virtual machine. */
		existingLabDiskId?: string | null;

		/** Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching?: DataDiskPropertiesHostCaching | null;
	}

	/** Request body for adding a new or existing data disk to a virtual machine. */
	export interface DataDiskPropertiesFormProperties {

		/** Specifies the existing lab disk id to attach to virtual machine. */
		existingLabDiskId: FormControl<string | null | undefined>,

		/** Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching: FormControl<DataDiskPropertiesHostCaching | null | undefined>,
	}
	export function CreateDataDiskPropertiesFormGroup() {
		return new FormGroup<DataDiskPropertiesFormProperties>({
			existingLabDiskId: new FormControl<string | null | undefined>(undefined),
			hostCaching: new FormControl<DataDiskPropertiesHostCaching | null | undefined>(undefined),
		});

	}

	export enum DataDiskPropertiesHostCaching { None = 'None', ReadOnly = 'ReadOnly', ReadWrite = 'ReadWrite' }


	/** Request body for adding a new or existing data disk to a virtual machine. */
	export interface DataDiskPropertiesFragment {

		/** Properties to attach new disk to the Virtual Machine. */
		attachNewDataDiskOptions?: AttachNewDataDiskOptionsFragment;

		/** Specifies the existing lab disk id to attach to virtual machine. */
		existingLabDiskId?: string | null;

		/** Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching?: DataDiskPropertiesHostCaching | null;
	}

	/** Request body for adding a new or existing data disk to a virtual machine. */
	export interface DataDiskPropertiesFragmentFormProperties {

		/** Specifies the existing lab disk id to attach to virtual machine. */
		existingLabDiskId: FormControl<string | null | undefined>,

		/** Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching: FormControl<DataDiskPropertiesHostCaching | null | undefined>,
	}
	export function CreateDataDiskPropertiesFragmentFormGroup() {
		return new FormGroup<DataDiskPropertiesFragmentFormProperties>({
			existingLabDiskId: new FormControl<string | null | undefined>(undefined),
			hostCaching: new FormControl<DataDiskPropertiesHostCaching | null | undefined>(undefined),
		});

	}


	/** Request body for detaching data disk from a virtual machine. */
	export interface DetachDataDiskProperties {

		/** Specifies the disk resource ID to detach from virtual machine. */
		existingLabDiskId?: string | null;
	}

	/** Request body for detaching data disk from a virtual machine. */
	export interface DetachDataDiskPropertiesFormProperties {

		/** Specifies the disk resource ID to detach from virtual machine. */
		existingLabDiskId: FormControl<string | null | undefined>,
	}
	export function CreateDetachDataDiskPropertiesFormGroup() {
		return new FormGroup<DetachDataDiskPropertiesFormProperties>({
			existingLabDiskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the disk to detach. */
	export interface DetachDiskProperties {

		/** The resource ID of the Lab VM to which the disk is attached. */
		leasedByLabVmId?: string | null;
	}

	/** Properties of the disk to detach. */
	export interface DetachDiskPropertiesFormProperties {

		/** The resource ID of the Lab VM to which the disk is attached. */
		leasedByLabVmId: FormControl<string | null | undefined>,
	}
	export function CreateDetachDiskPropertiesFormGroup() {
		return new FormGroup<DetachDiskPropertiesFormProperties>({
			leasedByLabVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Disk. */
	export interface Disk {

		/**
		 * Properties of a disk.
		 * Required
		 */
		properties: DiskProperties;
	}

	/** A Disk. */
	export interface DiskFormProperties {
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
		});

	}


	/** Properties of a disk. */
	export interface DiskProperties {

		/** The creation date of the disk. */
		createdDate?: Date | null;

		/** When backed by a blob, the name of the VHD blob without extension. */
		diskBlobName?: string | null;

		/**
		 * The size of the disk in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType?: AttachNewDataDiskOptionsDiskType | null;

		/** When backed by a blob, the URI of underlying blob. */
		diskUri?: string | null;

		/** The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching?: string | null;

		/** The resource ID of the VM to which this disk is leased. */
		leasedByLabVmId?: string | null;

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a disk. */
	export interface DiskPropertiesFormProperties {

		/** The creation date of the disk. */
		createdDate: FormControl<Date | null | undefined>,

		/** When backed by a blob, the name of the VHD blob without extension. */
		diskBlobName: FormControl<string | null | undefined>,

		/**
		 * The size of the disk in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,

		/** When backed by a blob, the URI of underlying blob. */
		diskUri: FormControl<string | null | undefined>,

		/** The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching: FormControl<string | null | undefined>,

		/** The resource ID of the VM to which this disk is leased. */
		leasedByLabVmId: FormControl<string | null | undefined>,

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDiskPropertiesFormGroup() {
		return new FormGroup<DiskPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			diskBlobName: new FormControl<string | null | undefined>(undefined),
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
			diskUri: new FormControl<string | null | undefined>(undefined),
			hostCaching: new FormControl<string | null | undefined>(undefined),
			leasedByLabVmId: new FormControl<string | null | undefined>(undefined),
			managedDiskId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Disk. */
	export interface DiskFragment {

		/** Properties of a disk. */
		properties?: DiskPropertiesFragment;
	}

	/** A Disk. */
	export interface DiskFragmentFormProperties {
	}
	export function CreateDiskFragmentFormGroup() {
		return new FormGroup<DiskFragmentFormProperties>({
		});

	}


	/** Properties of a disk. */
	export interface DiskPropertiesFragment {

		/** When backed by a blob, the name of the VHD blob without extension. */
		diskBlobName?: string | null;

		/**
		 * The size of the disk in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB?: number | null;

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType?: AttachNewDataDiskOptionsDiskType | null;

		/** When backed by a blob, the URI of underlying blob. */
		diskUri?: string | null;

		/** The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching?: string | null;

		/** The resource ID of the VM to which this disk is leased. */
		leasedByLabVmId?: string | null;

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId?: string | null;
	}

	/** Properties of a disk. */
	export interface DiskPropertiesFragmentFormProperties {

		/** When backed by a blob, the name of the VHD blob without extension. */
		diskBlobName: FormControl<string | null | undefined>,

		/**
		 * The size of the disk in GibiBytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGiB: FormControl<number | null | undefined>,

		/** The storage type for the disk (i.e. Standard, Premium). */
		diskType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,

		/** When backed by a blob, the URI of underlying blob. */
		diskUri: FormControl<string | null | undefined>,

		/** The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite). */
		hostCaching: FormControl<string | null | undefined>,

		/** The resource ID of the VM to which this disk is leased. */
		leasedByLabVmId: FormControl<string | null | undefined>,

		/** When backed by managed disk, this is the ID of the compute disk resource. */
		managedDiskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskPropertiesFragmentFormGroup() {
		return new FormGroup<DiskPropertiesFragmentFormProperties>({
			diskBlobName: new FormControl<string | null | undefined>(undefined),
			diskSizeGiB: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
			diskUri: new FormControl<string | null | undefined>(undefined),
			hostCaching: new FormControl<string | null | undefined>(undefined),
			leasedByLabVmId: new FormControl<string | null | undefined>(undefined),
			managedDiskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface DiskList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Disk>;
	}

	/** The response of a list operation. */
	export interface DiskListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskListFormGroup() {
		return new FormGroup<DiskListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment, which is essentially an ARM template deployment. */
	export interface DtlEnvironment {

		/**
		 * Properties of an environment.
		 * Required
		 */
		properties: EnvironmentProperties;
	}

	/** An environment, which is essentially an ARM template deployment. */
	export interface DtlEnvironmentFormProperties {
	}
	export function CreateDtlEnvironmentFormGroup() {
		return new FormGroup<DtlEnvironmentFormProperties>({
		});

	}


	/** Properties of an environment. */
	export interface EnvironmentProperties {

		/** The display name of the Azure Resource Manager template that produced the environment. */
		armTemplateDisplayName?: string | null;

		/** The creator of the environment. */
		createdByUser?: string | null;

		/** Properties of an environment deployment. */
		deploymentProperties?: EnvironmentDeploymentProperties;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The identifier of the resource group containing the environment's resources. */
		resourceGroupId?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of an environment. */
	export interface EnvironmentPropertiesFormProperties {

		/** The display name of the Azure Resource Manager template that produced the environment. */
		armTemplateDisplayName: FormControl<string | null | undefined>,

		/** The creator of the environment. */
		createdByUser: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The identifier of the resource group containing the environment's resources. */
		resourceGroupId: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentPropertiesFormGroup() {
		return new FormGroup<EnvironmentPropertiesFormProperties>({
			armTemplateDisplayName: new FormControl<string | null | undefined>(undefined),
			createdByUser: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an environment deployment. */
	export interface EnvironmentDeploymentProperties {

		/** The Azure Resource Manager template's identifier. */
		armTemplateId?: string | null;

		/** The parameters of the Azure Resource Manager template. */
		parameters?: Array<ArmTemplateParameterProperties>;
	}

	/** Properties of an environment deployment. */
	export interface EnvironmentDeploymentPropertiesFormProperties {

		/** The Azure Resource Manager template's identifier. */
		armTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDeploymentPropertiesFormGroup() {
		return new FormGroup<EnvironmentDeploymentPropertiesFormProperties>({
			armTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment, which is essentially an ARM template deployment. */
	export interface DtlEnvironmentFragment {

		/** Properties of an environment. */
		properties?: EnvironmentPropertiesFragment;
	}

	/** An environment, which is essentially an ARM template deployment. */
	export interface DtlEnvironmentFragmentFormProperties {
	}
	export function CreateDtlEnvironmentFragmentFormGroup() {
		return new FormGroup<DtlEnvironmentFragmentFormProperties>({
		});

	}


	/** Properties of an environment. */
	export interface EnvironmentPropertiesFragment {

		/** The display name of the Azure Resource Manager template that produced the environment. */
		armTemplateDisplayName?: string | null;

		/** Properties of an environment deployment. */
		deploymentProperties?: EnvironmentDeploymentPropertiesFragment;
	}

	/** Properties of an environment. */
	export interface EnvironmentPropertiesFragmentFormProperties {

		/** The display name of the Azure Resource Manager template that produced the environment. */
		armTemplateDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentPropertiesFragmentFormGroup() {
		return new FormGroup<EnvironmentPropertiesFragmentFormProperties>({
			armTemplateDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an environment deployment. */
	export interface EnvironmentDeploymentPropertiesFragment {

		/** The Azure Resource Manager template's identifier. */
		armTemplateId?: string | null;

		/** The parameters of the Azure Resource Manager template. */
		parameters?: Array<ArmTemplateParameterPropertiesFragment>;
	}

	/** Properties of an environment deployment. */
	export interface EnvironmentDeploymentPropertiesFragmentFormProperties {

		/** The Azure Resource Manager template's identifier. */
		armTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDeploymentPropertiesFragmentFormGroup() {
		return new FormGroup<EnvironmentDeploymentPropertiesFragmentFormProperties>({
			armTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface DtlEnvironmentList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<DtlEnvironment>;
	}

	/** The response of a list operation. */
	export interface DtlEnvironmentListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDtlEnvironmentListFormGroup() {
		return new FormGroup<DtlEnvironmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for evaluating a policy set. */
	export interface EvaluatePoliciesProperties {

		/** The fact data. */
		factData?: string | null;

		/** The fact name. */
		factName?: string | null;

		/** The user for which policies will be evaluated */
		userObjectId?: string | null;

		/** The value offset. */
		valueOffset?: string | null;
	}

	/** Properties for evaluating a policy set. */
	export interface EvaluatePoliciesPropertiesFormProperties {

		/** The fact data. */
		factData: FormControl<string | null | undefined>,

		/** The fact name. */
		factName: FormControl<string | null | undefined>,

		/** The user for which policies will be evaluated */
		userObjectId: FormControl<string | null | undefined>,

		/** The value offset. */
		valueOffset: FormControl<string | null | undefined>,
	}
	export function CreateEvaluatePoliciesPropertiesFormGroup() {
		return new FormGroup<EvaluatePoliciesPropertiesFormProperties>({
			factData: new FormControl<string | null | undefined>(undefined),
			factName: new FormControl<string | null | undefined>(undefined),
			userObjectId: new FormControl<string | null | undefined>(undefined),
			valueOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for evaluating a policy set. */
	export interface EvaluatePoliciesRequest {

		/** Policies to evaluate. */
		policies?: Array<EvaluatePoliciesProperties>;
	}

	/** Request body for evaluating a policy set. */
	export interface EvaluatePoliciesRequestFormProperties {
	}
	export function CreateEvaluatePoliciesRequestFormGroup() {
		return new FormGroup<EvaluatePoliciesRequestFormProperties>({
		});

	}


	/** Response body for evaluating a policy set. */
	export interface EvaluatePoliciesResponse {

		/** Results of evaluating a policy set. */
		results?: Array<PolicySetResult>;
	}

	/** Response body for evaluating a policy set. */
	export interface EvaluatePoliciesResponseFormProperties {
	}
	export function CreateEvaluatePoliciesResponseFormGroup() {
		return new FormGroup<EvaluatePoliciesResponseFormProperties>({
		});

	}


	/** Result of a policy set evaluation. */
	export interface PolicySetResult {

		/** A value indicating whether this policy set evaluation has discovered violations. */
		hasError?: boolean | null;

		/** The list of policy violations. */
		policyViolations?: Array<PolicyViolation>;
	}

	/** Result of a policy set evaluation. */
	export interface PolicySetResultFormProperties {

		/** A value indicating whether this policy set evaluation has discovered violations. */
		hasError: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicySetResultFormGroup() {
		return new FormGroup<PolicySetResultFormProperties>({
			hasError: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Policy violation. */
	export interface PolicyViolation {

		/** The code of the policy violation. */
		code?: string | null;

		/** The message of the policy violation. */
		message?: string | null;
	}

	/** Policy violation. */
	export interface PolicyViolationFormProperties {

		/** The code of the policy violation. */
		code: FormControl<string | null | undefined>,

		/** The message of the policy violation. */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePolicyViolationFormGroup() {
		return new FormGroup<PolicyViolationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event to be notified for. */
	export interface Event {

		/** The event type for which this notification is enabled (i.e. AutoShutdown, Cost) */
		eventName?: EventEventName | null;
	}

	/** An event to be notified for. */
	export interface EventFormProperties {

		/** The event type for which this notification is enabled (i.e. AutoShutdown, Cost) */
		eventName: FormControl<EventEventName | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventName: new FormControl<EventEventName | null | undefined>(undefined),
		});

	}

	export enum EventEventName { AutoShutdown = 'AutoShutdown', Cost = 'Cost' }


	/** An event to be notified for. */
	export interface EventFragment {

		/** The event type for which this notification is enabled (i.e. AutoShutdown, Cost) */
		eventName?: EventEventName | null;
	}

	/** An event to be notified for. */
	export interface EventFragmentFormProperties {

		/** The event type for which this notification is enabled (i.e. AutoShutdown, Cost) */
		eventName: FormControl<EventEventName | null | undefined>,
	}
	export function CreateEventFragmentFormGroup() {
		return new FormGroup<EventFragmentFormProperties>({
			eventName: new FormControl<EventEventName | null | undefined>(undefined),
		});

	}


	/** The parameters of the export operation. */
	export interface ExportResourceUsageParameters {

		/** The blob storage absolute sas uri with write permission to the container which the usage data needs to be uploaded to. */
		blobStorageAbsoluteSasUri?: string | null;

		/** The start time of the usage. If not provided, usage will be reported since the beginning of data collection. */
		usageStartDate?: Date | null;
	}

	/** The parameters of the export operation. */
	export interface ExportResourceUsageParametersFormProperties {

		/** The blob storage absolute sas uri with write permission to the container which the usage data needs to be uploaded to. */
		blobStorageAbsoluteSasUri: FormControl<string | null | undefined>,

		/** The start time of the usage. If not provided, usage will be reported since the beginning of data collection. */
		usageStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateExportResourceUsageParametersFormGroup() {
		return new FormGroup<ExportResourceUsageParametersFormProperties>({
			blobStorageAbsoluteSasUri: new FormControl<string | null | undefined>(undefined),
			usageStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Subnet information as returned by the Microsoft.Network API. */
	export interface ExternalSubnet {

		/** Gets or sets the identifier. */
		id?: string | null;

		/** Gets or sets the name. */
		name?: string | null;
	}

	/** Subnet information as returned by the Microsoft.Network API. */
	export interface ExternalSubnetFormProperties {

		/** Gets or sets the identifier. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExternalSubnetFormGroup() {
		return new FormGroup<ExternalSubnetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subnet information as returned by the Microsoft.Network API. */
	export interface ExternalSubnetFragment {

		/** Gets or sets the identifier. */
		id?: string | null;

		/** Gets or sets the name. */
		name?: string | null;
	}

	/** Subnet information as returned by the Microsoft.Network API. */
	export interface ExternalSubnetFragmentFormProperties {

		/** Gets or sets the identifier. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExternalSubnetFragmentFormGroup() {
		return new FormGroup<ExternalSubnetFragmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A formula for creating a VM, specifying an image base and other parameters */
	export interface Formula {

		/**
		 * Properties of a formula.
		 * Required
		 */
		properties: FormulaProperties;
	}

	/** A formula for creating a VM, specifying an image base and other parameters */
	export interface FormulaFormProperties {
	}
	export function CreateFormulaFormGroup() {
		return new FormGroup<FormulaFormProperties>({
		});

	}


	/** Properties of a formula. */
	export interface FormulaProperties {

		/** The author of the formula. */
		author?: string | null;

		/** The creation date of the formula. */
		creationDate?: Date | null;

		/** The description of the formula. */
		description?: string | null;

		/** Properties for creating a virtual machine. */
		formulaContent?: LabVirtualMachineCreationParameter;

		/** The OS type of the formula. */
		osType?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** Information about a VM from which a formula is to be created. */
		vm?: FormulaPropertiesFromVm;
	}

	/** Properties of a formula. */
	export interface FormulaPropertiesFormProperties {

		/** The author of the formula. */
		author: FormControl<string | null | undefined>,

		/** The creation date of the formula. */
		creationDate: FormControl<Date | null | undefined>,

		/** The description of the formula. */
		description: FormControl<string | null | undefined>,

		/** The OS type of the formula. */
		osType: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateFormulaPropertiesFormGroup() {
		return new FormGroup<FormulaPropertiesFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for creating a virtual machine. */
	export interface LabVirtualMachineCreationParameter {

		/** The location of the new virtual machine or environment */
		location?: string | null;

		/** The name of the virtual machine or environment */
		name?: string | null;

		/** Properties for virtual machine creation. */
		properties?: LabVirtualMachineCreationParameterProperties;

		/** The tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Properties for creating a virtual machine. */
	export interface LabVirtualMachineCreationParameterFormProperties {

		/** The location of the new virtual machine or environment */
		location: FormControl<string | null | undefined>,

		/** The name of the virtual machine or environment */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLabVirtualMachineCreationParameterFormGroup() {
		return new FormGroup<LabVirtualMachineCreationParameterFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties for virtual machine creation. */
	export interface LabVirtualMachineCreationParameterProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim?: boolean | null;

		/** Properties of an artifact deployment. */
		artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;

		/** The artifacts to be installed on the virtual machine. */
		artifacts?: Array<ArtifactInstallProperties>;

		/** Parameters for creating multiple virtual machines as a single action. */
		bulkCreationParameters?: BulkCreationParameters;

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId?: string | null;

		/** The email address of creator of the virtual machine. */
		createdByUser?: string | null;

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId?: string | null;

		/** The creation date of the virtual machine. */
		createdDate?: Date | null;

		/** The custom image identifier of the virtual machine. */
		customImageId?: string | null;

		/** New or existing data disks to attach to the virtual machine after creation */
		dataDiskParameters?: Array<DataDiskProperties>;

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress?: boolean | null;

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId?: string | null;

		/** The expiration date for VM. */
		expirationDate?: Date | null;

		/** The fully-qualified domain name of the virtual machine. */
		fqdn?: string | null;

		/** The reference information for an Azure Marketplace image. */
		galleryImageReference?: GalleryImageReference;

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey?: boolean | null;

		/** The lab subnet name of the virtual machine. */
		labSubnetName?: string | null;

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId?: string | null;

		/** Last known compute power state captured in DTL */
		lastKnownPowerState?: string | null;

		/** Properties of a network interface. */
		networkInterface?: NetworkInterfaceProperties;

		/** The notes of the virtual machine. */
		notes?: string | null;

		/** The OS type of the virtual machine. */
		osType?: string | null;

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId?: string | null;

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName?: string | null;

		/** The password of the virtual machine administrator. */
		password?: string | null;

		/** The id of the plan associated with the virtual machine image */
		planId?: string | null;

		/** Virtual Machine schedules to be created */
		scheduleParameters?: Array<ScheduleCreationParameter>;

		/** The size of the virtual machine. */
		size?: string | null;

		/** The SSH key of the virtual machine administrator. */
		sshKey?: string | null;

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType?: string | null;

		/** The user name of the virtual machine. */
		userName?: string | null;

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource?: LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null;
	}

	/** Properties for virtual machine creation. */
	export interface LabVirtualMachineCreationParameterPropertiesFormProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim: FormControl<boolean | null | undefined>,

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId: FormControl<string | null | undefined>,

		/** The email address of creator of the virtual machine. */
		createdByUser: FormControl<string | null | undefined>,

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId: FormControl<string | null | undefined>,

		/** The creation date of the virtual machine. */
		createdDate: FormControl<Date | null | undefined>,

		/** The custom image identifier of the virtual machine. */
		customImageId: FormControl<string | null | undefined>,

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress: FormControl<boolean | null | undefined>,

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId: FormControl<string | null | undefined>,

		/** The expiration date for VM. */
		expirationDate: FormControl<Date | null | undefined>,

		/** The fully-qualified domain name of the virtual machine. */
		fqdn: FormControl<string | null | undefined>,

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey: FormControl<boolean | null | undefined>,

		/** The lab subnet name of the virtual machine. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId: FormControl<string | null | undefined>,

		/** Last known compute power state captured in DTL */
		lastKnownPowerState: FormControl<string | null | undefined>,

		/** The notes of the virtual machine. */
		notes: FormControl<string | null | undefined>,

		/** The OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId: FormControl<string | null | undefined>,

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName: FormControl<string | null | undefined>,

		/** The password of the virtual machine administrator. */
		password: FormControl<string | null | undefined>,

		/** The id of the plan associated with the virtual machine image */
		planId: FormControl<string | null | undefined>,

		/** The size of the virtual machine. */
		size: FormControl<string | null | undefined>,

		/** The SSH key of the virtual machine administrator. */
		sshKey: FormControl<string | null | undefined>,

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType: FormControl<string | null | undefined>,

		/** The user name of the virtual machine. */
		userName: FormControl<string | null | undefined>,

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource: FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>,
	}
	export function CreateLabVirtualMachineCreationParameterPropertiesFormGroup() {
		return new FormGroup<LabVirtualMachineCreationParameterPropertiesFormProperties>({
			allowClaim: new FormControl<boolean | null | undefined>(undefined),
			computeId: new FormControl<string | null | undefined>(undefined),
			createdByUser: new FormControl<string | null | undefined>(undefined),
			createdByUserId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customImageId: new FormControl<string | null | undefined>(undefined),
			disallowPublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			isAuthenticationWithSshKey: new FormControl<boolean | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			labVirtualNetworkId: new FormControl<string | null | undefined>(undefined),
			lastKnownPowerState: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			ownerObjectId: new FormControl<string | null | undefined>(undefined),
			ownerUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			sshKey: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			virtualMachineCreationSource: new FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>(undefined),
		});

	}


	/** The reference information for an Azure Marketplace image. */
	export interface GalleryImageReference {

		/** The offer of the gallery image. */
		offer?: string | null;

		/** The OS type of the gallery image. */
		osType?: string | null;

		/** The publisher of the gallery image. */
		publisher?: string | null;

		/** The SKU of the gallery image. */
		sku?: string | null;

		/** The version of the gallery image. */
		version?: string | null;
	}

	/** The reference information for an Azure Marketplace image. */
	export interface GalleryImageReferenceFormProperties {

		/** The offer of the gallery image. */
		offer: FormControl<string | null | undefined>,

		/** The OS type of the gallery image. */
		osType: FormControl<string | null | undefined>,

		/** The publisher of the gallery image. */
		publisher: FormControl<string | null | undefined>,

		/** The SKU of the gallery image. */
		sku: FormControl<string | null | undefined>,

		/** The version of the gallery image. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageReferenceFormGroup() {
		return new FormGroup<GalleryImageReferenceFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a network interface. */
	export interface NetworkInterfaceProperties {

		/** The DNS name. */
		dnsName?: string | null;

		/** The private IP address. */
		privateIpAddress?: string | null;

		/** The public IP address. */
		publicIpAddress?: string | null;

		/** The resource ID of the public IP address. */
		publicIpAddressId?: string | null;

		/** The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). */
		rdpAuthority?: string | null;

		/** Properties of a virtual machine that determine how it is connected to a load balancer. */
		sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfiguration;

		/** The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. */
		sshAuthority?: string | null;

		/** The resource ID of the sub net. */
		subnetId?: string | null;

		/** The resource ID of the virtual network. */
		virtualNetworkId?: string | null;
	}

	/** Properties of a network interface. */
	export interface NetworkInterfacePropertiesFormProperties {

		/** The DNS name. */
		dnsName: FormControl<string | null | undefined>,

		/** The private IP address. */
		privateIpAddress: FormControl<string | null | undefined>,

		/** The public IP address. */
		publicIpAddress: FormControl<string | null | undefined>,

		/** The resource ID of the public IP address. */
		publicIpAddressId: FormControl<string | null | undefined>,

		/** The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). */
		rdpAuthority: FormControl<string | null | undefined>,

		/** The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. */
		sshAuthority: FormControl<string | null | undefined>,

		/** The resource ID of the sub net. */
		subnetId: FormControl<string | null | undefined>,

		/** The resource ID of the virtual network. */
		virtualNetworkId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfacePropertiesFormGroup() {
		return new FormGroup<NetworkInterfacePropertiesFormProperties>({
			dnsName: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddressId: new FormControl<string | null | undefined>(undefined),
			rdpAuthority: new FormControl<string | null | undefined>(undefined),
			sshAuthority: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			virtualNetworkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a virtual machine that determine how it is connected to a load balancer. */
	export interface SharedPublicIpAddressConfiguration {

		/** The incoming NAT rules */
		inboundNatRules?: Array<InboundNatRule>;
	}

	/** Properties of a virtual machine that determine how it is connected to a load balancer. */
	export interface SharedPublicIpAddressConfigurationFormProperties {
	}
	export function CreateSharedPublicIpAddressConfigurationFormGroup() {
		return new FormGroup<SharedPublicIpAddressConfigurationFormProperties>({
		});

	}


	/** A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer. */
	export interface InboundNatRule {

		/**
		 * The port to which the external traffic will be redirected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort?: number | null;

		/**
		 * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPort?: number | null;

		/** The transport protocol for the endpoint. */
		transportProtocol?: InboundNatRuleTransportProtocol | null;
	}

	/** A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer. */
	export interface InboundNatRuleFormProperties {

		/**
		 * The port to which the external traffic will be redirected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPort: FormControl<number | null | undefined>,

		/** The transport protocol for the endpoint. */
		transportProtocol: FormControl<InboundNatRuleTransportProtocol | null | undefined>,
	}
	export function CreateInboundNatRuleFormGroup() {
		return new FormGroup<InboundNatRuleFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined),
			frontendPort: new FormControl<number | null | undefined>(undefined),
			transportProtocol: new FormControl<InboundNatRuleTransportProtocol | null | undefined>(undefined),
		});

	}

	export enum InboundNatRuleTransportProtocol { Tcp = 'Tcp', Udp = 'Udp' }


	/** Properties for creating a schedule. */
	export interface ScheduleCreationParameter {

		/** The location of the new virtual machine or environment */
		location?: string | null;

		/** The name of the virtual machine or environment */
		name?: string | null;

		/** Properties for schedule creation. */
		properties?: ScheduleCreationParameterProperties;

		/** The tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Properties for creating a schedule. */
	export interface ScheduleCreationParameterFormProperties {

		/** The location of the new virtual machine or environment */
		location: FormControl<string | null | undefined>,

		/** The name of the virtual machine or environment */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateScheduleCreationParameterFormGroup() {
		return new FormGroup<ScheduleCreationParameterFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties for schedule creation. */
	export interface ScheduleCreationParameterProperties {

		/** Properties of a daily schedule. */
		dailyRecurrence?: DayDetails;

		/** Properties of an hourly schedule. */
		hourlyRecurrence?: HourDetails;

		/** Notification settings for a schedule. */
		notificationSettings?: NotificationSettings;

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status?: NotificationSettingsStatus | null;

		/** The resource ID to which the schedule belongs */
		targetResourceId?: string | null;

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType?: string | null;

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId?: string | null;

		/** Properties of a weekly schedule. */
		weeklyRecurrence?: WeekDetails;
	}

	/** Properties for schedule creation. */
	export interface ScheduleCreationParameterPropertiesFormProperties {

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The resource ID to which the schedule belongs */
		targetResourceId: FormControl<string | null | undefined>,

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType: FormControl<string | null | undefined>,

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateScheduleCreationParameterPropertiesFormGroup() {
		return new FormGroup<ScheduleCreationParameterPropertiesFormProperties>({
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<string | null | undefined>(undefined),
			timeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource { FromCustomImage = 'FromCustomImage', FromGalleryImage = 'FromGalleryImage', FromSharedGalleryImage = 'FromSharedGalleryImage' }


	/** Information about a VM from which a formula is to be created. */
	export interface FormulaPropertiesFromVm {

		/** The identifier of the VM from which a formula is to be created. */
		labVmId?: string | null;
	}

	/** Information about a VM from which a formula is to be created. */
	export interface FormulaPropertiesFromVmFormProperties {

		/** The identifier of the VM from which a formula is to be created. */
		labVmId: FormControl<string | null | undefined>,
	}
	export function CreateFormulaPropertiesFromVmFormGroup() {
		return new FormGroup<FormulaPropertiesFromVmFormProperties>({
			labVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A formula for creating a VM, specifying an image base and other parameters */
	export interface FormulaFragment {

		/** Properties of a formula. */
		properties?: FormulaPropertiesFragment;
	}

	/** A formula for creating a VM, specifying an image base and other parameters */
	export interface FormulaFragmentFormProperties {
	}
	export function CreateFormulaFragmentFormGroup() {
		return new FormGroup<FormulaFragmentFormProperties>({
		});

	}


	/** Properties of a formula. */
	export interface FormulaPropertiesFragment {

		/** The author of the formula. */
		author?: string | null;

		/** The description of the formula. */
		description?: string | null;

		/** Properties for creating a virtual machine. */
		formulaContent?: LabVirtualMachineCreationParameterFragment;

		/** The OS type of the formula. */
		osType?: string | null;

		/** Information about a VM from which a formula is to be created. */
		vm?: FormulaPropertiesFromVmFragment;
	}

	/** Properties of a formula. */
	export interface FormulaPropertiesFragmentFormProperties {

		/** The author of the formula. */
		author: FormControl<string | null | undefined>,

		/** The description of the formula. */
		description: FormControl<string | null | undefined>,

		/** The OS type of the formula. */
		osType: FormControl<string | null | undefined>,
	}
	export function CreateFormulaPropertiesFragmentFormGroup() {
		return new FormGroup<FormulaPropertiesFragmentFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for creating a virtual machine. */
	export interface LabVirtualMachineCreationParameterFragment {

		/** The location of the new virtual machine or environment */
		location?: string | null;

		/** The name of the virtual machine or environment */
		name?: string | null;

		/** Properties for virtual machine creation. */
		properties?: LabVirtualMachineCreationParameterPropertiesFragment;

		/** The tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Properties for creating a virtual machine. */
	export interface LabVirtualMachineCreationParameterFragmentFormProperties {

		/** The location of the new virtual machine or environment */
		location: FormControl<string | null | undefined>,

		/** The name of the virtual machine or environment */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLabVirtualMachineCreationParameterFragmentFormGroup() {
		return new FormGroup<LabVirtualMachineCreationParameterFragmentFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties for virtual machine creation. */
	export interface LabVirtualMachineCreationParameterPropertiesFragment {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim?: boolean | null;

		/** Properties of an artifact deployment. */
		artifactDeploymentStatus?: ArtifactDeploymentStatusPropertiesFragment;

		/** The artifacts to be installed on the virtual machine. */
		artifacts?: Array<ArtifactInstallPropertiesFragment>;

		/** Parameters for creating multiple virtual machines as a single action. */
		bulkCreationParameters?: BulkCreationParametersFragment;

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId?: string | null;

		/** The email address of creator of the virtual machine. */
		createdByUser?: string | null;

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId?: string | null;

		/** The creation date of the virtual machine. */
		createdDate?: Date | null;

		/** The custom image identifier of the virtual machine. */
		customImageId?: string | null;

		/** New or existing data disks to attach to the virtual machine after creation */
		dataDiskParameters?: Array<DataDiskPropertiesFragment>;

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress?: boolean | null;

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId?: string | null;

		/** The expiration date for VM. */
		expirationDate?: Date | null;

		/** The fully-qualified domain name of the virtual machine. */
		fqdn?: string | null;

		/** The reference information for an Azure Marketplace image. */
		galleryImageReference?: GalleryImageReferenceFragment;

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey?: boolean | null;

		/** The lab subnet name of the virtual machine. */
		labSubnetName?: string | null;

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId?: string | null;

		/** Last known compute power state captured in DTL */
		lastKnownPowerState?: string | null;

		/** Properties of a network interface. */
		networkInterface?: NetworkInterfacePropertiesFragment;

		/** The notes of the virtual machine. */
		notes?: string | null;

		/** The OS type of the virtual machine. */
		osType?: string | null;

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId?: string | null;

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName?: string | null;

		/** The password of the virtual machine administrator. */
		password?: string | null;

		/** The id of the plan associated with the virtual machine image */
		planId?: string | null;

		/** Virtual Machine schedules to be created */
		scheduleParameters?: Array<ScheduleCreationParameterFragment>;

		/** The size of the virtual machine. */
		size?: string | null;

		/** The SSH key of the virtual machine administrator. */
		sshKey?: string | null;

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType?: string | null;

		/** The user name of the virtual machine. */
		userName?: string | null;

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource?: LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null;
	}

	/** Properties for virtual machine creation. */
	export interface LabVirtualMachineCreationParameterPropertiesFragmentFormProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim: FormControl<boolean | null | undefined>,

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId: FormControl<string | null | undefined>,

		/** The email address of creator of the virtual machine. */
		createdByUser: FormControl<string | null | undefined>,

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId: FormControl<string | null | undefined>,

		/** The creation date of the virtual machine. */
		createdDate: FormControl<Date | null | undefined>,

		/** The custom image identifier of the virtual machine. */
		customImageId: FormControl<string | null | undefined>,

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress: FormControl<boolean | null | undefined>,

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId: FormControl<string | null | undefined>,

		/** The expiration date for VM. */
		expirationDate: FormControl<Date | null | undefined>,

		/** The fully-qualified domain name of the virtual machine. */
		fqdn: FormControl<string | null | undefined>,

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey: FormControl<boolean | null | undefined>,

		/** The lab subnet name of the virtual machine. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId: FormControl<string | null | undefined>,

		/** Last known compute power state captured in DTL */
		lastKnownPowerState: FormControl<string | null | undefined>,

		/** The notes of the virtual machine. */
		notes: FormControl<string | null | undefined>,

		/** The OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId: FormControl<string | null | undefined>,

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName: FormControl<string | null | undefined>,

		/** The password of the virtual machine administrator. */
		password: FormControl<string | null | undefined>,

		/** The id of the plan associated with the virtual machine image */
		planId: FormControl<string | null | undefined>,

		/** The size of the virtual machine. */
		size: FormControl<string | null | undefined>,

		/** The SSH key of the virtual machine administrator. */
		sshKey: FormControl<string | null | undefined>,

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType: FormControl<string | null | undefined>,

		/** The user name of the virtual machine. */
		userName: FormControl<string | null | undefined>,

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource: FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>,
	}
	export function CreateLabVirtualMachineCreationParameterPropertiesFragmentFormGroup() {
		return new FormGroup<LabVirtualMachineCreationParameterPropertiesFragmentFormProperties>({
			allowClaim: new FormControl<boolean | null | undefined>(undefined),
			computeId: new FormControl<string | null | undefined>(undefined),
			createdByUser: new FormControl<string | null | undefined>(undefined),
			createdByUserId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customImageId: new FormControl<string | null | undefined>(undefined),
			disallowPublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			isAuthenticationWithSshKey: new FormControl<boolean | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			labVirtualNetworkId: new FormControl<string | null | undefined>(undefined),
			lastKnownPowerState: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			ownerObjectId: new FormControl<string | null | undefined>(undefined),
			ownerUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			sshKey: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			virtualMachineCreationSource: new FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>(undefined),
		});

	}


	/** The reference information for an Azure Marketplace image. */
	export interface GalleryImageReferenceFragment {

		/** The offer of the gallery image. */
		offer?: string | null;

		/** The OS type of the gallery image. */
		osType?: string | null;

		/** The publisher of the gallery image. */
		publisher?: string | null;

		/** The SKU of the gallery image. */
		sku?: string | null;

		/** The version of the gallery image. */
		version?: string | null;
	}

	/** The reference information for an Azure Marketplace image. */
	export interface GalleryImageReferenceFragmentFormProperties {

		/** The offer of the gallery image. */
		offer: FormControl<string | null | undefined>,

		/** The OS type of the gallery image. */
		osType: FormControl<string | null | undefined>,

		/** The publisher of the gallery image. */
		publisher: FormControl<string | null | undefined>,

		/** The SKU of the gallery image. */
		sku: FormControl<string | null | undefined>,

		/** The version of the gallery image. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageReferenceFragmentFormGroup() {
		return new FormGroup<GalleryImageReferenceFragmentFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a network interface. */
	export interface NetworkInterfacePropertiesFragment {

		/** The DNS name. */
		dnsName?: string | null;

		/** The private IP address. */
		privateIpAddress?: string | null;

		/** The public IP address. */
		publicIpAddress?: string | null;

		/** The resource ID of the public IP address. */
		publicIpAddressId?: string | null;

		/** The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). */
		rdpAuthority?: string | null;

		/** Properties of a virtual machine that determine how it is connected to a load balancer. */
		sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfigurationFragment;

		/** The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. */
		sshAuthority?: string | null;

		/** The resource ID of the sub net. */
		subnetId?: string | null;

		/** The resource ID of the virtual network. */
		virtualNetworkId?: string | null;
	}

	/** Properties of a network interface. */
	export interface NetworkInterfacePropertiesFragmentFormProperties {

		/** The DNS name. */
		dnsName: FormControl<string | null | undefined>,

		/** The private IP address. */
		privateIpAddress: FormControl<string | null | undefined>,

		/** The public IP address. */
		publicIpAddress: FormControl<string | null | undefined>,

		/** The resource ID of the public IP address. */
		publicIpAddressId: FormControl<string | null | undefined>,

		/** The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). */
		rdpAuthority: FormControl<string | null | undefined>,

		/** The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. */
		sshAuthority: FormControl<string | null | undefined>,

		/** The resource ID of the sub net. */
		subnetId: FormControl<string | null | undefined>,

		/** The resource ID of the virtual network. */
		virtualNetworkId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfacePropertiesFragmentFormGroup() {
		return new FormGroup<NetworkInterfacePropertiesFragmentFormProperties>({
			dnsName: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddressId: new FormControl<string | null | undefined>(undefined),
			rdpAuthority: new FormControl<string | null | undefined>(undefined),
			sshAuthority: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			virtualNetworkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a virtual machine that determine how it is connected to a load balancer. */
	export interface SharedPublicIpAddressConfigurationFragment {

		/** The incoming NAT rules */
		inboundNatRules?: Array<InboundNatRuleFragment>;
	}

	/** Properties of a virtual machine that determine how it is connected to a load balancer. */
	export interface SharedPublicIpAddressConfigurationFragmentFormProperties {
	}
	export function CreateSharedPublicIpAddressConfigurationFragmentFormGroup() {
		return new FormGroup<SharedPublicIpAddressConfigurationFragmentFormProperties>({
		});

	}


	/** A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer. */
	export interface InboundNatRuleFragment {

		/**
		 * The port to which the external traffic will be redirected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort?: number | null;

		/**
		 * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPort?: number | null;

		/** The transport protocol for the endpoint. */
		transportProtocol?: InboundNatRuleTransportProtocol | null;
	}

	/** A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer. */
	export interface InboundNatRuleFragmentFormProperties {

		/**
		 * The port to which the external traffic will be redirected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPort: FormControl<number | null | undefined>,

		/** The transport protocol for the endpoint. */
		transportProtocol: FormControl<InboundNatRuleTransportProtocol | null | undefined>,
	}
	export function CreateInboundNatRuleFragmentFormGroup() {
		return new FormGroup<InboundNatRuleFragmentFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined),
			frontendPort: new FormControl<number | null | undefined>(undefined),
			transportProtocol: new FormControl<InboundNatRuleTransportProtocol | null | undefined>(undefined),
		});

	}


	/** Properties for creating a schedule. */
	export interface ScheduleCreationParameterFragment {

		/** The location of the new virtual machine or environment */
		location?: string | null;

		/** The name of the virtual machine or environment */
		name?: string | null;

		/** Properties for schedule creation. */
		properties?: ScheduleCreationParameterPropertiesFragment;

		/** The tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Properties for creating a schedule. */
	export interface ScheduleCreationParameterFragmentFormProperties {

		/** The location of the new virtual machine or environment */
		location: FormControl<string | null | undefined>,

		/** The name of the virtual machine or environment */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateScheduleCreationParameterFragmentFormGroup() {
		return new FormGroup<ScheduleCreationParameterFragmentFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties for schedule creation. */
	export interface ScheduleCreationParameterPropertiesFragment {

		/** Properties of a daily schedule. */
		dailyRecurrence?: DayDetailsFragment;

		/** Properties of an hourly schedule. */
		hourlyRecurrence?: HourDetailsFragment;

		/** Notification settings for a schedule. */
		notificationSettings?: NotificationSettingsFragment;

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status?: NotificationSettingsStatus | null;

		/** The resource ID to which the schedule belongs */
		targetResourceId?: string | null;

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType?: string | null;

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId?: string | null;

		/** Properties of a weekly schedule. */
		weeklyRecurrence?: WeekDetailsFragment;
	}

	/** Properties for schedule creation. */
	export interface ScheduleCreationParameterPropertiesFragmentFormProperties {

		/** The status of the schedule (i.e. Enabled, Disabled) */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The resource ID to which the schedule belongs */
		targetResourceId: FormControl<string | null | undefined>,

		/** The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). */
		taskType: FormControl<string | null | undefined>,

		/** The time zone ID (e.g. Pacific Standard time). */
		timeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateScheduleCreationParameterPropertiesFragmentFormGroup() {
		return new FormGroup<ScheduleCreationParameterPropertiesFragmentFormProperties>({
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<string | null | undefined>(undefined),
			timeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a VM from which a formula is to be created. */
	export interface FormulaPropertiesFromVmFragment {

		/** The identifier of the VM from which a formula is to be created. */
		labVmId?: string | null;
	}

	/** Information about a VM from which a formula is to be created. */
	export interface FormulaPropertiesFromVmFragmentFormProperties {

		/** The identifier of the VM from which a formula is to be created. */
		labVmId: FormControl<string | null | undefined>,
	}
	export function CreateFormulaPropertiesFromVmFragmentFormGroup() {
		return new FormGroup<FormulaPropertiesFromVmFragmentFormProperties>({
			labVmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface FormulaList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Formula>;
	}

	/** The response of a list operation. */
	export interface FormulaListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFormulaListFormGroup() {
		return new FormGroup<FormulaListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A gallery image. */
	export interface GalleryImage {

		/**
		 * Properties of a gallery image.
		 * Required
		 */
		properties: GalleryImageProperties;
	}

	/** A gallery image. */
	export interface GalleryImageFormProperties {
	}
	export function CreateGalleryImageFormGroup() {
		return new FormGroup<GalleryImageFormProperties>({
		});

	}


	/** Properties of a gallery image. */
	export interface GalleryImageProperties {

		/** The author of the gallery image. */
		author?: string | null;

		/** The creation date of the gallery image. */
		createdDate?: Date | null;

		/** The description of the gallery image. */
		description?: string | null;

		/** Indicates whether this gallery image is enabled. */
		enabled?: boolean | null;

		/** The icon of the gallery image. */
		icon?: string | null;

		/** The reference information for an Azure Marketplace image. */
		imageReference?: GalleryImageReference;

		/** Indicates if the plan has been authorized for programmatic deployment. */
		isPlanAuthorized?: boolean | null;

		/** The third party plan that applies to this image */
		planId?: string | null;
	}

	/** Properties of a gallery image. */
	export interface GalleryImagePropertiesFormProperties {

		/** The author of the gallery image. */
		author: FormControl<string | null | undefined>,

		/** The creation date of the gallery image. */
		createdDate: FormControl<Date | null | undefined>,

		/** The description of the gallery image. */
		description: FormControl<string | null | undefined>,

		/** Indicates whether this gallery image is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The icon of the gallery image. */
		icon: FormControl<string | null | undefined>,

		/** Indicates if the plan has been authorized for programmatic deployment. */
		isPlanAuthorized: FormControl<boolean | null | undefined>,

		/** The third party plan that applies to this image */
		planId: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImagePropertiesFormGroup() {
		return new FormGroup<GalleryImagePropertiesFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			isPlanAuthorized: new FormControl<boolean | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface GalleryImageList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<GalleryImage>;
	}

	/** The response of a list operation. */
	export interface GalleryImageListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageListFormGroup() {
		return new FormGroup<GalleryImageListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for generating an ARM template for deploying artifacts. */
	export interface GenerateArmTemplateRequest {

		/** Options for uploading the files for the artifact. UploadFilesAndGenerateSasTokens is the default value. */
		fileUploadOptions?: GenerateArmTemplateRequestFileUploadOptions | null;

		/** The location of the virtual machine. */
		location?: string | null;

		/** The parameters of the ARM template. */
		parameters?: Array<ParameterInfo>;

		/** The resource name of the virtual machine. */
		virtualMachineName?: string | null;
	}

	/** Parameters for generating an ARM template for deploying artifacts. */
	export interface GenerateArmTemplateRequestFormProperties {

		/** Options for uploading the files for the artifact. UploadFilesAndGenerateSasTokens is the default value. */
		fileUploadOptions: FormControl<GenerateArmTemplateRequestFileUploadOptions | null | undefined>,

		/** The location of the virtual machine. */
		location: FormControl<string | null | undefined>,

		/** The resource name of the virtual machine. */
		virtualMachineName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateArmTemplateRequestFormGroup() {
		return new FormGroup<GenerateArmTemplateRequestFormProperties>({
			fileUploadOptions: new FormControl<GenerateArmTemplateRequestFileUploadOptions | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			virtualMachineName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GenerateArmTemplateRequestFileUploadOptions { UploadFilesAndGenerateSasTokens = 'UploadFilesAndGenerateSasTokens', None = 'None' }


	/** Information about an artifact's parameter. */
	export interface ParameterInfo {

		/** The name of the artifact parameter. */
		name?: string | null;

		/** The value of the artifact parameter. */
		value?: string | null;
	}

	/** Information about an artifact's parameter. */
	export interface ParameterInfoFormProperties {

		/** The name of the artifact parameter. */
		name: FormControl<string | null | undefined>,

		/** The value of the artifact parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateParameterInfoFormGroup() {
		return new FormGroup<ParameterInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for generating an upload URI. */
	export interface GenerateUploadUriParameter {

		/** The blob name of the upload URI. */
		blobName?: string | null;
	}

	/** Properties for generating an upload URI. */
	export interface GenerateUploadUriParameterFormProperties {

		/** The blob name of the upload URI. */
		blobName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateUploadUriParameterFormGroup() {
		return new FormGroup<GenerateUploadUriParameterFormProperties>({
			blobName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response body for generating an upload URI. */
	export interface GenerateUploadUriResponse {

		/** The upload URI for the VHD. */
		uploadUri?: string | null;
	}

	/** Response body for generating an upload URI. */
	export interface GenerateUploadUriResponseFormProperties {

		/** The upload URI for the VHD. */
		uploadUri: FormControl<string | null | undefined>,
	}
	export function CreateGenerateUploadUriResponseFormGroup() {
		return new FormGroup<GenerateUploadUriResponseFormProperties>({
			uploadUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a managed identity */
	export interface IdentityProperties {

		/** The client secret URL of the identity. */
		clientSecretUrl?: string | null;

		/** The principal id of resource identity. */
		principalId?: string | null;

		/** The tenant identifier of resource. */
		tenantId?: string | null;

		/** Managed identity. */
		type?: string | null;
	}

	/** Properties of a managed identity */
	export interface IdentityPropertiesFormProperties {

		/** The client secret URL of the identity. */
		clientSecretUrl: FormControl<string | null | undefined>,

		/** The principal id of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant identifier of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** Managed identity. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPropertiesFormGroup() {
		return new FormGroup<IdentityPropertiesFormProperties>({
			clientSecretUrl: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This represents the payload required to import a virtual machine from a different lab into the current one */
	export interface ImportLabVirtualMachineRequest {

		/** The name of the virtual machine in the destination lab */
		destinationVirtualMachineName?: string | null;

		/** The full resource ID of the virtual machine to be imported. */
		sourceVirtualMachineResourceId?: string | null;
	}

	/** This represents the payload required to import a virtual machine from a different lab into the current one */
	export interface ImportLabVirtualMachineRequestFormProperties {

		/** The name of the virtual machine in the destination lab */
		destinationVirtualMachineName: FormControl<string | null | undefined>,

		/** The full resource ID of the virtual machine to be imported. */
		sourceVirtualMachineResourceId: FormControl<string | null | undefined>,
	}
	export function CreateImportLabVirtualMachineRequestFormGroup() {
		return new FormGroup<ImportLabVirtualMachineRequestFormProperties>({
			destinationVirtualMachineName: new FormControl<string | null | undefined>(undefined),
			sourceVirtualMachineResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lab. */
	export interface Lab {

		/** Properties of a lab. */
		properties?: LabProperties;
	}

	/** A lab. */
	export interface LabFormProperties {
	}
	export function CreateLabFormGroup() {
		return new FormGroup<LabFormProperties>({
		});

	}


	/** Properties of a lab. */
	export interface LabProperties {

		/** Properties of a lab's announcement banner */
		announcement?: LabAnnouncementProperties;

		/** The lab's artifact storage account. */
		artifactsStorageAccount?: string | null;

		/** The creation date of the lab. */
		createdDate?: Date | null;

		/** The lab's default premium storage account. */
		defaultPremiumStorageAccount?: string | null;

		/** The lab's default storage account. */
		defaultStorageAccount?: string | null;

		/** The access rights to be granted to the user when provisioning an environment */
		environmentPermission?: LabPropertiesEnvironmentPermission | null;

		/** Extended properties of the lab used for experimental features */
		extendedProperties?: {[id: string]: string };

		/** Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. */
		labStorageType?: AttachNewDataDiskOptionsDiskType | null;

		/** The load balancer used to for lab VMs that use shared IP address. */
		loadBalancerId?: string | null;

		/** The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. */
		mandatoryArtifactsResourceIdsLinux?: Array<string>;

		/** The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. */
		mandatoryArtifactsResourceIdsWindows?: Array<string>;

		/** The Network Security Group attached to the lab VMs Network interfaces to restrict open ports. */
		networkSecurityGroupId?: string | null;

		/** The lab's premium data disk storage account. */
		premiumDataDiskStorageAccount?: string | null;

		/**
		 * The setting to enable usage of premium data disks.
		 * When its value is 'Enabled', creation of standard or premium data disks is allowed.
		 * When its value is 'Disabled', only creation of standard data disks is allowed.
		 */
		premiumDataDisks?: LabPropertiesPremiumDataDisks | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The public IP address for the lab's load balancer. */
		publicIpId?: string | null;

		/** Properties of a lab's support banner */
		support?: LabSupportProperties;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** The lab's Key vault. */
		vaultName?: string | null;

		/** The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null. */
		vmCreationResourceGroup?: string | null;
	}

	/** Properties of a lab. */
	export interface LabPropertiesFormProperties {

		/** The lab's artifact storage account. */
		artifactsStorageAccount: FormControl<string | null | undefined>,

		/** The creation date of the lab. */
		createdDate: FormControl<Date | null | undefined>,

		/** The lab's default premium storage account. */
		defaultPremiumStorageAccount: FormControl<string | null | undefined>,

		/** The lab's default storage account. */
		defaultStorageAccount: FormControl<string | null | undefined>,

		/** The access rights to be granted to the user when provisioning an environment */
		environmentPermission: FormControl<LabPropertiesEnvironmentPermission | null | undefined>,

		/** Extended properties of the lab used for experimental features */
		extendedProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. */
		labStorageType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,

		/** The load balancer used to for lab VMs that use shared IP address. */
		loadBalancerId: FormControl<string | null | undefined>,

		/** The Network Security Group attached to the lab VMs Network interfaces to restrict open ports. */
		networkSecurityGroupId: FormControl<string | null | undefined>,

		/** The lab's premium data disk storage account. */
		premiumDataDiskStorageAccount: FormControl<string | null | undefined>,

		/**
		 * The setting to enable usage of premium data disks.
		 * When its value is 'Enabled', creation of standard or premium data disks is allowed.
		 * When its value is 'Disabled', only creation of standard data disks is allowed.
		 */
		premiumDataDisks: FormControl<LabPropertiesPremiumDataDisks | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The public IP address for the lab's load balancer. */
		publicIpId: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,

		/** The lab's Key vault. */
		vaultName: FormControl<string | null | undefined>,

		/** The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null. */
		vmCreationResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateLabPropertiesFormGroup() {
		return new FormGroup<LabPropertiesFormProperties>({
			artifactsStorageAccount: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			defaultPremiumStorageAccount: new FormControl<string | null | undefined>(undefined),
			defaultStorageAccount: new FormControl<string | null | undefined>(undefined),
			environmentPermission: new FormControl<LabPropertiesEnvironmentPermission | null | undefined>(undefined),
			extendedProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			labStorageType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
			loadBalancerId: new FormControl<string | null | undefined>(undefined),
			networkSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			premiumDataDiskStorageAccount: new FormControl<string | null | undefined>(undefined),
			premiumDataDisks: new FormControl<LabPropertiesPremiumDataDisks | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publicIpId: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			vmCreationResourceGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a lab's announcement banner */
	export interface LabAnnouncementProperties {

		/** Is the lab announcement active/enabled at this time? */
		enabled?: NotificationSettingsStatus | null;

		/** The time at which the announcement expires (null for never) */
		expirationDate?: Date | null;

		/** Has this announcement expired? */
		expired?: boolean | null;

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The plain text title for the lab announcement */
		title?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a lab's announcement banner */
	export interface LabAnnouncementPropertiesFormProperties {

		/** Is the lab announcement active/enabled at this time? */
		enabled: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The time at which the announcement expires (null for never) */
		expirationDate: FormControl<Date | null | undefined>,

		/** Has this announcement expired? */
		expired: FormControl<boolean | null | undefined>,

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The plain text title for the lab announcement */
		title: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateLabAnnouncementPropertiesFormGroup() {
		return new FormGroup<LabAnnouncementPropertiesFormProperties>({
			enabled: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined),
			markdown: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LabPropertiesEnvironmentPermission { Reader = 'Reader', Contributor = 'Contributor' }

	export enum LabPropertiesPremiumDataDisks { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Properties of a lab's support banner */
	export interface LabSupportProperties {

		/** Is the lab support banner active/enabled at this time? */
		enabled?: NotificationSettingsStatus | null;

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown?: string | null;
	}

	/** Properties of a lab's support banner */
	export interface LabSupportPropertiesFormProperties {

		/** Is the lab support banner active/enabled at this time? */
		enabled: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown: FormControl<string | null | undefined>,
	}
	export function CreateLabSupportPropertiesFormGroup() {
		return new FormGroup<LabSupportPropertiesFormProperties>({
			enabled: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			markdown: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a lab's announcement banner */
	export interface LabAnnouncementPropertiesFragment {

		/** Is the lab announcement active/enabled at this time? */
		enabled?: NotificationSettingsStatus | null;

		/** The time at which the announcement expires (null for never) */
		expirationDate?: Date | null;

		/** Has this announcement expired? */
		expired?: boolean | null;

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown?: string | null;

		/** The plain text title for the lab announcement */
		title?: string | null;
	}

	/** Properties of a lab's announcement banner */
	export interface LabAnnouncementPropertiesFragmentFormProperties {

		/** Is the lab announcement active/enabled at this time? */
		enabled: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The time at which the announcement expires (null for never) */
		expirationDate: FormControl<Date | null | undefined>,

		/** Has this announcement expired? */
		expired: FormControl<boolean | null | undefined>,

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown: FormControl<string | null | undefined>,

		/** The plain text title for the lab announcement */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLabAnnouncementPropertiesFragmentFormGroup() {
		return new FormGroup<LabAnnouncementPropertiesFragmentFormProperties>({
			enabled: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined),
			markdown: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cost item. */
	export interface LabCost {

		/**
		 * Properties of a cost item.
		 * Required
		 */
		properties: LabCostProperties;
	}

	/** A cost item. */
	export interface LabCostFormProperties {
	}
	export function CreateLabCostFormGroup() {
		return new FormGroup<LabCostFormProperties>({
		});

	}


	/** Properties of a cost item. */
	export interface LabCostProperties {

		/** The creation date of the cost. */
		createdDate?: Date | null;

		/** The currency code of the cost. */
		currencyCode?: string | null;

		/** The end time of the cost data. */
		endDateTime?: Date | null;

		/** The lab cost details component of the cost data. */
		labCostDetails?: Array<LabCostDetailsProperties>;

		/** The properties of the cost summary. */
		labCostSummary?: LabCostSummaryProperties;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The resource cost component of the cost data. */
		resourceCosts?: Array<LabResourceCostProperties>;

		/** The start time of the cost data. */
		startDateTime?: Date | null;

		/** Properties of a cost target. */
		targetCost?: TargetCostProperties;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a cost item. */
	export interface LabCostPropertiesFormProperties {

		/** The creation date of the cost. */
		createdDate: FormControl<Date | null | undefined>,

		/** The currency code of the cost. */
		currencyCode: FormControl<string | null | undefined>,

		/** The end time of the cost data. */
		endDateTime: FormControl<Date | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The start time of the cost data. */
		startDateTime: FormControl<Date | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateLabCostPropertiesFormGroup() {
		return new FormGroup<LabCostPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a lab cost item. */
	export interface LabCostDetailsProperties {

		/**
		 * The cost component of the cost item.
		 * Type: double
		 */
		cost?: number | null;

		/** The type of the cost. */
		costType?: LabCostDetailsPropertiesCostType | null;

		/** The date of the cost item. */
		date?: Date | null;
	}

	/** The properties of a lab cost item. */
	export interface LabCostDetailsPropertiesFormProperties {

		/**
		 * The cost component of the cost item.
		 * Type: double
		 */
		cost: FormControl<number | null | undefined>,

		/** The type of the cost. */
		costType: FormControl<LabCostDetailsPropertiesCostType | null | undefined>,

		/** The date of the cost item. */
		date: FormControl<Date | null | undefined>,
	}
	export function CreateLabCostDetailsPropertiesFormGroup() {
		return new FormGroup<LabCostDetailsPropertiesFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			costType: new FormControl<LabCostDetailsPropertiesCostType | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LabCostDetailsPropertiesCostType { Unavailable = 'Unavailable', Reported = 'Reported', Projected = 'Projected' }


	/** The properties of the cost summary. */
	export interface LabCostSummaryProperties {

		/**
		 * The cost component of the cost item.
		 * Type: double
		 */
		estimatedLabCost?: number | null;
	}

	/** The properties of the cost summary. */
	export interface LabCostSummaryPropertiesFormProperties {

		/**
		 * The cost component of the cost item.
		 * Type: double
		 */
		estimatedLabCost: FormControl<number | null | undefined>,
	}
	export function CreateLabCostSummaryPropertiesFormGroup() {
		return new FormGroup<LabCostSummaryPropertiesFormProperties>({
			estimatedLabCost: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The properties of a resource cost item. */
	export interface LabResourceCostProperties {

		/** The ID of the external resource */
		externalResourceId?: string | null;

		/**
		 * The cost component of the resource cost item.
		 * Type: double
		 */
		resourceCost?: number | null;

		/** The ID of the resource */
		resourceId?: string | null;

		/** The owner of the resource (ex. janedoe@microsoft.com) */
		resourceOwner?: string | null;

		/** The category of the resource (ex. Premium_LRS, Standard_DS1) */
		resourcePricingTier?: string | null;

		/** The status of the resource (ex. Active) */
		resourceStatus?: string | null;

		/** The logical resource type (ex. virtualmachine, storageaccount) */
		resourceType?: string | null;

		/** The unique identifier of the resource. */
		resourceUId?: string | null;

		/** The name of the resource. */
		resourcename?: string | null;
	}

	/** The properties of a resource cost item. */
	export interface LabResourceCostPropertiesFormProperties {

		/** The ID of the external resource */
		externalResourceId: FormControl<string | null | undefined>,

		/**
		 * The cost component of the resource cost item.
		 * Type: double
		 */
		resourceCost: FormControl<number | null | undefined>,

		/** The ID of the resource */
		resourceId: FormControl<string | null | undefined>,

		/** The owner of the resource (ex. janedoe@microsoft.com) */
		resourceOwner: FormControl<string | null | undefined>,

		/** The category of the resource (ex. Premium_LRS, Standard_DS1) */
		resourcePricingTier: FormControl<string | null | undefined>,

		/** The status of the resource (ex. Active) */
		resourceStatus: FormControl<string | null | undefined>,

		/** The logical resource type (ex. virtualmachine, storageaccount) */
		resourceType: FormControl<string | null | undefined>,

		/** The unique identifier of the resource. */
		resourceUId: FormControl<string | null | undefined>,

		/** The name of the resource. */
		resourcename: FormControl<string | null | undefined>,
	}
	export function CreateLabResourceCostPropertiesFormGroup() {
		return new FormGroup<LabResourceCostPropertiesFormProperties>({
			externalResourceId: new FormControl<string | null | undefined>(undefined),
			resourceCost: new FormControl<number | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceOwner: new FormControl<string | null | undefined>(undefined),
			resourcePricingTier: new FormControl<string | null | undefined>(undefined),
			resourceStatus: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceUId: new FormControl<string | null | undefined>(undefined),
			resourcename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a cost target. */
	export interface TargetCostProperties {

		/** Cost thresholds. */
		costThresholds?: Array<CostThresholdProperties>;

		/** Reporting cycle end date. */
		cycleEndDateTime?: Date | null;

		/** Reporting cycle start date. */
		cycleStartDateTime?: Date | null;

		/** Reporting cycle type. */
		cycleType?: TargetCostPropertiesCycleType | null;

		/** Target cost status */
		status?: NotificationSettingsStatus | null;

		/**
		 * Lab target cost
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		target?: number | null;
	}

	/** Properties of a cost target. */
	export interface TargetCostPropertiesFormProperties {

		/** Reporting cycle end date. */
		cycleEndDateTime: FormControl<Date | null | undefined>,

		/** Reporting cycle start date. */
		cycleStartDateTime: FormControl<Date | null | undefined>,

		/** Reporting cycle type. */
		cycleType: FormControl<TargetCostPropertiesCycleType | null | undefined>,

		/** Target cost status */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/**
		 * Lab target cost
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		target: FormControl<number | null | undefined>,
	}
	export function CreateTargetCostPropertiesFormGroup() {
		return new FormGroup<TargetCostPropertiesFormProperties>({
			cycleEndDateTime: new FormControl<Date | null | undefined>(undefined),
			cycleStartDateTime: new FormControl<Date | null | undefined>(undefined),
			cycleType: new FormControl<TargetCostPropertiesCycleType | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			target: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TargetCostPropertiesCycleType { CalendarMonth = 'CalendarMonth', Custom = 'Custom' }


	/** A lab. */
	export interface LabFragment {

		/** Properties of a lab. */
		properties?: LabPropertiesFragment;
	}

	/** A lab. */
	export interface LabFragmentFormProperties {
	}
	export function CreateLabFragmentFormGroup() {
		return new FormGroup<LabFragmentFormProperties>({
		});

	}


	/** Properties of a lab. */
	export interface LabPropertiesFragment {

		/** Properties of a lab's announcement banner */
		announcement?: LabAnnouncementPropertiesFragment;

		/** The access rights to be granted to the user when provisioning an environment */
		environmentPermission?: LabPropertiesEnvironmentPermission | null;

		/** Extended properties of the lab used for experimental features */
		extendedProperties?: {[id: string]: string };

		/** Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. */
		labStorageType?: AttachNewDataDiskOptionsDiskType | null;

		/** The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. */
		mandatoryArtifactsResourceIdsLinux?: Array<string>;

		/** The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. */
		mandatoryArtifactsResourceIdsWindows?: Array<string>;

		/**
		 * The setting to enable usage of premium data disks.
		 * When its value is 'Enabled', creation of standard or premium data disks is allowed.
		 * When its value is 'Disabled', only creation of standard data disks is allowed.
		 */
		premiumDataDisks?: LabPropertiesPremiumDataDisks | null;

		/** Properties of a lab's support banner */
		support?: LabSupportPropertiesFragment;
	}

	/** Properties of a lab. */
	export interface LabPropertiesFragmentFormProperties {

		/** The access rights to be granted to the user when provisioning an environment */
		environmentPermission: FormControl<LabPropertiesEnvironmentPermission | null | undefined>,

		/** Extended properties of the lab used for experimental features */
		extendedProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. */
		labStorageType: FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>,

		/**
		 * The setting to enable usage of premium data disks.
		 * When its value is 'Enabled', creation of standard or premium data disks is allowed.
		 * When its value is 'Disabled', only creation of standard data disks is allowed.
		 */
		premiumDataDisks: FormControl<LabPropertiesPremiumDataDisks | null | undefined>,
	}
	export function CreateLabPropertiesFragmentFormGroup() {
		return new FormGroup<LabPropertiesFragmentFormProperties>({
			environmentPermission: new FormControl<LabPropertiesEnvironmentPermission | null | undefined>(undefined),
			extendedProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			labStorageType: new FormControl<AttachNewDataDiskOptionsDiskType | null | undefined>(undefined),
			premiumDataDisks: new FormControl<LabPropertiesPremiumDataDisks | null | undefined>(undefined),
		});

	}


	/** Properties of a lab's support banner */
	export interface LabSupportPropertiesFragment {

		/** Is the lab support banner active/enabled at this time? */
		enabled?: NotificationSettingsStatus | null;

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown?: string | null;
	}

	/** Properties of a lab's support banner */
	export interface LabSupportPropertiesFragmentFormProperties {

		/** Is the lab support banner active/enabled at this time? */
		enabled: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. */
		markdown: FormControl<string | null | undefined>,
	}
	export function CreateLabSupportPropertiesFragmentFormGroup() {
		return new FormGroup<LabSupportPropertiesFragmentFormProperties>({
			enabled: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			markdown: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface LabList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Lab>;
	}

	/** The response of a list operation. */
	export interface LabListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLabListFormGroup() {
		return new FormGroup<LabListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a VHD in the lab. */
	export interface LabVhd {

		/** The URI to the VHD. */
		id?: string | null;
	}

	/** Properties of a VHD in the lab. */
	export interface LabVhdFormProperties {

		/** The URI to the VHD. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLabVhdFormGroup() {
		return new FormGroup<LabVhdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface LabVhdList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<LabVhd>;
	}

	/** The response of a list operation. */
	export interface LabVhdListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLabVhdListFormGroup() {
		return new FormGroup<LabVhdListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual machine. */
	export interface LabVirtualMachine {

		/**
		 * Properties of a virtual machine.
		 * Required
		 */
		properties: LabVirtualMachineProperties;
	}

	/** A virtual machine. */
	export interface LabVirtualMachineFormProperties {
	}
	export function CreateLabVirtualMachineFormGroup() {
		return new FormGroup<LabVirtualMachineFormProperties>({
		});

	}


	/** Properties of a virtual machine. */
	export interface LabVirtualMachineProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim?: boolean | null;

		/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
		applicableSchedule?: ApplicableSchedule;

		/** Properties of an artifact deployment. */
		artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;

		/** The artifacts to be installed on the virtual machine. */
		artifacts?: Array<ArtifactInstallProperties>;

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId?: string | null;

		/** Properties of a virtual machine returned by the Microsoft.Compute API. */
		computeVm?: ComputeVmProperties;

		/** The email address of creator of the virtual machine. */
		createdByUser?: string | null;

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId?: string | null;

		/** The creation date of the virtual machine. */
		createdDate?: Date | null;

		/** The custom image identifier of the virtual machine. */
		customImageId?: string | null;

		/** New or existing data disks to attach to the virtual machine after creation */
		dataDiskParameters?: Array<DataDiskProperties>;

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress?: boolean | null;

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId?: string | null;

		/** The expiration date for VM. */
		expirationDate?: Date | null;

		/** The fully-qualified domain name of the virtual machine. */
		fqdn?: string | null;

		/** The reference information for an Azure Marketplace image. */
		galleryImageReference?: GalleryImageReference;

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey?: boolean | null;

		/** The lab subnet name of the virtual machine. */
		labSubnetName?: string | null;

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId?: string | null;

		/** Last known compute power state captured in DTL */
		lastKnownPowerState?: string | null;

		/** Properties of a network interface. */
		networkInterface?: NetworkInterfaceProperties;

		/** The notes of the virtual machine. */
		notes?: string | null;

		/** The OS type of the virtual machine. */
		osType?: string | null;

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId?: string | null;

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName?: string | null;

		/** The password of the virtual machine administrator. */
		password?: string | null;

		/** The id of the plan associated with the virtual machine image */
		planId?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** Virtual Machine schedules to be created */
		scheduleParameters?: Array<ScheduleCreationParameter>;

		/** The size of the virtual machine. */
		size?: string | null;

		/** The SSH key of the virtual machine administrator. */
		sshKey?: string | null;

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** The user name of the virtual machine. */
		userName?: string | null;

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource?: LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null;
	}

	/** Properties of a virtual machine. */
	export interface LabVirtualMachinePropertiesFormProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim: FormControl<boolean | null | undefined>,

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId: FormControl<string | null | undefined>,

		/** The email address of creator of the virtual machine. */
		createdByUser: FormControl<string | null | undefined>,

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId: FormControl<string | null | undefined>,

		/** The creation date of the virtual machine. */
		createdDate: FormControl<Date | null | undefined>,

		/** The custom image identifier of the virtual machine. */
		customImageId: FormControl<string | null | undefined>,

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress: FormControl<boolean | null | undefined>,

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId: FormControl<string | null | undefined>,

		/** The expiration date for VM. */
		expirationDate: FormControl<Date | null | undefined>,

		/** The fully-qualified domain name of the virtual machine. */
		fqdn: FormControl<string | null | undefined>,

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey: FormControl<boolean | null | undefined>,

		/** The lab subnet name of the virtual machine. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId: FormControl<string | null | undefined>,

		/** Last known compute power state captured in DTL */
		lastKnownPowerState: FormControl<string | null | undefined>,

		/** The notes of the virtual machine. */
		notes: FormControl<string | null | undefined>,

		/** The OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId: FormControl<string | null | undefined>,

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName: FormControl<string | null | undefined>,

		/** The password of the virtual machine administrator. */
		password: FormControl<string | null | undefined>,

		/** The id of the plan associated with the virtual machine image */
		planId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The size of the virtual machine. */
		size: FormControl<string | null | undefined>,

		/** The SSH key of the virtual machine administrator. */
		sshKey: FormControl<string | null | undefined>,

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,

		/** The user name of the virtual machine. */
		userName: FormControl<string | null | undefined>,

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource: FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>,
	}
	export function CreateLabVirtualMachinePropertiesFormGroup() {
		return new FormGroup<LabVirtualMachinePropertiesFormProperties>({
			allowClaim: new FormControl<boolean | null | undefined>(undefined),
			computeId: new FormControl<string | null | undefined>(undefined),
			createdByUser: new FormControl<string | null | undefined>(undefined),
			createdByUserId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customImageId: new FormControl<string | null | undefined>(undefined),
			disallowPublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			isAuthenticationWithSshKey: new FormControl<boolean | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			labVirtualNetworkId: new FormControl<string | null | undefined>(undefined),
			lastKnownPowerState: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			ownerObjectId: new FormControl<string | null | undefined>(undefined),
			ownerUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			sshKey: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			virtualMachineCreationSource: new FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>(undefined),
		});

	}


	/** A virtual machine. */
	export interface LabVirtualMachineFragment {

		/** Properties of a virtual machine. */
		properties?: LabVirtualMachinePropertiesFragment;
	}

	/** A virtual machine. */
	export interface LabVirtualMachineFragmentFormProperties {
	}
	export function CreateLabVirtualMachineFragmentFormGroup() {
		return new FormGroup<LabVirtualMachineFragmentFormProperties>({
		});

	}


	/** Properties of a virtual machine. */
	export interface LabVirtualMachinePropertiesFragment {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim?: boolean | null;

		/** Properties of an artifact deployment. */
		artifactDeploymentStatus?: ArtifactDeploymentStatusPropertiesFragment;

		/** The artifacts to be installed on the virtual machine. */
		artifacts?: Array<ArtifactInstallPropertiesFragment>;

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId?: string | null;

		/** The email address of creator of the virtual machine. */
		createdByUser?: string | null;

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId?: string | null;

		/** The creation date of the virtual machine. */
		createdDate?: Date | null;

		/** The custom image identifier of the virtual machine. */
		customImageId?: string | null;

		/** New or existing data disks to attach to the virtual machine after creation */
		dataDiskParameters?: Array<DataDiskPropertiesFragment>;

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress?: boolean | null;

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId?: string | null;

		/** The expiration date for VM. */
		expirationDate?: Date | null;

		/** The fully-qualified domain name of the virtual machine. */
		fqdn?: string | null;

		/** The reference information for an Azure Marketplace image. */
		galleryImageReference?: GalleryImageReferenceFragment;

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey?: boolean | null;

		/** The lab subnet name of the virtual machine. */
		labSubnetName?: string | null;

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId?: string | null;

		/** Last known compute power state captured in DTL */
		lastKnownPowerState?: string | null;

		/** Properties of a network interface. */
		networkInterface?: NetworkInterfacePropertiesFragment;

		/** The notes of the virtual machine. */
		notes?: string | null;

		/** The OS type of the virtual machine. */
		osType?: string | null;

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId?: string | null;

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName?: string | null;

		/** The password of the virtual machine administrator. */
		password?: string | null;

		/** The id of the plan associated with the virtual machine image */
		planId?: string | null;

		/** Virtual Machine schedules to be created */
		scheduleParameters?: Array<ScheduleCreationParameterFragment>;

		/** The size of the virtual machine. */
		size?: string | null;

		/** The SSH key of the virtual machine administrator. */
		sshKey?: string | null;

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType?: string | null;

		/** The user name of the virtual machine. */
		userName?: string | null;

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource?: LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null;
	}

	/** Properties of a virtual machine. */
	export interface LabVirtualMachinePropertiesFragmentFormProperties {

		/** Indicates whether another user can take ownership of the virtual machine */
		allowClaim: FormControl<boolean | null | undefined>,

		/** The resource identifier (Microsoft.Compute) of the virtual machine. */
		computeId: FormControl<string | null | undefined>,

		/** The email address of creator of the virtual machine. */
		createdByUser: FormControl<string | null | undefined>,

		/** The object identifier of the creator of the virtual machine. */
		createdByUserId: FormControl<string | null | undefined>,

		/** The creation date of the virtual machine. */
		createdDate: FormControl<Date | null | undefined>,

		/** The custom image identifier of the virtual machine. */
		customImageId: FormControl<string | null | undefined>,

		/** Indicates whether the virtual machine is to be created without a public IP address. */
		disallowPublicIpAddress: FormControl<boolean | null | undefined>,

		/** The resource ID of the environment that contains this virtual machine, if any. */
		environmentId: FormControl<string | null | undefined>,

		/** The expiration date for VM. */
		expirationDate: FormControl<Date | null | undefined>,

		/** The fully-qualified domain name of the virtual machine. */
		fqdn: FormControl<string | null | undefined>,

		/** Indicates whether this virtual machine uses an SSH key for authentication. */
		isAuthenticationWithSshKey: FormControl<boolean | null | undefined>,

		/** The lab subnet name of the virtual machine. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The lab virtual network identifier of the virtual machine. */
		labVirtualNetworkId: FormControl<string | null | undefined>,

		/** Last known compute power state captured in DTL */
		lastKnownPowerState: FormControl<string | null | undefined>,

		/** The notes of the virtual machine. */
		notes: FormControl<string | null | undefined>,

		/** The OS type of the virtual machine. */
		osType: FormControl<string | null | undefined>,

		/** The object identifier of the owner of the virtual machine. */
		ownerObjectId: FormControl<string | null | undefined>,

		/** The user principal name of the virtual machine owner. */
		ownerUserPrincipalName: FormControl<string | null | undefined>,

		/** The password of the virtual machine administrator. */
		password: FormControl<string | null | undefined>,

		/** The id of the plan associated with the virtual machine image */
		planId: FormControl<string | null | undefined>,

		/** The size of the virtual machine. */
		size: FormControl<string | null | undefined>,

		/** The SSH key of the virtual machine administrator. */
		sshKey: FormControl<string | null | undefined>,

		/** Storage type to use for virtual machine (i.e. Standard, Premium). */
		storageType: FormControl<string | null | undefined>,

		/** The user name of the virtual machine. */
		userName: FormControl<string | null | undefined>,

		/** Tells source of creation of lab virtual machine. Output property only. */
		virtualMachineCreationSource: FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>,
	}
	export function CreateLabVirtualMachinePropertiesFragmentFormGroup() {
		return new FormGroup<LabVirtualMachinePropertiesFragmentFormProperties>({
			allowClaim: new FormControl<boolean | null | undefined>(undefined),
			computeId: new FormControl<string | null | undefined>(undefined),
			createdByUser: new FormControl<string | null | undefined>(undefined),
			createdByUserId: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customImageId: new FormControl<string | null | undefined>(undefined),
			disallowPublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			isAuthenticationWithSshKey: new FormControl<boolean | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			labVirtualNetworkId: new FormControl<string | null | undefined>(undefined),
			lastKnownPowerState: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			ownerObjectId: new FormControl<string | null | undefined>(undefined),
			ownerUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			sshKey: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			virtualMachineCreationSource: new FormControl<LabVirtualMachineCreationParameterPropertiesVirtualMachineCreationSource | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface LabVirtualMachineList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<LabVirtualMachine>;
	}

	/** The response of a list operation. */
	export interface LabVirtualMachineListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLabVirtualMachineListFormGroup() {
		return new FormGroup<LabVirtualMachineListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification. */
	export interface NotificationChannel {

		/**
		 * Properties of a schedule.
		 * Required
		 */
		properties: NotificationChannelProperties;
	}

	/** A notification. */
	export interface NotificationChannelFormProperties {
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
		});

	}


	/** Properties of a schedule. */
	export interface NotificationChannelProperties {

		/** The creation date of the notification channel. */
		createdDate?: Date | null;

		/** Description of notification. */
		description?: string | null;

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient?: string | null;

		/** The list of event for which this notification is enabled. */
		events?: Array<Event>;

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** The webhook URL to send notifications to. */
		webHookUrl?: string | null;
	}

	/** Properties of a schedule. */
	export interface NotificationChannelPropertiesFormProperties {

		/** The creation date of the notification channel. */
		createdDate: FormControl<Date | null | undefined>,

		/** Description of notification. */
		description: FormControl<string | null | undefined>,

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient: FormControl<string | null | undefined>,

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,

		/** The webhook URL to send notifications to. */
		webHookUrl: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelPropertiesFormGroup() {
		return new FormGroup<NotificationChannelPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			emailRecipient: new FormControl<string | null | undefined>(undefined),
			notificationLocale: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			webHookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification. */
	export interface NotificationChannelFragment {

		/** Properties of a schedule. */
		properties?: NotificationChannelPropertiesFragment;
	}

	/** A notification. */
	export interface NotificationChannelFragmentFormProperties {
	}
	export function CreateNotificationChannelFragmentFormGroup() {
		return new FormGroup<NotificationChannelFragmentFormProperties>({
		});

	}


	/** Properties of a schedule. */
	export interface NotificationChannelPropertiesFragment {

		/** Description of notification. */
		description?: string | null;

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient?: string | null;

		/** The list of event for which this notification is enabled. */
		events?: Array<EventFragment>;

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale?: string | null;

		/** The webhook URL to send notifications to. */
		webHookUrl?: string | null;
	}

	/** Properties of a schedule. */
	export interface NotificationChannelPropertiesFragmentFormProperties {

		/** Description of notification. */
		description: FormControl<string | null | undefined>,

		/** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
		emailRecipient: FormControl<string | null | undefined>,

		/** The locale to use when sending a notification (fallback for unsupported languages is EN). */
		notificationLocale: FormControl<string | null | undefined>,

		/** The webhook URL to send notifications to. */
		webHookUrl: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelPropertiesFragmentFormGroup() {
		return new FormGroup<NotificationChannelPropertiesFragmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			emailRecipient: new FormControl<string | null | undefined>(undefined),
			notificationLocale: new FormControl<string | null | undefined>(undefined),
			webHookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface NotificationChannelList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<NotificationChannel>;
	}

	/** The response of a list operation. */
	export interface NotificationChannelListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelListFormGroup() {
		return new FormGroup<NotificationChannelListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for generating a Notification. */
	export interface NotifyParameters {

		/** The type of event (i.e. AutoShutdown, Cost) */
		eventName?: EventEventName | null;

		/** Properties for the notification in json format. */
		jsonPayload?: string | null;
	}

	/** Properties for generating a Notification. */
	export interface NotifyParametersFormProperties {

		/** The type of event (i.e. AutoShutdown, Cost) */
		eventName: FormControl<EventEventName | null | undefined>,

		/** Properties for the notification in json format. */
		jsonPayload: FormControl<string | null | undefined>,
	}
	export function CreateNotifyParametersFormGroup() {
		return new FormGroup<NotifyParametersFormProperties>({
			eventName: new FormControl<EventEventName | null | undefined>(undefined),
			jsonPayload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error details for the operation in case of a failure. */
	export interface OperationError {

		/** The error code of the operation error. */
		code?: string | null;

		/** The error message of the operation error. */
		message?: string | null;
	}

	/** Error details for the operation in case of a failure. */
	export interface OperationErrorFormProperties {

		/** The error code of the operation error. */
		code: FormControl<string | null | undefined>,

		/** The error message of the operation error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorFormGroup() {
		return new FormGroup<OperationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The REST API operation supported by DevTestLab ResourceProvider. */
	export interface OperationMetadata {

		/** The object that describes the operations */
		display?: OperationMetadataDisplay;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** The REST API operation supported by DevTestLab ResourceProvider. */
	export interface OperationMetadataFormProperties {

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that describes the operations */
	export interface OperationMetadataDisplay {

		/** Friendly name of the operation */
		description?: string | null;

		/** Operation type: read, write, delete, listKeys/action, etc. */
		operation?: string | null;

		/** Friendly name of the resource provider */
		provider?: string | null;

		/** Resource type on which the operation is performed. */
		resource?: string | null;
	}

	/** The object that describes the operations */
	export interface OperationMetadataDisplayFormProperties {

		/** Friendly name of the operation */
		description: FormControl<string | null | undefined>,

		/** Operation type: read, write, delete, listKeys/action, etc. */
		operation: FormControl<string | null | undefined>,

		/** Friendly name of the resource provider */
		provider: FormControl<string | null | undefined>,

		/** Resource type on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataDisplayFormGroup() {
		return new FormGroup<OperationMetadataDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Operation Result */
	export interface OperationResult {

		/** Error details for the operation in case of a failure. */
		error?: OperationError;

		/** The operation status. */
		status?: string | null;

		/** The status code for the operation. */
		statusCode?: OperationResultStatusCode | null;
	}

	/** An Operation Result */
	export interface OperationResultFormProperties {

		/** The operation status. */
		status: FormControl<string | null | undefined>,

		/** The status code for the operation. */
		statusCode: FormControl<OperationResultStatusCode | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<OperationResultStatusCode | null | undefined>(undefined),
		});

	}

	export enum OperationResultStatusCode { Continue = 'Continue', SwitchingProtocols = 'SwitchingProtocols', OK = 'OK', Created = 'Created', Accepted = 'Accepted', NonAuthoritativeInformation = 'NonAuthoritativeInformation', NoContent = 'NoContent', ResetContent = 'ResetContent', PartialContent = 'PartialContent', MultipleChoices = 'MultipleChoices', MovedPermanently = 'MovedPermanently', Redirect = 'Redirect', SeeOther = 'SeeOther', NotModified = 'NotModified', UseProxy = 'UseProxy', Unused = 'Unused', TemporaryRedirect = 'TemporaryRedirect', BadRequest = 'BadRequest', Unauthorized = 'Unauthorized', PaymentRequired = 'PaymentRequired', Forbidden = 'Forbidden', NotFound = 'NotFound', MethodNotAllowed = 'MethodNotAllowed', NotAcceptable = 'NotAcceptable', ProxyAuthenticationRequired = 'ProxyAuthenticationRequired', RequestTimeout = 'RequestTimeout', Conflict = 'Conflict', Gone = 'Gone', LengthRequired = 'LengthRequired', PreconditionFailed = 'PreconditionFailed', RequestEntityTooLarge = 'RequestEntityTooLarge', RequestUriTooLong = 'RequestUriTooLong', UnsupportedMediaType = 'UnsupportedMediaType', RequestedRangeNotSatisfiable = 'RequestedRangeNotSatisfiable', ExpectationFailed = 'ExpectationFailed', UpgradeRequired = 'UpgradeRequired', InternalServerError = 'InternalServerError', NotImplemented = 'NotImplemented', BadGateway = 'BadGateway', ServiceUnavailable = 'ServiceUnavailable', GatewayTimeout = 'GatewayTimeout', HttpVersionNotSupported = 'HttpVersionNotSupported' }


	/** A Policy. */
	export interface Policy {

		/**
		 * Properties of a Policy.
		 * Required
		 */
		properties: PolicyProperties;
	}

	/** A Policy. */
	export interface PolicyFormProperties {
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
		});

	}


	/** Properties of a Policy. */
	export interface PolicyProperties {

		/** The creation date of the policy. */
		createdDate?: Date | null;

		/** The description of the policy. */
		description?: string | null;

		/** The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). */
		evaluatorType?: PolicyPropertiesEvaluatorType | null;

		/** The fact data of the policy. */
		factData?: string | null;

		/** The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. */
		factName?: PolicyPropertiesFactName | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The status of the policy. */
		status?: NotificationSettingsStatus | null;

		/** The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). */
		threshold?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a Policy. */
	export interface PolicyPropertiesFormProperties {

		/** The creation date of the policy. */
		createdDate: FormControl<Date | null | undefined>,

		/** The description of the policy. */
		description: FormControl<string | null | undefined>,

		/** The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). */
		evaluatorType: FormControl<PolicyPropertiesEvaluatorType | null | undefined>,

		/** The fact data of the policy. */
		factData: FormControl<string | null | undefined>,

		/** The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. */
		factName: FormControl<PolicyPropertiesFactName | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The status of the policy. */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). */
		threshold: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreatePolicyPropertiesFormGroup() {
		return new FormGroup<PolicyPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			evaluatorType: new FormControl<PolicyPropertiesEvaluatorType | null | undefined>(undefined),
			factData: new FormControl<string | null | undefined>(undefined),
			factName: new FormControl<PolicyPropertiesFactName | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			threshold: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyPropertiesEvaluatorType { AllowedValuesPolicy = 'AllowedValuesPolicy', MaxValuePolicy = 'MaxValuePolicy' }

	export enum PolicyPropertiesFactName { UserOwnedLabVmCount = 'UserOwnedLabVmCount', UserOwnedLabPremiumVmCount = 'UserOwnedLabPremiumVmCount', LabVmCount = 'LabVmCount', LabPremiumVmCount = 'LabPremiumVmCount', LabVmSize = 'LabVmSize', GalleryImage = 'GalleryImage', UserOwnedLabVmCountInSubnet = 'UserOwnedLabVmCountInSubnet', LabTargetCost = 'LabTargetCost', EnvironmentTemplate = 'EnvironmentTemplate', ScheduleEditPermission = 'ScheduleEditPermission' }


	/** A Policy. */
	export interface PolicyFragment {

		/** Properties of a Policy. */
		properties?: PolicyPropertiesFragment;
	}

	/** A Policy. */
	export interface PolicyFragmentFormProperties {
	}
	export function CreatePolicyFragmentFormGroup() {
		return new FormGroup<PolicyFragmentFormProperties>({
		});

	}


	/** Properties of a Policy. */
	export interface PolicyPropertiesFragment {

		/** The description of the policy. */
		description?: string | null;

		/** The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). */
		evaluatorType?: PolicyPropertiesEvaluatorType | null;

		/** The fact data of the policy. */
		factData?: string | null;

		/** The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. */
		factName?: PolicyPropertiesFactName | null;

		/** The status of the policy. */
		status?: NotificationSettingsStatus | null;

		/** The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). */
		threshold?: string | null;
	}

	/** Properties of a Policy. */
	export interface PolicyPropertiesFragmentFormProperties {

		/** The description of the policy. */
		description: FormControl<string | null | undefined>,

		/** The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). */
		evaluatorType: FormControl<PolicyPropertiesEvaluatorType | null | undefined>,

		/** The fact data of the policy. */
		factData: FormControl<string | null | undefined>,

		/** The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. */
		factName: FormControl<PolicyPropertiesFactName | null | undefined>,

		/** The status of the policy. */
		status: FormControl<NotificationSettingsStatus | null | undefined>,

		/** The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). */
		threshold: FormControl<string | null | undefined>,
	}
	export function CreatePolicyPropertiesFragmentFormGroup() {
		return new FormGroup<PolicyPropertiesFragmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			evaluatorType: new FormControl<PolicyPropertiesEvaluatorType | null | undefined>(undefined),
			factData: new FormControl<string | null | undefined>(undefined),
			factName: new FormControl<PolicyPropertiesFactName | null | undefined>(undefined),
			status: new FormControl<NotificationSettingsStatus | null | undefined>(undefined),
			threshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface PolicyList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Policy>;
	}

	/** The response of a list operation. */
	export interface PolicyListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePolicyListFormGroup() {
		return new FormGroup<PolicyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a network port. */
	export interface Port {

		/**
		 * Backend port of the target virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort?: number | null;

		/** Protocol type of the port. */
		transportProtocol?: InboundNatRuleTransportProtocol | null;
	}

	/** Properties of a network port. */
	export interface PortFormProperties {

		/**
		 * Backend port of the target virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/** Protocol type of the port. */
		transportProtocol: FormControl<InboundNatRuleTransportProtocol | null | undefined>,
	}
	export function CreatePortFormGroup() {
		return new FormGroup<PortFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined),
			transportProtocol: new FormControl<InboundNatRuleTransportProtocol | null | undefined>(undefined),
		});

	}


	/** Properties of a network port. */
	export interface PortFragment {

		/**
		 * Backend port of the target virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort?: number | null;

		/** Protocol type of the port. */
		transportProtocol?: InboundNatRuleTransportProtocol | null;
	}

	/** Properties of a network port. */
	export interface PortFragmentFormProperties {

		/**
		 * Backend port of the target virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/** Protocol type of the port. */
		transportProtocol: FormControl<InboundNatRuleTransportProtocol | null | undefined>,
	}
	export function CreatePortFragmentFormGroup() {
		return new FormGroup<PortFragmentFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined),
			transportProtocol: new FormControl<InboundNatRuleTransportProtocol | null | undefined>(undefined),
		});

	}


	/** Result of the request to list REST API operations */
	export interface ProviderOperationResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations supported by the resource provider. */
		value?: Array<OperationMetadata>;
	}

	/** Result of the request to list REST API operations */
	export interface ProviderOperationResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationResultFormGroup() {
		return new FormGroup<ProviderOperationResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a .rdp file */
	export interface RdpConnection {

		/** The contents of the .rdp file */
		contents?: string | null;
	}

	/** Represents a .rdp file */
	export interface RdpConnectionFormProperties {

		/** The contents of the .rdp file */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateRdpConnectionFormGroup() {
		return new FormGroup<RdpConnectionFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for resizing a virtual machine. */
	export interface ResizeLabVirtualMachineProperties {

		/** Specifies the size of the virtual machine. */
		size?: string | null;
	}

	/** Request body for resizing a virtual machine. */
	export interface ResizeLabVirtualMachinePropertiesFormProperties {

		/** Specifies the size of the virtual machine. */
		size: FormControl<string | null | undefined>,
	}
	export function CreateResizeLabVirtualMachinePropertiesFormGroup() {
		return new FormGroup<ResizeLabVirtualMachinePropertiesFormProperties>({
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The identifier of the resource. */
		id?: string | null;

		/** The location of the resource. */
		location?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The identifier of the resource. */
		id: FormControl<string | null | undefined>,

		/** The location of the resource. */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for retargeting a virtual machine schedule. */
	export interface RetargetScheduleProperties {

		/** The resource Id of the virtual machine on which the schedule operates */
		currentResourceId?: string | null;

		/** The resource Id of the virtual machine that the schedule should be retargeted to */
		targetResourceId?: string | null;
	}

	/** Properties for retargeting a virtual machine schedule. */
	export interface RetargetSchedulePropertiesFormProperties {

		/** The resource Id of the virtual machine on which the schedule operates */
		currentResourceId: FormControl<string | null | undefined>,

		/** The resource Id of the virtual machine that the schedule should be retargeted to */
		targetResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRetargetSchedulePropertiesFormGroup() {
		return new FormGroup<RetargetSchedulePropertiesFormProperties>({
			currentResourceId: new FormControl<string | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface ScheduleList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Schedule>;
	}

	/** The response of a list operation. */
	export interface ScheduleListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScheduleListFormGroup() {
		return new FormGroup<ScheduleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A secret. */
	export interface Secret {

		/**
		 * Properties of a secret.
		 * Required
		 */
		properties: SecretProperties;
	}

	/** A secret. */
	export interface SecretFormProperties {
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
		});

	}


	/** Properties of a secret. */
	export interface SecretProperties {

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;

		/** The value of the secret for secret creation. */
		value?: string | null;
	}

	/** Properties of a secret. */
	export interface SecretPropertiesFormProperties {

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,

		/** The value of the secret for secret creation. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretPropertiesFormGroup() {
		return new FormGroup<SecretPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A secret. */
	export interface SecretFragment {

		/** Properties of a secret. */
		properties?: SecretPropertiesFragment;
	}

	/** A secret. */
	export interface SecretFragmentFormProperties {
	}
	export function CreateSecretFragmentFormGroup() {
		return new FormGroup<SecretFragmentFormProperties>({
		});

	}


	/** Properties of a secret. */
	export interface SecretPropertiesFragment {

		/** The value of the secret for secret creation. */
		value?: string | null;
	}

	/** Properties of a secret. */
	export interface SecretPropertiesFragmentFormProperties {

		/** The value of the secret for secret creation. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretPropertiesFragmentFormGroup() {
		return new FormGroup<SecretPropertiesFragmentFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface SecretList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Secret>;
	}

	/** The response of a list operation. */
	export interface SecretListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecretListFormGroup() {
		return new FormGroup<SecretListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Service Fabric. */
	export interface ServiceFabric {

		/**
		 * Properties of a service fabric.
		 * Required
		 */
		properties: ServiceFabricProperties;
	}

	/** A Service Fabric. */
	export interface ServiceFabricFormProperties {
	}
	export function CreateServiceFabricFormGroup() {
		return new FormGroup<ServiceFabricFormProperties>({
		});

	}


	/** Properties of a service fabric. */
	export interface ServiceFabricProperties {

		/** Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level. */
		applicableSchedule?: ApplicableSchedule;

		/** The resource id of the environment under which the service fabric resource is present */
		environmentId?: string | null;

		/** The backing service fabric resource's id */
		externalServiceFabricId?: string | null;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a service fabric. */
	export interface ServiceFabricPropertiesFormProperties {

		/** The resource id of the environment under which the service fabric resource is present */
		environmentId: FormControl<string | null | undefined>,

		/** The backing service fabric resource's id */
		externalServiceFabricId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateServiceFabricPropertiesFormGroup() {
		return new FormGroup<ServiceFabricPropertiesFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			externalServiceFabricId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Service Fabric. */
	export interface ServiceFabricFragment {

		/** Properties of a service fabric. */
		properties?: ServiceFabricPropertiesFragment;
	}

	/** A Service Fabric. */
	export interface ServiceFabricFragmentFormProperties {
	}
	export function CreateServiceFabricFragmentFormGroup() {
		return new FormGroup<ServiceFabricFragmentFormProperties>({
		});

	}


	/** Properties of a service fabric. */
	export interface ServiceFabricPropertiesFragment {

		/** The resource id of the environment under which the service fabric resource is present */
		environmentId?: string | null;

		/** The backing service fabric resource's id */
		externalServiceFabricId?: string | null;
	}

	/** Properties of a service fabric. */
	export interface ServiceFabricPropertiesFragmentFormProperties {

		/** The resource id of the environment under which the service fabric resource is present */
		environmentId: FormControl<string | null | undefined>,

		/** The backing service fabric resource's id */
		externalServiceFabricId: FormControl<string | null | undefined>,
	}
	export function CreateServiceFabricPropertiesFragmentFormGroup() {
		return new FormGroup<ServiceFabricPropertiesFragmentFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			externalServiceFabricId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface ServiceFabricList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ServiceFabric>;
	}

	/** The response of a list operation. */
	export interface ServiceFabricListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServiceFabricListFormGroup() {
		return new FormGroup<ServiceFabricListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for a managed identity to execute DevTest lab services. */
	export interface ServiceRunner {

		/** Properties of a managed identity */
		identity?: IdentityProperties;
	}

	/** A container for a managed identity to execute DevTest lab services. */
	export interface ServiceRunnerFormProperties {
	}
	export function CreateServiceRunnerFormGroup() {
		return new FormGroup<ServiceRunnerFormProperties>({
		});

	}


	/** The contents of a shutdown notification. Webhooks can use this type to deserialize the request body when they get notified of an imminent shutdown. */
	export interface ShutdownNotificationContent {

		/** The URL to delay shutdown by 2 hours. */
		delayUrl120?: string | null;

		/** The URL to delay shutdown by 60 minutes. */
		delayUrl60?: string | null;

		/** The event for which a notification will be sent. */
		eventType?: string | null;

		/** The GUID for the virtual machine to be shut down. */
		guid?: string | null;

		/** The lab for the schedule. */
		labName?: string | null;

		/** Minutes remaining until shutdown */
		minutesUntilShutdown?: string | null;

		/** The owner of the virtual machine. */
		owner?: string | null;

		/** The resource group name for the schedule. */
		resourceGroupName?: string | null;

		/** The URL to skip auto-shutdown. */
		skipUrl?: string | null;

		/** The subscription ID for the schedule. */
		subscriptionId?: string | null;

		/** The text for the notification. */
		text?: string | null;

		/** The virtual machine to be shut down. */
		vmName?: string | null;

		/** The URL of the virtual machine. */
		vmUrl?: string | null;
	}

	/** The contents of a shutdown notification. Webhooks can use this type to deserialize the request body when they get notified of an imminent shutdown. */
	export interface ShutdownNotificationContentFormProperties {

		/** The URL to delay shutdown by 2 hours. */
		delayUrl120: FormControl<string | null | undefined>,

		/** The URL to delay shutdown by 60 minutes. */
		delayUrl60: FormControl<string | null | undefined>,

		/** The event for which a notification will be sent. */
		eventType: FormControl<string | null | undefined>,

		/** The GUID for the virtual machine to be shut down. */
		guid: FormControl<string | null | undefined>,

		/** The lab for the schedule. */
		labName: FormControl<string | null | undefined>,

		/** Minutes remaining until shutdown */
		minutesUntilShutdown: FormControl<string | null | undefined>,

		/** The owner of the virtual machine. */
		owner: FormControl<string | null | undefined>,

		/** The resource group name for the schedule. */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The URL to skip auto-shutdown. */
		skipUrl: FormControl<string | null | undefined>,

		/** The subscription ID for the schedule. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The text for the notification. */
		text: FormControl<string | null | undefined>,

		/** The virtual machine to be shut down. */
		vmName: FormControl<string | null | undefined>,

		/** The URL of the virtual machine. */
		vmUrl: FormControl<string | null | undefined>,
	}
	export function CreateShutdownNotificationContentFormGroup() {
		return new FormGroup<ShutdownNotificationContentFormProperties>({
			delayUrl120: new FormControl<string | null | undefined>(undefined),
			delayUrl60: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			labName: new FormControl<string | null | undefined>(undefined),
			minutesUntilShutdown: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			skipUrl: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			vmUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subnet information. */
	export interface Subnet {

		/** The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). */
		allowPublicIp?: SubnetAllowPublicIp | null;

		/** The name of the subnet as seen in the lab. */
		labSubnetName?: string | null;

		/** The resource ID of the subnet. */
		resourceId?: string | null;
	}

	/** Subnet information. */
	export interface SubnetFormProperties {

		/** The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). */
		allowPublicIp: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** The name of the subnet as seen in the lab. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The resource ID of the subnet. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			allowPublicIp: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubnetAllowPublicIp { Default = 'Default', Deny = 'Deny', Allow = 'Allow' }


	/** Subnet information. */
	export interface SubnetFragment {

		/** The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). */
		allowPublicIp?: SubnetAllowPublicIp | null;

		/** The name of the subnet as seen in the lab. */
		labSubnetName?: string | null;

		/** The resource ID of the subnet. */
		resourceId?: string | null;
	}

	/** Subnet information. */
	export interface SubnetFragmentFormProperties {

		/** The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). */
		allowPublicIp: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** The name of the subnet as seen in the lab. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The resource ID of the subnet. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFragmentFormGroup() {
		return new FormGroup<SubnetFragmentFormProperties>({
			allowPublicIp: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Property overrides on a subnet of a virtual network. */
	export interface SubnetOverride {

		/** The name given to the subnet within the lab. */
		labSubnetName?: string | null;

		/** The resource ID of the subnet. */
		resourceId?: string | null;

		/** Configuration for public IP address sharing. */
		sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfiguration;

		/** Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). */
		useInVmCreationPermission?: SubnetAllowPublicIp | null;

		/** Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). */
		usePublicIpAddressPermission?: SubnetAllowPublicIp | null;

		/** The virtual network pool associated with this subnet. */
		virtualNetworkPoolName?: string | null;
	}

	/** Property overrides on a subnet of a virtual network. */
	export interface SubnetOverrideFormProperties {

		/** The name given to the subnet within the lab. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The resource ID of the subnet. */
		resourceId: FormControl<string | null | undefined>,

		/** Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). */
		useInVmCreationPermission: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). */
		usePublicIpAddressPermission: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** The virtual network pool associated with this subnet. */
		virtualNetworkPoolName: FormControl<string | null | undefined>,
	}
	export function CreateSubnetOverrideFormGroup() {
		return new FormGroup<SubnetOverrideFormProperties>({
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			useInVmCreationPermission: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			usePublicIpAddressPermission: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			virtualNetworkPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for public IP address sharing. */
	export interface SubnetSharedPublicIpAddressConfiguration {

		/** Backend ports that virtual machines on this subnet are allowed to expose */
		allowedPorts?: Array<Port>;
	}

	/** Configuration for public IP address sharing. */
	export interface SubnetSharedPublicIpAddressConfigurationFormProperties {
	}
	export function CreateSubnetSharedPublicIpAddressConfigurationFormGroup() {
		return new FormGroup<SubnetSharedPublicIpAddressConfigurationFormProperties>({
		});

	}


	/** Property overrides on a subnet of a virtual network. */
	export interface SubnetOverrideFragment {

		/** The name given to the subnet within the lab. */
		labSubnetName?: string | null;

		/** The resource ID of the subnet. */
		resourceId?: string | null;

		/** Configuration for public IP address sharing. */
		sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfigurationFragment;

		/** Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). */
		useInVmCreationPermission?: SubnetAllowPublicIp | null;

		/** Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). */
		usePublicIpAddressPermission?: SubnetAllowPublicIp | null;

		/** The virtual network pool associated with this subnet. */
		virtualNetworkPoolName?: string | null;
	}

	/** Property overrides on a subnet of a virtual network. */
	export interface SubnetOverrideFragmentFormProperties {

		/** The name given to the subnet within the lab. */
		labSubnetName: FormControl<string | null | undefined>,

		/** The resource ID of the subnet. */
		resourceId: FormControl<string | null | undefined>,

		/** Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). */
		useInVmCreationPermission: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). */
		usePublicIpAddressPermission: FormControl<SubnetAllowPublicIp | null | undefined>,

		/** The virtual network pool associated with this subnet. */
		virtualNetworkPoolName: FormControl<string | null | undefined>,
	}
	export function CreateSubnetOverrideFragmentFormGroup() {
		return new FormGroup<SubnetOverrideFragmentFormProperties>({
			labSubnetName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			useInVmCreationPermission: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			usePublicIpAddressPermission: new FormControl<SubnetAllowPublicIp | null | undefined>(undefined),
			virtualNetworkPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for public IP address sharing. */
	export interface SubnetSharedPublicIpAddressConfigurationFragment {

		/** Backend ports that virtual machines on this subnet are allowed to expose */
		allowedPorts?: Array<PortFragment>;
	}

	/** Configuration for public IP address sharing. */
	export interface SubnetSharedPublicIpAddressConfigurationFragmentFormProperties {
	}
	export function CreateSubnetSharedPublicIpAddressConfigurationFragmentFormGroup() {
		return new FormGroup<SubnetSharedPublicIpAddressConfigurationFragmentFormProperties>({
		});

	}


	/** Represents an update resource */
	export interface UpdateResource {

		/** The tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Represents an update resource */
	export interface UpdateResourceFormProperties {

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateResourceFormGroup() {
		return new FormGroup<UpdateResourceFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Profile of a lab user. */
	export interface User {

		/** Properties of a lab user profile. */
		properties?: UserProperties;
	}

	/** Profile of a lab user. */
	export interface UserFormProperties {
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
		});

	}


	/** Properties of a lab user profile. */
	export interface UserProperties {

		/** The creation date of the user profile. */
		createdDate?: Date | null;

		/** Identity attributes of a lab user. */
		identity?: UserIdentity;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** Properties of a user's secret store. */
		secretStore?: UserSecretStore;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a lab user profile. */
	export interface UserPropertiesFormProperties {

		/** The creation date of the user profile. */
		createdDate: FormControl<Date | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUserPropertiesFormGroup() {
		return new FormGroup<UserPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity attributes of a lab user. */
	export interface UserIdentity {

		/** Set to the app Id of the client JWT making the request. */
		appId?: string | null;

		/** Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. */
		objectId?: string | null;

		/** Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. */
		principalId?: string | null;

		/** Set to the principal name / UPN of the client JWT making the request. */
		principalName?: string | null;

		/** Set to the tenant ID of the client JWT making the request. */
		tenantId?: string | null;
	}

	/** Identity attributes of a lab user. */
	export interface UserIdentityFormProperties {

		/** Set to the app Id of the client JWT making the request. */
		appId: FormControl<string | null | undefined>,

		/** Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. */
		objectId: FormControl<string | null | undefined>,

		/** Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. */
		principalId: FormControl<string | null | undefined>,

		/** Set to the principal name / UPN of the client JWT making the request. */
		principalName: FormControl<string | null | undefined>,

		/** Set to the tenant ID of the client JWT making the request. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			principalName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a user's secret store. */
	export interface UserSecretStore {

		/** The ID of the user's Key vault. */
		keyVaultId?: string | null;

		/** The URI of the user's Key vault. */
		keyVaultUri?: string | null;
	}

	/** Properties of a user's secret store. */
	export interface UserSecretStoreFormProperties {

		/** The ID of the user's Key vault. */
		keyVaultId: FormControl<string | null | undefined>,

		/** The URI of the user's Key vault. */
		keyVaultUri: FormControl<string | null | undefined>,
	}
	export function CreateUserSecretStoreFormGroup() {
		return new FormGroup<UserSecretStoreFormProperties>({
			keyVaultId: new FormControl<string | null | undefined>(undefined),
			keyVaultUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Profile of a lab user. */
	export interface UserFragment {

		/** Properties of a lab user profile. */
		properties?: UserPropertiesFragment;
	}

	/** Profile of a lab user. */
	export interface UserFragmentFormProperties {
	}
	export function CreateUserFragmentFormGroup() {
		return new FormGroup<UserFragmentFormProperties>({
		});

	}


	/** Properties of a lab user profile. */
	export interface UserPropertiesFragment {

		/** Identity attributes of a lab user. */
		identity?: UserIdentityFragment;

		/** Properties of a user's secret store. */
		secretStore?: UserSecretStoreFragment;
	}

	/** Properties of a lab user profile. */
	export interface UserPropertiesFragmentFormProperties {
	}
	export function CreateUserPropertiesFragmentFormGroup() {
		return new FormGroup<UserPropertiesFragmentFormProperties>({
		});

	}


	/** Identity attributes of a lab user. */
	export interface UserIdentityFragment {

		/** Set to the app Id of the client JWT making the request. */
		appId?: string | null;

		/** Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. */
		objectId?: string | null;

		/** Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. */
		principalId?: string | null;

		/** Set to the principal name / UPN of the client JWT making the request. */
		principalName?: string | null;

		/** Set to the tenant ID of the client JWT making the request. */
		tenantId?: string | null;
	}

	/** Identity attributes of a lab user. */
	export interface UserIdentityFragmentFormProperties {

		/** Set to the app Id of the client JWT making the request. */
		appId: FormControl<string | null | undefined>,

		/** Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. */
		objectId: FormControl<string | null | undefined>,

		/** Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. */
		principalId: FormControl<string | null | undefined>,

		/** Set to the principal name / UPN of the client JWT making the request. */
		principalName: FormControl<string | null | undefined>,

		/** Set to the tenant ID of the client JWT making the request. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFragmentFormGroup() {
		return new FormGroup<UserIdentityFragmentFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			principalName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a user's secret store. */
	export interface UserSecretStoreFragment {

		/** The ID of the user's Key vault. */
		keyVaultId?: string | null;

		/** The URI of the user's Key vault. */
		keyVaultUri?: string | null;
	}

	/** Properties of a user's secret store. */
	export interface UserSecretStoreFragmentFormProperties {

		/** The ID of the user's Key vault. */
		keyVaultId: FormControl<string | null | undefined>,

		/** The URI of the user's Key vault. */
		keyVaultUri: FormControl<string | null | undefined>,
	}
	export function CreateUserSecretStoreFragmentFormGroup() {
		return new FormGroup<UserSecretStoreFragmentFormProperties>({
			keyVaultId: new FormControl<string | null | undefined>(undefined),
			keyVaultUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface UserList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<User>;
	}

	/** The response of a list operation. */
	export interface UserListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual network. */
	export interface VirtualNetwork {

		/** Properties of a virtual network. */
		properties?: VirtualNetworkProperties;
	}

	/** A virtual network. */
	export interface VirtualNetworkFormProperties {
	}
	export function CreateVirtualNetworkFormGroup() {
		return new FormGroup<VirtualNetworkFormProperties>({
		});

	}


	/** Properties of a virtual network. */
	export interface VirtualNetworkProperties {

		/** The allowed subnets of the virtual network. */
		allowedSubnets?: Array<Subnet>;

		/** The creation date of the virtual network. */
		createdDate?: Date | null;

		/** The description of the virtual network. */
		description?: string | null;

		/** The Microsoft.Network resource identifier of the virtual network. */
		externalProviderResourceId?: string | null;

		/** The external subnet properties. */
		externalSubnets?: Array<ExternalSubnet>;

		/** The provisioning status of the resource. */
		provisioningState?: string | null;

		/** The subnet overrides of the virtual network. */
		subnetOverrides?: Array<SubnetOverride>;

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier?: string | null;
	}

	/** Properties of a virtual network. */
	export interface VirtualNetworkPropertiesFormProperties {

		/** The creation date of the virtual network. */
		createdDate: FormControl<Date | null | undefined>,

		/** The description of the virtual network. */
		description: FormControl<string | null | undefined>,

		/** The Microsoft.Network resource identifier of the virtual network. */
		externalProviderResourceId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** The unique immutable identifier of a resource (Guid). */
		uniqueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkPropertiesFormGroup() {
		return new FormGroup<VirtualNetworkPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			externalProviderResourceId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual network. */
	export interface VirtualNetworkFragment {

		/** Properties of a virtual network. */
		properties?: VirtualNetworkPropertiesFragment;
	}

	/** A virtual network. */
	export interface VirtualNetworkFragmentFormProperties {
	}
	export function CreateVirtualNetworkFragmentFormGroup() {
		return new FormGroup<VirtualNetworkFragmentFormProperties>({
		});

	}


	/** Properties of a virtual network. */
	export interface VirtualNetworkPropertiesFragment {

		/** The allowed subnets of the virtual network. */
		allowedSubnets?: Array<SubnetFragment>;

		/** The description of the virtual network. */
		description?: string | null;

		/** The Microsoft.Network resource identifier of the virtual network. */
		externalProviderResourceId?: string | null;

		/** The subnet overrides of the virtual network. */
		subnetOverrides?: Array<SubnetOverrideFragment>;
	}

	/** Properties of a virtual network. */
	export interface VirtualNetworkPropertiesFragmentFormProperties {

		/** The description of the virtual network. */
		description: FormControl<string | null | undefined>,

		/** The Microsoft.Network resource identifier of the virtual network. */
		externalProviderResourceId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkPropertiesFragmentFormGroup() {
		return new FormGroup<VirtualNetworkPropertiesFragmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			externalProviderResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a list operation. */
	export interface VirtualNetworkList {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<VirtualNetwork>;
	}

	/** The response of a list operation. */
	export interface VirtualNetworkListFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkListFormGroup() {
		return new FormGroup<VirtualNetworkListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Result of the request to list REST API operations
		 * Get providers/Microsoft.DevTestLab/operations
		 * @param {string} api_version Client API version.
		 * @return {ProviderOperationResult} Success
		 */
		ProviderOperations_List(api_version: string): Observable<ProviderOperationResult> {
			return this.http.get<ProviderOperationResult>(this.baseUri + 'providers/Microsoft.DevTestLab/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List labs in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/labs
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {LabList} OK
		 */
		Labs_ListBySubscription(subscriptionId: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<LabList> {
			return this.http.get<LabList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DevTestLab/labs&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get operation.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/locations/{locationName}/operations/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} locationName The name of the location.
		 * @param {string} name The name of the operation.
		 * @param {string} api_version Client API version.
		 * @return {OperationResult} OK
		 */
		Operations_Get(subscriptionId: string, locationName: string, name: string, api_version: string): Observable<OperationResult> {
			return this.http.get<OperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DevTestLab/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/operations/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List schedules in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/schedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		GlobalSchedules_ListBySubscription(subscriptionId: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ScheduleList> {
			return this.http.get<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DevTestLab/schedules&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List labs in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {LabList} OK
		 */
		Labs_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<LabList> {
			return this.http.get<LabList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List artifact sources in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=displayName)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ArtifactSourceList} OK
		 */
		ArtifactSources_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ArtifactSourceList> {
			return this.http.get<ArtifactSourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List azure resource manager templates in a given artifact source.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=displayName)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ArmTemplateList} OK
		 */
		ArmTemplates_List(subscriptionId: string, resourceGroupName: string, labName: string, artifactSourceName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ArmTemplateList> {
			return this.http.get<ArmTemplateList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '/armtemplates&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get azure resource manager template.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} name The name of the azure resource manager template.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=displayName)'
		 * @param {string} api_version Client API version.
		 * @return {ArmTemplate} OK
		 */
		ArmTemplates_Get(subscriptionId: string, resourceGroupName: string, labName: string, artifactSourceName: string, name: string, expand: string | null | undefined, api_version: string): Observable<ArmTemplate> {
			return this.http.get<ArmTemplate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '/armtemplates/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List artifacts in a given artifact source.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=title)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ArtifactList} OK
		 */
		Artifacts_List(subscriptionId: string, resourceGroupName: string, labName: string, artifactSourceName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ArtifactList> {
			return this.http.get<ArtifactList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '/artifacts&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get artifact.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} name The name of the artifact.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=title)'
		 * @param {string} api_version Client API version.
		 * @return {Artifact} OK
		 */
		Artifacts_Get(subscriptionId: string, resourceGroupName: string, labName: string, artifactSourceName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '/artifacts/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}/generateArmTemplate
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} artifactSourceName The name of the artifact source.
		 * @param {string} name The name of the artifact.
		 * @param {string} api_version Client API version.
		 * @param {GenerateArmTemplateRequest} requestBody Parameters for generating an ARM template for deploying artifacts.
		 * @return {ArmTemplateInfo} OK
		 */
		Artifacts_GenerateArmTemplate(subscriptionId: string, resourceGroupName: string, labName: string, artifactSourceName: string, name: string, api_version: string, requestBody: GenerateArmTemplateRequest): Observable<ArmTemplateInfo> {
			return this.http.post<ArmTemplateInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (artifactSourceName == null ? '' : encodeURIComponent(artifactSourceName)) + '/artifacts/' + (name == null ? '' : encodeURIComponent(name)) + '/generateArmTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get artifact source.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the artifact source.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=displayName)'
		 * @param {string} api_version Client API version.
		 * @return {ArtifactSource} OK
		 */
		ArtifactSources_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<ArtifactSource> {
			return this.http.get<ArtifactSource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing artifact source.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the artifact source.
		 * @param {string} api_version Client API version.
		 * @param {ArtifactSource} requestBody Properties of an artifact source.
		 * @return {ArtifactSource} OK
		 */
		ArtifactSources_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ArtifactSource): Observable<ArtifactSource> {
			return this.http.put<ArtifactSource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete artifact source.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the artifact source.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ArtifactSources_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of artifact sources. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the artifact source.
		 * @param {string} api_version Client API version.
		 * @param {ArtifactSourceFragment} requestBody Properties of an artifact source.
		 * @return {ArtifactSource} OK
		 */
		ArtifactSources_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ArtifactSourceFragment): Observable<ArtifactSource> {
			return this.http.patch<ArtifactSource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/artifactsources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get cost.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the cost.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=labCostDetails)'
		 * @param {string} api_version Client API version.
		 * @return {LabCost} OK
		 */
		Costs_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<LabCost> {
			return this.http.get<LabCost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/costs/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing cost.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the cost.
		 * @param {string} api_version Client API version.
		 * @param {LabCost} requestBody A cost item.
		 * @return {LabCost} OK
		 */
		Costs_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: LabCost): Observable<LabCost> {
			return this.http.put<LabCost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/costs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List custom images in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=vm)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {CustomImageList} OK
		 */
		CustomImages_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<CustomImageList> {
			return this.http.get<CustomImageList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/customimages&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get custom image.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the custom image.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=vm)'
		 * @param {string} api_version Client API version.
		 * @return {CustomImage} OK
		 */
		CustomImages_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<CustomImage> {
			return this.http.get<CustomImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/customimages/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing custom image. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the custom image.
		 * @param {string} api_version Client API version.
		 * @param {CustomImage} requestBody A custom image.
		 * @return {CustomImage} OK
		 */
		CustomImages_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: CustomImage): Observable<CustomImage> {
			return this.http.put<CustomImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/customimages/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete custom image. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the custom image.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		CustomImages_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/customimages/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of custom images. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the custom image.
		 * @param {string} api_version Client API version.
		 * @param {CustomImageFragment} requestBody A custom image.
		 * @return {CustomImage} OK
		 */
		CustomImages_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: CustomImageFragment): Observable<CustomImage> {
			return this.http.patch<CustomImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/customimages/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List formulas in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=description)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {FormulaList} OK
		 */
		Formulas_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<FormulaList> {
			return this.http.get<FormulaList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/formulas&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get formula.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the formula.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=description)'
		 * @param {string} api_version Client API version.
		 * @return {Formula} OK
		 */
		Formulas_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Formula> {
			return this.http.get<Formula>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/formulas/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing formula. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the formula.
		 * @param {string} api_version Client API version.
		 * @param {Formula} requestBody A formula for creating a VM, specifying an image base and other parameters
		 * @return {Formula} OK
		 */
		Formulas_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: Formula): Observable<Formula> {
			return this.http.put<Formula>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/formulas/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete formula.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the formula.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Formulas_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/formulas/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of formulas. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the formula.
		 * @param {string} api_version Client API version.
		 * @param {FormulaFragment} requestBody A formula for creating a VM, specifying an image base and other parameters
		 * @return {Formula} OK
		 */
		Formulas_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: FormulaFragment): Observable<Formula> {
			return this.http.patch<Formula>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/formulas/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List gallery images in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/galleryimages
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=author)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {GalleryImageList} OK
		 */
		GalleryImages_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<GalleryImageList> {
			return this.http.get<GalleryImageList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/galleryimages&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List notification channels in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=webHookUrl)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {NotificationChannelList} OK
		 */
		NotificationChannels_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<NotificationChannelList> {
			return this.http.get<NotificationChannelList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get notification channel.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the notification channel.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=webHookUrl)'
		 * @param {string} api_version Client API version.
		 * @return {NotificationChannel} OK
		 */
		NotificationChannels_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<NotificationChannel> {
			return this.http.get<NotificationChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing notification channel.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the notification channel.
		 * @param {string} api_version Client API version.
		 * @param {NotificationChannel} requestBody A notification.
		 * @return {NotificationChannel} OK
		 */
		NotificationChannels_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: NotificationChannel): Observable<NotificationChannel> {
			return this.http.put<NotificationChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete notification channel.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the notification channel.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		NotificationChannels_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of notification channels. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the notification channel.
		 * @param {string} api_version Client API version.
		 * @param {NotificationChannelFragment} requestBody A notification.
		 * @return {NotificationChannel} OK
		 */
		NotificationChannels_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: NotificationChannelFragment): Observable<NotificationChannel> {
			return this.http.patch<NotificationChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send notification to provided channel.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}/notify
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the notification channel.
		 * @param {string} api_version Client API version.
		 * @param {NotifyParameters} requestBody Properties for generating a Notification.
		 * @return {void} OK
		 */
		NotificationChannels_Notify(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: NotifyParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/notificationchannels/' + (name == null ? '' : encodeURIComponent(name)) + '/notify&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Evaluates lab policy.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{name}/evaluatePolicies
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the policy set.
		 * @param {string} api_version Client API version.
		 * @param {EvaluatePoliciesRequest} requestBody Request body for evaluating a policy set.
		 * @return {EvaluatePoliciesResponse} OK
		 */
		PolicySets_EvaluatePolicies(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: EvaluatePoliciesRequest): Observable<EvaluatePoliciesResponse> {
			return this.http.post<EvaluatePoliciesResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (name == null ? '' : encodeURIComponent(name)) + '/evaluatePolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List policies in a given policy set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} policySetName The name of the policy set.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=description)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {PolicyList} OK
		 */
		Policies_List(subscriptionId: string, resourceGroupName: string, labName: string, policySetName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<PolicyList> {
			return this.http.get<PolicyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (policySetName == null ? '' : encodeURIComponent(policySetName)) + '/policies&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} policySetName The name of the policy set.
		 * @param {string} name The name of the policy.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=description)'
		 * @param {string} api_version Client API version.
		 * @return {Policy} OK
		 */
		Policies_Get(subscriptionId: string, resourceGroupName: string, labName: string, policySetName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (policySetName == null ? '' : encodeURIComponent(policySetName)) + '/policies/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} policySetName The name of the policy set.
		 * @param {string} name The name of the policy.
		 * @param {string} api_version Client API version.
		 * @param {Policy} requestBody A Policy.
		 * @return {Policy} OK
		 */
		Policies_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, policySetName: string, name: string, api_version: string, requestBody: Policy): Observable<Policy> {
			return this.http.put<Policy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (policySetName == null ? '' : encodeURIComponent(policySetName)) + '/policies/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete policy.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} policySetName The name of the policy set.
		 * @param {string} name The name of the policy.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Policies_Delete(subscriptionId: string, resourceGroupName: string, labName: string, policySetName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (policySetName == null ? '' : encodeURIComponent(policySetName)) + '/policies/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of policies. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} policySetName The name of the policy set.
		 * @param {string} name The name of the policy.
		 * @param {string} api_version Client API version.
		 * @param {PolicyFragment} requestBody A Policy.
		 * @return {Policy} OK
		 */
		Policies_Update(subscriptionId: string, resourceGroupName: string, labName: string, policySetName: string, name: string, api_version: string, requestBody: PolicyFragment): Observable<Policy> {
			return this.http.patch<Policy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/policysets/' + (policySetName == null ? '' : encodeURIComponent(policySetName)) + '/policies/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List schedules in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		Schedules_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ScheduleList> {
			return this.http.get<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get schedule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} api_version Client API version.
		 * @return {Schedule} OK
		 */
		Schedules_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {Schedule} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		Schedules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: Schedule): Observable<Schedule> {
			return this.http.put<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete schedule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Schedules_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of schedules. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {ScheduleFragment} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		Schedules_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ScheduleFragment): Observable<Schedule> {
			return this.http.patch<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a schedule. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/execute
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Schedules_Execute(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/execute&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all applicable schedules
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/listApplicable
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		Schedules_ListApplicable(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<ScheduleList> {
			return this.http.post<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/listApplicable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get service runner.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the service runner.
		 * @param {string} api_version Client API version.
		 * @return {ServiceRunner} OK
		 */
		ServiceRunners_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<ServiceRunner> {
			return this.http.get<ServiceRunner>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/servicerunners/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing service runner.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the service runner.
		 * @param {string} api_version Client API version.
		 * @param {ServiceRunner} requestBody A container for a managed identity to execute DevTest lab services.
		 * @return {ServiceRunner} OK
		 */
		ServiceRunners_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ServiceRunner): Observable<ServiceRunner> {
			return this.http.put<ServiceRunner>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/servicerunners/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete service runner.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the service runner.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceRunners_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/servicerunners/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List user profiles in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=identity)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {UserList} OK
		 */
		Users_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get user profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the user profile.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=identity)'
		 * @param {string} api_version Client API version.
		 * @return {User} OK
		 */
		Users_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing user profile. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the user profile.
		 * @param {string} api_version Client API version.
		 * @param {User} requestBody Profile of a lab user.
		 * @return {User} OK
		 */
		Users_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: User): Observable<User> {
			return this.http.put<User>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete user profile. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the user profile.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Users_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of user profiles. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the user profile.
		 * @param {string} api_version Client API version.
		 * @param {UserFragment} requestBody Profile of a lab user.
		 * @return {User} OK
		 */
		Users_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: UserFragment): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List disks in a given user profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=diskType)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {DiskList} OK
		 */
		Disks_List(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<DiskList> {
			return this.http.get<DiskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get disk.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=diskType)'
		 * @param {string} api_version Client API version.
		 * @return {Disk} OK
		 */
		Disks_Get(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Disk> {
			return this.http.get<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing disk. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} api_version Client API version.
		 * @param {Disk} requestBody A Disk.
		 * @return {Disk} OK
		 */
		Disks_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: Disk): Observable<Disk> {
			return this.http.put<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete disk. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Disks_Delete(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of disks. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} api_version Client API version.
		 * @param {DiskFragment} requestBody A Disk.
		 * @return {Disk} OK
		 */
		Disks_Update(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: DiskFragment): Observable<Disk> {
			return this.http.patch<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attach and create the lease of the disk to the virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/attach
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} api_version Client API version.
		 * @param {AttachDiskProperties} requestBody Properties of the disk to attach.
		 * @return {void} OK
		 */
		Disks_Attach(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: AttachDiskProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '/attach&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach and break the lease of the disk attached to the virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/detach
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the disk.
		 * @param {string} api_version Client API version.
		 * @param {DetachDiskProperties} requestBody Properties of the disk to detach.
		 * @return {void} OK
		 */
		Disks_Detach(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: DetachDiskProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/disks/' + (name == null ? '' : encodeURIComponent(name)) + '/detach&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List environments in a given user profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=deploymentProperties)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {DtlEnvironmentList} OK
		 */
		Environments_List(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<DtlEnvironmentList> {
			return this.http.get<DtlEnvironmentList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/environments&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the environment.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=deploymentProperties)'
		 * @param {string} api_version Client API version.
		 * @return {DtlEnvironment} OK
		 */
		Environments_Get(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, expand: string | null | undefined, api_version: string): Observable<DtlEnvironment> {
			return this.http.get<DtlEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/environments/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing environment. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the environment.
		 * @param {string} api_version Client API version.
		 * @param {DtlEnvironment} requestBody An environment, which is essentially an ARM template deployment.
		 * @return {DtlEnvironment} OK
		 */
		Environments_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: DtlEnvironment): Observable<DtlEnvironment> {
			return this.http.put<DtlEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/environments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete environment. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the environment.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Environments_Delete(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/environments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of environments. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the environment.
		 * @param {string} api_version Client API version.
		 * @param {DtlEnvironmentFragment} requestBody An environment, which is essentially an ARM template deployment.
		 * @return {DtlEnvironment} OK
		 */
		Environments_Update(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: DtlEnvironmentFragment): Observable<DtlEnvironment> {
			return this.http.patch<DtlEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/environments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List secrets in a given user profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=value)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {SecretList} OK
		 */
		Secrets_List(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<SecretList> {
			return this.http.get<SecretList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/secrets&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get secret.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the secret.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=value)'
		 * @param {string} api_version Client API version.
		 * @return {Secret} OK
		 */
		Secrets_Get(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Secret> {
			return this.http.get<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/secrets/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing secret. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the secret.
		 * @param {string} api_version Client API version.
		 * @param {Secret} requestBody A secret.
		 * @return {Secret} OK
		 */
		Secrets_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: Secret): Observable<Secret> {
			return this.http.put<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/secrets/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete secret.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the secret.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Secrets_Delete(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/secrets/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of secrets. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the secret.
		 * @param {string} api_version Client API version.
		 * @param {SecretFragment} requestBody A secret.
		 * @return {Secret} OK
		 */
		Secrets_Update(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: SecretFragment): Observable<Secret> {
			return this.http.patch<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/secrets/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List service fabrics in a given user profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ServiceFabricList} OK
		 */
		ServiceFabrics_List(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ServiceFabricList> {
			return this.http.get<ServiceFabricList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get service fabric.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
		 * @param {string} api_version Client API version.
		 * @return {ServiceFabric} OK
		 */
		ServiceFabrics_Get(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, expand: string | null | undefined, api_version: string): Observable<ServiceFabric> {
			return this.http.get<ServiceFabric>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing service fabric. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @param {ServiceFabric} requestBody A Service Fabric.
		 * @return {ServiceFabric} OK
		 */
		ServiceFabrics_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: ServiceFabric): Observable<ServiceFabric> {
			return this.http.put<ServiceFabric>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete service fabric. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceFabrics_Delete(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of service fabrics. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @param {ServiceFabricFragment} requestBody A Service Fabric.
		 * @return {ServiceFabric} OK
		 */
		ServiceFabrics_Update(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string, requestBody: ServiceFabricFragment): Observable<ServiceFabric> {
			return this.http.patch<ServiceFabric>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the applicable start/stop schedules, if any.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/listApplicableSchedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @return {ApplicableSchedule} OK
		 */
		ServiceFabrics_ListApplicableSchedules(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<ApplicableSchedule> {
			return this.http.post<ApplicableSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '/listApplicableSchedules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Start a service fabric. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/start
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceFabrics_Start(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop a service fabric This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/stop
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} name The name of the service fabric.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceFabrics_Stop(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (name == null ? '' : encodeURIComponent(name)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List schedules in a given service fabric.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		ServiceFabricSchedules_List(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ScheduleList> {
			return this.http.get<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get schedule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} name The name of the schedule.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} api_version Client API version.
		 * @return {Schedule} OK
		 */
		ServiceFabricSchedules_Get(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {Schedule} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		ServiceFabricSchedules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, name: string, api_version: string, requestBody: Schedule): Observable<Schedule> {
			return this.http.put<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete schedule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceFabricSchedules_Delete(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of schedules. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {ScheduleFragment} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		ServiceFabricSchedules_Update(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, name: string, api_version: string, requestBody: ScheduleFragment): Observable<Schedule> {
			return this.http.patch<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a schedule. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}/execute
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} userName The name of the user profile.
		 * @param {string} serviceFabricName The name of the service fabric.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		ServiceFabricSchedules_Execute(subscriptionId: string, resourceGroupName: string, labName: string, userName: string, serviceFabricName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/servicefabrics/' + (serviceFabricName == null ? '' : encodeURIComponent(serviceFabricName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/execute&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List virtual machines in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {LabVirtualMachineList} OK
		 */
		VirtualMachines_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<LabVirtualMachineList> {
			return this.http.get<LabVirtualMachineList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get virtual machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
		 * @param {string} api_version Client API version.
		 * @return {LabVirtualMachine} OK
		 */
		VirtualMachines_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<LabVirtualMachine> {
			return this.http.get<LabVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing virtual machine. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {LabVirtualMachine} requestBody A virtual machine.
		 * @return {LabVirtualMachine} OK
		 */
		VirtualMachines_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: LabVirtualMachine): Observable<LabVirtualMachine> {
			return this.http.put<LabVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete virtual machine. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of virtual machines. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {LabVirtualMachineFragment} requestBody A virtual machine.
		 * @return {LabVirtualMachine} OK
		 */
		VirtualMachines_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: LabVirtualMachineFragment): Observable<LabVirtualMachine> {
			return this.http.patch<LabVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attach a new or existing data disk to virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/addDataDisk
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {DataDiskProperties} requestBody Request body for adding a new or existing data disk to a virtual machine.
		 * @return {void} OK
		 */
		VirtualMachines_AddDataDisk(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: DataDiskProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/addDataDisk&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply artifacts to virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/applyArtifacts
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {ApplyArtifactsRequest} requestBody Request body for applying artifacts to a virtual machine.
		 * @return {void} OK
		 */
		VirtualMachines_ApplyArtifacts(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ApplyArtifactsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/applyArtifacts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Take ownership of an existing virtual machine This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/claim
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Claim(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/claim&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach the specified disk from the virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/detachDataDisk
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {DetachDataDiskProperties} requestBody Request body for detaching data disk from a virtual machine.
		 * @return {void} OK
		 */
		VirtualMachines_DetachDataDisk(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: DetachDataDiskProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/detachDataDisk&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a string that represents the contents of the RDP file for the virtual machine
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/getRdpFileContents
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {RdpConnection} OK
		 */
		VirtualMachines_GetRdpFileContents(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<RdpConnection> {
			return this.http.post<RdpConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/getRdpFileContents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists the applicable start/stop schedules, if any.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/listApplicableSchedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {ApplicableSchedule} OK
		 */
		VirtualMachines_ListApplicableSchedules(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<ApplicableSchedule> {
			return this.http.post<ApplicableSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/listApplicableSchedules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Redeploy a virtual machine This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/redeploy
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Redeploy(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/redeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resize Virtual Machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/resize
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @param {ResizeLabVirtualMachineProperties} requestBody Request body for resizing a virtual machine.
		 * @return {void} OK
		 */
		VirtualMachines_Resize(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: ResizeLabVirtualMachineProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/resize&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restart a virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/restart
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Restart(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start a virtual machine. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/start
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Start(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop a virtual machine This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/stop
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Stop(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfers all data disks attached to the virtual machine to be owned by the current user. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/transferDisks
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_TransferDisks(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/transferDisks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Release ownership of an existing virtual machine This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/unClaim
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual machine.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_UnClaim(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (name == null ? '' : encodeURIComponent(name)) + '/unClaim&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List schedules in a given virtual machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		VirtualMachineSchedules_List(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ScheduleList> {
			return this.http.get<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get schedule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} name The name of the schedule.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} api_version Client API version.
		 * @return {Schedule} OK
		 */
		VirtualMachineSchedules_Get(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {Schedule} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		VirtualMachineSchedules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, name: string, api_version: string, requestBody: Schedule): Observable<Schedule> {
			return this.http.put<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete schedule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachineSchedules_Delete(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of schedules. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {ScheduleFragment} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		VirtualMachineSchedules_Update(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, name: string, api_version: string, requestBody: ScheduleFragment): Observable<Schedule> {
			return this.http.patch<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a schedule. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}/execute
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} virtualMachineName The name of the virtual machine.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachineSchedules_Execute(subscriptionId: string, resourceGroupName: string, labName: string, virtualMachineName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualmachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/execute&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List virtual networks in a given lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=externalSubnets)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {VirtualNetworkList} OK
		 */
		VirtualNetworks_List(subscriptionId: string, resourceGroupName: string, labName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<VirtualNetworkList> {
			return this.http.get<VirtualNetworkList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualnetworks&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get virtual network.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual network.
		 * @param {string} expand Specify the $expand query. Example: 'properties($expand=externalSubnets)'
		 * @param {string} api_version Client API version.
		 * @return {VirtualNetwork} OK
		 */
		VirtualNetworks_Get(subscriptionId: string, resourceGroupName: string, labName: string, name: string, expand: string | null | undefined, api_version: string): Observable<VirtualNetwork> {
			return this.http.get<VirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualnetworks/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing virtual network. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual network.
		 * @param {string} api_version Client API version.
		 * @param {VirtualNetwork} requestBody A virtual network.
		 * @return {VirtualNetwork} OK
		 */
		VirtualNetworks_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: VirtualNetwork): Observable<VirtualNetwork> {
			return this.http.put<VirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualnetworks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete virtual network. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual network.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualNetworks_Delete(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualnetworks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of virtual networks. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} labName The name of the lab.
		 * @param {string} name The name of the virtual network.
		 * @param {string} api_version Client API version.
		 * @param {VirtualNetworkFragment} requestBody A virtual network.
		 * @return {VirtualNetwork} OK
		 */
		VirtualNetworks_Update(subscriptionId: string, resourceGroupName: string, labName: string, name: string, api_version: string, requestBody: VirtualNetworkFragment): Observable<VirtualNetwork> {
			return this.http.patch<VirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (labName == null ? '' : encodeURIComponent(labName)) + '/virtualnetworks/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get lab.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
		 * @param {string} api_version Client API version.
		 * @return {Lab} OK
		 */
		Labs_Get(subscriptionId: string, resourceGroupName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Lab> {
			return this.http.get<Lab>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing lab. This operation can take a while to complete.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {Lab} requestBody A lab.
		 * @return {Lab} OK
		 */
		Labs_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: Lab): Observable<Lab> {
			return this.http.put<Lab>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete lab. This operation can take a while to complete.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Labs_Delete(subscriptionId: string, resourceGroupName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of labs. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {LabFragment} requestBody A lab.
		 * @return {Lab} OK
		 */
		Labs_Update(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: LabFragment): Observable<Lab> {
			return this.http.patch<Lab>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Claim a random claimable virtual machine in the lab. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/claimAnyVm
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		Labs_ClaimAnyVm(subscriptionId: string, resourceGroupName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/claimAnyVm&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create virtual machines in a lab. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {LabVirtualMachineCreationParameter} requestBody Properties for creating a virtual machine.
		 * @return {void} OK
		 */
		Labs_CreateEnvironment(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: LabVirtualMachineCreationParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/createEnvironment&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the lab resource usage into a storage account This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/exportResourceUsage
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {ExportResourceUsageParameters} requestBody The parameters of the export operation.
		 * @return {void} OK
		 */
		Labs_ExportResourceUsage(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: ExportResourceUsageParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/exportResourceUsage&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a URI for uploading custom disk images to a Lab.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/generateUploadUri
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {GenerateUploadUriParameter} requestBody Properties for generating an upload URI.
		 * @return {GenerateUploadUriResponse} OK
		 */
		Labs_GenerateUploadUri(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: GenerateUploadUriParameter): Observable<GenerateUploadUriResponse> {
			return this.http.post<GenerateUploadUriResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/generateUploadUri&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import a virtual machine into a different lab. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/importVirtualMachine
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @param {ImportLabVirtualMachineRequest} requestBody This represents the payload required to import a virtual machine from a different lab into the current one
		 * @return {void} OK
		 */
		Labs_ImportVirtualMachine(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: ImportLabVirtualMachineRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/importVirtualMachine&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List disk images available for custom image creation.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/listVhds
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the lab.
		 * @param {string} api_version Client API version.
		 * @return {LabVhdList} OK
		 */
		Labs_ListVhds(subscriptionId: string, resourceGroupName: string, name: string, api_version: string): Observable<LabVhdList> {
			return this.http.post<LabVhdList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/labs/' + (name == null ? '' : encodeURIComponent(name)) + '/listVhds&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List schedules in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} filter The filter to apply to the operation. Example: '$filter=contains(name,'myName')
		 * @param {number} top The maximum number of resources to return from the operation. Example: '$top=10'
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderby The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
		 * @param {string} api_version Client API version.
		 * @return {ScheduleList} OK
		 */
		GlobalSchedules_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, expand: string | null | undefined, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string): Observable<ScheduleList> {
			return this.http.get<ScheduleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get schedule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} expand Specify the $expand query. Example: 'properties($select=status)'
		 * @param {string} api_version Client API version.
		 * @return {Schedule} OK
		 */
		GlobalSchedules_Get(subscriptionId: string, resourceGroupName: string, name: string, expand: string | null | undefined, api_version: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace an existing schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {Schedule} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		GlobalSchedules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: Schedule): Observable<Schedule> {
			return this.http.put<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete schedule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		GlobalSchedules_Delete(subscriptionId: string, resourceGroupName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows modifying tags of schedules. All other properties will be ignored.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {ScheduleFragment} requestBody A schedule.
		 * @return {Schedule} OK
		 */
		GlobalSchedules_Update(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: ScheduleFragment): Observable<Schedule> {
			return this.http.patch<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a schedule. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}/execute
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		GlobalSchedules_Execute(subscriptionId: string, resourceGroupName: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/execute&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a schedule's target resource Id. This operation can take a while to complete.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}/retarget
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the schedule.
		 * @param {string} api_version Client API version.
		 * @param {RetargetScheduleProperties} requestBody Properties for retargeting a virtual machine schedule.
		 * @return {void} OK
		 */
		GlobalSchedules_Retarget(subscriptionId: string, resourceGroupName: string, name: string, api_version: string, requestBody: RetargetScheduleProperties): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevTestLab/schedules/' + (name == null ? '' : encodeURIComponent(name)) + '/retarget&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

