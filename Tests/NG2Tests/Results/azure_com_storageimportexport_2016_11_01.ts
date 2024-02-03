import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** BitLocker recovery key or password to the specified drive */
	export interface DriveBitLockerKey {

		/** BitLocker recovery key or password */
		bitLockerKey?: string | null;

		/** Drive ID */
		driveId?: string | null;
	}

	/** BitLocker recovery key or password to the specified drive */
	export interface DriveBitLockerKeyFormProperties {

		/** BitLocker recovery key or password */
		bitLockerKey: FormControl<string | null | undefined>,

		/** Drive ID */
		driveId: FormControl<string | null | undefined>,
	}
	export function CreateDriveBitLockerKeyFormGroup() {
		return new FormGroup<DriveBitLockerKeyFormProperties>({
			bitLockerKey: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the drive's status */
	export interface DriveStatus {

		/** The BitLocker key used to encrypt the drive. */
		bitLockerKey?: string | null;

		/** Bytes successfully transferred for the drive. */
		bytesSucceeded?: number | null;

		/** Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state. */
		copyStatus?: string | null;

		/** The drive header hash value. */
		driveHeaderHash?: string | null;

		/** The drive's hardware serial number, without spaces. */
		driveId?: string | null;

		/** A URI that points to the blob containing the error log for the data transfer operation. */
		errorLogUri?: string | null;

		/** The relative path of the manifest file on the drive. */
		manifestFile?: string | null;

		/** The Base16-encoded MD5 hash of the manifest file on the drive. */
		manifestHash?: string | null;

		/** A URI that points to the blob containing the drive manifest file. */
		manifestUri?: string | null;

		/** Percentage completed for the drive. */
		percentComplete?: number | null;

		/** The drive's current state. */
		state?: DriveStatusState | null;

		/** A URI that points to the blob containing the verbose log for the data transfer operation. */
		verboseLogUri?: string | null;
	}

	/** Provides information about the drive's status */
	export interface DriveStatusFormProperties {

		/** The BitLocker key used to encrypt the drive. */
		bitLockerKey: FormControl<string | null | undefined>,

		/** Bytes successfully transferred for the drive. */
		bytesSucceeded: FormControl<number | null | undefined>,

		/** Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state. */
		copyStatus: FormControl<string | null | undefined>,

		/** The drive header hash value. */
		driveHeaderHash: FormControl<string | null | undefined>,

		/** The drive's hardware serial number, without spaces. */
		driveId: FormControl<string | null | undefined>,

		/** A URI that points to the blob containing the error log for the data transfer operation. */
		errorLogUri: FormControl<string | null | undefined>,

		/** The relative path of the manifest file on the drive. */
		manifestFile: FormControl<string | null | undefined>,

		/** The Base16-encoded MD5 hash of the manifest file on the drive. */
		manifestHash: FormControl<string | null | undefined>,

		/** A URI that points to the blob containing the drive manifest file. */
		manifestUri: FormControl<string | null | undefined>,

		/** Percentage completed for the drive. */
		percentComplete: FormControl<number | null | undefined>,

		/** The drive's current state. */
		state: FormControl<DriveStatusState | null | undefined>,

		/** A URI that points to the blob containing the verbose log for the data transfer operation. */
		verboseLogUri: FormControl<string | null | undefined>,
	}
	export function CreateDriveStatusFormGroup() {
		return new FormGroup<DriveStatusFormProperties>({
			bitLockerKey: new FormControl<string | null | undefined>(undefined),
			bytesSucceeded: new FormControl<number | null | undefined>(undefined),
			copyStatus: new FormControl<string | null | undefined>(undefined),
			driveHeaderHash: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			errorLogUri: new FormControl<string | null | undefined>(undefined),
			manifestFile: new FormControl<string | null | undefined>(undefined),
			manifestHash: new FormControl<string | null | undefined>(undefined),
			manifestUri: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DriveStatusState | null | undefined>(undefined),
			verboseLogUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DriveStatusState { Specified = 'Specified', Received = 'Received', NeverReceived = 'NeverReceived', Transferring = 'Transferring', Completed = 'Completed', CompletedMoreInfo = 'CompletedMoreInfo', ShippedBack = 'ShippedBack' }


	/** Response when errors occurred */
	export interface ErrorResponse {

		/** Describes the error information. */
		error?: any;
	}

	/** Response when errors occurred */
	export interface ErrorResponseFormProperties {

		/** Describes the error information. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs. */
	export interface Export {

		/** A list of the blobs to be exported. */
		blobList?: any;

		/** The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. */
		blobListblobPath?: string | null;
	}

	/** A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs. */
	export interface ExportFormProperties {

		/** A list of the blobs to be exported. */
		blobList: FormControl<any | null | undefined>,

		/** The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. */
		blobListblobPath: FormControl<string | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			blobList: new FormControl<any | null | undefined>(undefined),
			blobListblobPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GetBitLockerKeys response */
	export interface GetBitLockerKeysResponse {

		/** drive status */
		value?: Array<DriveBitLockerKey>;
	}

	/** GetBitLockerKeys response */
	export interface GetBitLockerKeysResponseFormProperties {
	}
	export function CreateGetBitLockerKeysResponseFormGroup() {
		return new FormGroup<GetBitLockerKeysResponseFormProperties>({
		});

	}


	/** Specifies the job properties */
	export interface JobDetails {

		/** Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs. */
		backupDriveManifest?: boolean | null;

		/** Indicates whether a request has been submitted to cancel the job. */
		cancelRequested?: boolean | null;

		/** Contains information about the package being shipped by the customer to the Microsoft data center. */
		deliveryPackage?: PackageInfomation;

		/** The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored. */
		diagnosticsPath?: string | null;

		/** List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs. */
		driveList?: Array<DriveStatus>;

		/** A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs. */
		export?: Export;

		/** A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response. */
		incompleteBlobListUri?: string | null;

		/** The type of job */
		jobType?: string | null;

		/** Default value is Error. Indicates whether error logging or verbose logging will be enabled. */
		logLevel?: string | null;

		/** Overall percentage completed for the job. */
		percentComplete?: number | null;

		/** Specifies the provisioning state of the job. */
		provisioningState?: string | null;

		/** Specifies the return address information for the job. */
		returnAddress?: ReturnAddress;

		/** Contains information about the package being shipped by the customer to the Microsoft data center. */
		returnPackage?: PackageInfomation;

		/** Specifies the return carrier and customer's account with the carrier. */
		returnShipping?: ReturnShipping;

		/** Contains information about the Microsoft datacenter to which the drives should be shipped. */
		shippingInformation?: ShippingInformation;

		/** Current state of the job. */
		state?: string | null;

		/** The resource identifier of the storage account where data will be imported to or exported from. */
		storageAccountId?: string | null;
	}

	/** Specifies the job properties */
	export interface JobDetailsFormProperties {

		/** Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs. */
		backupDriveManifest: FormControl<boolean | null | undefined>,

		/** Indicates whether a request has been submitted to cancel the job. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored. */
		diagnosticsPath: FormControl<string | null | undefined>,

		/** A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response. */
		incompleteBlobListUri: FormControl<string | null | undefined>,

		/** The type of job */
		jobType: FormControl<string | null | undefined>,

		/** Default value is Error. Indicates whether error logging or verbose logging will be enabled. */
		logLevel: FormControl<string | null | undefined>,

		/** Overall percentage completed for the job. */
		percentComplete: FormControl<number | null | undefined>,

		/** Specifies the provisioning state of the job. */
		provisioningState: FormControl<string | null | undefined>,

		/** Current state of the job. */
		state: FormControl<string | null | undefined>,

		/** The resource identifier of the storage account where data will be imported to or exported from. */
		storageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			backupDriveManifest: new FormControl<boolean | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			diagnosticsPath: new FormControl<string | null | undefined>(undefined),
			incompleteBlobListUri: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the job information. */
	export interface JobResponse {

		/** Specifies the resource identifier of the job. */
		id?: string | null;

		/** Specifies the Azure location where the job is created. */
		location?: string | null;

		/** Specifies the name of the job. */
		name?: string | null;

		/** Specifies the job properties */
		properties?: JobDetails;

		/** Specifies the tags that are assigned to the job. */
		tags?: string | null;

		/** Specifies the type of the job resource. */
		type?: string | null;
	}

	/** Contains the job information. */
	export interface JobResponseFormProperties {

		/** Specifies the resource identifier of the job. */
		id: FormControl<string | null | undefined>,

		/** Specifies the Azure location where the job is created. */
		location: FormControl<string | null | undefined>,

		/** Specifies the name of the job. */
		name: FormControl<string | null | undefined>,

		/** Specifies the tags that are assigned to the job. */
		tags: FormControl<string | null | undefined>,

		/** Specifies the type of the job resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobResponseFormGroup() {
		return new FormGroup<JobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List jobs response */
	export interface ListJobsResponse {

		/** link to next batch of jobs */
		nextLink?: string | null;

		/** Job list */
		value?: Array<JobResponse>;
	}

	/** List jobs response */
	export interface ListJobsResponseFormProperties {

		/** link to next batch of jobs */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List operations response */
	export interface ListOperationsResponse {

		/** operations */
		value?: Array<Operation>;
	}

	/** List operations response */
	export interface ListOperationsResponseFormProperties {
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
		});

	}


	/** Describes a supported operation by the Storage Import/Export job API. */
	export interface Operation {

		/**
		 * operation display properties
		 * Required
		 */
		display: any;

		/**
		 * Name of the operation.
		 * Required
		 */
		name: string;
	}

	/** Describes a supported operation by the Storage Import/Export job API. */
	export interface OperationFormProperties {

		/**
		 * operation display properties
		 * Required
		 */
		display: FormControl<any | null | undefined>,

		/**
		 * Name of the operation.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about an Azure data center location. */
	export interface Location {

		/** Specifies the resource identifier of the location. */
		id?: string | null;

		/** Specifies the name of the location. Use List Locations to get all supported locations. */
		name?: string | null;

		/** location properties */
		properties?: any;

		/** Specifies the type of the location. */
		type?: string | null;
	}

	/** Provides information about an Azure data center location. */
	export interface LocationFormProperties {

		/** Specifies the resource identifier of the location. */
		id: FormControl<string | null | undefined>,

		/** Specifies the name of the location. Use List Locations to get all supported locations. */
		name: FormControl<string | null | undefined>,

		/** location properties */
		properties: FormControl<any | null | undefined>,

		/** Specifies the type of the location. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Locations response */
	export interface LocationsResponse {

		/** locations */
		value?: Array<Location>;
	}

	/** Locations response */
	export interface LocationsResponseFormProperties {
	}
	export function CreateLocationsResponseFormGroup() {
		return new FormGroup<LocationsResponseFormProperties>({
		});

	}


	/** Contains information about the package being shipped by the customer to the Microsoft data center. */
	export interface PackageInfomation {

		/**
		 * The name of the carrier that is used to ship the import or export drives.
		 * Required
		 */
		carrierName: string;

		/**
		 * The number of drives included in the package.
		 * Required
		 */
		driveCount: number;

		/**
		 * The date when the package is shipped.
		 * Required
		 */
		shipDate: string;

		/**
		 * The tracking number of the package.
		 * Required
		 */
		trackingNumber: string;
	}

	/** Contains information about the package being shipped by the customer to the Microsoft data center. */
	export interface PackageInfomationFormProperties {

		/**
		 * The name of the carrier that is used to ship the import or export drives.
		 * Required
		 */
		carrierName: FormControl<string | null | undefined>,

		/**
		 * The number of drives included in the package.
		 * Required
		 */
		driveCount: FormControl<number | null | undefined>,

		/**
		 * The date when the package is shipped.
		 * Required
		 */
		shipDate: FormControl<string | null | undefined>,

		/**
		 * The tracking number of the package.
		 * Required
		 */
		trackingNumber: FormControl<string | null | undefined>,
	}
	export function CreatePackageInfomationFormGroup() {
		return new FormGroup<PackageInfomationFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			driveCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shipDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trackingNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Put Job parameters */
	export interface PutJobParameters {

		/** Specifies the supported Azure location where the job should be created */
		location?: string | null;

		/** Specifies the job properties */
		properties?: JobDetails;

		/** Specifies the tags that will be assigned to the job. */
		tags?: string | null;
	}

	/** Put Job parameters */
	export interface PutJobParametersFormProperties {

		/** Specifies the supported Azure location where the job should be created */
		location: FormControl<string | null | undefined>,

		/** Specifies the tags that will be assigned to the job. */
		tags: FormControl<string | null | undefined>,
	}
	export function CreatePutJobParametersFormGroup() {
		return new FormGroup<PutJobParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the return address information for the job. */
	export interface ReturnAddress {

		/**
		 * The city name to use when returning the drives.
		 * Required
		 */
		city: string;

		/**
		 * The country or region to use when returning the drives.
		 * Required
		 */
		countryOrRegion: string;

		/**
		 * Email address of the recipient of the returned drives.
		 * Required
		 */
		email: string;

		/**
		 * Phone number of the recipient of the returned drives.
		 * Required
		 */
		phone: string;

		/**
		 * The postal code to use when returning the drives.
		 * Required
		 */
		postalCode: string;

		/**
		 * The name of the recipient who will receive the hard drives when they are returned.
		 * Required
		 */
		recipientName: string;

		/** The state or province to use when returning the drives. */
		stateOrProvince?: string | null;

		/**
		 * The first line of the street address to use when returning the drives.
		 * Required
		 */
		streetAddress1: string;

		/** The second line of the street address to use when returning the drives. */
		streetAddress2?: string | null;
	}

	/** Specifies the return address information for the job. */
	export interface ReturnAddressFormProperties {

		/**
		 * The city name to use when returning the drives.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country or region to use when returning the drives.
		 * Required
		 */
		countryOrRegion: FormControl<string | null | undefined>,

		/**
		 * Email address of the recipient of the returned drives.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Phone number of the recipient of the returned drives.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * The postal code to use when returning the drives.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The name of the recipient who will receive the hard drives when they are returned.
		 * Required
		 */
		recipientName: FormControl<string | null | undefined>,

		/** The state or province to use when returning the drives. */
		stateOrProvince: FormControl<string | null | undefined>,

		/**
		 * The first line of the street address to use when returning the drives.
		 * Required
		 */
		streetAddress1: FormControl<string | null | undefined>,

		/** The second line of the street address to use when returning the drives. */
		streetAddress2: FormControl<string | null | undefined>,
	}
	export function CreateReturnAddressFormGroup() {
		return new FormGroup<ReturnAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryOrRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recipientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
			streetAddress1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streetAddress2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the return carrier and customer's account with the carrier. */
	export interface ReturnShipping {

		/**
		 * The customer's account number with the carrier.
		 * Required
		 */
		carrierAccountNumber: string;

		/**
		 * The carrier's name.
		 * Required
		 */
		carrierName: string;
	}

	/** Specifies the return carrier and customer's account with the carrier. */
	export interface ReturnShippingFormProperties {

		/**
		 * The customer's account number with the carrier.
		 * Required
		 */
		carrierAccountNumber: FormControl<string | null | undefined>,

		/**
		 * The carrier's name.
		 * Required
		 */
		carrierName: FormControl<string | null | undefined>,
	}
	export function CreateReturnShippingFormGroup() {
		return new FormGroup<ReturnShippingFormProperties>({
			carrierAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			carrierName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Microsoft datacenter to which the drives should be shipped. */
	export interface ShippingInformation {

		/**
		 * The city name to use when returning the drives.
		 * Required
		 */
		city: string;

		/**
		 * The country or region to use when returning the drives.
		 * Required
		 */
		countryOrRegion: string;

		/** Phone number of the recipient of the returned drives. */
		phone?: string | null;

		/**
		 * The postal code to use when returning the drives.
		 * Required
		 */
		postalCode: string;

		/**
		 * The name of the recipient who will receive the hard drives when they are returned.
		 * Required
		 */
		recipientName: string;

		/**
		 * The state or province to use when returning the drives.
		 * Required
		 */
		stateOrProvince: string;

		/**
		 * The first line of the street address to use when returning the drives.
		 * Required
		 */
		streetAddress1: string;

		/** The second line of the street address to use when returning the drives. */
		streetAddress2?: string | null;
	}

	/** Contains information about the Microsoft datacenter to which the drives should be shipped. */
	export interface ShippingInformationFormProperties {

		/**
		 * The city name to use when returning the drives.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country or region to use when returning the drives.
		 * Required
		 */
		countryOrRegion: FormControl<string | null | undefined>,

		/** Phone number of the recipient of the returned drives. */
		phone: FormControl<string | null | undefined>,

		/**
		 * The postal code to use when returning the drives.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The name of the recipient who will receive the hard drives when they are returned.
		 * Required
		 */
		recipientName: FormControl<string | null | undefined>,

		/**
		 * The state or province to use when returning the drives.
		 * Required
		 */
		stateOrProvince: FormControl<string | null | undefined>,

		/**
		 * The first line of the street address to use when returning the drives.
		 * Required
		 */
		streetAddress1: FormControl<string | null | undefined>,

		/** The second line of the street address to use when returning the drives. */
		streetAddress2: FormControl<string | null | undefined>,
	}
	export function CreateShippingInformationFormGroup() {
		return new FormGroup<ShippingInformationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryOrRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recipientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streetAddress1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streetAddress2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update Job parameters */
	export interface UpdateJobParameters {

		/** Specifies the properties of a UpdateJob. */
		properties?: any;

		/** Specifies the tags that will be assigned to the job */
		tags?: string | null;
	}

	/** Update Job parameters */
	export interface UpdateJobParametersFormProperties {

		/** Specifies the properties of a UpdateJob. */
		properties: FormControl<any | null | undefined>,

		/** Specifies the tags that will be assigned to the job */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobParametersFormGroup() {
		return new FormGroup<UpdateJobParametersFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.
		 * Get providers/Microsoft.ImportExport/locations
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {LocationsResponse} OK
		 */
		Locations_List(api_version: Locations_ListApi_version): Observable<LocationsResponse> {
			return this.http.get<LocationsResponse>(this.baseUri + 'providers/Microsoft.ImportExport/locations?api_version=' + api_version, {});
		}

		/**
		 * Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region.
		 * Get providers/Microsoft.ImportExport/locations/{locationName}
		 * @param {string} locationName The name of the location. For example, West US or westus.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {Location} OK
		 */
		Locations_Get(locationName: string, api_version: Locations_ListApi_version): Observable<Location> {
			return this.http.get<Location>(this.baseUri + 'providers/Microsoft.ImportExport/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Returns the list of operations supported by the import/export resource provider.
		 * Get providers/Microsoft.ImportExport/operations
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {ListOperationsResponse} OK
		 */
		Operations_List(api_version: Locations_ListApi_version): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'providers/Microsoft.ImportExport/operations?api_version=' + api_version, {});
		}

		/**
		 * Returns all active and completed jobs in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ImportExport/jobs
		 * @param {number} top An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
		 * @param {string} filter Can be used to restrict the results to certain conditions.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {ListJobsResponse} OK
		 */
		Jobs_ListBySubscription(top: number | null | undefined, filter: string | null | undefined, subscriptionId: string, api_version: Locations_ListApi_version): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ImportExport/jobs?top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + api_version, {});
		}

		/**
		 * Returns all active and completed jobs in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs
		 * @param {number} top An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
		 * @param {string} filter Can be used to restrict the results to certain conditions.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {ListJobsResponse} OK
		 */
		Jobs_ListByResourceGroup(top: number | null | undefined, filter: string | null | undefined, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs?top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + api_version, {});
		}

		/**
		 * Gets information about an existing job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}
		 * @param {string} jobName The name of the import/export job.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {JobResponse} OK
		 */
		Jobs_Get(jobName: string, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version): Observable<JobResponse> {
			return this.http.get<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates a new job or updates an existing job in the specified subscription.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}
		 * @param {string} jobName The name of the import/export job.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @param {PutJobParameters} requestBody The parameters used for creating the job
		 * @return {JobResponse} OK
		 */
		Jobs_Create(jobName: string, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version, requestBody: PutJobParameters): Observable<JobResponse> {
			return this.http.put<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}
		 * @param {string} jobName The name of the import/export job.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {void} OK
		 */
		Jobs_Delete(jobName: string, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}
		 * @param {string} jobName The name of the import/export job.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @param {UpdateJobParameters} requestBody The parameters to update in the job
		 * @return {JobResponse} OK
		 */
		Jobs_Update(jobName: string, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version, requestBody: UpdateJobParameters): Observable<JobResponse> {
			return this.http.patch<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the BitLocker Keys for all drives in the specified job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}/listBitLockerKeys
		 * @param {string} jobName The name of the import/export job.
		 * @param {string} subscriptionId The subscription ID for the Azure user.
		 * @param {string} resourceGroupName The resource group name uniquely identifies the resource group within the user subscription.
		 * @param {Locations_ListApi_version} api_version Specifies the API version to use for this request.
		 * @return {GetBitLockerKeysResponse} OK
		 */
		BitLockerKeys_List(jobName: string, subscriptionId: string, resourceGroupName: string, api_version: Locations_ListApi_version): Observable<GetBitLockerKeysResponse> {
			return this.http.post<GetBitLockerKeysResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ImportExport/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/listBitLockerKeys&api_version=' + api_version, null, {});
		}
	}

	export enum Locations_ListApi_version { '2016-11-01' = '2016-11-01' }

}

