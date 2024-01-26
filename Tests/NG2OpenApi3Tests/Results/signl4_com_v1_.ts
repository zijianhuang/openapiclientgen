import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AlertAnnotationInfo {
		annotationType?: number | null;
		id?: string | null;
		text?: string | null;
		timestamp?: Date | null;
		userId?: string | null;
	}
	export interface AlertAnnotationInfoFormProperties {
		annotationType: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAlertAnnotationInfoFormGroup() {
		return new FormGroup<AlertAnnotationInfoFormProperties>({
			annotationType: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AlertAttachment {
		content?: string | null;
		contentType?: string | null;
		encoding?: Encoding;
		id?: string | null;
		name?: string | null;
	}
	export interface AlertAttachmentFormProperties {
		content: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		encoding: FormControl<Encoding | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertAttachmentFormGroup() {
		return new FormGroup<AlertAttachmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<Encoding | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Encoding { _0 = 0, _1 = 1 }

	export interface AlertAttachmentInfo {
		contentType?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface AlertAttachmentInfoFormProperties {
		contentType: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertAttachmentInfoFormGroup() {
		return new FormGroup<AlertAttachmentInfoFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AlertAuditReportFileInfo {
	}
	export interface AlertAuditReportFileInfoFormProperties {
	}
	export function CreateAlertAuditReportFileInfoFormGroup() {
		return new FormGroup<AlertAuditReportFileInfoFormProperties>({
		});

	}

	export interface AlertCounts {
		acked?: number | null;
		closed?: number | null;
		end?: Date | null;
		lastModified?: Date | null;
		start?: Date | null;
		unhandled?: number | null;
	}
	export interface AlertCountsFormProperties {
		acked: FormControl<number | null | undefined>,
		closed: FormControl<number | null | undefined>,
		end: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
		unhandled: FormControl<number | null | undefined>,
	}
	export function CreateAlertCountsFormGroup() {
		return new FormGroup<AlertCountsFormProperties>({
			acked: new FormControl<number | null | undefined>(undefined),
			closed: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			unhandled: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlertDeliveryStatusCodes { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _6 = 4, _8 = 5, _22 = 6, _24 = 7, _26 = 8, _30 = 9, _31 = 10 }

	export interface AlertDeliveryStatusInfo {
		statusCode?: AlertDeliveryStatusCodes;
		users?: Array<UserDeliveryStatusInfo>;
	}
	export interface AlertDeliveryStatusInfoFormProperties {
		statusCode: FormControl<AlertDeliveryStatusCodes | null | undefined>,
	}
	export function CreateAlertDeliveryStatusInfoFormGroup() {
		return new FormGroup<AlertDeliveryStatusInfoFormProperties>({
			statusCode: new FormControl<AlertDeliveryStatusCodes | null | undefined>(undefined),
		});

	}

	export interface UserDeliveryStatusInfo {
		statusCode?: UserDeliveryStatusInfoCodes;
		userId?: string | null;
	}
	export interface UserDeliveryStatusInfoFormProperties {
		statusCode: FormControl<UserDeliveryStatusInfoCodes | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserDeliveryStatusInfoFormGroup() {
		return new FormGroup<UserDeliveryStatusInfoFormProperties>({
			statusCode: new FormControl<UserDeliveryStatusInfoCodes | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserDeliveryStatusInfoCodes { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _6 = 4, _8 = 5, _24 = 6, _26 = 7, _30 = 8, _31 = 9, _32 = 10 }

	export enum AlertFilterActions { _0 = 0, _1 = 1, _2 = 2 }

	export enum AlertFilterModes { _0 = 0, _1 = 1 }

	export interface AlertFilterPublic {
		alertIds?: Array<string>;
		alertsAfterId?: string | null;
		categoryIds?: Array<string>;
		continuationToken?: PagedResultsPublicContinuationToken;
		maxCreationDate?: Date | null;
		minCreationDate?: Date | null;
		modifiedSince?: Date | null;
		showPersonalHiddenCategories?: boolean | null;
		statusCodes?: AlertStatusCodes;
		teamId?: string | null;
		textToSearch?: string | null;
	}
	export interface AlertFilterPublicFormProperties {
		alertsAfterId: FormControl<string | null | undefined>,
		maxCreationDate: FormControl<Date | null | undefined>,
		minCreationDate: FormControl<Date | null | undefined>,
		modifiedSince: FormControl<Date | null | undefined>,
		showPersonalHiddenCategories: FormControl<boolean | null | undefined>,
		statusCodes: FormControl<AlertStatusCodes | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		textToSearch: FormControl<string | null | undefined>,
	}
	export function CreateAlertFilterPublicFormGroup() {
		return new FormGroup<AlertFilterPublicFormProperties>({
			alertsAfterId: new FormControl<string | null | undefined>(undefined),
			maxCreationDate: new FormControl<Date | null | undefined>(undefined),
			minCreationDate: new FormControl<Date | null | undefined>(undefined),
			modifiedSince: new FormControl<Date | null | undefined>(undefined),
			showPersonalHiddenCategories: new FormControl<boolean | null | undefined>(undefined),
			statusCodes: new FormControl<AlertStatusCodes | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			textToSearch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagedResultsPublicContinuationToken {
		nextPartitionKey?: string | null;
		nextRowKey?: string | null;
		nextTableName?: string | null;
	}
	export interface PagedResultsPublicContinuationTokenFormProperties {
		nextPartitionKey: FormControl<string | null | undefined>,
		nextRowKey: FormControl<string | null | undefined>,
		nextTableName: FormControl<string | null | undefined>,
	}
	export function CreatePagedResultsPublicContinuationTokenFormGroup() {
		return new FormGroup<PagedResultsPublicContinuationTokenFormProperties>({
			nextPartitionKey: new FormControl<string | null | undefined>(undefined),
			nextRowKey: new FormControl<string | null | undefined>(undefined),
			nextTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertStatusCodes { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _8 = 4, _16 = 5, _32 = 6 }

	export interface AlertHistoryInfoDetailed {
		acknowledged?: Date | null;
		acknowledgedgements?: Array<string>;
		closed?: Date | null;
		closedBy?: string | null;
		created?: Date | null;
		historyEntries?: Array<AlertHistoryInfoEntry>;
	}
	export interface AlertHistoryInfoDetailedFormProperties {
		acknowledged: FormControl<Date | null | undefined>,
		closed: FormControl<Date | null | undefined>,
		closedBy: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
	}
	export function CreateAlertHistoryInfoDetailedFormGroup() {
		return new FormGroup<AlertHistoryInfoDetailedFormProperties>({
			acknowledged: new FormControl<Date | null | undefined>(undefined),
			closed: new FormControl<Date | null | undefined>(undefined),
			closedBy: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AlertHistoryInfoEntry {
		id?: string | null;
		timestamp?: Date | null;
		type?: AlertHistoryInfoUserEntryType;
		userId?: string | null;
	}
	export interface AlertHistoryInfoEntryFormProperties {
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<AlertHistoryInfoUserEntryType | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAlertHistoryInfoEntryFormGroup() {
		return new FormGroup<AlertHistoryInfoEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<AlertHistoryInfoUserEntryType | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertHistoryInfoUserEntryType { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7 }

	export interface AlertInfo {
		annotations?: Array<AlertAnnotationInfo>;
		attachments?: Array<AlertAttachment>;
		category?: string | null;
		categoryId?: string | null;
		eventId?: string | null;
		eventSourceId?: string | null;
		eventSourceType?: EventSourceTypes;
		flags?: number | null;
		history?: AlertHistoryInfoDetailed;
		id?: string | null;
		lastModified?: Date | null;
		parameters?: Array<EventParameterInfo>;
		severity?: AlertSeverities;
		status?: AlertStatusCodes;
		subscriptionId?: string | null;
		teamId?: string | null;
		text?: string | null;
		title?: string | null;
	}
	export interface AlertInfoFormProperties {
		category: FormControl<string | null | undefined>,
		categoryId: FormControl<string | null | undefined>,
		eventId: FormControl<string | null | undefined>,
		eventSourceId: FormControl<string | null | undefined>,
		eventSourceType: FormControl<EventSourceTypes | null | undefined>,
		flags: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		severity: FormControl<AlertSeverities | null | undefined>,
		status: FormControl<AlertStatusCodes | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAlertInfoFormGroup() {
		return new FormGroup<AlertInfoFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			eventSourceId: new FormControl<string | null | undefined>(undefined),
			eventSourceType: new FormControl<EventSourceTypes | null | undefined>(undefined),
			flags: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<AlertSeverities | null | undefined>(undefined),
			status: new FormControl<AlertStatusCodes | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventSourceTypes { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5 }

	export interface EventParameterInfo {
		name?: string | null;
		order?: number | null;
		type?: EventParameterTypes;
		value?: string | null;
	}
	export interface EventParameterInfoFormProperties {
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		type: FormControl<EventParameterTypes | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEventParameterInfoFormGroup() {
		return new FormGroup<EventParameterInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<EventParameterTypes | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventParameterTypes { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _100 = 18 }

	export enum AlertSeverities { _0 = 0, _1 = 1, _2 = 2 }

	export interface AlertNotificationInfo {
		address?: string | null;
		channelType?: AlertNotificationInfoChannelType;
		deviceName?: string | null;
		lastUpdate?: Date | null;
		messageStatus?: AlertNotificationInfoMessageStatus;
		userId?: string | null;
		userStatus?: AlertNotificationInfoUserStatus;
	}
	export interface AlertNotificationInfoFormProperties {
		address: FormControl<string | null | undefined>,
		channelType: FormControl<AlertNotificationInfoChannelType | null | undefined>,
		deviceName: FormControl<string | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		messageStatus: FormControl<AlertNotificationInfoMessageStatus | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userStatus: FormControl<AlertNotificationInfoUserStatus | null | undefined>,
	}
	export function CreateAlertNotificationInfoFormGroup() {
		return new FormGroup<AlertNotificationInfoFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			channelType: new FormControl<AlertNotificationInfoChannelType | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			messageStatus: new FormControl<AlertNotificationInfoMessageStatus | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userStatus: new FormControl<AlertNotificationInfoUserStatus | null | undefined>(undefined),
		});

	}

	export enum AlertNotificationInfoChannelType { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _8 = 4, _16 = 5 }

	export enum AlertNotificationInfoMessageStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10 }

	export enum AlertNotificationInfoUserStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6 }

	export interface AlertReport {
		last24Hours?: AlertCounts;
		subscriptionId?: string | null;
		teamCurrentDuty?: AlertCounts;
		teamId?: string | null;
		teamLastDuty?: AlertCounts;
		userId?: string | null;
		userLastDutyChange?: AlertCounts;
	}
	export interface AlertReportFormProperties {
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAlertReportFormGroup() {
		return new FormGroup<AlertReportFormProperties>({
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertResponseModes { _2 = 0, _4 = 1 }

	export interface AlertSettings {
		filterAction?: AlertFilterActions;
		filterMode?: AlertFilterModes;
		optOutMode?: TeamCategoryOptOutModes;
		persistentNotificicationMode?: PersistentNotificationModes;
		responseMode?: AlertResponseModes;
		responseTime?: number | null;
	}
	export interface AlertSettingsFormProperties {
		filterAction: FormControl<AlertFilterActions | null | undefined>,
		filterMode: FormControl<AlertFilterModes | null | undefined>,
		optOutMode: FormControl<TeamCategoryOptOutModes | null | undefined>,
		persistentNotificicationMode: FormControl<PersistentNotificationModes | null | undefined>,
		responseMode: FormControl<AlertResponseModes | null | undefined>,
		responseTime: FormControl<number | null | undefined>,
	}
	export function CreateAlertSettingsFormGroup() {
		return new FormGroup<AlertSettingsFormProperties>({
			filterAction: new FormControl<AlertFilterActions | null | undefined>(undefined),
			filterMode: new FormControl<AlertFilterModes | null | undefined>(undefined),
			optOutMode: new FormControl<TeamCategoryOptOutModes | null | undefined>(undefined),
			persistentNotificicationMode: new FormControl<PersistentNotificationModes | null | undefined>(undefined),
			responseMode: new FormControl<AlertResponseModes | null | undefined>(undefined),
			responseTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TeamCategoryOptOutModes { _0 = 0, _1 = 1, _2 = 2 }

	export enum PersistentNotificationModes { _0 = 0, _1 = 1 }

	export interface CategoryAugmentation {
		enabled?: boolean | null;
		name?: string | null;
		type?: CategoryAugmentationType;
		value?: string | null;
	}
	export interface CategoryAugmentationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<CategoryAugmentationType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCategoryAugmentationFormGroup() {
		return new FormGroup<CategoryAugmentationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CategoryAugmentationType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CategoryAugmentationType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface CategoryInfo {
		augmentations?: Array<CategoryAugmentation>;
		color?: string | null;
		id?: string | null;
		imageName?: string | null;
		isDefault?: boolean | null;
		keywordMatching?: KeywordMatchingType;
		keywords?: Array<string>;
		lastMatch?: Date | null;
		name?: string | null;
		options?: CategoryInfoOptions;
		order?: number | null;
	}
	export interface CategoryInfoFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageName: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		keywordMatching: FormControl<KeywordMatchingType | null | undefined>,
		lastMatch: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		options: FormControl<CategoryInfoOptions | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateCategoryInfoFormGroup() {
		return new FormGroup<CategoryInfoFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			keywordMatching: new FormControl<KeywordMatchingType | null | undefined>(undefined),
			lastMatch: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<CategoryInfoOptions | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum KeywordMatchingType { _0 = 0, _1 = 1 }

	export enum CategoryInfoOptions { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _8 = 4 }

	export interface CategoryMetrics {
		categoryId?: string | null;
		last24Hours?: number | null;
		lastAlert?: Date | null;
		subscriberCount?: number | null;
	}
	export interface CategoryMetricsFormProperties {
		categoryId: FormControl<string | null | undefined>,
		last24Hours: FormControl<number | null | undefined>,
		lastAlert: FormControl<Date | null | undefined>,
		subscriberCount: FormControl<number | null | undefined>,
	}
	export function CreateCategoryMetricsFormGroup() {
		return new FormGroup<CategoryMetricsFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			last24Hours: new FormControl<number | null | undefined>(undefined),
			lastAlert: new FormControl<Date | null | undefined>(undefined),
			subscriberCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CategorySubscriptionInfo {
		status?: CategorySubscriptionStatus;
		userId?: string | null;
	}
	export interface CategorySubscriptionInfoFormProperties {
		status: FormControl<CategorySubscriptionStatus | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCategorySubscriptionInfoFormGroup() {
		return new FormGroup<CategorySubscriptionInfoFormProperties>({
			status: new FormControl<CategorySubscriptionStatus | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CategorySubscriptionStatus { _0 = 0, _1 = 1, _2 = 2 }

	export interface ChangeAlertStatusFilterInfo {
		categoryIds?: Array<string>;
		maxDate?: Date | null;
		minDate?: Date | null;
		scope?: StatusChangeScope;
		teamIds?: Array<string>;
	}
	export interface ChangeAlertStatusFilterInfoFormProperties {
		maxDate: FormControl<Date | null | undefined>,
		minDate: FormControl<Date | null | undefined>,
		scope: FormControl<StatusChangeScope | null | undefined>,
	}
	export function CreateChangeAlertStatusFilterInfoFormGroup() {
		return new FormGroup<ChangeAlertStatusFilterInfoFormProperties>({
			maxDate: new FormControl<Date | null | undefined>(undefined),
			minDate: new FormControl<Date | null | undefined>(undefined),
			scope: new FormControl<StatusChangeScope | null | undefined>(undefined),
		});

	}

	export enum StatusChangeScope { _0 = 0, _1 = 1, _2 = 2 }

	export interface ChangeAlertStatusInfo {
		description?: string | null;
		userId?: string | null;
	}
	export interface ChangeAlertStatusInfoFormProperties {
		description: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateChangeAlertStatusInfoFormGroup() {
		return new FormGroup<ChangeAlertStatusInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeAlertStatusMultipleInfo {
		alertIds?: Array<string>;
		description?: string | null;
		userId?: string | null;
	}
	export interface ChangeAlertStatusMultipleInfoFormProperties {
		description: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateChangeAlertStatusMultipleInfoFormGroup() {
		return new FormGroup<ChangeAlertStatusMultipleInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelPriceInfo {
		smsPerMessage?: number | null;
		voicePerMinute?: number | null;
	}
	export interface ChannelPriceInfoFormProperties {
		smsPerMessage: FormControl<number | null | undefined>,
		voicePerMinute: FormControl<number | null | undefined>,
	}
	export function CreateChannelPriceInfoFormGroup() {
		return new FormGroup<ChannelPriceInfoFormProperties>({
			smsPerMessage: new FormControl<number | null | undefined>(undefined),
			voicePerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ChannelTypes { _0 = 0, _1 = 1, _2 = 2, _4 = 3, _8 = 4, _16 = 5 }

	export interface ContactAddressInfo {
		address?: string | null;
		channel?: ChannelTypes;
		created?: Date | null;
		device?: Device;
		id?: string | null;
		lastUpdated?: Date | null;
		options?: number | null;
		userId?: string | null;
	}
	export interface ContactAddressInfoFormProperties {
		address: FormControl<string | null | undefined>,
		channel: FormControl<ChannelTypes | null | undefined>,
		created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		options: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateContactAddressInfoFormGroup() {
		return new FormGroup<ContactAddressInfoFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<ChannelTypes | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			options: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Device {
		appVersion?: string | null;
		deviceId?: string | null;
		name?: string | null;
		osVersion?: string | null;
		ringtone?: string | null;
		ringtoneDisabled?: boolean | null;
		type?: DeviceType;
	}
	export interface DeviceFormProperties {
		appVersion: FormControl<string | null | undefined>,
		deviceId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		ringtone: FormControl<string | null | undefined>,
		ringtoneDisabled: FormControl<boolean | null | undefined>,
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			appVersion: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			ringtone: new FormControl<string | null | undefined>(undefined),
			ringtoneDisabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DeviceType | null | undefined>(undefined),
		});

	}

	export enum DeviceType { _0 = 0, _1 = 1, _2 = 2 }

	export interface DeleteRangeInfo {
		from?: Date | null;
		to?: Date | null;
	}
	export interface DeleteRangeInfoFormProperties {
		from: FormControl<Date | null | undefined>,
		to: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteRangeInfoFormGroup() {
		return new FormGroup<DeleteRangeInfoFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DutyAuditReportFileInfo {
	}
	export interface DutyAuditReportFileInfoFormProperties {
	}
	export function CreateDutyAuditReportFileInfoFormGroup() {
		return new FormGroup<DutyAuditReportFileInfoFormProperties>({
		});

	}

	export interface DutySummaryInfo {
		dutyEnd?: Date | null;
		dutyId?: string | null;
		dutyStart?: Date | null;
	}
	export interface DutySummaryInfoFormProperties {
		dutyEnd: FormControl<Date | null | undefined>,
		dutyId: FormControl<string | null | undefined>,
		dutyStart: FormControl<Date | null | undefined>,
	}
	export function CreateDutySummaryInfoFormGroup() {
		return new FormGroup<DutySummaryInfoFormProperties>({
			dutyEnd: new FormControl<Date | null | undefined>(undefined),
			dutyId: new FormControl<string | null | undefined>(undefined),
			dutyStart: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ErrorResponseContent {
		code?: number | null;
		details?: string | null;
		errors?: Array<ErrorResponseContentBase>;
		message?: string | null;
		requestId?: string | null;
	}
	export interface ErrorResponseContentFormProperties {
		code: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseContentFormGroup() {
		return new FormGroup<ErrorResponseContentFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponseContentBase {
		details?: string | null;
		message?: string | null;
	}
	export interface ErrorResponseContentBaseFormProperties {
		details: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseContentBaseFormGroup() {
		return new FormGroup<ErrorResponseContentBaseFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventFilter {
		continuationToken?: PagedResultsPublicContinuationToken;
		eventStatusCode?: EventStatusCodes;
		maxCreationDate?: Date | null;
		minCreationDate?: Date | null;
		modifiedSince?: Date | null;
		teamId?: string | null;
		textToSearch?: string | null;
	}
	export interface EventFilterFormProperties {
		eventStatusCode: FormControl<EventStatusCodes | null | undefined>,
		maxCreationDate: FormControl<Date | null | undefined>,
		minCreationDate: FormControl<Date | null | undefined>,
		modifiedSince: FormControl<Date | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		textToSearch: FormControl<string | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			eventStatusCode: new FormControl<EventStatusCodes | null | undefined>(undefined),
			maxCreationDate: new FormControl<Date | null | undefined>(undefined),
			minCreationDate: new FormControl<Date | null | undefined>(undefined),
			modifiedSince: new FormControl<Date | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			textToSearch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventStatusCodes { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _1000 = 7 }

	export enum EventSeverities { _0 = 0, _1 = 1, _2 = 2 }

	export interface EventSourceEndpointInfo {
		address?: string | null;
		groupId?: string | null;
		lastEventRaised?: Date | null;
		subscriptionId?: string | null;
		teamId?: string | null;
		type?: EventSourceEndpointTypes;
	}
	export interface EventSourceEndpointInfoFormProperties {
		address: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
		lastEventRaised: FormControl<Date | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		type: FormControl<EventSourceEndpointTypes | null | undefined>,
	}
	export function CreateEventSourceEndpointInfoFormGroup() {
		return new FormGroup<EventSourceEndpointInfoFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			lastEventRaised: new FormControl<Date | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventSourceEndpointTypes | null | undefined>(undefined),
		});

	}

	export enum EventSourceEndpointTypes { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface InventoryScriptInfo {
		config?: any;
		data?: ScriptDescriptionData;
		eventPattern?: any;
		scriptId?: string | null;
		scriptLocalizationDetails?: Array<ScriptLocalizationDetail>;
		scriptName?: string | null;
		visibility?: string | null;
	}
	export interface InventoryScriptInfoFormProperties {
		config: FormControl<any | null | undefined>,
		eventPattern: FormControl<any | null | undefined>,
		scriptId: FormControl<string | null | undefined>,
		scriptName: FormControl<string | null | undefined>,
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateInventoryScriptInfoFormGroup() {
		return new FormGroup<InventoryScriptInfoFormProperties>({
			config: new FormControl<any | null | undefined>(undefined),
			eventPattern: new FormControl<any | null | undefined>(undefined),
			scriptId: new FormControl<string | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptDescriptionData {
		description?: string | null;
		name?: string | null;
		scriptType?: string | null;
		shortDescription?: string | null;
	}
	export interface ScriptDescriptionDataFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		scriptType: FormControl<string | null | undefined>,
		shortDescription: FormControl<string | null | undefined>,
	}
	export function CreateScriptDescriptionDataFormGroup() {
		return new FormGroup<ScriptDescriptionDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scriptType: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptLocalizationDetail {
		configMetadata?: any;
		data?: ScriptDescriptionData;
		language?: string | null;
	}
	export interface ScriptLocalizationDetailFormProperties {
		configMetadata: FormControl<any | null | undefined>,
		language: FormControl<string | null | undefined>,
	}
	export function CreateScriptLocalizationDetailFormGroup() {
		return new FormGroup<ScriptLocalizationDetailFormProperties>({
			configMetadata: new FormControl<any | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvitedUserInfo {
		id?: string | null;
		isInvite?: boolean | null;
		mail?: string | null;
		name?: string | null;
		roleId?: string | null;
	}
	export interface InvitedUserInfoFormProperties {
		id: FormControl<string | null | undefined>,
		isInvite: FormControl<boolean | null | undefined>,
		mail: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		roleId: FormControl<string | null | undefined>,
	}
	export function CreateInvitedUserInfoFormGroup() {
		return new FormGroup<InvitedUserInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isInvite: new FormControl<boolean | null | undefined>(undefined),
			mail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverviewAlert {
		alertDeliveryStatus?: AlertDeliveryStatusInfo;
		annotations?: Array<AlertAnnotationInfo>;
		categoryId?: string | null;
		eventId?: string | null;
		flags?: number | null;
		historyDetailed?: AlertHistoryInfoDetailed;
		id?: string | null;
		lastModified?: Date | null;
		requiredAcknowledgements?: number | null;
		status?: AlertStatusCodes;
		subscriptionId?: string | null;
		teamId?: string | null;
		text?: string | null;
		title?: string | null;
	}
	export interface OverviewAlertFormProperties {
		categoryId: FormControl<string | null | undefined>,
		eventId: FormControl<string | null | undefined>,
		flags: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		requiredAcknowledgements: FormControl<number | null | undefined>,
		status: FormControl<AlertStatusCodes | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateOverviewAlertFormGroup() {
		return new FormGroup<OverviewAlertFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			flags: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			requiredAcknowledgements: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertStatusCodes | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverviewAlertPagedResultsPublic {
		continuationToken?: PagedResultsPublicContinuationToken;
		hasMore?: boolean | null;
		results?: Array<OverviewAlert>;
	}
	export interface OverviewAlertPagedResultsPublicFormProperties {
		hasMore: FormControl<boolean | null | undefined>,
	}
	export function CreateOverviewAlertPagedResultsPublicFormGroup() {
		return new FormGroup<OverviewAlertPagedResultsPublicFormProperties>({
			hasMore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OverviewEvent {
		acknowledgedAlerts?: Array<string>;
		alertId?: string | null;
		categoryId?: string | null;
		closedAlerts?: Array<string>;
		creationTime?: Date | null;
		eventSourceType?: EventSourceTypes;
		eventStatus?: EventStatusCodes;
		id?: string | null;
		lastModified?: Date | null;
		severity?: EventSeverities;
		teamId?: string | null;
		text?: string | null;
		title?: string | null;
	}
	export interface OverviewEventFormProperties {
		alertId: FormControl<string | null | undefined>,
		categoryId: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		eventSourceType: FormControl<EventSourceTypes | null | undefined>,
		eventStatus: FormControl<EventStatusCodes | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		severity: FormControl<EventSeverities | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateOverviewEventFormGroup() {
		return new FormGroup<OverviewEventFormProperties>({
			alertId: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			eventSourceType: new FormControl<EventSourceTypes | null | undefined>(undefined),
			eventStatus: new FormControl<EventStatusCodes | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<EventSeverities | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverviewEventPagedResultsPublic {
		continuationToken?: PagedResultsPublicContinuationToken;
		hasMore?: boolean | null;
		results?: Array<OverviewEvent>;
	}
	export interface OverviewEventPagedResultsPublicFormProperties {
		hasMore: FormControl<boolean | null | undefined>,
	}
	export function CreateOverviewEventPagedResultsPublicFormGroup() {
		return new FormGroup<OverviewEventPagedResultsPublicFormProperties>({
			hasMore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PrepaidBalanceInfo {
		balance?: number | null;
		latestTopUp?: Date | null;
		pendingTransaction?: boolean | null;
	}
	export interface PrepaidBalanceInfoFormProperties {
		balance: FormControl<number | null | undefined>,
		latestTopUp: FormControl<Date | null | undefined>,
		pendingTransaction: FormControl<boolean | null | undefined>,
	}
	export function CreatePrepaidBalanceInfoFormGroup() {
		return new FormGroup<PrepaidBalanceInfoFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			latestTopUp: new FormControl<Date | null | undefined>(undefined),
			pendingTransaction: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PrepaidSettingsInfo {
		topUpAmount?: number | null;
		topUpEnabled?: boolean | null;
		topUpLimit?: number | null;
	}
	export interface PrepaidSettingsInfoFormProperties {
		topUpAmount: FormControl<number | null | undefined>,
		topUpEnabled: FormControl<boolean | null | undefined>,
		topUpLimit: FormControl<number | null | undefined>,
	}
	export function CreatePrepaidSettingsInfoFormGroup() {
		return new FormGroup<PrepaidSettingsInfoFormProperties>({
			topUpAmount: new FormControl<number | null | undefined>(undefined),
			topUpEnabled: new FormControl<boolean | null | undefined>(undefined),
			topUpLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PrepaidTransactionInfo {
		autoTopUpId?: string | null;
		created?: Date | null;
		createdBy?: string | null;
		credits?: number | null;
		currency?: string | null;
		modified?: Date | null;
		packageCode?: string | null;
		status?: string | null;
		statusCode?: number | null;
		subscriptionId?: string | null;
		transactionId?: string | null;
	}
	export interface PrepaidTransactionInfoFormProperties {
		autoTopUpId: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		credits: FormControl<number | null | undefined>,
		currency: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		packageCode: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusCode: FormControl<number | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePrepaidTransactionInfoFormGroup() {
		return new FormGroup<PrepaidTransactionInfoFormProperties>({
			autoTopUpId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			credits: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			packageCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RaiseAlertInfo {
		attachments?: Array<AlertAttachment>;
		category?: string | null;
		externalId?: string | null;
		flags?: number | null;
		parameters?: Array<EventParameterInfo>;
		severity?: AlertSeverities;
		text?: string | null;
		title?: string | null;
	}
	export interface RaiseAlertInfoFormProperties {
		category: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,
		flags: FormControl<number | null | undefined>,
		severity: FormControl<AlertSeverities | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateRaiseAlertInfoFormGroup() {
		return new FormGroup<RaiseAlertInfoFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			flags: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<AlertSeverities | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleInfo {
		end?: Date | null;
		id?: string | null;
		options?: number | null;
		start?: Date | null;
		userId?: string | null;
	}
	export interface ScheduleInfoFormProperties {
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		options: FormControl<number | null | undefined>,
		start: FormControl<Date | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateScheduleInfoFormGroup() {
		return new FormGroup<ScheduleInfoFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptInstanceCustomUserData {
		customScriptDescription?: string | null;
		customScriptName?: string | null;
		instanceId?: string | null;
		scriptId?: string | null;
	}
	export interface ScriptInstanceCustomUserDataFormProperties {
		customScriptDescription: FormControl<string | null | undefined>,
		customScriptName: FormControl<string | null | undefined>,
		instanceId: FormControl<string | null | undefined>,
		scriptId: FormControl<string | null | undefined>,
	}
	export function CreateScriptInstanceCustomUserDataFormGroup() {
		return new FormGroup<ScriptInstanceCustomUserDataFormProperties>({
			customScriptDescription: new FormControl<string | null | undefined>(undefined),
			customScriptName: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			scriptId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptInstanceDetails {
		config?: any;
		customScriptDescription?: string | null;
		customScriptName?: string | null;
		enabled?: boolean | null;
		eventPattern?: any;
		instanceId?: string | null;
		lastModified?: Date | null;
		runtimeInformation?: ScriptInstanceInfoRuntimeInformationModel;
		scriptId?: string | null;
		scriptName?: string | null;
		subscriptionId?: string | null;
		teamId?: string | null;
	}
	export interface ScriptInstanceDetailsFormProperties {
		config: FormControl<any | null | undefined>,
		customScriptDescription: FormControl<string | null | undefined>,
		customScriptName: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		eventPattern: FormControl<any | null | undefined>,
		instanceId: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		scriptId: FormControl<string | null | undefined>,
		scriptName: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateScriptInstanceDetailsFormGroup() {
		return new FormGroup<ScriptInstanceDetailsFormProperties>({
			config: new FormControl<any | null | undefined>(undefined),
			customScriptDescription: new FormControl<string | null | undefined>(undefined),
			customScriptName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			eventPattern: new FormControl<any | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			scriptId: new FormControl<string | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptInstanceInfoRuntimeInformationModel {
		status?: ScriptInstanceInfoRuntimeStatus;
		statusMessage?: string | null;
	}
	export interface ScriptInstanceInfoRuntimeInformationModelFormProperties {
		status: FormControl<ScriptInstanceInfoRuntimeStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateScriptInstanceInfoRuntimeInformationModelFormGroup() {
		return new FormGroup<ScriptInstanceInfoRuntimeInformationModelFormProperties>({
			status: new FormControl<ScriptInstanceInfoRuntimeStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScriptInstanceInfoRuntimeStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _Minus1 = 4 }

	export interface StringItemsWrapper {
		items?: Array<string>;
	}
	export interface StringItemsWrapperFormProperties {
	}
	export function CreateStringItemsWrapperFormGroup() {
		return new FormGroup<StringItemsWrapperFormProperties>({
		});

	}

	export interface SubscriptionFeature {
		name?: string | null;
		type?: number | null;
		value?: string | null;
	}
	export interface SubscriptionFeatureFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFeatureFormGroup() {
		return new FormGroup<SubscriptionFeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionInfo {
		branchId?: string | null;
		country?: string | null;
		currency?: string | null;
		externalAccountId?: string | null;
		id?: string | null;
		name?: string | null;
		nextBilling?: Date | null;
		ownerId?: string | null;
		planCode?: string | null;
		planState?: number | null;
		referralEnabled?: boolean | null;
		status?: number | null;
	}
	export interface SubscriptionInfoFormProperties {
		branchId: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		externalAccountId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nextBilling: FormControl<Date | null | undefined>,
		ownerId: FormControl<string | null | undefined>,
		planCode: FormControl<string | null | undefined>,
		planState: FormControl<number | null | undefined>,
		referralEnabled: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionInfoFormGroup() {
		return new FormGroup<SubscriptionInfoFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			externalAccountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextBilling: new FormControl<Date | null | undefined>(undefined),
			ownerId: new FormControl<string | null | undefined>(undefined),
			planCode: new FormControl<string | null | undefined>(undefined),
			planState: new FormControl<number | null | undefined>(undefined),
			referralEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubscriptionProfile {
		name?: string | null;
	}
	export interface SubscriptionProfileFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionProfileFormGroup() {
		return new FormGroup<SubscriptionProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamDutySummaryInfo {
		dutyAssistEnabled?: boolean | null;
		dutySummaries?: Array<DutySummaryInfo>;
	}
	export interface TeamDutySummaryInfoFormProperties {
		dutyAssistEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamDutySummaryInfoFormGroup() {
		return new FormGroup<TeamDutySummaryInfoFormProperties>({
			dutyAssistEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TeamInfo {
		id?: string | null;
		memberIds?: Array<string>;
		name?: string | null;
		subscriptionId?: string | null;
		timezone?: string | null;
	}
	export interface TeamInfoFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateTeamInfoFormGroup() {
		return new FormGroup<TeamInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamProfile {
		name?: string | null;
	}
	export interface TeamProfileFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTeamProfileFormGroup() {
		return new FormGroup<TeamProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamSetupProgress {
		completedSteps?: Array<string>;
		teamId?: string | null;
		timestamp?: Date | null;
	}
	export interface TeamSetupProgressFormProperties {
		teamId: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTeamSetupProgressFormGroup() {
		return new FormGroup<TeamSetupProgressFormProperties>({
			teamId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdatePasswordInfo {
		currentPassword?: string | null;
		newPassword?: string | null;
	}
	export interface UpdatePasswordInfoFormProperties {
		currentPassword: FormControl<string | null | undefined>,
		newPassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePasswordInfoFormGroup() {
		return new FormGroup<UpdatePasswordInfoFormProperties>({
			currentPassword: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserDutyInfo {
		lastStatusChange?: Date | null;
		onDuty?: boolean | null;
		onManagerDuty?: boolean | null;
		overdue?: boolean | null;
	}
	export interface UserDutyInfoFormProperties {
		lastStatusChange: FormControl<Date | null | undefined>,
		onDuty: FormControl<boolean | null | undefined>,
		onManagerDuty: FormControl<boolean | null | undefined>,
		overdue: FormControl<boolean | null | undefined>,
	}
	export function CreateUserDutyInfoFormGroup() {
		return new FormGroup<UserDutyInfoFormProperties>({
			lastStatusChange: new FormControl<Date | null | undefined>(undefined),
			onDuty: new FormControl<boolean | null | undefined>(undefined),
			onManagerDuty: new FormControl<boolean | null | undefined>(undefined),
			overdue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserImage {
		content?: string | null;
		contentDisposition?: string | null;
		contentEncoding?: string | null;
		contentType?: string | null;
		lastModified?: Date | null;
		name?: string | null;
	}
	export interface UserImageFormProperties {
		content: FormControl<string | null | undefined>,
		contentDisposition: FormControl<string | null | undefined>,
		contentEncoding: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserImageFormGroup() {
		return new FormGroup<UserImageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentDisposition: new FormControl<string | null | undefined>(undefined),
			contentEncoding: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserInfo {
		colorIndex?: number | null;
		contactAddresses?: Array<ContactAddressInfo>;
		dutyInfo?: UserDutyInfo;
		id?: string | null;
		isDeactivated?: boolean | null;
		isInvite?: boolean | null;
		mail?: string | null;
		name?: string | null;
		roleId?: string | null;
		subscriptionId?: string | null;
		timeZone?: string | null;
		userImageLastModified?: Date | null;
	}
	export interface UserInfoFormProperties {
		colorIndex: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		isDeactivated: FormControl<boolean | null | undefined>,
		isInvite: FormControl<boolean | null | undefined>,
		mail: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		roleId: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		timeZone: FormControl<string | null | undefined>,
		userImageLastModified: FormControl<Date | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			colorIndex: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDeactivated: new FormControl<boolean | null | undefined>(undefined),
			isInvite: new FormControl<boolean | null | undefined>(undefined),
			mail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			userImageLastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UserInvitationInfo {
		inviterId?: string | null;
		userMail?: string | null;
	}
	export interface UserInvitationInfoFormProperties {
		inviterId: FormControl<string | null | undefined>,
		userMail: FormControl<string | null | undefined>,
	}
	export function CreateUserInvitationInfoFormGroup() {
		return new FormGroup<UserInvitationInfoFormProperties>({
			inviterId: new FormControl<string | null | undefined>(undefined),
			userMail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserInvitationResult {
		errorCode?: number | null;
		errorMessage?: string | null;
		invitedUser?: InvitedUserInfo;
		success?: boolean | null;
	}
	export interface UserInvitationResultFormProperties {
		errorCode: FormControl<number | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateUserInvitationResultFormGroup() {
		return new FormGroup<UserInvitationResultFormProperties>({
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserInvite {
		email?: string | null;
		roleId?: string | null;
	}
	export interface UserInviteFormProperties {
		email: FormControl<string | null | undefined>,
		roleId: FormControl<string | null | undefined>,
	}
	export function CreateUserInviteFormGroup() {
		return new FormGroup<UserInviteFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLicenseInfo {
		currentUsers?: number | null;
		isFree?: boolean | null;
		isTrial?: boolean | null;
		licensedUsers?: number | null;
		planCode?: string | null;
	}
	export interface UserLicenseInfoFormProperties {
		currentUsers: FormControl<number | null | undefined>,
		isFree: FormControl<boolean | null | undefined>,
		isTrial: FormControl<boolean | null | undefined>,
		licensedUsers: FormControl<number | null | undefined>,
		planCode: FormControl<string | null | undefined>,
	}
	export function CreateUserLicenseInfoFormGroup() {
		return new FormGroup<UserLicenseInfoFormProperties>({
			currentUsers: new FormControl<number | null | undefined>(undefined),
			isFree: new FormControl<boolean | null | undefined>(undefined),
			isTrial: new FormControl<boolean | null | undefined>(undefined),
			licensedUsers: new FormControl<number | null | undefined>(undefined),
			planCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserMembership {
		isValid?: boolean | null;
		roleId?: string | null;
		teamId?: string | null;
	}
	export interface UserMembershipFormProperties {
		isValid: FormControl<boolean | null | undefined>,
		roleId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateUserMembershipFormGroup() {
		return new FormGroup<UserMembershipFormProperties>({
			isValid: new FormControl<boolean | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserProfile {
		name?: string | null;
	}
	export interface UserProfileFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileFormGroup() {
		return new FormGroup<UserProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserSetupProgress {
		completedSteps?: Array<string>;
		timestamp?: Date | null;
		userId?: string | null;
	}
	export interface UserSetupProgressFormProperties {
		timestamp: FormControl<Date | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserSetupProgressFormGroup() {
		return new FormGroup<UserSetupProgressFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersInvitation {
		inviterId?: string | null;
		invites?: Array<UserInvite>;
	}
	export interface UsersInvitationFormProperties {
		inviterId: FormControl<string | null | undefined>,
	}
	export function CreateUsersInvitationFormGroup() {
		return new FormGroup<UsersInvitationFormProperties>({
			inviterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookBaseInfo {
		externalAddress?: string | null;
		name?: string | null;
		teamId?: string | null;
	}
	export interface WebhookBaseInfoFormProperties {
		externalAddress: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateWebhookBaseInfoFormGroup() {
		return new FormGroup<WebhookBaseInfoFormProperties>({
			externalAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookInfo {
		enabled?: boolean | null;
		externalAddress?: string | null;
		id?: string | null;
		name?: string | null;
		subscriptionId?: string | null;
		teamId?: string | null;
	}
	export interface WebhookInfoFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		externalAddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateWebhookInfoFormGroup() {
		return new FormGroup<WebhookInfoFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			externalAddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Trigger Alert
		 * Triggers a new alert for your team. All team members on duty will receive alert notifications.
		 * Post alerts
		 * @param {RaiseAlertInfo} requestBody Alert to raise.
		 * @return {void} 
		 */
		AlertsPost(requestBody: RaiseAlertInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Confirms all visible alerts
		 * This method confirms all unhandled alerts your team currently has by a specific user.
		 * Post alerts/acknowledgeAll
		 * @param {string} userId User ID of the user to be used to acknowledge the alarms.
		 * @return {void} 
		 */
		AlertsAcknowledgeAllPostByUserId(userId: string | null | undefined, requestBody: ChangeAlertStatusFilterInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/acknowledgeAll?userId=' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowlegde multiple alerts
		 * This method confirms all alerts provided.
		 * Post alerts/acknowledgeMultiple
		 * @return {void} 
		 */
		AlertsAcknowledgeMultiplePost(requestBody: ChangeAlertStatusMultipleInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/acknowledgeMultiple', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Close all acknowledged alerts.
		 * This method closes all acknowledged alerts your team currently has.
		 * Post alerts/closeAll
		 * @param {string} userId User ID of the user to be used to close the alarms.
		 * @return {void} 
		 */
		AlertsCloseAllPostByUserId(userId: string | null | undefined, requestBody: ChangeAlertStatusFilterInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/closeAll?userId=' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Close multiple alerts
		 * This method closes all alerts provided.
		 * Post alerts/closeMultiple
		 * @return {void} 
		 */
		AlertsCloseMultiplePost(requestBody: ChangeAlertStatusMultipleInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/closeMultiple', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets alerts paged
		 * Post alerts/paged
		 * @param {number} maxResults Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.
		 *                 Number of alerts could be less if filtered but at least 1.
		 * @param {string} userId User ID of the user you want to get alerts for.
		 * @param {AlertFilterPublic} requestBody The filter defines which alerts are supposed to be retrieved.
		 * @return {OverviewAlertPagedResultsPublic} Returns a paged result with found alerts and continuation token if more alerts are in the database.
		 */
		AlertsPagedPostByMaxResultsAndUserId(maxResults: number | null | undefined, userId: string | null | undefined, requestBody: AlertFilterPublic, headersHandler?: () => HttpHeaders): Observable<OverviewAlertPagedResultsPublic> {
			return this.http.post<OverviewAlertPagedResultsPublic>(this.baseUri + 'alerts/paged?maxResults=' + maxResults + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Alert Report
		 * Returns information about the occurred alert volume in different time periods as well as information about the
		 * response behaviour (amount of confirmed and unhandled alerts) of your team members.
		 * Get alerts/report
		 * @param {string} userId User ID of the user for whom you want a report.
		 * @return {AlertReport} Success
		 */
		AlertsReportGetByUserId(userId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlertReport> {
			return this.http.get<AlertReport>(this.baseUri + 'alerts/report?userId=' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Queue undo of multiple acknowledgments.
		 * This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.
		 * Post alerts/undoAcknowledgeMultiple
		 * @param {ChangeAlertStatusMultipleInfo} requestBody Configure which user should be undone for which alerts.
		 * @return {void} 
		 */
		AlertsUndoAcknowledgeMultiplePost(requestBody: ChangeAlertStatusMultipleInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/undoAcknowledgeMultiple', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Withdraw closure of multiple alerts
		 * This method tries to undo multiple alert closes. The operation is handled in the background.
		 * Post alerts/undoCloseMultiple
		 * @return {void} 
		 */
		AlertsUndoCloseMultiplePost(requestBody: ChangeAlertStatusMultipleInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alerts/undoCloseMultiple', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Alert
		 * Gets an alert by id.
		 * Get alerts/{alertId}
		 * @param {string} alertId Id of the requested Alert.
		 * @return {AlertInfo} Success
		 */
		Alerts_alertIdGet(alertId: string, headersHandler?: () => HttpHeaders): Observable<AlertInfo> {
			return this.http.get<AlertInfo>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Acknowledge an alert
		 * Post alerts/{alertId}/acknowledge
		 * @param {string} alertId Id to acknowledge an alert.
		 * @return {AlertInfo} Success
		 */
		Alerts_alertIdAcknowledgePost(alertId: string, requestBody: ChangeAlertStatusInfo, headersHandler?: () => HttpHeaders): Observable<AlertInfo> {
			return this.http.post<AlertInfo>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/acknowledge', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Annotate Alert
		 * Annotates an alert by given Annotation Info.
		 * Post alerts/{alertId}/annotate
		 * @param {string} alertId Id of the alert to annotate.
		 * @param {AlertAnnotationInfo} requestBody Annotation Information.
		 * @return {AlertAnnotationInfo} Success
		 */
		Alerts_alertIdAnnotatePost(alertId: string, requestBody: AlertAnnotationInfo, headersHandler?: () => HttpHeaders): Observable<AlertAnnotationInfo> {
			return this.http.post<AlertAnnotationInfo>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/annotate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get annotations of an alert
		 * Get annotations of an alert by id.
		 * Get alerts/{alertId}/annotations
		 * @param {string} alertId Id of the requested Alert.
		 * @return {Array<AlertAnnotationInfo>} Success
		 */
		Alerts_alertIdAnnotationsGet(alertId: string, headersHandler?: () => HttpHeaders): Observable<Array<AlertAnnotationInfo>> {
			return this.http.get<Array<AlertAnnotationInfo>>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/annotations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get attachments of an alert
		 * Get attachments of an alert by id.
		 * Get alerts/{alertId}/attachments
		 * @param {string} alertId Id of the requested Alert.
		 * @return {Array<AlertAttachmentInfo>} Success
		 */
		Alerts_alertIdAttachmentsGet(alertId: string, headersHandler?: () => HttpHeaders): Observable<Array<AlertAttachmentInfo>> {
			return this.http.get<Array<AlertAttachmentInfo>>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a specified attachment of a specified alert.
		 * Get alerts/{alertId}/attachments/{attachmentId}
		 * @param {string} alertId Id of the alert that contains the wanted attachment.
		 * @param {string} attachmentId Id of the attachment, that you want to retrieve.
		 * @param {number} width Optional parameter defining the wanted width of the picture that is retrieved.
		 * @param {number} height Optional parameter defining the wanted height of the picture that is retrieved.
		 * @param {boolean} scale Optional parameter defining whether it's wanted to scale the retrieved image. Default is set to
		 * true.
		 * @return {string} Returns the attachment image with additional meta information.
		 */
		Alerts_alertIdAttachments_attachmentIdGetByWidthAndHeightAndScale(alertId: string, attachmentId: string, width: number | null | undefined, height: number | null | undefined, scale: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '&width=' + width + '&height=' + height + '&scale=' + scale, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Close an alert
		 * Post alerts/{alertId}/close
		 * @param {string} alertId Id to acknowledge an alert.
		 * @return {AlertInfo} Success
		 */
		Alerts_alertIdClosePost(alertId: string, requestBody: ChangeAlertStatusInfo, headersHandler?: () => HttpHeaders): Observable<AlertInfo> {
			return this.http.post<AlertInfo>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/close', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get alert notifications
		 * Get notifications of all users by alert id.
		 * Get alerts/{alertId}/notifications
		 * @param {string} alertId Id of the requested Alert.
		 * @return {Array<AlertNotificationInfo>} Success
		 */
		Alerts_alertIdNotificationsGet(alertId: string, headersHandler?: () => HttpHeaders): Observable<Array<AlertNotificationInfo>> {
			return this.http.get<Array<AlertNotificationInfo>>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/notifications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an overview alert.
		 * Get overview alert by id.
		 * Get alerts/{alertId}/overview
		 * @param {string} alertId Id of the requested Alert.
		 * @return {OverviewAlert} Returns alert with all information attached.
		 */
		Alerts_alertIdOverviewGet(alertId: string, headersHandler?: () => HttpHeaders): Observable<OverviewAlert> {
			return this.http.get<OverviewAlert>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/overview', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Undo the acknowledgement of an alert.
		 * This method tries to undo an alert acknowledgement.
		 * Post alerts/{alertId}/undoAcknowledge
		 * @return {OverviewAlert} Returns updated alert.
		 */
		Alerts_alertIdUndoAcknowledgePost(alertId: string, requestBody: ChangeAlertStatusInfo, headersHandler?: () => HttpHeaders): Observable<OverviewAlert> {
			return this.http.post<OverviewAlert>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/undoAcknowledge', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Undo the closure of an alert.
		 * This method tries to undo an alert close.
		 * Post alerts/{alertId}/undoClose
		 * @return {OverviewAlert} Success
		 */
		Alerts_alertIdUndoClosePost(alertId: string, requestBody: ChangeAlertStatusInfo, headersHandler?: () => HttpHeaders): Observable<OverviewAlert> {
			return this.http.post<OverviewAlert>(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/undoClose', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the names of all alert category images.
		 * You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
		 * Get categories/images
		 * @return {Array<string>} Returns the alert categories.
		 */
		CategoriesImagesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'categories/images', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all categories
		 * Sample Request:
		 * GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
		 * Get categories/{teamId}
		 * @param {string} teamId ID of the team the categories belong to
		 * @return {Array<CategoryInfo>} Returns the category infos
		 */
		Categories_teamIdGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<CategoryInfo>> {
			return this.http.get<Array<CategoryInfo>>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new category
		 * Sample Request:
		 * POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
		 * {
		 * "name": "Water",
		 * "imageName": "water.svg",
		 * "color": "#0000cc",
		 * "keywordMatching": "Any",
		 * "keywords": [
		 * {
		 * "value": "H2O"
		 * },
		 * {
		 * "value": "Water"
		 * }
		 * ]
		 * }
		 * Post categories/{teamId}
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {CategoryInfo} requestBody Category to be created
		 * @return {void} 
		 */
		Categories_teamIdPost(teamId: string, requestBody: CategoryInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metrics for all categories
		 * Sample Request:
		 * GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics
		 * Get categories/{teamId}/metrics
		 * @param {string} teamId ID of the team the categories belongs to
		 * @return {Array<CategoryMetrics>} Returns a list of category metrics
		 */
		Categories_teamIdMetricsGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<CategoryMetrics>> {
			return this.http.get<Array<CategoryMetrics>>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/metrics', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing category
		 * Sample Request:
		 * DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
		 * Delete categories/{teamId}/{categoryId}
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {string} categoryId ID of the category to delete
		 * @return {void} If the delete operation was successful
		 */
		Categories_teamId_categoryIdDelete(teamId: string, categoryId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific category
		 * Sample Request:
		 * GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
		 * Get categories/{teamId}/{categoryId}
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {string} categoryId ID of the category to get
		 * @return {CategoryInfo} Returns the category details
		 */
		Categories_teamId_categoryIdGet(teamId: string, categoryId: string, headersHandler?: () => HttpHeaders): Observable<CategoryInfo> {
			return this.http.get<CategoryInfo>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing category
		 * Sample Request:
		 * PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
		 * {
		 * "name": "Water-Updated",
		 * "imageName": "water.svg",
		 * "color": "#0000cc",
		 * "keywordMatching": "All",
		 * "keywords": [
		 * {
		 * "value": "H2O"
		 * },
		 * {
		 * "value": "Water"
		 * },
		 * {
		 * "value": "Wet"
		 * }
		 * ]
		 * }
		 * Put categories/{teamId}/{categoryId}
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {CategoryInfo} requestBody Category to be updated
		 * @return {CategoryInfo} Returns the updated category
		 */
		Categories_teamId_categoryIdPut(teamId: string, categoryId: string, requestBody: CategoryInfo, headersHandler?: () => HttpHeaders): Observable<CategoryInfo> {
			return this.http.put<CategoryInfo>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get metrics for a specific category
		 * Sample Request:
		 * GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics
		 * Get categories/{teamId}/{categoryId}/metrics
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {string} categoryId ID of the category to get
		 * @return {CategoryMetrics} Returns the category metrics
		 */
		Categories_teamId_categoryIdMetricsGet(teamId: string, categoryId: string, headersHandler?: () => HttpHeaders): Observable<CategoryMetrics> {
			return this.http.get<CategoryMetrics>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '/metrics', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get category subscriptions
		 * Sample Request:
		 * GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
		 * {
		 * }
		 * Get categories/{teamId}/{categoryId}/subscriptions
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {string} categoryId Category to get subscriptions for
		 * @return {Array<CategorySubscriptionInfo>} Returns the category subscriptions
		 */
		Categories_teamId_categoryIdSubscriptionsGet(teamId: string, categoryId: string, headersHandler?: () => HttpHeaders): Observable<Array<CategorySubscriptionInfo>> {
			return this.http.get<Array<CategorySubscriptionInfo>>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '/subscriptions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Set category subscriptions
		 * Sample Request:
		 * POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
		 * {
		 * }
		 * Post categories/{teamId}/{categoryId}/subscriptions
		 * @param {string} teamId ID of the team the category belongs to
		 * @param {string} categoryId Category to be updated
		 * @return {Array<CategorySubscriptionInfo>} Returns the updated category subscriptions
		 */
		Categories_teamId_categoryIdSubscriptionsPost(teamId: string, categoryId: string, requestBody: Array<CategorySubscriptionInfo>, headersHandler?: () => HttpHeaders): Observable<Array<CategorySubscriptionInfo>> {
			return this.http.post<Array<CategorySubscriptionInfo>>(this.baseUri + 'categories/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '/subscriptions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get overview event paged.
		 * Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.
		 * Post events/paged
		 * @param {number} maxResults Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.
		 *                  Number of alerts could be less if filtered but at least 1.
		 * @param {EventFilter} requestBody The filter defines which alerts are supposed to be retrieved.
		 * @return {OverviewEventPagedResultsPublic} Returns paged result with found events and continuation token, if database holds more events.
		 */
		EventsPagedPostByMaxResults(maxResults: number | null | undefined, requestBody: EventFilter, headersHandler?: () => HttpHeaders): Observable<OverviewEventPagedResultsPublic> {
			return this.http.post<OverviewEventPagedResultsPublic>(this.baseUri + 'events/paged?maxResults=' + maxResults, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get overview event
		 * Get overview event by id.
		 * Get events/{eventId}/overview
		 * @param {string} eventId Id of event to get.
		 * @return {OverviewEvent} Returns overview event with specific id.
		 */
		Events_eventIdOverviewGet(eventId: string, headersHandler?: () => HttpHeaders): Observable<OverviewEvent> {
			return this.http.get<OverviewEvent>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/overview', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get event parameters
		 * Get parameters of an event by id.
		 * Get events/{eventId}/parameters
		 * @param {string} eventId Event Id of the requested Alert.
		 * @return {Array<EventParameterInfo>} Success
		 */
		Events_eventIdParametersGet(eventId: string, headersHandler?: () => HttpHeaders): Observable<Array<EventParameterInfo>> {
			return this.http.get<Array<EventParameterInfo>>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/parameters', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get your subscription's current prepaid balance.
		 * Get prepaid/balance
		 * @return {PrepaidBalanceInfo} Success
		 */
		PrepaidBalanceGet(headersHandler?: () => HttpHeaders): Observable<PrepaidBalanceInfo> {
			return this.http.get<PrepaidBalanceInfo>(this.baseUri + 'prepaid/balance', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get your subscription's current prepaid settings.
		 * Get prepaid/settings
		 * @return {PrepaidSettingsInfo} Success
		 */
		PrepaidSettingsGet(headersHandler?: () => HttpHeaders): Observable<PrepaidSettingsInfo> {
			return this.http.get<PrepaidSettingsInfo>(this.baseUri + 'prepaid/settings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update your subscription's current prepaid settings.
		 * Put prepaid/settings
		 * @param {PrepaidSettingsInfo} requestBody Settings object containing the new values.
		 * @return {PrepaidSettingsInfo} Success
		 */
		PrepaidSettingsPut(requestBody: PrepaidSettingsInfo, headersHandler?: () => HttpHeaders): Observable<PrepaidSettingsInfo> {
			return this.http.put<PrepaidSettingsInfo>(this.baseUri + 'prepaid/settings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get your subscription's prepaid transactions.
		 * Get prepaid/transactions
		 * @return {Array<PrepaidTransactionInfo>} Success
		 */
		PrepaidTransactionsGet(headersHandler?: () => HttpHeaders): Observable<Array<PrepaidTransactionInfo>> {
			return this.http.get<Array<PrepaidTransactionInfo>>(this.baseUri + 'prepaid/transactions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all script instances of the SIGNL4 team
		 * Returns all script instances in the subscription.
		 * Get scripts/instances
		 * @return {Array<ScriptInstanceDetails>} Success
		 */
		ScriptsInstancesGetByTeamId(teamId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ScriptInstanceDetails>> {
			return this.http.get<Array<ScriptInstanceDetails>>(this.baseUri + 'scripts/instances?teamId=' + (teamId == null ? '' : encodeURIComponent(teamId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new script instance in the in the SIGNL4 team.
		 * Creates a new script instance of the script specified in the request body.
		 * Post scripts/instances
		 * @param {ScriptInstanceDetails} requestBody Script instance to be created.
		 * @return {ScriptInstanceDetails} Existing script instance was updated as specified in body.
		 */
		ScriptsInstancesPost(requestBody: ScriptInstanceDetails, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.post<ScriptInstanceDetails>(this.baseUri + 'scripts/instances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a script instance.
		 * Gets the script instance specified by the passed instance id.
		 * Delete scripts/instances/{instanceId}
		 * @param {string} instanceId Instance Id of script instance to be returned.
		 * @return {void} Success
		 */
		ScriptsInstances_instanceIdDelete(instanceId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all information about a given script instance which includes its runtime status.
		 * Gets the script instance specified by the passed instance id.
		 * Get scripts/instances/{instanceId}
		 * @param {string} instanceId Instance Id of script instance to be returned.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInstances_instanceIdGet(instanceId: string, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.get<ScriptInstanceDetails>(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a given script instance, typically used for updating the configuration of a script.
		 * Updates the specified script instance.
		 * Put scripts/instances/{instanceId}
		 * @param {string} instanceId InstanceId of the script to be updated.
		 * @param {ScriptInstanceDetails} requestBody Script instance to be updated.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInstances_instanceIdPut(instanceId: string, requestBody: ScriptInstanceDetails, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.put<ScriptInstanceDetails>(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates custom data of a given script instance which includes its display name.
		 * Updates the specified script instance.
		 * Put scripts/instances/{instanceId}/data
		 * @param {string} instanceId InstanceId of the script to be updated.
		 * @param {ScriptInstanceCustomUserData} requestBody Script instance to be updated.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInstances_instanceIdDataPut(instanceId: string, requestBody: ScriptInstanceCustomUserData, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.put<ScriptInstanceDetails>(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/data', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disables a given script instance.
		 * Post scripts/instances/{instanceId}/disable
		 * @param {string} instanceId Id of the instance to be disabled.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInstances_instanceIdDisablePost(instanceId: string, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.post<ScriptInstanceDetails>(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/disable', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Enables a script instance.
		 * Post scripts/instances/{instanceId}/enable
		 * @param {string} instanceId Id of the instance to be enabled.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInstances_instanceIdEnablePost(instanceId: string, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.post<ScriptInstanceDetails>(this.baseUri + 'scripts/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/enable', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all available inventory scripts which can be added to a SIGNL4 subscription.
		 * Returns all available inventory scripts which can be added to a SIGNL4 subscription.
		 * Get scripts/inventory
		 * @return {Array<InventoryScriptInfo>} Success
		 */
		ScriptsInventoryGet(headersHandler?: () => HttpHeaders): Observable<Array<InventoryScriptInfo>> {
			return this.http.get<Array<InventoryScriptInfo>>(this.baseUri + 'scripts/inventory', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all inventory scripts.
		 * Get scripts/inventory/parsed
		 * @return {Array<InventoryScriptInfo>} Success
		 */
		ScriptsInventoryParsedGetByLanguage(language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<InventoryScriptInfo>> {
			return this.http.get<Array<InventoryScriptInfo>>(this.baseUri + 'scripts/inventory/parsed?language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an inventory script by its id.
		 * Gets the script specified by the passed script id.
		 * Get scripts/inventory/parsed/{scriptId}
		 * @param {string} scriptId The Id of the script to be returned.
		 * @return {ScriptInstanceDetails} Success
		 */
		ScriptsInventoryParsed_scriptIdGetByLanguage(scriptId: string, language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ScriptInstanceDetails> {
			return this.http.get<ScriptInstanceDetails>(this.baseUri + 'scripts/inventory/parsed/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get infos of all available/managed subscriptions.
		 * Get subscriptions
		 * @return {Array<SubscriptionInfo>} Success
		 */
		SubscriptionsGet(headersHandler?: () => HttpHeaders): Observable<Array<SubscriptionInfo>> {
			return this.http.get<Array<SubscriptionInfo>>(this.baseUri + 'subscriptions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get infos of a specific subscription.
		 * Get subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Id of the subscription that's to be retrieved.
		 * @return {SubscriptionInfo} Success
		 */
		Subscriptions_subscriptionIdGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<SubscriptionInfo> {
			return this.http.get<SubscriptionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the subscription's channel price information.
		 * Get subscriptions/{subscriptionId}/channelPrices
		 * @param {string} subscriptionId Id of the subscription that needs to be retrieved.
		 * @return {ChannelPriceInfo} Success
		 */
		Subscriptions_subscriptionIdChannelPricesGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<ChannelPriceInfo> {
			return this.http.get<ChannelPriceInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/channelPrices', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the features of a specified subscription.
		 * Get subscriptions/{subscriptionId}/features
		 * @param {string} subscriptionId Id of the subscription from which the features need to be retrieved.
		 * @return {Array<SubscriptionFeature>} Success
		 */
		Subscriptions_subscriptionIdFeaturesGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<Array<SubscriptionFeature>> {
			return this.http.get<Array<SubscriptionFeature>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a subscription's current prepaid balance.
		 * Get subscriptions/{subscriptionId}/prepaidBalance
		 * @return {PrepaidBalanceInfo} Success
		 */
		Subscriptions_subscriptionIdPrepaidBalanceGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<PrepaidBalanceInfo> {
			return this.http.get<PrepaidBalanceInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/prepaidBalance', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a subscription's current prepaid settings.
		 * Get subscriptions/{subscriptionId}/prepaidSettings
		 * @return {PrepaidSettingsInfo} Success
		 */
		Subscriptions_subscriptionIdPrepaidSettingsGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<PrepaidSettingsInfo> {
			return this.http.get<PrepaidSettingsInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/prepaidSettings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a subscription's current prepaid settings.
		 * Put subscriptions/{subscriptionId}/prepaidSettings
		 * @param {string} subscriptionId ID of the subscription
		 * @param {PrepaidSettingsInfo} requestBody Settings object containing the new values.
		 * @return {PrepaidSettingsInfo} Success
		 */
		Subscriptions_subscriptionIdPrepaidSettingsPut(subscriptionId: string, requestBody: PrepaidSettingsInfo, headersHandler?: () => HttpHeaders): Observable<PrepaidSettingsInfo> {
			return this.http.put<PrepaidSettingsInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/prepaidSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a subscription's prepaid transactions.
		 * Get subscriptions/{subscriptionId}/prepaidTransactions
		 * @param {string} subscriptionId ID of the subscription to get transactions for
		 * @return {Array<PrepaidTransactionInfo>} Success
		 */
		Subscriptions_subscriptionIdPrepaidTransactionsGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<Array<PrepaidTransactionInfo>> {
			return this.http.get<Array<PrepaidTransactionInfo>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/prepaidTransactions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a subscriptions profile.
		 * Put subscriptions/{subscriptionId}/profile
		 * @param {string} subscriptionId ID of the subscription to be updated
		 * @param {SubscriptionProfile} requestBody Profile data to update subscription with
		 * @return {SubscriptionInfo} Success
		 */
		Subscriptions_subscriptionIdProfilePut(subscriptionId: string, requestBody: SubscriptionProfile, headersHandler?: () => HttpHeaders): Observable<SubscriptionInfo> {
			return this.http.put<SubscriptionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/profile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get infos for all teams of the subscription.
		 * Get subscriptions/{subscriptionId}/teams
		 * @return {Array<TeamInfo>} Success
		 */
		Subscriptions_subscriptionIdTeamsGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<Array<TeamInfo>> {
			return this.http.get<Array<TeamInfo>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/teams', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a subscription's user licenses.
		 * Get subscriptions/{subscriptionId}/userLicenses
		 * @param {string} subscriptionId ID of the subscription
		 * @return {UserLicenseInfo} Success
		 */
		Subscriptions_subscriptionIdUserLicensesGet(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<UserLicenseInfo> {
			return this.http.get<UserLicenseInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/userLicenses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get infos of all teams.
		 * Get teams
		 * @return {Array<TeamInfo>} Success
		 */
		TeamsGet(headersHandler?: () => HttpHeaders): Observable<Array<TeamInfo>> {
			return this.http.get<Array<TeamInfo>>(this.baseUri + 'teams', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets infos of a specific team.
		 * Get teams/{teamId}
		 * @param {string} teamId ID of the team that should be retrieved.
		 * @return {TeamInfo} Success
		 */
		Teams_teamIdGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<TeamInfo> {
			return this.http.get<TeamInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about downloadable alert reports
		 * Get teams/{teamId}/alertReports
		 * @param {string} teamId ID of team you want to download reports from.
		 * @return {Array<AlertAuditReportFileInfo>} Success
		 */
		Teams_teamIdAlertReportsGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<AlertAuditReportFileInfo>> {
			return this.http.get<Array<AlertAuditReportFileInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/alertReports', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns Alert Report
		 * Get teams/{teamId}/alertReports/{fileName}
		 * @param {string} teamId ID of team you want to get the duty report file infos for.
		 * @param {string} fileName File name of file you want to download.
		 * @return {string} Success
		 */
		Teams_teamIdAlertReports_fileNameGet(teamId: string, fileName: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/alertReports/' + (fileName == null ? '' : encodeURIComponent(fileName)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets alert settings of a specific team.
		 * Get teams/{teamId}/alertSettings
		 * @param {string} teamId ID of the team the settings should be retrieved for.
		 * @return {AlertSettings} Success
		 */
		Teams_teamIdAlertSettingsGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<AlertSettings> {
			return this.http.get<AlertSettings>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/alertSettings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets alert settings of a specific team.
		 * Post teams/{teamId}/alertSettings
		 * @param {string} teamId ID of the team the settings should be set for.
		 * @param {AlertSettings} requestBody Alert settings to be set
		 * @return {AlertSettings} Success
		 */
		Teams_teamIdAlertSettingsPost(teamId: string, requestBody: AlertSettings, headersHandler?: () => HttpHeaders): Observable<AlertSettings> {
			return this.http.post<AlertSettings>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/alertSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Information about downloadable reports
		 * Get teams/{teamId}/dutyReports
		 * @param {string} teamId ID of team you want to get the duty report file infos for.
		 * @return {Array<DutyAuditReportFileInfo>} Success
		 */
		Teams_teamIdDutyReportsGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<DutyAuditReportFileInfo>> {
			return this.http.get<Array<DutyAuditReportFileInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/dutyReports', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download duty report with a specific fileName
		 * Get teams/{teamId}/dutyReports/{fileName}
		 * @param {string} teamId ID of team you want to download the duty report for.
		 * @param {string} fileName Filename of the csv to download.
		 * @return {string} Success
		 */
		Teams_teamIdDutyReports_fileNameGet(teamId: string, fileName: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/dutyReports/' + (fileName == null ? '' : encodeURIComponent(fileName)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get duty assistant info for a team
		 * Get teams/{teamId}/dutysummary
		 * @param {string} teamId ID of the team the duty belongs to.
		 * @return {TeamDutySummaryInfo} Success
		 */
		Teams_teamIdDutysummaryGetByLastTwoDuties(teamId: string, lastTwoDuties: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<TeamDutySummaryInfo> {
			return this.http.get<TeamDutySummaryInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/dutysummary&lastTwoDuties=' + lastTwoDuties, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets event sources of a specific team.
		 * Get teams/{teamId}/eventSources
		 * @param {string} teamId ID of the team the sources should be retrieved for.
		 * @return {Array<EventSourceEndpointInfo>} Success
		 */
		Teams_teamIdEventSourcesGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<EventSourceEndpointInfo>> {
			return this.http.get<Array<EventSourceEndpointInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/eventSources', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all invites of a team.
		 * Get teams/{teamId}/memberships
		 * @param {string} teamId Team ID of team you want to request.
		 * @return {Array<InvitedUserInfo>} User invitations are returned.
		 */
		Teams_teamIdMembershipsGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<Array<InvitedUserInfo>> {
			return this.http.get<Array<InvitedUserInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Invite users to a team
		 * Post teams/{teamId}/memberships
		 * @param {string} teamId Id of team the user should be invited to.
		 * @param {UsersInvitation} requestBody Information about user to invite and inviter id.
		 * @return {Array<UserInvitationResult>} User invitation results are returned.
		 */
		Teams_teamIdMembershipsPost(teamId: string, requestBody: UsersInvitation, headersHandler?: () => HttpHeaders): Observable<Array<UserInvitationResult>> {
			return this.http.post<Array<UserInvitationResult>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sends invite email again if an invite exists
		 * Post teams/{teamId}/memberships/resendInviteMail
		 * @param {string} teamId Team ID of team with invited user.
		 * @param {UserInvitationInfo} requestBody Information which user should be invited again.
		 * @return {string} Success
		 */
		Teams_teamIdMembershipsResendInviteMailPost(teamId: string, requestBody: UserInvitationInfo, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/resendInviteMail', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Removes a user or invitation from a team, and may delete the user if he is not in any team.
		 * Delete teams/{teamId}/memberships/{userId}
		 * @param {string} teamId ID of the team the user should be deleted from
		 * @param {string} userId ID of the user that should be deleted
		 * @param {string} requesterUserId User ID of user which will remove the other user.
		 * @return {string} Success message
		 */
		Teams_teamIdMemberships_userIdDeleteByRequesterUserId(teamId: string, userId: string, requesterUserId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/' + (userId == null ? '' : encodeURIComponent(userId)) + '&requesterUserId=' + (requesterUserId == null ? '' : encodeURIComponent(requesterUserId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Update user's team membership.
		 * Updates the user's team membership. You can move the user to another team within the subscription
		 * and/or change the user's role.
		 * Put teams/{teamId}/memberships/{userId}
		 * @param {string} teamId Team the user you want to update belongs to at the moment.
		 * @param {string} userId User ID of user you want to update.
		 * @param {string} requesterUserId User ID of user which you want to change role with. This must be provided when using an api key. This user must have role administrator (for setting administrator role) or team administrator (for setting  rights.
		 * @param {UserMembership} requestBody Information about role id and target team id.
		 * @return {UserInfo} User was successfully updated.
		 */
		Teams_teamIdMemberships_userIdPutByRequesterUserId(teamId: string, userId: string, requesterUserId: string | null | undefined, requestBody: UserMembership, headersHandler?: () => HttpHeaders): Observable<UserInfo> {
			return this.http.put<UserInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/' + (userId == null ? '' : encodeURIComponent(userId)) + '&requesterUserId=' + (requesterUserId == null ? '' : encodeURIComponent(requesterUserId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates team profile of a team
		 * Put teams/{teamId}/profile
		 * @param {string} teamId Team ID of team which should be updated.
		 * @return {TeamInfo} Success
		 */
		Teams_teamIdProfilePut(teamId: string, requestBody: TeamProfile, headersHandler?: () => HttpHeaders): Observable<TeamInfo> {
			return this.http.put<TeamInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/profile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns information about all duties that belong to the team.
		 * Get teams/{teamId}/schedules
		 * @param {string} teamId Id of the team the schedules user belongs to
		 * @return {Array<ScheduleInfo>} Success
		 */
		Teams_teamIdSchedulesGetByUserIdAndMinDateAndLimit(teamId: string, UserId: string | null | undefined, MinDate: Date | null | undefined, Limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ScheduleInfo>> {
			return this.http.get<Array<ScheduleInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules&UserId=' + (UserId == null ? '' : encodeURIComponent(UserId)) + '&MinDate=' + MinDate?.toISOString() + '&Limit=' + Limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create/Update given duty schedule.
		 * Post teams/{teamId}/schedules
		 * @param {string} teamId Id of the team the duty is to be assigned to.
		 * @param {ScheduleInfo} requestBody information about the duty schedule to be created
		 * @return {ScheduleInfo} Success
		 */
		Teams_teamIdSchedulesPost(teamId: string, requestBody: ScheduleInfo, headersHandler?: () => HttpHeaders): Observable<ScheduleInfo> {
			return this.http.post<ScheduleInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete duty schedules in range
		 * Post teams/{teamId}/schedules/deleteRange
		 * @param {string} teamId Team ID you want to delete
		 * @param {DeleteRangeInfo} requestBody Information with date range to delete from to
		 * @return {Array<ScheduleInfo>} Success
		 */
		Teams_teamIdSchedulesDeleteRangePost(teamId: string, requestBody: DeleteRangeInfo, headersHandler?: () => HttpHeaders): Observable<Array<ScheduleInfo>> {
			return this.http.post<Array<ScheduleInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules/deleteRange', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Save multiple schedules. It is possible to override existing schedules if you wish
		 * Post teams/{teamId}/schedules/multiple
		 * @param {string} teamId Team ID to set
		 * @param {boolean} overrideExisting Override or cut existing schedules if set to true.
		 * @param {Array<ScheduleInfo>} requestBody List of schedules to save
		 * @return {Array<ScheduleInfo>} Success
		 */
		Teams_teamIdSchedulesMultiplePostByOverrideExisting(teamId: string, overrideExisting: boolean | null | undefined, requestBody: Array<ScheduleInfo>, headersHandler?: () => HttpHeaders): Observable<Array<ScheduleInfo>> {
			return this.http.post<Array<ScheduleInfo>>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules/multiple&overrideExisting=' + overrideExisting, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a specific duty.
		 * Delete teams/{teamId}/schedules/{dutyId}
		 * @param {string} teamId ID of the team the duty belongs to.
		 * @param {string} dutyId ID of the duty to be deleted.
		 * @return {void} 
		 */
		Teams_teamIdSchedules_dutyIdDelete(teamId: string, dutyId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules/' + (dutyId == null ? '' : encodeURIComponent(dutyId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information of the duty schedule with the specified Id.
		 * Get teams/{teamId}/schedules/{scheduleId}
		 * @param {string} teamId Id of the team the duty belongs to
		 * @param {string} scheduleId Id of the requested duty schedule.
		 * @return {ScheduleInfo} Success
		 */
		Teams_teamIdSchedules_scheduleIdGet(teamId: string, scheduleId: string, headersHandler?: () => HttpHeaders): Observable<ScheduleInfo> {
			return this.http.get<ScheduleInfo>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/schedules/' + (scheduleId == null ? '' : encodeURIComponent(scheduleId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets setup progress of a specific team.
		 * Get teams/{teamId}/setupProgress
		 * @param {string} teamId ID of the team the progress should be retrieved for.
		 * @return {TeamSetupProgress} Success
		 */
		Teams_teamIdSetupProgressGet(teamId: string, headersHandler?: () => HttpHeaders): Observable<TeamSetupProgress> {
			return this.http.get<TeamSetupProgress>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/setupProgress', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Users
		 * Returns a list of user objects with details such as their email address and duty information. Only users who
		 * are part of your team will be returned.
		 * Get users
		 * @return {Array<UserInfo>} User could be successfully identified.
		 */
		UsersGet(headersHandler?: () => HttpHeaders): Observable<Array<UserInfo>> {
			return this.http.get<Array<UserInfo>>(this.baseUri + 'users', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User by Id
		 * Returns a user object with details such as his email address and duty information.
		 * Get users/{userId}
		 * @param {string} userId Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.
		 * Can also be an email address of a user in the team or the unique id of an according user object.”
		 * @return {UserInfo} User could be successfully identified.
		 */
		Users_userIdGet(userId: string, headersHandler?: () => HttpHeaders): Observable<UserInfo> {
			return this.http.get<UserInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the password of a user
		 * Put users/{userId}/changePassword
		 * @param {string} userId User ID of user whose password should be changed.
		 * @return {void} Success
		 */
		Users_userIdChangePasswordPut(userId: string, requestBody: UpdatePasswordInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/changePassword', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks if a user has the provided permission.
		 * Post users/{userId}/checkPermissions
		 * @param {string} userId ID of the user to check permissions for.
		 * @param {StringItemsWrapper} requestBody List of permissions to check
		 * @return {UserImage} Success
		 */
		Users_userIdCheckPermissionsPostByTeamId(userId: string, teamId: string | null | undefined, requestBody: StringItemsWrapper, headersHandler?: () => HttpHeaders): Observable<UserImage> {
			return this.http.post<UserImage>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/checkPermissions&teamId=' + (teamId == null ? '' : encodeURIComponent(teamId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get duty status by user Id
		 * Returns a object with duty information.
		 * Get users/{userId}/dutyStatus
		 * @param {string} userId Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.
		 * Can also be an email address of a user in the team or the unique id of an according user object.”
		 * @return {UserDutyInfo} Duty successfully loaded.
		 */
		Users_userIdDutyStatusGet(userId: string, headersHandler?: () => HttpHeaders): Observable<UserDutyInfo> {
			return this.http.get<UserDutyInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/dutyStatus', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get users/{userId}/image
		 * @return {UserImage} Success
		 */
		Users_userIdImageGetByHeightAndWidth(userId: string, height: number | null | undefined, width: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserImage> {
			return this.http.get<UserImage>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/image&height=' + height + '&width=' + width, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Uploaded a profile image for a specified user.
		 * Post users/{userId}/image
		 * @param {string} userId Id of the user.
		 * @return {void} Success
		 */
		Users_userIdImagePost(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/image', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates user profile of an user
		 * Put users/{userId}/profile
		 * @param {string} userId ID of user to update.
		 * @return {UserInfo} Success
		 */
		Users_userIdProfilePut(userId: string, requestBody: UserProfile, headersHandler?: () => HttpHeaders): Observable<UserInfo> {
			return this.http.put<UserInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/profile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Punch User in
		 * The specified user will be punched in to duty.
		 * Post users/{userId}/punchIn
		 * @param {string} userId Identifier of the user to punch in. Use 'Me' to get information about the currently logged in
		 * user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”
		 * @return {UserDutyInfo} Success
		 */
		Users_userIdPunchInPost(userId: string, headersHandler?: () => HttpHeaders): Observable<UserDutyInfo> {
			return this.http.post<UserDutyInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/punchIn', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Punch User in as Manager
		 * The specified user will be punched in to duty as a manager.
		 * Post users/{userId}/punchInAsManager
		 * @param {string} userId Identifier of the user to punch in. Use 'Me' to get information about the currently logged in
		 * user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”
		 * @return {UserDutyInfo} Success
		 */
		Users_userIdPunchInAsManagerPost(userId: string, headersHandler?: () => HttpHeaders): Observable<UserDutyInfo> {
			return this.http.post<UserDutyInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/punchInAsManager', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Punch User out
		 * The specified user will be punched out from duty.
		 * Post users/{userId}/punchOut
		 * @param {string} userId Identifier of the user to punch out. Use 'Me' to get information about the currently logged in
		 * user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”
		 * @return {UserDutyInfo} The user was punched out successfully.
		 */
		Users_userIdPunchOutPost(userId: string, headersHandler?: () => HttpHeaders): Observable<UserDutyInfo> {
			return this.http.post<UserDutyInfo>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/punchOut', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets setup progress of a specific user.
		 * Get users/{userId}/setupProgress
		 * @param {string} userId ID of the user the progress should be retrieved for.
		 * @return {UserSetupProgress} Success
		 */
		Users_userIdSetupProgressGet(userId: string, headersHandler?: () => HttpHeaders): Observable<UserSetupProgress> {
			return this.http.get<UserSetupProgress>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/setupProgress', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Webhooks
		 * Returns a collection of defined outbound webhooks in the system.
		 * Get webhooks
		 * @return {Array<WebhookInfo>} Request was successful and response body contains information about all outbound webhooks in the subscription.
		 */
		WebhooksGetByTeamId(teamId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<WebhookInfo>> {
			return this.http.get<Array<WebhookInfo>>(this.baseUri + 'webhooks?teamId=' + (teamId == null ? '' : encodeURIComponent(teamId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Webhook
		 * Creates a new outbound webhook that will be notified when certain events occur.
		 * Post webhooks
		 * @param {WebhookBaseInfo} requestBody Json object that contains the external URL of the webhook.
		 * @return {void} 
		 */
		WebhooksPost(requestBody: WebhookBaseInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Webhook by Id
		 * Deletes the specified webhook so that it will no longer be notified.
		 * Delete webhooks/{webhookId}
		 * @param {string} webhookId Id of the outbound webhook that will be deleted.
		 * @return {void} Webhook was successfully deleted.
		 */
		Webhooks_webhookIdDelete(webhookId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Webhook by Id
		 * Returns information of the webhook specified by the passed id.
		 * Get webhooks/{webhookId}
		 * @param {string} webhookId Id of the outbound webhook to be retrieved.
		 * @return {string} Request was successful and response body contains information about the requested webhook.
		 */
		Webhooks_webhookIdGet(webhookId: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Update Webhook by Id
		 * Updates the specified webhook.
		 * Put webhooks/{webhookId}
		 * @param {string} webhookId Id of the outbound webhook to be updated.
		 * @param {WebhookBaseInfo} requestBody Json object containing the updated URL of the webhook.
		 * @return {WebhookInfo} Update was successful and response body contains the updated webhook details.
		 */
		Webhooks_webhookIdPut(webhookId: string, requestBody: WebhookBaseInfo, headersHandler?: () => HttpHeaders): Observable<WebhookInfo> {
			return this.http.put<WebhookInfo>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Ability to enable a webHook.
		 * Post webhooks/{webhookId}/disable
		 * @param {string} webhookId Webhook ID for webhook which should be disabled.
		 * @return {WebhookInfo} Disable was successful and response body contains the webhook details.
		 */
		Webhooks_webhookIdDisablePost(webhookId: string, headersHandler?: () => HttpHeaders): Observable<WebhookInfo> {
			return this.http.post<WebhookInfo>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)) + '/disable', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Ability to disable a webHook.
		 * Post webhooks/{webhookId}/enable
		 * @param {string} webhookId Webhook ID for webhook which should be enabled.
		 * @return {WebhookInfo} Success
		 */
		Webhooks_webhookIdEnablePost(webhookId: string, headersHandler?: () => HttpHeaders): Observable<WebhookInfo> {
			return this.http.post<WebhookInfo>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)) + '/enable', null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

