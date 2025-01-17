import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** <p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note> */
	export interface ActivateGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** <p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note> */
	export interface ActivateGatewayOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateActivateGatewayOutputFormGroup() {
		return new FormGroup<ActivateGatewayOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> </ul> */
	export interface ActivateGatewayInput {

		/** Required */
		ActivationKey: string;

		/** Required */
		GatewayName: string;

		/** Required */
		GatewayTimezone: string;

		/** Required */
		GatewayRegion: string;
		GatewayType?: string;
		TapeDriveType?: string;
		MediumChangerType?: string;
		Tags?: Array<Tag>;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> </ul> */
	export interface ActivateGatewayInputFormProperties {

		/** Required */
		ActivationKey: FormControl<string | null | undefined>,

		/** Required */
		GatewayName: FormControl<string | null | undefined>,

		/** Required */
		GatewayTimezone: FormControl<string | null | undefined>,

		/** Required */
		GatewayRegion: FormControl<string | null | undefined>,
		GatewayType: FormControl<string | null | undefined>,
		TapeDriveType: FormControl<string | null | undefined>,
		MediumChangerType: FormControl<string | null | undefined>,
	}
	export function CreateActivateGatewayInputFormGroup() {
		return new FormGroup<ActivateGatewayInputFormProperties>({
			ActivationKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayTimezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayType: new FormControl<string | null | undefined>(undefined),
			TapeDriveType: new FormControl<string | null | undefined>(undefined),
			MediumChangerType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /. */
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

	export interface InvalidGatewayRequestException {
	}
	export interface InvalidGatewayRequestExceptionFormProperties {
	}
	export function CreateInvalidGatewayRequestExceptionFormGroup() {
		return new FormGroup<InvalidGatewayRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface AddCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface AddCacheOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddCacheOutputFormGroup() {
		return new FormGroup<AddCacheOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface AddCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		DiskIds: Array<string>;
	}
	export interface AddCacheInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddCacheInputFormGroup() {
		return new FormGroup<AddCacheInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** AddTagsToResourceOutput */
	export interface AddTagsToResourceOutput {
		ResourceARN?: string;
	}

	/** AddTagsToResourceOutput */
	export interface AddTagsToResourceOutputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceOutputFormGroup() {
		return new FormGroup<AddTagsToResourceOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AddTagsToResourceInput */
	export interface AddTagsToResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** AddTagsToResourceInput */
	export interface AddTagsToResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceInputFormGroup() {
		return new FormGroup<AddTagsToResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddUploadBufferOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface AddUploadBufferOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddUploadBufferOutputFormGroup() {
		return new FormGroup<AddUploadBufferOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface AddUploadBufferInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		DiskIds: Array<string>;
	}
	export interface AddUploadBufferInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddUploadBufferInputFormGroup() {
		return new FormGroup<AddUploadBufferInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured. */
	export interface AddWorkingStorageOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured. */
	export interface AddWorkingStorageOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkingStorageOutputFormGroup() {
		return new FormGroup<AddWorkingStorageOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul> */
	export interface AddWorkingStorageInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		DiskIds: Array<string>;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul> */
	export interface AddWorkingStorageInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkingStorageInputFormGroup() {
		return new FormGroup<AddWorkingStorageInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface AssignTapePoolOutput {
		TapeARN?: string;
	}
	export interface AssignTapePoolOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateAssignTapePoolOutputFormGroup() {
		return new FormGroup<AssignTapePoolOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssignTapePoolInput {

		/** Required */
		TapeARN: string;

		/** Required */
		PoolId: string;
		BypassGovernanceRetention?: boolean | null;
	}
	export interface AssignTapePoolInputFormProperties {

		/** Required */
		TapeARN: FormControl<string | null | undefined>,

		/** Required */
		PoolId: FormControl<string | null | undefined>,
		BypassGovernanceRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateAssignTapePoolInputFormGroup() {
		return new FormGroup<AssignTapePoolInputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BypassGovernanceRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateFileSystemOutput {
		FileSystemAssociationARN?: string;
	}
	export interface AssociateFileSystemOutputFormProperties {
		FileSystemAssociationARN: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFileSystemOutputFormGroup() {
		return new FormGroup<AssociateFileSystemOutputFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateFileSystemInput {

		/** Required */
		UserName: string;

		/** Required */
		Password: string;

		/** Required */
		ClientToken: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		LocationARN: string;
		Tags?: Array<Tag>;
		AuditDestinationARN?: string;

		/** The refresh cache information for the file share or FSx file systems. */
		CacheAttributes?: CacheAttributes;
		EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
	}
	export interface AssociateFileSystemInputFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		LocationARN: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFileSystemInputFormGroup() {
		return new FormGroup<AssociateFileSystemInputFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			LocationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The refresh cache information for the file share or FSx file systems. */
	export interface CacheAttributes {
		CacheStaleTimeoutInSeconds?: number | null;
	}

	/** The refresh cache information for the file share or FSx file systems. */
	export interface CacheAttributesFormProperties {
		CacheStaleTimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCacheAttributesFormGroup() {
		return new FormGroup<CacheAttributesFormProperties>({
			CacheStaleTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies network configuration information for the gateway associated with the Amazon FSx file system. */
	export interface EndpointNetworkConfiguration {
		IpAddresses?: Array<string>;
	}

	/** Specifies network configuration information for the gateway associated with the Amazon FSx file system. */
	export interface EndpointNetworkConfigurationFormProperties {
	}
	export function CreateEndpointNetworkConfigurationFormGroup() {
		return new FormGroup<EndpointNetworkConfigurationFormProperties>({
		});

	}


	/** AttachVolumeOutput */
	export interface AttachVolumeOutput {
		VolumeARN?: string;
		TargetARN?: string;
	}

	/** AttachVolumeOutput */
	export interface AttachVolumeOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		TargetARN: FormControl<string | null | undefined>,
	}
	export function CreateAttachVolumeOutputFormGroup() {
		return new FormGroup<AttachVolumeOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			TargetARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AttachVolumeInput */
	export interface AttachVolumeInput {

		/** Required */
		GatewayARN: string;
		TargetName?: string;

		/** Required */
		VolumeARN: string;

		/** Required */
		NetworkInterfaceId: string;
		DiskId?: string;
	}

	/** AttachVolumeInput */
	export interface AttachVolumeInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,
		TargetName: FormControl<string | null | undefined>,

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,

		/** Required */
		NetworkInterfaceId: FormControl<string | null | undefined>,
		DiskId: FormControl<string | null | undefined>,
	}
	export function CreateAttachVolumeInputFormGroup() {
		return new FormGroup<AttachVolumeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetName: new FormControl<string | null | undefined>(undefined),
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DiskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CancelArchivalOutput */
	export interface CancelArchivalOutput {
		TapeARN?: string;
	}

	/** CancelArchivalOutput */
	export interface CancelArchivalOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateCancelArchivalOutputFormGroup() {
		return new FormGroup<CancelArchivalOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CancelArchivalInput */
	export interface CancelArchivalInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		TapeARN: string;
	}

	/** CancelArchivalInput */
	export interface CancelArchivalInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateCancelArchivalInputFormGroup() {
		return new FormGroup<CancelArchivalInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** CancelRetrievalOutput */
	export interface CancelRetrievalOutput {
		TapeARN?: string;
	}

	/** CancelRetrievalOutput */
	export interface CancelRetrievalOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateCancelRetrievalOutputFormGroup() {
		return new FormGroup<CancelRetrievalOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CancelRetrievalInput */
	export interface CancelRetrievalInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		TapeARN: string;
	}

	/** CancelRetrievalInput */
	export interface CancelRetrievalInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateCancelRetrievalInputFormGroup() {
		return new FormGroup<CancelRetrievalInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCachediSCSIVolumeOutput {
		VolumeARN?: string;
		TargetARN?: string;
	}
	export interface CreateCachediSCSIVolumeOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		TargetARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateCachediSCSIVolumeOutputFormGroup() {
		return new FormGroup<CreateCachediSCSIVolumeOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			TargetARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCachediSCSIVolumeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		VolumeSizeInBytes: number;
		SnapshotId?: string;

		/** Required */
		TargetName: string;
		SourceVolumeARN?: string;

		/** Required */
		NetworkInterfaceId: string;

		/** Required */
		ClientToken: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateCachediSCSIVolumeInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,

		/** Required */
		TargetName: FormControl<string | null | undefined>,
		SourceVolumeARN: FormControl<string | null | undefined>,

		/** Required */
		NetworkInterfaceId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateCachediSCSIVolumeInputFormGroup() {
		return new FormGroup<CreateCachediSCSIVolumeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			TargetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceVolumeARN: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateNFSFileShareOutput */
	export interface CreateNFSFileShareOutput {
		FileShareARN?: string;
	}

	/** CreateNFSFileShareOutput */
	export interface CreateNFSFileShareOutputFormProperties {
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateNFSFileShareOutputFormGroup() {
		return new FormGroup<CreateNFSFileShareOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateNFSFileShareInput */
	export interface CreateNFSFileShareInput {

		/** Required */
		ClientToken: string;
		NFSFileShareDefaults?: NFSFileShareDefaults;

		/** Required */
		GatewayARN: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;

		/** Required */
		Role: string;

		/** Required */
		LocationARN: string;
		DefaultStorageClass?: string;
		ObjectACL?: ObjectACL;
		ClientList?: Array<string>;
		Squash?: string;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		Tags?: Array<Tag>;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		VPCEndpointDNSName?: string;
		BucketRegion?: string;
		AuditDestinationARN?: string;
	}

	/** CreateNFSFileShareInput */
	export interface CreateNFSFileShareInputFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		LocationARN: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,
		ObjectACL: FormControl<ObjectACL | null | undefined>,
		Squash: FormControl<string | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		VPCEndpointDNSName: FormControl<string | null | undefined>,
		BucketRegion: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateNFSFileShareInputFormGroup() {
		return new FormGroup<CreateNFSFileShareInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			Squash: new FormControl<string | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			VPCEndpointDNSName: new FormControl<string | null | undefined>(undefined),
			BucketRegion: new FormControl<string | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways. */
	export interface NFSFileShareDefaults {
		FileMode?: string;
		DirectoryMode?: string;
		GroupId?: number | null;
		OwnerId?: number | null;
	}

	/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways. */
	export interface NFSFileShareDefaultsFormProperties {
		FileMode: FormControl<string | null | undefined>,
		DirectoryMode: FormControl<string | null | undefined>,
		GroupId: FormControl<number | null | undefined>,
		OwnerId: FormControl<number | null | undefined>,
	}
	export function CreateNFSFileShareDefaultsFormGroup() {
		return new FormGroup<NFSFileShareDefaultsFormProperties>({
			FileMode: new FormControl<string | null | undefined>(undefined),
			DirectoryMode: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<number | null | undefined>(undefined),
			OwnerId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>. */
	export enum ObjectACL { private = 'private', 'public-read' = 'public-read', 'public-read-write' = 'public-read-write', 'authenticated-read' = 'authenticated-read', 'bucket-owner-read' = 'bucket-owner-read', 'bucket-owner-full-control' = 'bucket-owner-full-control', 'aws-exec-read' = 'aws-exec-read' }


	/** CreateSMBFileShareOutput */
	export interface CreateSMBFileShareOutput {
		FileShareARN?: string;
	}

	/** CreateSMBFileShareOutput */
	export interface CreateSMBFileShareOutputFormProperties {
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateSMBFileShareOutputFormGroup() {
		return new FormGroup<CreateSMBFileShareOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateSMBFileShareInput */
	export interface CreateSMBFileShareInput {

		/** Required */
		ClientToken: string;

		/** Required */
		GatewayARN: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;

		/** Required */
		Role: string;

		/** Required */
		LocationARN: string;
		DefaultStorageClass?: string;
		ObjectACL?: ObjectACL;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		SMBACLEnabled?: boolean | null;
		AccessBasedEnumeration?: boolean | null;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;
		Authentication?: string;
		CaseSensitivity?: CaseSensitivity;
		Tags?: Array<Tag>;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		VPCEndpointDNSName?: string;
		BucketRegion?: string;
		OplocksEnabled?: boolean | null;
	}

	/** CreateSMBFileShareInput */
	export interface CreateSMBFileShareInputFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		LocationARN: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,
		ObjectACL: FormControl<ObjectACL | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		SMBACLEnabled: FormControl<boolean | null | undefined>,
		AccessBasedEnumeration: FormControl<boolean | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
		Authentication: FormControl<string | null | undefined>,
		CaseSensitivity: FormControl<CaseSensitivity | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		VPCEndpointDNSName: FormControl<string | null | undefined>,
		BucketRegion: FormControl<string | null | undefined>,
		OplocksEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSMBFileShareInputFormGroup() {
		return new FormGroup<CreateSMBFileShareInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			SMBACLEnabled: new FormControl<boolean | null | undefined>(undefined),
			AccessBasedEnumeration: new FormControl<boolean | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined),
			CaseSensitivity: new FormControl<CaseSensitivity | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			VPCEndpointDNSName: new FormControl<string | null | undefined>(undefined),
			BucketRegion: new FormControl<string | null | undefined>(undefined),
			OplocksEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CaseSensitivity { ClientSpecified = 'ClientSpecified', CaseSensitive = 'CaseSensitive' }


	/** A JSON object containing the following fields: */
	export interface CreateSnapshotOutput {
		VolumeARN?: string;
		SnapshotId?: string;
	}

	/** A JSON object containing the following fields: */
	export interface CreateSnapshotOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotOutputFormGroup() {
		return new FormGroup<CreateSnapshotOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul> */
	export interface CreateSnapshotInput {

		/** Required */
		VolumeARN: string;

		/** Required */
		SnapshotDescription: string;
		Tags?: Array<Tag>;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul> */
	export interface CreateSnapshotInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,

		/** Required */
		SnapshotDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotInputFormGroup() {
		return new FormGroup<CreateSnapshotInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceUnavailableError {
	}
	export interface ServiceUnavailableErrorFormProperties {
	}
	export function CreateServiceUnavailableErrorFormGroup() {
		return new FormGroup<ServiceUnavailableErrorFormProperties>({
		});

	}

	export interface CreateSnapshotFromVolumeRecoveryPointOutput {
		SnapshotId?: string;
		VolumeARN?: string;
		VolumeRecoveryPointTime?: string;
	}
	export interface CreateSnapshotFromVolumeRecoveryPointOutputFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
		VolumeARN: FormControl<string | null | undefined>,
		VolumeRecoveryPointTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotFromVolumeRecoveryPointOutputFormGroup() {
		return new FormGroup<CreateSnapshotFromVolumeRecoveryPointOutputFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeRecoveryPointTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSnapshotFromVolumeRecoveryPointInput {

		/** Required */
		VolumeARN: string;

		/** Required */
		SnapshotDescription: string;
		Tags?: Array<Tag>;
	}
	export interface CreateSnapshotFromVolumeRecoveryPointInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,

		/** Required */
		SnapshotDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotFromVolumeRecoveryPointInputFormGroup() {
		return new FormGroup<CreateSnapshotFromVolumeRecoveryPointInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A JSON object containing the following fields: */
	export interface CreateStorediSCSIVolumeOutput {
		VolumeARN?: string;
		VolumeSizeInBytes?: number | null;
		TargetARN?: string;
	}

	/** A JSON object containing the following fields: */
	export interface CreateStorediSCSIVolumeOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		TargetARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateStorediSCSIVolumeOutputFormGroup() {
		return new FormGroup<CreateStorediSCSIVolumeOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			TargetARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul> */
	export interface CreateStorediSCSIVolumeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		DiskId: string;
		SnapshotId?: string;

		/** Required */
		PreserveExistingData: boolean;

		/** Required */
		TargetName: string;

		/** Required */
		NetworkInterfaceId: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		Tags?: Array<Tag>;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul> */
	export interface CreateStorediSCSIVolumeInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		DiskId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,

		/** Required */
		PreserveExistingData: FormControl<boolean | null | undefined>,

		/** Required */
		TargetName: FormControl<string | null | undefined>,

		/** Required */
		NetworkInterfaceId: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateStorediSCSIVolumeInputFormGroup() {
		return new FormGroup<CreateStorediSCSIVolumeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			DiskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			PreserveExistingData: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			TargetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTapePoolOutput {
		PoolARN?: string;
	}
	export interface CreateTapePoolOutputFormProperties {
		PoolARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateTapePoolOutputFormGroup() {
		return new FormGroup<CreateTapePoolOutputFormProperties>({
			PoolARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTapePoolInput {

		/** Required */
		PoolName: string;

		/** Required */
		StorageClass: TapeStorageClass;
		RetentionLockType?: RetentionLockType;
		RetentionLockTimeInDays?: number | null;
		Tags?: Array<Tag>;
	}
	export interface CreateTapePoolInputFormProperties {

		/** Required */
		PoolName: FormControl<string | null | undefined>,

		/** Required */
		StorageClass: FormControl<TapeStorageClass | null | undefined>,
		RetentionLockType: FormControl<RetentionLockType | null | undefined>,
		RetentionLockTimeInDays: FormControl<number | null | undefined>,
	}
	export function CreateCreateTapePoolInputFormGroup() {
		return new FormGroup<CreateTapePoolInputFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageClass: new FormControl<TapeStorageClass | null | undefined>(undefined, [Validators.required]),
			RetentionLockType: new FormControl<RetentionLockType | null | undefined>(undefined),
			RetentionLockTimeInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TapeStorageClass { DEEP_ARCHIVE = 'DEEP_ARCHIVE', GLACIER = 'GLACIER' }

	export enum RetentionLockType { COMPLIANCE = 'COMPLIANCE', GOVERNANCE = 'GOVERNANCE', NONE = 'NONE' }


	/** CreateTapeOutput */
	export interface CreateTapeWithBarcodeOutput {
		TapeARN?: string;
	}

	/** CreateTapeOutput */
	export interface CreateTapeWithBarcodeOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateTapeWithBarcodeOutputFormGroup() {
		return new FormGroup<CreateTapeWithBarcodeOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateTapeWithBarcodeInput */
	export interface CreateTapeWithBarcodeInput {

		/** Required */
		GatewayARN: string;

		/** Required */
		TapeSizeInBytes: number;

		/** Required */
		TapeBarcode: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		PoolId?: string;
		Worm?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** CreateTapeWithBarcodeInput */
	export interface CreateTapeWithBarcodeInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		TapeSizeInBytes: FormControl<number | null | undefined>,

		/** Required */
		TapeBarcode: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Worm: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTapeWithBarcodeInputFormGroup() {
		return new FormGroup<CreateTapeWithBarcodeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TapeBarcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Worm: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** CreateTapeOutput */
	export interface CreateTapesOutput {
		TapeARNs?: Array<string>;
	}

	/** CreateTapeOutput */
	export interface CreateTapesOutputFormProperties {
	}
	export function CreateCreateTapesOutputFormGroup() {
		return new FormGroup<CreateTapesOutputFormProperties>({
		});

	}


	/** CreateTapesInput */
	export interface CreateTapesInput {

		/** Required */
		GatewayARN: string;

		/** Required */
		TapeSizeInBytes: number;

		/** Required */
		ClientToken: string;

		/** Required */
		NumTapesToCreate: number;

		/** Required */
		TapeBarcodePrefix: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		PoolId?: string;
		Worm?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** CreateTapesInput */
	export interface CreateTapesInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		TapeSizeInBytes: FormControl<number | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		NumTapesToCreate: FormControl<number | null | undefined>,

		/** Required */
		TapeBarcodePrefix: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Worm: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTapesInputFormGroup() {
		return new FormGroup<CreateTapesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumTapesToCreate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TapeBarcodePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Worm: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAutomaticTapeCreationPolicyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface DeleteAutomaticTapeCreationPolicyOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAutomaticTapeCreationPolicyOutputFormGroup() {
		return new FormGroup<DeleteAutomaticTapeCreationPolicyOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DeleteAutomaticTapeCreationPolicyInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DeleteAutomaticTapeCreationPolicyInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAutomaticTapeCreationPolicyInputFormGroup() {
		return new FormGroup<DeleteAutomaticTapeCreationPolicyInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted. */
	export interface DeleteBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted. */
	export interface DeleteBandwidthRateLimitOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBandwidthRateLimitOutputFormGroup() {
		return new FormGroup<DeleteBandwidthRateLimitOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul> */
	export interface DeleteBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		BandwidthType: string;
	}

	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul> */
	export interface DeleteBandwidthRateLimitInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		BandwidthType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBandwidthRateLimitInputFormGroup() {
		return new FormGroup<DeleteBandwidthRateLimitInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			BandwidthType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A JSON object containing the following fields: */
	export interface DeleteChapCredentialsOutput {
		TargetARN?: string;
		InitiatorName?: string;
	}

	/** A JSON object containing the following fields: */
	export interface DeleteChapCredentialsOutputFormProperties {
		TargetARN: FormControl<string | null | undefined>,
		InitiatorName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChapCredentialsOutputFormGroup() {
		return new FormGroup<DeleteChapCredentialsOutputFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined),
			InitiatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface DeleteChapCredentialsInput {

		/** Required */
		TargetARN: string;

		/** Required */
		InitiatorName: string;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface DeleteChapCredentialsInputFormProperties {

		/** Required */
		TargetARN: FormControl<string | null | undefined>,

		/** Required */
		InitiatorName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChapCredentialsInputFormGroup() {
		return new FormGroup<DeleteChapCredentialsInputFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitiatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DeleteFileShareOutput */
	export interface DeleteFileShareOutput {
		FileShareARN?: string;
	}

	/** DeleteFileShareOutput */
	export interface DeleteFileShareOutputFormProperties {
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileShareOutputFormGroup() {
		return new FormGroup<DeleteFileShareOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeleteFileShareInput */
	export interface DeleteFileShareInput {

		/** Required */
		FileShareARN: string;
		ForceDelete?: boolean | null;
	}

	/** DeleteFileShareInput */
	export interface DeleteFileShareInputFormProperties {

		/** Required */
		FileShareARN: FormControl<string | null | undefined>,
		ForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFileShareInputFormGroup() {
		return new FormGroup<DeleteFileShareInputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the ID of the deleted gateway. */
	export interface DeleteGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the ID of the deleted gateway. */
	export interface DeleteGatewayOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayOutputFormGroup() {
		return new FormGroup<DeleteGatewayOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the ID of the gateway to delete. */
	export interface DeleteGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the ID of the gateway to delete. */
	export interface DeleteGatewayInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayInputFormGroup() {
		return new FormGroup<DeleteGatewayInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DeleteSnapshotScheduleOutput {
		VolumeARN?: string;
	}
	export interface DeleteSnapshotScheduleOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotScheduleOutputFormGroup() {
		return new FormGroup<DeleteSnapshotScheduleOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSnapshotScheduleInput {

		/** Required */
		VolumeARN: string;
	}
	export interface DeleteSnapshotScheduleInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotScheduleInputFormGroup() {
		return new FormGroup<DeleteSnapshotScheduleInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DeleteTapeOutput */
	export interface DeleteTapeOutput {
		TapeARN?: string;
	}

	/** DeleteTapeOutput */
	export interface DeleteTapeOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTapeOutputFormGroup() {
		return new FormGroup<DeleteTapeOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeleteTapeInput */
	export interface DeleteTapeInput {

		/** Required */
		GatewayARN: string;

		/** Required */
		TapeARN: string;
		BypassGovernanceRetention?: boolean | null;
	}

	/** DeleteTapeInput */
	export interface DeleteTapeInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		TapeARN: FormControl<string | null | undefined>,
		BypassGovernanceRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTapeInputFormGroup() {
		return new FormGroup<DeleteTapeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BypassGovernanceRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DeleteTapeArchiveOutput */
	export interface DeleteTapeArchiveOutput {
		TapeARN?: string;
	}

	/** DeleteTapeArchiveOutput */
	export interface DeleteTapeArchiveOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTapeArchiveOutputFormGroup() {
		return new FormGroup<DeleteTapeArchiveOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeleteTapeArchiveInput */
	export interface DeleteTapeArchiveInput {

		/** Required */
		TapeARN: string;
		BypassGovernanceRetention?: boolean | null;
	}

	/** DeleteTapeArchiveInput */
	export interface DeleteTapeArchiveInputFormProperties {

		/** Required */
		TapeARN: FormControl<string | null | undefined>,
		BypassGovernanceRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTapeArchiveInputFormGroup() {
		return new FormGroup<DeleteTapeArchiveInputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BypassGovernanceRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteTapePoolOutput {
		PoolARN?: string;
	}
	export interface DeleteTapePoolOutputFormProperties {
		PoolARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTapePoolOutputFormGroup() {
		return new FormGroup<DeleteTapePoolOutputFormProperties>({
			PoolARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTapePoolInput {

		/** Required */
		PoolARN: string;
	}
	export interface DeleteTapePoolInputFormProperties {

		/** Required */
		PoolARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTapePoolInputFormGroup() {
		return new FormGroup<DeleteTapePoolInputFormProperties>({
			PoolARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted. */
	export interface DeleteVolumeOutput {
		VolumeARN?: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted. */
	export interface DeleteVolumeOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVolumeOutputFormGroup() {
		return new FormGroup<DeleteVolumeOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete. */
	export interface DeleteVolumeInput {

		/** Required */
		VolumeARN: string;
	}

	/** A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete. */
	export interface DeleteVolumeInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVolumeInputFormGroup() {
		return new FormGroup<DeleteVolumeInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAvailabilityMonitorTestOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Status?: AvailabilityMonitorTestStatus;
		StartTime?: Date;
	}
	export interface DescribeAvailabilityMonitorTestOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Status: FormControl<AvailabilityMonitorTestStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAvailabilityMonitorTestOutputFormGroup() {
		return new FormGroup<DescribeAvailabilityMonitorTestOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Status: new FormControl<AvailabilityMonitorTestStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AvailabilityMonitorTestStatus { COMPLETE = 'COMPLETE', FAILED = 'FAILED', PENDING = 'PENDING' }

	export interface DescribeAvailabilityMonitorTestInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DescribeAvailabilityMonitorTestInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAvailabilityMonitorTestInputFormGroup() {
		return new FormGroup<DescribeAvailabilityMonitorTestInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the following fields: */
	export interface DescribeBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		AverageUploadRateLimitInBitsPerSec?: number | null;
		AverageDownloadRateLimitInBitsPerSec?: number | null;
	}

	/** A JSON object containing the following fields: */
	export interface DescribeBandwidthRateLimitOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		AverageUploadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
		AverageDownloadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBandwidthRateLimitOutputFormGroup() {
		return new FormGroup<DescribeBandwidthRateLimitOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			AverageUploadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
			AverageDownloadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeBandwidthRateLimitInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBandwidthRateLimitInputFormGroup() {
		return new FormGroup<DescribeBandwidthRateLimitInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DescribeBandwidthRateLimitScheduleOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		BandwidthRateLimitIntervals?: Array<BandwidthRateLimitInterval>;
	}
	export interface DescribeBandwidthRateLimitScheduleOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBandwidthRateLimitScheduleOutputFormGroup() {
		return new FormGroup<DescribeBandwidthRateLimitScheduleOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/**  Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.  */
	export interface BandwidthRateLimitInterval {

		/** Required */
		StartHourOfDay: number;

		/** Required */
		StartMinuteOfHour: number;

		/** Required */
		EndHourOfDay: number;

		/** Required */
		EndMinuteOfHour: number;

		/** Required */
		DaysOfWeek: Array<number>;
		AverageUploadRateLimitInBitsPerSec?: number | null;
		AverageDownloadRateLimitInBitsPerSec?: number | null;
	}

	/**  Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.  */
	export interface BandwidthRateLimitIntervalFormProperties {

		/** Required */
		StartHourOfDay: FormControl<number | null | undefined>,

		/** Required */
		StartMinuteOfHour: FormControl<number | null | undefined>,

		/** Required */
		EndHourOfDay: FormControl<number | null | undefined>,

		/** Required */
		EndMinuteOfHour: FormControl<number | null | undefined>,
		AverageUploadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
		AverageDownloadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
	}
	export function CreateBandwidthRateLimitIntervalFormGroup() {
		return new FormGroup<BandwidthRateLimitIntervalFormProperties>({
			StartHourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StartMinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndHourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndMinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AverageUploadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
			AverageDownloadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeBandwidthRateLimitScheduleInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DescribeBandwidthRateLimitScheduleInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBandwidthRateLimitScheduleInputFormGroup() {
		return new FormGroup<DescribeBandwidthRateLimitScheduleInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DescribeCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		DiskIds?: Array<string>;
		CacheAllocatedInBytes?: number | null;
		CacheUsedPercentage?: number | null;
		CacheDirtyPercentage?: number | null;
		CacheHitPercentage?: number | null;
		CacheMissPercentage?: number | null;
	}
	export interface DescribeCacheOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		CacheAllocatedInBytes: FormControl<number | null | undefined>,
		CacheUsedPercentage: FormControl<number | null | undefined>,
		CacheDirtyPercentage: FormControl<number | null | undefined>,
		CacheHitPercentage: FormControl<number | null | undefined>,
		CacheMissPercentage: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCacheOutputFormGroup() {
		return new FormGroup<DescribeCacheOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			CacheAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
			CacheUsedPercentage: new FormControl<number | null | undefined>(undefined),
			CacheDirtyPercentage: new FormControl<number | null | undefined>(undefined),
			CacheHitPercentage: new FormControl<number | null | undefined>(undefined),
			CacheMissPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DescribeCacheInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCacheInputFormGroup() {
		return new FormGroup<DescribeCacheInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the following fields: */
	export interface DescribeCachediSCSIVolumesOutput {
		CachediSCSIVolumes?: Array<CachediSCSIVolume>;
	}

	/** A JSON object containing the following fields: */
	export interface DescribeCachediSCSIVolumesOutputFormProperties {
	}
	export function CreateDescribeCachediSCSIVolumesOutputFormGroup() {
		return new FormGroup<DescribeCachediSCSIVolumesOutputFormProperties>({
		});

	}


	/** Describes an iSCSI cached volume. */
	export interface CachediSCSIVolume {
		VolumeARN?: string;
		VolumeId?: string;
		VolumeType?: string;
		VolumeStatus?: string;
		VolumeAttachmentStatus?: string;
		VolumeSizeInBytes?: number | null;
		VolumeProgress?: number | null;
		SourceSnapshotId?: string;
		VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
		CreatedDate?: Date;
		VolumeUsedInBytes?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;
		TargetName?: string;
	}

	/** Describes an iSCSI cached volume. */
	export interface CachediSCSIVolumeFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		VolumeStatus: FormControl<string | null | undefined>,
		VolumeAttachmentStatus: FormControl<string | null | undefined>,
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		VolumeProgress: FormControl<number | null | undefined>,
		SourceSnapshotId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		VolumeUsedInBytes: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,
		TargetName: FormControl<string | null | undefined>,
	}
	export function CreateCachediSCSIVolumeFormGroup() {
		return new FormGroup<CachediSCSIVolumeFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			VolumeStatus: new FormControl<string | null | undefined>(undefined),
			VolumeAttachmentStatus: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeProgress: new FormControl<number | null | undefined>(undefined),
			SourceSnapshotId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			VolumeUsedInBytes: new FormControl<number | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			TargetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists iSCSI information about a volume. */
	export interface VolumeiSCSIAttributes {
		TargetARN?: string;
		NetworkInterfaceId?: string;
		NetworkInterfacePort?: number | null;
		LunNumber?: number | null;
		ChapEnabled?: boolean | null;
	}

	/** Lists iSCSI information about a volume. */
	export interface VolumeiSCSIAttributesFormProperties {
		TargetARN: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		NetworkInterfacePort: FormControl<number | null | undefined>,
		LunNumber: FormControl<number | null | undefined>,
		ChapEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeiSCSIAttributesFormGroup() {
		return new FormGroup<VolumeiSCSIAttributesFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			NetworkInterfacePort: new FormControl<number | null | undefined>(undefined),
			LunNumber: new FormControl<number | null | undefined>(undefined),
			ChapEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeCachediSCSIVolumesInput {

		/** Required */
		VolumeARNs: Array<string>;
	}
	export interface DescribeCachediSCSIVolumesInputFormProperties {
	}
	export function CreateDescribeCachediSCSIVolumesInputFormGroup() {
		return new FormGroup<DescribeCachediSCSIVolumesInputFormProperties>({
		});

	}


	/** A JSON object containing the following fields: */
	export interface DescribeChapCredentialsOutput {
		ChapCredentials?: Array<ChapInfo>;
	}

	/** A JSON object containing the following fields: */
	export interface DescribeChapCredentialsOutputFormProperties {
	}
	export function CreateDescribeChapCredentialsOutputFormGroup() {
		return new FormGroup<DescribeChapCredentialsOutputFormProperties>({
		});

	}


	/** Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators. */
	export interface ChapInfo {
		TargetARN?: string;
		SecretToAuthenticateInitiator?: string;
		InitiatorName?: string;
		SecretToAuthenticateTarget?: string;
	}

	/** Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators. */
	export interface ChapInfoFormProperties {
		TargetARN: FormControl<string | null | undefined>,
		SecretToAuthenticateInitiator: FormControl<string | null | undefined>,
		InitiatorName: FormControl<string | null | undefined>,
		SecretToAuthenticateTarget: FormControl<string | null | undefined>,
	}
	export function CreateChapInfoFormGroup() {
		return new FormGroup<ChapInfoFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined),
			SecretToAuthenticateInitiator: new FormControl<string | null | undefined>(undefined),
			InitiatorName: new FormControl<string | null | undefined>(undefined),
			SecretToAuthenticateTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target. */
	export interface DescribeChapCredentialsInput {

		/** Required */
		TargetARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target. */
	export interface DescribeChapCredentialsInputFormProperties {

		/** Required */
		TargetARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChapCredentialsInputFormGroup() {
		return new FormGroup<DescribeChapCredentialsInputFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFileSystemAssociationsOutput {
		FileSystemAssociationInfoList?: Array<FileSystemAssociationInfo>;
	}
	export interface DescribeFileSystemAssociationsOutputFormProperties {
	}
	export function CreateDescribeFileSystemAssociationsOutputFormGroup() {
		return new FormGroup<DescribeFileSystemAssociationsOutputFormProperties>({
		});

	}


	/** Describes the object returned by <code>DescribeFileSystemAssociations</code> that describes a created file system association. */
	export interface FileSystemAssociationInfo {
		FileSystemAssociationARN?: string;
		LocationARN?: string;
		FileSystemAssociationStatus?: string;
		AuditDestinationARN?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Tags?: Array<Tag>;

		/** The refresh cache information for the file share or FSx file systems. */
		CacheAttributes?: CacheAttributes;
		EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
		FileSystemAssociationStatusDetails?: Array<FileSystemAssociationStatusDetail>;
	}

	/** Describes the object returned by <code>DescribeFileSystemAssociations</code> that describes a created file system association. */
	export interface FileSystemAssociationInfoFormProperties {
		FileSystemAssociationARN: FormControl<string | null | undefined>,
		LocationARN: FormControl<string | null | undefined>,
		FileSystemAssociationStatus: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemAssociationInfoFormGroup() {
		return new FormGroup<FileSystemAssociationInfoFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined),
			LocationARN: new FormControl<string | null | undefined>(undefined),
			FileSystemAssociationStatus: new FormControl<string | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** Detailed information on file system association status. */
	export interface FileSystemAssociationStatusDetail {
		ErrorCode?: string;
	}

	/** Detailed information on file system association status. */
	export interface FileSystemAssociationStatusDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemAssociationStatusDetailFormGroup() {
		return new FormGroup<FileSystemAssociationStatusDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFileSystemAssociationsInput {

		/** Required */
		FileSystemAssociationARNList: Array<string>;
	}
	export interface DescribeFileSystemAssociationsInputFormProperties {
	}
	export function CreateDescribeFileSystemAssociationsInputFormGroup() {
		return new FormGroup<DescribeFileSystemAssociationsInputFormProperties>({
		});

	}


	/** A JSON object containing the following fields: */
	export interface DescribeGatewayInformationOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		GatewayId?: string;
		GatewayName?: string;
		GatewayTimezone?: string;
		GatewayState?: string;
		GatewayNetworkInterfaces?: Array<NetworkInterface>;
		GatewayType?: string;
		NextUpdateAvailabilityDate?: string;
		LastSoftwareUpdate?: string;
		Ec2InstanceId?: string;
		Ec2InstanceRegion?: string;
		Tags?: Array<Tag>;
		VPCEndpoint?: string;
		CloudWatchLogGroupARN?: string;
		HostEnvironment?: HostEnvironment;
		EndpointType?: string;
		SoftwareUpdatesEndDate?: string;
		DeprecationDate?: string;
		GatewayCapacity?: GatewayCapacity;
		SupportedGatewayCapacities?: Array<GatewayCapacity>;
		HostEnvironmentId?: string;
	}

	/** A JSON object containing the following fields: */
	export interface DescribeGatewayInformationOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		GatewayId: FormControl<string | null | undefined>,
		GatewayName: FormControl<string | null | undefined>,
		GatewayTimezone: FormControl<string | null | undefined>,
		GatewayState: FormControl<string | null | undefined>,
		GatewayType: FormControl<string | null | undefined>,
		NextUpdateAvailabilityDate: FormControl<string | null | undefined>,
		LastSoftwareUpdate: FormControl<string | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		Ec2InstanceRegion: FormControl<string | null | undefined>,
		VPCEndpoint: FormControl<string | null | undefined>,
		CloudWatchLogGroupARN: FormControl<string | null | undefined>,
		HostEnvironment: FormControl<HostEnvironment | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
		SoftwareUpdatesEndDate: FormControl<string | null | undefined>,
		DeprecationDate: FormControl<string | null | undefined>,
		GatewayCapacity: FormControl<GatewayCapacity | null | undefined>,
		HostEnvironmentId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGatewayInformationOutputFormGroup() {
		return new FormGroup<DescribeGatewayInformationOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			GatewayId: new FormControl<string | null | undefined>(undefined),
			GatewayName: new FormControl<string | null | undefined>(undefined),
			GatewayTimezone: new FormControl<string | null | undefined>(undefined),
			GatewayState: new FormControl<string | null | undefined>(undefined),
			GatewayType: new FormControl<string | null | undefined>(undefined),
			NextUpdateAvailabilityDate: new FormControl<string | null | undefined>(undefined),
			LastSoftwareUpdate: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceRegion: new FormControl<string | null | undefined>(undefined),
			VPCEndpoint: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupARN: new FormControl<string | null | undefined>(undefined),
			HostEnvironment: new FormControl<HostEnvironment | null | undefined>(undefined),
			EndpointType: new FormControl<string | null | undefined>(undefined),
			SoftwareUpdatesEndDate: new FormControl<string | null | undefined>(undefined),
			DeprecationDate: new FormControl<string | null | undefined>(undefined),
			GatewayCapacity: new FormControl<GatewayCapacity | null | undefined>(undefined),
			HostEnvironmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a gateway's network interface. */
	export interface NetworkInterface {
		Ipv4Address?: string;
		MacAddress?: string;
		Ipv6Address?: string;
	}

	/** Describes a gateway's network interface. */
	export interface NetworkInterfaceFormProperties {
		Ipv4Address: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		Ipv6Address: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			Ipv4Address: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Ipv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HostEnvironment { VMWARE = 'VMWARE', 'HYPER-V' = 'HYPER-V', EC2 = 'EC2', KVM = 'KVM', OTHER = 'OTHER', SNOWBALL = 'SNOWBALL' }

	export enum GatewayCapacity { Small = 'Small', Medium = 'Medium', Large = 'Large' }


	/** A JSON object containing the ID of the gateway. */
	export interface DescribeGatewayInformationInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the ID of the gateway. */
	export interface DescribeGatewayInformationInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGatewayInformationInputFormGroup() {
		return new FormGroup<DescribeGatewayInformationInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul> */
	export interface DescribeMaintenanceStartTimeOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		HourOfDay?: number | null;
		MinuteOfHour?: number | null;
		DayOfWeek?: number | null;
		DayOfMonth?: number | null;
		Timezone?: string;
	}

	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul> */
	export interface DescribeMaintenanceStartTimeOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		HourOfDay: FormControl<number | null | undefined>,
		MinuteOfHour: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<number | null | undefined>,
		DayOfMonth: FormControl<number | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceStartTimeOutputFormGroup() {
		return new FormGroup<DescribeMaintenanceStartTimeOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			HourOfDay: new FormControl<number | null | undefined>(undefined),
			MinuteOfHour: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<number | null | undefined>(undefined),
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeMaintenanceStartTimeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeMaintenanceStartTimeInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceStartTimeInputFormGroup() {
		return new FormGroup<DescribeMaintenanceStartTimeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** DescribeNFSFileSharesOutput */
	export interface DescribeNFSFileSharesOutput {
		NFSFileShareInfoList?: Array<NFSFileShareInfo>;
	}

	/** DescribeNFSFileSharesOutput */
	export interface DescribeNFSFileSharesOutputFormProperties {
	}
	export function CreateDescribeNFSFileSharesOutputFormGroup() {
		return new FormGroup<DescribeNFSFileSharesOutputFormProperties>({
		});

	}


	/** The Unix file permissions and ownership information assigned, by default, to native S3 objects when an S3 File Gateway discovers them in S3 buckets. This operation is only supported in S3 File Gateways. */
	export interface NFSFileShareInfo {

		/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways. */
		NFSFileShareDefaults?: NFSFileShareDefaults;

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN?: string | null;

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId?: string | null;

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		KMSEncrypted?: boolean | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;

		/** The file share path used by the NFS client to identify the mount point. */
		Path?: string | null;

		/**
		 * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
		 * Min length: 20
		 * Max length: 2048
		 */
		Role?: string | null;

		/**
		 * <p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>
		 * Min length: 16
		 * Max length: 1400
		 */
		LocationARN?: string | null;
		DefaultStorageClass?: string;

		/** A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>. */
		ObjectACL?: ObjectACL | null;

		/**
		 * The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ClientList?: Array<string>;

		/**
		 * <p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>
		 * Min length: 5
		 * Max length: 15
		 */
		Squash?: string | null;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		Tags?: Array<Tag>;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		VPCEndpointDNSName?: string;
		BucketRegion?: string;
		AuditDestinationARN?: string;
	}

	/** The Unix file permissions and ownership information assigned, by default, to native S3 objects when an S3 File Gateway discovers them in S3 buckets. This operation is only supported in S3 File Gateways. */
	export interface NFSFileShareInfoFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,

		/** The file share path used by the NFS client to identify the mount point. */
		Path: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
		 * Min length: 20
		 * Max length: 2048
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * <p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>
		 * Min length: 16
		 * Max length: 1400
		 */
		LocationARN: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,

		/** A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>. */
		ObjectACL: FormControl<ObjectACL | null | undefined>,

		/**
		 * <p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>
		 * Min length: 5
		 * Max length: 15
		 */
		Squash: FormControl<string | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		VPCEndpointDNSName: FormControl<string | null | undefined>,
		BucketRegion: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
	}
	export function CreateNFSFileShareInfoFormGroup() {
		return new FormGroup<NFSFileShareInfoFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			FileShareId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(30)]),
			FileShareStatus: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(50)]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			Path: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov):iam::([0-9]+):role/(\S+)$')]),
			LocationARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.maxLength(1400)]),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			Squash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(15)]),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			VPCEndpointDNSName: new FormControl<string | null | undefined>(undefined),
			BucketRegion: new FormControl<string | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DescribeNFSFileSharesInput */
	export interface DescribeNFSFileSharesInput {

		/** Required */
		FileShareARNList: Array<string>;
	}

	/** DescribeNFSFileSharesInput */
	export interface DescribeNFSFileSharesInputFormProperties {
	}
	export function CreateDescribeNFSFileSharesInputFormGroup() {
		return new FormGroup<DescribeNFSFileSharesInputFormProperties>({
		});

	}


	/** DescribeSMBFileSharesOutput */
	export interface DescribeSMBFileSharesOutput {
		SMBFileShareInfoList?: Array<SMBFileShareInfo>;
	}

	/** DescribeSMBFileSharesOutput */
	export interface DescribeSMBFileSharesOutputFormProperties {
	}
	export function CreateDescribeSMBFileSharesOutputFormGroup() {
		return new FormGroup<DescribeSMBFileSharesOutputFormProperties>({
		});

	}


	/** The Windows file permissions and ownership information assigned, by default, to native S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only supported for S3 File Gateways. */
	export interface SMBFileShareInfo {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN?: string | null;

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId?: string | null;

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		KMSEncrypted?: boolean | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;
		Path?: string;

		/**
		 * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
		 * Min length: 20
		 * Max length: 2048
		 */
		Role?: string | null;

		/**
		 * <p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>
		 * Min length: 16
		 * Max length: 1400
		 */
		LocationARN?: string | null;
		DefaultStorageClass?: string;

		/** A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>. */
		ObjectACL?: ObjectACL | null;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		SMBACLEnabled?: boolean | null;
		AccessBasedEnumeration?: boolean | null;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;

		/**
		 * <p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>
		 * Min length: 5
		 * Max length: 15
		 */
		Authentication?: string | null;
		CaseSensitivity?: CaseSensitivity;
		Tags?: Array<Tag>;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		VPCEndpointDNSName?: string;
		BucketRegion?: string;
		OplocksEnabled?: boolean | null;
	}

	/** The Windows file permissions and ownership information assigned, by default, to native S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only supported for S3 File Gateways. */
	export interface SMBFileShareInfoFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
		 * Min length: 20
		 * Max length: 2048
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * <p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>
		 * Min length: 16
		 * Max length: 1400
		 */
		LocationARN: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,

		/** A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>. */
		ObjectACL: FormControl<ObjectACL | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		SMBACLEnabled: FormControl<boolean | null | undefined>,
		AccessBasedEnumeration: FormControl<boolean | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,

		/**
		 * <p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>
		 * Min length: 5
		 * Max length: 15
		 */
		Authentication: FormControl<string | null | undefined>,
		CaseSensitivity: FormControl<CaseSensitivity | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		VPCEndpointDNSName: FormControl<string | null | undefined>,
		BucketRegion: FormControl<string | null | undefined>,
		OplocksEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSMBFileShareInfoFormGroup() {
		return new FormGroup<SMBFileShareInfoFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			FileShareId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(30)]),
			FileShareStatus: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(50)]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			Path: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov):iam::([0-9]+):role/(\S+)$')]),
			LocationARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.maxLength(1400)]),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			SMBACLEnabled: new FormControl<boolean | null | undefined>(undefined),
			AccessBasedEnumeration: new FormControl<boolean | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(15)]),
			CaseSensitivity: new FormControl<CaseSensitivity | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			VPCEndpointDNSName: new FormControl<string | null | undefined>(undefined),
			BucketRegion: new FormControl<string | null | undefined>(undefined),
			OplocksEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DescribeSMBFileSharesInput */
	export interface DescribeSMBFileSharesInput {

		/** Required */
		FileShareARNList: Array<string>;
	}

	/** DescribeSMBFileSharesInput */
	export interface DescribeSMBFileSharesInputFormProperties {
	}
	export function CreateDescribeSMBFileSharesInputFormGroup() {
		return new FormGroup<DescribeSMBFileSharesInputFormProperties>({
		});

	}

	export interface DescribeSMBSettingsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		DomainName?: string;
		ActiveDirectoryStatus?: ActiveDirectoryStatus;
		SMBGuestPasswordSet?: boolean | null;
		SMBSecurityStrategy?: SMBSecurityStrategy;
		FileSharesVisible?: boolean | null;
		SMBLocalGroups?: SMBLocalGroups;
	}
	export interface DescribeSMBSettingsOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		ActiveDirectoryStatus: FormControl<ActiveDirectoryStatus | null | undefined>,
		SMBGuestPasswordSet: FormControl<boolean | null | undefined>,
		SMBSecurityStrategy: FormControl<SMBSecurityStrategy | null | undefined>,
		FileSharesVisible: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeSMBSettingsOutputFormGroup() {
		return new FormGroup<DescribeSMBSettingsOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			DomainName: new FormControl<string | null | undefined>(undefined),
			ActiveDirectoryStatus: new FormControl<ActiveDirectoryStatus | null | undefined>(undefined),
			SMBGuestPasswordSet: new FormControl<boolean | null | undefined>(undefined),
			SMBSecurityStrategy: new FormControl<SMBSecurityStrategy | null | undefined>(undefined),
			FileSharesVisible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ActiveDirectoryStatus { ACCESS_DENIED = 'ACCESS_DENIED', DETACHED = 'DETACHED', JOINED = 'JOINED', JOINING = 'JOINING', NETWORK_ERROR = 'NETWORK_ERROR', TIMEOUT = 'TIMEOUT', UNKNOWN_ERROR = 'UNKNOWN_ERROR' }

	export enum SMBSecurityStrategy { ClientSpecified = 'ClientSpecified', MandatorySigning = 'MandatorySigning', MandatoryEncryption = 'MandatoryEncryption' }


	/** A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway. */
	export interface SMBLocalGroups {
		GatewayAdmins?: Array<string>;
	}

	/** A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway. */
	export interface SMBLocalGroupsFormProperties {
	}
	export function CreateSMBLocalGroupsFormGroup() {
		return new FormGroup<SMBLocalGroupsFormProperties>({
		});

	}

	export interface DescribeSMBSettingsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DescribeSMBSettingsInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSMBSettingsInputFormGroup() {
		return new FormGroup<DescribeSMBSettingsInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DescribeSnapshotScheduleOutput {
		VolumeARN?: string;
		StartAt?: number | null;
		RecurrenceInHours?: number | null;
		Description?: string;
		Timezone?: string;
		Tags?: Array<Tag>;
	}
	export interface DescribeSnapshotScheduleOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		StartAt: FormControl<number | null | undefined>,
		RecurrenceInHours: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotScheduleOutputFormGroup() {
		return new FormGroup<DescribeSnapshotScheduleOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			StartAt: new FormControl<number | null | undefined>(undefined),
			RecurrenceInHours: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume. */
	export interface DescribeSnapshotScheduleInput {

		/** Required */
		VolumeARN: string;
	}

	/** A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume. */
	export interface DescribeSnapshotScheduleInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotScheduleInputFormGroup() {
		return new FormGroup<DescribeSnapshotScheduleInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStorediSCSIVolumesOutput {
		StorediSCSIVolumes?: Array<StorediSCSIVolume>;
	}
	export interface DescribeStorediSCSIVolumesOutputFormProperties {
	}
	export function CreateDescribeStorediSCSIVolumesOutputFormGroup() {
		return new FormGroup<DescribeStorediSCSIVolumesOutputFormProperties>({
		});

	}


	/** Describes an iSCSI stored volume. */
	export interface StorediSCSIVolume {
		VolumeARN?: string;
		VolumeId?: string;
		VolumeType?: string;
		VolumeStatus?: string;
		VolumeAttachmentStatus?: string;
		VolumeSizeInBytes?: number | null;
		VolumeProgress?: number | null;
		VolumeDiskId?: string;
		SourceSnapshotId?: string;
		PreservedExistingData?: boolean | null;
		VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
		CreatedDate?: Date;
		VolumeUsedInBytes?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;
		TargetName?: string;
	}

	/** Describes an iSCSI stored volume. */
	export interface StorediSCSIVolumeFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		VolumeStatus: FormControl<string | null | undefined>,
		VolumeAttachmentStatus: FormControl<string | null | undefined>,
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		VolumeProgress: FormControl<number | null | undefined>,
		VolumeDiskId: FormControl<string | null | undefined>,
		SourceSnapshotId: FormControl<string | null | undefined>,
		PreservedExistingData: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		VolumeUsedInBytes: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,
		TargetName: FormControl<string | null | undefined>,
	}
	export function CreateStorediSCSIVolumeFormGroup() {
		return new FormGroup<StorediSCSIVolumeFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			VolumeStatus: new FormControl<string | null | undefined>(undefined),
			VolumeAttachmentStatus: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeProgress: new FormControl<number | null | undefined>(undefined),
			VolumeDiskId: new FormControl<string | null | undefined>(undefined),
			SourceSnapshotId: new FormControl<string | null | undefined>(undefined),
			PreservedExistingData: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			VolumeUsedInBytes: new FormControl<number | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			TargetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>. */
	export interface DescribeStorediSCSIVolumesInput {

		/** Required */
		VolumeARNs: Array<string>;
	}

	/** A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>. */
	export interface DescribeStorediSCSIVolumesInputFormProperties {
	}
	export function CreateDescribeStorediSCSIVolumesInputFormGroup() {
		return new FormGroup<DescribeStorediSCSIVolumesInputFormProperties>({
		});

	}


	/** DescribeTapeArchivesOutput */
	export interface DescribeTapeArchivesOutput {
		TapeArchives?: Array<TapeArchive>;
		Marker?: string;
	}

	/** DescribeTapeArchivesOutput */
	export interface DescribeTapeArchivesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTapeArchivesOutputFormGroup() {
		return new FormGroup<DescribeTapeArchivesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a virtual tape that is archived in the virtual tape shelf (VTS). */
	export interface TapeArchive {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeCreatedDate?: Date;
		TapeSizeInBytes?: number | null;
		CompletionTime?: Date;
		RetrievedTo?: string;
		TapeStatus?: string;
		TapeUsedInBytes?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;
		PoolId?: string;
		Worm?: boolean | null;
		RetentionStartDate?: Date;
		PoolEntryDate?: Date;
	}

	/** Represents a virtual tape that is archived in the virtual tape shelf (VTS). */
	export interface TapeArchiveFormProperties {
		TapeARN: FormControl<string | null | undefined>,
		TapeBarcode: FormControl<string | null | undefined>,
		TapeCreatedDate: FormControl<Date | null | undefined>,
		TapeSizeInBytes: FormControl<number | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		RetrievedTo: FormControl<string | null | undefined>,
		TapeStatus: FormControl<string | null | undefined>,
		TapeUsedInBytes: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Worm: FormControl<boolean | null | undefined>,
		RetentionStartDate: FormControl<Date | null | undefined>,
		PoolEntryDate: FormControl<Date | null | undefined>,
	}
	export function CreateTapeArchiveFormGroup() {
		return new FormGroup<TapeArchiveFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
			TapeBarcode: new FormControl<string | null | undefined>(undefined),
			TapeCreatedDate: new FormControl<Date | null | undefined>(undefined),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			RetrievedTo: new FormControl<string | null | undefined>(undefined),
			TapeStatus: new FormControl<string | null | undefined>(undefined),
			TapeUsedInBytes: new FormControl<number | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Worm: new FormControl<boolean | null | undefined>(undefined),
			RetentionStartDate: new FormControl<Date | null | undefined>(undefined),
			PoolEntryDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeTapeArchivesInput */
	export interface DescribeTapeArchivesInput {
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number | null;
	}

	/** DescribeTapeArchivesInput */
	export interface DescribeTapeArchivesInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTapeArchivesInputFormGroup() {
		return new FormGroup<DescribeTapeArchivesInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DescribeTapeRecoveryPointsOutput */
	export interface DescribeTapeRecoveryPointsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		TapeRecoveryPointInfos?: Array<TapeRecoveryPointInfo>;
		Marker?: string;
	}

	/** DescribeTapeRecoveryPointsOutput */
	export interface DescribeTapeRecoveryPointsOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTapeRecoveryPointsOutputFormGroup() {
		return new FormGroup<DescribeTapeRecoveryPointsOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a recovery point. */
	export interface TapeRecoveryPointInfo {
		TapeARN?: string;
		TapeRecoveryPointTime?: Date;
		TapeSizeInBytes?: number | null;
		TapeStatus?: string;
	}

	/** Describes a recovery point. */
	export interface TapeRecoveryPointInfoFormProperties {
		TapeARN: FormControl<string | null | undefined>,
		TapeRecoveryPointTime: FormControl<Date | null | undefined>,
		TapeSizeInBytes: FormControl<number | null | undefined>,
		TapeStatus: FormControl<string | null | undefined>,
	}
	export function CreateTapeRecoveryPointInfoFormGroup() {
		return new FormGroup<TapeRecoveryPointInfoFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
			TapeRecoveryPointTime: new FormControl<Date | null | undefined>(undefined),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			TapeStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DescribeTapeRecoveryPointsInput */
	export interface DescribeTapeRecoveryPointsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
		Marker?: string;
		Limit?: number | null;
	}

	/** DescribeTapeRecoveryPointsInput */
	export interface DescribeTapeRecoveryPointsInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTapeRecoveryPointsInputFormGroup() {
		return new FormGroup<DescribeTapeRecoveryPointsInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DescribeTapesOutput */
	export interface DescribeTapesOutput {
		Tapes?: Array<Tape>;
		Marker?: string;
	}

	/** DescribeTapesOutput */
	export interface DescribeTapesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTapesOutputFormGroup() {
		return new FormGroup<DescribeTapesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual tape object. */
	export interface Tape {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeCreatedDate?: Date;
		TapeSizeInBytes?: number | null;
		TapeStatus?: string;
		VTLDevice?: string;
		Progress?: number | null;
		TapeUsedInBytes?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey?: string | null;
		PoolId?: string;
		Worm?: boolean | null;
		RetentionStartDate?: Date;
		PoolEntryDate?: Date;
	}

	/** Describes a virtual tape object. */
	export interface TapeFormProperties {
		TapeARN: FormControl<string | null | undefined>,
		TapeBarcode: FormControl<string | null | undefined>,
		TapeCreatedDate: FormControl<Date | null | undefined>,
		TapeSizeInBytes: FormControl<number | null | undefined>,
		TapeStatus: FormControl<string | null | undefined>,
		VTLDevice: FormControl<string | null | undefined>,
		Progress: FormControl<number | null | undefined>,
		TapeUsedInBytes: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.
		 * Min length: 7
		 * Max length: 2048
		 */
		KMSKey: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Worm: FormControl<boolean | null | undefined>,
		RetentionStartDate: FormControl<Date | null | undefined>,
		PoolEntryDate: FormControl<Date | null | undefined>,
	}
	export function CreateTapeFormGroup() {
		return new FormGroup<TapeFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
			TapeBarcode: new FormControl<string | null | undefined>(undefined),
			TapeCreatedDate: new FormControl<Date | null | undefined>(undefined),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			TapeStatus: new FormControl<string | null | undefined>(undefined),
			VTLDevice: new FormControl<string | null | undefined>(undefined),
			Progress: new FormControl<number | null | undefined>(undefined),
			TapeUsedInBytes: new FormControl<number | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(2048), Validators.pattern('(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)')]),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Worm: new FormControl<boolean | null | undefined>(undefined),
			RetentionStartDate: new FormControl<Date | null | undefined>(undefined),
			PoolEntryDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeTapesInput */
	export interface DescribeTapesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number | null;
	}

	/** DescribeTapesInput */
	export interface DescribeTapesInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTapesInputFormGroup() {
		return new FormGroup<DescribeTapesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeUploadBufferOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		DiskIds?: Array<string>;
		UploadBufferUsedInBytes?: number | null;
		UploadBufferAllocatedInBytes?: number | null;
	}
	export interface DescribeUploadBufferOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		UploadBufferUsedInBytes: FormControl<number | null | undefined>,
		UploadBufferAllocatedInBytes: FormControl<number | null | undefined>,
	}
	export function CreateDescribeUploadBufferOutputFormGroup() {
		return new FormGroup<DescribeUploadBufferOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			UploadBufferUsedInBytes: new FormControl<number | null | undefined>(undefined),
			UploadBufferAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeUploadBufferInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface DescribeUploadBufferInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUploadBufferInputFormGroup() {
		return new FormGroup<DescribeUploadBufferInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** DescribeVTLDevicesOutput */
	export interface DescribeVTLDevicesOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		VTLDevices?: Array<VTLDevice>;
		Marker?: string;
	}

	/** DescribeVTLDevicesOutput */
	export interface DescribeVTLDevicesOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVTLDevicesOutputFormGroup() {
		return new FormGroup<DescribeVTLDevicesOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a device object associated with a tape gateway. */
	export interface VTLDevice {
		VTLDeviceARN?: string;
		VTLDeviceType?: string;
		VTLDeviceVendor?: string;
		VTLDeviceProductIdentifier?: string;
		DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
	}

	/** Represents a device object associated with a tape gateway. */
	export interface VTLDeviceFormProperties {
		VTLDeviceARN: FormControl<string | null | undefined>,
		VTLDeviceType: FormControl<string | null | undefined>,
		VTLDeviceVendor: FormControl<string | null | undefined>,
		VTLDeviceProductIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateVTLDeviceFormGroup() {
		return new FormGroup<VTLDeviceFormProperties>({
			VTLDeviceARN: new FormControl<string | null | undefined>(undefined),
			VTLDeviceType: new FormControl<string | null | undefined>(undefined),
			VTLDeviceVendor: new FormControl<string | null | undefined>(undefined),
			VTLDeviceProductIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists iSCSI information about a VTL device. */
	export interface DeviceiSCSIAttributes {
		TargetARN?: string;
		NetworkInterfaceId?: string;
		NetworkInterfacePort?: number | null;
		ChapEnabled?: boolean | null;
	}

	/** Lists iSCSI information about a VTL device. */
	export interface DeviceiSCSIAttributesFormProperties {
		TargetARN: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		NetworkInterfacePort: FormControl<number | null | undefined>,
		ChapEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceiSCSIAttributesFormGroup() {
		return new FormGroup<DeviceiSCSIAttributesFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			NetworkInterfacePort: new FormControl<number | null | undefined>(undefined),
			ChapEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DescribeVTLDevicesInput */
	export interface DescribeVTLDevicesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
		VTLDeviceARNs?: Array<string>;
		Marker?: string;
		Limit?: number | null;
	}

	/** DescribeVTLDevicesInput */
	export interface DescribeVTLDevicesInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeVTLDevicesInputFormGroup() {
		return new FormGroup<DescribeVTLDevicesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the following fields: */
	export interface DescribeWorkingStorageOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		DiskIds?: Array<string>;
		WorkingStorageUsedInBytes?: number | null;
		WorkingStorageAllocatedInBytes?: number | null;
	}

	/** A JSON object containing the following fields: */
	export interface DescribeWorkingStorageOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		WorkingStorageUsedInBytes: FormControl<number | null | undefined>,
		WorkingStorageAllocatedInBytes: FormControl<number | null | undefined>,
	}
	export function CreateDescribeWorkingStorageOutputFormGroup() {
		return new FormGroup<DescribeWorkingStorageOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			WorkingStorageUsedInBytes: new FormControl<number | null | undefined>(undefined),
			WorkingStorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeWorkingStorageInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeWorkingStorageInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkingStorageInputFormGroup() {
		return new FormGroup<DescribeWorkingStorageInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** AttachVolumeOutput */
	export interface DetachVolumeOutput {
		VolumeARN?: string;
	}

	/** AttachVolumeOutput */
	export interface DetachVolumeOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateDetachVolumeOutputFormGroup() {
		return new FormGroup<DetachVolumeOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AttachVolumeInput */
	export interface DetachVolumeInput {

		/** Required */
		VolumeARN: string;
		ForceDetach?: boolean | null;
	}

	/** AttachVolumeInput */
	export interface DetachVolumeInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,
		ForceDetach: FormControl<boolean | null | undefined>,
	}
	export function CreateDetachVolumeInputFormGroup() {
		return new FormGroup<DetachVolumeInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceDetach: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DisableGatewayOutput */
	export interface DisableGatewayOutput {
		GatewayARN?: string;
	}

	/** DisableGatewayOutput */
	export interface DisableGatewayOutputFormProperties {
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDisableGatewayOutputFormGroup() {
		return new FormGroup<DisableGatewayOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DisableGatewayInput */
	export interface DisableGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** DisableGatewayInput */
	export interface DisableGatewayInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateDisableGatewayInputFormGroup() {
		return new FormGroup<DisableGatewayInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface DisassociateFileSystemOutput {
		FileSystemAssociationARN?: string;
	}
	export interface DisassociateFileSystemOutputFormProperties {
		FileSystemAssociationARN: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFileSystemOutputFormGroup() {
		return new FormGroup<DisassociateFileSystemOutputFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateFileSystemInput {

		/** Required */
		FileSystemAssociationARN: string;
		ForceDelete?: boolean | null;
	}
	export interface DisassociateFileSystemInputFormProperties {

		/** Required */
		FileSystemAssociationARN: FormControl<string | null | undefined>,
		ForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDisassociateFileSystemInputFormGroup() {
		return new FormGroup<DisassociateFileSystemInputFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** JoinDomainOutput */
	export interface JoinDomainOutput {
		GatewayARN?: string;
		ActiveDirectoryStatus?: ActiveDirectoryStatus;
	}

	/** JoinDomainOutput */
	export interface JoinDomainOutputFormProperties {
		GatewayARN: FormControl<string | null | undefined>,
		ActiveDirectoryStatus: FormControl<ActiveDirectoryStatus | null | undefined>,
	}
	export function CreateJoinDomainOutputFormGroup() {
		return new FormGroup<JoinDomainOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined),
			ActiveDirectoryStatus: new FormControl<ActiveDirectoryStatus | null | undefined>(undefined),
		});

	}


	/** JoinDomainInput */
	export interface JoinDomainInput {

		/** Required */
		GatewayARN: string;

		/** Required */
		DomainName: string;
		OrganizationalUnit?: string;
		DomainControllers?: Array<string>;
		TimeoutInSeconds?: number | null;

		/** Required */
		UserName: string;

		/** Required */
		Password: string;
	}

	/** JoinDomainInput */
	export interface JoinDomainInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		OrganizationalUnit: FormControl<string | null | undefined>,
		TimeoutInSeconds: FormControl<number | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateJoinDomainInputFormGroup() {
		return new FormGroup<JoinDomainInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationalUnit: new FormControl<string | null | undefined>(undefined),
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAutomaticTapeCreationPoliciesOutput {
		AutomaticTapeCreationPolicyInfos?: Array<AutomaticTapeCreationPolicyInfo>;
	}
	export interface ListAutomaticTapeCreationPoliciesOutputFormProperties {
	}
	export function CreateListAutomaticTapeCreationPoliciesOutputFormGroup() {
		return new FormGroup<ListAutomaticTapeCreationPoliciesOutputFormProperties>({
		});

	}


	/** Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies. */
	export interface AutomaticTapeCreationPolicyInfo {
		AutomaticTapeCreationRules?: Array<AutomaticTapeCreationRule>;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies. */
	export interface AutomaticTapeCreationPolicyInfoFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateAutomaticTapeCreationPolicyInfoFormGroup() {
		return new FormGroup<AutomaticTapeCreationPolicyInfoFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>. */
	export interface AutomaticTapeCreationRule {

		/** Required */
		TapeBarcodePrefix: string;

		/** Required */
		PoolId: string;

		/** Required */
		TapeSizeInBytes: number;

		/** Required */
		MinimumNumTapes: number;
		Worm?: boolean | null;
	}

	/** An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>. */
	export interface AutomaticTapeCreationRuleFormProperties {

		/** Required */
		TapeBarcodePrefix: FormControl<string | null | undefined>,

		/** Required */
		PoolId: FormControl<string | null | undefined>,

		/** Required */
		TapeSizeInBytes: FormControl<number | null | undefined>,

		/** Required */
		MinimumNumTapes: FormControl<number | null | undefined>,
		Worm: FormControl<boolean | null | undefined>,
	}
	export function CreateAutomaticTapeCreationRuleFormGroup() {
		return new FormGroup<AutomaticTapeCreationRuleFormProperties>({
			TapeBarcodePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinimumNumTapes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Worm: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAutomaticTapeCreationPoliciesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface ListAutomaticTapeCreationPoliciesInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateListAutomaticTapeCreationPoliciesInputFormGroup() {
		return new FormGroup<ListAutomaticTapeCreationPoliciesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** ListFileShareOutput */
	export interface ListFileSharesOutput {
		Marker?: string;
		NextMarker?: string;
		FileShareInfoList?: Array<FileShareInfo>;
	}

	/** ListFileShareOutput */
	export interface ListFileSharesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFileSharesOutputFormGroup() {
		return new FormGroup<ListFileSharesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a file share. Only supported S3 File Gateway. */
	export interface FileShareInfo {

		/** The type of the file share. */
		FileShareType?: FileShareInfoFileShareType | null;

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN?: string | null;

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId?: string | null;

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** Describes a file share. Only supported S3 File Gateway. */
	export interface FileShareInfoFormProperties {

		/** The type of the file share. */
		FileShareType: FormControl<FileShareInfoFileShareType | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,

		/**
		 * The ID of the file share.
		 * Min length: 12
		 * Max length: 30
		 */
		FileShareId: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>
		 * Min length: 3
		 * Max length: 50
		 */
		FileShareStatus: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateFileShareInfoFormGroup() {
		return new FormGroup<FileShareInfoFormProperties>({
			FileShareType: new FormControl<FileShareInfoFileShareType | null | undefined>(undefined),
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			FileShareId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(30)]),
			FileShareStatus: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(50)]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export enum FileShareInfoFileShareType { NFS = 'NFS', SMB = 'SMB' }


	/** ListFileShareInput */
	export interface ListFileSharesInput {
		GatewayARN?: string;
		Limit?: number | null;
		Marker?: string;
	}

	/** ListFileShareInput */
	export interface ListFileSharesInputFormProperties {
		GatewayARN: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListFileSharesInputFormGroup() {
		return new FormGroup<ListFileSharesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFileSystemAssociationsOutput {
		Marker?: string;
		NextMarker?: string;
		FileSystemAssociationSummaryList?: Array<FileSystemAssociationSummary>;
	}
	export interface ListFileSystemAssociationsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFileSystemAssociationsOutputFormGroup() {
		return new FormGroup<ListFileSystemAssociationsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary of a created file system association. */
	export interface FileSystemAssociationSummary {
		FileSystemAssociationId?: string;
		FileSystemAssociationARN?: string;
		FileSystemAssociationStatus?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary of a created file system association. */
	export interface FileSystemAssociationSummaryFormProperties {
		FileSystemAssociationId: FormControl<string | null | undefined>,
		FileSystemAssociationARN: FormControl<string | null | undefined>,
		FileSystemAssociationStatus: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemAssociationSummaryFormGroup() {
		return new FormGroup<FileSystemAssociationSummaryFormProperties>({
			FileSystemAssociationId: new FormControl<string | null | undefined>(undefined),
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined),
			FileSystemAssociationStatus: new FormControl<string | null | undefined>(undefined),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface ListFileSystemAssociationsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Limit?: number | null;
		Marker?: string;
	}
	export interface ListFileSystemAssociationsInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListFileSystemAssociationsInputFormGroup() {
		return new FormGroup<ListFileSystemAssociationsInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysOutput {
		Gateways?: Array<GatewayInfo>;
		Marker?: string;
	}
	export interface ListGatewaysOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysOutputFormGroup() {
		return new FormGroup<ListGatewaysOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a gateway object. */
	export interface GatewayInfo {
		GatewayId?: string;
		GatewayARN?: string;
		GatewayType?: string;
		GatewayOperationalState?: string;
		GatewayName?: string;
		Ec2InstanceId?: string;
		Ec2InstanceRegion?: string;
		HostEnvironment?: HostEnvironment;
		HostEnvironmentId?: string;
	}

	/** Describes a gateway object. */
	export interface GatewayInfoFormProperties {
		GatewayId: FormControl<string | null | undefined>,
		GatewayARN: FormControl<string | null | undefined>,
		GatewayType: FormControl<string | null | undefined>,
		GatewayOperationalState: FormControl<string | null | undefined>,
		GatewayName: FormControl<string | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		Ec2InstanceRegion: FormControl<string | null | undefined>,
		HostEnvironment: FormControl<HostEnvironment | null | undefined>,
		HostEnvironmentId: FormControl<string | null | undefined>,
	}
	export function CreateGatewayInfoFormGroup() {
		return new FormGroup<GatewayInfoFormProperties>({
			GatewayId: new FormControl<string | null | undefined>(undefined),
			GatewayARN: new FormControl<string | null | undefined>(undefined),
			GatewayType: new FormControl<string | null | undefined>(undefined),
			GatewayOperationalState: new FormControl<string | null | undefined>(undefined),
			GatewayName: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceRegion: new FormControl<string | null | undefined>(undefined),
			HostEnvironment: new FormControl<HostEnvironment | null | undefined>(undefined),
			HostEnvironmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul> */
	export interface ListGatewaysInput {
		Marker?: string;
		Limit?: number | null;
	}

	/** <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul> */
	export interface ListGatewaysInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListGatewaysInputFormGroup() {
		return new FormGroup<ListGatewaysInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLocalDisksOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Disks?: Array<Disk>;
	}
	export interface ListLocalDisksOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateListLocalDisksOutputFormGroup() {
		return new FormGroup<ListLocalDisksOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** Represents a gateway's local disk. */
	export interface Disk {
		DiskId?: string;
		DiskPath?: string;
		DiskNode?: string;
		DiskStatus?: string;
		DiskSizeInBytes?: number | null;

		/**
		 * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code> </p>
		 * Min length: 3
		 * Max length: 100
		 */
		DiskAllocationType?: string | null;
		DiskAllocationResource?: string;

		/**
		 * A list of values that represents attributes of a local disk.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		DiskAttributeList?: Array<string>;
	}

	/** Represents a gateway's local disk. */
	export interface DiskFormProperties {
		DiskId: FormControl<string | null | undefined>,
		DiskPath: FormControl<string | null | undefined>,
		DiskNode: FormControl<string | null | undefined>,
		DiskStatus: FormControl<string | null | undefined>,
		DiskSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code> </p>
		 * Min length: 3
		 * Max length: 100
		 */
		DiskAllocationType: FormControl<string | null | undefined>,
		DiskAllocationResource: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			DiskId: new FormControl<string | null | undefined>(undefined),
			DiskPath: new FormControl<string | null | undefined>(undefined),
			DiskNode: new FormControl<string | null | undefined>(undefined),
			DiskStatus: new FormControl<string | null | undefined>(undefined),
			DiskSizeInBytes: new FormControl<number | null | undefined>(undefined),
			DiskAllocationType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			DiskAllocationResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface ListLocalDisksInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface ListLocalDisksInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateListLocalDisksInputFormGroup() {
		return new FormGroup<ListLocalDisksInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** ListTagsForResourceOutput */
	export interface ListTagsForResourceOutput {
		ResourceARN?: string;
		Marker?: string;
		Tags?: Array<Tag>;
	}

	/** ListTagsForResourceOutput */
	export interface ListTagsForResourceOutputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTagsForResourceInput */
	export interface ListTagsForResourceInput {

		/** Required */
		ResourceARN: string;
		Marker?: string;
		Limit?: number | null;
	}

	/** ListTagsForResourceInput */
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTapePoolsOutput {
		PoolInfos?: Array<PoolInfo>;
		Marker?: string;
	}
	export interface ListTapePoolsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListTapePoolsOutputFormGroup() {
		return new FormGroup<ListTapePoolsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a custom tape pool. */
	export interface PoolInfo {
		PoolARN?: string;
		PoolName?: string;
		StorageClass?: TapeStorageClass;
		RetentionLockType?: RetentionLockType;
		RetentionLockTimeInDays?: number | null;
		PoolStatus?: PoolStatus;
	}

	/** Describes a custom tape pool. */
	export interface PoolInfoFormProperties {
		PoolARN: FormControl<string | null | undefined>,
		PoolName: FormControl<string | null | undefined>,
		StorageClass: FormControl<TapeStorageClass | null | undefined>,
		RetentionLockType: FormControl<RetentionLockType | null | undefined>,
		RetentionLockTimeInDays: FormControl<number | null | undefined>,
		PoolStatus: FormControl<PoolStatus | null | undefined>,
	}
	export function CreatePoolInfoFormGroup() {
		return new FormGroup<PoolInfoFormProperties>({
			PoolARN: new FormControl<string | null | undefined>(undefined),
			PoolName: new FormControl<string | null | undefined>(undefined),
			StorageClass: new FormControl<TapeStorageClass | null | undefined>(undefined),
			RetentionLockType: new FormControl<RetentionLockType | null | undefined>(undefined),
			RetentionLockTimeInDays: new FormControl<number | null | undefined>(undefined),
			PoolStatus: new FormControl<PoolStatus | null | undefined>(undefined),
		});

	}

	export enum PoolStatus { ACTIVE = 'ACTIVE', DELETED = 'DELETED' }

	export interface ListTapePoolsInput {
		PoolARNs?: Array<string>;
		Marker?: string;
		Limit?: number | null;
	}
	export interface ListTapePoolsInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTapePoolsInputFormGroup() {
		return new FormGroup<ListTapePoolsInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListTapesOutput {

		/** An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array. */
		TapeInfos?: Array<TapeInfo>;
		Marker?: string;
	}

	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListTapesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListTapesOutputFormGroup() {
		return new FormGroup<ListTapesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a virtual tape. */
	export interface TapeInfo {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeSizeInBytes?: number | null;
		TapeStatus?: string;
		GatewayARN?: string;
		PoolId?: string;
		RetentionStartDate?: Date;
		PoolEntryDate?: Date;
	}

	/** Describes a virtual tape. */
	export interface TapeInfoFormProperties {
		TapeARN: FormControl<string | null | undefined>,
		TapeBarcode: FormControl<string | null | undefined>,
		TapeSizeInBytes: FormControl<number | null | undefined>,
		TapeStatus: FormControl<string | null | undefined>,
		GatewayARN: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		RetentionStartDate: FormControl<Date | null | undefined>,
		PoolEntryDate: FormControl<Date | null | undefined>,
	}
	export function CreateTapeInfoFormGroup() {
		return new FormGroup<TapeInfoFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
			TapeBarcode: new FormControl<string | null | undefined>(undefined),
			TapeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			TapeStatus: new FormControl<string | null | undefined>(undefined),
			GatewayARN: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			RetentionStartDate: new FormControl<Date | null | undefined>(undefined),
			PoolEntryDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul> */
	export interface ListTapesInput {

		/** The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS. */
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number | null;
	}

	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul> */
	export interface ListTapesInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTapesInputFormGroup() {
		return new FormGroup<ListTapesInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ListVolumeInitiatorsOutput */
	export interface ListVolumeInitiatorsOutput {
		Initiators?: Array<string>;
	}

	/** ListVolumeInitiatorsOutput */
	export interface ListVolumeInitiatorsOutputFormProperties {
	}
	export function CreateListVolumeInitiatorsOutputFormGroup() {
		return new FormGroup<ListVolumeInitiatorsOutputFormProperties>({
		});

	}


	/** ListVolumeInitiatorsInput */
	export interface ListVolumeInitiatorsInput {

		/** Required */
		VolumeARN: string;
	}

	/** ListVolumeInitiatorsInput */
	export interface ListVolumeInitiatorsInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeInitiatorsInputFormGroup() {
		return new FormGroup<ListVolumeInitiatorsInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVolumeRecoveryPointsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		VolumeRecoveryPointInfos?: Array<VolumeRecoveryPointInfo>;
	}
	export interface ListVolumeRecoveryPointsOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeRecoveryPointsOutputFormGroup() {
		return new FormGroup<ListVolumeRecoveryPointsOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** Describes a storage volume recovery point object. */
	export interface VolumeRecoveryPointInfo {
		VolumeARN?: string;
		VolumeSizeInBytes?: number | null;
		VolumeUsageInBytes?: number | null;
		VolumeRecoveryPointTime?: string;
	}

	/** Describes a storage volume recovery point object. */
	export interface VolumeRecoveryPointInfoFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		VolumeUsageInBytes: FormControl<number | null | undefined>,
		VolumeRecoveryPointTime: FormControl<string | null | undefined>,
	}
	export function CreateVolumeRecoveryPointInfoFormGroup() {
		return new FormGroup<VolumeRecoveryPointInfoFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeUsageInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeRecoveryPointTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVolumeRecoveryPointsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface ListVolumeRecoveryPointsInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeRecoveryPointsInputFormGroup() {
		return new FormGroup<ListVolumeRecoveryPointsInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListVolumesOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Marker?: string;
		VolumeInfos?: Array<VolumeInfo>;
	}

	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListVolumesOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListVolumesOutputFormGroup() {
		return new FormGroup<ListVolumesOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a storage volume object. */
	export interface VolumeInfo {
		VolumeARN?: string;
		VolumeId?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		GatewayId?: string;
		VolumeType?: string;
		VolumeSizeInBytes?: number | null;
		VolumeAttachmentStatus?: string;
	}

	/** Describes a storage volume object. */
	export interface VolumeInfoFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		GatewayId: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		VolumeSizeInBytes: FormControl<number | null | undefined>,
		VolumeAttachmentStatus: FormControl<string | null | undefined>,
	}
	export function CreateVolumeInfoFormGroup() {
		return new FormGroup<VolumeInfoFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			GatewayId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeAttachmentStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul> */
	export interface ListVolumesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		Marker?: string;
		Limit?: number | null;
	}

	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul> */
	export interface ListVolumesInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListVolumesInputFormGroup() {
		return new FormGroup<ListVolumesInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			Marker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotifyWhenUploadedOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN?: string | null;

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Min length: 1
		 * Max length: 2048
		 */
		NotificationId?: string | null;
	}
	export interface NotifyWhenUploadedOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Min length: 1
		 * Max length: 2048
		 */
		NotificationId: FormControl<string | null | undefined>,
	}
	export function CreateNotifyWhenUploadedOutputFormGroup() {
		return new FormGroup<NotifyWhenUploadedOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			NotificationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface NotifyWhenUploadedInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: string;
	}
	export interface NotifyWhenUploadedInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateNotifyWhenUploadedInputFormGroup() {
		return new FormGroup<NotifyWhenUploadedInputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** RefreshCacheOutput */
	export interface RefreshCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN?: string | null;

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Min length: 1
		 * Max length: 2048
		 */
		NotificationId?: string | null;
	}

	/** RefreshCacheOutput */
	export interface RefreshCacheOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Min length: 50
		 * Max length: 500
		 */
		FileShareARN: FormControl<string | null | undefined>,

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Min length: 1
		 * Max length: 2048
		 */
		NotificationId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshCacheOutputFormGroup() {
		return new FormGroup<RefreshCacheOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			NotificationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** RefreshCacheInput */
	export interface RefreshCacheInput {

		/** Required */
		FileShareARN: string;
		FolderList?: Array<string>;
		Recursive?: boolean | null;
	}

	/** RefreshCacheInput */
	export interface RefreshCacheInputFormProperties {

		/** Required */
		FileShareARN: FormControl<string | null | undefined>,
		Recursive: FormControl<boolean | null | undefined>,
	}
	export function CreateRefreshCacheInputFormGroup() {
		return new FormGroup<RefreshCacheInputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Recursive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** RemoveTagsFromResourceOutput */
	export interface RemoveTagsFromResourceOutput {
		ResourceARN?: string;
	}

	/** RemoveTagsFromResourceOutput */
	export interface RemoveTagsFromResourceOutputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceOutputFormGroup() {
		return new FormGroup<RemoveTagsFromResourceOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RemoveTagsFromResourceInput */
	export interface RemoveTagsFromResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** RemoveTagsFromResourceInput */
	export interface RemoveTagsFromResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceInputFormGroup() {
		return new FormGroup<RemoveTagsFromResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface ResetCacheOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateResetCacheOutputFormGroup() {
		return new FormGroup<ResetCacheOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface ResetCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface ResetCacheInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateResetCacheInputFormGroup() {
		return new FormGroup<ResetCacheInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** RetrieveTapeArchiveOutput */
	export interface RetrieveTapeArchiveOutput {
		TapeARN?: string;
	}

	/** RetrieveTapeArchiveOutput */
	export interface RetrieveTapeArchiveOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveTapeArchiveOutputFormGroup() {
		return new FormGroup<RetrieveTapeArchiveOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RetrieveTapeArchiveInput */
	export interface RetrieveTapeArchiveInput {

		/** Required */
		TapeARN: string;

		/** Required */
		GatewayARN: string;
	}

	/** RetrieveTapeArchiveInput */
	export interface RetrieveTapeArchiveInputFormProperties {

		/** Required */
		TapeARN: FormControl<string | null | undefined>,

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveTapeArchiveInputFormGroup() {
		return new FormGroup<RetrieveTapeArchiveInputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** RetrieveTapeRecoveryPointOutput */
	export interface RetrieveTapeRecoveryPointOutput {
		TapeARN?: string;
	}

	/** RetrieveTapeRecoveryPointOutput */
	export interface RetrieveTapeRecoveryPointOutputFormProperties {
		TapeARN: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveTapeRecoveryPointOutputFormGroup() {
		return new FormGroup<RetrieveTapeRecoveryPointOutputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RetrieveTapeRecoveryPointInput */
	export interface RetrieveTapeRecoveryPointInput {

		/** Required */
		TapeARN: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** RetrieveTapeRecoveryPointInput */
	export interface RetrieveTapeRecoveryPointInputFormProperties {

		/** Required */
		TapeARN: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveTapeRecoveryPointInputFormGroup() {
		return new FormGroup<RetrieveTapeRecoveryPointInputFormProperties>({
			TapeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface SetLocalConsolePasswordOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface SetLocalConsolePasswordOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateSetLocalConsolePasswordOutputFormGroup() {
		return new FormGroup<SetLocalConsolePasswordOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** SetLocalConsolePasswordInput */
	export interface SetLocalConsolePasswordInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		LocalConsolePassword: string;
	}

	/** SetLocalConsolePasswordInput */
	export interface SetLocalConsolePasswordInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		LocalConsolePassword: FormControl<string | null | undefined>,
	}
	export function CreateSetLocalConsolePasswordInputFormGroup() {
		return new FormGroup<SetLocalConsolePasswordInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			LocalConsolePassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetSMBGuestPasswordOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface SetSMBGuestPasswordOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateSetSMBGuestPasswordOutputFormGroup() {
		return new FormGroup<SetSMBGuestPasswordOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** SetSMBGuestPasswordInput */
	export interface SetSMBGuestPasswordInput {

		/** Required */
		GatewayARN: string;

		/** Required */
		Password: string;
	}

	/** SetSMBGuestPasswordInput */
	export interface SetSMBGuestPasswordInputFormProperties {

		/** Required */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSetSMBGuestPasswordInputFormGroup() {
		return new FormGroup<SetSMBGuestPasswordInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down. */
	export interface ShutdownGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down. */
	export interface ShutdownGatewayOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateShutdownGatewayOutputFormGroup() {
		return new FormGroup<ShutdownGatewayOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down. */
	export interface ShutdownGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down. */
	export interface ShutdownGatewayInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateShutdownGatewayInputFormGroup() {
		return new FormGroup<ShutdownGatewayInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface StartAvailabilityMonitorTestOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface StartAvailabilityMonitorTestOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateStartAvailabilityMonitorTestOutputFormGroup() {
		return new FormGroup<StartAvailabilityMonitorTestOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface StartAvailabilityMonitorTestInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface StartAvailabilityMonitorTestInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateStartAvailabilityMonitorTestInputFormGroup() {
		return new FormGroup<StartAvailabilityMonitorTestInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted. */
	export interface StartGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted. */
	export interface StartGatewayOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateStartGatewayOutputFormGroup() {
		return new FormGroup<StartGatewayOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to start. */
	export interface StartGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to start. */
	export interface StartGatewayInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateStartGatewayInputFormGroup() {
		return new FormGroup<StartGatewayInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateAutomaticTapeCreationPolicyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface UpdateAutomaticTapeCreationPolicyOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAutomaticTapeCreationPolicyOutputFormGroup() {
		return new FormGroup<UpdateAutomaticTapeCreationPolicyOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateAutomaticTapeCreationPolicyInput {

		/** Required */
		AutomaticTapeCreationRules: Array<AutomaticTapeCreationRule>;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}
	export interface UpdateAutomaticTapeCreationPolicyInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAutomaticTapeCreationPolicyInputFormGroup() {
		return new FormGroup<UpdateAutomaticTapeCreationPolicyInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated. */
	export interface UpdateBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated. */
	export interface UpdateBandwidthRateLimitOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBandwidthRateLimitOutputFormGroup() {
		return new FormGroup<UpdateBandwidthRateLimitOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul> */
	export interface UpdateBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
		AverageUploadRateLimitInBitsPerSec?: number | null;
		AverageDownloadRateLimitInBitsPerSec?: number | null;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul> */
	export interface UpdateBandwidthRateLimitInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		AverageUploadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
		AverageDownloadRateLimitInBitsPerSec: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBandwidthRateLimitInputFormGroup() {
		return new FormGroup<UpdateBandwidthRateLimitInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			AverageUploadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
			AverageDownloadRateLimitInBitsPerSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBandwidthRateLimitScheduleOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface UpdateBandwidthRateLimitScheduleOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBandwidthRateLimitScheduleOutputFormGroup() {
		return new FormGroup<UpdateBandwidthRateLimitScheduleOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateBandwidthRateLimitScheduleInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		BandwidthRateLimitIntervals: Array<BandwidthRateLimitInterval>;
	}
	export interface UpdateBandwidthRateLimitScheduleInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBandwidthRateLimitScheduleInputFormGroup() {
		return new FormGroup<UpdateBandwidthRateLimitScheduleInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the following fields: */
	export interface UpdateChapCredentialsOutput {
		TargetARN?: string;
		InitiatorName?: string;
	}

	/** A JSON object containing the following fields: */
	export interface UpdateChapCredentialsOutputFormProperties {
		TargetARN: FormControl<string | null | undefined>,
		InitiatorName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChapCredentialsOutputFormGroup() {
		return new FormGroup<UpdateChapCredentialsOutputFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined),
			InitiatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface UpdateChapCredentialsInput {

		/** Required */
		TargetARN: string;

		/** Required */
		SecretToAuthenticateInitiator: string;

		/** Required */
		InitiatorName: string;
		SecretToAuthenticateTarget?: string;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface UpdateChapCredentialsInputFormProperties {

		/** Required */
		TargetARN: FormControl<string | null | undefined>,

		/** Required */
		SecretToAuthenticateInitiator: FormControl<string | null | undefined>,

		/** Required */
		InitiatorName: FormControl<string | null | undefined>,
		SecretToAuthenticateTarget: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChapCredentialsInputFormGroup() {
		return new FormGroup<UpdateChapCredentialsInputFormProperties>({
			TargetARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretToAuthenticateInitiator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InitiatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretToAuthenticateTarget: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFileSystemAssociationOutput {
		FileSystemAssociationARN?: string;
	}
	export interface UpdateFileSystemAssociationOutputFormProperties {
		FileSystemAssociationARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileSystemAssociationOutputFormGroup() {
		return new FormGroup<UpdateFileSystemAssociationOutputFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFileSystemAssociationInput {

		/** Required */
		FileSystemAssociationARN: string;
		UserName?: string;
		Password?: string;
		AuditDestinationARN?: string;

		/** The refresh cache information for the file share or FSx file systems. */
		CacheAttributes?: CacheAttributes;
	}
	export interface UpdateFileSystemAssociationInputFormProperties {

		/** Required */
		FileSystemAssociationARN: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileSystemAssociationInputFormGroup() {
		return new FormGroup<UpdateFileSystemAssociationInputFormProperties>({
			FileSystemAssociationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated. */
	export interface UpdateGatewayInformationOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
		GatewayName?: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated. */
	export interface UpdateGatewayInformationOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
		GatewayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayInformationOutputFormGroup() {
		return new FormGroup<UpdateGatewayInformationOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
			GatewayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayInformationInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/**
		 * The name you configured for your gateway.
		 * Min length: 2
		 * Max length: 255
		 */
		GatewayName?: string | null;
		GatewayTimezone?: string;
		CloudWatchLogGroupARN?: string;
		GatewayCapacity?: GatewayCapacity;
	}
	export interface UpdateGatewayInformationInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/**
		 * The name you configured for your gateway.
		 * Min length: 2
		 * Max length: 255
		 */
		GatewayName: FormControl<string | null | undefined>,
		GatewayTimezone: FormControl<string | null | undefined>,
		CloudWatchLogGroupARN: FormControl<string | null | undefined>,
		GatewayCapacity: FormControl<GatewayCapacity | null | undefined>,
	}
	export function CreateUpdateGatewayInformationInputFormGroup() {
		return new FormGroup<UpdateGatewayInformationInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			GatewayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(255), Validators.pattern('^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$')]),
			GatewayTimezone: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupARN: new FormControl<string | null | undefined>(undefined),
			GatewayCapacity: new FormControl<GatewayCapacity | null | undefined>(undefined),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated. */
	export interface UpdateGatewaySoftwareNowOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated. */
	export interface UpdateGatewaySoftwareNowOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewaySoftwareNowOutputFormGroup() {
		return new FormGroup<UpdateGatewaySoftwareNowOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to update. */
	export interface UpdateGatewaySoftwareNowInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to update. */
	export interface UpdateGatewaySoftwareNowInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewaySoftwareNowInputFormGroup() {
		return new FormGroup<UpdateGatewaySoftwareNowInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated. */
	export interface UpdateMaintenanceStartTimeOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated. */
	export interface UpdateMaintenanceStartTimeOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMaintenanceStartTimeOutputFormGroup() {
		return new FormGroup<UpdateMaintenanceStartTimeOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul> */
	export interface UpdateMaintenanceStartTimeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		HourOfDay: number;

		/** Required */
		MinuteOfHour: number;
		DayOfWeek?: number | null;
		DayOfMonth?: number | null;
	}

	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul> */
	export interface UpdateMaintenanceStartTimeInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		HourOfDay: FormControl<number | null | undefined>,

		/** Required */
		MinuteOfHour: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<number | null | undefined>,
		DayOfMonth: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMaintenanceStartTimeInputFormGroup() {
		return new FormGroup<UpdateMaintenanceStartTimeInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			HourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DayOfWeek: new FormControl<number | null | undefined>(undefined),
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** UpdateNFSFileShareOutput */
	export interface UpdateNFSFileShareOutput {
		FileShareARN?: string;
	}

	/** UpdateNFSFileShareOutput */
	export interface UpdateNFSFileShareOutputFormProperties {
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNFSFileShareOutputFormGroup() {
		return new FormGroup<UpdateNFSFileShareOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateNFSFileShareInput */
	export interface UpdateNFSFileShareInput {

		/** Required */
		FileShareARN: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		NFSFileShareDefaults?: NFSFileShareDefaults;
		DefaultStorageClass?: string;
		ObjectACL?: ObjectACL;
		ClientList?: Array<string>;
		Squash?: string;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		AuditDestinationARN?: string;
	}

	/** UpdateNFSFileShareInput */
	export interface UpdateNFSFileShareInputFormProperties {

		/** Required */
		FileShareARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,
		ObjectACL: FormControl<ObjectACL | null | undefined>,
		Squash: FormControl<string | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNFSFileShareInputFormGroup() {
		return new FormGroup<UpdateNFSFileShareInputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			Squash: new FormControl<string | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateSMBFileShareOutput */
	export interface UpdateSMBFileShareOutput {
		FileShareARN?: string;
	}

	/** UpdateSMBFileShareOutput */
	export interface UpdateSMBFileShareOutputFormProperties {
		FileShareARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSMBFileShareOutputFormGroup() {
		return new FormGroup<UpdateSMBFileShareOutputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateSMBFileShareInput */
	export interface UpdateSMBFileShareInput {

		/** Required */
		FileShareARN: string;
		KMSEncrypted?: boolean | null;
		KMSKey?: string;
		DefaultStorageClass?: string;
		ObjectACL?: ObjectACL;
		ReadOnly?: boolean | null;
		GuessMIMETypeEnabled?: boolean | null;
		RequesterPays?: boolean | null;
		SMBACLEnabled?: boolean | null;
		AccessBasedEnumeration?: boolean | null;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;
		CaseSensitivity?: CaseSensitivity;
		FileShareName?: string;
		CacheAttributes?: CacheAttributes;
		NotificationPolicy?: string;
		OplocksEnabled?: boolean | null;
	}

	/** UpdateSMBFileShareInput */
	export interface UpdateSMBFileShareInputFormProperties {

		/** Required */
		FileShareARN: FormControl<string | null | undefined>,
		KMSEncrypted: FormControl<boolean | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		DefaultStorageClass: FormControl<string | null | undefined>,
		ObjectACL: FormControl<ObjectACL | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		GuessMIMETypeEnabled: FormControl<boolean | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		SMBACLEnabled: FormControl<boolean | null | undefined>,
		AccessBasedEnumeration: FormControl<boolean | null | undefined>,
		AuditDestinationARN: FormControl<string | null | undefined>,
		CaseSensitivity: FormControl<CaseSensitivity | null | undefined>,
		FileShareName: FormControl<string | null | undefined>,
		NotificationPolicy: FormControl<string | null | undefined>,
		OplocksEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSMBFileShareInputFormGroup() {
		return new FormGroup<UpdateSMBFileShareInputFormProperties>({
			FileShareARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			DefaultStorageClass: new FormControl<string | null | undefined>(undefined),
			ObjectACL: new FormControl<ObjectACL | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			GuessMIMETypeEnabled: new FormControl<boolean | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			SMBACLEnabled: new FormControl<boolean | null | undefined>(undefined),
			AccessBasedEnumeration: new FormControl<boolean | null | undefined>(undefined),
			AuditDestinationARN: new FormControl<string | null | undefined>(undefined),
			CaseSensitivity: new FormControl<CaseSensitivity | null | undefined>(undefined),
			FileShareName: new FormControl<string | null | undefined>(undefined),
			NotificationPolicy: new FormControl<string | null | undefined>(undefined),
			OplocksEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSMBFileShareVisibilityOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface UpdateSMBFileShareVisibilityOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSMBFileShareVisibilityOutputFormGroup() {
		return new FormGroup<UpdateSMBFileShareVisibilityOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateSMBFileShareVisibilityInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		FileSharesVisible: boolean;
	}
	export interface UpdateSMBFileShareVisibilityInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		FileSharesVisible: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSMBFileShareVisibilityInputFormGroup() {
		return new FormGroup<UpdateSMBFileShareVisibilityInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			FileSharesVisible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSMBLocalGroupsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface UpdateSMBLocalGroupsOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSMBLocalGroupsOutputFormGroup() {
		return new FormGroup<UpdateSMBLocalGroupsOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateSMBLocalGroupsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		SMBLocalGroups: SMBLocalGroups;
	}
	export interface UpdateSMBLocalGroupsInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSMBLocalGroupsInputFormGroup() {
		return new FormGroup<UpdateSMBLocalGroupsInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateSMBSecurityStrategyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN?: string | null;
	}
	export interface UpdateSMBSecurityStrategyOutputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSMBSecurityStrategyOutputFormGroup() {
		return new FormGroup<UpdateSMBSecurityStrategyOutputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(50), Validators.maxLength(500)]),
		});

	}

	export interface UpdateSMBSecurityStrategyInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: string;

		/** Required */
		SMBSecurityStrategy: SMBSecurityStrategy;
	}
	export interface UpdateSMBSecurityStrategyInputFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.
		 * Required
		 * Min length: 50
		 * Max length: 500
		 */
		GatewayARN: FormControl<string | null | undefined>,

		/** Required */
		SMBSecurityStrategy: FormControl<SMBSecurityStrategy | null | undefined>,
	}
	export function CreateUpdateSMBSecurityStrategyInputFormGroup() {
		return new FormGroup<UpdateSMBSecurityStrategyInputFormProperties>({
			GatewayARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
			SMBSecurityStrategy: new FormControl<SMBSecurityStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume. */
	export interface UpdateSnapshotScheduleOutput {
		VolumeARN?: string;
	}

	/** A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume. */
	export interface UpdateSnapshotScheduleOutputFormProperties {
		VolumeARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotScheduleOutputFormGroup() {
		return new FormGroup<UpdateSnapshotScheduleOutputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul> */
	export interface UpdateSnapshotScheduleInput {

		/** Required */
		VolumeARN: string;

		/** Required */
		StartAt: number;

		/** Required */
		RecurrenceInHours: number;
		Description?: string;
		Tags?: Array<Tag>;
	}

	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul> */
	export interface UpdateSnapshotScheduleInputFormProperties {

		/** Required */
		VolumeARN: FormControl<string | null | undefined>,

		/** Required */
		StartAt: FormControl<number | null | undefined>,

		/** Required */
		RecurrenceInHours: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotScheduleInputFormGroup() {
		return new FormGroup<UpdateSnapshotScheduleInputFormProperties>({
			VolumeARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RecurrenceInHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateVTLDeviceTypeOutput */
	export interface UpdateVTLDeviceTypeOutput {
		VTLDeviceARN?: string;
	}

	/** UpdateVTLDeviceTypeOutput */
	export interface UpdateVTLDeviceTypeOutputFormProperties {
		VTLDeviceARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVTLDeviceTypeOutputFormGroup() {
		return new FormGroup<UpdateVTLDeviceTypeOutputFormProperties>({
			VTLDeviceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVTLDeviceTypeInput {

		/** Required */
		VTLDeviceARN: string;

		/** Required */
		DeviceType: string;
	}
	export interface UpdateVTLDeviceTypeInputFormProperties {

		/** Required */
		VTLDeviceARN: FormControl<string | null | undefined>,

		/** Required */
		DeviceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVTLDeviceTypeInputFormGroup() {
		return new FormGroup<UpdateVTLDeviceTypeInputFormProperties>({
			VTLDeviceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of the file share. */
	export enum FileShareType { NFS = 'NFS', SMB = 'SMB' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.ActivateGateway
		 * @return {ActivateGatewayOutput} Success
		 */
		ActivateGateway(requestBody: ActivateGatewayInput): Observable<ActivateGatewayOutput> {
			return this.http.post<ActivateGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ActivateGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddCache
		 * @return {AddCacheOutput} Success
		 */
		AddCache(requestBody: AddCacheInput): Observable<AddCacheOutput> {
			return this.http.post<AddCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> <li> <p>Storage volumes</p> </li> <li> <p>Virtual tapes</p> </li> <li> <p>NFS and SMB file shares</p> </li> <li> <p>File System associations</p> </li> </ul> <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddTagsToResource
		 * @return {AddTagsToResourceOutput} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceInput): Observable<AddTagsToResourceOutput> {
			return this.http.post<AddTagsToResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddUploadBuffer
		 * @return {AddUploadBufferOutput} Success
		 */
		AddUploadBuffer(requestBody: AddUploadBufferInput): Observable<AddUploadBufferOutput> {
			return this.http.post<AddUploadBufferOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddWorkingStorage
		 * @return {AddWorkingStorageOutput} Success
		 */
		AddWorkingStorage(requestBody: AddWorkingStorageInput): Observable<AddWorkingStorageOutput> {
			return this.http.post<AddWorkingStorageOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
		 * Post #X-Amz-Target=StorageGateway_20130630.AssignTapePool
		 * @return {AssignTapePoolOutput} Success
		 */
		AssignTapePool(requestBody: AssignTapePoolInput): Observable<AssignTapePoolOutput> {
			return this.http.post<AssignTapePoolOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AssignTapePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.AssociateFileSystem
		 * @return {AssociateFileSystemOutput} Success
		 */
		AssociateFileSystem(requestBody: AssociateFileSystemInput): Observable<AssociateFileSystemOutput> {
			return this.http.post<AssociateFileSystemOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
		 * Post #X-Amz-Target=StorageGateway_20130630.AttachVolume
		 * @return {AttachVolumeOutput} Success
		 */
		AttachVolume(requestBody: AttachVolumeInput): Observable<AttachVolumeOutput> {
			return this.http.post<AttachVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AttachVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.CancelArchival
		 * @return {CancelArchivalOutput} Success
		 */
		CancelArchival(requestBody: CancelArchivalInput): Observable<CancelArchivalOutput> {
			return this.http.post<CancelArchivalOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CancelArchival', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.CancelRetrieval
		 * @return {CancelRetrievalOutput} Success
		 */
		CancelRetrieval(requestBody: CancelRetrievalInput): Observable<CancelRetrievalOutput> {
			return this.http.post<CancelRetrievalOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CancelRetrieval', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume
		 * @return {CreateCachediSCSIVolumeOutput} Success
		 */
		CreateCachediSCSIVolume(requestBody: CreateCachediSCSIVolumeInput): Observable<CreateCachediSCSIVolumeOutput> {
			return this.http.post<CreateCachediSCSIVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>S3 File Gateways do not support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare
		 * @return {CreateNFSFileShareOutput} Success
		 */
		CreateNFSFileShare(requestBody: CreateNFSFileShareInput): Observable<CreateNFSFileShareOutput> {
			return this.http.post<CreateNFSFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare
		 * @return {CreateSMBFileShareOutput} Success
		 */
		CreateSMBFileShare(requestBody: CreateSMBFileShareInput): Observable<CreateSMBFileShareOutput> {
			return this.http.post<CreateSMBFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a snapshot of a volume.</p> <p>Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a snapshot schedule</a>.</p> <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSnapshot
		 * @return {CreateSnapshotOutput} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotInput): Observable<CreateSnapshotOutput> {
			return this.http.post<CreateSnapshotOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint
		 * @return {CreateSnapshotFromVolumeRecoveryPointOutput} Success
		 */
		CreateSnapshotFromVolumeRecoveryPoint(requestBody: CreateSnapshotFromVolumeRecoveryPointInput): Observable<CreateSnapshotFromVolumeRecoveryPointOutput> {
			return this.http.post<CreateSnapshotFromVolumeRecoveryPointOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume
		 * @return {CreateStorediSCSIVolumeOutput} Success
		 */
		CreateStorediSCSIVolume(requestBody: CreateStorediSCSIVolumeInput): Observable<CreateStorediSCSIVolumeOutput> {
			return this.http.post<CreateStorediSCSIVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateTapePool
		 * @return {CreateTapePoolOutput} Success
		 */
		CreateTapePool(requestBody: CreateTapePoolInput): Observable<CreateTapePoolOutput> {
			return this.http.post<CreateTapePoolOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateTapePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode
		 * @return {CreateTapeWithBarcodeOutput} Success
		 */
		CreateTapeWithBarcode(requestBody: CreateTapeWithBarcodeInput): Observable<CreateTapeWithBarcodeOutput> {
			return this.http.post<CreateTapeWithBarcodeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateTapes
		 * @return {CreateTapesOutput} Success
		 */
		CreateTapes(requestBody: CreateTapesInput): Observable<CreateTapesOutput> {
			return this.http.post<CreateTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateTapes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy
		 * @return {DeleteAutomaticTapeCreationPolicyOutput} Success
		 */
		DeleteAutomaticTapeCreationPolicy(requestBody: DeleteAutomaticTapeCreationPolicyInput): Observable<DeleteAutomaticTapeCreationPolicyOutput> {
			return this.http.post<DeleteAutomaticTapeCreationPolicyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit
		 * @return {DeleteBandwidthRateLimitOutput} Success
		 */
		DeleteBandwidthRateLimit(requestBody: DeleteBandwidthRateLimitInput): Observable<DeleteBandwidthRateLimitOutput> {
			return this.http.post<DeleteBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials
		 * @return {DeleteChapCredentialsOutput} Success
		 */
		DeleteChapCredentials(requestBody: DeleteChapCredentialsInput): Observable<DeleteChapCredentialsOutput> {
			return this.http.post<DeleteChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteFileShare
		 * @return {DeleteFileShareOutput} Success
		 */
		DeleteFileShare(requestBody: DeleteFileShareInput): Observable<DeleteFileShareOutput> {
			return this.http.post<DeleteFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail page</a>.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteGateway
		 * @return {DeleteGatewayOutput} Success
		 */
		DeleteGateway(requestBody: DeleteGatewayInput): Observable<DeleteGatewayOutput> {
			return this.http.post<DeleteGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule
		 * @return {DeleteSnapshotScheduleOutput} Success
		 */
		DeleteSnapshotSchedule(requestBody: DeleteSnapshotScheduleInput): Observable<DeleteSnapshotScheduleOutput> {
			return this.http.post<DeleteSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteTape
		 * @return {DeleteTapeOutput} Success
		 */
		DeleteTape(requestBody: DeleteTapeInput): Observable<DeleteTapeOutput> {
			return this.http.post<DeleteTapeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteTape', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive
		 * @return {DeleteTapeArchiveOutput} Success
		 */
		DeleteTapeArchive(requestBody: DeleteTapeArchiveInput): Observable<DeleteTapeArchiveOutput> {
			return this.http.post<DeleteTapeArchiveOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteTapePool
		 * @return {DeleteTapePoolOutput} Success
		 */
		DeleteTapePool(requestBody: DeleteTapePoolInput): Observable<DeleteTapePoolOutput> {
			return this.http.post<DeleteTapePoolOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteTapePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume.</p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteVolume
		 * @return {DeleteVolumeOutput} Success
		 */
		DeleteVolume(requestBody: DeleteVolumeInput): Observable<DeleteVolumeOutput> {
			return this.http.post<DeleteVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest
		 * @return {DescribeAvailabilityMonitorTestOutput} Success
		 */
		DescribeAvailabilityMonitorTest(requestBody: DescribeAvailabilityMonitorTestInput): Observable<DescribeAvailabilityMonitorTestOutput> {
			return this.http.post<DescribeAvailabilityMonitorTestOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p> <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit
		 * @return {DescribeBandwidthRateLimitOutput} Success
		 */
		DescribeBandwidthRateLimit(requestBody: DescribeBandwidthRateLimitInput): Observable<DescribeBandwidthRateLimitOutput> {
			return this.http.post<DescribeBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.</p> <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. </p> <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading </p> <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule
		 * @return {DescribeBandwidthRateLimitScheduleOutput} Success
		 */
		DescribeBandwidthRateLimitSchedule(requestBody: DescribeBandwidthRateLimitScheduleInput): Observable<DescribeBandwidthRateLimitScheduleOutput> {
			return this.http.post<DescribeBandwidthRateLimitScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeCache
		 * @return {DescribeCacheOutput} Success
		 */
		DescribeCache(requestBody: DescribeCacheInput): Observable<DescribeCacheOutput> {
			return this.http.post<DescribeCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes
		 * @return {DescribeCachediSCSIVolumesOutput} Success
		 */
		DescribeCachediSCSIVolumes(requestBody: DescribeCachediSCSIVolumesInput): Observable<DescribeCachediSCSIVolumesOutput> {
			return this.http.post<DescribeCachediSCSIVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials
		 * @return {DescribeChapCredentialsOutput} Success
		 */
		DescribeChapCredentials(requestBody: DescribeChapCredentialsInput): Observable<DescribeChapCredentialsOutput> {
			return this.http.post<DescribeChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the file system association information. This operation is only supported for FSx File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations
		 * @return {DescribeFileSystemAssociationsOutput} Success
		 */
		DescribeFileSystemAssociations(requestBody: DescribeFileSystemAssociationsInput): Observable<DescribeFileSystemAssociationsOutput> {
			return this.http.post<DescribeFileSystemAssociationsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation
		 * @return {DescribeGatewayInformationOutput} Success
		 */
		DescribeGatewayInformation(requestBody: DescribeGatewayInformationInput): Observable<DescribeGatewayInformationOutput> {
			return this.http.post<DescribeGatewayInformationOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime
		 * @return {DescribeMaintenanceStartTimeOutput} Success
		 */
		DescribeMaintenanceStartTime(requestBody: DescribeMaintenanceStartTimeInput): Observable<DescribeMaintenanceStartTimeOutput> {
			return this.http.post<DescribeMaintenanceStartTimeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares
		 * @return {DescribeNFSFileSharesOutput} Success
		 */
		DescribeNFSFileShares(requestBody: DescribeNFSFileSharesInput): Observable<DescribeNFSFileSharesOutput> {
			return this.http.post<DescribeNFSFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares
		 * @return {DescribeSMBFileSharesOutput} Success
		 */
		DescribeSMBFileShares(requestBody: DescribeSMBFileSharesInput): Observable<DescribeSMBFileSharesOutput> {
			return this.http.post<DescribeSMBFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings
		 * @return {DescribeSMBSettingsOutput} Success
		 */
		DescribeSMBSettings(requestBody: DescribeSMBSettingsInput): Observable<DescribeSMBSettingsOutput> {
			return this.http.post<DescribeSMBSettingsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule
		 * @return {DescribeSnapshotScheduleOutput} Success
		 */
		DescribeSnapshotSchedule(requestBody: DescribeSnapshotScheduleInput): Observable<DescribeSnapshotScheduleOutput> {
			return this.http.post<DescribeSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes
		 * @return {DescribeStorediSCSIVolumesOutput} Success
		 */
		DescribeStorediSCSIVolumes(requestBody: DescribeStorediSCSIVolumesInput): Observable<DescribeStorediSCSIVolumesOutput> {
			return this.http.post<DescribeStorediSCSIVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapeArchivesOutput} Success
		 */
		DescribeTapeArchives(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeTapeArchivesInput): Observable<DescribeTapeArchivesOutput> {
			return this.http.post<DescribeTapeArchivesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapeRecoveryPointsOutput} Success
		 */
		DescribeTapeRecoveryPoints(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeTapeRecoveryPointsInput): Observable<DescribeTapeRecoveryPointsOutput> {
			return this.http.post<DescribeTapeRecoveryPointsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapesOutput} Success
		 */
		DescribeTapes(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeTapesInput): Observable<DescribeTapesOutput> {
			return this.http.post<DescribeTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer
		 * @return {DescribeUploadBufferOutput} Success
		 */
		DescribeUploadBuffer(requestBody: DescribeUploadBufferInput): Observable<DescribeUploadBufferOutput> {
			return this.http.post<DescribeUploadBufferOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeVTLDevicesOutput} Success
		 */
		DescribeVTLDevices(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeVTLDevicesInput): Observable<DescribeVTLDevicesOutput> {
			return this.http.post<DescribeVTLDevicesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage
		 * @return {DescribeWorkingStorageOutput} Success
		 */
		DescribeWorkingStorage(requestBody: DescribeWorkingStorageInput): Observable<DescribeWorkingStorageOutput> {
			return this.http.post<DescribeWorkingStorageOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DetachVolume
		 * @return {DetachVolumeOutput} Success
		 */
		DetachVolume(requestBody: DetachVolumeInput): Observable<DetachVolumeOutput> {
			return this.http.post<DetachVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DetachVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>After a gateway is disabled, it cannot be enabled.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.DisableGateway
		 * @return {DisableGatewayOutput} Success
		 */
		DisableGateway(requestBody: DisableGatewayInput): Observable<DisableGatewayOutput> {
			return this.http.post<DisableGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DisableGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem
		 * @return {DisassociateFileSystemOutput} Success
		 */
		DisassociateFileSystem(requestBody: DisassociateFileSystemInput): Observable<DisassociateFileSystemOutput> {
			return this.http.post<DisassociateFileSystemOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.
		 * Post #X-Amz-Target=StorageGateway_20130630.JoinDomain
		 * @return {JoinDomainOutput} Success
		 */
		JoinDomain(requestBody: JoinDomainInput): Observable<JoinDomainOutput> {
			return this.http.post<JoinDomainOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.JoinDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list.</p> <p>This operation is only supported for tape gateways.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies
		 * @return {ListAutomaticTapeCreationPoliciesOutput} Success
		 */
		ListAutomaticTapeCreationPolicies(requestBody: ListAutomaticTapeCreationPoliciesInput): Observable<ListAutomaticTapeCreationPoliciesOutput> {
			return this.http.post<ListAutomaticTapeCreationPoliciesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling user account. This operation is only supported for S3 File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListFileShares
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListFileSharesOutput} Success
		 */
		ListFileShares(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListFileSharesInput): Observable<ListFileSharesOutput> {
			return this.http.post<ListFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListFileShares?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListFileSystemAssociationsOutput} Success
		 */
		ListFileSystemAssociations(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListFileSystemAssociationsInput): Observable<ListFileSystemAssociationsOutput> {
			return this.http.post<ListFileSystemAssociationsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListGateways
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListGatewaysOutput} Success
		 */
		ListGateways(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListGatewaysInput): Observable<ListGatewaysOutput> {
			return this.http.post<ListGatewaysOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListGateways?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListLocalDisks
		 * @return {ListLocalDisksOutput} Success
		 */
		ListLocalDisks(requestBody: ListLocalDisksInput): Observable<ListLocalDisksOutput> {
			return this.http.post<ListLocalDisksOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListLocalDisks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListTagsForResource
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListTagsForResource?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools.</p> <p>This operation supports pagination. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tape pools.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListTapePools
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListTapePoolsOutput} Success
		 */
		ListTapePools(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListTapePoolsInput): Observable<ListTapePoolsOutput> {
			return this.http.post<ListTapePoolsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListTapePools?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListTapes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListTapesOutput} Success
		 */
		ListTapes(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListTapesInput): Observable<ListTapesOutput> {
			return this.http.post<ListTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListTapes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators
		 * @return {ListVolumeInitiatorsOutput} Success
		 */
		ListVolumeInitiators(requestBody: ListVolumeInitiatorsInput): Observable<ListVolumeInitiatorsOutput> {
			return this.http.post<ListVolumeInitiatorsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints
		 * @return {ListVolumeRecoveryPointsOutput} Success
		 */
		ListVolumeRecoveryPoints(requestBody: ListVolumeRecoveryPointsInput): Observable<ListVolumeRecoveryPointsOutput> {
			return this.http.post<ListVolumeRecoveryPointsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListVolumesOutput} Success
		 */
		ListVolumes(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListVolumesInput): Observable<ListVolumesOutput> {
			return this.http.post<ListVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to S3. Amazon S3.</p> <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>Storage Gateway User Guide</i>.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded
		 * @return {NotifyWhenUploadedOutput} Success
		 */
		NotifyWhenUploaded(requestBody: NotifyWhenUploadedInput): Observable<NotifyWhenUploadedOutput> {
			return this.http.post<NotifyWhenUploadedOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types.</p> <p>You can subscribe to be notified through an Amazon CloudWatch event when your <code>RefreshCache</code> operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>. This operation is Only supported for S3 File Gateways.</p> <p>When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code> operation completes.</p> <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two refreshes at any time. We recommend using the refresh-complete CloudWatch event notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p> <important> <ul> <li> <p>Wait at least 60 seconds between consecutive RefreshCache API requests.</p> </li> <li> <p>RefreshCache does not evict cache entries if invoked consecutively within 60 seconds of a previous RefreshCache request.</p> </li> <li> <p>If you invoke the RefreshCache API when two requests are already being processed, any new request will cause an <code>InvalidGatewayRequestException</code> error because too many requests were sent to the server.</p> </li> </ul> </important> <note> <p>The S3 bucket name does not need to be included when entering the list of folders in the FolderList parameter.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.RefreshCache
		 * @return {RefreshCacheOutput} Success
		 */
		RefreshCache(requestBody: RefreshCacheInput): Observable<RefreshCacheOutput> {
			return this.http.post<RefreshCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RefreshCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.
		 * Post #X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceOutput} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceInput): Observable<RemoveTagsFromResourceOutput> {
			return this.http.post<RemoveTagsFromResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.ResetCache
		 * @return {ResetCacheOutput} Success
		 */
		ResetCache(requestBody: ResetCacheInput): Observable<ResetCacheOutput> {
			return this.http.post<ResetCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ResetCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive
		 * @return {RetrieveTapeArchiveOutput} Success
		 */
		RetrieveTapeArchive(requestBody: RetrieveTapeArchiveInput): Observable<RetrieveTapeArchiveOutput> {
			return this.http.post<RetrieveTapeArchiveOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint
		 * @return {RetrieveTapeRecoveryPointOutput} Success
		 */
		RetrieveTapeRecoveryPoint(requestBody: RetrieveTapeRecoveryPointInput): Observable<RetrieveTapeRecoveryPointOutput> {
			return this.http.post<RetrieveTapeRecoveryPointOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.
		 * Post #X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword
		 * @return {SetLocalConsolePasswordOutput} Success
		 */
		SetLocalConsolePassword(requestBody: SetLocalConsolePasswordInput): Observable<SetLocalConsolePasswordOutput> {
			return this.http.post<SetLocalConsolePasswordOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>. This operation only supported for S3 File Gateways
		 * Post #X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword
		 * @return {SetSMBGuestPasswordOutput} Success
		 */
		SetSMBGuestPassword(requestBody: SetSMBGuestPasswordInput): Observable<SetSMBGuestPasswordOutput> {
			return this.http.post<SetSMBGuestPasswordOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ShutdownGateway
		 * @return {ShutdownGatewayOutput} Success
		 */
		ShutdownGateway(requestBody: ShutdownGatewayInput): Observable<ShutdownGatewayOutput> {
			return this.http.post<ShutdownGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ShutdownGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the <code>DescribeAvailabilityMonitorTest</code> API.</p> <note> <p>Starting this test will cause your gateway to go offline for a brief period.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest
		 * @return {StartAvailabilityMonitorTestOutput} Success
		 */
		StartAvailabilityMonitorTest(requestBody: StartAvailabilityMonitorTestInput): Observable<StartAvailabilityMonitorTestOutput> {
			return this.http.post<StartAvailabilityMonitorTestOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.StartGateway
		 * @return {StartGatewayOutput} Success
		 */
		StartGateway(requestBody: StartGatewayInput): Observable<StartGatewayOutput> {
			return this.http.post<StartGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.StartGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways.</p> <p>By default, there is no automatic tape creation policy.</p> <note> <p>A gateway can have only one automatic tape creation policy.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy
		 * @return {UpdateAutomaticTapeCreationPolicyOutput} Success
		 */
		UpdateAutomaticTapeCreationPolicy(requestBody: UpdateAutomaticTapeCreationPolicyInput): Observable<UpdateAutomaticTapeCreationPolicyOutput> {
			return this.http.post<UpdateAutomaticTapeCreationPolicyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use <a>UpdateBandwidthRateLimitSchedule</a>.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit
		 * @return {UpdateBandwidthRateLimitOutput} Success
		 */
		UpdateBandwidthRateLimit(requestBody: UpdateBandwidthRateLimitInput): Observable<UpdateBandwidthRateLimitOutput> {
			return this.http.post<UpdateBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule
		 * @return {UpdateBandwidthRateLimitScheduleOutput} Success
		 */
		UpdateBandwidthRateLimitSchedule(requestBody: UpdateBandwidthRateLimitScheduleInput): Observable<UpdateBandwidthRateLimitScheduleOutput> {
			return this.http.post<UpdateBandwidthRateLimitScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials
		 * @return {UpdateChapCredentialsOutput} Success
		 */
		UpdateChapCredentials(requestBody: UpdateChapCredentialsInput): Observable<UpdateChapCredentialsOutput> {
			return this.http.post<UpdateChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a file system association. This operation is only supported in the FSx File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation
		 * @return {UpdateFileSystemAssociationOutput} Success
		 */
		UpdateFileSystemAssociation(requestBody: UpdateFileSystemAssociationInput): Observable<UpdateFileSystemAssociationOutput> {
			return this.http.post<UpdateFileSystemAssociationOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation
		 * @return {UpdateGatewayInformationOutput} Success
		 */
		UpdateGatewayInformation(requestBody: UpdateGatewayInformationInput): Observable<UpdateGatewayInformationOutput> {
			return this.http.post<UpdateGatewayInformationOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow
		 * @return {UpdateGatewaySoftwareNowOutput} Success
		 */
		UpdateGatewaySoftwareNow(requestBody: UpdateGatewaySoftwareNowInput): Observable<UpdateGatewaySoftwareNowOutput> {
			return this.http.post<UpdateGatewaySoftwareNowOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime
		 * @return {UpdateMaintenanceStartTimeOutput} Success
		 */
		UpdateMaintenanceStartTime(requestBody: UpdateMaintenanceStartTimeInput): Observable<UpdateMaintenanceStartTimeOutput> {
			return this.http.post<UpdateMaintenanceStartTimeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share settings:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare
		 * @return {UpdateNFSFileShareOutput} Success
		 */
		UpdateNFSFileShare(requestBody: UpdateNFSFileShareInput): Observable<UpdateNFSFileShareOutput> {
			return this.http.post<UpdateNFSFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <important> <p>File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare
		 * @return {UpdateSMBFileShareOutput} Success
		 */
		UpdateSMBFileShare(requestBody: UpdateSMBFileShareInput): Observable<UpdateSMBFileShareOutput> {
			return this.http.post<UpdateSMBFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility
		 * @return {UpdateSMBFileShareVisibilityOutput} Success
		 */
		UpdateSMBFileShareVisibility(requestBody: UpdateSMBFileShareVisibilityInput): Observable<UpdateSMBFileShareVisibilityOutput> {
			return this.http.post<UpdateSMBFileShareVisibilityOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups
		 * @return {UpdateSMBLocalGroupsOutput} Success
		 */
		UpdateSMBLocalGroups(requestBody: UpdateSMBLocalGroupsInput): Observable<UpdateSMBLocalGroupsOutput> {
			return this.http.post<UpdateSMBLocalGroupsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p> <note> <p>This API is called Security level in the User Guide.</p> <p>A higher security level can affect performance of the gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy
		 * @return {UpdateSMBSecurityStrategyOutput} Success
		 */
		UpdateSMBSecurityStrategy(requestBody: UpdateSMBSecurityStrategyInput): Observable<UpdateSMBSecurityStrategyOutput> {
			return this.http.post<UpdateSMBSecurityStrategyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule
		 * @return {UpdateSnapshotScheduleOutput} Success
		 */
		UpdateSnapshotSchedule(requestBody: UpdateSnapshotScheduleInput): Observable<UpdateSnapshotScheduleOutput> {
			return this.http.post<UpdateSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType
		 * @return {UpdateVTLDeviceTypeOutput} Success
		 */
		UpdateVTLDeviceType(requestBody: UpdateVTLDeviceTypeInput): Observable<UpdateVTLDeviceTypeOutput> {
			return this.http.post<UpdateVTLDeviceTypeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ActivateGatewayX_Amz_Target { 'StorageGateway_20130630.ActivateGateway' = 'StorageGateway_20130630.ActivateGateway' }

	export enum AddCacheX_Amz_Target { 'StorageGateway_20130630.AddCache' = 'StorageGateway_20130630.AddCache' }

	export enum AddTagsToResourceX_Amz_Target { 'StorageGateway_20130630.AddTagsToResource' = 'StorageGateway_20130630.AddTagsToResource' }

	export enum AddUploadBufferX_Amz_Target { 'StorageGateway_20130630.AddUploadBuffer' = 'StorageGateway_20130630.AddUploadBuffer' }

	export enum AddWorkingStorageX_Amz_Target { 'StorageGateway_20130630.AddWorkingStorage' = 'StorageGateway_20130630.AddWorkingStorage' }

	export enum AssignTapePoolX_Amz_Target { 'StorageGateway_20130630.AssignTapePool' = 'StorageGateway_20130630.AssignTapePool' }

	export enum AssociateFileSystemX_Amz_Target { 'StorageGateway_20130630.AssociateFileSystem' = 'StorageGateway_20130630.AssociateFileSystem' }

	export enum AttachVolumeX_Amz_Target { 'StorageGateway_20130630.AttachVolume' = 'StorageGateway_20130630.AttachVolume' }

	export enum CancelArchivalX_Amz_Target { 'StorageGateway_20130630.CancelArchival' = 'StorageGateway_20130630.CancelArchival' }

	export enum CancelRetrievalX_Amz_Target { 'StorageGateway_20130630.CancelRetrieval' = 'StorageGateway_20130630.CancelRetrieval' }

	export enum CreateCachediSCSIVolumeX_Amz_Target { 'StorageGateway_20130630.CreateCachediSCSIVolume' = 'StorageGateway_20130630.CreateCachediSCSIVolume' }

	export enum CreateNFSFileShareX_Amz_Target { 'StorageGateway_20130630.CreateNFSFileShare' = 'StorageGateway_20130630.CreateNFSFileShare' }

	export enum CreateSMBFileShareX_Amz_Target { 'StorageGateway_20130630.CreateSMBFileShare' = 'StorageGateway_20130630.CreateSMBFileShare' }

	export enum CreateSnapshotX_Amz_Target { 'StorageGateway_20130630.CreateSnapshot' = 'StorageGateway_20130630.CreateSnapshot' }

	export enum CreateSnapshotFromVolumeRecoveryPointX_Amz_Target { 'StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint' = 'StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint' }

	export enum CreateStorediSCSIVolumeX_Amz_Target { 'StorageGateway_20130630.CreateStorediSCSIVolume' = 'StorageGateway_20130630.CreateStorediSCSIVolume' }

	export enum CreateTapePoolX_Amz_Target { 'StorageGateway_20130630.CreateTapePool' = 'StorageGateway_20130630.CreateTapePool' }

	export enum CreateTapeWithBarcodeX_Amz_Target { 'StorageGateway_20130630.CreateTapeWithBarcode' = 'StorageGateway_20130630.CreateTapeWithBarcode' }

	export enum CreateTapesX_Amz_Target { 'StorageGateway_20130630.CreateTapes' = 'StorageGateway_20130630.CreateTapes' }

	export enum DeleteAutomaticTapeCreationPolicyX_Amz_Target { 'StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy' = 'StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy' }

	export enum DeleteBandwidthRateLimitX_Amz_Target { 'StorageGateway_20130630.DeleteBandwidthRateLimit' = 'StorageGateway_20130630.DeleteBandwidthRateLimit' }

	export enum DeleteChapCredentialsX_Amz_Target { 'StorageGateway_20130630.DeleteChapCredentials' = 'StorageGateway_20130630.DeleteChapCredentials' }

	export enum DeleteFileShareX_Amz_Target { 'StorageGateway_20130630.DeleteFileShare' = 'StorageGateway_20130630.DeleteFileShare' }

	export enum DeleteGatewayX_Amz_Target { 'StorageGateway_20130630.DeleteGateway' = 'StorageGateway_20130630.DeleteGateway' }

	export enum DeleteSnapshotScheduleX_Amz_Target { 'StorageGateway_20130630.DeleteSnapshotSchedule' = 'StorageGateway_20130630.DeleteSnapshotSchedule' }

	export enum DeleteTapeX_Amz_Target { 'StorageGateway_20130630.DeleteTape' = 'StorageGateway_20130630.DeleteTape' }

	export enum DeleteTapeArchiveX_Amz_Target { 'StorageGateway_20130630.DeleteTapeArchive' = 'StorageGateway_20130630.DeleteTapeArchive' }

	export enum DeleteTapePoolX_Amz_Target { 'StorageGateway_20130630.DeleteTapePool' = 'StorageGateway_20130630.DeleteTapePool' }

	export enum DeleteVolumeX_Amz_Target { 'StorageGateway_20130630.DeleteVolume' = 'StorageGateway_20130630.DeleteVolume' }

	export enum DescribeAvailabilityMonitorTestX_Amz_Target { 'StorageGateway_20130630.DescribeAvailabilityMonitorTest' = 'StorageGateway_20130630.DescribeAvailabilityMonitorTest' }

	export enum DescribeBandwidthRateLimitX_Amz_Target { 'StorageGateway_20130630.DescribeBandwidthRateLimit' = 'StorageGateway_20130630.DescribeBandwidthRateLimit' }

	export enum DescribeBandwidthRateLimitScheduleX_Amz_Target { 'StorageGateway_20130630.DescribeBandwidthRateLimitSchedule' = 'StorageGateway_20130630.DescribeBandwidthRateLimitSchedule' }

	export enum DescribeCacheX_Amz_Target { 'StorageGateway_20130630.DescribeCache' = 'StorageGateway_20130630.DescribeCache' }

	export enum DescribeCachediSCSIVolumesX_Amz_Target { 'StorageGateway_20130630.DescribeCachediSCSIVolumes' = 'StorageGateway_20130630.DescribeCachediSCSIVolumes' }

	export enum DescribeChapCredentialsX_Amz_Target { 'StorageGateway_20130630.DescribeChapCredentials' = 'StorageGateway_20130630.DescribeChapCredentials' }

	export enum DescribeFileSystemAssociationsX_Amz_Target { 'StorageGateway_20130630.DescribeFileSystemAssociations' = 'StorageGateway_20130630.DescribeFileSystemAssociations' }

	export enum DescribeGatewayInformationX_Amz_Target { 'StorageGateway_20130630.DescribeGatewayInformation' = 'StorageGateway_20130630.DescribeGatewayInformation' }

	export enum DescribeMaintenanceStartTimeX_Amz_Target { 'StorageGateway_20130630.DescribeMaintenanceStartTime' = 'StorageGateway_20130630.DescribeMaintenanceStartTime' }

	export enum DescribeNFSFileSharesX_Amz_Target { 'StorageGateway_20130630.DescribeNFSFileShares' = 'StorageGateway_20130630.DescribeNFSFileShares' }

	export enum DescribeSMBFileSharesX_Amz_Target { 'StorageGateway_20130630.DescribeSMBFileShares' = 'StorageGateway_20130630.DescribeSMBFileShares' }

	export enum DescribeSMBSettingsX_Amz_Target { 'StorageGateway_20130630.DescribeSMBSettings' = 'StorageGateway_20130630.DescribeSMBSettings' }

	export enum DescribeSnapshotScheduleX_Amz_Target { 'StorageGateway_20130630.DescribeSnapshotSchedule' = 'StorageGateway_20130630.DescribeSnapshotSchedule' }

	export enum DescribeStorediSCSIVolumesX_Amz_Target { 'StorageGateway_20130630.DescribeStorediSCSIVolumes' = 'StorageGateway_20130630.DescribeStorediSCSIVolumes' }

	export enum DescribeTapeArchivesX_Amz_Target { 'StorageGateway_20130630.DescribeTapeArchives' = 'StorageGateway_20130630.DescribeTapeArchives' }

	export enum DescribeTapeRecoveryPointsX_Amz_Target { 'StorageGateway_20130630.DescribeTapeRecoveryPoints' = 'StorageGateway_20130630.DescribeTapeRecoveryPoints' }

	export enum DescribeTapesX_Amz_Target { 'StorageGateway_20130630.DescribeTapes' = 'StorageGateway_20130630.DescribeTapes' }

	export enum DescribeUploadBufferX_Amz_Target { 'StorageGateway_20130630.DescribeUploadBuffer' = 'StorageGateway_20130630.DescribeUploadBuffer' }

	export enum DescribeVTLDevicesX_Amz_Target { 'StorageGateway_20130630.DescribeVTLDevices' = 'StorageGateway_20130630.DescribeVTLDevices' }

	export enum DescribeWorkingStorageX_Amz_Target { 'StorageGateway_20130630.DescribeWorkingStorage' = 'StorageGateway_20130630.DescribeWorkingStorage' }

	export enum DetachVolumeX_Amz_Target { 'StorageGateway_20130630.DetachVolume' = 'StorageGateway_20130630.DetachVolume' }

	export enum DisableGatewayX_Amz_Target { 'StorageGateway_20130630.DisableGateway' = 'StorageGateway_20130630.DisableGateway' }

	export enum DisassociateFileSystemX_Amz_Target { 'StorageGateway_20130630.DisassociateFileSystem' = 'StorageGateway_20130630.DisassociateFileSystem' }

	export enum JoinDomainX_Amz_Target { 'StorageGateway_20130630.JoinDomain' = 'StorageGateway_20130630.JoinDomain' }

	export enum ListAutomaticTapeCreationPoliciesX_Amz_Target { 'StorageGateway_20130630.ListAutomaticTapeCreationPolicies' = 'StorageGateway_20130630.ListAutomaticTapeCreationPolicies' }

	export enum ListFileSharesX_Amz_Target { 'StorageGateway_20130630.ListFileShares' = 'StorageGateway_20130630.ListFileShares' }

	export enum ListFileSystemAssociationsX_Amz_Target { 'StorageGateway_20130630.ListFileSystemAssociations' = 'StorageGateway_20130630.ListFileSystemAssociations' }

	export enum ListGatewaysX_Amz_Target { 'StorageGateway_20130630.ListGateways' = 'StorageGateway_20130630.ListGateways' }

	export enum ListLocalDisksX_Amz_Target { 'StorageGateway_20130630.ListLocalDisks' = 'StorageGateway_20130630.ListLocalDisks' }

	export enum ListTagsForResourceX_Amz_Target { 'StorageGateway_20130630.ListTagsForResource' = 'StorageGateway_20130630.ListTagsForResource' }

	export enum ListTapePoolsX_Amz_Target { 'StorageGateway_20130630.ListTapePools' = 'StorageGateway_20130630.ListTapePools' }

	export enum ListTapesX_Amz_Target { 'StorageGateway_20130630.ListTapes' = 'StorageGateway_20130630.ListTapes' }

	export enum ListVolumeInitiatorsX_Amz_Target { 'StorageGateway_20130630.ListVolumeInitiators' = 'StorageGateway_20130630.ListVolumeInitiators' }

	export enum ListVolumeRecoveryPointsX_Amz_Target { 'StorageGateway_20130630.ListVolumeRecoveryPoints' = 'StorageGateway_20130630.ListVolumeRecoveryPoints' }

	export enum ListVolumesX_Amz_Target { 'StorageGateway_20130630.ListVolumes' = 'StorageGateway_20130630.ListVolumes' }

	export enum NotifyWhenUploadedX_Amz_Target { 'StorageGateway_20130630.NotifyWhenUploaded' = 'StorageGateway_20130630.NotifyWhenUploaded' }

	export enum RefreshCacheX_Amz_Target { 'StorageGateway_20130630.RefreshCache' = 'StorageGateway_20130630.RefreshCache' }

	export enum RemoveTagsFromResourceX_Amz_Target { 'StorageGateway_20130630.RemoveTagsFromResource' = 'StorageGateway_20130630.RemoveTagsFromResource' }

	export enum ResetCacheX_Amz_Target { 'StorageGateway_20130630.ResetCache' = 'StorageGateway_20130630.ResetCache' }

	export enum RetrieveTapeArchiveX_Amz_Target { 'StorageGateway_20130630.RetrieveTapeArchive' = 'StorageGateway_20130630.RetrieveTapeArchive' }

	export enum RetrieveTapeRecoveryPointX_Amz_Target { 'StorageGateway_20130630.RetrieveTapeRecoveryPoint' = 'StorageGateway_20130630.RetrieveTapeRecoveryPoint' }

	export enum SetLocalConsolePasswordX_Amz_Target { 'StorageGateway_20130630.SetLocalConsolePassword' = 'StorageGateway_20130630.SetLocalConsolePassword' }

	export enum SetSMBGuestPasswordX_Amz_Target { 'StorageGateway_20130630.SetSMBGuestPassword' = 'StorageGateway_20130630.SetSMBGuestPassword' }

	export enum ShutdownGatewayX_Amz_Target { 'StorageGateway_20130630.ShutdownGateway' = 'StorageGateway_20130630.ShutdownGateway' }

	export enum StartAvailabilityMonitorTestX_Amz_Target { 'StorageGateway_20130630.StartAvailabilityMonitorTest' = 'StorageGateway_20130630.StartAvailabilityMonitorTest' }

	export enum StartGatewayX_Amz_Target { 'StorageGateway_20130630.StartGateway' = 'StorageGateway_20130630.StartGateway' }

	export enum UpdateAutomaticTapeCreationPolicyX_Amz_Target { 'StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy' = 'StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy' }

	export enum UpdateBandwidthRateLimitX_Amz_Target { 'StorageGateway_20130630.UpdateBandwidthRateLimit' = 'StorageGateway_20130630.UpdateBandwidthRateLimit' }

	export enum UpdateBandwidthRateLimitScheduleX_Amz_Target { 'StorageGateway_20130630.UpdateBandwidthRateLimitSchedule' = 'StorageGateway_20130630.UpdateBandwidthRateLimitSchedule' }

	export enum UpdateChapCredentialsX_Amz_Target { 'StorageGateway_20130630.UpdateChapCredentials' = 'StorageGateway_20130630.UpdateChapCredentials' }

	export enum UpdateFileSystemAssociationX_Amz_Target { 'StorageGateway_20130630.UpdateFileSystemAssociation' = 'StorageGateway_20130630.UpdateFileSystemAssociation' }

	export enum UpdateGatewayInformationX_Amz_Target { 'StorageGateway_20130630.UpdateGatewayInformation' = 'StorageGateway_20130630.UpdateGatewayInformation' }

	export enum UpdateGatewaySoftwareNowX_Amz_Target { 'StorageGateway_20130630.UpdateGatewaySoftwareNow' = 'StorageGateway_20130630.UpdateGatewaySoftwareNow' }

	export enum UpdateMaintenanceStartTimeX_Amz_Target { 'StorageGateway_20130630.UpdateMaintenanceStartTime' = 'StorageGateway_20130630.UpdateMaintenanceStartTime' }

	export enum UpdateNFSFileShareX_Amz_Target { 'StorageGateway_20130630.UpdateNFSFileShare' = 'StorageGateway_20130630.UpdateNFSFileShare' }

	export enum UpdateSMBFileShareX_Amz_Target { 'StorageGateway_20130630.UpdateSMBFileShare' = 'StorageGateway_20130630.UpdateSMBFileShare' }

	export enum UpdateSMBFileShareVisibilityX_Amz_Target { 'StorageGateway_20130630.UpdateSMBFileShareVisibility' = 'StorageGateway_20130630.UpdateSMBFileShareVisibility' }

	export enum UpdateSMBLocalGroupsX_Amz_Target { 'StorageGateway_20130630.UpdateSMBLocalGroups' = 'StorageGateway_20130630.UpdateSMBLocalGroups' }

	export enum UpdateSMBSecurityStrategyX_Amz_Target { 'StorageGateway_20130630.UpdateSMBSecurityStrategy' = 'StorageGateway_20130630.UpdateSMBSecurityStrategy' }

	export enum UpdateSnapshotScheduleX_Amz_Target { 'StorageGateway_20130630.UpdateSnapshotSchedule' = 'StorageGateway_20130630.UpdateSnapshotSchedule' }

	export enum UpdateVTLDeviceTypeX_Amz_Target { 'StorageGateway_20130630.UpdateVTLDeviceType' = 'StorageGateway_20130630.UpdateVTLDeviceType' }

}

