import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * `APIReference`
	 */
	export interface APIReference {

		/** Resource index for shorthand searching. */
		index?: string | null;

		/** Name of the referenced resource. */
		name?: string | null;

		/** URL of the referenced resource. */
		url?: string | null;
	}

	/**
	 * `APIReference`
	 */
	export interface APIReferenceFormProperties {

		/** Resource index for shorthand searching. */
		index: FormControl<string | null | undefined>,

		/** Name of the referenced resource. */
		name: FormControl<string | null | undefined>,

		/** URL of the referenced resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAPIReferenceFormGroup() {
		return new FormGroup<APIReferenceFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `APIReferenceList`
	 */
	export interface APIReferenceList {

		/** Total number of resources available. */
		count?: number | null;
		results?: Array<APIReference>;
	}

	/**
	 * `APIReferenceList`
	 */
	export interface APIReferenceListFormProperties {

		/** Total number of resources available. */
		count: FormControl<number | null | undefined>,
	}
	export function CreateAPIReferenceListFormGroup() {
		return new FormGroup<APIReferenceListFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AbilityBonus {

		/**
		 * `APIReference`
		 */
		ability_score?: APIReference;

		/** Bonus amount for this ability score. */
		bonus?: number | null;
	}
	export interface AbilityBonusFormProperties {

		/** Bonus amount for this ability score. */
		bonus: FormControl<number | null | undefined>,
	}
	export function CreateAbilityBonusFormGroup() {
		return new FormGroup<AbilityBonusFormProperties>({
			bonus: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * `AbilityScore`
	 */
	export interface AbilityScore extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `AbilityScore`
	 */
	export interface AbilityScoreFormProperties extends APIReferenceFormProperties {
	}
	export function CreateAbilityScoreFormGroup() {
		return new FormGroup<AbilityScoreFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Alignment`
	 */
	export interface Alignment extends APIReference {

		/** Abbreviation/initials/acronym for the alignment. */
		abbreviation?: string | null;

		/** Brief description of the resource. */
		desc?: string | null;
	}

	/**
	 * `Alignment`
	 */
	export interface AlignmentFormProperties extends APIReferenceFormProperties {

		/** Abbreviation/initials/acronym for the alignment. */
		abbreviation: FormControl<string | null | undefined>,

		/** Brief description of the resource. */
		desc: FormControl<string | null | undefined>,
	}
	export function CreateAlignmentFormGroup() {
		return new FormGroup<AlignmentFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			abbreviation: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AreaOfEffect {
		size?: number | null;
		type?: AreaOfEffectType | null;
	}
	export interface AreaOfEffectFormProperties {
		size: FormControl<number | null | undefined>,
		type: FormControl<AreaOfEffectType | null | undefined>,
	}
	export function CreateAreaOfEffectFormGroup() {
		return new FormGroup<AreaOfEffectFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<AreaOfEffectType | null | undefined>(undefined),
		});

	}

	export enum AreaOfEffectType { sphere = 'sphere', cone = 'cone', cylinder = 'cylinder', line = 'line', cube = 'cube' }


	/**
	 * `Armor`
	 */
	export interface Armor extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Armor`
	 */
	export interface ArmorFormProperties extends APIReferenceFormProperties {
	}
	export function CreateArmorFormGroup() {
		return new FormGroup<ArmorFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Background`
	 */
	export interface Background extends APIReference {

		/**
		 * `Choice`
		 */
		bonds?: Choice;

		/** Special feature granted to new characters of this background. */
		feature?: BackgroundFeature;

		/**
		 * `Choice`
		 */
		flaws?: Choice;

		/**
		 * `Choice`
		 */
		ideals?: Choice;

		/**
		 * `Choice`
		 */
		language_options?: Choice;

		/** Choice of personality traits for this background. */
		personality_traits?: string | null;

		/** Starting equipment for all new characters of this background. */
		starting_equipment?: Array<APIReference>;

		/**
		 * `Choice`
		 */
		starting_equipment_options?: Choice;

		/** Starting proficiencies for all new characters of this background. */
		starting_proficiencies?: Array<APIReference>;
	}

	/**
	 * `Background`
	 */
	export interface BackgroundFormProperties extends APIReferenceFormProperties {

		/** Choice of personality traits for this background. */
		personality_traits: FormControl<string | null | undefined>,
	}
	export function CreateBackgroundFormGroup() {
		return new FormGroup<BackgroundFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			personality_traits: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Choice`
	 */
	export interface Choice {

		/** Number of items to pick from the list. */
		choose?: number | null;

		/** Description of the choice to be made. */
		desc?: string | null;

		/**
		 * `Option Set`
		 */
		from?: OptionSet;

		/** Type of the resources to choose from. */
		type?: string | null;
	}

	/**
	 * `Choice`
	 */
	export interface ChoiceFormProperties {

		/** Number of items to pick from the list. */
		choose: FormControl<number | null | undefined>,

		/** Description of the choice to be made. */
		desc: FormControl<string | null | undefined>,

		/** Type of the resources to choose from. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChoiceFormGroup() {
		return new FormGroup<ChoiceFormProperties>({
			choose: new FormControl<number | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BackgroundFeature {
		desc?: Array<string>;
		name?: string | null;
	}
	export interface BackgroundFeatureFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateBackgroundFeatureFormGroup() {
		return new FormGroup<BackgroundFeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Class`
	 */
	export interface Class extends APIReference {

		/** URL of the level resource for the class. */
		class_levels?: string | null;

		/** Hit die of the class. (ex: 12 == 1d12). */
		hit_die?: number | null;

		/**
		 * `Multiclassing`
		 */
		multi_classing?: Multiclassing;

		/** List of starting proficiencies for all new characters of this class. */
		proficiencies?: Array<APIReference>;

		/** List of choices of starting proficiencies. */
		proficiency_choices?: Array<Choice>;

		/** Saving throws the class is proficient in. */
		saving_throws?: Array<APIReference>;

		/**
		 * `Spellcasting`
		 */
		spellcasting?: Spellcasting;

		/** URL of the spell resource list for the class. */
		spells?: string | null;

		/** List of equipment and their quantities all players of the class start with. */
		ClassStarting_equipment?: Array<ClassStarting_equipment>;

		/** List of choices of starting equipment. */
		starting_equipment_options?: Array<Choice>;

		/** List of all possible subclasses this class can specialize in. */
		subclasses?: Array<APIReference>;
	}

	/**
	 * `Class`
	 */
	export interface ClassFormProperties extends APIReferenceFormProperties {

		/** URL of the level resource for the class. */
		class_levels: FormControl<string | null | undefined>,

		/** Hit die of the class. (ex: 12 == 1d12). */
		hit_die: FormControl<number | null | undefined>,

		/** URL of the spell resource list for the class. */
		spells: FormControl<string | null | undefined>,
	}
	export function CreateClassFormGroup() {
		return new FormGroup<ClassFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			class_levels: new FormControl<string | null | undefined>(undefined),
			hit_die: new FormControl<number | null | undefined>(undefined),
			spells: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Multiclassing`
	 */
	export interface Multiclassing {

		/** List of choices of prerequisites to meet for. */
		prerequisite_options?: Array<Choice>;

		/** List of prerequisites that must be met. */
		prerequisites?: Array<Prerequisite>;

		/** List of proficiencies available when multiclassing. */
		proficiencies?: Array<APIReference>;

		/** List of choices of proficiencies that are given when multiclassing. */
		proficiency_choices?: Array<Choice>;
	}

	/**
	 * `Multiclassing`
	 */
	export interface MulticlassingFormProperties {
	}
	export function CreateMulticlassingFormGroup() {
		return new FormGroup<MulticlassingFormProperties>({
		});

	}


	/**
	 * `Prerequisite`
	 */
	export interface Prerequisite {
		ability_score?: APIReference;

		/** Minimum score to meet the prerequisite. */
		minimum_score?: number | null;
	}

	/**
	 * `Prerequisite`
	 */
	export interface PrerequisiteFormProperties {

		/** Minimum score to meet the prerequisite. */
		minimum_score: FormControl<number | null | undefined>,
	}
	export function CreatePrerequisiteFormGroup() {
		return new FormGroup<PrerequisiteFormProperties>({
			minimum_score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * `Spellcasting`
	 */
	export interface Spellcasting {

		/** Descriptions of the class' ability to cast spells. */
		SpellcastingInfo?: Array<SpellcastingInfo>;

		/** Level at which the class can start using its spellcasting abilities. */
		level?: number | null;

		/** Reference to the `AbilityScore` used for spellcasting by the class. */
		spellcasting_ability?: APIReference;
	}

	/**
	 * `Spellcasting`
	 */
	export interface SpellcastingFormProperties {

		/** Level at which the class can start using its spellcasting abilities. */
		level: FormControl<number | null | undefined>,
	}
	export function CreateSpellcastingFormGroup() {
		return new FormGroup<SpellcastingFormProperties>({
			level: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SpellcastingInfo {

		/** Feature description. */
		desc?: Array<string>;

		/** Feature name. */
		name?: string | null;
	}
	export interface SpellcastingInfoFormProperties {

		/** Feature name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSpellcastingInfoFormGroup() {
		return new FormGroup<SpellcastingInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClassStarting_equipment {

		/**
		 * `APIReference`
		 */
		equipment?: APIReference;
		quantity?: number | null;
	}
	export interface ClassStarting_equipmentFormProperties {
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateClassStarting_equipmentFormGroup() {
		return new FormGroup<ClassStarting_equipmentFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * `ClassLevel`
	 */
	export interface ClassLevel {

		/** Total number of ability score bonuses gained, added from previous levels. */
		ability_score_bonuses?: number | null;

		/** Class specific information such as dice values for bard songs and number of warlock invocations. */
		class_specific?: ClassLevelClass_specific;

		/** Features automatically gained at this level. */
		features?: Array<APIReference>;

		/** Resource index for shorthand searching. */
		index?: string | null;

		/** The number value for the current level object. */
		level?: number | null;

		/** Proficiency bonus for this class at the specified level. */
		prof_bonus?: number | null;

		/** Summary of spells known at this level. */
		spellcasting?: ClassLevelSpellcasting;

		/** URL of the referenced resource. */
		url?: string | null;
	}

	/**
	 * `ClassLevel`
	 */
	export interface ClassLevelFormProperties {

		/** Total number of ability score bonuses gained, added from previous levels. */
		ability_score_bonuses: FormControl<number | null | undefined>,

		/** Resource index for shorthand searching. */
		index: FormControl<string | null | undefined>,

		/** The number value for the current level object. */
		level: FormControl<number | null | undefined>,

		/** Proficiency bonus for this class at the specified level. */
		prof_bonus: FormControl<number | null | undefined>,

		/** URL of the referenced resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateClassLevelFormGroup() {
		return new FormGroup<ClassLevelFormProperties>({
			ability_score_bonuses: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			prof_bonus: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClassLevelClass_specific {
		brutal_critical_dice?: number | null;
		rage_count?: number | null;
		rage_damage_bonus?: number | null;
	}
	export interface ClassLevelClass_specificFormProperties {
		brutal_critical_dice: FormControl<number | null | undefined>,
		rage_count: FormControl<number | null | undefined>,
		rage_damage_bonus: FormControl<number | null | undefined>,
	}
	export function CreateClassLevelClass_specificFormGroup() {
		return new FormGroup<ClassLevelClass_specificFormProperties>({
			brutal_critical_dice: new FormControl<number | null | undefined>(undefined),
			rage_count: new FormControl<number | null | undefined>(undefined),
			rage_damage_bonus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClassLevelSpellcasting {
		cantrips_known?: number | null;
		spell_slots_level_1?: number | null;
		spell_slots_level_2?: number | null;
		spell_slots_level_3?: number | null;
		spell_slots_level_4?: number | null;
		spell_slots_level_5?: number | null;
		spell_slots_level_6?: number | null;
		spell_slots_level_7?: number | null;
		spell_slots_level_8?: number | null;
		spell_slots_level_9?: number | null;
		spells_known?: number | null;
	}
	export interface ClassLevelSpellcastingFormProperties {
		cantrips_known: FormControl<number | null | undefined>,
		spell_slots_level_1: FormControl<number | null | undefined>,
		spell_slots_level_2: FormControl<number | null | undefined>,
		spell_slots_level_3: FormControl<number | null | undefined>,
		spell_slots_level_4: FormControl<number | null | undefined>,
		spell_slots_level_5: FormControl<number | null | undefined>,
		spell_slots_level_6: FormControl<number | null | undefined>,
		spell_slots_level_7: FormControl<number | null | undefined>,
		spell_slots_level_8: FormControl<number | null | undefined>,
		spell_slots_level_9: FormControl<number | null | undefined>,
		spells_known: FormControl<number | null | undefined>,
	}
	export function CreateClassLevelSpellcastingFormGroup() {
		return new FormGroup<ClassLevelSpellcastingFormProperties>({
			cantrips_known: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_1: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_2: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_3: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_4: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_5: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_6: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_7: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_8: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_9: new FormControl<number | null | undefined>(undefined),
			spells_known: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * `Condition`
	 */
	export interface Condition extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Condition`
	 */
	export interface ConditionFormProperties extends APIReferenceFormProperties {
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Cost`
	 */
	export interface Cost {

		/** Numerical amount of coins. */
		quantity?: number | null;

		/** Unit of coinage. */
		unit?: string | null;
	}

	/**
	 * `Cost`
	 */
	export interface CostFormProperties {

		/** Numerical amount of coins. */
		quantity: FormControl<number | null | undefined>,

		/** Unit of coinage. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateCostFormGroup() {
		return new FormGroup<CostFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `DC`
	 */
	export interface DC {

		/**
		 * `APIReference`
		 */
		dc_type?: APIReference;

		/** Value to beat */
		dc_value?: number | null;

		/** Result of a successful save. Can be \"none\", \"half\", or \"other\" */
		success_type?: string | null;
	}

	/**
	 * `DC`
	 */
	export interface DCFormProperties {

		/** Value to beat */
		dc_value: FormControl<number | null | undefined>,

		/** Result of a successful save. Can be \"none\", \"half\", or \"other\" */
		success_type: FormControl<string | null | undefined>,
	}
	export function CreateDCFormGroup() {
		return new FormGroup<DCFormProperties>({
			dc_value: new FormControl<number | null | undefined>(undefined),
			success_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Damage`
	 */
	export interface Damage {
		damage_dice?: string | null;

		/**
		 * `APIReference`
		 */
		damage_type?: APIReference;
	}

	/**
	 * `Damage`
	 */
	export interface DamageFormProperties {
		damage_dice: FormControl<string | null | undefined>,
	}
	export function CreateDamageFormGroup() {
		return new FormGroup<DamageFormProperties>({
			damage_dice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * 'Spell Damage'
	 */
	export interface DamageAtCharacterLevel {
		damage_at_character_level?: string | null;

		/**
		 * `APIReference`
		 */
		damage_type?: APIReference;
	}

	/**
	 * 'Spell Damage'
	 */
	export interface DamageAtCharacterLevelFormProperties {
		damage_at_character_level: FormControl<string | null | undefined>,
	}
	export function CreateDamageAtCharacterLevelFormGroup() {
		return new FormGroup<DamageAtCharacterLevelFormProperties>({
			damage_at_character_level: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * 'Spell Damage'
	 */
	export interface DamageAtSlotLevel {
		damage_at_slot_level?: string | null;

		/**
		 * `APIReference`
		 */
		damage_type?: APIReference;
	}

	/**
	 * 'Spell Damage'
	 */
	export interface DamageAtSlotLevelFormProperties {
		damage_at_slot_level: FormControl<string | null | undefined>,
	}
	export function CreateDamageAtSlotLevelFormGroup() {
		return new FormGroup<DamageAtSlotLevelFormProperties>({
			damage_at_slot_level: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `DamageType`
	 */
	export interface DamageType extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `DamageType`
	 */
	export interface DamageTypeFormProperties extends APIReferenceFormProperties {
	}
	export function CreateDamageTypeFormGroup() {
		return new FormGroup<DamageTypeFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Equipment`
	 */
	export interface Equipment {
	}

	/**
	 * `Equipment`
	 */
	export interface EquipmentFormProperties {
	}
	export function CreateEquipmentFormGroup() {
		return new FormGroup<EquipmentFormProperties>({
		});

	}


	/**
	 * `EquipmentCategory`
	 */
	export interface EquipmentCategory extends APIReference {

		/** A list of the equipment that falls into this category. */
		equipment?: Array<APIReference>;
	}

	/**
	 * `EquipmentCategory`
	 */
	export interface EquipmentCategoryFormProperties extends APIReferenceFormProperties {
	}
	export function CreateEquipmentCategoryFormGroup() {
		return new FormGroup<EquipmentCategoryFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `EquipmentPack`
	 */
	export interface EquipmentPack extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `EquipmentPack`
	 */
	export interface EquipmentPackFormProperties extends APIReferenceFormProperties {
	}
	export function CreateEquipmentPackFormGroup() {
		return new FormGroup<EquipmentPackFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Feat`
	 */
	export interface Feat extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Feat`
	 */
	export interface FeatFormProperties extends APIReferenceFormProperties {
	}
	export function CreateFeatFormGroup() {
		return new FormGroup<FeatFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Feature`
	 */
	export interface Feature extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Feature`
	 */
	export interface FeatureFormProperties extends APIReferenceFormProperties {
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Gear`
	 */
	export interface Gear extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Gear`
	 */
	export interface GearFormProperties extends APIReferenceFormProperties {
	}
	export function CreateGearFormGroup() {
		return new FormGroup<GearFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Language`
	 */
	export interface Language extends APIReference {

		/** Brief description of the language. */
		desc?: string | null;

		/** Script used for writing in the language. */
		script?: string | null;
		type?: LanguageType | null;

		/** List of races that tend to speak the language. */
		typical_speakers?: Array<string>;
	}

	/**
	 * `Language`
	 */
	export interface LanguageFormProperties extends APIReferenceFormProperties {

		/** Brief description of the language. */
		desc: FormControl<string | null | undefined>,

		/** Script used for writing in the language. */
		script: FormControl<string | null | undefined>,
		type: FormControl<LanguageType | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LanguageType | null | undefined>(undefined),
		});

	}

	export enum LanguageType { Standard = 'Standard', Exotic = 'Exotic' }


	/**
	 * `MagicItem`
	 */
	export interface MagicItem extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `MagicItem`
	 */
	export interface MagicItemFormProperties extends APIReferenceFormProperties {
	}
	export function CreateMagicItemFormGroup() {
		return new FormGroup<MagicItemFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `MagicSchool`
	 */
	export interface MagicSchool extends APIReference {

		/** Brief description of the resource. */
		desc?: string | null;
	}

	/**
	 * `MagicSchool`
	 */
	export interface MagicSchoolFormProperties extends APIReferenceFormProperties {

		/** Brief description of the resource. */
		desc: FormControl<string | null | undefined>,
	}
	export function CreateMagicSchoolFormGroup() {
		return new FormGroup<MagicSchoolFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Monster`
	 */
	export interface Monster extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Monster`
	 */
	export interface MonsterFormProperties extends APIReferenceFormProperties {
	}
	export function CreateMonsterFormGroup() {
		return new FormGroup<MonsterFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Option`
	 */
	export interface Option {
	}

	/**
	 * `Option`
	 */
	export interface OptionFormProperties {
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
		});

	}


	/**
	 * `Option Set`
	 */
	export interface OptionSet {
	}

	/**
	 * `Option Set`
	 */
	export interface OptionSetFormProperties {
	}
	export function CreateOptionSetFormGroup() {
		return new FormGroup<OptionSetFormProperties>({
		});

	}


	/**
	 * `Proficiency`
	 */
	export interface Proficiency extends APIReference {

		/** Classes that start with this proficiency. */
		classes?: Array<APIReference>;

		/** Races that start with this proficiency. */
		races?: Array<APIReference>;

		/**
		 * `APIReference` to the full description of the related resource.
		 */
		reference?: APIReference;

		/** The general category of the proficiency. */
		type?: string | null;
	}

	/**
	 * `Proficiency`
	 */
	export interface ProficiencyFormProperties extends APIReferenceFormProperties {

		/** The general category of the proficiency. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProficiencyFormGroup() {
		return new FormGroup<ProficiencyFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Race`
	 */
	export interface Race extends APIReference {

		/** Racial bonuses to ability scores. */
		ability_bonuses?: Array<AbilityBonus>;

		/** Flavor description of possible ages for this race. */
		age?: string | null;

		/** Flavor description of likely alignments this race takes. */
		alignment?: string | null;

		/** Flavor description of the languages this race knows. */
		language_desc?: string | null;

		/** Starting languages for all new characters of this race. */
		languages?: Array<APIReference>;

		/** Size class of this race. */
		size?: string | null;

		/** Flavor description of height and weight for this race. */
		size_description?: string | null;

		/** Base move speed for this race (in feet per round). */
		speed?: number | null;

		/** Starting proficiencies for all new characters of this race. */
		starting_proficiencies?: Array<APIReference>;

		/**
		 * `Choice`
		 */
		starting_proficiency_options?: Choice;

		/** All possible subraces that this race includes. */
		subraces?: Array<APIReference>;

		/** Racial traits that provide benefits to its members. */
		traits?: Array<APIReference>;
	}

	/**
	 * `Race`
	 */
	export interface RaceFormProperties extends APIReferenceFormProperties {

		/** Flavor description of possible ages for this race. */
		age: FormControl<string | null | undefined>,

		/** Flavor description of likely alignments this race takes. */
		alignment: FormControl<string | null | undefined>,

		/** Flavor description of the languages this race knows. */
		language_desc: FormControl<string | null | undefined>,

		/** Size class of this race. */
		size: FormControl<string | null | undefined>,

		/** Flavor description of height and weight for this race. */
		size_description: FormControl<string | null | undefined>,

		/** Base move speed for this race (in feet per round). */
		speed: FormControl<number | null | undefined>,
	}
	export function CreateRaceFormGroup() {
		return new FormGroup<RaceFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			age: new FormControl<string | null | undefined>(undefined),
			alignment: new FormControl<string | null | undefined>(undefined),
			language_desc: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			size_description: new FormControl<string | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceDescription {

		/** Description of the resource. */
		desc?: Array<string>;
	}
	export interface ResourceDescriptionFormProperties {
	}
	export function CreateResourceDescriptionFormGroup() {
		return new FormGroup<ResourceDescriptionFormProperties>({
		});

	}


	/**
	 * `Rule`
	 */
	export interface Rule extends APIReference {

		/** Description of the rule. */
		desc?: string | null;

		/** List of sections for each subheading underneath the rule in the SRD. */
		subsections?: Array<APIReference>;
	}

	/**
	 * `Rule`
	 */
	export interface RuleFormProperties extends APIReferenceFormProperties {

		/** Description of the rule. */
		desc: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `RuleSection`
	 */
	export interface RuleSection extends APIReference {

		/** Description of the rule. */
		desc?: string | null;
	}

	/**
	 * `RuleSection`
	 */
	export interface RuleSectionFormProperties extends APIReferenceFormProperties {

		/** Description of the rule. */
		desc: FormControl<string | null | undefined>,
	}
	export function CreateRuleSectionFormGroup() {
		return new FormGroup<RuleSectionFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Skill`
	 */
	export interface Skill extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Skill`
	 */
	export interface SkillFormProperties extends APIReferenceFormProperties {
	}
	export function CreateSkillFormGroup() {
		return new FormGroup<SkillFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Spell`
	 */
	export interface Spell extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Spell`
	 */
	export interface SpellFormProperties extends APIReferenceFormProperties {
	}
	export function CreateSpellFormGroup() {
		return new FormGroup<SpellFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `SpellPrerequisite`
	 */
	export interface SpellPrerequisite extends APIReference {

		/** The type of prerequisite. */
		type?: string | null;
	}

	/**
	 * `SpellPrerequisite`
	 */
	export interface SpellPrerequisiteFormProperties extends APIReferenceFormProperties {

		/** The type of prerequisite. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSpellPrerequisiteFormGroup() {
		return new FormGroup<SpellPrerequisiteFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Subclass`
	 */
	export interface Subclass extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Subclass`
	 */
	export interface SubclassFormProperties extends APIReferenceFormProperties {
	}
	export function CreateSubclassFormGroup() {
		return new FormGroup<SubclassFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `SubclassLevel`
	 */
	export interface SubclassLevel {

		/** Total number of ability score bonuses gained, added from previous levels. */
		ability_score_bonuses?: number | null;

		/** Class specific information such as dice values for bard songs and number of warlock invocations. */
		classspecific?: any;

		/** List of features gained at this level. */
		features?: Array<APIReference>;

		/** Resource index for shorthand searching. */
		index?: string | null;

		/** Number value for the current level object. */
		level?: number | null;

		/** Proficiency bonus for this class at the specified level. */
		prof_bonus?: number | null;

		/** Summary of spells known at this level. */
		spellcasting?: SubclassLevelSpellcasting;

		/** URL of the referenced resource. */
		url?: string | null;
	}

	/**
	 * `SubclassLevel`
	 */
	export interface SubclassLevelFormProperties {

		/** Total number of ability score bonuses gained, added from previous levels. */
		ability_score_bonuses: FormControl<number | null | undefined>,

		/** Class specific information such as dice values for bard songs and number of warlock invocations. */
		classspecific: FormControl<any | null | undefined>,

		/** Resource index for shorthand searching. */
		index: FormControl<string | null | undefined>,

		/** Number value for the current level object. */
		level: FormControl<number | null | undefined>,

		/** Proficiency bonus for this class at the specified level. */
		prof_bonus: FormControl<number | null | undefined>,

		/** URL of the referenced resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubclassLevelFormGroup() {
		return new FormGroup<SubclassLevelFormProperties>({
			ability_score_bonuses: new FormControl<number | null | undefined>(undefined),
			classspecific: new FormControl<any | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			prof_bonus: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubclassLevelSpellcasting {
		cantrips_known?: number | null;
		spell_slots_level_1?: number | null;
		spell_slots_level_2?: number | null;
		spell_slots_level_3?: number | null;
		spell_slots_level_4?: number | null;
		spell_slots_level_5?: number | null;
		spell_slots_level_6?: number | null;
		spell_slots_level_7?: number | null;
		spell_slots_level_8?: number | null;
		spell_slots_level_9?: number | null;
		spells_known?: number | null;
	}
	export interface SubclassLevelSpellcastingFormProperties {
		cantrips_known: FormControl<number | null | undefined>,
		spell_slots_level_1: FormControl<number | null | undefined>,
		spell_slots_level_2: FormControl<number | null | undefined>,
		spell_slots_level_3: FormControl<number | null | undefined>,
		spell_slots_level_4: FormControl<number | null | undefined>,
		spell_slots_level_5: FormControl<number | null | undefined>,
		spell_slots_level_6: FormControl<number | null | undefined>,
		spell_slots_level_7: FormControl<number | null | undefined>,
		spell_slots_level_8: FormControl<number | null | undefined>,
		spell_slots_level_9: FormControl<number | null | undefined>,
		spells_known: FormControl<number | null | undefined>,
	}
	export function CreateSubclassLevelSpellcastingFormGroup() {
		return new FormGroup<SubclassLevelSpellcastingFormProperties>({
			cantrips_known: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_1: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_2: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_3: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_4: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_5: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_6: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_7: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_8: new FormControl<number | null | undefined>(undefined),
			spell_slots_level_9: new FormControl<number | null | undefined>(undefined),
			spells_known: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubclassLevelResource {

		/**
		 * `APIReference`
		 */
		class?: APIReference;
		features?: Array<APIReference>;
		index?: string | null;
		level?: number | null;

		/**
		 * `APIReference`
		 */
		subclass?: APIReference;
		url?: string | null;
	}
	export interface SubclassLevelResourceFormProperties {
		index: FormControl<string | null | undefined>,
		level: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubclassLevelResourceFormGroup() {
		return new FormGroup<SubclassLevelResourceFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Subrace`
	 */
	export interface Subrace extends APIReference {

		/** Additional ability bonuses for the subrace. */
		ability_bonuses?: Array<AbilityBonus>;

		/** Description of the subrace. */
		desc?: string | null;

		/**
		 * `Choice`
		 */
		language_options?: Choice;

		/** Starting languages for all new characters of the subrace. */
		languages?: Array<APIReference>;

		/** Parent race for the subrace. */
		race?: APIReference;

		/** List of traits that for the subrace. */
		racial_traits?: Array<APIReference>;

		/** Starting proficiencies for all new characters of the subrace. */
		starting_proficiencies?: Array<APIReference>;
	}

	/**
	 * `Subrace`
	 */
	export interface SubraceFormProperties extends APIReferenceFormProperties {

		/** Description of the subrace. */
		desc: FormControl<string | null | undefined>,
	}
	export function CreateSubraceFormGroup() {
		return new FormGroup<SubraceFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Trait`
	 */
	export interface Trait extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Trait`
	 */
	export interface TraitFormProperties extends APIReferenceFormProperties {
	}
	export function CreateTraitFormGroup() {
		return new FormGroup<TraitFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Weapon`
	 */
	export interface Weapon extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/**
	 * `Weapon`
	 */
	export interface WeaponFormProperties extends APIReferenceFormProperties {
	}
	export function CreateWeaponFormGroup() {
		return new FormGroup<WeaponFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WeaponProperty */
	export interface WeaponProperty extends APIReference {

		/** Description of the resource. */
		desc?: Array<string>;
	}

	/** WeaponProperty */
	export interface WeaponPropertyFormProperties extends APIReferenceFormProperties {
	}
	export function CreateWeaponPropertyFormGroup() {
		return new FormGroup<WeaponPropertyFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_response {

		/** Required */
		error: string;
	}
	export interface Error_responseFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
	}
	export function CreateError_responseFormGroup() {
		return new FormGroup<Error_responseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all resource URLs.
		 * Making a request to the API's base URL returns an object containing available endpoints.
		 * Get api
		 * @return {{[id: string]: string }} OK
		 */
		ApiGet(headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an ability score by index.
		 * # Ability Score
		 * Represents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]
		 * Get api/ability-scores/{index}
		 * @param {ApiAbility_scores_indexGetIndex} index The `index` of the ability score to get.
		 * @return {AbilityScore} OK
		 */
		ApiAbility_scores_indexGet(index: ApiAbility_scores_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<AbilityScore> {
			return this.http.get<AbilityScore>(this.baseUri + 'api/ability-scores/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an alignment by index.
		 * # Alignment
		 * A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]
		 * Get api/alignments/{index}
		 * @param {ApiAlignments_indexGetIndex} index The `index` of the alignment to get.
		 * @return {Alignment} OK
		 */
		ApiAlignments_indexGet(index: ApiAlignments_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Alignment> {
			return this.http.get<Alignment>(this.baseUri + 'api/alignments/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a background by index.
		 * # Background
		 * Every story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world. Choosing a background provides you with important story cues about your character's identity. [[SRD p60](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=60)]
		 * _Note:_ acolyte is the only background included in the SRD.
		 * Get api/backgrounds/{index}
		 * @param {ApiBackgrounds_indexGetIndex} index The `index` of the background to get.
		 * @return {Background} OK
		 */
		ApiBackgrounds_indexGet(index: ApiBackgrounds_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Background> {
			return this.http.get<Background>(this.baseUri + 'api/backgrounds/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a class by index.
		 * # Class
		 * A character class is a fundamental part of the identity and nature of
		 * characters in the Dungeons & Dragons role-playing game. A character's
		 * capabilities, strengths, and weaknesses are largely defined by its class.
		 * A character's class affects a character's available skills and abilities. [[SRD p8-55](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=8)]
		 * Get api/classes/{index}
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {Class} OK
		 */
		ApiClasses_indexGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Class> {
			return this.http.get<Class>(this.baseUri + 'api/classes/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get features available for a class.
		 * Get api/classes/{index}/features
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} List of features for the class.
		 */
		ApiClasses_indexFeaturesGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all level resources for a class.
		 * Get api/classes/{index}/levels
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @param {string} subclass Adds subclasses for class to the response
		 * @return {Array<ClassLevel>} OK
		 */
		ApiClasses_indexLevelsGetBySubclass(index: ApiClasses_indexGetIndex, subclass: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ClassLevel>> {
			return this.http.get<Array<ClassLevel>>(this.baseUri + 'api/classes/' + index + '/levels?subclass=' + (subclass == null ? '' : encodeURIComponent(subclass)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get level resource for a class and level.
		 * Get api/classes/{index}/levels/{class_level}
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {ClassLevel} OK
		 */
		ApiClasses_indexLevels_class_levelGet(index: ApiClasses_indexGetIndex, class_level: number, headersHandler?: () => HttpHeaders): Observable<ClassLevel> {
			return this.http.get<ClassLevel>(this.baseUri + 'api/classes/' + index + '/levels/' + class_level, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get features available to a class at the requested level.
		 * Get api/classes/{index}/levels/{class_level}/features
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} OK
		 */
		ApiClasses_indexLevels_class_levelFeaturesGet(index: ApiClasses_indexGetIndex, class_level: number, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/levels/' + class_level + '/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get spells of the requested level available to the class.
		 * Get api/classes/{index}/levels/{spell_level}/spells
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} OK
		 */
		ApiClasses_indexLevels_spell_levelSpellsGet(index: ApiClasses_indexGetIndex, spell_level: number, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/levels/' + spell_level + '/spells', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get multiclassing resource for a class.
		 * Get api/classes/{index}/multi-classing
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {Multiclassing} OK
		 */
		ApiClasses_indexMulti_classingGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Multiclassing> {
			return this.http.get<Multiclassing>(this.baseUri + 'api/classes/' + index + '/multi-classing', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get proficiencies available for a class.
		 * Get api/classes/{index}/proficiencies
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} List of proficiencies for the class.
		 */
		ApiClasses_indexProficienciesGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/proficiencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get spellcasting info for a class.
		 * Get api/classes/{index}/spellcasting
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {Spellcasting} OK
		 */
		ApiClasses_indexSpellcastingGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Spellcasting> {
			return this.http.get<Spellcasting>(this.baseUri + 'api/classes/' + index + '/spellcasting', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get spells available for a class.
		 * Get api/classes/{index}/spells
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} OK
		 */
		ApiClasses_indexSpellsGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/spells', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get subclasses available for a class.
		 * Get api/classes/{index}/subclasses
		 * @param {ApiClasses_indexGetIndex} index The `index` of the class to get.
		 * @return {APIReferenceList} OK
		 */
		ApiClasses_indexSubclassesGet(index: ApiClasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/classes/' + index + '/subclasses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a condition by index.
		 * # Condition
		 * A condition alters a creature’s capabilities in a variety of ways and can
		 * arise as a result of a spell, a class feature, a monster’s attack, or other
		 * effect. Most conditions, such as blinded, are impairments, but a few, such
		 * as invisible, can be advantageous.
		 * Get api/conditions/{index}
		 * @param {ApiConditions_indexGetIndex} index The `index` of the condition to get.
		 * @return {Condition} OK
		 */
		ApiConditions_indexGet(index: ApiConditions_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Condition> {
			return this.http.get<Condition>(this.baseUri + 'api/conditions/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a damage type by index.
		 * # Damage type
		 * Different attacks, damaging spells, and other harmful effects deal different
		 * types of damage. Damage types have no rules of their own, but other rules,
		 * such as damage resistance, rely on the types.
		 * Get api/damage-types/{index}
		 * @param {ApiDamage_types_indexGetIndex} index The `index` of the damage type to get.
		 * @return {DamageType} OK
		 */
		ApiDamage_types_indexGet(index: ApiDamage_types_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<DamageType> {
			return this.http.get<DamageType>(this.baseUri + 'api/damage-types/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an equipment category by index.
		 * These are the categories that various equipment fall under.
		 * Get api/equipment-categories/{index}
		 * @param {string} index The `index` of the equipment category score to get.
		 * Available values can be found in the resource list for this endpoint.
		 * @return {EquipmentCategory} OK
		 */
		ApiEquipment_categories_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<EquipmentCategory> {
			return this.http.get<EquipmentCategory>(this.baseUri + 'api/equipment-categories/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an equipment item by index.
		 * # Equipment
		 * Opportunities abound to find treasure, equipment, weapons, armor, and more
		 * in the dungeons you explore. Normally, you can sell your treasures and
		 * trinkets when you return to a town or other settlement, provided that you
		 * can find buyers and merchants interested in your loot.
		 * Get api/equipment/{index}
		 * @param {string} index The `index` of the equipment to get.
		 * Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `equipment`.
		 * @return {Equipment} OK
		 */
		ApiEquipment_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<Equipment> {
			return this.http.get<Equipment>(this.baseUri + 'api/equipment/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a feat by index.
		 * # Feat
		 * A feat is a boon a character can receive at level up instead of an ability score increase.
		 * Get api/feats/{index}
		 * @param {ApiFeats_indexGetIndex} index The `index` of the feat to get.
		 * @return {Feat} OK
		 */
		ApiFeats_indexGet(index: ApiFeats_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Feat> {
			return this.http.get<Feat>(this.baseUri + 'api/feats/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a feature by index.
		 * # Feature
		 * When you gain a new level in a class, you get its features for that level.
		 * You don’t, however, receive the class’s starting Equipment, and a few
		 * features have additional rules when you’re multiclassing: Channel Divinity,
		 * Extra Attack, Unarmored Defense, and Spellcasting.
		 * Get api/features/{index}
		 * @param {string} index The `index` of the feature to get.
		 * Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `features`.
		 * @return {Feature} OK
		 */
		ApiFeatures_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<Feature> {
			return this.http.get<Feature>(this.baseUri + 'api/features/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a language by index.
		 * # Language
		 * Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]
		 * Get api/languages/{index}
		 * @param {ApiLanguages_indexGetIndex} index The `index` of the language to get.
		 * @return {Language} OK
		 */
		ApiLanguages_indexGet(index: ApiLanguages_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Language> {
			return this.http.get<Language>(this.baseUri + 'api/languages/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a magic item by index.
		 * These are the various magic items you can find in the game.
		 * Get api/magic-items/{index}
		 * @param {string} index The `index` of the magic item to get.
		 * Available values can be found in the resource list for this endpoint.
		 * @return {MagicItem} OK
		 */
		ApiMagic_items_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<MagicItem> {
			return this.http.get<MagicItem>(this.baseUri + 'api/magic-items/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a magic school by index.
		 * # Magic School
		 * Academies of magic group spells into eight categories called schools of
		 * magic. Scholars, particularly wizards, apply these categories to all spells,
		 * believing that all magic functions in essentially the same way, whether it
		 * derives from rigorous study or is bestowed by a deity.
		 * Get api/magic-schools/{index}
		 * @param {ApiMagic_schools_indexGetIndex} index The `index` of the magic school to get.
		 * @return {MagicSchool} OK
		 */
		ApiMagic_schools_indexGet(index: ApiMagic_schools_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<MagicSchool> {
			return this.http.get<MagicSchool>(this.baseUri + 'api/magic-schools/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of monsters with optional filtering
		 * Get api/monsters
		 * @param {Array<number>} challenge_rating The challenge rating or ratings to filter on.
		 * @return {APIReferenceList} OK
		 */
		ApiMonstersGetByChallenge_rating(challenge_rating: Array<number> | null | undefined, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/monsters?' + challenge_rating?.map(z => `challenge_rating=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get monster by index.
		 * Get api/monsters/{index}
		 * @param {string} index The `index` of the `Monster` to get.
		 * @return {Monster} OK
		 */
		ApiMonsters_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<Monster> {
			return this.http.get<Monster>(this.baseUri + 'api/monsters/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a proficiency by index.
		 * # Proficiency
		 * By virtue of race, class, and background a character is proficient at using certain skills, weapons, and equipment. Characters can also gain additional proficiencies at higher levels or by multiclassing. A characters starting proficiencies are determined during character creation.
		 * Get api/proficiencies/{index}
		 * @param {string} index The `index` of the proficiency to get.
		 * Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `proficiencies`.
		 * @return {Proficiency} OK
		 */
		ApiProficiencies_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<Proficiency> {
			return this.http.get<Proficiency>(this.baseUri + 'api/proficiencies/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a race by index.
		 * Each race grants your character ability and skill bonuses as well as racial traits.
		 * Get api/races/{index}
		 * @param {ApiRaces_indexGetIndex} index The `index` of the race to get.
		 * @return {Race} OK
		 */
		ApiRaces_indexGet(index: ApiRaces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Race> {
			return this.http.get<Race>(this.baseUri + 'api/races/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get proficiencies available for a race.
		 * Get api/races/{index}/proficiencies
		 * @param {ApiRaces_indexGetIndex} index The `index` of the race to get.
		 * @return {APIReferenceList} List of proficiencies for the race.
		 */
		ApiRaces_indexProficienciesGet(index: ApiRaces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/races/' + index + '/proficiencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get subraces available for a race.
		 * Get api/races/{index}/subraces
		 * @param {ApiRaces_indexGetIndex} index The `index` of the race to get.
		 * @return {APIReferenceList} List of subraces for the race.
		 */
		ApiRaces_indexSubracesGet(index: ApiRaces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/races/' + index + '/subraces', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get traits available for a race.
		 * Get api/races/{index}/traits
		 * @param {ApiRaces_indexGetIndex} index The `index` of the race to get.
		 * @return {APIReferenceList} List of traits for the race.
		 */
		ApiRaces_indexTraitsGet(index: ApiRaces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/races/' + index + '/traits', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a rule section by index.
		 * Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD.
		 * Get api/rule-sections/{index}
		 * @param {ApiRule_sections_indexGetIndex} index The `index` of the rule section to get.
		 * @return {RuleSection} OK
		 */
		ApiRule_sections_indexGet(index: ApiRule_sections_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<RuleSection> {
			return this.http.get<RuleSection>(this.baseUri + 'api/rule-sections/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a rule by index.
		 * # Rule
		 * Rules are pages in the SRD that document the mechanics of Dungeons and Dragons.
		 * Rules have descriptions which is the text directly underneath the rule heading
		 * in the SRD. Rules also have subsections for each heading underneath the rule in the SRD.
		 * Get api/rules/{index}
		 * @param {ApiRules_indexGetIndex} index The `index` of the rule to get.
		 * @return {Rule} OK
		 */
		ApiRules_indexGet(index: ApiRules_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'api/rules/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a skill by index.
		 * # Skill
		 * Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]
		 * Get api/skills/{index}
		 * @param {ApiSkills_indexGetIndex} index The `index` of the skill to get.
		 * @return {Skill} OK
		 */
		ApiSkills_indexGet(index: ApiSkills_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Skill> {
			return this.http.get<Skill>(this.baseUri + 'api/skills/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of spells with optional filtering.
		 * Get api/spells
		 * @param {Array<number>} level The level or levels to filter on.
		 * @param {Array<string>} school The magic school or schools to filter on.
		 * @return {APIReferenceList} OK
		 */
		ApiSpellsGetByLevelAndSchool(level: Array<number> | null | undefined, school: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/spells?' + level?.map(z => `level=${z}`).join('&') + '&' + school?.map(z => `school=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a spell by index.
		 * Get api/spells/{index}
		 * @param {string} index The `index` of the `Spell` to get.
		 * Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `spells`.
		 * @return {Spell} OK
		 */
		ApiSpells_indexGet(index: string, headersHandler?: () => HttpHeaders): Observable<Spell> {
			return this.http.get<Spell>(this.baseUri + 'api/spells/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a subclass by index.
		 * Subclasses reflect the different paths a class may take as levels are gained.
		 * Get api/subclasses/{index}
		 * @param {ApiSubclasses_indexGetIndex} index The `index` of the subclass to get.
		 * @return {Subclass} OK
		 */
		ApiSubclasses_indexGet(index: ApiSubclasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Subclass> {
			return this.http.get<Subclass>(this.baseUri + 'api/subclasses/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get features available for a subclass.
		 * Get api/subclasses/{index}/features
		 * @param {ApiSubclasses_indexGetIndex} index The `index` of the subclass to get.
		 * @return {APIReferenceList} List of features for the subclass.
		 */
		ApiSubclasses_indexFeaturesGet(index: ApiSubclasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/subclasses/' + index + '/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all level resources for a subclass.
		 * Get api/subclasses/{index}/levels
		 * @param {ApiSubclasses_indexGetIndex} index The `index` of the subclass to get.
		 * @return {Array<SubclassLevelResource>} List of level resource for the subclass.
		 */
		ApiSubclasses_indexLevelsGet(index: ApiSubclasses_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Array<SubclassLevelResource>> {
			return this.http.get<Array<SubclassLevelResource>>(this.baseUri + 'api/subclasses/' + index + '/levels', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get level resources for a subclass and level.
		 * Get api/subclasses/{index}/levels/{subclass_level}
		 * @param {ApiSubclasses_indexGetIndex} index The `index` of the subclass to get.
		 * @return {SubclassLevel} Level resource for the subclass and level.
		 */
		ApiSubclasses_indexLevels_subclass_levelGet(index: ApiSubclasses_indexGetIndex, subclass_level: number, headersHandler?: () => HttpHeaders): Observable<SubclassLevel> {
			return this.http.get<SubclassLevel>(this.baseUri + 'api/subclasses/' + index + '/levels/' + subclass_level, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get features of the requested spell level available to the class.
		 * Get api/subclasses/{index}/levels/{subclass_level}/features
		 * @param {ApiSubclasses_indexGetIndex} index The `index` of the subclass to get.
		 * @return {APIReferenceList} List of features for the subclass and level.
		 */
		ApiSubclasses_indexLevels_subclass_levelFeaturesGet(index: ApiSubclasses_indexGetIndex, subclass_level: number, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/subclasses/' + index + '/levels/' + subclass_level + '/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a subrace by index.
		 * Subraces reflect the different varieties of a certain parent race.
		 * Get api/subraces/{index}
		 * @param {ApiSubraces_indexGetIndex} index The `index` of the subrace to get.
		 * @return {Subrace} OK
		 */
		ApiSubraces_indexGet(index: ApiSubraces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Subrace> {
			return this.http.get<Subrace>(this.baseUri + 'api/subraces/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get proficiences available for a subrace.
		 * Get api/subraces/{index}/proficiencies
		 * @param {ApiSubraces_indexGetIndex} index The `index` of the subrace to get.
		 * @return {APIReferenceList} List of proficiences for the subrace.
		 */
		ApiSubraces_indexProficienciesGet(index: ApiSubraces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/subraces/' + index + '/proficiencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get traits available for a subrace.
		 * Get api/subraces/{index}/traits
		 * @param {ApiSubraces_indexGetIndex} index The `index` of the subrace to get.
		 * @return {APIReferenceList} List of traits for the subrace.
		 */
		ApiSubraces_indexTraitsGet(index: ApiSubraces_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/subraces/' + index + '/traits', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a trait by index.
		 * Get api/traits/{index}
		 * @param {ApiTraits_indexGetIndex} index The `index` of the `Trait` to get.
		 * @return {Trait} OK
		 */
		ApiTraits_indexGet(index: ApiTraits_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<Trait> {
			return this.http.get<Trait>(this.baseUri + 'api/traits/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a weapon property by index.
		 * Get api/weapon-properties/{index}
		 * @param {ApiWeapon_properties_indexGetIndex} index The `index` of the weapon property to get.
		 * @return {WeaponProperty} OK
		 */
		ApiWeapon_properties_indexGet(index: ApiWeapon_properties_indexGetIndex, headersHandler?: () => HttpHeaders): Observable<WeaponProperty> {
			return this.http.get<WeaponProperty>(this.baseUri + 'api/weapon-properties/' + index, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of all available resources for an endpoint.
		 * Currently only the [`/spells`](#get-/api/spells) and [`/monsters`](#get-/api/monsters) endpoints support filtering with query parameters. Use of these query parameters is documented under the respective [Spells](#tag--Spells) and [Monsters](#tag--Monsters) sections.
		 * Get api/{endpoint}
		 * @return {APIReferenceList} OK
		 */
		Api_endpointGet(endpoint: Api_endpointGetEndpoint, headersHandler?: () => HttpHeaders): Observable<APIReferenceList> {
			return this.http.get<APIReferenceList>(this.baseUri + 'api/' + endpoint, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ApiAbility_scores_indexGetIndex { cha = 'cha', con = 'con', dex = 'dex', int = 'int', str = 'str', wis = 'wis' }

	export enum ApiAlignments_indexGetIndex { 'chaotic-neutral' = 'chaotic-neutral', 'chaotic-evil' = 'chaotic-evil', 'chaotic-good' = 'chaotic-good', 'lawful-neutral' = 'lawful-neutral', 'lawful-evil' = 'lawful-evil', 'lawful-good' = 'lawful-good', neutral = 'neutral', 'neutral-evil' = 'neutral-evil', 'neutral-good' = 'neutral-good' }

	export enum ApiBackgrounds_indexGetIndex { acolyte = 'acolyte' }

	export enum ApiClasses_indexGetIndex { barbarian = 'barbarian', bard = 'bard', cleric = 'cleric', druid = 'druid', fighter = 'fighter', monk = 'monk', paladin = 'paladin', ranger = 'ranger', rogue = 'rogue', sorcerer = 'sorcerer', warlock = 'warlock', wizard = 'wizard' }

	export enum ApiConditions_indexGetIndex { blinded = 'blinded', charmed = 'charmed', deafened = 'deafened', exhaustion = 'exhaustion', frightened = 'frightened', grappled = 'grappled', incapacitated = 'incapacitated', invisible = 'invisible', paralyzed = 'paralyzed', petrified = 'petrified', poisoned = 'poisoned', prone = 'prone', restrained = 'restrained', stunned = 'stunned', unconscious = 'unconscious' }

	export enum ApiDamage_types_indexGetIndex { acid = 'acid', bludgeoning = 'bludgeoning', cold = 'cold', fire = 'fire', force = 'force', lightning = 'lightning', necrotic = 'necrotic', piercing = 'piercing', poison = 'poison', psychic = 'psychic', radiant = 'radiant', slashing = 'slashing', thunder = 'thunder' }

	export enum ApiFeats_indexGetIndex { grappler = 'grappler' }

	export enum ApiLanguages_indexGetIndex { abyssal = 'abyssal', celestial = 'celestial', common = 'common', 'deep-speech' = 'deep-speech', draconic = 'draconic', dwarvish = 'dwarvish', elvish = 'elvish', giant = 'giant', gnomish = 'gnomish', goblin = 'goblin', halfling = 'halfling', infernal = 'infernal', orc = 'orc', primordial = 'primordial', sylvan = 'sylvan', undercommon = 'undercommon' }

	export enum ApiMagic_schools_indexGetIndex { abjuration = 'abjuration', conjuration = 'conjuration', divination = 'divination', enchantment = 'enchantment', evocation = 'evocation', illusion = 'illusion', necromancy = 'necromancy', transmutation = 'transmutation' }

	export enum ApiRaces_indexGetIndex { dragonborn = 'dragonborn', dwarf = 'dwarf', elf = 'elf', gnome = 'gnome', 'half-elf' = 'half-elf', 'half-orc' = 'half-orc', halfling = 'halfling', human = 'human', tiefling = 'tiefling' }

	export enum ApiRule_sections_indexGetIndex { 'ability-checks' = 'ability-checks', 'ability-scores-and-modifiers' = 'ability-scores-and-modifiers', 'actions-in-combat' = 'actions-in-combat', 'advantage-and-disadvantage' = 'advantage-and-disadvantage', 'between-adventures' = 'between-adventures', 'casting-a-spell' = 'casting-a-spell', cover = 'cover', 'damage-and-healing' = 'damage-and-healing', diseases = 'diseases', 'fantasy-historical-pantheons' = 'fantasy-historical-pantheons', madness = 'madness', 'making-an-attack' = 'making-an-attack', 'mounted-combat' = 'mounted-combat', movement = 'movement', 'movement-and-position' = 'movement-and-position', objects = 'objects', poisons = 'poisons', 'proficiency-bonus' = 'proficiency-bonus', resting = 'resting', 'saving-throws' = 'saving-throws', 'sentient-magic-items' = 'sentient-magic-items', 'standard-exchange-rates' = 'standard-exchange-rates', 'the-environment' = 'the-environment', 'the-order-of-combat' = 'the-order-of-combat', 'the-planes-of-existence' = 'the-planes-of-existence', time = 'time', traps = 'traps', 'underwater-combat' = 'underwater-combat', 'using-each-ability' = 'using-each-ability', 'what-is-a-spell' = 'what-is-a-spell' }

	export enum ApiRules_indexGetIndex { adventuring = 'adventuring', appendix = 'appendix', combat = 'combat', equipment = 'equipment', spellcasting = 'spellcasting', 'using-ability-scores' = 'using-ability-scores' }

	export enum ApiSkills_indexGetIndex { acrobatics = 'acrobatics', 'animal-handling' = 'animal-handling', arcana = 'arcana', athletics = 'athletics', deception = 'deception', history = 'history', insight = 'insight', intimidation = 'intimidation', investigation = 'investigation', medicine = 'medicine', nature = 'nature', perception = 'perception', performance = 'performance', persuasion = 'persuasion', religion = 'religion', 'sleight-of-hand' = 'sleight-of-hand', stealth = 'stealth', survival = 'survival' }

	export enum ApiSubclasses_indexGetIndex { berserker = 'berserker', champion = 'champion', devotion = 'devotion', draconic = 'draconic', evocation = 'evocation', fiend = 'fiend', hunter = 'hunter', land = 'land', life = 'life', lore = 'lore', 'open-hand' = 'open-hand', thief = 'thief' }

	export enum ApiSubraces_indexGetIndex { 'high-elf' = 'high-elf', 'hill-dwarf' = 'hill-dwarf', 'lightfoot-halfling' = 'lightfoot-halfling', 'rock-gnome' = 'rock-gnome' }

	export enum ApiTraits_indexGetIndex { 'artificers-lore' = 'artificers-lore', brave = 'brave', 'breath-weapon' = 'breath-weapon', 'damage-resistance' = 'damage-resistance', darkvision = 'darkvision', 'draconic-ancestry' = 'draconic-ancestry', 'draconic-ancestry-black' = 'draconic-ancestry-black', 'draconic-ancestry-blue' = 'draconic-ancestry-blue', 'draconic-ancestry-brass' = 'draconic-ancestry-brass', 'draconic-ancestry-bronze' = 'draconic-ancestry-bronze', 'draconic-ancestry-copper' = 'draconic-ancestry-copper', 'draconic-ancestry-gold' = 'draconic-ancestry-gold', 'draconic-ancestry-green' = 'draconic-ancestry-green', 'draconic-ancestry-red' = 'draconic-ancestry-red', 'draconic-ancestry-silver' = 'draconic-ancestry-silver', 'draconic-ancestry-white' = 'draconic-ancestry-white', 'dwarven-combat-training' = 'dwarven-combat-training', 'dwarven-resilience' = 'dwarven-resilience', 'dwarven-toughness' = 'dwarven-toughness', 'elf-weapon-training' = 'elf-weapon-training', 'extra-language' = 'extra-language', 'fey-ancestry' = 'fey-ancestry', 'gnome-cunning' = 'gnome-cunning', 'halfling-nimbleness' = 'halfling-nimbleness', 'hellish-resistance' = 'hellish-resistance', 'high-elf-cantrip' = 'high-elf-cantrip', 'infernal-legacy' = 'infernal-legacy', 'keen-senses' = 'keen-senses', lucky = 'lucky', menacing = 'menacing', 'naturally-stealthy' = 'naturally-stealthy', 'relentless-endurance' = 'relentless-endurance', 'savage-attacks' = 'savage-attacks', 'skill-versatility' = 'skill-versatility', stonecunning = 'stonecunning', tinker = 'tinker', 'tool-proficiency' = 'tool-proficiency', trance = 'trance' }

	export enum ApiWeapon_properties_indexGetIndex { ammunition = 'ammunition', finesse = 'finesse', heavy = 'heavy', light = 'light', loading = 'loading', monk = 'monk', reach = 'reach', special = 'special', thrown = 'thrown', 'two-handed' = 'two-handed', versatile = 'versatile' }

	export enum Api_endpointGetEndpoint { 'ability-scores' = 'ability-scores', alignments = 'alignments', backgrounds = 'backgrounds', classes = 'classes', conditions = 'conditions', 'damage-types' = 'damage-types', equipment = 'equipment', 'equipment-categories' = 'equipment-categories', feats = 'feats', features = 'features', languages = 'languages', 'magic-items' = 'magic-items', 'magic-schools' = 'magic-schools', monsters = 'monsters', proficiencies = 'proficiencies', races = 'races', 'rule-sections' = 'rule-sections', rules = 'rules', skills = 'skills', spells = 'spells', subclasses = 'subclasses', subraces = 'subraces', traits = 'traits', 'weapon-properties' = 'weapon-properties' }

}

