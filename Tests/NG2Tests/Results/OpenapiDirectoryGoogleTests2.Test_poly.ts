import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Represents and describes an asset in the Poly library. An asset is a 3D model
	 * or scene created using [Tilt Brush](//www.tiltbrush.com),
	 * [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file
	 * that can be upload to Poly.
	 */
	export interface Asset {

		/**
		 * The author's publicly visible name. Use this name when giving credit to the
		 * author. For more information, see [Licensing](/poly/discover/licensing).
		 */
		authorName?: string | null;

		/**
		 * For published assets, the time when the asset was published.
		 * For unpublished assets, the time when the asset was created.
		 */
		createTime?: string | null;

		/** The human-readable description, set by the asset's author. */
		description?: string | null;

		/** The human-readable name, set by the asset's author. */
		displayName?: string | null;

		/**
		 * A list of Formats where each
		 * format describes one representation of the asset.
		 */
		formats?: Array<Format> | null;

		/** Whether this asset has been curated by the Poly team. */
		isCurated?: boolean | null;

		/**
		 * The license under which the author has made the asset available
		 * for use, if any.
		 */
		license?: AssetLicense | null;

		/**
		 * Application-defined opaque metadata for this asset. This field is only
		 * returned when querying for the signed-in user's own assets, not for public
		 * assets. This string is limited to 1K chars. It is up to the creator of
		 * the asset to define the format for this string (for example, JSON).
		 */
		metadata?: string | null;

		/**
		 * The unique identifier for the asset in the form:
		 * `assets/{ASSET_ID}`.
		 */
		name?: string | null;

		/**
		 * Hints for displaying the asset, based on information available when the asset
		 * was uploaded.
		 */
		presentationParams?: PresentationParams | null;

		/**
		 * Info about the sources of this asset (i.e. assets that were remixed to
		 * create this asset).
		 */
		remixInfo?: RemixInfo | null;

		/**
		 * Represents a file in Poly, which can be a root,
		 * resource, or thumbnail file.
		 */
		thumbnail?: File | null;

		/**
		 * The time when the asset was last modified. For published assets, whose
		 * contents are immutable, the update time changes only when metadata
		 * properties, such as visibility, are updated.
		 */
		updateTime?: string | null;

		/** The visibility of the asset and who can access it. */
		visibility?: AssetVisibility | null;
	}


	/**
	 * The same asset can be represented in different formats, for example,
	 * a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its
	 * corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file
	 * with its corresponding .glb binary data. A format refers to a specific
	 * representation of an asset and contains all information needed to
	 * retrieve and describe this representation.
	 */
	export interface Format {

		/** Information on the complexity of this Format. */
		formatComplexity?: FormatComplexity | null;

		/**
		 * A short string that identifies the format type of this representation.
		 * Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
		 */
		formatType?: string | null;

		/**
		 * A list of dependencies of the root element. May include, but is not
		 * limited to, materials, textures, and shader programs.
		 */
		resources?: Array<File> | null;

		/**
		 * Represents a file in Poly, which can be a root,
		 * resource, or thumbnail file.
		 */
		root?: File | null;
	}


	/** Information on the complexity of this Format. */
	export interface FormatComplexity {

		/**
		 * A non-negative integer that represents the level of detail (LOD) of this
		 * format relative to other formats of the same asset with the same
		 * format_type.
		 * This hint allows you to sort formats from the most-detailed (0) to
		 * least-detailed (integers greater than 0).
		 */
		lodHint?: number | null;

		/** The estimated number of triangles. */
		triangleCount?: string | null;
	}


	/**
	 * Represents a file in Poly, which can be a root,
	 * resource, or thumbnail file.
	 */
	export interface File {

		/**
		 * The MIME content-type, such as `image/png`.
		 * For more information, see
		 * [MIME
		 * types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
		 */
		contentType?: string | null;

		/**
		 * The path of the resource file relative to the
		 * root file. For root or thumbnail files,
		 * this is just the filename.
		 */
		relativePath?: string | null;

		/** The URL where the file data can be retrieved. */
		url?: string | null;
	}

	export enum AssetLicense { UNKNOWN = 0, CREATIVE_COMMONS_BY = 1, ALL_RIGHTS_RESERVED = 2 }


	/**
	 * Hints for displaying the asset, based on information available when the asset
	 * was uploaded.
	 */
	export interface PresentationParams {

		/**
		 * A background color which could be used for displaying the 3D asset in a
		 * 'thumbnail' or 'palette' style view. Authors have the option to set this
		 * background color when publishing or editing their asset.
		 * This is represented as a six-digit hexademical triplet specifying the
		 * RGB components of the background color, e.g. #FF0000 for Red.
		 */
		backgroundColor?: string | null;

		/**
		 * The materials' diffuse/albedo color. This does not apply to vertex colors
		 * or texture maps.
		 */
		colorSpace?: PresentationParamsColorSpace | null;

		/**
		 * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the
		 * response you see "w: 1" and nothing else this is the default value of
		 * [0, 0, 0, 1] where x,y, and z are 0.
		 */
		orientingRotation?: Quaternion | null;
	}

	export enum PresentationParamsColorSpace { UNKNOWN = 0, LINEAR = 1, GAMMA = 2 }


	/**
	 * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the
	 * response you see "w: 1" and nothing else this is the default value of
	 * [0, 0, 0, 1] where x,y, and z are 0.
	 */
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


	/**
	 * Info about the sources of this asset (i.e. assets that were remixed to
	 * create this asset).
	 */
	export interface RemixInfo {

		/**
		 * Resource ids for the sources of this remix, of the form:
		 * `assets/{ASSET_ID}`
		 */
		sourceAsset?: Array<string> | null;
	}

	export enum AssetVisibility { VISIBILITY_UNSPECIFIED = 0, PRIVATE = 1, UNLISTED = 2, PUBLIC = 3 }


	/** A message generated by the asset import process. */
	export interface AssetImportMessage {

		/** The code associated with this message. */
		code?: AssetImportMessageCode | null;

		/** An optional file path. Only present for those error codes that specify it. */
		filePath?: string | null;

		/** A message resulting from reading an image file. */
		imageError?: ImageError | null;

		/** Details of an error resulting from parsing an OBJ file */
		objParseError?: ObjParseError | null;
	}

	export enum AssetImportMessageCode { CODE_UNSPECIFIED = 0, NO_IMPORTABLE_FILE = 1, EMPTY_MODEL = 2, OBJ_PARSE_ERROR = 3, EXPIRED = 4, IMAGE_ERROR = 5, EXTRA_FILES_WITH_ARCHIVE = 6, DEFAULT_MATERIALS = 7, FATAL_ERROR = 8, INVALID_ELEMENT_TYPE = 9 }


	/** A message resulting from reading an image file. */
	export interface ImageError {

		/** The type of image error encountered. Optional for older image errors. */
		code?: ImageErrorCode | null;

		/** The file path in the import of the image that was rejected. */
		filePath?: string | null;
	}

	export enum ImageErrorCode { CODE_UNSPECIFIED = 0, INVALID_IMAGE = 1, IMAGE_TOO_BIG = 2, WRONG_IMAGE_TYPE = 3 }


	/** Details of an error resulting from parsing an OBJ file */
	export interface ObjParseError {

		/** The type of problem found (required). */
		code?: ObjParseErrorCode | null;

		/** The ending character index at which the problem was found. */
		endIndex?: number | null;

		/** The file path in which the problem was found. */
		filePath?: string | null;

		/**
		 * The text of the line. Note that this may be truncated if the line was very
		 * long. This may not include the error if it occurs after line truncation.
		 */
		line?: string | null;

		/** Line number at which the problem was found. */
		lineNumber?: number | null;

		/** The starting character index at which the problem was found. */
		startIndex?: number | null;
	}

	export enum ObjParseErrorCode { CODE_UNSPECIFIED = 0, INCONSISTENT_VERTEX_REFS = 1, INVALID_COMMAND = 2, INVALID_NUMBER = 3, INVALID_VERTEX_REF = 4, MISSING_GEOMETRIC_VERTEX = 5, MISSING_TOKEN = 6, TOO_FEW_DIMENSIONS = 7, TOO_FEW_VERTICES = 8, TOO_MANY_DIMENSIONS = 9, UNSUPPORTED_COMMAND = 10, UNUSED_TOKENS = 11, VERTEX_NOT_FOUND = 12, NUMBER_OUT_OF_RANGE = 13, INVALID_VALUE = 14, INVALID_TEXTURE_OPTION = 15, TOO_MANY_PROBLEMS = 16, MISSING_FILE_NAME = 17, FILE_NOT_FOUND = 18, UNKNOWN_MATERIAL = 19, NO_MATERIAL_DEFINED = 20, INVALID_SMOOTHING_GROUP = 21, MISSING_VERTEX_COLORS = 22, FILE_SUBSTITUTION = 23, LINE_TOO_LONG = 24, INVALID_FILE_PATH = 25 }


	/** A response message from a request to list. */
	export interface ListAssetsResponse {

		/** A list of assets that match the criteria specified in the request. */
		assets?: Array<Asset> | null;

		/**
		 * The continuation token for retrieving the next page. If empty,
		 * indicates that there are no more pages. To get the next page, submit the
		 * same request specifying this value as the
		 * page_token.
		 */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;
	}


	/** A response message from a request to list. */
	export interface ListLikedAssetsResponse {

		/** A list of assets that match the criteria specified in the request. */
		assets?: Array<Asset> | null;

		/**
		 * The continuation token for retrieving the next page. If empty,
		 * indicates that there are no more pages. To get the next page, submit the
		 * same request specifying this value as the
		 * page_token.
		 */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;
	}


	/** A response message from a request to list. */
	export interface ListUserAssetsResponse {

		/**
		 * The continuation token for retrieving the next page. If empty,
		 * indicates that there are no more pages. To get the next page, submit the
		 * same request specifying this value as the
		 * page_token.
		 */
		nextPageToken?: string | null;

		/** The total number of assets in the list, without pagination. */
		totalSize?: number | null;

		/** A list of UserAssets matching the request. */
		userAssets?: Array<UserAsset> | null;
	}


	/** Data about the user's asset. */
	export interface UserAsset {

		/**
		 * Represents and describes an asset in the Poly library. An asset is a 3D model
		 * or scene created using [Tilt Brush](//www.tiltbrush.com),
		 * [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file
		 * that can be upload to Poly.
		 */
		asset?: Asset | null;
	}


	/**
	 * A response message from a request to
	 * startImport. This is returned in the response
	 * field of the Operation.
	 */
	export interface StartAssetImportResponse {

		/**
		 * The id of newly created asset. If this is empty when the operation is
		 * complete it means the import failed. Please refer to the
		 * assetImportMessages field to understand what went wrong.
		 */
		assetId?: string | null;

		/** The id of the asset import. */
		assetImportId?: string | null;

		/**
		 * The message from the asset import. This will contain any warnings
		 * (or - in the case of failure - errors) that occurred during import.
		 */
		assetImportMessages?: Array<AssetImportMessage> | null;

		/** The publish URL for the asset. */
		publishUrl?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all public, remixable assets. These are assets with an access level
		 * of PUBLIC and published under the
		 * CC-By license.
		 * Get v1/assets
		 * @param {string} category Filter assets based on the specified category. Supported values are:
		 * `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`,
		 * `scenes`, `technology`, and `transport`.
		 * @param {boolean} curated Return only assets that have been curated by the Poly team.
		 * @param {string} format Return only assets with the matching format. Acceptable values are:
		 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
		 * @param {string} keywords One or more search terms to be matched against all text that Poly has
		 * indexed for assets, which includes display_name,
		 * description, and tags. Multiple keywords should be
		 * separated by spaces.
		 * @param {Poly_assets_listMaxComplexity} maxComplexity Returns assets that are of the specified complexity or less. Defaults to
		 * COMPLEX. For example, a request for
		 * MEDIUM assets also includes
		 * SIMPLE assets.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are:
		 * `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets
		 * based on a combination of popularity and other features.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1`
		 * and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were
		 * split into multiple pages. To get the next page, submit the same request
		 * specifying the value from
		 * next_page_token.
		 * @return {void} Successful response
		 */
		Poly_assets_list(category: string | null | undefined, curated: boolean | null | undefined, format: string | null | undefined, keywords: string | null | undefined, maxComplexity: Poly_assets_listMaxComplexity | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/assets?category=' + (category == null ? '' : encodeURIComponent(category)) + '&curated=' + curated + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&keywords=' + (keywords == null ? '' : encodeURIComponent(keywords)) + '&maxComplexity=' + maxComplexity + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns detailed information about an asset given its name.
		 * PRIVATE assets are returned only if
		 * the currently authenticated user (via OAuth token) is the author of the
		 * asset.
		 * Get v1/{name}
		 * @param {string} name Required. An asset's name in the form `assets/{ASSET_ID}`.
		 * @return {void} Successful response
		 */
		Poly_assets_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists assets authored by the given user. Only the value 'me', representing
		 * the currently-authenticated user, is supported. May include assets with an
		 * access level of PRIVATE or
		 * UNLISTED and assets which are
		 * All Rights Reserved for the
		 * currently-authenticated user.
		 * Get v1/{name}/assets
		 * @param {string} name A valid user id. Currently, only the special value 'me', representing the
		 * currently-authenticated user is supported. To use 'me', you must pass
		 * an OAuth token with the request.
		 * @param {string} format Return only assets with the matching format. Acceptable values are:
		 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are:
		 * `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets
		 * based on a combination of popularity and other features.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1`
		 * and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were
		 * split into multiple pages. To get the next page, submit the same request
		 * specifying the value from
		 * next_page_token.
		 * @param {Poly_users_assets_listVisibility} visibility The visibility of the assets to be returned.
		 * Defaults to
		 * VISIBILITY_UNSPECIFIED
		 * which returns all assets.
		 * @return {void} Successful response
		 */
		Poly_users_assets_list(name: string, format: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, visibility: Poly_users_assets_listVisibility | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/assets&format=' + (format == null ? '' : encodeURIComponent(format)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&visibility=' + visibility, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists assets that the user has liked. Only the value 'me', representing
		 * the currently-authenticated user, is supported. May include assets with an
		 * access level of UNLISTED.
		 * Get v1/{name}/likedassets
		 * @param {string} name A valid user id. Currently, only the special value 'me', representing the
		 * currently-authenticated user is supported. To use 'me', you must pass
		 * an OAuth token with the request.
		 * @param {string} format Return only assets with the matching format. Acceptable values are:
		 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
		 * @param {string} orderBy Specifies an ordering for assets. Acceptable values are:
		 * `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which
		 * ranks assets based on how recently they were liked.
		 * @param {number} pageSize The maximum number of assets to be returned. This value must be between `1`
		 * and `100`. Defaults to `20`.
		 * @param {string} pageToken Specifies a continuation token from a previous search whose results were
		 * split into multiple pages. To get the next page, submit the same request
		 * specifying the value from
		 * next_page_token.
		 * @return {void} Successful response
		 */
		Poly_users_likedassets_list(name: string, format: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/likedassets&format=' + (format == null ? '' : encodeURIComponent(format)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Poly_assets_listMaxComplexity { COMPLEXITY_UNSPECIFIED = 0, COMPLEX = 1, MEDIUM = 2, SIMPLE = 3 }

	export enum Poly_users_assets_listVisibility { VISIBILITY_UNSPECIFIED = 0, PUBLISHED = 1, PRIVATE = 2 }

}

