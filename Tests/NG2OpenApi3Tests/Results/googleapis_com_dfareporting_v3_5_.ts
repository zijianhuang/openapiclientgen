import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Creative Click Tag. */
	export interface ClickTag {

		/** Click-through URL */
		clickThroughUrl?: CreativeClickThroughUrl;

		/** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		eventName?: string | null;

		/** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
		name?: string | null;
	}

	/** Creative Click Tag. */
	export interface ClickTagFormProperties {

		/** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		eventName: FormControl<string | null | undefined>,

		/** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClickTagFormGroup() {
		return new FormGroup<ClickTagFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Click-through URL */
	export interface CreativeClickThroughUrl {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl?: string | null;

		/** Custom click-through URL. Applicable if the landingPageId field is left unset. */
		customClickThroughUrl?: string | null;

		/** ID of the landing page for the click-through URL. */
		landingPageId?: string | null;
	}

	/** Click-through URL */
	export interface CreativeClickThroughUrlFormProperties {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl: FormControl<string | null | undefined>,

		/** Custom click-through URL. Applicable if the landingPageId field is left unset. */
		customClickThroughUrl: FormControl<string | null | undefined>,

		/** ID of the landing page for the click-through URL. */
		landingPageId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeClickThroughUrlFormGroup() {
		return new FormGroup<CreativeClickThroughUrlFormProperties>({
			computedClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			customClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			landingPageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Asset ID. */
	export interface CreativeAssetId {

		/** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
		name?: string | null;

		/** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
		type?: CreativeAssetIdType | null;
	}

	/** Creative Asset ID. */
	export interface CreativeAssetIdFormProperties {

		/** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
		name: FormControl<string | null | undefined>,

		/** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
		type: FormControl<CreativeAssetIdType | null | undefined>,
	}
	export function CreateCreativeAssetIdFormGroup() {
		return new FormGroup<CreativeAssetIdFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreativeAssetIdType | null | undefined>(undefined),
		});

	}

	export enum CreativeAssetIdType { IMAGE = 'IMAGE', FLASH = 'FLASH', VIDEO = 'VIDEO', HTML = 'HTML', HTML_IMAGE = 'HTML_IMAGE', AUDIO = 'AUDIO' }


	/** CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative. */
	export interface CreativeAssetMetadata {

		/** Creative Asset ID. */
		assetIdentifier?: CreativeAssetId;

		/** List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. */
		clickTags?: Array<ClickTag>;

		/** List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		counterCustomEvents?: Array<CreativeCustomEvent>;

		/** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. */
		detectedFeatures?: Array<string>;

		/** List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		exitCustomEvents?: Array<CreativeCustomEvent>;

		/** Numeric ID of the asset. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
		kind?: string | null;

		/** Extra information added to operations that support Scotty media requests. */
		mediaRequestInfo?: MediaRequestInfo;

		/** This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 } */
		mediaResponseInfo?: MediaResponseInfo;

		/** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
		richMedia?: boolean | null;

		/** List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		timerCustomEvents?: Array<CreativeCustomEvent>;

		/** Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID" */
		warnedValidationRules?: Array<string>;
	}

	/** CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative. */
	export interface CreativeAssetMetadataFormProperties {

		/** Numeric ID of the asset. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
		kind: FormControl<string | null | undefined>,

		/** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
		richMedia: FormControl<boolean | null | undefined>,
	}
	export function CreateCreativeAssetMetadataFormGroup() {
		return new FormGroup<CreativeAssetMetadataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			richMedia: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Creative Custom Event. */
	export interface CreativeCustomEvent {

		/** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
		advertiserCustomEventId?: string | null;

		/** User-entered name for the event. */
		advertiserCustomEventName?: string | null;

		/** Type of the event. This is a read-only field. */
		advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventType | null;

		/** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
		artworkLabel?: string | null;

		/** Artwork type used by the creative.This is a read-only field. */
		artworkType?: CreativeCustomEventArtworkType | null;

		/** Click-through URL */
		exitClickThroughUrl?: CreativeClickThroughUrl;

		/** ID of this event. This is a required field and should not be modified after insertion. */
		id?: string | null;

		/** Popup Window Properties. */
		popupWindowProperties?: PopupWindowProperties;

		/** Target type used by the event. */
		targetType?: CreativeCustomEventTargetType | null;

		/** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
		videoReportingId?: string | null;
	}

	/** Creative Custom Event. */
	export interface CreativeCustomEventFormProperties {

		/** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
		advertiserCustomEventId: FormControl<string | null | undefined>,

		/** User-entered name for the event. */
		advertiserCustomEventName: FormControl<string | null | undefined>,

		/** Type of the event. This is a read-only field. */
		advertiserCustomEventType: FormControl<CreativeCustomEventAdvertiserCustomEventType | null | undefined>,

		/** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
		artworkLabel: FormControl<string | null | undefined>,

		/** Artwork type used by the creative.This is a read-only field. */
		artworkType: FormControl<CreativeCustomEventArtworkType | null | undefined>,

		/** ID of this event. This is a required field and should not be modified after insertion. */
		id: FormControl<string | null | undefined>,

		/** Target type used by the event. */
		targetType: FormControl<CreativeCustomEventTargetType | null | undefined>,

		/** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
		videoReportingId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeCustomEventFormGroup() {
		return new FormGroup<CreativeCustomEventFormProperties>({
			advertiserCustomEventId: new FormControl<string | null | undefined>(undefined),
			advertiserCustomEventName: new FormControl<string | null | undefined>(undefined),
			advertiserCustomEventType: new FormControl<CreativeCustomEventAdvertiserCustomEventType | null | undefined>(undefined),
			artworkLabel: new FormControl<string | null | undefined>(undefined),
			artworkType: new FormControl<CreativeCustomEventArtworkType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<CreativeCustomEventTargetType | null | undefined>(undefined),
			videoReportingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreativeCustomEventAdvertiserCustomEventType { ADVERTISER_EVENT_TIMER = 'ADVERTISER_EVENT_TIMER', ADVERTISER_EVENT_EXIT = 'ADVERTISER_EVENT_EXIT', ADVERTISER_EVENT_COUNTER = 'ADVERTISER_EVENT_COUNTER' }

	export enum CreativeCustomEventArtworkType { ARTWORK_TYPE_FLASH = 'ARTWORK_TYPE_FLASH', ARTWORK_TYPE_HTML5 = 'ARTWORK_TYPE_HTML5', ARTWORK_TYPE_MIXED = 'ARTWORK_TYPE_MIXED', ARTWORK_TYPE_IMAGE = 'ARTWORK_TYPE_IMAGE' }


	/** Popup Window Properties. */
	export interface PopupWindowProperties {

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		dimension?: Size;

		/** Offset Position. */
		offset?: OffsetPosition;

		/** Popup window position either centered or at specific coordinate. */
		positionType?: PopupWindowPropertiesPositionType | null;

		/** Whether to display the browser address bar. */
		showAddressBar?: boolean | null;

		/** Whether to display the browser menu bar. */
		showMenuBar?: boolean | null;

		/** Whether to display the browser scroll bar. */
		showScrollBar?: boolean | null;

		/** Whether to display the browser status bar. */
		showStatusBar?: boolean | null;

		/** Whether to display the browser tool bar. */
		showToolBar?: boolean | null;

		/** Title of popup window. */
		title?: string | null;
	}

	/** Popup Window Properties. */
	export interface PopupWindowPropertiesFormProperties {

		/** Popup window position either centered or at specific coordinate. */
		positionType: FormControl<PopupWindowPropertiesPositionType | null | undefined>,

		/** Whether to display the browser address bar. */
		showAddressBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser menu bar. */
		showMenuBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser scroll bar. */
		showScrollBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser status bar. */
		showStatusBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser tool bar. */
		showToolBar: FormControl<boolean | null | undefined>,

		/** Title of popup window. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePopupWindowPropertiesFormGroup() {
		return new FormGroup<PopupWindowPropertiesFormProperties>({
			positionType: new FormControl<PopupWindowPropertiesPositionType | null | undefined>(undefined),
			showAddressBar: new FormControl<boolean | null | undefined>(undefined),
			showMenuBar: new FormControl<boolean | null | undefined>(undefined),
			showScrollBar: new FormControl<boolean | null | undefined>(undefined),
			showStatusBar: new FormControl<boolean | null | undefined>(undefined),
			showToolBar: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the dimensions of ads, placements, creatives, or creative assets. */
	export interface Size {

		/**
		 * Height of this size. Acceptable values are 0 to 32767, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** IAB standard size. This is a read-only, auto-generated field. */
		iab?: boolean | null;

		/** ID of this size. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
		kind?: string | null;

		/**
		 * Width of this size. Acceptable values are 0 to 32767, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Represents the dimensions of ads, placements, creatives, or creative assets. */
	export interface SizeFormProperties {

		/**
		 * Height of this size. Acceptable values are 0 to 32767, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** IAB standard size. This is a read-only, auto-generated field. */
		iab: FormControl<boolean | null | undefined>,

		/** ID of this size. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
		kind: FormControl<string | null | undefined>,

		/**
		 * Width of this size. Acceptable values are 0 to 32767, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			iab: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Offset Position. */
	export interface OffsetPosition {

		/**
		 * Offset distance from left side of an asset or a window.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		left?: number | null;

		/**
		 * Offset distance from top side of an asset or a window.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top?: number | null;
	}

	/** Offset Position. */
	export interface OffsetPositionFormProperties {

		/**
		 * Offset distance from left side of an asset or a window.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Offset distance from top side of an asset or a window.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateOffsetPositionFormGroup() {
		return new FormGroup<OffsetPositionFormProperties>({
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PopupWindowPropertiesPositionType { CENTER = 'CENTER', COORDINATES = 'COORDINATES' }

	export enum CreativeCustomEventTargetType { TARGET_BLANK = 'TARGET_BLANK', TARGET_TOP = 'TARGET_TOP', TARGET_SELF = 'TARGET_SELF', TARGET_PARENT = 'TARGET_PARENT', TARGET_POPUP = 'TARGET_POPUP' }


	/** Represents a DimensionValue resource. */
	export interface DimensionValue {

		/** The name of the dimension. */
		dimensionName?: string | null;

		/** The eTag of this response for caching purposes. */
		etag?: string | null;

		/** The ID associated with the value if available. */
		id?: string | null;

		/** The kind of resource this is, in this case dfareporting#dimensionValue. */
		kind?: string | null;

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType?: DimensionValueMatchType | null;

		/** The value of the dimension. */
		value?: string | null;
	}

	/** Represents a DimensionValue resource. */
	export interface DimensionValueFormProperties {

		/** The name of the dimension. */
		dimensionName: FormControl<string | null | undefined>,

		/** The eTag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The ID associated with the value if available. */
		id: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#dimensionValue. */
		kind: FormControl<string | null | undefined>,

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType: FormControl<DimensionValueMatchType | null | undefined>,

		/** The value of the dimension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionValueFormGroup() {
		return new FormGroup<DimensionValueFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<DimensionValueMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DimensionValueMatchType { EXACT = 'EXACT', BEGINS_WITH = 'BEGINS_WITH', CONTAINS = 'CONTAINS', WILDCARD_EXPRESSION = 'WILDCARD_EXPRESSION' }


	/** Extra information added to operations that support Scotty media requests. */
	export interface MediaRequestInfo {

		/** The number of current bytes uploaded or downloaded. */
		currentBytes?: string | null;

		/** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData?: string | null;

		/** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
		diffObjectVersion?: string | null;

		/**
		 * The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		finalStatus?: number | null;

		/** The type of notification received from Scotty. */
		notificationType?: MediaRequestInfoNotificationType | null;

		/** The Scotty request ID. */
		requestId?: string | null;

		/** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
		requestReceivedParamsServingInfo?: string | null;

		/** The total size of the file. */
		totalBytes?: string | null;

		/** Whether the total bytes field contains an estimated data. */
		totalBytesIsEstimated?: boolean | null;
	}

	/** Extra information added to operations that support Scotty media requests. */
	export interface MediaRequestInfoFormProperties {

		/** The number of current bytes uploaded or downloaded. */
		currentBytes: FormControl<string | null | undefined>,

		/** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData: FormControl<string | null | undefined>,

		/** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
		diffObjectVersion: FormControl<string | null | undefined>,

		/**
		 * The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		finalStatus: FormControl<number | null | undefined>,

		/** The type of notification received from Scotty. */
		notificationType: FormControl<MediaRequestInfoNotificationType | null | undefined>,

		/** The Scotty request ID. */
		requestId: FormControl<string | null | undefined>,

		/** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
		requestReceivedParamsServingInfo: FormControl<string | null | undefined>,

		/** The total size of the file. */
		totalBytes: FormControl<string | null | undefined>,

		/** Whether the total bytes field contains an estimated data. */
		totalBytesIsEstimated: FormControl<boolean | null | undefined>,
	}
	export function CreateMediaRequestInfoFormGroup() {
		return new FormGroup<MediaRequestInfoFormProperties>({
			currentBytes: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			diffObjectVersion: new FormControl<string | null | undefined>(undefined),
			finalStatus: new FormControl<number | null | undefined>(undefined),
			notificationType: new FormControl<MediaRequestInfoNotificationType | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			requestReceivedParamsServingInfo: new FormControl<string | null | undefined>(undefined),
			totalBytes: new FormControl<string | null | undefined>(undefined),
			totalBytesIsEstimated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MediaRequestInfoNotificationType { START = 'START', PROGRESS = 'PROGRESS', END = 'END', RESPONSE_SENT = 'RESPONSE_SENT', ERROR = 'ERROR' }


	/** This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 } */
	export interface MediaResponseInfo {

		/** Data to copy from backend response to the next backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData?: string | null;

		/** Specifies any transformation to be applied to data before persisting it or retrieving from storage. E.g., encryption options for blobstore2. This should be of the form uploader_service.DataStorageTransform. */
		dataStorageTransform?: string | null;

		/** Specifies the Scotty Drop Target to use for uploads. If present in a media response, Scotty does not upload to a standard drop zone. Instead, Scotty saves the upload directly to the location specified in this drop target. Unlike drop zones, the drop target is the final storage location for an upload. So, the agent does not need to clone the blob at the end of the upload. The agent is responsible for garbage collecting any orphaned blobs that may occur due to aborted uploads. For more information, see the drop target design doc here: http://goto/ScottyDropTarget This field will be preferred to dynamicDropzone. If provided, the identified field in the response must be of the type uploader.agent.DropTarget. */
		dynamicDropTarget?: string | null;

		/** Specifies the Scotty dropzone to use for uploads. */
		dynamicDropzone?: string | null;

		/** Request class to use for all Blobstore operations for this request. */
		requestClass?: MediaResponseInfoRequestClass | null;

		/** Requester ID passed along to be recorded in the Scotty logs */
		scottyAgentUserId?: string | null;

		/** Customer-specific data to be recorded in the Scotty logs type is logs_proto_scotty.CustomerLog */
		scottyCustomerLog?: string | null;

		/** Specifies the TrafficClass that Scotty should use for any RPCs to fetch the response bytes. Will override the traffic class GTOS of the incoming http request. This is a temporary field to facilitate whitelisting and experimentation by the bigstore agent only. For instance, this does not apply to RTMP reads. WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM. */
		trafficClassField?: MediaResponseInfoTrafficClassField | null;

		/** Tells Scotty to verify hashes on the agent's behalf by parsing out the X-Goog-Hash header. */
		verifyHashFromHeader?: boolean | null;
	}

	/** This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 } */
	export interface MediaResponseInfoFormProperties {

		/** Data to copy from backend response to the next backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData: FormControl<string | null | undefined>,

		/** Specifies any transformation to be applied to data before persisting it or retrieving from storage. E.g., encryption options for blobstore2. This should be of the form uploader_service.DataStorageTransform. */
		dataStorageTransform: FormControl<string | null | undefined>,

		/** Specifies the Scotty Drop Target to use for uploads. If present in a media response, Scotty does not upload to a standard drop zone. Instead, Scotty saves the upload directly to the location specified in this drop target. Unlike drop zones, the drop target is the final storage location for an upload. So, the agent does not need to clone the blob at the end of the upload. The agent is responsible for garbage collecting any orphaned blobs that may occur due to aborted uploads. For more information, see the drop target design doc here: http://goto/ScottyDropTarget This field will be preferred to dynamicDropzone. If provided, the identified field in the response must be of the type uploader.agent.DropTarget. */
		dynamicDropTarget: FormControl<string | null | undefined>,

		/** Specifies the Scotty dropzone to use for uploads. */
		dynamicDropzone: FormControl<string | null | undefined>,

		/** Request class to use for all Blobstore operations for this request. */
		requestClass: FormControl<MediaResponseInfoRequestClass | null | undefined>,

		/** Requester ID passed along to be recorded in the Scotty logs */
		scottyAgentUserId: FormControl<string | null | undefined>,

		/** Customer-specific data to be recorded in the Scotty logs type is logs_proto_scotty.CustomerLog */
		scottyCustomerLog: FormControl<string | null | undefined>,

		/** Specifies the TrafficClass that Scotty should use for any RPCs to fetch the response bytes. Will override the traffic class GTOS of the incoming http request. This is a temporary field to facilitate whitelisting and experimentation by the bigstore agent only. For instance, this does not apply to RTMP reads. WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM. */
		trafficClassField: FormControl<MediaResponseInfoTrafficClassField | null | undefined>,

		/** Tells Scotty to verify hashes on the agent's behalf by parsing out the X-Goog-Hash header. */
		verifyHashFromHeader: FormControl<boolean | null | undefined>,
	}
	export function CreateMediaResponseInfoFormGroup() {
		return new FormGroup<MediaResponseInfoFormProperties>({
			customData: new FormControl<string | null | undefined>(undefined),
			dataStorageTransform: new FormControl<string | null | undefined>(undefined),
			dynamicDropTarget: new FormControl<string | null | undefined>(undefined),
			dynamicDropzone: new FormControl<string | null | undefined>(undefined),
			requestClass: new FormControl<MediaResponseInfoRequestClass | null | undefined>(undefined),
			scottyAgentUserId: new FormControl<string | null | undefined>(undefined),
			scottyCustomerLog: new FormControl<string | null | undefined>(undefined),
			trafficClassField: new FormControl<MediaResponseInfoTrafficClassField | null | undefined>(undefined),
			verifyHashFromHeader: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MediaResponseInfoRequestClass { UNKNOWN_REQUEST_CLASS = 'UNKNOWN_REQUEST_CLASS', LATENCY_SENSITIVE = 'LATENCY_SENSITIVE', PRODUCTION_BATCH = 'PRODUCTION_BATCH', BEST_EFFORT = 'BEST_EFFORT' }

	export enum MediaResponseInfoTrafficClassField { BE1 = 'BE1', AF1 = 'AF1', AF2 = 'AF2', AF3 = 'AF3', AF4 = 'AF4', NC1 = 'NC1', NC0 = 'NC0', BE0 = 'BE0', LLQ = 'LLQ', LLQ1 = 'LLQ1', LLQ2 = 'LLQ2' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

