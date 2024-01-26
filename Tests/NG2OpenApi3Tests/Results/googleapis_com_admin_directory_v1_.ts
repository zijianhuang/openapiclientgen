import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** JSON template for Alias object in Directory API. */
	export interface Alias {
		alias?: string | null;
		etag?: string | null;
		id?: string | null;
		kind?: string | null;
		primaryEmail?: string | null;
	}

	/** JSON template for Alias object in Directory API. */
	export interface AliasFormProperties {
		alias: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		primaryEmail: FormControl<string | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON response template to list aliases in Directory API. */
	export interface Aliases {
		aliases?: Array<string>;
		etag?: string | null;
		kind?: string | null;
	}

	/** JSON response template to list aliases in Directory API. */
	export interface AliasesFormProperties {
		etag: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAliasesFormGroup() {
		return new FormGroup<AliasesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp). */
	export interface Asp {

		/** The unique ID of the ASP. */
		codeId?: number | null;

		/** The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
		creationTime?: string | null;

		/** ETag of the ASP. */
		etag?: string | null;

		/** The type of the API resource. This is always `admin#directory#asp`. */
		kind?: string | null;

		/** The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
		lastTimeUsed?: string | null;

		/** The name of the application that the user, represented by their `userId`, entered when the ASP was created. */
		name?: string | null;

		/** The unique ID of the user who issued the ASP. */
		userKey?: string | null;
	}

	/** An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp). */
	export interface AspFormProperties {

		/** The unique ID of the ASP. */
		codeId: FormControl<number | null | undefined>,

		/** The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
		creationTime: FormControl<string | null | undefined>,

		/** ETag of the ASP. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#asp`. */
		kind: FormControl<string | null | undefined>,

		/** The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
		lastTimeUsed: FormControl<string | null | undefined>,

		/** The name of the application that the user, represented by their `userId`, entered when the ASP was created. */
		name: FormControl<string | null | undefined>,

		/** The unique ID of the user who issued the ASP. */
		userKey: FormControl<string | null | undefined>,
	}
	export function CreateAspFormGroup() {
		return new FormGroup<AspFormProperties>({
			codeId: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastTimeUsed: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Asps {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of ASP resources. */
		items?: Array<Asp>;

		/** The type of the API resource. This is always `admin#directory#aspList`. */
		kind?: string | null;
	}
	export interface AspsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#aspList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAspsFormGroup() {
		return new FormGroup<AspsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."} */
	export interface AuxiliaryMessage {

		/** Human readable message in English. Example: "Given printer is invalid or no longer supported." */
		auxiliaryMessage?: string | null;

		/** Field that this message concerns. */
		fieldMask?: string | null;

		/** Message severity */
		severity?: AuxiliaryMessageSeverity | null;
	}

	/** Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."} */
	export interface AuxiliaryMessageFormProperties {

		/** Human readable message in English. Example: "Given printer is invalid or no longer supported." */
		auxiliaryMessage: FormControl<string | null | undefined>,

		/** Field that this message concerns. */
		fieldMask: FormControl<string | null | undefined>,

		/** Message severity */
		severity: FormControl<AuxiliaryMessageSeverity | null | undefined>,
	}
	export function CreateAuxiliaryMessageFormGroup() {
		return new FormGroup<AuxiliaryMessageFormProperties>({
			auxiliaryMessage: new FormControl<string | null | undefined>(undefined),
			fieldMask: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AuxiliaryMessageSeverity | null | undefined>(undefined),
		});

	}

	export enum AuxiliaryMessageSeverity { SEVERITY_UNSPECIFIED = 0, SEVERITY_INFO = 1, SEVERITY_WARNING = 2, SEVERITY_ERROR = 3 }


	/** A request for changing the status of a batch of ChromeOS devices. */
	export interface BatchChangeChromeOsDeviceStatusRequest {

		/** Required. The action to take on the ChromeOS device in order to change its status. */
		changeChromeOsDeviceStatusAction?: BatchChangeChromeOsDeviceStatusRequestChangeChromeOsDeviceStatusAction | null;

		/** Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field. */
		deprovisionReason?: BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null;

		/** Required. List of the IDs of the ChromeOS devices to change. Maximum 50. */
		deviceIds?: Array<string>;
	}

	/** A request for changing the status of a batch of ChromeOS devices. */
	export interface BatchChangeChromeOsDeviceStatusRequestFormProperties {

		/** Required. The action to take on the ChromeOS device in order to change its status. */
		changeChromeOsDeviceStatusAction: FormControl<BatchChangeChromeOsDeviceStatusRequestChangeChromeOsDeviceStatusAction | null | undefined>,

		/** Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field. */
		deprovisionReason: FormControl<BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null | undefined>,
	}
	export function CreateBatchChangeChromeOsDeviceStatusRequestFormGroup() {
		return new FormGroup<BatchChangeChromeOsDeviceStatusRequestFormProperties>({
			changeChromeOsDeviceStatusAction: new FormControl<BatchChangeChromeOsDeviceStatusRequestChangeChromeOsDeviceStatusAction | null | undefined>(undefined),
			deprovisionReason: new FormControl<BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null | undefined>(undefined),
		});

	}

	export enum BatchChangeChromeOsDeviceStatusRequestChangeChromeOsDeviceStatusAction { CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED = 0, CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION = 1, CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE = 2, CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE = 3 }

	export enum BatchChangeChromeOsDeviceStatusRequestDeprovisionReason { DEPROVISION_REASON_UNSPECIFIED = 0, DEPROVISION_REASON_SAME_MODEL_REPLACEMENT = 1, DEPROVISION_REASON_UPGRADE = 2, DEPROVISION_REASON_DOMAIN_MOVE = 3, DEPROVISION_REASON_SERVICE_EXPIRATION = 4, DEPROVISION_REASON_OTHER = 5, DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT = 6, DEPROVISION_REASON_RETIRING_DEVICE = 7, DEPROVISION_REASON_UPGRADE_TRANSFER = 8, DEPROVISION_REASON_NOT_REQUIRED = 9, DEPROVISION_REASON_REPAIR_CENTER = 10 }


	/** The response of changing the status of a batch of ChromeOS devices. */
	export interface BatchChangeChromeOsDeviceStatusResponse {

		/** The results for each of the ChromeOS devices provided in the request. */
		changeChromeOsDeviceStatusResults?: Array<ChangeChromeOsDeviceStatusResult>;
	}

	/** The response of changing the status of a batch of ChromeOS devices. */
	export interface BatchChangeChromeOsDeviceStatusResponseFormProperties {
	}
	export function CreateBatchChangeChromeOsDeviceStatusResponseFormGroup() {
		return new FormGroup<BatchChangeChromeOsDeviceStatusResponseFormProperties>({
		});

	}


	/** The result of a single ChromeOS device for a Change state operation. */
	export interface ChangeChromeOsDeviceStatusResult {

		/** The unique ID of the ChromeOS device. */
		deviceId?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Response for a successful ChromeOS device status change. */
		response?: ChangeChromeOsDeviceStatusSucceeded;
	}

	/** The result of a single ChromeOS device for a Change state operation. */
	export interface ChangeChromeOsDeviceStatusResultFormProperties {

		/** The unique ID of the ChromeOS device. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateChangeChromeOsDeviceStatusResultFormGroup() {
		return new FormGroup<ChangeChromeOsDeviceStatusResultFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for a successful ChromeOS device status change. */
	export interface ChangeChromeOsDeviceStatusSucceeded {
	}

	/** Response for a successful ChromeOS device status change. */
	export interface ChangeChromeOsDeviceStatusSucceededFormProperties {
	}
	export function CreateChangeChromeOsDeviceStatusSucceededFormGroup() {
		return new FormGroup<ChangeChromeOsDeviceStatusSucceededFormProperties>({
		});

	}


	/** Request to add multiple new print servers in a batch. */
	export interface BatchCreatePrintServersRequest {

		/** Required. A list of `PrintServer` resources to be created (max `50` per batch). */
		requests?: Array<CreatePrintServerRequest>;
	}

	/** Request to add multiple new print servers in a batch. */
	export interface BatchCreatePrintServersRequestFormProperties {
	}
	export function CreateBatchCreatePrintServersRequestFormGroup() {
		return new FormGroup<BatchCreatePrintServersRequestFormProperties>({
		});

	}


	/** Request for adding a new print server. */
	export interface CreatePrintServerRequest {

		/** Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
		parent?: string | null;

		/** Configuration for a print server. */
		printServer?: PrintServer;
	}

	/** Request for adding a new print server. */
	export interface CreatePrintServerRequestFormProperties {

		/** Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrintServerRequestFormGroup() {
		return new FormGroup<CreatePrintServerRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a print server. */
	export interface PrintServer {

		/** Output only. Time when the print server was created. */
		createTime?: string | null;

		/** Editable. Description of the print server (as shown in the Admin console). */
		description?: string | null;

		/** Editable. Display name of the print server (as shown in the Admin console). */
		displayName?: string | null;

		/** Immutable. ID of the print server. Leave empty when creating. */
		id?: string | null;

		/** Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}` */
		name?: string | null;

		/** ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits). */
		orgUnitId?: string | null;

		/** Editable. Print server URI. */
		uri?: string | null;
	}

	/** Configuration for a print server. */
	export interface PrintServerFormProperties {

		/** Output only. Time when the print server was created. */
		createTime: FormControl<string | null | undefined>,

		/** Editable. Description of the print server (as shown in the Admin console). */
		description: FormControl<string | null | undefined>,

		/** Editable. Display name of the print server (as shown in the Admin console). */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. ID of the print server. Leave empty when creating. */
		id: FormControl<string | null | undefined>,

		/** Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}` */
		name: FormControl<string | null | undefined>,

		/** ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits). */
		orgUnitId: FormControl<string | null | undefined>,

		/** Editable. Print server URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePrintServerFormGroup() {
		return new FormGroup<PrintServerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreatePrintServersResponse {

		/** A list of create failures. `PrintServer` IDs are not populated, as print servers were not created. */
		failures?: Array<PrintServerFailureInfo>;

		/** A list of successfully created print servers with their IDs populated. */
		printServers?: Array<PrintServer>;
	}
	export interface BatchCreatePrintServersResponseFormProperties {
	}
	export function CreateBatchCreatePrintServersResponseFormGroup() {
		return new FormGroup<BatchCreatePrintServersResponseFormProperties>({
		});

	}


	/** Info about failures */
	export interface PrintServerFailureInfo {

		/** Canonical code for why the update failed to apply. */
		errorCode?: PrintServerFailureInfoErrorCode | null;

		/** Failure reason message. */
		errorMessage?: string | null;

		/** Configuration for a print server. */
		printServer?: PrintServer;

		/** ID of a failed print server. */
		printServerId?: string | null;
	}

	/** Info about failures */
	export interface PrintServerFailureInfoFormProperties {

		/** Canonical code for why the update failed to apply. */
		errorCode: FormControl<PrintServerFailureInfoErrorCode | null | undefined>,

		/** Failure reason message. */
		errorMessage: FormControl<string | null | undefined>,

		/** ID of a failed print server. */
		printServerId: FormControl<string | null | undefined>,
	}
	export function CreatePrintServerFailureInfoFormGroup() {
		return new FormGroup<PrintServerFailureInfoFormProperties>({
			errorCode: new FormControl<PrintServerFailureInfoErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			printServerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrintServerFailureInfoErrorCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


	/** Request for adding new printers in batch. */
	export interface BatchCreatePrintersRequest {

		/** A list of Printers to be created. Max 50 at a time. */
		requests?: Array<CreatePrinterRequest>;
	}

	/** Request for adding new printers in batch. */
	export interface BatchCreatePrintersRequestFormProperties {
	}
	export function CreateBatchCreatePrintersRequestFormGroup() {
		return new FormGroup<BatchCreatePrintersRequestFormProperties>({
		});

	}


	/** Request for adding a new printer. */
	export interface CreatePrinterRequest {

		/** Required. The name of the customer. Format: customers/{customer_id} */
		parent?: string | null;

		/** Printer configuration. */
		printer?: Printer;
	}

	/** Request for adding a new printer. */
	export interface CreatePrinterRequestFormProperties {

		/** Required. The name of the customer. Format: customers/{customer_id} */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrinterRequestFormGroup() {
		return new FormGroup<CreatePrinterRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Printer configuration. */
	export interface Printer {

		/** Output only. Auxiliary messages about issues with the printer configuration if any. */
		auxiliaryMessages?: Array<AuxiliaryMessage>;

		/** Output only. Time when printer was created. */
		createTime?: string | null;

		/** Editable. Description of printer. */
		description?: string | null;

		/** Editable. Name of printer. */
		displayName?: string | null;

		/** Id of the printer. (During printer creation leave empty) */
		id?: string | null;

		/** Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response. */
		makeAndModel?: string | null;

		/** The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) */
		name?: string | null;

		/** Organization Unit that owns this printer (Only can be set during Printer creation) */
		orgUnitId?: string | null;

		/** Editable. Printer URI. */
		uri?: string | null;

		/** Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored */
		useDriverlessConfig?: boolean | null;
	}

	/** Printer configuration. */
	export interface PrinterFormProperties {

		/** Output only. Time when printer was created. */
		createTime: FormControl<string | null | undefined>,

		/** Editable. Description of printer. */
		description: FormControl<string | null | undefined>,

		/** Editable. Name of printer. */
		displayName: FormControl<string | null | undefined>,

		/** Id of the printer. (During printer creation leave empty) */
		id: FormControl<string | null | undefined>,

		/** Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response. */
		makeAndModel: FormControl<string | null | undefined>,

		/** The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) */
		name: FormControl<string | null | undefined>,

		/** Organization Unit that owns this printer (Only can be set during Printer creation) */
		orgUnitId: FormControl<string | null | undefined>,

		/** Editable. Printer URI. */
		uri: FormControl<string | null | undefined>,

		/** Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored */
		useDriverlessConfig: FormControl<boolean | null | undefined>,
	}
	export function CreatePrinterFormGroup() {
		return new FormGroup<PrinterFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			makeAndModel: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			useDriverlessConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for adding new printers in batch. */
	export interface BatchCreatePrintersResponse {

		/** A list of create failures. Printer IDs are not populated, as printer were not created. */
		failures?: Array<FailureInfo>;

		/** A list of successfully created printers with their IDs populated. */
		printers?: Array<Printer>;
	}

	/** Response for adding new printers in batch. */
	export interface BatchCreatePrintersResponseFormProperties {
	}
	export function CreateBatchCreatePrintersResponseFormGroup() {
		return new FormGroup<BatchCreatePrintersResponseFormProperties>({
		});

	}


	/** Info about failures */
	export interface FailureInfo {

		/** Canonical code for why the update failed to apply. */
		errorCode?: PrintServerFailureInfoErrorCode | null;

		/** Failure reason message. */
		errorMessage?: string | null;

		/** Printer configuration. */
		printer?: Printer;

		/** Id of a failed printer. */
		printerId?: string | null;
	}

	/** Info about failures */
	export interface FailureInfoFormProperties {

		/** Canonical code for why the update failed to apply. */
		errorCode: FormControl<PrintServerFailureInfoErrorCode | null | undefined>,

		/** Failure reason message. */
		errorMessage: FormControl<string | null | undefined>,

		/** Id of a failed printer. */
		printerId: FormControl<string | null | undefined>,
	}
	export function CreateFailureInfoFormGroup() {
		return new FormGroup<FailureInfoFormProperties>({
			errorCode: new FormControl<PrintServerFailureInfoErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			printerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete multiple existing print servers in a batch. */
	export interface BatchDeletePrintServersRequest {

		/** A list of print server IDs that should be deleted (max `100` per batch). */
		printServerIds?: Array<string>;
	}

	/** Request to delete multiple existing print servers in a batch. */
	export interface BatchDeletePrintServersRequestFormProperties {
	}
	export function CreateBatchDeletePrintServersRequestFormGroup() {
		return new FormGroup<BatchDeletePrintServersRequestFormProperties>({
		});

	}

	export interface BatchDeletePrintServersResponse {

		/** A list of update failures. */
		failedPrintServers?: Array<PrintServerFailureInfo>;

		/** A list of print server IDs that were successfully deleted. */
		printServerIds?: Array<string>;
	}
	export interface BatchDeletePrintServersResponseFormProperties {
	}
	export function CreateBatchDeletePrintServersResponseFormGroup() {
		return new FormGroup<BatchDeletePrintServersResponseFormProperties>({
		});

	}


	/** Request for deleting existing printers in batch. */
	export interface BatchDeletePrintersRequest {

		/** A list of Printer.id that should be deleted. Max 100 at a time. */
		printerIds?: Array<string>;
	}

	/** Request for deleting existing printers in batch. */
	export interface BatchDeletePrintersRequestFormProperties {
	}
	export function CreateBatchDeletePrintersRequestFormGroup() {
		return new FormGroup<BatchDeletePrintersRequestFormProperties>({
		});

	}


	/** Response for deleting existing printers in batch. */
	export interface BatchDeletePrintersResponse {

		/** A list of update failures. */
		failedPrinters?: Array<FailureInfo>;

		/** A list of Printer.id that were successfully deleted. */
		printerIds?: Array<string>;
	}

	/** Response for deleting existing printers in batch. */
	export interface BatchDeletePrintersResponseFormProperties {
	}
	export function CreateBatchDeletePrintersResponseFormGroup() {
		return new FormGroup<BatchDeletePrintersResponseFormProperties>({
		});

	}


	/** Public API: Resources.buildings */
	export interface Building {

		/** Public API: Resources.buildings */
		address?: BuildingAddress;

		/** Unique identifier for the building. The maximum length is 100 characters. */
		buildingId?: string | null;

		/** The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters. */
		buildingName?: string | null;

		/** Public API: Resources.buildings */
		coordinates?: BuildingCoordinates;

		/** A brief description of the building. For example, "Chelsea Market". */
		description?: string | null;

		/** ETag of the resource. */
		etags?: string | null;

		/** The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry. */
		floorNames?: Array<string>;

		/** Kind of resource this is. */
		kind?: string | null;
	}

	/** Public API: Resources.buildings */
	export interface BuildingFormProperties {

		/** Unique identifier for the building. The maximum length is 100 characters. */
		buildingId: FormControl<string | null | undefined>,

		/** The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters. */
		buildingName: FormControl<string | null | undefined>,

		/** A brief description of the building. For example, "Chelsea Market". */
		description: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etags: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBuildingFormGroup() {
		return new FormGroup<BuildingFormProperties>({
			buildingId: new FormControl<string | null | undefined>(undefined),
			buildingName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etags: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.buildings */
	export interface BuildingAddress {

		/** Unstructured address lines describing the lower levels of an address. */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines. */
		locality?: string | null;

		/** Optional. Postal code of the address. */
		postalCode?: string | null;

		/** Required. CLDR region code of the country/region of the address. */
		regionCode?: string | null;

		/** Optional. Sublocality of the address. */
		sublocality?: string | null;
	}

	/** Public API: Resources.buildings */
	export interface BuildingAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. */
		regionCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreateBuildingAddressFormGroup() {
		return new FormGroup<BuildingAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.buildings */
	export interface BuildingCoordinates {

		/** Latitude in decimal degrees. */
		latitude?: number | null;

		/** Longitude in decimal degrees. */
		longitude?: number | null;
	}

	/** Public API: Resources.buildings */
	export interface BuildingCoordinatesFormProperties {

		/** Latitude in decimal degrees. */
		latitude: FormControl<number | null | undefined>,

		/** Longitude in decimal degrees. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateBuildingCoordinatesFormGroup() {
		return new FormGroup<BuildingCoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.buildings */
	export interface Buildings {

		/** The Buildings in this page of results. */
		buildings?: Array<Building>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** Public API: Resources.buildings */
	export interface BuildingsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBuildingsFormGroup() {
		return new FormGroup<BuildingsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.calendars */
	export interface CalendarResource {

		/** Unique ID for the building a resource is located in. */
		buildingId?: string | null;

		/** Capacity of a resource, number of seats in a room. */
		capacity?: number | null;

		/** ETag of the resource. */
		etags?: string | null;

		/** Instances of features for the calendar resource. */
		featureInstances?: any;

		/** Name of the floor a resource is located on. */
		floorName?: string | null;

		/** Name of the section within a floor a resource is located in. */
		floorSection?: string | null;

		/** The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)". */
		generatedResourceName?: string | null;

		/** The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`. */
		kind?: string | null;

		/** The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN. */
		resourceCategory?: string | null;

		/** Description of the resource, visible only to admins. */
		resourceDescription?: string | null;

		/** The read-only email for the calendar resource. Generated as part of creating a new calendar resource. */
		resourceEmail?: string | null;

		/** The unique ID for the calendar resource. */
		resourceId?: string | null;

		/** The name of the calendar resource. For example, "Training Room 1A". */
		resourceName?: string | null;

		/** The type of the calendar resource, intended for non-room resources. */
		resourceType?: string | null;

		/** Description of the resource, visible to users and admins. */
		userVisibleDescription?: string | null;
	}

	/** Public API: Resources.calendars */
	export interface CalendarResourceFormProperties {

		/** Unique ID for the building a resource is located in. */
		buildingId: FormControl<string | null | undefined>,

		/** Capacity of a resource, number of seats in a room. */
		capacity: FormControl<number | null | undefined>,

		/** ETag of the resource. */
		etags: FormControl<string | null | undefined>,

		/** Instances of features for the calendar resource. */
		featureInstances: FormControl<any | null | undefined>,

		/** Name of the floor a resource is located on. */
		floorName: FormControl<string | null | undefined>,

		/** Name of the section within a floor a resource is located in. */
		floorSection: FormControl<string | null | undefined>,

		/** The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)". */
		generatedResourceName: FormControl<string | null | undefined>,

		/** The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`. */
		kind: FormControl<string | null | undefined>,

		/** The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN. */
		resourceCategory: FormControl<string | null | undefined>,

		/** Description of the resource, visible only to admins. */
		resourceDescription: FormControl<string | null | undefined>,

		/** The read-only email for the calendar resource. Generated as part of creating a new calendar resource. */
		resourceEmail: FormControl<string | null | undefined>,

		/** The unique ID for the calendar resource. */
		resourceId: FormControl<string | null | undefined>,

		/** The name of the calendar resource. For example, "Training Room 1A". */
		resourceName: FormControl<string | null | undefined>,

		/** The type of the calendar resource, intended for non-room resources. */
		resourceType: FormControl<string | null | undefined>,

		/** Description of the resource, visible to users and admins. */
		userVisibleDescription: FormControl<string | null | undefined>,
	}
	export function CreateCalendarResourceFormGroup() {
		return new FormGroup<CalendarResourceFormProperties>({
			buildingId: new FormControl<string | null | undefined>(undefined),
			capacity: new FormControl<number | null | undefined>(undefined),
			etags: new FormControl<string | null | undefined>(undefined),
			featureInstances: new FormControl<any | null | undefined>(undefined),
			floorName: new FormControl<string | null | undefined>(undefined),
			floorSection: new FormControl<string | null | undefined>(undefined),
			generatedResourceName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			resourceCategory: new FormControl<string | null | undefined>(undefined),
			resourceDescription: new FormControl<string | null | undefined>(undefined),
			resourceEmail: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			userVisibleDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.calendars */
	export interface CalendarResources {

		/** ETag of the resource. */
		etag?: string | null;

		/** The CalendarResources in this page of results. */
		items?: Array<CalendarResource>;

		/** Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** Public API: Resources.calendars */
	export interface CalendarResourcesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCalendarResourcesFormGroup() {
		return new FormGroup<CalendarResourcesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
		kind?: string | null;

		/** Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days. */
		params?: {[id: string]: string };

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean | null;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string | null;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string | null;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string | null;

		/** The type of delivery mechanism used for this channel. */
		type?: string | null;
	}

	/** An notification channel used to watch for resource changes. */
	export interface ChannelFormProperties {

		/** The address where notifications are delivered for this channel. */
		address: FormControl<string | null | undefined>,

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration: FormControl<string | null | undefined>,

		/** A UUID or similar unique string that identifies this channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
		kind: FormControl<string | null | undefined>,

		/** Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days. */
		params: FormControl<{[id: string]: string } | null | undefined>,

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload: FormControl<boolean | null | undefined>,

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId: FormControl<string | null | undefined>,

		/** A version-specific identifier for the watched resource. */
		resourceUri: FormControl<string | null | undefined>,

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token: FormControl<string | null | undefined>,

		/** The type of delivery mechanism used for this channel. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			payload: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices). */
	export interface ChromeOsDevice {

		/** A list of active time ranges (Read-only). */
		ChromeOsDeviceActiveTimeRanges?: Array<ChromeOsDeviceActiveTimeRanges>;

		/** The asset identifier as noted by an administrator or specified during enrollment. */
		annotatedAssetId?: string | null;

		/** The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed. */
		annotatedLocation?: string | null;

		/** The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed. */
		annotatedUser?: string | null;

		/** (Read-only) The timestamp after which the device will stop receiving Chrome updates or support */
		autoUpdateExpiration?: string | null;

		/** The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch). */
		bootMode?: string | null;

		/** Information regarding CPU specs in the device. */
		ChromeOsDeviceCpuInfo?: Array<ChromeOsDeviceCpuInfo>;

		/** Reports of CPU utilization and temperature (Read-only) */
		ChromeOsDeviceCpuStatusReports?: Array<ChromeOsDeviceCpuStatusReports>;

		/** (Read-only) Deprovision reason. */
		deprovisionReason?: BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null;

		/** A list of device files to download (Read-only) */
		ChromeOsDeviceDeviceFiles?: Array<ChromeOsDeviceDeviceFiles>;

		/** The unique ID of the Chrome device. */
		deviceId?: string | null;

		/** Output only. Device license type. */
		deviceLicenseType?: ChromeOsDeviceDeviceLicenseType | null;

		/** Reports of disk space and other info about mounted/connected volumes. */
		ChromeOsDeviceDiskVolumeReports?: Array<ChromeOsDeviceDiskVolumeReports>;

		/** (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
		dockMacAddress?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The device's MAC address on the ethernet network interface. */
		ethernetMacAddress?: string | null;

		/** (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
		ethernetMacAddress0?: string | null;

		/** The Chrome device's firmware version. */
		firmwareVersion?: string | null;

		/** Date and time for the first time the device was enrolled. */
		firstEnrollmentTime?: string | null;

		/** The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`. */
		kind?: string | null;

		/** (Read-only) Date and time for the last deprovision of the device. */
		lastDeprovisionTimestamp?: string | null;

		/** Date and time the device was last enrolled (Read-only) */
		lastEnrollmentTime?: Date | null;

		/** Contains last known network (Read-only) */
		ChromeOsDeviceLastKnownNetwork?: Array<ChromeOsDeviceLastKnownNetwork>;

		/** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		lastSync?: Date | null;

		/** The device's wireless MAC address. If the device does not have this information, it is not included in the response. */
		macAddress?: string | null;

		/** (Read-only) The date the device was manufactured in yyyy-mm-dd format. */
		manufactureDate?: string | null;

		/** The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid). */
		meid?: string | null;

		/** The device's model information. If the device does not have this information, this property is not included in the response. */
		model?: string | null;

		/** Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed. */
		notes?: string | null;

		/** The device's order number. Only devices directly purchased from Google have an order number. */
		orderNumber?: string | null;

		/** The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
		orgUnitId?: string | null;

		/** The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
		orgUnitPath?: string | null;

		/** Contains information regarding the current OS update status. */
		osUpdateStatus?: OsUpdateStatus;

		/** The Chrome device's operating system version. */
		osVersion?: string | null;

		/** The Chrome device's platform version. */
		platformVersion?: string | null;

		/** A list of recent device users, in descending order, by last login time. */
		ChromeOsDeviceRecentUsers?: Array<ChromeOsDeviceRecentUsers>;

		/** A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only) */
		ChromeOsDeviceScreenshotFiles?: Array<ChromeOsDeviceScreenshotFiles>;

		/** The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab. */
		serialNumber?: string | null;

		/** The status of the device. */
		status?: string | null;

		/** Final date the device will be supported (Read-only) */
		supportEndDate?: Date | null;

		/** Reports of amounts of available RAM memory (Read-only) */
		ChromeOsDeviceSystemRamFreeReports?: Array<ChromeOsDeviceSystemRamFreeReports>;

		/** Total RAM on the device [in bytes] (Read-only) */
		systemRamTotal?: string | null;

		/** Trusted Platform Module (TPM) (Read-only) */
		tpmVersionInfo?: ChromeOsDeviceTpmVersionInfo;

		/** Determines if the device will auto renew its support after the support end date. This is a read-only property. */
		willAutoRenew?: boolean | null;
	}

	/** Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices). */
	export interface ChromeOsDeviceFormProperties {

		/** The asset identifier as noted by an administrator or specified during enrollment. */
		annotatedAssetId: FormControl<string | null | undefined>,

		/** The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed. */
		annotatedLocation: FormControl<string | null | undefined>,

		/** The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed. */
		annotatedUser: FormControl<string | null | undefined>,

		/** (Read-only) The timestamp after which the device will stop receiving Chrome updates or support */
		autoUpdateExpiration: FormControl<string | null | undefined>,

		/** The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch). */
		bootMode: FormControl<string | null | undefined>,

		/** (Read-only) Deprovision reason. */
		deprovisionReason: FormControl<BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null | undefined>,

		/** The unique ID of the Chrome device. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Device license type. */
		deviceLicenseType: FormControl<ChromeOsDeviceDeviceLicenseType | null | undefined>,

		/** (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
		dockMacAddress: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The device's MAC address on the ethernet network interface. */
		ethernetMacAddress: FormControl<string | null | undefined>,

		/** (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
		ethernetMacAddress0: FormControl<string | null | undefined>,

		/** The Chrome device's firmware version. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** Date and time for the first time the device was enrolled. */
		firstEnrollmentTime: FormControl<string | null | undefined>,

		/** The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`. */
		kind: FormControl<string | null | undefined>,

		/** (Read-only) Date and time for the last deprovision of the device. */
		lastDeprovisionTimestamp: FormControl<string | null | undefined>,

		/** Date and time the device was last enrolled (Read-only) */
		lastEnrollmentTime: FormControl<Date | null | undefined>,

		/** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		lastSync: FormControl<Date | null | undefined>,

		/** The device's wireless MAC address. If the device does not have this information, it is not included in the response. */
		macAddress: FormControl<string | null | undefined>,

		/** (Read-only) The date the device was manufactured in yyyy-mm-dd format. */
		manufactureDate: FormControl<string | null | undefined>,

		/** The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid). */
		meid: FormControl<string | null | undefined>,

		/** The device's model information. If the device does not have this information, this property is not included in the response. */
		model: FormControl<string | null | undefined>,

		/** Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed. */
		notes: FormControl<string | null | undefined>,

		/** The device's order number. Only devices directly purchased from Google have an order number. */
		orderNumber: FormControl<string | null | undefined>,

		/** The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
		orgUnitId: FormControl<string | null | undefined>,

		/** The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
		orgUnitPath: FormControl<string | null | undefined>,

		/** The Chrome device's operating system version. */
		osVersion: FormControl<string | null | undefined>,

		/** The Chrome device's platform version. */
		platformVersion: FormControl<string | null | undefined>,

		/** The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab. */
		serialNumber: FormControl<string | null | undefined>,

		/** The status of the device. */
		status: FormControl<string | null | undefined>,

		/** Final date the device will be supported (Read-only) */
		supportEndDate: FormControl<Date | null | undefined>,

		/** Total RAM on the device [in bytes] (Read-only) */
		systemRamTotal: FormControl<string | null | undefined>,

		/** Determines if the device will auto renew its support after the support end date. This is a read-only property. */
		willAutoRenew: FormControl<boolean | null | undefined>,
	}
	export function CreateChromeOsDeviceFormGroup() {
		return new FormGroup<ChromeOsDeviceFormProperties>({
			annotatedAssetId: new FormControl<string | null | undefined>(undefined),
			annotatedLocation: new FormControl<string | null | undefined>(undefined),
			annotatedUser: new FormControl<string | null | undefined>(undefined),
			autoUpdateExpiration: new FormControl<string | null | undefined>(undefined),
			bootMode: new FormControl<string | null | undefined>(undefined),
			deprovisionReason: new FormControl<BatchChangeChromeOsDeviceStatusRequestDeprovisionReason | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceLicenseType: new FormControl<ChromeOsDeviceDeviceLicenseType | null | undefined>(undefined),
			dockMacAddress: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			ethernetMacAddress: new FormControl<string | null | undefined>(undefined),
			ethernetMacAddress0: new FormControl<string | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			firstEnrollmentTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastDeprovisionTimestamp: new FormControl<string | null | undefined>(undefined),
			lastEnrollmentTime: new FormControl<Date | null | undefined>(undefined),
			lastSync: new FormControl<Date | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			manufactureDate: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			orderNumber: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			orgUnitPath: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			supportEndDate: new FormControl<Date | null | undefined>(undefined),
			systemRamTotal: new FormControl<string | null | undefined>(undefined),
			willAutoRenew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceActiveTimeRanges {

		/** Duration of usage in milliseconds. */
		activeTime?: number | null;

		/** Date of usage */
		date?: Date | null;
	}
	export interface ChromeOsDeviceActiveTimeRangesFormProperties {

		/** Duration of usage in milliseconds. */
		activeTime: FormControl<number | null | undefined>,

		/** Date of usage */
		date: FormControl<Date | null | undefined>,
	}
	export function CreateChromeOsDeviceActiveTimeRangesFormGroup() {
		return new FormGroup<ChromeOsDeviceActiveTimeRangesFormProperties>({
			activeTime: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceCpuInfo {

		/** The CPU architecture. */
		architecture?: string | null;

		/** Information for the Logical CPUs */
		ChromeOsDeviceCpuInfoLogicalCpus?: Array<ChromeOsDeviceCpuInfoLogicalCpus>;

		/** The max CPU clock speed in kHz. */
		maxClockSpeedKhz?: number | null;

		/** The CPU model name. */
		model?: string | null;
	}
	export interface ChromeOsDeviceCpuInfoFormProperties {

		/** The CPU architecture. */
		architecture: FormControl<string | null | undefined>,

		/** The max CPU clock speed in kHz. */
		maxClockSpeedKhz: FormControl<number | null | undefined>,

		/** The CPU model name. */
		model: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceCpuInfoFormGroup() {
		return new FormGroup<ChromeOsDeviceCpuInfoFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			maxClockSpeedKhz: new FormControl<number | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceCpuInfoLogicalCpus {

		/** C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker. */
		ChromeOsDeviceCpuInfoLogicalCpusCStates?: Array<ChromeOsDeviceCpuInfoLogicalCpusCStates>;

		/** Current frequency the CPU is running at. */
		currentScalingFrequencyKhz?: number | null;

		/** Idle time since last boot. */
		idleDuration?: string | null;

		/** Maximum frequency the CPU is allowed to run at, by policy. */
		maxScalingFrequencyKhz?: number | null;
	}
	export interface ChromeOsDeviceCpuInfoLogicalCpusFormProperties {

		/** Current frequency the CPU is running at. */
		currentScalingFrequencyKhz: FormControl<number | null | undefined>,

		/** Idle time since last boot. */
		idleDuration: FormControl<string | null | undefined>,

		/** Maximum frequency the CPU is allowed to run at, by policy. */
		maxScalingFrequencyKhz: FormControl<number | null | undefined>,
	}
	export function CreateChromeOsDeviceCpuInfoLogicalCpusFormGroup() {
		return new FormGroup<ChromeOsDeviceCpuInfoLogicalCpusFormProperties>({
			currentScalingFrequencyKhz: new FormControl<number | null | undefined>(undefined),
			idleDuration: new FormControl<string | null | undefined>(undefined),
			maxScalingFrequencyKhz: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceCpuInfoLogicalCpusCStates {

		/** Name of the state. */
		displayName?: string | null;

		/** Time spent in the state since the last reboot. */
		sessionDuration?: string | null;
	}
	export interface ChromeOsDeviceCpuInfoLogicalCpusCStatesFormProperties {

		/** Name of the state. */
		displayName: FormControl<string | null | undefined>,

		/** Time spent in the state since the last reboot. */
		sessionDuration: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceCpuInfoLogicalCpusCStatesFormGroup() {
		return new FormGroup<ChromeOsDeviceCpuInfoLogicalCpusCStatesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			sessionDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceCpuStatusReports {

		/** A list of CPU temperature samples. */
		ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo?: Array<ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo>;
		cpuUtilizationPercentageInfo?: Array<number>;

		/** Date and time the report was received. */
		reportTime?: Date | null;
	}
	export interface ChromeOsDeviceCpuStatusReportsFormProperties {

		/** Date and time the report was received. */
		reportTime: FormControl<Date | null | undefined>,
	}
	export function CreateChromeOsDeviceCpuStatusReportsFormGroup() {
		return new FormGroup<ChromeOsDeviceCpuStatusReportsFormProperties>({
			reportTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo {

		/** CPU label */
		label?: string | null;

		/** Temperature in Celsius degrees. */
		temperature?: number | null;
	}
	export interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfoFormProperties {

		/** CPU label */
		label: FormControl<string | null | undefined>,

		/** Temperature in Celsius degrees. */
		temperature: FormControl<number | null | undefined>,
	}
	export function CreateChromeOsDeviceCpuStatusReportsCpuTemperatureInfoFormGroup() {
		return new FormGroup<ChromeOsDeviceCpuStatusReportsCpuTemperatureInfoFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceDeviceFiles {

		/** Date and time the file was created */
		createTime?: Date | null;

		/** File download URL */
		downloadUrl?: string | null;

		/** File name */
		name?: string | null;

		/** File type */
		type?: string | null;
	}
	export interface ChromeOsDeviceDeviceFilesFormProperties {

		/** Date and time the file was created */
		createTime: FormControl<Date | null | undefined>,

		/** File download URL */
		downloadUrl: FormControl<string | null | undefined>,

		/** File name */
		name: FormControl<string | null | undefined>,

		/** File type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceDeviceFilesFormGroup() {
		return new FormGroup<ChromeOsDeviceDeviceFilesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChromeOsDeviceDeviceLicenseType { deviceLicenseTypeUnspecified = 0, enterprise = 1, enterpriseUpgrade = 2, educationUpgrade = 3, education = 4, kioskUpgrade = 5 }

	export interface ChromeOsDeviceDiskVolumeReports {

		/** Disk volumes */
		ChromeOsDeviceDiskVolumeReportsVolumeInfo?: Array<ChromeOsDeviceDiskVolumeReportsVolumeInfo>;
	}
	export interface ChromeOsDeviceDiskVolumeReportsFormProperties {
	}
	export function CreateChromeOsDeviceDiskVolumeReportsFormGroup() {
		return new FormGroup<ChromeOsDeviceDiskVolumeReportsFormProperties>({
		});

	}

	export interface ChromeOsDeviceDiskVolumeReportsVolumeInfo {

		/** Free disk space [in bytes] */
		storageFree?: string | null;

		/** Total disk space [in bytes] */
		storageTotal?: string | null;

		/** Volume id */
		volumeId?: string | null;
	}
	export interface ChromeOsDeviceDiskVolumeReportsVolumeInfoFormProperties {

		/** Free disk space [in bytes] */
		storageFree: FormControl<string | null | undefined>,

		/** Total disk space [in bytes] */
		storageTotal: FormControl<string | null | undefined>,

		/** Volume id */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceDiskVolumeReportsVolumeInfoFormGroup() {
		return new FormGroup<ChromeOsDeviceDiskVolumeReportsVolumeInfoFormProperties>({
			storageFree: new FormControl<string | null | undefined>(undefined),
			storageTotal: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceLastKnownNetwork {

		/** The IP address. */
		ipAddress?: string | null;

		/** The WAN IP address. */
		wanIpAddress?: string | null;
	}
	export interface ChromeOsDeviceLastKnownNetworkFormProperties {

		/** The IP address. */
		ipAddress: FormControl<string | null | undefined>,

		/** The WAN IP address. */
		wanIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceLastKnownNetworkFormGroup() {
		return new FormGroup<ChromeOsDeviceLastKnownNetworkFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			wanIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information regarding the current OS update status. */
	export interface OsUpdateStatus {

		/** Date and time of the last reboot. */
		rebootTime?: string | null;

		/** The update state of an OS update. */
		state?: OsUpdateStatusState | null;

		/** New required platform version from the pending updated kiosk app. */
		targetKioskAppVersion?: string | null;

		/** New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot. */
		targetOsVersion?: string | null;

		/** Date and time of the last update check. */
		updateCheckTime?: string | null;

		/** Date and time of the last successful OS update. */
		updateTime?: string | null;
	}

	/** Contains information regarding the current OS update status. */
	export interface OsUpdateStatusFormProperties {

		/** Date and time of the last reboot. */
		rebootTime: FormControl<string | null | undefined>,

		/** The update state of an OS update. */
		state: FormControl<OsUpdateStatusState | null | undefined>,

		/** New required platform version from the pending updated kiosk app. */
		targetKioskAppVersion: FormControl<string | null | undefined>,

		/** New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot. */
		targetOsVersion: FormControl<string | null | undefined>,

		/** Date and time of the last update check. */
		updateCheckTime: FormControl<string | null | undefined>,

		/** Date and time of the last successful OS update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOsUpdateStatusFormGroup() {
		return new FormGroup<OsUpdateStatusFormProperties>({
			rebootTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<OsUpdateStatusState | null | undefined>(undefined),
			targetKioskAppVersion: new FormControl<string | null | undefined>(undefined),
			targetOsVersion: new FormControl<string | null | undefined>(undefined),
			updateCheckTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OsUpdateStatusState { updateStateUnspecified = 0, updateStateNotStarted = 1, updateStateDownloadInProgress = 2, updateStateNeedReboot = 3 }

	export interface ChromeOsDeviceRecentUsers {

		/** The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`. */
		email?: string | null;

		/** The type of the user. */
		type?: string | null;
	}
	export interface ChromeOsDeviceRecentUsersFormProperties {

		/** The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`. */
		email: FormControl<string | null | undefined>,

		/** The type of the user. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceRecentUsersFormGroup() {
		return new FormGroup<ChromeOsDeviceRecentUsersFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceScreenshotFiles {

		/** Date and time the file was created */
		createTime?: Date | null;

		/** File download URL */
		downloadUrl?: string | null;

		/** File name */
		name?: string | null;

		/** File type */
		type?: string | null;
	}
	export interface ChromeOsDeviceScreenshotFilesFormProperties {

		/** Date and time the file was created */
		createTime: FormControl<Date | null | undefined>,

		/** File download URL */
		downloadUrl: FormControl<string | null | undefined>,

		/** File name */
		name: FormControl<string | null | undefined>,

		/** File type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceScreenshotFilesFormGroup() {
		return new FormGroup<ChromeOsDeviceScreenshotFilesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceSystemRamFreeReports {

		/** Date and time the report was received. */
		reportTime?: Date | null;
		systemRamFreeInfo?: Array<string>;
	}
	export interface ChromeOsDeviceSystemRamFreeReportsFormProperties {

		/** Date and time the report was received. */
		reportTime: FormControl<Date | null | undefined>,
	}
	export function CreateChromeOsDeviceSystemRamFreeReportsFormGroup() {
		return new FormGroup<ChromeOsDeviceSystemRamFreeReportsFormProperties>({
			reportTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDeviceTpmVersionInfo {

		/** TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000 */
		family?: string | null;

		/** TPM firmware version. */
		firmwareVersion?: string | null;

		/** TPM manufacturer code. */
		manufacturer?: string | null;

		/** TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2. */
		specLevel?: string | null;

		/** TPM model number. */
		tpmModel?: string | null;

		/** Vendor-specific information such as Vendor ID. */
		vendorSpecific?: string | null;
	}
	export interface ChromeOsDeviceTpmVersionInfoFormProperties {

		/** TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000 */
		family: FormControl<string | null | undefined>,

		/** TPM firmware version. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** TPM manufacturer code. */
		manufacturer: FormControl<string | null | undefined>,

		/** TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2. */
		specLevel: FormControl<string | null | undefined>,

		/** TPM model number. */
		tpmModel: FormControl<string | null | undefined>,

		/** Vendor-specific information such as Vendor ID. */
		vendorSpecific: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceTpmVersionInfoFormGroup() {
		return new FormGroup<ChromeOsDeviceTpmVersionInfoFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			specLevel: new FormControl<string | null | undefined>(undefined),
			tpmModel: new FormControl<string | null | undefined>(undefined),
			vendorSpecific: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data about an update to the status of a Chrome OS device. */
	export interface ChromeOsDeviceAction {

		/** Action to be taken on the Chrome OS device. */
		action?: string | null;

		/** Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers. */
		deprovisionReason?: string | null;
	}

	/** Data about an update to the status of a Chrome OS device. */
	export interface ChromeOsDeviceActionFormProperties {

		/** Action to be taken on the Chrome OS device. */
		action: FormControl<string | null | undefined>,

		/** Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers. */
		deprovisionReason: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDeviceActionFormGroup() {
		return new FormGroup<ChromeOsDeviceActionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			deprovisionReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsDevices {

		/** A list of Chrome OS Device objects. */
		chromeosdevices?: Array<ChromeOsDevice>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request. */
		nextPageToken?: string | null;
	}
	export interface ChromeOsDevicesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateChromeOsDevicesFormGroup() {
		return new FormGroup<ChromeOsDevicesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChromeOsMoveDevicesToOu {

		/** Chrome OS devices to be moved to OU */
		deviceIds?: Array<string>;
	}
	export interface ChromeOsMoveDevicesToOuFormProperties {
	}
	export function CreateChromeOsMoveDevicesToOuFormGroup() {
		return new FormGroup<ChromeOsMoveDevicesToOuFormProperties>({
		});

	}

	export interface Customer {

		/** The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain` */
		alternateEmail?: string | null;

		/** The customer's creation time (Readonly) */
		customerCreationTime?: Date | null;

		/** The customer's primary domain name string. Do not include the `www` prefix when creating a new customer. */
		customerDomain?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The unique ID for the customer's Google Workspace account. (Readonly) */
		id?: string | null;

		/** Identifies the resource as a customer. Value: `admin#directory#customer` */
		kind?: string | null;

		/** The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`. */
		language?: string | null;

		/** The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. */
		phoneNumber?: string | null;
		postalAddress?: CustomerPostalAddress;
	}
	export interface CustomerFormProperties {

		/** The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain` */
		alternateEmail: FormControl<string | null | undefined>,

		/** The customer's creation time (Readonly) */
		customerCreationTime: FormControl<Date | null | undefined>,

		/** The customer's primary domain name string. Do not include the `www` prefix when creating a new customer. */
		customerDomain: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The unique ID for the customer's Google Workspace account. (Readonly) */
		id: FormControl<string | null | undefined>,

		/** Identifies the resource as a customer. Value: `admin#directory#customer` */
		kind: FormControl<string | null | undefined>,

		/** The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`. */
		language: FormControl<string | null | undefined>,

		/** The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			alternateEmail: new FormControl<string | null | undefined>(undefined),
			customerCreationTime: new FormControl<Date | null | undefined>(undefined),
			customerDomain: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerPostalAddress {

		/** A customer's physical address. The address can be composed of one to three lines. */
		addressLine1?: string | null;

		/** Address line 2 of the address. */
		addressLine2?: string | null;

		/** Address line 3 of the address. */
		addressLine3?: string | null;

		/** The customer contact's name. */
		contactName?: string | null;

		/** This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm). */
		countryCode?: string | null;

		/** Name of the locality. An example of a locality value is the city of `San Francisco`. */
		locality?: string | null;

		/** The company or company division name. */
		organizationName?: string | null;

		/** The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element. */
		postalCode?: string | null;

		/** Name of the region. An example of a region value is `NY` for the state of New York. */
		region?: string | null;
	}
	export interface CustomerPostalAddressFormProperties {

		/** A customer's physical address. The address can be composed of one to three lines. */
		addressLine1: FormControl<string | null | undefined>,

		/** Address line 2 of the address. */
		addressLine2: FormControl<string | null | undefined>,

		/** Address line 3 of the address. */
		addressLine3: FormControl<string | null | undefined>,

		/** The customer contact's name. */
		contactName: FormControl<string | null | undefined>,

		/** This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm). */
		countryCode: FormControl<string | null | undefined>,

		/** Name of the locality. An example of a locality value is the city of `San Francisco`. */
		locality: FormControl<string | null | undefined>,

		/** The company or company division name. */
		organizationName: FormControl<string | null | undefined>,

		/** The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the region. An example of a region value is `NY` for the state of New York. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateCustomerPostalAddressFormGroup() {
		return new FormGroup<CustomerPostalAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			addressLine3: new FormControl<string | null | undefined>(undefined),
			contactName: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information regarding a command that was issued to a device. */
	export interface DirectoryChromeosdevicesCommand {

		/** The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired. */
		commandExpireTime?: string | null;

		/** Unique ID of a device command. */
		commandId?: string | null;

		/** The result of executing a command. */
		commandResult?: DirectoryChromeosdevicesCommandResult;

		/** The timestamp when the command was issued by the admin. */
		issueTime?: string | null;

		/** The payload that the command specified, if any. */
		payload?: string | null;

		/** Indicates the command state. */
		state?: DirectoryChromeosdevicesCommandState | null;

		/** The type of the command. */
		type?: DirectoryChromeosdevicesCommandType | null;
	}

	/** Information regarding a command that was issued to a device. */
	export interface DirectoryChromeosdevicesCommandFormProperties {

		/** The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired. */
		commandExpireTime: FormControl<string | null | undefined>,

		/** Unique ID of a device command. */
		commandId: FormControl<string | null | undefined>,

		/** The timestamp when the command was issued by the admin. */
		issueTime: FormControl<string | null | undefined>,

		/** The payload that the command specified, if any. */
		payload: FormControl<string | null | undefined>,

		/** Indicates the command state. */
		state: FormControl<DirectoryChromeosdevicesCommandState | null | undefined>,

		/** The type of the command. */
		type: FormControl<DirectoryChromeosdevicesCommandType | null | undefined>,
	}
	export function CreateDirectoryChromeosdevicesCommandFormGroup() {
		return new FormGroup<DirectoryChromeosdevicesCommandFormProperties>({
			commandExpireTime: new FormControl<string | null | undefined>(undefined),
			commandId: new FormControl<string | null | undefined>(undefined),
			issueTime: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DirectoryChromeosdevicesCommandState | null | undefined>(undefined),
			type: new FormControl<DirectoryChromeosdevicesCommandType | null | undefined>(undefined),
		});

	}


	/** The result of executing a command. */
	export interface DirectoryChromeosdevicesCommandResult {

		/** The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The URL provides a link to the Chrome Remote Desktop session. */
		commandResultPayload?: string | null;

		/** The error message with a short explanation as to why the command failed. Only present if the command failed. */
		errorMessage?: string | null;

		/** The time at which the command was executed or failed to execute. */
		executeTime?: string | null;

		/** The result of the command. */
		result?: DirectoryChromeosdevicesCommandResultResult | null;
	}

	/** The result of executing a command. */
	export interface DirectoryChromeosdevicesCommandResultFormProperties {

		/** The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The URL provides a link to the Chrome Remote Desktop session. */
		commandResultPayload: FormControl<string | null | undefined>,

		/** The error message with a short explanation as to why the command failed. Only present if the command failed. */
		errorMessage: FormControl<string | null | undefined>,

		/** The time at which the command was executed or failed to execute. */
		executeTime: FormControl<string | null | undefined>,

		/** The result of the command. */
		result: FormControl<DirectoryChromeosdevicesCommandResultResult | null | undefined>,
	}
	export function CreateDirectoryChromeosdevicesCommandResultFormGroup() {
		return new FormGroup<DirectoryChromeosdevicesCommandResultFormProperties>({
			commandResultPayload: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			executeTime: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<DirectoryChromeosdevicesCommandResultResult | null | undefined>(undefined),
		});

	}

	export enum DirectoryChromeosdevicesCommandResultResult { COMMAND_RESULT_TYPE_UNSPECIFIED = 0, IGNORED = 1, FAILURE = 2, SUCCESS = 3 }

	export enum DirectoryChromeosdevicesCommandState { STATE_UNSPECIFIED = 0, PENDING = 1, EXPIRED = 2, CANCELLED = 3, SENT_TO_CLIENT = 4, ACKED_BY_CLIENT = 5, EXECUTED_BY_CLIENT = 6 }

	export enum DirectoryChromeosdevicesCommandType { COMMAND_TYPE_UNSPECIFIED = 0, REBOOT = 1, TAKE_A_SCREENSHOT = 2, SET_VOLUME = 3, WIPE_USERS = 4, REMOTE_POWERWASH = 5, DEVICE_START_CRD_SESSION = 6, CAPTURE_LOGS = 7 }


	/** A request for issuing a command. */
	export interface DirectoryChromeosdevicesIssueCommandRequest {

		/** The type of command. */
		commandType?: DirectoryChromeosdevicesCommandType | null;

		/** The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. */
		payload?: string | null;
	}

	/** A request for issuing a command. */
	export interface DirectoryChromeosdevicesIssueCommandRequestFormProperties {

		/** The type of command. */
		commandType: FormControl<DirectoryChromeosdevicesCommandType | null | undefined>,

		/** The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryChromeosdevicesIssueCommandRequestFormGroup() {
		return new FormGroup<DirectoryChromeosdevicesIssueCommandRequestFormProperties>({
			commandType: new FormControl<DirectoryChromeosdevicesCommandType | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for issuing a command. */
	export interface DirectoryChromeosdevicesIssueCommandResponse {

		/** The unique ID of the issued command, used to retrieve the command status. */
		commandId?: string | null;
	}

	/** A response for issuing a command. */
	export interface DirectoryChromeosdevicesIssueCommandResponseFormProperties {

		/** The unique ID of the issued command, used to retrieve the command status. */
		commandId: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryChromeosdevicesIssueCommandResponseFormGroup() {
		return new FormGroup<DirectoryChromeosdevicesIssueCommandResponseFormProperties>({
			commandId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainAlias {

		/** The creation time of the domain alias. (Read-only). */
		creationTime?: string | null;

		/** The domain alias name. */
		domainAliasName?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer. */
		parentDomainName?: string | null;

		/** Indicates the verification state of a domain alias. (Read-only) */
		verified?: boolean | null;
	}
	export interface DomainAliasFormProperties {

		/** The creation time of the domain alias. (Read-only). */
		creationTime: FormControl<string | null | undefined>,

		/** The domain alias name. */
		domainAliasName: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer. */
		parentDomainName: FormControl<string | null | undefined>,

		/** Indicates the verification state of a domain alias. (Read-only) */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainAliasFormGroup() {
		return new FormGroup<DomainAliasFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			domainAliasName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			parentDomainName: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DomainAliases {

		/** A list of domain alias objects. */
		domainAliases?: Array<DomainAlias>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;
	}
	export interface DomainAliasesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDomainAliasesFormGroup() {
		return new FormGroup<DomainAliasesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domains {

		/** Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only). */
		creationTime?: string | null;

		/** A list of domain alias objects. (Read-only) */
		domainAliases?: Array<DomainAlias>;

		/** The domain name of the customer. */
		domainName?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Indicates if the domain is a primary domain (Read-only). */
		isPrimary?: boolean | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** Indicates the verification state of a domain. (Read-only). */
		verified?: boolean | null;
	}
	export interface DomainsFormProperties {

		/** Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only). */
		creationTime: FormControl<string | null | undefined>,

		/** The domain name of the customer. */
		domainName: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Indicates if the domain is a primary domain (Read-only). */
		isPrimary: FormControl<boolean | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Indicates the verification state of a domain. (Read-only). */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainsFormGroup() {
		return new FormGroup<DomainsFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			isPrimary: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Domains2 {

		/** A list of domain objects. */
		domains?: Array<Domains>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;
	}
	export interface Domains2FormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDomains2FormGroup() {
		return new FormGroup<Domains2FormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** JSON template for Feature object in Directory API. */
	export interface Feature {

		/** ETag of the resource. */
		etags?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** The name of the feature. */
		name?: string | null;
	}

	/** JSON template for Feature object in Directory API. */
	export interface FeatureFormProperties {

		/** ETag of the resource. */
		etags: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The name of the feature. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			etags: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a feature instance. */
	export interface FeatureInstance {

		/** JSON template for Feature object in Directory API. */
		feature?: Feature;
	}

	/** JSON template for a feature instance. */
	export interface FeatureInstanceFormProperties {
	}
	export function CreateFeatureInstanceFormGroup() {
		return new FormGroup<FeatureInstanceFormProperties>({
		});

	}

	export interface FeatureRename {

		/** New name of the feature. */
		newName?: string | null;
	}
	export interface FeatureRenameFormProperties {

		/** New name of the feature. */
		newName: FormControl<string | null | undefined>,
	}
	export function CreateFeatureRenameFormGroup() {
		return new FormGroup<FeatureRenameFormProperties>({
			newName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public API: Resources.features */
	export interface Features {

		/** ETag of the resource. */
		etag?: string | null;

		/** The Features in this page of results. */
		features?: Array<Feature>;

		/** Kind of resource this is. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** Public API: Resources.features */
	export interface FeaturesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFeaturesFormGroup() {
		return new FormGroup<FeaturesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin. */
	export interface Group {

		/** Read-only. Value is `true` if this group was created by an administrator rather than a user. */
		adminCreated?: boolean | null;

		/** Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored. */
		aliases?: Array<string>;

		/** An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters. */
		description?: string | null;

		/** The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group. */
		directMembersCount?: string | null;

		/** The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details. */
		email?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`. */
		id?: string | null;

		/** The type of the API resource. For Groups resources, the value is `admin#directory#group`. */
		kind?: string | null;

		/** The group's display name. */
		name?: string | null;

		/** Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored. */
		nonEditableAliases?: Array<string>;
	}

	/** Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin. */
	export interface GroupFormProperties {

		/** Read-only. Value is `true` if this group was created by an administrator rather than a user. */
		adminCreated: FormControl<boolean | null | undefined>,

		/** An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters. */
		description: FormControl<string | null | undefined>,

		/** The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group. */
		directMembersCount: FormControl<string | null | undefined>,

		/** The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details. */
		email: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`. */
		id: FormControl<string | null | undefined>,

		/** The type of the API resource. For Groups resources, the value is `admin#directory#group`. */
		kind: FormControl<string | null | undefined>,

		/** The group's display name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			adminCreated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			directMembersCount: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Directory API manages aliases, which are alternative email addresses. */
	export interface GroupAlias {

		/** The alias email address. */
		alias?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The unique ID of the group. */
		id?: string | null;

		/** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
		kind?: string | null;

		/** The primary email address of the group. */
		primaryEmail?: string | null;
	}

	/** The Directory API manages aliases, which are alternative email addresses. */
	export interface GroupAliasFormProperties {

		/** The alias email address. */
		alias: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The unique ID of the group. */
		id: FormControl<string | null | undefined>,

		/** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
		kind: FormControl<string | null | undefined>,

		/** The primary email address of the group. */
		primaryEmail: FormControl<string | null | undefined>,
	}
	export function CreateGroupAliasFormGroup() {
		return new FormGroup<GroupAliasFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Groups {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of group objects. */
		groups?: Array<Group>;

		/** Kind of resource this is. */
		kind?: string | null;

		/** Token used to access next page of this result. */
		nextPageToken?: string | null;
	}
	export interface GroupsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Token used to access next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGroupsFormGroup() {
		return new FormGroup<GroupsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPrintServersResponse {

		/** A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of print servers. */
		printServers?: Array<PrintServer>;
	}
	export interface ListPrintServersResponseFormProperties {

		/** A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrintServersResponseFormGroup() {
		return new FormGroup<ListPrintServersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing allowed printer models. */
	export interface ListPrinterModelsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time. */
		printerModels?: Array<PrinterModel>;
	}

	/** Response for listing allowed printer models. */
	export interface ListPrinterModelsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrinterModelsResponseFormGroup() {
		return new FormGroup<ListPrinterModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Printer manufacturer and model */
	export interface PrinterModel {

		/** Display name. eq. "Brother MFC-8840D" */
		displayName?: string | null;

		/** Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d" */
		makeAndModel?: string | null;

		/** Manufacturer. eq. "Brother" */
		manufacturer?: string | null;
	}

	/** Printer manufacturer and model */
	export interface PrinterModelFormProperties {

		/** Display name. eq. "Brother MFC-8840D" */
		displayName: FormControl<string | null | undefined>,

		/** Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d" */
		makeAndModel: FormControl<string | null | undefined>,

		/** Manufacturer. eq. "Brother" */
		manufacturer: FormControl<string | null | undefined>,
	}
	export function CreatePrinterModelFormGroup() {
		return new FormGroup<PrinterModelFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			makeAndModel: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing printers. */
	export interface ListPrintersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned. */
		printers?: Array<Printer>;
	}

	/** Response for listing printers. */
	export interface ListPrintersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrintersResponseFormGroup() {
		return new FormGroup<ListPrintersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members). */
	export interface Member {

		/** Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods. */
		delivery_settings?: string | null;

		/** The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes. */
		email?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`. */
		id?: string | null;

		/** The type of the API resource. For Members resources, the value is `admin#directory#member`. */
		kind?: string | null;

		/** The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094). */
		role?: string | null;

		/** Status of member (Immutable) */
		status?: string | null;

		/** The type of group member. */
		type?: string | null;
	}

	/** A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members). */
	export interface MemberFormProperties {

		/** Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods. */
		delivery_settings: FormControl<string | null | undefined>,

		/** The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes. */
		email: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`. */
		id: FormControl<string | null | undefined>,

		/** The type of the API resource. For Members resources, the value is `admin#directory#member`. */
		kind: FormControl<string | null | undefined>,

		/** The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094). */
		role: FormControl<string | null | undefined>,

		/** Status of member (Immutable) */
		status: FormControl<string | null | undefined>,

		/** The type of group member. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			delivery_settings: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Members {

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** A list of member objects. */
		members?: Array<Member>;

		/** Token used to access next page of this result. */
		nextPageToken?: string | null;
	}
	export interface MembersFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Token used to access next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateMembersFormGroup() {
		return new FormGroup<MembersFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for Has Member response in Directory API. */
	export interface MembersHasMember {

		/** Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested. */
		isMember?: boolean | null;
	}

	/** JSON template for Has Member response in Directory API. */
	export interface MembersHasMemberFormProperties {

		/** Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested. */
		isMember: FormControl<boolean | null | undefined>,
	}
	export function CreateMembersHasMemberFormGroup() {
		return new FormGroup<MembersHasMemberFormProperties>({
			isMember: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html). */
	export interface MobileDevice {

		/** Adb (USB debugging) enabled or disabled on device (Read-only) */
		adbStatus?: boolean | null;

		/** The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications. */
		MobileDeviceApplications?: Array<MobileDeviceApplications>;

		/** The device's baseband version. */
		basebandVersion?: string | null;

		/** Mobile Device Bootloader version (Read-only) */
		bootloaderVersion?: string | null;

		/** Mobile Device Brand (Read-only) */
		brand?: string | null;

		/** The device's operating system build number. */
		buildNumber?: string | null;

		/** The default locale used on the device. */
		defaultLanguage?: string | null;

		/** Developer options enabled or disabled on device (Read-only) */
		developerOptionsStatus?: boolean | null;

		/** The compromised device status. */
		deviceCompromisedStatus?: string | null;

		/** The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier. */
		deviceId?: string | null;

		/** DevicePasswordStatus (Read-only) */
		devicePasswordStatus?: string | null;

		/** The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method. */
		email?: Array<string>;

		/** Mobile Device Encryption Status (Read-only) */
		encryptionStatus?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		firstSync?: Date | null;

		/** Mobile Device Hardware (Read-only) */
		hardware?: string | null;

		/** The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property. */
		hardwareId?: string | null;

		/** The device's IMEI number. */
		imei?: string | null;

		/** The device's kernel version. */
		kernelVersion?: string | null;

		/** The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`. */
		kind?: string | null;

		/** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		lastSync?: Date | null;

		/** Boolean indicating if this account is on owner/primary profile or not. */
		managedAccountIsOnOwnerProfile?: boolean | null;

		/** Mobile Device manufacturer (Read-only) */
		manufacturer?: string | null;

		/** The device's MEID number. */
		meid?: string | null;

		/** The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device). */
		model?: string | null;

		/** The list of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user). */
		name?: Array<string>;

		/** Mobile Device mobile or network operator (if available) (Read-only) */
		networkOperator?: string | null;

		/** The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
		os?: string | null;

		/** The list of accounts added on device (Read-only) */
		otherAccountsInfo?: Array<string>;

		/** DMAgentPermission (Read-only) */
		privilege?: string | null;

		/** Mobile Device release version version (Read-only) */
		releaseVersion?: string | null;

		/** The unique ID the API service uses to identify the mobile device. */
		resourceId?: string | null;

		/** Mobile Device Security patch level (Read-only) */
		securityPatchLevel?: string | null;

		/** The device's serial number. */
		serialNumber?: string | null;

		/** The device's status. */
		status?: string | null;

		/** Work profile supported on device (Read-only) */
		supportsWorkProfile?: boolean | null;

		/** The type of mobile device. */
		type?: string | null;

		/** Unknown sources enabled or disabled on device (Read-only) */
		unknownSourcesStatus?: boolean | null;

		/** Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
		userAgent?: string | null;

		/** The device's MAC address on Wi-Fi networks. */
		wifiMacAddress?: string | null;
	}

	/** Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html). */
	export interface MobileDeviceFormProperties {

		/** Adb (USB debugging) enabled or disabled on device (Read-only) */
		adbStatus: FormControl<boolean | null | undefined>,

		/** The device's baseband version. */
		basebandVersion: FormControl<string | null | undefined>,

		/** Mobile Device Bootloader version (Read-only) */
		bootloaderVersion: FormControl<string | null | undefined>,

		/** Mobile Device Brand (Read-only) */
		brand: FormControl<string | null | undefined>,

		/** The device's operating system build number. */
		buildNumber: FormControl<string | null | undefined>,

		/** The default locale used on the device. */
		defaultLanguage: FormControl<string | null | undefined>,

		/** Developer options enabled or disabled on device (Read-only) */
		developerOptionsStatus: FormControl<boolean | null | undefined>,

		/** The compromised device status. */
		deviceCompromisedStatus: FormControl<string | null | undefined>,

		/** The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier. */
		deviceId: FormControl<string | null | undefined>,

		/** DevicePasswordStatus (Read-only) */
		devicePasswordStatus: FormControl<string | null | undefined>,

		/** Mobile Device Encryption Status (Read-only) */
		encryptionStatus: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		firstSync: FormControl<Date | null | undefined>,

		/** Mobile Device Hardware (Read-only) */
		hardware: FormControl<string | null | undefined>,

		/** The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property. */
		hardwareId: FormControl<string | null | undefined>,

		/** The device's IMEI number. */
		imei: FormControl<string | null | undefined>,

		/** The device's kernel version. */
		kernelVersion: FormControl<string | null | undefined>,

		/** The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`. */
		kind: FormControl<string | null | undefined>,

		/** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
		lastSync: FormControl<Date | null | undefined>,

		/** Boolean indicating if this account is on owner/primary profile or not. */
		managedAccountIsOnOwnerProfile: FormControl<boolean | null | undefined>,

		/** Mobile Device manufacturer (Read-only) */
		manufacturer: FormControl<string | null | undefined>,

		/** The device's MEID number. */
		meid: FormControl<string | null | undefined>,

		/** The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device). */
		model: FormControl<string | null | undefined>,

		/** Mobile Device mobile or network operator (if available) (Read-only) */
		networkOperator: FormControl<string | null | undefined>,

		/** The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
		os: FormControl<string | null | undefined>,

		/** DMAgentPermission (Read-only) */
		privilege: FormControl<string | null | undefined>,

		/** Mobile Device release version version (Read-only) */
		releaseVersion: FormControl<string | null | undefined>,

		/** The unique ID the API service uses to identify the mobile device. */
		resourceId: FormControl<string | null | undefined>,

		/** Mobile Device Security patch level (Read-only) */
		securityPatchLevel: FormControl<string | null | undefined>,

		/** The device's serial number. */
		serialNumber: FormControl<string | null | undefined>,

		/** The device's status. */
		status: FormControl<string | null | undefined>,

		/** Work profile supported on device (Read-only) */
		supportsWorkProfile: FormControl<boolean | null | undefined>,

		/** The type of mobile device. */
		type: FormControl<string | null | undefined>,

		/** Unknown sources enabled or disabled on device (Read-only) */
		unknownSourcesStatus: FormControl<boolean | null | undefined>,

		/** Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
		userAgent: FormControl<string | null | undefined>,

		/** The device's MAC address on Wi-Fi networks. */
		wifiMacAddress: FormControl<string | null | undefined>,
	}
	export function CreateMobileDeviceFormGroup() {
		return new FormGroup<MobileDeviceFormProperties>({
			adbStatus: new FormControl<boolean | null | undefined>(undefined),
			basebandVersion: new FormControl<string | null | undefined>(undefined),
			bootloaderVersion: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			buildNumber: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			developerOptionsStatus: new FormControl<boolean | null | undefined>(undefined),
			deviceCompromisedStatus: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			devicePasswordStatus: new FormControl<string | null | undefined>(undefined),
			encryptionStatus: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			firstSync: new FormControl<Date | null | undefined>(undefined),
			hardware: new FormControl<string | null | undefined>(undefined),
			hardwareId: new FormControl<string | null | undefined>(undefined),
			imei: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastSync: new FormControl<Date | null | undefined>(undefined),
			managedAccountIsOnOwnerProfile: new FormControl<boolean | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			networkOperator: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			privilege: new FormControl<string | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			securityPatchLevel: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			supportsWorkProfile: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unknownSourcesStatus: new FormControl<boolean | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			wifiMacAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileDeviceApplications {

		/** The application's display name. An example is `Browser`. */
		displayName?: string | null;

		/** The application's package name. An example is `com.android.browser`. */
		packageName?: string | null;

		/** The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application's [Android manifest](https://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar application's permissions are `READ_CALENDAR`, or `MANAGE_ACCOUNTS`. */
		permission?: Array<string>;

		/** The application's version code. An example is `13`. */
		versionCode?: number | null;

		/** The application's version name. An example is `3.2-140714`. */
		versionName?: string | null;
	}
	export interface MobileDeviceApplicationsFormProperties {

		/** The application's display name. An example is `Browser`. */
		displayName: FormControl<string | null | undefined>,

		/** The application's package name. An example is `com.android.browser`. */
		packageName: FormControl<string | null | undefined>,

		/** The application's version code. An example is `13`. */
		versionCode: FormControl<number | null | undefined>,

		/** The application's version name. An example is `3.2-140714`. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateMobileDeviceApplicationsFormGroup() {
		return new FormGroup<MobileDeviceApplicationsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileDeviceAction {

		/** The action to be performed on the device. */
		action?: string | null;
	}
	export interface MobileDeviceActionFormProperties {

		/** The action to be performed on the device. */
		action: FormControl<string | null | undefined>,
	}
	export function CreateMobileDeviceActionFormGroup() {
		return new FormGroup<MobileDeviceActionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileDevices {

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** A list of Mobile Device objects. */
		mobiledevices?: Array<MobileDevice>;

		/** Token used to access next page of this result. */
		nextPageToken?: string | null;
	}
	export interface MobileDevicesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Token used to access next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateMobileDevicesFormGroup() {
		return new FormGroup<MobileDevicesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth. */
	export interface OrgUnit {

		/** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075). */
		blockInheritance?: boolean | null;

		/** Description of the organizational unit. */
		description?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`. */
		kind?: string | null;

		/** The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required. */
		name?: string | null;

		/** The unique ID of the organizational unit. */
		orgUnitId?: string | null;

		/** The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user). */
		orgUnitPath?: string | null;

		/** The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set. */
		parentOrgUnitId?: string | null;

		/** The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set. */
		parentOrgUnitPath?: string | null;
	}

	/** Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth. */
	export interface OrgUnitFormProperties {

		/** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075). */
		blockInheritance: FormControl<boolean | null | undefined>,

		/** Description of the organizational unit. */
		description: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`. */
		kind: FormControl<string | null | undefined>,

		/** The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required. */
		name: FormControl<string | null | undefined>,

		/** The unique ID of the organizational unit. */
		orgUnitId: FormControl<string | null | undefined>,

		/** The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user). */
		orgUnitPath: FormControl<string | null | undefined>,

		/** The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set. */
		parentOrgUnitId: FormControl<string | null | undefined>,

		/** The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set. */
		parentOrgUnitPath: FormControl<string | null | undefined>,
	}
	export function CreateOrgUnitFormGroup() {
		return new FormGroup<OrgUnitFormProperties>({
			blockInheritance: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			orgUnitPath: new FormControl<string | null | undefined>(undefined),
			parentOrgUnitId: new FormControl<string | null | undefined>(undefined),
			parentOrgUnitPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrgUnits {

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`. */
		kind?: string | null;

		/** A list of organizational unit objects. */
		organizationUnits?: Array<OrgUnit>;
	}
	export interface OrgUnitsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrgUnitsFormGroup() {
		return new FormGroup<OrgUnitsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Privilege {

		/** A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege. */
		childPrivileges?: Array<Privilege>;

		/** ETag of the resource. */
		etag?: string | null;

		/** If the privilege can be restricted to an organization unit. */
		isOuScopable?: boolean | null;

		/** The type of the API resource. This is always `admin#directory#privilege`. */
		kind?: string | null;

		/** The name of the privilege. */
		privilegeName?: string | null;

		/** The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list). */
		serviceId?: string | null;

		/** The name of the service this privilege is for. */
		serviceName?: string | null;
	}
	export interface PrivilegeFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** If the privilege can be restricted to an organization unit. */
		isOuScopable: FormControl<boolean | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#privilege`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the privilege. */
		privilegeName: FormControl<string | null | undefined>,

		/** The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list). */
		serviceId: FormControl<string | null | undefined>,

		/** The name of the service this privilege is for. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreatePrivilegeFormGroup() {
		return new FormGroup<PrivilegeFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			isOuScopable: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			privilegeName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Privileges {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of Privilege resources. */
		items?: Array<Privilege>;

		/** The type of the API resource. This is always `admin#directory#privileges`. */
		kind?: string | null;
	}
	export interface PrivilegesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#privileges`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePrivilegesFormGroup() {
		return new FormGroup<PrivilegesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Role {

		/** ETag of the resource. */
		etag?: string | null;

		/** Returns `true` if the role is a super admin role. */
		isSuperAdminRole?: boolean | null;

		/** Returns `true` if this is a pre-defined system role. */
		isSystemRole?: boolean | null;

		/** The type of the API resource. This is always `admin#directory#role`. */
		kind?: string | null;

		/** A short description of the role. */
		roleDescription?: string | null;

		/** ID of the role. */
		roleId?: string | null;

		/** Name of the role. */
		roleName?: string | null;

		/** The set of privileges that are granted to this role. */
		RoleRolePrivileges?: Array<RoleRolePrivileges>;
	}
	export interface RoleFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Returns `true` if the role is a super admin role. */
		isSuperAdminRole: FormControl<boolean | null | undefined>,

		/** Returns `true` if this is a pre-defined system role. */
		isSystemRole: FormControl<boolean | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#role`. */
		kind: FormControl<string | null | undefined>,

		/** A short description of the role. */
		roleDescription: FormControl<string | null | undefined>,

		/** ID of the role. */
		roleId: FormControl<string | null | undefined>,

		/** Name of the role. */
		roleName: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			isSuperAdminRole: new FormControl<boolean | null | undefined>(undefined),
			isSystemRole: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			roleDescription: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoleRolePrivileges {

		/** The name of the privilege. */
		privilegeName?: string | null;

		/** The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list). */
		serviceId?: string | null;
	}
	export interface RoleRolePrivilegesFormProperties {

		/** The name of the privilege. */
		privilegeName: FormControl<string | null | undefined>,

		/** The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list). */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateRoleRolePrivilegesFormGroup() {
		return new FormGroup<RoleRolePrivilegesFormProperties>({
			privilegeName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an assignment of a role. */
	export interface RoleAssignment {

		/** The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts). */
		assignedTo?: string | null;

		/** Output only. The type of the assignee (`USER` or `GROUP`). */
		assigneeType?: RoleAssignmentAssigneeType | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of the API resource. This is always `admin#directory#roleAssignment`. */
		kind?: string | null;

		/** If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. */
		orgUnitId?: string | null;

		/** ID of this roleAssignment. */
		roleAssignmentId?: string | null;

		/** The ID of the role that is assigned. */
		roleId?: string | null;

		/** The scope in which this role is assigned. */
		scopeType?: string | null;
	}

	/** Defines an assignment of a role. */
	export interface RoleAssignmentFormProperties {

		/** The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts). */
		assignedTo: FormControl<string | null | undefined>,

		/** Output only. The type of the assignee (`USER` or `GROUP`). */
		assigneeType: FormControl<RoleAssignmentAssigneeType | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#roleAssignment`. */
		kind: FormControl<string | null | undefined>,

		/** If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. */
		orgUnitId: FormControl<string | null | undefined>,

		/** ID of this roleAssignment. */
		roleAssignmentId: FormControl<string | null | undefined>,

		/** The ID of the role that is assigned. */
		roleId: FormControl<string | null | undefined>,

		/** The scope in which this role is assigned. */
		scopeType: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentFormGroup() {
		return new FormGroup<RoleAssignmentFormProperties>({
			assignedTo: new FormControl<string | null | undefined>(undefined),
			assigneeType: new FormControl<RoleAssignmentAssigneeType | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			roleAssignmentId: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
			scopeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoleAssignmentAssigneeType { user = 0, group = 1 }

	export interface RoleAssignments {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of RoleAssignment resources. */
		items?: Array<RoleAssignment>;

		/** The type of the API resource. This is always `admin#directory#roleAssignments`. */
		kind?: string | null;
		nextPageToken?: string | null;
	}
	export interface RoleAssignmentsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#roleAssignments`. */
		kind: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentsFormGroup() {
		return new FormGroup<RoleAssignmentsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Roles {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of Role resources. */
		items?: Array<Role>;

		/** The type of the API resource. This is always `admin#directory#roles`. */
		kind?: string | null;
		nextPageToken?: string | null;
	}
	export interface RolesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#roles`. */
		kind: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateRolesFormGroup() {
		return new FormGroup<RolesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of API resource. For Schema resources, this is always `admin#directory#schema`. */
	export interface Schema {

		/** Display name for the schema. */
		displayName?: string | null;

		/** The ETag of the resource. */
		etag?: string | null;

		/** A list of fields in the schema. */
		fields?: Array<SchemaFieldSpec>;

		/** Kind of resource this is. */
		kind?: string | null;

		/** The unique identifier of the schema (Read-only) */
		schemaId?: string | null;

		/** The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error. */
		schemaName?: string | null;
	}

	/** The type of API resource. For Schema resources, this is always `admin#directory#schema`. */
	export interface SchemaFormProperties {

		/** Display name for the schema. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The unique identifier of the schema (Read-only) */
		schemaId: FormControl<string | null | undefined>,

		/** The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error. */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			schemaId: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas). */
	export interface SchemaFieldSpec {

		/** Display Name of the field. */
		displayName?: string | null;

		/** The ETag of the field. */
		etag?: string | null;

		/** The unique identifier of the field (Read-only) */
		fieldId?: string | null;

		/** The name of the field. */
		fieldName?: string | null;

		/** The type of the field. */
		fieldType?: string | null;

		/** Boolean specifying whether the field is indexed or not. Default: `true`. */
		indexed?: boolean | null;

		/** The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`. */
		kind?: string | null;

		/** A boolean specifying whether this is a multi-valued field or not. Default: `false`. */
		multiValued?: boolean | null;

		/** Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported. */
		numericIndexingSpec?: SchemaFieldSpecNumericIndexingSpec;

		/** Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected. */
		readAccessType?: string | null;
	}

	/** You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas). */
	export interface SchemaFieldSpecFormProperties {

		/** Display Name of the field. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the field. */
		etag: FormControl<string | null | undefined>,

		/** The unique identifier of the field (Read-only) */
		fieldId: FormControl<string | null | undefined>,

		/** The name of the field. */
		fieldName: FormControl<string | null | undefined>,

		/** The type of the field. */
		fieldType: FormControl<string | null | undefined>,

		/** Boolean specifying whether the field is indexed or not. Default: `true`. */
		indexed: FormControl<boolean | null | undefined>,

		/** The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`. */
		kind: FormControl<string | null | undefined>,

		/** A boolean specifying whether this is a multi-valued field or not. Default: `false`. */
		multiValued: FormControl<boolean | null | undefined>,

		/** Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected. */
		readAccessType: FormControl<string | null | undefined>,
	}
	export function CreateSchemaFieldSpecFormGroup() {
		return new FormGroup<SchemaFieldSpecFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			fieldId: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			fieldType: new FormControl<string | null | undefined>(undefined),
			indexed: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			multiValued: new FormControl<boolean | null | undefined>(undefined),
			readAccessType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SchemaFieldSpecNumericIndexingSpec {

		/** Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. */
		maxValue?: number | null;

		/** Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. */
		minValue?: number | null;
	}
	export interface SchemaFieldSpecNumericIndexingSpecFormProperties {

		/** Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. */
		maxValue: FormControl<number | null | undefined>,

		/** Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. */
		minValue: FormControl<number | null | undefined>,
	}
	export function CreateSchemaFieldSpecNumericIndexingSpecFormGroup() {
		return new FormGroup<SchemaFieldSpecNumericIndexingSpecFormProperties>({
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON response template for List Schema operation in Directory API. */
	export interface Schemas {

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** A list of UserSchema objects. */
		schemas?: Array<Schema>;
	}

	/** JSON response template for List Schema operation in Directory API. */
	export interface SchemasFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSchemasFormGroup() {
		return new FormGroup<SchemasFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for token resource in Directory API. */
	export interface Token {

		/** Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID. */
		anonymous?: boolean | null;

		/** The Client ID of the application the token is issued to. */
		clientId?: string | null;

		/** The displayable name of the application the token is issued to. */
		displayText?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of the API resource. This is always `admin#directory#token`. */
		kind?: string | null;

		/** Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device. */
		nativeApp?: boolean | null;

		/** A list of authorization scopes the application is granted. */
		scopes?: Array<string>;

		/** The unique ID of the user that issued the token. */
		userKey?: string | null;
	}

	/** JSON template for token resource in Directory API. */
	export interface TokenFormProperties {

		/** Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID. */
		anonymous: FormControl<boolean | null | undefined>,

		/** The Client ID of the application the token is issued to. */
		clientId: FormControl<string | null | undefined>,

		/** The displayable name of the application the token is issued to. */
		displayText: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#token`. */
		kind: FormControl<string | null | undefined>,

		/** Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device. */
		nativeApp: FormControl<boolean | null | undefined>,

		/** The unique ID of the user that issued the token. */
		userKey: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			anonymous: new FormControl<boolean | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			displayText: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nativeApp: new FormControl<boolean | null | undefined>(undefined),
			userKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON response template for List tokens operation in Directory API. */
	export interface Tokens {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of Token resources. */
		items?: Array<Token>;

		/** The type of the API resource. This is always `admin#directory#tokenList`. */
		kind?: string | null;
	}

	/** JSON response template for List tokens operation in Directory API. */
	export interface TokensFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the API resource. This is always `admin#directory#tokenList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTokensFormGroup() {
		return new FormGroup<TokensFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html). */
	export interface User {

		/** The list of the user's addresses. The maximum allowed data size for this field is 10KB. */
		addresses?: any;

		/** Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement. */
		agreedToTerms?: boolean | null;

		/** Output only. The list of the user's alias email addresses. */
		aliases?: Array<string>;

		/** Indicates if user is archived. */
		archived?: boolean | null;

		/** Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224). */
		changePasswordAtNextLogin?: boolean | null;

		/** User's G Suite account creation time. (Read-only) */
		creationTime?: Date | null;

		/** Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`. */
		customSchemas?: {[id: string]: UserCustomProperties };

		/** Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request. */
		customerId?: string | null;
		deletionTime?: Date | null;

		/** The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`. */
		emails?: any;

		/** Output only. ETag of the resource. */
		etag?: string | null;

		/** The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB. */
		externalIds?: any;

		/** The user's gender. The maximum allowed data size for this field is 1KB. */
		gender?: any;

		/** Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer. */
		hashFunction?: string | null;

		/** The unique ID for the user. A user `id` can be used as a user request URI's `userKey`. */
		id?: string | null;

		/** The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB. */
		ims?: any;

		/** Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988). */
		includeInGlobalAddressList?: boolean | null;

		/** If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration. */
		ipWhitelisted?: boolean | null;

		/** Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service. */
		isAdmin?: boolean | null;

		/** Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325). */
		isDelegatedAdmin?: boolean | null;

		/** Output only. Is 2-step verification enforced (Read-only) */
		isEnforcedIn2Sv?: boolean | null;

		/** Output only. Is enrolled in 2-step verification (Read-only) */
		isEnrolledIn2Sv?: boolean | null;

		/** Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license. */
		isMailboxSetup?: boolean | null;

		/** The list of the user's keywords. The maximum allowed data size for this field is 1KB. */
		keywords?: any;

		/** Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`. */
		kind?: string | null;

		/** The user's languages. The maximum allowed data size for this field is 1KB. */
		languages?: any;

		/** User's last login time. (Read-only) */
		lastLoginTime?: Date | null;

		/** The user's locations. The maximum allowed data size for this field is 10KB. */
		locations?: any;
		name?: UserName;

		/** Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain. */
		nonEditableAliases?: Array<string>;

		/** Notes for the user. */
		notes?: any;

		/** The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`). */
		orgUnitPath?: string | null;

		/** The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB. */
		organizations?: any;

		/** User's password */
		password?: string | null;

		/** The list of the user's phone numbers. The maximum allowed data size for this field is 1KB. */
		phones?: any;

		/** The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user. */
		posixAccounts?: any;

		/** The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user. */
		primaryEmail?: string | null;

		/** Recovery email of the user. */
		recoveryEmail?: string | null;

		/** Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*. */
		recoveryPhone?: string | null;

		/** The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB. */
		relations?: any;

		/** A list of SSH public keys. */
		sshPublicKeys?: any;

		/** Indicates if user is suspended. */
		suspended?: boolean | null;

		/** Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`. */
		suspensionReason?: string | null;

		/** Output only. ETag of the user's photo (Read-only) */
		thumbnailPhotoEtag?: string | null;

		/** Output only. The URL of the user's profile photo. The URL might be temporary or private. */
		thumbnailPhotoUrl?: string | null;

		/** The user's websites. The maximum allowed data size for this field is 2KB. */
		websites?: any;
	}

	/** The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html). */
	export interface UserFormProperties {

		/** The list of the user's addresses. The maximum allowed data size for this field is 10KB. */
		addresses: FormControl<any | null | undefined>,

		/** Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement. */
		agreedToTerms: FormControl<boolean | null | undefined>,

		/** Indicates if user is archived. */
		archived: FormControl<boolean | null | undefined>,

		/** Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224). */
		changePasswordAtNextLogin: FormControl<boolean | null | undefined>,

		/** User's G Suite account creation time. (Read-only) */
		creationTime: FormControl<Date | null | undefined>,

		/** Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`. */
		customSchemas: FormControl<{[id: string]: UserCustomProperties } | null | undefined>,

		/** Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request. */
		customerId: FormControl<string | null | undefined>,
		deletionTime: FormControl<Date | null | undefined>,

		/** The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`. */
		emails: FormControl<any | null | undefined>,

		/** Output only. ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB. */
		externalIds: FormControl<any | null | undefined>,

		/** The user's gender. The maximum allowed data size for this field is 1KB. */
		gender: FormControl<any | null | undefined>,

		/** Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer. */
		hashFunction: FormControl<string | null | undefined>,

		/** The unique ID for the user. A user `id` can be used as a user request URI's `userKey`. */
		id: FormControl<string | null | undefined>,

		/** The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB. */
		ims: FormControl<any | null | undefined>,

		/** Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988). */
		includeInGlobalAddressList: FormControl<boolean | null | undefined>,

		/** If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration. */
		ipWhitelisted: FormControl<boolean | null | undefined>,

		/** Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service. */
		isAdmin: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325). */
		isDelegatedAdmin: FormControl<boolean | null | undefined>,

		/** Output only. Is 2-step verification enforced (Read-only) */
		isEnforcedIn2Sv: FormControl<boolean | null | undefined>,

		/** Output only. Is enrolled in 2-step verification (Read-only) */
		isEnrolledIn2Sv: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license. */
		isMailboxSetup: FormControl<boolean | null | undefined>,

		/** The list of the user's keywords. The maximum allowed data size for this field is 1KB. */
		keywords: FormControl<any | null | undefined>,

		/** Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`. */
		kind: FormControl<string | null | undefined>,

		/** The user's languages. The maximum allowed data size for this field is 1KB. */
		languages: FormControl<any | null | undefined>,

		/** User's last login time. (Read-only) */
		lastLoginTime: FormControl<Date | null | undefined>,

		/** The user's locations. The maximum allowed data size for this field is 10KB. */
		locations: FormControl<any | null | undefined>,

		/** Notes for the user. */
		notes: FormControl<any | null | undefined>,

		/** The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`). */
		orgUnitPath: FormControl<string | null | undefined>,

		/** The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB. */
		organizations: FormControl<any | null | undefined>,

		/** User's password */
		password: FormControl<string | null | undefined>,

		/** The list of the user's phone numbers. The maximum allowed data size for this field is 1KB. */
		phones: FormControl<any | null | undefined>,

		/** The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user. */
		posixAccounts: FormControl<any | null | undefined>,

		/** The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user. */
		primaryEmail: FormControl<string | null | undefined>,

		/** Recovery email of the user. */
		recoveryEmail: FormControl<string | null | undefined>,

		/** Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*. */
		recoveryPhone: FormControl<string | null | undefined>,

		/** The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB. */
		relations: FormControl<any | null | undefined>,

		/** A list of SSH public keys. */
		sshPublicKeys: FormControl<any | null | undefined>,

		/** Indicates if user is suspended. */
		suspended: FormControl<boolean | null | undefined>,

		/** Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`. */
		suspensionReason: FormControl<string | null | undefined>,

		/** Output only. ETag of the user's photo (Read-only) */
		thumbnailPhotoEtag: FormControl<string | null | undefined>,

		/** Output only. The URL of the user's profile photo. The URL might be temporary or private. */
		thumbnailPhotoUrl: FormControl<string | null | undefined>,

		/** The user's websites. The maximum allowed data size for this field is 2KB. */
		websites: FormControl<any | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			addresses: new FormControl<any | null | undefined>(undefined),
			agreedToTerms: new FormControl<boolean | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			changePasswordAtNextLogin: new FormControl<boolean | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			customSchemas: new FormControl<{[id: string]: UserCustomProperties } | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			deletionTime: new FormControl<Date | null | undefined>(undefined),
			emails: new FormControl<any | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			externalIds: new FormControl<any | null | undefined>(undefined),
			gender: new FormControl<any | null | undefined>(undefined),
			hashFunction: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ims: new FormControl<any | null | undefined>(undefined),
			includeInGlobalAddressList: new FormControl<boolean | null | undefined>(undefined),
			ipWhitelisted: new FormControl<boolean | null | undefined>(undefined),
			isAdmin: new FormControl<boolean | null | undefined>(undefined),
			isDelegatedAdmin: new FormControl<boolean | null | undefined>(undefined),
			isEnforcedIn2Sv: new FormControl<boolean | null | undefined>(undefined),
			isEnrolledIn2Sv: new FormControl<boolean | null | undefined>(undefined),
			isMailboxSetup: new FormControl<boolean | null | undefined>(undefined),
			keywords: new FormControl<any | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			languages: new FormControl<any | null | undefined>(undefined),
			lastLoginTime: new FormControl<Date | null | undefined>(undefined),
			locations: new FormControl<any | null | undefined>(undefined),
			notes: new FormControl<any | null | undefined>(undefined),
			orgUnitPath: new FormControl<string | null | undefined>(undefined),
			organizations: new FormControl<any | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phones: new FormControl<any | null | undefined>(undefined),
			posixAccounts: new FormControl<any | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
			recoveryEmail: new FormControl<string | null | undefined>(undefined),
			recoveryPhone: new FormControl<string | null | undefined>(undefined),
			relations: new FormControl<any | null | undefined>(undefined),
			sshPublicKeys: new FormControl<any | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			suspensionReason: new FormControl<string | null | undefined>(undefined),
			thumbnailPhotoEtag: new FormControl<string | null | undefined>(undefined),
			thumbnailPhotoUrl: new FormControl<string | null | undefined>(undefined),
			websites: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** JSON template for a set of custom properties (i.e. all fields in a particular schema) */
	export interface UserCustomProperties {
	}

	/** JSON template for a set of custom properties (i.e. all fields in a particular schema) */
	export interface UserCustomPropertiesFormProperties {
	}
	export function CreateUserCustomPropertiesFormGroup() {
		return new FormGroup<UserCustomPropertiesFormProperties>({
		});

	}

	export interface UserName {

		/** The user's display name. Limit: 256 characters. */
		displayName?: string | null;

		/** The user's last name. Required when creating a user account. */
		familyName?: string | null;

		/** The user's full name formed by concatenating the first and last name values. */
		fullName?: string | null;

		/** The user's first name. Required when creating a user account. */
		givenName?: string | null;
	}
	export interface UserNameFormProperties {

		/** The user's display name. Limit: 256 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The user's last name. Required when creating a user account. */
		familyName: FormControl<string | null | undefined>,

		/** The user's full name formed by concatenating the first and last name values. */
		fullName: FormControl<string | null | undefined>,

		/** The user's first name. Required when creating a user account. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreateUserNameFormGroup() {
		return new FormGroup<UserNameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for About (notes) of a user in Directory API. */
	export interface UserAbout {

		/** About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text. */
		contentType?: string | null;

		/** Actual value of notes. */
		value?: string | null;
	}

	/** JSON template for About (notes) of a user in Directory API. */
	export interface UserAboutFormProperties {

		/** About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text. */
		contentType: FormControl<string | null | undefined>,

		/** Actual value of notes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserAboutFormGroup() {
		return new FormGroup<UserAboutFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for address. */
	export interface UserAddress {

		/** Country. */
		country?: string | null;

		/** Country code. */
		countryCode?: string | null;

		/** Custom type. */
		customType?: string | null;

		/** Extended Address. */
		extendedAddress?: string | null;

		/** Formatted address. */
		formatted?: string | null;

		/** Locality. */
		locality?: string | null;

		/** Other parts of address. */
		poBox?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** If this is user's primary address. Only one entry could be marked as primary. */
		primary?: boolean | null;

		/** Region. */
		region?: string | null;

		/** User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered. */
		sourceIsStructured?: boolean | null;

		/** Street. */
		streetAddress?: string | null;

		/** Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;
	}

	/** JSON template for address. */
	export interface UserAddressFormProperties {

		/** Country. */
		country: FormControl<string | null | undefined>,

		/** Country code. */
		countryCode: FormControl<string | null | undefined>,

		/** Custom type. */
		customType: FormControl<string | null | undefined>,

		/** Extended Address. */
		extendedAddress: FormControl<string | null | undefined>,

		/** Formatted address. */
		formatted: FormControl<string | null | undefined>,

		/** Locality. */
		locality: FormControl<string | null | undefined>,

		/** Other parts of address. */
		poBox: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** If this is user's primary address. Only one entry could be marked as primary. */
		primary: FormControl<boolean | null | undefined>,

		/** Region. */
		region: FormControl<string | null | undefined>,

		/** User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered. */
		sourceIsStructured: FormControl<boolean | null | undefined>,

		/** Street. */
		streetAddress: FormControl<string | null | undefined>,

		/** Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserAddressFormGroup() {
		return new FormGroup<UserAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			customType: new FormControl<string | null | undefined>(undefined),
			extendedAddress: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			poBox: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			sourceIsStructured: new FormControl<boolean | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Directory API manages aliases, which are alternative email addresses. */
	export interface UserAlias {

		/** The alias email address. */
		alias?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The unique ID for the user. */
		id?: string | null;

		/** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
		kind?: string | null;

		/** The user's primary email address. */
		primaryEmail?: string | null;
	}

	/** The Directory API manages aliases, which are alternative email addresses. */
	export interface UserAliasFormProperties {

		/** The alias email address. */
		alias: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The unique ID for the user. */
		id: FormControl<string | null | undefined>,

		/** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
		kind: FormControl<string | null | undefined>,

		/** The user's primary email address. */
		primaryEmail: FormControl<string | null | undefined>,
	}
	export function CreateUserAliasFormGroup() {
		return new FormGroup<UserAliasFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an email. */
	export interface UserEmail {

		/** Email id of the user. */
		address?: string | null;

		/** Custom Type. */
		customType?: string | null;

		/** If this is user's primary email. Only one entry could be marked as primary. */
		primary?: boolean | null;

		/** Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user. */
		public_key_encryption_certificates?: UserEmailPublic_key_encryption_certificates;

		/** Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;
	}

	/** JSON template for an email. */
	export interface UserEmailFormProperties {

		/** Email id of the user. */
		address: FormControl<string | null | undefined>,

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** If this is user's primary email. Only one entry could be marked as primary. */
		primary: FormControl<boolean | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserEmailFormGroup() {
		return new FormGroup<UserEmailFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			customType: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserEmailPublic_key_encryption_certificates {

		/** X.509 encryption certificate in `PEM` format. Must only be an end-entity (leaf) certificate. */
		certificate?: string | null;

		/** Whether this is the default certificate for the given email address. */
		is_default?: boolean | null;

		/** Denotes the certificate's state in its lifecycle. Possible values are `not_yet_validated`, `valid`, `invalid`, `expired`, and `revoked`. */
		state?: string | null;
	}
	export interface UserEmailPublic_key_encryption_certificatesFormProperties {

		/** X.509 encryption certificate in `PEM` format. Must only be an end-entity (leaf) certificate. */
		certificate: FormControl<string | null | undefined>,

		/** Whether this is the default certificate for the given email address. */
		is_default: FormControl<boolean | null | undefined>,

		/** Denotes the certificate's state in its lifecycle. Possible values are `not_yet_validated`, `valid`, `invalid`, `expired`, and `revoked`. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateUserEmailPublic_key_encryption_certificatesFormGroup() {
		return new FormGroup<UserEmailPublic_key_encryption_certificatesFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an externalId entry. */
	export interface UserExternalId {

		/** Custom type. */
		customType?: string | null;

		/** The type of the Id. */
		type?: string | null;

		/** The value of the id. */
		value?: string | null;
	}

	/** JSON template for an externalId entry. */
	export interface UserExternalIdFormProperties {

		/** Custom type. */
		customType: FormControl<string | null | undefined>,

		/** The type of the Id. */
		type: FormControl<string | null | undefined>,

		/** The value of the id. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserExternalIdFormGroup() {
		return new FormGroup<UserExternalIdFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserGender {

		/** AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their. */
		addressMeAs?: string | null;

		/** Custom gender. */
		customGender?: string | null;

		/** Gender. */
		type?: string | null;
	}
	export interface UserGenderFormProperties {

		/** AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their. */
		addressMeAs: FormControl<string | null | undefined>,

		/** Custom gender. */
		customGender: FormControl<string | null | undefined>,

		/** Gender. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserGenderFormGroup() {
		return new FormGroup<UserGenderFormProperties>({
			addressMeAs: new FormControl<string | null | undefined>(undefined),
			customGender: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for instant messenger of an user. */
	export interface UserIm {

		/** Custom protocol. */
		customProtocol?: string | null;

		/** Custom type. */
		customType?: string | null;

		/** Instant messenger id. */
		im?: string | null;

		/** If this is user's primary im. Only one entry could be marked as primary. */
		primary?: boolean | null;

		/** Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field. */
		protocol?: string | null;

		/** Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;
	}

	/** JSON template for instant messenger of an user. */
	export interface UserImFormProperties {

		/** Custom protocol. */
		customProtocol: FormControl<string | null | undefined>,

		/** Custom type. */
		customType: FormControl<string | null | undefined>,

		/** Instant messenger id. */
		im: FormControl<string | null | undefined>,

		/** If this is user's primary im. Only one entry could be marked as primary. */
		primary: FormControl<boolean | null | undefined>,

		/** Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field. */
		protocol: FormControl<string | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserImFormGroup() {
		return new FormGroup<UserImFormProperties>({
			customProtocol: new FormControl<string | null | undefined>(undefined),
			customType: new FormControl<string | null | undefined>(undefined),
			im: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a keyword entry. */
	export interface UserKeyword {

		/** Custom Type. */
		customType?: string | null;

		/** Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;

		/** Keyword. */
		value?: string | null;
	}

	/** JSON template for a keyword entry. */
	export interface UserKeywordFormProperties {

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,

		/** Keyword. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserKeywordFormGroup() {
		return new FormGroup<UserKeywordFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a language entry. */
	export interface UserLanguage {

		/** Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set. */
		customLanguage?: string | null;

		/** ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set. */
		languageCode?: string | null;

		/** Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`. */
		preference?: string | null;
	}

	/** JSON template for a language entry. */
	export interface UserLanguageFormProperties {

		/** Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set. */
		customLanguage: FormControl<string | null | undefined>,

		/** ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`. */
		preference: FormControl<string | null | undefined>,
	}
	export function CreateUserLanguageFormGroup() {
		return new FormGroup<UserLanguageFormProperties>({
			customLanguage: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			preference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a location entry. */
	export interface UserLocation {

		/** Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.'' */
		area?: string | null;

		/** Building Identifier. */
		buildingId?: string | null;

		/** Custom Type. */
		customType?: string | null;

		/** Most specific textual code of individual desk location. */
		deskCode?: string | null;

		/** Floor name/number. */
		floorName?: string | null;

		/** Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values. */
		floorSection?: string | null;

		/** Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value. */
		type?: string | null;
	}

	/** JSON template for a location entry. */
	export interface UserLocationFormProperties {

		/** Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.'' */
		area: FormControl<string | null | undefined>,

		/** Building Identifier. */
		buildingId: FormControl<string | null | undefined>,

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** Most specific textual code of individual desk location. */
		deskCode: FormControl<string | null | undefined>,

		/** Floor name/number. */
		floorName: FormControl<string | null | undefined>,

		/** Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values. */
		floorSection: FormControl<string | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserLocationFormGroup() {
		return new FormGroup<UserLocationFormProperties>({
			area: new FormControl<string | null | undefined>(undefined),
			buildingId: new FormControl<string | null | undefined>(undefined),
			customType: new FormControl<string | null | undefined>(undefined),
			deskCode: new FormControl<string | null | undefined>(undefined),
			floorName: new FormControl<string | null | undefined>(undefined),
			floorSection: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserMakeAdmin {

		/** Indicates the administrator status of the user. */
		status?: boolean | null;
	}
	export interface UserMakeAdminFormProperties {

		/** Indicates the administrator status of the user. */
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateUserMakeAdminFormGroup() {
		return new FormGroup<UserMakeAdminFormProperties>({
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** JSON template for an organization entry. */
	export interface UserOrganization {

		/** The cost center of the users department. */
		costCenter?: string | null;

		/** Custom type. */
		customType?: string | null;

		/** Department within the organization. */
		department?: string | null;

		/** Description of the organization. */
		description?: string | null;

		/** The domain to which the organization belongs to. */
		domain?: string | null;

		/** The full-time equivalent millipercent within the organization (100000 = 100%). */
		fullTimeEquivalent?: number | null;

		/** Location of the organization. This need not be fully qualified address. */
		location?: string | null;

		/** Name of the organization */
		name?: string | null;

		/** If it user's primary organization. */
		primary?: boolean | null;

		/** Symbol of the organization. */
		symbol?: string | null;

		/** Title (designation) of the user in the organization. */
		title?: string | null;

		/** Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value. */
		type?: string | null;
	}

	/** JSON template for an organization entry. */
	export interface UserOrganizationFormProperties {

		/** The cost center of the users department. */
		costCenter: FormControl<string | null | undefined>,

		/** Custom type. */
		customType: FormControl<string | null | undefined>,

		/** Department within the organization. */
		department: FormControl<string | null | undefined>,

		/** Description of the organization. */
		description: FormControl<string | null | undefined>,

		/** The domain to which the organization belongs to. */
		domain: FormControl<string | null | undefined>,

		/** The full-time equivalent millipercent within the organization (100000 = 100%). */
		fullTimeEquivalent: FormControl<number | null | undefined>,

		/** Location of the organization. This need not be fully qualified address. */
		location: FormControl<string | null | undefined>,

		/** Name of the organization */
		name: FormControl<string | null | undefined>,

		/** If it user's primary organization. */
		primary: FormControl<boolean | null | undefined>,

		/** Symbol of the organization. */
		symbol: FormControl<string | null | undefined>,

		/** Title (designation) of the user in the organization. */
		title: FormControl<string | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserOrganizationFormGroup() {
		return new FormGroup<UserOrganizationFormProperties>({
			costCenter: new FormControl<string | null | undefined>(undefined),
			customType: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			fullTimeEquivalent: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a phone entry. */
	export interface UserPhone {

		/** Custom Type. */
		customType?: string | null;

		/** If this is user's primary phone or not. */
		primary?: boolean | null;

		/** Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;

		/** Phone number. */
		value?: string | null;
	}

	/** JSON template for a phone entry. */
	export interface UserPhoneFormProperties {

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** If this is user's primary phone or not. */
		primary: FormControl<boolean | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,

		/** Phone number. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserPhoneFormGroup() {
		return new FormGroup<UserPhoneFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPhoto {

		/** ETag of the resource. */
		etag?: string | null;

		/** Height of the photo in pixels. */
		height?: number | null;

		/** The ID the API uses to uniquely identify the user. */
		id?: string | null;

		/** The type of the API resource. For Photo resources, this is `admin#directory#user#photo`. */
		kind?: string | null;

		/** The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding. */
		mimeType?: string | null;

		/** The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels. */
		photoData?: string | null;

		/** The user's primary email address. */
		primaryEmail?: string | null;

		/** Width of the photo in pixels. */
		width?: number | null;
	}
	export interface UserPhotoFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Height of the photo in pixels. */
		height: FormControl<number | null | undefined>,

		/** The ID the API uses to uniquely identify the user. */
		id: FormControl<string | null | undefined>,

		/** The type of the API resource. For Photo resources, this is `admin#directory#user#photo`. */
		kind: FormControl<string | null | undefined>,

		/** The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding. */
		mimeType: FormControl<string | null | undefined>,

		/** The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels. */
		photoData: FormControl<string | null | undefined>,

		/** The user's primary email address. */
		primaryEmail: FormControl<string | null | undefined>,

		/** Width of the photo in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateUserPhotoFormGroup() {
		return new FormGroup<UserPhotoFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			photoData: new FormControl<string | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for a POSIX account entry. */
	export interface UserPosixAccount {

		/** A POSIX account field identifier. */
		accountId?: string | null;

		/** The GECOS (user information) for this account. */
		gecos?: string | null;

		/** The default group ID. */
		gid?: string | null;

		/** The path to the home directory for this account. */
		homeDirectory?: string | null;

		/** The operating system type for this account. */
		operatingSystemType?: string | null;

		/** If this is user's primary account within the SystemId. */
		primary?: boolean | null;

		/** The path to the login shell for this account. */
		shell?: string | null;

		/** System identifier for which account Username or Uid apply to. */
		systemId?: string | null;

		/** The POSIX compliant user ID. */
		uid?: string | null;

		/** The username of the account. */
		username?: string | null;
	}

	/** JSON template for a POSIX account entry. */
	export interface UserPosixAccountFormProperties {

		/** A POSIX account field identifier. */
		accountId: FormControl<string | null | undefined>,

		/** The GECOS (user information) for this account. */
		gecos: FormControl<string | null | undefined>,

		/** The default group ID. */
		gid: FormControl<string | null | undefined>,

		/** The path to the home directory for this account. */
		homeDirectory: FormControl<string | null | undefined>,

		/** The operating system type for this account. */
		operatingSystemType: FormControl<string | null | undefined>,

		/** If this is user's primary account within the SystemId. */
		primary: FormControl<boolean | null | undefined>,

		/** The path to the login shell for this account. */
		shell: FormControl<string | null | undefined>,

		/** System identifier for which account Username or Uid apply to. */
		systemId: FormControl<string | null | undefined>,

		/** The POSIX compliant user ID. */
		uid: FormControl<string | null | undefined>,

		/** The username of the account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserPosixAccountFormGroup() {
		return new FormGroup<UserPosixAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			gecos: new FormControl<string | null | undefined>(undefined),
			gid: new FormControl<string | null | undefined>(undefined),
			homeDirectory: new FormControl<string | null | undefined>(undefined),
			operatingSystemType: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			shell: new FormControl<string | null | undefined>(undefined),
			systemId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a relation entry. */
	export interface UserRelation {

		/** Custom Type. */
		customType?: string | null;

		/** The relation of the user. Some of the possible values are mother father sister brother manager assistant partner. */
		type?: string | null;

		/** The name of the relation. */
		value?: string | null;
	}

	/** JSON template for a relation entry. */
	export interface UserRelationFormProperties {

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** The relation of the user. Some of the possible values are mother father sister brother manager assistant partner. */
		type: FormControl<string | null | undefined>,

		/** The name of the relation. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserRelationFormGroup() {
		return new FormGroup<UserRelationFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a POSIX account entry. */
	export interface UserSshPublicKey {

		/** An expiration time in microseconds since epoch. */
		expirationTimeUsec?: string | null;

		/** A SHA-256 fingerprint of the SSH public key. (Read-only) */
		fingerprint?: string | null;

		/** An SSH public key. */
		key?: string | null;
	}

	/** JSON template for a POSIX account entry. */
	export interface UserSshPublicKeyFormProperties {

		/** An expiration time in microseconds since epoch. */
		expirationTimeUsec: FormControl<string | null | undefined>,

		/** A SHA-256 fingerprint of the SSH public key. (Read-only) */
		fingerprint: FormControl<string | null | undefined>,

		/** An SSH public key. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateUserSshPublicKeyFormGroup() {
		return new FormGroup<UserSshPublicKeyFormProperties>({
			expirationTimeUsec: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUndelete {

		/** OrgUnit of User */
		orgUnitPath?: string | null;
	}
	export interface UserUndeleteFormProperties {

		/** OrgUnit of User */
		orgUnitPath: FormControl<string | null | undefined>,
	}
	export function CreateUserUndeleteFormGroup() {
		return new FormGroup<UserUndeleteFormProperties>({
			orgUnitPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a website entry. */
	export interface UserWebsite {

		/** Custom Type. */
		customType?: string | null;

		/** If this is user's primary website or not. */
		primary?: boolean | null;

		/** Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type?: string | null;

		/** Website. */
		value?: string | null;
	}

	/** JSON template for a website entry. */
	export interface UserWebsiteFormProperties {

		/** Custom Type. */
		customType: FormControl<string | null | undefined>,

		/** If this is user's primary website or not. */
		primary: FormControl<boolean | null | undefined>,

		/** Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
		type: FormControl<string | null | undefined>,

		/** Website. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserWebsiteFormGroup() {
		return new FormGroup<UserWebsiteFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users {

		/** ETag of the resource. */
		etag?: string | null;

		/** Kind of resource this is. */
		kind?: string | null;

		/** Token used to access next page of this result. */
		nextPageToken?: string | null;

		/** Event that triggered this response (only used in case of Push Response) */
		trigger_event?: string | null;

		/** A list of user objects. */
		users?: Array<User>;
	}
	export interface UsersFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Kind of resource this is. */
		kind: FormControl<string | null | undefined>,

		/** Token used to access next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Event that triggered this response (only used in case of Push Response) */
		trigger_event: FormControl<string | null | undefined>,
	}
	export function CreateUsersFormGroup() {
		return new FormGroup<UsersFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Directory API allows you to view, generate, and invalidate backup verification codes for a user. */
	export interface VerificationCode {

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of the resource. This is always `admin#directory#verificationCode`. */
		kind?: string | null;

		/** The obfuscated unique ID of the user. */
		userId?: string | null;

		/** A current verification code for the user. Invalidated or used verification codes are not returned as part of the result. */
		verificationCode?: string | null;
	}

	/** The Directory API allows you to view, generate, and invalidate backup verification codes for a user. */
	export interface VerificationCodeFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the resource. This is always `admin#directory#verificationCode`. */
		kind: FormControl<string | null | undefined>,

		/** The obfuscated unique ID of the user. */
		userId: FormControl<string | null | undefined>,

		/** A current verification code for the user. Invalidated or used verification codes are not returned as part of the result. */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateVerificationCodeFormGroup() {
		return new FormGroup<VerificationCodeFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON response template for list verification codes operation in Directory API. */
	export interface VerificationCodes {

		/** ETag of the resource. */
		etag?: string | null;

		/** A list of verification code resources. */
		items?: Array<VerificationCode>;

		/** The type of the resource. This is always `admin#directory#verificationCodesList`. */
		kind?: string | null;
	}

	/** JSON response template for list verification codes operation in Directory API. */
	export interface VerificationCodesFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The type of the resource. This is always `admin#directory#verificationCodesList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateVerificationCodesFormGroup() {
		return new FormGroup<VerificationCodesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a paginated list of Chrome OS devices within an account.
		 * Get admin/directory/v1/customer/{customerId}/devices/chromeos
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {boolean} includeChildOrgunits Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Directory_chromeosdevices_listOrderBy} orderBy Device property to use for sorting results.
		 * @param {string} orgUnitPath The full path of the organizational unit (minus the leading `/`) or its unique ID.
		 * @param {string} pageToken The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.
		 * @param {Directory_chromeosdevices_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} query Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators
		 * @param {Directory_chromeosdevices_listSortOrder} sortOrder Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
		 * @return {ChromeOsDevices} Successful response
		 */
		Directory_chromeosdevices_list(customerId: string, includeChildOrgunits: boolean | null | undefined, maxResults: number | null | undefined, orderBy: Directory_chromeosdevices_listOrderBy | null | undefined, orgUnitPath: string | null | undefined, pageToken: string | null | undefined, projection: Directory_chromeosdevices_listProjection | null | undefined, query: string | null | undefined, sortOrder: Directory_chromeosdevices_listSortOrder | null | undefined): Observable<ChromeOsDevices> {
			return this.http.get<ChromeOsDevices>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos&includeChildOrgunits=' + includeChildOrgunits + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&orgUnitPath=' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
		 * Post admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu
		 * @param {string} customerId Immutable. ID of the Google Workspace account
		 * @param {string} orgUnitPath Full path of the target organizational unit or its ID
		 * @return {void} Successful response
		 */
		Directory_chromeosdevices_moveDevicesToOu(customerId: string, orgUnitPath: string, requestBody: ChromeOsMoveDevicesToOu): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/moveDevicesToOu&orgUnitPath=' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a Chrome OS device's properties.
		 * Get admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} deviceId The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
		 * @param {Directory_chromeosdevices_listProjection} projection Determines whether the response contains the full list of properties or only a subset.
		 * @return {ChromeOsDevice} Successful response
		 */
		Directory_chromeosdevices_get(customerId: string, deviceId: string, projection: Directory_chromeosdevices_listProjection | null | undefined): Observable<ChromeOsDevice> {
			return this.http.get<ChromeOsDevice>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&projection=' + projection, {});
		}

		/**
		 * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
		 * Patch admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} deviceId The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
		 * @param {Directory_chromeosdevices_listProjection} projection Restrict information returned to a set of selected fields.
		 * @return {ChromeOsDevice} Successful response
		 */
		Directory_chromeosdevices_patch(customerId: string, deviceId: string, projection: Directory_chromeosdevices_listProjection | null | undefined, requestBody: ChromeOsDevice): Observable<ChromeOsDevice> {
			return this.http.patch<ChromeOsDevice>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
		 * Put admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} deviceId The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
		 * @param {Directory_chromeosdevices_listProjection} projection Restrict information returned to a set of selected fields.
		 * @return {ChromeOsDevice} Successful response
		 */
		Directory_chromeosdevices_update(customerId: string, deviceId: string, projection: Directory_chromeosdevices_listProjection | null | undefined, requestBody: ChromeOsDevice): Observable<ChromeOsDevice> {
			return this.http.put<ChromeOsDevice>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets command data a specific command issued to the device.
		 * Get admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}
		 * @param {string} customerId Immutable. ID of the Google Workspace account.
		 * @param {string} deviceId Immutable. ID of Chrome OS Device.
		 * @param {string} commandId Immutable. ID of Chrome OS Device Command.
		 * @return {DirectoryChromeosdevicesCommand} Successful response
		 */
		Admin_customer_devices_chromeos_commands_get(customerId: string, deviceId: string, commandId: string): Observable<DirectoryChromeosdevicesCommand> {
			return this.http.get<DirectoryChromeosdevicesCommand>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/commands/' + (commandId == null ? '' : encodeURIComponent(commandId)), {});
		}

		/**
		 * Issues a command for the device to execute.
		 * Post admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand
		 * @param {string} customerId Immutable. ID of the Google Workspace account.
		 * @param {string} deviceId Immutable. ID of Chrome OS Device.
		 * @return {DirectoryChromeosdevicesIssueCommandResponse} Successful response
		 */
		Admin_customer_devices_chromeos_issueCommand(customerId: string, deviceId: string, requestBody: DirectoryChromeosdevicesIssueCommandRequest): Observable<DirectoryChromeosdevicesIssueCommandResponse> {
			return this.http.post<DirectoryChromeosdevicesIssueCommandResponse>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + ':issueCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use [BatchChangeChromeOsDeviceStatus](/admin-sdk/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
		 * Post admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} resourceId The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
		 * @return {void} Successful response
		 */
		Directory_chromeosdevices_action(customerId: string, resourceId: string, requestBody: ChromeOsDeviceAction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/action', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).
		 * Post admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus
		 * @param {string} customerId Required. Immutable ID of the Google Workspace account.
		 * @return {BatchChangeChromeOsDeviceStatusResponse} Successful response
		 */
		Admin_customer_devices_chromeos_batchChangeStatus(customerId: string, requestBody: BatchChangeChromeOsDeviceStatusRequest): Observable<BatchChangeChromeOsDeviceStatusResponse> {
			return this.http.post<BatchChangeChromeOsDeviceStatusResponse>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/chromeos:batchChangeStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
		 * Get admin/directory/v1/customer/{customerId}/devices/mobile
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {number} maxResults Maximum number of results to return. Max allowed value is 100.
		 * @param {Directory_mobiledevices_listOrderBy} orderBy Device property to use for sorting results.
		 * @param {string} pageToken Token to specify next page in the list
		 * @param {Directory_chromeosdevices_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} query Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators
		 * @param {Directory_chromeosdevices_listSortOrder} sortOrder Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
		 * @return {MobileDevices} Successful response
		 */
		Directory_mobiledevices_list(customerId: string, maxResults: number | null | undefined, orderBy: Directory_mobiledevices_listOrderBy | null | undefined, pageToken: string | null | undefined, projection: Directory_chromeosdevices_listProjection | null | undefined, query: string | null | undefined, sortOrder: Directory_chromeosdevices_listSortOrder | null | undefined): Observable<MobileDevices> {
			return this.http.get<MobileDevices>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/mobile&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Removes a mobile device.
		 * Delete admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} resourceId The unique ID the API service uses to identify the mobile device.
		 * @return {void} Successful response
		 */
		Directory_mobiledevices_delete(customerId: string, resourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/mobile/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a mobile device's properties.
		 * Get admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} resourceId The unique ID the API service uses to identify the mobile device.
		 * @param {Directory_chromeosdevices_listProjection} projection Restrict information returned to a set of selected fields.
		 * @return {MobileDevice} Successful response
		 */
		Directory_mobiledevices_get(customerId: string, resourceId: string, projection: Directory_chromeosdevices_listProjection | null | undefined): Observable<MobileDevice> {
			return this.http.get<MobileDevice>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/mobile/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&projection=' + projection, {});
		}

		/**
		 * Takes an action that affects a mobile device. For example, remotely wiping a device.
		 * Post admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} resourceId The unique ID the API service uses to identify the mobile device.
		 * @return {void} Successful response
		 */
		Directory_mobiledevices_action(customerId: string, resourceId: string, requestBody: MobileDeviceAction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/devices/mobile/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/action', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of all organizational units for an account.
		 * Get admin/directory/v1/customer/{customerId}/orgunits
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} orgUnitPath The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.
		 * @param {Directory_orgunits_listType} type Whether to return all sub-organizations or just immediate children.
		 * @return {OrgUnits} Successful response
		 */
		Directory_orgunits_list(customerId: string, orgUnitPath: string | null | undefined, type: Directory_orgunits_listType | null | undefined): Observable<OrgUnits> {
			return this.http.get<OrgUnits>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits&orgUnitPath=' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)) + '&type=' + type, {});
		}

		/**
		 * Adds an organizational unit.
		 * Post admin/directory/v1/customer/{customerId}/orgunits
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @return {OrgUnit} Successful response
		 */
		Directory_orgunits_insert(customerId: string, requestBody: OrgUnit): Observable<OrgUnit> {
			return this.http.post<OrgUnit>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an organizational unit.
		 * Delete admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} orgUnitPath The full path of the organizational unit (minus the leading `/`) or its unique ID.
		 * @return {void} Successful response
		 */
		Directory_orgunits_delete(customerId: string, orgUnitPath: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits/' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an organizational unit.
		 * Get admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} orgUnitPath The full path of the organizational unit (minus the leading `/`) or its unique ID.
		 * @return {OrgUnit} Successful response
		 */
		Directory_orgunits_get(customerId: string, orgUnitPath: string): Observable<OrgUnit> {
			return this.http.get<OrgUnit>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits/' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)), {});
		}

		/**
		 * Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
		 * Patch admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} orgUnitPath The full path of the organizational unit (minus the leading `/`) or its unique ID.
		 * @return {OrgUnit} Successful response
		 */
		Directory_orgunits_patch(customerId: string, orgUnitPath: string, requestBody: OrgUnit): Observable<OrgUnit> {
			return this.http.patch<OrgUnit>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits/' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an organizational unit.
		 * Put admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
		 * @param {string} orgUnitPath The full path of the organizational unit (minus the leading `/`) or its unique ID.
		 * @return {OrgUnit} Successful response
		 */
		Directory_orgunits_update(customerId: string, orgUnitPath: string, requestBody: OrgUnit): Observable<OrgUnit> {
			return this.http.put<OrgUnit>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/orgunits/' + (orgUnitPath == null ? '' : encodeURIComponent(orgUnitPath)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all schemas for a customer.
		 * Get admin/directory/v1/customer/{customerId}/schemas
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @return {Schemas} Successful response
		 */
		Directory_schemas_list(customerId: string): Observable<Schemas> {
			return this.http.get<Schemas>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas', {});
		}

		/**
		 * Creates a schema.
		 * Post admin/directory/v1/customer/{customerId}/schemas
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @return {Schema} Successful response
		 */
		Directory_schemas_insert(customerId: string, requestBody: Schema): Observable<Schema> {
			return this.http.post<Schema>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a schema.
		 * Delete admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @param {string} schemaKey Name or immutable ID of the schema.
		 * @return {void} Successful response
		 */
		Directory_schemas_delete(customerId: string, schemaKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas/' + (schemaKey == null ? '' : encodeURIComponent(schemaKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a schema.
		 * Get admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
		 * @param {string} customerId The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} schemaKey Name or immutable ID of the schema.
		 * @return {Schema} Successful response
		 */
		Directory_schemas_get(customerId: string, schemaKey: string): Observable<Schema> {
			return this.http.get<Schema>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas/' + (schemaKey == null ? '' : encodeURIComponent(schemaKey)), {});
		}

		/**
		 * Patches a schema.
		 * Patch admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @param {string} schemaKey Name or immutable ID of the schema.
		 * @return {Schema} Successful response
		 */
		Directory_schemas_patch(customerId: string, schemaKey: string, requestBody: Schema): Observable<Schema> {
			return this.http.patch<Schema>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas/' + (schemaKey == null ? '' : encodeURIComponent(schemaKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a schema.
		 * Put admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @param {string} schemaKey Name or immutable ID of the schema.
		 * @return {Schema} Successful response
		 */
		Directory_schemas_update(customerId: string, schemaKey: string, requestBody: Schema): Observable<Schema> {
			return this.http.put<Schema>(this.baseUri + 'admin/directory/v1/customer/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/schemas/' + (schemaKey == null ? '' : encodeURIComponent(schemaKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the domain aliases of the customer.
		 * Get admin/directory/v1/customer/{customer}/domainaliases
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} parentDomainName Name of the parent domain for which domain aliases are to be fetched.
		 * @return {DomainAliases} Successful response
		 */
		Directory_domainAliases_list(customer: string, parentDomainName: string | null | undefined): Observable<DomainAliases> {
			return this.http.get<DomainAliases>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domainaliases&parentDomainName=' + (parentDomainName == null ? '' : encodeURIComponent(parentDomainName)), {});
		}

		/**
		 * Inserts a domain alias of the customer.
		 * Post admin/directory/v1/customer/{customer}/domainaliases
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @return {DomainAlias} Successful response
		 */
		Directory_domainAliases_insert(customer: string, requestBody: DomainAlias): Observable<DomainAlias> {
			return this.http.post<DomainAlias>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domainaliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain Alias of the customer.
		 * Delete admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} domainAliasName Name of domain alias to be retrieved.
		 * @return {void} Successful response
		 */
		Directory_domainAliases_delete(customer: string, domainAliasName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domainaliases/' + (domainAliasName == null ? '' : encodeURIComponent(domainAliasName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a domain alias of the customer.
		 * Get admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} domainAliasName Name of domain alias to be retrieved.
		 * @return {DomainAlias} Successful response
		 */
		Directory_domainAliases_get(customer: string, domainAliasName: string): Observable<DomainAlias> {
			return this.http.get<DomainAlias>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domainaliases/' + (domainAliasName == null ? '' : encodeURIComponent(domainAliasName)), {});
		}

		/**
		 * Lists the domains of the customer.
		 * Get admin/directory/v1/customer/{customer}/domains
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @return {Domains2} Successful response
		 */
		Directory_domains_list(customer: string): Observable<Domains2> {
			return this.http.get<Domains2>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domains', {});
		}

		/**
		 * Inserts a domain of the customer.
		 * Post admin/directory/v1/customer/{customer}/domains
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @return {Domains} Successful response
		 */
		Directory_domains_insert(customer: string, requestBody: Domains): Observable<Domains> {
			return this.http.post<Domains>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain of the customer.
		 * Delete admin/directory/v1/customer/{customer}/domains/{domainName}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} domainName Name of domain to be deleted
		 * @return {void} Successful response
		 */
		Directory_domains_delete(customer: string, domainName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a domain of the customer.
		 * Get admin/directory/v1/customer/{customer}/domains/{domainName}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} domainName Name of domain to be retrieved
		 * @return {Domains} Successful response
		 */
		Directory_domains_get(customer: string, domainName: string): Observable<Domains> {
			return this.http.get<Domains>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Retrieves a list of buildings for an account.
		 * Get admin/directory/v1/customer/{customer}/resources/buildings
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @return {Buildings} Successful response
		 */
		Directory_resources_buildings_list(customer: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<Buildings> {
			return this.http.get<Buildings>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a building.
		 * Post admin/directory/v1/customer/{customer}/resources/buildings
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {Directory_resources_buildings_insertCoordinatesSource} coordinatesSource Source from which Building.coordinates are derived.
		 * @return {Building} Successful response
		 */
		Directory_resources_buildings_insert(customer: string, coordinatesSource: Directory_resources_buildings_insertCoordinatesSource | null | undefined, requestBody: Building): Observable<Building> {
			return this.http.post<Building>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings&coordinatesSource=' + coordinatesSource, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a building.
		 * Delete admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} buildingId The id of the building to delete.
		 * @return {void} Successful response
		 */
		Directory_resources_buildings_delete(customer: string, buildingId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings/' + (buildingId == null ? '' : encodeURIComponent(buildingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a building.
		 * Get admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} buildingId The unique ID of the building to retrieve.
		 * @return {Building} Successful response
		 */
		Directory_resources_buildings_get(customer: string, buildingId: string): Observable<Building> {
			return this.http.get<Building>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings/' + (buildingId == null ? '' : encodeURIComponent(buildingId)), {});
		}

		/**
		 * Patches a building.
		 * Patch admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} buildingId The id of the building to update.
		 * @param {Directory_resources_buildings_insertCoordinatesSource} coordinatesSource Source from which Building.coordinates are derived.
		 * @return {Building} Successful response
		 */
		Directory_resources_buildings_patch(customer: string, buildingId: string, coordinatesSource: Directory_resources_buildings_insertCoordinatesSource | null | undefined, requestBody: Building): Observable<Building> {
			return this.http.patch<Building>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings/' + (buildingId == null ? '' : encodeURIComponent(buildingId)) + '&coordinatesSource=' + coordinatesSource, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a building.
		 * Put admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} buildingId The id of the building to update.
		 * @param {Directory_resources_buildings_insertCoordinatesSource} coordinatesSource Source from which Building.coordinates are derived.
		 * @return {Building} Successful response
		 */
		Directory_resources_buildings_update(customer: string, buildingId: string, coordinatesSource: Directory_resources_buildings_insertCoordinatesSource | null | undefined, requestBody: Building): Observable<Building> {
			return this.http.put<Building>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/buildings/' + (buildingId == null ? '' : encodeURIComponent(buildingId)) + '&coordinatesSource=' + coordinatesSource, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of calendar resources for an account.
		 * Get admin/directory/v1/customer/{customer}/resources/calendars
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} orderBy Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @param {string} query String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.
		 * @return {CalendarResources} Successful response
		 */
		Directory_resources_calendars_list(customer: string, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<CalendarResources> {
			return this.http.get<CalendarResources>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Inserts a calendar resource.
		 * Post admin/directory/v1/customer/{customer}/resources/calendars
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @return {CalendarResource} Successful response
		 */
		Directory_resources_calendars_insert(customer: string, requestBody: CalendarResource): Observable<CalendarResource> {
			return this.http.post<CalendarResource>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a calendar resource.
		 * Delete admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} calendarResourceId The unique ID of the calendar resource to delete.
		 * @return {void} Successful response
		 */
		Directory_resources_calendars_delete(customer: string, calendarResourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars/' + (calendarResourceId == null ? '' : encodeURIComponent(calendarResourceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a calendar resource.
		 * Get admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} calendarResourceId The unique ID of the calendar resource to retrieve.
		 * @return {CalendarResource} Successful response
		 */
		Directory_resources_calendars_get(customer: string, calendarResourceId: string): Observable<CalendarResource> {
			return this.http.get<CalendarResource>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars/' + (calendarResourceId == null ? '' : encodeURIComponent(calendarResourceId)), {});
		}

		/**
		 * Patches a calendar resource.
		 * Patch admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} calendarResourceId The unique ID of the calendar resource to update.
		 * @return {CalendarResource} Successful response
		 */
		Directory_resources_calendars_patch(customer: string, calendarResourceId: string, requestBody: CalendarResource): Observable<CalendarResource> {
			return this.http.patch<CalendarResource>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars/' + (calendarResourceId == null ? '' : encodeURIComponent(calendarResourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
		 * Put admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} calendarResourceId The unique ID of the calendar resource to update.
		 * @return {CalendarResource} Successful response
		 */
		Directory_resources_calendars_update(customer: string, calendarResourceId: string, requestBody: CalendarResource): Observable<CalendarResource> {
			return this.http.put<CalendarResource>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/calendars/' + (calendarResourceId == null ? '' : encodeURIComponent(calendarResourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of features for an account.
		 * Get admin/directory/v1/customer/{customer}/resources/features
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @return {Features} Successful response
		 */
		Directory_resources_features_list(customer: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<Features> {
			return this.http.get<Features>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a feature.
		 * Post admin/directory/v1/customer/{customer}/resources/features
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @return {Feature} Successful response
		 */
		Directory_resources_features_insert(customer: string, requestBody: Feature): Observable<Feature> {
			return this.http.post<Feature>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a feature.
		 * Delete admin/directory/v1/customer/{customer}/resources/features/{featureKey}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} featureKey The unique ID of the feature to delete.
		 * @return {void} Successful response
		 */
		Directory_resources_features_delete(customer: string, featureKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features/' + (featureKey == null ? '' : encodeURIComponent(featureKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a feature.
		 * Get admin/directory/v1/customer/{customer}/resources/features/{featureKey}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} featureKey The unique ID of the feature to retrieve.
		 * @return {Feature} Successful response
		 */
		Directory_resources_features_get(customer: string, featureKey: string): Observable<Feature> {
			return this.http.get<Feature>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features/' + (featureKey == null ? '' : encodeURIComponent(featureKey)), {});
		}

		/**
		 * Patches a feature.
		 * Patch admin/directory/v1/customer/{customer}/resources/features/{featureKey}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} featureKey The unique ID of the feature to update.
		 * @return {Feature} Successful response
		 */
		Directory_resources_features_patch(customer: string, featureKey: string, requestBody: Feature): Observable<Feature> {
			return this.http.patch<Feature>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features/' + (featureKey == null ? '' : encodeURIComponent(featureKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a feature.
		 * Put admin/directory/v1/customer/{customer}/resources/features/{featureKey}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} featureKey The unique ID of the feature to update.
		 * @return {Feature} Successful response
		 */
		Directory_resources_features_update(customer: string, featureKey: string, requestBody: Feature): Observable<Feature> {
			return this.http.put<Feature>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features/' + (featureKey == null ? '' : encodeURIComponent(featureKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renames a feature.
		 * Post admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename
		 * @param {string} customer The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
		 * @param {string} oldName The unique ID of the feature to rename.
		 * @return {void} Successful response
		 */
		Directory_resources_features_rename(customer: string, oldName: string, requestBody: FeatureRename): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/resources/features/' + (oldName == null ? '' : encodeURIComponent(oldName)) + '/rename', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of all roleAssignments.
		 * Get admin/directory/v1/customer/{customer}/roleassignments
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {boolean} includeIndirectRoleAssignments When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @param {string} roleId Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
		 * @param {string} userKey The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.
		 * @return {RoleAssignments} Successful response
		 */
		Directory_roleAssignments_list(customer: string, includeIndirectRoleAssignments: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, roleId: string | null | undefined, userKey: string | null | undefined): Observable<RoleAssignments> {
			return this.http.get<RoleAssignments>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roleassignments&includeIndirectRoleAssignments=' + includeIndirectRoleAssignments + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&roleId=' + (roleId == null ? '' : encodeURIComponent(roleId)) + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)), {});
		}

		/**
		 * Creates a role assignment.
		 * Post admin/directory/v1/customer/{customer}/roleassignments
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @return {RoleAssignment} Successful response
		 */
		Directory_roleAssignments_insert(customer: string, requestBody: RoleAssignment): Observable<RoleAssignment> {
			return this.http.post<RoleAssignment>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roleassignments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a role assignment.
		 * Delete admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} roleAssignmentId Immutable ID of the role assignment.
		 * @return {void} Successful response
		 */
		Directory_roleAssignments_delete(customer: string, roleAssignmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roleassignments/' + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a role assignment.
		 * Get admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} roleAssignmentId Immutable ID of the role assignment.
		 * @return {RoleAssignment} Successful response
		 */
		Directory_roleAssignments_get(customer: string, roleAssignmentId: string): Observable<RoleAssignment> {
			return this.http.get<RoleAssignment>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roleassignments/' + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)), {});
		}

		/**
		 * Retrieves a paginated list of all the roles in a domain.
		 * Get admin/directory/v1/customer/{customer}/roles
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @return {Roles} Successful response
		 */
		Directory_roles_list(customer: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<Roles> {
			return this.http.get<Roles>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a role.
		 * Post admin/directory/v1/customer/{customer}/roles
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @return {Role} Successful response
		 */
		Directory_roles_insert(customer: string, requestBody: Role): Observable<Role> {
			return this.http.post<Role>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of all privileges for a customer.
		 * Get admin/directory/v1/customer/{customer}/roles/ALL/privileges
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @return {Privileges} Successful response
		 */
		Directory_privileges_list(customer: string): Observable<Privileges> {
			return this.http.get<Privileges>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles/ALL/privileges', {});
		}

		/**
		 * Deletes a role.
		 * Delete admin/directory/v1/customer/{customer}/roles/{roleId}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} roleId Immutable ID of the role.
		 * @return {void} Successful response
		 */
		Directory_roles_delete(customer: string, roleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles/' + (roleId == null ? '' : encodeURIComponent(roleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a role.
		 * Get admin/directory/v1/customer/{customer}/roles/{roleId}
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} roleId Immutable ID of the role.
		 * @return {Role} Successful response
		 */
		Directory_roles_get(customer: string, roleId: string): Observable<Role> {
			return this.http.get<Role>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles/' + (roleId == null ? '' : encodeURIComponent(roleId)), {});
		}

		/**
		 * Patches a role.
		 * Patch admin/directory/v1/customer/{customer}/roles/{roleId}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} roleId Immutable ID of the role.
		 * @return {Role} Successful response
		 */
		Directory_roles_patch(customer: string, roleId: string, requestBody: Role): Observable<Role> {
			return this.http.patch<Role>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles/' + (roleId == null ? '' : encodeURIComponent(roleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a role.
		 * Put admin/directory/v1/customer/{customer}/roles/{roleId}
		 * @param {string} customer Immutable ID of the Google Workspace account.
		 * @param {string} roleId Immutable ID of the role.
		 * @return {Role} Successful response
		 */
		Directory_roles_update(customer: string, roleId: string, requestBody: Role): Observable<Role> {
			return this.http.put<Role>(this.baseUri + 'admin/directory/v1/customer/' + (customer == null ? '' : encodeURIComponent(customer)) + '/roles/' + (roleId == null ? '' : encodeURIComponent(roleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a customer.
		 * Get admin/directory/v1/customers/{customerKey}
		 * @param {string} customerKey Id of the customer to be retrieved
		 * @return {Customer} Successful response
		 */
		Directory_customers_get(customerKey: string): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'admin/directory/v1/customers/' + (customerKey == null ? '' : encodeURIComponent(customerKey)), {});
		}

		/**
		 * Patches a customer.
		 * Patch admin/directory/v1/customers/{customerKey}
		 * @param {string} customerKey Id of the customer to be updated
		 * @return {Customer} Successful response
		 */
		Directory_customers_patch(customerKey: string, requestBody: Customer): Observable<Customer> {
			return this.http.patch<Customer>(this.baseUri + 'admin/directory/v1/customers/' + (customerKey == null ? '' : encodeURIComponent(customerKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a customer.
		 * Put admin/directory/v1/customers/{customerKey}
		 * @param {string} customerKey Id of the customer to be updated
		 * @return {Customer} Successful response
		 */
		Directory_customers_update(customerKey: string, requestBody: Customer): Observable<Customer> {
			return this.http.put<Customer>(this.baseUri + 'admin/directory/v1/customers/' + (customerKey == null ? '' : encodeURIComponent(customerKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all groups of a domain or of a user given a userKey (paginated).
		 * Get admin/directory/v1/groups
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} domain The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.
		 * @param {number} maxResults Maximum number of results to return. Max allowed value is 200.
		 * @param {Directory_groups_listOrderBy} orderBy Column to use for sorting results
		 * @param {string} pageToken Token to specify next page in the list
		 * @param {string} query Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups
		 * @param {Directory_chromeosdevices_listSortOrder} sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
		 * @param {string} userKey Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.
		 * @return {Groups} Successful response
		 */
		Directory_groups_list(customer: string | null | undefined, domain: string | null | undefined, maxResults: number | null | undefined, orderBy: Directory_groups_listOrderBy | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, sortOrder: Directory_chromeosdevices_listSortOrder | null | undefined, userKey: string | null | undefined): Observable<Groups> {
			return this.http.get<Groups>(this.baseUri + 'admin/directory/v1/groups?customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sortOrder=' + sortOrder + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)), {});
		}

		/**
		 * Creates a group.
		 * Post admin/directory/v1/groups
		 * @return {Group} Successful response
		 */
		Directory_groups_insert(requestBody: Group): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'admin/directory/v1/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group.
		 * Delete admin/directory/v1/groups/{groupKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {void} Successful response
		 */
		Directory_groups_delete(groupKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a group's properties.
		 * Get admin/directory/v1/groups/{groupKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Group} Successful response
		 */
		Directory_groups_get(groupKey: string): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)), {});
		}

		/**
		 * Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
		 * Patch admin/directory/v1/groups/{groupKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Group} Successful response
		 */
		Directory_groups_patch(groupKey: string, requestBody: Group): Observable<Group> {
			return this.http.patch<Group>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a group's properties.
		 * Put admin/directory/v1/groups/{groupKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Group} Successful response
		 */
		Directory_groups_update(groupKey: string, requestBody: Group): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all aliases for a group.
		 * Get admin/directory/v1/groups/{groupKey}/aliases
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Aliases} Successful response
		 */
		Directory_groups_aliases_list(groupKey: string): Observable<Aliases> {
			return this.http.get<Aliases>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/aliases', {});
		}

		/**
		 * Adds an alias for the group.
		 * Post admin/directory/v1/groups/{groupKey}/aliases
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Alias} Successful response
		 */
		Directory_groups_aliases_insert(groupKey: string, requestBody: Alias): Observable<Alias> {
			return this.http.post<Alias>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/aliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an alias.
		 * Delete admin/directory/v1/groups/{groupKey}/aliases/{alias}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} alias The alias to be removed
		 * @return {void} Successful response
		 */
		Directory_groups_aliases_delete(groupKey: string, alias: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/aliases/' + (alias == null ? '' : encodeURIComponent(alias)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
		 * Get admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} memberKey Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
		 * @return {MembersHasMember} Successful response
		 */
		Directory_members_hasMember(groupKey: string, memberKey: string): Observable<MembersHasMember> {
			return this.http.get<MembersHasMember>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/hasMember/' + (memberKey == null ? '' : encodeURIComponent(memberKey)), {});
		}

		/**
		 * Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
		 * Get admin/directory/v1/groups/{groupKey}/members
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {boolean} includeDerivedMembership Whether to list indirect memberships. Default: false.
		 * @param {number} maxResults Maximum number of results to return. Max allowed value is 200.
		 * @param {string} pageToken Token to specify next page in the list.
		 * @param {string} roles The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.
		 * @return {Members} Successful response
		 */
		Directory_members_list(groupKey: string, includeDerivedMembership: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, roles: string | null | undefined): Observable<Members> {
			return this.http.get<Members>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members&includeDerivedMembership=' + includeDerivedMembership + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&roles=' + (roles == null ? '' : encodeURIComponent(roles)), {});
		}

		/**
		 * Adds a user to the specified group.
		 * Post admin/directory/v1/groups/{groupKey}/members
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @return {Member} Successful response
		 */
		Directory_members_insert(groupKey: string, requestBody: Member): Observable<Member> {
			return this.http.post<Member>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a member from a group.
		 * Delete admin/directory/v1/groups/{groupKey}/members/{memberKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} memberKey Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
		 * @return {void} Successful response
		 */
		Directory_members_delete(groupKey: string, memberKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members/' + (memberKey == null ? '' : encodeURIComponent(memberKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a group member's properties.
		 * Get admin/directory/v1/groups/{groupKey}/members/{memberKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} memberKey Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
		 * @return {Member} Successful response
		 */
		Directory_members_get(groupKey: string, memberKey: string): Observable<Member> {
			return this.http.get<Member>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members/' + (memberKey == null ? '' : encodeURIComponent(memberKey)), {});
		}

		/**
		 * Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
		 * Patch admin/directory/v1/groups/{groupKey}/members/{memberKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} memberKey Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
		 * @return {Member} Successful response
		 */
		Directory_members_patch(groupKey: string, memberKey: string, requestBody: Member): Observable<Member> {
			return this.http.patch<Member>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members/' + (memberKey == null ? '' : encodeURIComponent(memberKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the membership of a user in the specified group.
		 * Put admin/directory/v1/groups/{groupKey}/members/{memberKey}
		 * @param {string} groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
		 * @param {string} memberKey Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
		 * @return {Member} Successful response
		 */
		Directory_members_update(groupKey: string, memberKey: string, requestBody: Member): Observable<Member> {
			return this.http.put<Member>(this.baseUri + 'admin/directory/v1/groups/' + (groupKey == null ? '' : encodeURIComponent(groupKey)) + '/members/' + (memberKey == null ? '' : encodeURIComponent(memberKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of either deleted users or all users in a domain.
		 * Get admin/directory/v1/users
		 * @param {string} customFieldMask A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
		 * @param {string} customer The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
		 * @param {string} domain The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.
		 * @param {Directory_users_listEvent} _event Event on which subscription is intended (if subscribing)
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Directory_users_listOrderBy} orderBy Property to use for sorting results.
		 * @param {string} pageToken Token to specify next page in the list
		 * @param {Directory_users_listProjection} projection What subset of fields to fetch for this user.
		 * @param {string} query Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).
		 * @param {string} showDeleted If set to `true`, retrieves the list of deleted users. (Default: `false`)
		 * @param {Directory_chromeosdevices_listSortOrder} sortOrder Whether to return results in ascending or descending order, ignoring case.
		 * @param {Directory_users_listViewType} viewType Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
		 * @return {Users} Successful response
		 */
		Directory_users_list(customFieldMask: string | null | undefined, customer: string | null | undefined, domain: string | null | undefined, _event: Directory_users_listEvent | null | undefined, maxResults: number | null | undefined, orderBy: Directory_users_listOrderBy | null | undefined, pageToken: string | null | undefined, projection: Directory_users_listProjection | null | undefined, query: string | null | undefined, showDeleted: string | null | undefined, sortOrder: Directory_chromeosdevices_listSortOrder | null | undefined, viewType: Directory_users_listViewType | null | undefined): Observable<Users> {
			return this.http.get<Users>(this.baseUri + 'admin/directory/v1/users?customFieldMask=' + (customFieldMask == null ? '' : encodeURIComponent(customFieldMask)) + '&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&_event=' + _event + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&showDeleted=' + (showDeleted == null ? '' : encodeURIComponent(showDeleted)) + '&sortOrder=' + sortOrder + '&viewType=' + viewType, {});
		}

		/**
		 * Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case.
		 * Post admin/directory/v1/users
		 * @param {boolean} resolveConflictAccount Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`
		 * @return {User} Successful response
		 */
		Directory_users_insert(resolveConflictAccount: boolean | null | undefined, requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'admin/directory/v1/users?resolveConflictAccount=' + resolveConflictAccount, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watches for changes in users list.
		 * Post admin/directory/v1/users/watch
		 * @param {string} customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
		 * @param {string} customer Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
		 * @param {string} domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
		 * @param {Directory_users_listEvent} _event Events to watch for.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Directory_users_listOrderBy} orderBy Column to use for sorting results
		 * @param {string} pageToken Token to specify next page in the list
		 * @param {Directory_users_listProjection} projection What subset of fields to fetch for this user.
		 * @param {string} query Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
		 * @param {string} showDeleted If set to true, retrieves the list of deleted users. (Default: false)
		 * @param {Directory_chromeosdevices_listSortOrder} sortOrder Whether to return results in ascending or descending order.
		 * @param {Directory_users_listViewType} viewType Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
		 * @return {Channel} Successful response
		 */
		Directory_users_watch(customFieldMask: string | null | undefined, customer: string | null | undefined, domain: string | null | undefined, _event: Directory_users_listEvent | null | undefined, maxResults: number | null | undefined, orderBy: Directory_users_listOrderBy | null | undefined, pageToken: string | null | undefined, projection: Directory_users_listProjection | null | undefined, query: string | null | undefined, showDeleted: string | null | undefined, sortOrder: Directory_chromeosdevices_listSortOrder | null | undefined, viewType: Directory_users_listViewType | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'admin/directory/v1/users/watch?customFieldMask=' + (customFieldMask == null ? '' : encodeURIComponent(customFieldMask)) + '&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&_event=' + _event + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&showDeleted=' + (showDeleted == null ? '' : encodeURIComponent(showDeleted)) + '&sortOrder=' + sortOrder + '&viewType=' + viewType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user.
		 * Delete admin/directory/v1/users/{userKey}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {void} Successful response
		 */
		Directory_users_delete(userKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a user.
		 * Get admin/directory/v1/users/{userKey}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {string} customFieldMask A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
		 * @param {Directory_users_listProjection} projection What subset of fields to fetch for this user.
		 * @param {Directory_users_listViewType} viewType Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
		 * @return {User} Successful response
		 */
		Directory_users_get(userKey: string, customFieldMask: string | null | undefined, projection: Directory_users_listProjection | null | undefined, viewType: Directory_users_listViewType | null | undefined): Observable<User> {
			return this.http.get<User>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '&customFieldMask=' + (customFieldMask == null ? '' : encodeURIComponent(customFieldMask)) + '&projection=' + projection + '&viewType=' + viewType, {});
		}

		/**
		 * Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
		 * Patch admin/directory/v1/users/{userKey}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {User} Successful response
		 */
		Directory_users_patch(userKey: string, requestBody: User): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
		 * Put admin/directory/v1/users/{userKey}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {User} Successful response
		 */
		Directory_users_update(userKey: string, requestBody: User): Observable<User> {
			return this.http.put<User>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all aliases for a user.
		 * Get admin/directory/v1/users/{userKey}/aliases
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {Directory_users_aliases_listEvent} _event Events to watch for.
		 * @return {Aliases} Successful response
		 */
		Directory_users_aliases_list(userKey: string, _event: Directory_users_aliases_listEvent | null | undefined): Observable<Aliases> {
			return this.http.get<Aliases>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/aliases&_event=' + _event, {});
		}

		/**
		 * Adds an alias.
		 * Post admin/directory/v1/users/{userKey}/aliases
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {Alias} Successful response
		 */
		Directory_users_aliases_insert(userKey: string, requestBody: Alias): Observable<Alias> {
			return this.http.post<Alias>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/aliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watches for changes in users list.
		 * Post admin/directory/v1/users/{userKey}/aliases/watch
		 * @param {string} userKey Email or immutable ID of the user
		 * @param {Directory_users_aliases_listEvent} _event Events to watch for.
		 * @return {Channel} Successful response
		 */
		Directory_users_aliases_watch(userKey: string, _event: Directory_users_aliases_listEvent | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/aliases/watch&_event=' + _event, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an alias.
		 * Delete admin/directory/v1/users/{userKey}/aliases/{alias}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {string} alias The alias to be removed.
		 * @return {void} Successful response
		 */
		Directory_users_aliases_delete(userKey: string, alias: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/aliases/' + (alias == null ? '' : encodeURIComponent(alias)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the ASPs issued by a user.
		 * Get admin/directory/v1/users/{userKey}/asps
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {Asps} Successful response
		 */
		Directory_asps_list(userKey: string): Observable<Asps> {
			return this.http.get<Asps>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/asps', {});
		}

		/**
		 * Deletes an ASP issued by a user.
		 * Delete admin/directory/v1/users/{userKey}/asps/{codeId}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {number} codeId The unique ID of the ASP to be deleted.
		 * @return {void} Successful response
		 */
		Directory_asps_delete(userKey: string, codeId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/asps/' + codeId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about an ASP issued by a user.
		 * Get admin/directory/v1/users/{userKey}/asps/{codeId}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {number} codeId The unique ID of the ASP.
		 * @return {Asp} Successful response
		 */
		Directory_asps_get(userKey: string, codeId: number): Observable<Asp> {
			return this.http.get<Asp>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/asps/' + codeId, {});
		}

		/**
		 * Makes a user a super administrator.
		 * Post admin/directory/v1/users/{userKey}/makeAdmin
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {void} Successful response
		 */
		Directory_users_makeAdmin(userKey: string, requestBody: UserMakeAdmin): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/makeAdmin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the user's photo.
		 * Delete admin/directory/v1/users/{userKey}/photos/thumbnail
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {void} Successful response
		 */
		Directory_users_photos_delete(userKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/photos/thumbnail', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the user's photo.
		 * Get admin/directory/v1/users/{userKey}/photos/thumbnail
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {UserPhoto} Successful response
		 */
		Directory_users_photos_get(userKey: string): Observable<UserPhoto> {
			return this.http.get<UserPhoto>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/photos/thumbnail', {});
		}

		/**
		 * Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
		 * Patch admin/directory/v1/users/{userKey}/photos/thumbnail
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {UserPhoto} Successful response
		 */
		Directory_users_photos_patch(userKey: string, requestBody: UserPhoto): Observable<UserPhoto> {
			return this.http.patch<UserPhoto>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/photos/thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a photo for the user.
		 * Put admin/directory/v1/users/{userKey}/photos/thumbnail
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {UserPhoto} Successful response
		 */
		Directory_users_photos_update(userKey: string, requestBody: UserPhoto): Observable<UserPhoto> {
			return this.http.put<UserPhoto>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/photos/thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
		 * Post admin/directory/v1/users/{userKey}/signOut
		 * @param {string} userKey Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {void} Successful response
		 */
		Directory_users_signOut(userKey: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/signOut', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the set of tokens specified user has issued to 3rd party applications.
		 * Get admin/directory/v1/users/{userKey}/tokens
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {Tokens} Successful response
		 */
		Directory_tokens_list(userKey: string): Observable<Tokens> {
			return this.http.get<Tokens>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/tokens', {});
		}

		/**
		 * Deletes all access tokens issued by a user for an application.
		 * Delete admin/directory/v1/users/{userKey}/tokens/{clientId}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {string} clientId The Client ID of the application the token is issued to.
		 * @return {void} Successful response
		 */
		Directory_tokens_delete(userKey: string, clientId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/tokens/' + (clientId == null ? '' : encodeURIComponent(clientId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about an access token issued by a user.
		 * Get admin/directory/v1/users/{userKey}/tokens/{clientId}
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @param {string} clientId The Client ID of the application the token is issued to.
		 * @return {Token} Successful response
		 */
		Directory_tokens_get(userKey: string, clientId: string): Observable<Token> {
			return this.http.get<Token>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/tokens/' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * Turns off 2-Step Verification for user.
		 * Post admin/directory/v1/users/{userKey}/twoStepVerification/turnOff
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {void} Successful response
		 */
		Directory_twoStepVerification_turnOff(userKey: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/twoStepVerification/turnOff', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Undeletes a deleted user.
		 * Post admin/directory/v1/users/{userKey}/undelete
		 * @param {string} userKey The immutable id of the user
		 * @return {void} Successful response
		 */
		Directory_users_undelete(userKey: string, requestBody: UserUndelete): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the current set of valid backup verification codes for the specified user.
		 * Get admin/directory/v1/users/{userKey}/verificationCodes
		 * @param {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
		 * @return {VerificationCodes} Successful response
		 */
		Directory_verificationCodes_list(userKey: string): Observable<VerificationCodes> {
			return this.http.get<VerificationCodes>(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/verificationCodes', {});
		}

		/**
		 * Generates new backup verification codes for the user.
		 * Post admin/directory/v1/users/{userKey}/verificationCodes/generate
		 * @param {string} userKey Email or immutable ID of the user
		 * @return {void} Successful response
		 */
		Directory_verificationCodes_generate(userKey: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/verificationCodes/generate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Invalidates the current backup verification codes for the user.
		 * Post admin/directory/v1/users/{userKey}/verificationCodes/invalidate
		 * @param {string} userKey Email or immutable ID of the user
		 * @return {void} Successful response
		 */
		Directory_verificationCodes_invalidate(userKey: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory/v1/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/verificationCodes/invalidate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a print server.
		 * Delete admin/directory/v1/{name}
		 * @param {string} name Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}`
		 * @return {Empty} Successful response
		 */
		Admin_customers_chrome_printServers_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'admin/directory/v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns a print server's configuration.
		 * Get admin/directory/v1/{name}
		 * @param {string} name Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
		 * @return {PrintServer} Successful response
		 */
		Admin_customers_chrome_printServers_get(name: string): Observable<PrintServer> {
			return this.http.get<PrintServer>(this.baseUri + 'admin/directory/v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a print server's configuration.
		 * Patch admin/directory/v1/{name}
		 * @param {string} name Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
		 * @param {string} updateMask The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.
		 * @return {PrintServer} Successful response
		 */
		Admin_customers_chrome_printServers_patch(name: string, updateMask: string | null | undefined, requestBody: PrintServer): Observable<PrintServer> {
			return this.http.patch<PrintServer>(this.baseUri + 'admin/directory/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists print server configurations.
		 * Get admin/directory/v1/{parent}/chrome/printServers
		 * @param {string} parent Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
		 * @param {string} filter Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.
		 * @param {string} orderBy Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order.
		 * @param {string} orgUnitId If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.
		 * @param {number} pageSize The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.
		 * @param {string} pageToken A generated token to paginate results (the `next_page_token` from a previous call).
		 * @return {ListPrintServersResponse} Successful response
		 */
		Admin_customers_chrome_printServers_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrintServersResponse> {
			return this.http.get<ListPrintServersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printServers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a print server.
		 * Post admin/directory/v1/{parent}/chrome/printServers
		 * @param {string} parent Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
		 * @return {PrintServer} Successful response
		 */
		Admin_customers_chrome_printServers_create(parent: string, requestBody: PrintServer): Observable<PrintServer> {
			return this.http.post<PrintServer>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates multiple print servers.
		 * Post admin/directory/v1/{parent}/chrome/printServers:batchCreatePrintServers
		 * @param {string} parent Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
		 * @return {BatchCreatePrintServersResponse} Successful response
		 */
		Admin_customers_chrome_printServers_batchCreatePrintServers(parent: string, requestBody: BatchCreatePrintServersRequest): Observable<BatchCreatePrintServersResponse> {
			return this.http.post<BatchCreatePrintServersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printServers:batchCreatePrintServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes multiple print servers.
		 * Post admin/directory/v1/{parent}/chrome/printServers:batchDeletePrintServers
		 * @param {string} parent Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}`
		 * @return {BatchDeletePrintServersResponse} Successful response
		 */
		Admin_customers_chrome_printServers_batchDeletePrintServers(parent: string, requestBody: BatchDeletePrintServersRequest): Observable<BatchDeletePrintServersResponse> {
			return this.http.post<BatchDeletePrintServersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printServers:batchDeletePrintServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List printers configs.
		 * Get admin/directory/v1/{parent}/chrome/printers
		 * @param {string} parent Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
		 * @param {string} filter Search query. Search syntax is shared between this api and Admin Console printers pages.
		 * @param {string} orderBy The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.
		 * @param {string} orgUnitId Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.
		 * @param {number} pageSize The maximum number of objects to return. The service may return fewer than this value.
		 * @param {string} pageToken A page token, received from a previous call.
		 * @return {ListPrintersResponse} Successful response
		 */
		Admin_customers_chrome_printers_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrintersResponse> {
			return this.http.get<ListPrintersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a printer under given Organization Unit.
		 * Post admin/directory/v1/{parent}/chrome/printers
		 * @param {string} parent Required. The name of the customer. Format: customers/{customer_id}
		 * @return {Printer} Successful response
		 */
		Admin_customers_chrome_printers_create(parent: string, requestBody: Printer): Observable<Printer> {
			return this.http.post<Printer>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates printers under given Organization Unit.
		 * Post admin/directory/v1/{parent}/chrome/printers:batchCreatePrinters
		 * @param {string} parent Required. The name of the customer. Format: customers/{customer_id}
		 * @return {BatchCreatePrintersResponse} Successful response
		 */
		Admin_customers_chrome_printers_batchCreatePrinters(parent: string, requestBody: BatchCreatePrintersRequest): Observable<BatchCreatePrintersResponse> {
			return this.http.post<BatchCreatePrintersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printers:batchCreatePrinters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes printers in batch.
		 * Post admin/directory/v1/{parent}/chrome/printers:batchDeletePrinters
		 * @param {string} parent Required. The name of the customer. Format: customers/{customer_id}
		 * @return {BatchDeletePrintersResponse} Successful response
		 */
		Admin_customers_chrome_printers_batchDeletePrinters(parent: string, requestBody: BatchDeletePrintersRequest): Observable<BatchDeletePrintersResponse> {
			return this.http.post<BatchDeletePrintersResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printers:batchDeletePrinters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the supported printer models.
		 * Get admin/directory/v1/{parent}/chrome/printers:listPrinterModels
		 * @param {string} parent Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
		 * @param {string} filter Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.
		 * @param {number} pageSize The maximum number of objects to return. The service may return fewer than this value.
		 * @param {string} pageToken A page token, received from a previous call.
		 * @return {ListPrinterModelsResponse} Successful response
		 */
		Admin_customers_chrome_printers_listPrinterModels(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrinterModelsResponse> {
			return this.http.get<ListPrinterModelsResponse>(this.baseUri + 'admin/directory/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/chrome/printers:listPrinterModels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Stops watching resources through this channel.
		 * Post admin/directory_v1/channels/stop
		 * @return {void} Successful response
		 */
		Admin_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/directory_v1/channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Directory_chromeosdevices_listOrderBy { annotatedLocation = 0, annotatedUser = 1, lastSync = 2, notes = 3, serialNumber = 4, status = 5 }

	export enum Directory_chromeosdevices_listProjection { BASIC = 0, FULL = 1 }

	export enum Directory_chromeosdevices_listSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum Directory_mobiledevices_listOrderBy { deviceId = 0, email = 1, lastSync = 2, model = 3, name = 4, os = 5, status = 6, type = 7 }

	export enum Directory_orgunits_listType { all = 0, children = 1, allIncludingParent = 2 }

	export enum Directory_resources_buildings_insertCoordinatesSource { CLIENT_SPECIFIED = 0, RESOLVED_FROM_ADDRESS = 1, SOURCE_UNSPECIFIED = 2 }

	export enum Directory_groups_listOrderBy { email = 0 }

	export enum Directory_users_listEvent { add = 0, delete = 1, makeAdmin = 2, undelete = 3, update = 4 }

	export enum Directory_users_listOrderBy { email = 0, familyName = 1, givenName = 2 }

	export enum Directory_users_listProjection { basic = 0, custom = 1, full = 2 }

	export enum Directory_users_listViewType { admin_view = 0, domain_public = 1 }

	export enum Directory_users_aliases_listEvent { add = 0, delete = 1 }

}

