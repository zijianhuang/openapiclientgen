import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Submission Model - Handles all the fields required to attach documents to an online maintenance job */
	export interface MaintenanceDocumentModel {

		/** The document Mime Type */
		MimeType?: string | null;

		/** The document URL (This has to be public) */
		URL?: string | null;
	}

	/** Submission Model - Handles all the fields required to attach documents to an online maintenance job */
	export interface MaintenanceDocumentModelFormProperties {

		/** The document Mime Type */
		MimeType: FormControl<string | null | undefined>,

		/** The document URL (This has to be public) */
		URL: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceDocumentModelFormGroup() {
		return new FormGroup<MaintenanceDocumentModelFormProperties>({
			MimeType: new FormControl<string | null | undefined>(undefined),
			URL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Submission Model - Handles all fields required to submit an online maintenance job */
	export interface MaintenanceIssueModel {

		/** Documents linked to a submitted maintenance job */
		Documents?: Array<MaintenanceDocumentModel>;

		/** ID used externally to manage jobs before sending to the system. This has a 10 character limit. */
		ExternalID?: string | null;

		/** The fault title if applicable */
		IssueFault?: string | null;

		/** Fault notes */
		IssueNotes?: string | null;

		/** The priority of the job (Defaults to 'Low' if incorrect value or empty) */
		IssuePriority?: MaintenanceIssueModelIssuePriority | null;

		/** The title of the issue */
		IssueTitle?: string | null;

		/** The first line of the property address */
		PropertyAddress1?: string | null;

		/** The second line of the property address */
		PropertyAddress2?: string | null;

		/** The third line of the property address */
		PropertyAddress3?: string | null;

		/** The forth line of the property address */
		PropertyAddress4?: string | null;

		/** The country the property is located */
		PropertyCountry?: string | null;

		/** The property postcode */
		PropertyPostcode?: string | null;

		/** The date the job was reported */
		ReportedAt?: Date | null;

		/** The email address of the Tenant */
		TenantEMailAddress?: string | null;

		/** The forename of the Tenant */
		TenantForename?: string | null;

		/** The primary phone number of the Tenant */
		TenantPhonePrimary?: string | null;

		/** The secondary phone number of the Tenant */
		TenantPhoneSecondary?: string | null;

		/** Is the Tenant’s presence requested during the maintenance visit? (Defaults to “false” if incorrect value or empty) */
		TenantPresenceRequested?: boolean | null;

		/** The surname of the Tenant */
		TenantSurname?: string | null;

		/** The title of the Tenant */
		TenantTitle?: string | null;
	}

	/** Submission Model - Handles all fields required to submit an online maintenance job */
	export interface MaintenanceIssueModelFormProperties {

		/** ID used externally to manage jobs before sending to the system. This has a 10 character limit. */
		ExternalID: FormControl<string | null | undefined>,

		/** The fault title if applicable */
		IssueFault: FormControl<string | null | undefined>,

		/** Fault notes */
		IssueNotes: FormControl<string | null | undefined>,

		/** The priority of the job (Defaults to 'Low' if incorrect value or empty) */
		IssuePriority: FormControl<MaintenanceIssueModelIssuePriority | null | undefined>,

		/** The title of the issue */
		IssueTitle: FormControl<string | null | undefined>,

		/** The first line of the property address */
		PropertyAddress1: FormControl<string | null | undefined>,

		/** The second line of the property address */
		PropertyAddress2: FormControl<string | null | undefined>,

		/** The third line of the property address */
		PropertyAddress3: FormControl<string | null | undefined>,

		/** The forth line of the property address */
		PropertyAddress4: FormControl<string | null | undefined>,

		/** The country the property is located */
		PropertyCountry: FormControl<string | null | undefined>,

		/** The property postcode */
		PropertyPostcode: FormControl<string | null | undefined>,

		/** The date the job was reported */
		ReportedAt: FormControl<Date | null | undefined>,

		/** The email address of the Tenant */
		TenantEMailAddress: FormControl<string | null | undefined>,

		/** The forename of the Tenant */
		TenantForename: FormControl<string | null | undefined>,

		/** The primary phone number of the Tenant */
		TenantPhonePrimary: FormControl<string | null | undefined>,

		/** The secondary phone number of the Tenant */
		TenantPhoneSecondary: FormControl<string | null | undefined>,

		/** Is the Tenant’s presence requested during the maintenance visit? (Defaults to “false” if incorrect value or empty) */
		TenantPresenceRequested: FormControl<boolean | null | undefined>,

		/** The surname of the Tenant */
		TenantSurname: FormControl<string | null | undefined>,

		/** The title of the Tenant */
		TenantTitle: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceIssueModelFormGroup() {
		return new FormGroup<MaintenanceIssueModelFormProperties>({
			ExternalID: new FormControl<string | null | undefined>(undefined),
			IssueFault: new FormControl<string | null | undefined>(undefined),
			IssueNotes: new FormControl<string | null | undefined>(undefined),
			IssuePriority: new FormControl<MaintenanceIssueModelIssuePriority | null | undefined>(undefined),
			IssueTitle: new FormControl<string | null | undefined>(undefined),
			PropertyAddress1: new FormControl<string | null | undefined>(undefined),
			PropertyAddress2: new FormControl<string | null | undefined>(undefined),
			PropertyAddress3: new FormControl<string | null | undefined>(undefined),
			PropertyAddress4: new FormControl<string | null | undefined>(undefined),
			PropertyCountry: new FormControl<string | null | undefined>(undefined),
			PropertyPostcode: new FormControl<string | null | undefined>(undefined),
			ReportedAt: new FormControl<Date | null | undefined>(undefined),
			TenantEMailAddress: new FormControl<string | null | undefined>(undefined),
			TenantForename: new FormControl<string | null | undefined>(undefined),
			TenantPhonePrimary: new FormControl<string | null | undefined>(undefined),
			TenantPhoneSecondary: new FormControl<string | null | undefined>(undefined),
			TenantPresenceRequested: new FormControl<boolean | null | undefined>(undefined),
			TenantSurname: new FormControl<string | null | undefined>(undefined),
			TenantTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceIssueModelIssuePriority { Low = 'Low', Medium = 'Medium', High = 'High' }

	export interface Object {
	}
	export interface ObjectFormProperties {
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a maintenance job for a specific branch
		 * Post v3/maintenance/{shortName}/maintenance/{branchID}/createmaintenancejob
		 * @param {string} shortName The unique client short-name
		 * @param {string} branchID The unique ID of the Branch
		 * @param {MaintenanceIssueModel} requestBody A JSON object containing details of the maintenance job
		 * @return {Object} OK
		 */
		MaintenanceController_CreateMaintenanceJob(shortName: string, branchID: string, requestBody: MaintenanceIssueModel): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'v3/maintenance/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/maintenance/' + (branchID == null ? '' : encodeURIComponent(branchID)) + '/createmaintenancejob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

