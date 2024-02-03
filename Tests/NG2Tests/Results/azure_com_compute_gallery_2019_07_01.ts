import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Api error. */
	export interface ApiError {

		/** The error code. */
		code?: string | null;

		/** The Api error details */
		details?: Array<ApiErrorBase>;

		/** Inner error details. */
		innererror?: InnerError;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Api error. */
	export interface ApiErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Api error base. */
	export interface ApiErrorBase {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Api error base. */
	export interface ApiErrorBaseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorBaseFormGroup() {
		return new FormGroup<ApiErrorBaseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Compute service. */
	export interface CloudError {

		/** Api error. */
		error?: ApiError;
	}

	/** An error response from the Compute service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Describes the disallowed disk types. */
	export interface Disallowed {

		/** A list of disk types. */
		diskTypes?: Array<string>;
	}

	/** Describes the disallowed disk types. */
	export interface DisallowedFormProperties {
	}
	export function CreateDisallowedFormGroup() {
		return new FormGroup<DisallowedFormProperties>({
		});

	}


	/** Specifies information about the Shared Image Gallery that you want to create or update. */
	export interface Gallery extends Resource {

		/** Describes the properties of a Shared Image Gallery. */
		properties?: GalleryProperties;
	}

	/** Specifies information about the Shared Image Gallery that you want to create or update. */
	export interface GalleryFormProperties extends ResourceFormProperties {
	}
	export function CreateGalleryFormGroup() {
		return new FormGroup<GalleryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the gallery Application Definition that you want to create or update. */
	export interface GalleryApplication extends Resource {

		/** Describes the properties of a gallery Application Definition. */
		properties?: GalleryApplicationProperties;
	}

	/** Specifies information about the gallery Application Definition that you want to create or update. */
	export interface GalleryApplicationFormProperties extends ResourceFormProperties {
	}
	export function CreateGalleryApplicationFormGroup() {
		return new FormGroup<GalleryApplicationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Gallery Applications operation response. */
	export interface GalleryApplicationList {

		/** The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions. */
		nextLink?: string | null;

		/**
		 * A list of Gallery Applications.
		 * Required
		 */
		value: Array<GalleryApplication>;
	}

	/** The List Gallery Applications operation response. */
	export interface GalleryApplicationListFormProperties {

		/** The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryApplicationListFormGroup() {
		return new FormGroup<GalleryApplicationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a gallery Application Definition. */
	export interface GalleryApplicationProperties {

		/** The description of this gallery Application Definition resource. This property is updatable. */
		description?: string | null;

		/** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate?: Date | null;

		/** The Eula agreement for the gallery Application Definition. */
		eula?: string | null;

		/** The privacy statement uri. */
		privacyStatementUri?: string | null;

		/** The release note uri. */
		releaseNoteUri?: string | null;

		/**
		 * This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		supportedOSType: GalleryApplicationPropertiesSupportedOSType;
	}

	/** Describes the properties of a gallery Application Definition. */
	export interface GalleryApplicationPropertiesFormProperties {

		/** The description of this gallery Application Definition resource. This property is updatable. */
		description: FormControl<string | null | undefined>,

		/** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate: FormControl<Date | null | undefined>,

		/** The Eula agreement for the gallery Application Definition. */
		eula: FormControl<string | null | undefined>,

		/** The privacy statement uri. */
		privacyStatementUri: FormControl<string | null | undefined>,

		/** The release note uri. */
		releaseNoteUri: FormControl<string | null | undefined>,

		/**
		 * This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		supportedOSType: FormControl<GalleryApplicationPropertiesSupportedOSType | null | undefined>,
	}
	export function CreateGalleryApplicationPropertiesFormGroup() {
		return new FormGroup<GalleryApplicationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endOfLifeDate: new FormControl<Date | null | undefined>(undefined),
			eula: new FormControl<string | null | undefined>(undefined),
			privacyStatementUri: new FormControl<string | null | undefined>(undefined),
			releaseNoteUri: new FormControl<string | null | undefined>(undefined),
			supportedOSType: new FormControl<GalleryApplicationPropertiesSupportedOSType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GalleryApplicationPropertiesSupportedOSType { Windows = 'Windows', Linux = 'Linux' }


	/** Specifies information about the gallery Application Definition that you want to update. */
	export interface GalleryApplicationUpdate extends UpdateResource {

		/** Describes the properties of a gallery Application Definition. */
		properties?: GalleryApplicationProperties;
	}

	/** Specifies information about the gallery Application Definition that you want to update. */
	export interface GalleryApplicationUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateGalleryApplicationUpdateFormGroup() {
		return new FormGroup<GalleryApplicationUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the gallery Application Version that you want to create or update. */
	export interface GalleryApplicationVersion extends Resource {

		/** Describes the properties of a gallery Image Version. */
		properties?: GalleryApplicationVersionProperties;
	}

	/** Specifies information about the gallery Application Version that you want to create or update. */
	export interface GalleryApplicationVersionFormProperties extends ResourceFormProperties {
	}
	export function CreateGalleryApplicationVersionFormGroup() {
		return new FormGroup<GalleryApplicationVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Gallery Application version operation response. */
	export interface GalleryApplicationVersionList {

		/** The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions. */
		nextLink?: string | null;

		/**
		 * A list of gallery Application Versions.
		 * Required
		 */
		value: Array<GalleryApplicationVersion>;
	}

	/** The List Gallery Application version operation response. */
	export interface GalleryApplicationVersionListFormProperties {

		/** The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryApplicationVersionListFormGroup() {
		return new FormGroup<GalleryApplicationVersionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a gallery Image Version. */
	export interface GalleryApplicationVersionProperties {

		/** The provisioning state, which only appears in the response. */
		provisioningState?: GalleryApplicationVersionPropertiesProvisioningState | null;

		/**
		 * The publishing profile of a gallery Image Version.
		 * Required
		 */
		publishingProfile: GalleryApplicationVersionPublishingProfile;

		/** This is the replication status of the gallery Image Version. */
		replicationStatus?: ReplicationStatus;
	}

	/** Describes the properties of a gallery Image Version. */
	export interface GalleryApplicationVersionPropertiesFormProperties {

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>,
	}
	export function CreateGalleryApplicationVersionPropertiesFormGroup() {
		return new FormGroup<GalleryApplicationVersionPropertiesFormProperties>({
			provisioningState: new FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum GalleryApplicationVersionPropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Failed = 'Failed', Succeeded = 'Succeeded', Deleting = 'Deleting', Migrating = 'Migrating' }


	/** The publishing profile of a gallery Image Version. */
	export interface GalleryApplicationVersionPublishingProfile extends GalleryArtifactPublishingProfileBase {

		/** Optional. May be used to help process this file. The type of file contained in the source, e.g. zip, json, etc. */
		contentType?: string | null;

		/** Optional. Whether or not this application reports health. */
		enableHealthCheck?: boolean | null;

		/**
		 * The source image from which the Image Version is going to be created.
		 * Required
		 */
		source: UserArtifactSource;
	}

	/** The publishing profile of a gallery Image Version. */
	export interface GalleryApplicationVersionPublishingProfileFormProperties extends GalleryArtifactPublishingProfileBaseFormProperties {

		/** Optional. May be used to help process this file. The type of file contained in the source, e.g. zip, json, etc. */
		contentType: FormControl<string | null | undefined>,

		/** Optional. Whether or not this application reports health. */
		enableHealthCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateGalleryApplicationVersionPublishingProfileFormGroup() {
		return new FormGroup<GalleryApplicationVersionPublishingProfileFormProperties>({
			endOfLifeDate: new FormControl<Date | null | undefined>(undefined),
			excludeFromLatest: new FormControl<boolean | null | undefined>(undefined),
			publishedDate: new FormControl<Date | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<GalleryArtifactPublishingProfileBaseStorageAccountType | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			enableHealthCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies information about the gallery Application Version that you want to update. */
	export interface GalleryApplicationVersionUpdate extends UpdateResource {

		/** Describes the properties of a gallery Image Version. */
		properties?: GalleryApplicationVersionProperties;
	}

	/** Specifies information about the gallery Application Version that you want to update. */
	export interface GalleryApplicationVersionUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateGalleryApplicationVersionUpdateFormGroup() {
		return new FormGroup<GalleryApplicationVersionUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the basic gallery artifact publishing profile. */
	export interface GalleryArtifactPublishingProfileBase {

		/** The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate?: Date | null;

		/** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
		excludeFromLatest?: boolean | null;

		/** The timestamp for when the gallery Image Version is published. */
		publishedDate?: Date | null;

		/** The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. */
		replicaCount?: number | null;

		/** Specifies the storage account type to be used to store the image. This property is not updatable. */
		storageAccountType?: GalleryArtifactPublishingProfileBaseStorageAccountType | null;

		/** The target regions where the Image Version is going to be replicated to. This property is updatable. */
		targetRegions?: Array<TargetRegion>;
	}

	/** Describes the basic gallery artifact publishing profile. */
	export interface GalleryArtifactPublishingProfileBaseFormProperties {

		/** The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate: FormControl<Date | null | undefined>,

		/** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
		excludeFromLatest: FormControl<boolean | null | undefined>,

		/** The timestamp for when the gallery Image Version is published. */
		publishedDate: FormControl<Date | null | undefined>,

		/** The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. */
		replicaCount: FormControl<number | null | undefined>,

		/** Specifies the storage account type to be used to store the image. This property is not updatable. */
		storageAccountType: FormControl<GalleryArtifactPublishingProfileBaseStorageAccountType | null | undefined>,
	}
	export function CreateGalleryArtifactPublishingProfileBaseFormGroup() {
		return new FormGroup<GalleryArtifactPublishingProfileBaseFormProperties>({
			endOfLifeDate: new FormControl<Date | null | undefined>(undefined),
			excludeFromLatest: new FormControl<boolean | null | undefined>(undefined),
			publishedDate: new FormControl<Date | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<GalleryArtifactPublishingProfileBaseStorageAccountType | null | undefined>(undefined),
		});

	}

	export enum GalleryArtifactPublishingProfileBaseStorageAccountType { Standard_LRS = 'Standard_LRS', Standard_ZRS = 'Standard_ZRS' }


	/** Describes the target region information. */
	export interface TargetRegion {

		/**
		 * The name of the region.
		 * Required
		 */
		name: string;

		/** The number of replicas of the Image Version to be created per region. This property is updatable. */
		regionalReplicaCount?: number | null;

		/** Specifies the storage account type to be used to store the image. This property is not updatable. */
		storageAccountType?: GalleryArtifactPublishingProfileBaseStorageAccountType | null;
	}

	/** Describes the target region information. */
	export interface TargetRegionFormProperties {

		/**
		 * The name of the region.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The number of replicas of the Image Version to be created per region. This property is updatable. */
		regionalReplicaCount: FormControl<number | null | undefined>,

		/** Specifies the storage account type to be used to store the image. This property is not updatable. */
		storageAccountType: FormControl<GalleryArtifactPublishingProfileBaseStorageAccountType | null | undefined>,
	}
	export function CreateTargetRegionFormGroup() {
		return new FormGroup<TargetRegionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regionalReplicaCount: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<GalleryArtifactPublishingProfileBaseStorageAccountType | null | undefined>(undefined),
		});

	}


	/** The source image from which the Image Version is going to be created. */
	export interface GalleryArtifactSource {

		/**
		 * The managed artifact.
		 * Required
		 */
		managedImage: ManagedArtifact;
	}

	/** The source image from which the Image Version is going to be created. */
	export interface GalleryArtifactSourceFormProperties {
	}
	export function CreateGalleryArtifactSourceFormGroup() {
		return new FormGroup<GalleryArtifactSourceFormProperties>({
		});

	}


	/** The gallery artifact version source. */
	export interface GalleryArtifactVersionSource {

		/**
		 * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, or user image.
		 * Required
		 */
		id: string;
	}

	/** The gallery artifact version source. */
	export interface GalleryArtifactVersionSourceFormProperties {

		/**
		 * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, or user image.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGalleryArtifactVersionSourceFormGroup() {
		return new FormGroup<GalleryArtifactVersionSourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This is the data disk image. */
	export interface GalleryDataDiskImage extends GalleryDiskImage {

		/**
		 * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
		 * Required
		 */
		lun: number;
	}

	/** This is the data disk image. */
	export interface GalleryDataDiskImageFormProperties extends GalleryDiskImageFormProperties {

		/**
		 * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
		 * Required
		 */
		lun: FormControl<number | null | undefined>,
	}
	export function CreateGalleryDataDiskImageFormGroup() {
		return new FormGroup<GalleryDataDiskImageFormProperties>({
			hostCaching: new FormControl<GalleryDiskImageHostCaching | null | undefined>(undefined),
			sizeInGB: new FormControl<number | null | undefined>(undefined),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This is the disk image base class. */
	export interface GalleryDiskImage {

		/** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
		hostCaching?: GalleryDiskImageHostCaching | null;

		/** This property indicates the size of the VHD to be created. */
		sizeInGB?: number | null;

		/** The gallery artifact version source. */
		source?: GalleryArtifactVersionSource;
	}

	/** This is the disk image base class. */
	export interface GalleryDiskImageFormProperties {

		/** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
		hostCaching: FormControl<GalleryDiskImageHostCaching | null | undefined>,

		/** This property indicates the size of the VHD to be created. */
		sizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateGalleryDiskImageFormGroup() {
		return new FormGroup<GalleryDiskImageFormProperties>({
			hostCaching: new FormControl<GalleryDiskImageHostCaching | null | undefined>(undefined),
			sizeInGB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GalleryDiskImageHostCaching { None = 'None', ReadOnly = 'ReadOnly', ReadWrite = 'ReadWrite' }


	/** Describes the gallery unique name. */
	export interface GalleryIdentifier {

		/** The unique name of the Shared Image Gallery. This name is generated automatically by Azure. */
		uniqueName?: string | null;
	}

	/** Describes the gallery unique name. */
	export interface GalleryIdentifierFormProperties {

		/** The unique name of the Shared Image Gallery. This name is generated automatically by Azure. */
		uniqueName: FormControl<string | null | undefined>,
	}
	export function CreateGalleryIdentifierFormGroup() {
		return new FormGroup<GalleryIdentifierFormProperties>({
			uniqueName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the gallery Image Definition that you want to create or update. */
	export interface GalleryImage extends Resource {

		/** Describes the properties of a gallery Image Definition. */
		properties?: GalleryImageProperties;
	}

	/** Specifies information about the gallery Image Definition that you want to create or update. */
	export interface GalleryImageFormProperties extends ResourceFormProperties {
	}
	export function CreateGalleryImageFormGroup() {
		return new FormGroup<GalleryImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the gallery Image Definition identifier. */
	export interface GalleryImageIdentifier {

		/**
		 * The name of the gallery Image Definition offer.
		 * Required
		 */
		offer: string;

		/**
		 * The name of the gallery Image Definition publisher.
		 * Required
		 */
		publisher: string;

		/**
		 * The name of the gallery Image Definition SKU.
		 * Required
		 */
		sku: string;
	}

	/** This is the gallery Image Definition identifier. */
	export interface GalleryImageIdentifierFormProperties {

		/**
		 * The name of the gallery Image Definition offer.
		 * Required
		 */
		offer: FormControl<string | null | undefined>,

		/**
		 * The name of the gallery Image Definition publisher.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The name of the gallery Image Definition SKU.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageIdentifierFormGroup() {
		return new FormGroup<GalleryImageIdentifierFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The List Gallery Images operation response. */
	export interface GalleryImageList {

		/** The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery Image Definitions. */
		nextLink?: string | null;

		/**
		 * A list of Shared Image Gallery images.
		 * Required
		 */
		value: Array<GalleryImage>;
	}

	/** The List Gallery Images operation response. */
	export interface GalleryImageListFormProperties {

		/** The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery Image Definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageListFormGroup() {
		return new FormGroup<GalleryImageListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a gallery Image Definition. */
	export interface GalleryImageProperties {

		/** The description of this gallery Image Definition resource. This property is updatable. */
		description?: string | null;

		/** Describes the disallowed disk types. */
		disallowed?: Disallowed;

		/** The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate?: Date | null;

		/** The Eula agreement for the gallery Image Definition. */
		eula?: string | null;

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration?: GalleryImagePropertiesHyperVGeneration | null;

		/**
		 * This is the gallery Image Definition identifier.
		 * Required
		 */
		identifier: GalleryImageIdentifier;

		/**
		 * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
		 * Required
		 */
		osState: GalleryImagePropertiesOsState;

		/**
		 * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		osType: GalleryApplicationPropertiesSupportedOSType;

		/** The privacy statement uri. */
		privacyStatementUri?: string | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: GalleryApplicationVersionPropertiesProvisioningState | null;

		/** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
		purchasePlan?: ImagePurchasePlan;

		/** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
		recommended?: RecommendedMachineConfiguration;

		/** The release note uri. */
		releaseNoteUri?: string | null;
	}

	/** Describes the properties of a gallery Image Definition. */
	export interface GalleryImagePropertiesFormProperties {

		/** The description of this gallery Image Definition resource. This property is updatable. */
		description: FormControl<string | null | undefined>,

		/** The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable. */
		endOfLifeDate: FormControl<Date | null | undefined>,

		/** The Eula agreement for the gallery Image Definition. */
		eula: FormControl<string | null | undefined>,

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration: FormControl<GalleryImagePropertiesHyperVGeneration | null | undefined>,

		/**
		 * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
		 * Required
		 */
		osState: FormControl<GalleryImagePropertiesOsState | null | undefined>,

		/**
		 * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		osType: FormControl<GalleryApplicationPropertiesSupportedOSType | null | undefined>,

		/** The privacy statement uri. */
		privacyStatementUri: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>,

		/** The release note uri. */
		releaseNoteUri: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImagePropertiesFormGroup() {
		return new FormGroup<GalleryImagePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endOfLifeDate: new FormControl<Date | null | undefined>(undefined),
			eula: new FormControl<string | null | undefined>(undefined),
			hyperVGeneration: new FormControl<GalleryImagePropertiesHyperVGeneration | null | undefined>(undefined),
			osState: new FormControl<GalleryImagePropertiesOsState | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<GalleryApplicationPropertiesSupportedOSType | null | undefined>(undefined, [Validators.required]),
			privacyStatementUri: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>(undefined),
			releaseNoteUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GalleryImagePropertiesHyperVGeneration { V1 = 'V1', V2 = 'V2' }

	export enum GalleryImagePropertiesOsState { Generalized = 'Generalized', Specialized = 'Specialized' }


	/** Specifies information about the gallery Image Definition that you want to update. */
	export interface GalleryImageUpdate extends UpdateResource {

		/** Describes the properties of a gallery Image Definition. */
		properties?: GalleryImageProperties;
	}

	/** Specifies information about the gallery Image Definition that you want to update. */
	export interface GalleryImageUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateGalleryImageUpdateFormGroup() {
		return new FormGroup<GalleryImageUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the gallery Image Version that you want to create or update. */
	export interface GalleryImageVersion extends Resource {

		/** Describes the properties of a gallery Image Version. */
		properties?: GalleryImageVersionProperties;
	}

	/** Specifies information about the gallery Image Version that you want to create or update. */
	export interface GalleryImageVersionFormProperties extends ResourceFormProperties {
	}
	export function CreateGalleryImageVersionFormGroup() {
		return new FormGroup<GalleryImageVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Gallery Image version operation response. */
	export interface GalleryImageVersionList {

		/** The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions. */
		nextLink?: string | null;

		/**
		 * A list of gallery Image Versions.
		 * Required
		 */
		value: Array<GalleryImageVersion>;
	}

	/** The List Gallery Image version operation response. */
	export interface GalleryImageVersionListFormProperties {

		/** The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryImageVersionListFormGroup() {
		return new FormGroup<GalleryImageVersionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a gallery Image Version. */
	export interface GalleryImageVersionProperties {

		/** The provisioning state, which only appears in the response. */
		provisioningState?: GalleryApplicationVersionPropertiesProvisioningState | null;

		/** The publishing profile of a gallery Image Version. */
		publishingProfile?: GalleryImageVersionPublishingProfile;

		/** This is the replication status of the gallery Image Version. */
		replicationStatus?: ReplicationStatus;

		/**
		 * This is the storage profile of a Gallery Image Version.
		 * Required
		 */
		storageProfile: GalleryImageVersionStorageProfile;
	}

	/** Describes the properties of a gallery Image Version. */
	export interface GalleryImageVersionPropertiesFormProperties {

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>,
	}
	export function CreateGalleryImageVersionPropertiesFormGroup() {
		return new FormGroup<GalleryImageVersionPropertiesFormProperties>({
			provisioningState: new FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The publishing profile of a gallery Image Version. */
	export interface GalleryImageVersionPublishingProfile {
	}

	/** The publishing profile of a gallery Image Version. */
	export interface GalleryImageVersionPublishingProfileFormProperties {
	}
	export function CreateGalleryImageVersionPublishingProfileFormGroup() {
		return new FormGroup<GalleryImageVersionPublishingProfileFormProperties>({
		});

	}


	/** This is the storage profile of a Gallery Image Version. */
	export interface GalleryImageVersionStorageProfile {

		/** A list of data disk images. */
		dataDiskImages?: Array<GalleryDataDiskImage>;

		/** This is the OS disk image. */
		osDiskImage?: GalleryOSDiskImage;

		/** The gallery artifact version source. */
		source?: GalleryArtifactVersionSource;
	}

	/** This is the storage profile of a Gallery Image Version. */
	export interface GalleryImageVersionStorageProfileFormProperties {
	}
	export function CreateGalleryImageVersionStorageProfileFormGroup() {
		return new FormGroup<GalleryImageVersionStorageProfileFormProperties>({
		});

	}


	/** Specifies information about the gallery Image Version that you want to update. */
	export interface GalleryImageVersionUpdate extends UpdateResource {

		/** Describes the properties of a gallery Image Version. */
		properties?: GalleryImageVersionProperties;
	}

	/** Specifies information about the gallery Image Version that you want to update. */
	export interface GalleryImageVersionUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateGalleryImageVersionUpdateFormGroup() {
		return new FormGroup<GalleryImageVersionUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Galleries operation response. */
	export interface GalleryList {

		/** The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries. */
		nextLink?: string | null;

		/**
		 * A list of galleries.
		 * Required
		 */
		value: Array<Gallery>;
	}

	/** The List Galleries operation response. */
	export interface GalleryListFormProperties {

		/** The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGalleryListFormGroup() {
		return new FormGroup<GalleryListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the OS disk image. */
	export interface GalleryOSDiskImage {
	}

	/** This is the OS disk image. */
	export interface GalleryOSDiskImageFormProperties {
	}
	export function CreateGalleryOSDiskImageFormGroup() {
		return new FormGroup<GalleryOSDiskImageFormProperties>({
		});

	}


	/** Describes the properties of a Shared Image Gallery. */
	export interface GalleryProperties {

		/** The description of this Shared Image Gallery resource. This property is updatable. */
		description?: string | null;

		/** Describes the gallery unique name. */
		identifier?: GalleryIdentifier;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: GalleryApplicationVersionPropertiesProvisioningState | null;
	}

	/** Describes the properties of a Shared Image Gallery. */
	export interface GalleryPropertiesFormProperties {

		/** The description of this Shared Image Gallery resource. This property is updatable. */
		description: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>,
	}
	export function CreateGalleryPropertiesFormGroup() {
		return new FormGroup<GalleryPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<GalleryApplicationVersionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Specifies information about the Shared Image Gallery that you want to update. */
	export interface GalleryUpdate extends UpdateResource {

		/** Describes the properties of a Shared Image Gallery. */
		properties?: GalleryProperties;
	}

	/** Specifies information about the Shared Image Gallery that you want to update. */
	export interface GalleryUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateGalleryUpdateFormGroup() {
		return new FormGroup<GalleryUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
	export interface ImagePurchasePlan {

		/** The plan ID. */
		name?: string | null;

		/** The product ID. */
		product?: string | null;

		/** The publisher ID. */
		publisher?: string | null;
	}

	/** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
	export interface ImagePurchasePlanFormProperties {

		/** The plan ID. */
		name: FormControl<string | null | undefined>,

		/** The product ID. */
		product: FormControl<string | null | undefined>,

		/** The publisher ID. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateImagePurchasePlanFormGroup() {
		return new FormGroup<ImagePurchasePlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inner error details. */
	export interface InnerError {

		/** The internal error message or exception dump. */
		errordetail?: string | null;

		/** The exception type. */
		exceptiontype?: string | null;
	}

	/** Inner error details. */
	export interface InnerErrorFormProperties {

		/** The internal error message or exception dump. */
		errordetail: FormControl<string | null | undefined>,

		/** The exception type. */
		exceptiontype: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorFormGroup() {
		return new FormGroup<InnerErrorFormProperties>({
			errordetail: new FormControl<string | null | undefined>(undefined),
			exceptiontype: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed artifact. */
	export interface ManagedArtifact {

		/**
		 * The managed artifact id.
		 * Required
		 */
		id: string;
	}

	/** The managed artifact. */
	export interface ManagedArtifactFormProperties {

		/**
		 * The managed artifact id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateManagedArtifactFormGroup() {
		return new FormGroup<ManagedArtifactFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
	export interface RecommendedMachineConfiguration {

		/** Describes the resource range. */
		memory?: ResourceRange;

		/** Describes the resource range. */
		vCPUs?: ResourceRange;
	}

	/** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
	export interface RecommendedMachineConfigurationFormProperties {
	}
	export function CreateRecommendedMachineConfigurationFormGroup() {
		return new FormGroup<RecommendedMachineConfigurationFormProperties>({
		});

	}


	/** This is the regional replication status. */
	export interface RegionalReplicationStatus {

		/** The details of the replication status. */
		details?: string | null;

		/** It indicates progress of the replication job. */
		progress?: number | null;

		/** The region to which the gallery Image Version is being replicated to. */
		region?: string | null;

		/** This is the regional replication state. */
		state?: RegionalReplicationStatusState | null;
	}

	/** This is the regional replication status. */
	export interface RegionalReplicationStatusFormProperties {

		/** The details of the replication status. */
		details: FormControl<string | null | undefined>,

		/** It indicates progress of the replication job. */
		progress: FormControl<number | null | undefined>,

		/** The region to which the gallery Image Version is being replicated to. */
		region: FormControl<string | null | undefined>,

		/** This is the regional replication state. */
		state: FormControl<RegionalReplicationStatusState | null | undefined>,
	}
	export function CreateRegionalReplicationStatusFormGroup() {
		return new FormGroup<RegionalReplicationStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RegionalReplicationStatusState | null | undefined>(undefined),
		});

	}

	export enum RegionalReplicationStatusState { Unknown = 'Unknown', Replicating = 'Replicating', Completed = 'Completed', Failed = 'Failed' }


	/** This is the replication status of the gallery Image Version. */
	export interface ReplicationStatus {

		/** This is the aggregated replication status based on all the regional replication status flags. */
		aggregatedState?: ReplicationStatusAggregatedState | null;

		/** This is a summary of replication status for each region. */
		summary?: Array<RegionalReplicationStatus>;
	}

	/** This is the replication status of the gallery Image Version. */
	export interface ReplicationStatusFormProperties {

		/** This is the aggregated replication status based on all the regional replication status flags. */
		aggregatedState: FormControl<ReplicationStatusAggregatedState | null | undefined>,
	}
	export function CreateReplicationStatusFormGroup() {
		return new FormGroup<ReplicationStatusFormProperties>({
			aggregatedState: new FormControl<ReplicationStatusAggregatedState | null | undefined>(undefined),
		});

	}

	export enum ReplicationStatusAggregatedState { Unknown = 'Unknown', InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed' }


	/** The Resource model definition. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the resource range. */
	export interface ResourceRange {

		/** The maximum number of the resource. */
		max?: number | null;

		/** The minimum number of the resource. */
		min?: number | null;
	}

	/** Describes the resource range. */
	export interface ResourceRangeFormProperties {

		/** The maximum number of the resource. */
		max: FormControl<number | null | undefined>,

		/** The minimum number of the resource. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateResourceRangeFormGroup() {
		return new FormGroup<ResourceRangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Update Resource model definition. */
	export interface UpdateResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Update Resource model definition. */
	export interface UpdateResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceFormGroup() {
		return new FormGroup<UpdateResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source image from which the Image Version is going to be created. */
	export interface UserArtifactSource {

		/**
		 * Required. The fileName of the artifact.
		 * Required
		 */
		fileName: string;

		/**
		 * Required. The mediaLink of the artifact, must be a readable storage blob.
		 * Required
		 */
		mediaLink: string;
	}

	/** The source image from which the Image Version is going to be created. */
	export interface UserArtifactSourceFormProperties {

		/**
		 * Required. The fileName of the artifact.
		 * Required
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * Required. The mediaLink of the artifact, must be a readable storage blob.
		 * Required
		 */
		mediaLink: FormControl<string | null | undefined>,
	}
	export function CreateUserArtifactSourceFormGroup() {
		return new FormGroup<UserArtifactSourceFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mediaLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List galleries under a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/galleries
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryList} OK
		 */
		Galleries_List(subscriptionId: string, api_version: string): Observable<GalleryList> {
			return this.http.get<GalleryList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/galleries&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List galleries under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryList} OK
		 */
		Galleries_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<GalleryList> {
			return this.http.get<GalleryList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a Shared Image Gallery.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery.
		 * @param {string} api_version Client Api Version.
		 * @return {Gallery} OK
		 */
		Galleries_Get(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string): Observable<Gallery> {
			return this.http.get<Gallery>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Shared Image Gallery.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {Gallery} requestBody Parameters supplied to the create or update Shared Image Gallery operation.
		 * @return {Gallery} OK
		 */
		Galleries_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string, requestBody: Gallery): Observable<Gallery> {
			return this.http.put<Gallery>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Shared Image Gallery.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Galleries_Delete(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Shared Image Gallery.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryUpdate} requestBody Parameters supplied to the update Shared Image Gallery operation.
		 * @return {Gallery} OK
		 */
		Galleries_Update(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string, requestBody: GalleryUpdate): Observable<Gallery> {
			return this.http.patch<Gallery>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List gallery Application Definitions in a gallery.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery from which Application Definitions are to be listed.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryApplicationList} OK
		 */
		GalleryApplications_ListByGallery(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string): Observable<GalleryApplicationList> {
			return this.http.get<GalleryApplicationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a gallery Application Definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery from which the Application Definitions are to be retrieved.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition to be retrieved.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryApplication} OK
		 */
		GalleryApplications_Get(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, api_version: string): Observable<GalleryApplication> {
			return this.http.get<GalleryApplication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a gallery Application Definition.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition is to be created.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryApplication} requestBody Parameters supplied to the create or update gallery Application operation.
		 * @return {GalleryApplication} OK
		 */
		GalleryApplications_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, api_version: string, requestBody: GalleryApplication): Observable<GalleryApplication> {
			return this.http.put<GalleryApplication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a gallery Application.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition is to be deleted.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		GalleryApplications_Delete(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a gallery Application Definition.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition is to be updated.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryApplicationUpdate} requestBody Parameters supplied to the update gallery Application operation.
		 * @return {GalleryApplication} OK
		 */
		GalleryApplications_Update(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, api_version: string, requestBody: GalleryApplicationUpdate): Observable<GalleryApplication> {
			return this.http.patch<GalleryApplication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List gallery Application Versions in a gallery Application Definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition resides.
		 * @param {string} galleryApplicationName The name of the Shared Application Gallery Application Definition from which the Application Versions are to be listed.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryApplicationVersionList} OK
		 */
		GalleryApplicationVersions_ListByGalleryApplication(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, api_version: string): Observable<GalleryApplicationVersionList> {
			return this.http.get<GalleryApplicationVersionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '/versions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a gallery Application Version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition resides.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition in which the Application Version resides.
		 * @param {string} galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
		 * @param {GalleryApplicationVersions_GetExpand} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryApplicationVersion} OK
		 */
		GalleryApplicationVersions_Get(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, expand: GalleryApplicationVersions_GetExpand | null | undefined, api_version: string): Observable<GalleryApplicationVersion> {
			return this.http.get<GalleryApplicationVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '/versions/' + (galleryApplicationVersionName == null ? '' : encodeURIComponent(galleryApplicationVersionName)) + '&expand=' + expand + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a gallery Application Version.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition resides.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition in which the Application Version is to be created.
		 * @param {string} galleryApplicationVersionName The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryApplicationVersion} requestBody Parameters supplied to the create or update gallery Application Version operation.
		 * @return {GalleryApplicationVersion} OK
		 */
		GalleryApplicationVersions_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, api_version: string, requestBody: GalleryApplicationVersion): Observable<GalleryApplicationVersion> {
			return this.http.put<GalleryApplicationVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '/versions/' + (galleryApplicationVersionName == null ? '' : encodeURIComponent(galleryApplicationVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a gallery Application Version.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition resides.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition in which the Application Version resides.
		 * @param {string} galleryApplicationVersionName The name of the gallery Application Version to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		GalleryApplicationVersions_Delete(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '/versions/' + (galleryApplicationVersionName == null ? '' : encodeURIComponent(galleryApplicationVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a gallery Application Version.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Application Gallery in which the Application Definition resides.
		 * @param {string} galleryApplicationName The name of the gallery Application Definition in which the Application Version is to be updated.
		 * @param {string} galleryApplicationVersionName The name of the gallery Application Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryApplicationVersionUpdate} requestBody Parameters supplied to the update gallery Application Version operation.
		 * @return {GalleryApplicationVersion} OK
		 */
		GalleryApplicationVersions_Update(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, api_version: string, requestBody: GalleryApplicationVersionUpdate): Observable<GalleryApplicationVersion> {
			return this.http.patch<GalleryApplicationVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/applications/' + (galleryApplicationName == null ? '' : encodeURIComponent(galleryApplicationName)) + '/versions/' + (galleryApplicationVersionName == null ? '' : encodeURIComponent(galleryApplicationVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List gallery Image Definitions in a gallery.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery from which Image Definitions are to be listed.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryImageList} OK
		 */
		GalleryImages_ListByGallery(subscriptionId: string, resourceGroupName: string, galleryName: string, api_version: string): Observable<GalleryImageList> {
			return this.http.get<GalleryImageList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a gallery Image Definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
		 * @param {string} galleryImageName The name of the gallery Image Definition to be retrieved.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryImage} OK
		 */
		GalleryImages_Get(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, api_version: string): Observable<GalleryImage> {
			return this.http.get<GalleryImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a gallery Image Definition.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition is to be created.
		 * @param {string} galleryImageName The name of the gallery Image Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryImage} requestBody Parameters supplied to the create or update gallery image operation.
		 * @return {GalleryImage} OK
		 */
		GalleryImages_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, api_version: string, requestBody: GalleryImage): Observable<GalleryImage> {
			return this.http.put<GalleryImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a gallery image.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition is to be deleted.
		 * @param {string} galleryImageName The name of the gallery Image Definition to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		GalleryImages_Delete(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a gallery Image Definition.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition is to be updated.
		 * @param {string} galleryImageName The name of the gallery Image Definition to be updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryImageUpdate} requestBody Parameters supplied to the update gallery image operation.
		 * @return {GalleryImage} OK
		 */
		GalleryImages_Update(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, api_version: string, requestBody: GalleryImageUpdate): Observable<GalleryImage> {
			return this.http.patch<GalleryImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List gallery Image Versions in a gallery Image Definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition resides.
		 * @param {string} galleryImageName The name of the Shared Image Gallery Image Definition from which the Image Versions are to be listed.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryImageVersionList} OK
		 */
		GalleryImageVersions_ListByGalleryImage(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, api_version: string): Observable<GalleryImageVersionList> {
			return this.http.get<GalleryImageVersionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '/versions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a gallery Image Version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition resides.
		 * @param {string} galleryImageName The name of the gallery Image Definition in which the Image Version resides.
		 * @param {string} galleryImageVersionName The name of the gallery Image Version to be retrieved.
		 * @param {GalleryApplicationVersions_GetExpand} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @return {GalleryImageVersion} OK
		 */
		GalleryImageVersions_Get(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, expand: GalleryApplicationVersions_GetExpand | null | undefined, api_version: string): Observable<GalleryImageVersion> {
			return this.http.get<GalleryImageVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '/versions/' + (galleryImageVersionName == null ? '' : encodeURIComponent(galleryImageVersionName)) + '&expand=' + expand + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a gallery Image Version.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition resides.
		 * @param {string} galleryImageName The name of the gallery Image Definition in which the Image Version is to be created.
		 * @param {string} galleryImageVersionName The name of the gallery Image Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryImageVersion} requestBody Parameters supplied to the create or update gallery Image Version operation.
		 * @return {GalleryImageVersion} OK
		 */
		GalleryImageVersions_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, api_version: string, requestBody: GalleryImageVersion): Observable<GalleryImageVersion> {
			return this.http.put<GalleryImageVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '/versions/' + (galleryImageVersionName == null ? '' : encodeURIComponent(galleryImageVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a gallery Image Version.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition resides.
		 * @param {string} galleryImageName The name of the gallery Image Definition in which the Image Version resides.
		 * @param {string} galleryImageVersionName The name of the gallery Image Version to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		GalleryImageVersions_Delete(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '/versions/' + (galleryImageVersionName == null ? '' : encodeURIComponent(galleryImageVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a gallery Image Version.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} galleryName The name of the Shared Image Gallery in which the Image Definition resides.
		 * @param {string} galleryImageName The name of the gallery Image Definition in which the Image Version is to be updated.
		 * @param {string} galleryImageVersionName The name of the gallery Image Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
		 * @param {string} api_version Client Api Version.
		 * @param {GalleryImageVersionUpdate} requestBody Parameters supplied to the update gallery Image Version operation.
		 * @return {GalleryImageVersion} OK
		 */
		GalleryImageVersions_Update(subscriptionId: string, resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, api_version: string, requestBody: GalleryImageVersionUpdate): Observable<GalleryImageVersion> {
			return this.http.patch<GalleryImageVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/galleries/' + (galleryName == null ? '' : encodeURIComponent(galleryName)) + '/images/' + (galleryImageName == null ? '' : encodeURIComponent(galleryImageName)) + '/versions/' + (galleryImageVersionName == null ? '' : encodeURIComponent(galleryImageVersionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GalleryApplicationVersions_GetExpand { ReplicationStatus = 'ReplicationStatus' }

}

