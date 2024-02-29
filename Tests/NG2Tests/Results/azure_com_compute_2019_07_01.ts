import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
	export interface AdditionalCapabilities {

		/** The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. */
		ultraSSDEnabled?: boolean | null;
	}

	/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
	export interface AdditionalCapabilitiesFormProperties {

		/** The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. */
		ultraSSDEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdditionalCapabilitiesFormGroup() {
		return new FormGroup<AdditionalCapabilitiesFormProperties>({
			ultraSSDEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied. */
	export interface AdditionalUnattendContent {

		/** The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. */
		componentName?: AdditionalUnattendContentComponentName | null;

		/** Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. */
		content?: string | null;

		/** The pass name. Currently, the only allowable value is OobeSystem. */
		passName?: AdditionalUnattendContentPassName | null;

		/** Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. */
		settingName?: AdditionalUnattendContentSettingName | null;
	}

	/** Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied. */
	export interface AdditionalUnattendContentFormProperties {

		/** The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. */
		componentName: FormControl<AdditionalUnattendContentComponentName | null | undefined>,

		/** Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. */
		content: FormControl<string | null | undefined>,

		/** The pass name. Currently, the only allowable value is OobeSystem. */
		passName: FormControl<AdditionalUnattendContentPassName | null | undefined>,

		/** Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. */
		settingName: FormControl<AdditionalUnattendContentSettingName | null | undefined>,
	}
	export function CreateAdditionalUnattendContentFormGroup() {
		return new FormGroup<AdditionalUnattendContentFormProperties>({
			componentName: new FormControl<AdditionalUnattendContentComponentName | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			passName: new FormControl<AdditionalUnattendContentPassName | null | undefined>(undefined),
			settingName: new FormControl<AdditionalUnattendContentSettingName | null | undefined>(undefined),
		});

	}

	export enum AdditionalUnattendContentComponentName { 'Microsoft-Windows-Shell-Setup' = 'Microsoft-Windows-Shell-Setup' }

	export enum AdditionalUnattendContentPassName { OobeSystem = 'OobeSystem' }

	export enum AdditionalUnattendContentSettingName { AutoLogon = 'AutoLogon', FirstLogonCommands = 'FirstLogonCommands' }


	/** The API entity reference. */
	export interface ApiEntityReference {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id?: string | null;
	}

	/** The API entity reference. */
	export interface ApiEntityReferenceFormProperties {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id: FormControl<string | null | undefined>,
	}
	export function CreateApiEntityReferenceFormGroup() {
		return new FormGroup<ApiEntityReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** The configuration parameters used for performing automatic OS upgrade. */
	export interface AutomaticOSUpgradePolicy {

		/** Whether OS image rollback feature should be disabled. Default value is false. */
		disableAutomaticRollback?: boolean | null;

		/** Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true. */
		enableAutomaticOSUpgrade?: boolean | null;
	}

	/** The configuration parameters used for performing automatic OS upgrade. */
	export interface AutomaticOSUpgradePolicyFormProperties {

		/** Whether OS image rollback feature should be disabled. Default value is false. */
		disableAutomaticRollback: FormControl<boolean | null | undefined>,

		/** Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true. */
		enableAutomaticOSUpgrade: FormControl<boolean | null | undefined>,
	}
	export function CreateAutomaticOSUpgradePolicyFormGroup() {
		return new FormGroup<AutomaticOSUpgradePolicyFormProperties>({
			disableAutomaticRollback: new FormControl<boolean | null | undefined>(undefined),
			enableAutomaticOSUpgrade: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes automatic OS upgrade properties on the image. */
	export interface AutomaticOSUpgradeProperties {

		/**
		 * Specifies whether automatic OS upgrade is supported on the image.
		 * Required
		 */
		automaticOSUpgradeSupported: boolean;
	}

	/** Describes automatic OS upgrade properties on the image. */
	export interface AutomaticOSUpgradePropertiesFormProperties {

		/**
		 * Specifies whether automatic OS upgrade is supported on the image.
		 * Required
		 */
		automaticOSUpgradeSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateAutomaticOSUpgradePropertiesFormGroup() {
		return new FormGroup<AutomaticOSUpgradePropertiesFormProperties>({
			automaticOSUpgradeSupported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
	export interface AutomaticRepairsPolicy {

		/** Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. */
		enabled?: boolean | null;

		/** The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. */
		gracePeriod?: string | null;
	}

	/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
	export interface AutomaticRepairsPolicyFormProperties {

		/** Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. */
		enabled: FormControl<boolean | null | undefined>,

		/** The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. */
		gracePeriod: FormControl<string | null | undefined>,
	}
	export function CreateAutomaticRepairsPolicyFormGroup() {
		return new FormGroup<AutomaticRepairsPolicyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			gracePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
	export interface AvailabilitySet extends Resource {

		/** The instance view of a resource. */
		properties?: AvailabilitySetProperties;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;
	}

	/** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
	export interface AvailabilitySetFormProperties extends ResourceFormProperties {
	}
	export function CreateAvailabilitySetFormGroup() {
		return new FormGroup<AvailabilitySetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Availability Set operation response. */
	export interface AvailabilitySetListResult {

		/** The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets. */
		nextLink?: string | null;

		/**
		 * The list of availability sets
		 * Required
		 */
		value: Array<AvailabilitySet>;
	}

	/** The List Availability Set operation response. */
	export interface AvailabilitySetListResultFormProperties {

		/** The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilitySetListResultFormGroup() {
		return new FormGroup<AvailabilitySetListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance view of a resource. */
	export interface AvailabilitySetProperties {

		/**
		 * Fault Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomainCount?: number | null;

		/**
		 * Update Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomainCount?: number | null;
		proximityPlacementGroup?: SubResource;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** A list of references to all virtual machines in the availability set. */
		virtualMachines?: Array<SubResource>;
	}

	/** The instance view of a resource. */
	export interface AvailabilitySetPropertiesFormProperties {

		/**
		 * Fault Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomainCount: FormControl<number | null | undefined>,

		/**
		 * Update Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomainCount: FormControl<number | null | undefined>,
	}
	export function CreateAvailabilitySetPropertiesFormGroup() {
		return new FormGroup<AvailabilitySetPropertiesFormProperties>({
			platformFaultDomainCount: new FormControl<number | null | undefined>(undefined),
			platformUpdateDomainCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Instance view status. */
	export interface InstanceViewStatus {

		/** The status code. */
		code?: string | null;

		/** The short localizable label for the status. */
		displayStatus?: string | null;

		/** The level code. */
		level?: InstanceViewStatusLevel | null;

		/** The detailed status message, including for alerts and error messages. */
		message?: string | null;

		/** The time of the status. */
		time?: Date | null;
	}

	/** Instance view status. */
	export interface InstanceViewStatusFormProperties {

		/** The status code. */
		code: FormControl<string | null | undefined>,

		/** The short localizable label for the status. */
		displayStatus: FormControl<string | null | undefined>,

		/** The level code. */
		level: FormControl<InstanceViewStatusLevel | null | undefined>,

		/** The detailed status message, including for alerts and error messages. */
		message: FormControl<string | null | undefined>,

		/** The time of the status. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceViewStatusFormGroup() {
		return new FormGroup<InstanceViewStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			displayStatus: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<InstanceViewStatusLevel | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InstanceViewStatusLevel { Info = 'Info', Warning = 'Warning', Error = 'Error' }

	export interface SubResource {

		/** Resource Id */
		id?: string | null;
	}
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the sku of an Availability Set. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'. */
	export enum AvailabilitySetSkuType { Classic = 'Classic', Aligned = 'Aligned' }


	/** Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated. */
	export interface AvailabilitySetUpdate extends UpdateResource {

		/** The instance view of a resource. */
		properties?: AvailabilitySetProperties;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;
	}

	/** Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated. */
	export interface AvailabilitySetUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateAvailabilitySetUpdateFormGroup() {
		return new FormGroup<AvailabilitySetUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
	export interface BillingProfile {

		/**
		 * Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.
		 * Type: double
		 */
		maxPrice?: number | null;
	}

	/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
	export interface BillingProfileFormProperties {

		/**
		 * Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.
		 * Type: double
		 */
		maxPrice: FormControl<number | null | undefined>,
	}
	export function CreateBillingProfileFormGroup() {
		return new FormGroup<BillingProfileFormProperties>({
			maxPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
	export interface BootDiagnostics {

		/** Whether boot diagnostics should be enabled on the Virtual Machine. */
		enabled?: boolean | null;

		/** Uri of the storage account to use for placing the console output and screenshot. */
		storageUri?: string | null;
	}

	/** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
	export interface BootDiagnosticsFormProperties {

		/** Whether boot diagnostics should be enabled on the Virtual Machine. */
		enabled: FormControl<boolean | null | undefined>,

		/** Uri of the storage account to use for placing the console output and screenshot. */
		storageUri: FormControl<string | null | undefined>,
	}
	export function CreateBootDiagnosticsFormGroup() {
		return new FormGroup<BootDiagnosticsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			storageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance view of a virtual machine boot diagnostics. */
	export interface BootDiagnosticsInstanceView {

		/** The console screenshot blob URI. */
		consoleScreenshotBlobUri?: string | null;

		/** The Linux serial console log blob Uri. */
		serialConsoleLogBlobUri?: string | null;

		/** Instance view status. */
		status?: InstanceViewStatus;
	}

	/** The instance view of a virtual machine boot diagnostics. */
	export interface BootDiagnosticsInstanceViewFormProperties {

		/** The console screenshot blob URI. */
		consoleScreenshotBlobUri: FormControl<string | null | undefined>,

		/** The Linux serial console log blob Uri. */
		serialConsoleLogBlobUri: FormControl<string | null | undefined>,
	}
	export function CreateBootDiagnosticsInstanceViewFormGroup() {
		return new FormGroup<BootDiagnosticsInstanceViewFormProperties>({
			consoleScreenshotBlobUri: new FormControl<string | null | undefined>(undefined),
			serialConsoleLogBlobUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
	export enum Caching { None = 'None', ReadOnly = 'ReadOnly', ReadWrite = 'ReadWrite' }


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


	/** The List Compute Operation operation response. */
	export interface ComputeOperationListResult {

		/** The list of compute operations */
		value?: Array<ComputeOperationValue>;
	}

	/** The List Compute Operation operation response. */
	export interface ComputeOperationListResultFormProperties {
	}
	export function CreateComputeOperationListResultFormGroup() {
		return new FormGroup<ComputeOperationListResultFormProperties>({
		});

	}


	/** Describes the properties of a Compute Operation value. */
	export interface ComputeOperationValue {

		/** Describes the properties of a Compute Operation Value Display. */
		display?: ComputeOperationValueDisplay;

		/** The name of the compute operation. */
		name?: string | null;

		/** The origin of the compute operation. */
		origin?: string | null;
	}

	/** Describes the properties of a Compute Operation value. */
	export interface ComputeOperationValueFormProperties {

		/** The name of the compute operation. */
		name: FormControl<string | null | undefined>,

		/** The origin of the compute operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateComputeOperationValueFormGroup() {
		return new FormGroup<ComputeOperationValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Compute Operation Value Display. */
	export interface ComputeOperationValueDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The display name of the compute operation. */
		operation?: string | null;

		/** The resource provider for the operation. */
		provider?: string | null;

		/** The display name of the resource the operation applies to. */
		resource?: string | null;
	}

	/** Describes the properties of a Compute Operation Value Display. */
	export interface ComputeOperationValueDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The display name of the compute operation. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider for the operation. */
		provider: FormControl<string | null | undefined>,

		/** The display name of the resource the operation applies to. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateComputeOperationValueDisplayFormGroup() {
		return new FormGroup<ComputeOperationValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. */
	export enum CreateOption { FromImage = 'FromImage', Empty = 'Empty', Attach = 'Attach' }


	/** Describes a data disk. */
	export interface DataDisk {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: CreateOption;

		/**
		 * Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskIOPSReadWrite?: string | null;

		/**
		 * Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskMBpsReadWrite?: string | null;

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/** Describes the uri of a disk. */
		image?: VirtualHardDisk;

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: number;

		/** The parameters of a managed disk. */
		managedDisk?: ManagedDiskParameters;

		/** The disk name. */
		name?: string | null;

		/** Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset */
		toBeDetached?: boolean | null;

		/** Describes the uri of a disk. */
		vhd?: VirtualHardDisk;

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled?: boolean | null;
	}

	/** Describes a data disk. */
	export interface DataDiskFormProperties {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: FormControl<CreateOption | null | undefined>,

		/**
		 * Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskIOPSReadWrite: FormControl<string | null | undefined>,

		/**
		 * Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskMBpsReadWrite: FormControl<string | null | undefined>,

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: FormControl<number | null | undefined>,

		/** The disk name. */
		name: FormControl<string | null | undefined>,

		/** Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset */
		toBeDetached: FormControl<boolean | null | undefined>,

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataDiskFormGroup() {
		return new FormGroup<DataDiskFormProperties>({
			caching: new FormControl<Caching | null | undefined>(undefined),
			createOption: new FormControl<CreateOption | null | undefined>(undefined, [Validators.required]),
			diskIOPSReadWrite: new FormControl<string | null | undefined>(undefined),
			diskMBpsReadWrite: new FormControl<string | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			toBeDetached: new FormControl<boolean | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the data disk images information. */
	export interface DataDiskImage {

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun?: number | null;
	}

	/** Contains the data disk images information. */
	export interface DataDiskImageFormProperties {

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: FormControl<number | null | undefined>,
	}
	export function CreateDataDiskImageFormGroup() {
		return new FormGroup<DataDiskImageFormProperties>({
			lun: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies information about the Dedicated host. */
	export interface DedicatedHost extends Resource {

		/** Properties of the dedicated host. */
		properties?: DedicatedHostProperties;

		/**
		 * Describes a virtual machine scale set sku.
		 * Required
		 */
		sku: Sku;
	}

	/** Specifies information about the Dedicated host. */
	export interface DedicatedHostFormProperties extends ResourceFormProperties {
	}
	export function CreateDedicatedHostFormGroup() {
		return new FormGroup<DedicatedHostFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the dedicated host unutilized capacity in terms of a specific VM size. */
	export interface DedicatedHostAllocatableVM {

		/**
		 * Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
		 * Type: double
		 */
		count?: number | null;

		/** VM size in terms of which the unutilized capacity is represented. */
		vmSize?: string | null;
	}

	/** Represents the dedicated host unutilized capacity in terms of a specific VM size. */
	export interface DedicatedHostAllocatableVMFormProperties {

		/**
		 * Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
		 * Type: double
		 */
		count: FormControl<number | null | undefined>,

		/** VM size in terms of which the unutilized capacity is represented. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHostAllocatableVMFormGroup() {
		return new FormGroup<DedicatedHostAllocatableVMFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dedicated host unutilized capacity. */
	export interface DedicatedHostAvailableCapacity {

		/** The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host. */
		allocatableVMs?: Array<DedicatedHostAllocatableVM>;
	}

	/** Dedicated host unutilized capacity. */
	export interface DedicatedHostAvailableCapacityFormProperties {
	}
	export function CreateDedicatedHostAvailableCapacityFormGroup() {
		return new FormGroup<DedicatedHostAvailableCapacityFormProperties>({
		});

	}


	/** Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group. */
	export interface DedicatedHostGroup extends Resource {

		/** Dedicated Host Group Properties. */
		properties?: DedicatedHostGroupProperties;

		/** Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. */
		zones?: Array<string>;
	}

	/** Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group. */
	export interface DedicatedHostGroupFormProperties extends ResourceFormProperties {
	}
	export function CreateDedicatedHostGroupFormGroup() {
		return new FormGroup<DedicatedHostGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Dedicated Host Group with resource group response. */
	export interface DedicatedHostGroupListResult {

		/** The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups. */
		nextLink?: string | null;

		/**
		 * The list of dedicated host groups
		 * Required
		 */
		value: Array<DedicatedHostGroup>;
	}

	/** The List Dedicated Host Group with resource group response. */
	export interface DedicatedHostGroupListResultFormProperties {

		/** The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHostGroupListResultFormGroup() {
		return new FormGroup<DedicatedHostGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dedicated Host Group Properties. */
	export interface DedicatedHostGroupProperties {

		/** A list of references to all dedicated hosts in the dedicated host group. */
		hosts?: Array<SubResourceReadOnly>;

		/**
		 * Number of fault domains that the host group can span.
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		platformFaultDomainCount: number;
	}

	/** Dedicated Host Group Properties. */
	export interface DedicatedHostGroupPropertiesFormProperties {

		/**
		 * Number of fault domains that the host group can span.
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		platformFaultDomainCount: FormControl<number | null | undefined>,
	}
	export function CreateDedicatedHostGroupPropertiesFormGroup() {
		return new FormGroup<DedicatedHostGroupPropertiesFormProperties>({
			platformFaultDomainCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface SubResourceReadOnly {

		/** Resource Id */
		id?: string | null;
	}
	export interface SubResourceReadOnlyFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceReadOnlyFormGroup() {
		return new FormGroup<SubResourceReadOnlyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated. */
	export interface DedicatedHostGroupUpdate extends UpdateResource {

		/** Dedicated Host Group Properties. */
		properties?: DedicatedHostGroupProperties;

		/** Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. */
		zones?: Array<string>;
	}

	/** Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated. */
	export interface DedicatedHostGroupUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateDedicatedHostGroupUpdateFormGroup() {
		return new FormGroup<DedicatedHostGroupUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The instance view of a dedicated host. */
	export interface DedicatedHostInstanceView {

		/** Specifies the unique id of the dedicated physical machine on which the dedicated host resides. */
		assetId?: string | null;

		/** Dedicated host unutilized capacity. */
		availableCapacity?: DedicatedHostAvailableCapacity;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;
	}

	/** The instance view of a dedicated host. */
	export interface DedicatedHostInstanceViewFormProperties {

		/** Specifies the unique id of the dedicated physical machine on which the dedicated host resides. */
		assetId: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHostInstanceViewFormGroup() {
		return new FormGroup<DedicatedHostInstanceViewFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None** */
	export enum DedicatedHostLicenseType { None = 'None', Windows_Server_Hybrid = 'Windows_Server_Hybrid', Windows_Server_Perpetual = 'Windows_Server_Perpetual' }


	/** The list dedicated host operation response. */
	export interface DedicatedHostListResult {

		/** The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts. */
		nextLink?: string | null;

		/**
		 * The list of dedicated hosts
		 * Required
		 */
		value: Array<DedicatedHost>;
	}

	/** The list dedicated host operation response. */
	export interface DedicatedHostListResultFormProperties {

		/** The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHostListResultFormGroup() {
		return new FormGroup<DedicatedHostListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the dedicated host. */
	export interface DedicatedHostProperties {

		/** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
		autoReplaceOnFailure?: boolean | null;

		/** A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host. */
		hostId?: string | null;

		/** The instance view of a dedicated host. */
		instanceView?: DedicatedHostInstanceView;

		/** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None** */
		licenseType?: DedicatedHostLicenseType | null;

		/**
		 * Fault domain of the dedicated host within a dedicated host group.
		 * Minimum: 0
		 * Maximum: 2
		 */
		platformFaultDomain?: number | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** The date when the host was first provisioned. */
		provisioningTime?: Date | null;

		/** A list of references to all virtual machines in the Dedicated Host. */
		virtualMachines?: Array<SubResourceReadOnly>;
	}

	/** Properties of the dedicated host. */
	export interface DedicatedHostPropertiesFormProperties {

		/** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
		autoReplaceOnFailure: FormControl<boolean | null | undefined>,

		/** A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host. */
		hostId: FormControl<string | null | undefined>,

		/** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None** */
		licenseType: FormControl<DedicatedHostLicenseType | null | undefined>,

		/**
		 * Fault domain of the dedicated host within a dedicated host group.
		 * Minimum: 0
		 * Maximum: 2
		 */
		platformFaultDomain: FormControl<number | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** The date when the host was first provisioned. */
		provisioningTime: FormControl<Date | null | undefined>,
	}
	export function CreateDedicatedHostPropertiesFormGroup() {
		return new FormGroup<DedicatedHostPropertiesFormProperties>({
			autoReplaceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			hostId: new FormControl<string | null | undefined>(undefined),
			licenseType: new FormControl<DedicatedHostLicenseType | null | undefined>(undefined),
			platformFaultDomain: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			provisioningTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated. */
	export interface DedicatedHostUpdate extends UpdateResource {

		/** Properties of the dedicated host. */
		properties?: DedicatedHostProperties;
	}

	/** Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated. */
	export interface DedicatedHostUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateDedicatedHostUpdateFormGroup() {
		return new FormGroup<DedicatedHostUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
	export interface DiagnosticsProfile {

		/** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
		bootDiagnostics?: BootDiagnostics;
	}

	/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
	export interface DiagnosticsProfileFormProperties {
	}
	export function CreateDiagnosticsProfileFormGroup() {
		return new FormGroup<DiagnosticsProfileFormProperties>({
		});

	}


	/** Specifies the ephemeral disk option for operating system disk. */
	export enum DiffDiskOption { Local = 'Local' }


	/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk. */
	export interface DiffDiskSettings {

		/** Specifies the ephemeral disk option for operating system disk. */
		option?: DiffDiskOption | null;
	}

	/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk. */
	export interface DiffDiskSettingsFormProperties {

		/** Specifies the ephemeral disk option for operating system disk. */
		option: FormControl<DiffDiskOption | null | undefined>,
	}
	export function CreateDiffDiskSettingsFormGroup() {
		return new FormGroup<DiffDiskSettingsFormProperties>({
			option: new FormControl<DiffDiskOption | null | undefined>(undefined),
		});

	}


	/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
	export interface DiskEncryptionSetParameters {
	}

	/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
	export interface DiskEncryptionSetParametersFormProperties {
	}
	export function CreateDiskEncryptionSetParametersFormGroup() {
		return new FormGroup<DiskEncryptionSetParametersFormProperties>({
		});

	}


	/** Describes a Encryption Settings for a Disk */
	export interface DiskEncryptionSettings {

		/** Describes a reference to Key Vault Secret */
		diskEncryptionKey?: KeyVaultSecretReference;

		/** Specifies whether disk encryption should be enabled on the virtual machine. */
		enabled?: boolean | null;

		/** Describes a reference to Key Vault Key */
		keyEncryptionKey?: KeyVaultKeyReference;
	}

	/** Describes a Encryption Settings for a Disk */
	export interface DiskEncryptionSettingsFormProperties {

		/** Specifies whether disk encryption should be enabled on the virtual machine. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDiskEncryptionSettingsFormGroup() {
		return new FormGroup<DiskEncryptionSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The instance view of the disk. */
	export interface DiskInstanceView {

		/** Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15 */
		encryptionSettings?: Array<DiskEncryptionSettings>;

		/** The disk name. */
		name?: string | null;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;
	}

	/** The instance view of the disk. */
	export interface DiskInstanceViewFormProperties {

		/** The disk name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDiskInstanceViewFormGroup() {
		return new FormGroup<DiskInstanceViewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the hardware settings for the virtual machine. */
	export interface HardwareProfile {

		/** Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes) */
		vmSize?: HardwareProfileVmSize | null;
	}

	/** Specifies the hardware settings for the virtual machine. */
	export interface HardwareProfileFormProperties {

		/** Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes) */
		vmSize: FormControl<HardwareProfileVmSize | null | undefined>,
	}
	export function CreateHardwareProfileFormGroup() {
		return new FormGroup<HardwareProfileFormProperties>({
			vmSize: new FormControl<HardwareProfileVmSize | null | undefined>(undefined),
		});

	}

	export enum HardwareProfileVmSize { Basic_A0 = 'Basic_A0', Basic_A1 = 'Basic_A1', Basic_A2 = 'Basic_A2', Basic_A3 = 'Basic_A3', Basic_A4 = 'Basic_A4', Standard_A0 = 'Standard_A0', Standard_A1 = 'Standard_A1', Standard_A2 = 'Standard_A2', Standard_A3 = 'Standard_A3', Standard_A4 = 'Standard_A4', Standard_A5 = 'Standard_A5', Standard_A6 = 'Standard_A6', Standard_A7 = 'Standard_A7', Standard_A8 = 'Standard_A8', Standard_A9 = 'Standard_A9', Standard_A10 = 'Standard_A10', Standard_A11 = 'Standard_A11', Standard_A1_v2 = 'Standard_A1_v2', Standard_A2_v2 = 'Standard_A2_v2', Standard_A4_v2 = 'Standard_A4_v2', Standard_A8_v2 = 'Standard_A8_v2', Standard_A2m_v2 = 'Standard_A2m_v2', Standard_A4m_v2 = 'Standard_A4m_v2', Standard_A8m_v2 = 'Standard_A8m_v2', Standard_B1s = 'Standard_B1s', Standard_B1ms = 'Standard_B1ms', Standard_B2s = 'Standard_B2s', Standard_B2ms = 'Standard_B2ms', Standard_B4ms = 'Standard_B4ms', Standard_B8ms = 'Standard_B8ms', Standard_D1 = 'Standard_D1', Standard_D2 = 'Standard_D2', Standard_D3 = 'Standard_D3', Standard_D4 = 'Standard_D4', Standard_D11 = 'Standard_D11', Standard_D12 = 'Standard_D12', Standard_D13 = 'Standard_D13', Standard_D14 = 'Standard_D14', Standard_D1_v2 = 'Standard_D1_v2', Standard_D2_v2 = 'Standard_D2_v2', Standard_D3_v2 = 'Standard_D3_v2', Standard_D4_v2 = 'Standard_D4_v2', Standard_D5_v2 = 'Standard_D5_v2', Standard_D2_v3 = 'Standard_D2_v3', Standard_D4_v3 = 'Standard_D4_v3', Standard_D8_v3 = 'Standard_D8_v3', Standard_D16_v3 = 'Standard_D16_v3', Standard_D32_v3 = 'Standard_D32_v3', Standard_D64_v3 = 'Standard_D64_v3', Standard_D2s_v3 = 'Standard_D2s_v3', Standard_D4s_v3 = 'Standard_D4s_v3', Standard_D8s_v3 = 'Standard_D8s_v3', Standard_D16s_v3 = 'Standard_D16s_v3', Standard_D32s_v3 = 'Standard_D32s_v3', Standard_D64s_v3 = 'Standard_D64s_v3', Standard_D11_v2 = 'Standard_D11_v2', Standard_D12_v2 = 'Standard_D12_v2', Standard_D13_v2 = 'Standard_D13_v2', Standard_D14_v2 = 'Standard_D14_v2', Standard_D15_v2 = 'Standard_D15_v2', Standard_DS1 = 'Standard_DS1', Standard_DS2 = 'Standard_DS2', Standard_DS3 = 'Standard_DS3', Standard_DS4 = 'Standard_DS4', Standard_DS11 = 'Standard_DS11', Standard_DS12 = 'Standard_DS12', Standard_DS13 = 'Standard_DS13', Standard_DS14 = 'Standard_DS14', Standard_DS1_v2 = 'Standard_DS1_v2', Standard_DS2_v2 = 'Standard_DS2_v2', Standard_DS3_v2 = 'Standard_DS3_v2', Standard_DS4_v2 = 'Standard_DS4_v2', Standard_DS5_v2 = 'Standard_DS5_v2', Standard_DS11_v2 = 'Standard_DS11_v2', Standard_DS12_v2 = 'Standard_DS12_v2', Standard_DS13_v2 = 'Standard_DS13_v2', Standard_DS14_v2 = 'Standard_DS14_v2', Standard_DS15_v2 = 'Standard_DS15_v2', 'Standard_DS13-4_v2' = 'Standard_DS13-4_v2', 'Standard_DS13-2_v2' = 'Standard_DS13-2_v2', 'Standard_DS14-8_v2' = 'Standard_DS14-8_v2', 'Standard_DS14-4_v2' = 'Standard_DS14-4_v2', Standard_E2_v3 = 'Standard_E2_v3', Standard_E4_v3 = 'Standard_E4_v3', Standard_E8_v3 = 'Standard_E8_v3', Standard_E16_v3 = 'Standard_E16_v3', Standard_E32_v3 = 'Standard_E32_v3', Standard_E64_v3 = 'Standard_E64_v3', Standard_E2s_v3 = 'Standard_E2s_v3', Standard_E4s_v3 = 'Standard_E4s_v3', Standard_E8s_v3 = 'Standard_E8s_v3', Standard_E16s_v3 = 'Standard_E16s_v3', Standard_E32s_v3 = 'Standard_E32s_v3', Standard_E64s_v3 = 'Standard_E64s_v3', 'Standard_E32-16_v3' = 'Standard_E32-16_v3', 'Standard_E32-8s_v3' = 'Standard_E32-8s_v3', 'Standard_E64-32s_v3' = 'Standard_E64-32s_v3', 'Standard_E64-16s_v3' = 'Standard_E64-16s_v3', Standard_F1 = 'Standard_F1', Standard_F2 = 'Standard_F2', Standard_F4 = 'Standard_F4', Standard_F8 = 'Standard_F8', Standard_F16 = 'Standard_F16', Standard_F1s = 'Standard_F1s', Standard_F2s = 'Standard_F2s', Standard_F4s = 'Standard_F4s', Standard_F8s = 'Standard_F8s', Standard_F16s = 'Standard_F16s', Standard_F2s_v2 = 'Standard_F2s_v2', Standard_F4s_v2 = 'Standard_F4s_v2', Standard_F8s_v2 = 'Standard_F8s_v2', Standard_F16s_v2 = 'Standard_F16s_v2', Standard_F32s_v2 = 'Standard_F32s_v2', Standard_F64s_v2 = 'Standard_F64s_v2', Standard_F72s_v2 = 'Standard_F72s_v2', Standard_G1 = 'Standard_G1', Standard_G2 = 'Standard_G2', Standard_G3 = 'Standard_G3', Standard_G4 = 'Standard_G4', Standard_G5 = 'Standard_G5', Standard_GS1 = 'Standard_GS1', Standard_GS2 = 'Standard_GS2', Standard_GS3 = 'Standard_GS3', Standard_GS4 = 'Standard_GS4', Standard_GS5 = 'Standard_GS5', 'Standard_GS4-8' = 'Standard_GS4-8', 'Standard_GS4-4' = 'Standard_GS4-4', 'Standard_GS5-16' = 'Standard_GS5-16', 'Standard_GS5-8' = 'Standard_GS5-8', Standard_H8 = 'Standard_H8', Standard_H16 = 'Standard_H16', Standard_H8m = 'Standard_H8m', Standard_H16m = 'Standard_H16m', Standard_H16r = 'Standard_H16r', Standard_H16mr = 'Standard_H16mr', Standard_L4s = 'Standard_L4s', Standard_L8s = 'Standard_L8s', Standard_L16s = 'Standard_L16s', Standard_L32s = 'Standard_L32s', Standard_M64s = 'Standard_M64s', Standard_M64ms = 'Standard_M64ms', Standard_M128s = 'Standard_M128s', Standard_M128ms = 'Standard_M128ms', 'Standard_M64-32ms' = 'Standard_M64-32ms', 'Standard_M64-16ms' = 'Standard_M64-16ms', 'Standard_M128-64ms' = 'Standard_M128-64ms', 'Standard_M128-32ms' = 'Standard_M128-32ms', Standard_NC6 = 'Standard_NC6', Standard_NC12 = 'Standard_NC12', Standard_NC24 = 'Standard_NC24', Standard_NC24r = 'Standard_NC24r', Standard_NC6s_v2 = 'Standard_NC6s_v2', Standard_NC12s_v2 = 'Standard_NC12s_v2', Standard_NC24s_v2 = 'Standard_NC24s_v2', Standard_NC24rs_v2 = 'Standard_NC24rs_v2', Standard_NC6s_v3 = 'Standard_NC6s_v3', Standard_NC12s_v3 = 'Standard_NC12s_v3', Standard_NC24s_v3 = 'Standard_NC24s_v3', Standard_NC24rs_v3 = 'Standard_NC24rs_v3', Standard_ND6s = 'Standard_ND6s', Standard_ND12s = 'Standard_ND12s', Standard_ND24s = 'Standard_ND24s', Standard_ND24rs = 'Standard_ND24rs', Standard_NV6 = 'Standard_NV6', Standard_NV12 = 'Standard_NV12', Standard_NV24 = 'Standard_NV24' }


	/** Specifies the HyperVGeneration Type */
	export enum HyperVGenerationType { V1 = 'V1', V2 = 'V2' }


	/** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
	export interface Image extends Resource {

		/** Describes the properties of an Image. */
		properties?: ImageProperties;
	}

	/** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
	export interface ImageFormProperties extends ResourceFormProperties {
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a data disk. */
	export interface ImageDataDisk extends ImageDisk {

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: number;
	}

	/** Describes a data disk. */
	export interface ImageDataDiskFormProperties extends ImageDiskFormProperties {

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: FormControl<number | null | undefined>,
	}
	export function CreateImageDataDiskFormGroup() {
		return new FormGroup<ImageDataDiskFormProperties>({
			blobUri: new FormControl<string | null | undefined>(undefined),
			caching: new FormControl<Caching | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<ImageDiskStorageAccountType | null | undefined>(undefined),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a image disk. */
	export interface ImageDisk {

		/** The Virtual Hard Disk. */
		blobUri?: string | null;

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
		diskEncryptionSet?: DiskEncryptionSetParameters;

		/**
		 * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;
		managedDisk?: SubResource;
		snapshot?: SubResource;

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType?: ImageDiskStorageAccountType | null;
	}

	/** Describes a image disk. */
	export interface ImageDiskFormProperties {

		/** The Virtual Hard Disk. */
		blobUri: FormControl<string | null | undefined>,

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType: FormControl<ImageDiskStorageAccountType | null | undefined>,
	}
	export function CreateImageDiskFormGroup() {
		return new FormGroup<ImageDiskFormProperties>({
			blobUri: new FormControl<string | null | undefined>(undefined),
			caching: new FormControl<Caching | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<ImageDiskStorageAccountType | null | undefined>(undefined),
		});

	}

	export enum ImageDiskStorageAccountType { Standard_LRS = 'Standard_LRS', Premium_LRS = 'Premium_LRS', StandardSSD_LRS = 'StandardSSD_LRS', UltraSSD_LRS = 'UltraSSD_LRS' }


	/** The List Image operation response. */
	export interface ImageListResult {

		/** The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images. */
		nextLink?: string | null;

		/**
		 * The list of Images.
		 * Required
		 */
		value: Array<Image>;
	}

	/** The List Image operation response. */
	export interface ImageListResultFormProperties {

		/** The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateImageListResultFormGroup() {
		return new FormGroup<ImageListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Operating System disk. */
	export interface ImageOSDisk extends ImageDisk {

		/**
		 * The OS State.
		 * Required
		 */
		osState: ImageOSDiskOsState;

		/**
		 * This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		osType: ImageOSDiskOsType;
	}

	/** Describes an Operating System disk. */
	export interface ImageOSDiskFormProperties extends ImageDiskFormProperties {

		/**
		 * The OS State.
		 * Required
		 */
		osState: FormControl<ImageOSDiskOsState | null | undefined>,

		/**
		 * This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
		 * Required
		 */
		osType: FormControl<ImageOSDiskOsType | null | undefined>,
	}
	export function CreateImageOSDiskFormGroup() {
		return new FormGroup<ImageOSDiskFormProperties>({
			blobUri: new FormControl<string | null | undefined>(undefined),
			caching: new FormControl<Caching | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<ImageDiskStorageAccountType | null | undefined>(undefined),
			osState: new FormControl<ImageOSDiskOsState | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<ImageOSDiskOsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImageOSDiskOsState { Generalized = 'Generalized', Specialized = 'Specialized' }

	export enum ImageOSDiskOsType { Windows = 'Windows', Linux = 'Linux' }


	/** Describes the properties of an Image. */
	export interface ImageProperties {

		/** Specifies the HyperVGeneration Type */
		hyperVGeneration?: HyperVGenerationType | null;

		/** The provisioning state. */
		provisioningState?: string | null;
		sourceVirtualMachine?: SubResource;

		/** Describes a storage profile. */
		storageProfile?: ImageStorageProfile;
	}

	/** Describes the properties of an Image. */
	export interface ImagePropertiesFormProperties {

		/** Specifies the HyperVGeneration Type */
		hyperVGeneration: FormControl<HyperVGenerationType | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateImagePropertiesFormGroup() {
		return new FormGroup<ImagePropertiesFormProperties>({
			hyperVGeneration: new FormControl<HyperVGenerationType | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
	export interface ImageReference extends SubResource {

		/** Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'. */
		exactVersion?: string | null;

		/** Specifies the offer of the platform image or marketplace image used to create the virtual machine. */
		offer?: string | null;

		/** The image publisher. */
		publisher?: string | null;

		/** The image SKU. */
		sku?: string | null;

		/** Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. */
		version?: string | null;
	}

	/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
	export interface ImageReferenceFormProperties extends SubResourceFormProperties {

		/** Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'. */
		exactVersion: FormControl<string | null | undefined>,

		/** Specifies the offer of the platform image or marketplace image used to create the virtual machine. */
		offer: FormControl<string | null | undefined>,

		/** The image publisher. */
		publisher: FormControl<string | null | undefined>,

		/** The image SKU. */
		sku: FormControl<string | null | undefined>,

		/** Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			exactVersion: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a storage profile. */
	export interface ImageStorageProfile {

		/** Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
		dataDisks?: Array<ImageDataDisk>;

		/** Describes an Operating System disk. */
		osDisk?: ImageOSDisk;

		/** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). */
		zoneResilient?: boolean | null;
	}

	/** Describes a storage profile. */
	export interface ImageStorageProfileFormProperties {

		/** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). */
		zoneResilient: FormControl<boolean | null | undefined>,
	}
	export function CreateImageStorageProfileFormGroup() {
		return new FormGroup<ImageStorageProfileFormProperties>({
			zoneResilient: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The source user image virtual hard disk. Only tags may be updated. */
	export interface ImageUpdate extends UpdateResource {

		/** Describes the properties of an Image. */
		properties?: ImageProperties;
	}

	/** The source user image virtual hard disk. Only tags may be updated. */
	export interface ImageUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateImageUpdateFormGroup() {
		return new FormGroup<ImageUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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


	/** Describes a reference to Key Vault Key */
	export interface KeyVaultKeyReference {

		/**
		 * The URL referencing a key encryption key in Key Vault.
		 * Required
		 */
		keyUrl: string;

		/** Required */
		sourceVault: SubResource;
	}

	/** Describes a reference to Key Vault Key */
	export interface KeyVaultKeyReferenceFormProperties {

		/**
		 * The URL referencing a key encryption key in Key Vault.
		 * Required
		 */
		keyUrl: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyReferenceFormGroup() {
		return new FormGroup<KeyVaultKeyReferenceFormProperties>({
			keyUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a reference to Key Vault Secret */
	export interface KeyVaultSecretReference {

		/**
		 * The URL referencing a secret in a Key Vault.
		 * Required
		 */
		secretUrl: string;

		/** Required */
		sourceVault: SubResource;
	}

	/** Describes a reference to Key Vault Secret */
	export interface KeyVaultSecretReferenceFormProperties {

		/**
		 * The URL referencing a secret in a Key Vault.
		 * Required
		 */
		secretUrl: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultSecretReferenceFormGroup() {
		return new FormGroup<KeyVaultSecretReferenceFormProperties>({
			secretUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
	export interface LinuxConfiguration {

		/** Specifies whether password authentication should be disabled. */
		disablePasswordAuthentication?: boolean | null;

		/** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
		provisionVMAgent?: boolean | null;

		/** SSH configuration for Linux based VMs running on Azure */
		ssh?: SshConfiguration;
	}

	/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
	export interface LinuxConfigurationFormProperties {

		/** Specifies whether password authentication should be disabled. */
		disablePasswordAuthentication: FormControl<boolean | null | undefined>,

		/** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
		provisionVMAgent: FormControl<boolean | null | undefined>,
	}
	export function CreateLinuxConfigurationFormGroup() {
		return new FormGroup<LinuxConfigurationFormProperties>({
			disablePasswordAuthentication: new FormControl<boolean | null | undefined>(undefined),
			provisionVMAgent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The List Usages operation response. */
	export interface ListUsagesResult {

		/** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
		nextLink?: string | null;

		/**
		 * The list of compute resource usages.
		 * Required
		 */
		value: Array<Usage>;
	}

	/** The List Usages operation response. */
	export interface ListUsagesResultFormProperties {

		/** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListUsagesResultFormGroup() {
		return new FormGroup<ListUsagesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes Compute Resource Usage. */
	export interface Usage {

		/**
		 * The current usage of the resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: number;

		/**
		 * The maximum permitted usage of the resource.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: string;

		/**
		 * The Usage Names.
		 * Required
		 */
		name: UsageName;

		/**
		 * An enum describing the unit of usage measurement.
		 * Required
		 */
		unit: UsageUnit;
	}

	/** Describes Compute Resource Usage. */
	export interface UsageFormProperties {

		/**
		 * The current usage of the resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: FormControl<number | null | undefined>,

		/**
		 * The maximum permitted usage of the resource.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: FormControl<string | null | undefined>,

		/**
		 * An enum describing the unit of usage measurement.
		 * Required
		 */
		unit: FormControl<UsageUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<UsageUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UsageUnit { Count = 'Count' }


	/** Api input base class for LogAnalytics Api. */
	export interface LogAnalyticsInputBase {

		/**
		 * SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
		 * Required
		 */
		blobContainerSasUri: string;

		/**
		 * From time of the query
		 * Required
		 */
		fromTime: Date;

		/** Group query result by Operation Name. */
		groupByOperationName?: boolean | null;

		/** Group query result by Resource Name. */
		groupByResourceName?: boolean | null;

		/** Group query result by Throttle Policy applied. */
		groupByThrottlePolicy?: boolean | null;

		/**
		 * To time of the query
		 * Required
		 */
		toTime: Date;
	}

	/** Api input base class for LogAnalytics Api. */
	export interface LogAnalyticsInputBaseFormProperties {

		/**
		 * SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
		 * Required
		 */
		blobContainerSasUri: FormControl<string | null | undefined>,

		/**
		 * From time of the query
		 * Required
		 */
		fromTime: FormControl<Date | null | undefined>,

		/** Group query result by Operation Name. */
		groupByOperationName: FormControl<boolean | null | undefined>,

		/** Group query result by Resource Name. */
		groupByResourceName: FormControl<boolean | null | undefined>,

		/** Group query result by Throttle Policy applied. */
		groupByThrottlePolicy: FormControl<boolean | null | undefined>,

		/**
		 * To time of the query
		 * Required
		 */
		toTime: FormControl<Date | null | undefined>,
	}
	export function CreateLogAnalyticsInputBaseFormGroup() {
		return new FormGroup<LogAnalyticsInputBaseFormProperties>({
			blobContainerSasUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groupByOperationName: new FormControl<boolean | null | undefined>(undefined),
			groupByResourceName: new FormControl<boolean | null | undefined>(undefined),
			groupByThrottlePolicy: new FormControl<boolean | null | undefined>(undefined),
			toTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** LogAnalytics operation status response */
	export interface LogAnalyticsOperationResult {

		/** LogAnalytics output properties */
		properties?: LogAnalyticsOutput;
	}

	/** LogAnalytics operation status response */
	export interface LogAnalyticsOperationResultFormProperties {
	}
	export function CreateLogAnalyticsOperationResultFormGroup() {
		return new FormGroup<LogAnalyticsOperationResultFormProperties>({
		});

	}


	/** LogAnalytics output properties */
	export interface LogAnalyticsOutput {

		/** Output file Uri path to blob container. */
		output?: string | null;
	}

	/** LogAnalytics output properties */
	export interface LogAnalyticsOutputFormProperties {

		/** Output file Uri path to blob container. */
		output: FormControl<string | null | undefined>,
	}
	export function CreateLogAnalyticsOutputFormGroup() {
		return new FormGroup<LogAnalyticsOutputFormProperties>({
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance Operation Status. */
	export interface MaintenanceRedeployStatus {

		/** True, if customer is allowed to perform Maintenance. */
		isCustomerInitiatedMaintenanceAllowed?: boolean | null;

		/** Message returned for the last Maintenance Operation. */
		lastOperationMessage?: string | null;

		/** The Last Maintenance Operation Result Code. */
		lastOperationResultCode?: MaintenanceRedeployStatusLastOperationResultCode | null;

		/** End Time for the Maintenance Window. */
		maintenanceWindowEndTime?: Date | null;

		/** Start Time for the Maintenance Window. */
		maintenanceWindowStartTime?: Date | null;

		/** End Time for the Pre Maintenance Window. */
		preMaintenanceWindowEndTime?: Date | null;

		/** Start Time for the Pre Maintenance Window. */
		preMaintenanceWindowStartTime?: Date | null;
	}

	/** Maintenance Operation Status. */
	export interface MaintenanceRedeployStatusFormProperties {

		/** True, if customer is allowed to perform Maintenance. */
		isCustomerInitiatedMaintenanceAllowed: FormControl<boolean | null | undefined>,

		/** Message returned for the last Maintenance Operation. */
		lastOperationMessage: FormControl<string | null | undefined>,

		/** The Last Maintenance Operation Result Code. */
		lastOperationResultCode: FormControl<MaintenanceRedeployStatusLastOperationResultCode | null | undefined>,

		/** End Time for the Maintenance Window. */
		maintenanceWindowEndTime: FormControl<Date | null | undefined>,

		/** Start Time for the Maintenance Window. */
		maintenanceWindowStartTime: FormControl<Date | null | undefined>,

		/** End Time for the Pre Maintenance Window. */
		preMaintenanceWindowEndTime: FormControl<Date | null | undefined>,

		/** Start Time for the Pre Maintenance Window. */
		preMaintenanceWindowStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateMaintenanceRedeployStatusFormGroup() {
		return new FormGroup<MaintenanceRedeployStatusFormProperties>({
			isCustomerInitiatedMaintenanceAllowed: new FormControl<boolean | null | undefined>(undefined),
			lastOperationMessage: new FormControl<string | null | undefined>(undefined),
			lastOperationResultCode: new FormControl<MaintenanceRedeployStatusLastOperationResultCode | null | undefined>(undefined),
			maintenanceWindowEndTime: new FormControl<Date | null | undefined>(undefined),
			maintenanceWindowStartTime: new FormControl<Date | null | undefined>(undefined),
			preMaintenanceWindowEndTime: new FormControl<Date | null | undefined>(undefined),
			preMaintenanceWindowStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MaintenanceRedeployStatusLastOperationResultCode { None = 'None', RetryLater = 'RetryLater', MaintenanceAborted = 'MaintenanceAborted', MaintenanceCompleted = 'MaintenanceCompleted' }


	/** The parameters of a managed disk. */
	export interface ManagedDiskParameters extends SubResource {

		/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
		diskEncryptionSet?: DiskEncryptionSetParameters;

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType?: ImageDiskStorageAccountType | null;
	}

	/** The parameters of a managed disk. */
	export interface ManagedDiskParametersFormProperties extends SubResourceFormProperties {

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType: FormControl<ImageDiskStorageAccountType | null | undefined>,
	}
	export function CreateManagedDiskParametersFormGroup() {
		return new FormGroup<ManagedDiskParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			storageAccountType: new FormControl<ImageDiskStorageAccountType | null | undefined>(undefined),
		});

	}


	/** Describes a network interface reference. */
	export interface NetworkInterfaceReference extends SubResource {

		/** Describes a network interface reference properties. */
		properties?: NetworkInterfaceReferenceProperties;
	}

	/** Describes a network interface reference. */
	export interface NetworkInterfaceReferenceFormProperties extends SubResourceFormProperties {
	}
	export function CreateNetworkInterfaceReferenceFormGroup() {
		return new FormGroup<NetworkInterfaceReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a network interface reference properties. */
	export interface NetworkInterfaceReferenceProperties {

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary?: boolean | null;
	}

	/** Describes a network interface reference properties. */
	export interface NetworkInterfaceReferencePropertiesFormProperties {

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkInterfaceReferencePropertiesFormGroup() {
		return new FormGroup<NetworkInterfaceReferencePropertiesFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the network interfaces of the virtual machine. */
	export interface NetworkProfile {

		/** Specifies the list of resource Ids for the network interfaces associated with the virtual machine. */
		networkInterfaces?: Array<NetworkInterfaceReference>;
	}

	/** Specifies the network interfaces of the virtual machine. */
	export interface NetworkProfileFormProperties {
	}
	export function CreateNetworkProfileFormGroup() {
		return new FormGroup<NetworkProfileFormProperties>({
		});

	}


	/** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
	export interface OSDisk {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: CreateOption;

		/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk. */
		diffDiskSettings?: DiffDiskSettings;

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/** Describes a Encryption Settings for a Disk */
		encryptionSettings?: DiskEncryptionSettings;

		/** Describes the uri of a disk. */
		image?: VirtualHardDisk;

		/** The parameters of a managed disk. */
		managedDisk?: ManagedDiskParameters;

		/** The disk name. */
		name?: string | null;

		/** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
		osType?: ImageOSDiskOsType | null;

		/** Describes the uri of a disk. */
		vhd?: VirtualHardDisk;

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled?: boolean | null;
	}

	/** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
	export interface OSDiskFormProperties {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: FormControl<CreateOption | null | undefined>,

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/** The disk name. */
		name: FormControl<string | null | undefined>,

		/** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
		osType: FormControl<ImageOSDiskOsType | null | undefined>,

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOSDiskFormGroup() {
		return new FormGroup<OSDiskFormProperties>({
			caching: new FormControl<Caching | null | undefined>(undefined),
			createOption: new FormControl<CreateOption | null | undefined>(undefined, [Validators.required]),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<ImageOSDiskOsType | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the os disk image information. */
	export interface OSDiskImage {

		/**
		 * The operating system of the osDiskImage.
		 * Required
		 */
		operatingSystem: ImageOSDiskOsType;
	}

	/** Contains the os disk image information. */
	export interface OSDiskImageFormProperties {

		/**
		 * The operating system of the osDiskImage.
		 * Required
		 */
		operatingSystem: FormControl<ImageOSDiskOsType | null | undefined>,
	}
	export function CreateOSDiskImageFormGroup() {
		return new FormGroup<OSDiskImageFormProperties>({
			operatingSystem: new FormControl<ImageOSDiskOsType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
	export interface OSProfile {

		/** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
		adminPassword?: string | null;

		/** Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		adminUsername?: string | null;

		/** Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine. */
		allowExtensionOperations?: boolean | null;

		/** Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions). */
		computerName?: string | null;

		/** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		customData?: string | null;

		/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
		linuxConfiguration?: LinuxConfiguration;

		/** Specifies whether the guest provision signal is required to infer provision success of the virtual machine. */
		requireGuestProvisionSignal?: boolean | null;

		/** Specifies set of certificates that should be installed onto the virtual machine. */
		secrets?: Array<VaultSecretGroup>;

		/** Specifies Windows operating system settings on the virtual machine. */
		windowsConfiguration?: WindowsConfiguration;
	}

	/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
	export interface OSProfileFormProperties {

		/** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
		adminPassword: FormControl<string | null | undefined>,

		/** Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		adminUsername: FormControl<string | null | undefined>,

		/** Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine. */
		allowExtensionOperations: FormControl<boolean | null | undefined>,

		/** Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions). */
		computerName: FormControl<string | null | undefined>,

		/** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		customData: FormControl<string | null | undefined>,

		/** Specifies whether the guest provision signal is required to infer provision success of the virtual machine. */
		requireGuestProvisionSignal: FormControl<boolean | null | undefined>,
	}
	export function CreateOSProfileFormGroup() {
		return new FormGroup<OSProfileFormProperties>({
			adminPassword: new FormControl<string | null | undefined>(undefined),
			adminUsername: new FormControl<string | null | undefined>(undefined),
			allowExtensionOperations: new FormControl<boolean | null | undefined>(undefined),
			computerName: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			requireGuestProvisionSignal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a set of certificates which are all in the same Key Vault. */
	export interface VaultSecretGroup {
		sourceVault?: SubResource;

		/** The list of key vault references in SourceVault which contain certificates. */
		vaultCertificates?: Array<VaultCertificate>;
	}

	/** Describes a set of certificates which are all in the same Key Vault. */
	export interface VaultSecretGroupFormProperties {
	}
	export function CreateVaultSecretGroupFormGroup() {
		return new FormGroup<VaultSecretGroupFormProperties>({
		});

	}


	/** Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM. */
	export interface VaultCertificate {

		/** For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted. */
		certificateStore?: string | null;

		/** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
		certificateUrl?: string | null;
	}

	/** Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM. */
	export interface VaultCertificateFormProperties {

		/** For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted. */
		certificateStore: FormControl<string | null | undefined>,

		/** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
		certificateUrl: FormControl<string | null | undefined>,
	}
	export function CreateVaultCertificateFormGroup() {
		return new FormGroup<VaultCertificateFormProperties>({
			certificateStore: new FormControl<string | null | undefined>(undefined),
			certificateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
	export interface Plan {

		/** The plan ID. */
		name?: string | null;

		/** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
		product?: string | null;

		/** The promotion code. */
		promotionCode?: string | null;

		/** The publisher ID. */
		publisher?: string | null;
	}

	/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
	export interface PlanFormProperties {

		/** The plan ID. */
		name: FormControl<string | null | undefined>,

		/** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
		product: FormControl<string | null | undefined>,

		/** The promotion code. */
		promotionCode: FormControl<string | null | undefined>,

		/** The publisher ID. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about the proximity placement group. */
	export interface ProximityPlacementGroup extends Resource {

		/** Describes the properties of a Proximity Placement Group. */
		properties?: ProximityPlacementGroupProperties;
	}

	/** Specifies information about the proximity placement group. */
	export interface ProximityPlacementGroupFormProperties extends ResourceFormProperties {
	}
	export function CreateProximityPlacementGroupFormGroup() {
		return new FormGroup<ProximityPlacementGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Proximity Placement Group operation response. */
	export interface ProximityPlacementGroupListResult {

		/** The URI to fetch the next page of proximity placement groups. */
		nextLink?: string | null;

		/**
		 * The list of proximity placement groups
		 * Required
		 */
		value: Array<ProximityPlacementGroup>;
	}

	/** The List Proximity Placement Group operation response. */
	export interface ProximityPlacementGroupListResultFormProperties {

		/** The URI to fetch the next page of proximity placement groups. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProximityPlacementGroupListResultFormGroup() {
		return new FormGroup<ProximityPlacementGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Proximity Placement Group. */
	export interface ProximityPlacementGroupProperties {

		/** A list of references to all availability sets in the proximity placement group. */
		availabilitySets?: Array<SubResourceWithColocationStatus>;

		/** Instance view status. */
		colocationStatus?: InstanceViewStatus;

		/** Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use. */
		proximityPlacementGroupType?: ProximityPlacementGroupPropertiesProximityPlacementGroupType | null;

		/** A list of references to all virtual machine scale sets in the proximity placement group. */
		virtualMachineScaleSets?: Array<SubResourceWithColocationStatus>;

		/** A list of references to all virtual machines in the proximity placement group. */
		virtualMachines?: Array<SubResourceWithColocationStatus>;
	}

	/** Describes the properties of a Proximity Placement Group. */
	export interface ProximityPlacementGroupPropertiesFormProperties {

		/** Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use. */
		proximityPlacementGroupType: FormControl<ProximityPlacementGroupPropertiesProximityPlacementGroupType | null | undefined>,
	}
	export function CreateProximityPlacementGroupPropertiesFormGroup() {
		return new FormGroup<ProximityPlacementGroupPropertiesFormProperties>({
			proximityPlacementGroupType: new FormControl<ProximityPlacementGroupPropertiesProximityPlacementGroupType | null | undefined>(undefined),
		});

	}

	export interface SubResourceWithColocationStatus extends SubResource {

		/** Instance view status. */
		colocationStatus?: InstanceViewStatus;
	}
	export interface SubResourceWithColocationStatusFormProperties extends SubResourceFormProperties {
	}
	export function CreateSubResourceWithColocationStatusFormGroup() {
		return new FormGroup<SubResourceWithColocationStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProximityPlacementGroupPropertiesProximityPlacementGroupType { Standard = 'Standard', Ultra = 'Ultra' }


	/** Specifies information about the proximity placement group. */
	export interface ProximityPlacementGroupUpdate {
	}

	/** Specifies information about the proximity placement group. */
	export interface ProximityPlacementGroupUpdateFormProperties {
	}
	export function CreateProximityPlacementGroupUpdateFormGroup() {
		return new FormGroup<ProximityPlacementGroupUpdateFormProperties>({
		});

	}


	/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
	export interface PurchasePlan {

		/**
		 * The plan ID.
		 * Required
		 */
		name: string;

		/**
		 * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
		 * Required
		 */
		product: string;

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: string;
	}

	/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
	export interface PurchasePlanFormProperties {

		/**
		 * The plan ID.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
		 * Required
		 */
		product: FormControl<string | null | undefined>,

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreatePurchasePlanFormGroup() {
		return new FormGroup<PurchasePlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response after calling a manual recovery walk */
	export interface RecoveryWalkResponse {

		/**
		 * The next update domain that needs to be walked. Null means walk spanning all update domains has been completed
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextPlatformUpdateDomain?: number | null;

		/** Whether the recovery walk was performed */
		walkPerformed?: boolean | null;
	}

	/** Response after calling a manual recovery walk */
	export interface RecoveryWalkResponseFormProperties {

		/**
		 * The next update domain that needs to be walked. Null means walk spanning all update domains has been completed
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextPlatformUpdateDomain: FormControl<number | null | undefined>,

		/** Whether the recovery walk was performed */
		walkPerformed: FormControl<boolean | null | undefined>,
	}
	export function CreateRecoveryWalkResponseFormGroup() {
		return new FormGroup<RecoveryWalkResponseFormProperties>({
			nextPlatformUpdateDomain: new FormControl<number | null | undefined>(undefined),
			walkPerformed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Api request input for LogAnalytics getRequestRateByInterval Api. */
	export interface RequestRateByIntervalInput extends LogAnalyticsInputBase {

		/**
		 * Interval value in minutes used to create LogAnalytics call rate logs.
		 * Required
		 */
		intervalLength: RequestRateByIntervalInputIntervalLength;
	}

	/** Api request input for LogAnalytics getRequestRateByInterval Api. */
	export interface RequestRateByIntervalInputFormProperties extends LogAnalyticsInputBaseFormProperties {

		/**
		 * Interval value in minutes used to create LogAnalytics call rate logs.
		 * Required
		 */
		intervalLength: FormControl<RequestRateByIntervalInputIntervalLength | null | undefined>,
	}
	export function CreateRequestRateByIntervalInputFormGroup() {
		return new FormGroup<RequestRateByIntervalInputFormProperties>({
			blobContainerSasUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			groupByOperationName: new FormControl<boolean | null | undefined>(undefined),
			groupByResourceName: new FormControl<boolean | null | undefined>(undefined),
			groupByThrottlePolicy: new FormControl<boolean | null | undefined>(undefined),
			toTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			intervalLength: new FormControl<RequestRateByIntervalInputIntervalLength | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RequestRateByIntervalInputIntervalLength { ThreeMins = 'ThreeMins', FiveMins = 'FiveMins', ThirtyMins = 'ThirtyMins', SixtyMins = 'SixtyMins' }


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


	/** Information about rollback on failed VM instances after a OS Upgrade operation. */
	export interface RollbackStatusInfo {

		/**
		 * The number of instances which failed to rollback.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedRolledbackInstanceCount?: number | null;

		/** Api error. */
		rollbackError?: ApiError;

		/**
		 * The number of instances which have been successfully rolled back.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfullyRolledbackInstanceCount?: number | null;
	}

	/** Information about rollback on failed VM instances after a OS Upgrade operation. */
	export interface RollbackStatusInfoFormProperties {

		/**
		 * The number of instances which failed to rollback.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedRolledbackInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The number of instances which have been successfully rolled back.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfullyRolledbackInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateRollbackStatusInfoFormGroup() {
		return new FormGroup<RollbackStatusInfoFormProperties>({
			failedRolledbackInstanceCount: new FormControl<number | null | undefined>(undefined),
			successfullyRolledbackInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration parameters used while performing a rolling upgrade. */
	export interface RollingUpgradePolicy {

		/**
		 * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
		 * Minimum: 5
		 * Maximum: 100
		 */
		maxBatchInstancePercent?: number | null;

		/**
		 * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
		 * Minimum: 5
		 * Maximum: 100
		 */
		maxUnhealthyInstancePercent?: number | null;

		/**
		 * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxUnhealthyUpgradedInstancePercent?: number | null;

		/** The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). */
		pauseTimeBetweenBatches?: string | null;
	}

	/** The configuration parameters used while performing a rolling upgrade. */
	export interface RollingUpgradePolicyFormProperties {

		/**
		 * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
		 * Minimum: 5
		 * Maximum: 100
		 */
		maxBatchInstancePercent: FormControl<number | null | undefined>,

		/**
		 * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
		 * Minimum: 5
		 * Maximum: 100
		 */
		maxUnhealthyInstancePercent: FormControl<number | null | undefined>,

		/**
		 * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxUnhealthyUpgradedInstancePercent: FormControl<number | null | undefined>,

		/** The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). */
		pauseTimeBetweenBatches: FormControl<string | null | undefined>,
	}
	export function CreateRollingUpgradePolicyFormGroup() {
		return new FormGroup<RollingUpgradePolicyFormProperties>({
			maxBatchInstancePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(100)]),
			maxUnhealthyInstancePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(100)]),
			maxUnhealthyUpgradedInstancePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			pauseTimeBetweenBatches: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the number of virtual machine instances in each upgrade state. */
	export interface RollingUpgradeProgressInfo {

		/**
		 * The number of instances that have failed to be upgraded successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedInstanceCount?: number | null;

		/**
		 * The number of instances that are currently being upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inProgressInstanceCount?: number | null;

		/**
		 * The number of instances that have not yet begun to be upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingInstanceCount?: number | null;

		/**
		 * The number of instances that have been successfully upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfulInstanceCount?: number | null;
	}

	/** Information about the number of virtual machine instances in each upgrade state. */
	export interface RollingUpgradeProgressInfoFormProperties {

		/**
		 * The number of instances that have failed to be upgraded successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The number of instances that are currently being upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inProgressInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The number of instances that have not yet begun to be upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The number of instances that have been successfully upgraded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfulInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateRollingUpgradeProgressInfoFormGroup() {
		return new FormGroup<RollingUpgradeProgressInfoFormProperties>({
			failedInstanceCount: new FormControl<number | null | undefined>(undefined),
			inProgressInstanceCount: new FormControl<number | null | undefined>(undefined),
			pendingInstanceCount: new FormControl<number | null | undefined>(undefined),
			successfulInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the current running state of the overall upgrade. */
	export interface RollingUpgradeRunningStatus {

		/** Code indicating the current status of the upgrade. */
		code?: RollingUpgradeRunningStatusCode | null;

		/** The last action performed on the rolling upgrade. */
		lastAction?: RollingUpgradeRunningStatusLastAction | null;

		/** Last action time of the upgrade. */
		lastActionTime?: Date | null;

		/** Start time of the upgrade. */
		startTime?: Date | null;
	}

	/** Information about the current running state of the overall upgrade. */
	export interface RollingUpgradeRunningStatusFormProperties {

		/** Code indicating the current status of the upgrade. */
		code: FormControl<RollingUpgradeRunningStatusCode | null | undefined>,

		/** The last action performed on the rolling upgrade. */
		lastAction: FormControl<RollingUpgradeRunningStatusLastAction | null | undefined>,

		/** Last action time of the upgrade. */
		lastActionTime: FormControl<Date | null | undefined>,

		/** Start time of the upgrade. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRollingUpgradeRunningStatusFormGroup() {
		return new FormGroup<RollingUpgradeRunningStatusFormProperties>({
			code: new FormControl<RollingUpgradeRunningStatusCode | null | undefined>(undefined),
			lastAction: new FormControl<RollingUpgradeRunningStatusLastAction | null | undefined>(undefined),
			lastActionTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RollingUpgradeRunningStatusCode { RollingForward = 'RollingForward', Cancelled = 'Cancelled', Completed = 'Completed', Faulted = 'Faulted' }

	export enum RollingUpgradeRunningStatusLastAction { Start = 'Start', Cancel = 'Cancel' }


	/** The status of the latest virtual machine scale set rolling upgrade. */
	export interface RollingUpgradeStatusInfo extends Resource {

		/** The status of the latest virtual machine scale set rolling upgrade. */
		properties?: RollingUpgradeStatusInfoProperties;
	}

	/** The status of the latest virtual machine scale set rolling upgrade. */
	export interface RollingUpgradeStatusInfoFormProperties extends ResourceFormProperties {
	}
	export function CreateRollingUpgradeStatusInfoFormGroup() {
		return new FormGroup<RollingUpgradeStatusInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the latest virtual machine scale set rolling upgrade. */
	export interface RollingUpgradeStatusInfoProperties {

		/** Api error. */
		error?: ApiError;

		/** The configuration parameters used while performing a rolling upgrade. */
		policy?: RollingUpgradePolicy;

		/** Information about the number of virtual machine instances in each upgrade state. */
		progress?: RollingUpgradeProgressInfo;

		/** Information about the current running state of the overall upgrade. */
		runningStatus?: RollingUpgradeRunningStatus;
	}

	/** The status of the latest virtual machine scale set rolling upgrade. */
	export interface RollingUpgradeStatusInfoPropertiesFormProperties {
	}
	export function CreateRollingUpgradeStatusInfoPropertiesFormGroup() {
		return new FormGroup<RollingUpgradeStatusInfoPropertiesFormProperties>({
		});

	}


	/** Describes a scale-in policy for a virtual machine scale set. */
	export interface ScaleInPolicy {

		/** The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br> */
		rules?: Array<string>;
	}

	/** Describes a scale-in policy for a virtual machine scale set. */
	export interface ScaleInPolicyFormProperties {
	}
	export function CreateScaleInPolicyFormGroup() {
		return new FormGroup<ScaleInPolicyFormProperties>({
		});

	}

	export interface ScheduledEventsProfile {
		terminateNotificationProfile?: TerminateNotificationProfile;
	}
	export interface ScheduledEventsProfileFormProperties {
	}
	export function CreateScheduledEventsProfileFormGroup() {
		return new FormGroup<ScheduledEventsProfileFormProperties>({
		});

	}

	export interface TerminateNotificationProfile {

		/** Specifies whether the Terminate Scheduled event is enabled or disabled. */
		enable?: boolean | null;

		/** Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) */
		notBeforeTimeout?: string | null;
	}
	export interface TerminateNotificationProfileFormProperties {

		/** Specifies whether the Terminate Scheduled event is enabled or disabled. */
		enable: FormControl<boolean | null | undefined>,

		/** Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) */
		notBeforeTimeout: FormControl<string | null | undefined>,
	}
	export function CreateTerminateNotificationProfileFormGroup() {
		return new FormGroup<TerminateNotificationProfileFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
			notBeforeTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set sku. */
	export interface Sku {

		/**
		 * Specifies the number of virtual machines in the scale set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		capacity?: string | null;

		/** The sku name. */
		name?: string | null;

		/** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
		tier?: string | null;
	}

	/** Describes a virtual machine scale set sku. */
	export interface SkuFormProperties {

		/**
		 * Specifies the number of virtual machines in the scale set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		capacity: FormControl<string | null | undefined>,

		/** The sku name. */
		name: FormControl<string | null | undefined>,

		/** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSH configuration for Linux based VMs running on Azure */
	export interface SshConfiguration {

		/** The list of SSH public keys used to authenticate with linux based VMs. */
		publicKeys?: Array<SshPublicKey>;
	}

	/** SSH configuration for Linux based VMs running on Azure */
	export interface SshConfigurationFormProperties {
	}
	export function CreateSshConfigurationFormGroup() {
		return new FormGroup<SshConfigurationFormProperties>({
		});

	}


	/** Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed. */
	export interface SshPublicKey {

		/** SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
		keyData?: string | null;

		/** Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys */
		path?: string | null;
	}

	/** Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed. */
	export interface SshPublicKeyFormProperties {

		/** SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
		keyData: FormControl<string | null | undefined>,

		/** Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			keyData: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
	export enum StorageAccountType { Standard_LRS = 'Standard_LRS', Premium_LRS = 'Premium_LRS', StandardSSD_LRS = 'StandardSSD_LRS', UltraSSD_LRS = 'UltraSSD_LRS' }


	/** Specifies the storage settings for the virtual machine disks. */
	export interface StorageProfile {

		/** Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
		dataDisks?: Array<DataDisk>;

		/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
		imageReference?: ImageReference;

		/** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
		osDisk?: OSDisk;
	}

	/** Specifies the storage settings for the virtual machine disks. */
	export interface StorageProfileFormProperties {
	}
	export function CreateStorageProfileFormGroup() {
		return new FormGroup<StorageProfileFormProperties>({
		});

	}


	/** Api request input for LogAnalytics getThrottledRequests Api. */
	export interface ThrottledRequestsInput {
	}

	/** Api request input for LogAnalytics getThrottledRequests Api. */
	export interface ThrottledRequestsInputFormProperties {
	}
	export function CreateThrottledRequestsInputFormGroup() {
		return new FormGroup<ThrottledRequestsInputFormProperties>({
		});

	}


	/** The Update Resource model definition. */
	export interface UpdateResource {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Update Resource model definition. */
	export interface UpdateResourceFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateResourceFormGroup() {
		return new FormGroup<UpdateResourceFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Virtual Machine Scale Set OS Upgrade History operation response. */
	export interface UpgradeOperationHistoricalStatusInfo {

		/** Resource location */
		location?: string | null;

		/** Describes each OS upgrade on the Virtual Machine Scale Set. */
		properties?: UpgradeOperationHistoricalStatusInfoProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Virtual Machine Scale Set OS Upgrade History operation response. */
	export interface UpgradeOperationHistoricalStatusInfoFormProperties {

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeOperationHistoricalStatusInfoFormGroup() {
		return new FormGroup<UpgradeOperationHistoricalStatusInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes each OS upgrade on the Virtual Machine Scale Set. */
	export interface UpgradeOperationHistoricalStatusInfoProperties {

		/** Api error. */
		error?: ApiError;

		/** Information about the number of virtual machine instances in each upgrade state. */
		progress?: RollingUpgradeProgressInfo;

		/** Information about rollback on failed VM instances after a OS Upgrade operation. */
		rollbackInfo?: RollbackStatusInfo;

		/** Information about the current running state of the overall upgrade. */
		runningStatus?: UpgradeOperationHistoryStatus;

		/** Invoker of the Upgrade Operation */
		startedBy?: UpgradeOperationHistoricalStatusInfoPropertiesStartedBy | null;

		/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
		targetImageReference?: ImageReference;
	}

	/** Describes each OS upgrade on the Virtual Machine Scale Set. */
	export interface UpgradeOperationHistoricalStatusInfoPropertiesFormProperties {

		/** Invoker of the Upgrade Operation */
		startedBy: FormControl<UpgradeOperationHistoricalStatusInfoPropertiesStartedBy | null | undefined>,
	}
	export function CreateUpgradeOperationHistoricalStatusInfoPropertiesFormGroup() {
		return new FormGroup<UpgradeOperationHistoricalStatusInfoPropertiesFormProperties>({
			startedBy: new FormControl<UpgradeOperationHistoricalStatusInfoPropertiesStartedBy | null | undefined>(undefined),
		});

	}

	export enum UpgradeOperationHistoricalStatusInfoPropertiesStartedBy { Unknown = 'Unknown', User = 'User', Platform = 'Platform' }


	/** Information about the current running state of the overall upgrade. */
	export interface UpgradeOperationHistoryStatus {

		/** Code indicating the current status of the upgrade. */
		code?: RollingUpgradeRunningStatusCode | null;

		/** End time of the upgrade. */
		endTime?: Date | null;

		/** Start time of the upgrade. */
		startTime?: Date | null;
	}

	/** Information about the current running state of the overall upgrade. */
	export interface UpgradeOperationHistoryStatusFormProperties {

		/** Code indicating the current status of the upgrade. */
		code: FormControl<RollingUpgradeRunningStatusCode | null | undefined>,

		/** End time of the upgrade. */
		endTime: FormControl<Date | null | undefined>,

		/** Start time of the upgrade. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpgradeOperationHistoryStatusFormGroup() {
		return new FormGroup<UpgradeOperationHistoryStatusFormProperties>({
			code: new FormControl<RollingUpgradeRunningStatusCode | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an upgrade policy - automatic, manual, or rolling. */
	export interface UpgradePolicy {

		/** The configuration parameters used for performing automatic OS upgrade. */
		automaticOSUpgradePolicy?: AutomaticOSUpgradePolicy;

		/** Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. */
		mode?: UpgradePolicyMode | null;

		/** The configuration parameters used while performing a rolling upgrade. */
		rollingUpgradePolicy?: RollingUpgradePolicy;
	}

	/** Describes an upgrade policy - automatic, manual, or rolling. */
	export interface UpgradePolicyFormProperties {

		/** Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. */
		mode: FormControl<UpgradePolicyMode | null | undefined>,
	}
	export function CreateUpgradePolicyFormGroup() {
		return new FormGroup<UpgradePolicyFormProperties>({
			mode: new FormControl<UpgradePolicyMode | null | undefined>(undefined),
		});

	}

	export enum UpgradePolicyMode { Automatic = 'Automatic', Manual = 'Manual', Rolling = 'Rolling' }


	/** The Usage Names. */
	export interface UsageName {

		/** The localized name of the resource. */
		localizedValue?: string | null;

		/** The name of the resource. */
		value?: string | null;
	}

	/** The Usage Names. */
	export interface UsageNameFormProperties {

		/** The localized name of the resource. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the resource. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VMScaleSetConvertToSinglePlacementGroupInput {

		/** Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances. */
		activePlacementGroupId?: string | null;
	}
	export interface VMScaleSetConvertToSinglePlacementGroupInputFormProperties {

		/** Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances. */
		activePlacementGroupId: FormControl<string | null | undefined>,
	}
	export function CreateVMScaleSetConvertToSinglePlacementGroupInputFormGroup() {
		return new FormGroup<VMScaleSetConvertToSinglePlacementGroupInputFormProperties>({
			activePlacementGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the uri of a disk. */
	export interface VirtualHardDisk {

		/** Specifies the virtual hard disk's uri. */
		uri?: string | null;
	}

	/** Describes the uri of a disk. */
	export interface VirtualHardDiskFormProperties {

		/** Specifies the virtual hard disk's uri. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVirtualHardDiskFormGroup() {
		return new FormGroup<VirtualHardDiskFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine. */
	export interface VirtualMachine extends Resource {

		/** Identity for the virtual machine. */
		identity?: VirtualMachineIdentity;

		/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
		plan?: Plan;

		/** Describes the properties of a Virtual Machine. */
		properties?: VirtualMachineProperties;

		/** The virtual machine child extension resources. */
		resources?: Array<VirtualMachineExtension>;

		/** The virtual machine zones. */
		zones?: Array<string>;
	}

	/** Describes a Virtual Machine. */
	export interface VirtualMachineFormProperties extends ResourceFormProperties {
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Extension. */
	export interface VirtualMachineExtension extends Resource {

		/** Describes the properties of a Virtual Machine Extension. */
		properties?: VirtualMachineExtensionProperties;
	}

	/** Describes a Virtual Machine Extension. */
	export interface VirtualMachineExtensionFormProperties extends ResourceFormProperties {
	}
	export function CreateVirtualMachineExtensionFormGroup() {
		return new FormGroup<VirtualMachineExtensionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance view of the VM Agent running on the virtual machine. */
	export interface VirtualMachineAgentInstanceView {

		/** The virtual machine extension handler instance view. */
		extensionHandlers?: Array<VirtualMachineExtensionHandlerInstanceView>;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** The VM Agent full version. */
		vmAgentVersion?: string | null;
	}

	/** The instance view of the VM Agent running on the virtual machine. */
	export interface VirtualMachineAgentInstanceViewFormProperties {

		/** The VM Agent full version. */
		vmAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineAgentInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineAgentInstanceViewFormProperties>({
			vmAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance view of a virtual machine extension handler. */
	export interface VirtualMachineExtensionHandlerInstanceView {

		/** Instance view status. */
		status?: InstanceViewStatus;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** The instance view of a virtual machine extension handler. */
	export interface VirtualMachineExtensionHandlerInstanceViewFormProperties {

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineExtensionHandlerInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineExtensionHandlerInstanceViewFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Capture Virtual Machine parameters. */
	export interface VirtualMachineCaptureParameters {

		/**
		 * The destination container name.
		 * Required
		 */
		destinationContainerName: string;

		/**
		 * Specifies whether to overwrite the destination virtual hard disk, in case of conflict.
		 * Required
		 */
		overwriteVhds: boolean;

		/**
		 * The captured virtual hard disk's name prefix.
		 * Required
		 */
		vhdPrefix: string;
	}

	/** Capture Virtual Machine parameters. */
	export interface VirtualMachineCaptureParametersFormProperties {

		/**
		 * The destination container name.
		 * Required
		 */
		destinationContainerName: FormControl<string | null | undefined>,

		/**
		 * Specifies whether to overwrite the destination virtual hard disk, in case of conflict.
		 * Required
		 */
		overwriteVhds: FormControl<boolean | null | undefined>,

		/**
		 * The captured virtual hard disk's name prefix.
		 * Required
		 */
		vhdPrefix: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineCaptureParametersFormGroup() {
		return new FormGroup<VirtualMachineCaptureParametersFormProperties>({
			destinationContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			overwriteVhds: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			vhdPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Output of virtual machine capture operation. */
	export interface VirtualMachineCaptureResult extends SubResource {

		/** the schema of the captured virtual machine */
		'$schema'?: string | null;

		/** the version of the content */
		contentVersion?: string | null;

		/** parameters of the captured virtual machine */
		parameters?: string | null;

		/** a list of resource items of the captured virtual machine */
		resources?: Array<string>;
	}

	/** Output of virtual machine capture operation. */
	export interface VirtualMachineCaptureResultFormProperties extends SubResourceFormProperties {

		/** the schema of the captured virtual machine */
		'$schema': FormControl<string | null | undefined>,

		/** the version of the content */
		contentVersion: FormControl<string | null | undefined>,

		/** parameters of the captured virtual machine */
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineCaptureResultFormGroup() {
		return new FormGroup<VirtualMachineCaptureResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			'$schema': new FormControl<string | null | undefined>(undefined),
			contentVersion: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Extension Image. */
	export interface VirtualMachineExtensionImage extends Resource {

		/** Describes the properties of a Virtual Machine Extension Image. */
		properties?: VirtualMachineExtensionImageProperties;
	}

	/** Describes a Virtual Machine Extension Image. */
	export interface VirtualMachineExtensionImageFormProperties extends ResourceFormProperties {
	}
	export function CreateVirtualMachineExtensionImageFormGroup() {
		return new FormGroup<VirtualMachineExtensionImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Extension Image. */
	export interface VirtualMachineExtensionImageProperties {

		/**
		 * The type of role (IaaS or PaaS) this extension supports.
		 * Required
		 */
		computeRole: string;

		/**
		 * The schema defined by publisher, where extension consumers should provide settings in a matching schema.
		 * Required
		 */
		handlerSchema: string;

		/**
		 * The operating system this extension supports.
		 * Required
		 */
		operatingSystem: string;

		/** Whether the handler can support multiple extensions. */
		supportsMultipleExtensions?: boolean | null;

		/** Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. */
		vmScaleSetEnabled?: boolean | null;
	}

	/** Describes the properties of a Virtual Machine Extension Image. */
	export interface VirtualMachineExtensionImagePropertiesFormProperties {

		/**
		 * The type of role (IaaS or PaaS) this extension supports.
		 * Required
		 */
		computeRole: FormControl<string | null | undefined>,

		/**
		 * The schema defined by publisher, where extension consumers should provide settings in a matching schema.
		 * Required
		 */
		handlerSchema: FormControl<string | null | undefined>,

		/**
		 * The operating system this extension supports.
		 * Required
		 */
		operatingSystem: FormControl<string | null | undefined>,

		/** Whether the handler can support multiple extensions. */
		supportsMultipleExtensions: FormControl<boolean | null | undefined>,

		/** Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. */
		vmScaleSetEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineExtensionImagePropertiesFormGroup() {
		return new FormGroup<VirtualMachineExtensionImagePropertiesFormProperties>({
			computeRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			handlerSchema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operatingSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			supportsMultipleExtensions: new FormControl<boolean | null | undefined>(undefined),
			vmScaleSetEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The instance view of a virtual machine extension. */
	export interface VirtualMachineExtensionInstanceView {

		/** The virtual machine extension name. */
		name?: string | null;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** The resource status information. */
		substatuses?: Array<InstanceViewStatus>;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** The instance view of a virtual machine extension. */
	export interface VirtualMachineExtensionInstanceViewFormProperties {

		/** The virtual machine extension name. */
		name: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineExtensionInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineExtensionInstanceViewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Extension. */
	export interface VirtualMachineExtensionProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion?: boolean | null;

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag?: string | null;

		/** The instance view of a virtual machine extension. */
		instanceView?: VirtualMachineExtensionInstanceView;

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings?: string | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** The name of the extension handler publisher. */
		publisher?: string | null;

		/** Json formatted public settings for the extension. */
		settings?: string | null;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the properties of a Virtual Machine Extension. */
	export interface VirtualMachineExtensionPropertiesFormProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion: FormControl<boolean | null | undefined>,

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** The name of the extension handler publisher. */
		publisher: FormControl<string | null | undefined>,

		/** Json formatted public settings for the extension. */
		settings: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineExtensionPropertiesFormGroup() {
		return new FormGroup<VirtualMachineExtensionPropertiesFormProperties>({
			autoUpgradeMinorVersion: new FormControl<boolean | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			protectedSettings: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Extension. */
	export interface VirtualMachineExtensionUpdate extends UpdateResource {

		/** Describes the properties of a Virtual Machine Extension. */
		properties?: VirtualMachineExtensionUpdateProperties;
	}

	/** Describes a Virtual Machine Extension. */
	export interface VirtualMachineExtensionUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateVirtualMachineExtensionUpdateFormGroup() {
		return new FormGroup<VirtualMachineExtensionUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Extension. */
	export interface VirtualMachineExtensionUpdateProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion?: boolean | null;

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag?: string | null;

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings?: string | null;

		/** The name of the extension handler publisher. */
		publisher?: string | null;

		/** Json formatted public settings for the extension. */
		settings?: string | null;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the properties of a Virtual Machine Extension. */
	export interface VirtualMachineExtensionUpdatePropertiesFormProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion: FormControl<boolean | null | undefined>,

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings: FormControl<string | null | undefined>,

		/** The name of the extension handler publisher. */
		publisher: FormControl<string | null | undefined>,

		/** Json formatted public settings for the extension. */
		settings: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineExtensionUpdatePropertiesFormGroup() {
		return new FormGroup<VirtualMachineExtensionUpdatePropertiesFormProperties>({
			autoUpgradeMinorVersion: new FormControl<boolean | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			protectedSettings: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Extension operation response */
	export interface VirtualMachineExtensionsListResult {

		/** The list of extensions */
		value?: Array<VirtualMachineExtension>;
	}

	/** The List Extension operation response */
	export interface VirtualMachineExtensionsListResultFormProperties {
	}
	export function CreateVirtualMachineExtensionsListResultFormGroup() {
		return new FormGroup<VirtualMachineExtensionsListResultFormProperties>({
		});

	}


	/** The health status of the VM. */
	export interface VirtualMachineHealthStatus {

		/** Instance view status. */
		status?: InstanceViewStatus;
	}

	/** The health status of the VM. */
	export interface VirtualMachineHealthStatusFormProperties {
	}
	export function CreateVirtualMachineHealthStatusFormGroup() {
		return new FormGroup<VirtualMachineHealthStatusFormProperties>({
		});

	}


	/** Identity for the virtual machine. */
	export interface VirtualMachineIdentity {

		/** The principal id of virtual machine identity. This property will only be provided for a system assigned identity. */
		principalId?: string | null;

		/** The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity. */
		tenantId?: string | null;

		/** The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
		type?: VirtualMachineIdentityType | null;

		/** The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: VirtualMachineIdentityUserAssignedIdentities };
	}

	/** Identity for the virtual machine. */
	export interface VirtualMachineIdentityFormProperties {

		/** The principal id of virtual machine identity. This property will only be provided for a system assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
		type: FormControl<VirtualMachineIdentityType | null | undefined>,

		/** The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: VirtualMachineIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateVirtualMachineIdentityFormGroup() {
		return new FormGroup<VirtualMachineIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VirtualMachineIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: VirtualMachineIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineIdentityType { SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned', None = 'None' }

	export interface VirtualMachineIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface VirtualMachineIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<VirtualMachineIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Image. */
	export interface VirtualMachineImage extends VirtualMachineImageResource {

		/** Describes the properties of a Virtual Machine Image. */
		properties?: VirtualMachineImageProperties;
	}

	/** Describes a Virtual Machine Image. */
	export interface VirtualMachineImageFormProperties extends VirtualMachineImageResourceFormProperties {
	}
	export function CreateVirtualMachineImageFormGroup() {
		return new FormGroup<VirtualMachineImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Image. */
	export interface VirtualMachineImageProperties {

		/** Describes automatic OS upgrade properties on the image. */
		automaticOSUpgradeProperties?: AutomaticOSUpgradeProperties;
		dataDiskImages?: Array<DataDiskImage>;

		/** Specifies the HyperVGeneration Type */
		hyperVGeneration?: HyperVGenerationType | null;

		/** Contains the os disk image information. */
		osDiskImage?: OSDiskImage;

		/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
		plan?: PurchasePlan;
	}

	/** Describes the properties of a Virtual Machine Image. */
	export interface VirtualMachineImagePropertiesFormProperties {

		/** Specifies the HyperVGeneration Type */
		hyperVGeneration: FormControl<HyperVGenerationType | null | undefined>,
	}
	export function CreateVirtualMachineImagePropertiesFormGroup() {
		return new FormGroup<VirtualMachineImagePropertiesFormProperties>({
			hyperVGeneration: new FormControl<HyperVGenerationType | null | undefined>(undefined),
		});

	}


	/** Virtual machine image resource information. */
	export interface VirtualMachineImageResource extends SubResource {

		/**
		 * The supported Azure location of the resource.
		 * Required
		 */
		location: string;

		/**
		 * The name of the resource.
		 * Required
		 */
		name: string;

		/** Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md). */
		tags?: {[id: string]: string };
	}

	/** Virtual machine image resource information. */
	export interface VirtualMachineImageResourceFormProperties extends SubResourceFormProperties {

		/**
		 * The supported Azure location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The name of the resource.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md). */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateVirtualMachineImageResourceFormGroup() {
		return new FormGroup<VirtualMachineImageResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The instance view of a virtual machine. */
	export interface VirtualMachineInstanceView {

		/** The instance view of a virtual machine boot diagnostics. */
		bootDiagnostics?: BootDiagnosticsInstanceView;

		/** The computer name assigned to the virtual machine. */
		computerName?: string | null;

		/** The virtual machine disk information. */
		disks?: Array<DiskInstanceView>;

		/** The extensions information. */
		extensions?: Array<VirtualMachineExtensionInstanceView>;

		/** Specifies the HyperVGeneration Type associated with a resource */
		hyperVGeneration?: HyperVGenerationType | null;

		/** Maintenance Operation Status. */
		maintenanceRedeployStatus?: MaintenanceRedeployStatus;

		/** The Operating System running on the virtual machine. */
		osName?: string | null;

		/** The version of Operating System running on the virtual machine. */
		osVersion?: string | null;

		/**
		 * Specifies the fault domain of the virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomain?: number | null;

		/**
		 * Specifies the update domain of the virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomain?: number | null;

		/** The Remote desktop certificate thumbprint. */
		rdpThumbPrint?: string | null;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** The instance view of the VM Agent running on the virtual machine. */
		vmAgent?: VirtualMachineAgentInstanceView;
	}

	/** The instance view of a virtual machine. */
	export interface VirtualMachineInstanceViewFormProperties {

		/** The computer name assigned to the virtual machine. */
		computerName: FormControl<string | null | undefined>,

		/** Specifies the HyperVGeneration Type associated with a resource */
		hyperVGeneration: FormControl<HyperVGenerationType | null | undefined>,

		/** The Operating System running on the virtual machine. */
		osName: FormControl<string | null | undefined>,

		/** The version of Operating System running on the virtual machine. */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * Specifies the fault domain of the virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomain: FormControl<number | null | undefined>,

		/**
		 * Specifies the update domain of the virtual machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomain: FormControl<number | null | undefined>,

		/** The Remote desktop certificate thumbprint. */
		rdpThumbPrint: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineInstanceViewFormProperties>({
			computerName: new FormControl<string | null | undefined>(undefined),
			hyperVGeneration: new FormControl<HyperVGenerationType | null | undefined>(undefined),
			osName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			platformFaultDomain: new FormControl<number | null | undefined>(undefined),
			platformUpdateDomain: new FormControl<number | null | undefined>(undefined),
			rdpThumbPrint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Virtual Machine operation response. */
	export interface VirtualMachineListResult {

		/** The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines. */
		nextLink?: string | null;

		/**
		 * The list of virtual machines.
		 * Required
		 */
		value: Array<VirtualMachine>;
	}

	/** The List Virtual Machine operation response. */
	export interface VirtualMachineListResultFormProperties {

		/** The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineListResultFormGroup() {
		return new FormGroup<VirtualMachineListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine. */
	export interface VirtualMachineProperties {

		/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
		additionalCapabilities?: AdditionalCapabilities;
		availabilitySet?: SubResource;

		/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
		billingProfile?: BillingProfile;

		/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
		diagnosticsProfile?: DiagnosticsProfile;

		/** Specifies the eviction policy for the Azure Spot VM/VMSS */
		evictionPolicy?: VirtualMachinePropertiesEvictionPolicy | null;

		/** Specifies the hardware settings for the virtual machine. */
		hardwareProfile?: HardwareProfile;
		host?: SubResource;

		/** The instance view of a virtual machine. */
		instanceView?: VirtualMachineInstanceView;

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType?: string | null;

		/** Specifies the network interfaces of the virtual machine. */
		networkProfile?: NetworkProfile;

		/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
		osProfile?: OSProfile;

		/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
		priority?: VirtualMachinePropertiesPriority | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;
		proximityPlacementGroup?: SubResource;

		/** Specifies the storage settings for the virtual machine disks. */
		storageProfile?: StorageProfile;
		virtualMachineScaleSet?: SubResource;

		/** Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. */
		vmId?: string | null;
	}

	/** Describes the properties of a Virtual Machine. */
	export interface VirtualMachinePropertiesFormProperties {

		/** Specifies the eviction policy for the Azure Spot VM/VMSS */
		evictionPolicy: FormControl<VirtualMachinePropertiesEvictionPolicy | null | undefined>,

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType: FormControl<string | null | undefined>,

		/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
		priority: FormControl<VirtualMachinePropertiesPriority | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachinePropertiesFormGroup() {
		return new FormGroup<VirtualMachinePropertiesFormProperties>({
			evictionPolicy: new FormControl<VirtualMachinePropertiesEvictionPolicy | null | undefined>(undefined),
			licenseType: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<VirtualMachinePropertiesPriority | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualMachinePropertiesEvictionPolicy { Deallocate = 'Deallocate', Delete = 'Delete' }

	export enum VirtualMachinePropertiesPriority { Regular = 'Regular', Low = 'Low', Spot = 'Spot' }


	/** Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged */
	export interface VirtualMachineReimageParameters {

		/** Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. */
		tempDisk?: boolean | null;
	}

	/** Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged */
	export interface VirtualMachineReimageParametersFormProperties {

		/** Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. */
		tempDisk: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineReimageParametersFormGroup() {
		return new FormGroup<VirtualMachineReimageParametersFormProperties>({
			tempDisk: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSet extends Resource {

		/** Identity for the virtual machine scale set. */
		identity?: VirtualMachineScaleSetIdentity;

		/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
		plan?: Plan;

		/** Describes the properties of a Virtual Machine Scale Set. */
		properties?: VirtualMachineScaleSetProperties;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;

		/** The virtual machine scale set zones. */
		zones?: Array<string>;
	}

	/** Describes a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetFormProperties extends ResourceFormProperties {
	}
	export function CreateVirtualMachineScaleSetFormGroup() {
		return new FormGroup<VirtualMachineScaleSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set data disk. */
	export interface VirtualMachineScaleSetDataDisk {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: CreateOption;

		/**
		 * Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskIOPSReadWrite?: string | null;

		/**
		 * Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskMBpsReadWrite?: string | null;

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: number;

		/** Describes the parameters of a ScaleSet managed disk. */
		managedDisk?: VirtualMachineScaleSetManagedDiskParameters;

		/** The disk name. */
		name?: string | null;

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled?: boolean | null;
	}

	/** Describes a virtual machine scale set data disk. */
	export interface VirtualMachineScaleSetDataDiskFormProperties {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: FormControl<CreateOption | null | undefined>,

		/**
		 * Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskIOPSReadWrite: FormControl<string | null | undefined>,

		/**
		 * Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskMBpsReadWrite: FormControl<string | null | undefined>,

		/**
		 * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: FormControl<number | null | undefined>,

		/** The disk name. */
		name: FormControl<string | null | undefined>,

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetDataDiskFormGroup() {
		return new FormGroup<VirtualMachineScaleSetDataDiskFormProperties>({
			caching: new FormControl<Caching | null | undefined>(undefined),
			createOption: new FormControl<CreateOption | null | undefined>(undefined, [Validators.required]),
			diskIOPSReadWrite: new FormControl<string | null | undefined>(undefined),
			diskMBpsReadWrite: new FormControl<string | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtension extends SubResourceReadOnly {

		/** The name of the extension. */
		name?: string | null;

		/** Describes the properties of a Virtual Machine Scale Set Extension. */
		properties?: VirtualMachineScaleSetExtensionProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Describes a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtensionFormProperties extends SubResourceReadOnlyFormProperties {

		/** The name of the extension. */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetExtensionFormGroup() {
		return new FormGroup<VirtualMachineScaleSetExtensionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List VM scale set extension operation response. */
	export interface VirtualMachineScaleSetExtensionListResult {

		/** The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions. */
		nextLink?: string | null;

		/**
		 * The list of VM scale set extensions.
		 * Required
		 */
		value: Array<VirtualMachineScaleSetExtension>;
	}

	/** The List VM scale set extension operation response. */
	export interface VirtualMachineScaleSetExtensionListResultFormProperties {

		/** The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetExtensionListResultFormGroup() {
		return new FormGroup<VirtualMachineScaleSetExtensionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set extension profile. */
	export interface VirtualMachineScaleSetExtensionProfile {

		/** The virtual machine scale set child extension resources. */
		extensions?: Array<VirtualMachineScaleSetExtension>;
	}

	/** Describes a virtual machine scale set extension profile. */
	export interface VirtualMachineScaleSetExtensionProfileFormProperties {
	}
	export function CreateVirtualMachineScaleSetExtensionProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetExtensionProfileFormProperties>({
		});

	}


	/** Describes the properties of a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtensionProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion?: boolean | null;

		/** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
		forceUpdateTag?: string | null;

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings?: string | null;

		/** Collection of extension names after which this extension needs to be provisioned. */
		provisionAfterExtensions?: Array<string>;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** The name of the extension handler publisher. */
		publisher?: string | null;

		/** Json formatted public settings for the extension. */
		settings?: string | null;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the properties of a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtensionPropertiesFormProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion: FormControl<boolean | null | undefined>,

		/** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** The name of the extension handler publisher. */
		publisher: FormControl<string | null | undefined>,

		/** Json formatted public settings for the extension. */
		settings: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetExtensionPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetExtensionPropertiesFormProperties>({
			autoUpgradeMinorVersion: new FormControl<boolean | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			protectedSettings: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtensionUpdate extends SubResourceReadOnly {

		/** The name of the extension. */
		name?: string | null;

		/** Describes the properties of a Virtual Machine Scale Set Extension. */
		properties?: VirtualMachineScaleSetExtensionProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Describes a Virtual Machine Scale Set Extension. */
	export interface VirtualMachineScaleSetExtensionUpdateFormProperties extends SubResourceReadOnlyFormProperties {

		/** The name of the extension. */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetExtensionUpdateFormGroup() {
		return new FormGroup<VirtualMachineScaleSetExtensionUpdateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetIPConfiguration extends SubResource {

		/**
		 * The IP configuration name.
		 * Required
		 */
		name: string;

		/** Describes a virtual machine scale set network profile's IP configuration properties. */
		properties?: VirtualMachineScaleSetIPConfigurationProperties;
	}

	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetIPConfigurationFormProperties extends SubResourceFormProperties {

		/**
		 * The IP configuration name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetIPConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetIPConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a virtual machine scale set network profile's IP configuration properties. */
	export interface VirtualMachineScaleSetIPConfigurationProperties {

		/** Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. */
		applicationGatewayBackendAddressPools?: Array<SubResource>;

		/** Specifies an array of references to application security group. */
		applicationSecurityGroups?: Array<SubResource>;

		/** Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer. */
		loadBalancerBackendAddressPools?: Array<SubResource>;

		/** Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer */
		loadBalancerInboundNatPools?: Array<SubResource>;

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary?: boolean | null;

		/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
		privateIPAddressVersion?: VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null;

		/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
		publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;

		/** The API entity reference. */
		subnet?: ApiEntityReference;
	}

	/** Describes a virtual machine scale set network profile's IP configuration properties. */
	export interface VirtualMachineScaleSetIPConfigurationPropertiesFormProperties {

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary: FormControl<boolean | null | undefined>,

		/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
		privateIPAddressVersion: FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetIPConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetIPConfigurationPropertiesFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
			privateIPAddressVersion: new FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion { IPv4 = 'IPv4', IPv6 = 'IPv6' }


	/** Identity for the virtual machine scale set. */
	export interface VirtualMachineScaleSetIdentity {

		/** The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity. */
		principalId?: string | null;

		/** The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity. */
		tenantId?: string | null;

		/** The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. */
		type?: VirtualMachineIdentityType | null;

		/** The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: VirtualMachineScaleSetIdentityUserAssignedIdentities };
	}

	/** Identity for the virtual machine scale set. */
	export interface VirtualMachineScaleSetIdentityFormProperties {

		/** The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. */
		type: FormControl<VirtualMachineIdentityType | null | undefined>,

		/** The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: VirtualMachineScaleSetIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetIdentityFormGroup() {
		return new FormGroup<VirtualMachineScaleSetIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VirtualMachineIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: VirtualMachineScaleSetIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface VirtualMachineScaleSetIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance view of a virtual machine scale set. */
	export interface VirtualMachineScaleSetInstanceView {

		/** The extensions information. */
		extensions?: Array<VirtualMachineScaleSetVMExtensionsSummary>;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** Instance view statuses summary for virtual machines of a virtual machine scale set. */
		virtualMachine?: VirtualMachineScaleSetInstanceViewStatusesSummary;
	}

	/** The instance view of a virtual machine scale set. */
	export interface VirtualMachineScaleSetInstanceViewFormProperties {
	}
	export function CreateVirtualMachineScaleSetInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineScaleSetInstanceViewFormProperties>({
		});

	}


	/** Extensions summary for virtual machines of a virtual machine scale set. */
	export interface VirtualMachineScaleSetVMExtensionsSummary {

		/** The extension name. */
		name?: string | null;

		/** The extensions information. */
		statusesSummary?: Array<VirtualMachineStatusCodeCount>;
	}

	/** Extensions summary for virtual machines of a virtual machine scale set. */
	export interface VirtualMachineScaleSetVMExtensionsSummaryFormProperties {

		/** The extension name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMExtensionsSummaryFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMExtensionsSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status code and count of the virtual machine scale set instance view status summary. */
	export interface VirtualMachineStatusCodeCount {

		/** The instance view status code. */
		code?: string | null;

		/**
		 * The number of instances having a particular status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;
	}

	/** The status code and count of the virtual machine scale set instance view status summary. */
	export interface VirtualMachineStatusCodeCountFormProperties {

		/** The instance view status code. */
		code: FormControl<string | null | undefined>,

		/**
		 * The number of instances having a particular status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateVirtualMachineStatusCodeCountFormGroup() {
		return new FormGroup<VirtualMachineStatusCodeCountFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Instance view statuses summary for virtual machines of a virtual machine scale set. */
	export interface VirtualMachineScaleSetInstanceViewStatusesSummary {

		/** The extensions information. */
		statusesSummary?: Array<VirtualMachineStatusCodeCount>;
	}

	/** Instance view statuses summary for virtual machines of a virtual machine scale set. */
	export interface VirtualMachineScaleSetInstanceViewStatusesSummaryFormProperties {
	}
	export function CreateVirtualMachineScaleSetInstanceViewStatusesSummaryFormGroup() {
		return new FormGroup<VirtualMachineScaleSetInstanceViewStatusesSummaryFormProperties>({
		});

	}


	/** Contains the IP tag associated with the public IP address. */
	export interface VirtualMachineScaleSetIpTag {

		/** IP tag type. Example: FirstPartyUsage. */
		ipTagType?: string | null;

		/** IP tag associated with the public IP. Example: SQL, Storage etc. */
		tag?: string | null;
	}

	/** Contains the IP tag associated with the public IP address. */
	export interface VirtualMachineScaleSetIpTagFormProperties {

		/** IP tag type. Example: FirstPartyUsage. */
		ipTagType: FormControl<string | null | undefined>,

		/** IP tag associated with the public IP. Example: SQL, Storage etc. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetIpTagFormGroup() {
		return new FormGroup<VirtualMachineScaleSetIpTagFormProperties>({
			ipTagType: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Virtual Machine Scale Set OS Upgrade History operation response. */
	export interface VirtualMachineScaleSetListOSUpgradeHistory {

		/** The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades. */
		nextLink?: string | null;

		/**
		 * The list of OS upgrades performed on the virtual machine scale set.
		 * Required
		 */
		value: Array<UpgradeOperationHistoricalStatusInfo>;
	}

	/** List of Virtual Machine Scale Set OS Upgrade History operation response. */
	export interface VirtualMachineScaleSetListOSUpgradeHistoryFormProperties {

		/** The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetListOSUpgradeHistoryFormGroup() {
		return new FormGroup<VirtualMachineScaleSetListOSUpgradeHistoryFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Virtual Machine operation response. */
	export interface VirtualMachineScaleSetListResult {

		/** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS. */
		nextLink?: string | null;

		/**
		 * The list of virtual machine scale sets.
		 * Required
		 */
		value: Array<VirtualMachineScaleSet>;
	}

	/** The List Virtual Machine operation response. */
	export interface VirtualMachineScaleSetListResultFormProperties {

		/** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetListResultFormGroup() {
		return new FormGroup<VirtualMachineScaleSetListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Virtual Machine Scale Set List Skus operation response. */
	export interface VirtualMachineScaleSetListSkusResult {

		/** The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus. */
		nextLink?: string | null;

		/**
		 * The list of skus available for the virtual machine scale set.
		 * Required
		 */
		value: Array<VirtualMachineScaleSetSku>;
	}

	/** The Virtual Machine Scale Set List Skus operation response. */
	export interface VirtualMachineScaleSetListSkusResultFormProperties {

		/** The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetListSkusResultFormGroup() {
		return new FormGroup<VirtualMachineScaleSetListSkusResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an available virtual machine scale set sku. */
	export interface VirtualMachineScaleSetSku {

		/** Describes scaling information of a sku. */
		capacity?: VirtualMachineScaleSetSkuCapacity;

		/** The type of resource the sku applies to. */
		resourceType?: string | null;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;
	}

	/** Describes an available virtual machine scale set sku. */
	export interface VirtualMachineScaleSetSkuFormProperties {

		/** The type of resource the sku applies to. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetSkuFormGroup() {
		return new FormGroup<VirtualMachineScaleSetSkuFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Virtual Machine operation response. */
	export interface VirtualMachineScaleSetListWithLinkResult {

		/** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets. */
		nextLink?: string | null;

		/**
		 * The list of virtual machine scale sets.
		 * Required
		 */
		value: Array<VirtualMachineScaleSet>;
	}

	/** The List Virtual Machine operation response. */
	export interface VirtualMachineScaleSetListWithLinkResultFormProperties {

		/** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetListWithLinkResultFormGroup() {
		return new FormGroup<VirtualMachineScaleSetListWithLinkResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the parameters of a ScaleSet managed disk. */
	export interface VirtualMachineScaleSetManagedDiskParameters {

		/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
		diskEncryptionSet?: DiskEncryptionSetParameters;

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType?: ImageDiskStorageAccountType | null;
	}

	/** Describes the parameters of a ScaleSet managed disk. */
	export interface VirtualMachineScaleSetManagedDiskParametersFormProperties {

		/** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types */
		storageAccountType: FormControl<ImageDiskStorageAccountType | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetManagedDiskParametersFormGroup() {
		return new FormGroup<VirtualMachineScaleSetManagedDiskParametersFormProperties>({
			storageAccountType: new FormControl<ImageDiskStorageAccountType | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile's network configurations. */
	export interface VirtualMachineScaleSetNetworkConfiguration extends SubResource {

		/**
		 * The network configuration name.
		 * Required
		 */
		name: string;

		/** Describes a virtual machine scale set network profile's IP configuration. */
		properties?: VirtualMachineScaleSetNetworkConfigurationProperties;
	}

	/** Describes a virtual machine scale set network profile's network configurations. */
	export interface VirtualMachineScaleSetNetworkConfigurationFormProperties extends SubResourceFormProperties {

		/**
		 * The network configuration name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetNetworkConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetNetworkConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a virtual machines scale sets network configuration's DNS settings. */
	export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {

		/** List of DNS servers IP addresses */
		dnsServers?: Array<string>;
	}

	/** Describes a virtual machines scale sets network configuration's DNS settings. */
	export interface VirtualMachineScaleSetNetworkConfigurationDnsSettingsFormProperties {
	}
	export function CreateVirtualMachineScaleSetNetworkConfigurationDnsSettingsFormGroup() {
		return new FormGroup<VirtualMachineScaleSetNetworkConfigurationDnsSettingsFormProperties>({
		});

	}


	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetNetworkConfigurationProperties {

		/** Describes a virtual machines scale sets network configuration's DNS settings. */
		dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;

		/** Specifies whether the network interface is accelerated networking-enabled. */
		enableAcceleratedNetworking?: boolean | null;

		/** Whether IP forwarding enabled on this NIC. */
		enableIPForwarding?: boolean | null;

		/**
		 * Specifies the IP configurations of the network interface.
		 * Required
		 */
		ipConfigurations: Array<VirtualMachineScaleSetIPConfiguration>;
		networkSecurityGroup?: SubResource;

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary?: boolean | null;
	}

	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetNetworkConfigurationPropertiesFormProperties {

		/** Specifies whether the network interface is accelerated networking-enabled. */
		enableAcceleratedNetworking: FormControl<boolean | null | undefined>,

		/** Whether IP forwarding enabled on this NIC. */
		enableIPForwarding: FormControl<boolean | null | undefined>,

		/** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
		primary: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetNetworkConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetNetworkConfigurationPropertiesFormProperties>({
			enableAcceleratedNetworking: new FormControl<boolean | null | undefined>(undefined),
			enableIPForwarding: new FormControl<boolean | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile. */
	export interface VirtualMachineScaleSetNetworkProfile {

		/** The API entity reference. */
		healthProbe?: ApiEntityReference;

		/** The list of network configurations. */
		networkInterfaceConfigurations?: Array<VirtualMachineScaleSetNetworkConfiguration>;
	}

	/** Describes a virtual machine scale set network profile. */
	export interface VirtualMachineScaleSetNetworkProfileFormProperties {
	}
	export function CreateVirtualMachineScaleSetNetworkProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetNetworkProfileFormProperties>({
		});

	}


	/** Describes a virtual machine scale set operating system disk. */
	export interface VirtualMachineScaleSetOSDisk {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: CreateOption;

		/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk. */
		diffDiskSettings?: DiffDiskSettings;

		/**
		 * Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/** Describes the uri of a disk. */
		image?: VirtualHardDisk;

		/** Describes the parameters of a ScaleSet managed disk. */
		managedDisk?: VirtualMachineScaleSetManagedDiskParameters;

		/** The disk name. */
		name?: string | null;

		/** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
		osType?: ImageOSDiskOsType | null;

		/** Specifies the container urls that are used to store operating system disks for the scale set. */
		vhdContainers?: Array<string>;

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled?: boolean | null;
	}

	/** Describes a virtual machine scale set operating system disk. */
	export interface VirtualMachineScaleSetOSDiskFormProperties {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
		 * Required
		 */
		createOption: FormControl<CreateOption | null | undefined>,

		/**
		 * Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/** The disk name. */
		name: FormControl<string | null | undefined>,

		/** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
		osType: FormControl<ImageOSDiskOsType | null | undefined>,

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetOSDiskFormGroup() {
		return new FormGroup<VirtualMachineScaleSetOSDiskFormProperties>({
			caching: new FormControl<Caching | null | undefined>(undefined),
			createOption: new FormControl<CreateOption | null | undefined>(undefined, [Validators.required]),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<ImageOSDiskOsType | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set OS profile. */
	export interface VirtualMachineScaleSetOSProfile {

		/** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
		adminPassword?: string | null;

		/** Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		adminUsername?: string | null;

		/** Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
		computerNamePrefix?: string | null;

		/** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		customData?: string | null;

		/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
		linuxConfiguration?: LinuxConfiguration;

		/** Specifies set of certificates that should be installed onto the virtual machines in the scale set. */
		secrets?: Array<VaultSecretGroup>;

		/** Specifies Windows operating system settings on the virtual machine. */
		windowsConfiguration?: WindowsConfiguration;
	}

	/** Describes a virtual machine scale set OS profile. */
	export interface VirtualMachineScaleSetOSProfileFormProperties {

		/** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
		adminPassword: FormControl<string | null | undefined>,

		/** Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		adminUsername: FormControl<string | null | undefined>,

		/** Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
		computerNamePrefix: FormControl<string | null | undefined>,

		/** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
		customData: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetOSProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetOSProfileFormProperties>({
			adminPassword: new FormControl<string | null | undefined>(undefined),
			adminUsername: new FormControl<string | null | undefined>(undefined),
			computerNamePrefix: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetProperties {

		/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
		additionalCapabilities?: AdditionalCapabilities;

		/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
		automaticRepairsPolicy?: AutomaticRepairsPolicy;

		/** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
		doNotRunExtensionsOnOverprovisionedVMs?: boolean | null;

		/** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
		overprovision?: boolean | null;

		/**
		 * Fault Domain count for each placement group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomainCount?: number | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;
		proximityPlacementGroup?: SubResource;

		/** Describes a scale-in policy for a virtual machine scale set. */
		scaleInPolicy?: ScaleInPolicy;

		/** When true this limits the scale set to a single placement group, of max size 100 virtual machines. */
		singlePlacementGroup?: boolean | null;

		/** Specifies the ID which uniquely identifies a Virtual Machine Scale Set. */
		uniqueId?: string | null;

		/** Describes an upgrade policy - automatic, manual, or rolling. */
		upgradePolicy?: UpgradePolicy;

		/** Describes a virtual machine scale set virtual machine profile. */
		virtualMachineProfile?: VirtualMachineScaleSetVMProfile;

		/** Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. */
		zoneBalance?: boolean | null;
	}

	/** Describes the properties of a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetPropertiesFormProperties {

		/** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
		doNotRunExtensionsOnOverprovisionedVMs: FormControl<boolean | null | undefined>,

		/** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
		overprovision: FormControl<boolean | null | undefined>,

		/**
		 * Fault Domain count for each placement group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomainCount: FormControl<number | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** When true this limits the scale set to a single placement group, of max size 100 virtual machines. */
		singlePlacementGroup: FormControl<boolean | null | undefined>,

		/** Specifies the ID which uniquely identifies a Virtual Machine Scale Set. */
		uniqueId: FormControl<string | null | undefined>,

		/** Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. */
		zoneBalance: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetPropertiesFormProperties>({
			doNotRunExtensionsOnOverprovisionedVMs: new FormControl<boolean | null | undefined>(undefined),
			overprovision: new FormControl<boolean | null | undefined>(undefined),
			platformFaultDomainCount: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			singlePlacementGroup: new FormControl<boolean | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			zoneBalance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetPublicIPAddressConfiguration {

		/**
		 * The publicIP address configuration name.
		 * Required
		 */
		name: string;

		/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
		properties?: VirtualMachineScaleSetPublicIPAddressConfigurationProperties;
	}

	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetPublicIPAddressConfigurationFormProperties {

		/**
		 * The publicIP address configuration name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetPublicIPAddressConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetPublicIPAddressConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a virtual machines scale sets network configuration's DNS settings. */
	export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {

		/**
		 * The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
		 * Required
		 */
		domainNameLabel: string;
	}

	/** Describes a virtual machines scale sets network configuration's DNS settings. */
	export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsFormProperties {

		/**
		 * The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
		 * Required
		 */
		domainNameLabel: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsFormGroup() {
		return new FormGroup<VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsFormProperties>({
			domainNameLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {

		/** Describes a virtual machines scale sets network configuration's DNS settings. */
		dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;

		/**
		 * The idle timeout of the public IP address.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleTimeoutInMinutes?: number | null;

		/** The list of IP tags associated with the public IP address. */
		ipTags?: Array<VirtualMachineScaleSetIpTag>;

		/** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
		publicIPAddressVersion?: VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null;
		publicIPPrefix?: SubResource;
	}

	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesFormProperties {

		/**
		 * The idle timeout of the public IP address.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
		publicIPAddressVersion: FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetPublicIPAddressConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesFormProperties>({
			idleTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			publicIPAddressVersion: new FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
	export interface VirtualMachineScaleSetReimageParameters extends VirtualMachineScaleSetVMReimageParameters {

		/** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
		instanceIds?: Array<string>;
	}

	/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
	export interface VirtualMachineScaleSetReimageParametersFormProperties extends VirtualMachineScaleSetVMReimageParametersFormProperties {
	}
	export function CreateVirtualMachineScaleSetReimageParametersFormGroup() {
		return new FormGroup<VirtualMachineScaleSetReimageParametersFormProperties>({
		});

	}


	/** Describes scaling information of a sku. */
	export interface VirtualMachineScaleSetSkuCapacity {

		/**
		 * The default capacity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		defaultCapacity?: string | null;

		/**
		 * The maximum capacity that can be set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maximum?: string | null;

		/**
		 * The minimum capacity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minimum?: string | null;

		/** The scale type applicable to the sku. */
		scaleType?: VirtualMachineScaleSetSkuCapacityScaleType | null;
	}

	/** Describes scaling information of a sku. */
	export interface VirtualMachineScaleSetSkuCapacityFormProperties {

		/**
		 * The default capacity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		defaultCapacity: FormControl<string | null | undefined>,

		/**
		 * The maximum capacity that can be set.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maximum: FormControl<string | null | undefined>,

		/**
		 * The minimum capacity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minimum: FormControl<string | null | undefined>,

		/** The scale type applicable to the sku. */
		scaleType: FormControl<VirtualMachineScaleSetSkuCapacityScaleType | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetSkuCapacityFormGroup() {
		return new FormGroup<VirtualMachineScaleSetSkuCapacityFormProperties>({
			defaultCapacity: new FormControl<string | null | undefined>(undefined),
			maximum: new FormControl<string | null | undefined>(undefined),
			minimum: new FormControl<string | null | undefined>(undefined),
			scaleType: new FormControl<VirtualMachineScaleSetSkuCapacityScaleType | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineScaleSetSkuCapacityScaleType { Automatic = 'Automatic', None = 'None' }


	/** Describes a virtual machine scale set storage profile. */
	export interface VirtualMachineScaleSetStorageProfile {

		/** Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
		dataDisks?: Array<VirtualMachineScaleSetDataDisk>;

		/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
		imageReference?: ImageReference;

		/** Describes a virtual machine scale set operating system disk. */
		osDisk?: VirtualMachineScaleSetOSDisk;
	}

	/** Describes a virtual machine scale set storage profile. */
	export interface VirtualMachineScaleSetStorageProfileFormProperties {
	}
	export function CreateVirtualMachineScaleSetStorageProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetStorageProfileFormProperties>({
		});

	}


	/** Describes a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetUpdate extends UpdateResource {

		/** Identity for the virtual machine scale set. */
		identity?: VirtualMachineScaleSetIdentity;

		/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
		plan?: Plan;

		/** Describes the properties of a Virtual Machine Scale Set. */
		properties?: VirtualMachineScaleSetUpdateProperties;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;
	}

	/** Describes a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateVirtualMachineScaleSetUpdateFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetUpdateIPConfiguration extends SubResource {

		/** The IP configuration name. */
		name?: string | null;

		/** Describes a virtual machine scale set network profile's IP configuration properties. */
		properties?: VirtualMachineScaleSetUpdateIPConfigurationProperties;
	}

	/** Describes a virtual machine scale set network profile's IP configuration. */
	export interface VirtualMachineScaleSetUpdateIPConfigurationFormProperties extends SubResourceFormProperties {

		/** The IP configuration name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateIPConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateIPConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile's IP configuration properties. */
	export interface VirtualMachineScaleSetUpdateIPConfigurationProperties {

		/** The application gateway backend address pools. */
		applicationGatewayBackendAddressPools?: Array<SubResource>;

		/** Specifies an array of references to application security group. */
		applicationSecurityGroups?: Array<SubResource>;

		/** The load balancer backend address pools. */
		loadBalancerBackendAddressPools?: Array<SubResource>;

		/** The load balancer inbound nat pools. */
		loadBalancerInboundNatPools?: Array<SubResource>;

		/** Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. */
		primary?: boolean | null;

		/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
		privateIPAddressVersion?: VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null;

		/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
		publicIPAddressConfiguration?: VirtualMachineScaleSetUpdatePublicIPAddressConfiguration;

		/** The API entity reference. */
		subnet?: ApiEntityReference;
	}

	/** Describes a virtual machine scale set network profile's IP configuration properties. */
	export interface VirtualMachineScaleSetUpdateIPConfigurationPropertiesFormProperties {

		/** Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. */
		primary: FormControl<boolean | null | undefined>,

		/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
		privateIPAddressVersion: FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateIPConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateIPConfigurationPropertiesFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
			privateIPAddressVersion: new FormControl<VirtualMachineScaleSetIPConfigurationPropertiesPrivateIPAddressVersion | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile's network configurations. */
	export interface VirtualMachineScaleSetUpdateNetworkConfiguration extends SubResource {

		/** The network configuration name. */
		name?: string | null;

		/** Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration. */
		properties?: VirtualMachineScaleSetUpdateNetworkConfigurationProperties;
	}

	/** Describes a virtual machine scale set network profile's network configurations. */
	export interface VirtualMachineScaleSetUpdateNetworkConfigurationFormProperties extends SubResourceFormProperties {

		/** The network configuration name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateNetworkConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateNetworkConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration. */
	export interface VirtualMachineScaleSetUpdateNetworkConfigurationProperties {

		/** Describes a virtual machines scale sets network configuration's DNS settings. */
		dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;

		/** Specifies whether the network interface is accelerated networking-enabled. */
		enableAcceleratedNetworking?: boolean | null;

		/** Whether IP forwarding enabled on this NIC. */
		enableIPForwarding?: boolean | null;

		/** The virtual machine scale set IP Configuration. */
		ipConfigurations?: Array<VirtualMachineScaleSetUpdateIPConfiguration>;
		networkSecurityGroup?: SubResource;

		/** Whether this is a primary NIC on a virtual machine. */
		primary?: boolean | null;
	}

	/** Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration. */
	export interface VirtualMachineScaleSetUpdateNetworkConfigurationPropertiesFormProperties {

		/** Specifies whether the network interface is accelerated networking-enabled. */
		enableAcceleratedNetworking: FormControl<boolean | null | undefined>,

		/** Whether IP forwarding enabled on this NIC. */
		enableIPForwarding: FormControl<boolean | null | undefined>,

		/** Whether this is a primary NIC on a virtual machine. */
		primary: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateNetworkConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateNetworkConfigurationPropertiesFormProperties>({
			enableAcceleratedNetworking: new FormControl<boolean | null | undefined>(undefined),
			enableIPForwarding: new FormControl<boolean | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set network profile. */
	export interface VirtualMachineScaleSetUpdateNetworkProfile {

		/** The API entity reference. */
		healthProbe?: ApiEntityReference;

		/** The list of network configurations. */
		networkInterfaceConfigurations?: Array<VirtualMachineScaleSetUpdateNetworkConfiguration>;
	}

	/** Describes a virtual machine scale set network profile. */
	export interface VirtualMachineScaleSetUpdateNetworkProfileFormProperties {
	}
	export function CreateVirtualMachineScaleSetUpdateNetworkProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateNetworkProfileFormProperties>({
		});

	}


	/** Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk. */
	export interface VirtualMachineScaleSetUpdateOSDisk {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching?: Caching | null;

		/**
		 * Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/** Describes the uri of a disk. */
		image?: VirtualHardDisk;

		/** Describes the parameters of a ScaleSet managed disk. */
		managedDisk?: VirtualMachineScaleSetManagedDiskParameters;

		/** The list of virtual hard disk container uris. */
		vhdContainers?: Array<string>;

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled?: boolean | null;
	}

	/** Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk. */
	export interface VirtualMachineScaleSetUpdateOSDiskFormProperties {

		/** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
		caching: FormControl<Caching | null | undefined>,

		/**
		 * Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
		writeAcceleratorEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateOSDiskFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateOSDiskFormProperties>({
			caching: new FormControl<Caching | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set OS profile. */
	export interface VirtualMachineScaleSetUpdateOSProfile {

		/** A base-64 encoded string of custom data. */
		customData?: string | null;

		/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
		linuxConfiguration?: LinuxConfiguration;

		/** The List of certificates for addition to the VM. */
		secrets?: Array<VaultSecretGroup>;

		/** Specifies Windows operating system settings on the virtual machine. */
		windowsConfiguration?: WindowsConfiguration;
	}

	/** Describes a virtual machine scale set OS profile. */
	export interface VirtualMachineScaleSetUpdateOSProfileFormProperties {

		/** A base-64 encoded string of custom data. */
		customData: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateOSProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateOSProfileFormProperties>({
			customData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetUpdateProperties {

		/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
		additionalCapabilities?: AdditionalCapabilities;

		/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
		automaticRepairsPolicy?: AutomaticRepairsPolicy;

		/** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
		doNotRunExtensionsOnOverprovisionedVMs?: boolean | null;

		/** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
		overprovision?: boolean | null;
		proximityPlacementGroup?: SubResource;

		/** Describes a scale-in policy for a virtual machine scale set. */
		scaleInPolicy?: ScaleInPolicy;

		/** When true this limits the scale set to a single placement group, of max size 100 virtual machines. */
		singlePlacementGroup?: boolean | null;

		/** Describes an upgrade policy - automatic, manual, or rolling. */
		upgradePolicy?: UpgradePolicy;

		/** Describes a virtual machine scale set virtual machine profile. */
		virtualMachineProfile?: VirtualMachineScaleSetUpdateVMProfile;
	}

	/** Describes the properties of a Virtual Machine Scale Set. */
	export interface VirtualMachineScaleSetUpdatePropertiesFormProperties {

		/** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
		doNotRunExtensionsOnOverprovisionedVMs: FormControl<boolean | null | undefined>,

		/** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
		overprovision: FormControl<boolean | null | undefined>,

		/** When true this limits the scale set to a single placement group, of max size 100 virtual machines. */
		singlePlacementGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdatePropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdatePropertiesFormProperties>({
			doNotRunExtensionsOnOverprovisionedVMs: new FormControl<boolean | null | undefined>(undefined),
			overprovision: new FormControl<boolean | null | undefined>(undefined),
			singlePlacementGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetUpdatePublicIPAddressConfiguration {

		/** The publicIP address configuration name. */
		name?: string | null;

		/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
		properties?: VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties;
	}

	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetUpdatePublicIPAddressConfigurationFormProperties {

		/** The publicIP address configuration name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdatePublicIPAddressConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdatePublicIPAddressConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties {

		/** Describes a virtual machines scale sets network configuration's DNS settings. */
		dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;

		/**
		 * The idle timeout of the public IP address.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleTimeoutInMinutes?: number | null;
	}

	/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
	export interface VirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesFormProperties {

		/**
		 * The idle timeout of the public IP address.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesFormProperties>({
			idleTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set storage profile. */
	export interface VirtualMachineScaleSetUpdateStorageProfile {

		/** The data disks. */
		dataDisks?: Array<VirtualMachineScaleSetDataDisk>;

		/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
		imageReference?: ImageReference;

		/** Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk. */
		osDisk?: VirtualMachineScaleSetUpdateOSDisk;
	}

	/** Describes a virtual machine scale set storage profile. */
	export interface VirtualMachineScaleSetUpdateStorageProfileFormProperties {
	}
	export function CreateVirtualMachineScaleSetUpdateStorageProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateStorageProfileFormProperties>({
		});

	}


	/** Describes a virtual machine scale set virtual machine profile. */
	export interface VirtualMachineScaleSetUpdateVMProfile {

		/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
		billingProfile?: BillingProfile;

		/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
		diagnosticsProfile?: DiagnosticsProfile;

		/** Describes a virtual machine scale set extension profile. */
		extensionProfile?: VirtualMachineScaleSetExtensionProfile;

		/** The license type, which is for bring your own license scenario. */
		licenseType?: string | null;

		/** Describes a virtual machine scale set network profile. */
		networkProfile?: VirtualMachineScaleSetUpdateNetworkProfile;

		/** Describes a virtual machine scale set OS profile. */
		osProfile?: VirtualMachineScaleSetUpdateOSProfile;
		scheduledEventsProfile?: ScheduledEventsProfile;

		/** Describes a virtual machine scale set storage profile. */
		storageProfile?: VirtualMachineScaleSetUpdateStorageProfile;
	}

	/** Describes a virtual machine scale set virtual machine profile. */
	export interface VirtualMachineScaleSetUpdateVMProfileFormProperties {

		/** The license type, which is for bring your own license scenario. */
		licenseType: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetUpdateVMProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetUpdateVMProfileFormProperties>({
			licenseType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set virtual machine. */
	export interface VirtualMachineScaleSetVM extends Resource {

		/** The virtual machine instance ID. */
		instanceId?: string | null;

		/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
		plan?: Plan;

		/** Describes the properties of a virtual machine scale set virtual machine. */
		properties?: VirtualMachineScaleSetVMProperties;

		/** The virtual machine child extension resources. */
		resources?: Array<VirtualMachineExtension>;

		/** Describes a virtual machine scale set sku. */
		sku?: Sku;

		/** The virtual machine zones. */
		zones?: Array<string>;
	}

	/** Describes a virtual machine scale set virtual machine. */
	export interface VirtualMachineScaleSetVMFormProperties extends ResourceFormProperties {

		/** The virtual machine instance ID. */
		instanceId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a list of virtual machine instance IDs from the VM scale set. */
	export interface VirtualMachineScaleSetVMInstanceIDs {

		/** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
		instanceIds?: Array<string>;
	}

	/** Specifies a list of virtual machine instance IDs from the VM scale set. */
	export interface VirtualMachineScaleSetVMInstanceIDsFormProperties {
	}
	export function CreateVirtualMachineScaleSetVMInstanceIDsFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMInstanceIDsFormProperties>({
		});

	}


	/** Specifies a list of virtual machine instance IDs from the VM scale set. */
	export interface VirtualMachineScaleSetVMInstanceRequiredIDs {

		/**
		 * The virtual machine scale set instance ids.
		 * Required
		 */
		instanceIds: Array<string>;
	}

	/** Specifies a list of virtual machine instance IDs from the VM scale set. */
	export interface VirtualMachineScaleSetVMInstanceRequiredIDsFormProperties {
	}
	export function CreateVirtualMachineScaleSetVMInstanceRequiredIDsFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMInstanceRequiredIDsFormProperties>({
		});

	}


	/** The instance view of a virtual machine scale set VM. */
	export interface VirtualMachineScaleSetVMInstanceView {

		/** The instance view of a virtual machine boot diagnostics. */
		bootDiagnostics?: BootDiagnosticsInstanceView;

		/** The disks information. */
		disks?: Array<DiskInstanceView>;

		/** The extensions information. */
		extensions?: Array<VirtualMachineExtensionInstanceView>;

		/** Maintenance Operation Status. */
		maintenanceRedeployStatus?: MaintenanceRedeployStatus;

		/** The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId. */
		placementGroupId?: string | null;

		/**
		 * The Fault Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomain?: number | null;

		/**
		 * The Update Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomain?: number | null;

		/** The Remote desktop certificate thumbprint. */
		rdpThumbPrint?: string | null;

		/** The resource status information. */
		statuses?: Array<InstanceViewStatus>;

		/** The instance view of the VM Agent running on the virtual machine. */
		vmAgent?: VirtualMachineAgentInstanceView;

		/** The health status of the VM. */
		vmHealth?: VirtualMachineHealthStatus;
	}

	/** The instance view of a virtual machine scale set VM. */
	export interface VirtualMachineScaleSetVMInstanceViewFormProperties {

		/** The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId. */
		placementGroupId: FormControl<string | null | undefined>,

		/**
		 * The Fault Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformFaultDomain: FormControl<number | null | undefined>,

		/**
		 * The Update Domain count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		platformUpdateDomain: FormControl<number | null | undefined>,

		/** The Remote desktop certificate thumbprint. */
		rdpThumbPrint: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMInstanceViewFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMInstanceViewFormProperties>({
			placementGroupId: new FormControl<string | null | undefined>(undefined),
			platformFaultDomain: new FormControl<number | null | undefined>(undefined),
			platformUpdateDomain: new FormControl<number | null | undefined>(undefined),
			rdpThumbPrint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Virtual Machine Scale Set VMs operation response. */
	export interface VirtualMachineScaleSetVMListResult {

		/** The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs */
		nextLink?: string | null;

		/**
		 * The list of virtual machine scale sets VMs.
		 * Required
		 */
		value: Array<VirtualMachineScaleSetVM>;
	}

	/** The List Virtual Machine Scale Set VMs operation response. */
	export interface VirtualMachineScaleSetVMListResultFormProperties {

		/** The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMListResultFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual machine scale set VM network profile. */
	export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {

		/** The list of network configurations. */
		networkInterfaceConfigurations?: Array<VirtualMachineScaleSetNetworkConfiguration>;
	}

	/** Describes a virtual machine scale set VM network profile. */
	export interface VirtualMachineScaleSetVMNetworkProfileConfigurationFormProperties {
	}
	export function CreateVirtualMachineScaleSetVMNetworkProfileConfigurationFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMNetworkProfileConfigurationFormProperties>({
		});

	}


	/** Describes a virtual machine scale set virtual machine profile. */
	export interface VirtualMachineScaleSetVMProfile {

		/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
		billingProfile?: BillingProfile;

		/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
		diagnosticsProfile?: DiagnosticsProfile;

		/** Specifies the eviction policy for the Azure Spot VM/VMSS */
		evictionPolicy?: VirtualMachinePropertiesEvictionPolicy | null;

		/** Describes a virtual machine scale set extension profile. */
		extensionProfile?: VirtualMachineScaleSetExtensionProfile;

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType?: string | null;

		/** Describes a virtual machine scale set network profile. */
		networkProfile?: VirtualMachineScaleSetNetworkProfile;

		/** Describes a virtual machine scale set OS profile. */
		osProfile?: VirtualMachineScaleSetOSProfile;

		/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
		priority?: VirtualMachinePropertiesPriority | null;
		scheduledEventsProfile?: ScheduledEventsProfile;

		/** Describes a virtual machine scale set storage profile. */
		storageProfile?: VirtualMachineScaleSetStorageProfile;
	}

	/** Describes a virtual machine scale set virtual machine profile. */
	export interface VirtualMachineScaleSetVMProfileFormProperties {

		/** Specifies the eviction policy for the Azure Spot VM/VMSS */
		evictionPolicy: FormControl<VirtualMachinePropertiesEvictionPolicy | null | undefined>,

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType: FormControl<string | null | undefined>,

		/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
		priority: FormControl<VirtualMachinePropertiesPriority | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMProfileFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMProfileFormProperties>({
			evictionPolicy: new FormControl<VirtualMachinePropertiesEvictionPolicy | null | undefined>(undefined),
			licenseType: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<VirtualMachinePropertiesPriority | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a virtual machine scale set virtual machine. */
	export interface VirtualMachineScaleSetVMProperties {

		/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
		additionalCapabilities?: AdditionalCapabilities;
		availabilitySet?: SubResource;

		/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
		diagnosticsProfile?: DiagnosticsProfile;

		/** Specifies the hardware settings for the virtual machine. */
		hardwareProfile?: HardwareProfile;

		/** The instance view of a virtual machine scale set VM. */
		instanceView?: VirtualMachineScaleSetVMInstanceView;

		/** Specifies whether the latest model has been applied to the virtual machine. */
		latestModelApplied?: boolean | null;

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType?: string | null;

		/** Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine. */
		modelDefinitionApplied?: string | null;

		/** Specifies the network interfaces of the virtual machine. */
		networkProfile?: NetworkProfile;

		/** Describes a virtual machine scale set VM network profile. */
		networkProfileConfiguration?: VirtualMachineScaleSetVMNetworkProfileConfiguration;

		/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
		osProfile?: OSProfile;

		/** The protection policy of a virtual machine scale set VM. */
		protectionPolicy?: VirtualMachineScaleSetVMProtectionPolicy;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** Specifies the storage settings for the virtual machine disks. */
		storageProfile?: StorageProfile;

		/** Azure VM unique ID. */
		vmId?: string | null;
	}

	/** Describes the properties of a virtual machine scale set virtual machine. */
	export interface VirtualMachineScaleSetVMPropertiesFormProperties {

		/** Specifies whether the latest model has been applied to the virtual machine. */
		latestModelApplied: FormControl<boolean | null | undefined>,

		/** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
		licenseType: FormControl<string | null | undefined>,

		/** Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine. */
		modelDefinitionApplied: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** Azure VM unique ID. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMPropertiesFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMPropertiesFormProperties>({
			latestModelApplied: new FormControl<boolean | null | undefined>(undefined),
			licenseType: new FormControl<string | null | undefined>(undefined),
			modelDefinitionApplied: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The protection policy of a virtual machine scale set VM. */
	export interface VirtualMachineScaleSetVMProtectionPolicy {

		/** Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation. */
		protectFromScaleIn?: boolean | null;

		/** Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. */
		protectFromScaleSetActions?: boolean | null;
	}

	/** The protection policy of a virtual machine scale set VM. */
	export interface VirtualMachineScaleSetVMProtectionPolicyFormProperties {

		/** Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation. */
		protectFromScaleIn: FormControl<boolean | null | undefined>,

		/** Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. */
		protectFromScaleSetActions: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualMachineScaleSetVMProtectionPolicyFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMProtectionPolicyFormProperties>({
			protectFromScaleIn: new FormControl<boolean | null | undefined>(undefined),
			protectFromScaleSetActions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
	export interface VirtualMachineScaleSetVMReimageParameters {
	}

	/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
	export interface VirtualMachineScaleSetVMReimageParametersFormProperties {
	}
	export function CreateVirtualMachineScaleSetVMReimageParametersFormGroup() {
		return new FormGroup<VirtualMachineScaleSetVMReimageParametersFormProperties>({
		});

	}


	/** Describes the properties of a VM size. */
	export interface VirtualMachineSize {

		/**
		 * The maximum number of data disks that can be attached to the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDataDiskCount?: number | null;

		/**
		 * The amount of memory, in MB, supported by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryInMB?: number | null;

		/** The name of the virtual machine size. */
		name?: string | null;

		/**
		 * The number of cores supported by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores?: number | null;

		/**
		 * The OS disk size, in MB, allowed by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		osDiskSizeInMB?: number | null;

		/**
		 * The resource disk size, in MB, allowed by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceDiskSizeInMB?: number | null;
	}

	/** Describes the properties of a VM size. */
	export interface VirtualMachineSizeFormProperties {

		/**
		 * The maximum number of data disks that can be attached to the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDataDiskCount: FormControl<number | null | undefined>,

		/**
		 * The amount of memory, in MB, supported by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryInMB: FormControl<number | null | undefined>,

		/** The name of the virtual machine size. */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of cores supported by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores: FormControl<number | null | undefined>,

		/**
		 * The OS disk size, in MB, allowed by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		osDiskSizeInMB: FormControl<number | null | undefined>,

		/**
		 * The resource disk size, in MB, allowed by the virtual machine size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceDiskSizeInMB: FormControl<number | null | undefined>,
	}
	export function CreateVirtualMachineSizeFormGroup() {
		return new FormGroup<VirtualMachineSizeFormProperties>({
			maxDataDiskCount: new FormControl<number | null | undefined>(undefined),
			memoryInMB: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined),
			osDiskSizeInMB: new FormControl<number | null | undefined>(undefined),
			resourceDiskSizeInMB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The List Virtual Machine operation response. */
	export interface VirtualMachineSizeListResult {

		/** The list of virtual machine sizes. */
		value?: Array<VirtualMachineSize>;
	}

	/** The List Virtual Machine operation response. */
	export interface VirtualMachineSizeListResultFormProperties {
	}
	export function CreateVirtualMachineSizeListResultFormGroup() {
		return new FormGroup<VirtualMachineSizeListResultFormProperties>({
		});

	}


	/** Describes a Virtual Machine Update. */
	export interface VirtualMachineUpdate extends UpdateResource {

		/** Identity for the virtual machine. */
		identity?: VirtualMachineIdentity;

		/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
		plan?: Plan;

		/** Describes the properties of a Virtual Machine. */
		properties?: VirtualMachineProperties;

		/** The virtual machine zones. */
		zones?: Array<string>;
	}

	/** Describes a Virtual Machine Update. */
	export interface VirtualMachineUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateVirtualMachineUpdateFormGroup() {
		return new FormGroup<VirtualMachineUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes Windows Remote Management configuration of the VM */
	export interface WinRMConfiguration {

		/** The list of Windows Remote Management listeners */
		listeners?: Array<WinRMListener>;
	}

	/** Describes Windows Remote Management configuration of the VM */
	export interface WinRMConfigurationFormProperties {
	}
	export function CreateWinRMConfigurationFormGroup() {
		return new FormGroup<WinRMConfigurationFormProperties>({
		});

	}


	/** Describes Protocol and thumbprint of Windows Remote Management listener */
	export interface WinRMListener {

		/** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
		certificateUrl?: string | null;

		/** Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https** */
		protocol?: WinRMListenerProtocol | null;
	}

	/** Describes Protocol and thumbprint of Windows Remote Management listener */
	export interface WinRMListenerFormProperties {

		/** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
		certificateUrl: FormControl<string | null | undefined>,

		/** Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https** */
		protocol: FormControl<WinRMListenerProtocol | null | undefined>,
	}
	export function CreateWinRMListenerFormGroup() {
		return new FormGroup<WinRMListenerFormProperties>({
			certificateUrl: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<WinRMListenerProtocol | null | undefined>(undefined),
		});

	}

	export enum WinRMListenerProtocol { Http = 'Http', Https = 'Https' }


	/** Specifies Windows operating system settings on the virtual machine. */
	export interface WindowsConfiguration {

		/** Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. */
		additionalUnattendContent?: Array<AdditionalUnattendContent>;

		/** Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. */
		enableAutomaticUpdates?: boolean | null;

		/** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
		provisionVMAgent?: boolean | null;

		/** Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". <br><br> Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.getsystemtimezones). */
		timeZone?: string | null;

		/** Describes Windows Remote Management configuration of the VM */
		winRM?: WinRMConfiguration;
	}

	/** Specifies Windows operating system settings on the virtual machine. */
	export interface WindowsConfigurationFormProperties {

		/** Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. */
		enableAutomaticUpdates: FormControl<boolean | null | undefined>,

		/** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
		provisionVMAgent: FormControl<boolean | null | undefined>,

		/** Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". <br><br> Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.getsystemtimezones). */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateWindowsConfigurationFormGroup() {
		return new FormGroup<WindowsConfigurationFormProperties>({
			enableAutomaticUpdates: new FormControl<boolean | null | undefined>(undefined),
			provisionVMAgent: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the eviction policy for the Azure Spot VM/VMSS */
	export enum EvictionPolicy { Deallocate = 'Deallocate', Delete = 'Delete' }


	/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
	export enum Priority { Regular = 'Regular', Low = 'Low', Spot = 'Spot' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of compute operations.
		 * Get providers/Microsoft.Compute/operations
		 * @param {string} api_version Client Api Version.
		 * @return {ComputeOperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<ComputeOperationListResult> {
			return this.http.get<ComputeOperationListResult>(this.baseUri + 'providers/Microsoft.Compute/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all availability sets in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/availabilitySets
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} expand The expand expression to apply to the operation.
		 * @return {AvailabilitySetListResult} OK
		 */
		AvailabilitySets_ListBySubscription(api_version: string, subscriptionId: string, expand: string | null | undefined): Observable<AvailabilitySetListResult> {
			return this.http.get<AvailabilitySetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/availabilitySets?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the response to get the next page of dedicated host groups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHostGroupListResult} OK
		 */
		DedicatedHostGroups_ListBySubscription(api_version: string, subscriptionId: string): Observable<DedicatedHostGroupListResult> {
			return this.http.get<DedicatedHostGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/hostGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/images
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ImageListResult} OK
		 */
		Images_List(api_version: string, subscriptionId: string): Observable<ImageListResult> {
			return this.http.get<ImageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/images?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getRequestRateByInterval
		 * @param {string} location The location upon which virtual-machine-sizes is queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RequestRateByIntervalInput} requestBody Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
		 * @return {LogAnalyticsOperationResult} OK
		 */
		LogAnalytics_ExportRequestRateByInterval(location: string, api_version: string, subscriptionId: string, requestBody: RequestRateByIntervalInput): Observable<LogAnalyticsOperationResult> {
			return this.http.post<LogAnalyticsOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/logAnalytics/apiAccess/getRequestRateByInterval&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export logs that show total throttled Api requests for this subscription in the given time window.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getThrottledRequests
		 * @param {string} location The location upon which virtual-machine-sizes is queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ThrottledRequestsInput} requestBody Parameters supplied to the LogAnalytics getThrottledRequests Api.
		 * @return {LogAnalyticsOperationResult} OK
		 */
		LogAnalytics_ExportThrottledRequests(location: string, api_version: string, subscriptionId: string, requestBody: ThrottledRequestsInput): Observable<LogAnalyticsOperationResult> {
			return this.http.post<LogAnalyticsOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/logAnalytics/apiAccess/getThrottledRequests&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of virtual machine image publishers for the specified Azure location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineImageResource>} OK
		 */
		VirtualMachineImages_ListPublishers(location: string, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineImageResource>> {
			return this.http.get<Array<VirtualMachineImageResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of virtual machine extension image types.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineExtensionImage>} OK
		 */
		VirtualMachineExtensionImages_ListTypes(location: string, publisherName: string, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineExtensionImage>> {
			return this.http.get<Array<VirtualMachineExtensionImage>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmextension/types&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of virtual machine extension image versions.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {number} top Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineExtensionImage>} OK
		 */
		VirtualMachineExtensionImages_ListVersions(location: string, publisherName: string, type: string, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineExtensionImage>> {
			return this.http.get<Array<VirtualMachineExtensionImage>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmextension/types/' + (type == null ? '' : encodeURIComponent(type)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual machine extension image.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions/{version}
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineExtensionImage} OK
		 */
		VirtualMachineExtensionImages_Get(location: string, publisherName: string, type: string, version: string, api_version: string, subscriptionId: string): Observable<VirtualMachineExtensionImage> {
			return this.http.get<VirtualMachineExtensionImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmextension/types/' + (type == null ? '' : encodeURIComponent(type)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of virtual machine image offers for the specified location and publisher.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} publisherName A valid image publisher.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineImageResource>} OK
		 */
		VirtualMachineImages_ListOffers(location: string, publisherName: string, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineImageResource>> {
			return this.http.get<Array<VirtualMachineImageResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmimage/offers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} publisherName A valid image publisher.
		 * @param {string} offer A valid image publisher offer.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineImageResource>} OK
		 */
		VirtualMachineImages_ListSkus(location: string, publisherName: string, offer: string, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineImageResource>> {
			return this.http.get<Array<VirtualMachineImageResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmimage/offers/' + (offer == null ? '' : encodeURIComponent(offer)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} publisherName A valid image publisher.
		 * @param {string} offer A valid image publisher offer.
		 * @param {string} skus A valid image SKU.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {number} top Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<VirtualMachineImageResource>} OK
		 */
		VirtualMachineImages_List(location: string, publisherName: string, offer: string, skus: string, filter: string | null | undefined, top: number | null | undefined, orderby: string | null | undefined, api_version: string, subscriptionId: string): Observable<Array<VirtualMachineImageResource>> {
			return this.http.get<Array<VirtualMachineImageResource>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmimage/offers/' + (offer == null ? '' : encodeURIComponent(offer)) + '/skus/' + (skus == null ? '' : encodeURIComponent(skus)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual machine image.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} publisherName A valid image publisher.
		 * @param {string} offer A valid image publisher offer.
		 * @param {string} skus A valid image SKU.
		 * @param {string} version A valid image SKU version.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineImage} OK
		 */
		VirtualMachineImages_Get(location: string, publisherName: string, offer: string, skus: string, version: string, api_version: string, subscriptionId: string): Observable<VirtualMachineImage> {
			return this.http.get<VirtualMachineImage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/publishers/' + (publisherName == null ? '' : encodeURIComponent(publisherName)) + '/artifacttypes/vmimage/offers/' + (offer == null ? '' : encodeURIComponent(offer)) + '/skus/' + (skus == null ? '' : encodeURIComponent(skus)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/usages
		 * @param {string} location The location for which resource usage is queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ListUsagesResult} OK
		 */
		Usage_List(location: string, api_version: string, subscriptionId: string): Observable<ListUsagesResult> {
			return this.http.get<ListUsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the virtual machines under the specified subscription for the specified location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/virtualMachines
		 * @param {string} location The location for which virtual machines under the subscription are queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineListResult} OK
		 */
		VirtualMachines_ListByLocation(location: string, api_version: string, subscriptionId: string): Observable<VirtualMachineListResult> {
			return this.http.get<VirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/virtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * This API is deprecated. Use [Resources Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/vmSizes
		 * @param {string} location The location upon which virtual-machine-sizes is queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineSizeListResult} OK
		 */
		VirtualMachineSizes_List(location: string, api_version: string, subscriptionId: string): Observable<VirtualMachineSizeListResult> {
			return this.http.get<VirtualMachineSizeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/vmSizes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all proximity placement groups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/proximityPlacementGroups
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProximityPlacementGroupListResult} OK
		 */
		ProximityPlacementGroups_ListBySubscription(api_version: string, subscriptionId: string): Observable<ProximityPlacementGroupListResult> {
			return this.http.get<ProximityPlacementGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/proximityPlacementGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachineScaleSets
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetListWithLinkResult} OK
		 */
		VirtualMachineScaleSets_ListAll(api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetListWithLinkResult> {
			return this.http.get<VirtualMachineScaleSetListWithLinkResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/virtualMachineScaleSets?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} statusOnly statusOnly=true enables fetching run time status of all Virtual Machines in the subscription.
		 * @return {VirtualMachineListResult} OK
		 */
		VirtualMachines_ListAll(api_version: string, subscriptionId: string, statusOnly: string | null | undefined): Observable<VirtualMachineListResult> {
			return this.http.get<VirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/virtualMachines?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&statusOnly=' + (statusOnly == null ? '' : encodeURIComponent(statusOnly)), {});
		}

		/**
		 * Lists all availability sets in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AvailabilitySetListResult} OK
		 */
		AvailabilitySets_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AvailabilitySetListResult> {
			return this.http.get<AvailabilitySetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about an availability set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} availabilitySetName The name of the availability set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AvailabilitySet} OK
		 */
		AvailabilitySets_Get(resourceGroupName: string, availabilitySetName: string, api_version: string, subscriptionId: string): Observable<AvailabilitySet> {
			return this.http.get<AvailabilitySet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets/' + (availabilitySetName == null ? '' : encodeURIComponent(availabilitySetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an availability set.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} availabilitySetName The name of the availability set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AvailabilitySet} requestBody Parameters supplied to the Create Availability Set operation.
		 * @return {AvailabilitySet} OK
		 */
		AvailabilitySets_CreateOrUpdate(resourceGroupName: string, availabilitySetName: string, api_version: string, subscriptionId: string, requestBody: AvailabilitySet): Observable<AvailabilitySet> {
			return this.http.put<AvailabilitySet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets/' + (availabilitySetName == null ? '' : encodeURIComponent(availabilitySetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an availability set.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} availabilitySetName The name of the availability set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		AvailabilitySets_Delete(resourceGroupName: string, availabilitySetName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets/' + (availabilitySetName == null ? '' : encodeURIComponent(availabilitySetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an availability set.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} availabilitySetName The name of the availability set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AvailabilitySetUpdate} requestBody Parameters supplied to the Update Availability Set operation.
		 * @return {AvailabilitySet} OK
		 */
		AvailabilitySets_Update(resourceGroupName: string, availabilitySetName: string, api_version: string, subscriptionId: string, requestBody: AvailabilitySetUpdate): Observable<AvailabilitySet> {
			return this.http.patch<AvailabilitySet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets/' + (availabilitySetName == null ? '' : encodeURIComponent(availabilitySetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} availabilitySetName The name of the availability set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineSizeListResult} OK
		 */
		AvailabilitySets_ListAvailableSizes(resourceGroupName: string, availabilitySetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineSizeListResult> {
			return this.http.get<VirtualMachineSizeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/availabilitySets/' + (availabilitySetName == null ? '' : encodeURIComponent(availabilitySetName)) + '/vmSizes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in the response to get the next page of dedicated host groups.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHostGroupListResult} OK
		 */
		DedicatedHostGroups_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<DedicatedHostGroupListResult> {
			return this.http.get<DedicatedHostGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a dedicated host group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHostGroup} OK
		 */
		DedicatedHostGroups_Get(resourceGroupName: string, hostGroupName: string, api_version: string, subscriptionId: string): Observable<DedicatedHostGroup> {
			return this.http.get<DedicatedHostGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHostGroup} requestBody Parameters supplied to the Create Dedicated Host Group.
		 * @return {DedicatedHostGroup} OK
		 */
		DedicatedHostGroups_CreateOrUpdate(resourceGroupName: string, hostGroupName: string, api_version: string, subscriptionId: string, requestBody: DedicatedHostGroup): Observable<DedicatedHostGroup> {
			return this.http.put<DedicatedHostGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a dedicated host group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		DedicatedHostGroups_Delete(resourceGroupName: string, hostGroupName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an dedicated host group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHostGroupUpdate} requestBody Parameters supplied to the Update Dedicated Host Group operation.
		 * @return {DedicatedHostGroup} OK
		 */
		DedicatedHostGroups_Update(resourceGroupName: string, hostGroupName: string, api_version: string, subscriptionId: string, requestBody: DedicatedHostGroupUpdate): Observable<DedicatedHostGroup> {
			return this.http.patch<DedicatedHostGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in the response to get the next page of dedicated hosts.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHostListResult} OK
		 */
		DedicatedHosts_ListByHostGroup(resourceGroupName: string, hostGroupName: string, api_version: string, subscriptionId: string): Observable<DedicatedHostListResult> {
			return this.http.get<DedicatedHostListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '/hosts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a dedicated host.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} hostName The name of the dedicated host.
		 * @param {DedicatedHosts_GetExpand} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHost} OK
		 */
		DedicatedHosts_Get(resourceGroupName: string, hostGroupName: string, hostName: string, expand: DedicatedHosts_GetExpand | null | undefined, api_version: string, subscriptionId: string): Observable<DedicatedHost> {
			return this.http.get<DedicatedHost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '/hosts/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&expand=' + expand + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a dedicated host .
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} hostName The name of the dedicated host .
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHost} requestBody Parameters supplied to the Create Dedicated Host.
		 * @return {DedicatedHost} OK
		 */
		DedicatedHosts_CreateOrUpdate(resourceGroupName: string, hostGroupName: string, hostName: string, api_version: string, subscriptionId: string, requestBody: DedicatedHost): Observable<DedicatedHost> {
			return this.http.put<DedicatedHost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '/hosts/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a dedicated host.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} hostName The name of the dedicated host.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		DedicatedHosts_Delete(resourceGroupName: string, hostGroupName: string, hostName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '/hosts/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an dedicated host .
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hostGroupName The name of the dedicated host group.
		 * @param {string} hostName The name of the dedicated host .
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHostUpdate} requestBody Parameters supplied to the Update Dedicated Host operation.
		 * @return {DedicatedHost} OK
		 */
		DedicatedHosts_Update(resourceGroupName: string, hostGroupName: string, hostName: string, api_version: string, subscriptionId: string, requestBody: DedicatedHostUpdate): Observable<DedicatedHost> {
			return this.http.patch<DedicatedHost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/hostGroups/' + (hostGroupName == null ? '' : encodeURIComponent(hostGroupName)) + '/hosts/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the list of images under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ImageListResult} OK
		 */
		Images_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ImageListResult> {
			return this.http.get<ImageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/images&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an image.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageName The name of the image.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Image} OK
		 */
		Images_Get(resourceGroupName: string, imageName: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<Image> {
			return this.http.get<Image>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/images/' + (imageName == null ? '' : encodeURIComponent(imageName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an image.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageName The name of the image.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Image} requestBody Parameters supplied to the Create Image operation.
		 * @return {Image} OK
		 */
		Images_CreateOrUpdate(resourceGroupName: string, imageName: string, api_version: string, subscriptionId: string, requestBody: Image): Observable<Image> {
			return this.http.put<Image>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/images/' + (imageName == null ? '' : encodeURIComponent(imageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Image.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageName The name of the image.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		Images_Delete(resourceGroupName: string, imageName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/images/' + (imageName == null ? '' : encodeURIComponent(imageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an image.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} imageName The name of the image.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ImageUpdate} requestBody Parameters supplied to the Update Image operation.
		 * @return {Image} OK
		 */
		Images_Update(resourceGroupName: string, imageName: string, api_version: string, subscriptionId: string, requestBody: ImageUpdate): Observable<Image> {
			return this.http.patch<Image>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/images/' + (imageName == null ? '' : encodeURIComponent(imageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all proximity placement groups in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProximityPlacementGroupListResult} OK
		 */
		ProximityPlacementGroups_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ProximityPlacementGroupListResult> {
			return this.http.get<ProximityPlacementGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/proximityPlacementGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about a proximity placement group .
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} proximityPlacementGroupName The name of the proximity placement group.
		 * @param {string} includeColocationStatus includeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProximityPlacementGroup} OK
		 */
		ProximityPlacementGroups_Get(resourceGroupName: string, proximityPlacementGroupName: string, includeColocationStatus: string | null | undefined, api_version: string, subscriptionId: string): Observable<ProximityPlacementGroup> {
			return this.http.get<ProximityPlacementGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/proximityPlacementGroups/' + (proximityPlacementGroupName == null ? '' : encodeURIComponent(proximityPlacementGroupName)) + '&includeColocationStatus=' + (includeColocationStatus == null ? '' : encodeURIComponent(includeColocationStatus)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a proximity placement group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} proximityPlacementGroupName The name of the proximity placement group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ProximityPlacementGroup} requestBody Parameters supplied to the Create Proximity Placement Group operation.
		 * @return {ProximityPlacementGroup} OK
		 */
		ProximityPlacementGroups_CreateOrUpdate(resourceGroupName: string, proximityPlacementGroupName: string, api_version: string, subscriptionId: string, requestBody: ProximityPlacementGroup): Observable<ProximityPlacementGroup> {
			return this.http.put<ProximityPlacementGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/proximityPlacementGroups/' + (proximityPlacementGroupName == null ? '' : encodeURIComponent(proximityPlacementGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a proximity placement group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} proximityPlacementGroupName The name of the proximity placement group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		ProximityPlacementGroups_Delete(resourceGroupName: string, proximityPlacementGroupName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/proximityPlacementGroups/' + (proximityPlacementGroupName == null ? '' : encodeURIComponent(proximityPlacementGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a proximity placement group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} proximityPlacementGroupName The name of the proximity placement group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ProximityPlacementGroupUpdate} requestBody Parameters supplied to the Update Proximity Placement Group operation.
		 * @return {ProximityPlacementGroup} OK
		 */
		ProximityPlacementGroups_Update(resourceGroupName: string, proximityPlacementGroupName: string, api_version: string, subscriptionId: string, requestBody: ProximityPlacementGroupUpdate): Observable<ProximityPlacementGroup> {
			return this.http.patch<ProximityPlacementGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/proximityPlacementGroups/' + (proximityPlacementGroupName == null ? '' : encodeURIComponent(proximityPlacementGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all VM scale sets under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetListResult} OK
		 */
		VirtualMachineScaleSets_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetListResult> {
			return this.http.get<VirtualMachineScaleSetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of all virtual machines in a VM scale sets.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} virtualMachineScaleSetName The name of the VM scale set.
		 * @param {string} filter The filter to apply to the operation.
		 * @param {string} select The list parameters.
		 * @param {string} expand The expand expression to apply to the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetVMListResult} OK
		 */
		VirtualMachineScaleSetVMs_List(resourceGroupName: string, virtualMachineScaleSetName: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetVMListResult> {
			return this.http.get<VirtualMachineScaleSetVMListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (virtualMachineScaleSetName == null ? '' : encodeURIComponent(virtualMachineScaleSetName)) + '/virtualMachines&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Display information about a virtual machine scale set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSet} OK
		 */
		VirtualMachineScaleSets_Get(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSet> {
			return this.http.get<VirtualMachineScaleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a VM scale set.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSet} requestBody The scale set object.
		 * @return {VirtualMachineScaleSet} OK
		 */
		VirtualMachineScaleSets_CreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSet): Observable<VirtualMachineScaleSet> {
			return this.http.put<VirtualMachineScaleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a VM scale set.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Delete(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a VM scale set.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetUpdate} requestBody The scale set object.
		 * @return {VirtualMachineScaleSet} OK
		 */
		VirtualMachineScaleSets_Update(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetUpdate): Observable<VirtualMachineScaleSet> {
			return this.http.patch<VirtualMachineScaleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Converts SinglePlacementGroup property to false for a existing virtual machine scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/convertToSinglePlacementGroup
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the virtual machine scale set to create or update.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VMScaleSetConvertToSinglePlacementGroupInput} requestBody The input object for ConvertToSinglePlacementGroup API.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_ConvertToSinglePlacementGroup(resourceGroupName: string, vmScaleSetName: string, subscriptionId: string, requestBody: VMScaleSetConvertToSinglePlacementGroupInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/convertToSinglePlacementGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/deallocate
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Deallocate(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/deallocate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes virtual machines in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/delete
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_DeleteInstances(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceRequiredIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/delete&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the latest available extension version. Instances which are already running the latest extension versions are not affected.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensionRollingUpgrade
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetRollingUpgrades_StartExtensionUpgrade(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensionRollingUpgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all extensions in a VM scale set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetExtensionListResult} OK
		 */
		VirtualMachineScaleSetExtensions_List(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetExtensionListResult> {
			return this.http.get<VirtualMachineScaleSetExtensionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to get the extension.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
		 * @param {string} vmssExtensionName The name of the VM scale set extension.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetExtension} OK
		 */
		VirtualMachineScaleSetExtensions_Get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetExtension> {
			return this.http.get<VirtualMachineScaleSetExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensions/' + (vmssExtensionName == null ? '' : encodeURIComponent(vmssExtensionName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to create or update an extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create or updated.
		 * @param {string} vmssExtensionName The name of the VM scale set extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetExtension} requestBody Parameters supplied to the Create VM scale set Extension operation.
		 * @return {VirtualMachineScaleSetExtension} OK
		 */
		VirtualMachineScaleSetExtensions_CreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetExtension): Observable<VirtualMachineScaleSetExtension> {
			return this.http.put<VirtualMachineScaleSetExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensions/' + (vmssExtensionName == null ? '' : encodeURIComponent(vmssExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete the extension.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set where the extension should be deleted.
		 * @param {string} vmssExtensionName The name of the VM scale set extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetExtensions_Delete(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensions/' + (vmssExtensionName == null ? '' : encodeURIComponent(vmssExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to update an extension.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set where the extension should be updated.
		 * @param {string} vmssExtensionName The name of the VM scale set extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetExtensionUpdate} requestBody Parameters supplied to the Update VM scale set Extension operation.
		 * @return {VirtualMachineScaleSetExtension} OK
		 */
		VirtualMachineScaleSetExtensions_Update(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetExtensionUpdate): Observable<VirtualMachineScaleSetExtension> {
			return this.http.patch<VirtualMachineScaleSetExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/extensions/' + (vmssExtensionName == null ? '' : encodeURIComponent(vmssExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/forceRecoveryServiceFabricPlatformUpdateDomainWalk
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} platformUpdateDomain The platform update domain for which a manual recovery walk is requested
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RecoveryWalkResponse} OK
		 */
		VirtualMachineScaleSets_ForceRecoveryServiceFabricPlatformUpdateDomainWalk(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, platformUpdateDomain: number): Observable<RecoveryWalkResponse> {
			return this.http.post<RecoveryWalkResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/forceRecoveryServiceFabricPlatformUpdateDomainWalk&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&platformUpdateDomain=' + platformUpdateDomain, null, {});
		}

		/**
		 * Gets the status of a VM scale set instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/instanceView
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetInstanceView} OK
		 */
		VirtualMachineScaleSets_GetInstanceView(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetInstanceView> {
			return this.http.get<VirtualMachineScaleSetInstanceView>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/instanceView&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/manualupgrade
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_UpdateInstances(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceRequiredIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/manualupgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetRollingUpgrades_StartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/osRollingUpgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets list of OS upgrades on a VM scale set instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osUpgradeHistory
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetListOSUpgradeHistory} OK
		 */
		VirtualMachineScaleSets_GetOSUpgradeHistory(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetListOSUpgradeHistory> {
			return this.http.get<VirtualMachineScaleSetListOSUpgradeHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/osUpgradeHistory&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/performMaintenance
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_PerformMaintenance(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/performMaintenance&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/poweroff
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {boolean} skipShutdown The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_PowerOff(resourceGroupName: string, vmScaleSetName: string, skipShutdown: boolean | null | undefined, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/poweroff&skipShutdown=' + skipShutdown + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/redeploy
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Redeploy(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/redeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimage
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetReimageParameters} requestBody Parameters for Reimaging VM ScaleSet.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Reimage(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetReimageParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/reimage&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimageall
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_ReimageAll(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/reimageall&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts one or more virtual machines in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/restart
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Restart(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels the current virtual machine scale set rolling upgrade.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetRollingUpgrades_Cancel(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/rollingUpgrades/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the status of the latest virtual machine scale set rolling upgrade.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RollingUpgradeStatusInfo} OK
		 */
		VirtualMachineScaleSetRollingUpgrades_GetLatest(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<RollingUpgradeStatusInfo> {
			return this.http.get<RollingUpgradeStatusInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/rollingUpgrades/latest&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/skus
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetListSkusResult} OK
		 */
		VirtualMachineScaleSets_ListSkus(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetListSkusResult> {
			return this.http.get<VirtualMachineScaleSetListSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Starts one or more virtual machines in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/start
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMInstanceIDs} requestBody A list of virtual machine instance IDs from the VM scale set.
		 * @return {void} OK
		 */
		VirtualMachineScaleSets_Start(resourceGroupName: string, vmScaleSetName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMInstanceIDs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to get all extensions of an instance in Virtual Machine Scaleset.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineExtensionsListResult} OK
		 */
		VirtualMachineScaleSetVMExtensions_List(resourceGroupName: string, vmScaleSetName: string, instanceId: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineExtensionsListResult> {
			return this.http.get<VirtualMachineExtensionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualMachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to get the VMSS VM extension.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineScaleSetVMExtensions_Get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineExtension> {
			return this.http.get<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualMachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to create or update the VMSS VM extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineExtension} requestBody Parameters supplied to the Create Virtual Machine Extension operation.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineScaleSetVMExtensions_CreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineExtension): Observable<VirtualMachineExtension> {
			return this.http.put<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualMachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete the VMSS VM extension.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMExtensions_Delete(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualMachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to update the VMSS VM extension.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineExtensionUpdate} requestBody Parameters supplied to the Update Virtual Machine Extension operation.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineScaleSetVMExtensions_Update(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineExtensionUpdate): Observable<VirtualMachineExtension> {
			return this.http.patch<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualMachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a virtual machine from a VM scale set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {DedicatedHosts_GetExpand} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetVM} OK
		 */
		VirtualMachineScaleSetVMs_Get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, expand: DedicatedHosts_GetExpand | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetVM> {
			return this.http.get<VirtualMachineScaleSetVM>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&expand=' + expand + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a virtual machine of a VM scale set.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create or updated.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVM} requestBody Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
		 * @return {VirtualMachineScaleSetVM} OK
		 */
		VirtualMachineScaleSetVMs_Update(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVM): Observable<VirtualMachineScaleSetVM> {
			return this.http.put<VirtualMachineScaleSetVM>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a virtual machine from a VM scale set.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Delete(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/deallocate
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/deallocate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the status of a virtual machine from a VM scale set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/instanceView
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineScaleSetVMInstanceView} OK
		 */
		VirtualMachineScaleSetVMs_GetInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<VirtualMachineScaleSetVMInstanceView> {
			return this.http.get<VirtualMachineScaleSetVMInstanceView>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/instanceView&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Performs maintenance on a virtual machine in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/performMaintenance
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_PerformMaintenance(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/performMaintenance&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/poweroff
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {boolean} skipShutdown The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_PowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, skipShutdown: boolean | null | undefined, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/poweroff&skipShutdown=' + skipShutdown + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers it back on.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/redeploy
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Redeploy(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/redeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimage
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineScaleSetVMReimageParameters} requestBody Parameters for the Reimaging Virtual machine in ScaleSet.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineScaleSetVMReimageParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/reimage&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimageall
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_ReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/reimageall&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts a virtual machine in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/restart
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a virtual machine in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/start
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineScaleSetVMs_Start(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineListResult} OK
		 */
		VirtualMachines_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineListResult> {
			return this.http.get<VirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about the model view or the instance view of a virtual machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {DedicatedHosts_GetExpand} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachine} OK
		 */
		VirtualMachines_Get(resourceGroupName: string, vmName: string, expand: DedicatedHosts_GetExpand | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachine> {
			return this.http.get<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '&expand=' + expand + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachine} requestBody Parameters supplied to the Create Virtual Machine operation.
		 * @return {VirtualMachine} OK
		 */
		VirtualMachines_CreateOrUpdate(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachine): Observable<VirtualMachine> {
			return this.http.put<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete a virtual machine.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Delete(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to update a virtual machine.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineUpdate} requestBody Parameters supplied to the Update Virtual Machine operation.
		 * @return {VirtualMachine} OK
		 */
		VirtualMachines_Update(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineUpdate): Observable<VirtualMachine> {
			return this.http.patch<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/capture
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineCaptureParameters} requestBody Parameters supplied to the Capture Virtual Machine operation.
		 * @return {VirtualMachineCaptureResult} OK
		 */
		VirtualMachines_Capture(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineCaptureParameters): Observable<VirtualMachineCaptureResult> {
			return this.http.post<VirtualMachineCaptureResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/capture&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be stop-deallocated before invoking this operation.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/convertToManagedDisks
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_ConvertToManagedDisks(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/convertToManagedDisks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/deallocate
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Deallocate(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/deallocate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to get all extensions of a Virtual Machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine containing the extension.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineExtensionsListResult} OK
		 */
		VirtualMachineExtensions_List(resourceGroupName: string, vmName: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineExtensionsListResult> {
			return this.http.get<VirtualMachineExtensionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/extensions&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to get the extension.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine containing the extension.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineExtensions_Get(resourceGroupName: string, vmName: string, vmExtensionName: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<VirtualMachineExtension> {
			return this.http.get<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to create or update the extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine where the extension should be created or updated.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineExtension} requestBody Parameters supplied to the Create Virtual Machine Extension operation.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineExtensions_CreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineExtension): Observable<VirtualMachineExtension> {
			return this.http.put<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete the extension.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine where the extension should be deleted.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachineExtensions_Delete(resourceGroupName: string, vmName: string, vmExtensionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to update the extension.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine where the extension should be updated.
		 * @param {string} vmExtensionName The name of the virtual machine extension.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineExtensionUpdate} requestBody Parameters supplied to the Update Virtual Machine Extension operation.
		 * @return {VirtualMachineExtension} OK
		 */
		VirtualMachineExtensions_Update(resourceGroupName: string, vmName: string, vmExtensionName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineExtensionUpdate): Observable<VirtualMachineExtension> {
			return this.http.patch<VirtualMachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/extensions/' + (vmExtensionName == null ? '' : encodeURIComponent(vmExtensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual machine before performing this operation. <br>For Windows, please refer to [Create a managed image of a generalized VM in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/capture-image-resource).<br>For Linux, please refer to [How to create an image of a virtual machine or VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/generalize
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Generalize(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/generalize&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the run-time state of a virtual machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/instanceView
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineInstanceView} OK
		 */
		VirtualMachines_InstanceView(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineInstanceView> {
			return this.http.get<VirtualMachineInstanceView>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/instanceView&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to perform maintenance on a virtual machine.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/performMaintenance
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_PerformMaintenance(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/performMaintenance&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/powerOff
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {boolean} skipShutdown The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_PowerOff(resourceGroupName: string, vmName: string, skipShutdown: boolean | null | undefined, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/powerOff&skipShutdown=' + skipShutdown + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to reapply a virtual machine's state.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reapply
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Reapply(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/reapply&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shuts down the virtual machine, moves it to a new node, and powers it back on.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/redeploy
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Redeploy(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/redeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reimage
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualMachineReimageParameters} requestBody Parameters supplied to the Reimage Virtual Machine operation.
		 * @return {void} OK
		 */
		VirtualMachines_Reimage(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string, requestBody: VirtualMachineReimageParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/reimage&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to restart a virtual machine.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/restart
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Restart(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to start a virtual machine.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/start
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		VirtualMachines_Start(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/vmSizes
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualMachineSizeListResult} OK
		 */
		VirtualMachines_ListAvailableSizes(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string): Observable<VirtualMachineSizeListResult> {
			return this.http.get<VirtualMachineSizeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/vmSizes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum DedicatedHosts_GetExpand { instanceView = 'instanceView' }

}

