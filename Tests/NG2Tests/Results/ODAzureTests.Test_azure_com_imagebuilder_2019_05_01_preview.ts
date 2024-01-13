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
		innerError?: InnerError;

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


	/** Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider */
	export interface ImageTemplate extends Resource {

		/** Identity for the image template. */
		identity?: ImageTemplateIdentity;

		/** Describes the properties of an image template */
		properties?: ImageTemplateProperties;
	}

	/** Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider */
	export interface ImageTemplateFormProperties extends ResourceFormProperties {
	}
	export function CreateImageTemplateFormGroup() {
		return new FormGroup<ImageTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a unit of image customization */
	export interface ImageTemplateCustomizer {

		/** Friendly Name to provide context on what this customization step does */
		name?: string | null;

		/**
		 * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
		 * Required
		 */
		type: string;
	}

	/** Describes a unit of image customization */
	export interface ImageTemplateCustomizerFormProperties {

		/** Friendly Name to provide context on what this customization step does */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateCustomizerFormGroup() {
		return new FormGroup<ImageTemplateCustomizerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Generic distribution object */
	export interface ImageTemplateDistributor {

		/** Tags that will be applied to the artifact once it has been created/updated by the distributor. */
		artifactTags?: {[id: string]: string };

		/**
		 * The name to be used for the associated RunOutput.
		 * Required
		 */
		runOutputName: string;

		/**
		 * Type of distribution.
		 * Required
		 */
		type: string;
	}

	/** Generic distribution object */
	export interface ImageTemplateDistributorFormProperties {

		/** Tags that will be applied to the artifact once it has been created/updated by the distributor. */
		artifactTags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name to be used for the associated RunOutput.
		 * Required
		 */
		runOutputName: FormControl<string | null | undefined>,

		/**
		 * Type of distribution.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateDistributorFormGroup() {
		return new FormGroup<ImageTemplateDistributorFormProperties>({
			artifactTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOutputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-_.]{1,64}$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner */
	export interface ImageTemplateFileCustomizer extends ImageTemplateCustomizer {

		/** The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM */
		destination?: string | null;

		/** SHA256 checksum of the file provided in the sourceUri field above */
		sha256Checksum?: string | null;

		/** The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc */
		sourceUri?: string | null;
	}

	/** Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner */
	export interface ImageTemplateFileCustomizerFormProperties extends ImageTemplateCustomizerFormProperties {

		/** The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM */
		destination: FormControl<string | null | undefined>,

		/** SHA256 checksum of the file provided in the sourceUri field above */
		sha256Checksum: FormControl<string | null | undefined>,

		/** The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateFileCustomizerFormGroup() {
		return new FormGroup<ImageTemplateFileCustomizerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined),
			sha256Checksum: new FormControl<string | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity for the image template. */
	export interface ImageTemplateIdentity {

		/** The type of identity used for the image template. The type 'None' will remove any identities from the image template. */
		type?: ImageTemplateIdentityType | null;

		/** The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: ImageTemplateIdentityUserAssignedIdentities };
	}

	/** Identity for the image template. */
	export interface ImageTemplateIdentityFormProperties {

		/** The type of identity used for the image template. The type 'None' will remove any identities from the image template. */
		type: FormControl<ImageTemplateIdentityType | null | undefined>,

		/** The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: ImageTemplateIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateImageTemplateIdentityFormGroup() {
		return new FormGroup<ImageTemplateIdentityFormProperties>({
			type: new FormControl<ImageTemplateIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: ImageTemplateIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum ImageTemplateIdentityType { UserAssigned = 0, None = 1 }

	export interface ImageTemplateIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface ImageTemplateIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<ImageTemplateIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's. */
	export interface ImageTemplateIsoSource extends ImageTemplateSource {

		/**
		 * SHA256 Checksum of the ISO image.
		 * Required
		 */
		sha256Checksum: string;

		/**
		 * URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
		 * Required
		 */
		sourceUri: string;
	}

	/** Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's. */
	export interface ImageTemplateIsoSourceFormProperties extends ImageTemplateSourceFormProperties {

		/**
		 * SHA256 Checksum of the ISO image.
		 * Required
		 */
		sha256Checksum: FormControl<string | null | undefined>,

		/**
		 * URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
		 * Required
		 */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateIsoSourceFormGroup() {
		return new FormGroup<ImageTemplateIsoSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sha256Checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the latest status of running an image template */
	export interface ImageTemplateLastRunStatus {

		/** End time of the last run (UTC) */
		endTime?: Date | null;

		/** Verbose information about the last run state */
		message?: string | null;

		/** State of the last run */
		runState?: ImageTemplateLastRunStatusRunState | null;

		/** Sub-state of the last run */
		runSubState?: ImageTemplateLastRunStatusRunSubState | null;

		/** Start time of the last run (UTC) */
		startTime?: Date | null;
	}

	/** Describes the latest status of running an image template */
	export interface ImageTemplateLastRunStatusFormProperties {

		/** End time of the last run (UTC) */
		endTime: FormControl<Date | null | undefined>,

		/** Verbose information about the last run state */
		message: FormControl<string | null | undefined>,

		/** State of the last run */
		runState: FormControl<ImageTemplateLastRunStatusRunState | null | undefined>,

		/** Sub-state of the last run */
		runSubState: FormControl<ImageTemplateLastRunStatusRunSubState | null | undefined>,

		/** Start time of the last run (UTC) */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateImageTemplateLastRunStatusFormGroup() {
		return new FormGroup<ImageTemplateLastRunStatusFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			runState: new FormControl<ImageTemplateLastRunStatusRunState | null | undefined>(undefined),
			runSubState: new FormControl<ImageTemplateLastRunStatusRunSubState | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ImageTemplateLastRunStatusRunState { Running = 0, Succeeded = 1, PartiallySucceeded = 2, Failed = 3 }

	export enum ImageTemplateLastRunStatusRunSubState { Queued = 0, Building = 1, Customizing = 2, Distributing = 3 }


	/** The result of List image templates operation */
	export interface ImageTemplateListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** An array of image templates */
		value?: Array<ImageTemplate>;
	}

	/** The result of List image templates operation */
	export interface ImageTemplateListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateListResultFormGroup() {
		return new FormGroup<ImageTemplateListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Distribute as a Managed Disk Image. */
	export interface ImageTemplateManagedImageDistributor {

		/**
		 * Resource Id of the Managed Disk Image
		 * Required
		 */
		imageId: string;

		/**
		 * Azure location for the image, should match if image already exists
		 * Required
		 */
		location: string;
	}

	/** Distribute as a Managed Disk Image. */
	export interface ImageTemplateManagedImageDistributorFormProperties {

		/**
		 * Resource Id of the Managed Disk Image
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Azure location for the image, should match if image already exists
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateManagedImageDistributorFormGroup() {
		return new FormGroup<ImageTemplateManagedImageDistributorFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an image source that is a managed image in customer subscription. */
	export interface ImageTemplateManagedImageSource extends ImageTemplateSource {

		/**
		 * ARM resource id of the managed image in customer subscription
		 * Required
		 */
		imageId: string;
	}

	/** Describes an image source that is a managed image in customer subscription. */
	export interface ImageTemplateManagedImageSourceFormProperties extends ImageTemplateSourceFormProperties {

		/**
		 * ARM resource id of the managed image in customer subscription
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateManagedImageSourceFormGroup() {
		return new FormGroup<ImageTemplateManagedImageSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
	export interface ImageTemplatePlatformImageSource extends ImageTemplateSource {

		/** Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		offer?: string | null;

		/** Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		publisher?: string | null;

		/** Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		sku?: string | null;

		/** Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		version?: string | null;
	}

	/** Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
	export interface ImageTemplatePlatformImageSourceFormProperties extends ImageTemplateSourceFormProperties {

		/** Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		offer: FormControl<string | null | undefined>,

		/** Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		publisher: FormControl<string | null | undefined>,

		/** Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		sku: FormControl<string | null | undefined>,

		/** Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplatePlatformImageSourceFormGroup() {
		return new FormGroup<ImageTemplatePlatformImageSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified. */
	export interface ImageTemplatePowerShellCustomizer extends ImageTemplateCustomizer {

		/** Array of PowerShell commands to execute */
		inline?: Array<string>;

		/** If specified, the PowerShell script will be run with elevated privileges */
		runElevated?: boolean | null;

		/** URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc */
		scriptUri?: string | null;

		/** SHA256 checksum of the power shell script provided in the scriptUri field above */
		sha256Checksum?: string | null;

		/** Valid exit codes for the PowerShell script. [Default: 0] */
		validExitCodes?: Array<number>;
	}

	/** Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified. */
	export interface ImageTemplatePowerShellCustomizerFormProperties extends ImageTemplateCustomizerFormProperties {

		/** If specified, the PowerShell script will be run with elevated privileges */
		runElevated: FormControl<boolean | null | undefined>,

		/** URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc */
		scriptUri: FormControl<string | null | undefined>,

		/** SHA256 checksum of the power shell script provided in the scriptUri field above */
		sha256Checksum: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplatePowerShellCustomizerFormGroup() {
		return new FormGroup<ImageTemplatePowerShellCustomizerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
			scriptUri: new FormControl<string | null | undefined>(undefined),
			sha256Checksum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of an image template */
	export interface ImageTemplateProperties {

		/**
		 * Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
		 * Minimum: 0
		 * Maximum: 960
		 */
		buildTimeoutInMinutes?: number | null;

		/** Specifies the properties used to describe the customization steps of the image, like Image source etc */
		customize?: Array<ImageTemplateCustomizer>;

		/**
		 * The distribution targets where the image output needs to go to.
		 * Required
		 */
		distribute: Array<ImageTemplateDistributor>;

		/** Describes the latest status of running an image template */
		lastRunStatus?: ImageTemplateLastRunStatus;

		/** Describes the error happened when create or update an image template */
		provisioningError?: ProvisioningError;

		/** Provisioning state of the resource */
		provisioningState?: ImageTemplatePropertiesProvisioningState | null;

		/**
		 * Describes a virtual machine image source for building, customizing and distributing
		 * Required
		 */
		source: ImageTemplateSource;

		/** Describes the virtual machine used to build, customize and capture images */
		vmProfile?: ImageTemplateVmProfile;
	}

	/** Describes the properties of an image template */
	export interface ImageTemplatePropertiesFormProperties {

		/**
		 * Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
		 * Minimum: 0
		 * Maximum: 960
		 */
		buildTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Provisioning state of the resource */
		provisioningState: FormControl<ImageTemplatePropertiesProvisioningState | null | undefined>,
	}
	export function CreateImageTemplatePropertiesFormGroup() {
		return new FormGroup<ImageTemplatePropertiesFormProperties>({
			buildTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(960)]),
			provisioningState: new FormControl<ImageTemplatePropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum ImageTemplatePropertiesProvisioningState { Creating = 0, Updating = 1, Succeeded = 2, Failed = 3, Deleting = 4 }


	/** Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner */
	export interface ImageTemplateRestartCustomizer extends ImageTemplateCustomizer {

		/** Command to check if restart succeeded [Default: ''] */
		restartCheckCommand?: string | null;

		/** Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"'] */
		restartCommand?: string | null;

		/** Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m'] */
		restartTimeout?: string | null;
	}

	/** Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner */
	export interface ImageTemplateRestartCustomizerFormProperties extends ImageTemplateCustomizerFormProperties {

		/** Command to check if restart succeeded [Default: ''] */
		restartCheckCommand: FormControl<string | null | undefined>,

		/** Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"'] */
		restartCommand: FormControl<string | null | undefined>,

		/** Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m'] */
		restartTimeout: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateRestartCustomizerFormGroup() {
		return new FormGroup<ImageTemplateRestartCustomizerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			restartCheckCommand: new FormControl<string | null | undefined>(undefined),
			restartCommand: new FormControl<string | null | undefined>(undefined),
			restartTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Distribute via Shared Image Gallery. */
	export interface ImageTemplateSharedImageDistributor {

		/**
		 * Resource Id of the Shared Image Gallery image
		 * Required
		 */
		galleryImageId: string;

		/**
		 * A list of regions that the image will be replicated to
		 * Required
		 */
		replicationRegions: Array<string>;
	}

	/** Distribute via Shared Image Gallery. */
	export interface ImageTemplateSharedImageDistributorFormProperties {

		/**
		 * Resource Id of the Shared Image Gallery image
		 * Required
		 */
		galleryImageId: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateSharedImageDistributorFormGroup() {
		return new FormGroup<ImageTemplateSharedImageDistributorFormProperties>({
			galleryImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an image source that is an image version in a shared image gallery. */
	export interface ImageTemplateSharedImageVersionSource extends ImageTemplateSource {

		/**
		 * ARM resource id of the image version in the shared image gallery
		 * Required
		 */
		imageVersionId: string;
	}

	/** Describes an image source that is an image version in a shared image gallery. */
	export interface ImageTemplateSharedImageVersionSourceFormProperties extends ImageTemplateSourceFormProperties {

		/**
		 * ARM resource id of the image version in the shared image gallery
		 * Required
		 */
		imageVersionId: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateSharedImageVersionSourceFormGroup() {
		return new FormGroup<ImageTemplateSharedImageVersionSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified. */
	export interface ImageTemplateShellCustomizer extends ImageTemplateCustomizer {

		/** Array of shell commands to execute */
		inline?: Array<string>;

		/** URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc */
		scriptUri?: string | null;

		/** SHA256 checksum of the shell script provided in the scriptUri field */
		sha256Checksum?: string | null;
	}

	/** Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified. */
	export interface ImageTemplateShellCustomizerFormProperties extends ImageTemplateCustomizerFormProperties {

		/** URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc */
		scriptUri: FormControl<string | null | undefined>,

		/** SHA256 checksum of the shell script provided in the scriptUri field */
		sha256Checksum: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateShellCustomizerFormGroup() {
		return new FormGroup<ImageTemplateShellCustomizerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scriptUri: new FormControl<string | null | undefined>(undefined),
			sha256Checksum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine image source for building, customizing and distributing */
	export interface ImageTemplateSource {

		/**
		 * Specifies the type of source image you want to start with.
		 * Required
		 */
		type: string;
	}

	/** Describes a virtual machine image source for building, customizing and distributing */
	export interface ImageTemplateSourceFormProperties {

		/**
		 * Specifies the type of source image you want to start with.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateSourceFormGroup() {
		return new FormGroup<ImageTemplateSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for updating an image template. */
	export interface ImageTemplateUpdateParameters {

		/** Identity for the image template. */
		identity?: ImageTemplateIdentity;

		/** The user-specified tags associated with the image template. */
		tags?: {[id: string]: string };
	}

	/** Parameters for updating an image template. */
	export interface ImageTemplateUpdateParametersFormProperties {

		/** The user-specified tags associated with the image template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateImageTemplateUpdateParametersFormGroup() {
		return new FormGroup<ImageTemplateUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Distribute via VHD in a storage account. */
	export interface ImageTemplateVhdDistributor {
	}

	/** Distribute via VHD in a storage account. */
	export interface ImageTemplateVhdDistributorFormProperties {
	}
	export function CreateImageTemplateVhdDistributorFormGroup() {
		return new FormGroup<ImageTemplateVhdDistributorFormProperties>({
		});

	}


	/** Describes the virtual machine used to build, customize and capture images */
	export interface ImageTemplateVmProfile {

		/** Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2). */
		vmSize?: string | null;
	}

	/** Describes the virtual machine used to build, customize and capture images */
	export interface ImageTemplateVmProfileFormProperties {

		/** Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2). */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateImageTemplateVmProfileFormGroup() {
		return new FormGroup<ImageTemplateVmProfileFormProperties>({
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inner error details. */
	export interface InnerError {

		/** The internal error message or exception dump. */
		errorDetail?: string | null;

		/** The exception type. */
		exceptionType?: string | null;
	}

	/** Inner error details. */
	export interface InnerErrorFormProperties {

		/** The internal error message or exception dump. */
		errorDetail: FormControl<string | null | undefined>,

		/** The exception type. */
		exceptionType: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorFormGroup() {
		return new FormGroup<InnerErrorFormProperties>({
			errorDetail: new FormControl<string | null | undefined>(undefined),
			exceptionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Operation {
		display?: any;

		/** This is of the format {provider}/{resource}/{operation} */
		name?: string | null;
		origin?: string | null;
		properties?: string | null;
	}
	export interface OperationFormProperties {
		display: FormControl<any | null | undefined>,

		/** This is of the format {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationListResult {
		nextLink?: string | null;
		value?: Array<Operation>;
	}
	export interface OperationListResultFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the error happened when create or update an image template */
	export interface ProvisioningError {

		/** Verbose error message about the provisioning failure */
		message?: string | null;

		/** Error code of the provisioning failure */
		provisioningErrorCode?: ProvisioningErrorProvisioningErrorCode | null;
	}

	/** Describes the error happened when create or update an image template */
	export interface ProvisioningErrorFormProperties {

		/** Verbose error message about the provisioning failure */
		message: FormControl<string | null | undefined>,

		/** Error code of the provisioning failure */
		provisioningErrorCode: FormControl<ProvisioningErrorProvisioningErrorCode | null | undefined>,
	}
	export function CreateProvisioningErrorFormGroup() {
		return new FormGroup<ProvisioningErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			provisioningErrorCode: new FormControl<ProvisioningErrorProvisioningErrorCode | null | undefined>(undefined),
		});

	}

	export enum ProvisioningErrorProvisioningErrorCode { BadSourceType = 0, BadPIRSource = 1, BadISOSource = 2, BadManagedImageSource = 3, BadSharedImageVersionSource = 4, BadCustomizerType = 5, UnsupportedCustomizerType = 6, NoCustomizerScript = 7, BadDistributeType = 8, BadSharedImageDistribute = 9, ServerError = 10, Other = 11 }


	/** Provisioning state of the resource */
	export enum ProvisioningState { Creating = 0, Updating = 1, Succeeded = 2, Failed = 3, Deleting = 4 }


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


	/** Represents an output that was created by running an image template. */
	export interface RunOutput extends SubResource {

		/** Describes the properties of a run output */
		properties?: RunOutputProperties;
	}

	/** Represents an output that was created by running an image template. */
	export interface RunOutputFormProperties extends SubResourceFormProperties {
	}
	export function CreateRunOutputFormGroup() {
		return new FormGroup<RunOutputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of List run outputs operation */
	export interface RunOutputCollection {

		/** The continuation token. */
		nextLink?: string | null;

		/** An array of run outputs */
		value?: Array<RunOutput>;
	}

	/** The result of List run outputs operation */
	export interface RunOutputCollectionFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRunOutputCollectionFormGroup() {
		return new FormGroup<RunOutputCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a run output */
	export interface RunOutputProperties {

		/** The resource id of the artifact. */
		artifactId?: string | null;

		/** The location URI of the artifact. */
		artifactUri?: string | null;

		/** Provisioning state of the resource */
		provisioningState?: ImageTemplatePropertiesProvisioningState | null;
	}

	/** Describes the properties of a run output */
	export interface RunOutputPropertiesFormProperties {

		/** The resource id of the artifact. */
		artifactId: FormControl<string | null | undefined>,

		/** The location URI of the artifact. */
		artifactUri: FormControl<string | null | undefined>,

		/** Provisioning state of the resource */
		provisioningState: FormControl<ImageTemplatePropertiesProvisioningState | null | undefined>,
	}
	export function CreateRunOutputPropertiesFormGroup() {
		return new FormGroup<RunOutputPropertiesFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			artifactUri: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ImageTemplatePropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The Sub Resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource name
		 * Required
		 */
		name: string;

		/** Resource type */
		type?: string | null;
	}

	/** The Sub Resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available operations for the Microsoft.VirtualMachineImages provider
		 * Get providers/Microsoft.VirtualMachineImages/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} The operation was successful. The response contains the list of available operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.VirtualMachineImages/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the VM image templates associated with the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VirtualMachineImages/imageTemplates
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ImageTemplateListResult} OK
		 */
		VirtualMachineImageTemplates_List(subscriptionId: string, api_version: string): Observable<ImageTemplateListResult> {
			return this.http.get<ImageTemplateListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the VM image templates associated with the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ImageTemplateListResult} OK
		 */
		VirtualMachineImageTemplates_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ImageTemplateListResult> {
			return this.http.get<ImageTemplateListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get information about a virtual machine image template
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @return {ImageTemplate} OK
		 */
		VirtualMachineImageTemplates_Get(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string): Observable<ImageTemplate> {
			return this.http.get<ImageTemplate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a virtual machine image template
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @param {ImageTemplate} requestBody Parameters supplied to the CreateImageTemplate operation
		 * @return {ImageTemplate} OK
		 */
		VirtualMachineImageTemplates_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string, requestBody: ImageTemplate): Observable<ImageTemplate> {
			return this.http.put<ImageTemplate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a virtual machine image template
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @return {void} The operation was successful.
		 */
		VirtualMachineImageTemplates_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the tags for this Virtual Machine Image Template
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @param {string} api_version Client Api Version.
		 * @param {ImageTemplateUpdateParameters} requestBody Additional parameters for Image Template update.
		 * @return {ImageTemplate} OK
		 */
		VirtualMachineImageTemplates_Update(subscriptionId: string, resourceGroupName: string, imageTemplateName: string, api_version: string, requestBody: ImageTemplateUpdateParameters): Observable<ImageTemplate> {
			return this.http.patch<ImageTemplate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create artifacts from a existing image template
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/run
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @return {void} 
		 */
		VirtualMachineImageTemplates_Run(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '/run?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all run outputs for the specified Image Template resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @return {RunOutputCollection} OK
		 */
		VirtualMachineImageTemplates_ListRunOutputs(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string): Observable<RunOutputCollection> {
			return this.http.get<RunOutputCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '/runOutputs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the specified run output for the specified image template resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs/{runOutputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageTemplateName The name of the image Template
		 * @param {string} runOutputName The name of the run output
		 * @return {RunOutput} OK
		 */
		VirtualMachineImageTemplates_GetRunOutput(api_version: string, subscriptionId: string, resourceGroupName: string, imageTemplateName: string, runOutputName: string): Observable<RunOutput> {
			return this.http.get<RunOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VirtualMachineImages/imageTemplates/' + (imageTemplateName == null ? '' : encodeURIComponent(imageTemplateName)) + '/runOutputs/' + (runOutputName == null ? '' : encodeURIComponent(runOutputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

