import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Android Policy entity for Intune MAM. */
	export interface AndroidMAMPolicy extends Resource {

		/** Intune MAM iOS Policy Properties. */
		properties?: AndroidMAMPolicyProperties;
	}

	/** Android Policy entity for Intune MAM. */
	export interface AndroidMAMPolicyFormProperties extends ResourceFormProperties {
	}
	export function CreateAndroidMAMPolicyFormGroup() {
		return new FormGroup<AndroidMAMPolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AndroidMAMPolicyCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<AndroidMAMPolicy>;
	}
	export interface AndroidMAMPolicyCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateAndroidMAMPolicyCollectionFormGroup() {
		return new FormGroup<AndroidMAMPolicyCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Intune MAM iOS Policy Properties. */
	export interface AndroidMAMPolicyProperties extends MAMPolicyProperties {
		fileEncryption?: AndroidMAMPolicyPropertiesFileEncryption | null;
		screenCapture?: AndroidMAMPolicyPropertiesScreenCapture | null;
	}

	/** Intune MAM iOS Policy Properties. */
	export interface AndroidMAMPolicyPropertiesFormProperties extends MAMPolicyPropertiesFormProperties {
		fileEncryption: FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>,
		screenCapture: FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>,
	}
	export function CreateAndroidMAMPolicyPropertiesFormGroup() {
		return new FormGroup<AndroidMAMPolicyPropertiesFormProperties>({
			accessRecheckOfflineTimeout: new FormControl<string | null | undefined>(undefined),
			accessRecheckOnlineTimeout: new FormControl<string | null | undefined>(undefined),
			appSharingFromLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			appSharingToLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			authentication: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			clipboardSharingLevel: new FormControl<MAMPolicyPropertiesClipboardSharingLevel | null | undefined>(undefined),
			dataBackup: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			deviceCompliance: new FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>(undefined),
			fileSharingSaveAs: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupStatus: new FormControl<MAMPolicyPropertiesGroupStatus | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			managedBrowser: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			numOfApps: new FormControl<number | null | undefined>(undefined),
			offlineWipeTimeout: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			pinNumRetry: new FormControl<number | null | undefined>(undefined),
			fileEncryption: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			screenCapture: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
		});

	}

	export enum AndroidMAMPolicyPropertiesFileEncryption { required = 'required', notRequired = 'notRequired' }

	export enum AndroidMAMPolicyPropertiesScreenCapture { allow = 'allow', block = 'block' }


	/** Application entity for Intune MAM. */
	export interface Application extends Resource {
		properties?: ApplicationProperties;
	}

	/** Application entity for Intune MAM. */
	export interface ApplicationFormProperties extends ResourceFormProperties {
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<Application>;
	}
	export interface ApplicationCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationCollectionFormGroup() {
		return new FormGroup<ApplicationCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationProperties {
		appId?: string | null;

		/** Required */
		friendlyName: string;

		/** Required */
		platform: ApplicationPropertiesPlatform;
	}
	export interface ApplicationPropertiesFormProperties {
		appId: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<ApplicationPropertiesPlatform | null | undefined>,
	}
	export function CreateApplicationPropertiesFormGroup() {
		return new FormGroup<ApplicationPropertiesFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<ApplicationPropertiesPlatform | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationPropertiesPlatform { ios = 'ios', android = 'android', windows = 'windows' }


	/** Device entity for Intune. */
	export interface Device extends Resource {
		properties?: DeviceProperties;
	}

	/** Device entity for Intune. */
	export interface DeviceFormProperties extends ResourceFormProperties {
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<Device>;
	}
	export interface DeviceCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateDeviceCollectionFormGroup() {
		return new FormGroup<DeviceCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceProperties {

		/** Required */
		deviceType: string;

		/** Required */
		friendlyName: string;

		/** Required */
		platform: string;

		/** Required */
		platformVersion: string;

		/** Required */
		userId: string;
	}
	export interface DevicePropertiesFormProperties {

		/** Required */
		deviceType: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<string | null | undefined>,

		/** Required */
		platformVersion: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDevicePropertiesFormGroup() {
		return new FormGroup<DevicePropertiesFormProperties>({
			deviceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platformVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Flagged Enrolled App for the given tenant. */
	export interface FlaggedEnrolledApp extends Resource {
		properties?: FlaggedEnrolledAppProperties;
	}

	/** Flagged Enrolled App for the given tenant. */
	export interface FlaggedEnrolledAppFormProperties extends ResourceFormProperties {
	}
	export function CreateFlaggedEnrolledAppFormGroup() {
		return new FormGroup<FlaggedEnrolledAppFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flagged Enrolled App collection for the given tenant. */
	export interface FlaggedEnrolledAppCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<FlaggedEnrolledApp>;
	}

	/** Flagged Enrolled App collection for the given tenant. */
	export interface FlaggedEnrolledAppCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateFlaggedEnrolledAppCollectionFormGroup() {
		return new FormGroup<FlaggedEnrolledAppCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlaggedEnrolledAppError {
		errorCode?: string | null;
		severity?: string | null;
	}
	export interface FlaggedEnrolledAppErrorFormProperties {
		errorCode: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
	}
	export function CreateFlaggedEnrolledAppErrorFormGroup() {
		return new FormGroup<FlaggedEnrolledAppErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlaggedEnrolledAppProperties {
		deviceType?: string | null;
		errors?: Array<FlaggedEnrolledAppError>;
		friendlyName?: string | null;
		lastModifiedTime?: string | null;
		platform?: string | null;
	}
	export interface FlaggedEnrolledAppPropertiesFormProperties {
		deviceType: FormControl<string | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		lastModifiedTime: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
	}
	export function CreateFlaggedEnrolledAppPropertiesFormGroup() {
		return new FormGroup<FlaggedEnrolledAppPropertiesFormProperties>({
			deviceType: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flagged user for the given tenant. */
	export interface FlaggedUser extends Resource {
		properties?: FlaggedUserProperties;
	}

	/** Flagged user for the given tenant. */
	export interface FlaggedUserFormProperties extends ResourceFormProperties {
	}
	export function CreateFlaggedUserFormGroup() {
		return new FormGroup<FlaggedUserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flagged user collection for the given tenant. */
	export interface FlaggedUserCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<FlaggedUser>;
	}

	/** Flagged user collection for the given tenant. */
	export interface FlaggedUserCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateFlaggedUserCollectionFormGroup() {
		return new FormGroup<FlaggedUserCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlaggedUserProperties {
		errorCount?: number | null;
		friendlyName?: string | null;
	}
	export interface FlaggedUserPropertiesFormProperties {
		errorCount: FormControl<number | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
	}
	export function CreateFlaggedUserPropertiesFormGroup() {
		return new FormGroup<FlaggedUserPropertiesFormProperties>({
			errorCount: new FormControl<number | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Group entity for Intune MAM. */
	export interface GroupItem extends Resource {
		properties?: GroupProperties;
	}

	/** Group entity for Intune MAM. */
	export interface GroupItemFormProperties extends ResourceFormProperties {
	}
	export function CreateGroupItemFormGroup() {
		return new FormGroup<GroupItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupProperties {

		/** Required */
		friendlyName: string;
	}
	export interface GroupPropertiesFormProperties {

		/** Required */
		friendlyName: FormControl<string | null | undefined>,
	}
	export function CreateGroupPropertiesFormGroup() {
		return new FormGroup<GroupPropertiesFormProperties>({
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupsCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<GroupItem>;
	}
	export interface GroupsCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateGroupsCollectionFormGroup() {
		return new FormGroup<GroupsCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IOSMAMPolicyCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<IOSMAMPolicy>;
	}
	export interface IOSMAMPolicyCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateIOSMAMPolicyCollectionFormGroup() {
		return new FormGroup<IOSMAMPolicyCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** iOS Policy entity for Intune MAM. */
	export interface IOSMAMPolicy extends Resource {

		/** Intune MAM iOS Policy Properties. */
		properties?: IOSMAMPolicyProperties;
	}

	/** iOS Policy entity for Intune MAM. */
	export interface IOSMAMPolicyFormProperties extends ResourceFormProperties {
	}
	export function CreateIOSMAMPolicyFormGroup() {
		return new FormGroup<IOSMAMPolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location entity for given tenant. */
	export interface Location extends Resource {
		properties?: LocationProperties;
	}

	/** Location entity for given tenant. */
	export interface LocationFormProperties extends ResourceFormProperties {
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<Location>;
	}
	export interface LocationCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateLocationCollectionFormGroup() {
		return new FormGroup<LocationCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationProperties {

		/** Required */
		hostName: string;
	}
	export interface LocationPropertiesFormProperties {

		/** Required */
		hostName: FormControl<string | null | undefined>,
	}
	export function CreateLocationPropertiesFormGroup() {
		return new FormGroup<LocationPropertiesFormProperties>({
			hostName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** MAM Policy request body for properties Intune MAM. */
	export interface MAMPolicyAppIdOrGroupIdPayload {

		/** Android Policy request body for Intune MAM. */
		properties?: MAMPolicyAppOrGroupIdProperties;
	}

	/** MAM Policy request body for properties Intune MAM. */
	export interface MAMPolicyAppIdOrGroupIdPayloadFormProperties {
	}
	export function CreateMAMPolicyAppIdOrGroupIdPayloadFormGroup() {
		return new FormGroup<MAMPolicyAppIdOrGroupIdPayloadFormProperties>({
		});

	}


	/** Android Policy request body for Intune MAM. */
	export interface MAMPolicyAppOrGroupIdProperties {

		/** Required */
		url: string;
	}

	/** Android Policy request body for Intune MAM. */
	export interface MAMPolicyAppOrGroupIdPropertiesFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMAMPolicyAppOrGroupIdPropertiesFormGroup() {
		return new FormGroup<MAMPolicyAppOrGroupIdPropertiesFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MAMPolicyProperties {
		accessRecheckOfflineTimeout?: string | null;
		accessRecheckOnlineTimeout?: string | null;
		appSharingFromLevel?: MAMPolicyPropertiesAppSharingFromLevel | null;
		appSharingToLevel?: MAMPolicyPropertiesAppSharingFromLevel | null;
		authentication?: AndroidMAMPolicyPropertiesFileEncryption | null;
		clipboardSharingLevel?: MAMPolicyPropertiesClipboardSharingLevel | null;
		dataBackup?: AndroidMAMPolicyPropertiesScreenCapture | null;
		description?: string | null;
		deviceCompliance?: MAMPolicyPropertiesDeviceCompliance | null;
		fileSharingSaveAs?: AndroidMAMPolicyPropertiesScreenCapture | null;

		/** Required */
		friendlyName: string;
		groupStatus?: MAMPolicyPropertiesGroupStatus | null;
		lastModifiedTime?: Date | null;
		managedBrowser?: AndroidMAMPolicyPropertiesFileEncryption | null;
		numOfApps?: number | null;
		offlineWipeTimeout?: string | null;
		pin?: AndroidMAMPolicyPropertiesFileEncryption | null;
		pinNumRetry?: number | null;
	}
	export interface MAMPolicyPropertiesFormProperties {
		accessRecheckOfflineTimeout: FormControl<string | null | undefined>,
		accessRecheckOnlineTimeout: FormControl<string | null | undefined>,
		appSharingFromLevel: FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>,
		appSharingToLevel: FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>,
		authentication: FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>,
		clipboardSharingLevel: FormControl<MAMPolicyPropertiesClipboardSharingLevel | null | undefined>,
		dataBackup: FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>,
		description: FormControl<string | null | undefined>,
		deviceCompliance: FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>,
		fileSharingSaveAs: FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,
		groupStatus: FormControl<MAMPolicyPropertiesGroupStatus | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
		managedBrowser: FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>,
		numOfApps: FormControl<number | null | undefined>,
		offlineWipeTimeout: FormControl<string | null | undefined>,
		pin: FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>,
		pinNumRetry: FormControl<number | null | undefined>,
	}
	export function CreateMAMPolicyPropertiesFormGroup() {
		return new FormGroup<MAMPolicyPropertiesFormProperties>({
			accessRecheckOfflineTimeout: new FormControl<string | null | undefined>(undefined),
			accessRecheckOnlineTimeout: new FormControl<string | null | undefined>(undefined),
			appSharingFromLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			appSharingToLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			authentication: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			clipboardSharingLevel: new FormControl<MAMPolicyPropertiesClipboardSharingLevel | null | undefined>(undefined),
			dataBackup: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			deviceCompliance: new FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>(undefined),
			fileSharingSaveAs: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupStatus: new FormControl<MAMPolicyPropertiesGroupStatus | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			managedBrowser: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			numOfApps: new FormControl<number | null | undefined>(undefined),
			offlineWipeTimeout: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			pinNumRetry: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MAMPolicyPropertiesAppSharingFromLevel { none = 'none', policyManagedApps = 'policyManagedApps', allApps = 'allApps' }

	export enum MAMPolicyPropertiesClipboardSharingLevel { blocked = 'blocked', policyManagedApps = 'policyManagedApps', policyManagedAppsWithPasteIn = 'policyManagedAppsWithPasteIn', allApps = 'allApps' }

	export enum MAMPolicyPropertiesDeviceCompliance { enable = 'enable', disable = 'disable' }

	export enum MAMPolicyPropertiesGroupStatus { notTargeted = 'notTargeted', targeted = 'targeted' }


	/** OperationResult entity for Intune. */
	export interface OperationResult extends Resource {
		properties?: OperationResultProperties;
	}

	/** OperationResult entity for Intune. */
	export interface OperationResultFormProperties extends ResourceFormProperties {
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationResultCollection {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;

		/** Required */
		value: Array<OperationResult>;
	}
	export interface OperationResultCollectionFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultCollectionFormGroup() {
		return new FormGroup<OperationResultCollectionFormProperties>({
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationResultProperties {
		category?: string | null;

		/** Required */
		friendlyName: string;
		lastModifiedTime?: string | null;

		/** Required */
		operationMetadata: Array<OperationMetadataProperties>;
		state?: string | null;
	}
	export interface OperationResultPropertiesFormProperties {
		category: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,
		lastModifiedTime: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultPropertiesFormGroup() {
		return new FormGroup<OperationResultPropertiesFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationMetadataProperties {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface OperationMetadataPropertiesFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataPropertiesFormGroup() {
		return new FormGroup<OperationMetadataPropertiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource Location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource Tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource Location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
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


	/** Default Statuses entity for the given tenant. */
	export interface StatusesDefault extends Resource {

		/** Gets the URL to get the next set of results. */
		nextlink?: string | null;
		properties?: StatusesProperties;
	}

	/** Default Statuses entity for the given tenant. */
	export interface StatusesDefaultFormProperties extends ResourceFormProperties {

		/** Gets the URL to get the next set of results. */
		nextlink: FormControl<string | null | undefined>,
	}
	export function CreateStatusesDefaultFormGroup() {
		return new FormGroup<StatusesDefaultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			nextlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusesProperties {
		deployedPolicies?: number | null;
		enrolledUsers?: number | null;
		flaggedUsers?: number | null;
		lastModifiedTime?: Date | null;
		policyAppliedUsers?: number | null;
		status?: string | null;
		wipeFailedApps?: number | null;
		wipePendingApps?: number | null;
		wipeSucceededApps?: number | null;
	}
	export interface StatusesPropertiesFormProperties {
		deployedPolicies: FormControl<number | null | undefined>,
		enrolledUsers: FormControl<number | null | undefined>,
		flaggedUsers: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
		policyAppliedUsers: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		wipeFailedApps: FormControl<number | null | undefined>,
		wipePendingApps: FormControl<number | null | undefined>,
		wipeSucceededApps: FormControl<number | null | undefined>,
	}
	export function CreateStatusesPropertiesFormGroup() {
		return new FormGroup<StatusesPropertiesFormProperties>({
			deployedPolicies: new FormControl<number | null | undefined>(undefined),
			enrolledUsers: new FormControl<number | null | undefined>(undefined),
			flaggedUsers: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			policyAppliedUsers: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			wipeFailedApps: new FormControl<number | null | undefined>(undefined),
			wipePendingApps: new FormControl<number | null | undefined>(undefined),
			wipeSucceededApps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Device entity for Intune. */
	export interface WipeDeviceOperationResult extends Resource {
		properties?: WipeDeviceOperationResultProperties;
	}

	/** Device entity for Intune. */
	export interface WipeDeviceOperationResultFormProperties extends ResourceFormProperties {
	}
	export function CreateWipeDeviceOperationResultFormGroup() {
		return new FormGroup<WipeDeviceOperationResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WipeDeviceOperationResultProperties {

		/** Required */
		value: string;
	}
	export interface WipeDeviceOperationResultPropertiesFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWipeDeviceOperationResultPropertiesFormGroup() {
		return new FormGroup<WipeDeviceOperationResultPropertiesFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Intune MAM iOS Policy Properties. */
	export interface IOSMAMPolicyProperties extends MAMPolicyProperties {
		fileEncryptionLevel?: IOSMAMPolicyPropertiesFileEncryptionLevel | null;
		touchId?: MAMPolicyPropertiesDeviceCompliance | null;
	}

	/** Intune MAM iOS Policy Properties. */
	export interface IOSMAMPolicyPropertiesFormProperties extends MAMPolicyPropertiesFormProperties {
		fileEncryptionLevel: FormControl<IOSMAMPolicyPropertiesFileEncryptionLevel | null | undefined>,
		touchId: FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>,
	}
	export function CreateIOSMAMPolicyPropertiesFormGroup() {
		return new FormGroup<IOSMAMPolicyPropertiesFormProperties>({
			accessRecheckOfflineTimeout: new FormControl<string | null | undefined>(undefined),
			accessRecheckOnlineTimeout: new FormControl<string | null | undefined>(undefined),
			appSharingFromLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			appSharingToLevel: new FormControl<MAMPolicyPropertiesAppSharingFromLevel | null | undefined>(undefined),
			authentication: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			clipboardSharingLevel: new FormControl<MAMPolicyPropertiesClipboardSharingLevel | null | undefined>(undefined),
			dataBackup: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			deviceCompliance: new FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>(undefined),
			fileSharingSaveAs: new FormControl<AndroidMAMPolicyPropertiesScreenCapture | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupStatus: new FormControl<MAMPolicyPropertiesGroupStatus | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			managedBrowser: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			numOfApps: new FormControl<number | null | undefined>(undefined),
			offlineWipeTimeout: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<AndroidMAMPolicyPropertiesFileEncryption | null | undefined>(undefined),
			pinNumRetry: new FormControl<number | null | undefined>(undefined),
			fileEncryptionLevel: new FormControl<IOSMAMPolicyPropertiesFileEncryptionLevel | null | undefined>(undefined),
			touchId: new FormControl<MAMPolicyPropertiesDeviceCompliance | null | undefined>(undefined),
		});

	}

	export enum IOSMAMPolicyPropertiesFileEncryptionLevel { deviceLocked = 'deviceLocked', deviceLockedExceptFilesOpen = 'deviceLockedExceptFilesOpen', afterDeviceRestart = 'afterDeviceRestart', useDeviceSettings = 'useDeviceSettings' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns location for user tenant.
		 * Get providers/Microsoft.Intune/locations
		 * @param {string} api_version Service Api Version.
		 * @return {LocationCollection} location response as a collection
		 */
		GetLocations(api_version: string): Observable<LocationCollection> {
			return this.http.get<LocationCollection>(this.baseUri + 'providers/Microsoft.Intune/locations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns location for given tenant.
		 * Get providers/Microsoft.Intune/locations/hostName
		 * @param {string} api_version Service Api Version.
		 * @return {Location} single location response
		 */
		GetLocationByHostName(api_version: string): Observable<Location> {
			return this.http.get<Location>(this.baseUri + 'providers/Microsoft.Intune/locations/hostName?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get apps for an AndroidMAMPolicy.
		 * Get providers/Microsoft.Intune/locations/{hostName}/AndroidPolicies/{policyName}/apps
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {ApplicationCollection} applications as collection response
		 */
		Android_GetAppForMAMPolicy(hostName: string, policyName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<ApplicationCollection> {
			return this.http.get<ApplicationCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/AndroidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune Android policies.
		 * Get providers/Microsoft.Intune/locations/{hostName}/androidPolicies
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {AndroidMAMPolicyCollection} android Policies response
		 */
		Android_GetMAMPolicies(hostName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<AndroidMAMPolicyCollection> {
			return this.http.get<AndroidMAMPolicyCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns AndroidMAMPolicy with given name.
		 * Get providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {string} select select specific fields in entity.
		 * @return {AndroidMAMPolicy} iOSMAMPolicy entity.
		 */
		Android_GetMAMPolicyByName(hostName: string, policyName: string, api_version: string, select: string | null | undefined): Observable<AndroidMAMPolicy> {
			return this.http.get<AndroidMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Creates or updates AndroidMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {AndroidMAMPolicy} requestBody Parameters supplied to the Create or update an android policy operation.
		 * @return {AndroidMAMPolicy} android entity.
		 */
		Android_CreateOrUpdateMAMPolicy(hostName: string, policyName: string, api_version: string, requestBody: AndroidMAMPolicy): Observable<AndroidMAMPolicy> {
			return this.http.put<AndroidMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Android Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Android_DeleteMAMPolicy(hostName: string, policyName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch AndroidMAMPolicy.
		 * Patch providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {AndroidMAMPolicy} requestBody Parameters supplied to the Create or update an android policy operation.
		 * @return {AndroidMAMPolicy} android entity.
		 */
		Android_PatchMAMPolicy(hostName: string, policyName: string, api_version: string, requestBody: AndroidMAMPolicy): Observable<AndroidMAMPolicy> {
			return this.http.patch<AndroidMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add app to an AndroidMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/apps/{appName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} appName application unique Name
		 * @param {string} api_version Service Api Version.
		 * @param {MAMPolicyAppIdOrGroupIdPayload} requestBody Parameters supplied to the Create or update app to an android policy operation.
		 * @return {void} No-Content.
		 */
		Android_AddAppForMAMPolicy(hostName: string, policyName: string, appName: string, api_version: string, requestBody: MAMPolicyAppIdOrGroupIdPayload): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete App for Android Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/apps/{appName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} appName application unique Name
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Android_DeleteAppForMAMPolicy(hostName: string, policyName: string, appName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns groups for a given AndroidMAMPolicy.
		 * Get providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName policy name for the tenant
		 * @param {string} api_version Service Api Version.
		 * @return {GroupsCollection} groups as collection response
		 */
		Android_GetGroupsForMAMPolicy(hostName: string, policyName: string, api_version: string): Observable<GroupsCollection> {
			return this.http.get<GroupsCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Add group to an AndroidMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups/{groupId}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} groupId group Id
		 * @param {string} api_version Service Api Version.
		 * @param {MAMPolicyAppIdOrGroupIdPayload} requestBody Parameters supplied to the Create or update app to an android policy operation.
		 * @return {void} No-Content.
		 */
		Android_AddGroupForMAMPolicy(hostName: string, policyName: string, groupId: string, api_version: string, requestBody: MAMPolicyAppIdOrGroupIdPayload): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Group for Android Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups/{groupId}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} groupId application unique Name
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Android_DeleteGroupForMAMPolicy(hostName: string, policyName: string, groupId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/androidPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns Intune Manageable apps.
		 * Get providers/Microsoft.Intune/locations/{hostName}/apps
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {ApplicationCollection} applications as collection response
		 */
		GetApps(hostName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<ApplicationCollection> {
			return this.http.get<ApplicationCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/apps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune flagged user collection
		 * Get providers/Microsoft.Intune/locations/{hostName}/flaggedUsers
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {FlaggedUserCollection} Flagged users as collection response
		 */
		GetMAMFlaggedUsers(hostName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<FlaggedUserCollection> {
			return this.http.get<FlaggedUserCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/flaggedUsers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune flagged user details
		 * Get providers/Microsoft.Intune/locations/{hostName}/flaggedUsers/{userName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} userName Flagged userName
		 * @param {string} api_version Service Api Version.
		 * @param {string} select select specific fields in entity.
		 * @return {FlaggedUser} Flagged user details in response
		 */
		GetMAMFlaggedUserByName(hostName: string, userName: string, api_version: string, select: string | null | undefined): Observable<FlaggedUser> {
			return this.http.get<FlaggedUser>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/flaggedUsers/' + (userName == null ? '' : encodeURIComponent(userName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune flagged enrolled app collection for the User
		 * Get providers/Microsoft.Intune/locations/{hostName}/flaggedUsers/{userName}/flaggedEnrolledApps
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} userName User name for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {FlaggedEnrolledAppCollection} Flagged enrolled Apps as collection response
		 */
		GetMAMUserFlaggedEnrolledApps(hostName: string, userName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<FlaggedEnrolledAppCollection> {
			return this.http.get<FlaggedEnrolledAppCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/flaggedUsers/' + (userName == null ? '' : encodeURIComponent(userName)) + '/flaggedEnrolledApps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune iOSPolicies.
		 * Get providers/Microsoft.Intune/locations/{hostName}/iosPolicies
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {IOSMAMPolicyCollection} applications as collection response
		 */
		Ios_GetMAMPolicies(hostName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<IOSMAMPolicyCollection> {
			return this.http.get<IOSMAMPolicyCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune iOS policies.
		 * Get providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {string} select select specific fields in entity.
		 * @return {IOSMAMPolicy} iOSMAMPolicy entity.
		 */
		Ios_GetMAMPolicyByName(hostName: string, policyName: string, api_version: string, select: string | null | undefined): Observable<IOSMAMPolicy> {
			return this.http.get<IOSMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Creates or updates iOSMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {IOSMAMPolicy} requestBody Parameters supplied to the Create or update an android policy operation.
		 * @return {IOSMAMPolicy} iOSMAMPolicy entity.
		 */
		Ios_CreateOrUpdateMAMPolicy(hostName: string, policyName: string, api_version: string, requestBody: IOSMAMPolicy): Observable<IOSMAMPolicy> {
			return this.http.put<IOSMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Ios Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Ios_DeleteMAMPolicy(hostName: string, policyName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * patch an iOSMAMPolicy.
		 * Patch providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {IOSMAMPolicy} requestBody Parameters supplied to the Create or update an android policy operation.
		 * @return {IOSMAMPolicy} iOSMAMPolicy entity.
		 */
		Ios_PatchMAMPolicy(hostName: string, policyName: string, api_version: string, requestBody: IOSMAMPolicy): Observable<IOSMAMPolicy> {
			return this.http.patch<IOSMAMPolicy>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get apps for an iOSMAMPolicy.
		 * Get providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {ApplicationCollection} applications as collection response
		 */
		Ios_GetAppForMAMPolicy(hostName: string, policyName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<ApplicationCollection> {
			return this.http.get<ApplicationCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Add app to an iOSMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps/{appName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} appName application unique Name
		 * @param {string} api_version Service Api Version.
		 * @param {MAMPolicyAppIdOrGroupIdPayload} requestBody Parameters supplied to add an app to an ios policy.
		 * @return {void} No-Content.
		 */
		Ios_AddAppForMAMPolicy(hostName: string, policyName: string, appName: string, api_version: string, requestBody: MAMPolicyAppIdOrGroupIdPayload): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete App for Ios Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps/{appName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} appName application unique Name
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Ios_DeleteAppForMAMPolicy(hostName: string, policyName: string, appName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns groups for a given iOSMAMPolicy.
		 * Get providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName policy name for the tenant
		 * @param {string} api_version Service Api Version.
		 * @return {GroupsCollection} groups as collection response
		 */
		Ios_GetGroupsForMAMPolicy(hostName: string, policyName: string, api_version: string): Observable<GroupsCollection> {
			return this.http.get<GroupsCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Add group to an iOSMAMPolicy.
		 * Put providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups/{groupId}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} groupId group Id
		 * @param {string} api_version Service Api Version.
		 * @param {MAMPolicyAppIdOrGroupIdPayload} requestBody Parameters supplied to the Create or update app to an android policy operation.
		 * @return {void} No-Content.
		 */
		Ios_AddGroupForMAMPolicy(hostName: string, policyName: string, groupId: string, api_version: string, requestBody: MAMPolicyAppIdOrGroupIdPayload): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Group for iOS Policy
		 * Delete providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups/{groupId}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} policyName Unique name for the policy
		 * @param {string} groupId application unique Name
		 * @param {string} api_version Service Api Version.
		 * @return {void} No-Content.
		 */
		Ios_DeleteGroupForMAMPolicy(hostName: string, policyName: string, groupId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/iosPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns operationResults.
		 * Get providers/Microsoft.Intune/locations/{hostName}/operationResults
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {OperationResultCollection} applications as collection response
		 */
		GetOperationResults(hostName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<OperationResultCollection> {
			return this.http.get<OperationResultCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/operationResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Returns Intune Tenant level statuses.
		 * Get providers/Microsoft.Intune/locations/{hostName}/statuses/default
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} api_version Service Api Version.
		 * @return {StatusesDefault} applications as collection response
		 */
		GetMAMStatuses(hostName: string, api_version: string): Observable<StatusesDefault> {
			return this.http.get<StatusesDefault>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/statuses/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get devices for a user.
		 * Get providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} userName user unique Name
		 * @param {string} api_version Service Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} select select specific fields in entity.
		 * @return {DeviceCollection} devices as collection response
		 */
		GetMAMUserDevices(hostName: string, userName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, select: string | null | undefined): Observable<DeviceCollection> {
			return this.http.get<DeviceCollection>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/devices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Get a unique device for a user.
		 * Get providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices/{deviceName}
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} userName unique user name
		 * @param {string} deviceName device name
		 * @param {string} api_version Service Api Version.
		 * @param {string} select select specific fields in entity.
		 * @return {Device} Device entity.
		 */
		GetMAMUserDeviceByDeviceName(hostName: string, userName: string, deviceName: string, api_version: string, select: string | null | undefined): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/devices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&select=' + (select == null ? '' : encodeURIComponent(select)), {});
		}

		/**
		 * Wipe a device for a user.
		 * Post providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices/{deviceName}/wipe
		 * @param {string} hostName Location hostName for the tenant
		 * @param {string} userName unique user name
		 * @param {string} deviceName device name
		 * @param {string} api_version Service Api Version.
		 * @return {WipeDeviceOperationResult} Wipe operation result.
		 */
		WipeMAMUserDevice(hostName: string, userName: string, deviceName: string, api_version: string): Observable<WipeDeviceOperationResult> {
			return this.http.post<WipeDeviceOperationResult>(this.baseUri + 'providers/Microsoft.Intune/locations/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '/devices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/wipe&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

