import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A disk assessed for an assessment. */
	export interface AssessedDisk {

		/** User friendly name of the assessed disk. */
		displayName?: string | null;

		/**
		 * Gigabytes of storage provided by the recommended Azure disk size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gigabytesForRecommendedDiskSize?: number | null;

		/**
		 * Gigabytes of storage provisioned for this disk.
		 * Type: double
		 */
		gigabytesProvisioned?: number | null;

		/**
		 * Disk throughput in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondOfRead?: number | null;

		/**
		 * Disk throughput in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondOfWrite?: number | null;

		/**
		 * Estimated aggregate storage cost for a 31-day month for this disk.
		 * Type: double
		 */
		monthlyStorageCost?: number | null;

		/** Name of the assessed disk. */
		name?: string | null;

		/**
		 * Number of read operations per second for the disk.
		 * Type: double
		 */
		numberOfReadOperationsPerSecond?: number | null;

		/**
		 * Number of read and write operations per second for the disk.
		 * Type: double
		 */
		numberOfWriteOperationsPerSecond?: number | null;

		/** Recommended Azure size for the disk, given utilization data and preferences set on Assessment. */
		recommendedDiskSize?: AssessedDiskRecommendedDiskSize | null;

		/** Storage type selected for this disk. */
		recommendedDiskType?: AssessedDiskRecommendedDiskType | null;

		/** Whether this disk is suitable for Azure. */
		suitability?: AssessedDiskSuitability | null;

		/** If disk is suitable to be migrate but some conditions/checks were not considered while calculating suitability, this explains the details. */
		suitabilityDetail?: AssessedDiskSuitabilityDetail | null;

		/** If disk is not suitable to be migrated, this explains the reasons and mitigation steps. */
		suitabilityExplanation?: AssessedDiskSuitabilityExplanation | null;
	}

	/** A disk assessed for an assessment. */
	export interface AssessedDiskFormProperties {

		/** User friendly name of the assessed disk. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Gigabytes of storage provided by the recommended Azure disk size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gigabytesForRecommendedDiskSize: FormControl<number | null | undefined>,

		/**
		 * Gigabytes of storage provisioned for this disk.
		 * Type: double
		 */
		gigabytesProvisioned: FormControl<number | null | undefined>,

		/**
		 * Disk throughput in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondOfRead: FormControl<number | null | undefined>,

		/**
		 * Disk throughput in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondOfWrite: FormControl<number | null | undefined>,

		/**
		 * Estimated aggregate storage cost for a 31-day month for this disk.
		 * Type: double
		 */
		monthlyStorageCost: FormControl<number | null | undefined>,

		/** Name of the assessed disk. */
		name: FormControl<string | null | undefined>,

		/**
		 * Number of read operations per second for the disk.
		 * Type: double
		 */
		numberOfReadOperationsPerSecond: FormControl<number | null | undefined>,

		/**
		 * Number of read and write operations per second for the disk.
		 * Type: double
		 */
		numberOfWriteOperationsPerSecond: FormControl<number | null | undefined>,

		/** Recommended Azure size for the disk, given utilization data and preferences set on Assessment. */
		recommendedDiskSize: FormControl<AssessedDiskRecommendedDiskSize | null | undefined>,

		/** Storage type selected for this disk. */
		recommendedDiskType: FormControl<AssessedDiskRecommendedDiskType | null | undefined>,

		/** Whether this disk is suitable for Azure. */
		suitability: FormControl<AssessedDiskSuitability | null | undefined>,

		/** If disk is suitable to be migrate but some conditions/checks were not considered while calculating suitability, this explains the details. */
		suitabilityDetail: FormControl<AssessedDiskSuitabilityDetail | null | undefined>,

		/** If disk is not suitable to be migrated, this explains the reasons and mitigation steps. */
		suitabilityExplanation: FormControl<AssessedDiskSuitabilityExplanation | null | undefined>,
	}
	export function CreateAssessedDiskFormGroup() {
		return new FormGroup<AssessedDiskFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			gigabytesForRecommendedDiskSize: new FormControl<number | null | undefined>(undefined),
			gigabytesProvisioned: new FormControl<number | null | undefined>(undefined),
			megabytesPerSecondOfRead: new FormControl<number | null | undefined>(undefined),
			megabytesPerSecondOfWrite: new FormControl<number | null | undefined>(undefined),
			monthlyStorageCost: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfReadOperationsPerSecond: new FormControl<number | null | undefined>(undefined),
			numberOfWriteOperationsPerSecond: new FormControl<number | null | undefined>(undefined),
			recommendedDiskSize: new FormControl<AssessedDiskRecommendedDiskSize | null | undefined>(undefined),
			recommendedDiskType: new FormControl<AssessedDiskRecommendedDiskType | null | undefined>(undefined),
			suitability: new FormControl<AssessedDiskSuitability | null | undefined>(undefined),
			suitabilityDetail: new FormControl<AssessedDiskSuitabilityDetail | null | undefined>(undefined),
			suitabilityExplanation: new FormControl<AssessedDiskSuitabilityExplanation | null | undefined>(undefined),
		});

	}

	export enum AssessedDiskRecommendedDiskSize { Unknown = 'Unknown', Standard_S4 = 'Standard_S4', Standard_S6 = 'Standard_S6', Standard_S10 = 'Standard_S10', Standard_S15 = 'Standard_S15', Standard_S20 = 'Standard_S20', Standard_S30 = 'Standard_S30', Standard_S40 = 'Standard_S40', Standard_S50 = 'Standard_S50', Premium_P4 = 'Premium_P4', Premium_P6 = 'Premium_P6', Premium_P10 = 'Premium_P10', Premium_P15 = 'Premium_P15', Premium_P20 = 'Premium_P20', Premium_P30 = 'Premium_P30', Premium_P40 = 'Premium_P40', Premium_P50 = 'Premium_P50', Standard_S60 = 'Standard_S60', Standard_S70 = 'Standard_S70', Standard_S80 = 'Standard_S80', Premium_P60 = 'Premium_P60', Premium_P70 = 'Premium_P70', Premium_P80 = 'Premium_P80', StandardSSD_E10 = 'StandardSSD_E10', StandardSSD_E15 = 'StandardSSD_E15', StandardSSD_E20 = 'StandardSSD_E20', StandardSSD_E30 = 'StandardSSD_E30', StandardSSD_E40 = 'StandardSSD_E40', StandardSSD_E50 = 'StandardSSD_E50', StandardSSD_E60 = 'StandardSSD_E60', StandardSSD_E70 = 'StandardSSD_E70', StandardSSD_E80 = 'StandardSSD_E80', StandardSSD_E4 = 'StandardSSD_E4', StandardSSD_E6 = 'StandardSSD_E6' }

	export enum AssessedDiskRecommendedDiskType { Unknown = 'Unknown', Standard = 'Standard', Premium = 'Premium', StandardSSD = 'StandardSSD', StandardOrPremium = 'StandardOrPremium' }

	export enum AssessedDiskSuitability { Unknown = 'Unknown', NotSuitable = 'NotSuitable', Suitable = 'Suitable', ConditionallySuitable = 'ConditionallySuitable', ReadinessUnknown = 'ReadinessUnknown' }

	export enum AssessedDiskSuitabilityDetail { None = 'None', NumberOfReadOperationsPerSecondMissing = 'NumberOfReadOperationsPerSecondMissing', NumberOfWriteOperationsPerSecondMissing = 'NumberOfWriteOperationsPerSecondMissing', MegabytesPerSecondOfReadMissing = 'MegabytesPerSecondOfReadMissing', MegabytesPerSecondOfWriteMissing = 'MegabytesPerSecondOfWriteMissing', DiskGigabytesConsumedMissing = 'DiskGigabytesConsumedMissing', DiskGigabytesProvisionedMissing = 'DiskGigabytesProvisionedMissing', NumberOfReadOperationsPerSecondOutOfRange = 'NumberOfReadOperationsPerSecondOutOfRange', NumberOfWriteOperationsPerSecondOutOfRange = 'NumberOfWriteOperationsPerSecondOutOfRange', MegabytesPerSecondOfReadOutOfRange = 'MegabytesPerSecondOfReadOutOfRange', MegabytesPerSecondOfWriteOutOfRange = 'MegabytesPerSecondOfWriteOutOfRange', DiskGigabytesConsumedOutOfRange = 'DiskGigabytesConsumedOutOfRange', DiskGigabytesProvisionedOutOfRange = 'DiskGigabytesProvisionedOutOfRange' }

	export enum AssessedDiskSuitabilityExplanation { Unknown = 'Unknown', NotApplicable = 'NotApplicable', DiskSizeGreaterThanSupported = 'DiskSizeGreaterThanSupported', NoSuitableDiskSizeForIops = 'NoSuitableDiskSizeForIops', NoSuitableDiskSizeForThroughput = 'NoSuitableDiskSizeForThroughput', NoDiskSizeFoundInSelectedLocation = 'NoDiskSizeFoundInSelectedLocation', NoDiskSizeFoundForSelectedRedundancy = 'NoDiskSizeFoundForSelectedRedundancy', InternalErrorOccurredForDiskEvaluation = 'InternalErrorOccurredForDiskEvaluation', NoEaPriceFoundForDiskSize = 'NoEaPriceFoundForDiskSize' }


	/** A machine evaluated as part of an assessment. */
	export interface AssessedMachine {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Path reference to this assessed machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName} */
		id?: string | null;

		/** Name of the machine. */
		name?: string | null;

		/** Properties of an assessed machine. */
		properties?: AssessedMachineProperties;

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines]. */
		type?: string | null;
	}

	/** A machine evaluated as part of an assessment. */
	export interface AssessedMachineFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,

		/** Path reference to this assessed machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName} */
		id: FormControl<string | null | undefined>,

		/** Name of the machine. */
		name: FormControl<string | null | undefined>,

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines]. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssessedMachineFormGroup() {
		return new FormGroup<AssessedMachineFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an assessed machine. */
	export interface AssessedMachineProperties {

		/** Boot type of the machine. */
		bootType?: AssessedMachinePropertiesBootType | null;

		/**
		 * Confidence rating of assessed machine.
		 * Type: double
		 */
		confidenceRatingInPercentage?: number | null;

		/** Time when this machine was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: Date | null;

		/** ARM ID of the discovered machine. */
		datacenterMachineArmId?: string | null;

		/** ARM ID of the discovered datacenter. */
		datacenterManagementServerArmId?: string | null;

		/** Name of the server hosting the datacenter management solution. */
		datacenterManagementServerName?: string | null;

		/** Description of the machine */
		description?: string | null;

		/** Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object. */
		disks?: {[id: string]: AssessedDisk };

		/** User readable name of the machine as defined by the user in their private datacenter. */
		displayName?: string | null;

		/**
		 * Memory in Megabytes.
		 * Type: double
		 */
		megabytesOfMemory?: number | null;

		/**
		 * Megabytes of memory in the Recommended Azure VM Size.
		 * Type: double
		 */
		megabytesOfMemoryForRecommendedSize?: number | null;

		/**
		 * Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyBandwidthCost?: number | null;

		/**
		 * Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size.
		 * Type: double
		 */
		monthlyComputeCostForRecommendedSize?: number | null;

		/**
		 * Monthly premium storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyPremiumStorageCost?: number | null;

		/**
		 * Monthly standard SSD storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStandardSSDStorageCost?: number | null;

		/**
		 * Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStorageCost?: number | null;

		/** Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object. */
		networkAdapters?: {[id: string]: AssessedNetworkAdapter };

		/**
		 * Processor count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores?: number | null;

		/**
		 * Number of CPU cores in the Recommended Azure VM Size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCoresForRecommendedSize?: number | null;

		/** Operating System name of the machine. */
		operatingSystemName?: string | null;

		/** Operating System type of the machine. */
		operatingSystemType?: string | null;

		/** Operating System version of the machine. */
		operatingSystemVersion?: string | null;

		/**
		 * Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
		 * Type: double
		 */
		percentageCoresUtilization?: number | null;

		/**
		 * Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
		 * Type: double
		 */
		percentageMemoryUtilization?: number | null;

		/** Recommended Azure size for this machine. */
		recommendedSize?: AssessedMachinePropertiesRecommendedSize | null;

		/** Whether machine is suitable for migration to Azure. */
		suitability?: AssessedDiskSuitability | null;

		/** If machine is not suitable for cloud, this explains the reasons. */
		suitabilityDetail?: AssessedMachinePropertiesSuitabilityDetail | null;

		/** If machine is not ready to be migrated, this explains the reasons and mitigation steps. */
		suitabilityExplanation?: AssessedMachinePropertiesSuitabilityExplanation | null;

		/** Time when this machine was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: Date | null;
	}

	/** Properties of an assessed machine. */
	export interface AssessedMachinePropertiesFormProperties {

		/** Boot type of the machine. */
		bootType: FormControl<AssessedMachinePropertiesBootType | null | undefined>,

		/**
		 * Confidence rating of assessed machine.
		 * Type: double
		 */
		confidenceRatingInPercentage: FormControl<number | null | undefined>,

		/** Time when this machine was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** ARM ID of the discovered machine. */
		datacenterMachineArmId: FormControl<string | null | undefined>,

		/** ARM ID of the discovered datacenter. */
		datacenterManagementServerArmId: FormControl<string | null | undefined>,

		/** Name of the server hosting the datacenter management solution. */
		datacenterManagementServerName: FormControl<string | null | undefined>,

		/** Description of the machine */
		description: FormControl<string | null | undefined>,

		/** Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object. */
		disks: FormControl<{[id: string]: AssessedDisk } | null | undefined>,

		/** User readable name of the machine as defined by the user in their private datacenter. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Memory in Megabytes.
		 * Type: double
		 */
		megabytesOfMemory: FormControl<number | null | undefined>,

		/**
		 * Megabytes of memory in the Recommended Azure VM Size.
		 * Type: double
		 */
		megabytesOfMemoryForRecommendedSize: FormControl<number | null | undefined>,

		/**
		 * Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyBandwidthCost: FormControl<number | null | undefined>,

		/**
		 * Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size.
		 * Type: double
		 */
		monthlyComputeCostForRecommendedSize: FormControl<number | null | undefined>,

		/**
		 * Monthly premium storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyPremiumStorageCost: FormControl<number | null | undefined>,

		/**
		 * Monthly standard SSD storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStandardSSDStorageCost: FormControl<number | null | undefined>,

		/**
		 * Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStorageCost: FormControl<number | null | undefined>,

		/** Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object. */
		networkAdapters: FormControl<{[id: string]: AssessedNetworkAdapter } | null | undefined>,

		/**
		 * Processor count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores: FormControl<number | null | undefined>,

		/**
		 * Number of CPU cores in the Recommended Azure VM Size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCoresForRecommendedSize: FormControl<number | null | undefined>,

		/** Operating System name of the machine. */
		operatingSystemName: FormControl<string | null | undefined>,

		/** Operating System type of the machine. */
		operatingSystemType: FormControl<string | null | undefined>,

		/** Operating System version of the machine. */
		operatingSystemVersion: FormControl<string | null | undefined>,

		/**
		 * Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
		 * Type: double
		 */
		percentageCoresUtilization: FormControl<number | null | undefined>,

		/**
		 * Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
		 * Type: double
		 */
		percentageMemoryUtilization: FormControl<number | null | undefined>,

		/** Recommended Azure size for this machine. */
		recommendedSize: FormControl<AssessedMachinePropertiesRecommendedSize | null | undefined>,

		/** Whether machine is suitable for migration to Azure. */
		suitability: FormControl<AssessedDiskSuitability | null | undefined>,

		/** If machine is not suitable for cloud, this explains the reasons. */
		suitabilityDetail: FormControl<AssessedMachinePropertiesSuitabilityDetail | null | undefined>,

		/** If machine is not ready to be migrated, this explains the reasons and mitigation steps. */
		suitabilityExplanation: FormControl<AssessedMachinePropertiesSuitabilityExplanation | null | undefined>,

		/** Time when this machine was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAssessedMachinePropertiesFormGroup() {
		return new FormGroup<AssessedMachinePropertiesFormProperties>({
			bootType: new FormControl<AssessedMachinePropertiesBootType | null | undefined>(undefined),
			confidenceRatingInPercentage: new FormControl<number | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			datacenterMachineArmId: new FormControl<string | null | undefined>(undefined),
			datacenterManagementServerArmId: new FormControl<string | null | undefined>(undefined),
			datacenterManagementServerName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disks: new FormControl<{[id: string]: AssessedDisk } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			megabytesOfMemory: new FormControl<number | null | undefined>(undefined),
			megabytesOfMemoryForRecommendedSize: new FormControl<number | null | undefined>(undefined),
			monthlyBandwidthCost: new FormControl<number | null | undefined>(undefined),
			monthlyComputeCostForRecommendedSize: new FormControl<number | null | undefined>(undefined),
			monthlyPremiumStorageCost: new FormControl<number | null | undefined>(undefined),
			monthlyStandardSSDStorageCost: new FormControl<number | null | undefined>(undefined),
			monthlyStorageCost: new FormControl<number | null | undefined>(undefined),
			networkAdapters: new FormControl<{[id: string]: AssessedNetworkAdapter } | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined),
			numberOfCoresForRecommendedSize: new FormControl<number | null | undefined>(undefined),
			operatingSystemName: new FormControl<string | null | undefined>(undefined),
			operatingSystemType: new FormControl<string | null | undefined>(undefined),
			operatingSystemVersion: new FormControl<string | null | undefined>(undefined),
			percentageCoresUtilization: new FormControl<number | null | undefined>(undefined),
			percentageMemoryUtilization: new FormControl<number | null | undefined>(undefined),
			recommendedSize: new FormControl<AssessedMachinePropertiesRecommendedSize | null | undefined>(undefined),
			suitability: new FormControl<AssessedDiskSuitability | null | undefined>(undefined),
			suitabilityDetail: new FormControl<AssessedMachinePropertiesSuitabilityDetail | null | undefined>(undefined),
			suitabilityExplanation: new FormControl<AssessedMachinePropertiesSuitabilityExplanation | null | undefined>(undefined),
			updatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssessedMachinePropertiesBootType { Unknown = 'Unknown', EFI = 'EFI', BIOS = 'BIOS' }


	/** A network adapter assessed for an assessment. */
	export interface AssessedNetworkAdapter {

		/** User friendly name of the assessed network adapter. */
		displayName?: string | null;

		/** List of IP Addresses on the network adapter. */
		ipAddresses?: Array<string>;

		/** MAC Address of the network adapter. */
		macAddress?: string | null;

		/**
		 * Adapter throughput for incoming traffic in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondReceived?: number | null;

		/**
		 * Adapter throughput for outgoing traffic in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondTransmitted?: number | null;

		/**
		 * Monthly cost estimate for network bandwidth used by this network adapter.
		 * Type: double
		 */
		monthlyBandwidthCosts?: number | null;

		/**
		 * Gigabytes transmitted through this adapter each month.
		 * Type: double
		 */
		netGigabytesTransmittedPerMonth?: number | null;

		/** Whether this adapter is suitable for Azure. */
		suitability?: AssessedDiskSuitability | null;

		/** If network adapter is not suitable for cloud, this explains the reasons. */
		suitabilityDetail?: AssessedNetworkAdapterSuitabilityDetail | null;

		/** If network adapter is suitable, this explains the reasons and mitigation steps. */
		suitabilityExplanation?: AssessedNetworkAdapterSuitabilityExplanation | null;
	}

	/** A network adapter assessed for an assessment. */
	export interface AssessedNetworkAdapterFormProperties {

		/** User friendly name of the assessed network adapter. */
		displayName: FormControl<string | null | undefined>,

		/** MAC Address of the network adapter. */
		macAddress: FormControl<string | null | undefined>,

		/**
		 * Adapter throughput for incoming traffic in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondReceived: FormControl<number | null | undefined>,

		/**
		 * Adapter throughput for outgoing traffic in MegaBytes per second.
		 * Type: double
		 */
		megabytesPerSecondTransmitted: FormControl<number | null | undefined>,

		/**
		 * Monthly cost estimate for network bandwidth used by this network adapter.
		 * Type: double
		 */
		monthlyBandwidthCosts: FormControl<number | null | undefined>,

		/**
		 * Gigabytes transmitted through this adapter each month.
		 * Type: double
		 */
		netGigabytesTransmittedPerMonth: FormControl<number | null | undefined>,

		/** Whether this adapter is suitable for Azure. */
		suitability: FormControl<AssessedDiskSuitability | null | undefined>,

		/** If network adapter is not suitable for cloud, this explains the reasons. */
		suitabilityDetail: FormControl<AssessedNetworkAdapterSuitabilityDetail | null | undefined>,

		/** If network adapter is suitable, this explains the reasons and mitigation steps. */
		suitabilityExplanation: FormControl<AssessedNetworkAdapterSuitabilityExplanation | null | undefined>,
	}
	export function CreateAssessedNetworkAdapterFormGroup() {
		return new FormGroup<AssessedNetworkAdapterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			megabytesPerSecondReceived: new FormControl<number | null | undefined>(undefined),
			megabytesPerSecondTransmitted: new FormControl<number | null | undefined>(undefined),
			monthlyBandwidthCosts: new FormControl<number | null | undefined>(undefined),
			netGigabytesTransmittedPerMonth: new FormControl<number | null | undefined>(undefined),
			suitability: new FormControl<AssessedDiskSuitability | null | undefined>(undefined),
			suitabilityDetail: new FormControl<AssessedNetworkAdapterSuitabilityDetail | null | undefined>(undefined),
			suitabilityExplanation: new FormControl<AssessedNetworkAdapterSuitabilityExplanation | null | undefined>(undefined),
		});

	}

	export enum AssessedNetworkAdapterSuitabilityDetail { None = 'None', MegabytesOfDataTransmittedMissing = 'MegabytesOfDataTransmittedMissing', MegabytesOfDataTransmittedOutOfRange = 'MegabytesOfDataTransmittedOutOfRange' }

	export enum AssessedNetworkAdapterSuitabilityExplanation { Unknown = 'Unknown', NotApplicable = 'NotApplicable', InternalErrorOccurred = 'InternalErrorOccurred' }

	export enum AssessedMachinePropertiesRecommendedSize { Unknown = 'Unknown', Basic_A0 = 'Basic_A0', Basic_A1 = 'Basic_A1', Basic_A2 = 'Basic_A2', Basic_A3 = 'Basic_A3', Basic_A4 = 'Basic_A4', Standard_A0 = 'Standard_A0', Standard_A1 = 'Standard_A1', Standard_A2 = 'Standard_A2', Standard_A3 = 'Standard_A3', Standard_A4 = 'Standard_A4', Standard_A5 = 'Standard_A5', Standard_A6 = 'Standard_A6', Standard_A7 = 'Standard_A7', Standard_A8 = 'Standard_A8', Standard_A9 = 'Standard_A9', Standard_A10 = 'Standard_A10', Standard_A11 = 'Standard_A11', Standard_A1_v2 = 'Standard_A1_v2', Standard_A2_v2 = 'Standard_A2_v2', Standard_A4_v2 = 'Standard_A4_v2', Standard_A8_v2 = 'Standard_A8_v2', Standard_A2m_v2 = 'Standard_A2m_v2', Standard_A4m_v2 = 'Standard_A4m_v2', Standard_A8m_v2 = 'Standard_A8m_v2', Standard_D1 = 'Standard_D1', Standard_D2 = 'Standard_D2', Standard_D3 = 'Standard_D3', Standard_D4 = 'Standard_D4', Standard_D11 = 'Standard_D11', Standard_D12 = 'Standard_D12', Standard_D13 = 'Standard_D13', Standard_D14 = 'Standard_D14', Standard_D1_v2 = 'Standard_D1_v2', Standard_D2_v2 = 'Standard_D2_v2', Standard_D3_v2 = 'Standard_D3_v2', Standard_D4_v2 = 'Standard_D4_v2', Standard_D5_v2 = 'Standard_D5_v2', Standard_D11_v2 = 'Standard_D11_v2', Standard_D12_v2 = 'Standard_D12_v2', Standard_D13_v2 = 'Standard_D13_v2', Standard_D14_v2 = 'Standard_D14_v2', Standard_D15_v2 = 'Standard_D15_v2', Standard_DS1 = 'Standard_DS1', Standard_DS2 = 'Standard_DS2', Standard_DS3 = 'Standard_DS3', Standard_DS4 = 'Standard_DS4', Standard_DS11 = 'Standard_DS11', Standard_DS12 = 'Standard_DS12', Standard_DS13 = 'Standard_DS13', Standard_DS14 = 'Standard_DS14', Standard_DS1_v2 = 'Standard_DS1_v2', Standard_DS2_v2 = 'Standard_DS2_v2', Standard_DS3_v2 = 'Standard_DS3_v2', Standard_DS4_v2 = 'Standard_DS4_v2', Standard_DS5_v2 = 'Standard_DS5_v2', Standard_DS11_v2 = 'Standard_DS11_v2', Standard_DS12_v2 = 'Standard_DS12_v2', Standard_DS13_v2 = 'Standard_DS13_v2', Standard_DS14_v2 = 'Standard_DS14_v2', Standard_DS15_v2 = 'Standard_DS15_v2', Standard_F1 = 'Standard_F1', Standard_F2 = 'Standard_F2', Standard_F4 = 'Standard_F4', Standard_F8 = 'Standard_F8', Standard_F16 = 'Standard_F16', Standard_F1s = 'Standard_F1s', Standard_F2s = 'Standard_F2s', Standard_F4s = 'Standard_F4s', Standard_F8s = 'Standard_F8s', Standard_F16s = 'Standard_F16s', Standard_G1 = 'Standard_G1', Standard_G2 = 'Standard_G2', Standard_G3 = 'Standard_G3', Standard_G4 = 'Standard_G4', Standard_G5 = 'Standard_G5', Standard_GS1 = 'Standard_GS1', Standard_GS2 = 'Standard_GS2', Standard_GS3 = 'Standard_GS3', Standard_GS4 = 'Standard_GS4', Standard_GS5 = 'Standard_GS5', Standard_H8 = 'Standard_H8', Standard_H16 = 'Standard_H16', Standard_H8m = 'Standard_H8m', Standard_H16m = 'Standard_H16m', Standard_H16r = 'Standard_H16r', Standard_H16mr = 'Standard_H16mr', Standard_L4s = 'Standard_L4s', Standard_L8s = 'Standard_L8s', Standard_L16s = 'Standard_L16s', Standard_L32s = 'Standard_L32s', Standard_D2s_v3 = 'Standard_D2s_v3', Standard_D4s_v3 = 'Standard_D4s_v3', Standard_D8s_v3 = 'Standard_D8s_v3', Standard_D16s_v3 = 'Standard_D16s_v3', Standard_D32s_v3 = 'Standard_D32s_v3', Standard_D64s_v3 = 'Standard_D64s_v3', Standard_D2_v3 = 'Standard_D2_v3', Standard_D4_v3 = 'Standard_D4_v3', Standard_D8_v3 = 'Standard_D8_v3', Standard_D16_v3 = 'Standard_D16_v3', Standard_D32_v3 = 'Standard_D32_v3', Standard_D64_v3 = 'Standard_D64_v3', Standard_F2s_v2 = 'Standard_F2s_v2', Standard_F4s_v2 = 'Standard_F4s_v2', Standard_F8s_v2 = 'Standard_F8s_v2', Standard_F16s_v2 = 'Standard_F16s_v2', Standard_F32s_v2 = 'Standard_F32s_v2', Standard_F64s_v2 = 'Standard_F64s_v2', Standard_F72s_v2 = 'Standard_F72s_v2', Standard_E2_v3 = 'Standard_E2_v3', Standard_E4_v3 = 'Standard_E4_v3', Standard_E8_v3 = 'Standard_E8_v3', Standard_E16_v3 = 'Standard_E16_v3', Standard_E32_v3 = 'Standard_E32_v3', Standard_E64_v3 = 'Standard_E64_v3', Standard_E2s_v3 = 'Standard_E2s_v3', Standard_E4s_v3 = 'Standard_E4s_v3', Standard_E8s_v3 = 'Standard_E8s_v3', Standard_E16s_v3 = 'Standard_E16s_v3', Standard_E32s_v3 = 'Standard_E32s_v3', Standard_E64s_v3 = 'Standard_E64s_v3', Standard_M64s = 'Standard_M64s', Standard_M64ms = 'Standard_M64ms', Standard_M128s = 'Standard_M128s', Standard_M128ms = 'Standard_M128ms' }

	export enum AssessedMachinePropertiesSuitabilityDetail { None = 'None', RecommendedSizeHasLessNetworkAdapters = 'RecommendedSizeHasLessNetworkAdapters', CannotReportComputeCost = 'CannotReportComputeCost', CannotReportStorageCost = 'CannotReportStorageCost', CannotReportBandwidthCosts = 'CannotReportBandwidthCosts', PercentageOfCoresUtilizedMissing = 'PercentageOfCoresUtilizedMissing', PercentageOfMemoryUtilizedMissing = 'PercentageOfMemoryUtilizedMissing', PercentageOfCoresUtilizedOutOfRange = 'PercentageOfCoresUtilizedOutOfRange', PercentageOfMemoryUtilizedOutOfRange = 'PercentageOfMemoryUtilizedOutOfRange' }

	export enum AssessedMachinePropertiesSuitabilityExplanation { Unknown = 'Unknown', NotApplicable = 'NotApplicable', GuestOperatingSystemArchitectureNotSupported = 'GuestOperatingSystemArchitectureNotSupported', GuestOperatingSystemNotSupported = 'GuestOperatingSystemNotSupported', BootTypeNotSupported = 'BootTypeNotSupported', MoreDisksThanSupported = 'MoreDisksThanSupported', NoSuitableVmSizeFound = 'NoSuitableVmSizeFound', OneOrMoreDisksNotSuitable = 'OneOrMoreDisksNotSuitable', OneOrMoreAdaptersNotSuitable = 'OneOrMoreAdaptersNotSuitable', InternalErrorOccurredDuringComputeEvaluation = 'InternalErrorOccurredDuringComputeEvaluation', InternalErrorOccurredDuringStorageEvaluation = 'InternalErrorOccurredDuringStorageEvaluation', InternalErrorOccurredDuringNetworkEvaluation = 'InternalErrorOccurredDuringNetworkEvaluation', NoVmSizeSupportsStoragePerformance = 'NoVmSizeSupportsStoragePerformance', NoVmSizeSupportsNetworkPerformance = 'NoVmSizeSupportsNetworkPerformance', NoVmSizeForSelectedPricingTier = 'NoVmSizeForSelectedPricingTier', NoVmSizeForSelectedAzureLocation = 'NoVmSizeForSelectedAzureLocation', CheckRedHatLinuxVersion = 'CheckRedHatLinuxVersion', CheckOpenSuseLinuxVersion = 'CheckOpenSuseLinuxVersion', CheckWindowsServer2008R2Version = 'CheckWindowsServer2008R2Version', CheckCentOsVersion = 'CheckCentOsVersion', CheckDebianLinuxVersion = 'CheckDebianLinuxVersion', CheckSuseLinuxVersion = 'CheckSuseLinuxVersion', CheckOracleLinuxVersion = 'CheckOracleLinuxVersion', CheckUbuntuLinuxVersion = 'CheckUbuntuLinuxVersion', CheckCoreOsLinuxVersion = 'CheckCoreOsLinuxVersion', WindowsServerVersionConditionallySupported = 'WindowsServerVersionConditionallySupported', NoGuestOperatingSystemConditionallySupported = 'NoGuestOperatingSystemConditionallySupported', WindowsClientVersionsConditionallySupported = 'WindowsClientVersionsConditionallySupported', BootTypeUnknown = 'BootTypeUnknown', GuestOperatingSystemUnknown = 'GuestOperatingSystemUnknown', WindowsServerVersionsSupportedWithCaveat = 'WindowsServerVersionsSupportedWithCaveat', WindowsOSNoLongerUnderMSSupport = 'WindowsOSNoLongerUnderMSSupport', EndorsedWithConditionsLinuxDistributions = 'EndorsedWithConditionsLinuxDistributions', UnendorsedLinuxDistributions = 'UnendorsedLinuxDistributions', NoVmSizeForStandardPricingTier = 'NoVmSizeForStandardPricingTier', NoVmSizeForBasicPricingTier = 'NoVmSizeForBasicPricingTier' }


	/** List of assessed machines. */
	export interface AssessedMachineResultList {
		nextLink?: string | null;

		/** List of assessed machines. */
		value?: Array<AssessedMachine>;
	}

	/** List of assessed machines. */
	export interface AssessedMachineResultListFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAssessedMachineResultListFormGroup() {
		return new FormGroup<AssessedMachineResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An assessment created for a group in the Migration project. */
	export interface Assessment {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessment/{assessmentName} */
		id?: string | null;

		/** Unique name of an assessment. */
		name?: string | null;

		/**
		 * Properties of an assessment.
		 * Required
		 */
		properties: AssessmentProperties;

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments]. */
		type?: string | null;
	}

	/** An assessment created for a group in the Migration project. */
	export interface AssessmentFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,

		/** Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessment/{assessmentName} */
		id: FormControl<string | null | undefined>,

		/** Unique name of an assessment. */
		name: FormControl<string | null | undefined>,

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments]. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentFormGroup() {
		return new FormGroup<AssessmentFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an assessment. */
	export interface AssessmentProperties {

		/**
		 * Storage type selected for this disk.
		 * Required
		 */
		azureDiskType: AssessedDiskRecommendedDiskType;

		/**
		 * AHUB discount on windows virtual machines.
		 * Required
		 */
		azureHybridUseBenefit: AssessmentPropertiesAzureHybridUseBenefit;

		/**
		 * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
		 * Required
		 */
		azureLocation: AssessmentPropertiesAzureLocation;

		/**
		 * Offer code according to which cost estimation is done.
		 * Required
		 */
		azureOfferCode: AssessmentPropertiesAzureOfferCode;

		/**
		 * Pricing tier for Size evaluation.
		 * Required
		 */
		azurePricingTier: AssessmentPropertiesAzurePricingTier;

		/**
		 * Storage Redundancy type offered by Azure.
		 * Required
		 */
		azureStorageRedundancy: AssessmentPropertiesAzureStorageRedundancy;

		/**
		 * List of azure VM families.
		 * Required
		 */
		azureVmFamilies: Array<string>;

		/**
		 * Confidence rating percentage for assessment. Can be in the range [0, 100].
		 * Type: double
		 */
		confidenceRatingInPercentage?: number | null;

		/** Time when this project was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: Date | null;

		/**
		 * Currency to report prices in.
		 * Required
		 */
		currency: AssessmentPropertiesCurrency;

		/**
		 * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
		 * Required
		 * Type: double
		 */
		discountPercentage: number;

		/** Enterprise agreement subscription arm id. */
		eaSubscriptionId?: string | null;

		/**
		 * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyBandwidthCost?: number | null;

		/**
		 * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyComputeCost?: number | null;

		/**
		 * Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyPremiumStorageCost?: number | null;

		/**
		 * Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStandardSSDStorageCost?: number | null;

		/**
		 * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStorageCost?: number | null;

		/**
		 * Number of assessed machines part of this assessment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfMachines?: number | null;

		/**
		 * Percentile of performance data used to recommend Azure size.
		 * Required
		 */
		percentile: AssessmentPropertiesPercentile;

		/** End time to consider performance data for assessment */
		perfDataEndTime?: Date | null;

		/** Start time to consider performance data for assessment */
		perfDataStartTime?: Date | null;

		/** Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format. */
		pricesTimestamp?: Date | null;

		/**
		 * Azure reserved instance.
		 * Required
		 */
		reservedInstance: AssessmentPropertiesReservedInstance;

		/**
		 * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
		 * Required
		 * Type: double
		 */
		scalingFactor: number;

		/**
		 * Assessment sizing criterion.
		 * Required
		 */
		sizingCriterion: AssessmentPropertiesSizingCriterion;

		/**
		 * User configurable setting that describes the status of the assessment.
		 * Required
		 */
		stage: AssessmentPropertiesStage;

		/** Whether the assessment has been created and is valid. */
		status?: AssessmentPropertiesStatus | null;

		/**
		 * Time range of performance data used to recommend a size.
		 * Required
		 */
		timeRange: AssessmentPropertiesTimeRange;

		/** Time when this project was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: Date | null;

		/** Required */
		vmUptime: VmUptime;
	}

	/** Properties of an assessment. */
	export interface AssessmentPropertiesFormProperties {

		/**
		 * Storage type selected for this disk.
		 * Required
		 */
		azureDiskType: FormControl<AssessedDiskRecommendedDiskType | null | undefined>,

		/**
		 * AHUB discount on windows virtual machines.
		 * Required
		 */
		azureHybridUseBenefit: FormControl<AssessmentPropertiesAzureHybridUseBenefit | null | undefined>,

		/**
		 * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
		 * Required
		 */
		azureLocation: FormControl<AssessmentPropertiesAzureLocation | null | undefined>,

		/**
		 * Offer code according to which cost estimation is done.
		 * Required
		 */
		azureOfferCode: FormControl<AssessmentPropertiesAzureOfferCode | null | undefined>,

		/**
		 * Pricing tier for Size evaluation.
		 * Required
		 */
		azurePricingTier: FormControl<AssessmentPropertiesAzurePricingTier | null | undefined>,

		/**
		 * Storage Redundancy type offered by Azure.
		 * Required
		 */
		azureStorageRedundancy: FormControl<AssessmentPropertiesAzureStorageRedundancy | null | undefined>,

		/**
		 * Confidence rating percentage for assessment. Can be in the range [0, 100].
		 * Type: double
		 */
		confidenceRatingInPercentage: FormControl<number | null | undefined>,

		/** Time when this project was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Currency to report prices in.
		 * Required
		 */
		currency: FormControl<AssessmentPropertiesCurrency | null | undefined>,

		/**
		 * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
		 * Required
		 * Type: double
		 */
		discountPercentage: FormControl<number | null | undefined>,

		/** Enterprise agreement subscription arm id. */
		eaSubscriptionId: FormControl<string | null | undefined>,

		/**
		 * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyBandwidthCost: FormControl<number | null | undefined>,

		/**
		 * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyComputeCost: FormControl<number | null | undefined>,

		/**
		 * Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyPremiumStorageCost: FormControl<number | null | undefined>,

		/**
		 * Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStandardSSDStorageCost: FormControl<number | null | undefined>,

		/**
		 * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
		 * Type: double
		 */
		monthlyStorageCost: FormControl<number | null | undefined>,

		/**
		 * Number of assessed machines part of this assessment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfMachines: FormControl<number | null | undefined>,

		/**
		 * Percentile of performance data used to recommend Azure size.
		 * Required
		 */
		percentile: FormControl<AssessmentPropertiesPercentile | null | undefined>,

		/** End time to consider performance data for assessment */
		perfDataEndTime: FormControl<Date | null | undefined>,

		/** Start time to consider performance data for assessment */
		perfDataStartTime: FormControl<Date | null | undefined>,

		/** Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format. */
		pricesTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Azure reserved instance.
		 * Required
		 */
		reservedInstance: FormControl<AssessmentPropertiesReservedInstance | null | undefined>,

		/**
		 * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
		 * Required
		 * Type: double
		 */
		scalingFactor: FormControl<number | null | undefined>,

		/**
		 * Assessment sizing criterion.
		 * Required
		 */
		sizingCriterion: FormControl<AssessmentPropertiesSizingCriterion | null | undefined>,

		/**
		 * User configurable setting that describes the status of the assessment.
		 * Required
		 */
		stage: FormControl<AssessmentPropertiesStage | null | undefined>,

		/** Whether the assessment has been created and is valid. */
		status: FormControl<AssessmentPropertiesStatus | null | undefined>,

		/**
		 * Time range of performance data used to recommend a size.
		 * Required
		 */
		timeRange: FormControl<AssessmentPropertiesTimeRange | null | undefined>,

		/** Time when this project was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentPropertiesFormGroup() {
		return new FormGroup<AssessmentPropertiesFormProperties>({
			azureDiskType: new FormControl<AssessedDiskRecommendedDiskType | null | undefined>(undefined, [Validators.required]),
			azureHybridUseBenefit: new FormControl<AssessmentPropertiesAzureHybridUseBenefit | null | undefined>(undefined, [Validators.required]),
			azureLocation: new FormControl<AssessmentPropertiesAzureLocation | null | undefined>(undefined, [Validators.required]),
			azureOfferCode: new FormControl<AssessmentPropertiesAzureOfferCode | null | undefined>(undefined, [Validators.required]),
			azurePricingTier: new FormControl<AssessmentPropertiesAzurePricingTier | null | undefined>(undefined, [Validators.required]),
			azureStorageRedundancy: new FormControl<AssessmentPropertiesAzureStorageRedundancy | null | undefined>(undefined, [Validators.required]),
			confidenceRatingInPercentage: new FormControl<number | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<AssessmentPropertiesCurrency | null | undefined>(undefined, [Validators.required]),
			discountPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			eaSubscriptionId: new FormControl<string | null | undefined>(undefined),
			monthlyBandwidthCost: new FormControl<number | null | undefined>(undefined),
			monthlyComputeCost: new FormControl<number | null | undefined>(undefined),
			monthlyPremiumStorageCost: new FormControl<number | null | undefined>(undefined),
			monthlyStandardSSDStorageCost: new FormControl<number | null | undefined>(undefined),
			monthlyStorageCost: new FormControl<number | null | undefined>(undefined),
			numberOfMachines: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<AssessmentPropertiesPercentile | null | undefined>(undefined, [Validators.required]),
			perfDataEndTime: new FormControl<Date | null | undefined>(undefined),
			perfDataStartTime: new FormControl<Date | null | undefined>(undefined),
			pricesTimestamp: new FormControl<Date | null | undefined>(undefined),
			reservedInstance: new FormControl<AssessmentPropertiesReservedInstance | null | undefined>(undefined, [Validators.required]),
			scalingFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sizingCriterion: new FormControl<AssessmentPropertiesSizingCriterion | null | undefined>(undefined, [Validators.required]),
			stage: new FormControl<AssessmentPropertiesStage | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AssessmentPropertiesStatus | null | undefined>(undefined),
			timeRange: new FormControl<AssessmentPropertiesTimeRange | null | undefined>(undefined, [Validators.required]),
			updatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssessmentPropertiesAzureHybridUseBenefit { Unknown = 'Unknown', Yes = 'Yes', No = 'No' }

	export enum AssessmentPropertiesAzureLocation { Unknown = 'Unknown', EastAsia = 'EastAsia', SoutheastAsia = 'SoutheastAsia', AustraliaEast = 'AustraliaEast', AustraliaSoutheast = 'AustraliaSoutheast', BrazilSouth = 'BrazilSouth', CanadaCentral = 'CanadaCentral', CanadaEast = 'CanadaEast', WestEurope = 'WestEurope', NorthEurope = 'NorthEurope', CentralIndia = 'CentralIndia', SouthIndia = 'SouthIndia', WestIndia = 'WestIndia', JapanEast = 'JapanEast', JapanWest = 'JapanWest', KoreaCentral = 'KoreaCentral', KoreaSouth = 'KoreaSouth', UkWest = 'UkWest', UkSouth = 'UkSouth', NorthCentralUs = 'NorthCentralUs', EastUs = 'EastUs', WestUs2 = 'WestUs2', SouthCentralUs = 'SouthCentralUs', CentralUs = 'CentralUs', EastUs2 = 'EastUs2', WestUs = 'WestUs', WestCentralUs = 'WestCentralUs', GermanyCentral = 'GermanyCentral', GermanyNortheast = 'GermanyNortheast', ChinaNorth = 'ChinaNorth', ChinaEast = 'ChinaEast', USGovArizona = 'USGovArizona', USGovTexas = 'USGovTexas', USGovIowa = 'USGovIowa', USGovVirginia = 'USGovVirginia', USDoDCentral = 'USDoDCentral', USDoDEast = 'USDoDEast' }

	export enum AssessmentPropertiesAzureOfferCode { Unknown = 'Unknown', MSAZR0003P = 'MSAZR0003P', MSAZR0044P = 'MSAZR0044P', MSAZR0059P = 'MSAZR0059P', MSAZR0060P = 'MSAZR0060P', MSAZR0062P = 'MSAZR0062P', MSAZR0063P = 'MSAZR0063P', MSAZR0064P = 'MSAZR0064P', MSAZR0029P = 'MSAZR0029P', MSAZR0022P = 'MSAZR0022P', MSAZR0023P = 'MSAZR0023P', MSAZR0148P = 'MSAZR0148P', MSAZR0025P = 'MSAZR0025P', MSAZR0036P = 'MSAZR0036P', MSAZR0120P = 'MSAZR0120P', MSAZR0121P = 'MSAZR0121P', MSAZR0122P = 'MSAZR0122P', MSAZR0123P = 'MSAZR0123P', MSAZR0124P = 'MSAZR0124P', MSAZR0125P = 'MSAZR0125P', MSAZR0126P = 'MSAZR0126P', MSAZR0127P = 'MSAZR0127P', MSAZR0128P = 'MSAZR0128P', MSAZR0129P = 'MSAZR0129P', MSAZR0130P = 'MSAZR0130P', MSAZR0111P = 'MSAZR0111P', MSAZR0144P = 'MSAZR0144P', MSAZR0149P = 'MSAZR0149P', MSMCAZR0044P = 'MSMCAZR0044P', MSMCAZR0059P = 'MSMCAZR0059P', MSMCAZR0060P = 'MSMCAZR0060P', MSMCAZR0063P = 'MSMCAZR0063P', MSMCAZR0120P = 'MSMCAZR0120P', MSMCAZR0121P = 'MSMCAZR0121P', MSMCAZR0125P = 'MSMCAZR0125P', MSMCAZR0128P = 'MSMCAZR0128P', MSAZRDE0003P = 'MSAZRDE0003P', MSAZRDE0044P = 'MSAZRDE0044P', MSAZRUSGOV0003P = 'MSAZRUSGOV0003P', EA = 'EA' }

	export enum AssessmentPropertiesAzurePricingTier { Standard = 'Standard', Basic = 'Basic' }

	export enum AssessmentPropertiesAzureStorageRedundancy { Unknown = 'Unknown', LocallyRedundant = 'LocallyRedundant', ZoneRedundant = 'ZoneRedundant', GeoRedundant = 'GeoRedundant', ReadAccessGeoRedundant = 'ReadAccessGeoRedundant' }

	export enum AssessmentPropertiesCurrency { Unknown = 'Unknown', USD = 'USD', DKK = 'DKK', CAD = 'CAD', IDR = 'IDR', JPY = 'JPY', KRW = 'KRW', NZD = 'NZD', NOK = 'NOK', RUB = 'RUB', SAR = 'SAR', ZAR = 'ZAR', SEK = 'SEK', TRY = 'TRY', GBP = 'GBP', MXN = 'MXN', MYR = 'MYR', INR = 'INR', HKD = 'HKD', BRL = 'BRL', TWD = 'TWD', EUR = 'EUR', CHF = 'CHF', ARS = 'ARS', AUD = 'AUD', CNY = 'CNY' }

	export enum AssessmentPropertiesPercentile { Percentile50 = 'Percentile50', Percentile90 = 'Percentile90', Percentile95 = 'Percentile95', Percentile99 = 'Percentile99' }

	export enum AssessmentPropertiesReservedInstance { None = 'None', RI1Year = 'RI1Year', RI3Year = 'RI3Year' }

	export enum AssessmentPropertiesSizingCriterion { PerformanceBased = 'PerformanceBased', AsOnPremises = 'AsOnPremises' }

	export enum AssessmentPropertiesStage { InProgress = 'InProgress', UnderReview = 'UnderReview', Approved = 'Approved' }

	export enum AssessmentPropertiesStatus { Created = 'Created', Updated = 'Updated', Running = 'Running', Completed = 'Completed', Invalid = 'Invalid', OutOfSync = 'OutOfSync', OutDated = 'OutDated' }

	export enum AssessmentPropertiesTimeRange { Day = 'Day', Week = 'Week', Month = 'Month', Custom = 'Custom' }

	export interface VmUptime {

		/** Number of days in a month for VM uptime. */
		daysPerMonth?: string | null;

		/** Number of hours per day for VM uptime. */
		hoursPerDay?: string | null;
	}
	export interface VmUptimeFormProperties {

		/** Number of days in a month for VM uptime. */
		daysPerMonth: FormControl<string | null | undefined>,

		/** Number of hours per day for VM uptime. */
		hoursPerDay: FormControl<string | null | undefined>,
	}
	export function CreateVmUptimeFormGroup() {
		return new FormGroup<VmUptimeFormProperties>({
			daysPerMonth: new FormControl<string | null | undefined>(undefined),
			hoursPerDay: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Assessment options. */
	export interface AssessmentOptions {

		/** Unique identifier of an assessment options. */
		id?: string | null;

		/** Unique name of an assessment options. */
		name?: string | null;

		/**
		 * Assessment options properties.
		 * Required
		 */
		properties: AssessmentOptionsProperties;
	}

	/** Assessment options. */
	export interface AssessmentOptionsFormProperties {

		/** Unique identifier of an assessment options. */
		id: FormControl<string | null | undefined>,

		/** Unique name of an assessment options. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentOptionsFormGroup() {
		return new FormGroup<AssessmentOptionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Assessment options properties. */
	export interface AssessmentOptionsProperties {

		/** List of supported currencies for reserved instances. */
		reservedInstanceSupportedCurrencies?: Array<string>;

		/** List of supported Azure regions for reserved instances. */
		reservedInstanceSupportedLocations?: Array<string>;

		/** List of supported Azure offer codes for reserved instances. */
		reservedInstanceSupportedOffers?: Array<string>;

		/** List of supported VM Families. */
		reservedInstanceVmFamilies?: Array<string>;

		/** Dictionary of VM families grouped by vm family name describing the targeted azure locations of VM family and the category of the family. */
		vmFamilies?: Array<VmFamily>;
	}

	/** Assessment options properties. */
	export interface AssessmentOptionsPropertiesFormProperties {
	}
	export function CreateAssessmentOptionsPropertiesFormGroup() {
		return new FormGroup<AssessmentOptionsPropertiesFormProperties>({
		});

	}


	/** VM family name, the list of targeted azure locations and the category of the family. */
	export interface VmFamily {

		/** Category of the VM family. */
		category?: Array<string>;

		/** Name of the VM family. */
		familyName?: string | null;

		/** List of Azure regions. */
		targetLocations?: Array<string>;
	}

	/** VM family name, the list of targeted azure locations and the category of the family. */
	export interface VmFamilyFormProperties {

		/** Name of the VM family. */
		familyName: FormControl<string | null | undefined>,
	}
	export function CreateVmFamilyFormGroup() {
		return new FormGroup<VmFamilyFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of API operations. */
	export interface AssessmentOptionsResultList {

		/** List of operations. */
		value?: Array<AssessmentOptions>;
	}

	/** List of API operations. */
	export interface AssessmentOptionsResultListFormProperties {
	}
	export function CreateAssessmentOptionsResultListFormGroup() {
		return new FormGroup<AssessmentOptionsResultListFormProperties>({
		});

	}


	/** List of assessments. */
	export interface AssessmentResultList {

		/** List of assessments. */
		value?: Array<Assessment>;
	}

	/** List of assessments. */
	export interface AssessmentResultListFormProperties {
	}
	export function CreateAssessmentResultListFormGroup() {
		return new FormGroup<AssessmentResultListFormProperties>({
		});

	}


	/** An error response from the Azure Migrate service. */
	export interface CloudError {

		/** An error response from the Azure Migrate service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Azure Migrate service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Azure Migrate service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Azure Migrate service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollectorAgentProperties {
		id?: string | null;
		lastHeartbeatUtc?: Date | null;
		spnDetails?: CollectorBodyAgentSpnProperties;
		version?: string | null;
	}
	export interface CollectorAgentPropertiesFormProperties {
		id: FormControl<string | null | undefined>,
		lastHeartbeatUtc: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCollectorAgentPropertiesFormGroup() {
		return new FormGroup<CollectorAgentPropertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastHeartbeatUtc: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollectorBodyAgentSpnProperties {

		/** Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		applicationId?: string | null;

		/** Intended audience for the service principal. */
		audience?: string | null;

		/** AAD Authority URL which was used to request the token for the service principal. */
		authority?: string | null;

		/** Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		objectId?: string | null;

		/** Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		tenantId?: string | null;
	}
	export interface CollectorBodyAgentSpnPropertiesFormProperties {

		/** Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		applicationId: FormControl<string | null | undefined>,

		/** Intended audience for the service principal. */
		audience: FormControl<string | null | undefined>,

		/** AAD Authority URL which was used to request the token for the service principal. */
		authority: FormControl<string | null | undefined>,

		/** Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		objectId: FormControl<string | null | undefined>,

		/** Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateCollectorBodyAgentSpnPropertiesFormGroup() {
		return new FormGroup<CollectorBodyAgentSpnPropertiesFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			authority: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollectorProperties {
		agentProperties?: CollectorAgentProperties;

		/** Time when this collector was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: string | null;

		/** The ARM id of the discovery service site. */
		discoverySiteId?: string | null;

		/** Time when this collector was updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: string | null;
	}
	export interface CollectorPropertiesFormProperties {

		/** Time when this collector was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<string | null | undefined>,

		/** The ARM id of the discovery service site. */
		discoverySiteId: FormControl<string | null | undefined>,

		/** Time when this collector was updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateCollectorPropertiesFormGroup() {
		return new FormGroup<CollectorPropertiesFormProperties>({
			createdTimestamp: new FormControl<string | null | undefined>(undefined),
			discoverySiteId: new FormControl<string | null | undefined>(undefined),
			updatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A disk discovered on a machine. */
	export interface Disk {

		/** User friendly name of the disk. */
		displayName?: string | null;

		/**
		 * Gigabytes of storage provisioned for this disk.
		 * Type: double
		 */
		gigabytesAllocated?: number | null;
	}

	/** A disk discovered on a machine. */
	export interface DiskFormProperties {

		/** User friendly name of the disk. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Gigabytes of storage provisioned for this disk.
		 * Type: double
		 */
		gigabytesAllocated: FormControl<number | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			gigabytesAllocated: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Download URL for assessment report. */
	export interface DownloadUrl {

		/** Hyperlink to download report. */
		assessmentReportUrl?: string | null;

		/** Expiry date of download url. */
		expirationTime?: Date | null;
	}

	/** Download URL for assessment report. */
	export interface DownloadUrlFormProperties {

		/** Hyperlink to download report. */
		assessmentReportUrl: FormControl<string | null | undefined>,

		/** Expiry date of download url. */
		expirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDownloadUrlFormGroup() {
		return new FormGroup<DownloadUrlFormProperties>({
			assessmentReportUrl: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A group created in a Migration project. */
	export interface Group {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} */
		id?: string | null;

		/** Name of the group. */
		name?: string | null;

		/**
		 * Properties of group resource.
		 * Required
		 */
		properties: GroupProperties;

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups]. */
		type?: string | null;
	}

	/** A group created in a Migration project. */
	export interface GroupFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,

		/** Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} */
		id: FormControl<string | null | undefined>,

		/** Name of the group. */
		name: FormControl<string | null | undefined>,

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/groups]. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of group resource. */
	export interface GroupProperties {

		/** If the assessments are in running state. */
		areAssessmentsRunning?: boolean | null;

		/** List of References to Assessments created on this group. */
		assessments?: Array<string>;

		/** Time when this group was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: Date | null;

		/** Whether the group has been created and is valid. */
		groupStatus?: GroupPropertiesGroupStatus | null;

		/**
		 * Number of machines part of this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		machineCount?: number | null;

		/** Time when this group was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: Date | null;
	}

	/** Properties of group resource. */
	export interface GroupPropertiesFormProperties {

		/** If the assessments are in running state. */
		areAssessmentsRunning: FormControl<boolean | null | undefined>,

		/** Time when this group was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** Whether the group has been created and is valid. */
		groupStatus: FormControl<GroupPropertiesGroupStatus | null | undefined>,

		/**
		 * Number of machines part of this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		machineCount: FormControl<number | null | undefined>,

		/** Time when this group was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGroupPropertiesFormGroup() {
		return new FormGroup<GroupPropertiesFormProperties>({
			areAssessmentsRunning: new FormControl<boolean | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			groupStatus: new FormControl<GroupPropertiesGroupStatus | null | undefined>(undefined),
			machineCount: new FormControl<number | null | undefined>(undefined),
			updatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GroupPropertiesGroupStatus { Created = 'Created', Updated = 'Updated', Running = 'Running', Completed = 'Completed', Invalid = 'Invalid' }


	/** Body properties of group update. */
	export interface GroupBodyProperties {

		/** List of machine names that are part of this group. */
		machines?: Array<string>;

		/** Whether to add or remove the machines. */
		operationType?: GroupBodyPropertiesOperationType | null;
	}

	/** Body properties of group update. */
	export interface GroupBodyPropertiesFormProperties {

		/** Whether to add or remove the machines. */
		operationType: FormControl<GroupBodyPropertiesOperationType | null | undefined>,
	}
	export function CreateGroupBodyPropertiesFormGroup() {
		return new FormGroup<GroupBodyPropertiesFormProperties>({
			operationType: new FormControl<GroupBodyPropertiesOperationType | null | undefined>(undefined),
		});

	}

	export enum GroupBodyPropertiesOperationType { Add = 'Add', Remove = 'Remove' }


	/** List of groups. */
	export interface GroupResultList {

		/** List of groups. */
		value?: Array<Group>;
	}

	/** List of groups. */
	export interface GroupResultListFormProperties {
	}
	export function CreateGroupResultListFormGroup() {
		return new FormGroup<GroupResultListFormProperties>({
		});

	}

	export interface HyperVCollector {
		eTag?: string | null;
		id?: string | null;
		name?: string | null;
		properties?: CollectorProperties;
		type?: string | null;
	}
	export interface HyperVCollectorFormProperties {
		eTag: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHyperVCollectorFormGroup() {
		return new FormGroup<HyperVCollectorFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Hyper-V collectors. */
	export interface HyperVCollectorList {

		/** List of Hyper-V collectors. */
		value?: Array<HyperVCollector>;
	}

	/** List of Hyper-V collectors. */
	export interface HyperVCollectorListFormProperties {
	}
	export function CreateHyperVCollectorListFormGroup() {
		return new FormGroup<HyperVCollectorListFormProperties>({
		});

	}


	/** A machine in a migration project. */
	export interface Machine {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Path reference to this machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName} */
		id?: string | null;

		/** Name of the machine. It is a GUID which is unique identifier of machine in private data center. For user-readable name, we have a displayName property on this machine. */
		name?: string | null;

		/** Properties of a machine. */
		properties?: MachineProperties;

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/machines]. */
		type?: string | null;
	}

	/** A machine in a migration project. */
	export interface MachineFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,

		/** Path reference to this machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName} */
		id: FormControl<string | null | undefined>,

		/** Name of the machine. It is a GUID which is unique identifier of machine in private data center. For user-readable name, we have a displayName property on this machine. */
		name: FormControl<string | null | undefined>,

		/** Type of the object = [Microsoft.Migrate/assessmentProjects/machines]. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMachineFormGroup() {
		return new FormGroup<MachineFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a machine. */
	export interface MachineProperties {

		/** Boot type of the machine. */
		bootType?: AssessedMachinePropertiesBootType | null;

		/** Time when this machine was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: Date | null;

		/** ARM ID of the data center as tracked by the Microsoft.OffAzure. */
		datacenterManagementServerArmId?: string | null;

		/** Name of the server hosting the datacenter management solution. */
		datacenterManagementServerName?: string | null;

		/** Description of the machine */
		description?: string | null;

		/** ARM ID of the machine as tracked by the Microsoft.OffAzure. */
		discoveryMachineArmId?: string | null;

		/** Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object */
		disks?: {[id: string]: Disk };

		/** User readable name of the machine as defined by the user in their private datacenter. */
		displayName?: string | null;

		/** List of references to the groups that the machine is member of. */
		groups?: Array<string>;

		/**
		 * Memory in Megabytes.
		 * Type: double
		 */
		megabytesOfMemory?: number | null;

		/** Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object */
		networkAdapters?: {[id: string]: NetworkAdapter };

		/**
		 * Processor count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores?: number | null;

		/** Operating System name of the machine. */
		operatingSystemName?: string | null;

		/** Operating System type of the machine. */
		operatingSystemType?: string | null;

		/** Operating System version of the machine. */
		operatingSystemVersion?: string | null;

		/** Time when this machine was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: Date | null;
	}

	/** Properties of a machine. */
	export interface MachinePropertiesFormProperties {

		/** Boot type of the machine. */
		bootType: FormControl<AssessedMachinePropertiesBootType | null | undefined>,

		/** Time when this machine was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** ARM ID of the data center as tracked by the Microsoft.OffAzure. */
		datacenterManagementServerArmId: FormControl<string | null | undefined>,

		/** Name of the server hosting the datacenter management solution. */
		datacenterManagementServerName: FormControl<string | null | undefined>,

		/** Description of the machine */
		description: FormControl<string | null | undefined>,

		/** ARM ID of the machine as tracked by the Microsoft.OffAzure. */
		discoveryMachineArmId: FormControl<string | null | undefined>,

		/** Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object */
		disks: FormControl<{[id: string]: Disk } | null | undefined>,

		/** User readable name of the machine as defined by the user in their private datacenter. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Memory in Megabytes.
		 * Type: double
		 */
		megabytesOfMemory: FormControl<number | null | undefined>,

		/** Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object */
		networkAdapters: FormControl<{[id: string]: NetworkAdapter } | null | undefined>,

		/**
		 * Processor count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfCores: FormControl<number | null | undefined>,

		/** Operating System name of the machine. */
		operatingSystemName: FormControl<string | null | undefined>,

		/** Operating System type of the machine. */
		operatingSystemType: FormControl<string | null | undefined>,

		/** Operating System version of the machine. */
		operatingSystemVersion: FormControl<string | null | undefined>,

		/** Time when this machine was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMachinePropertiesFormGroup() {
		return new FormGroup<MachinePropertiesFormProperties>({
			bootType: new FormControl<AssessedMachinePropertiesBootType | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			datacenterManagementServerArmId: new FormControl<string | null | undefined>(undefined),
			datacenterManagementServerName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discoveryMachineArmId: new FormControl<string | null | undefined>(undefined),
			disks: new FormControl<{[id: string]: Disk } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			megabytesOfMemory: new FormControl<number | null | undefined>(undefined),
			networkAdapters: new FormControl<{[id: string]: NetworkAdapter } | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined),
			operatingSystemName: new FormControl<string | null | undefined>(undefined),
			operatingSystemType: new FormControl<string | null | undefined>(undefined),
			operatingSystemVersion: new FormControl<string | null | undefined>(undefined),
			updatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A network adapter discovered on a machine. */
	export interface NetworkAdapter {

		/** User friendly name of the network adapter. */
		displayName?: string | null;

		/** List of IP Addresses on the network adapter. */
		ipAddresses?: Array<string>;

		/** MAC Address of the network adapter. */
		macAddress?: string | null;
	}

	/** A network adapter discovered on a machine. */
	export interface NetworkAdapterFormProperties {

		/** User friendly name of the network adapter. */
		displayName: FormControl<string | null | undefined>,

		/** MAC Address of the network adapter. */
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAdapterFormGroup() {
		return new FormGroup<NetworkAdapterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of machines. */
	export interface MachineResultList {
		nextLink?: string | null;

		/** List of machines. */
		value?: Array<Machine>;
	}

	/** List of machines. */
	export interface MachineResultListFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMachineResultListFormGroup() {
		return new FormGroup<MachineResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A REST API operation supported by the provider. */
	export interface Operation {

		/** Displayable properties of the operation. */
		display?: OperationDisplay;

		/** Name of the operation. */
		name?: string | null;

		/** Origin of the operation. */
		origin?: string | null;
	}

	/** A REST API operation supported by the provider. */
	export interface OperationFormProperties {

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Displayable properties of the operation. */
	export interface OperationDisplay {

		/** Description of the operation. */
		description?: string | null;

		/** Operation Type. */
		operation?: string | null;

		/** Provider of the operation. */
		provider?: string | null;

		/** Resource operated on by the operation. */
		resource?: string | null;
	}

	/** Displayable properties of the operation. */
	export interface OperationDisplayFormProperties {

		/** Description of the operation. */
		description: FormControl<string | null | undefined>,

		/** Operation Type. */
		operation: FormControl<string | null | undefined>,

		/** Provider of the operation. */
		provider: FormControl<string | null | undefined>,

		/** Resource operated on by the operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of API operations. */
	export interface OperationResultList {

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** List of API operations. */
	export interface OperationResultListFormProperties {
	}
	export function CreateOperationResultListFormGroup() {
		return new FormGroup<OperationResultListFormProperties>({
		});

	}


	/** Azure Migrate Project. */
	export interface Project {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Path reference to this project /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} */
		id?: string | null;

		/** Azure location in which project is created. */
		location?: string | null;

		/** Name of the project. */
		name?: string | null;

		/** Properties of a project. */
		properties?: ProjectProperties;

		/** Tags provided by Azure Tagging service. */
		tags?: string | null;

		/** Type of the object = [Microsoft.Migrate/assessmentProjects]. */
		type?: string | null;
	}

	/** Azure Migrate Project. */
	export interface ProjectFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,

		/** Path reference to this project /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} */
		id: FormControl<string | null | undefined>,

		/** Azure location in which project is created. */
		location: FormControl<string | null | undefined>,

		/** Name of the project. */
		name: FormControl<string | null | undefined>,

		/** Tags provided by Azure Tagging service. */
		tags: FormControl<string | null | undefined>,

		/** Type of the object = [Microsoft.Migrate/assessmentProjects]. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a project. */
	export interface ProjectProperties {

		/** Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects. */
		assessmentSolutionId?: string | null;

		/** Time when this project was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp?: Date | null;

		/** The ARM id of service map workspace created by customer. */
		customerWorkspaceId?: string | null;

		/** Location of service map workspace created by customer. */
		customerWorkspaceLocation?: string | null;

		/** Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created. */
		lastAssessmentTimestamp?: Date | null;

		/**
		 * Number of assessments created in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfAssessments?: number | null;

		/**
		 * Number of groups created in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfGroups?: number | null;

		/**
		 * Number of machines in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfMachines?: number | null;

		/** Assessment project status. */
		projectStatus?: ProjectPropertiesProjectStatus | null;

		/** Provisioning state of the project. */
		provisioningState?: ProjectPropertiesProvisioningState | null;

		/** Endpoint at which the collector agent can call agent REST API. */
		serviceEndpoint?: string | null;

		/** Time when this project was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp?: Date | null;
	}

	/** Properties of a project. */
	export interface ProjectPropertiesFormProperties {

		/** Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects. */
		assessmentSolutionId: FormControl<string | null | undefined>,

		/** Time when this project was created. Date-Time represented in ISO-8601 format. */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** The ARM id of service map workspace created by customer. */
		customerWorkspaceId: FormControl<string | null | undefined>,

		/** Location of service map workspace created by customer. */
		customerWorkspaceLocation: FormControl<string | null | undefined>,

		/** Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created. */
		lastAssessmentTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Number of assessments created in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfAssessments: FormControl<number | null | undefined>,

		/**
		 * Number of groups created in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfGroups: FormControl<number | null | undefined>,

		/**
		 * Number of machines in the project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfMachines: FormControl<number | null | undefined>,

		/** Assessment project status. */
		projectStatus: FormControl<ProjectPropertiesProjectStatus | null | undefined>,

		/** Provisioning state of the project. */
		provisioningState: FormControl<ProjectPropertiesProvisioningState | null | undefined>,

		/** Endpoint at which the collector agent can call agent REST API. */
		serviceEndpoint: FormControl<string | null | undefined>,

		/** Time when this project was last updated. Date-Time represented in ISO-8601 format. */
		updatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateProjectPropertiesFormGroup() {
		return new FormGroup<ProjectPropertiesFormProperties>({
			assessmentSolutionId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			customerWorkspaceId: new FormControl<string | null | undefined>(undefined),
			customerWorkspaceLocation: new FormControl<string | null | undefined>(undefined),
			lastAssessmentTimestamp: new FormControl<Date | null | undefined>(undefined),
			numberOfAssessments: new FormControl<number | null | undefined>(undefined),
			numberOfGroups: new FormControl<number | null | undefined>(undefined),
			numberOfMachines: new FormControl<number | null | undefined>(undefined),
			projectStatus: new FormControl<ProjectPropertiesProjectStatus | null | undefined>(undefined),
			provisioningState: new FormControl<ProjectPropertiesProvisioningState | null | undefined>(undefined),
			serviceEndpoint: new FormControl<string | null | undefined>(undefined),
			updatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ProjectPropertiesProjectStatus { Active = 'Active', Inactive = 'Inactive' }

	export enum ProjectPropertiesProvisioningState { Accepted = 'Accepted', Creating = 'Creating', Deleting = 'Deleting', Failed = 'Failed', Moving = 'Moving', Succeeded = 'Succeeded' }


	/** List of projects. */
	export interface ProjectResultList {

		/** List of projects. */
		value?: Array<Project>;
	}

	/** List of projects. */
	export interface ProjectResultListFormProperties {
	}
	export function CreateProjectResultListFormGroup() {
		return new FormGroup<ProjectResultListFormProperties>({
		});

	}


	/** Properties of group update. */
	export interface UpdateGroupBody {

		/** For optimistic concurrency control. */
		eTag?: string | null;

		/** Body properties of group update. */
		properties?: GroupBodyProperties;
	}

	/** Properties of group update. */
	export interface UpdateGroupBodyFormProperties {

		/** For optimistic concurrency control. */
		eTag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupBodyFormGroup() {
		return new FormGroup<UpdateGroupBodyFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VMwareCollector {
		eTag?: string | null;
		id?: string | null;
		name?: string | null;
		properties?: CollectorProperties;
		type?: string | null;
	}
	export interface VMwareCollectorFormProperties {
		eTag: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateVMwareCollectorFormGroup() {
		return new FormGroup<VMwareCollectorFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of VMware collectors. */
	export interface VMwareCollectorList {

		/** List of VMware collectors. */
		value?: Array<VMwareCollector>;
	}

	/** List of VMware collectors. */
	export interface VMwareCollectorListFormProperties {
	}
	export function CreateVMwareCollectorListFormGroup() {
		return new FormGroup<VMwareCollectorListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get list of operations supported in the API.
		 * Get a list of REST API supported by Microsoft.Migrate provider.
		 * Get providers/Microsoft.Migrate/operations
		 * @return {OperationResultList} OK. Returns list of operations.
		 */
		Operations_List(): Observable<OperationResultList> {
			return this.http.get<OperationResultList>(this.baseUri + 'providers/Microsoft.Migrate/operations', {});
		}

		/**
		 * Get all projects.
		 * Get all the projects in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Migrate/assessmentProjects
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {ProjectResultList} OK.
		 */
		Projects_ListBySubscription(subscriptionId: string, api_version: Projects_ListBySubscriptionApi_version): Observable<ProjectResultList> {
			return this.http.get<ProjectResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Migrate/assessmentProjects&api_version=' + api_version, {});
		}

		/**
		 * Get all assessments created in the project.
		 * Get all assessments created in the project.
		 * Returns a json array of objects of type 'assessment' as specified in Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessments
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessmentResultList} OK. Returns list of Assessment objects.
		 */
		Assessments_ListByProject(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessmentResultList> {
			return this.http.get<AssessmentResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/assessments&api_version=' + api_version, {});
		}

		/**
		 * Get all groups
		 * Get all groups created in the project. Returns a json array of objects of type 'group' as specified in the Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {GroupResultList} OK. Returns list of groups.
		 */
		Groups_ListByProject(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<GroupResultList> {
			return this.http.get<GroupResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups&api_version=' + api_version, {});
		}

		/**
		 * Get a specific group.
		 * Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {Group} OK. Returns the group with the specified name.
		 */
		Groups_Get(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create a new group with specified settings.
		 * Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique.
		 * This operation is Idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {Group} requestBody New or Updated Group object.
		 * @return {Group} OK. Existing group updated.
		 */
		Groups_Create(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: Group): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the group
		 * Delete the group from the project. The machines remain in the project. Deleting a non-existent group results in a no-operation.
		 * A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not delete machines in it.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {void} OK. Deleted the group.
		 */
		Groups_Delete(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all assessments created for the specified group.
		 * Get all assessments created for the specified group.
		 * Returns a json array of objects of type 'assessment' as specified in Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessmentResultList} OK. Returns list of Assessment objects.
		 */
		Assessments_ListByGroup(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessmentResultList> {
			return this.http.get<AssessmentResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments&api_version=' + api_version, {});
		}

		/**
		 * Get an assessment.
		 * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {Assessment} OK. Returns Assessment object.
		 */
		Assessments_Get(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<Assessment> {
			return this.http.get<Assessment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create or Update assessment.
		 * Create a new assessment with the given name and the specified settings. Since name of an assessment in a project is a unique identifier, if an assessment with the name provided already exists, then the existing assessment is updated.
		 * Any PUT operation, resulting in either create or update on an assessment, will cause the assessment to go in a "InProgress" state. This will be indicated by the field 'computationState' on the Assessment object. During this time no other PUT operation will be allowed on that assessment object, nor will a Delete operation. Once the computation for the assessment is complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE operations can happen on the assessment.
		 * When assessment is under computation, any PUT will lead to a 400 - Bad Request error.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {Assessment} requestBody New or Updated Assessment object.
		 * @return {Assessment} OK. Existing assessment updated.
		 */
		Assessments_Create(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: Assessment): Observable<Assessment> {
			return this.http.put<Assessment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assessment from the project.
		 * Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.
		 * When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {void} OK. Deleted the assessment.
		 */
		Assessments_Delete(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get assessed machines for assessment.
		 * Get list of machines that assessed as part of the specified assessment. Returns a json array of objects of type 'assessedMachine' as specified in the Models section.
		 * Whenever an assessment is created or updated, it goes under computation. During this phase, the 'status' field of Assessment object reports 'Computing'.
		 * During the period when the assessment is under computation, the list of assessed machines is empty and no assessed machines are returned by this call.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessedMachineResultList} OK. Returns list of machines with their assessment data in the assessment.
		 */
		AssessedMachines_ListByAssessment(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessedMachineResultList> {
			return this.http.get<AssessedMachineResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '/assessedMachines&api_version=' + api_version, {});
		}

		/**
		 * Get an assessed machine.
		 * Get an assessed machine with its size & cost estimate that was evaluated in the specified assessment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {string} assessedMachineName Unique name of an assessed machine evaluated as part of an assessment.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessedMachine} OK. Returns a specific assessed machine.
		 */
		AssessedMachines_Get(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, assessedMachineName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessedMachine> {
			return this.http.get<AssessedMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '/assessedMachines/' + (assessedMachineName == null ? '' : encodeURIComponent(assessedMachineName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Get download URL for the assessment report.
		 * Get the URL for downloading the assessment in a report format.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {string} assessmentName Unique name of an assessment within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {DownloadUrl} OK.
		 */
		Assessments_GetReportDownloadUrl(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<DownloadUrl> {
			return this.http.post<DownloadUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '/downloadUrl&api_version=' + api_version, null, {});
		}

		/**
		 * Update machines in group.
		 * Update machines in group by adding or removing machines.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/updateMachines
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} groupName Unique name of a group within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {UpdateGroupBody} requestBody Machines list to be added or removed from group.
		 * @return {Group} OK. Existing group updated.
		 */
		Groups_UpdateMachines(subscriptionId: string, resourceGroupName: string, projectName: string, groupName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: UpdateGroupBody): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groups/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/updateMachines&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of Hyper-V collector.
		 * Get a list of Hyper-V collector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {HyperVCollectorList} OK. Returns list of Hyper-V collectors.
		 */
		HyperVCollectors_ListByProject(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HyperVCollectorList> {
			return this.http.get<HyperVCollectorList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/hypervcollectors&api_version=' + api_version, {});
		}

		/**
		 * Get a Hyper-V collector.
		 * Get a Hyper-V collector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} hyperVCollectorName Unique name of a Hyper-V collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {HyperVCollector} OK. Returns the specific Hyper-V collector.
		 */
		HyperVCollectors_Get(subscriptionId: string, resourceGroupName: string, projectName: string, hyperVCollectorName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HyperVCollector> {
			return this.http.get<HyperVCollector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/hypervcollectors/' + (hyperVCollectorName == null ? '' : encodeURIComponent(hyperVCollectorName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create or Update Hyper-V collector.
		 * Create or Update Hyper-V collector
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} hyperVCollectorName Unique name of a Hyper-V collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {HyperVCollector} requestBody New or Updated Hyper-V collector.
		 * @return {HyperVCollector} OK. Existing Hyper-V collector.
		 */
		HyperVCollectors_Create(subscriptionId: string, resourceGroupName: string, projectName: string, hyperVCollectorName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: HyperVCollector): Observable<HyperVCollector> {
			return this.http.put<HyperVCollector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/hypervcollectors/' + (hyperVCollectorName == null ? '' : encodeURIComponent(hyperVCollectorName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Hyper-V collector from the project.
		 * Delete a Hyper-V collector from the project.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} hyperVCollectorName Unique name of a Hyper-V collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {void} OK. Deleted the Hyper-V collector.
		 */
		HyperVCollectors_Delete(subscriptionId: string, resourceGroupName: string, projectName: string, hyperVCollectorName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/hypervcollectors/' + (hyperVCollectorName == null ? '' : encodeURIComponent(hyperVCollectorName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all machines in the project
		 * Get data of all the machines available in the project. Returns a json array of objects of type 'machine' defined in Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {MachineResultList} OK. Returns list of all machine objects.
		 */
		Machines_ListByProject(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<MachineResultList> {
			return this.http.get<MachineResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/machines&api_version=' + api_version, {});
		}

		/**
		 * Get a specific machine.
		 * Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} machineName Unique name of a machine in private datacenter.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {Machine} OK. Returns the machine with the specified name.
		 */
		Machines_Get(subscriptionId: string, resourceGroupName: string, projectName: string, machineName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<Machine> {
			return this.http.get<Machine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/machines/' + (machineName == null ? '' : encodeURIComponent(machineName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Get a list of VMware collector.
		 * Get a list of VMware collector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {VMwareCollectorList} OK. Returns list of VMware collectors.
		 */
		VMwareCollectors_ListByProject(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<VMwareCollectorList> {
			return this.http.get<VMwareCollectorList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/vmwarecollectors&api_version=' + api_version, {});
		}

		/**
		 * Get a VMware collector.
		 * Get a VMware collector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} vmWareCollectorName Unique name of a VMware collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {VMwareCollector} OK. Returns the specific VMware collector.
		 */
		VMwareCollectors_Get(subscriptionId: string, resourceGroupName: string, projectName: string, vmWareCollectorName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<VMwareCollector> {
			return this.http.get<VMwareCollector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/vmwarecollectors/' + (vmWareCollectorName == null ? '' : encodeURIComponent(vmWareCollectorName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create or Update VMware collector.
		 * Create or Update VMware collector
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} vmWareCollectorName Unique name of a VMware collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {VMwareCollector} requestBody New or Updated VMware collector.
		 * @return {VMwareCollector} OK. Existing VMware collector.
		 */
		VMwareCollectors_Create(subscriptionId: string, resourceGroupName: string, projectName: string, vmWareCollectorName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: VMwareCollector): Observable<VMwareCollector> {
			return this.http.put<VMwareCollector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/vmwarecollectors/' + (vmWareCollectorName == null ? '' : encodeURIComponent(vmWareCollectorName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes VMware collector from the project.
		 * Delete a VMware collector from the project.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} vmWareCollectorName Unique name of a VMware collector within a project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {void} OK. Deleted the VMware collector.
		 */
		VMwareCollectors_Delete(subscriptionId: string, resourceGroupName: string, projectName: string, vmWareCollectorName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/vmwarecollectors/' + (vmWareCollectorName == null ? '' : encodeURIComponent(vmWareCollectorName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all projects.
		 * Get all the projects in the resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {ProjectResultList} OK.
		 */
		Projects_List(subscriptionId: string, resourceGroupName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<ProjectResultList> {
			return this.http.get<ProjectResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects&api_version=' + api_version, {});
		}

		/**
		 * Get the specified project.
		 * Get the project with the specified name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {Project} OK.
		 */
		Projects_Get(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create or update project.
		 * Create a project with specified name. If a project already exists, update it.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {Project} requestBody New or Updated project object.
		 * @return {Project} OK. Existing project updated.
		 */
		Projects_Create(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: Project): Observable<Project> {
			return this.http.put<Project>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the project
		 * Delete the project. Deleting non-existent project is a no-operation.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {void} OK. Deleted the group.
		 */
		Projects_Delete(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update project.
		 * Update a project with specified name. Supports partial updates, for example only tags can be provided.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @param {Project} requestBody Updated project object.
		 * @return {Project} OK. Existing project updated.
		 */
		Projects_Update(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version, requestBody: Project): Observable<Project> {
			return this.http.patch<Project>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets list of all available options for the properties of an assessment on a project.
		 * Gets list of all available options for the properties of an assessment on a project.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessmentOptionsResultList} OK.
		 */
		Project_AssessmentOptionsList(subscriptionId: string, resourceGroupName: string, projectName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessmentOptionsResultList> {
			return this.http.get<AssessmentOptionsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/assessmentOptions&api_version=' + api_version, {});
		}

		/**
		 * Get all available options for the properties of an assessment on a project.
		 * Get all available options for the properties of an assessment on a project.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions/{assessmentOptionsName}
		 * @param {string} subscriptionId Azure Subscription Id in which project was created.
		 * @param {string} resourceGroupName Name of the Azure Resource Group that project is part of.
		 * @param {string} projectName Name of the Azure Migrate project.
		 * @param {string} assessmentOptionsName Name of the assessment options. The only name accepted in default.
		 * @param {Projects_ListBySubscriptionApi_version} api_version Standard request header. Used by service to identify API version used by client.
		 * @return {AssessmentOptions} OK.
		 */
		Project_AssessmentOptions(subscriptionId: string, resourceGroupName: string, projectName: string, assessmentOptionsName: string, api_version: Projects_ListBySubscriptionApi_version): Observable<AssessmentOptions> {
			return this.http.get<AssessmentOptions>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Migrate/assessmentProjects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/assessmentOptions/' + (assessmentOptionsName == null ? '' : encodeURIComponent(assessmentOptionsName)) + '&api_version=' + api_version, {});
		}
	}

	export enum Projects_ListBySubscriptionApi_version { '2019-10-01' = '2019-10-01' }

}

