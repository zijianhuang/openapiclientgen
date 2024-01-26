import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Card {
		CardAbilities?: Array<CardAbilities>;
		CardAttacks?: Array<CardAttacks>;

		/** Required */
		category: string;
		description?: string | null;
		dexId?: Array<number>;
		energyType?: string | null;
		evolveFrom?: string | null;
		hp?: number | null;

		/** Required */
		id: string;
		illustrator?: string | null;
		image?: string | null;
		item?: CardItem;

		/** Required */
		legal: CardLegal;
		level?: number | null;

		/** Required */
		localId: string;

		/** Required */
		name: string;

		/** Required */
		rarity: string;
		regulationMark?: string | null;
		resistances?: Array<Array<WeakResElement>>;
		retreat?: number | null;

		/** Required */
		set: SetResume;
		stage?: string | null;
		suffix?: string | null;
		trainerType?: string | null;
		types?: Array<string>;
		variants?: CardVariants;
		weaknesses?: Array<Array<WeakResElement>>;
	}
	export interface CardFormProperties {

		/** Required */
		category: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		energyType: FormControl<string | null | undefined>,
		evolveFrom: FormControl<string | null | undefined>,
		hp: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		illustrator: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		level: FormControl<number | null | undefined>,

		/** Required */
		localId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rarity: FormControl<string | null | undefined>,
		regulationMark: FormControl<string | null | undefined>,
		retreat: FormControl<number | null | undefined>,
		stage: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
		trainerType: FormControl<string | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			energyType: new FormControl<string | null | undefined>(undefined),
			evolveFrom: new FormControl<string | null | undefined>(undefined),
			hp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			illustrator: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rarity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regulationMark: new FormControl<string | null | undefined>(undefined),
			retreat: new FormControl<number | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			trainerType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CardAbilities {
		effect?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface CardAbilitiesFormProperties {
		effect: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCardAbilitiesFormGroup() {
		return new FormGroup<CardAbilitiesFormProperties>({
			effect: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CardAttacks {
		cost?: Array<string>;
		damage?: number | null;
		effect?: string | null;

		/** Required */
		name: string;
	}
	export interface CardAttacksFormProperties {
		damage: FormControl<number | null | undefined>,
		effect: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardAttacksFormGroup() {
		return new FormGroup<CardAttacksFormProperties>({
			damage: new FormControl<number | null | undefined>(undefined),
			effect: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardItem {

		/** Required */
		effect: string;

		/** Required */
		name: string;
	}
	export interface CardItemFormProperties {

		/** Required */
		effect: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardItemFormGroup() {
		return new FormGroup<CardItemFormProperties>({
			effect: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardLegal {
		expanded?: boolean | null;
		standard?: boolean | null;
	}
	export interface CardLegalFormProperties {
		expanded: FormControl<boolean | null | undefined>,
		standard: FormControl<boolean | null | undefined>,
	}
	export function CreateCardLegalFormGroup() {
		return new FormGroup<CardLegalFormProperties>({
			expanded: new FormControl<boolean | null | undefined>(undefined),
			standard: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WeakResElement {

		/** Required */
		type: string;
		value?: string | null;
	}
	export interface WeakResElementFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateWeakResElementFormGroup() {
		return new FormGroup<WeakResElementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetResume {

		/** Required */
		cardCount: SetResumeCardCount;

		/** Required */
		id: string;
		logo?: string | null;

		/** Required */
		name: string;
		symbol?: string | null;
	}
	export interface SetResumeFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateSetResumeFormGroup() {
		return new FormGroup<SetResumeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetResumeCardCount {

		/** Required */
		official: number;

		/** Required */
		total: number;
	}
	export interface SetResumeCardCountFormProperties {

		/** Required */
		official: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSetResumeCardCountFormGroup() {
		return new FormGroup<SetResumeCardCountFormProperties>({
			official: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardVariants {

		/** Required */
		firstEdition: boolean;

		/** Required */
		holo: boolean;

		/** Required */
		normal: boolean;

		/** Required */
		reverse: boolean;

		/** Required */
		wPromo: boolean;
	}
	export interface CardVariantsFormProperties {

		/** Required */
		firstEdition: FormControl<boolean | null | undefined>,

		/** Required */
		holo: FormControl<boolean | null | undefined>,

		/** Required */
		normal: FormControl<boolean | null | undefined>,

		/** Required */
		reverse: FormControl<boolean | null | undefined>,

		/** Required */
		wPromo: FormControl<boolean | null | undefined>,
	}
	export function CreateCardVariantsFormGroup() {
		return new FormGroup<CardVariantsFormProperties>({
			firstEdition: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			holo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			normal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			reverse: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wPromo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardResume {

		/** Required */
		id: string;
		image?: string | null;

		/** Required */
		localId: string;

		/** Required */
		name: string;
	}
	export interface CardResumeFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Required */
		localId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardResumeFormGroup() {
		return new FormGroup<CardResumeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Serie {

		/** Required */
		id: string;
		logo?: string | null;

		/** Required */
		name: string;

		/** Required */
		sets: Array<SetResume>;
	}
	export interface SerieFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSerieFormGroup() {
		return new FormGroup<SerieFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SerieResume {

		/** Required */
		id: string;
		logo?: string | null;

		/** Required */
		name: string;
	}
	export interface SerieResumeFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSerieResumeFormGroup() {
		return new FormGroup<SerieResumeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Set {

		/** Required */
		cardCount: SetCardCount;

		/** Required */
		cards: Array<CardResume>;

		/** Required */
		id: string;
		logo?: string | null;

		/** Required */
		name: string;
		symbol?: string | null;
	}
	export interface SetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateSetFormGroup() {
		return new FormGroup<SetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetCardCount {
		firstEd?: number | null;
		holo?: number | null;
		normal?: number | null;

		/** Required */
		official: number;
		reverse?: number | null;

		/** Required */
		total: number;
	}
	export interface SetCardCountFormProperties {
		firstEd: FormControl<number | null | undefined>,
		holo: FormControl<number | null | undefined>,
		normal: FormControl<number | null | undefined>,

		/** Required */
		official: FormControl<number | null | undefined>,
		reverse: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSetCardCountFormGroup() {
		return new FormGroup<SetCardCountFormProperties>({
			firstEd: new FormControl<number | null | undefined>(undefined),
			holo: new FormControl<number | null | undefined>(undefined),
			normal: new FormControl<number | null | undefined>(undefined),
			official: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reverse: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StringEndpoint {

		/** Required */
		cards: Array<CardResume>;

		/** Required */
		name: string;
	}
	export interface StringEndpointFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStringEndpointFormGroup() {
		return new FormGroup<StringEndpointFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * fetch the list of cards
		 * desc
		 * Get cards
		 * @return {Array<CardResume>} 
		 */
		CardsGet(headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'cards', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finds Card by Global ID
		 * Find a defined card thatusing its global id
		 * Get cards/{cardId}
		 * @param {string} cardId Tags to filter by
		 * @return {Card} successful operation
		 */
		Cards_cardIdGet(cardId: string, headersHandler?: () => HttpHeaders): Observable<Card> {
			return this.http.get<Card>(this.baseUri + 'cards/' + (cardId == null ? '' : encodeURIComponent(cardId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get categories
		 * @return {Array<string>} List cards categories
		 */
		CategoriesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'categories', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get categories/{category}
		 * @return {StringEndpoint} List cards with the category
		 */
		Categories_categoryGet(category: string, headersHandler?: () => HttpHeaders): Observable<StringEndpoint> {
			return this.http.get<StringEndpoint>(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get dex-ids
		 * @return {Array<string>} List all possible Pokemon(s) Pokédex Ids that appeared in the TCG
		 */
		Dex_idsGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'dex-ids', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get dex-ids/{dexId}
		 * @return {Array<CardResume>} Get the cards containing the specified dexId
		 */
		Dex_ids_dexIdGet(dexId: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'dex-ids/' + (dexId == null ? '' : encodeURIComponent(dexId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get energy-types
		 * @return {Array<string>} list the different Energy types an Energy card can have
		 */
		Energy_typesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'energy-types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get energy-types/{energy_type}
		 * @return {Array<CardResume>} Get the Energy cards containing the specified energy-type
		 */
		Energy_types_energy_typeGet(energy_type: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'energy-types/{energy_type}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get hp
		 * @return {Array<string>} List all different possibilities number of HP a card can have
		 */
		HpGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'hp', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get hp/{hp}
		 * @return {StringEndpoint} Get the Pokémon cards containing specified number of HP
		 */
		Hp_hpGet(hp: string, headersHandler?: () => HttpHeaders): Observable<StringEndpoint> {
			return this.http.get<StringEndpoint>(this.baseUri + 'hp/' + (hp == null ? '' : encodeURIComponent(hp)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get illustrators
		 * @return {Array<string>} Get all the Pokémon cards illustrators
		 */
		IllustratorsGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'illustrators', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get illustrators/{illustrator}
		 * @return {StringEndpoint} Get the cards containing the specified illustrator
		 */
		Illustrators_illustratorGet(illustrator: string, headersHandler?: () => HttpHeaders): Observable<StringEndpoint> {
			return this.http.get<StringEndpoint>(this.baseUri + 'illustrators/' + (illustrator == null ? '' : encodeURIComponent(illustrator)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get rarities
		 * @return {Array<string>} List cards rarities
		 */
		RaritiesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'rarities', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get rarities/{rarity}
		 * @return {StringEndpoint} Get the cards containing the specified rarity
		 */
		Rarities_rarityGet(rarity: string, headersHandler?: () => HttpHeaders): Observable<StringEndpoint> {
			return this.http.get<StringEndpoint>(this.baseUri + 'rarities/' + (rarity == null ? '' : encodeURIComponent(rarity)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get regulation-marks
		 * @return {Array<string>} List the current regulation marks
		 */
		Regulation_marksGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'regulation-marks', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get regulation-marks/{regulation_mark}
		 * @return {Array<CardResume>} Get every cards respecting the specified regulation-mark
		 */
		Regulation_marks_regulation_markGet(regulation_mark: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'regulation-marks/{regulation_mark}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get retreats
		 * @return {Array<string>} return the different number of retreats count
		 */
		RetreatsGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'retreats', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get retreats/{retreat}
		 * @return {StringEndpoint} Get the cards containing the specified retreat count
		 */
		Retreats_retreatGet(retreat: string, headersHandler?: () => HttpHeaders): Observable<StringEndpoint> {
			return this.http.get<StringEndpoint>(this.baseUri + 'retreats/' + (retreat == null ? '' : encodeURIComponent(retreat)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get series
		 * @return {Array<SerieResume>} Successful request
		 */
		SeriesGet(headersHandler?: () => HttpHeaders): Observable<Array<SerieResume>> {
			return this.http.get<Array<SerieResume>>(this.baseUri + 'series', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get series/{serie}
		 * @param {string} serie the serie ID or name
		 * @return {Serie} Success
		 */
		Series_serieGet(serie: string, headersHandler?: () => HttpHeaders): Observable<Serie> {
			return this.http.get<Serie>(this.baseUri + 'series/' + (serie == null ? '' : encodeURIComponent(serie)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get sets
		 * @return {Array<SetResume>} Successful request
		 */
		SetsGet(headersHandler?: () => HttpHeaders): Observable<Array<SetResume>> {
			return this.http.get<Array<SetResume>>(this.baseUri + 'sets', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get sets/{set}
		 * @param {string} set the set ID or the set name
		 * @return {Set} Success
		 */
		Sets_setGet(set: string, headersHandler?: () => HttpHeaders): Observable<Set> {
			return this.http.get<Set>(this.baseUri + 'sets/' + (set == null ? '' : encodeURIComponent(set)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get sets/{set}/{cardLocalId}
		 * @return {Card} Success
		 */
		Sets_set_cardLocalIdGet(set: string, cardLocalId: string, headersHandler?: () => HttpHeaders): Observable<Card> {
			return this.http.get<Card>(this.baseUri + 'sets/' + (set == null ? '' : encodeURIComponent(set)) + '/' + (cardLocalId == null ? '' : encodeURIComponent(cardLocalId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get stages
		 * @return {Array<string>} Get all the possible stages a Pokémon card can have
		 */
		StagesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'stages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get stages/{stage}
		 * @return {Array<CardResume>} Get all the cards having the specified stage
		 */
		Stages_stageGet(stage: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'stages/' + (stage == null ? '' : encodeURIComponent(stage)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get suffixes
		 * @return {Array<string>} Get all the cards having the specified suffix
		 */
		SuffixesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'suffixes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get suffixes/{suffix}
		 * @return {Array<CardResume>} Get all the cards having the specified stage suffix
		 */
		Suffixes_suffixGet(suffix: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'suffixes/' + (suffix == null ? '' : encodeURIComponent(suffix)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trainer-types
		 * @return {Array<string>} Get the different trainer-types
		 */
		Trainer_typesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'trainer-types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trainer-types/{trainer_type}
		 * @return {Array<CardResume>} Get the cards containing with the specified trainer-type
		 */
		Trainer_types_trainer_typeGet(trainer_type: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'trainer-types/{trainer_type}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get types
		 * @return {Array<string>} List all possible cards types
		 */
		TypesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get types/{type}
		 * @return {Array<CardResume>} Get the cards containing the specified type
		 */
		Types_typeGet(type: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'types/' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get variants
		 * @return {Array<string>} Get the different variants available
		 */
		VariantsGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'variants', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get variants/{variant}
		 * @return {Array<CardResume>} Get the cards available in the specified variant
		 */
		Variants_variantGet(variant: string, headersHandler?: () => HttpHeaders): Observable<Array<CardResume>> {
			return this.http.get<Array<CardResume>>(this.baseUri + 'variants/' + (variant == null ? '' : encodeURIComponent(variant)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

