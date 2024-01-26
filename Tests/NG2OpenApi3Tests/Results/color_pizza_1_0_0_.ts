import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Color {
		distance?: number | null;
		hex?: string | null;
		hsl?: ColorHsl;
		lab?: ColorLab;
		luminance?: number | null;
		luminanceWCAG?: number | null;
		name?: string | null;
		requestedHex?: string | null;
		rgb?: ColorRgb;
		svg?: string | null;
		svgNamed?: string | null;
		swatchImg?: string | null;
	}
	export interface ColorFormProperties {
		distance: FormControl<number | null | undefined>,
		hex: FormControl<string | null | undefined>,
		luminance: FormControl<number | null | undefined>,
		luminanceWCAG: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		requestedHex: FormControl<string | null | undefined>,
		svg: FormControl<string | null | undefined>,
		svgNamed: FormControl<string | null | undefined>,
		swatchImg: FormControl<string | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			luminance: new FormControl<number | null | undefined>(undefined),
			luminanceWCAG: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestedHex: new FormControl<string | null | undefined>(undefined),
			svg: new FormControl<string | null | undefined>(undefined),
			svgNamed: new FormControl<string | null | undefined>(undefined),
			swatchImg: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ColorHsl {
		h?: number | null;
		l?: number | null;
		s?: number | null;
	}
	export interface ColorHslFormProperties {
		h: FormControl<number | null | undefined>,
		l: FormControl<number | null | undefined>,
		s: FormControl<number | null | undefined>,
	}
	export function CreateColorHslFormGroup() {
		return new FormGroup<ColorHslFormProperties>({
			h: new FormControl<number | null | undefined>(undefined),
			l: new FormControl<number | null | undefined>(undefined),
			s: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorLab {
		a?: number | null;
		b?: number | null;
		l?: number | null;
	}
	export interface ColorLabFormProperties {
		a: FormControl<number | null | undefined>,
		b: FormControl<number | null | undefined>,
		l: FormControl<number | null | undefined>,
	}
	export function CreateColorLabFormGroup() {
		return new FormGroup<ColorLabFormProperties>({
			a: new FormControl<number | null | undefined>(undefined),
			b: new FormControl<number | null | undefined>(undefined),
			l: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorRgb {
		b?: number | null;
		g?: number | null;
		r?: number | null;
	}
	export interface ColorRgbFormProperties {
		b: FormControl<number | null | undefined>,
		g: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
	}
	export function CreateColorRgbFormGroup() {
		return new FormGroup<ColorRgbFormProperties>({
			b: new FormControl<number | null | undefined>(undefined),
			g: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorBase {
		hex?: string | null;
		hsl?: ColorBaseHsl;
		lab?: ColorBaseLab;
		luminance?: number | null;
		luminanceWCAG?: number | null;
		name?: string | null;
		rgb?: ColorBaseRgb;
		swatchImg?: ColorBaseSwatchImg;
	}
	export interface ColorBaseFormProperties {
		hex: FormControl<string | null | undefined>,
		luminance: FormControl<number | null | undefined>,
		luminanceWCAG: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateColorBaseFormGroup() {
		return new FormGroup<ColorBaseFormProperties>({
			hex: new FormControl<string | null | undefined>(undefined),
			luminance: new FormControl<number | null | undefined>(undefined),
			luminanceWCAG: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ColorBaseHsl {
		h?: number | null;
		l?: number | null;
		s?: number | null;
	}
	export interface ColorBaseHslFormProperties {
		h: FormControl<number | null | undefined>,
		l: FormControl<number | null | undefined>,
		s: FormControl<number | null | undefined>,
	}
	export function CreateColorBaseHslFormGroup() {
		return new FormGroup<ColorBaseHslFormProperties>({
			h: new FormControl<number | null | undefined>(undefined),
			l: new FormControl<number | null | undefined>(undefined),
			s: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorBaseLab {
		a?: number | null;
		b?: number | null;
		l?: number | null;
	}
	export interface ColorBaseLabFormProperties {
		a: FormControl<number | null | undefined>,
		b: FormControl<number | null | undefined>,
		l: FormControl<number | null | undefined>,
	}
	export function CreateColorBaseLabFormGroup() {
		return new FormGroup<ColorBaseLabFormProperties>({
			a: new FormControl<number | null | undefined>(undefined),
			b: new FormControl<number | null | undefined>(undefined),
			l: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorBaseRgb {
		b?: number | null;
		g?: number | null;
		r?: number | null;
	}
	export interface ColorBaseRgbFormProperties {
		b: FormControl<number | null | undefined>,
		g: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
	}
	export function CreateColorBaseRgbFormGroup() {
		return new FormGroup<ColorBaseRgbFormProperties>({
			b: new FormControl<number | null | undefined>(undefined),
			g: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ColorBaseSwatchImg {
		svg?: string | null;
		svgNamed?: string | null;
	}
	export interface ColorBaseSwatchImgFormProperties {
		svg: FormControl<string | null | undefined>,
		svgNamed: FormControl<string | null | undefined>,
	}
	export function CreateColorBaseSwatchImgFormGroup() {
		return new FormGroup<ColorBaseSwatchImgFormProperties>({
			svg: new FormControl<string | null | undefined>(undefined),
			svgNamed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		message?: string | null;
		status?: string | null;
	}
	export interface ErrorFormProperties {
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDescription {
		colorCount?: number | null;
		description?: string | null;
		key?: string | null;
		license?: string | null;
		source?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface ListDescriptionFormProperties {
		colorCount: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		license: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDescriptionFormGroup() {
		return new FormGroup<ListDescriptionFormProperties>({
			colorCount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PossibleLists { default = 'default', bestOf = 'bestOf', wikipedia = 'wikipedia', french = 'french', ridgway = 'ridgway', risograph = 'risograph', basic = 'basic', chineseTraditional = 'chineseTraditional', html = 'html', japaneseTraditional = 'japaneseTraditional', leCorbusier = 'leCorbusier', nbsIscc = 'nbsIscc', ntc = 'ntc', osxcrayons = 'osxcrayons', ral = 'ral', sanzoWadaI = 'sanzoWadaI', thesaurus = 'thesaurus', werner = 'werner', windows = 'windows', x11 = 'x11', xkcd = 'xkcd' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all colors of the default color name list
		 * Get 
		 * @return {GetReturn} OK
		 */
		Get(headersHandler?: () => HttpHeaders): Observable<GetReturn> {
			return this.http.get<GetReturn>(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all colors of the default color name list
		 * Get lists/
		 * @return {ListsGetReturn} OK
		 */
		ListsGet(headersHandler?: () => HttpHeaders): Observable<ListsGetReturn> {
			return this.http.get<ListsGetReturn>(this.baseUri + 'lists/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all colors of the default color name list
		 * Get names/
		 * @return {NamesGetReturn} OK
		 */
		NamesGet(headersHandler?: () => HttpHeaders): Observable<NamesGetReturn> {
			return this.http.get<NamesGetReturn>(this.baseUri + 'names/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Generate a color swatch for any color
		 * Get swatch/
		 * @param {string} color The hex value of the color to retrieve without '#'
		 * @param {string} name The name of the color
		 * @return {void} OK
		 */
		SwatchGetByColorAndName(color: string, name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swatch/?color=' + (color == null ? '' : encodeURIComponent(color)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetReturn {
		colors?: Array<Color>;
		paletteTitle?: string | null;
	}
	export interface GetReturnFormProperties {
		paletteTitle: FormControl<string | null | undefined>,
	}
	export function CreateGetReturnFormGroup() {
		return new FormGroup<GetReturnFormProperties>({
			paletteTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListsGetReturn {
		listDescriptions?: ListsGetReturnListDescriptions;
		localAvailableColorNameLists?: Array<string>;
	}
	export interface ListsGetReturnFormProperties {
	}
	export function CreateListsGetReturnFormGroup() {
		return new FormGroup<ListsGetReturnFormProperties>({
		});

	}

	export interface ListsGetReturnListDescriptions {
		basic?: ListDescription;
		bestOf?: ListDescription;
		chineseTraditional?: ListDescription;
		default?: ListDescription;
		french?: ListDescription;
		html?: ListDescription;
		japaneseTraditional?: ListDescription;
		leCorbusier?: ListDescription;
		nbsIscc?: ListDescription;
		ntc?: ListDescription;
		osxcrayons?: ListDescription;
		ral?: ListDescription;
		ridgway?: ListDescription;
		risograph?: ListDescription;
		sanzoWadaI?: ListDescription;
		thesaurus?: ListDescription;
		werner?: ListDescription;
		wikipedia?: ListDescription;
		windows?: ListDescription;
		x11?: ListDescription;
		xkcd?: ListDescription;
	}
	export interface ListsGetReturnListDescriptionsFormProperties {
	}
	export function CreateListsGetReturnListDescriptionsFormGroup() {
		return new FormGroup<ListsGetReturnListDescriptionsFormProperties>({
		});

	}

	export interface NamesGetReturn {
		colors?: Array<Color>;
		paletteTitle?: string | null;
	}
	export interface NamesGetReturnFormProperties {
		paletteTitle: FormControl<string | null | undefined>,
	}
	export function CreateNamesGetReturnFormGroup() {
		return new FormGroup<NamesGetReturnFormProperties>({
			paletteTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

}

