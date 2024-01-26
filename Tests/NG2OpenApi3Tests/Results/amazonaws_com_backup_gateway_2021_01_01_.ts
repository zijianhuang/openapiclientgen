import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateGatewayToServerOutput {
		GatewayArn?: string;
	}
	export interface AssociateGatewayToServerOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateGatewayToServerOutputFormGroup() {
		return new FormGroup<AssociateGatewayToServerOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateGatewayToServerInput {

		/** Required */
		GatewayArn: string;

		/** Required */
		ServerArn: string;
	}
	export interface AssociateGatewayToServerInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		ServerArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateGatewayToServerInputFormGroup() {
		return new FormGroup<AssociateGatewayToServerInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateGatewayOutput {
		GatewayArn?: string;
	}
	export interface CreateGatewayOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayOutputFormGroup() {
		return new FormGroup<CreateGatewayOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayInput {

		/** Required */
		ActivationKey: string;

		/** Required */
		GatewayDisplayName: string;

		/** Required */
		GatewayType: GatewayType;
		Tags?: Array<Tag>;
	}
	export interface CreateGatewayInputFormProperties {

		/** Required */
		ActivationKey: FormControl<string | null | undefined>,

		/** Required */
		GatewayDisplayName: FormControl<string | null | undefined>,

		/** Required */
		GatewayType: FormControl<GatewayType | null | undefined>,
	}
	export function CreateCreateGatewayInputFormGroup() {
		return new FormGroup<CreateGatewayInputFormProperties>({
			ActivationKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayType: new FormControl<GatewayType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GatewayType { BACKUP_VM = 0 }


	/** A key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGatewayOutput {
		GatewayArn?: string;
	}
	export interface DeleteGatewayOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayOutputFormGroup() {
		return new FormGroup<DeleteGatewayOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGatewayInput {

		/** Required */
		GatewayArn: string;
	}
	export interface DeleteGatewayInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayInputFormGroup() {
		return new FormGroup<DeleteGatewayInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteHypervisorOutput {
		HypervisorArn?: string;
	}
	export interface DeleteHypervisorOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHypervisorOutputFormGroup() {
		return new FormGroup<DeleteHypervisorOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteHypervisorInput {

		/** Required */
		HypervisorArn: string;
	}
	export interface DeleteHypervisorInputFormProperties {

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHypervisorInputFormGroup() {
		return new FormGroup<DeleteHypervisorInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DisassociateGatewayFromServerOutput {
		GatewayArn?: string;
	}
	export interface DisassociateGatewayFromServerOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateGatewayFromServerOutputFormGroup() {
		return new FormGroup<DisassociateGatewayFromServerOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateGatewayFromServerInput {

		/** Required */
		GatewayArn: string;
	}
	export interface DisassociateGatewayFromServerInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateGatewayFromServerInputFormGroup() {
		return new FormGroup<DisassociateGatewayFromServerInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBandwidthRateLimitScheduleOutput {
		BandwidthRateLimitIntervals?: Array<BandwidthRateLimitInterval>;
		GatewayArn?: string;
	}
	export interface GetBandwidthRateLimitScheduleOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateGetBandwidthRateLimitScheduleOutputFormGroup() {
		return new FormGroup<GetBandwidthRateLimitScheduleOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. */
	export interface BandwidthRateLimitInterval {
		AverageUploadRateLimitInBitsPerSec?: number | null;

		/** Required */
		DaysOfWeek: Array<number>;

		/** Required */
		EndHourOfDay: number;

		/** Required */
		EndMinuteOfHour: number;

		/** Required */
		StartHourOfDay: number;

		/** Required */
		StartMinuteOfHour: number;
	}

	/** Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. */
	export interface BandwidthRateLimitIntervalFormProperties {
		AverageUploadRateLimitInBitsPerSec: FormControl<number | null | undefined>,

		/** Required */
		EndHourOfDay: FormControl<number | null | undefined>,

		/** Required */
		EndMinuteOfHour: FormControl<number | null | undefined>,

		/** Required */
		StartHourOfDay: FormControl<number | null | undefined>,

		/** Required */
		StartMinuteOfHour: FormControl<number | null | undefined>,
	}
	export function CreateBandwidthRateLimitIntervalFormGroup() {
		return new FormGroup<BandwidthRateLimitIntervalFormProperties>({
			AverageUploadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
			EndHourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndMinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StartHourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StartMinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBandwidthRateLimitScheduleInput {

		/** Required */
		GatewayArn: string;
	}
	export interface GetBandwidthRateLimitScheduleInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateGetBandwidthRateLimitScheduleInputFormGroup() {
		return new FormGroup<GetBandwidthRateLimitScheduleInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGatewayOutput {
		Gateway?: GatewayDetails;
	}
	export interface GetGatewayOutputFormProperties {
	}
	export function CreateGetGatewayOutputFormGroup() {
		return new FormGroup<GetGatewayOutputFormProperties>({
		});

	}


	/** The details of gateway. */
	export interface GatewayDetails {
		GatewayArn?: string;
		GatewayDisplayName?: string;
		GatewayType?: GatewayType;
		HypervisorId?: string;
		LastSeenTime?: Date;
		MaintenanceStartTime?: MaintenanceStartTime;
		NextUpdateAvailabilityTime?: Date;
		VpcEndpoint?: string;
	}

	/** The details of gateway. */
	export interface GatewayDetailsFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
		GatewayDisplayName: FormControl<string | null | undefined>,
		GatewayType: FormControl<GatewayType | null | undefined>,
		HypervisorId: FormControl<string | null | undefined>,
		LastSeenTime: FormControl<Date | null | undefined>,
		NextUpdateAvailabilityTime: FormControl<Date | null | undefined>,
		VpcEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGatewayDetailsFormGroup() {
		return new FormGroup<GatewayDetailsFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
			GatewayDisplayName: new FormControl<string | null | undefined>(undefined),
			GatewayType: new FormControl<GatewayType | null | undefined>(undefined),
			HypervisorId: new FormControl<string | null | undefined>(undefined),
			LastSeenTime: new FormControl<Date | null | undefined>(undefined),
			NextUpdateAvailabilityTime: new FormControl<Date | null | undefined>(undefined),
			VpcEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly. */
	export interface MaintenanceStartTime {
		DayOfMonth?: number | null;
		DayOfWeek?: number | null;

		/** Required */
		HourOfDay: number;

		/** Required */
		MinuteOfHour: number;
	}

	/** This is your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly. */
	export interface MaintenanceStartTimeFormProperties {
		DayOfMonth: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		HourOfDay: FormControl<number | null | undefined>,

		/** Required */
		MinuteOfHour: FormControl<number | null | undefined>,
	}
	export function CreateMaintenanceStartTimeFormGroup() {
		return new FormGroup<MaintenanceStartTimeFormProperties>({
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<number | null | undefined>(undefined),
			HourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGatewayInput {

		/** Required */
		GatewayArn: string;
	}
	export interface GetGatewayInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateGetGatewayInputFormGroup() {
		return new FormGroup<GetGatewayInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHypervisorOutput {
		Hypervisor?: HypervisorDetails;
	}
	export interface GetHypervisorOutputFormProperties {
	}
	export function CreateGetHypervisorOutputFormGroup() {
		return new FormGroup<GetHypervisorOutputFormProperties>({
		});

	}


	/** These are the details of the specified hypervisor. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them. */
	export interface HypervisorDetails {
		Host?: string;
		HypervisorArn?: string;
		KmsKeyArn?: string;
		LastSuccessfulMetadataSyncTime?: Date;
		LatestMetadataSyncStatus?: SyncMetadataStatus;
		LatestMetadataSyncStatusMessage?: string;
		LogGroupArn?: string;
		Name?: string;
		State?: HypervisorState;
	}

	/** These are the details of the specified hypervisor. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them. */
	export interface HypervisorDetailsFormProperties {
		Host: FormControl<string | null | undefined>,
		HypervisorArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		LastSuccessfulMetadataSyncTime: FormControl<Date | null | undefined>,
		LatestMetadataSyncStatus: FormControl<SyncMetadataStatus | null | undefined>,
		LatestMetadataSyncStatusMessage: FormControl<string | null | undefined>,
		LogGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<HypervisorState | null | undefined>,
	}
	export function CreateHypervisorDetailsFormGroup() {
		return new FormGroup<HypervisorDetailsFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined),
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			LastSuccessfulMetadataSyncTime: new FormControl<Date | null | undefined>(undefined),
			LatestMetadataSyncStatus: new FormControl<SyncMetadataStatus | null | undefined>(undefined),
			LatestMetadataSyncStatusMessage: new FormControl<string | null | undefined>(undefined),
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<HypervisorState | null | undefined>(undefined),
		});

	}

	export enum SyncMetadataStatus { CREATED = 0, RUNNING = 1, FAILED = 2, PARTIALLY_FAILED = 3, SUCCEEDED = 4 }

	export enum HypervisorState { PENDING = 0, ONLINE = 1, OFFLINE = 2, ERROR = 3 }

	export interface GetHypervisorInput {

		/** Required */
		HypervisorArn: string;
	}
	export interface GetHypervisorInputFormProperties {

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetHypervisorInputFormGroup() {
		return new FormGroup<GetHypervisorInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHypervisorPropertyMappingsOutput {
		HypervisorArn?: string;
		IamRoleArn?: string;
		VmwareToAwsTagMappings?: Array<VmwareToAwsTagMapping>;
	}
	export interface GetHypervisorPropertyMappingsOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetHypervisorPropertyMappingsOutputFormGroup() {
		return new FormGroup<GetHypervisorPropertyMappingsOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This displays the mapping of on-premises VMware tags to the corresponding Amazon Web Services tags. */
	export interface VmwareToAwsTagMapping {

		/** Required */
		AwsTagKey: string;

		/** Required */
		AwsTagValue: string;

		/** Required */
		VmwareCategory: string;

		/** Required */
		VmwareTagName: string;
	}

	/** This displays the mapping of on-premises VMware tags to the corresponding Amazon Web Services tags. */
	export interface VmwareToAwsTagMappingFormProperties {

		/** Required */
		AwsTagKey: FormControl<string | null | undefined>,

		/** Required */
		AwsTagValue: FormControl<string | null | undefined>,

		/** Required */
		VmwareCategory: FormControl<string | null | undefined>,

		/** Required */
		VmwareTagName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareToAwsTagMappingFormGroup() {
		return new FormGroup<VmwareToAwsTagMappingFormProperties>({
			AwsTagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsTagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VmwareCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VmwareTagName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHypervisorPropertyMappingsInput {

		/** Required */
		HypervisorArn: string;
	}
	export interface GetHypervisorPropertyMappingsInputFormProperties {

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetHypervisorPropertyMappingsInputFormGroup() {
		return new FormGroup<GetHypervisorPropertyMappingsInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVirtualMachineOutput {
		VirtualMachine?: VirtualMachineDetails;
	}
	export interface GetVirtualMachineOutputFormProperties {
	}
	export function CreateGetVirtualMachineOutputFormGroup() {
		return new FormGroup<GetVirtualMachineOutputFormProperties>({
		});

	}


	/** Your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names (ARNs). */
	export interface VirtualMachineDetails {
		HostName?: string;
		HypervisorId?: string;
		LastBackupDate?: Date;
		Name?: string;
		Path?: string;
		ResourceArn?: string;
		VmwareTags?: Array<VmwareTag>;
	}

	/** Your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names (ARNs). */
	export interface VirtualMachineDetailsFormProperties {
		HostName: FormControl<string | null | undefined>,
		HypervisorId: FormControl<string | null | undefined>,
		LastBackupDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineDetailsFormGroup() {
		return new FormGroup<VirtualMachineDetailsFormProperties>({
			HostName: new FormControl<string | null | undefined>(undefined),
			HypervisorId: new FormControl<string | null | undefined>(undefined),
			LastBackupDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A VMware tag is a tag attached to a specific virtual machine. A <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html">tag</a> is a key-value pair you can use to manage, filter, and search for your resources.</p> <p>The content of VMware tags can be matched to Amazon Web Services tags.</p> */
	export interface VmwareTag {
		VmwareCategory?: string;
		VmwareTagDescription?: string;
		VmwareTagName?: string;
	}

	/** <p>A VMware tag is a tag attached to a specific virtual machine. A <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html">tag</a> is a key-value pair you can use to manage, filter, and search for your resources.</p> <p>The content of VMware tags can be matched to Amazon Web Services tags.</p> */
	export interface VmwareTagFormProperties {
		VmwareCategory: FormControl<string | null | undefined>,
		VmwareTagDescription: FormControl<string | null | undefined>,
		VmwareTagName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareTagFormGroup() {
		return new FormGroup<VmwareTagFormProperties>({
			VmwareCategory: new FormControl<string | null | undefined>(undefined),
			VmwareTagDescription: new FormControl<string | null | undefined>(undefined),
			VmwareTagName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVirtualMachineInput {

		/** Required */
		ResourceArn: string;
	}
	export interface GetVirtualMachineInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetVirtualMachineInputFormGroup() {
		return new FormGroup<GetVirtualMachineInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportHypervisorConfigurationOutput {
		HypervisorArn?: string;
	}
	export interface ImportHypervisorConfigurationOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateImportHypervisorConfigurationOutputFormGroup() {
		return new FormGroup<ImportHypervisorConfigurationOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportHypervisorConfigurationInput {

		/** Required */
		Host: string;
		KmsKeyArn?: string;

		/** Required */
		Name: string;
		Password?: string;
		Tags?: Array<Tag>;
		Username?: string;
	}
	export interface ImportHypervisorConfigurationInputFormProperties {

		/** Required */
		Host: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateImportHypervisorConfigurationInputFormGroup() {
		return new FormGroup<ImportHypervisorConfigurationInputFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysOutput {
		Gateways?: Array<Gateway>;
		NextToken?: string;
	}
	export interface ListGatewaysOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysOutputFormGroup() {
		return new FormGroup<ListGatewaysOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A gateway is an Backup Gateway appliance that runs on the customer's network to provide seamless connectivity to backup storage in the Amazon Web Services Cloud. */
	export interface Gateway {
		GatewayArn?: string;
		GatewayDisplayName?: string;
		GatewayType?: GatewayType;
		HypervisorId?: string;
		LastSeenTime?: Date;
	}

	/** A gateway is an Backup Gateway appliance that runs on the customer's network to provide seamless connectivity to backup storage in the Amazon Web Services Cloud. */
	export interface GatewayFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
		GatewayDisplayName: FormControl<string | null | undefined>,
		GatewayType: FormControl<GatewayType | null | undefined>,
		HypervisorId: FormControl<string | null | undefined>,
		LastSeenTime: FormControl<Date | null | undefined>,
	}
	export function CreateGatewayFormGroup() {
		return new FormGroup<GatewayFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
			GatewayDisplayName: new FormControl<string | null | undefined>(undefined),
			GatewayType: new FormControl<GatewayType | null | undefined>(undefined),
			HypervisorId: new FormControl<string | null | undefined>(undefined),
			LastSeenTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGatewaysInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysInputFormGroup() {
		return new FormGroup<ListGatewaysInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHypervisorsOutput {
		Hypervisors?: Array<Hypervisor>;
		NextToken?: string;
	}
	export interface ListHypervisorsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHypervisorsOutputFormGroup() {
		return new FormGroup<ListHypervisorsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents the hypervisor's permissions to which the gateway will connect.</p> <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.</p> */
	export interface Hypervisor {
		Host?: string;
		HypervisorArn?: string;
		KmsKeyArn?: string;
		Name?: string;
		State?: HypervisorState;
	}

	/** <p>Represents the hypervisor's permissions to which the gateway will connect.</p> <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.</p> */
	export interface HypervisorFormProperties {
		Host: FormControl<string | null | undefined>,
		HypervisorArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<HypervisorState | null | undefined>,
	}
	export function CreateHypervisorFormGroup() {
		return new FormGroup<HypervisorFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined),
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<HypervisorState | null | undefined>(undefined),
		});

	}

	export interface ListHypervisorsInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListHypervisorsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHypervisorsInputFormGroup() {
		return new FormGroup<ListHypervisorsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVirtualMachinesOutput {
		NextToken?: string;
		VirtualMachines?: Array<VirtualMachine>;
	}
	export interface ListVirtualMachinesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualMachinesOutputFormGroup() {
		return new FormGroup<ListVirtualMachinesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual machine that is on a hypervisor. */
	export interface VirtualMachine {
		HostName?: string;
		HypervisorId?: string;
		LastBackupDate?: Date;
		Name?: string;
		Path?: string;
		ResourceArn?: string;
	}

	/** A virtual machine that is on a hypervisor. */
	export interface VirtualMachineFormProperties {
		HostName: FormControl<string | null | undefined>,
		HypervisorId: FormControl<string | null | undefined>,
		LastBackupDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			HostName: new FormControl<string | null | undefined>(undefined),
			HypervisorId: new FormControl<string | null | undefined>(undefined),
			LastBackupDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVirtualMachinesInput {
		HypervisorArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListVirtualMachinesInputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualMachinesInputFormGroup() {
		return new FormGroup<ListVirtualMachinesInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBandwidthRateLimitScheduleOutput {
		GatewayArn?: string;
	}
	export interface PutBandwidthRateLimitScheduleOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreatePutBandwidthRateLimitScheduleOutputFormGroup() {
		return new FormGroup<PutBandwidthRateLimitScheduleOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBandwidthRateLimitScheduleInput {

		/** Required */
		BandwidthRateLimitIntervals: Array<BandwidthRateLimitInterval>;

		/** Required */
		GatewayArn: string;
	}
	export interface PutBandwidthRateLimitScheduleInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreatePutBandwidthRateLimitScheduleInputFormGroup() {
		return new FormGroup<PutBandwidthRateLimitScheduleInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutHypervisorPropertyMappingsOutput {
		HypervisorArn?: string;
	}
	export interface PutHypervisorPropertyMappingsOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreatePutHypervisorPropertyMappingsOutputFormGroup() {
		return new FormGroup<PutHypervisorPropertyMappingsOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutHypervisorPropertyMappingsInput {

		/** Required */
		HypervisorArn: string;

		/** Required */
		IamRoleArn: string;

		/** Required */
		VmwareToAwsTagMappings: Array<VmwareToAwsTagMapping>;
	}
	export interface PutHypervisorPropertyMappingsInputFormProperties {

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutHypervisorPropertyMappingsInputFormGroup() {
		return new FormGroup<PutHypervisorPropertyMappingsInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutMaintenanceStartTimeOutput {
		GatewayArn?: string;
	}
	export interface PutMaintenanceStartTimeOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreatePutMaintenanceStartTimeOutputFormGroup() {
		return new FormGroup<PutMaintenanceStartTimeOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutMaintenanceStartTimeInput {
		DayOfMonth?: number | null;
		DayOfWeek?: number | null;

		/** Required */
		GatewayArn: string;

		/** Required */
		HourOfDay: number;

		/** Required */
		MinuteOfHour: number;
	}
	export interface PutMaintenanceStartTimeInputFormProperties {
		DayOfMonth: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		HourOfDay: FormControl<number | null | undefined>,

		/** Required */
		MinuteOfHour: FormControl<number | null | undefined>,
	}
	export function CreatePutMaintenanceStartTimeInputFormGroup() {
		return new FormGroup<PutMaintenanceStartTimeInputFormProperties>({
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<number | null | undefined>(undefined),
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartVirtualMachinesMetadataSyncOutput {
		HypervisorArn?: string;
	}
	export interface StartVirtualMachinesMetadataSyncOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateStartVirtualMachinesMetadataSyncOutputFormGroup() {
		return new FormGroup<StartVirtualMachinesMetadataSyncOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartVirtualMachinesMetadataSyncInput {

		/** Required */
		HypervisorArn: string;
	}
	export interface StartVirtualMachinesMetadataSyncInputFormProperties {

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateStartVirtualMachinesMetadataSyncInputFormGroup() {
		return new FormGroup<StartVirtualMachinesMetadataSyncInputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
		ResourceARN?: string;
	}
	export interface TagResourceOutputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestHypervisorConfigurationOutput {
	}
	export interface TestHypervisorConfigurationOutputFormProperties {
	}
	export function CreateTestHypervisorConfigurationOutputFormGroup() {
		return new FormGroup<TestHypervisorConfigurationOutputFormProperties>({
		});

	}

	export interface TestHypervisorConfigurationInput {

		/** Required */
		GatewayArn: string;

		/** Required */
		Host: string;
		Password?: string;
		Username?: string;
	}
	export interface TestHypervisorConfigurationInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,

		/** Required */
		Host: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateTestHypervisorConfigurationInputFormGroup() {
		return new FormGroup<TestHypervisorConfigurationInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceOutput {
		ResourceARN?: string;
	}
	export interface UntagResourceOutputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGatewayInformationOutput {
		GatewayArn?: string;
	}
	export interface UpdateGatewayInformationOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayInformationOutputFormGroup() {
		return new FormGroup<UpdateGatewayInformationOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayInformationInput {

		/** Required */
		GatewayArn: string;
		GatewayDisplayName?: string;
	}
	export interface UpdateGatewayInformationInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
		GatewayDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayInformationInputFormGroup() {
		return new FormGroup<UpdateGatewayInformationInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewaySoftwareNowOutput {
		GatewayArn?: string;
	}
	export interface UpdateGatewaySoftwareNowOutputFormProperties {
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewaySoftwareNowOutputFormGroup() {
		return new FormGroup<UpdateGatewaySoftwareNowOutputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewaySoftwareNowInput {

		/** Required */
		GatewayArn: string;
	}
	export interface UpdateGatewaySoftwareNowInputFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewaySoftwareNowInputFormGroup() {
		return new FormGroup<UpdateGatewaySoftwareNowInputFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateHypervisorOutput {
		HypervisorArn?: string;
	}
	export interface UpdateHypervisorOutputFormProperties {
		HypervisorArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHypervisorOutputFormGroup() {
		return new FormGroup<UpdateHypervisorOutputFormProperties>({
			HypervisorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateHypervisorInput {
		Host?: string;

		/** Required */
		HypervisorArn: string;
		LogGroupArn?: string;
		Name?: string;
		Password?: string;
		Username?: string;
	}
	export interface UpdateHypervisorInputFormProperties {
		Host: FormControl<string | null | undefined>,

		/** Required */
		HypervisorArn: FormControl<string | null | undefined>,
		LogGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHypervisorInputFormGroup() {
		return new FormGroup<UpdateHypervisorInputFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined),
			HypervisorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.AssociateGatewayToServer
		 * @return {AssociateGatewayToServerOutput} Success
		 */
		AssociateGatewayToServer(requestBody: AssociateGatewayToServerInput): Observable<AssociateGatewayToServerOutput> {
			return this.http.post<AssociateGatewayToServerOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.AssociateGatewayToServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.CreateGateway
		 * @return {CreateGatewayOutput} Success
		 */
		CreateGateway(requestBody: CreateGatewayInput): Observable<CreateGatewayOutput> {
			return this.http.post<CreateGatewayOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.CreateGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a backup gateway.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.DeleteGateway
		 * @return {DeleteGatewayOutput} Success
		 */
		DeleteGateway(requestBody: DeleteGatewayInput): Observable<DeleteGatewayOutput> {
			return this.http.post<DeleteGatewayOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.DeleteGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hypervisor.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.DeleteHypervisor
		 * @return {DeleteHypervisorOutput} Success
		 */
		DeleteHypervisor(requestBody: DeleteHypervisorInput): Observable<DeleteHypervisorOutput> {
			return this.http.post<DeleteHypervisorOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.DeleteHypervisor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.DisassociateGatewayFromServer
		 * @return {DisassociateGatewayFromServerOutput} Success
		 */
		DisassociateGatewayFromServer(requestBody: DisassociateGatewayFromServerInput): Observable<DisassociateGatewayFromServerOutput> {
			return this.http.post<DisassociateGatewayFromServerOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.DisassociateGatewayFromServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule
		 * @return {GetBandwidthRateLimitScheduleOutput} Success
		 */
		GetBandwidthRateLimitSchedule(requestBody: GetBandwidthRateLimitScheduleInput): Observable<GetBandwidthRateLimitScheduleOutput> {
			return this.http.post<GetBandwidthRateLimitScheduleOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * By providing the ARN (Amazon Resource Name), this API returns the gateway.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.GetGateway
		 * @return {GetGatewayOutput} Success
		 */
		GetGateway(requestBody: GetGatewayInput): Observable<GetGatewayOutput> {
			return this.http.post<GetGatewayOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.GetGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.GetHypervisor
		 * @return {GetHypervisorOutput} Success
		 */
		GetHypervisor(requestBody: GetHypervisorInput): Observable<GetHypervisorOutput> {
			return this.http.post<GetHypervisorOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.GetHypervisor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.GetHypervisorPropertyMappings
		 * @return {GetHypervisorPropertyMappingsOutput} Success
		 */
		GetHypervisorPropertyMappings(requestBody: GetHypervisorPropertyMappingsInput): Observable<GetHypervisorPropertyMappingsOutput> {
			return this.http.post<GetHypervisorPropertyMappingsOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.GetHypervisorPropertyMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.GetVirtualMachine
		 * @return {GetVirtualMachineOutput} Success
		 */
		GetVirtualMachine(requestBody: GetVirtualMachineInput): Observable<GetVirtualMachineOutput> {
			return this.http.post<GetVirtualMachineOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.GetVirtualMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Connect to a hypervisor by importing its configuration.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.ImportHypervisorConfiguration
		 * @return {ImportHypervisorConfigurationOutput} Success
		 */
		ImportHypervisorConfiguration(requestBody: ImportHypervisorConfigurationInput): Observable<ImportHypervisorConfigurationOutput> {
			return this.http.post<ImportHypervisorConfigurationOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.ImportHypervisorConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.ListGateways
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewaysOutput} Success
		 */
		ListGateways(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGatewaysInput): Observable<ListGatewaysOutput> {
			return this.http.post<ListGatewaysOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.ListGateways?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your hypervisors.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.ListHypervisors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHypervisorsOutput} Success
		 */
		ListHypervisors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHypervisorsInput): Observable<ListHypervisorsOutput> {
			return this.http.post<ListHypervisorsOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.ListHypervisors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your virtual machines.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.ListVirtualMachines
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVirtualMachinesOutput} Success
		 */
		ListVirtualMachines(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVirtualMachinesInput): Observable<ListVirtualMachinesOutput> {
			return this.http.post<ListVirtualMachinesOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.ListVirtualMachines?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule
		 * @return {PutBandwidthRateLimitScheduleOutput} Success
		 */
		PutBandwidthRateLimitSchedule(requestBody: PutBandwidthRateLimitScheduleInput): Observable<PutBandwidthRateLimitScheduleOutput> {
			return this.http.post<PutBandwidthRateLimitScheduleOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.PutHypervisorPropertyMappings
		 * @return {PutHypervisorPropertyMappingsOutput} Success
		 */
		PutHypervisorPropertyMappings(requestBody: PutHypervisorPropertyMappingsInput): Observable<PutHypervisorPropertyMappingsOutput> {
			return this.http.post<PutHypervisorPropertyMappingsOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.PutHypervisorPropertyMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set the maintenance start time for a gateway.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.PutMaintenanceStartTime
		 * @return {PutMaintenanceStartTimeOutput} Success
		 */
		PutMaintenanceStartTime(requestBody: PutMaintenanceStartTimeInput): Observable<PutMaintenanceStartTimeOutput> {
			return this.http.post<PutMaintenanceStartTimeOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.PutMaintenanceStartTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action sends a request to sync metadata across the specified virtual machines.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync
		 * @return {StartVirtualMachinesMetadataSyncOutput} Success
		 */
		StartVirtualMachinesMetadataSync(requestBody: StartVirtualMachinesMetadataSyncInput): Observable<StartVirtualMachinesMetadataSyncOutput> {
			return this.http.post<StartVirtualMachinesMetadataSyncOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tag the resource.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.TestHypervisorConfiguration
		 * @return {TestHypervisorConfigurationOutput} Success
		 */
		TestHypervisorConfiguration(requestBody: TestHypervisorConfigurationInput): Observable<TestHypervisorConfigurationOutput> {
			return this.http.post<TestHypervisorConfigurationOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.TestHypervisorConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the resource.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.UpdateGatewayInformation
		 * @return {UpdateGatewayInformationOutput} Success
		 */
		UpdateGatewayInformation(requestBody: UpdateGatewayInformationInput): Observable<UpdateGatewayInformationOutput> {
			return this.http.post<UpdateGatewayInformationOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.UpdateGatewayInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.UpdateGatewaySoftwareNow
		 * @return {UpdateGatewaySoftwareNowOutput} Success
		 */
		UpdateGatewaySoftwareNow(requestBody: UpdateGatewaySoftwareNowInput): Observable<UpdateGatewaySoftwareNowOutput> {
			return this.http.post<UpdateGatewaySoftwareNowOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.UpdateGatewaySoftwareNow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
		 * Post #X-Amz-Target=BackupOnPremises_v20210101.UpdateHypervisor
		 * @return {UpdateHypervisorOutput} Success
		 */
		UpdateHypervisor(requestBody: UpdateHypervisorInput): Observable<UpdateHypervisorOutput> {
			return this.http.post<UpdateHypervisorOutput>(this.baseUri + '#X-Amz-Target=BackupOnPremises_v20210101.UpdateHypervisor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateGatewayToServerX_Amz_Target { 'BackupOnPremises_v20210101.AssociateGatewayToServer' = 0 }

	export enum CreateGatewayX_Amz_Target { 'BackupOnPremises_v20210101.CreateGateway' = 0 }

	export enum DeleteGatewayX_Amz_Target { 'BackupOnPremises_v20210101.DeleteGateway' = 0 }

	export enum DeleteHypervisorX_Amz_Target { 'BackupOnPremises_v20210101.DeleteHypervisor' = 0 }

	export enum DisassociateGatewayFromServerX_Amz_Target { 'BackupOnPremises_v20210101.DisassociateGatewayFromServer' = 0 }

	export enum GetBandwidthRateLimitScheduleX_Amz_Target { 'BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule' = 0 }

	export enum GetGatewayX_Amz_Target { 'BackupOnPremises_v20210101.GetGateway' = 0 }

	export enum GetHypervisorX_Amz_Target { 'BackupOnPremises_v20210101.GetHypervisor' = 0 }

	export enum GetHypervisorPropertyMappingsX_Amz_Target { 'BackupOnPremises_v20210101.GetHypervisorPropertyMappings' = 0 }

	export enum GetVirtualMachineX_Amz_Target { 'BackupOnPremises_v20210101.GetVirtualMachine' = 0 }

	export enum ImportHypervisorConfigurationX_Amz_Target { 'BackupOnPremises_v20210101.ImportHypervisorConfiguration' = 0 }

	export enum ListGatewaysX_Amz_Target { 'BackupOnPremises_v20210101.ListGateways' = 0 }

	export enum ListHypervisorsX_Amz_Target { 'BackupOnPremises_v20210101.ListHypervisors' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'BackupOnPremises_v20210101.ListTagsForResource' = 0 }

	export enum ListVirtualMachinesX_Amz_Target { 'BackupOnPremises_v20210101.ListVirtualMachines' = 0 }

	export enum PutBandwidthRateLimitScheduleX_Amz_Target { 'BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule' = 0 }

	export enum PutHypervisorPropertyMappingsX_Amz_Target { 'BackupOnPremises_v20210101.PutHypervisorPropertyMappings' = 0 }

	export enum PutMaintenanceStartTimeX_Amz_Target { 'BackupOnPremises_v20210101.PutMaintenanceStartTime' = 0 }

	export enum StartVirtualMachinesMetadataSyncX_Amz_Target { 'BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync' = 0 }

	export enum TagResourceX_Amz_Target { 'BackupOnPremises_v20210101.TagResource' = 0 }

	export enum TestHypervisorConfigurationX_Amz_Target { 'BackupOnPremises_v20210101.TestHypervisorConfiguration' = 0 }

	export enum UntagResourceX_Amz_Target { 'BackupOnPremises_v20210101.UntagResource' = 0 }

	export enum UpdateGatewayInformationX_Amz_Target { 'BackupOnPremises_v20210101.UpdateGatewayInformation' = 0 }

	export enum UpdateGatewaySoftwareNowX_Amz_Target { 'BackupOnPremises_v20210101.UpdateGatewaySoftwareNow' = 0 }

	export enum UpdateHypervisorX_Amz_Target { 'BackupOnPremises_v20210101.UpdateHypervisor' = 0 }

}

