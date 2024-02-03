import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly. */
	export interface Asset {

		/** The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing). */
		authorName?: string | null;

		/** For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created. */
		createTime?: string | null;

		/** The human-readable description, set by the asset's author. */
		description?: string | null;

		/** The human-readable name, set by the asset's author. */
		displayName?: string | null;

		/** A list of Formats where each format describes one representation of the asset. */
		formats?: Array<Format>;

		/** Whether this asset has been curated by the Poly team. */
		isCurated?: boolean | null;

		/** The license under which the author has made the asset available for use, if any. */
		license?: AssetLicense | null;

		/** Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON). */
		metadata?: string | null;

		/** The unique identifier for the asset in the form: `assets/{ASSET_ID}`. */
		name?: string | null;

		/** Hints for displaying the asset, based on information available when the asset was uploaded. */
		presentationParams?: PresentationParams;

		/** Info about the sources of this asset (i.e. assets that were remixed to create this asset). */
		remixInfo?: RemixInfo;

		/** Represents a file in Poly, which can be a root, resource, or thumbnail file. */
		thumbnail?: File;

		/** The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated. */
		updateTime?: string | null;

		/** The visibility of the asset and who can access it. */
		visibility?: AssetVisibility | null;
	}

	/** Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly. */
	export interface AssetFormProperties {

		/** The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing). */
		authorName: FormControl<string | null | undefined>,

		/** For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created. */
		createTime: FormControl<string | null | undefined>,

		/** The human-readable description, set by the asset's author. */
		description: FormControl<string | null | undefined>,

		/** The human-readable name, set by the asset's author. */
		displayName: FormControl<string | null | undefined>,

		/** Whether this asset has been curated by the Poly team. */
		isCurated: FormControl<boolean | null | undefined>,

		/** The license under which the author has made the asset available for use, if any. */
		license: FormControl<AssetLicense | null | undefined>,

		/** Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON). */
		metadata: FormControl<string | null | undefined>,

		/** The unique identifier for the asset in the form: `assets/{ASSET_ID}`. */
		name: FormControl<string | null | undefined>,

		/** The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The visibility of the asset and who can access it. */
		visibility: FormControl<AssetVisibility | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isCurated: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<AssetLicense | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<AssetVisibility | null | undefined>(undefined),
		});

	}


	/** The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation. */
	export interface Format {

		/** Information on the complexity of this Format. */
		formatComplexity?: FormatComplexity;

		/** A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`. */
		formatType?: string | null;

		/** A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs. */
		resources?: Array<File>;

		/** Represents a file in Poly, which can be a root, resource, or thumbnail file. */
		root?: File;
	}

	/** The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation. */
	export interface FormatFormProperties {

		/** A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`. */
		formatType: FormControl<string | null | undefined>,
	}
	export function CreateFormatFormGroup() {
		return new FormGroup<FormatFormProperties>({
			formatType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on the complexity of this Format. */
	export interface FormatComplexity {

		/** A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0). */
		lodHint?: number | null;

		/** The estimated number of triangles. */
		triangleCount?: string | null;
	}

	/** Information on the complexity of this Format. */
	export interface FormatComplexityFormProperties {

		/** A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0). */
		lodHint: FormControl<number | null | undefined>,

		/** The estimated number of triangles. */
		triangleCount: FormControl<string | null | undefined>,
	}
	export function CreateFormatComplexityFormGroup() {
		return new FormGroup<FormatComplexityFormProperties>({
			lodHint: new FormControl<number | null | undefined>(undefined),
			triangleCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a file in Poly, which can be a root, resource, or thumbnail file. */
	export interface File {

		/** The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). */
		contentType?: string | null;

		/** The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename. */
		relativePath?: string | null;

		/** The URL where the file data can be retrieved. */
		url?: string | null;
	}

	/** Represents a file in Poly, which can be a root, resource, or thumbnail file. */
	export interface FileFormProperties {

		/** The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). */
		contentType: FormControl<string | null | undefined>,

		/** The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename. */
		relativePath: FormControl<string | null | undefined>,

		/** The URL where the file data can be retrieved. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetLicense { UNKNOWN = 'UNKNOWN', CREATIVE_COMMONS_BY = 'CREATIVE_COMMONS_BY', ALL_RIGHTS_RESERVED = 'ALL_RIGHTS_RESERVED' }


	/** Hints for displaying the asset, based on information available when the asset was uploaded. */
	export interface PresentationParams {

		/** A background color which could be used for displaying the 3D asset in a 'thumbnail' or 'palette' style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red. */
		backgroundColor?: string | null;

		/** The materials' diffuse/albedo color. This does not apply to vertex colors or texture maps. */
		colorSpace?: PresentationParamsColorSpace | null;

		/** A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0. */
		orientingRotation?: Quaternion;
	}

	/** Hints for displaying the asset, based on information available when the asset was uploaded. */
	export interface PresentationParamsFormProperties {

		/** A background color which could be used for displaying the 3D asset in a 'thumbnail' or 'palette' style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red. */
		backgroundColor: FormControl<string | null | undefined>,

		/** The materials' diffuse/albedo color. This does not apply to vertex colors or texture maps. */
		colorSpace: FormControl<PresentationParamsColorSpace | null | undefined>,
	}
	export function CreatePresentationParamsFormGroup() {
		return new FormGroup<PresentationParamsFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			colorSpace: new FormControl<PresentationParamsColorSpace | null | undefined>(undefined),
		});

	}

	export enum PresentationParamsColorSpace { UNKNOWN = 'UNKNOWN', LINEAR = 'LINEAR', GAMMA = 'GAMMA' }


	/** A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0. */
	export interface Quaternion {

		/** The scalar component. */
		w?: number | null;

		/** The x component. */
		x?: number | null;

		/** The y component. */
		y?: number | null;

		/** The z component. */
		z?: number | null;
	}

	/** A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0. */
	export interface QuaternionFormProperties {

		/** The scalar component. */
		w: FormControl<number | null | undefined>,

		/** The x component. */
		x: FormControl<number | null | undefined>,

		/** The y component. */
		y: FormControl<number | null | undefined>,

		/** The z component. */
		z: FormControl<number | null | undefined>,
	}
	export function CreateQuaternionFormGroup() {
		return new FormGroup<QuaternionFormProperties>({
			w: new FormControl<number | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Info about the sources of this asset (i.e. assets that were remixed to create this asset). */
	export interface RemixInfo {

		/** Resource ids for the sources of this remix, of the form: `assets/{ASSET_ID}` */
		sourceAsset?: Array<string>;
	}

	/** Info about the sources of this asset (i.e. assets that were remixed to create this asset). */
	export interface RemixInfoFormProperties {
	}
	export function CreateRemixInfoFormGroup() {
		return new FormGroup<RemixInfoFormProperties>({
		});

	}

	export enum AssetVisibility { VISIBILITY_UNSPECIFIED = 'VISIBILITY_UNSPECIFIED', PRIVATE = 'PRIVATE', UNLISTED = 'UNLISTED', PUBLIC = 'PUBLIC' }


	/** A message generated by the asset import process. */
	export interface AssetImportMessage {

		/** The code associated with this message. */
		code?: AssetImportMessageCode | null;

		/** An optional file path. Only present for those error codes that specify it. */
		filePath?: string | null;

		/** A message resulting from reading an image file. */
		imageError?: ImageError;

		/** Details of an error resulting from parsing an OBJ file */
		objParseError?: ObjParseError;
	}

	/** A message generated by the asset import process. */
	export interface AssetImportMessageFormProperties {

		/** The code associated with this message. */
		code: FormControl<AssetImportMessageCode | null | undefined>,

		/** An optional file path. Only present for those error codes that specify it. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateAssetImportMessageFormGroup() {
		return new FormGroup<AssetImportMessageFormProperties>({
			code: new FormControl<AssetImportMessageCode | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetImportMessageCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', NO_IMPORTABLE_FILE = 'NO_IMPORTABLE_FILE', EMPTY_MODEL = 'EMPTY_MODEL', OBJ_PARSE_ERROR = 'OBJ_PARSE_ERROR', EXPIRED = 'EXPIRED', IMAGE_ERROR = 'IMAGE_ERROR', EXTRA_FILES_WITH_ARCHIVE = 'EXTRA_FILES_WITH_ARCHIVE', DEFAULT_MATERIALS = 'DEFAULT_MATERIALS', FATAL_ERROR = 'FATAL_ERROR', INVALID_ELEMENT_TYPE = 'INVALID_ELEMENT_TYPE' }


	/** A message resulting from reading an image file. */
	export interface ImageError {

		/** The type of image error encountered. Optional for older image errors. */
		code?: ImageErrorCode | null;

		/** The file path in the import of the image that was rejected. */
		filePath?: string | null;
	}

	/** A message resulting from reading an image file. */
	export interface ImageErrorFormProperties {

		/** The type of image error encountered. Optional for older image errors. */
		code: FormControl<ImageErrorCode | null | undefined>,

		/** The file path in the import of the image that was rejected. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateImageErrorFormGroup() {
		return new FormGroup<ImageErrorFormProperties>({
			code: new FormControl<ImageErrorCode | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageErrorCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', INVALID_IMAGE = 'INVALID_IMAGE', IMAGE_TOO_BIG = 'IMAGE_TOO_BIG', WRONG_IMAGE_TYPE = 'WRONG_IMAGE_TYPE' }


	/** Details of an error resulting from parsing an OBJ file */
	export interface ObjParseError {

		/** The type of problem found (required). */
		code?: ObjParseErrorCode | null;

		/** The ending character index at which the problem was found. */
		endIndex?: number | null;

		/** The file path in which the problem was found. */
		filePath?: string | null;

		/** The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation. */
		line?: string | null;

		/** Line number at which the problem was found. */
		lineNumber?: number | null;

		/** The starting character index at which the problem was found. */
		startIndex?: number | null;
	}

	/** Details of an error resulting from parsing an OBJ file */
	export interface ObjParseErrorFormProperties {

		/** The type of problem found (required). */
		code: FormControl<ObjParseErrorCode | null | undefined>,

		/** The ending character index at which the problem was found. */
		endIndex: FormControl<number | null | undefined>,

		/** The file path in which the problem was found. */
		filePath: FormControl<string | null | undefined>,

		/** The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation. */
		line: FormControl<string | null | undefined>,

		/** Line number at which the problem was found. */
		lineNumber: FormControl<number | null | undefined>,

		/** The starting character index at which the problem was found. */
		startIndex: FormControl<number | null | undefined>,
	}
	export function CreateObjParseErrorFormGroup() {
		return new FormGroup<ObjParseErrorFormProperties>({
			code: new FormControl<ObjParseErrorCode | null | undefined>(undefined),
			endIndex: new FormControl<number | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ObjParseErrorCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', INCONSISTENT_VERTEX_REFS = 'INCONSISTENT_VERTEX_REFS', INVALID_COMMAND = 'INVALID_COMMAND', INVALID_NUMBER = 'INVALID_NUMBER', INVALID_VERTEX_REF = 'INVALID_VERTEX_REF', MISSING_GEOMETRIC_VERTEX = 'MISSING_GEOMETRIC_VERTEX', MISSING_TOKEN = 'MISSING_TOKEN', TOO_FEW_DIMENSIONS = 'TOO_FEW_DIMENSIONS', TOO_FEW_VERTICES = 'TOO_FEW_VERTICES', TOO_MANY_DIMENSIONS = 'TOO_MANY_DIMENSIONS', UNSUPPORTED_COMMAND = 'UNSUPPORTED_COMMAND', UNUSED_TOKENS = 'UNUSED_TOKENS', VERTEX_NOT_FOUND = 'VERTEX_NOT_FOUND', NUMBER_OUT_OF_RANGE = 'NUMBER_OUT_OF_RANGE', INVALID_VALUE = 'INVALID_VALUE', INVALID_TEXTURE_OPTION = 'INVALID_TEXTURE_OPTION', TOO_MANY_PROBLEMS = 'TOO_MANY_PROBLEMS', MISSING_FILE_NAME = 'MISSING_FILE_NAME', FILE_NOT_FOUND = 'FILE_NOT_FOUND', UNKNOWN_MATERIAL = 'UNKNOWN_MATERIAL', NO_MATERIAL_DEFINED = 'NO_MATERIAL_DEFINED', INVALID_SMOOTHING_GROUP = 'INVALID_SMOOTHING_GROUP', MISSING_VERTEX_COLORS = 'MISSING_VERTEX_COLORS', FILE_SUBSTITUTION = 'FILE_SUBSTITUTION', LINE_TOO_LONG = 'LINE_TOO_LONG', INVALID_FILE_PATH = 'INVALID_FILE_PATH' }


	/** A response message from a request to list. */
	export interface ListAssetsResponse {

		/** A list of assets that match the criteria specified in the request. */
		assets?: Array<Asset>;

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;
	}

	/** A response message from a request to list. */
	export interface ListAssetsResponseFormProperties {

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of assets in the list, without pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response message from a request to list. */
	export interface ListLikedAssetsResponse {

		/** A list of assets that match the criteria specified in the request. */
		assets?: Array<Asset>;

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;
	}

	/** A response message from a request to list. */
	export interface ListLikedAssetsResponseFormProperties {

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of assets in the list, without pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListLikedAssetsResponseFormGroup() {
		return new FormGroup<ListLikedAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response message from a request to list. */
	export interface ListUserAssetsResponse {

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;

		/** A list of UserAssets matching the request. */
		userAssets?: Array<UserAsset>;
	}

	/** A response message from a request to list. */
	export interface ListUserAssetsResponseFormProperties {

		/** The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of assets in the list, without pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListUserAssetsResponseFormGroup() {
		return new FormGroup<ListUserAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data about the user's asset. */
	export interface UserAsset {

		/** Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly. */
		asset?: Asset;
	}

	/** Data about the user's asset. */
	export interface UserAssetFormProperties {
	}
	export function CreateUserAssetFormGroup() {
		return new FormGroup<UserAssetFormProperties>({
		});

	}


	/** A response message from a request to startImport. This is returned in the response field of the Operation. */
	export interface StartAssetImportResponse {

		/** The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong. */
		assetId?: string | null;

		/** The id of the asset import. */
		assetImportId?: string | null;

		/** The message from the asset import. This will contain any warnings (or - in the case of failure - errors) that occurred during import. */
		assetImportMessages?: Array<AssetImportMessage>;

		/** The publish URL for the asset. */
		publishUrl?: string | null;
	}

	/** A response message from a request to startImport. This is returned in the response field of the Operation. */
	export interface StartAssetImportResponseFormProperties {

		/** The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong. */
		assetId: FormControl<string | null | undefined>,

		/** The id of the asset import. */
		assetImportId: FormControl<string | null | undefined>,

		/** The publish URL for the asset. */
		publishUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartAssetImportResponseFormGroup() {
		return new FormGroup<StartAssetImportResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			assetImportId: new FormControl<string | null | undefined>(undefined),
			publishUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.
		 * Get v1/assets
		 * @param {string} category Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.
		 * @param {boolean} curated Return only assets that have been curated by the Poly team.
		 * @param {string} format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
		 * @param {string} keywords One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.
		 * @param {Poly_assets_listMaxComplexity} maxComplexity Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
		 * @return {ListAssetsResponse} Successful response
		 */
		Poly_assets_list(category: string | null | undefined, curated: boolean | null | undefined, format: string | null | undefined, keywords: string | null | undefined, maxComplexity: Poly_assets_listMaxComplexity | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'v1/assets?category=' + (category == null ? '' : encodeURIComponent(category)) + '&curated=' + curated + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&keywords=' + (keywords == null ? '' : encodeURIComponent(keywords)) + '&maxComplexity=' + maxComplexity + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
		 * Get v1/{name}
		 * @param {string} name Required. An asset's name in the form `assets/{ASSET_ID}`.
		 * @return {Asset} Successful response
		 */
		Poly_assets_get(name: string): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
		 * Get v1/{name}/assets
		 * @param {string} name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
		 * @param {string} format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
		 * @param {Poly_users_assets_listVisibility} visibility The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
		 * @return {ListUserAssetsResponse} Successful response
		 */
		Poly_users_assets_list(name: string, format: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, visibility: Poly_users_assets_listVisibility | null | undefined): Observable<ListUserAssetsResponse> {
			return this.http.get<ListUserAssetsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/assets&format=' + (format == null ? '' : encodeURIComponent(format)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&visibility=' + visibility, {});
		}

		/**
		 * Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.
		 * Get v1/{name}/likedassets
		 * @param {string} name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
		 * @param {string} format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
		 * @return {ListLikedAssetsResponse} Successful response
		 */
		Poly_users_likedassets_list(name: string, format: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLikedAssetsResponse> {
			return this.http.get<ListLikedAssetsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/likedassets&format=' + (format == null ? '' : encodeURIComponent(format)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Poly_assets_listMaxComplexity { COMPLEXITY_UNSPECIFIED = 'COMPLEXITY_UNSPECIFIED', COMPLEX = 'COMPLEX', MEDIUM = 'MEDIUM', SIMPLE = 'SIMPLE' }

	export enum Poly_users_assets_listVisibility { VISIBILITY_UNSPECIFIED = 'VISIBILITY_UNSPECIFIED', PUBLISHED = 'PUBLISHED', PRIVATE = 'PRIVATE' }

}

