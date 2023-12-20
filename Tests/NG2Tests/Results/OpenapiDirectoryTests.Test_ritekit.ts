import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Emojis {
	}
	export interface EmojisFormProperties {
	}
	export function CreateEmojisFormGroup() {
		return new FormGroup<EmojisFormProperties>({
		});

	}

	export interface Hashtags {
	}
	export interface HashtagsFormProperties {
	}
	export function CreateHashtagsFormGroup() {
		return new FormGroup<HashtagsFormProperties>({
		});

	}

	export interface Images {
	}
	export interface ImagesFormProperties {
	}
	export function CreateImagesFormGroup() {
		return new FormGroup<ImagesFormProperties>({
		});

	}

	export interface Instagram {
	}
	export interface InstagramFormProperties {
	}
	export function CreateInstagramFormGroup() {
		return new FormGroup<InstagramFormProperties>({
		});

	}

	export interface Link_shortening {
	}
	export interface Link_shorteningFormProperties {
	}
	export function CreateLink_shorteningFormGroup() {
		return new FormGroup<Link_shorteningFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Auto-Emojify
		 * Returns text of the post with emoji added
		 * Get v1/emoji/auto-emojify
		 * @param {string} text Text of the post
		 * @return {void} OK
		 */
		V1EmojiAuto_emojifyGetByText(text: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/emoji/auto-emojify?text=' + (text == null ? '' : encodeURIComponent(text)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Emoji Suggestions
		 * Returns list of emoji suggestions for a given text of the post
		 * Get v1/emoji/suggestions
		 * @param {string} text Text of the post
		 * @return {void} OK
		 */
		V1EmojiSuggestionsGetByText(text: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/emoji/suggestions?text=' + (text == null ? '' : encodeURIComponent(text)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Animate Image
		 * Returns URL of an animated GIF.
		 * Get v1/images/animate
		 * @param {string} url URL of the company
		 * @param {string} type URL of the company
		 * @return {void} OK
		 */
		V1ImagesAnimateGetByUrlAndType(url: string, type: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/images/animate?url=' + (url == null ? '' : encodeURIComponent(url)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Company Logo
		 * Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.
		 * Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.
		 * Get v1/images/logo
		 * @param {string} domain URL of the company
		 * @return {void} OK
		 */
		V1ImagesLogoGetByDomain(domain: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/images/logo?domain=' + (domain == null ? '' : encodeURIComponent(domain)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Text to Image
		 * Returns URL of an image created from text according to given style parameters
		 * Get v1/images/quote
		 * @param {string} quote Text of the quote
		 * @param {string} author Name of the author/source
		 * @param {number} fontSize Font size for the quote (author font size is calculated automatically)
		 * @param {string} quoteFont Font-family used for quote text
		 * @param {string} quoteFontColor Font color of the quote text
		 * @param {string} authorFont Font-family used for author name
		 * @param {string} authorFontColor Font color of the author
		 * @param {number} enableHighlight Enable highlight on quote text
		 * @param {string} highlightColor Color used for highlight
		 * @param {string} bgType Background type (gradient/solid)
		 * @param {string} backgroundColor Background color for solid background type
		 * @param {string} gradientType Type of gradient background (linear/radial)
		 * @param {string} gradientColor1 First color for gradient background type
		 * @param {string} gradientColor2 Second color for gradient background type
		 * @param {string} brandLogo URL of the brand logo
		 * @param {string} animation Animation type: none, rays, glint, circle
		 * @param {number} showQuoteMark showing/hiding quote mark
		 * @return {void} OK
		 */
		V1ImagesQuoteGetByQuoteAndAuthorAndFontSizeAndQuoteFontAndQuoteFontColorAndAuthorFontAndAuthorFontColorAndEnableHighlightAndHighlightColorAndBgTypeAndBackgroundColorAndGradientTypeAndGradientColor1AndGradientColor2AndBrandLogoAndAnimationAndShowQuoteMark(quote: string, author: string, fontSize: number, quoteFont: string, quoteFontColor: string, authorFont: string, authorFontColor: string, enableHighlight: number, highlightColor: string, bgType: string, backgroundColor: string, gradientType: string, gradientColor1: string, gradientColor2: string, brandLogo: string, animation: string, showQuoteMark: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/images/quote?quote=' + (quote == null ? '' : encodeURIComponent(quote)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&fontSize=' + fontSize + '&quoteFont=' + (quoteFont == null ? '' : encodeURIComponent(quoteFont)) + '&quoteFontColor=' + (quoteFontColor == null ? '' : encodeURIComponent(quoteFontColor)) + '&authorFont=' + (authorFont == null ? '' : encodeURIComponent(authorFont)) + '&authorFontColor=' + (authorFontColor == null ? '' : encodeURIComponent(authorFontColor)) + '&enableHighlight=' + enableHighlight + '&highlightColor=' + (highlightColor == null ? '' : encodeURIComponent(highlightColor)) + '&bgType=' + (bgType == null ? '' : encodeURIComponent(bgType)) + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&gradientType=' + (gradientType == null ? '' : encodeURIComponent(gradientType)) + '&gradientColor1=' + (gradientColor1 == null ? '' : encodeURIComponent(gradientColor1)) + '&gradientColor2=' + (gradientColor2 == null ? '' : encodeURIComponent(gradientColor2)) + '&brandLogo=' + (brandLogo == null ? '' : encodeURIComponent(brandLogo)) + '&animation=' + (animation == null ? '' : encodeURIComponent(animation)) + '&showQuoteMark=' + showQuoteMark, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List of CTAs
		 * Returns list of available CTA for current user. Requires each user to authenticate with RiteKit
		 * Get v1/link/cta
		 * @return {void} OK
		 */
		V1LinkCtaGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/link/cta', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shorten Link
		 * Returns a shorten link with a given CTA.
		 * Get v1/link/short-link
		 * @param {string} url URL
		 * @param {number} cta cta id
		 * @return {void} OK
		 */
		V1LinkShort_linkGetByUrlAndCta(url: string, cta: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/link/short-link?url=' + (url == null ? '' : encodeURIComponent(url)) + '&cta=' + cta, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Trending Hashtags
		 * Returns list of hashtags currently trending on Twitter
		 * Get v1/search/trending
		 * @param {boolean} green Restrict results only to green hashtags. Hides overused (red) hashtags.
		 * @param {boolean} latin Restrict results only to hashtags with latin characters
		 * @return {void} OK
		 */
		V1SearchTrendingGetByGreenAndLatin(green: boolean | null | undefined, latin: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/search/trending?green=' + green + '&latin=' + latin, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Auto-Hashtag
		 * Returns auto-hashtagged text of the post.
		 * Get v1/stats/auto-hashtag
		 * @param {string} post Text of the post
		 * @param {number} maxHashtags Max number of hashtags.
		 * @param {string} hashtagPosition Position of hashtags: end => at the end, auto => anywhere
		 * @return {void} OK
		 */
		V1StatsAuto_hashtagGetByPostAndMaxHashtagsAndHashtagPosition(post: string, maxHashtags: number | null | undefined, hashtagPosition: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/auto-hashtag?post=' + (post == null ? '' : encodeURIComponent(post)) + '&maxHashtags=' + maxHashtags + '&hashtagPosition=' + (hashtagPosition == null ? '' : encodeURIComponent(hashtagPosition)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hashtag Suggestions
		 * Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.
		 * Get v1/stats/hashtag-suggestions
		 * @param {string} text Topic
		 * @return {void} OK
		 */
		V1StatsHashtag_suggestionsGetByText(text: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/hashtag-suggestions?text=' + (text == null ? '' : encodeURIComponent(text)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hashtag History
		 * Returns historical stats for a given hashtag from the last 30 days
		 * Get v1/stats/history/{hashtag}
		 * @param {string} hashtag Hashtag without # mark
		 * @return {void} OK
		 */
		V1StatsHistory_hashtagGet(hashtag: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/history/' + (hashtag == null ? '' : encodeURIComponent(hashtag)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hashtag Stats
		 * Returns real-time stats for up to 100 hashtags (updated hourly).
		 * Get v1/stats/multiple-hashtags
		 * @param {Array<string>} tags Hashtag(s) without # mark
		 * @return {void} OK
		 */
		V1StatsMultiple_hashtagsGetByTags(tags: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/multiple-hashtags?' + tags.map(z => `tags=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hashtags cleaner
		 * Remove banned hashtags before posting to Instagram
		 * Get v2/instagram/hashtags-cleaner
		 * @param {string} post post
		 * @return {void} OK
		 */
		V2InstagramHashtags_cleanerGetByPost(post: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/instagram/hashtags-cleaner?post=' + (post == null ? '' : encodeURIComponent(post)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

