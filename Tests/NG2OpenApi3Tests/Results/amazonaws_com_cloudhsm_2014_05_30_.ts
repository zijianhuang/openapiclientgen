import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddTagsToResourceResponse {

		/** Required */
		Status: string;
	}
	export interface AddTagsToResourceResponseFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceResponseFormGroup() {
		return new FormGroup<AddTagsToResourceResponseFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddTagsToResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagList: Array<Tag>;
	}
	export interface AddTagsToResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceRequestFormGroup() {
		return new FormGroup<AddTagsToResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource. */
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

	export interface CloudHsmServiceException {
	}
	export interface CloudHsmServiceExceptionFormProperties {
	}
	export function CreateCloudHsmServiceExceptionFormGroup() {
		return new FormGroup<CloudHsmServiceExceptionFormProperties>({
		});

	}

	export interface CloudHsmInternalException {
	}
	export interface CloudHsmInternalExceptionFormProperties {
	}
	export function CreateCloudHsmInternalExceptionFormGroup() {
		return new FormGroup<CloudHsmInternalExceptionFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}


	/** Contains the output of the <a>CreateHAPartitionGroup</a> action. */
	export interface CreateHapgResponse {
		HapgArn?: string;
	}

	/** Contains the output of the <a>CreateHAPartitionGroup</a> action. */
	export interface CreateHapgResponseFormProperties {
		HapgArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHapgResponseFormGroup() {
		return new FormGroup<CreateHapgResponseFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateHapgRequest</a> action. */
	export interface CreateHapgRequest {

		/** Required */
		Label: string;
	}

	/** Contains the inputs for the <a>CreateHapgRequest</a> action. */
	export interface CreateHapgRequestFormProperties {

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateCreateHapgRequestFormGroup() {
		return new FormGroup<CreateHapgRequestFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output of the <code>CreateHsm</code> operation. */
	export interface CreateHsmResponse {
		HsmArn?: string;
	}

	/** Contains the output of the <code>CreateHsm</code> operation. */
	export interface CreateHsmResponseFormProperties {
		HsmArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHsmResponseFormGroup() {
		return new FormGroup<CreateHsmResponseFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <code>CreateHsm</code> operation. */
	export interface CreateHsmRequest {

		/** Required */
		SubnetId: string;

		/** Required */
		SshKey: string;
		EniIp?: string;

		/** Required */
		IamRoleArn: string;
		ExternalId?: string;

		/**
		 * <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
		 * Required
		 */
		SubscriptionType: CreateHsmRequestSubscriptionType;
		ClientToken?: string;
		SyslogIp?: string;
	}

	/** Contains the inputs for the <code>CreateHsm</code> operation. */
	export interface CreateHsmRequestFormProperties {

		/** Required */
		SubnetId: FormControl<string | null | undefined>,

		/** Required */
		SshKey: FormControl<string | null | undefined>,
		EniIp: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
		 * Required
		 */
		SubscriptionType: FormControl<CreateHsmRequestSubscriptionType | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		SyslogIp: FormControl<string | null | undefined>,
	}
	export function CreateCreateHsmRequestFormGroup() {
		return new FormGroup<CreateHsmRequestFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EniIp: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			SubscriptionType: new FormControl<CreateHsmRequestSubscriptionType | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			SyslogIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateHsmRequestSubscriptionType { PRODUCTION = 'PRODUCTION' }


	/** Contains the output of the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientResponse {
		ClientArn?: string;
	}

	/** Contains the output of the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientResponseFormProperties {
		ClientArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLunaClientResponseFormGroup() {
		return new FormGroup<CreateLunaClientResponseFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientRequest {
		Label?: string;

		/** Required */
		Certificate: string;
	}

	/** Contains the inputs for the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientRequestFormProperties {
		Label: FormControl<string | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,
	}
	export function CreateCreateLunaClientRequestFormGroup() {
		return new FormGroup<CreateLunaClientRequestFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output of the <a>DeleteHapg</a> action. */
	export interface DeleteHapgResponse {

		/** Required */
		Status: string;
	}

	/** Contains the output of the <a>DeleteHapg</a> action. */
	export interface DeleteHapgResponseFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHapgResponseFormGroup() {
		return new FormGroup<DeleteHapgResponseFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the inputs for the <a>DeleteHapg</a> action. */
	export interface DeleteHapgRequest {

		/** Required */
		HapgArn: string;
	}

	/** Contains the inputs for the <a>DeleteHapg</a> action. */
	export interface DeleteHapgRequestFormProperties {

		/** Required */
		HapgArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHapgRequestFormGroup() {
		return new FormGroup<DeleteHapgRequestFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output of the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmResponse {

		/** Required */
		Status: string;
	}

	/** Contains the output of the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmResponseFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmResponseFormGroup() {
		return new FormGroup<DeleteHsmResponseFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the inputs for the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmRequest {

		/** Required */
		HsmArn: string;
	}

	/** Contains the inputs for the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmRequestFormProperties {

		/** Required */
		HsmArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmRequestFormGroup() {
		return new FormGroup<DeleteHsmRequestFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLunaClientResponse {

		/** Required */
		Status: string;
	}
	export interface DeleteLunaClientResponseFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLunaClientResponseFormGroup() {
		return new FormGroup<DeleteLunaClientResponseFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLunaClientRequest {

		/** Required */
		ClientArn: string;
	}
	export interface DeleteLunaClientRequestFormProperties {

		/** Required */
		ClientArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLunaClientRequestFormGroup() {
		return new FormGroup<DeleteLunaClientRequestFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output of the <a>DescribeHapg</a> action. */
	export interface DescribeHapgResponse {
		HapgArn?: string;
		HapgSerial?: string;
		HsmsLastActionFailed?: Array<string>;
		HsmsPendingDeletion?: Array<string>;
		HsmsPendingRegistration?: Array<string>;
		Label?: string;
		LastModifiedTimestamp?: string;
		PartitionSerialList?: Array<string>;
		State?: CloudHsmObjectState;
	}

	/** Contains the output of the <a>DescribeHapg</a> action. */
	export interface DescribeHapgResponseFormProperties {
		HapgArn: FormControl<string | null | undefined>,
		HapgSerial: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		LastModifiedTimestamp: FormControl<string | null | undefined>,
		State: FormControl<CloudHsmObjectState | null | undefined>,
	}
	export function CreateDescribeHapgResponseFormGroup() {
		return new FormGroup<DescribeHapgResponseFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined),
			HapgSerial: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			LastModifiedTimestamp: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CloudHsmObjectState | null | undefined>(undefined),
		});

	}

	export enum CloudHsmObjectState { READY = 'READY', UPDATING = 'UPDATING', DEGRADED = 'DEGRADED' }


	/** Contains the inputs for the <a>DescribeHapg</a> action. */
	export interface DescribeHapgRequest {

		/** Required */
		HapgArn: string;
	}

	/** Contains the inputs for the <a>DescribeHapg</a> action. */
	export interface DescribeHapgRequestFormProperties {

		/** Required */
		HapgArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHapgRequestFormGroup() {
		return new FormGroup<DescribeHapgRequestFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output of the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmResponse {
		HsmArn?: string;
		Status?: HsmStatus;
		StatusDetails?: string;
		AvailabilityZone?: string;
		EniId?: string;
		EniIp?: string;

		/** <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
		SubscriptionType?: CreateHsmRequestSubscriptionType | null;
		SubscriptionStartDate?: string;
		SubscriptionEndDate?: string;
		VpcId?: string;
		SubnetId?: string;
		IamRoleArn?: string;
		SerialNumber?: string;
		VendorName?: string;
		HsmType?: string;
		SoftwareVersion?: string;
		SshPublicKey?: string;
		SshKeyLastUpdated?: string;
		ServerCertUri?: string;
		ServerCertLastUpdated?: string;
		Partitions?: Array<string>;
	}

	/** Contains the output of the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmResponseFormProperties {
		HsmArn: FormControl<string | null | undefined>,
		Status: FormControl<HsmStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		EniId: FormControl<string | null | undefined>,
		EniIp: FormControl<string | null | undefined>,

		/** <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
		SubscriptionType: FormControl<CreateHsmRequestSubscriptionType | null | undefined>,
		SubscriptionStartDate: FormControl<string | null | undefined>,
		SubscriptionEndDate: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		VendorName: FormControl<string | null | undefined>,
		HsmType: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
		SshPublicKey: FormControl<string | null | undefined>,
		SshKeyLastUpdated: FormControl<string | null | undefined>,
		ServerCertUri: FormControl<string | null | undefined>,
		ServerCertLastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHsmResponseFormGroup() {
		return new FormGroup<DescribeHsmResponseFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<HsmStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			EniId: new FormControl<string | null | undefined>(undefined),
			EniIp: new FormControl<string | null | undefined>(undefined),
			SubscriptionType: new FormControl<CreateHsmRequestSubscriptionType | null | undefined>(undefined),
			SubscriptionStartDate: new FormControl<string | null | undefined>(undefined),
			SubscriptionEndDate: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			VendorName: new FormControl<string | null | undefined>(undefined),
			HsmType: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
			SshKeyLastUpdated: new FormControl<string | null | undefined>(undefined),
			ServerCertUri: new FormControl<string | null | undefined>(undefined),
			ServerCertLastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HsmStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', UPDATING = 'UPDATING', SUSPENDED = 'SUSPENDED', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', DEGRADED = 'DEGRADED' }


	/** Contains the inputs for the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmRequest {
		HsmArn?: string;
		HsmSerialNumber?: string;
	}

	/** Contains the inputs for the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmRequestFormProperties {
		HsmArn: FormControl<string | null | undefined>,
		HsmSerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHsmRequestFormGroup() {
		return new FormGroup<DescribeHsmRequestFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined),
			HsmSerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLunaClientResponse {
		ClientArn?: string;
		Certificate?: string;
		CertificateFingerprint?: string;
		LastModifiedTimestamp?: string;
		Label?: string;
	}
	export interface DescribeLunaClientResponseFormProperties {
		ClientArn: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		CertificateFingerprint: FormControl<string | null | undefined>,
		LastModifiedTimestamp: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLunaClientResponseFormGroup() {
		return new FormGroup<DescribeLunaClientResponseFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateFingerprint: new FormControl<string | null | undefined>(undefined),
			LastModifiedTimestamp: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLunaClientRequest {
		ClientArn?: string;
		CertificateFingerprint?: string;
	}
	export interface DescribeLunaClientRequestFormProperties {
		ClientArn: FormControl<string | null | undefined>,
		CertificateFingerprint: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLunaClientRequestFormGroup() {
		return new FormGroup<DescribeLunaClientRequestFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined),
			CertificateFingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConfigResponse {
		ConfigType?: string;
		ConfigFile?: string;
		ConfigCred?: string;
	}
	export interface GetConfigResponseFormProperties {
		ConfigType: FormControl<string | null | undefined>,
		ConfigFile: FormControl<string | null | undefined>,
		ConfigCred: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigResponseFormGroup() {
		return new FormGroup<GetConfigResponseFormProperties>({
			ConfigType: new FormControl<string | null | undefined>(undefined),
			ConfigFile: new FormControl<string | null | undefined>(undefined),
			ConfigCred: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConfigRequest {

		/** Required */
		ClientArn: string;

		/** Required */
		ClientVersion: ClientVersion;

		/** Required */
		HapgList: Array<string>;
	}
	export interface GetConfigRequestFormProperties {

		/** Required */
		ClientArn: FormControl<string | null | undefined>,

		/** Required */
		ClientVersion: FormControl<ClientVersion | null | undefined>,
	}
	export function CreateGetConfigRequestFormGroup() {
		return new FormGroup<GetConfigRequestFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientVersion: new FormControl<ClientVersion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClientVersion { _5_1 = '5.1', _5_3 = '5.3' }

	export interface ListAvailableZonesResponse {
		AZList?: Array<string>;
	}
	export interface ListAvailableZonesResponseFormProperties {
	}
	export function CreateListAvailableZonesResponseFormGroup() {
		return new FormGroup<ListAvailableZonesResponseFormProperties>({
		});

	}


	/** Contains the inputs for the <a>ListAvailableZones</a> action. */
	export interface ListAvailableZonesRequest {
	}

	/** Contains the inputs for the <a>ListAvailableZones</a> action. */
	export interface ListAvailableZonesRequestFormProperties {
	}
	export function CreateListAvailableZonesRequestFormGroup() {
		return new FormGroup<ListAvailableZonesRequestFormProperties>({
		});

	}

	export interface ListHapgsResponse {

		/** Required */
		HapgList: Array<string>;
		NextToken?: string;
	}
	export interface ListHapgsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHapgsResponseFormGroup() {
		return new FormGroup<ListHapgsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHapgsRequest {
		NextToken?: string;
	}
	export interface ListHapgsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHapgsRequestFormGroup() {
		return new FormGroup<ListHapgsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of the <code>ListHsms</code> operation. */
	export interface ListHsmsResponse {
		HsmList?: Array<string>;
		NextToken?: string;
	}

	/** Contains the output of the <code>ListHsms</code> operation. */
	export interface ListHsmsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHsmsResponseFormGroup() {
		return new FormGroup<ListHsmsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHsmsRequest {
		NextToken?: string;
	}
	export interface ListHsmsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHsmsRequestFormGroup() {
		return new FormGroup<ListHsmsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLunaClientsResponse {

		/** Required */
		ClientList: Array<string>;
		NextToken?: string;
	}
	export interface ListLunaClientsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLunaClientsResponseFormGroup() {
		return new FormGroup<ListLunaClientsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLunaClientsRequest {
		NextToken?: string;
	}
	export interface ListLunaClientsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLunaClientsRequestFormGroup() {
		return new FormGroup<ListLunaClientsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		TagList: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyHapgResponse {
		HapgArn?: string;
	}
	export interface ModifyHapgResponseFormProperties {
		HapgArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyHapgResponseFormGroup() {
		return new FormGroup<ModifyHapgResponseFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyHapgRequest {

		/** Required */
		HapgArn: string;
		Label?: string;
		PartitionSerialList?: Array<string>;
	}
	export interface ModifyHapgRequestFormProperties {

		/** Required */
		HapgArn: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
	}
	export function CreateModifyHapgRequestFormGroup() {
		return new FormGroup<ModifyHapgRequestFormProperties>({
			HapgArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmResponse {
		HsmArn?: string;
	}

	/** Contains the output of the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmResponseFormProperties {
		HsmArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyHsmResponseFormGroup() {
		return new FormGroup<ModifyHsmResponseFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmRequest {

		/** Required */
		HsmArn: string;
		SubnetId?: string;
		EniIp?: string;
		IamRoleArn?: string;
		ExternalId?: string;
		SyslogIp?: string;
	}

	/** Contains the inputs for the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmRequestFormProperties {

		/** Required */
		HsmArn: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		EniIp: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		SyslogIp: FormControl<string | null | undefined>,
	}
	export function CreateModifyHsmRequestFormGroup() {
		return new FormGroup<ModifyHsmRequestFormProperties>({
			HsmArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			EniIp: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			SyslogIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyLunaClientResponse {
		ClientArn?: string;
	}
	export interface ModifyLunaClientResponseFormProperties {
		ClientArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyLunaClientResponseFormGroup() {
		return new FormGroup<ModifyLunaClientResponseFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyLunaClientRequest {

		/** Required */
		ClientArn: string;

		/** Required */
		Certificate: string;
	}
	export interface ModifyLunaClientRequestFormProperties {

		/** Required */
		ClientArn: FormControl<string | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,
	}
	export function CreateModifyLunaClientRequestFormGroup() {
		return new FormGroup<ModifyLunaClientRequestFormProperties>({
			ClientArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsFromResourceResponse {

		/** Required */
		Status: string;
	}
	export interface RemoveTagsFromResourceResponseFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceResponseFormGroup() {
		return new FormGroup<RemoveTagsFromResourceResponseFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsFromResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeyList: Array<string>;
	}
	export interface RemoveTagsFromResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceRequestFormGroup() {
		return new FormGroup<RemoveTagsFromResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
	export enum SubscriptionType { PRODUCTION = 'PRODUCTION' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResponse> {
			return this.http.post<AddTagsToResourceResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.CreateHapg
		 * @return {CreateHapgResponse} Success
		 */
		CreateHapg(requestBody: CreateHapgRequest): Observable<CreateHapgResponse> {
			return this.http.post<CreateHapgResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.CreateHapg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
		 * Post #X-Amz-Target=CloudHsmFrontendService.CreateHsm
		 * @return {CreateHsmResponse} Success
		 */
		CreateHsm(requestBody: CreateHsmRequest): Observable<CreateHsmResponse> {
			return this.http.post<CreateHsmResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.CreateHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.CreateLunaClient
		 * @return {CreateLunaClientResponse} Success
		 */
		CreateLunaClient(requestBody: CreateLunaClientRequest): Observable<CreateLunaClientResponse> {
			return this.http.post<CreateLunaClientResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DeleteHapg
		 * @return {DeleteHapgResponse} Success
		 */
		DeleteHapg(requestBody: DeleteHapgRequest): Observable<DeleteHapgResponse> {
			return this.http.post<DeleteHapgResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DeleteHapg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DeleteHsm
		 * @return {DeleteHsmResponse} Success
		 */
		DeleteHsm(requestBody: DeleteHsmRequest): Observable<DeleteHsmResponse> {
			return this.http.post<DeleteHsmResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DeleteHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient
		 * @return {DeleteLunaClientResponse} Success
		 */
		DeleteLunaClient(requestBody: DeleteLunaClientRequest): Observable<DeleteLunaClientResponse> {
			return this.http.post<DeleteLunaClientResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DescribeHapg
		 * @return {DescribeHapgResponse} Success
		 */
		DescribeHapg(requestBody: DescribeHapgRequest): Observable<DescribeHapgResponse> {
			return this.http.post<DescribeHapgResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DescribeHapg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DescribeHsm
		 * @return {DescribeHsmResponse} Success
		 */
		DescribeHsm(requestBody: DescribeHsmRequest): Observable<DescribeHsmResponse> {
			return this.http.post<DescribeHsmResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DescribeHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient
		 * @return {DescribeLunaClientResponse} Success
		 */
		DescribeLunaClient(requestBody: DescribeLunaClientRequest): Observable<DescribeLunaClientResponse> {
			return this.http.post<DescribeLunaClientResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.GetConfig
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(requestBody: GetConfigRequest): Observable<GetConfigResponse> {
			return this.http.post<GetConfigResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.GetConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ListAvailableZones
		 * @return {ListAvailableZonesResponse} Success
		 */
		ListAvailableZones(requestBody: ListAvailableZonesRequest): Observable<ListAvailableZonesResponse> {
			return this.http.post<ListAvailableZonesResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ListHapgs
		 * @return {ListHapgsResponse} Success
		 */
		ListHapgs(requestBody: ListHapgsRequest): Observable<ListHapgsResponse> {
			return this.http.post<ListHapgsResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ListHapgs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ListHsms
		 * @return {ListHsmsResponse} Success
		 */
		ListHsms(requestBody: ListHsmsRequest): Observable<ListHsmsResponse> {
			return this.http.post<ListHsmsResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ListHsms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ListLunaClients
		 * @return {ListLunaClientsResponse} Success
		 */
		ListLunaClients(requestBody: ListLunaClientsRequest): Observable<ListLunaClientsResponse> {
			return this.http.post<ListLunaClientsResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ListLunaClients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ModifyHapg
		 * @return {ModifyHapgResponse} Success
		 */
		ModifyHapg(requestBody: ModifyHapgRequest): Observable<ModifyHapgResponse> {
			return this.http.post<ModifyHapgResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ModifyHapg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ModifyHsm
		 * @return {ModifyHsmResponse} Success
		 */
		ModifyHsm(requestBody: ModifyHsmRequest): Observable<ModifyHsmResponse> {
			return this.http.post<ModifyHsmResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ModifyHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient
		 * @return {ModifyLunaClientResponse} Success
		 */
		ModifyLunaClient(requestBody: ModifyLunaClientRequest): Observable<ModifyLunaClientResponse> {
			return this.http.post<ModifyLunaClientResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
		 * Post #X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResponse> {
			return this.http.post<RemoveTagsFromResourceResponse>(this.baseUri + '#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { 'CloudHsmFrontendService.AddTagsToResource' = 'CloudHsmFrontendService.AddTagsToResource' }

	export enum CreateHapgX_Amz_Target { 'CloudHsmFrontendService.CreateHapg' = 'CloudHsmFrontendService.CreateHapg' }

	export enum CreateHsmX_Amz_Target { 'CloudHsmFrontendService.CreateHsm' = 'CloudHsmFrontendService.CreateHsm' }

	export enum CreateLunaClientX_Amz_Target { 'CloudHsmFrontendService.CreateLunaClient' = 'CloudHsmFrontendService.CreateLunaClient' }

	export enum DeleteHapgX_Amz_Target { 'CloudHsmFrontendService.DeleteHapg' = 'CloudHsmFrontendService.DeleteHapg' }

	export enum DeleteHsmX_Amz_Target { 'CloudHsmFrontendService.DeleteHsm' = 'CloudHsmFrontendService.DeleteHsm' }

	export enum DeleteLunaClientX_Amz_Target { 'CloudHsmFrontendService.DeleteLunaClient' = 'CloudHsmFrontendService.DeleteLunaClient' }

	export enum DescribeHapgX_Amz_Target { 'CloudHsmFrontendService.DescribeHapg' = 'CloudHsmFrontendService.DescribeHapg' }

	export enum DescribeHsmX_Amz_Target { 'CloudHsmFrontendService.DescribeHsm' = 'CloudHsmFrontendService.DescribeHsm' }

	export enum DescribeLunaClientX_Amz_Target { 'CloudHsmFrontendService.DescribeLunaClient' = 'CloudHsmFrontendService.DescribeLunaClient' }

	export enum GetConfigX_Amz_Target { 'CloudHsmFrontendService.GetConfig' = 'CloudHsmFrontendService.GetConfig' }

	export enum ListAvailableZonesX_Amz_Target { 'CloudHsmFrontendService.ListAvailableZones' = 'CloudHsmFrontendService.ListAvailableZones' }

	export enum ListHapgsX_Amz_Target { 'CloudHsmFrontendService.ListHapgs' = 'CloudHsmFrontendService.ListHapgs' }

	export enum ListHsmsX_Amz_Target { 'CloudHsmFrontendService.ListHsms' = 'CloudHsmFrontendService.ListHsms' }

	export enum ListLunaClientsX_Amz_Target { 'CloudHsmFrontendService.ListLunaClients' = 'CloudHsmFrontendService.ListLunaClients' }

	export enum ListTagsForResourceX_Amz_Target { 'CloudHsmFrontendService.ListTagsForResource' = 'CloudHsmFrontendService.ListTagsForResource' }

	export enum ModifyHapgX_Amz_Target { 'CloudHsmFrontendService.ModifyHapg' = 'CloudHsmFrontendService.ModifyHapg' }

	export enum ModifyHsmX_Amz_Target { 'CloudHsmFrontendService.ModifyHsm' = 'CloudHsmFrontendService.ModifyHsm' }

	export enum ModifyLunaClientX_Amz_Target { 'CloudHsmFrontendService.ModifyLunaClient' = 'CloudHsmFrontendService.ModifyLunaClient' }

	export enum RemoveTagsFromResourceX_Amz_Target { 'CloudHsmFrontendService.RemoveTagsFromResource' = 'CloudHsmFrontendService.RemoveTagsFromResource' }

}

