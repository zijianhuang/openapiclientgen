import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Output structure for the CancelJob operation. */
	export interface CancelJobOutput {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success?: boolean;
	}


	/** The JOBID was missing, not found, or not associated with the AWS account. */
	export interface InvalidJobIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Indicates that the specified job has expired out of the system. */
	export interface ExpiredJobIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The specified job ID has been canceled and is no longer valid. */
	export interface CanceledJobIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** AWS Import/Export cannot cancel the job */
	export interface UnableToCancelJobIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID. */
	export interface InvalidAccessKeyIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The client tool version is invalid. */
	export interface InvalidVersionException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Output structure for the CreateJob operation. */
	export interface CreateJobOutput {

		/** A unique identifier which refers to a particular job. */
		JobId?: string;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature?: string;

		/** The actual text of the SIGNATURE file to be written to disk. */
		SignatureFileContents?: string;

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage?: string;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}

	export enum CreateJobOutputJobType { Import = 0, Export = 1 }


	/** A discrete item that contains the description and URL of an artifact (such as a PDF). */
	export interface Artifact {

		/** The associated description for this object. */
		Description?: string;

		/** The URL for a given Artifact. */
		URL?: string;
	}


	/** One or more required parameters was missing from the request. */
	export interface MissingParameterException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** One or more parameters had an invalid value. */
	export interface InvalidParameterException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The address specified in the manifest is invalid. */
	export interface InvalidAddressException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** One or more manifest fields was invalid. Please correct and resubmit. */
	export interface InvalidManifestFieldException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** One or more required fields were missing from the manifest file. Please correct and resubmit. */
	export interface MissingManifestFieldException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to. */
	export interface NoSuchBucketException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** One or more required customs parameters was missing from the manifest. */
	export interface MissingCustomsException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** One or more customs parameters was invalid. Please correct and resubmit. */
	export interface InvalidCustomsException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** File system specified in export manifest is invalid. */
	export interface InvalidFileSystemException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit. */
	export interface MultipleRegionsException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** The account specified does not have the appropriate bucket permissions. */
	export interface BucketPermissionException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Your manifest is not well-formed. */
	export interface MalformedManifestException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case. */
	export interface CreateJobQuotaExceededException {

		/** The human-readable description of a particular error. */
		message?: string;
	}

	export interface GetShippingLabelOutput {
		ShippingLabelURL?: string;
		Warning?: string;
	}


	/** Output structure for the GetStatus operation. */
	export interface GetStatusOutput {

		/** A unique identifier which refers to a particular job. */
		JobId?: string;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType;

		/** A token representing the location of the storage device, such as "AtAWS". */
		LocationCode?: string;

		/** A more human readable form of the physical location of the storage device. */
		LocationMessage?: string;

		/** A token representing the state of the job, such as "Started". */
		ProgressCode?: string;

		/** A more human readable form of the job status. */
		ProgressMessage?: string;

		/** Name of the shipping company. This value is included when the LocationCode is "Returned". */
		Carrier?: string;

		/** The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned". */
		TrackingNumber?: string;

		/** Amazon S3 bucket for user logs. */
		LogBucket?: string;

		/** The key where the user logs were stored. */
		LogKey?: string;

		/** Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors. */
		ErrorCount?: number;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature?: string;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		SignatureFileContents?: string;

		/** The last manifest submitted, which will be used to process the job. */
		CurrentManifest?: string;

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate?: Date;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}


	/** Output structure for the ListJobs operation. */
	export interface ListJobsOutput {

		/** A list container for Jobs returned by the ListJobs operation. */
		Jobs?: Array<Job>;

		/** Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker. */
		IsTruncated?: boolean;
	}


	/** Representation of a job returned by the ListJobs operation. */
	export interface Job {

		/** A unique identifier which refers to a particular job. */
		JobId?: string;

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate?: Date;

		/** Indicates whether the job was canceled. */
		IsCanceled?: boolean;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType;
	}


	/** Output structure for the UpateJob operation. */
	export interface UpdateJobOutput {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success?: boolean;

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage?: string;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}


	/** AWS Import/Export cannot update the job */
	export interface UnableToUpdateJobIdException {

		/** The human-readable description of a particular error. */
		message?: string;
	}


	/** Input structure for the CancelJob operation. */
	export interface CancelJobInput {

		/** A unique identifier which refers to a particular job. */
		JobId: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}


	/** Specifies whether the job to initiate is an import or export job. */
	export enum JobType { Import = 0, Export = 1 }


	/** Input structure for the CreateJob operation. */
	export interface CreateJobInput {

		/** Specifies whether the job to initiate is an import or export job. */
		JobType: CreateJobOutputJobType;

		/** The UTF-8 encoded text of the manifest file. */
		Manifest: string;

		/** For internal use only. */
		ManifestAddendum?: string;

		/** Validate the manifest and parameter values in the request but do not actually create a job. */
		ValidateOnly: boolean;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}

	export interface GetShippingLabelInput {
		jobIds: Array<string>;

		/** Specifies the name of the person responsible for shipping this package. */
		name?: string;

		/** Specifies the name of the company that will ship this package. */
		company?: string;

		/** Specifies the phone number of the person responsible for shipping this package. */
		phoneNumber?: string;

		/** Specifies the name of your country for the return address. */
		country?: string;

		/** Specifies the name of your state or your province for the return address. */
		stateOrProvince?: string;

		/** Specifies the name of your city for the return address. */
		city?: string;

		/** Specifies the postal code for the return address. */
		postalCode?: string;

		/** Specifies the first part of the street address for the return address, for example 1234 Main Street. */
		street1?: string;

		/** Specifies the optional second part of the street address for the return address, for example Suite 100. */
		street2?: string;

		/** Specifies the optional third part of the street address for the return address, for example c/o Jane Doe. */
		street3?: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}


	/** Input structure for the GetStatus operation. */
	export interface GetStatusInput {

		/** A unique identifier which refers to a particular job. */
		JobId: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}


	/** Input structure for the ListJobs operation. */
	export interface ListJobsInput {

		/** Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker. */
		MaxJobs?: number;

		/** Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs. */
		Marker?: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}


	/** Input structure for the UpateJob operation. */
	export interface UpdateJobInput {

		/** A unique identifier which refers to a particular job. */
		JobId: string;

		/** The UTF-8 encoded text of the manifest file. */
		Manifest: string;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType: CreateJobOutputJobType;

		/** Validate the manifest and parameter values in the request but do not actually create a job. */
		ValidateOnly: boolean;

		/** Specifies the version of the client tool. */
		APIVersion?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
		 * Get #Operation=CancelJob&Action=CancelJob
		 * @return {void} Success
		 */
		GET_CancelJob(JobId: string, APIVersion: string, Operation: GET_CancelJobOperation, Action: GET_CancelJobOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=CancelJob&Action=CancelJob?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
		 * Get #Operation=CreateJob&Action=CreateJob
		 * @return {void} Success
		 */
		GET_CreateJob(JobType: CreateJobOutputJobType, Manifest: string, ManifestAddendum: string, ValidateOnly: boolean, APIVersion: string, Operation: GET_CreateJobOperation, Action: GET_CreateJobOperation, Version: GET_CreateJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=CreateJob&Action=CreateJob?JobType=' + JobType + '&Manifest=' + (Manifest == null ? '' : encodeURIComponent(Manifest)) + '&ManifestAddendum=' + (ManifestAddendum == null ? '' : encodeURIComponent(ManifestAddendum)) + '&ValidateOnly=' + ValidateOnly + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
		 * Get #Operation=GetShippingLabel&Action=GetShippingLabel
		 * @return {void} Success
		 */
		GET_GetShippingLabel(jobIds: Array<string>, name: string, company: string, phoneNumber: string, country: string, stateOrProvince: string, city: string, postalCode: string, street1: string, street2: string, street3: string, APIVersion: string, Operation: GET_GetShippingLabelOperation, Action: GET_GetShippingLabelOperation, Version: GET_GetShippingLabelVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=GetShippingLabel&Action=GetShippingLabel?' + jobIds.map(z => `jobIds=${encodeURIComponent(z)}`).join('&') + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&company=' + (company == null ? '' : encodeURIComponent(company)) + '&phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&stateOrProvince=' + (stateOrProvince == null ? '' : encodeURIComponent(stateOrProvince)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&street1=' + (street1 == null ? '' : encodeURIComponent(street1)) + '&street2=' + (street2 == null ? '' : encodeURIComponent(street2)) + '&street3=' + (street3 == null ? '' : encodeURIComponent(street3)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
		 * Get #Operation=GetStatus&Action=GetStatus
		 * @return {void} Success
		 */
		GET_GetStatus(JobId: string, APIVersion: string, Operation: GET_GetStatusOperation, Action: GET_GetStatusOperation, Version: GET_GetStatusVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=GetStatus&Action=GetStatus?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
		 * Get #Operation=ListJobs&Action=ListJobs
		 * @return {void} Success
		 */
		GET_ListJobs(MaxJobs: number, Marker: string, APIVersion: string, Operation: GET_ListJobsOperation, Action: GET_ListJobsOperation, Version: GET_ListJobsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=ListJobs&Action=ListJobs?MaxJobs=' + MaxJobs + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
		 * Get #Operation=UpdateJob&Action=UpdateJob
		 * @return {void} Success
		 */
		GET_UpdateJob(JobId: string, Manifest: string, JobType: CreateJobOutputJobType, ValidateOnly: boolean, APIVersion: string, Operation: GET_UpdateJobOperation, Action: GET_UpdateJobOperation, Version: GET_UpdateJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=UpdateJob&Action=UpdateJob?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&Manifest=' + (Manifest == null ? '' : encodeURIComponent(Manifest)) + '&JobType=' + JobType + '&ValidateOnly=' + ValidateOnly + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_CancelJobOperation { CancelJob = 0 }

	export enum GET_CancelJobVersion { _2010_06_01 = 0 }

	export enum POST_CancelJobVersion { _2010_06_01 = 0 }

	export enum GET_CreateJobOperation { CreateJob = 0 }

	export enum GET_CreateJobVersion { _2010_06_01 = 0 }

	export enum POST_CreateJobVersion { _2010_06_01 = 0 }

	export enum GET_GetShippingLabelOperation { GetShippingLabel = 0 }

	export enum GET_GetShippingLabelVersion { _2010_06_01 = 0 }

	export enum POST_GetShippingLabelVersion { _2010_06_01 = 0 }

	export enum GET_GetStatusOperation { GetStatus = 0 }

	export enum GET_GetStatusVersion { _2010_06_01 = 0 }

	export enum POST_GetStatusVersion { _2010_06_01 = 0 }

	export enum GET_ListJobsOperation { ListJobs = 0 }

	export enum GET_ListJobsVersion { _2010_06_01 = 0 }

	export enum POST_ListJobsVersion { _2010_06_01 = 0 }

	export enum GET_UpdateJobOperation { UpdateJob = 0 }

	export enum GET_UpdateJobVersion { _2010_06_01 = 0 }

	export enum POST_UpdateJobVersion { _2010_06_01 = 0 }

}

