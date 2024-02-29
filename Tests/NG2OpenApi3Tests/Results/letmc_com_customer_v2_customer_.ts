import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a single branch of a client. */
	export interface BranchModel {

		/** Branch address line 1. */
		Address1?: string | null;

		/** Branch address line 2. */
		Address2?: string | null;

		/** Branch address line 3. */
		Address3?: string | null;

		/** Branch address line 4. */
		Address4?: string | null;

		/** The relevant company name, if not the one specified on the branch then the one on company. */
		CompanyName?: string | null;

		/** County */
		County?: string | null;

		/** Branch email address. */
		EMailAddress?: string | null;

		/** A unique identifier defining the object and change revision. */
		ETag?: string | null;

		/** Branch fax phone number. */
		FaxPhone?: string | null;

		/** Branch land phone number. */
		LandPhone?: string | null;

		/** The branch name. */
		Name?: string | null;

		/** The unique Object ID (OID). */
		OID?: string | null;

		/** Branch address postcode. */
		Postcode?: string | null;

		/** Branch web address. */
		WebAddress?: string | null;
	}

	/** Defines a single branch of a client. */
	export interface BranchModelFormProperties {

		/** Branch address line 1. */
		Address1: FormControl<string | null | undefined>,

		/** Branch address line 2. */
		Address2: FormControl<string | null | undefined>,

		/** Branch address line 3. */
		Address3: FormControl<string | null | undefined>,

		/** Branch address line 4. */
		Address4: FormControl<string | null | undefined>,

		/** The relevant company name, if not the one specified on the branch then the one on company. */
		CompanyName: FormControl<string | null | undefined>,

		/** County */
		County: FormControl<string | null | undefined>,

		/** Branch email address. */
		EMailAddress: FormControl<string | null | undefined>,

		/** A unique identifier defining the object and change revision. */
		ETag: FormControl<string | null | undefined>,

		/** Branch fax phone number. */
		FaxPhone: FormControl<string | null | undefined>,

		/** Branch land phone number. */
		LandPhone: FormControl<string | null | undefined>,

		/** The branch name. */
		Name: FormControl<string | null | undefined>,

		/** The unique Object ID (OID). */
		OID: FormControl<string | null | undefined>,

		/** Branch address postcode. */
		Postcode: FormControl<string | null | undefined>,

		/** Branch web address. */
		WebAddress: FormControl<string | null | undefined>,
	}
	export function CreateBranchModelFormGroup() {
		return new FormGroup<BranchModelFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			EMailAddress: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			FaxPhone: new FormControl<string | null | undefined>(undefined),
			LandPhone: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
			WebAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds results from a paged query returning BranchModel values */
	export interface BranchModelResults {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** The resulting data returned from the paged query range */
		Data?: Array<BranchModel>;
	}

	/** Holds results from a paged query returning BranchModel values */
	export interface BranchModelResultsFormProperties {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateBranchModelResultsFormGroup() {
		return new FormGroup<BranchModelResultsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface KeyValuePair_String_String_ {
		key?: string | null;
		value?: string | null;
	}
	export interface KeyValuePair_String_String_FormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePair_String_String_FormGroup() {
		return new FormGroup<KeyValuePair_String_String_FormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Accounting - Finance Entry */
	export interface LandlordAccountingEntryModel {

		/**
		 * Amount
		 * Type: double
		 */
		Amount?: number | null;

		/** Payment Date */
		Date?: Date | null;

		/** Description. */
		Description?: string | null;

		/**
		 * Transaction Number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TransactionNumber?: number | null;
	}

	/** Landlord Accounting - Finance Entry */
	export interface LandlordAccountingEntryModelFormProperties {

		/**
		 * Amount
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/** Payment Date */
		Date: FormControl<Date | null | undefined>,

		/** Description. */
		Description: FormControl<string | null | undefined>,

		/**
		 * Transaction Number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TransactionNumber: FormControl<number | null | undefined>,
	}
	export function CreateLandlordAccountingEntryModelFormGroup() {
		return new FormGroup<LandlordAccountingEntryModelFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			TransactionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Invoices */
	export interface LandlordAccountingInvoiceModel {

		/** Payment Date */
		Date?: Date | null;

		/** Transaction Number */
		InvoiceID?: string | null;

		/** Does this invoice contain contractor payments? */
		IsMaintenanceInvoice?: boolean | null;
	}

	/** Invoices */
	export interface LandlordAccountingInvoiceModelFormProperties {

		/** Payment Date */
		Date: FormControl<Date | null | undefined>,

		/** Transaction Number */
		InvoiceID: FormControl<string | null | undefined>,

		/** Does this invoice contain contractor payments? */
		IsMaintenanceInvoice: FormControl<boolean | null | undefined>,
	}
	export function CreateLandlordAccountingInvoiceModelFormGroup() {
		return new FormGroup<LandlordAccountingInvoiceModelFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			InvoiceID: new FormControl<string | null | undefined>(undefined),
			IsMaintenanceInvoice: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Landlord Accounting */
	export interface LandlordAccountingModel {

		/**
		 * Account Balance
		 * Type: double
		 */
		AccountBalance?: number | null;

		/** Last Payment Made */
		LastPayment?: Date | null;

		/** Payment History */
		PaymentHistory?: Array<LandlordAccountingEntryModel>;

		/** Statements */
		Statements?: Array<LandlordAccountingInvoiceModel>;
	}

	/** Landlord Accounting */
	export interface LandlordAccountingModelFormProperties {

		/**
		 * Account Balance
		 * Type: double
		 */
		AccountBalance: FormControl<number | null | undefined>,

		/** Last Payment Made */
		LastPayment: FormControl<Date | null | undefined>,
	}
	export function CreateLandlordAccountingModelFormGroup() {
		return new FormGroup<LandlordAccountingModelFormProperties>({
			AccountBalance: new FormControl<number | null | undefined>(undefined),
			LastPayment: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Landlord Arrears Chase Note. */
	export interface LandlordChaseNoteModel {

		/** Created Date */
		Date?: Date | null;

		/** Note. */
		Note?: string | null;

		/** Note Type */
		NoteType?: string | null;

		/** Tenant */
		TenantID?: string | null;
	}

	/** Landlord Arrears Chase Note. */
	export interface LandlordChaseNoteModelFormProperties {

		/** Created Date */
		Date: FormControl<Date | null | undefined>,

		/** Note. */
		Note: FormControl<string | null | undefined>,

		/** Note Type */
		NoteType: FormControl<string | null | undefined>,

		/** Tenant */
		TenantID: FormControl<string | null | undefined>,
	}
	export function CreateLandlordChaseNoteModelFormGroup() {
		return new FormGroup<LandlordChaseNoteModelFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			NoteType: new FormControl<string | null | undefined>(undefined),
			TenantID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class for Landlord CRM Entries */
	export interface LandlordCrmEntry {
		BranchID?: string | null;
		GlobalReference?: string | null;
		Name?: string | null;
		OID?: string | null;
	}

	/** Class for Landlord CRM Entries */
	export interface LandlordCrmEntryFormProperties {
		BranchID: FormControl<string | null | undefined>,
		GlobalReference: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OID: FormControl<string | null | undefined>,
	}
	export function CreateLandlordCrmEntryFormGroup() {
		return new FormGroup<LandlordCrmEntryFormProperties>({
			BranchID: new FormControl<string | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Details */
	export interface LandlordDetailsModel {

		/** Address */
		Address?: string | null;

		/** Email */
		Email?: string | null;

		/** User Friendly ID */
		GlobalReference?: string | null;

		/** ID */
		ID?: string | null;

		/** Mobile */
		Mobile?: string | null;

		/** Name */
		Name?: string | null;

		/** Phone */
		Phone?: string | null;
	}

	/** Landlord Details */
	export interface LandlordDetailsModelFormProperties {

		/** Address */
		Address: FormControl<string | null | undefined>,

		/** Email */
		Email: FormControl<string | null | undefined>,

		/** User Friendly ID */
		GlobalReference: FormControl<string | null | undefined>,

		/** ID */
		ID: FormControl<string | null | undefined>,

		/** Mobile */
		Mobile: FormControl<string | null | undefined>,

		/** Name */
		Name: FormControl<string | null | undefined>,

		/** Phone */
		Phone: FormControl<string | null | undefined>,
	}
	export function CreateLandlordDetailsModelFormGroup() {
		return new FormGroup<LandlordDetailsModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lettings Inspection */
	export interface LandlordLettingsInspectionModel {

		/** InspectionDate */
		InspectionDate?: Date | null;

		/** Notes */
		Notes?: string | null;
	}

	/** Lettings Inspection */
	export interface LandlordLettingsInspectionModelFormProperties {

		/** InspectionDate */
		InspectionDate: FormControl<Date | null | undefined>,

		/** Notes */
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateLandlordLettingsInspectionModelFormGroup() {
		return new FormGroup<LandlordLettingsInspectionModelFormProperties>({
			InspectionDate: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance Certificate */
	export interface LandlordMaintenanceCertificateModel {

		/** Due */
		Due?: Date | null;

		/** Files */
		Files?: Array<LettingsLandlordDocument>;

		/** Status. */
		Status?: string | null;

		/** Type */
		Type?: string | null;
	}

	/** Maintenance Certificate */
	export interface LandlordMaintenanceCertificateModelFormProperties {

		/** Due */
		Due: FormControl<Date | null | undefined>,

		/** Status. */
		Status: FormControl<string | null | undefined>,

		/** Type */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateLandlordMaintenanceCertificateModelFormGroup() {
		return new FormGroup<LandlordMaintenanceCertificateModelFormProperties>({
			Due: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Document details. */
	export interface LettingsLandlordDocument {

		/** File Name */
		FileName?: string | null;

		/**
		 * File Size Bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FileSize?: number | null;

		/** ID */
		ID?: string | null;

		/** MIME Type */
		MIMEType?: string | null;

		/** Document Note */
		Note?: string | null;
	}

	/** Document details. */
	export interface LettingsLandlordDocumentFormProperties {

		/** File Name */
		FileName: FormControl<string | null | undefined>,

		/**
		 * File Size Bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FileSize: FormControl<number | null | undefined>,

		/** ID */
		ID: FormControl<string | null | undefined>,

		/** MIME Type */
		MIMEType: FormControl<string | null | undefined>,

		/** Document Note */
		Note: FormControl<string | null | undefined>,
	}
	export function CreateLettingsLandlordDocumentFormGroup() {
		return new FormGroup<LettingsLandlordDocumentFormProperties>({
			FileName: new FormControl<string | null | undefined>(undefined),
			FileSize: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			MIMEType: new FormControl<string | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance Job */
	export interface LandlordMaintenanceJobModel {

		/** AssignedTo */
		AssignedTo?: string | null;

		/** Job Closed Date:- */
		ClosedDate?: Date | null;

		/** Description */
		Description?: string | null;
		MaintenanceNotes?: Array<LandlordMaintenanceJobNoteModel>;

		/** Property */
		Property?: string | null;

		/** Reported */
		Reported?: Date | null;

		/** Status */
		Status?: string | null;
	}

	/** Maintenance Job */
	export interface LandlordMaintenanceJobModelFormProperties {

		/** AssignedTo */
		AssignedTo: FormControl<string | null | undefined>,

		/** Job Closed Date:- */
		ClosedDate: FormControl<Date | null | undefined>,

		/** Description */
		Description: FormControl<string | null | undefined>,

		/** Property */
		Property: FormControl<string | null | undefined>,

		/** Reported */
		Reported: FormControl<Date | null | undefined>,

		/** Status */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLandlordMaintenanceJobModelFormGroup() {
		return new FormGroup<LandlordMaintenanceJobModelFormProperties>({
			AssignedTo: new FormControl<string | null | undefined>(undefined),
			ClosedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Property: new FormControl<string | null | undefined>(undefined),
			Reported: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance Job Note Helper Model:- */
	export interface LandlordMaintenanceJobNoteModel {

		/** Created At:- */
		CreatedAt?: Date | null;

		/** Note Contents:- */
		NoteContents?: string | null;

		/** Job ID:- */
		OID?: string | null;
	}

	/** Maintenance Job Note Helper Model:- */
	export interface LandlordMaintenanceJobNoteModelFormProperties {

		/** Created At:- */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Note Contents:- */
		NoteContents: FormControl<string | null | undefined>,

		/** Job ID:- */
		OID: FormControl<string | null | undefined>,
	}
	export function CreateLandlordMaintenanceJobNoteModelFormGroup() {
		return new FormGroup<LandlordMaintenanceJobNoteModelFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			NoteContents: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Maintenance */
	export interface LandlordMaintenanceModel {

		/** Maintenance Jobs. */
		Jobs?: Array<LandlordMaintenanceJobModel>;
	}

	/** Landlord Maintenance */
	export interface LandlordMaintenanceModelFormProperties {
	}
	export function CreateLandlordMaintenanceModelFormGroup() {
		return new FormGroup<LandlordMaintenanceModelFormProperties>({
		});

	}


	/** Maintenance Preference */
	export interface LandlordMaintenancePreferenceModel {

		/** Name */
		Name?: string | null;

		/** Notes. */
		Notes?: string | null;

		/** Type */
		Type?: string | null;
	}

	/** Maintenance Preference */
	export interface LandlordMaintenancePreferenceModelFormProperties {

		/** Name */
		Name: FormControl<string | null | undefined>,

		/** Notes. */
		Notes: FormControl<string | null | undefined>,

		/** Type */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateLandlordMaintenancePreferenceModelFormGroup() {
		return new FormGroup<LandlordMaintenancePreferenceModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores a photo related to a property structure. */
	export interface LandlordPhotoModel {

		/** A unique identifier defining the object and change revision. */
		ETag?: string | null;

		/** The file name. */
		FileName?: string | null;

		/** The unique Object ID (OID). */
		OID?: string | null;

		/** The photo type. */
		PhotoType?: LandlordPhotoModelPhotoType | null;
	}

	/** Stores a photo related to a property structure. */
	export interface LandlordPhotoModelFormProperties {

		/** A unique identifier defining the object and change revision. */
		ETag: FormControl<string | null | undefined>,

		/** The file name. */
		FileName: FormControl<string | null | undefined>,

		/** The unique Object ID (OID). */
		OID: FormControl<string | null | undefined>,

		/** The photo type. */
		PhotoType: FormControl<LandlordPhotoModelPhotoType | null | undefined>,
	}
	export function CreateLandlordPhotoModelFormGroup() {
		return new FormGroup<LandlordPhotoModelFormProperties>({
			ETag: new FormControl<string | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			PhotoType: new FormControl<LandlordPhotoModelPhotoType | null | undefined>(undefined),
		});

	}

	export enum LandlordPhotoModelPhotoType { Photo = 'Photo', Map = 'Map', FloorPlan = 'FloorPlan', SiteMap = 'SiteMap', AerialPhoto = 'AerialPhoto' }


	/** Holds results from a paged query returning LandlordPhotoModel values */
	export interface LandlordPhotoModelResults {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** The resulting data returned from the paged query range */
		Data?: Array<LandlordPhotoModel>;
	}

	/** Holds results from a paged query returning LandlordPhotoModel values */
	export interface LandlordPhotoModelResultsFormProperties {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateLandlordPhotoModelResultsFormGroup() {
		return new FormGroup<LandlordPhotoModelResultsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class to represent proffit loss report. */
	export interface LandlordProfitLossModel {

		/** Class for a group of entries. */
		DirectCosts?: LandlordProfitLossSectionModel;

		/** Class for a group of entries. */
		GrossProfitLoss?: LandlordProfitLossSectionModel;

		/** Class for a group of entries. */
		Income?: LandlordProfitLossSectionModel;
	}

	/** Class to represent proffit loss report. */
	export interface LandlordProfitLossModelFormProperties {
	}
	export function CreateLandlordProfitLossModelFormGroup() {
		return new FormGroup<LandlordProfitLossModelFormProperties>({
		});

	}


	/** Class for a group of entries. */
	export interface LandlordProfitLossSectionModel {

		/** Rows. */
		Rows?: Array<LandlordProfitLossRowModel>;
	}

	/** Class for a group of entries. */
	export interface LandlordProfitLossSectionModelFormProperties {
	}
	export function CreateLandlordProfitLossSectionModelFormGroup() {
		return new FormGroup<LandlordProfitLossSectionModelFormProperties>({
		});

	}


	/** Class for a group of entries. */
	export interface LandlordProfitLossRowModel {

		/** Month Totals */
		MonthTotals?: Array<KeyValuePair_String_String_>;

		/** Nominal Code */
		NominalCode?: string | null;

		/** Title of the values. */
		Title?: string | null;

		/** Total for all months. */
		Total?: string | null;
	}

	/** Class for a group of entries. */
	export interface LandlordProfitLossRowModelFormProperties {

		/** Nominal Code */
		NominalCode: FormControl<string | null | undefined>,

		/** Title of the values. */
		Title: FormControl<string | null | undefined>,

		/** Total for all months. */
		Total: FormControl<string | null | undefined>,
	}
	export function CreateLandlordProfitLossRowModelFormGroup() {
		return new FormGroup<LandlordProfitLossRowModelFormProperties>({
			NominalCode: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Total: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Rent Arrears. */
	export interface LandlordRentArrearsModel {

		/** Chase Notes */
		ChaseNotes?: Array<LandlordChaseNoteModel>;

		/**
		 * Rent Collected
		 * Type: double
		 */
		RentCollected?: number | null;

		/** Outstanding Rent */
		RentOutstanding?: Array<LandlordRentOustandingItem>;

		/**
		 * Rent Arrears
		 * Type: double
		 */
		TotalRentArrears?: number | null;
	}

	/** Landlord Rent Arrears. */
	export interface LandlordRentArrearsModelFormProperties {

		/**
		 * Rent Collected
		 * Type: double
		 */
		RentCollected: FormControl<number | null | undefined>,

		/**
		 * Rent Arrears
		 * Type: double
		 */
		TotalRentArrears: FormControl<number | null | undefined>,
	}
	export function CreateLandlordRentArrearsModelFormGroup() {
		return new FormGroup<LandlordRentArrearsModelFormProperties>({
			RentCollected: new FormControl<number | null | undefined>(undefined),
			TotalRentArrears: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Outstanding Rent */
	export interface LandlordRentOustandingItem {

		/**
		 * Days since the tenant went into arrears
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DebtDays?: number | null;

		/**
		 * Outstanding Rent
		 * Type: double
		 */
		OutstandingRent?: number | null;

		/** Property */
		Property?: string | null;

		/** Tenant */
		Tenant?: string | null;

		/** TenantID */
		TenantID?: string | null;
	}

	/** Outstanding Rent */
	export interface LandlordRentOustandingItemFormProperties {

		/**
		 * Days since the tenant went into arrears
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DebtDays: FormControl<number | null | undefined>,

		/**
		 * Outstanding Rent
		 * Type: double
		 */
		OutstandingRent: FormControl<number | null | undefined>,

		/** Property */
		Property: FormControl<string | null | undefined>,

		/** Tenant */
		Tenant: FormControl<string | null | undefined>,

		/** TenantID */
		TenantID: FormControl<string | null | undefined>,
	}
	export function CreateLandlordRentOustandingItemFormGroup() {
		return new FormGroup<LandlordRentOustandingItemFormProperties>({
			DebtDays: new FormControl<number | null | undefined>(undefined),
			OutstandingRent: new FormControl<number | null | undefined>(undefined),
			Property: new FormControl<string | null | undefined>(undefined),
			Tenant: new FormControl<string | null | undefined>(undefined),
			TenantID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Settings */
	export interface LandlordSettingsModel {

		/** Linked Accounts */
		LinkedAccounts?: Array<LandlordDetailsModel>;
	}

	/** Landlord Settings */
	export interface LandlordSettingsModelFormProperties {
	}
	export function CreateLandlordSettingsModelFormGroup() {
		return new FormGroup<LandlordSettingsModelFormProperties>({
		});

	}


	/** Landlord Summary - Landing Page. */
	export interface LandlordSummaryModel {

		/**
		 * Account Balance
		 * Type: double
		 */
		AccountBalance?: number | null;

		/** Last Payment Made */
		LastPayment?: Date | null;

		/** Tenancies */
		Tenancies?: Array<LandlordSummaryTenancyModel>;

		/**
		 * Rent Arrears
		 * Type: double
		 */
		TotalRentArrears?: number | null;
	}

	/** Landlord Summary - Landing Page. */
	export interface LandlordSummaryModelFormProperties {

		/**
		 * Account Balance
		 * Type: double
		 */
		AccountBalance: FormControl<number | null | undefined>,

		/** Last Payment Made */
		LastPayment: FormControl<Date | null | undefined>,

		/**
		 * Rent Arrears
		 * Type: double
		 */
		TotalRentArrears: FormControl<number | null | undefined>,
	}
	export function CreateLandlordSummaryModelFormGroup() {
		return new FormGroup<LandlordSummaryModelFormProperties>({
			AccountBalance: new FormControl<number | null | undefined>(undefined),
			LastPayment: new FormControl<Date | null | undefined>(undefined),
			TotalRentArrears: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Landlord Summary - Landing Page. */
	export interface LandlordSummaryTenancyModel {

		/**
		 * Bomd
		 * Type: double
		 */
		Bond?: number | null;

		/** The Tenancy Branch ID */
		BranchID?: string | null;

		/** Description. */
		Description?: string | null;

		/** User Friendly ID */
		GlobalReference?: string | null;

		/** ID */
		ID?: string | null;

		/**
		 * Maintenance Jobs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaintenanceJobs?: number | null;

		/** State of the tenancy */
		ManagedRent?: boolean | null;

		/** Display Property Address */
		PropertyAddress?: string | null;

		/** Rent */
		Rent?: string | null;

		/**
		 * Rent Arrears
		 * Type: double
		 */
		RentArrears?: number | null;

		/**
		 * Rent Arrears
		 * Type: double
		 */
		RentCollected?: number | null;

		/** Tenancy Property */
		TenancyProperty?: string | null;

		/** State of the tenancy */
		TenancyState?: string | null;
	}

	/** Landlord Summary - Landing Page. */
	export interface LandlordSummaryTenancyModelFormProperties {

		/**
		 * Bomd
		 * Type: double
		 */
		Bond: FormControl<number | null | undefined>,

		/** The Tenancy Branch ID */
		BranchID: FormControl<string | null | undefined>,

		/** Description. */
		Description: FormControl<string | null | undefined>,

		/** User Friendly ID */
		GlobalReference: FormControl<string | null | undefined>,

		/** ID */
		ID: FormControl<string | null | undefined>,

		/**
		 * Maintenance Jobs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaintenanceJobs: FormControl<number | null | undefined>,

		/** State of the tenancy */
		ManagedRent: FormControl<boolean | null | undefined>,

		/** Display Property Address */
		PropertyAddress: FormControl<string | null | undefined>,

		/** Rent */
		Rent: FormControl<string | null | undefined>,

		/**
		 * Rent Arrears
		 * Type: double
		 */
		RentArrears: FormControl<number | null | undefined>,

		/**
		 * Rent Arrears
		 * Type: double
		 */
		RentCollected: FormControl<number | null | undefined>,

		/** Tenancy Property */
		TenancyProperty: FormControl<string | null | undefined>,

		/** State of the tenancy */
		TenancyState: FormControl<string | null | undefined>,
	}
	export function CreateLandlordSummaryTenancyModelFormGroup() {
		return new FormGroup<LandlordSummaryTenancyModelFormProperties>({
			Bond: new FormControl<number | null | undefined>(undefined),
			BranchID: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			MaintenanceJobs: new FormControl<number | null | undefined>(undefined),
			ManagedRent: new FormControl<boolean | null | undefined>(undefined),
			PropertyAddress: new FormControl<string | null | undefined>(undefined),
			Rent: new FormControl<string | null | undefined>(undefined),
			RentArrears: new FormControl<number | null | undefined>(undefined),
			RentCollected: new FormControl<number | null | undefined>(undefined),
			TenancyProperty: new FormControl<string | null | undefined>(undefined),
			TenancyState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Landlord Tenancy Model. */
	export interface LandlordTenancyModel {

		/** Actual End Date */
		ActualEndDate?: Date | null;

		/**
		 * Beds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Beds?: number | null;

		/**
		 * Bond
		 * Type: double
		 */
		Bond?: number | null;

		/** The tenancy branch ID:- */
		BranchID?: string | null;

		/** Maintenance Certificates. */
		Certificates?: Array<LandlordMaintenanceCertificateModel>;

		/** Tenancy documents:- */
		Documents?: Array<LettingsLandlordDocument>;

		/** Fixed Date */
		FixedDate?: Date | null;

		/** User Friendly ID */
		GlobalReference?: string | null;

		/** ID */
		ID?: string | null;

		/** Inspections */
		Inspections?: Array<LandlordLettingsInspectionModel>;

		/** State of the tenancy */
		ManagedRent?: boolean | null;

		/** Maintenance Preferences. */
		Preferences?: Array<LandlordMaintenancePreferenceModel>;

		/**
		 * Previous Rent Amount
		 * Type: double
		 */
		PreviousRentAmount?: number | null;

		/** Display Property Address */
		PropertyAddress?: string | null;

		/** Rent */
		Rent?: string | null;

		/**
		 * Rent Amount
		 * Type: double
		 */
		RentAmount?: number | null;

		/** Start Date */
		StartDate?: Date | null;

		/** Tenancy Property */
		TenancyProperty?: string | null;

		/** State of the tenancy */
		TenancyState?: string | null;

		/** Tenants */
		Tenants?: Array<string>;
	}

	/** Landlord Tenancy Model. */
	export interface LandlordTenancyModelFormProperties {

		/** Actual End Date */
		ActualEndDate: FormControl<Date | null | undefined>,

		/**
		 * Beds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Beds: FormControl<number | null | undefined>,

		/**
		 * Bond
		 * Type: double
		 */
		Bond: FormControl<number | null | undefined>,

		/** The tenancy branch ID:- */
		BranchID: FormControl<string | null | undefined>,

		/** Fixed Date */
		FixedDate: FormControl<Date | null | undefined>,

		/** User Friendly ID */
		GlobalReference: FormControl<string | null | undefined>,

		/** ID */
		ID: FormControl<string | null | undefined>,

		/** State of the tenancy */
		ManagedRent: FormControl<boolean | null | undefined>,

		/**
		 * Previous Rent Amount
		 * Type: double
		 */
		PreviousRentAmount: FormControl<number | null | undefined>,

		/** Display Property Address */
		PropertyAddress: FormControl<string | null | undefined>,

		/** Rent */
		Rent: FormControl<string | null | undefined>,

		/**
		 * Rent Amount
		 * Type: double
		 */
		RentAmount: FormControl<number | null | undefined>,

		/** Start Date */
		StartDate: FormControl<Date | null | undefined>,

		/** Tenancy Property */
		TenancyProperty: FormControl<string | null | undefined>,

		/** State of the tenancy */
		TenancyState: FormControl<string | null | undefined>,
	}
	export function CreateLandlordTenancyModelFormGroup() {
		return new FormGroup<LandlordTenancyModelFormProperties>({
			ActualEndDate: new FormControl<Date | null | undefined>(undefined),
			Beds: new FormControl<number | null | undefined>(undefined),
			Bond: new FormControl<number | null | undefined>(undefined),
			BranchID: new FormControl<string | null | undefined>(undefined),
			FixedDate: new FormControl<Date | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ManagedRent: new FormControl<boolean | null | undefined>(undefined),
			PreviousRentAmount: new FormControl<number | null | undefined>(undefined),
			PropertyAddress: new FormControl<string | null | undefined>(undefined),
			Rent: new FormControl<string | null | undefined>(undefined),
			RentAmount: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			TenancyProperty: new FormControl<string | null | undefined>(undefined),
			TenancyState: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * All branches defined for a company
		 * Get v2/customer/{shortName}/branch/branches
		 * @param {string} shortName The unique client short-name
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BranchModelResults} OK
		 */
		BranchController_GetBranches(shortName: string, offset: number, count: number): Observable<BranchModelResults> {
			return this.http.get<BranchModelResults>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/branch/branches&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * Get a specific branch given its unique Object ID (OID)
		 * Get v2/customer/{shortName}/branch/branches/{branchID}
		 * @param {string} shortName The unique client short-name
		 * @param {string} branchID The unique ID of the Branch
		 * @return {BranchModel} OK
		 */
		BranchControllerGetByShortNameAndBranchID(shortName: string, branchID: string): Observable<BranchModel> {
			return this.http.get<BranchModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/branch/branches/' + (branchID == null ? '' : encodeURIComponent(branchID)), {});
		}

		/**
		 * Get the accounting details for the landlord.
		 * Get v2/customer/{shortName}/landlord/accounting
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordAccountingModel} OK
		 */
		LandlordController_GetAccounts(shortName: string, token: string): Observable<LandlordAccountingModel> {
			return this.http.get<LandlordAccountingModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/accounting&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Download a Document
		 * Get v2/customer/{shortName}/landlord/document
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} ID The Document ID
		 * @return {Object} OK
		 */
		LandlordController_GetDocument(shortName: string, token: string, ID: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/document&token=' + (token == null ? '' : encodeURIComponent(token)) + '&ID=' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Generate a Inventory PDF for a tenancy
		 * Get v2/customer/{shortName}/landlord/inventory
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} tenancyID The Tenancy ID
		 * @return {Object} OK
		 */
		LandlordController_GetInvetoryReport(shortName: string, token: string, tenancyID: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/inventory&token=' + (token == null ? '' : encodeURIComponent(token)) + '&tenancyID=' + (tenancyID == null ? '' : encodeURIComponent(tenancyID)), {});
		}

		/**
		 * Get an invoice pdf belonging to the landlord.
		 * Get v2/customer/{shortName}/landlord/invoice
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} invoiceID The invoice ID to load.
		 * @return {Object} OK
		 */
		LandlordController_GetInvoice(shortName: string, token: string, invoiceID: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/invoice&token=' + (token == null ? '' : encodeURIComponent(token)) + '&invoiceID=' + (invoiceID == null ? '' : encodeURIComponent(invoiceID)), {});
		}

		/**
		 * Retrieve landlord's CRM ID
		 * Get v2/customer/{shortName}/landlord/landlordcrmentries
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {Array<LandlordCrmEntry>} OK
		 */
		LandlordController_GetLandlordCrmEntries(shortName: string, token: string): Observable<Array<LandlordCrmEntry>> {
			return this.http.get<Array<LandlordCrmEntry>>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/landlordcrmentries&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Get Active maintenance jobs.
		 * Get v2/customer/{shortName}/landlord/maintenance
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordMaintenanceModel} OK
		 */
		LandlordController_GetMaintenanceJobs(shortName: string, token: string): Observable<LandlordMaintenanceModel> {
			return this.http.get<LandlordMaintenanceModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/maintenance&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Generate a Profit and Loss Report
		 * Get v2/customer/{shortName}/landlord/profitloss
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordProfitLossModel} OK
		 */
		LandlordController_GetProfitLossReport(shortName: string, token: string): Observable<LandlordProfitLossModel> {
			return this.http.get<LandlordProfitLossModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/profitloss&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Rent Arrears
		 * Get v2/customer/{shortName}/landlord/rentarrears
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordRentArrearsModel} OK
		 */
		LandlordController_GetRentArrears(shortName: string, token: string): Observable<LandlordRentArrearsModel> {
			return this.http.get<LandlordRentArrearsModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/rentarrears&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Generate a Self Assessment Tax Report
		 * Get v2/customer/{shortName}/landlord/sas
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {number} yearEnd The Tax Year End.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Object} OK
		 */
		LandlordController_GetSASReport(shortName: string, token: string, yearEnd: number): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/sas&token=' + (token == null ? '' : encodeURIComponent(token)) + '&yearEnd=' + yearEnd, {});
		}

		/**
		 * Get contact details of all linked landlords.
		 * Get v2/customer/{shortName}/landlord/settings
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordSettingsModel} OK
		 */
		LandlordController_GetSettings(shortName: string, token: string): Observable<LandlordSettingsModel> {
			return this.http.get<LandlordSettingsModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/settings&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Get the summary details for the landlord.
		 * Get v2/customer/{shortName}/landlord/summary
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {LandlordSummaryModel} OK
		 */
		LandlordController_GetSummaryDetails(shortName: string, token: string): Observable<LandlordSummaryModel> {
			return this.http.get<LandlordSummaryModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/summary&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Get tenancy details.
		 * Get v2/customer/{shortName}/landlord/tenancy
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} tenancyID The Tenancy ID
		 * @return {LandlordTenancyModel} OK
		 */
		LandlordController_GetTenancy(shortName: string, token: string, tenancyID: string): Observable<LandlordTenancyModel> {
			return this.http.get<LandlordTenancyModel>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/tenancy&token=' + (token == null ? '' : encodeURIComponent(token)) + '&tenancyID=' + (tenancyID == null ? '' : encodeURIComponent(tenancyID)), {});
		}

		/**
		 * Post tenancy maintenance preferences:-
		 * Post v2/customer/{shortName}/landlord/tenancy/maintenance/preference
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} tenancyID The Tenancy ID
		 * @param {string} name Name of the maintenance preference to add
		 * @param {string} notes Notes of the maintenance preference to add
		 * @return {string} OK
		 */
		LandlordController_CreateMaintenancePreference(shortName: string, token: string, tenancyID: string, name: string, notes: string): Observable<string> {
			return this.http.post(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/tenancy/maintenance/preference&token=' + (token == null ? '' : encodeURIComponent(token)) + '&tenancyID=' + (tenancyID == null ? '' : encodeURIComponent(tenancyID)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)), null, { responseType: 'text' });
		}

		/**
		 * Generate a Tenancy Agreement Copy (PDF)
		 * Get v2/customer/{shortName}/landlord/tenancyagreement
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} tenancyID The Tenancy ID
		 * @return {Object} OK
		 */
		LandlordController_GetTenancyAgreementReport(shortName: string, token: string, tenancyID: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/landlord/tenancyagreement&token=' + (token == null ? '' : encodeURIComponent(token)) + '&tenancyID=' + (tenancyID == null ? '' : encodeURIComponent(tenancyID)), {});
		}

		/**
		 * Downloads the photo of a property given the photo ID.
		 * Get v2/customer/{shortName}/photo/download
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} photoID The unique ID of the photo on the property
		 * @param {number} width An optional parameter specifying the image width
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height An optional parameter specifying the image height
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Object} OK
		 */
		PhotoController_GetPhotoDownload(shortName: string, token: string, photoID: string, width: number | null | undefined, height: number | null | undefined): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/photo/download&token=' + (token == null ? '' : encodeURIComponent(token)) + '&photoID=' + (photoID == null ? '' : encodeURIComponent(photoID)) + '&width=' + width + '&height=' + height, {});
		}

		/**
		 * A collection showing all the photos linked to a specific block, property or room
		 * Get v2/customer/{shortName}/property/{propertyID}/photos
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} propertyID The unique ID of the Property
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {LandlordPhotoModelResults} OK
		 */
		PropertyController_GetPropertiesPhotos(shortName: string, token: string, propertyID: string, offset: number, count: number): Observable<LandlordPhotoModelResults> {
			return this.http.get<LandlordPhotoModelResults>(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/property/' + (propertyID == null ? '' : encodeURIComponent(propertyID)) + '/photos&token=' + (token == null ? '' : encodeURIComponent(token)) + '&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * Logout a customer previously logged in via the Login endpoint.
		 * Delete v2/customer/{shortName}/session
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {void} 
		 */
		SessionController_Logout(shortName: string, token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session&token=' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the currently logged on customer.
		 * Get v2/customer/{shortName}/session
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @return {string} OK
		 */
		SessionController_GetSessionInfo(shortName: string, token: string): Observable<string> {
			return this.http.get(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session&token=' + (token == null ? '' : encodeURIComponent(token)), { responseType: 'text' });
		}

		/**
		 * Login as a customer given their username and password.
		 * Post v2/customer/{shortName}/session
		 * @param {string} shortName The unique client short-name
		 * @param {string} username The user's username.
		 * @param {string} password The user's password.
		 * @return {string} OK
		 */
		SessionController_Login(shortName: string, username: string, password: string): Observable<string> {
			return this.http.post(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session&username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), null, { responseType: 'text' });
		}

		/**
		 * Send a request to the in-tray to create a landlord login.
		 * Post v2/customer/{shortName}/session/createlandlordlogin
		 * @param {string} shortName The unique client short-name
		 * @param {string} email The email address of the landlord
		 * @param {string} title The title of the landlord
		 * @param {string} forename The forename of the landlord
		 * @param {string} surname The surname of the landlord
		 * @param {string} propertyAddress Address of the property linked to the landlord
		 * @param {string} contactDetails Contact details of the landlord
		 * @param {string} branchID (Optional) The branch ID linked to the login. This will determine which in tray the request display in
		 * @return {void} 
		 */
		SessionController_CreateLandlordLogin(shortName: string, email: string, title: string, forename: string, surname: string, propertyAddress: string, contactDetails: string, branchID: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session/createlandlordlogin&email=' + (email == null ? '' : encodeURIComponent(email)) + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&forename=' + (forename == null ? '' : encodeURIComponent(forename)) + '&surname=' + (surname == null ? '' : encodeURIComponent(surname)) + '&propertyAddress=' + (propertyAddress == null ? '' : encodeURIComponent(propertyAddress)) + '&contactDetails=' + (contactDetails == null ? '' : encodeURIComponent(contactDetails)) + '&branchID=' + (branchID == null ? '' : encodeURIComponent(branchID)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the password of a customer given their existing and new password.
		 * Put v2/customer/{shortName}/session/password
		 * @param {string} shortName The unique client short-name
		 * @param {string} token The login token returned from the /session POST call
		 * @param {string} oldPassword The customer's existing password.
		 * @param {string} newPassword The customer's new password.
		 * @return {void} 
		 */
		SessionController_ChangePassword(shortName: string, token: string, oldPassword: string, newPassword: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session/password&token=' + (token == null ? '' : encodeURIComponent(token)) + '&oldPassword=' + (oldPassword == null ? '' : encodeURIComponent(oldPassword)) + '&newPassword=' + (newPassword == null ? '' : encodeURIComponent(newPassword)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset the customer's password. An email will be sent out to reset.
		 * Post v2/customer/{shortName}/session/resetpassword
		 * @param {string} shortName The unique client short-name
		 * @param {string} email The login Email Address.
		 * @return {void} 
		 */
		SessionController_ResetPassword(shortName: string, email: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/customer/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/session/resetpassword&email=' + (email == null ? '' : encodeURIComponent(email)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

