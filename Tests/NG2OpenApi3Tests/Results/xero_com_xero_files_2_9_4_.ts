import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Association {

		/** The unique identifier of the file */
		FileId?: string | null;

		/** The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API. */
		ObjectGroup?: AssociationObjectGroup | null;

		/** The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID) */
		ObjectId?: string | null;

		/** The Object Type */
		ObjectType?: AssociationObjectType | null;
	}
	export interface AssociationFormProperties {

		/** The unique identifier of the file */
		FileId: FormControl<string | null | undefined>,

		/** The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API. */
		ObjectGroup: FormControl<AssociationObjectGroup | null | undefined>,

		/** The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID) */
		ObjectId: FormControl<string | null | undefined>,

		/** The Object Type */
		ObjectType: FormControl<AssociationObjectType | null | undefined>,
	}
	export function CreateAssociationFormGroup() {
		return new FormGroup<AssociationFormProperties>({
			FileId: new FormControl<string | null | undefined>(undefined),
			ObjectGroup: new FormControl<AssociationObjectGroup | null | undefined>(undefined),
			ObjectId: new FormControl<string | null | undefined>(undefined),
			ObjectType: new FormControl<AssociationObjectType | null | undefined>(undefined),
		});

	}

	export enum AssociationObjectGroup { Account = 'Account', BankTransaction = 'BankTransaction', Contact = 'Contact', CreditNote = 'CreditNote', Invoice = 'Invoice', Item = 'Item', ManualJournal = 'ManualJournal', Overpayment = 'Overpayment', Payment = 'Payment', Prepayment = 'Prepayment', Receipt = 'Receipt' }

	export enum AssociationObjectType { Unknown = 'Unknown', Accpay = 'Accpay', AccPayCredit = 'AccPayCredit', AccPayPayment = 'AccPayPayment', AccRec = 'AccRec', AccRecCredit = 'AccRecCredit', AccRecPayment = 'AccRecPayment', Adjustment = 'Adjustment', ApCreditPayment = 'ApCreditPayment', ApOverPayment = 'ApOverPayment', ApOverPaymentPayment = 'ApOverPaymentPayment', ApOverPaymentSourcePayment = 'ApOverPaymentSourcePayment', ApPrepayment = 'ApPrepayment', ApPrepaymentPayment = 'ApPrepaymentPayment', ApPrepaymentSourcePayment = 'ApPrepaymentSourcePayment', ArCreditPayment = 'ArCreditPayment', ArOverPayment = 'ArOverPayment', ArOverpaymentPayment = 'ArOverpaymentPayment', ArOverpaymentSourcePayment = 'ArOverpaymentSourcePayment', ArPrepayment = 'ArPrepayment', ArPrepaymentPayment = 'ArPrepaymentPayment', ArPrepaymentSourcePayment = 'ArPrepaymentSourcePayment', CashPaid = 'CashPaid', CashRec = 'CashRec', ExpPayment = 'ExpPayment', ManJournal = 'ManJournal', PurchaseOrder = 'PurchaseOrder', Receipt = 'Receipt', Transfer = 'Transfer', Account = 'Account', Contact = 'Contact', Business = 'Business', Employee = 'Employee', Person = 'Person', User = 'User', Org = 'Org', FixedAsset = 'FixedAsset', PayRun = 'PayRun', PriceListItem = 'PriceListItem', Bank = 'Bank', Current = 'Current', Equity = 'Equity', Expense = 'Expense', Fixed = 'Fixed', Liability = 'Liability', Prepayment = 'Prepayment', Revenue = 'Revenue', Sales = 'Sales', Overheads = 'Overheads', Depreciatn = 'Depreciatn', OtherIncome = 'OtherIncome', DirectCosts = 'DirectCosts', Currliab = 'Currliab', Termliab = 'Termliab', NonCurrent = 'NonCurrent' }

	export interface FileObject {

		/** Created date in UTC */
		CreatedDateUtc?: string | null;

		/** Folder relation object's UUID */
		FolderId?: string | null;

		/** File object's UUID */
		Id?: string | null;

		/** MimeType of the file (image/png, image/jpeg, application/pdf, etc..) */
		MimeType?: string | null;

		/** File Name */
		Name?: string | null;

		/** Numeric value in bytes */
		Size?: number | null;

		/** Updated date in UTC */
		UpdatedDateUtc?: string | null;
		User?: User;
	}
	export interface FileObjectFormProperties {

		/** Created date in UTC */
		CreatedDateUtc: FormControl<string | null | undefined>,

		/** Folder relation object's UUID */
		FolderId: FormControl<string | null | undefined>,

		/** File object's UUID */
		Id: FormControl<string | null | undefined>,

		/** MimeType of the file (image/png, image/jpeg, application/pdf, etc..) */
		MimeType: FormControl<string | null | undefined>,

		/** File Name */
		Name: FormControl<string | null | undefined>,

		/** Numeric value in bytes */
		Size: FormControl<number | null | undefined>,

		/** Updated date in UTC */
		UpdatedDateUtc: FormControl<string | null | undefined>,
	}
	export function CreateFileObjectFormGroup() {
		return new FormGroup<FileObjectFormProperties>({
			CreatedDateUtc: new FormControl<string | null | undefined>(undefined),
			FolderId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MimeType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {

		/** First name of user */
		FirstName?: string | null;

		/** Last name of user */
		FullName?: string | null;

		/**
		 * Xero identifier
		 * Required
		 */
		Id: string;

		/** Last name of user */
		LastName?: string | null;

		/** Key is Name, but returns Email address of user who created the file */
		Name?: string | null;
	}
	export interface UserFormProperties {

		/** First name of user */
		FirstName: FormControl<string | null | undefined>,

		/** Last name of user */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Xero identifier
		 * Required
		 */
		Id: FormControl<string | null | undefined>,

		/** Last name of user */
		LastName: FormControl<string | null | undefined>,

		/** Key is Name, but returns Email address of user who created the file */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Files {
		Items?: Array<FileObject>;
		Page?: number | null;
		PerPage?: number | null;
		TotalCount?: number | null;
	}
	export interface FilesFormProperties {
		Page: FormControl<number | null | undefined>,
		PerPage: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateFilesFormGroup() {
		return new FormGroup<FilesFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			PerPage: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Folder {

		/** The email address used to email files to the inbox. Only the inbox will have this element. */
		Email?: string | null;

		/** The number of files in the folder */
		FileCount?: number | null;

		/** Xero unique identifier for a folder  Files */
		Id?: string | null;

		/** to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted. */
		IsInbox?: boolean | null;

		/** The name of the folder */
		Name?: string | null;
	}
	export interface FolderFormProperties {

		/** The email address used to email files to the inbox. Only the inbox will have this element. */
		Email: FormControl<string | null | undefined>,

		/** The number of files in the folder */
		FileCount: FormControl<number | null | undefined>,

		/** Xero unique identifier for a folder  Files */
		Id: FormControl<string | null | undefined>,

		/** to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted. */
		IsInbox: FormControl<boolean | null | undefined>,

		/** The name of the folder */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
			FileCount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsInbox: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Folders {
		Folders1?: Array<Folder>;
	}
	export interface FoldersFormProperties {
	}
	export function CreateFoldersFormGroup() {
		return new FormGroup<FoldersFormProperties>({
		});

	}


	/** The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API. */
	export enum ObjectGroup { Account = 'Account', BankTransaction = 'BankTransaction', Contact = 'Contact', CreditNote = 'CreditNote', Invoice = 'Invoice', Item = 'Item', ManualJournal = 'ManualJournal', Overpayment = 'Overpayment', Payment = 'Payment', Prepayment = 'Prepayment', Receipt = 'Receipt' }


	/** The Object Type */
	export enum ObjectType { Unknown = 'Unknown', Accpay = 'Accpay', AccPayCredit = 'AccPayCredit', AccPayPayment = 'AccPayPayment', AccRec = 'AccRec', AccRecCredit = 'AccRecCredit', AccRecPayment = 'AccRecPayment', Adjustment = 'Adjustment', ApCreditPayment = 'ApCreditPayment', ApOverPayment = 'ApOverPayment', ApOverPaymentPayment = 'ApOverPaymentPayment', ApOverPaymentSourcePayment = 'ApOverPaymentSourcePayment', ApPrepayment = 'ApPrepayment', ApPrepaymentPayment = 'ApPrepaymentPayment', ApPrepaymentSourcePayment = 'ApPrepaymentSourcePayment', ArCreditPayment = 'ArCreditPayment', ArOverPayment = 'ArOverPayment', ArOverpaymentPayment = 'ArOverpaymentPayment', ArOverpaymentSourcePayment = 'ArOverpaymentSourcePayment', ArPrepayment = 'ArPrepayment', ArPrepaymentPayment = 'ArPrepaymentPayment', ArPrepaymentSourcePayment = 'ArPrepaymentSourcePayment', CashPaid = 'CashPaid', CashRec = 'CashRec', ExpPayment = 'ExpPayment', ManJournal = 'ManJournal', PurchaseOrder = 'PurchaseOrder', Receipt = 'Receipt', Transfer = 'Transfer', Account = 'Account', Contact = 'Contact', Business = 'Business', Employee = 'Employee', Person = 'Person', User = 'User', Org = 'Org', FixedAsset = 'FixedAsset', PayRun = 'PayRun', PriceListItem = 'PriceListItem', Bank = 'Bank', Current = 'Current', Equity = 'Equity', Expense = 'Expense', Fixed = 'Fixed', Liability = 'Liability', Prepayment = 'Prepayment', Revenue = 'Revenue', Sales = 'Sales', Overheads = 'Overheads', Depreciatn = 'Depreciatn', OtherIncome = 'OtherIncome', DirectCosts = 'DirectCosts', Currliab = 'Currliab', Termliab = 'Termliab', NonCurrent = 'NonCurrent' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves an association object using a unique object ID
		 * By passing in the appropriate options,
		 * Get Associations/{ObjectId}
		 * @param {string} ObjectId Object id for single object
		 * @return {Array<Association>} search results matching criteria
		 */
		GetAssociationsByObject(ObjectId: string): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'Associations/' + (ObjectId == null ? '' : encodeURIComponent(ObjectId)), {});
		}

		/**
		 * Retrieves files
		 * Get Files
		 * @param {number} pagesize pass an optional page size value
		 * @param {number} page number of records to skip for pagination
		 * @param {GetFilesSort} sort values to sort by
		 * @return {Files} search results matching criteria
		 */
		GetFiles(pagesize: number | null | undefined, page: number | null | undefined, sort: GetFilesSort | null | undefined): Observable<Files> {
			return this.http.get<Files>(this.baseUri + 'Files?pagesize=' + pagesize + '&page=' + page + '&sort=' + sort, {});
		}

		/**
		 * Deletes a specific file
		 * Delete a specific file
		 * Delete Files/{FileId}
		 * @param {string} FileId File id for single object
		 * @return {void} 
		 */
		DeleteFile(FileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a file by a unique file ID
		 * Get Files/{FileId}
		 * @param {string} FileId File id for single object
		 * @return {FileObject} search results matching criteria
		 */
		GetFile(FileId: string): Observable<FileObject> {
			return this.http.get<FileObject>(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)), {});
		}

		/**
		 * Update a file
		 * Updates file properties of a single file
		 * Put Files/{FileId}
		 * @param {string} FileId File id for single object
		 * @return {FileObject} A successful request
		 */
		UpdateFile(FileId: string, requestBody: FileObject): Observable<FileObject> {
			return this.http.put<FileObject>(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specific file associations
		 * By passing in the appropriate options,
		 * Get Files/{FileId}/Associations
		 * @param {string} FileId File id for single object
		 * @return {Array<Association>} search results matching criteria
		 */
		GetFileAssociations(FileId: string): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)) + '/Associations', {});
		}

		/**
		 * Creates a new file association
		 * By passing in the appropriate options, you can create a new folder
		 * Post Files/{FileId}/Associations
		 * @param {string} FileId File id for single object
		 * @return {void} 
		 */
		CreateFileAssociation(FileId: string, requestBody: Association): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)) + '/Associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing file association
		 * By passing in the appropriate options, you can create a new folder
		 * Delete Files/{FileId}/Associations/{ObjectId}
		 * @param {string} FileId File id for single object
		 * @param {string} ObjectId Object id for single object
		 * @return {void} 
		 */
		DeleteFileAssociation(FileId: string, ObjectId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)) + '/Associations/' + (ObjectId == null ? '' : encodeURIComponent(ObjectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content of a specific file
		 * By passing in the appropriate options, retrieve data for specific file
		 * Get Files/{FileId}/Content
		 * @param {string} FileId File id for single object
		 * @return {void} returns the byte array of the specific file based on id
		 */
		GetFileContent(FileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Files/' + (FileId == null ? '' : encodeURIComponent(FileId)) + '/Content', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves folders
		 * By passing in the appropriate options, you can search for available folders
		 * Get Folders
		 * @param {GetFilesSort} sort values to sort by
		 * @return {Array<Folder>} search results matching criteria
		 */
		GetFolders(sort: GetFilesSort | null | undefined): Observable<Array<Folder>> {
			return this.http.get<Array<Folder>>(this.baseUri + 'Folders?sort=' + sort, {});
		}

		/**
		 * Creates a new folder
		 * By passing in the appropriate properties, you can create a new folder
		 * Post Folders
		 * @return {Folder} search results matching criteria
		 */
		CreateFolder(requestBody: Folder): Observable<Folder> {
			return this.http.post<Folder>(this.baseUri + 'Folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a folder
		 * By passing in the appropriate ID, you can delete a folder
		 * Delete Folders/{FolderId}
		 * @param {string} FolderId Folder id for single object
		 * @return {void} 
		 */
		DeleteFolder(FolderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves specific folder by using a unique folder ID
		 * By passing in the appropriate ID, you can search for specific folder
		 * Get Folders/{FolderId}
		 * @param {string} FolderId Folder id for single object
		 * @return {Folder} search results matching criteria
		 */
		GetFolder(FolderId: string): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'Folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), {});
		}

		/**
		 * Updates an existing folder
		 * By passing in the appropriate ID and properties, you can update a folder
		 * Put Folders/{FolderId}
		 * @param {string} FolderId Folder id for single object
		 * @return {Folder} return the updated object
		 */
		UpdateFolder(FolderId: string, requestBody: Folder): Observable<Folder> {
			return this.http.put<Folder>(this.baseUri + 'Folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves inbox folder
		 * Search for the user inbox
		 * Get Inbox
		 * @return {Folder} search results matching criteria
		 */
		GetInbox(): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'Inbox', {});
		}
	}

	export enum GetFilesSort { Name = 'Name', Size = 'Size', CreatedDateUTC = 'CreatedDateUTC' }

}

