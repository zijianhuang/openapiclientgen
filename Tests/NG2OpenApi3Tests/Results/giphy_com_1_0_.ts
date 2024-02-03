import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Gif {

		/** The unique bit.ly URL for this GIF */
		bitly_url?: string | null;

		/** Currently unused */
		content_url?: string | null;

		/** The date this GIF was added to the GIPHY database. */
		create_datetime?: Date | null;

		/** A URL used for embedding this GIF */
		embded_url?: string | null;

		/**
		 * An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)
		 */
		featured_tags?: Array<string>;

		/** This GIF's unique ID */
		id?: string | null;

		/** An object containing data for various available formats and sizes of this GIF. */
		images?: GifImages;

		/** The creation or upload date from this GIF's source. */
		import_datetime?: Date | null;

		/** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
		rating?: string | null;

		/** The unique slug used in this GIF's URL */
		slug?: string | null;

		/** The page on which this GIF was found */
		source?: string | null;

		/** The URL of the webpage on which this GIF was found. */
		source_post_url?: string | null;

		/** The top level domain of the source URL. */
		source_tld?: string | null;

		/**
		 * An array of tags for this GIF (Note: Not available when using the Public Beta Key)
		 */
		tags?: Array<string>;

		/** The date on which this gif was marked trending, if applicable. */
		trending_datetime?: Date | null;

		/** Type of the gif. By default, this is almost always gif */
		type?: GifType | null;

		/** The date on which this GIF was last updated. */
		update_datetime?: Date | null;

		/** The unique URL for this GIF */
		url?: string | null;

		/** The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more. */
		user?: User;

		/** The username this GIF is attached to, if applicable */
		username?: string | null;
	}
	export interface GifFormProperties {

		/** The unique bit.ly URL for this GIF */
		bitly_url: FormControl<string | null | undefined>,

		/** Currently unused */
		content_url: FormControl<string | null | undefined>,

		/** The date this GIF was added to the GIPHY database. */
		create_datetime: FormControl<Date | null | undefined>,

		/** A URL used for embedding this GIF */
		embded_url: FormControl<string | null | undefined>,

		/** This GIF's unique ID */
		id: FormControl<string | null | undefined>,

		/** The creation or upload date from this GIF's source. */
		import_datetime: FormControl<Date | null | undefined>,

		/** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
		rating: FormControl<string | null | undefined>,

		/** The unique slug used in this GIF's URL */
		slug: FormControl<string | null | undefined>,

		/** The page on which this GIF was found */
		source: FormControl<string | null | undefined>,

		/** The URL of the webpage on which this GIF was found. */
		source_post_url: FormControl<string | null | undefined>,

		/** The top level domain of the source URL. */
		source_tld: FormControl<string | null | undefined>,

		/** The date on which this gif was marked trending, if applicable. */
		trending_datetime: FormControl<Date | null | undefined>,

		/** Type of the gif. By default, this is almost always gif */
		type: FormControl<GifType | null | undefined>,

		/** The date on which this GIF was last updated. */
		update_datetime: FormControl<Date | null | undefined>,

		/** The unique URL for this GIF */
		url: FormControl<string | null | undefined>,

		/** The username this GIF is attached to, if applicable */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGifFormGroup() {
		return new FormGroup<GifFormProperties>({
			bitly_url: new FormControl<string | null | undefined>(undefined),
			content_url: new FormControl<string | null | undefined>(undefined),
			create_datetime: new FormControl<Date | null | undefined>(undefined),
			embded_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			import_datetime: new FormControl<Date | null | undefined>(undefined),
			rating: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			source_post_url: new FormControl<string | null | undefined>(undefined),
			source_tld: new FormControl<string | null | undefined>(undefined),
			trending_datetime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<GifType | null | undefined>(undefined),
			update_datetime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GifImages {
		downsized?: Image;
		downsized_large?: Image;
		downsized_medium?: Image;
		downsized_small?: Image;
		downsized_still?: Image;
		fixed_height?: Image;
		fixed_height_downsampled?: Image;
		fixed_height_small?: Image;
		fixed_height_small_still?: Image;
		fixed_height_still?: Image;
		fixed_width?: Image;
		fixed_width_downsampled?: Image;
		fixed_width_small?: Image;
		fixed_width_small_still?: Image;
		fixed_width_still?: Image;
		looping?: Image;
		original?: Image;
		original_still?: Image;
		preview?: Image;
		preview_gif?: Image;
	}
	export interface GifImagesFormProperties {
	}
	export function CreateGifImagesFormGroup() {
		return new FormGroup<GifImagesFormProperties>({
		});

	}

	export interface Image {

		/** The number of frames in this GIF. */
		frames?: string | null;

		/** The height of this GIF in pixels. */
		height?: string | null;

		/** The URL for this GIF in .MP4 format. */
		mp4?: string | null;

		/** The size in bytes of the .MP4 file corresponding to this GIF. */
		mp4_size?: string | null;

		/** The size of this GIF in bytes. */
		size?: string | null;

		/** The publicly-accessible direct URL for this GIF. */
		url?: string | null;

		/** The URL for this GIF in .webp format. */
		webp?: string | null;

		/** The size in bytes of the .webp file corresponding to this GIF. */
		webp_size?: string | null;

		/** The width of this GIF in pixels. */
		width?: string | null;
	}
	export interface ImageFormProperties {

		/** The number of frames in this GIF. */
		frames: FormControl<string | null | undefined>,

		/** The height of this GIF in pixels. */
		height: FormControl<string | null | undefined>,

		/** The URL for this GIF in .MP4 format. */
		mp4: FormControl<string | null | undefined>,

		/** The size in bytes of the .MP4 file corresponding to this GIF. */
		mp4_size: FormControl<string | null | undefined>,

		/** The size of this GIF in bytes. */
		size: FormControl<string | null | undefined>,

		/** The publicly-accessible direct URL for this GIF. */
		url: FormControl<string | null | undefined>,

		/** The URL for this GIF in .webp format. */
		webp: FormControl<string | null | undefined>,

		/** The size in bytes of the .webp file corresponding to this GIF. */
		webp_size: FormControl<string | null | undefined>,

		/** The width of this GIF in pixels. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			frames: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<string | null | undefined>(undefined),
			mp4: new FormControl<string | null | undefined>(undefined),
			mp4_size: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webp: new FormControl<string | null | undefined>(undefined),
			webp_size: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GifType { gif = 'gif' }


	/** The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more. */
	export interface User {

		/** The URL for this user's avatar image. */
		avatar_url?: string | null;

		/** The URL for the banner image that appears atop this user's profile page. */
		banner_url?: string | null;

		/** The display name associated with this user (contains formatting the base username might not). */
		display_name?: string | null;

		/** The URL for this user's profile. */
		profile_url?: string | null;

		/** The Twitter username associated with this user, if applicable. */
		twitter?: string | null;

		/** The username associated with this user. */
		username?: string | null;
	}

	/** The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more. */
	export interface UserFormProperties {

		/** The URL for this user's avatar image. */
		avatar_url: FormControl<string | null | undefined>,

		/** The URL for the banner image that appears atop this user's profile page. */
		banner_url: FormControl<string | null | undefined>,

		/** The display name associated with this user (contains formatting the base username might not). */
		display_name: FormControl<string | null | undefined>,

		/** The URL for this user's profile. */
		profile_url: FormControl<string | null | undefined>,

		/** The Twitter username associated with this user, if applicable. */
		twitter: FormControl<string | null | undefined>,

		/** The username associated with this user. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			banner_url: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			profile_url: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
	 */
	export interface Meta {

		/** HTTP Response Message */
		msg?: string | null;

		/** A unique ID paired with this response from the API. */
		response_id?: string | null;

		/** HTTP Response Code */
		status?: number | null;
	}

	/**
	 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
	 */
	export interface MetaFormProperties {

		/** HTTP Response Message */
		msg: FormControl<string | null | undefined>,

		/** A unique ID paired with this response from the API. */
		response_id: FormControl<string | null | undefined>,

		/** HTTP Response Code */
		status: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			response_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
	 */
	export interface Pagination {

		/** Total number of items returned. */
		count?: number | null;

		/** Position in pagination. */
		offset?: number | null;

		/** Total number of items available. */
		total_count?: number | null;
	}

	/**
	 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
	 */
	export interface PaginationFormProperties {

		/** Total number of items returned. */
		count: FormControl<number | null | undefined>,

		/** Position in pagination. */
		offset: FormControl<number | null | undefined>,

		/** Total number of items available. */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get GIFs by ID
		 * A multiget version of the get GIF by ID endpoint.
		 * Get gifs
		 * @param {string} ids Filters results by specified GIF IDs, separated by commas.
		 * @return {GetGifsByIdReturn} 
		 */
		GetGifsById(ids: string | null | undefined): Observable<GetGifsByIdReturn> {
			return this.http.get<GetGifsByIdReturn>(this.baseUri + 'gifs?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Random GIF
		 * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
		 * Get gifs/random
		 * @param {string} tag Filters results by specified tag.
		 * @param {string} rating Filters results by specified rating.
		 * @return {RandomGifReturn} 
		 */
		RandomGif(tag: string | null | undefined, rating: string | null | undefined): Observable<RandomGifReturn> {
			return this.http.get<RandomGifReturn>(this.baseUri + 'gifs/random?tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)), {});
		}

		/**
		 * Search GIFs
		 * Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
		 * Get gifs/search
		 * @param {string} q Search query term or prhase.
		 * @param {number} limit The maximum number of records to return.
		 * @param {number} offset An optional results offset.
		 * @param {string} rating Filters results by specified rating.
		 * @param {string} lang Specify default language for regional content; use a 2-letter ISO 639-1 language code.
		 * @return {SearchGifsReturn} Search results
		 */
		SearchGifs(q: string, limit: number | null | undefined, offset: number | null | undefined, rating: string | null | undefined, lang: string | null | undefined): Observable<SearchGifsReturn> {
			return this.http.get<SearchGifsReturn>(this.baseUri + 'gifs/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit + '&offset=' + offset + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)), {});
		}

		/**
		 * Translate phrase to GIF
		 * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF
		 * Get gifs/translate
		 * @param {string} s Search term.
		 * @return {TranslateGifReturn} 
		 */
		TranslateGif(s: string): Observable<TranslateGifReturn> {
			return this.http.get<TranslateGifReturn>(this.baseUri + 'gifs/translate?s=' + (s == null ? '' : encodeURIComponent(s)), {});
		}

		/**
		 * Trending GIFs
		 * Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
		 * Get gifs/trending
		 * @param {number} limit The maximum number of records to return.
		 * @param {number} offset An optional results offset.
		 * @param {string} rating Filters results by specified rating.
		 * @return {TrendingGifsReturn} 
		 */
		TrendingGifs(limit: number | null | undefined, offset: number | null | undefined, rating: string | null | undefined): Observable<TrendingGifsReturn> {
			return this.http.get<TrendingGifsReturn>(this.baseUri + 'gifs/trending?limit=' + limit + '&offset=' + offset + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)), {});
		}

		/**
		 * Get GIF by Id
		 * Returns a GIF given that GIF's unique ID
		 * Get gifs/{gifId}
		 * @param {number} gifId Filters results by specified GIF ID.
		 * @return {GetGifByIdReturn} 
		 */
		GetGifById(gifId: number): Observable<GetGifByIdReturn> {
			return this.http.get<GetGifByIdReturn>(this.baseUri + 'gifs/' + gifId, {});
		}

		/**
		 * Random Sticker
		 * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
		 * Get stickers/random
		 * @param {string} tag Filters results by specified tag.
		 * @param {string} rating Filters results by specified rating.
		 * @return {RandomStickerReturn} 
		 */
		RandomSticker(tag: string | null | undefined, rating: string | null | undefined): Observable<RandomStickerReturn> {
			return this.http.get<RandomStickerReturn>(this.baseUri + 'stickers/random?tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)), {});
		}

		/**
		 * Search Stickers
		 * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.
		 * Get stickers/search
		 * @param {string} q Search query term or prhase.
		 * @param {number} limit The maximum number of records to return.
		 * @param {number} offset An optional results offset.
		 * @param {string} rating Filters results by specified rating.
		 * @param {string} lang Specify default language for regional content; use a 2-letter ISO 639-1 language code.
		 * @return {SearchStickersReturn} Search results
		 */
		SearchStickers(q: string, limit: number | null | undefined, offset: number | null | undefined, rating: string | null | undefined, lang: string | null | undefined): Observable<SearchStickersReturn> {
			return this.http.get<SearchStickersReturn>(this.baseUri + 'stickers/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit + '&offset=' + offset + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)), {});
		}

		/**
		 * Translate phrase to Sticker
		 * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.
		 * Get stickers/translate
		 * @param {string} s Search term.
		 * @return {TranslateStickerReturn} 
		 */
		TranslateSticker(s: string): Observable<TranslateStickerReturn> {
			return this.http.get<TranslateStickerReturn>(this.baseUri + 'stickers/translate?s=' + (s == null ? '' : encodeURIComponent(s)), {});
		}

		/**
		 * Trending Stickers
		 * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.
		 * Get stickers/trending
		 * @param {number} limit The maximum number of records to return.
		 * @param {number} offset An optional results offset.
		 * @param {string} rating Filters results by specified rating.
		 * @return {TrendingStickersReturn} 
		 */
		TrendingStickers(limit: number | null | undefined, offset: number | null | undefined, rating: string | null | undefined): Observable<TrendingStickersReturn> {
			return this.http.get<TrendingStickersReturn>(this.baseUri + 'stickers/trending?limit=' + limit + '&offset=' + offset + '&rating=' + (rating == null ? '' : encodeURIComponent(rating)), {});
		}
	}

	export interface GetGifsByIdReturn {
		data?: Array<Gif>;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;

		/**
		 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		 */
		pagination?: Pagination;
	}
	export interface GetGifsByIdReturnFormProperties {
	}
	export function CreateGetGifsByIdReturnFormGroup() {
		return new FormGroup<GetGifsByIdReturnFormProperties>({
		});

	}

	export interface RandomGifReturn {
		data?: Gif;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;
	}
	export interface RandomGifReturnFormProperties {
	}
	export function CreateRandomGifReturnFormGroup() {
		return new FormGroup<RandomGifReturnFormProperties>({
		});

	}

	export interface SearchGifsReturn {
		data?: Array<Gif>;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;

		/**
		 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		 */
		pagination?: Pagination;
	}
	export interface SearchGifsReturnFormProperties {
	}
	export function CreateSearchGifsReturnFormGroup() {
		return new FormGroup<SearchGifsReturnFormProperties>({
		});

	}

	export interface TranslateGifReturn {
		data?: Gif;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;
	}
	export interface TranslateGifReturnFormProperties {
	}
	export function CreateTranslateGifReturnFormGroup() {
		return new FormGroup<TranslateGifReturnFormProperties>({
		});

	}

	export interface TrendingGifsReturn {
		data?: Array<Gif>;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;

		/**
		 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		 */
		pagination?: Pagination;
	}
	export interface TrendingGifsReturnFormProperties {
	}
	export function CreateTrendingGifsReturnFormGroup() {
		return new FormGroup<TrendingGifsReturnFormProperties>({
		});

	}

	export interface GetGifByIdReturn {
		data?: Gif;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;
	}
	export interface GetGifByIdReturnFormProperties {
	}
	export function CreateGetGifByIdReturnFormGroup() {
		return new FormGroup<GetGifByIdReturnFormProperties>({
		});

	}

	export interface RandomStickerReturn {
		data?: Gif;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;
	}
	export interface RandomStickerReturnFormProperties {
	}
	export function CreateRandomStickerReturnFormGroup() {
		return new FormGroup<RandomStickerReturnFormProperties>({
		});

	}

	export interface SearchStickersReturn {
		data?: Array<Gif>;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;

		/**
		 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		 */
		pagination?: Pagination;
	}
	export interface SearchStickersReturnFormProperties {
	}
	export function CreateSearchStickersReturnFormGroup() {
		return new FormGroup<SearchStickersReturnFormProperties>({
		});

	}

	export interface TranslateStickerReturn {
		data?: Gif;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;
	}
	export interface TranslateStickerReturnFormProperties {
	}
	export function CreateTranslateStickerReturnFormGroup() {
		return new FormGroup<TranslateStickerReturnFormProperties>({
		});

	}

	export interface TrendingStickersReturn {
		data?: Array<Gif>;

		/**
		 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		 */
		meta?: Meta;

		/**
		 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		 */
		pagination?: Pagination;
	}
	export interface TrendingStickersReturnFormProperties {
	}
	export function CreateTrendingStickersReturnFormGroup() {
		return new FormGroup<TrendingStickersReturnFormProperties>({
		});

	}

}

