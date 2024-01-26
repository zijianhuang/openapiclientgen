import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AgeRatingDeclaration {
		attributes?: AgeRatingDeclarationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: AgeRatingDeclarationType;
	}
	export interface AgeRatingDeclarationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AgeRatingDeclarationType | null | undefined>,
	}
	export function CreateAgeRatingDeclarationFormGroup() {
		return new FormGroup<AgeRatingDeclarationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AgeRatingDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgeRatingDeclarationAttributes {
		alcoholTobaccoOrDrugUseOrReferences?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		contests?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		gambling?: boolean | null;
		gamblingAndContests?: boolean | null;
		gamblingSimulated?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		horrorOrFearThemes?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		kidsAgeBand?: AgeRatingDeclarationAttributesKidsAgeBand | null;
		matureOrSuggestiveThemes?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		medicalOrTreatmentInformation?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		profanityOrCrudeHumor?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		seventeenPlus?: boolean | null;
		sexualContentGraphicAndNudity?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		sexualContentOrNudity?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		unrestrictedWebAccess?: boolean | null;
		violenceCartoonOrFantasy?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		violenceRealistic?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		violenceRealisticProlongedGraphicOrSadistic?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
	}
	export interface AgeRatingDeclarationAttributesFormProperties {
		alcoholTobaccoOrDrugUseOrReferences: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		contests: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		gambling: FormControl<boolean | null | undefined>,
		gamblingAndContests: FormControl<boolean | null | undefined>,
		gamblingSimulated: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		horrorOrFearThemes: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		kidsAgeBand: FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>,
		matureOrSuggestiveThemes: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		medicalOrTreatmentInformation: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		profanityOrCrudeHumor: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		seventeenPlus: FormControl<boolean | null | undefined>,
		sexualContentGraphicAndNudity: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		sexualContentOrNudity: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		unrestrictedWebAccess: FormControl<boolean | null | undefined>,
		violenceCartoonOrFantasy: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		violenceRealistic: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		violenceRealisticProlongedGraphicOrSadistic: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
	}
	export function CreateAgeRatingDeclarationAttributesFormGroup() {
		return new FormGroup<AgeRatingDeclarationAttributesFormProperties>({
			alcoholTobaccoOrDrugUseOrReferences: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			contests: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			gambling: new FormControl<boolean | null | undefined>(undefined),
			gamblingAndContests: new FormControl<boolean | null | undefined>(undefined),
			gamblingSimulated: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			horrorOrFearThemes: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			kidsAgeBand: new FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>(undefined),
			matureOrSuggestiveThemes: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			medicalOrTreatmentInformation: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			profanityOrCrudeHumor: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			seventeenPlus: new FormControl<boolean | null | undefined>(undefined),
			sexualContentGraphicAndNudity: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			sexualContentOrNudity: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			unrestrictedWebAccess: new FormControl<boolean | null | undefined>(undefined),
			violenceCartoonOrFantasy: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			violenceRealistic: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			violenceRealisticProlongedGraphicOrSadistic: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
		});

	}

	export enum AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences { NONE = 0, INFREQUENT_OR_MILD = 1, FREQUENT_OR_INTENSE = 2 }

	export enum AgeRatingDeclarationAttributesKidsAgeBand { FIVE_AND_UNDER = 0, SIX_TO_EIGHT = 1, NINE_TO_ELEVEN = 2 }

	export interface ResourceLinks {

		/** Required */
		self: string;
	}
	export interface ResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateResourceLinksFormGroup() {
		return new FormGroup<ResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AgeRatingDeclarationType { ageRatingDeclarations = 0 }

	export interface AgeRatingDeclarationResponse {

		/** Required */
		data: AgeRatingDeclaration;

		/** Required */
		links: DocumentLinks;
	}
	export interface AgeRatingDeclarationResponseFormProperties {
	}
	export function CreateAgeRatingDeclarationResponseFormGroup() {
		return new FormGroup<AgeRatingDeclarationResponseFormProperties>({
		});

	}

	export interface DocumentLinks {

		/** Required */
		self: string;
	}
	export interface DocumentLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateDocumentLinksFormGroup() {
		return new FormGroup<DocumentLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgeRatingDeclarationUpdateRequest {

		/** Required */
		data: AgeRatingDeclarationUpdateRequestData;
	}
	export interface AgeRatingDeclarationUpdateRequestFormProperties {
	}
	export function CreateAgeRatingDeclarationUpdateRequestFormGroup() {
		return new FormGroup<AgeRatingDeclarationUpdateRequestFormProperties>({
		});

	}

	export interface AgeRatingDeclarationUpdateRequestData {
		attributes?: AgeRatingDeclarationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AgeRatingDeclarationType;
	}
	export interface AgeRatingDeclarationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AgeRatingDeclarationType | null | undefined>,
	}
	export function CreateAgeRatingDeclarationUpdateRequestDataFormGroup() {
		return new FormGroup<AgeRatingDeclarationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AgeRatingDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgeRatingDeclarationUpdateRequestDataAttributes {
		alcoholTobaccoOrDrugUseOrReferences?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		contests?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		gambling?: boolean | null;
		gamblingAndContests?: boolean | null;
		gamblingSimulated?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		horrorOrFearThemes?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		kidsAgeBand?: AgeRatingDeclarationAttributesKidsAgeBand | null;
		matureOrSuggestiveThemes?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		medicalOrTreatmentInformation?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		profanityOrCrudeHumor?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		seventeenPlus?: boolean | null;
		sexualContentGraphicAndNudity?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		sexualContentOrNudity?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		unrestrictedWebAccess?: boolean | null;
		violenceCartoonOrFantasy?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		violenceRealistic?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
		violenceRealisticProlongedGraphicOrSadistic?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null;
	}
	export interface AgeRatingDeclarationUpdateRequestDataAttributesFormProperties {
		alcoholTobaccoOrDrugUseOrReferences: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		contests: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		gambling: FormControl<boolean | null | undefined>,
		gamblingAndContests: FormControl<boolean | null | undefined>,
		gamblingSimulated: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		horrorOrFearThemes: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		kidsAgeBand: FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>,
		matureOrSuggestiveThemes: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		medicalOrTreatmentInformation: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		profanityOrCrudeHumor: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		seventeenPlus: FormControl<boolean | null | undefined>,
		sexualContentGraphicAndNudity: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		sexualContentOrNudity: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		unrestrictedWebAccess: FormControl<boolean | null | undefined>,
		violenceCartoonOrFantasy: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		violenceRealistic: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
		violenceRealisticProlongedGraphicOrSadistic: FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>,
	}
	export function CreateAgeRatingDeclarationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AgeRatingDeclarationUpdateRequestDataAttributesFormProperties>({
			alcoholTobaccoOrDrugUseOrReferences: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			contests: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			gambling: new FormControl<boolean | null | undefined>(undefined),
			gamblingAndContests: new FormControl<boolean | null | undefined>(undefined),
			gamblingSimulated: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			horrorOrFearThemes: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			kidsAgeBand: new FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>(undefined),
			matureOrSuggestiveThemes: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			medicalOrTreatmentInformation: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			profanityOrCrudeHumor: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			seventeenPlus: new FormControl<boolean | null | undefined>(undefined),
			sexualContentGraphicAndNudity: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			sexualContentOrNudity: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			unrestrictedWebAccess: new FormControl<boolean | null | undefined>(undefined),
			violenceCartoonOrFantasy: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			violenceRealistic: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
			violenceRealisticProlongedGraphicOrSadistic: new FormControl<AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferences | null | undefined>(undefined),
		});

	}

	export interface App {
		attributes?: AppAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppRelationships;

		/** Required */
		type: AppType;
	}
	export interface AppFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppAttributes {
		availableInNewTerritories?: boolean | null;
		bundleId?: string | null;
		contentRightsDeclaration?: AppAttributesContentRightsDeclaration | null;
		isOrEverWasMadeForKids?: boolean | null;
		name?: string | null;
		primaryLocale?: string | null;
		sku?: string | null;
	}
	export interface AppAttributesFormProperties {
		availableInNewTerritories: FormControl<boolean | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		contentRightsDeclaration: FormControl<AppAttributesContentRightsDeclaration | null | undefined>,
		isOrEverWasMadeForKids: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		primaryLocale: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateAppAttributesFormGroup() {
		return new FormGroup<AppAttributesFormProperties>({
			availableInNewTerritories: new FormControl<boolean | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			contentRightsDeclaration: new FormControl<AppAttributesContentRightsDeclaration | null | undefined>(undefined),
			isOrEverWasMadeForKids: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryLocale: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppAttributesContentRightsDeclaration { DOES_NOT_USE_THIRD_PARTY_CONTENT = 0, USES_THIRD_PARTY_CONTENT = 1 }

	export interface AppRelationships {
		appInfos?: AppRelationshipsAppInfos;
		appStoreVersions?: AppRelationshipsAppStoreVersions;
		availableTerritories?: AppRelationshipsAvailableTerritories;
		betaAppLocalizations?: AppRelationshipsBetaAppLocalizations;
		betaAppReviewDetail?: AppRelationshipsBetaAppReviewDetail;
		betaGroups?: AppRelationshipsBetaGroups;
		betaLicenseAgreement?: AppRelationshipsBetaLicenseAgreement;
		builds?: AppRelationshipsBuilds;
		endUserLicenseAgreement?: AppRelationshipsEndUserLicenseAgreement;
		gameCenterEnabledVersions?: AppRelationshipsGameCenterEnabledVersions;
		inAppPurchases?: AppRelationshipsInAppPurchases;
		preOrder?: AppRelationshipsPreOrder;
		preReleaseVersions?: AppRelationshipsPreReleaseVersions;
		prices?: AppRelationshipsPrices;
	}
	export interface AppRelationshipsFormProperties {
	}
	export function CreateAppRelationshipsFormGroup() {
		return new FormGroup<AppRelationshipsFormProperties>({
		});

	}

	export interface AppRelationshipsAppInfos {
		AppRelationshipsAppInfosData?: Array<AppRelationshipsAppInfosData>;
		links?: AppRelationshipsAppInfosLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsAppInfosFormProperties {
	}
	export function CreateAppRelationshipsAppInfosFormGroup() {
		return new FormGroup<AppRelationshipsAppInfosFormProperties>({
		});

	}

	export interface AppRelationshipsAppInfosData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppInfosDataType;
	}
	export interface AppRelationshipsAppInfosDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppInfosDataType | null | undefined>,
	}
	export function CreateAppRelationshipsAppInfosDataFormGroup() {
		return new FormGroup<AppRelationshipsAppInfosDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppInfosDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsAppInfosDataType { appInfos = 0 }

	export interface AppRelationshipsAppInfosLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsAppInfosLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsAppInfosLinksFormGroup() {
		return new FormGroup<AppRelationshipsAppInfosLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagingInformation {

		/** Required */
		paging: PagingInformationPaging;
	}
	export interface PagingInformationFormProperties {
	}
	export function CreatePagingInformationFormGroup() {
		return new FormGroup<PagingInformationFormProperties>({
		});

	}

	export interface PagingInformationPaging {

		/** Required */
		limit: number;

		/** Required */
		total: number;
	}
	export interface PagingInformationPagingFormProperties {

		/** Required */
		limit: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagingInformationPagingFormGroup() {
		return new FormGroup<PagingInformationPagingFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppRelationshipsAppStoreVersions {
		AppRelationshipsAppStoreVersionsData?: Array<AppRelationshipsAppStoreVersionsData>;
		links?: AppRelationshipsAppStoreVersionsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsAppStoreVersionsFormProperties {
	}
	export function CreateAppRelationshipsAppStoreVersionsFormGroup() {
		return new FormGroup<AppRelationshipsAppStoreVersionsFormProperties>({
		});

	}

	export interface AppRelationshipsAppStoreVersionsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppRelationshipsAppStoreVersionsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsAppStoreVersionsDataFormGroup() {
		return new FormGroup<AppRelationshipsAppStoreVersionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsAppStoreVersionsDataType { appStoreVersions = 0 }

	export interface AppRelationshipsAppStoreVersionsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsAppStoreVersionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsAppStoreVersionsLinksFormGroup() {
		return new FormGroup<AppRelationshipsAppStoreVersionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsAvailableTerritories {
		AppRelationshipsAvailableTerritoriesData?: Array<AppRelationshipsAvailableTerritoriesData>;
		links?: AppRelationshipsAvailableTerritoriesLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsAvailableTerritoriesFormProperties {
	}
	export function CreateAppRelationshipsAvailableTerritoriesFormGroup() {
		return new FormGroup<AppRelationshipsAvailableTerritoriesFormProperties>({
		});

	}

	export interface AppRelationshipsAvailableTerritoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface AppRelationshipsAvailableTerritoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateAppRelationshipsAvailableTerritoriesDataFormGroup() {
		return new FormGroup<AppRelationshipsAvailableTerritoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsAvailableTerritoriesDataType { territories = 0 }

	export interface AppRelationshipsAvailableTerritoriesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsAvailableTerritoriesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsAvailableTerritoriesLinksFormGroup() {
		return new FormGroup<AppRelationshipsAvailableTerritoriesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsBetaAppLocalizations {
		AppRelationshipsBetaAppLocalizationsData?: Array<AppRelationshipsBetaAppLocalizationsData>;
		links?: AppRelationshipsBetaAppLocalizationsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsBetaAppLocalizationsFormProperties {
	}
	export function CreateAppRelationshipsBetaAppLocalizationsFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppLocalizationsFormProperties>({
		});

	}

	export interface AppRelationshipsBetaAppLocalizationsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaAppLocalizationsDataType;
	}
	export interface AppRelationshipsBetaAppLocalizationsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsBetaAppLocalizationsDataFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppLocalizationsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsBetaAppLocalizationsDataType { betaAppLocalizations = 0 }

	export interface AppRelationshipsBetaAppLocalizationsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsBetaAppLocalizationsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsBetaAppLocalizationsLinksFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppLocalizationsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsBetaAppReviewDetail {
		data?: AppRelationshipsBetaAppReviewDetailData;
		links?: AppRelationshipsBetaAppReviewDetailLinks;
	}
	export interface AppRelationshipsBetaAppReviewDetailFormProperties {
	}
	export function CreateAppRelationshipsBetaAppReviewDetailFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppReviewDetailFormProperties>({
		});

	}

	export interface AppRelationshipsBetaAppReviewDetailData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaAppReviewDetailDataType;
	}
	export interface AppRelationshipsBetaAppReviewDetailDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>,
	}
	export function CreateAppRelationshipsBetaAppReviewDetailDataFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppReviewDetailDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsBetaAppReviewDetailDataType { betaAppReviewDetails = 0 }

	export interface AppRelationshipsBetaAppReviewDetailLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsBetaAppReviewDetailLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsBetaAppReviewDetailLinksFormGroup() {
		return new FormGroup<AppRelationshipsBetaAppReviewDetailLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsBetaGroups {
		AppRelationshipsBetaGroupsData?: Array<AppRelationshipsBetaGroupsData>;
		links?: AppRelationshipsBetaGroupsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsBetaGroupsFormProperties {
	}
	export function CreateAppRelationshipsBetaGroupsFormGroup() {
		return new FormGroup<AppRelationshipsBetaGroupsFormProperties>({
		});

	}

	export interface AppRelationshipsBetaGroupsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface AppRelationshipsBetaGroupsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsBetaGroupsDataFormGroup() {
		return new FormGroup<AppRelationshipsBetaGroupsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsBetaGroupsDataType { betaGroups = 0 }

	export interface AppRelationshipsBetaGroupsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsBetaGroupsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsBetaGroupsLinksFormGroup() {
		return new FormGroup<AppRelationshipsBetaGroupsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsBetaLicenseAgreement {
		data?: AppRelationshipsBetaLicenseAgreementData;
		links?: AppRelationshipsBetaLicenseAgreementLinks;
	}
	export interface AppRelationshipsBetaLicenseAgreementFormProperties {
	}
	export function CreateAppRelationshipsBetaLicenseAgreementFormGroup() {
		return new FormGroup<AppRelationshipsBetaLicenseAgreementFormProperties>({
		});

	}

	export interface AppRelationshipsBetaLicenseAgreementData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaLicenseAgreementDataType;
	}
	export interface AppRelationshipsBetaLicenseAgreementDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>,
	}
	export function CreateAppRelationshipsBetaLicenseAgreementDataFormGroup() {
		return new FormGroup<AppRelationshipsBetaLicenseAgreementDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsBetaLicenseAgreementDataType { betaLicenseAgreements = 0 }

	export interface AppRelationshipsBetaLicenseAgreementLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsBetaLicenseAgreementLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsBetaLicenseAgreementLinksFormGroup() {
		return new FormGroup<AppRelationshipsBetaLicenseAgreementLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsBuilds {
		AppRelationshipsBuildsData?: Array<AppRelationshipsBuildsData>;
		links?: AppRelationshipsBuildsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsBuildsFormProperties {
	}
	export function CreateAppRelationshipsBuildsFormGroup() {
		return new FormGroup<AppRelationshipsBuildsFormProperties>({
		});

	}

	export interface AppRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsBuildsDataFormGroup() {
		return new FormGroup<AppRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsBuildsDataType { builds = 0 }

	export interface AppRelationshipsBuildsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsBuildsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsBuildsLinksFormGroup() {
		return new FormGroup<AppRelationshipsBuildsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsEndUserLicenseAgreement {
		data?: AppRelationshipsEndUserLicenseAgreementData;
		links?: AppRelationshipsEndUserLicenseAgreementLinks;
	}
	export interface AppRelationshipsEndUserLicenseAgreementFormProperties {
	}
	export function CreateAppRelationshipsEndUserLicenseAgreementFormGroup() {
		return new FormGroup<AppRelationshipsEndUserLicenseAgreementFormProperties>({
		});

	}

	export interface AppRelationshipsEndUserLicenseAgreementData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsEndUserLicenseAgreementDataType;
	}
	export interface AppRelationshipsEndUserLicenseAgreementDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>,
	}
	export function CreateAppRelationshipsEndUserLicenseAgreementDataFormGroup() {
		return new FormGroup<AppRelationshipsEndUserLicenseAgreementDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsEndUserLicenseAgreementDataType { endUserLicenseAgreements = 0 }

	export interface AppRelationshipsEndUserLicenseAgreementLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsEndUserLicenseAgreementLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsEndUserLicenseAgreementLinksFormGroup() {
		return new FormGroup<AppRelationshipsEndUserLicenseAgreementLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsGameCenterEnabledVersions {
		AppRelationshipsGameCenterEnabledVersionsData?: Array<AppRelationshipsGameCenterEnabledVersionsData>;
		links?: AppRelationshipsGameCenterEnabledVersionsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsGameCenterEnabledVersionsFormProperties {
	}
	export function CreateAppRelationshipsGameCenterEnabledVersionsFormGroup() {
		return new FormGroup<AppRelationshipsGameCenterEnabledVersionsFormProperties>({
		});

	}

	export interface AppRelationshipsGameCenterEnabledVersionsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsGameCenterEnabledVersionsDataType;
	}
	export interface AppRelationshipsGameCenterEnabledVersionsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsGameCenterEnabledVersionsDataFormGroup() {
		return new FormGroup<AppRelationshipsGameCenterEnabledVersionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsGameCenterEnabledVersionsDataType { gameCenterEnabledVersions = 0 }

	export interface AppRelationshipsGameCenterEnabledVersionsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsGameCenterEnabledVersionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsGameCenterEnabledVersionsLinksFormGroup() {
		return new FormGroup<AppRelationshipsGameCenterEnabledVersionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsInAppPurchases {
		AppRelationshipsInAppPurchasesData?: Array<AppRelationshipsInAppPurchasesData>;
		links?: AppRelationshipsInAppPurchasesLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsInAppPurchasesFormProperties {
	}
	export function CreateAppRelationshipsInAppPurchasesFormGroup() {
		return new FormGroup<AppRelationshipsInAppPurchasesFormProperties>({
		});

	}

	export interface AppRelationshipsInAppPurchasesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsInAppPurchasesDataType;
	}
	export interface AppRelationshipsInAppPurchasesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsInAppPurchasesDataType | null | undefined>,
	}
	export function CreateAppRelationshipsInAppPurchasesDataFormGroup() {
		return new FormGroup<AppRelationshipsInAppPurchasesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsInAppPurchasesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsInAppPurchasesDataType { inAppPurchases = 0 }

	export interface AppRelationshipsInAppPurchasesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsInAppPurchasesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsInAppPurchasesLinksFormGroup() {
		return new FormGroup<AppRelationshipsInAppPurchasesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsPreOrder {
		data?: AppRelationshipsPreOrderData;
		links?: AppRelationshipsPreOrderLinks;
	}
	export interface AppRelationshipsPreOrderFormProperties {
	}
	export function CreateAppRelationshipsPreOrderFormGroup() {
		return new FormGroup<AppRelationshipsPreOrderFormProperties>({
		});

	}

	export interface AppRelationshipsPreOrderData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPreOrderDataType;
	}
	export interface AppRelationshipsPreOrderDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreOrderDataType | null | undefined>,
	}
	export function CreateAppRelationshipsPreOrderDataFormGroup() {
		return new FormGroup<AppRelationshipsPreOrderDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreOrderDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsPreOrderDataType { appPreOrders = 0 }

	export interface AppRelationshipsPreOrderLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsPreOrderLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsPreOrderLinksFormGroup() {
		return new FormGroup<AppRelationshipsPreOrderLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsPreReleaseVersions {
		AppRelationshipsPreReleaseVersionsData?: Array<AppRelationshipsPreReleaseVersionsData>;
		links?: AppRelationshipsPreReleaseVersionsLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsPreReleaseVersionsFormProperties {
	}
	export function CreateAppRelationshipsPreReleaseVersionsFormGroup() {
		return new FormGroup<AppRelationshipsPreReleaseVersionsFormProperties>({
		});

	}

	export interface AppRelationshipsPreReleaseVersionsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPreReleaseVersionsDataType;
	}
	export interface AppRelationshipsPreReleaseVersionsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>,
	}
	export function CreateAppRelationshipsPreReleaseVersionsDataFormGroup() {
		return new FormGroup<AppRelationshipsPreReleaseVersionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsPreReleaseVersionsDataType { preReleaseVersions = 0 }

	export interface AppRelationshipsPreReleaseVersionsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsPreReleaseVersionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsPreReleaseVersionsLinksFormGroup() {
		return new FormGroup<AppRelationshipsPreReleaseVersionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppRelationshipsPrices {
		AppRelationshipsPricesData?: Array<AppRelationshipsPricesData>;
		links?: AppRelationshipsPricesLinks;
		meta?: PagingInformation;
	}
	export interface AppRelationshipsPricesFormProperties {
	}
	export function CreateAppRelationshipsPricesFormGroup() {
		return new FormGroup<AppRelationshipsPricesFormProperties>({
		});

	}

	export interface AppRelationshipsPricesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPricesDataType;
	}
	export interface AppRelationshipsPricesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPricesDataType | null | undefined>,
	}
	export function CreateAppRelationshipsPricesDataFormGroup() {
		return new FormGroup<AppRelationshipsPricesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPricesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppRelationshipsPricesDataType { appPrices = 0 }

	export interface AppRelationshipsPricesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppRelationshipsPricesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppRelationshipsPricesLinksFormGroup() {
		return new FormGroup<AppRelationshipsPricesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppType { apps = 0 }

	export interface AppBetaTestersLinkagesRequest {

		/** Required */
		AppBetaTestersLinkagesRequestData: Array<AppBetaTestersLinkagesRequestData>;
	}
	export interface AppBetaTestersLinkagesRequestFormProperties {
	}
	export function CreateAppBetaTestersLinkagesRequestFormGroup() {
		return new FormGroup<AppBetaTestersLinkagesRequestFormProperties>({
		});

	}

	export interface AppBetaTestersLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface AppBetaTestersLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateAppBetaTestersLinkagesRequestDataFormGroup() {
		return new FormGroup<AppBetaTestersLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppBetaTestersLinkagesRequestDataType { betaTesters = 0 }

	export interface AppCategoriesResponse {

		/** Required */
		data: Array<AppCategory>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppCategoriesResponseFormProperties {
	}
	export function CreateAppCategoriesResponseFormGroup() {
		return new FormGroup<AppCategoriesResponseFormProperties>({
		});

	}

	export interface AppCategory {
		attributes?: AppCategoryAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppCategoryRelationships;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppCategoryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppCategoryFormGroup() {
		return new FormGroup<AppCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppCategoryAttributes {
		platforms?: Array<Platform>;
	}
	export interface AppCategoryAttributesFormProperties {
	}
	export function CreateAppCategoryAttributesFormGroup() {
		return new FormGroup<AppCategoryAttributesFormProperties>({
		});

	}

	export enum Platform { IOS = 0, MAC_OS = 1, TV_OS = 2 }

	export interface AppCategoryRelationships {
		parent?: AppCategoryRelationshipsParent;
		subcategories?: AppCategoryRelationshipsSubcategories;
	}
	export interface AppCategoryRelationshipsFormProperties {
	}
	export function CreateAppCategoryRelationshipsFormGroup() {
		return new FormGroup<AppCategoryRelationshipsFormProperties>({
		});

	}

	export interface AppCategoryRelationshipsParent {
		data?: AppCategoryRelationshipsParentData;
		links?: AppCategoryRelationshipsParentLinks;
	}
	export interface AppCategoryRelationshipsParentFormProperties {
	}
	export function CreateAppCategoryRelationshipsParentFormGroup() {
		return new FormGroup<AppCategoryRelationshipsParentFormProperties>({
		});

	}

	export interface AppCategoryRelationshipsParentData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppCategoryRelationshipsParentDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppCategoryRelationshipsParentDataFormGroup() {
		return new FormGroup<AppCategoryRelationshipsParentDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppCategoryRelationshipsParentDataType { appCategories = 0 }

	export interface AppCategoryRelationshipsParentLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppCategoryRelationshipsParentLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppCategoryRelationshipsParentLinksFormGroup() {
		return new FormGroup<AppCategoryRelationshipsParentLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppCategoryRelationshipsSubcategories {
		AppCategoryRelationshipsSubcategoriesData?: Array<AppCategoryRelationshipsSubcategoriesData>;
		links?: AppCategoryRelationshipsSubcategoriesLinks;
		meta?: PagingInformation;
	}
	export interface AppCategoryRelationshipsSubcategoriesFormProperties {
	}
	export function CreateAppCategoryRelationshipsSubcategoriesFormGroup() {
		return new FormGroup<AppCategoryRelationshipsSubcategoriesFormProperties>({
		});

	}

	export interface AppCategoryRelationshipsSubcategoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppCategoryRelationshipsSubcategoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppCategoryRelationshipsSubcategoriesDataFormGroup() {
		return new FormGroup<AppCategoryRelationshipsSubcategoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppCategoryRelationshipsSubcategoriesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppCategoryRelationshipsSubcategoriesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppCategoryRelationshipsSubcategoriesLinksFormGroup() {
		return new FormGroup<AppCategoryRelationshipsSubcategoriesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagedDocumentLinks {
		first?: string | null;
		next?: string | null;

		/** Required */
		self: string;
	}
	export interface PagedDocumentLinksFormProperties {
		first: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePagedDocumentLinksFormGroup() {
		return new FormGroup<PagedDocumentLinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppCategoryResponse {

		/** Required */
		data: AppCategory;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppCategoryResponseFormProperties {
	}
	export function CreateAppCategoryResponseFormGroup() {
		return new FormGroup<AppCategoryResponseFormProperties>({
		});

	}

	export interface AppEncryptionDeclaration {
		attributes?: AppEncryptionDeclarationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppEncryptionDeclarationRelationships;

		/** Required */
		type: AppEncryptionDeclarationType;
	}
	export interface AppEncryptionDeclarationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppEncryptionDeclarationType | null | undefined>,
	}
	export function CreateAppEncryptionDeclarationFormGroup() {
		return new FormGroup<AppEncryptionDeclarationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppEncryptionDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppEncryptionDeclarationAttributes {
		appEncryptionDeclarationState?: AppEncryptionDeclarationAttributesAppEncryptionDeclarationState | null;
		availableOnFrenchStore?: boolean | null;
		codeValue?: string | null;
		containsProprietaryCryptography?: boolean | null;
		containsThirdPartyCryptography?: boolean | null;
		documentName?: string | null;
		documentType?: string | null;
		documentUrl?: string | null;
		exempt?: boolean | null;
		platform?: Platform | null;
		uploadedDate?: Date | null;
		usesEncryption?: boolean | null;
	}
	export interface AppEncryptionDeclarationAttributesFormProperties {
		appEncryptionDeclarationState: FormControl<AppEncryptionDeclarationAttributesAppEncryptionDeclarationState | null | undefined>,
		availableOnFrenchStore: FormControl<boolean | null | undefined>,
		codeValue: FormControl<string | null | undefined>,
		containsProprietaryCryptography: FormControl<boolean | null | undefined>,
		containsThirdPartyCryptography: FormControl<boolean | null | undefined>,
		documentName: FormControl<string | null | undefined>,
		documentType: FormControl<string | null | undefined>,
		documentUrl: FormControl<string | null | undefined>,
		exempt: FormControl<boolean | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		uploadedDate: FormControl<Date | null | undefined>,
		usesEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateAppEncryptionDeclarationAttributesFormGroup() {
		return new FormGroup<AppEncryptionDeclarationAttributesFormProperties>({
			appEncryptionDeclarationState: new FormControl<AppEncryptionDeclarationAttributesAppEncryptionDeclarationState | null | undefined>(undefined),
			availableOnFrenchStore: new FormControl<boolean | null | undefined>(undefined),
			codeValue: new FormControl<string | null | undefined>(undefined),
			containsProprietaryCryptography: new FormControl<boolean | null | undefined>(undefined),
			containsThirdPartyCryptography: new FormControl<boolean | null | undefined>(undefined),
			documentName: new FormControl<string | null | undefined>(undefined),
			documentType: new FormControl<string | null | undefined>(undefined),
			documentUrl: new FormControl<string | null | undefined>(undefined),
			exempt: new FormControl<boolean | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			uploadedDate: new FormControl<Date | null | undefined>(undefined),
			usesEncryption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AppEncryptionDeclarationAttributesAppEncryptionDeclarationState { IN_REVIEW = 0, APPROVED = 1, REJECTED = 2, INVALID = 3, EXPIRED = 4 }

	export interface AppEncryptionDeclarationRelationships {
		app?: AppEncryptionDeclarationRelationshipsApp;
	}
	export interface AppEncryptionDeclarationRelationshipsFormProperties {
	}
	export function CreateAppEncryptionDeclarationRelationshipsFormGroup() {
		return new FormGroup<AppEncryptionDeclarationRelationshipsFormProperties>({
		});

	}

	export interface AppEncryptionDeclarationRelationshipsApp {
		data?: AppEncryptionDeclarationRelationshipsAppData;
		links?: AppEncryptionDeclarationRelationshipsAppLinks;
	}
	export interface AppEncryptionDeclarationRelationshipsAppFormProperties {
	}
	export function CreateAppEncryptionDeclarationRelationshipsAppFormGroup() {
		return new FormGroup<AppEncryptionDeclarationRelationshipsAppFormProperties>({
		});

	}

	export interface AppEncryptionDeclarationRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppEncryptionDeclarationRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppEncryptionDeclarationRelationshipsAppDataFormGroup() {
		return new FormGroup<AppEncryptionDeclarationRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppEncryptionDeclarationRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppEncryptionDeclarationRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppEncryptionDeclarationRelationshipsAppLinksFormGroup() {
		return new FormGroup<AppEncryptionDeclarationRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppEncryptionDeclarationType { appEncryptionDeclarations = 0 }

	export interface AppEncryptionDeclarationBuildsLinkagesRequest {

		/** Required */
		AppEncryptionDeclarationBuildsLinkagesRequestData: Array<AppEncryptionDeclarationBuildsLinkagesRequestData>;
	}
	export interface AppEncryptionDeclarationBuildsLinkagesRequestFormProperties {
	}
	export function CreateAppEncryptionDeclarationBuildsLinkagesRequestFormGroup() {
		return new FormGroup<AppEncryptionDeclarationBuildsLinkagesRequestFormProperties>({
		});

	}

	export interface AppEncryptionDeclarationBuildsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppEncryptionDeclarationBuildsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppEncryptionDeclarationBuildsLinkagesRequestDataFormGroup() {
		return new FormGroup<AppEncryptionDeclarationBuildsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppEncryptionDeclarationResponse {

		/** Required */
		data: AppEncryptionDeclaration;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppEncryptionDeclarationResponseFormProperties {
	}
	export function CreateAppEncryptionDeclarationResponseFormGroup() {
		return new FormGroup<AppEncryptionDeclarationResponseFormProperties>({
		});

	}

	export enum AppEncryptionDeclarationState { IN_REVIEW = 0, APPROVED = 1, REJECTED = 2, INVALID = 3, EXPIRED = 4 }

	export interface AppEncryptionDeclarationsResponse {

		/** Required */
		data: Array<AppEncryptionDeclaration>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppEncryptionDeclarationsResponseFormProperties {
	}
	export function CreateAppEncryptionDeclarationsResponseFormGroup() {
		return new FormGroup<AppEncryptionDeclarationsResponseFormProperties>({
		});

	}

	export interface AppInfo {
		attributes?: AppInfoAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppInfoRelationships;

		/** Required */
		type: AppRelationshipsAppInfosDataType;
	}
	export interface AppInfoFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppInfosDataType | null | undefined>,
	}
	export function CreateAppInfoFormGroup() {
		return new FormGroup<AppInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppInfosDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoAttributes {
		appStoreAgeRating?: AppInfoAttributesAppStoreAgeRating | null;
		appStoreState?: AppInfoAttributesAppStoreState | null;
		brazilAgeRating?: AppInfoAttributesBrazilAgeRating | null;
		kidsAgeBand?: AgeRatingDeclarationAttributesKidsAgeBand | null;
	}
	export interface AppInfoAttributesFormProperties {
		appStoreAgeRating: FormControl<AppInfoAttributesAppStoreAgeRating | null | undefined>,
		appStoreState: FormControl<AppInfoAttributesAppStoreState | null | undefined>,
		brazilAgeRating: FormControl<AppInfoAttributesBrazilAgeRating | null | undefined>,
		kidsAgeBand: FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>,
	}
	export function CreateAppInfoAttributesFormGroup() {
		return new FormGroup<AppInfoAttributesFormProperties>({
			appStoreAgeRating: new FormControl<AppInfoAttributesAppStoreAgeRating | null | undefined>(undefined),
			appStoreState: new FormControl<AppInfoAttributesAppStoreState | null | undefined>(undefined),
			brazilAgeRating: new FormControl<AppInfoAttributesBrazilAgeRating | null | undefined>(undefined),
			kidsAgeBand: new FormControl<AgeRatingDeclarationAttributesKidsAgeBand | null | undefined>(undefined),
		});

	}

	export enum AppInfoAttributesAppStoreAgeRating { FOUR_PLUS = 0, NINE_PLUS = 1, TWELVE_PLUS = 2, SEVENTEEN_PLUS = 3 }

	export enum AppInfoAttributesAppStoreState { DEVELOPER_REMOVED_FROM_SALE = 0, DEVELOPER_REJECTED = 1, IN_REVIEW = 2, INVALID_BINARY = 3, METADATA_REJECTED = 4, PENDING_APPLE_RELEASE = 5, PENDING_CONTRACT = 6, PENDING_DEVELOPER_RELEASE = 7, PREPARE_FOR_SUBMISSION = 8, PREORDER_READY_FOR_SALE = 9, PROCESSING_FOR_APP_STORE = 10, READY_FOR_SALE = 11, REJECTED = 12, REMOVED_FROM_SALE = 13, WAITING_FOR_EXPORT_COMPLIANCE = 14, WAITING_FOR_REVIEW = 15, REPLACED_WITH_NEW_VERSION = 16 }

	export enum AppInfoAttributesBrazilAgeRating { L = 0, TEN = 1, TWELVE = 2, FOURTEEN = 3, SIXTEEN = 4, EIGHTEEN = 5 }

	export interface AppInfoRelationships {
		ageRatingDeclaration?: AppInfoRelationshipsAgeRatingDeclaration;
		app?: AppInfoRelationshipsApp;
		appInfoLocalizations?: AppInfoRelationshipsAppInfoLocalizations;
		primaryCategory?: AppInfoRelationshipsPrimaryCategory;
		primarySubcategoryOne?: AppInfoRelationshipsPrimarySubcategoryOne;
		primarySubcategoryTwo?: AppInfoRelationshipsPrimarySubcategoryTwo;
		secondaryCategory?: AppInfoRelationshipsSecondaryCategory;
		secondarySubcategoryOne?: AppInfoRelationshipsSecondarySubcategoryOne;
		secondarySubcategoryTwo?: AppInfoRelationshipsSecondarySubcategoryTwo;
	}
	export interface AppInfoRelationshipsFormProperties {
	}
	export function CreateAppInfoRelationshipsFormGroup() {
		return new FormGroup<AppInfoRelationshipsFormProperties>({
		});

	}

	export interface AppInfoRelationshipsAgeRatingDeclaration {
		data?: AppInfoRelationshipsAgeRatingDeclarationData;
		links?: AppInfoRelationshipsAgeRatingDeclarationLinks;
	}
	export interface AppInfoRelationshipsAgeRatingDeclarationFormProperties {
	}
	export function CreateAppInfoRelationshipsAgeRatingDeclarationFormGroup() {
		return new FormGroup<AppInfoRelationshipsAgeRatingDeclarationFormProperties>({
		});

	}

	export interface AppInfoRelationshipsAgeRatingDeclarationData {

		/** Required */
		id: string;

		/** Required */
		type: AgeRatingDeclarationType;
	}
	export interface AppInfoRelationshipsAgeRatingDeclarationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AgeRatingDeclarationType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAgeRatingDeclarationDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsAgeRatingDeclarationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AgeRatingDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsAgeRatingDeclarationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsAgeRatingDeclarationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAgeRatingDeclarationLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsAgeRatingDeclarationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsApp {
		data?: AppInfoRelationshipsAppData;
		links?: AppInfoRelationshipsAppLinks;
	}
	export interface AppInfoRelationshipsAppFormProperties {
	}
	export function CreateAppInfoRelationshipsAppFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppFormProperties>({
		});

	}

	export interface AppInfoRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppInfoRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAppDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAppLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsAppInfoLocalizations {
		AppInfoRelationshipsAppInfoLocalizationsData?: Array<AppInfoRelationshipsAppInfoLocalizationsData>;
		links?: AppInfoRelationshipsAppInfoLocalizationsLinks;
		meta?: PagingInformation;
	}
	export interface AppInfoRelationshipsAppInfoLocalizationsFormProperties {
	}
	export function CreateAppInfoRelationshipsAppInfoLocalizationsFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppInfoLocalizationsFormProperties>({
		});

	}

	export interface AppInfoRelationshipsAppInfoLocalizationsData {

		/** Required */
		id: string;

		/** Required */
		type: AppInfoRelationshipsAppInfoLocalizationsDataType;
	}
	export interface AppInfoRelationshipsAppInfoLocalizationsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAppInfoLocalizationsDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppInfoLocalizationsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppInfoRelationshipsAppInfoLocalizationsDataType { appInfoLocalizations = 0 }

	export interface AppInfoRelationshipsAppInfoLocalizationsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsAppInfoLocalizationsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsAppInfoLocalizationsLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsAppInfoLocalizationsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsPrimaryCategory {
		data?: AppInfoRelationshipsPrimaryCategoryData;
		links?: AppInfoRelationshipsPrimaryCategoryLinks;
	}
	export interface AppInfoRelationshipsPrimaryCategoryFormProperties {
	}
	export function CreateAppInfoRelationshipsPrimaryCategoryFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimaryCategoryFormProperties>({
		});

	}

	export interface AppInfoRelationshipsPrimaryCategoryData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsPrimaryCategoryDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimaryCategoryDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimaryCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsPrimaryCategoryLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsPrimaryCategoryLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimaryCategoryLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimaryCategoryLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryOne {
		data?: AppInfoRelationshipsPrimarySubcategoryOneData;
		links?: AppInfoRelationshipsPrimarySubcategoryOneLinks;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryOneFormProperties {
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryOneFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryOneFormProperties>({
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryOneData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryOneDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryOneDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryOneDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryOneLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryOneLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryOneLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryOneLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryTwo {
		data?: AppInfoRelationshipsPrimarySubcategoryTwoData;
		links?: AppInfoRelationshipsPrimarySubcategoryTwoLinks;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryTwoFormProperties {
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryTwoFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryTwoFormProperties>({
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryTwoData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryTwoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryTwoDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryTwoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsPrimarySubcategoryTwoLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsPrimarySubcategoryTwoLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsPrimarySubcategoryTwoLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsPrimarySubcategoryTwoLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsSecondaryCategory {
		data?: AppInfoRelationshipsSecondaryCategoryData;
		links?: AppInfoRelationshipsSecondaryCategoryLinks;
	}
	export interface AppInfoRelationshipsSecondaryCategoryFormProperties {
	}
	export function CreateAppInfoRelationshipsSecondaryCategoryFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondaryCategoryFormProperties>({
		});

	}

	export interface AppInfoRelationshipsSecondaryCategoryData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsSecondaryCategoryDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondaryCategoryDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondaryCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsSecondaryCategoryLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsSecondaryCategoryLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondaryCategoryLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondaryCategoryLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryOne {
		data?: AppInfoRelationshipsSecondarySubcategoryOneData;
		links?: AppInfoRelationshipsSecondarySubcategoryOneLinks;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryOneFormProperties {
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryOneFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryOneFormProperties>({
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryOneData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryOneDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryOneDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryOneDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryOneLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryOneLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryOneLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryOneLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryTwo {
		data?: AppInfoRelationshipsSecondarySubcategoryTwoData;
		links?: AppInfoRelationshipsSecondarySubcategoryTwoLinks;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryTwoFormProperties {
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryTwoFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryTwoFormProperties>({
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryTwoData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryTwoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryTwoDataFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryTwoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoRelationshipsSecondarySubcategoryTwoLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoRelationshipsSecondarySubcategoryTwoLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoRelationshipsSecondarySubcategoryTwoLinksFormGroup() {
		return new FormGroup<AppInfoRelationshipsSecondarySubcategoryTwoLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoLocalization {
		attributes?: AppInfoLocalizationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppInfoLocalizationRelationships;

		/** Required */
		type: AppInfoRelationshipsAppInfoLocalizationsDataType;
	}
	export interface AppInfoLocalizationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>,
	}
	export function CreateAppInfoLocalizationFormGroup() {
		return new FormGroup<AppInfoLocalizationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoLocalizationAttributes {
		locale?: string | null;
		name?: string | null;
		privacyPolicyText?: string | null;
		privacyPolicyUrl?: string | null;
		subtitle?: string | null;
	}
	export interface AppInfoLocalizationAttributesFormProperties {
		locale: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		privacyPolicyText: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoLocalizationAttributesFormGroup() {
		return new FormGroup<AppInfoLocalizationAttributesFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privacyPolicyText: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoLocalizationRelationships {
		appInfo?: AppInfoLocalizationRelationshipsAppInfo;
	}
	export interface AppInfoLocalizationRelationshipsFormProperties {
	}
	export function CreateAppInfoLocalizationRelationshipsFormGroup() {
		return new FormGroup<AppInfoLocalizationRelationshipsFormProperties>({
		});

	}

	export interface AppInfoLocalizationRelationshipsAppInfo {
		data?: AppInfoLocalizationRelationshipsAppInfoData;
		links?: AppInfoLocalizationRelationshipsAppInfoLinks;
	}
	export interface AppInfoLocalizationRelationshipsAppInfoFormProperties {
	}
	export function CreateAppInfoLocalizationRelationshipsAppInfoFormGroup() {
		return new FormGroup<AppInfoLocalizationRelationshipsAppInfoFormProperties>({
		});

	}

	export interface AppInfoLocalizationRelationshipsAppInfoData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppInfosDataType;
	}
	export interface AppInfoLocalizationRelationshipsAppInfoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppInfosDataType | null | undefined>,
	}
	export function CreateAppInfoLocalizationRelationshipsAppInfoDataFormGroup() {
		return new FormGroup<AppInfoLocalizationRelationshipsAppInfoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppInfosDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoLocalizationRelationshipsAppInfoLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppInfoLocalizationRelationshipsAppInfoLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoLocalizationRelationshipsAppInfoLinksFormGroup() {
		return new FormGroup<AppInfoLocalizationRelationshipsAppInfoLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoLocalizationCreateRequest {

		/** Required */
		data: AppInfoLocalizationCreateRequestData;
	}
	export interface AppInfoLocalizationCreateRequestFormProperties {
	}
	export function CreateAppInfoLocalizationCreateRequestFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestFormProperties>({
		});

	}

	export interface AppInfoLocalizationCreateRequestData {

		/** Required */
		attributes: AppInfoLocalizationCreateRequestDataAttributes;

		/** Required */
		relationships: AppInfoLocalizationCreateRequestDataRelationships;

		/** Required */
		type: AppInfoRelationshipsAppInfoLocalizationsDataType;
	}
	export interface AppInfoLocalizationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>,
	}
	export function CreateAppInfoLocalizationCreateRequestDataFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestDataFormProperties>({
			type: new FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoLocalizationCreateRequestDataAttributes {

		/** Required */
		locale: string;
		name?: string | null;
		privacyPolicyText?: string | null;
		privacyPolicyUrl?: string | null;
		subtitle?: string | null;
	}
	export interface AppInfoLocalizationCreateRequestDataAttributesFormProperties {

		/** Required */
		locale: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		privacyPolicyText: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoLocalizationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestDataAttributesFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			privacyPolicyText: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoLocalizationCreateRequestDataRelationships {

		/** Required */
		appInfo: AppInfoLocalizationCreateRequestDataRelationshipsAppInfo;
	}
	export interface AppInfoLocalizationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppInfoLocalizationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppInfoLocalizationCreateRequestDataRelationshipsAppInfo {

		/** Required */
		data: AppInfoLocalizationCreateRequestDataRelationshipsAppInfoData;
	}
	export interface AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFormProperties {
	}
	export function CreateAppInfoLocalizationCreateRequestDataRelationshipsAppInfoFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFormProperties>({
		});

	}

	export interface AppInfoLocalizationCreateRequestDataRelationshipsAppInfoData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppInfosDataType;
	}
	export interface AppInfoLocalizationCreateRequestDataRelationshipsAppInfoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppInfosDataType | null | undefined>,
	}
	export function CreateAppInfoLocalizationCreateRequestDataRelationshipsAppInfoDataFormGroup() {
		return new FormGroup<AppInfoLocalizationCreateRequestDataRelationshipsAppInfoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppInfosDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoLocalizationResponse {

		/** Required */
		data: AppInfoLocalization;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppInfoLocalizationResponseFormProperties {
	}
	export function CreateAppInfoLocalizationResponseFormGroup() {
		return new FormGroup<AppInfoLocalizationResponseFormProperties>({
		});

	}

	export interface AppInfoLocalizationUpdateRequest {

		/** Required */
		data: AppInfoLocalizationUpdateRequestData;
	}
	export interface AppInfoLocalizationUpdateRequestFormProperties {
	}
	export function CreateAppInfoLocalizationUpdateRequestFormGroup() {
		return new FormGroup<AppInfoLocalizationUpdateRequestFormProperties>({
		});

	}

	export interface AppInfoLocalizationUpdateRequestData {
		attributes?: AppInfoLocalizationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppInfoRelationshipsAppInfoLocalizationsDataType;
	}
	export interface AppInfoLocalizationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>,
	}
	export function CreateAppInfoLocalizationUpdateRequestDataFormGroup() {
		return new FormGroup<AppInfoLocalizationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppInfoRelationshipsAppInfoLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoLocalizationUpdateRequestDataAttributes {
		name?: string | null;
		privacyPolicyText?: string | null;
		privacyPolicyUrl?: string | null;
		subtitle?: string | null;
	}
	export interface AppInfoLocalizationUpdateRequestDataAttributesFormProperties {
		name: FormControl<string | null | undefined>,
		privacyPolicyText: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
	}
	export function CreateAppInfoLocalizationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppInfoLocalizationUpdateRequestDataAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			privacyPolicyText: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppInfoLocalizationsResponse {

		/** Required */
		data: Array<AppInfoLocalization>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppInfoLocalizationsResponseFormProperties {
	}
	export function CreateAppInfoLocalizationsResponseFormGroup() {
		return new FormGroup<AppInfoLocalizationsResponseFormProperties>({
		});

	}

	export interface AppInfoResponse {

		/** Required */
		data: AppInfo;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppInfoResponseFormProperties {
	}
	export function CreateAppInfoResponseFormGroup() {
		return new FormGroup<AppInfoResponseFormProperties>({
		});

	}

	export interface AppInfoUpdateRequest {

		/** Required */
		data: AppInfoUpdateRequestData;
	}
	export interface AppInfoUpdateRequestFormProperties {
	}
	export function CreateAppInfoUpdateRequestFormGroup() {
		return new FormGroup<AppInfoUpdateRequestFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestData {

		/** Required */
		id: string;
		relationships?: AppInfoUpdateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsAppInfosDataType;
	}
	export interface AppInfoUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppInfosDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppInfosDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationships {
		primaryCategory?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
		primarySubcategoryOne?: AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOne;
		primarySubcategoryTwo?: AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwo;
		secondaryCategory?: AppInfoUpdateRequestDataRelationshipsSecondaryCategory;
		secondarySubcategoryOne?: AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOne;
		secondarySubcategoryTwo?: AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwo;
	}
	export interface AppInfoUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimaryCategory {
		data?: AppInfoUpdateRequestDataRelationshipsPrimaryCategoryData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimaryCategoryFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimaryCategoryFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimaryCategoryFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimaryCategoryData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimaryCategoryDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimaryCategoryDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimaryCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOne {
		data?: AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryOneDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwo {
		data?: AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsPrimarySubcategoryTwoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondaryCategory {
		data?: AppInfoUpdateRequestDataRelationshipsSecondaryCategoryData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondaryCategoryFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondaryCategoryFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondaryCategoryFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondaryCategoryData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondaryCategoryDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondaryCategoryDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondaryCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOne {
		data?: AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryOneDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwo {
		data?: AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoData;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoFormProperties {
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoFormProperties>({
		});

	}

	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoData {

		/** Required */
		id: string;

		/** Required */
		type: AppCategoryRelationshipsParentDataType;
	}
	export interface AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppCategoryRelationshipsParentDataType | null | undefined>,
	}
	export function CreateAppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoDataFormGroup() {
		return new FormGroup<AppInfoUpdateRequestDataRelationshipsSecondarySubcategoryTwoDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppCategoryRelationshipsParentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInfosResponse {

		/** Required */
		data: Array<AppInfo>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppInfosResponseFormProperties {
	}
	export function CreateAppInfosResponseFormGroup() {
		return new FormGroup<AppInfosResponseFormProperties>({
		});

	}

	export interface AppMediaAssetState {
		errors?: Array<AppMediaStateError>;
		state?: AppMediaAssetStateState | null;
		warnings?: Array<AppMediaStateError>;
	}
	export interface AppMediaAssetStateFormProperties {
		state: FormControl<AppMediaAssetStateState | null | undefined>,
	}
	export function CreateAppMediaAssetStateFormGroup() {
		return new FormGroup<AppMediaAssetStateFormProperties>({
			state: new FormControl<AppMediaAssetStateState | null | undefined>(undefined),
		});

	}

	export interface AppMediaStateError {
		code?: string | null;
		description?: string | null;
	}
	export interface AppMediaStateErrorFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAppMediaStateErrorFormGroup() {
		return new FormGroup<AppMediaStateErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppMediaAssetStateState { AWAITING_UPLOAD = 0, UPLOAD_COMPLETE = 1, COMPLETE = 2, FAILED = 3 }

	export interface AppPreOrder {
		attributes?: AppPreOrderAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPreOrderRelationships;

		/** Required */
		type: AppRelationshipsPreOrderDataType;
	}
	export interface AppPreOrderFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreOrderDataType | null | undefined>,
	}
	export function CreateAppPreOrderFormGroup() {
		return new FormGroup<AppPreOrderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreOrderDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreOrderAttributes {
		appReleaseDate?: Date | null;
		preOrderAvailableDate?: Date | null;
	}
	export interface AppPreOrderAttributesFormProperties {
		appReleaseDate: FormControl<Date | null | undefined>,
		preOrderAvailableDate: FormControl<Date | null | undefined>,
	}
	export function CreateAppPreOrderAttributesFormGroup() {
		return new FormGroup<AppPreOrderAttributesFormProperties>({
			appReleaseDate: new FormControl<Date | null | undefined>(undefined),
			preOrderAvailableDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AppPreOrderRelationships {
		app?: AppPreOrderRelationshipsApp;
	}
	export interface AppPreOrderRelationshipsFormProperties {
	}
	export function CreateAppPreOrderRelationshipsFormGroup() {
		return new FormGroup<AppPreOrderRelationshipsFormProperties>({
		});

	}

	export interface AppPreOrderRelationshipsApp {
		data?: AppPreOrderRelationshipsAppData;
		links?: AppPreOrderRelationshipsAppLinks;
	}
	export interface AppPreOrderRelationshipsAppFormProperties {
	}
	export function CreateAppPreOrderRelationshipsAppFormGroup() {
		return new FormGroup<AppPreOrderRelationshipsAppFormProperties>({
		});

	}

	export interface AppPreOrderRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppPreOrderRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppPreOrderRelationshipsAppDataFormGroup() {
		return new FormGroup<AppPreOrderRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreOrderRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPreOrderRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPreOrderRelationshipsAppLinksFormGroup() {
		return new FormGroup<AppPreOrderRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPreOrderCreateRequest {

		/** Required */
		data: AppPreOrderCreateRequestData;
	}
	export interface AppPreOrderCreateRequestFormProperties {
	}
	export function CreateAppPreOrderCreateRequestFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestFormProperties>({
		});

	}

	export interface AppPreOrderCreateRequestData {
		attributes?: AppPreOrderCreateRequestDataAttributes;

		/** Required */
		relationships: AppPreOrderCreateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsPreOrderDataType;
	}
	export interface AppPreOrderCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppRelationshipsPreOrderDataType | null | undefined>,
	}
	export function CreateAppPreOrderCreateRequestDataFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestDataFormProperties>({
			type: new FormControl<AppRelationshipsPreOrderDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreOrderCreateRequestDataAttributes {
		appReleaseDate?: Date | null;
	}
	export interface AppPreOrderCreateRequestDataAttributesFormProperties {
		appReleaseDate: FormControl<Date | null | undefined>,
	}
	export function CreateAppPreOrderCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestDataAttributesFormProperties>({
			appReleaseDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AppPreOrderCreateRequestDataRelationships {

		/** Required */
		app: AppPreOrderCreateRequestDataRelationshipsApp;
	}
	export interface AppPreOrderCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppPreOrderCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppPreOrderCreateRequestDataRelationshipsApp {

		/** Required */
		data: AppPreOrderCreateRequestDataRelationshipsAppData;
	}
	export interface AppPreOrderCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateAppPreOrderCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface AppPreOrderCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppPreOrderCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppPreOrderCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<AppPreOrderCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreOrderResponse {

		/** Required */
		data: AppPreOrder;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPreOrderResponseFormProperties {
	}
	export function CreateAppPreOrderResponseFormGroup() {
		return new FormGroup<AppPreOrderResponseFormProperties>({
		});

	}

	export interface AppPreOrderUpdateRequest {

		/** Required */
		data: AppPreOrderUpdateRequestData;
	}
	export interface AppPreOrderUpdateRequestFormProperties {
	}
	export function CreateAppPreOrderUpdateRequestFormGroup() {
		return new FormGroup<AppPreOrderUpdateRequestFormProperties>({
		});

	}

	export interface AppPreOrderUpdateRequestData {
		attributes?: AppPreOrderUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPreOrderDataType;
	}
	export interface AppPreOrderUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreOrderDataType | null | undefined>,
	}
	export function CreateAppPreOrderUpdateRequestDataFormGroup() {
		return new FormGroup<AppPreOrderUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreOrderDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreOrderUpdateRequestDataAttributes {
		appReleaseDate?: Date | null;
	}
	export interface AppPreOrderUpdateRequestDataAttributesFormProperties {
		appReleaseDate: FormControl<Date | null | undefined>,
	}
	export function CreateAppPreOrderUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppPreOrderUpdateRequestDataAttributesFormProperties>({
			appReleaseDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AppPreview {
		attributes?: AppPreviewAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPreviewRelationships;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewFormGroup() {
		return new FormGroup<AppPreviewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewAttributes {
		assetDeliveryState?: AppMediaAssetState;
		fileName?: string | null;
		fileSize?: number | null;
		mimeType?: string | null;
		previewFrameTimeCode?: string | null;
		previewImage?: ImageAsset;
		sourceFileChecksum?: string | null;
		uploadOperations?: Array<UploadOperation>;
		videoUrl?: string | null;
	}
	export interface AppPreviewAttributesFormProperties {
		fileName: FormControl<string | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
		mimeType: FormControl<string | null | undefined>,
		previewFrameTimeCode: FormControl<string | null | undefined>,
		sourceFileChecksum: FormControl<string | null | undefined>,
		videoUrl: FormControl<string | null | undefined>,
	}
	export function CreateAppPreviewAttributesFormGroup() {
		return new FormGroup<AppPreviewAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			previewFrameTimeCode: new FormControl<string | null | undefined>(undefined),
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
			videoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageAsset {
		height?: number | null;
		templateUrl?: string | null;
		width?: number | null;
	}
	export interface ImageAssetFormProperties {
		height: FormControl<number | null | undefined>,
		templateUrl: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageAssetFormGroup() {
		return new FormGroup<ImageAssetFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			templateUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UploadOperation {
		length?: number | null;
		method?: string | null;
		offset?: number | null;
		requestHeaders?: Array<UploadOperationHeader>;
		url?: string | null;
	}
	export interface UploadOperationFormProperties {
		length: FormControl<number | null | undefined>,
		method: FormControl<string | null | undefined>,
		offset: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUploadOperationFormGroup() {
		return new FormGroup<UploadOperationFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadOperationHeader {
		name?: string | null;
		value?: string | null;
	}
	export interface UploadOperationHeaderFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUploadOperationHeaderFormGroup() {
		return new FormGroup<UploadOperationHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPreviewRelationships {
		appPreviewSet?: AppPreviewRelationshipsAppPreviewSet;
	}
	export interface AppPreviewRelationshipsFormProperties {
	}
	export function CreateAppPreviewRelationshipsFormGroup() {
		return new FormGroup<AppPreviewRelationshipsFormProperties>({
		});

	}

	export interface AppPreviewRelationshipsAppPreviewSet {
		data?: AppPreviewRelationshipsAppPreviewSetData;
		links?: AppPreviewRelationshipsAppPreviewSetLinks;
	}
	export interface AppPreviewRelationshipsAppPreviewSetFormProperties {
	}
	export function CreateAppPreviewRelationshipsAppPreviewSetFormGroup() {
		return new FormGroup<AppPreviewRelationshipsAppPreviewSetFormProperties>({
		});

	}

	export interface AppPreviewRelationshipsAppPreviewSetData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewRelationshipsAppPreviewSetDataType;
	}
	export interface AppPreviewRelationshipsAppPreviewSetDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>,
	}
	export function CreateAppPreviewRelationshipsAppPreviewSetDataFormGroup() {
		return new FormGroup<AppPreviewRelationshipsAppPreviewSetDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppPreviewRelationshipsAppPreviewSetDataType { appPreviewSets = 0 }

	export interface AppPreviewRelationshipsAppPreviewSetLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPreviewRelationshipsAppPreviewSetLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPreviewRelationshipsAppPreviewSetLinksFormGroup() {
		return new FormGroup<AppPreviewRelationshipsAppPreviewSetLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppPreviewType { appPreviews = 0 }

	export interface AppPreviewCreateRequest {

		/** Required */
		data: AppPreviewCreateRequestData;
	}
	export interface AppPreviewCreateRequestFormProperties {
	}
	export function CreateAppPreviewCreateRequestFormGroup() {
		return new FormGroup<AppPreviewCreateRequestFormProperties>({
		});

	}

	export interface AppPreviewCreateRequestData {

		/** Required */
		attributes: AppPreviewCreateRequestDataAttributes;

		/** Required */
		relationships: AppPreviewCreateRequestDataRelationships;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewCreateRequestDataFormGroup() {
		return new FormGroup<AppPreviewCreateRequestDataFormProperties>({
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewCreateRequestDataAttributes {

		/** Required */
		fileName: string;

		/** Required */
		fileSize: number;
		mimeType?: string | null;
		previewFrameTimeCode?: string | null;
	}
	export interface AppPreviewCreateRequestDataAttributesFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,

		/** Required */
		fileSize: FormControl<number | null | undefined>,
		mimeType: FormControl<string | null | undefined>,
		previewFrameTimeCode: FormControl<string | null | undefined>,
	}
	export function CreateAppPreviewCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppPreviewCreateRequestDataAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mimeType: new FormControl<string | null | undefined>(undefined),
			previewFrameTimeCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPreviewCreateRequestDataRelationships {

		/** Required */
		appPreviewSet: AppPreviewCreateRequestDataRelationshipsAppPreviewSet;
	}
	export interface AppPreviewCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppPreviewCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppPreviewCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppPreviewCreateRequestDataRelationshipsAppPreviewSet {

		/** Required */
		data: AppPreviewCreateRequestDataRelationshipsAppPreviewSetData;
	}
	export interface AppPreviewCreateRequestDataRelationshipsAppPreviewSetFormProperties {
	}
	export function CreateAppPreviewCreateRequestDataRelationshipsAppPreviewSetFormGroup() {
		return new FormGroup<AppPreviewCreateRequestDataRelationshipsAppPreviewSetFormProperties>({
		});

	}

	export interface AppPreviewCreateRequestDataRelationshipsAppPreviewSetData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewRelationshipsAppPreviewSetDataType;
	}
	export interface AppPreviewCreateRequestDataRelationshipsAppPreviewSetDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>,
	}
	export function CreateAppPreviewCreateRequestDataRelationshipsAppPreviewSetDataFormGroup() {
		return new FormGroup<AppPreviewCreateRequestDataRelationshipsAppPreviewSetDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewResponse {

		/** Required */
		data: AppPreview;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPreviewResponseFormProperties {
	}
	export function CreateAppPreviewResponseFormGroup() {
		return new FormGroup<AppPreviewResponseFormProperties>({
		});

	}

	export interface AppPreviewSet {
		attributes?: AppPreviewSetAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPreviewSetRelationships;

		/** Required */
		type: AppPreviewRelationshipsAppPreviewSetDataType;
	}
	export interface AppPreviewSetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>,
	}
	export function CreateAppPreviewSetFormGroup() {
		return new FormGroup<AppPreviewSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetAttributes {
		previewType?: AppPreviewSetAttributesPreviewType | null;
	}
	export interface AppPreviewSetAttributesFormProperties {
		previewType: FormControl<AppPreviewSetAttributesPreviewType | null | undefined>,
	}
	export function CreateAppPreviewSetAttributesFormGroup() {
		return new FormGroup<AppPreviewSetAttributesFormProperties>({
			previewType: new FormControl<AppPreviewSetAttributesPreviewType | null | undefined>(undefined),
		});

	}

	export enum AppPreviewSetAttributesPreviewType { IPHONE_65 = 0, IPHONE_58 = 1, IPHONE_55 = 2, IPHONE_47 = 3, IPHONE_40 = 4, IPHONE_35 = 5, IPAD_PRO_3GEN_129 = 6, IPAD_PRO_3GEN_11 = 7, IPAD_PRO_129 = 8, IPAD_105 = 9, IPAD_97 = 10, DESKTOP = 11, WATCH_SERIES_4 = 12, WATCH_SERIES_3 = 13, APPLE_TV = 14 }

	export interface AppPreviewSetRelationships {
		appPreviews?: AppPreviewSetRelationshipsAppPreviews;
		appStoreVersionLocalization?: AppPreviewSetRelationshipsAppStoreVersionLocalization;
	}
	export interface AppPreviewSetRelationshipsFormProperties {
	}
	export function CreateAppPreviewSetRelationshipsFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsFormProperties>({
		});

	}

	export interface AppPreviewSetRelationshipsAppPreviews {
		AppPreviewSetRelationshipsAppPreviewsData?: Array<AppPreviewSetRelationshipsAppPreviewsData>;
		links?: AppPreviewSetRelationshipsAppPreviewsLinks;
		meta?: PagingInformation;
	}
	export interface AppPreviewSetRelationshipsAppPreviewsFormProperties {
	}
	export function CreateAppPreviewSetRelationshipsAppPreviewsFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppPreviewsFormProperties>({
		});

	}

	export interface AppPreviewSetRelationshipsAppPreviewsData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewSetRelationshipsAppPreviewsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewSetRelationshipsAppPreviewsDataFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppPreviewsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetRelationshipsAppPreviewsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPreviewSetRelationshipsAppPreviewsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPreviewSetRelationshipsAppPreviewsLinksFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppPreviewsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPreviewSetRelationshipsAppStoreVersionLocalization {
		data?: AppPreviewSetRelationshipsAppStoreVersionLocalizationData;
		links?: AppPreviewSetRelationshipsAppStoreVersionLocalizationLinks;
	}
	export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationFormProperties {
	}
	export function CreateAppPreviewSetRelationshipsAppStoreVersionLocalizationFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppStoreVersionLocalizationFormProperties>({
		});

	}

	export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppPreviewSetRelationshipsAppStoreVersionLocalizationDataFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType { appStoreVersionLocalizations = 0 }

	export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPreviewSetRelationshipsAppStoreVersionLocalizationLinksFormGroup() {
		return new FormGroup<AppPreviewSetRelationshipsAppStoreVersionLocalizationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPreviewSetAppPreviewsLinkagesRequest {

		/** Required */
		AppPreviewSetAppPreviewsLinkagesRequestData: Array<AppPreviewSetAppPreviewsLinkagesRequestData>;
	}
	export interface AppPreviewSetAppPreviewsLinkagesRequestFormProperties {
	}
	export function CreateAppPreviewSetAppPreviewsLinkagesRequestFormGroup() {
		return new FormGroup<AppPreviewSetAppPreviewsLinkagesRequestFormProperties>({
		});

	}

	export interface AppPreviewSetAppPreviewsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewSetAppPreviewsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewSetAppPreviewsLinkagesRequestDataFormGroup() {
		return new FormGroup<AppPreviewSetAppPreviewsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetAppPreviewsLinkagesResponse {

		/** Required */
		AppPreviewSetAppPreviewsLinkagesResponseData: Array<AppPreviewSetAppPreviewsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPreviewSetAppPreviewsLinkagesResponseFormProperties {
	}
	export function CreateAppPreviewSetAppPreviewsLinkagesResponseFormGroup() {
		return new FormGroup<AppPreviewSetAppPreviewsLinkagesResponseFormProperties>({
		});

	}

	export interface AppPreviewSetAppPreviewsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewSetAppPreviewsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewSetAppPreviewsLinkagesResponseDataFormGroup() {
		return new FormGroup<AppPreviewSetAppPreviewsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetCreateRequest {

		/** Required */
		data: AppPreviewSetCreateRequestData;
	}
	export interface AppPreviewSetCreateRequestFormProperties {
	}
	export function CreateAppPreviewSetCreateRequestFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestFormProperties>({
		});

	}

	export interface AppPreviewSetCreateRequestData {

		/** Required */
		attributes: AppPreviewSetCreateRequestDataAttributes;

		/** Required */
		relationships: AppPreviewSetCreateRequestDataRelationships;

		/** Required */
		type: AppPreviewRelationshipsAppPreviewSetDataType;
	}
	export interface AppPreviewSetCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>,
	}
	export function CreateAppPreviewSetCreateRequestDataFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestDataFormProperties>({
			type: new FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetCreateRequestDataAttributes {

		/** Required */
		previewType: AppPreviewSetAttributesPreviewType;
	}
	export interface AppPreviewSetCreateRequestDataAttributesFormProperties {

		/** Required */
		previewType: FormControl<AppPreviewSetAttributesPreviewType | null | undefined>,
	}
	export function CreateAppPreviewSetCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestDataAttributesFormProperties>({
			previewType: new FormControl<AppPreviewSetAttributesPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetCreateRequestDataRelationships {

		/** Required */
		appStoreVersionLocalization: AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization;
	}
	export interface AppPreviewSetCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppPreviewSetCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization {

		/** Required */
		data: AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationData;
	}
	export interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormProperties {
	}
	export function CreateAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormProperties>({
		});

	}

	export interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormGroup() {
		return new FormGroup<AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewSetResponse {

		/** Required */
		data: AppPreviewSet;
		included?: Array<AppPreview>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPreviewSetResponseFormProperties {
	}
	export function CreateAppPreviewSetResponseFormGroup() {
		return new FormGroup<AppPreviewSetResponseFormProperties>({
		});

	}

	export interface AppPreviewSetsResponse {

		/** Required */
		data: Array<AppPreviewSet>;
		included?: Array<AppPreview>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPreviewSetsResponseFormProperties {
	}
	export function CreateAppPreviewSetsResponseFormGroup() {
		return new FormGroup<AppPreviewSetsResponseFormProperties>({
		});

	}

	export interface AppPreviewUpdateRequest {

		/** Required */
		data: AppPreviewUpdateRequestData;
	}
	export interface AppPreviewUpdateRequestFormProperties {
	}
	export function CreateAppPreviewUpdateRequestFormGroup() {
		return new FormGroup<AppPreviewUpdateRequestFormProperties>({
		});

	}

	export interface AppPreviewUpdateRequestData {
		attributes?: AppPreviewUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewType;
	}
	export interface AppPreviewUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewType | null | undefined>,
	}
	export function CreateAppPreviewUpdateRequestDataFormGroup() {
		return new FormGroup<AppPreviewUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPreviewUpdateRequestDataAttributes {
		previewFrameTimeCode?: string | null;
		sourceFileChecksum?: string | null;
		uploaded?: boolean | null;
	}
	export interface AppPreviewUpdateRequestDataAttributesFormProperties {
		previewFrameTimeCode: FormControl<string | null | undefined>,
		sourceFileChecksum: FormControl<string | null | undefined>,
		uploaded: FormControl<boolean | null | undefined>,
	}
	export function CreateAppPreviewUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppPreviewUpdateRequestDataAttributesFormProperties>({
			previewFrameTimeCode: new FormControl<string | null | undefined>(undefined),
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
			uploaded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AppPreviewsResponse {

		/** Required */
		data: Array<AppPreview>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPreviewsResponseFormProperties {
	}
	export function CreateAppPreviewsResponseFormGroup() {
		return new FormGroup<AppPreviewsResponseFormProperties>({
		});

	}

	export interface AppPrice {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPriceRelationships;

		/** Required */
		type: AppRelationshipsPricesDataType;
	}
	export interface AppPriceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPricesDataType | null | undefined>,
	}
	export function CreateAppPriceFormGroup() {
		return new FormGroup<AppPriceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPricesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPriceRelationships {
		app?: AppPriceRelationshipsApp;
		priceTier?: AppPriceRelationshipsPriceTier;
	}
	export interface AppPriceRelationshipsFormProperties {
	}
	export function CreateAppPriceRelationshipsFormGroup() {
		return new FormGroup<AppPriceRelationshipsFormProperties>({
		});

	}

	export interface AppPriceRelationshipsApp {
		data?: AppPriceRelationshipsAppData;
		links?: AppPriceRelationshipsAppLinks;
	}
	export interface AppPriceRelationshipsAppFormProperties {
	}
	export function CreateAppPriceRelationshipsAppFormGroup() {
		return new FormGroup<AppPriceRelationshipsAppFormProperties>({
		});

	}

	export interface AppPriceRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppPriceRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppPriceRelationshipsAppDataFormGroup() {
		return new FormGroup<AppPriceRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPriceRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPriceRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPriceRelationshipsAppLinksFormGroup() {
		return new FormGroup<AppPriceRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPriceRelationshipsPriceTier {
		data?: AppPriceRelationshipsPriceTierData;
		links?: AppPriceRelationshipsPriceTierLinks;
	}
	export interface AppPriceRelationshipsPriceTierFormProperties {
	}
	export function CreateAppPriceRelationshipsPriceTierFormGroup() {
		return new FormGroup<AppPriceRelationshipsPriceTierFormProperties>({
		});

	}

	export interface AppPriceRelationshipsPriceTierData {

		/** Required */
		id: string;

		/** Required */
		type: AppPriceRelationshipsPriceTierDataType;
	}
	export interface AppPriceRelationshipsPriceTierDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>,
	}
	export function CreateAppPriceRelationshipsPriceTierDataFormGroup() {
		return new FormGroup<AppPriceRelationshipsPriceTierDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppPriceRelationshipsPriceTierDataType { appPriceTiers = 0 }

	export interface AppPriceRelationshipsPriceTierLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPriceRelationshipsPriceTierLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPriceRelationshipsPriceTierLinksFormGroup() {
		return new FormGroup<AppPriceRelationshipsPriceTierLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPricePoint {
		attributes?: AppPricePointAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPricePointRelationships;

		/** Required */
		type: AppPricePointType;
	}
	export interface AppPricePointFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPricePointType | null | undefined>,
	}
	export function CreateAppPricePointFormGroup() {
		return new FormGroup<AppPricePointFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPricePointType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPricePointAttributes {
		customerPrice?: string | null;
		proceeds?: string | null;
	}
	export interface AppPricePointAttributesFormProperties {
		customerPrice: FormControl<string | null | undefined>,
		proceeds: FormControl<string | null | undefined>,
	}
	export function CreateAppPricePointAttributesFormGroup() {
		return new FormGroup<AppPricePointAttributesFormProperties>({
			customerPrice: new FormControl<string | null | undefined>(undefined),
			proceeds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPricePointRelationships {
		priceTier?: AppPricePointRelationshipsPriceTier;
		territory?: AppPricePointRelationshipsTerritory;
	}
	export interface AppPricePointRelationshipsFormProperties {
	}
	export function CreateAppPricePointRelationshipsFormGroup() {
		return new FormGroup<AppPricePointRelationshipsFormProperties>({
		});

	}

	export interface AppPricePointRelationshipsPriceTier {
		data?: AppPricePointRelationshipsPriceTierData;
		links?: AppPricePointRelationshipsPriceTierLinks;
	}
	export interface AppPricePointRelationshipsPriceTierFormProperties {
	}
	export function CreateAppPricePointRelationshipsPriceTierFormGroup() {
		return new FormGroup<AppPricePointRelationshipsPriceTierFormProperties>({
		});

	}

	export interface AppPricePointRelationshipsPriceTierData {

		/** Required */
		id: string;

		/** Required */
		type: AppPriceRelationshipsPriceTierDataType;
	}
	export interface AppPricePointRelationshipsPriceTierDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>,
	}
	export function CreateAppPricePointRelationshipsPriceTierDataFormGroup() {
		return new FormGroup<AppPricePointRelationshipsPriceTierDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPricePointRelationshipsPriceTierLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPricePointRelationshipsPriceTierLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPricePointRelationshipsPriceTierLinksFormGroup() {
		return new FormGroup<AppPricePointRelationshipsPriceTierLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPricePointRelationshipsTerritory {
		data?: AppPricePointRelationshipsTerritoryData;
		links?: AppPricePointRelationshipsTerritoryLinks;
	}
	export interface AppPricePointRelationshipsTerritoryFormProperties {
	}
	export function CreateAppPricePointRelationshipsTerritoryFormGroup() {
		return new FormGroup<AppPricePointRelationshipsTerritoryFormProperties>({
		});

	}

	export interface AppPricePointRelationshipsTerritoryData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface AppPricePointRelationshipsTerritoryDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateAppPricePointRelationshipsTerritoryDataFormGroup() {
		return new FormGroup<AppPricePointRelationshipsTerritoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPricePointRelationshipsTerritoryLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPricePointRelationshipsTerritoryLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPricePointRelationshipsTerritoryLinksFormGroup() {
		return new FormGroup<AppPricePointRelationshipsTerritoryLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppPricePointType { appPricePoints = 0 }

	export interface AppPricePointResponse {

		/** Required */
		data: AppPricePoint;
		included?: Array<Territory>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPricePointResponseFormProperties {
	}
	export function CreateAppPricePointResponseFormGroup() {
		return new FormGroup<AppPricePointResponseFormProperties>({
		});

	}

	export interface Territory {
		attributes?: TerritoryAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface TerritoryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateTerritoryFormGroup() {
		return new FormGroup<TerritoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TerritoryAttributes {
		currency?: string | null;
	}
	export interface TerritoryAttributesFormProperties {
		currency: FormControl<string | null | undefined>,
	}
	export function CreateTerritoryAttributesFormGroup() {
		return new FormGroup<TerritoryAttributesFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPricePointsResponse {

		/** Required */
		data: Array<AppPricePoint>;
		included?: Array<Territory>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPricePointsResponseFormProperties {
	}
	export function CreateAppPricePointsResponseFormGroup() {
		return new FormGroup<AppPricePointsResponseFormProperties>({
		});

	}

	export interface AppPriceResponse {

		/** Required */
		data: AppPrice;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPriceResponseFormProperties {
	}
	export function CreateAppPriceResponseFormGroup() {
		return new FormGroup<AppPriceResponseFormProperties>({
		});

	}

	export interface AppPriceTier {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppPriceTierRelationships;

		/** Required */
		type: AppPriceRelationshipsPriceTierDataType;
	}
	export interface AppPriceTierFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>,
	}
	export function CreateAppPriceTierFormGroup() {
		return new FormGroup<AppPriceTierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPriceRelationshipsPriceTierDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPriceTierRelationships {
		pricePoints?: AppPriceTierRelationshipsPricePoints;
	}
	export interface AppPriceTierRelationshipsFormProperties {
	}
	export function CreateAppPriceTierRelationshipsFormGroup() {
		return new FormGroup<AppPriceTierRelationshipsFormProperties>({
		});

	}

	export interface AppPriceTierRelationshipsPricePoints {
		AppPriceTierRelationshipsPricePointsData?: Array<AppPriceTierRelationshipsPricePointsData>;
		links?: AppPriceTierRelationshipsPricePointsLinks;
		meta?: PagingInformation;
	}
	export interface AppPriceTierRelationshipsPricePointsFormProperties {
	}
	export function CreateAppPriceTierRelationshipsPricePointsFormGroup() {
		return new FormGroup<AppPriceTierRelationshipsPricePointsFormProperties>({
		});

	}

	export interface AppPriceTierRelationshipsPricePointsData {

		/** Required */
		id: string;

		/** Required */
		type: AppPricePointType;
	}
	export interface AppPriceTierRelationshipsPricePointsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPricePointType | null | undefined>,
	}
	export function CreateAppPriceTierRelationshipsPricePointsDataFormGroup() {
		return new FormGroup<AppPriceTierRelationshipsPricePointsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPricePointType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppPriceTierRelationshipsPricePointsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppPriceTierRelationshipsPricePointsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppPriceTierRelationshipsPricePointsLinksFormGroup() {
		return new FormGroup<AppPriceTierRelationshipsPricePointsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppPriceTierResponse {

		/** Required */
		data: AppPriceTier;
		included?: Array<AppPricePoint>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppPriceTierResponseFormProperties {
	}
	export function CreateAppPriceTierResponseFormGroup() {
		return new FormGroup<AppPriceTierResponseFormProperties>({
		});

	}

	export interface AppPriceTiersResponse {

		/** Required */
		data: Array<AppPriceTier>;
		included?: Array<AppPricePoint>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPriceTiersResponseFormProperties {
	}
	export function CreateAppPriceTiersResponseFormGroup() {
		return new FormGroup<AppPriceTiersResponseFormProperties>({
		});

	}

	export interface AppPricesResponse {

		/** Required */
		data: Array<AppPrice>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppPricesResponseFormProperties {
	}
	export function CreateAppPricesResponseFormGroup() {
		return new FormGroup<AppPricesResponseFormProperties>({
		});

	}

	export interface AppResponse {

		/** Required */
		data: App;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppResponseFormProperties {
	}
	export function CreateAppResponseFormGroup() {
		return new FormGroup<AppResponseFormProperties>({
		});

	}

	export interface AppScreenshot {
		attributes?: AppScreenshotAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppScreenshotRelationships;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotFormGroup() {
		return new FormGroup<AppScreenshotFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotAttributes {
		assetDeliveryState?: AppMediaAssetState;
		assetToken?: string | null;
		assetType?: string | null;
		fileName?: string | null;
		fileSize?: number | null;
		imageAsset?: ImageAsset;
		sourceFileChecksum?: string | null;
		uploadOperations?: Array<UploadOperation>;
	}
	export interface AppScreenshotAttributesFormProperties {
		assetToken: FormControl<string | null | undefined>,
		assetType: FormControl<string | null | undefined>,
		fileName: FormControl<string | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
		sourceFileChecksum: FormControl<string | null | undefined>,
	}
	export function CreateAppScreenshotAttributesFormGroup() {
		return new FormGroup<AppScreenshotAttributesFormProperties>({
			assetToken: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppScreenshotRelationships {
		appScreenshotSet?: AppScreenshotRelationshipsAppScreenshotSet;
	}
	export interface AppScreenshotRelationshipsFormProperties {
	}
	export function CreateAppScreenshotRelationshipsFormGroup() {
		return new FormGroup<AppScreenshotRelationshipsFormProperties>({
		});

	}

	export interface AppScreenshotRelationshipsAppScreenshotSet {
		data?: AppScreenshotRelationshipsAppScreenshotSetData;
		links?: AppScreenshotRelationshipsAppScreenshotSetLinks;
	}
	export interface AppScreenshotRelationshipsAppScreenshotSetFormProperties {
	}
	export function CreateAppScreenshotRelationshipsAppScreenshotSetFormGroup() {
		return new FormGroup<AppScreenshotRelationshipsAppScreenshotSetFormProperties>({
		});

	}

	export interface AppScreenshotRelationshipsAppScreenshotSetData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotRelationshipsAppScreenshotSetDataType;
	}
	export interface AppScreenshotRelationshipsAppScreenshotSetDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>,
	}
	export function CreateAppScreenshotRelationshipsAppScreenshotSetDataFormGroup() {
		return new FormGroup<AppScreenshotRelationshipsAppScreenshotSetDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppScreenshotRelationshipsAppScreenshotSetDataType { appScreenshotSets = 0 }

	export interface AppScreenshotRelationshipsAppScreenshotSetLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppScreenshotRelationshipsAppScreenshotSetLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppScreenshotRelationshipsAppScreenshotSetLinksFormGroup() {
		return new FormGroup<AppScreenshotRelationshipsAppScreenshotSetLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppScreenshotType { appScreenshots = 0 }

	export interface AppScreenshotCreateRequest {

		/** Required */
		data: AppScreenshotCreateRequestData;
	}
	export interface AppScreenshotCreateRequestFormProperties {
	}
	export function CreateAppScreenshotCreateRequestFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestFormProperties>({
		});

	}

	export interface AppScreenshotCreateRequestData {

		/** Required */
		attributes: AppScreenshotCreateRequestDataAttributes;

		/** Required */
		relationships: AppScreenshotCreateRequestDataRelationships;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotCreateRequestDataFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestDataFormProperties>({
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotCreateRequestDataAttributes {

		/** Required */
		fileName: string;

		/** Required */
		fileSize: number;
	}
	export interface AppScreenshotCreateRequestDataAttributesFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,

		/** Required */
		fileSize: FormControl<number | null | undefined>,
	}
	export function CreateAppScreenshotCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestDataAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotCreateRequestDataRelationships {

		/** Required */
		appScreenshotSet: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet;
	}
	export interface AppScreenshotCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppScreenshotCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {

		/** Required */
		data: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetData;
	}
	export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFormProperties {
	}
	export function CreateAppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFormProperties>({
		});

	}

	export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotRelationshipsAppScreenshotSetDataType;
	}
	export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>,
	}
	export function CreateAppScreenshotCreateRequestDataRelationshipsAppScreenshotSetDataFormGroup() {
		return new FormGroup<AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotResponse {

		/** Required */
		data: AppScreenshot;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppScreenshotResponseFormProperties {
	}
	export function CreateAppScreenshotResponseFormGroup() {
		return new FormGroup<AppScreenshotResponseFormProperties>({
		});

	}

	export interface AppScreenshotSet {
		attributes?: AppScreenshotSetAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppScreenshotSetRelationships;

		/** Required */
		type: AppScreenshotRelationshipsAppScreenshotSetDataType;
	}
	export interface AppScreenshotSetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>,
	}
	export function CreateAppScreenshotSetFormGroup() {
		return new FormGroup<AppScreenshotSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetAttributes {
		screenshotDisplayType?: AppScreenshotSetAttributesScreenshotDisplayType | null;
	}
	export interface AppScreenshotSetAttributesFormProperties {
		screenshotDisplayType: FormControl<AppScreenshotSetAttributesScreenshotDisplayType | null | undefined>,
	}
	export function CreateAppScreenshotSetAttributesFormGroup() {
		return new FormGroup<AppScreenshotSetAttributesFormProperties>({
			screenshotDisplayType: new FormControl<AppScreenshotSetAttributesScreenshotDisplayType | null | undefined>(undefined),
		});

	}

	export enum AppScreenshotSetAttributesScreenshotDisplayType { APP_IPHONE_65 = 0, APP_IPHONE_58 = 1, APP_IPHONE_55 = 2, APP_IPHONE_47 = 3, APP_IPHONE_40 = 4, APP_IPHONE_35 = 5, APP_IPAD_PRO_3GEN_129 = 6, APP_IPAD_PRO_3GEN_11 = 7, APP_IPAD_PRO_129 = 8, APP_IPAD_105 = 9, APP_IPAD_97 = 10, APP_DESKTOP = 11, APP_WATCH_SERIES_4 = 12, APP_WATCH_SERIES_3 = 13, APP_APPLE_TV = 14, IMESSAGE_APP_IPHONE_65 = 15, IMESSAGE_APP_IPHONE_58 = 16, IMESSAGE_APP_IPHONE_55 = 17, IMESSAGE_APP_IPHONE_47 = 18, IMESSAGE_APP_IPHONE_40 = 19, IMESSAGE_APP_IPAD_PRO_3GEN_129 = 20, IMESSAGE_APP_IPAD_PRO_3GEN_11 = 21, IMESSAGE_APP_IPAD_PRO_129 = 22, IMESSAGE_APP_IPAD_105 = 23, IMESSAGE_APP_IPAD_97 = 24 }

	export interface AppScreenshotSetRelationships {
		appScreenshots?: AppScreenshotSetRelationshipsAppScreenshots;
		appStoreVersionLocalization?: AppScreenshotSetRelationshipsAppStoreVersionLocalization;
	}
	export interface AppScreenshotSetRelationshipsFormProperties {
	}
	export function CreateAppScreenshotSetRelationshipsFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsFormProperties>({
		});

	}

	export interface AppScreenshotSetRelationshipsAppScreenshots {
		AppScreenshotSetRelationshipsAppScreenshotsData?: Array<AppScreenshotSetRelationshipsAppScreenshotsData>;
		links?: AppScreenshotSetRelationshipsAppScreenshotsLinks;
		meta?: PagingInformation;
	}
	export interface AppScreenshotSetRelationshipsAppScreenshotsFormProperties {
	}
	export function CreateAppScreenshotSetRelationshipsAppScreenshotsFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppScreenshotsFormProperties>({
		});

	}

	export interface AppScreenshotSetRelationshipsAppScreenshotsData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotSetRelationshipsAppScreenshotsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotSetRelationshipsAppScreenshotsDataFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppScreenshotsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetRelationshipsAppScreenshotsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppScreenshotSetRelationshipsAppScreenshotsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppScreenshotSetRelationshipsAppScreenshotsLinksFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppScreenshotsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalization {
		data?: AppScreenshotSetRelationshipsAppStoreVersionLocalizationData;
		links?: AppScreenshotSetRelationshipsAppStoreVersionLocalizationLinks;
	}
	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalizationFormProperties {
	}
	export function CreateAppScreenshotSetRelationshipsAppStoreVersionLocalizationFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppStoreVersionLocalizationFormProperties>({
		});

	}

	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalizationData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalizationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppScreenshotSetRelationshipsAppStoreVersionLocalizationDataFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppStoreVersionLocalizationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalizationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppScreenshotSetRelationshipsAppStoreVersionLocalizationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppScreenshotSetRelationshipsAppStoreVersionLocalizationLinksFormGroup() {
		return new FormGroup<AppScreenshotSetRelationshipsAppStoreVersionLocalizationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppScreenshotSetAppScreenshotsLinkagesRequest {

		/** Required */
		AppScreenshotSetAppScreenshotsLinkagesRequestData: Array<AppScreenshotSetAppScreenshotsLinkagesRequestData>;
	}
	export interface AppScreenshotSetAppScreenshotsLinkagesRequestFormProperties {
	}
	export function CreateAppScreenshotSetAppScreenshotsLinkagesRequestFormGroup() {
		return new FormGroup<AppScreenshotSetAppScreenshotsLinkagesRequestFormProperties>({
		});

	}

	export interface AppScreenshotSetAppScreenshotsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotSetAppScreenshotsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotSetAppScreenshotsLinkagesRequestDataFormGroup() {
		return new FormGroup<AppScreenshotSetAppScreenshotsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetAppScreenshotsLinkagesResponse {

		/** Required */
		AppScreenshotSetAppScreenshotsLinkagesResponseData: Array<AppScreenshotSetAppScreenshotsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppScreenshotSetAppScreenshotsLinkagesResponseFormProperties {
	}
	export function CreateAppScreenshotSetAppScreenshotsLinkagesResponseFormGroup() {
		return new FormGroup<AppScreenshotSetAppScreenshotsLinkagesResponseFormProperties>({
		});

	}

	export interface AppScreenshotSetAppScreenshotsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotSetAppScreenshotsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotSetAppScreenshotsLinkagesResponseDataFormGroup() {
		return new FormGroup<AppScreenshotSetAppScreenshotsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetCreateRequest {

		/** Required */
		data: AppScreenshotSetCreateRequestData;
	}
	export interface AppScreenshotSetCreateRequestFormProperties {
	}
	export function CreateAppScreenshotSetCreateRequestFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestFormProperties>({
		});

	}

	export interface AppScreenshotSetCreateRequestData {

		/** Required */
		attributes: AppScreenshotSetCreateRequestDataAttributes;

		/** Required */
		relationships: AppScreenshotSetCreateRequestDataRelationships;

		/** Required */
		type: AppScreenshotRelationshipsAppScreenshotSetDataType;
	}
	export interface AppScreenshotSetCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>,
	}
	export function CreateAppScreenshotSetCreateRequestDataFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestDataFormProperties>({
			type: new FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetCreateRequestDataAttributes {

		/** Required */
		screenshotDisplayType: AppScreenshotSetAttributesScreenshotDisplayType;
	}
	export interface AppScreenshotSetCreateRequestDataAttributesFormProperties {

		/** Required */
		screenshotDisplayType: FormControl<AppScreenshotSetAttributesScreenshotDisplayType | null | undefined>,
	}
	export function CreateAppScreenshotSetCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestDataAttributesFormProperties>({
			screenshotDisplayType: new FormControl<AppScreenshotSetAttributesScreenshotDisplayType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetCreateRequestDataRelationships {

		/** Required */
		appStoreVersionLocalization: AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalization;
	}
	export interface AppScreenshotSetCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppScreenshotSetCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalization {

		/** Required */
		data: AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationData;
	}
	export interface AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormProperties {
	}
	export function CreateAppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFormProperties>({
		});

	}

	export interface AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormGroup() {
		return new FormGroup<AppScreenshotSetCreateRequestDataRelationshipsAppStoreVersionLocalizationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotSetResponse {

		/** Required */
		data: AppScreenshotSet;
		included?: Array<AppScreenshot>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppScreenshotSetResponseFormProperties {
	}
	export function CreateAppScreenshotSetResponseFormGroup() {
		return new FormGroup<AppScreenshotSetResponseFormProperties>({
		});

	}

	export interface AppScreenshotSetsResponse {

		/** Required */
		data: Array<AppScreenshotSet>;
		included?: Array<AppScreenshot>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppScreenshotSetsResponseFormProperties {
	}
	export function CreateAppScreenshotSetsResponseFormGroup() {
		return new FormGroup<AppScreenshotSetsResponseFormProperties>({
		});

	}

	export interface AppScreenshotUpdateRequest {

		/** Required */
		data: AppScreenshotUpdateRequestData;
	}
	export interface AppScreenshotUpdateRequestFormProperties {
	}
	export function CreateAppScreenshotUpdateRequestFormGroup() {
		return new FormGroup<AppScreenshotUpdateRequestFormProperties>({
		});

	}

	export interface AppScreenshotUpdateRequestData {
		attributes?: AppScreenshotUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotType;
	}
	export interface AppScreenshotUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotType | null | undefined>,
	}
	export function CreateAppScreenshotUpdateRequestDataFormGroup() {
		return new FormGroup<AppScreenshotUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppScreenshotUpdateRequestDataAttributes {
		sourceFileChecksum?: string | null;
		uploaded?: boolean | null;
	}
	export interface AppScreenshotUpdateRequestDataAttributesFormProperties {
		sourceFileChecksum: FormControl<string | null | undefined>,
		uploaded: FormControl<boolean | null | undefined>,
	}
	export function CreateAppScreenshotUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppScreenshotUpdateRequestDataAttributesFormProperties>({
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
			uploaded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AppScreenshotsResponse {

		/** Required */
		data: Array<AppScreenshot>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppScreenshotsResponseFormProperties {
	}
	export function CreateAppScreenshotsResponseFormGroup() {
		return new FormGroup<AppScreenshotsResponseFormProperties>({
		});

	}

	export enum AppStoreAgeRating { FOUR_PLUS = 0, NINE_PLUS = 1, TWELVE_PLUS = 2, SEVENTEEN_PLUS = 3 }

	export interface AppStoreReviewAttachment {
		attributes?: AppStoreReviewAttachmentAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppStoreReviewAttachmentRelationships;

		/** Required */
		type: AppStoreReviewAttachmentType;
	}
	export interface AppStoreReviewAttachmentFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentType | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewAttachmentAttributes {
		assetDeliveryState?: AppMediaAssetState;
		fileName?: string | null;
		fileSize?: number | null;
		sourceFileChecksum?: string | null;
		uploadOperations?: Array<UploadOperation>;
	}
	export interface AppStoreReviewAttachmentAttributesFormProperties {
		fileName: FormControl<string | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
		sourceFileChecksum: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentAttributesFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewAttachmentRelationships {
		appStoreReviewDetail?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail;
	}
	export interface AppStoreReviewAttachmentRelationshipsFormProperties {
	}
	export function CreateAppStoreReviewAttachmentRelationshipsFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentRelationshipsFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail {
		data?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData;
		links?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailLinks;
	}
	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFormProperties {
	}
	export function CreateAppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType { appStoreReviewDetails = 0 }

	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentRelationshipsAppStoreReviewDetailLinksFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppStoreReviewAttachmentType { appStoreReviewAttachments = 0 }

	export interface AppStoreReviewAttachmentCreateRequest {

		/** Required */
		data: AppStoreReviewAttachmentCreateRequestData;
	}
	export interface AppStoreReviewAttachmentCreateRequestFormProperties {
	}
	export function CreateAppStoreReviewAttachmentCreateRequestFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentCreateRequestData {

		/** Required */
		attributes: AppStoreReviewAttachmentCreateRequestDataAttributes;

		/** Required */
		relationships: AppStoreReviewAttachmentCreateRequestDataRelationships;

		/** Required */
		type: AppStoreReviewAttachmentType;
	}
	export interface AppStoreReviewAttachmentCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreReviewAttachmentType | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreReviewAttachmentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewAttachmentCreateRequestDataAttributes {

		/** Required */
		fileName: string;

		/** Required */
		fileSize: number;
	}
	export interface AppStoreReviewAttachmentCreateRequestDataAttributesFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,

		/** Required */
		fileSize: FormControl<number | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestDataAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewAttachmentCreateRequestDataRelationships {

		/** Required */
		appStoreReviewDetail: AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetail;
	}
	export interface AppStoreReviewAttachmentCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreReviewAttachmentCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetail {

		/** Required */
		data: AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailData;
	}
	export interface AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailFormProperties {
	}
	export function CreateAppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailDataFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentCreateRequestDataRelationshipsAppStoreReviewDetailDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewAttachmentResponse {

		/** Required */
		data: AppStoreReviewAttachment;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreReviewAttachmentResponseFormProperties {
	}
	export function CreateAppStoreReviewAttachmentResponseFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentResponseFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentUpdateRequest {

		/** Required */
		data: AppStoreReviewAttachmentUpdateRequestData;
	}
	export interface AppStoreReviewAttachmentUpdateRequestFormProperties {
	}
	export function CreateAppStoreReviewAttachmentUpdateRequestFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentUpdateRequestFormProperties>({
		});

	}

	export interface AppStoreReviewAttachmentUpdateRequestData {
		attributes?: AppStoreReviewAttachmentUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentType;
	}
	export interface AppStoreReviewAttachmentUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentType | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentUpdateRequestDataFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewAttachmentUpdateRequestDataAttributes {
		sourceFileChecksum?: string | null;
		uploaded?: boolean | null;
	}
	export interface AppStoreReviewAttachmentUpdateRequestDataAttributesFormProperties {
		sourceFileChecksum: FormControl<string | null | undefined>,
		uploaded: FormControl<boolean | null | undefined>,
	}
	export function CreateAppStoreReviewAttachmentUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentUpdateRequestDataAttributesFormProperties>({
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
			uploaded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewAttachmentsResponse {

		/** Required */
		data: Array<AppStoreReviewAttachment>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreReviewAttachmentsResponseFormProperties {
	}
	export function CreateAppStoreReviewAttachmentsResponseFormGroup() {
		return new FormGroup<AppStoreReviewAttachmentsResponseFormProperties>({
		});

	}

	export interface AppStoreReviewDetail {
		attributes?: AppStoreReviewDetailAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppStoreReviewDetailRelationships;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreReviewDetailFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailFormGroup() {
		return new FormGroup<AppStoreReviewDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailAttributes {
		contactEmail?: string | null;
		contactFirstName?: string | null;
		contactLastName?: string | null;
		contactPhone?: string | null;
		demoAccountName?: string | null;
		demoAccountPassword?: string | null;
		demoAccountRequired?: boolean | null;
		notes?: string | null;
	}
	export interface AppStoreReviewDetailAttributesFormProperties {
		contactEmail: FormControl<string | null | undefined>,
		contactFirstName: FormControl<string | null | undefined>,
		contactLastName: FormControl<string | null | undefined>,
		contactPhone: FormControl<string | null | undefined>,
		demoAccountName: FormControl<string | null | undefined>,
		demoAccountPassword: FormControl<string | null | undefined>,
		demoAccountRequired: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewDetailAttributesFormGroup() {
		return new FormGroup<AppStoreReviewDetailAttributesFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactFirstName: new FormControl<string | null | undefined>(undefined),
			contactLastName: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			demoAccountName: new FormControl<string | null | undefined>(undefined),
			demoAccountPassword: new FormControl<string | null | undefined>(undefined),
			demoAccountRequired: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewDetailRelationships {
		appStoreReviewAttachments?: AppStoreReviewDetailRelationshipsAppStoreReviewAttachments;
		appStoreVersion?: AppStoreReviewDetailRelationshipsAppStoreVersion;
	}
	export interface AppStoreReviewDetailRelationshipsFormProperties {
	}
	export function CreateAppStoreReviewDetailRelationshipsFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsFormProperties>({
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachments {
		AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsData?: Array<AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsData>;
		links?: AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFormProperties {
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsFormProperties>({
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentType;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsLinksFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreVersion {
		data?: AppStoreReviewDetailRelationshipsAppStoreVersionData;
		links?: AppStoreReviewDetailRelationshipsAppStoreVersionLinks;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreReviewDetailRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewDetailRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<AppStoreReviewDetailRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewDetailCreateRequest {

		/** Required */
		data: AppStoreReviewDetailCreateRequestData;
	}
	export interface AppStoreReviewDetailCreateRequestFormProperties {
	}
	export function CreateAppStoreReviewDetailCreateRequestFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestFormProperties>({
		});

	}

	export interface AppStoreReviewDetailCreateRequestData {
		attributes?: AppStoreReviewDetailCreateRequestDataAttributes;

		/** Required */
		relationships: AppStoreReviewDetailCreateRequestDataRelationships;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreReviewDetailCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailCreateRequestDataAttributes {
		contactEmail?: string | null;
		contactFirstName?: string | null;
		contactLastName?: string | null;
		contactPhone?: string | null;
		demoAccountName?: string | null;
		demoAccountPassword?: string | null;
		demoAccountRequired?: boolean | null;
		notes?: string | null;
	}
	export interface AppStoreReviewDetailCreateRequestDataAttributesFormProperties {
		contactEmail: FormControl<string | null | undefined>,
		contactFirstName: FormControl<string | null | undefined>,
		contactLastName: FormControl<string | null | undefined>,
		contactPhone: FormControl<string | null | undefined>,
		demoAccountName: FormControl<string | null | undefined>,
		demoAccountPassword: FormControl<string | null | undefined>,
		demoAccountRequired: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewDetailCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestDataAttributesFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactFirstName: new FormControl<string | null | undefined>(undefined),
			contactLastName: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			demoAccountName: new FormControl<string | null | undefined>(undefined),
			demoAccountPassword: new FormControl<string | null | undefined>(undefined),
			demoAccountRequired: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreReviewDetailCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface AppStoreReviewDetailCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreReviewDetailCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailResponse {

		/** Required */
		data: AppStoreReviewDetail;
		included?: Array<AppStoreReviewAttachment>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreReviewDetailResponseFormProperties {
	}
	export function CreateAppStoreReviewDetailResponseFormGroup() {
		return new FormGroup<AppStoreReviewDetailResponseFormProperties>({
		});

	}

	export interface AppStoreReviewDetailUpdateRequest {

		/** Required */
		data: AppStoreReviewDetailUpdateRequestData;
	}
	export interface AppStoreReviewDetailUpdateRequestFormProperties {
	}
	export function CreateAppStoreReviewDetailUpdateRequestFormGroup() {
		return new FormGroup<AppStoreReviewDetailUpdateRequestFormProperties>({
		});

	}

	export interface AppStoreReviewDetailUpdateRequestData {
		attributes?: AppStoreReviewDetailUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreReviewDetailUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreReviewDetailUpdateRequestDataFormGroup() {
		return new FormGroup<AppStoreReviewDetailUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreReviewDetailUpdateRequestDataAttributes {
		contactEmail?: string | null;
		contactFirstName?: string | null;
		contactLastName?: string | null;
		contactPhone?: string | null;
		demoAccountName?: string | null;
		demoAccountPassword?: string | null;
		demoAccountRequired?: boolean | null;
		notes?: string | null;
	}
	export interface AppStoreReviewDetailUpdateRequestDataAttributesFormProperties {
		contactEmail: FormControl<string | null | undefined>,
		contactFirstName: FormControl<string | null | undefined>,
		contactLastName: FormControl<string | null | undefined>,
		contactPhone: FormControl<string | null | undefined>,
		demoAccountName: FormControl<string | null | undefined>,
		demoAccountPassword: FormControl<string | null | undefined>,
		demoAccountRequired: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreReviewDetailUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreReviewDetailUpdateRequestDataAttributesFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactFirstName: new FormControl<string | null | undefined>(undefined),
			contactLastName: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			demoAccountName: new FormControl<string | null | undefined>(undefined),
			demoAccountPassword: new FormControl<string | null | undefined>(undefined),
			demoAccountRequired: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersion {
		attributes?: AppStoreVersionAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppStoreVersionRelationships;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionAttributes {
		appStoreState?: AppInfoAttributesAppStoreState | null;
		copyright?: string | null;
		createdDate?: Date | null;
		downloadable?: boolean | null;
		earliestReleaseDate?: Date | null;
		platform?: Platform | null;
		releaseType?: AppStoreVersionAttributesReleaseType | null;
		usesIdfa?: boolean | null;
		versionString?: string | null;
	}
	export interface AppStoreVersionAttributesFormProperties {
		appStoreState: FormControl<AppInfoAttributesAppStoreState | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		downloadable: FormControl<boolean | null | undefined>,
		earliestReleaseDate: FormControl<Date | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		releaseType: FormControl<AppStoreVersionAttributesReleaseType | null | undefined>,
		usesIdfa: FormControl<boolean | null | undefined>,
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionAttributesFormGroup() {
		return new FormGroup<AppStoreVersionAttributesFormProperties>({
			appStoreState: new FormControl<AppInfoAttributesAppStoreState | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			downloadable: new FormControl<boolean | null | undefined>(undefined),
			earliestReleaseDate: new FormControl<Date | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			releaseType: new FormControl<AppStoreVersionAttributesReleaseType | null | undefined>(undefined),
			usesIdfa: new FormControl<boolean | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppStoreVersionAttributesReleaseType { MANUAL = 0, AFTER_APPROVAL = 1, SCHEDULED = 2 }

	export interface AppStoreVersionRelationships {
		ageRatingDeclaration?: AppStoreVersionRelationshipsAgeRatingDeclaration;
		app?: AppStoreVersionRelationshipsApp;
		appStoreReviewDetail?: AppStoreVersionRelationshipsAppStoreReviewDetail;
		appStoreVersionLocalizations?: AppStoreVersionRelationshipsAppStoreVersionLocalizations;
		appStoreVersionPhasedRelease?: AppStoreVersionRelationshipsAppStoreVersionPhasedRelease;
		appStoreVersionSubmission?: AppStoreVersionRelationshipsAppStoreVersionSubmission;
		build?: AppStoreVersionRelationshipsBuild;
		idfaDeclaration?: AppStoreVersionRelationshipsIdfaDeclaration;
		routingAppCoverage?: AppStoreVersionRelationshipsRoutingAppCoverage;
	}
	export interface AppStoreVersionRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAgeRatingDeclaration {
		data?: AppStoreVersionRelationshipsAgeRatingDeclarationData;
		links?: AppStoreVersionRelationshipsAgeRatingDeclarationLinks;
	}
	export interface AppStoreVersionRelationshipsAgeRatingDeclarationFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAgeRatingDeclarationFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAgeRatingDeclarationFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAgeRatingDeclarationData {

		/** Required */
		id: string;

		/** Required */
		type: AgeRatingDeclarationType;
	}
	export interface AppStoreVersionRelationshipsAgeRatingDeclarationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AgeRatingDeclarationType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAgeRatingDeclarationDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAgeRatingDeclarationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AgeRatingDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionRelationshipsAgeRatingDeclarationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAgeRatingDeclarationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAgeRatingDeclarationLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAgeRatingDeclarationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsApp {
		data?: AppStoreVersionRelationshipsAppData;
		links?: AppStoreVersionRelationshipsAppLinks;
	}
	export interface AppStoreVersionRelationshipsAppFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAppFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppStoreVersionRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreReviewDetail {
		data?: AppStoreVersionRelationshipsAppStoreReviewDetailData;
		links?: AppStoreVersionRelationshipsAppStoreReviewDetailLinks;
	}
	export interface AppStoreVersionRelationshipsAppStoreReviewDetailFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAppStoreReviewDetailFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreReviewDetailFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreReviewDetailData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType;
	}
	export interface AppStoreVersionRelationshipsAppStoreReviewDetailDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreReviewDetailDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreReviewDetailDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreReviewDetailLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAppStoreReviewDetailLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreReviewDetailLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreReviewDetailLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizations {
		AppStoreVersionRelationshipsAppStoreVersionLocalizationsData?: Array<AppStoreVersionRelationshipsAppStoreVersionLocalizationsData>;
		links?: AppStoreVersionRelationshipsAppStoreVersionLocalizationsLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizationsFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionLocalizationsFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionLocalizationsFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizationsData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizationsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionLocalizationsDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionLocalizationsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizationsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionLocalizationsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionLocalizationsLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionLocalizationsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
		data?: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData;
		links?: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseLinks;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType { appStoreVersionPhasedReleases = 0 }

	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionPhasedReleaseLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionSubmission {
		data?: AppStoreVersionRelationshipsAppStoreVersionSubmissionData;
		links?: AppStoreVersionRelationshipsAppStoreVersionSubmissionLinks;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionSubmissionFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionSubmissionFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionSubmissionDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType { appStoreVersionSubmissions = 0 }

	export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsAppStoreVersionSubmissionLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsAppStoreVersionSubmissionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsBuild {
		data?: AppStoreVersionRelationshipsBuildData;
		links?: AppStoreVersionRelationshipsBuildLinks;
	}
	export interface AppStoreVersionRelationshipsBuildFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsBuildFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsBuildFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppStoreVersionRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsBuildDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionRelationshipsBuildLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsBuildLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsBuildLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsBuildLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsIdfaDeclaration {
		data?: AppStoreVersionRelationshipsIdfaDeclarationData;
		links?: AppStoreVersionRelationshipsIdfaDeclarationLinks;
	}
	export interface AppStoreVersionRelationshipsIdfaDeclarationFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsIdfaDeclarationFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsIdfaDeclarationFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsIdfaDeclarationData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsIdfaDeclarationDataType;
	}
	export interface AppStoreVersionRelationshipsIdfaDeclarationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsIdfaDeclarationDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsIdfaDeclarationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppStoreVersionRelationshipsIdfaDeclarationDataType { idfaDeclarations = 0 }

	export interface AppStoreVersionRelationshipsIdfaDeclarationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsIdfaDeclarationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsIdfaDeclarationLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsIdfaDeclarationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionRelationshipsRoutingAppCoverage {
		data?: AppStoreVersionRelationshipsRoutingAppCoverageData;
		links?: AppStoreVersionRelationshipsRoutingAppCoverageLinks;
	}
	export interface AppStoreVersionRelationshipsRoutingAppCoverageFormProperties {
	}
	export function CreateAppStoreVersionRelationshipsRoutingAppCoverageFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsRoutingAppCoverageFormProperties>({
		});

	}

	export interface AppStoreVersionRelationshipsRoutingAppCoverageData {

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsRoutingAppCoverageDataType;
	}
	export interface AppStoreVersionRelationshipsRoutingAppCoverageDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsRoutingAppCoverageDataFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsRoutingAppCoverageDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppStoreVersionRelationshipsRoutingAppCoverageDataType { routingAppCoverages = 0 }

	export interface AppStoreVersionRelationshipsRoutingAppCoverageLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionRelationshipsRoutingAppCoverageLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionRelationshipsRoutingAppCoverageLinksFormGroup() {
		return new FormGroup<AppStoreVersionRelationshipsRoutingAppCoverageLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionBuildLinkageRequest {

		/** Required */
		data: AppStoreVersionBuildLinkageRequestData;
	}
	export interface AppStoreVersionBuildLinkageRequestFormProperties {
	}
	export function CreateAppStoreVersionBuildLinkageRequestFormGroup() {
		return new FormGroup<AppStoreVersionBuildLinkageRequestFormProperties>({
		});

	}

	export interface AppStoreVersionBuildLinkageRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppStoreVersionBuildLinkageRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionBuildLinkageRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionBuildLinkageRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionBuildLinkageResponse {

		/** Required */
		data: AppStoreVersionBuildLinkageResponseData;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreVersionBuildLinkageResponseFormProperties {
	}
	export function CreateAppStoreVersionBuildLinkageResponseFormGroup() {
		return new FormGroup<AppStoreVersionBuildLinkageResponseFormProperties>({
		});

	}

	export interface AppStoreVersionBuildLinkageResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppStoreVersionBuildLinkageResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionBuildLinkageResponseDataFormGroup() {
		return new FormGroup<AppStoreVersionBuildLinkageResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionCreateRequest {

		/** Required */
		data: AppStoreVersionCreateRequestData;
	}
	export interface AppStoreVersionCreateRequestFormProperties {
	}
	export function CreateAppStoreVersionCreateRequestFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionCreateRequestData {

		/** Required */
		attributes: AppStoreVersionCreateRequestDataAttributes;

		/** Required */
		relationships: AppStoreVersionCreateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataFormProperties>({
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionCreateRequestDataAttributes {
		copyright?: string | null;
		earliestReleaseDate?: Date | null;

		/** Required */
		platform: Platform;
		releaseType?: AppStoreVersionAttributesReleaseType | null;
		usesIdfa?: boolean | null;

		/** Required */
		versionString: string;
	}
	export interface AppStoreVersionCreateRequestDataAttributesFormProperties {
		copyright: FormControl<string | null | undefined>,
		earliestReleaseDate: FormControl<Date | null | undefined>,

		/** Required */
		platform: FormControl<Platform | null | undefined>,
		releaseType: FormControl<AppStoreVersionAttributesReleaseType | null | undefined>,
		usesIdfa: FormControl<boolean | null | undefined>,

		/** Required */
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataAttributesFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			earliestReleaseDate: new FormControl<Date | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			releaseType: new FormControl<AppStoreVersionAttributesReleaseType | null | undefined>(undefined),
			usesIdfa: new FormControl<boolean | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionCreateRequestDataRelationships {

		/** Required */
		app: AppStoreVersionCreateRequestDataRelationshipsApp;
		build?: AppStoreVersionCreateRequestDataRelationshipsBuild;
	}
	export interface AppStoreVersionCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionCreateRequestDataRelationshipsApp {

		/** Required */
		data: AppStoreVersionCreateRequestDataRelationshipsAppData;
	}
	export interface AppStoreVersionCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateAppStoreVersionCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface AppStoreVersionCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface AppStoreVersionCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppStoreVersionCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionCreateRequestDataRelationshipsBuild {
		data?: AppStoreVersionCreateRequestDataRelationshipsBuildData;
	}
	export interface AppStoreVersionCreateRequestDataRelationshipsBuildFormProperties {
	}
	export function CreateAppStoreVersionCreateRequestDataRelationshipsBuildFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataRelationshipsBuildFormProperties>({
		});

	}

	export interface AppStoreVersionCreateRequestDataRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppStoreVersionCreateRequestDataRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionCreateRequestDataRelationshipsBuildDataFormGroup() {
		return new FormGroup<AppStoreVersionCreateRequestDataRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalization {
		attributes?: AppStoreVersionLocalizationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppStoreVersionLocalizationRelationships;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppStoreVersionLocalizationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationAttributes {
		description?: string | null;
		keywords?: string | null;
		locale?: string | null;
		marketingUrl?: string | null;
		promotionalText?: string | null;
		supportUrl?: string | null;
		whatsNew?: string | null;
	}
	export interface AppStoreVersionLocalizationAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		keywords: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		promotionalText: FormControl<string | null | undefined>,
		supportUrl: FormControl<string | null | undefined>,
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationAttributesFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			promotionalText: new FormControl<string | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationRelationships {
		appPreviewSets?: AppStoreVersionLocalizationRelationshipsAppPreviewSets;
		appScreenshotSets?: AppStoreVersionLocalizationRelationshipsAppScreenshotSets;
		appStoreVersion?: AppStoreVersionLocalizationRelationshipsAppStoreVersion;
	}
	export interface AppStoreVersionLocalizationRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionLocalizationRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSets {
		AppStoreVersionLocalizationRelationshipsAppPreviewSetsData?: Array<AppStoreVersionLocalizationRelationshipsAppPreviewSetsData>;
		links?: AppStoreVersionLocalizationRelationshipsAppPreviewSetsLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSetsFormProperties {
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppPreviewSetsFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppPreviewSetsFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSetsData {

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewRelationshipsAppPreviewSetDataType;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSetsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppPreviewSetsDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppPreviewSetsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewRelationshipsAppPreviewSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSetsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppPreviewSetsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppPreviewSetsLinksFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppPreviewSetsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSets {
		AppStoreVersionLocalizationRelationshipsAppScreenshotSetsData?: Array<AppStoreVersionLocalizationRelationshipsAppScreenshotSetsData>;
		links?: AppStoreVersionLocalizationRelationshipsAppScreenshotSetsLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSetsFormProperties {
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppScreenshotSetsFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppScreenshotSetsFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSetsData {

		/** Required */
		id: string;

		/** Required */
		type: AppScreenshotRelationshipsAppScreenshotSetDataType;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSetsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppScreenshotSetsDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppScreenshotSetsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppScreenshotRelationshipsAppScreenshotSetDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSetsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppScreenshotSetsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppScreenshotSetsLinksFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppScreenshotSetsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersion {
		data?: AppStoreVersionLocalizationRelationshipsAppStoreVersionData;
		links?: AppStoreVersionLocalizationRelationshipsAppStoreVersionLinks;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionLocalizationRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationCreateRequest {

		/** Required */
		data: AppStoreVersionLocalizationCreateRequestData;
	}
	export interface AppStoreVersionLocalizationCreateRequestFormProperties {
	}
	export function CreateAppStoreVersionLocalizationCreateRequestFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationCreateRequestData {

		/** Required */
		attributes: AppStoreVersionLocalizationCreateRequestDataAttributes;

		/** Required */
		relationships: AppStoreVersionLocalizationCreateRequestDataRelationships;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppStoreVersionLocalizationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestDataFormProperties>({
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationCreateRequestDataAttributes {
		description?: string | null;
		keywords?: string | null;

		/** Required */
		locale: string;
		marketingUrl?: string | null;
		promotionalText?: string | null;
		supportUrl?: string | null;
		whatsNew?: string | null;
	}
	export interface AppStoreVersionLocalizationCreateRequestDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		keywords: FormControl<string | null | undefined>,

		/** Required */
		locale: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		promotionalText: FormControl<string | null | undefined>,
		supportUrl: FormControl<string | null | undefined>,
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			promotionalText: new FormControl<string | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface AppStoreVersionLocalizationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionLocalizationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationResponse {

		/** Required */
		data: AppStoreVersionLocalization;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreVersionLocalizationResponseFormProperties {
	}
	export function CreateAppStoreVersionLocalizationResponseFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationResponseFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationUpdateRequest {

		/** Required */
		data: AppStoreVersionLocalizationUpdateRequestData;
	}
	export interface AppStoreVersionLocalizationUpdateRequestFormProperties {
	}
	export function CreateAppStoreVersionLocalizationUpdateRequestFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationUpdateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionLocalizationUpdateRequestData {
		attributes?: AppStoreVersionLocalizationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType;
	}
	export interface AppStoreVersionLocalizationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationUpdateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppPreviewSetRelationshipsAppStoreVersionLocalizationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionLocalizationUpdateRequestDataAttributes {
		description?: string | null;
		keywords?: string | null;
		marketingUrl?: string | null;
		promotionalText?: string | null;
		supportUrl?: string | null;
		whatsNew?: string | null;
	}
	export interface AppStoreVersionLocalizationUpdateRequestDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		keywords: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		promotionalText: FormControl<string | null | undefined>,
		supportUrl: FormControl<string | null | undefined>,
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionLocalizationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationUpdateRequestDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			promotionalText: new FormControl<string | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionLocalizationsResponse {

		/** Required */
		data: Array<AppStoreVersionLocalization>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreVersionLocalizationsResponseFormProperties {
	}
	export function CreateAppStoreVersionLocalizationsResponseFormGroup() {
		return new FormGroup<AppStoreVersionLocalizationsResponseFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedRelease {
		attributes?: AppStoreVersionPhasedReleaseAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType;
	}
	export interface AppStoreVersionPhasedReleaseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionPhasedReleaseAttributes {
		currentDayNumber?: number | null;
		phasedReleaseState?: AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null;
		startDate?: Date | null;
		totalPauseDuration?: number | null;
	}
	export interface AppStoreVersionPhasedReleaseAttributesFormProperties {
		currentDayNumber: FormControl<number | null | undefined>,
		phasedReleaseState: FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		totalPauseDuration: FormControl<number | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseAttributesFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseAttributesFormProperties>({
			currentDayNumber: new FormControl<number | null | undefined>(undefined),
			phasedReleaseState: new FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			totalPauseDuration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AppStoreVersionPhasedReleaseAttributesPhasedReleaseState { INACTIVE = 0, ACTIVE = 1, PAUSED = 2, COMPLETE = 3 }

	export interface AppStoreVersionPhasedReleaseCreateRequest {

		/** Required */
		data: AppStoreVersionPhasedReleaseCreateRequestData;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestFormProperties {
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedReleaseCreateRequestData {
		attributes?: AppStoreVersionPhasedReleaseCreateRequestDataAttributes;

		/** Required */
		relationships: AppStoreVersionPhasedReleaseCreateRequestDataRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionPhasedReleaseCreateRequestDataAttributes {
		phasedReleaseState?: AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestDataAttributesFormProperties {
		phasedReleaseState: FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestDataAttributesFormProperties>({
			phasedReleaseState: new FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionPhasedReleaseResponse {

		/** Required */
		data: AppStoreVersionPhasedRelease;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreVersionPhasedReleaseResponseFormProperties {
	}
	export function CreateAppStoreVersionPhasedReleaseResponseFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseResponseFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedReleaseUpdateRequest {

		/** Required */
		data: AppStoreVersionPhasedReleaseUpdateRequestData;
	}
	export interface AppStoreVersionPhasedReleaseUpdateRequestFormProperties {
	}
	export function CreateAppStoreVersionPhasedReleaseUpdateRequestFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseUpdateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionPhasedReleaseUpdateRequestData {
		attributes?: AppStoreVersionPhasedReleaseUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType;
	}
	export interface AppStoreVersionPhasedReleaseUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseUpdateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionPhasedReleaseUpdateRequestDataAttributes {
		phasedReleaseState?: AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null;
	}
	export interface AppStoreVersionPhasedReleaseUpdateRequestDataAttributesFormProperties {
		phasedReleaseState: FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>,
	}
	export function CreateAppStoreVersionPhasedReleaseUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionPhasedReleaseUpdateRequestDataAttributesFormProperties>({
			phasedReleaseState: new FormControl<AppStoreVersionPhasedReleaseAttributesPhasedReleaseState | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionResponse {

		/** Required */
		data: AppStoreVersion;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreVersionResponseFormProperties {
	}
	export function CreateAppStoreVersionResponseFormGroup() {
		return new FormGroup<AppStoreVersionResponseFormProperties>({
		});

	}

	export enum AppStoreVersionState { DEVELOPER_REMOVED_FROM_SALE = 0, DEVELOPER_REJECTED = 1, IN_REVIEW = 2, INVALID_BINARY = 3, METADATA_REJECTED = 4, PENDING_APPLE_RELEASE = 5, PENDING_CONTRACT = 6, PENDING_DEVELOPER_RELEASE = 7, PREPARE_FOR_SUBMISSION = 8, PREORDER_READY_FOR_SALE = 9, PROCESSING_FOR_APP_STORE = 10, READY_FOR_SALE = 11, REJECTED = 12, REMOVED_FROM_SALE = 13, WAITING_FOR_EXPORT_COMPLIANCE = 14, WAITING_FOR_REVIEW = 15, REPLACED_WITH_NEW_VERSION = 16 }

	export interface AppStoreVersionSubmission {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: AppStoreVersionSubmissionRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType;
	}
	export interface AppStoreVersionSubmissionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>,
	}
	export function CreateAppStoreVersionSubmissionFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionSubmissionRelationships {
		appStoreVersion?: AppStoreVersionSubmissionRelationshipsAppStoreVersion;
	}
	export interface AppStoreVersionSubmissionRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionSubmissionRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersion {
		data?: AppStoreVersionSubmissionRelationshipsAppStoreVersionData;
		links?: AppStoreVersionSubmissionRelationshipsAppStoreVersionLinks;
	}
	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreVersionSubmissionRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionSubmissionRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface AppStoreVersionSubmissionRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionSubmissionRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionSubmissionCreateRequest {

		/** Required */
		data: AppStoreVersionSubmissionCreateRequestData;
	}
	export interface AppStoreVersionSubmissionCreateRequestFormProperties {
	}
	export function CreateAppStoreVersionSubmissionCreateRequestFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionCreateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionSubmissionCreateRequestData {

		/** Required */
		relationships: AppStoreVersionSubmissionCreateRequestDataRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType;
	}
	export interface AppStoreVersionSubmissionCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>,
	}
	export function CreateAppStoreVersionSubmissionCreateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreVersionRelationshipsAppStoreVersionSubmissionDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionSubmissionCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface AppStoreVersionSubmissionCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionSubmissionCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateAppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionSubmissionResponse {

		/** Required */
		data: AppStoreVersionSubmission;

		/** Required */
		links: DocumentLinks;
	}
	export interface AppStoreVersionSubmissionResponseFormProperties {
	}
	export function CreateAppStoreVersionSubmissionResponseFormGroup() {
		return new FormGroup<AppStoreVersionSubmissionResponseFormProperties>({
		});

	}

	export interface AppStoreVersionUpdateRequest {

		/** Required */
		data: AppStoreVersionUpdateRequestData;
	}
	export interface AppStoreVersionUpdateRequestFormProperties {
	}
	export function CreateAppStoreVersionUpdateRequestFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestFormProperties>({
		});

	}

	export interface AppStoreVersionUpdateRequestData {
		attributes?: AppStoreVersionUpdateRequestDataAttributes;

		/** Required */
		id: string;
		relationships?: AppStoreVersionUpdateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface AppStoreVersionUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionUpdateRequestDataFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionUpdateRequestDataAttributes {
		copyright?: string | null;
		downloadable?: boolean | null;
		earliestReleaseDate?: Date | null;
		releaseType?: AppStoreVersionAttributesReleaseType | null;
		usesIdfa?: boolean | null;
		versionString?: string | null;
	}
	export interface AppStoreVersionUpdateRequestDataAttributesFormProperties {
		copyright: FormControl<string | null | undefined>,
		downloadable: FormControl<boolean | null | undefined>,
		earliestReleaseDate: FormControl<Date | null | undefined>,
		releaseType: FormControl<AppStoreVersionAttributesReleaseType | null | undefined>,
		usesIdfa: FormControl<boolean | null | undefined>,
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAppStoreVersionUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestDataAttributesFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			downloadable: new FormControl<boolean | null | undefined>(undefined),
			earliestReleaseDate: new FormControl<Date | null | undefined>(undefined),
			releaseType: new FormControl<AppStoreVersionAttributesReleaseType | null | undefined>(undefined),
			usesIdfa: new FormControl<boolean | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStoreVersionUpdateRequestDataRelationships {
		build?: AppStoreVersionUpdateRequestDataRelationshipsBuild;
	}
	export interface AppStoreVersionUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppStoreVersionUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppStoreVersionUpdateRequestDataRelationshipsBuild {
		data?: AppStoreVersionUpdateRequestDataRelationshipsBuildData;
	}
	export interface AppStoreVersionUpdateRequestDataRelationshipsBuildFormProperties {
	}
	export function CreateAppStoreVersionUpdateRequestDataRelationshipsBuildFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestDataRelationshipsBuildFormProperties>({
		});

	}

	export interface AppStoreVersionUpdateRequestDataRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface AppStoreVersionUpdateRequestDataRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateAppStoreVersionUpdateRequestDataRelationshipsBuildDataFormGroup() {
		return new FormGroup<AppStoreVersionUpdateRequestDataRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppStoreVersionsResponse {

		/** Required */
		data: Array<AppStoreVersion>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppStoreVersionsResponseFormProperties {
	}
	export function CreateAppStoreVersionsResponseFormGroup() {
		return new FormGroup<AppStoreVersionsResponseFormProperties>({
		});

	}

	export interface AppUpdateRequest {

		/** Required */
		data: AppUpdateRequestData;
	}
	export interface AppUpdateRequestFormProperties {
	}
	export function CreateAppUpdateRequestFormGroup() {
		return new FormGroup<AppUpdateRequestFormProperties>({
		});

	}

	export interface AppUpdateRequestData {
		attributes?: AppUpdateRequestDataAttributes;

		/** Required */
		id: string;
		relationships?: AppUpdateRequestDataRelationships;

		/** Required */
		type: AppType;
	}
	export interface AppUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateAppUpdateRequestDataFormGroup() {
		return new FormGroup<AppUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppUpdateRequestDataAttributes {
		availableInNewTerritories?: boolean | null;
		bundleId?: string | null;
		contentRightsDeclaration?: AppAttributesContentRightsDeclaration | null;
		primaryLocale?: string | null;
	}
	export interface AppUpdateRequestDataAttributesFormProperties {
		availableInNewTerritories: FormControl<boolean | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		contentRightsDeclaration: FormControl<AppAttributesContentRightsDeclaration | null | undefined>,
		primaryLocale: FormControl<string | null | undefined>,
	}
	export function CreateAppUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<AppUpdateRequestDataAttributesFormProperties>({
			availableInNewTerritories: new FormControl<boolean | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			contentRightsDeclaration: new FormControl<AppAttributesContentRightsDeclaration | null | undefined>(undefined),
			primaryLocale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppUpdateRequestDataRelationships {
		availableTerritories?: AppUpdateRequestDataRelationshipsAvailableTerritories;
		prices?: AppUpdateRequestDataRelationshipsPrices;
	}
	export interface AppUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateAppUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<AppUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface AppUpdateRequestDataRelationshipsAvailableTerritories {
		AppUpdateRequestDataRelationshipsAvailableTerritoriesData?: Array<AppUpdateRequestDataRelationshipsAvailableTerritoriesData>;
	}
	export interface AppUpdateRequestDataRelationshipsAvailableTerritoriesFormProperties {
	}
	export function CreateAppUpdateRequestDataRelationshipsAvailableTerritoriesFormGroup() {
		return new FormGroup<AppUpdateRequestDataRelationshipsAvailableTerritoriesFormProperties>({
		});

	}

	export interface AppUpdateRequestDataRelationshipsAvailableTerritoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface AppUpdateRequestDataRelationshipsAvailableTerritoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateAppUpdateRequestDataRelationshipsAvailableTerritoriesDataFormGroup() {
		return new FormGroup<AppUpdateRequestDataRelationshipsAvailableTerritoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppUpdateRequestDataRelationshipsPrices {
		AppUpdateRequestDataRelationshipsPricesData?: Array<AppUpdateRequestDataRelationshipsPricesData>;
	}
	export interface AppUpdateRequestDataRelationshipsPricesFormProperties {
	}
	export function CreateAppUpdateRequestDataRelationshipsPricesFormGroup() {
		return new FormGroup<AppUpdateRequestDataRelationshipsPricesFormProperties>({
		});

	}

	export interface AppUpdateRequestDataRelationshipsPricesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPricesDataType;
	}
	export interface AppUpdateRequestDataRelationshipsPricesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPricesDataType | null | undefined>,
	}
	export function CreateAppUpdateRequestDataRelationshipsPricesDataFormGroup() {
		return new FormGroup<AppUpdateRequestDataRelationshipsPricesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPricesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppsResponse {

		/** Required */
		data: Array<App>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface AppsResponseFormProperties {
	}
	export function CreateAppsResponseFormGroup() {
		return new FormGroup<AppsResponseFormProperties>({
		});

	}

	export interface BetaAppLocalization {
		attributes?: BetaAppLocalizationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaAppLocalizationRelationships;

		/** Required */
		type: AppRelationshipsBetaAppLocalizationsDataType;
	}
	export interface BetaAppLocalizationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaAppLocalizationFormGroup() {
		return new FormGroup<BetaAppLocalizationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppLocalizationAttributes {
		description?: string | null;
		feedbackEmail?: string | null;
		locale?: string | null;
		marketingUrl?: string | null;
		privacyPolicyUrl?: string | null;
		tvOsPrivacyPolicy?: string | null;
	}
	export interface BetaAppLocalizationAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		feedbackEmail: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		tvOsPrivacyPolicy: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppLocalizationAttributesFormGroup() {
		return new FormGroup<BetaAppLocalizationAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			feedbackEmail: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			tvOsPrivacyPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppLocalizationRelationships {
		app?: BetaAppLocalizationRelationshipsApp;
	}
	export interface BetaAppLocalizationRelationshipsFormProperties {
	}
	export function CreateBetaAppLocalizationRelationshipsFormGroup() {
		return new FormGroup<BetaAppLocalizationRelationshipsFormProperties>({
		});

	}

	export interface BetaAppLocalizationRelationshipsApp {
		data?: BetaAppLocalizationRelationshipsAppData;
		links?: BetaAppLocalizationRelationshipsAppLinks;
	}
	export interface BetaAppLocalizationRelationshipsAppFormProperties {
	}
	export function CreateBetaAppLocalizationRelationshipsAppFormGroup() {
		return new FormGroup<BetaAppLocalizationRelationshipsAppFormProperties>({
		});

	}

	export interface BetaAppLocalizationRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaAppLocalizationRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaAppLocalizationRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaAppLocalizationRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppLocalizationRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaAppLocalizationRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppLocalizationRelationshipsAppLinksFormGroup() {
		return new FormGroup<BetaAppLocalizationRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppLocalizationCreateRequest {

		/** Required */
		data: BetaAppLocalizationCreateRequestData;
	}
	export interface BetaAppLocalizationCreateRequestFormProperties {
	}
	export function CreateBetaAppLocalizationCreateRequestFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestFormProperties>({
		});

	}

	export interface BetaAppLocalizationCreateRequestData {

		/** Required */
		attributes: BetaAppLocalizationCreateRequestDataAttributes;

		/** Required */
		relationships: BetaAppLocalizationCreateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsBetaAppLocalizationsDataType;
	}
	export interface BetaAppLocalizationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaAppLocalizationCreateRequestDataFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestDataFormProperties>({
			type: new FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppLocalizationCreateRequestDataAttributes {
		description?: string | null;
		feedbackEmail?: string | null;

		/** Required */
		locale: string;
		marketingUrl?: string | null;
		privacyPolicyUrl?: string | null;
		tvOsPrivacyPolicy?: string | null;
	}
	export interface BetaAppLocalizationCreateRequestDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		feedbackEmail: FormControl<string | null | undefined>,

		/** Required */
		locale: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		tvOsPrivacyPolicy: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppLocalizationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			feedbackEmail: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			tvOsPrivacyPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppLocalizationCreateRequestDataRelationships {

		/** Required */
		app: BetaAppLocalizationCreateRequestDataRelationshipsApp;
	}
	export interface BetaAppLocalizationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaAppLocalizationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaAppLocalizationCreateRequestDataRelationshipsApp {

		/** Required */
		data: BetaAppLocalizationCreateRequestDataRelationshipsAppData;
	}
	export interface BetaAppLocalizationCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateBetaAppLocalizationCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface BetaAppLocalizationCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaAppLocalizationCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaAppLocalizationCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaAppLocalizationCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppLocalizationResponse {

		/** Required */
		data: BetaAppLocalization;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaAppLocalizationResponseFormProperties {
	}
	export function CreateBetaAppLocalizationResponseFormGroup() {
		return new FormGroup<BetaAppLocalizationResponseFormProperties>({
		});

	}

	export interface BetaAppLocalizationUpdateRequest {

		/** Required */
		data: BetaAppLocalizationUpdateRequestData;
	}
	export interface BetaAppLocalizationUpdateRequestFormProperties {
	}
	export function CreateBetaAppLocalizationUpdateRequestFormGroup() {
		return new FormGroup<BetaAppLocalizationUpdateRequestFormProperties>({
		});

	}

	export interface BetaAppLocalizationUpdateRequestData {
		attributes?: BetaAppLocalizationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaAppLocalizationsDataType;
	}
	export interface BetaAppLocalizationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaAppLocalizationUpdateRequestDataFormGroup() {
		return new FormGroup<BetaAppLocalizationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppLocalizationUpdateRequestDataAttributes {
		description?: string | null;
		feedbackEmail?: string | null;
		marketingUrl?: string | null;
		privacyPolicyUrl?: string | null;
		tvOsPrivacyPolicy?: string | null;
	}
	export interface BetaAppLocalizationUpdateRequestDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		feedbackEmail: FormControl<string | null | undefined>,
		marketingUrl: FormControl<string | null | undefined>,
		privacyPolicyUrl: FormControl<string | null | undefined>,
		tvOsPrivacyPolicy: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppLocalizationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaAppLocalizationUpdateRequestDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			feedbackEmail: new FormControl<string | null | undefined>(undefined),
			marketingUrl: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUrl: new FormControl<string | null | undefined>(undefined),
			tvOsPrivacyPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppLocalizationsResponse {

		/** Required */
		data: Array<BetaAppLocalization>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaAppLocalizationsResponseFormProperties {
	}
	export function CreateBetaAppLocalizationsResponseFormGroup() {
		return new FormGroup<BetaAppLocalizationsResponseFormProperties>({
		});

	}

	export interface BetaAppReviewDetail {
		attributes?: BetaAppReviewDetailAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaAppReviewDetailRelationships;

		/** Required */
		type: AppRelationshipsBetaAppReviewDetailDataType;
	}
	export interface BetaAppReviewDetailFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>,
	}
	export function CreateBetaAppReviewDetailFormGroup() {
		return new FormGroup<BetaAppReviewDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewDetailAttributes {
		contactEmail?: string | null;
		contactFirstName?: string | null;
		contactLastName?: string | null;
		contactPhone?: string | null;
		demoAccountName?: string | null;
		demoAccountPassword?: string | null;
		demoAccountRequired?: boolean | null;
		notes?: string | null;
	}
	export interface BetaAppReviewDetailAttributesFormProperties {
		contactEmail: FormControl<string | null | undefined>,
		contactFirstName: FormControl<string | null | undefined>,
		contactLastName: FormControl<string | null | undefined>,
		contactPhone: FormControl<string | null | undefined>,
		demoAccountName: FormControl<string | null | undefined>,
		demoAccountPassword: FormControl<string | null | undefined>,
		demoAccountRequired: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppReviewDetailAttributesFormGroup() {
		return new FormGroup<BetaAppReviewDetailAttributesFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactFirstName: new FormControl<string | null | undefined>(undefined),
			contactLastName: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			demoAccountName: new FormControl<string | null | undefined>(undefined),
			demoAccountPassword: new FormControl<string | null | undefined>(undefined),
			demoAccountRequired: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppReviewDetailRelationships {
		app?: BetaAppReviewDetailRelationshipsApp;
	}
	export interface BetaAppReviewDetailRelationshipsFormProperties {
	}
	export function CreateBetaAppReviewDetailRelationshipsFormGroup() {
		return new FormGroup<BetaAppReviewDetailRelationshipsFormProperties>({
		});

	}

	export interface BetaAppReviewDetailRelationshipsApp {
		data?: BetaAppReviewDetailRelationshipsAppData;
		links?: BetaAppReviewDetailRelationshipsAppLinks;
	}
	export interface BetaAppReviewDetailRelationshipsAppFormProperties {
	}
	export function CreateBetaAppReviewDetailRelationshipsAppFormGroup() {
		return new FormGroup<BetaAppReviewDetailRelationshipsAppFormProperties>({
		});

	}

	export interface BetaAppReviewDetailRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaAppReviewDetailRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaAppReviewDetailRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaAppReviewDetailRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewDetailRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaAppReviewDetailRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppReviewDetailRelationshipsAppLinksFormGroup() {
		return new FormGroup<BetaAppReviewDetailRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppReviewDetailResponse {

		/** Required */
		data: BetaAppReviewDetail;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaAppReviewDetailResponseFormProperties {
	}
	export function CreateBetaAppReviewDetailResponseFormGroup() {
		return new FormGroup<BetaAppReviewDetailResponseFormProperties>({
		});

	}

	export interface BetaAppReviewDetailUpdateRequest {

		/** Required */
		data: BetaAppReviewDetailUpdateRequestData;
	}
	export interface BetaAppReviewDetailUpdateRequestFormProperties {
	}
	export function CreateBetaAppReviewDetailUpdateRequestFormGroup() {
		return new FormGroup<BetaAppReviewDetailUpdateRequestFormProperties>({
		});

	}

	export interface BetaAppReviewDetailUpdateRequestData {
		attributes?: BetaAppReviewDetailUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaAppReviewDetailDataType;
	}
	export interface BetaAppReviewDetailUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>,
	}
	export function CreateBetaAppReviewDetailUpdateRequestDataFormGroup() {
		return new FormGroup<BetaAppReviewDetailUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaAppReviewDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewDetailUpdateRequestDataAttributes {
		contactEmail?: string | null;
		contactFirstName?: string | null;
		contactLastName?: string | null;
		contactPhone?: string | null;
		demoAccountName?: string | null;
		demoAccountPassword?: string | null;
		demoAccountRequired?: boolean | null;
		notes?: string | null;
	}
	export interface BetaAppReviewDetailUpdateRequestDataAttributesFormProperties {
		contactEmail: FormControl<string | null | undefined>,
		contactFirstName: FormControl<string | null | undefined>,
		contactLastName: FormControl<string | null | undefined>,
		contactPhone: FormControl<string | null | undefined>,
		demoAccountName: FormControl<string | null | undefined>,
		demoAccountPassword: FormControl<string | null | undefined>,
		demoAccountRequired: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppReviewDetailUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaAppReviewDetailUpdateRequestDataAttributesFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactFirstName: new FormControl<string | null | undefined>(undefined),
			contactLastName: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			demoAccountName: new FormControl<string | null | undefined>(undefined),
			demoAccountPassword: new FormControl<string | null | undefined>(undefined),
			demoAccountRequired: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppReviewDetailsResponse {

		/** Required */
		data: Array<BetaAppReviewDetail>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaAppReviewDetailsResponseFormProperties {
	}
	export function CreateBetaAppReviewDetailsResponseFormGroup() {
		return new FormGroup<BetaAppReviewDetailsResponseFormProperties>({
		});

	}

	export interface BetaAppReviewSubmission {
		attributes?: BetaAppReviewSubmissionAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaAppReviewSubmissionRelationships;

		/** Required */
		type: BetaAppReviewSubmissionType;
	}
	export interface BetaAppReviewSubmissionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BetaAppReviewSubmissionType | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BetaAppReviewSubmissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewSubmissionAttributes {
		betaReviewState?: BetaAppReviewSubmissionAttributesBetaReviewState | null;
	}
	export interface BetaAppReviewSubmissionAttributesFormProperties {
		betaReviewState: FormControl<BetaAppReviewSubmissionAttributesBetaReviewState | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionAttributesFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionAttributesFormProperties>({
			betaReviewState: new FormControl<BetaAppReviewSubmissionAttributesBetaReviewState | null | undefined>(undefined),
		});

	}

	export enum BetaAppReviewSubmissionAttributesBetaReviewState { WAITING_FOR_REVIEW = 0, IN_REVIEW = 1, REJECTED = 2, APPROVED = 3 }

	export interface BetaAppReviewSubmissionRelationships {
		build?: BetaAppReviewSubmissionRelationshipsBuild;
	}
	export interface BetaAppReviewSubmissionRelationshipsFormProperties {
	}
	export function CreateBetaAppReviewSubmissionRelationshipsFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionRelationshipsFormProperties>({
		});

	}

	export interface BetaAppReviewSubmissionRelationshipsBuild {
		data?: BetaAppReviewSubmissionRelationshipsBuildData;
		links?: BetaAppReviewSubmissionRelationshipsBuildLinks;
	}
	export interface BetaAppReviewSubmissionRelationshipsBuildFormProperties {
	}
	export function CreateBetaAppReviewSubmissionRelationshipsBuildFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionRelationshipsBuildFormProperties>({
		});

	}

	export interface BetaAppReviewSubmissionRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaAppReviewSubmissionRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionRelationshipsBuildDataFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewSubmissionRelationshipsBuildLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaAppReviewSubmissionRelationshipsBuildLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionRelationshipsBuildLinksFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionRelationshipsBuildLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BetaAppReviewSubmissionType { betaAppReviewSubmissions = 0 }

	export interface BetaAppReviewSubmissionCreateRequest {

		/** Required */
		data: BetaAppReviewSubmissionCreateRequestData;
	}
	export interface BetaAppReviewSubmissionCreateRequestFormProperties {
	}
	export function CreateBetaAppReviewSubmissionCreateRequestFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionCreateRequestFormProperties>({
		});

	}

	export interface BetaAppReviewSubmissionCreateRequestData {

		/** Required */
		relationships: BetaAppReviewSubmissionCreateRequestDataRelationships;

		/** Required */
		type: BetaAppReviewSubmissionType;
	}
	export interface BetaAppReviewSubmissionCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BetaAppReviewSubmissionType | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionCreateRequestDataFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionCreateRequestDataFormProperties>({
			type: new FormControl<BetaAppReviewSubmissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewSubmissionCreateRequestDataRelationships {

		/** Required */
		build: BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild;
	}
	export interface BetaAppReviewSubmissionCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaAppReviewSubmissionCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild {

		/** Required */
		data: BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildData;
	}
	export interface BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildFormProperties {
	}
	export function CreateBetaAppReviewSubmissionCreateRequestDataRelationshipsBuildFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildFormProperties>({
		});

	}

	export interface BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaAppReviewSubmissionCreateRequestDataRelationshipsBuildDataFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionCreateRequestDataRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaAppReviewSubmissionResponse {

		/** Required */
		data: BetaAppReviewSubmission;
		included?: Array<Build>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaAppReviewSubmissionResponseFormProperties {
	}
	export function CreateBetaAppReviewSubmissionResponseFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionResponseFormProperties>({
		});

	}

	export interface Build {
		attributes?: BuildAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BuildRelationships;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BuildFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildAttributes {
		expirationDate?: Date | null;
		expired?: boolean | null;
		iconAssetToken?: ImageAsset;
		minOsVersion?: string | null;
		processingState?: BuildAttributesProcessingState | null;
		uploadedDate?: Date | null;
		usesNonExemptEncryption?: boolean | null;
		version?: string | null;
	}
	export interface BuildAttributesFormProperties {
		expirationDate: FormControl<Date | null | undefined>,
		expired: FormControl<boolean | null | undefined>,
		minOsVersion: FormControl<string | null | undefined>,
		processingState: FormControl<BuildAttributesProcessingState | null | undefined>,
		uploadedDate: FormControl<Date | null | undefined>,
		usesNonExemptEncryption: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateBuildAttributesFormGroup() {
		return new FormGroup<BuildAttributesFormProperties>({
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined),
			minOsVersion: new FormControl<string | null | undefined>(undefined),
			processingState: new FormControl<BuildAttributesProcessingState | null | undefined>(undefined),
			uploadedDate: new FormControl<Date | null | undefined>(undefined),
			usesNonExemptEncryption: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildAttributesProcessingState { PROCESSING = 0, FAILED = 1, INVALID = 2, VALID = 3 }

	export interface BuildRelationships {
		app?: BuildRelationshipsApp;
		appEncryptionDeclaration?: BuildRelationshipsAppEncryptionDeclaration;
		appStoreVersion?: BuildRelationshipsAppStoreVersion;
		betaAppReviewSubmission?: BuildRelationshipsBetaAppReviewSubmission;
		betaBuildLocalizations?: BuildRelationshipsBetaBuildLocalizations;
		buildBetaDetail?: BuildRelationshipsBuildBetaDetail;
		icons?: BuildRelationshipsIcons;
		individualTesters?: BuildRelationshipsIndividualTesters;
		preReleaseVersion?: BuildRelationshipsPreReleaseVersion;
	}
	export interface BuildRelationshipsFormProperties {
	}
	export function CreateBuildRelationshipsFormGroup() {
		return new FormGroup<BuildRelationshipsFormProperties>({
		});

	}

	export interface BuildRelationshipsApp {
		data?: BuildRelationshipsAppData;
		links?: BuildRelationshipsAppLinks;
	}
	export interface BuildRelationshipsAppFormProperties {
	}
	export function CreateBuildRelationshipsAppFormGroup() {
		return new FormGroup<BuildRelationshipsAppFormProperties>({
		});

	}

	export interface BuildRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BuildRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBuildRelationshipsAppDataFormGroup() {
		return new FormGroup<BuildRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsAppLinksFormGroup() {
		return new FormGroup<BuildRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsAppEncryptionDeclaration {
		data?: BuildRelationshipsAppEncryptionDeclarationData;
		links?: BuildRelationshipsAppEncryptionDeclarationLinks;
	}
	export interface BuildRelationshipsAppEncryptionDeclarationFormProperties {
	}
	export function CreateBuildRelationshipsAppEncryptionDeclarationFormGroup() {
		return new FormGroup<BuildRelationshipsAppEncryptionDeclarationFormProperties>({
		});

	}

	export interface BuildRelationshipsAppEncryptionDeclarationData {

		/** Required */
		id: string;

		/** Required */
		type: AppEncryptionDeclarationType;
	}
	export interface BuildRelationshipsAppEncryptionDeclarationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppEncryptionDeclarationType | null | undefined>,
	}
	export function CreateBuildRelationshipsAppEncryptionDeclarationDataFormGroup() {
		return new FormGroup<BuildRelationshipsAppEncryptionDeclarationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppEncryptionDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsAppEncryptionDeclarationLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsAppEncryptionDeclarationLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsAppEncryptionDeclarationLinksFormGroup() {
		return new FormGroup<BuildRelationshipsAppEncryptionDeclarationLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsAppStoreVersion {
		data?: BuildRelationshipsAppStoreVersionData;
		links?: BuildRelationshipsAppStoreVersionLinks;
	}
	export interface BuildRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateBuildRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<BuildRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface BuildRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface BuildRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<BuildRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<BuildRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsBetaAppReviewSubmission {
		data?: BuildRelationshipsBetaAppReviewSubmissionData;
		links?: BuildRelationshipsBetaAppReviewSubmissionLinks;
	}
	export interface BuildRelationshipsBetaAppReviewSubmissionFormProperties {
	}
	export function CreateBuildRelationshipsBetaAppReviewSubmissionFormGroup() {
		return new FormGroup<BuildRelationshipsBetaAppReviewSubmissionFormProperties>({
		});

	}

	export interface BuildRelationshipsBetaAppReviewSubmissionData {

		/** Required */
		id: string;

		/** Required */
		type: BetaAppReviewSubmissionType;
	}
	export interface BuildRelationshipsBetaAppReviewSubmissionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BetaAppReviewSubmissionType | null | undefined>,
	}
	export function CreateBuildRelationshipsBetaAppReviewSubmissionDataFormGroup() {
		return new FormGroup<BuildRelationshipsBetaAppReviewSubmissionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BetaAppReviewSubmissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsBetaAppReviewSubmissionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsBetaAppReviewSubmissionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsBetaAppReviewSubmissionLinksFormGroup() {
		return new FormGroup<BuildRelationshipsBetaAppReviewSubmissionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsBetaBuildLocalizations {
		BuildRelationshipsBetaBuildLocalizationsData?: Array<BuildRelationshipsBetaBuildLocalizationsData>;
		links?: BuildRelationshipsBetaBuildLocalizationsLinks;
		meta?: PagingInformation;
	}
	export interface BuildRelationshipsBetaBuildLocalizationsFormProperties {
	}
	export function CreateBuildRelationshipsBetaBuildLocalizationsFormGroup() {
		return new FormGroup<BuildRelationshipsBetaBuildLocalizationsFormProperties>({
		});

	}

	export interface BuildRelationshipsBetaBuildLocalizationsData {

		/** Required */
		id: string;

		/** Required */
		type: BuildRelationshipsBetaBuildLocalizationsDataType;
	}
	export interface BuildRelationshipsBetaBuildLocalizationsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsBetaBuildLocalizationsDataFormGroup() {
		return new FormGroup<BuildRelationshipsBetaBuildLocalizationsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BuildRelationshipsBetaBuildLocalizationsDataType { betaBuildLocalizations = 0 }

	export interface BuildRelationshipsBetaBuildLocalizationsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsBetaBuildLocalizationsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsBetaBuildLocalizationsLinksFormGroup() {
		return new FormGroup<BuildRelationshipsBetaBuildLocalizationsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsBuildBetaDetail {
		data?: BuildRelationshipsBuildBetaDetailData;
		links?: BuildRelationshipsBuildBetaDetailLinks;
	}
	export interface BuildRelationshipsBuildBetaDetailFormProperties {
	}
	export function CreateBuildRelationshipsBuildBetaDetailFormGroup() {
		return new FormGroup<BuildRelationshipsBuildBetaDetailFormProperties>({
		});

	}

	export interface BuildRelationshipsBuildBetaDetailData {

		/** Required */
		id: string;

		/** Required */
		type: BuildRelationshipsBuildBetaDetailDataType;
	}
	export interface BuildRelationshipsBuildBetaDetailDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsBuildBetaDetailDataFormGroup() {
		return new FormGroup<BuildRelationshipsBuildBetaDetailDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BuildRelationshipsBuildBetaDetailDataType { buildBetaDetails = 0 }

	export interface BuildRelationshipsBuildBetaDetailLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsBuildBetaDetailLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsBuildBetaDetailLinksFormGroup() {
		return new FormGroup<BuildRelationshipsBuildBetaDetailLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsIcons {
		BuildRelationshipsIconsData?: Array<BuildRelationshipsIconsData>;
		links?: BuildRelationshipsIconsLinks;
		meta?: PagingInformation;
	}
	export interface BuildRelationshipsIconsFormProperties {
	}
	export function CreateBuildRelationshipsIconsFormGroup() {
		return new FormGroup<BuildRelationshipsIconsFormProperties>({
		});

	}

	export interface BuildRelationshipsIconsData {

		/** Required */
		id: string;

		/** Required */
		type: BuildRelationshipsIconsDataType;
	}
	export interface BuildRelationshipsIconsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsIconsDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsIconsDataFormGroup() {
		return new FormGroup<BuildRelationshipsIconsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsIconsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BuildRelationshipsIconsDataType { buildIcons = 0 }

	export interface BuildRelationshipsIconsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsIconsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsIconsLinksFormGroup() {
		return new FormGroup<BuildRelationshipsIconsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsIndividualTesters {
		BuildRelationshipsIndividualTestersData?: Array<BuildRelationshipsIndividualTestersData>;
		links?: BuildRelationshipsIndividualTestersLinks;
		meta?: PagingInformation;
	}
	export interface BuildRelationshipsIndividualTestersFormProperties {
	}
	export function CreateBuildRelationshipsIndividualTestersFormGroup() {
		return new FormGroup<BuildRelationshipsIndividualTestersFormProperties>({
		});

	}

	export interface BuildRelationshipsIndividualTestersData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BuildRelationshipsIndividualTestersDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsIndividualTestersDataFormGroup() {
		return new FormGroup<BuildRelationshipsIndividualTestersDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsIndividualTestersLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsIndividualTestersLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsIndividualTestersLinksFormGroup() {
		return new FormGroup<BuildRelationshipsIndividualTestersLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildRelationshipsPreReleaseVersion {
		data?: BuildRelationshipsPreReleaseVersionData;
		links?: BuildRelationshipsPreReleaseVersionLinks;
	}
	export interface BuildRelationshipsPreReleaseVersionFormProperties {
	}
	export function CreateBuildRelationshipsPreReleaseVersionFormGroup() {
		return new FormGroup<BuildRelationshipsPreReleaseVersionFormProperties>({
		});

	}

	export interface BuildRelationshipsPreReleaseVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsPreReleaseVersionsDataType;
	}
	export interface BuildRelationshipsPreReleaseVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>,
	}
	export function CreateBuildRelationshipsPreReleaseVersionDataFormGroup() {
		return new FormGroup<BuildRelationshipsPreReleaseVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildRelationshipsPreReleaseVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildRelationshipsPreReleaseVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildRelationshipsPreReleaseVersionLinksFormGroup() {
		return new FormGroup<BuildRelationshipsPreReleaseVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaAppReviewSubmissionsResponse {

		/** Required */
		data: Array<BetaAppReviewSubmission>;
		included?: Array<Build>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaAppReviewSubmissionsResponseFormProperties {
	}
	export function CreateBetaAppReviewSubmissionsResponseFormGroup() {
		return new FormGroup<BetaAppReviewSubmissionsResponseFormProperties>({
		});

	}

	export interface BetaBuildLocalization {
		attributes?: BetaBuildLocalizationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaBuildLocalizationRelationships;

		/** Required */
		type: BuildRelationshipsBetaBuildLocalizationsDataType;
	}
	export interface BetaBuildLocalizationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaBuildLocalizationFormGroup() {
		return new FormGroup<BetaBuildLocalizationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaBuildLocalizationAttributes {
		locale?: string | null;
		whatsNew?: string | null;
	}
	export interface BetaBuildLocalizationAttributesFormProperties {
		locale: FormControl<string | null | undefined>,
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateBetaBuildLocalizationAttributesFormGroup() {
		return new FormGroup<BetaBuildLocalizationAttributesFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaBuildLocalizationRelationships {
		build?: BetaBuildLocalizationRelationshipsBuild;
	}
	export interface BetaBuildLocalizationRelationshipsFormProperties {
	}
	export function CreateBetaBuildLocalizationRelationshipsFormGroup() {
		return new FormGroup<BetaBuildLocalizationRelationshipsFormProperties>({
		});

	}

	export interface BetaBuildLocalizationRelationshipsBuild {
		data?: BetaBuildLocalizationRelationshipsBuildData;
		links?: BetaBuildLocalizationRelationshipsBuildLinks;
	}
	export interface BetaBuildLocalizationRelationshipsBuildFormProperties {
	}
	export function CreateBetaBuildLocalizationRelationshipsBuildFormGroup() {
		return new FormGroup<BetaBuildLocalizationRelationshipsBuildFormProperties>({
		});

	}

	export interface BetaBuildLocalizationRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaBuildLocalizationRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaBuildLocalizationRelationshipsBuildDataFormGroup() {
		return new FormGroup<BetaBuildLocalizationRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaBuildLocalizationRelationshipsBuildLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaBuildLocalizationRelationshipsBuildLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaBuildLocalizationRelationshipsBuildLinksFormGroup() {
		return new FormGroup<BetaBuildLocalizationRelationshipsBuildLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaBuildLocalizationCreateRequest {

		/** Required */
		data: BetaBuildLocalizationCreateRequestData;
	}
	export interface BetaBuildLocalizationCreateRequestFormProperties {
	}
	export function CreateBetaBuildLocalizationCreateRequestFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestFormProperties>({
		});

	}

	export interface BetaBuildLocalizationCreateRequestData {

		/** Required */
		attributes: BetaBuildLocalizationCreateRequestDataAttributes;

		/** Required */
		relationships: BetaBuildLocalizationCreateRequestDataRelationships;

		/** Required */
		type: BuildRelationshipsBetaBuildLocalizationsDataType;
	}
	export interface BetaBuildLocalizationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaBuildLocalizationCreateRequestDataFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestDataFormProperties>({
			type: new FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaBuildLocalizationCreateRequestDataAttributes {

		/** Required */
		locale: string;
		whatsNew?: string | null;
	}
	export interface BetaBuildLocalizationCreateRequestDataAttributesFormProperties {

		/** Required */
		locale: FormControl<string | null | undefined>,
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateBetaBuildLocalizationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestDataAttributesFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaBuildLocalizationCreateRequestDataRelationships {

		/** Required */
		build: BetaBuildLocalizationCreateRequestDataRelationshipsBuild;
	}
	export interface BetaBuildLocalizationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaBuildLocalizationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaBuildLocalizationCreateRequestDataRelationshipsBuild {

		/** Required */
		data: BetaBuildLocalizationCreateRequestDataRelationshipsBuildData;
	}
	export interface BetaBuildLocalizationCreateRequestDataRelationshipsBuildFormProperties {
	}
	export function CreateBetaBuildLocalizationCreateRequestDataRelationshipsBuildFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestDataRelationshipsBuildFormProperties>({
		});

	}

	export interface BetaBuildLocalizationCreateRequestDataRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaBuildLocalizationCreateRequestDataRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaBuildLocalizationCreateRequestDataRelationshipsBuildDataFormGroup() {
		return new FormGroup<BetaBuildLocalizationCreateRequestDataRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaBuildLocalizationResponse {

		/** Required */
		data: BetaBuildLocalization;
		included?: Array<Build>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaBuildLocalizationResponseFormProperties {
	}
	export function CreateBetaBuildLocalizationResponseFormGroup() {
		return new FormGroup<BetaBuildLocalizationResponseFormProperties>({
		});

	}

	export interface BetaBuildLocalizationUpdateRequest {

		/** Required */
		data: BetaBuildLocalizationUpdateRequestData;
	}
	export interface BetaBuildLocalizationUpdateRequestFormProperties {
	}
	export function CreateBetaBuildLocalizationUpdateRequestFormGroup() {
		return new FormGroup<BetaBuildLocalizationUpdateRequestFormProperties>({
		});

	}

	export interface BetaBuildLocalizationUpdateRequestData {
		attributes?: BetaBuildLocalizationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: BuildRelationshipsBetaBuildLocalizationsDataType;
	}
	export interface BetaBuildLocalizationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>,
	}
	export function CreateBetaBuildLocalizationUpdateRequestDataFormGroup() {
		return new FormGroup<BetaBuildLocalizationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBetaBuildLocalizationsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaBuildLocalizationUpdateRequestDataAttributes {
		whatsNew?: string | null;
	}
	export interface BetaBuildLocalizationUpdateRequestDataAttributesFormProperties {
		whatsNew: FormControl<string | null | undefined>,
	}
	export function CreateBetaBuildLocalizationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaBuildLocalizationUpdateRequestDataAttributesFormProperties>({
			whatsNew: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaBuildLocalizationsResponse {

		/** Required */
		data: Array<BetaBuildLocalization>;
		included?: Array<Build>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaBuildLocalizationsResponseFormProperties {
	}
	export function CreateBetaBuildLocalizationsResponseFormGroup() {
		return new FormGroup<BetaBuildLocalizationsResponseFormProperties>({
		});

	}

	export interface BetaGroup {
		attributes?: BetaGroupAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaGroupRelationships;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaGroupFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaGroupFormGroup() {
		return new FormGroup<BetaGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupAttributes {
		createdDate?: Date | null;
		feedbackEnabled?: boolean | null;
		isInternalGroup?: boolean | null;
		name?: string | null;
		publicLink?: string | null;
		publicLinkEnabled?: boolean | null;
		publicLinkId?: string | null;
		publicLinkLimit?: number | null;
		publicLinkLimitEnabled?: boolean | null;
	}
	export interface BetaGroupAttributesFormProperties {
		createdDate: FormControl<Date | null | undefined>,
		feedbackEnabled: FormControl<boolean | null | undefined>,
		isInternalGroup: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		publicLink: FormControl<string | null | undefined>,
		publicLinkEnabled: FormControl<boolean | null | undefined>,
		publicLinkId: FormControl<string | null | undefined>,
		publicLinkLimit: FormControl<number | null | undefined>,
		publicLinkLimitEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBetaGroupAttributesFormGroup() {
		return new FormGroup<BetaGroupAttributesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			feedbackEnabled: new FormControl<boolean | null | undefined>(undefined),
			isInternalGroup: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publicLink: new FormControl<string | null | undefined>(undefined),
			publicLinkEnabled: new FormControl<boolean | null | undefined>(undefined),
			publicLinkId: new FormControl<string | null | undefined>(undefined),
			publicLinkLimit: new FormControl<number | null | undefined>(undefined),
			publicLinkLimitEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BetaGroupRelationships {
		app?: BetaGroupRelationshipsApp;
		betaTesters?: BetaGroupRelationshipsBetaTesters;
		builds?: BetaGroupRelationshipsBuilds;
	}
	export interface BetaGroupRelationshipsFormProperties {
	}
	export function CreateBetaGroupRelationshipsFormGroup() {
		return new FormGroup<BetaGroupRelationshipsFormProperties>({
		});

	}

	export interface BetaGroupRelationshipsApp {
		data?: BetaGroupRelationshipsAppData;
		links?: BetaGroupRelationshipsAppLinks;
	}
	export interface BetaGroupRelationshipsAppFormProperties {
	}
	export function CreateBetaGroupRelationshipsAppFormGroup() {
		return new FormGroup<BetaGroupRelationshipsAppFormProperties>({
		});

	}

	export interface BetaGroupRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaGroupRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaGroupRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaGroupRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsAppLinksFormGroup() {
		return new FormGroup<BetaGroupRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaGroupRelationshipsBetaTesters {
		BetaGroupRelationshipsBetaTestersData?: Array<BetaGroupRelationshipsBetaTestersData>;
		links?: BetaGroupRelationshipsBetaTestersLinks;
		meta?: PagingInformation;
	}
	export interface BetaGroupRelationshipsBetaTestersFormProperties {
	}
	export function CreateBetaGroupRelationshipsBetaTestersFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBetaTestersFormProperties>({
		});

	}

	export interface BetaGroupRelationshipsBetaTestersData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaGroupRelationshipsBetaTestersDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsBetaTestersDataFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBetaTestersDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupRelationshipsBetaTestersLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaGroupRelationshipsBetaTestersLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsBetaTestersLinksFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBetaTestersLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaGroupRelationshipsBuilds {
		BetaGroupRelationshipsBuildsData?: Array<BetaGroupRelationshipsBuildsData>;
		links?: BetaGroupRelationshipsBuildsLinks;
		meta?: PagingInformation;
	}
	export interface BetaGroupRelationshipsBuildsFormProperties {
	}
	export function CreateBetaGroupRelationshipsBuildsFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBuildsFormProperties>({
		});

	}

	export interface BetaGroupRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaGroupRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsBuildsDataFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupRelationshipsBuildsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaGroupRelationshipsBuildsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaGroupRelationshipsBuildsLinksFormGroup() {
		return new FormGroup<BetaGroupRelationshipsBuildsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaGroupBetaTestersLinkagesRequest {

		/** Required */
		BetaGroupBetaTestersLinkagesRequestData: Array<BetaGroupBetaTestersLinkagesRequestData>;
	}
	export interface BetaGroupBetaTestersLinkagesRequestFormProperties {
	}
	export function CreateBetaGroupBetaTestersLinkagesRequestFormGroup() {
		return new FormGroup<BetaGroupBetaTestersLinkagesRequestFormProperties>({
		});

	}

	export interface BetaGroupBetaTestersLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaGroupBetaTestersLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaGroupBetaTestersLinkagesRequestDataFormGroup() {
		return new FormGroup<BetaGroupBetaTestersLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupBetaTestersLinkagesResponse {

		/** Required */
		BetaGroupBetaTestersLinkagesResponseData: Array<BetaGroupBetaTestersLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaGroupBetaTestersLinkagesResponseFormProperties {
	}
	export function CreateBetaGroupBetaTestersLinkagesResponseFormGroup() {
		return new FormGroup<BetaGroupBetaTestersLinkagesResponseFormProperties>({
		});

	}

	export interface BetaGroupBetaTestersLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaGroupBetaTestersLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaGroupBetaTestersLinkagesResponseDataFormGroup() {
		return new FormGroup<BetaGroupBetaTestersLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupBuildsLinkagesRequest {

		/** Required */
		BetaGroupBuildsLinkagesRequestData: Array<BetaGroupBuildsLinkagesRequestData>;
	}
	export interface BetaGroupBuildsLinkagesRequestFormProperties {
	}
	export function CreateBetaGroupBuildsLinkagesRequestFormGroup() {
		return new FormGroup<BetaGroupBuildsLinkagesRequestFormProperties>({
		});

	}

	export interface BetaGroupBuildsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaGroupBuildsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaGroupBuildsLinkagesRequestDataFormGroup() {
		return new FormGroup<BetaGroupBuildsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupBuildsLinkagesResponse {

		/** Required */
		BetaGroupBuildsLinkagesResponseData: Array<BetaGroupBuildsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaGroupBuildsLinkagesResponseFormProperties {
	}
	export function CreateBetaGroupBuildsLinkagesResponseFormGroup() {
		return new FormGroup<BetaGroupBuildsLinkagesResponseFormProperties>({
		});

	}

	export interface BetaGroupBuildsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaGroupBuildsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaGroupBuildsLinkagesResponseDataFormGroup() {
		return new FormGroup<BetaGroupBuildsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupCreateRequest {

		/** Required */
		data: BetaGroupCreateRequestData;
	}
	export interface BetaGroupCreateRequestFormProperties {
	}
	export function CreateBetaGroupCreateRequestFormGroup() {
		return new FormGroup<BetaGroupCreateRequestFormProperties>({
		});

	}

	export interface BetaGroupCreateRequestData {

		/** Required */
		attributes: BetaGroupCreateRequestDataAttributes;

		/** Required */
		relationships: BetaGroupCreateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaGroupCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaGroupCreateRequestDataFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataFormProperties>({
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupCreateRequestDataAttributes {
		feedbackEnabled?: boolean | null;

		/** Required */
		name: string;
		publicLinkEnabled?: boolean | null;
		publicLinkLimit?: number | null;
		publicLinkLimitEnabled?: boolean | null;
	}
	export interface BetaGroupCreateRequestDataAttributesFormProperties {
		feedbackEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		publicLinkEnabled: FormControl<boolean | null | undefined>,
		publicLinkLimit: FormControl<number | null | undefined>,
		publicLinkLimitEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBetaGroupCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataAttributesFormProperties>({
			feedbackEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publicLinkEnabled: new FormControl<boolean | null | undefined>(undefined),
			publicLinkLimit: new FormControl<number | null | undefined>(undefined),
			publicLinkLimitEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BetaGroupCreateRequestDataRelationships {

		/** Required */
		app: BetaGroupCreateRequestDataRelationshipsApp;
		betaTesters?: BetaGroupCreateRequestDataRelationshipsBetaTesters;
		builds?: BetaGroupCreateRequestDataRelationshipsBuilds;
	}
	export interface BetaGroupCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsApp {

		/** Required */
		data: BetaGroupCreateRequestDataRelationshipsAppData;
	}
	export interface BetaGroupCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaGroupCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsBetaTesters {
		BetaGroupCreateRequestDataRelationshipsBetaTestersData?: Array<BetaGroupCreateRequestDataRelationshipsBetaTestersData>;
	}
	export interface BetaGroupCreateRequestDataRelationshipsBetaTestersFormProperties {
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsBetaTestersFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsBetaTestersFormProperties>({
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsBetaTestersData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaGroupCreateRequestDataRelationshipsBetaTestersDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsBetaTestersDataFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsBetaTestersDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsBuilds {
		BetaGroupCreateRequestDataRelationshipsBuildsData?: Array<BetaGroupCreateRequestDataRelationshipsBuildsData>;
	}
	export interface BetaGroupCreateRequestDataRelationshipsBuildsFormProperties {
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsBuildsFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsBuildsFormProperties>({
		});

	}

	export interface BetaGroupCreateRequestDataRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaGroupCreateRequestDataRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaGroupCreateRequestDataRelationshipsBuildsDataFormGroup() {
		return new FormGroup<BetaGroupCreateRequestDataRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupResponse {

		/** Required */
		data: BetaGroup;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaGroupResponseFormProperties {
	}
	export function CreateBetaGroupResponseFormGroup() {
		return new FormGroup<BetaGroupResponseFormProperties>({
		});

	}

	export interface BetaGroupUpdateRequest {

		/** Required */
		data: BetaGroupUpdateRequestData;
	}
	export interface BetaGroupUpdateRequestFormProperties {
	}
	export function CreateBetaGroupUpdateRequestFormGroup() {
		return new FormGroup<BetaGroupUpdateRequestFormProperties>({
		});

	}

	export interface BetaGroupUpdateRequestData {
		attributes?: BetaGroupUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaGroupUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaGroupUpdateRequestDataFormGroup() {
		return new FormGroup<BetaGroupUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaGroupUpdateRequestDataAttributes {
		feedbackEnabled?: boolean | null;
		name?: string | null;
		publicLinkEnabled?: boolean | null;
		publicLinkLimit?: number | null;
		publicLinkLimitEnabled?: boolean | null;
	}
	export interface BetaGroupUpdateRequestDataAttributesFormProperties {
		feedbackEnabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		publicLinkEnabled: FormControl<boolean | null | undefined>,
		publicLinkLimit: FormControl<number | null | undefined>,
		publicLinkLimitEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBetaGroupUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaGroupUpdateRequestDataAttributesFormProperties>({
			feedbackEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publicLinkEnabled: new FormControl<boolean | null | undefined>(undefined),
			publicLinkLimit: new FormControl<number | null | undefined>(undefined),
			publicLinkLimitEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BetaGroupsResponse {

		/** Required */
		data: Array<BetaGroup>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaGroupsResponseFormProperties {
	}
	export function CreateBetaGroupsResponseFormGroup() {
		return new FormGroup<BetaGroupsResponseFormProperties>({
		});

	}

	export enum BetaInviteType { EMAIL = 0, PUBLIC_LINK = 1 }

	export interface BetaLicenseAgreement {
		attributes?: BetaLicenseAgreementAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaLicenseAgreementRelationships;

		/** Required */
		type: AppRelationshipsBetaLicenseAgreementDataType;
	}
	export interface BetaLicenseAgreementFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>,
	}
	export function CreateBetaLicenseAgreementFormGroup() {
		return new FormGroup<BetaLicenseAgreementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaLicenseAgreementAttributes {
		agreementText?: string | null;
	}
	export interface BetaLicenseAgreementAttributesFormProperties {
		agreementText: FormControl<string | null | undefined>,
	}
	export function CreateBetaLicenseAgreementAttributesFormGroup() {
		return new FormGroup<BetaLicenseAgreementAttributesFormProperties>({
			agreementText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaLicenseAgreementRelationships {
		app?: BetaLicenseAgreementRelationshipsApp;
	}
	export interface BetaLicenseAgreementRelationshipsFormProperties {
	}
	export function CreateBetaLicenseAgreementRelationshipsFormGroup() {
		return new FormGroup<BetaLicenseAgreementRelationshipsFormProperties>({
		});

	}

	export interface BetaLicenseAgreementRelationshipsApp {
		data?: BetaLicenseAgreementRelationshipsAppData;
		links?: BetaLicenseAgreementRelationshipsAppLinks;
	}
	export interface BetaLicenseAgreementRelationshipsAppFormProperties {
	}
	export function CreateBetaLicenseAgreementRelationshipsAppFormGroup() {
		return new FormGroup<BetaLicenseAgreementRelationshipsAppFormProperties>({
		});

	}

	export interface BetaLicenseAgreementRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaLicenseAgreementRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaLicenseAgreementRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaLicenseAgreementRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaLicenseAgreementRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaLicenseAgreementRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaLicenseAgreementRelationshipsAppLinksFormGroup() {
		return new FormGroup<BetaLicenseAgreementRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaLicenseAgreementResponse {

		/** Required */
		data: BetaLicenseAgreement;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaLicenseAgreementResponseFormProperties {
	}
	export function CreateBetaLicenseAgreementResponseFormGroup() {
		return new FormGroup<BetaLicenseAgreementResponseFormProperties>({
		});

	}

	export interface BetaLicenseAgreementUpdateRequest {

		/** Required */
		data: BetaLicenseAgreementUpdateRequestData;
	}
	export interface BetaLicenseAgreementUpdateRequestFormProperties {
	}
	export function CreateBetaLicenseAgreementUpdateRequestFormGroup() {
		return new FormGroup<BetaLicenseAgreementUpdateRequestFormProperties>({
		});

	}

	export interface BetaLicenseAgreementUpdateRequestData {
		attributes?: BetaLicenseAgreementUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaLicenseAgreementDataType;
	}
	export interface BetaLicenseAgreementUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>,
	}
	export function CreateBetaLicenseAgreementUpdateRequestDataFormGroup() {
		return new FormGroup<BetaLicenseAgreementUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaLicenseAgreementUpdateRequestDataAttributes {
		agreementText?: string | null;
	}
	export interface BetaLicenseAgreementUpdateRequestDataAttributesFormProperties {
		agreementText: FormControl<string | null | undefined>,
	}
	export function CreateBetaLicenseAgreementUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaLicenseAgreementUpdateRequestDataAttributesFormProperties>({
			agreementText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaLicenseAgreementsResponse {

		/** Required */
		data: Array<BetaLicenseAgreement>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaLicenseAgreementsResponseFormProperties {
	}
	export function CreateBetaLicenseAgreementsResponseFormGroup() {
		return new FormGroup<BetaLicenseAgreementsResponseFormProperties>({
		});

	}

	export enum BetaReviewState { WAITING_FOR_REVIEW = 0, IN_REVIEW = 1, REJECTED = 2, APPROVED = 3 }

	export interface BetaTester {
		attributes?: BetaTesterAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BetaTesterRelationships;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaTesterFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaTesterFormGroup() {
		return new FormGroup<BetaTesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterAttributes {
		email?: string | null;
		firstName?: string | null;
		inviteType?: BetaInviteType | null;
		lastName?: string | null;
	}
	export interface BetaTesterAttributesFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		inviteType: FormControl<BetaInviteType | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateBetaTesterAttributesFormGroup() {
		return new FormGroup<BetaTesterAttributesFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			inviteType: new FormControl<BetaInviteType | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaTesterRelationships {
		apps?: BetaTesterRelationshipsApps;
		betaGroups?: BetaTesterRelationshipsBetaGroups;
		builds?: BetaTesterRelationshipsBuilds;
	}
	export interface BetaTesterRelationshipsFormProperties {
	}
	export function CreateBetaTesterRelationshipsFormGroup() {
		return new FormGroup<BetaTesterRelationshipsFormProperties>({
		});

	}

	export interface BetaTesterRelationshipsApps {
		BetaTesterRelationshipsAppsData?: Array<BetaTesterRelationshipsAppsData>;
		links?: BetaTesterRelationshipsAppsLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterRelationshipsAppsFormProperties {
	}
	export function CreateBetaTesterRelationshipsAppsFormGroup() {
		return new FormGroup<BetaTesterRelationshipsAppsFormProperties>({
		});

	}

	export interface BetaTesterRelationshipsAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaTesterRelationshipsAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsAppsDataFormGroup() {
		return new FormGroup<BetaTesterRelationshipsAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterRelationshipsAppsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaTesterRelationshipsAppsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsAppsLinksFormGroup() {
		return new FormGroup<BetaTesterRelationshipsAppsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaTesterRelationshipsBetaGroups {
		BetaTesterRelationshipsBetaGroupsData?: Array<BetaTesterRelationshipsBetaGroupsData>;
		links?: BetaTesterRelationshipsBetaGroupsLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterRelationshipsBetaGroupsFormProperties {
	}
	export function CreateBetaTesterRelationshipsBetaGroupsFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBetaGroupsFormProperties>({
		});

	}

	export interface BetaTesterRelationshipsBetaGroupsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaTesterRelationshipsBetaGroupsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsBetaGroupsDataFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBetaGroupsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterRelationshipsBetaGroupsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaTesterRelationshipsBetaGroupsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsBetaGroupsLinksFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBetaGroupsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaTesterRelationshipsBuilds {
		BetaTesterRelationshipsBuildsData?: Array<BetaTesterRelationshipsBuildsData>;
		links?: BetaTesterRelationshipsBuildsLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterRelationshipsBuildsFormProperties {
	}
	export function CreateBetaTesterRelationshipsBuildsFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBuildsFormProperties>({
		});

	}

	export interface BetaTesterRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaTesterRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsBuildsDataFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterRelationshipsBuildsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BetaTesterRelationshipsBuildsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBetaTesterRelationshipsBuildsLinksFormGroup() {
		return new FormGroup<BetaTesterRelationshipsBuildsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaTesterAppsLinkagesRequest {

		/** Required */
		BetaTesterAppsLinkagesRequestData: Array<BetaTesterAppsLinkagesRequestData>;
	}
	export interface BetaTesterAppsLinkagesRequestFormProperties {
	}
	export function CreateBetaTesterAppsLinkagesRequestFormGroup() {
		return new FormGroup<BetaTesterAppsLinkagesRequestFormProperties>({
		});

	}

	export interface BetaTesterAppsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaTesterAppsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaTesterAppsLinkagesRequestDataFormGroup() {
		return new FormGroup<BetaTesterAppsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterAppsLinkagesResponse {

		/** Required */
		BetaTesterAppsLinkagesResponseData: Array<BetaTesterAppsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterAppsLinkagesResponseFormProperties {
	}
	export function CreateBetaTesterAppsLinkagesResponseFormGroup() {
		return new FormGroup<BetaTesterAppsLinkagesResponseFormProperties>({
		});

	}

	export interface BetaTesterAppsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaTesterAppsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaTesterAppsLinkagesResponseDataFormGroup() {
		return new FormGroup<BetaTesterAppsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterBetaGroupsLinkagesRequest {

		/** Required */
		BetaTesterBetaGroupsLinkagesRequestData: Array<BetaTesterBetaGroupsLinkagesRequestData>;
	}
	export interface BetaTesterBetaGroupsLinkagesRequestFormProperties {
	}
	export function CreateBetaTesterBetaGroupsLinkagesRequestFormGroup() {
		return new FormGroup<BetaTesterBetaGroupsLinkagesRequestFormProperties>({
		});

	}

	export interface BetaTesterBetaGroupsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaTesterBetaGroupsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaTesterBetaGroupsLinkagesRequestDataFormGroup() {
		return new FormGroup<BetaTesterBetaGroupsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterBetaGroupsLinkagesResponse {

		/** Required */
		BetaTesterBetaGroupsLinkagesResponseData: Array<BetaTesterBetaGroupsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterBetaGroupsLinkagesResponseFormProperties {
	}
	export function CreateBetaTesterBetaGroupsLinkagesResponseFormGroup() {
		return new FormGroup<BetaTesterBetaGroupsLinkagesResponseFormProperties>({
		});

	}

	export interface BetaTesterBetaGroupsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaTesterBetaGroupsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaTesterBetaGroupsLinkagesResponseDataFormGroup() {
		return new FormGroup<BetaTesterBetaGroupsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterBuildsLinkagesRequest {

		/** Required */
		BetaTesterBuildsLinkagesRequestData: Array<BetaTesterBuildsLinkagesRequestData>;
	}
	export interface BetaTesterBuildsLinkagesRequestFormProperties {
	}
	export function CreateBetaTesterBuildsLinkagesRequestFormGroup() {
		return new FormGroup<BetaTesterBuildsLinkagesRequestFormProperties>({
		});

	}

	export interface BetaTesterBuildsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaTesterBuildsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaTesterBuildsLinkagesRequestDataFormGroup() {
		return new FormGroup<BetaTesterBuildsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterBuildsLinkagesResponse {

		/** Required */
		BetaTesterBuildsLinkagesResponseData: Array<BetaTesterBuildsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaTesterBuildsLinkagesResponseFormProperties {
	}
	export function CreateBetaTesterBuildsLinkagesResponseFormGroup() {
		return new FormGroup<BetaTesterBuildsLinkagesResponseFormProperties>({
		});

	}

	export interface BetaTesterBuildsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaTesterBuildsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaTesterBuildsLinkagesResponseDataFormGroup() {
		return new FormGroup<BetaTesterBuildsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterCreateRequest {

		/** Required */
		data: BetaTesterCreateRequestData;
	}
	export interface BetaTesterCreateRequestFormProperties {
	}
	export function CreateBetaTesterCreateRequestFormGroup() {
		return new FormGroup<BetaTesterCreateRequestFormProperties>({
		});

	}

	export interface BetaTesterCreateRequestData {

		/** Required */
		attributes: BetaTesterCreateRequestDataAttributes;
		relationships?: BetaTesterCreateRequestDataRelationships;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaTesterCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaTesterCreateRequestDataFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataFormProperties>({
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterCreateRequestDataAttributes {

		/** Required */
		email: string;
		firstName?: string | null;
		lastName?: string | null;
	}
	export interface BetaTesterCreateRequestDataAttributesFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateBetaTesterCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataAttributesFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetaTesterCreateRequestDataRelationships {
		betaGroups?: BetaTesterCreateRequestDataRelationshipsBetaGroups;
		builds?: BetaTesterCreateRequestDataRelationshipsBuilds;
	}
	export interface BetaTesterCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaTesterCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaTesterCreateRequestDataRelationshipsBetaGroups {
		BetaTesterCreateRequestDataRelationshipsBetaGroupsData?: Array<BetaTesterCreateRequestDataRelationshipsBetaGroupsData>;
	}
	export interface BetaTesterCreateRequestDataRelationshipsBetaGroupsFormProperties {
	}
	export function CreateBetaTesterCreateRequestDataRelationshipsBetaGroupsFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataRelationshipsBetaGroupsFormProperties>({
		});

	}

	export interface BetaTesterCreateRequestDataRelationshipsBetaGroupsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BetaTesterCreateRequestDataRelationshipsBetaGroupsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBetaTesterCreateRequestDataRelationshipsBetaGroupsDataFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataRelationshipsBetaGroupsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterCreateRequestDataRelationshipsBuilds {
		BetaTesterCreateRequestDataRelationshipsBuildsData?: Array<BetaTesterCreateRequestDataRelationshipsBuildsData>;
	}
	export interface BetaTesterCreateRequestDataRelationshipsBuildsFormProperties {
	}
	export function CreateBetaTesterCreateRequestDataRelationshipsBuildsFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataRelationshipsBuildsFormProperties>({
		});

	}

	export interface BetaTesterCreateRequestDataRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BetaTesterCreateRequestDataRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBetaTesterCreateRequestDataRelationshipsBuildsDataFormGroup() {
		return new FormGroup<BetaTesterCreateRequestDataRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterInvitation {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: BetaTesterInvitationType;
	}
	export interface BetaTesterInvitationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BetaTesterInvitationType | null | undefined>,
	}
	export function CreateBetaTesterInvitationFormGroup() {
		return new FormGroup<BetaTesterInvitationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BetaTesterInvitationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BetaTesterInvitationType { betaTesterInvitations = 0 }

	export interface BetaTesterInvitationCreateRequest {

		/** Required */
		data: BetaTesterInvitationCreateRequestData;
	}
	export interface BetaTesterInvitationCreateRequestFormProperties {
	}
	export function CreateBetaTesterInvitationCreateRequestFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestFormProperties>({
		});

	}

	export interface BetaTesterInvitationCreateRequestData {

		/** Required */
		relationships: BetaTesterInvitationCreateRequestDataRelationships;

		/** Required */
		type: BetaTesterInvitationType;
	}
	export interface BetaTesterInvitationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BetaTesterInvitationType | null | undefined>,
	}
	export function CreateBetaTesterInvitationCreateRequestDataFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataFormProperties>({
			type: new FormControl<BetaTesterInvitationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterInvitationCreateRequestDataRelationships {

		/** Required */
		app: BetaTesterInvitationCreateRequestDataRelationshipsApp;

		/** Required */
		betaTester: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
	}
	export interface BetaTesterInvitationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBetaTesterInvitationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BetaTesterInvitationCreateRequestDataRelationshipsApp {

		/** Required */
		data: BetaTesterInvitationCreateRequestDataRelationshipsAppData;
	}
	export interface BetaTesterInvitationCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateBetaTesterInvitationCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface BetaTesterInvitationCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BetaTesterInvitationCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBetaTesterInvitationCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTester {

		/** Required */
		data: BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterData;
	}
	export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFormProperties {
	}
	export function CreateBetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFormProperties>({
		});

	}

	export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBetaTesterInvitationCreateRequestDataRelationshipsBetaTesterDataFormGroup() {
		return new FormGroup<BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BetaTesterInvitationResponse {

		/** Required */
		data: BetaTesterInvitation;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaTesterInvitationResponseFormProperties {
	}
	export function CreateBetaTesterInvitationResponseFormGroup() {
		return new FormGroup<BetaTesterInvitationResponseFormProperties>({
		});

	}

	export interface BetaTesterResponse {

		/** Required */
		data: BetaTester;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BetaTesterResponseFormProperties {
	}
	export function CreateBetaTesterResponseFormGroup() {
		return new FormGroup<BetaTesterResponseFormProperties>({
		});

	}

	export interface BetaTestersResponse {

		/** Required */
		data: Array<BetaTester>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BetaTestersResponseFormProperties {
	}
	export function CreateBetaTestersResponseFormGroup() {
		return new FormGroup<BetaTestersResponseFormProperties>({
		});

	}

	export enum BrazilAgeRating { L = 0, TEN = 1, TWELVE = 2, FOURTEEN = 3, SIXTEEN = 4, EIGHTEEN = 5 }

	export interface BuildAppEncryptionDeclarationLinkageRequest {

		/** Required */
		data: BuildAppEncryptionDeclarationLinkageRequestData;
	}
	export interface BuildAppEncryptionDeclarationLinkageRequestFormProperties {
	}
	export function CreateBuildAppEncryptionDeclarationLinkageRequestFormGroup() {
		return new FormGroup<BuildAppEncryptionDeclarationLinkageRequestFormProperties>({
		});

	}

	export interface BuildAppEncryptionDeclarationLinkageRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppEncryptionDeclarationType;
	}
	export interface BuildAppEncryptionDeclarationLinkageRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppEncryptionDeclarationType | null | undefined>,
	}
	export function CreateBuildAppEncryptionDeclarationLinkageRequestDataFormGroup() {
		return new FormGroup<BuildAppEncryptionDeclarationLinkageRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppEncryptionDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildAppEncryptionDeclarationLinkageResponse {

		/** Required */
		data: BuildAppEncryptionDeclarationLinkageResponseData;

		/** Required */
		links: DocumentLinks;
	}
	export interface BuildAppEncryptionDeclarationLinkageResponseFormProperties {
	}
	export function CreateBuildAppEncryptionDeclarationLinkageResponseFormGroup() {
		return new FormGroup<BuildAppEncryptionDeclarationLinkageResponseFormProperties>({
		});

	}

	export interface BuildAppEncryptionDeclarationLinkageResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppEncryptionDeclarationType;
	}
	export interface BuildAppEncryptionDeclarationLinkageResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppEncryptionDeclarationType | null | undefined>,
	}
	export function CreateBuildAppEncryptionDeclarationLinkageResponseDataFormGroup() {
		return new FormGroup<BuildAppEncryptionDeclarationLinkageResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppEncryptionDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaDetail {
		attributes?: BuildBetaDetailAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BuildBetaDetailRelationships;

		/** Required */
		type: BuildRelationshipsBuildBetaDetailDataType;
	}
	export interface BuildBetaDetailFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>,
	}
	export function CreateBuildBetaDetailFormGroup() {
		return new FormGroup<BuildBetaDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaDetailAttributes {
		autoNotifyEnabled?: boolean | null;
		externalBuildState?: BuildBetaDetailAttributesExternalBuildState | null;
		internalBuildState?: BuildBetaDetailAttributesInternalBuildState | null;
	}
	export interface BuildBetaDetailAttributesFormProperties {
		autoNotifyEnabled: FormControl<boolean | null | undefined>,
		externalBuildState: FormControl<BuildBetaDetailAttributesExternalBuildState | null | undefined>,
		internalBuildState: FormControl<BuildBetaDetailAttributesInternalBuildState | null | undefined>,
	}
	export function CreateBuildBetaDetailAttributesFormGroup() {
		return new FormGroup<BuildBetaDetailAttributesFormProperties>({
			autoNotifyEnabled: new FormControl<boolean | null | undefined>(undefined),
			externalBuildState: new FormControl<BuildBetaDetailAttributesExternalBuildState | null | undefined>(undefined),
			internalBuildState: new FormControl<BuildBetaDetailAttributesInternalBuildState | null | undefined>(undefined),
		});

	}

	export enum BuildBetaDetailAttributesExternalBuildState { PROCESSING = 0, PROCESSING_EXCEPTION = 1, MISSING_EXPORT_COMPLIANCE = 2, READY_FOR_BETA_TESTING = 3, IN_BETA_TESTING = 4, EXPIRED = 5, READY_FOR_BETA_SUBMISSION = 6, IN_EXPORT_COMPLIANCE_REVIEW = 7, WAITING_FOR_BETA_REVIEW = 8, IN_BETA_REVIEW = 9, BETA_REJECTED = 10, BETA_APPROVED = 11 }

	export enum BuildBetaDetailAttributesInternalBuildState { PROCESSING = 0, PROCESSING_EXCEPTION = 1, MISSING_EXPORT_COMPLIANCE = 2, READY_FOR_BETA_TESTING = 3, IN_BETA_TESTING = 4, EXPIRED = 5, IN_EXPORT_COMPLIANCE_REVIEW = 6 }

	export interface BuildBetaDetailRelationships {
		build?: BuildBetaDetailRelationshipsBuild;
	}
	export interface BuildBetaDetailRelationshipsFormProperties {
	}
	export function CreateBuildBetaDetailRelationshipsFormGroup() {
		return new FormGroup<BuildBetaDetailRelationshipsFormProperties>({
		});

	}

	export interface BuildBetaDetailRelationshipsBuild {
		data?: BuildBetaDetailRelationshipsBuildData;
		links?: BuildBetaDetailRelationshipsBuildLinks;
	}
	export interface BuildBetaDetailRelationshipsBuildFormProperties {
	}
	export function CreateBuildBetaDetailRelationshipsBuildFormGroup() {
		return new FormGroup<BuildBetaDetailRelationshipsBuildFormProperties>({
		});

	}

	export interface BuildBetaDetailRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BuildBetaDetailRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBuildBetaDetailRelationshipsBuildDataFormGroup() {
		return new FormGroup<BuildBetaDetailRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaDetailRelationshipsBuildLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BuildBetaDetailRelationshipsBuildLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBuildBetaDetailRelationshipsBuildLinksFormGroup() {
		return new FormGroup<BuildBetaDetailRelationshipsBuildLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildBetaDetailResponse {

		/** Required */
		data: BuildBetaDetail;
		included?: Array<Build>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BuildBetaDetailResponseFormProperties {
	}
	export function CreateBuildBetaDetailResponseFormGroup() {
		return new FormGroup<BuildBetaDetailResponseFormProperties>({
		});

	}

	export interface BuildBetaDetailUpdateRequest {

		/** Required */
		data: BuildBetaDetailUpdateRequestData;
	}
	export interface BuildBetaDetailUpdateRequestFormProperties {
	}
	export function CreateBuildBetaDetailUpdateRequestFormGroup() {
		return new FormGroup<BuildBetaDetailUpdateRequestFormProperties>({
		});

	}

	export interface BuildBetaDetailUpdateRequestData {
		attributes?: BuildBetaDetailUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: BuildRelationshipsBuildBetaDetailDataType;
	}
	export interface BuildBetaDetailUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>,
	}
	export function CreateBuildBetaDetailUpdateRequestDataFormGroup() {
		return new FormGroup<BuildBetaDetailUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsBuildBetaDetailDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaDetailUpdateRequestDataAttributes {
		autoNotifyEnabled?: boolean | null;
	}
	export interface BuildBetaDetailUpdateRequestDataAttributesFormProperties {
		autoNotifyEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildBetaDetailUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BuildBetaDetailUpdateRequestDataAttributesFormProperties>({
			autoNotifyEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BuildBetaDetailsResponse {

		/** Required */
		data: Array<BuildBetaDetail>;
		included?: Array<Build>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BuildBetaDetailsResponseFormProperties {
	}
	export function CreateBuildBetaDetailsResponseFormGroup() {
		return new FormGroup<BuildBetaDetailsResponseFormProperties>({
		});

	}

	export interface BuildBetaGroupsLinkagesRequest {

		/** Required */
		BuildBetaGroupsLinkagesRequestData: Array<BuildBetaGroupsLinkagesRequestData>;
	}
	export interface BuildBetaGroupsLinkagesRequestFormProperties {
	}
	export function CreateBuildBetaGroupsLinkagesRequestFormGroup() {
		return new FormGroup<BuildBetaGroupsLinkagesRequestFormProperties>({
		});

	}

	export interface BuildBetaGroupsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBetaGroupsDataType;
	}
	export interface BuildBetaGroupsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>,
	}
	export function CreateBuildBetaGroupsLinkagesRequestDataFormGroup() {
		return new FormGroup<BuildBetaGroupsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBetaGroupsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaNotification {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: BuildBetaNotificationType;
	}
	export interface BuildBetaNotificationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildBetaNotificationType | null | undefined>,
	}
	export function CreateBuildBetaNotificationFormGroup() {
		return new FormGroup<BuildBetaNotificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildBetaNotificationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BuildBetaNotificationType { buildBetaNotifications = 0 }

	export interface BuildBetaNotificationCreateRequest {

		/** Required */
		data: BuildBetaNotificationCreateRequestData;
	}
	export interface BuildBetaNotificationCreateRequestFormProperties {
	}
	export function CreateBuildBetaNotificationCreateRequestFormGroup() {
		return new FormGroup<BuildBetaNotificationCreateRequestFormProperties>({
		});

	}

	export interface BuildBetaNotificationCreateRequestData {

		/** Required */
		relationships: BuildBetaNotificationCreateRequestDataRelationships;

		/** Required */
		type: BuildBetaNotificationType;
	}
	export interface BuildBetaNotificationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BuildBetaNotificationType | null | undefined>,
	}
	export function CreateBuildBetaNotificationCreateRequestDataFormGroup() {
		return new FormGroup<BuildBetaNotificationCreateRequestDataFormProperties>({
			type: new FormControl<BuildBetaNotificationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaNotificationCreateRequestDataRelationships {

		/** Required */
		build: BuildBetaNotificationCreateRequestDataRelationshipsBuild;
	}
	export interface BuildBetaNotificationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBuildBetaNotificationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BuildBetaNotificationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BuildBetaNotificationCreateRequestDataRelationshipsBuild {

		/** Required */
		data: BuildBetaNotificationCreateRequestDataRelationshipsBuildData;
	}
	export interface BuildBetaNotificationCreateRequestDataRelationshipsBuildFormProperties {
	}
	export function CreateBuildBetaNotificationCreateRequestDataRelationshipsBuildFormGroup() {
		return new FormGroup<BuildBetaNotificationCreateRequestDataRelationshipsBuildFormProperties>({
		});

	}

	export interface BuildBetaNotificationCreateRequestDataRelationshipsBuildData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BuildBetaNotificationCreateRequestDataRelationshipsBuildDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBuildBetaNotificationCreateRequestDataRelationshipsBuildDataFormGroup() {
		return new FormGroup<BuildBetaNotificationCreateRequestDataRelationshipsBuildDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBetaNotificationResponse {

		/** Required */
		data: BuildBetaNotification;

		/** Required */
		links: DocumentLinks;
	}
	export interface BuildBetaNotificationResponseFormProperties {
	}
	export function CreateBuildBetaNotificationResponseFormGroup() {
		return new FormGroup<BuildBetaNotificationResponseFormProperties>({
		});

	}

	export interface BuildIcon {
		attributes?: BuildIconAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: BuildRelationshipsIconsDataType;
	}
	export interface BuildIconFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BuildRelationshipsIconsDataType | null | undefined>,
	}
	export function CreateBuildIconFormGroup() {
		return new FormGroup<BuildIconFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BuildRelationshipsIconsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildIconAttributes {
		iconAsset?: ImageAsset;
		iconType?: BuildIconAttributesIconType | null;
	}
	export interface BuildIconAttributesFormProperties {
		iconType: FormControl<BuildIconAttributesIconType | null | undefined>,
	}
	export function CreateBuildIconAttributesFormGroup() {
		return new FormGroup<BuildIconAttributesFormProperties>({
			iconType: new FormControl<BuildIconAttributesIconType | null | undefined>(undefined),
		});

	}

	export enum BuildIconAttributesIconType { APP_STORE = 0, MESSAGES_APP_STORE = 1, WATCH_APP_STORE = 2, TV_OS_HOME_SCREEN = 3, TV_OS_TOP_SHELF = 4 }

	export interface BuildIconsResponse {

		/** Required */
		data: Array<BuildIcon>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BuildIconsResponseFormProperties {
	}
	export function CreateBuildIconsResponseFormGroup() {
		return new FormGroup<BuildIconsResponseFormProperties>({
		});

	}

	export interface BuildIndividualTestersLinkagesRequest {

		/** Required */
		BuildIndividualTestersLinkagesRequestData: Array<BuildIndividualTestersLinkagesRequestData>;
	}
	export interface BuildIndividualTestersLinkagesRequestFormProperties {
	}
	export function CreateBuildIndividualTestersLinkagesRequestFormGroup() {
		return new FormGroup<BuildIndividualTestersLinkagesRequestFormProperties>({
		});

	}

	export interface BuildIndividualTestersLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BuildIndividualTestersLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBuildIndividualTestersLinkagesRequestDataFormGroup() {
		return new FormGroup<BuildIndividualTestersLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildIndividualTestersLinkagesResponse {

		/** Required */
		BuildIndividualTestersLinkagesResponseData: Array<BuildIndividualTestersLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BuildIndividualTestersLinkagesResponseFormProperties {
	}
	export function CreateBuildIndividualTestersLinkagesResponseFormGroup() {
		return new FormGroup<BuildIndividualTestersLinkagesResponseFormProperties>({
		});

	}

	export interface BuildIndividualTestersLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppBetaTestersLinkagesRequestDataType;
	}
	export interface BuildIndividualTestersLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>,
	}
	export function CreateBuildIndividualTestersLinkagesResponseDataFormGroup() {
		return new FormGroup<BuildIndividualTestersLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppBetaTestersLinkagesRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildResponse {

		/** Required */
		data: Build;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BuildResponseFormProperties {
	}
	export function CreateBuildResponseFormGroup() {
		return new FormGroup<BuildResponseFormProperties>({
		});

	}

	export interface BuildUpdateRequest {

		/** Required */
		data: BuildUpdateRequestData;
	}
	export interface BuildUpdateRequestFormProperties {
	}
	export function CreateBuildUpdateRequestFormGroup() {
		return new FormGroup<BuildUpdateRequestFormProperties>({
		});

	}

	export interface BuildUpdateRequestData {
		attributes?: BuildUpdateRequestDataAttributes;

		/** Required */
		id: string;
		relationships?: BuildUpdateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface BuildUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreateBuildUpdateRequestDataFormGroup() {
		return new FormGroup<BuildUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildUpdateRequestDataAttributes {
		expired?: boolean | null;
		usesNonExemptEncryption?: boolean | null;
	}
	export interface BuildUpdateRequestDataAttributesFormProperties {
		expired: FormControl<boolean | null | undefined>,
		usesNonExemptEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BuildUpdateRequestDataAttributesFormProperties>({
			expired: new FormControl<boolean | null | undefined>(undefined),
			usesNonExemptEncryption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BuildUpdateRequestDataRelationships {
		appEncryptionDeclaration?: BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration;
	}
	export interface BuildUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateBuildUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BuildUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration {
		data?: BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationData;
	}
	export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFormProperties {
	}
	export function CreateBuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFormGroup() {
		return new FormGroup<BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFormProperties>({
		});

	}

	export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationData {

		/** Required */
		id: string;

		/** Required */
		type: AppEncryptionDeclarationType;
	}
	export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppEncryptionDeclarationType | null | undefined>,
	}
	export function CreateBuildUpdateRequestDataRelationshipsAppEncryptionDeclarationDataFormGroup() {
		return new FormGroup<BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppEncryptionDeclarationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildsResponse {

		/** Required */
		data: Array<Build>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BuildsResponseFormProperties {
	}
	export function CreateBuildsResponseFormGroup() {
		return new FormGroup<BuildsResponseFormProperties>({
		});

	}

	export interface BundleId {
		attributes?: BundleIdAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: BundleIdRelationships;

		/** Required */
		type: BundleIdType;
	}
	export interface BundleIdFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateBundleIdFormGroup() {
		return new FormGroup<BundleIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdAttributes {
		identifier?: string | null;
		name?: string | null;
		platform?: BundleIdAttributesPlatform | null;
		seedId?: string | null;
	}
	export interface BundleIdAttributesFormProperties {
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,
		seedId: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdAttributesFormGroup() {
		return new FormGroup<BundleIdAttributesFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined),
			seedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BundleIdAttributesPlatform { IOS = 0, MAC_OS = 1 }

	export interface BundleIdRelationships {
		app?: BundleIdRelationshipsApp;
		bundleIdCapabilities?: BundleIdRelationshipsBundleIdCapabilities;
		profiles?: BundleIdRelationshipsProfiles;
	}
	export interface BundleIdRelationshipsFormProperties {
	}
	export function CreateBundleIdRelationshipsFormGroup() {
		return new FormGroup<BundleIdRelationshipsFormProperties>({
		});

	}

	export interface BundleIdRelationshipsApp {
		data?: BundleIdRelationshipsAppData;
		links?: BundleIdRelationshipsAppLinks;
	}
	export interface BundleIdRelationshipsAppFormProperties {
	}
	export function CreateBundleIdRelationshipsAppFormGroup() {
		return new FormGroup<BundleIdRelationshipsAppFormProperties>({
		});

	}

	export interface BundleIdRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface BundleIdRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateBundleIdRelationshipsAppDataFormGroup() {
		return new FormGroup<BundleIdRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BundleIdRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdRelationshipsAppLinksFormGroup() {
		return new FormGroup<BundleIdRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleIdRelationshipsBundleIdCapabilities {
		BundleIdRelationshipsBundleIdCapabilitiesData?: Array<BundleIdRelationshipsBundleIdCapabilitiesData>;
		links?: BundleIdRelationshipsBundleIdCapabilitiesLinks;
		meta?: PagingInformation;
	}
	export interface BundleIdRelationshipsBundleIdCapabilitiesFormProperties {
	}
	export function CreateBundleIdRelationshipsBundleIdCapabilitiesFormGroup() {
		return new FormGroup<BundleIdRelationshipsBundleIdCapabilitiesFormProperties>({
		});

	}

	export interface BundleIdRelationshipsBundleIdCapabilitiesData {

		/** Required */
		id: string;

		/** Required */
		type: BundleIdRelationshipsBundleIdCapabilitiesDataType;
	}
	export interface BundleIdRelationshipsBundleIdCapabilitiesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>,
	}
	export function CreateBundleIdRelationshipsBundleIdCapabilitiesDataFormGroup() {
		return new FormGroup<BundleIdRelationshipsBundleIdCapabilitiesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BundleIdRelationshipsBundleIdCapabilitiesDataType { bundleIdCapabilities = 0 }

	export interface BundleIdRelationshipsBundleIdCapabilitiesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BundleIdRelationshipsBundleIdCapabilitiesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdRelationshipsBundleIdCapabilitiesLinksFormGroup() {
		return new FormGroup<BundleIdRelationshipsBundleIdCapabilitiesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleIdRelationshipsProfiles {
		BundleIdRelationshipsProfilesData?: Array<BundleIdRelationshipsProfilesData>;
		links?: BundleIdRelationshipsProfilesLinks;
		meta?: PagingInformation;
	}
	export interface BundleIdRelationshipsProfilesFormProperties {
	}
	export function CreateBundleIdRelationshipsProfilesFormGroup() {
		return new FormGroup<BundleIdRelationshipsProfilesFormProperties>({
		});

	}

	export interface BundleIdRelationshipsProfilesData {

		/** Required */
		id: string;

		/** Required */
		type: BundleIdRelationshipsProfilesDataType;
	}
	export interface BundleIdRelationshipsProfilesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>,
	}
	export function CreateBundleIdRelationshipsProfilesDataFormGroup() {
		return new FormGroup<BundleIdRelationshipsProfilesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BundleIdRelationshipsProfilesDataType { profiles = 0 }

	export interface BundleIdRelationshipsProfilesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface BundleIdRelationshipsProfilesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdRelationshipsProfilesLinksFormGroup() {
		return new FormGroup<BundleIdRelationshipsProfilesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BundleIdType { bundleIds = 0 }

	export interface BundleIdCapabilitiesResponse {

		/** Required */
		data: Array<BundleIdCapability>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BundleIdCapabilitiesResponseFormProperties {
	}
	export function CreateBundleIdCapabilitiesResponseFormGroup() {
		return new FormGroup<BundleIdCapabilitiesResponseFormProperties>({
		});

	}

	export interface BundleIdCapability {
		attributes?: BundleIdCapabilityAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: BundleIdRelationshipsBundleIdCapabilitiesDataType;
	}
	export interface BundleIdCapabilityFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>,
	}
	export function CreateBundleIdCapabilityFormGroup() {
		return new FormGroup<BundleIdCapabilityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCapabilityAttributes {
		capabilityType?: BundleIdCapabilityAttributesCapabilityType | null;
		settings?: Array<CapabilitySetting>;
	}
	export interface BundleIdCapabilityAttributesFormProperties {
		capabilityType: FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>,
	}
	export function CreateBundleIdCapabilityAttributesFormGroup() {
		return new FormGroup<BundleIdCapabilityAttributesFormProperties>({
			capabilityType: new FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>(undefined),
		});

	}

	export enum BundleIdCapabilityAttributesCapabilityType { ICLOUD = 0, IN_APP_PURCHASE = 1, GAME_CENTER = 2, PUSH_NOTIFICATIONS = 3, WALLET = 4, INTER_APP_AUDIO = 5, MAPS = 6, ASSOCIATED_DOMAINS = 7, PERSONAL_VPN = 8, APP_GROUPS = 9, HEALTHKIT = 10, HOMEKIT = 11, WIRELESS_ACCESSORY_CONFIGURATION = 12, APPLE_PAY = 13, DATA_PROTECTION = 14, SIRIKIT = 15, NETWORK_EXTENSIONS = 16, MULTIPATH = 17, HOT_SPOT = 18, NFC_TAG_READING = 19, CLASSKIT = 20, AUTOFILL_CREDENTIAL_PROVIDER = 21, ACCESS_WIFI_INFORMATION = 22, NETWORK_CUSTOM_PROTOCOL = 23, COREMEDIA_HLS_LOW_LATENCY = 24, SYSTEM_EXTENSION_INSTALL = 25, USER_MANAGEMENT = 26, APPLE_ID_AUTH = 27 }

	export interface CapabilitySetting {
		allowedInstances?: CapabilitySettingAllowedInstances | null;
		description?: string | null;
		enabledByDefault?: boolean | null;
		key?: CapabilitySettingKey | null;
		minInstances?: number | null;
		name?: string | null;
		options?: Array<CapabilityOption>;
		visible?: boolean | null;
	}
	export interface CapabilitySettingFormProperties {
		allowedInstances: FormControl<CapabilitySettingAllowedInstances | null | undefined>,
		description: FormControl<string | null | undefined>,
		enabledByDefault: FormControl<boolean | null | undefined>,
		key: FormControl<CapabilitySettingKey | null | undefined>,
		minInstances: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateCapabilitySettingFormGroup() {
		return new FormGroup<CapabilitySettingFormProperties>({
			allowedInstances: new FormControl<CapabilitySettingAllowedInstances | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabledByDefault: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<CapabilitySettingKey | null | undefined>(undefined),
			minInstances: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CapabilitySettingAllowedInstances { ENTRY = 0, SINGLE = 1, MULTIPLE = 2 }

	export enum CapabilitySettingKey { ICLOUD_VERSION = 0, DATA_PROTECTION_PERMISSION_LEVEL = 1, APPLE_ID_AUTH_APP_CONSENT = 2 }

	export interface CapabilityOption {
		description?: string | null;
		enabled?: boolean | null;
		enabledByDefault?: boolean | null;
		key?: CapabilityOptionKey | null;
		name?: string | null;
		supportsWildcard?: boolean | null;
	}
	export interface CapabilityOptionFormProperties {
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		enabledByDefault: FormControl<boolean | null | undefined>,
		key: FormControl<CapabilityOptionKey | null | undefined>,
		name: FormControl<string | null | undefined>,
		supportsWildcard: FormControl<boolean | null | undefined>,
	}
	export function CreateCapabilityOptionFormGroup() {
		return new FormGroup<CapabilityOptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			enabledByDefault: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<CapabilityOptionKey | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supportsWildcard: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CapabilityOptionKey { XCODE_5 = 0, XCODE_6 = 1, COMPLETE_PROTECTION = 2, PROTECTED_UNLESS_OPEN = 3, PROTECTED_UNTIL_FIRST_USER_AUTH = 4, PRIMARY_APP_CONSENT = 5 }

	export interface BundleIdCapabilityCreateRequest {

		/** Required */
		data: BundleIdCapabilityCreateRequestData;
	}
	export interface BundleIdCapabilityCreateRequestFormProperties {
	}
	export function CreateBundleIdCapabilityCreateRequestFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestFormProperties>({
		});

	}

	export interface BundleIdCapabilityCreateRequestData {

		/** Required */
		attributes: BundleIdCapabilityCreateRequestDataAttributes;

		/** Required */
		relationships: BundleIdCapabilityCreateRequestDataRelationships;

		/** Required */
		type: BundleIdRelationshipsBundleIdCapabilitiesDataType;
	}
	export interface BundleIdCapabilityCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>,
	}
	export function CreateBundleIdCapabilityCreateRequestDataFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestDataFormProperties>({
			type: new FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCapabilityCreateRequestDataAttributes {

		/** Required */
		capabilityType: BundleIdCapabilityAttributesCapabilityType;
		settings?: Array<CapabilitySetting>;
	}
	export interface BundleIdCapabilityCreateRequestDataAttributesFormProperties {

		/** Required */
		capabilityType: FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>,
	}
	export function CreateBundleIdCapabilityCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestDataAttributesFormProperties>({
			capabilityType: new FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCapabilityCreateRequestDataRelationships {

		/** Required */
		bundleId: BundleIdCapabilityCreateRequestDataRelationshipsBundleId;
	}
	export interface BundleIdCapabilityCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateBundleIdCapabilityCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleId {

		/** Required */
		data: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
	}
	export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFormProperties {
	}
	export function CreateBundleIdCapabilityCreateRequestDataRelationshipsBundleIdFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFormProperties>({
		});

	}

	export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData {

		/** Required */
		id: string;

		/** Required */
		type: BundleIdType;
	}
	export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateBundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFormGroup() {
		return new FormGroup<BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCapabilityResponse {

		/** Required */
		data: BundleIdCapability;

		/** Required */
		links: DocumentLinks;
	}
	export interface BundleIdCapabilityResponseFormProperties {
	}
	export function CreateBundleIdCapabilityResponseFormGroup() {
		return new FormGroup<BundleIdCapabilityResponseFormProperties>({
		});

	}

	export interface BundleIdCapabilityUpdateRequest {

		/** Required */
		data: BundleIdCapabilityUpdateRequestData;
	}
	export interface BundleIdCapabilityUpdateRequestFormProperties {
	}
	export function CreateBundleIdCapabilityUpdateRequestFormGroup() {
		return new FormGroup<BundleIdCapabilityUpdateRequestFormProperties>({
		});

	}

	export interface BundleIdCapabilityUpdateRequestData {
		attributes?: BundleIdCapabilityUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: BundleIdRelationshipsBundleIdCapabilitiesDataType;
	}
	export interface BundleIdCapabilityUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>,
	}
	export function CreateBundleIdCapabilityUpdateRequestDataFormGroup() {
		return new FormGroup<BundleIdCapabilityUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdRelationshipsBundleIdCapabilitiesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCapabilityUpdateRequestDataAttributes {
		capabilityType?: BundleIdCapabilityAttributesCapabilityType | null;
		settings?: Array<CapabilitySetting>;
	}
	export interface BundleIdCapabilityUpdateRequestDataAttributesFormProperties {
		capabilityType: FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>,
	}
	export function CreateBundleIdCapabilityUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BundleIdCapabilityUpdateRequestDataAttributesFormProperties>({
			capabilityType: new FormControl<BundleIdCapabilityAttributesCapabilityType | null | undefined>(undefined),
		});

	}

	export interface BundleIdCreateRequest {

		/** Required */
		data: BundleIdCreateRequestData;
	}
	export interface BundleIdCreateRequestFormProperties {
	}
	export function CreateBundleIdCreateRequestFormGroup() {
		return new FormGroup<BundleIdCreateRequestFormProperties>({
		});

	}

	export interface BundleIdCreateRequestData {

		/** Required */
		attributes: BundleIdCreateRequestDataAttributes;

		/** Required */
		type: BundleIdType;
	}
	export interface BundleIdCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateBundleIdCreateRequestDataFormGroup() {
		return new FormGroup<BundleIdCreateRequestDataFormProperties>({
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdCreateRequestDataAttributes {

		/** Required */
		identifier: string;

		/** Required */
		name: string;

		/** Required */
		platform: BundleIdAttributesPlatform;
		seedId?: string | null;
	}
	export interface BundleIdCreateRequestDataAttributesFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,
		seedId: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdCreateRequestDataAttributesFormGroup() {
		return new FormGroup<BundleIdCreateRequestDataAttributesFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined, [Validators.required]),
			seedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BundleIdPlatform { IOS = 0, MAC_OS = 1 }

	export interface BundleIdResponse {

		/** Required */
		data: BundleId;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface BundleIdResponseFormProperties {
	}
	export function CreateBundleIdResponseFormGroup() {
		return new FormGroup<BundleIdResponseFormProperties>({
		});

	}

	export interface BundleIdUpdateRequest {

		/** Required */
		data: BundleIdUpdateRequestData;
	}
	export interface BundleIdUpdateRequestFormProperties {
	}
	export function CreateBundleIdUpdateRequestFormGroup() {
		return new FormGroup<BundleIdUpdateRequestFormProperties>({
		});

	}

	export interface BundleIdUpdateRequestData {
		attributes?: BundleIdUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: BundleIdType;
	}
	export interface BundleIdUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateBundleIdUpdateRequestDataFormGroup() {
		return new FormGroup<BundleIdUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleIdUpdateRequestDataAttributes {
		name?: string | null;
	}
	export interface BundleIdUpdateRequestDataAttributesFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateBundleIdUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<BundleIdUpdateRequestDataAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleIdsResponse {

		/** Required */
		data: Array<BundleId>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface BundleIdsResponseFormProperties {
	}
	export function CreateBundleIdsResponseFormGroup() {
		return new FormGroup<BundleIdsResponseFormProperties>({
		});

	}

	export enum CapabilityType { ICLOUD = 0, IN_APP_PURCHASE = 1, GAME_CENTER = 2, PUSH_NOTIFICATIONS = 3, WALLET = 4, INTER_APP_AUDIO = 5, MAPS = 6, ASSOCIATED_DOMAINS = 7, PERSONAL_VPN = 8, APP_GROUPS = 9, HEALTHKIT = 10, HOMEKIT = 11, WIRELESS_ACCESSORY_CONFIGURATION = 12, APPLE_PAY = 13, DATA_PROTECTION = 14, SIRIKIT = 15, NETWORK_EXTENSIONS = 16, MULTIPATH = 17, HOT_SPOT = 18, NFC_TAG_READING = 19, CLASSKIT = 20, AUTOFILL_CREDENTIAL_PROVIDER = 21, ACCESS_WIFI_INFORMATION = 22, NETWORK_CUSTOM_PROTOCOL = 23, COREMEDIA_HLS_LOW_LATENCY = 24, SYSTEM_EXTENSION_INSTALL = 25, USER_MANAGEMENT = 26, APPLE_ID_AUTH = 27 }

	export interface Certificate {
		attributes?: CertificateAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: CertificateType;
	}
	export interface CertificateFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateAttributes {
		certificateContent?: string | null;
		certificateType?: CertificateAttributesCertificateType | null;
		displayName?: string | null;
		expirationDate?: Date | null;
		name?: string | null;
		platform?: BundleIdAttributesPlatform | null;
		serialNumber?: string | null;
	}
	export interface CertificateAttributesFormProperties {
		certificateContent: FormControl<string | null | undefined>,
		certificateType: FormControl<CertificateAttributesCertificateType | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAttributesFormGroup() {
		return new FormGroup<CertificateAttributesFormProperties>({
			certificateContent: new FormControl<string | null | undefined>(undefined),
			certificateType: new FormControl<CertificateAttributesCertificateType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateAttributesCertificateType { IOS_DEVELOPMENT = 0, IOS_DISTRIBUTION = 1, MAC_APP_DISTRIBUTION = 2, MAC_INSTALLER_DISTRIBUTION = 3, MAC_APP_DEVELOPMENT = 4, DEVELOPER_ID_KEXT = 5, DEVELOPER_ID_APPLICATION = 6, DEVELOPMENT = 7, DISTRIBUTION = 8 }

	export enum CertificateType { certificates = 0 }

	export interface CertificateCreateRequest {

		/** Required */
		data: CertificateCreateRequestData;
	}
	export interface CertificateCreateRequestFormProperties {
	}
	export function CreateCertificateCreateRequestFormGroup() {
		return new FormGroup<CertificateCreateRequestFormProperties>({
		});

	}

	export interface CertificateCreateRequestData {

		/** Required */
		attributes: CertificateCreateRequestDataAttributes;

		/** Required */
		type: CertificateType;
	}
	export interface CertificateCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateCreateRequestDataFormGroup() {
		return new FormGroup<CertificateCreateRequestDataFormProperties>({
			type: new FormControl<CertificateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateCreateRequestDataAttributes {

		/** Required */
		certificateType: CertificateAttributesCertificateType;

		/** Required */
		csrContent: string;
	}
	export interface CertificateCreateRequestDataAttributesFormProperties {

		/** Required */
		certificateType: FormControl<CertificateAttributesCertificateType | null | undefined>,

		/** Required */
		csrContent: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCreateRequestDataAttributesFormGroup() {
		return new FormGroup<CertificateCreateRequestDataAttributesFormProperties>({
			certificateType: new FormControl<CertificateAttributesCertificateType | null | undefined>(undefined, [Validators.required]),
			csrContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateResponse {

		/** Required */
		data: Certificate;

		/** Required */
		links: DocumentLinks;
	}
	export interface CertificateResponseFormProperties {
	}
	export function CreateCertificateResponseFormGroup() {
		return new FormGroup<CertificateResponseFormProperties>({
		});

	}

	export interface CertificatesResponse {

		/** Required */
		data: Array<Certificate>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface CertificatesResponseFormProperties {
	}
	export function CreateCertificatesResponseFormGroup() {
		return new FormGroup<CertificatesResponseFormProperties>({
		});

	}

	export interface Device {
		attributes?: DeviceAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: DeviceType;
	}
	export interface DeviceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceAttributes {
		addedDate?: Date | null;
		deviceClass?: DeviceAttributesDeviceClass | null;
		model?: string | null;
		name?: string | null;
		platform?: BundleIdAttributesPlatform | null;
		status?: DeviceAttributesStatus | null;
		udid?: string | null;
	}
	export interface DeviceAttributesFormProperties {
		addedDate: FormControl<Date | null | undefined>,
		deviceClass: FormControl<DeviceAttributesDeviceClass | null | undefined>,
		model: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,
		status: FormControl<DeviceAttributesStatus | null | undefined>,
		udid: FormControl<string | null | undefined>,
	}
	export function CreateDeviceAttributesFormGroup() {
		return new FormGroup<DeviceAttributesFormProperties>({
			addedDate: new FormControl<Date | null | undefined>(undefined),
			deviceClass: new FormControl<DeviceAttributesDeviceClass | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined),
			status: new FormControl<DeviceAttributesStatus | null | undefined>(undefined),
			udid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceAttributesDeviceClass { APPLE_WATCH = 0, IPAD = 1, IPHONE = 2, IPOD = 3, APPLE_TV = 4, MAC = 5 }

	export enum DeviceAttributesStatus { ENABLED = 0, DISABLED = 1 }

	export enum DeviceType { devices = 0 }

	export interface DeviceCreateRequest {

		/** Required */
		data: DeviceCreateRequestData;
	}
	export interface DeviceCreateRequestFormProperties {
	}
	export function CreateDeviceCreateRequestFormGroup() {
		return new FormGroup<DeviceCreateRequestFormProperties>({
		});

	}

	export interface DeviceCreateRequestData {

		/** Required */
		attributes: DeviceCreateRequestDataAttributes;

		/** Required */
		type: DeviceType;
	}
	export interface DeviceCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDeviceCreateRequestDataFormGroup() {
		return new FormGroup<DeviceCreateRequestDataFormProperties>({
			type: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceCreateRequestDataAttributes {

		/** Required */
		name: string;

		/** Required */
		platform: BundleIdAttributesPlatform;

		/** Required */
		udid: string;
	}
	export interface DeviceCreateRequestDataAttributesFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,

		/** Required */
		udid: FormControl<string | null | undefined>,
	}
	export function CreateDeviceCreateRequestDataAttributesFormGroup() {
		return new FormGroup<DeviceCreateRequestDataAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined, [Validators.required]),
			udid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceResponse {

		/** Required */
		data: Device;

		/** Required */
		links: DocumentLinks;
	}
	export interface DeviceResponseFormProperties {
	}
	export function CreateDeviceResponseFormGroup() {
		return new FormGroup<DeviceResponseFormProperties>({
		});

	}

	export interface DeviceUpdateRequest {

		/** Required */
		data: DeviceUpdateRequestData;
	}
	export interface DeviceUpdateRequestFormProperties {
	}
	export function CreateDeviceUpdateRequestFormGroup() {
		return new FormGroup<DeviceUpdateRequestFormProperties>({
		});

	}

	export interface DeviceUpdateRequestData {
		attributes?: DeviceUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: DeviceType;
	}
	export interface DeviceUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDeviceUpdateRequestDataFormGroup() {
		return new FormGroup<DeviceUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceUpdateRequestDataAttributes {
		name?: string | null;
		status?: DeviceAttributesStatus | null;
	}
	export interface DeviceUpdateRequestDataAttributesFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<DeviceAttributesStatus | null | undefined>,
	}
	export function CreateDeviceUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<DeviceUpdateRequestDataAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeviceAttributesStatus | null | undefined>(undefined),
		});

	}

	export interface DevicesResponse {

		/** Required */
		data: Array<Device>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface DevicesResponseFormProperties {
	}
	export function CreateDevicesResponseFormGroup() {
		return new FormGroup<DevicesResponseFormProperties>({
		});

	}

	export interface DiagnosticLog {

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: DiagnosticLogType;
	}
	export interface DiagnosticLogFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DiagnosticLogType | null | undefined>,
	}
	export function CreateDiagnosticLogFormGroup() {
		return new FormGroup<DiagnosticLogFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DiagnosticLogType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DiagnosticLogType { diagnosticLogs = 0 }

	export interface DiagnosticLogsResponse {

		/** Required */
		data: Array<DiagnosticLog>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface DiagnosticLogsResponseFormProperties {
	}
	export function CreateDiagnosticLogsResponseFormGroup() {
		return new FormGroup<DiagnosticLogsResponseFormProperties>({
		});

	}

	export interface DiagnosticSignature {
		attributes?: DiagnosticSignatureAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: DiagnosticSignatureType;
	}
	export interface DiagnosticSignatureFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DiagnosticSignatureType | null | undefined>,
	}
	export function CreateDiagnosticSignatureFormGroup() {
		return new FormGroup<DiagnosticSignatureFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DiagnosticSignatureType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DiagnosticSignatureAttributes {
		diagnosticType?: DiagnosticSignatureAttributesDiagnosticType | null;
		signature?: string | null;
		weight?: number | null;
	}
	export interface DiagnosticSignatureAttributesFormProperties {
		diagnosticType: FormControl<DiagnosticSignatureAttributesDiagnosticType | null | undefined>,
		signature: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateDiagnosticSignatureAttributesFormGroup() {
		return new FormGroup<DiagnosticSignatureAttributesFormProperties>({
			diagnosticType: new FormControl<DiagnosticSignatureAttributesDiagnosticType | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiagnosticSignatureAttributesDiagnosticType { DISK_WRITES = 0 }

	export enum DiagnosticSignatureType { diagnosticSignatures = 0 }

	export interface DiagnosticSignaturesResponse {

		/** Required */
		data: Array<DiagnosticSignature>;
		included?: Array<DiagnosticLog>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface DiagnosticSignaturesResponseFormProperties {
	}
	export function CreateDiagnosticSignaturesResponseFormGroup() {
		return new FormGroup<DiagnosticSignaturesResponseFormProperties>({
		});

	}

	export interface EndUserLicenseAgreement {
		attributes?: EndUserLicenseAgreementAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: EndUserLicenseAgreementRelationships;

		/** Required */
		type: AppRelationshipsEndUserLicenseAgreementDataType;
	}
	export interface EndUserLicenseAgreementFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementFormGroup() {
		return new FormGroup<EndUserLicenseAgreementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementAttributes {
		agreementText?: string | null;
	}
	export interface EndUserLicenseAgreementAttributesFormProperties {
		agreementText: FormControl<string | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementAttributesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementAttributesFormProperties>({
			agreementText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserLicenseAgreementRelationships {
		app?: EndUserLicenseAgreementRelationshipsApp;
		territories?: EndUserLicenseAgreementRelationshipsTerritories;
	}
	export interface EndUserLicenseAgreementRelationshipsFormProperties {
	}
	export function CreateEndUserLicenseAgreementRelationshipsFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementRelationshipsApp {
		data?: EndUserLicenseAgreementRelationshipsAppData;
		links?: EndUserLicenseAgreementRelationshipsAppLinks;
	}
	export interface EndUserLicenseAgreementRelationshipsAppFormProperties {
	}
	export function CreateEndUserLicenseAgreementRelationshipsAppFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsAppFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface EndUserLicenseAgreementRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementRelationshipsAppDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface EndUserLicenseAgreementRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementRelationshipsAppLinksFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserLicenseAgreementRelationshipsTerritories {
		EndUserLicenseAgreementRelationshipsTerritoriesData?: Array<EndUserLicenseAgreementRelationshipsTerritoriesData>;
		links?: EndUserLicenseAgreementRelationshipsTerritoriesLinks;
		meta?: PagingInformation;
	}
	export interface EndUserLicenseAgreementRelationshipsTerritoriesFormProperties {
	}
	export function CreateEndUserLicenseAgreementRelationshipsTerritoriesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsTerritoriesFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementRelationshipsTerritoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface EndUserLicenseAgreementRelationshipsTerritoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementRelationshipsTerritoriesDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsTerritoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementRelationshipsTerritoriesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface EndUserLicenseAgreementRelationshipsTerritoriesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementRelationshipsTerritoriesLinksFormGroup() {
		return new FormGroup<EndUserLicenseAgreementRelationshipsTerritoriesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserLicenseAgreementCreateRequest {

		/** Required */
		data: EndUserLicenseAgreementCreateRequestData;
	}
	export interface EndUserLicenseAgreementCreateRequestFormProperties {
	}
	export function CreateEndUserLicenseAgreementCreateRequestFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementCreateRequestData {

		/** Required */
		attributes: EndUserLicenseAgreementCreateRequestDataAttributes;

		/** Required */
		relationships: EndUserLicenseAgreementCreateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsEndUserLicenseAgreementDataType;
	}
	export interface EndUserLicenseAgreementCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataFormProperties>({
			type: new FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataAttributes {

		/** Required */
		agreementText: string;
	}
	export interface EndUserLicenseAgreementCreateRequestDataAttributesFormProperties {

		/** Required */
		agreementText: FormControl<string | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataAttributesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataAttributesFormProperties>({
			agreementText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataRelationships {

		/** Required */
		app: EndUserLicenseAgreementCreateRequestDataRelationshipsApp;

		/** Required */
		territories: EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories;
	}
	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsApp {

		/** Required */
		data: EndUserLicenseAgreementCreateRequestDataRelationshipsAppData;
	}
	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsAppFormProperties {
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataRelationshipsAppFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataRelationshipsAppFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataRelationshipsAppDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories {

		/** Required */
		EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesData: Array<EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesData>;
	}
	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFormProperties {
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementResponse {

		/** Required */
		data: EndUserLicenseAgreement;
		included?: Array<Territory>;

		/** Required */
		links: DocumentLinks;
	}
	export interface EndUserLicenseAgreementResponseFormProperties {
	}
	export function CreateEndUserLicenseAgreementResponseFormGroup() {
		return new FormGroup<EndUserLicenseAgreementResponseFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementUpdateRequest {

		/** Required */
		data: EndUserLicenseAgreementUpdateRequestData;
	}
	export interface EndUserLicenseAgreementUpdateRequestFormProperties {
	}
	export function CreateEndUserLicenseAgreementUpdateRequestFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementUpdateRequestData {
		attributes?: EndUserLicenseAgreementUpdateRequestDataAttributes;

		/** Required */
		id: string;
		relationships?: EndUserLicenseAgreementUpdateRequestDataRelationships;

		/** Required */
		type: AppRelationshipsEndUserLicenseAgreementDataType;
	}
	export interface EndUserLicenseAgreementUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementUpdateRequestDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsEndUserLicenseAgreementDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndUserLicenseAgreementUpdateRequestDataAttributes {
		agreementText?: string | null;
	}
	export interface EndUserLicenseAgreementUpdateRequestDataAttributesFormProperties {
		agreementText: FormControl<string | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestDataAttributesFormProperties>({
			agreementText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserLicenseAgreementUpdateRequestDataRelationships {
		territories?: EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories;
	}
	export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateEndUserLicenseAgreementUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories {
		EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesData?: Array<EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesData>;
	}
	export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFormProperties {
	}
	export function CreateEndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFormProperties>({
		});

	}

	export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAvailableTerritoriesDataType;
	}
	export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>,
	}
	export function CreateEndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesDataFormGroup() {
		return new FormGroup<EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAvailableTerritoriesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {
		ErrorResponseErrors?: Array<ErrorResponseErrors>;
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface ErrorResponseErrors {

		/** Required */
		code: string;

		/** Required */
		detail: string;
		id?: string | null;
		source?: ErrorResponseErrorsSource;

		/** Required */
		status: string;

		/** Required */
		title: string;
	}
	export interface ErrorResponseErrorsFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		detail: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseErrorsFormGroup() {
		return new FormGroup<ErrorResponseErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponseErrorsSource {
		pointer?: string | null;
	}
	export interface ErrorResponseErrorsSourceFormProperties {
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseErrorsSourceFormGroup() {
		return new FormGroup<ErrorResponseErrorsSourceFormProperties>({
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalBetaState { PROCESSING = 0, PROCESSING_EXCEPTION = 1, MISSING_EXPORT_COMPLIANCE = 2, READY_FOR_BETA_TESTING = 3, IN_BETA_TESTING = 4, EXPIRED = 5, READY_FOR_BETA_SUBMISSION = 6, IN_EXPORT_COMPLIANCE_REVIEW = 7, WAITING_FOR_BETA_REVIEW = 8, IN_BETA_REVIEW = 9, BETA_REJECTED = 10, BETA_APPROVED = 11 }

	export interface GameCenterEnabledVersion {
		attributes?: GameCenterEnabledVersionAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: GameCenterEnabledVersionRelationships;

		/** Required */
		type: AppRelationshipsGameCenterEnabledVersionsDataType;
	}
	export interface GameCenterEnabledVersionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionFormGroup() {
		return new FormGroup<GameCenterEnabledVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GameCenterEnabledVersionAttributes {
		iconAsset?: ImageAsset;
		platform?: Platform | null;
		versionString?: string | null;
	}
	export interface GameCenterEnabledVersionAttributesFormProperties {
		platform: FormControl<Platform | null | undefined>,
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionAttributesFormGroup() {
		return new FormGroup<GameCenterEnabledVersionAttributesFormProperties>({
			platform: new FormControl<Platform | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameCenterEnabledVersionRelationships {
		app?: GameCenterEnabledVersionRelationshipsApp;
		compatibleVersions?: GameCenterEnabledVersionRelationshipsCompatibleVersions;
	}
	export interface GameCenterEnabledVersionRelationshipsFormProperties {
	}
	export function CreateGameCenterEnabledVersionRelationshipsFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsFormProperties>({
		});

	}

	export interface GameCenterEnabledVersionRelationshipsApp {
		data?: GameCenterEnabledVersionRelationshipsAppData;
		links?: GameCenterEnabledVersionRelationshipsAppLinks;
	}
	export interface GameCenterEnabledVersionRelationshipsAppFormProperties {
	}
	export function CreateGameCenterEnabledVersionRelationshipsAppFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsAppFormProperties>({
		});

	}

	export interface GameCenterEnabledVersionRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface GameCenterEnabledVersionRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionRelationshipsAppDataFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GameCenterEnabledVersionRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface GameCenterEnabledVersionRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionRelationshipsAppLinksFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameCenterEnabledVersionRelationshipsCompatibleVersions {
		GameCenterEnabledVersionRelationshipsCompatibleVersionsData?: Array<GameCenterEnabledVersionRelationshipsCompatibleVersionsData>;
		links?: GameCenterEnabledVersionRelationshipsCompatibleVersionsLinks;
		meta?: PagingInformation;
	}
	export interface GameCenterEnabledVersionRelationshipsCompatibleVersionsFormProperties {
	}
	export function CreateGameCenterEnabledVersionRelationshipsCompatibleVersionsFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsCompatibleVersionsFormProperties>({
		});

	}

	export interface GameCenterEnabledVersionRelationshipsCompatibleVersionsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsGameCenterEnabledVersionsDataType;
	}
	export interface GameCenterEnabledVersionRelationshipsCompatibleVersionsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionRelationshipsCompatibleVersionsDataFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsCompatibleVersionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GameCenterEnabledVersionRelationshipsCompatibleVersionsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface GameCenterEnabledVersionRelationshipsCompatibleVersionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionRelationshipsCompatibleVersionsLinksFormGroup() {
		return new FormGroup<GameCenterEnabledVersionRelationshipsCompatibleVersionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequest {

		/** Required */
		GameCenterEnabledVersionCompatibleVersionsLinkagesRequestData: Array<GameCenterEnabledVersionCompatibleVersionsLinkagesRequestData>;
	}
	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFormProperties {
	}
	export function CreateGameCenterEnabledVersionCompatibleVersionsLinkagesRequestFormGroup() {
		return new FormGroup<GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFormProperties>({
		});

	}

	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsGameCenterEnabledVersionsDataType;
	}
	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionCompatibleVersionsLinkagesRequestDataFormGroup() {
		return new FormGroup<GameCenterEnabledVersionCompatibleVersionsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponse {

		/** Required */
		GameCenterEnabledVersionCompatibleVersionsLinkagesResponseData: Array<GameCenterEnabledVersionCompatibleVersionsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFormProperties {
	}
	export function CreateGameCenterEnabledVersionCompatibleVersionsLinkagesResponseFormGroup() {
		return new FormGroup<GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFormProperties>({
		});

	}

	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsGameCenterEnabledVersionsDataType;
	}
	export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>,
	}
	export function CreateGameCenterEnabledVersionCompatibleVersionsLinkagesResponseDataFormGroup() {
		return new FormGroup<GameCenterEnabledVersionCompatibleVersionsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsGameCenterEnabledVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GameCenterEnabledVersionsResponse {

		/** Required */
		data: Array<GameCenterEnabledVersion>;
		included?: Array<GameCenterEnabledVersion>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface GameCenterEnabledVersionsResponseFormProperties {
	}
	export function CreateGameCenterEnabledVersionsResponseFormGroup() {
		return new FormGroup<GameCenterEnabledVersionsResponseFormProperties>({
		});

	}

	export enum IconAssetType { APP_STORE = 0, MESSAGES_APP_STORE = 1, WATCH_APP_STORE = 2, TV_OS_HOME_SCREEN = 3, TV_OS_TOP_SHELF = 4 }

	export interface IdfaDeclaration {
		attributes?: IdfaDeclarationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: IdfaDeclarationRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsIdfaDeclarationDataType;
	}
	export interface IdfaDeclarationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>,
	}
	export function CreateIdfaDeclarationFormGroup() {
		return new FormGroup<IdfaDeclarationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationAttributes {
		attributesActionWithPreviousAd?: boolean | null;
		attributesAppInstallationToPreviousAd?: boolean | null;
		honorsLimitedAdTracking?: boolean | null;
		servesAds?: boolean | null;
	}
	export interface IdfaDeclarationAttributesFormProperties {
		attributesActionWithPreviousAd: FormControl<boolean | null | undefined>,
		attributesAppInstallationToPreviousAd: FormControl<boolean | null | undefined>,
		honorsLimitedAdTracking: FormControl<boolean | null | undefined>,
		servesAds: FormControl<boolean | null | undefined>,
	}
	export function CreateIdfaDeclarationAttributesFormGroup() {
		return new FormGroup<IdfaDeclarationAttributesFormProperties>({
			attributesActionWithPreviousAd: new FormControl<boolean | null | undefined>(undefined),
			attributesAppInstallationToPreviousAd: new FormControl<boolean | null | undefined>(undefined),
			honorsLimitedAdTracking: new FormControl<boolean | null | undefined>(undefined),
			servesAds: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IdfaDeclarationRelationships {
		appStoreVersion?: IdfaDeclarationRelationshipsAppStoreVersion;
	}
	export interface IdfaDeclarationRelationshipsFormProperties {
	}
	export function CreateIdfaDeclarationRelationshipsFormGroup() {
		return new FormGroup<IdfaDeclarationRelationshipsFormProperties>({
		});

	}

	export interface IdfaDeclarationRelationshipsAppStoreVersion {
		data?: IdfaDeclarationRelationshipsAppStoreVersionData;
		links?: IdfaDeclarationRelationshipsAppStoreVersionLinks;
	}
	export interface IdfaDeclarationRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateIdfaDeclarationRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<IdfaDeclarationRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface IdfaDeclarationRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface IdfaDeclarationRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateIdfaDeclarationRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<IdfaDeclarationRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface IdfaDeclarationRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateIdfaDeclarationRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<IdfaDeclarationRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdfaDeclarationCreateRequest {

		/** Required */
		data: IdfaDeclarationCreateRequestData;
	}
	export interface IdfaDeclarationCreateRequestFormProperties {
	}
	export function CreateIdfaDeclarationCreateRequestFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestFormProperties>({
		});

	}

	export interface IdfaDeclarationCreateRequestData {

		/** Required */
		attributes: IdfaDeclarationCreateRequestDataAttributes;

		/** Required */
		relationships: IdfaDeclarationCreateRequestDataRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsIdfaDeclarationDataType;
	}
	export interface IdfaDeclarationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>,
	}
	export function CreateIdfaDeclarationCreateRequestDataFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationCreateRequestDataAttributes {

		/** Required */
		attributesActionWithPreviousAd: boolean;

		/** Required */
		attributesAppInstallationToPreviousAd: boolean;

		/** Required */
		honorsLimitedAdTracking: boolean;

		/** Required */
		servesAds: boolean;
	}
	export interface IdfaDeclarationCreateRequestDataAttributesFormProperties {

		/** Required */
		attributesActionWithPreviousAd: FormControl<boolean | null | undefined>,

		/** Required */
		attributesAppInstallationToPreviousAd: FormControl<boolean | null | undefined>,

		/** Required */
		honorsLimitedAdTracking: FormControl<boolean | null | undefined>,

		/** Required */
		servesAds: FormControl<boolean | null | undefined>,
	}
	export function CreateIdfaDeclarationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestDataAttributesFormProperties>({
			attributesActionWithPreviousAd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			attributesAppInstallationToPreviousAd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			honorsLimitedAdTracking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			servesAds: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface IdfaDeclarationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateIdfaDeclarationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateIdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateIdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<IdfaDeclarationCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationResponse {

		/** Required */
		data: IdfaDeclaration;

		/** Required */
		links: DocumentLinks;
	}
	export interface IdfaDeclarationResponseFormProperties {
	}
	export function CreateIdfaDeclarationResponseFormGroup() {
		return new FormGroup<IdfaDeclarationResponseFormProperties>({
		});

	}

	export interface IdfaDeclarationUpdateRequest {

		/** Required */
		data: IdfaDeclarationUpdateRequestData;
	}
	export interface IdfaDeclarationUpdateRequestFormProperties {
	}
	export function CreateIdfaDeclarationUpdateRequestFormGroup() {
		return new FormGroup<IdfaDeclarationUpdateRequestFormProperties>({
		});

	}

	export interface IdfaDeclarationUpdateRequestData {
		attributes?: IdfaDeclarationUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsIdfaDeclarationDataType;
	}
	export interface IdfaDeclarationUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>,
	}
	export function CreateIdfaDeclarationUpdateRequestDataFormGroup() {
		return new FormGroup<IdfaDeclarationUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsIdfaDeclarationDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdfaDeclarationUpdateRequestDataAttributes {
		attributesActionWithPreviousAd?: boolean | null;
		attributesAppInstallationToPreviousAd?: boolean | null;
		honorsLimitedAdTracking?: boolean | null;
		servesAds?: boolean | null;
	}
	export interface IdfaDeclarationUpdateRequestDataAttributesFormProperties {
		attributesActionWithPreviousAd: FormControl<boolean | null | undefined>,
		attributesAppInstallationToPreviousAd: FormControl<boolean | null | undefined>,
		honorsLimitedAdTracking: FormControl<boolean | null | undefined>,
		servesAds: FormControl<boolean | null | undefined>,
	}
	export function CreateIdfaDeclarationUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<IdfaDeclarationUpdateRequestDataAttributesFormProperties>({
			attributesActionWithPreviousAd: new FormControl<boolean | null | undefined>(undefined),
			attributesAppInstallationToPreviousAd: new FormControl<boolean | null | undefined>(undefined),
			honorsLimitedAdTracking: new FormControl<boolean | null | undefined>(undefined),
			servesAds: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InAppPurchase {
		attributes?: InAppPurchaseAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: InAppPurchaseRelationships;

		/** Required */
		type: AppRelationshipsInAppPurchasesDataType;
	}
	export interface InAppPurchaseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsInAppPurchasesDataType | null | undefined>,
	}
	export function CreateInAppPurchaseFormGroup() {
		return new FormGroup<InAppPurchaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsInAppPurchasesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InAppPurchaseAttributes {
		inAppPurchaseType?: InAppPurchaseAttributesInAppPurchaseType | null;
		productId?: string | null;
		referenceName?: string | null;
		state?: InAppPurchaseAttributesState | null;
	}
	export interface InAppPurchaseAttributesFormProperties {
		inAppPurchaseType: FormControl<InAppPurchaseAttributesInAppPurchaseType | null | undefined>,
		productId: FormControl<string | null | undefined>,
		referenceName: FormControl<string | null | undefined>,
		state: FormControl<InAppPurchaseAttributesState | null | undefined>,
	}
	export function CreateInAppPurchaseAttributesFormGroup() {
		return new FormGroup<InAppPurchaseAttributesFormProperties>({
			inAppPurchaseType: new FormControl<InAppPurchaseAttributesInAppPurchaseType | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InAppPurchaseAttributesState | null | undefined>(undefined),
		});

	}

	export enum InAppPurchaseAttributesInAppPurchaseType { AUTOMATICALLY_RENEWABLE_SUBSCRIPTION = 0, NON_CONSUMABLE = 1, CONSUMABLE = 2, NON_RENEWING_SUBSCRIPTION = 3, FREE_SUBSCRIPTION = 4 }

	export enum InAppPurchaseAttributesState { CREATED = 0, DEVELOPER_SIGNED_OFF = 1, DEVELOPER_ACTION_NEEDED = 2, DELETION_IN_PROGRESS = 3, APPROVED = 4, DELETED = 5, REMOVED_FROM_SALE = 6, DEVELOPER_REMOVED_FROM_SALE = 7, WAITING_FOR_UPLOAD = 8, PROCESSING_CONTENT = 9, REPLACED = 10, REJECTED = 11, WAITING_FOR_SCREENSHOT = 12, PREPARE_FOR_SUBMISSION = 13, MISSING_METADATA = 14, READY_TO_SUBMIT = 15, WAITING_FOR_REVIEW = 16, IN_REVIEW = 17, PENDING_DEVELOPER_RELEASE = 18 }

	export interface InAppPurchaseRelationships {
		apps?: InAppPurchaseRelationshipsApps;
	}
	export interface InAppPurchaseRelationshipsFormProperties {
	}
	export function CreateInAppPurchaseRelationshipsFormGroup() {
		return new FormGroup<InAppPurchaseRelationshipsFormProperties>({
		});

	}

	export interface InAppPurchaseRelationshipsApps {
		InAppPurchaseRelationshipsAppsData?: Array<InAppPurchaseRelationshipsAppsData>;
		links?: InAppPurchaseRelationshipsAppsLinks;
		meta?: PagingInformation;
	}
	export interface InAppPurchaseRelationshipsAppsFormProperties {
	}
	export function CreateInAppPurchaseRelationshipsAppsFormGroup() {
		return new FormGroup<InAppPurchaseRelationshipsAppsFormProperties>({
		});

	}

	export interface InAppPurchaseRelationshipsAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface InAppPurchaseRelationshipsAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateInAppPurchaseRelationshipsAppsDataFormGroup() {
		return new FormGroup<InAppPurchaseRelationshipsAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InAppPurchaseRelationshipsAppsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface InAppPurchaseRelationshipsAppsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateInAppPurchaseRelationshipsAppsLinksFormGroup() {
		return new FormGroup<InAppPurchaseRelationshipsAppsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InAppPurchaseResponse {

		/** Required */
		data: InAppPurchase;

		/** Required */
		links: DocumentLinks;
	}
	export interface InAppPurchaseResponseFormProperties {
	}
	export function CreateInAppPurchaseResponseFormGroup() {
		return new FormGroup<InAppPurchaseResponseFormProperties>({
		});

	}

	export interface InAppPurchasesResponse {

		/** Required */
		data: Array<InAppPurchase>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface InAppPurchasesResponseFormProperties {
	}
	export function CreateInAppPurchasesResponseFormGroup() {
		return new FormGroup<InAppPurchasesResponseFormProperties>({
		});

	}

	export enum InternalBetaState { PROCESSING = 0, PROCESSING_EXCEPTION = 1, MISSING_EXPORT_COMPLIANCE = 2, READY_FOR_BETA_TESTING = 3, IN_BETA_TESTING = 4, EXPIRED = 5, IN_EXPORT_COMPLIANCE_REVIEW = 6 }

	export enum KidsAgeBand { FIVE_AND_UNDER = 0, SIX_TO_EIGHT = 1, NINE_TO_ELEVEN = 2 }

	export interface PerfPowerMetric {
		attributes?: PerfPowerMetricAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;

		/** Required */
		type: PerfPowerMetricType;
	}
	export interface PerfPowerMetricFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PerfPowerMetricType | null | undefined>,
	}
	export function CreatePerfPowerMetricFormGroup() {
		return new FormGroup<PerfPowerMetricFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PerfPowerMetricType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PerfPowerMetricAttributes {
		deviceType?: string | null;
		metricType?: PerfPowerMetricAttributesMetricType | null;
		platform?: PerfPowerMetricAttributesPlatform | null;
	}
	export interface PerfPowerMetricAttributesFormProperties {
		deviceType: FormControl<string | null | undefined>,
		metricType: FormControl<PerfPowerMetricAttributesMetricType | null | undefined>,
		platform: FormControl<PerfPowerMetricAttributesPlatform | null | undefined>,
	}
	export function CreatePerfPowerMetricAttributesFormGroup() {
		return new FormGroup<PerfPowerMetricAttributesFormProperties>({
			deviceType: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<PerfPowerMetricAttributesMetricType | null | undefined>(undefined),
			platform: new FormControl<PerfPowerMetricAttributesPlatform | null | undefined>(undefined),
		});

	}

	export enum PerfPowerMetricAttributesMetricType { DISK = 0, HANG = 1, BATTERY = 2, LAUNCH = 3, MEMORY = 4, ANIMATION = 5, TERMINATION = 6 }

	export enum PerfPowerMetricAttributesPlatform { IOS = 0 }

	export enum PerfPowerMetricType { perfPowerMetrics = 0 }

	export interface PerfPowerMetricsResponse {

		/** Required */
		data: Array<PerfPowerMetric>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface PerfPowerMetricsResponseFormProperties {
	}
	export function CreatePerfPowerMetricsResponseFormGroup() {
		return new FormGroup<PerfPowerMetricsResponseFormProperties>({
		});

	}

	export enum PhasedReleaseState { INACTIVE = 0, ACTIVE = 1, PAUSED = 2, COMPLETE = 3 }

	export interface PreReleaseVersionsResponse {

		/** Required */
		data: Array<PrereleaseVersion>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface PreReleaseVersionsResponseFormProperties {
	}
	export function CreatePreReleaseVersionsResponseFormGroup() {
		return new FormGroup<PreReleaseVersionsResponseFormProperties>({
		});

	}

	export interface PrereleaseVersion {
		attributes?: PrereleaseVersionAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: PrereleaseVersionRelationships;

		/** Required */
		type: AppRelationshipsPreReleaseVersionsDataType;
	}
	export interface PrereleaseVersionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>,
	}
	export function CreatePrereleaseVersionFormGroup() {
		return new FormGroup<PrereleaseVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsPreReleaseVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrereleaseVersionAttributes {
		platform?: Platform | null;
		version?: string | null;
	}
	export interface PrereleaseVersionAttributesFormProperties {
		platform: FormControl<Platform | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreatePrereleaseVersionAttributesFormGroup() {
		return new FormGroup<PrereleaseVersionAttributesFormProperties>({
			platform: new FormControl<Platform | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrereleaseVersionRelationships {
		app?: PrereleaseVersionRelationshipsApp;
		builds?: PrereleaseVersionRelationshipsBuilds;
	}
	export interface PrereleaseVersionRelationshipsFormProperties {
	}
	export function CreatePrereleaseVersionRelationshipsFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsFormProperties>({
		});

	}

	export interface PrereleaseVersionRelationshipsApp {
		data?: PrereleaseVersionRelationshipsAppData;
		links?: PrereleaseVersionRelationshipsAppLinks;
	}
	export interface PrereleaseVersionRelationshipsAppFormProperties {
	}
	export function CreatePrereleaseVersionRelationshipsAppFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsAppFormProperties>({
		});

	}

	export interface PrereleaseVersionRelationshipsAppData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface PrereleaseVersionRelationshipsAppDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreatePrereleaseVersionRelationshipsAppDataFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsAppDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrereleaseVersionRelationshipsAppLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface PrereleaseVersionRelationshipsAppLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreatePrereleaseVersionRelationshipsAppLinksFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsAppLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrereleaseVersionRelationshipsBuilds {
		PrereleaseVersionRelationshipsBuildsData?: Array<PrereleaseVersionRelationshipsBuildsData>;
		links?: PrereleaseVersionRelationshipsBuildsLinks;
		meta?: PagingInformation;
	}
	export interface PrereleaseVersionRelationshipsBuildsFormProperties {
	}
	export function CreatePrereleaseVersionRelationshipsBuildsFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsBuildsFormProperties>({
		});

	}

	export interface PrereleaseVersionRelationshipsBuildsData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsBuildsDataType;
	}
	export interface PrereleaseVersionRelationshipsBuildsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsBuildsDataType | null | undefined>,
	}
	export function CreatePrereleaseVersionRelationshipsBuildsDataFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsBuildsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsBuildsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrereleaseVersionRelationshipsBuildsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface PrereleaseVersionRelationshipsBuildsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreatePrereleaseVersionRelationshipsBuildsLinksFormGroup() {
		return new FormGroup<PrereleaseVersionRelationshipsBuildsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrereleaseVersionResponse {

		/** Required */
		data: PrereleaseVersion;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface PrereleaseVersionResponseFormProperties {
	}
	export function CreatePrereleaseVersionResponseFormGroup() {
		return new FormGroup<PrereleaseVersionResponseFormProperties>({
		});

	}

	export enum PreviewType { IPHONE_65 = 0, IPHONE_58 = 1, IPHONE_55 = 2, IPHONE_47 = 3, IPHONE_40 = 4, IPHONE_35 = 5, IPAD_PRO_3GEN_129 = 6, IPAD_PRO_3GEN_11 = 7, IPAD_PRO_129 = 8, IPAD_105 = 9, IPAD_97 = 10, DESKTOP = 11, WATCH_SERIES_4 = 12, WATCH_SERIES_3 = 13, APPLE_TV = 14 }

	export interface Profile {
		attributes?: ProfileAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: ProfileRelationships;

		/** Required */
		type: BundleIdRelationshipsProfilesDataType;
	}
	export interface ProfileFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileAttributes {
		createdDate?: Date | null;
		expirationDate?: Date | null;
		name?: string | null;
		platform?: BundleIdAttributesPlatform | null;
		profileContent?: string | null;
		profileState?: ProfileAttributesProfileState | null;
		profileType?: ProfileAttributesProfileType | null;
		uuid?: string | null;
	}
	export interface ProfileAttributesFormProperties {
		createdDate: FormControl<Date | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<BundleIdAttributesPlatform | null | undefined>,
		profileContent: FormControl<string | null | undefined>,
		profileState: FormControl<ProfileAttributesProfileState | null | undefined>,
		profileType: FormControl<ProfileAttributesProfileType | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateProfileAttributesFormGroup() {
		return new FormGroup<ProfileAttributesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<BundleIdAttributesPlatform | null | undefined>(undefined),
			profileContent: new FormControl<string | null | undefined>(undefined),
			profileState: new FormControl<ProfileAttributesProfileState | null | undefined>(undefined),
			profileType: new FormControl<ProfileAttributesProfileType | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProfileAttributesProfileState { ACTIVE = 0, INVALID = 1 }

	export enum ProfileAttributesProfileType { IOS_APP_DEVELOPMENT = 0, IOS_APP_STORE = 1, IOS_APP_ADHOC = 2, IOS_APP_INHOUSE = 3, MAC_APP_DEVELOPMENT = 4, MAC_APP_STORE = 5, MAC_APP_DIRECT = 6, TVOS_APP_DEVELOPMENT = 7, TVOS_APP_STORE = 8, TVOS_APP_ADHOC = 9, TVOS_APP_INHOUSE = 10, MAC_CATALYST_APP_DEVELOPMENT = 11, MAC_CATALYST_APP_STORE = 12, MAC_CATALYST_APP_DIRECT = 13 }

	export interface ProfileRelationships {
		bundleId?: ProfileRelationshipsBundleId;
		certificates?: ProfileRelationshipsCertificates;
		devices?: ProfileRelationshipsDevices;
	}
	export interface ProfileRelationshipsFormProperties {
	}
	export function CreateProfileRelationshipsFormGroup() {
		return new FormGroup<ProfileRelationshipsFormProperties>({
		});

	}

	export interface ProfileRelationshipsBundleId {
		data?: ProfileRelationshipsBundleIdData;
		links?: ProfileRelationshipsBundleIdLinks;
	}
	export interface ProfileRelationshipsBundleIdFormProperties {
	}
	export function CreateProfileRelationshipsBundleIdFormGroup() {
		return new FormGroup<ProfileRelationshipsBundleIdFormProperties>({
		});

	}

	export interface ProfileRelationshipsBundleIdData {

		/** Required */
		id: string;

		/** Required */
		type: BundleIdType;
	}
	export interface ProfileRelationshipsBundleIdDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateProfileRelationshipsBundleIdDataFormGroup() {
		return new FormGroup<ProfileRelationshipsBundleIdDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileRelationshipsBundleIdLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface ProfileRelationshipsBundleIdLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateProfileRelationshipsBundleIdLinksFormGroup() {
		return new FormGroup<ProfileRelationshipsBundleIdLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileRelationshipsCertificates {
		ProfileRelationshipsCertificatesData?: Array<ProfileRelationshipsCertificatesData>;
		links?: ProfileRelationshipsCertificatesLinks;
		meta?: PagingInformation;
	}
	export interface ProfileRelationshipsCertificatesFormProperties {
	}
	export function CreateProfileRelationshipsCertificatesFormGroup() {
		return new FormGroup<ProfileRelationshipsCertificatesFormProperties>({
		});

	}

	export interface ProfileRelationshipsCertificatesData {

		/** Required */
		id: string;

		/** Required */
		type: CertificateType;
	}
	export interface ProfileRelationshipsCertificatesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateProfileRelationshipsCertificatesDataFormGroup() {
		return new FormGroup<ProfileRelationshipsCertificatesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileRelationshipsCertificatesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface ProfileRelationshipsCertificatesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateProfileRelationshipsCertificatesLinksFormGroup() {
		return new FormGroup<ProfileRelationshipsCertificatesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileRelationshipsDevices {
		ProfileRelationshipsDevicesData?: Array<ProfileRelationshipsDevicesData>;
		links?: ProfileRelationshipsDevicesLinks;
		meta?: PagingInformation;
	}
	export interface ProfileRelationshipsDevicesFormProperties {
	}
	export function CreateProfileRelationshipsDevicesFormGroup() {
		return new FormGroup<ProfileRelationshipsDevicesFormProperties>({
		});

	}

	export interface ProfileRelationshipsDevicesData {

		/** Required */
		id: string;

		/** Required */
		type: DeviceType;
	}
	export interface ProfileRelationshipsDevicesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateProfileRelationshipsDevicesDataFormGroup() {
		return new FormGroup<ProfileRelationshipsDevicesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileRelationshipsDevicesLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface ProfileRelationshipsDevicesLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateProfileRelationshipsDevicesLinksFormGroup() {
		return new FormGroup<ProfileRelationshipsDevicesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileCreateRequest {

		/** Required */
		data: ProfileCreateRequestData;
	}
	export interface ProfileCreateRequestFormProperties {
	}
	export function CreateProfileCreateRequestFormGroup() {
		return new FormGroup<ProfileCreateRequestFormProperties>({
		});

	}

	export interface ProfileCreateRequestData {

		/** Required */
		attributes: ProfileCreateRequestDataAttributes;

		/** Required */
		relationships: ProfileCreateRequestDataRelationships;

		/** Required */
		type: BundleIdRelationshipsProfilesDataType;
	}
	export interface ProfileCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>,
	}
	export function CreateProfileCreateRequestDataFormGroup() {
		return new FormGroup<ProfileCreateRequestDataFormProperties>({
			type: new FormControl<BundleIdRelationshipsProfilesDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileCreateRequestDataAttributes {

		/** Required */
		name: string;

		/** Required */
		profileType: ProfileAttributesProfileType;
	}
	export interface ProfileCreateRequestDataAttributesFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		profileType: FormControl<ProfileAttributesProfileType | null | undefined>,
	}
	export function CreateProfileCreateRequestDataAttributesFormGroup() {
		return new FormGroup<ProfileCreateRequestDataAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileType: new FormControl<ProfileAttributesProfileType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileCreateRequestDataRelationships {

		/** Required */
		bundleId: ProfileCreateRequestDataRelationshipsBundleId;

		/** Required */
		certificates: ProfileCreateRequestDataRelationshipsCertificates;
		devices?: ProfileCreateRequestDataRelationshipsDevices;
	}
	export interface ProfileCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateProfileCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface ProfileCreateRequestDataRelationshipsBundleId {

		/** Required */
		data: ProfileCreateRequestDataRelationshipsBundleIdData;
	}
	export interface ProfileCreateRequestDataRelationshipsBundleIdFormProperties {
	}
	export function CreateProfileCreateRequestDataRelationshipsBundleIdFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsBundleIdFormProperties>({
		});

	}

	export interface ProfileCreateRequestDataRelationshipsBundleIdData {

		/** Required */
		id: string;

		/** Required */
		type: BundleIdType;
	}
	export interface ProfileCreateRequestDataRelationshipsBundleIdDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BundleIdType | null | undefined>,
	}
	export function CreateProfileCreateRequestDataRelationshipsBundleIdDataFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsBundleIdDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BundleIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileCreateRequestDataRelationshipsCertificates {

		/** Required */
		ProfileCreateRequestDataRelationshipsCertificatesData: Array<ProfileCreateRequestDataRelationshipsCertificatesData>;
	}
	export interface ProfileCreateRequestDataRelationshipsCertificatesFormProperties {
	}
	export function CreateProfileCreateRequestDataRelationshipsCertificatesFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsCertificatesFormProperties>({
		});

	}

	export interface ProfileCreateRequestDataRelationshipsCertificatesData {

		/** Required */
		id: string;

		/** Required */
		type: CertificateType;
	}
	export interface ProfileCreateRequestDataRelationshipsCertificatesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateProfileCreateRequestDataRelationshipsCertificatesDataFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsCertificatesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileCreateRequestDataRelationshipsDevices {
		ProfileCreateRequestDataRelationshipsDevicesData?: Array<ProfileCreateRequestDataRelationshipsDevicesData>;
	}
	export interface ProfileCreateRequestDataRelationshipsDevicesFormProperties {
	}
	export function CreateProfileCreateRequestDataRelationshipsDevicesFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsDevicesFormProperties>({
		});

	}

	export interface ProfileCreateRequestDataRelationshipsDevicesData {

		/** Required */
		id: string;

		/** Required */
		type: DeviceType;
	}
	export interface ProfileCreateRequestDataRelationshipsDevicesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateProfileCreateRequestDataRelationshipsDevicesDataFormGroup() {
		return new FormGroup<ProfileCreateRequestDataRelationshipsDevicesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileResponse {

		/** Required */
		data: Profile;
		included?: Array<string>;

		/** Required */
		links: DocumentLinks;
	}
	export interface ProfileResponseFormProperties {
	}
	export function CreateProfileResponseFormGroup() {
		return new FormGroup<ProfileResponseFormProperties>({
		});

	}

	export interface ProfilesResponse {

		/** Required */
		data: Array<Profile>;
		included?: Array<string>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface ProfilesResponseFormProperties {
	}
	export function CreateProfilesResponseFormGroup() {
		return new FormGroup<ProfilesResponseFormProperties>({
		});

	}

	export interface RoutingAppCoverage {
		attributes?: RoutingAppCoverageAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: RoutingAppCoverageRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsRoutingAppCoverageDataType;
	}
	export interface RoutingAppCoverageFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>,
	}
	export function CreateRoutingAppCoverageFormGroup() {
		return new FormGroup<RoutingAppCoverageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageAttributes {
		assetDeliveryState?: AppMediaAssetState;
		fileName?: string | null;
		fileSize?: number | null;
		sourceFileChecksum?: string | null;
		uploadOperations?: Array<UploadOperation>;
	}
	export interface RoutingAppCoverageAttributesFormProperties {
		fileName: FormControl<string | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
		sourceFileChecksum: FormControl<string | null | undefined>,
	}
	export function CreateRoutingAppCoverageAttributesFormGroup() {
		return new FormGroup<RoutingAppCoverageAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutingAppCoverageRelationships {
		appStoreVersion?: RoutingAppCoverageRelationshipsAppStoreVersion;
	}
	export interface RoutingAppCoverageRelationshipsFormProperties {
	}
	export function CreateRoutingAppCoverageRelationshipsFormGroup() {
		return new FormGroup<RoutingAppCoverageRelationshipsFormProperties>({
		});

	}

	export interface RoutingAppCoverageRelationshipsAppStoreVersion {
		data?: RoutingAppCoverageRelationshipsAppStoreVersionData;
		links?: RoutingAppCoverageRelationshipsAppStoreVersionLinks;
	}
	export interface RoutingAppCoverageRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateRoutingAppCoverageRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<RoutingAppCoverageRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface RoutingAppCoverageRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface RoutingAppCoverageRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateRoutingAppCoverageRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<RoutingAppCoverageRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageRelationshipsAppStoreVersionLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface RoutingAppCoverageRelationshipsAppStoreVersionLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateRoutingAppCoverageRelationshipsAppStoreVersionLinksFormGroup() {
		return new FormGroup<RoutingAppCoverageRelationshipsAppStoreVersionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutingAppCoverageCreateRequest {

		/** Required */
		data: RoutingAppCoverageCreateRequestData;
	}
	export interface RoutingAppCoverageCreateRequestFormProperties {
	}
	export function CreateRoutingAppCoverageCreateRequestFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestFormProperties>({
		});

	}

	export interface RoutingAppCoverageCreateRequestData {

		/** Required */
		attributes: RoutingAppCoverageCreateRequestDataAttributes;

		/** Required */
		relationships: RoutingAppCoverageCreateRequestDataRelationships;

		/** Required */
		type: AppStoreVersionRelationshipsRoutingAppCoverageDataType;
	}
	export interface RoutingAppCoverageCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>,
	}
	export function CreateRoutingAppCoverageCreateRequestDataFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestDataFormProperties>({
			type: new FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageCreateRequestDataAttributes {

		/** Required */
		fileName: string;

		/** Required */
		fileSize: number;
	}
	export interface RoutingAppCoverageCreateRequestDataAttributesFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,

		/** Required */
		fileSize: FormControl<number | null | undefined>,
	}
	export function CreateRoutingAppCoverageCreateRequestDataAttributesFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestDataAttributesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageCreateRequestDataRelationships {

		/** Required */
		appStoreVersion: RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersion;
	}
	export interface RoutingAppCoverageCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateRoutingAppCoverageCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersion {

		/** Required */
		data: RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionData;
	}
	export interface RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionFormProperties {
	}
	export function CreateRoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionFormProperties>({
		});

	}

	export interface RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionData {

		/** Required */
		id: string;

		/** Required */
		type: AppRelationshipsAppStoreVersionsDataType;
	}
	export interface RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>,
	}
	export function CreateRoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionDataFormGroup() {
		return new FormGroup<RoutingAppCoverageCreateRequestDataRelationshipsAppStoreVersionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppRelationshipsAppStoreVersionsDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageResponse {

		/** Required */
		data: RoutingAppCoverage;

		/** Required */
		links: DocumentLinks;
	}
	export interface RoutingAppCoverageResponseFormProperties {
	}
	export function CreateRoutingAppCoverageResponseFormGroup() {
		return new FormGroup<RoutingAppCoverageResponseFormProperties>({
		});

	}

	export interface RoutingAppCoverageUpdateRequest {

		/** Required */
		data: RoutingAppCoverageUpdateRequestData;
	}
	export interface RoutingAppCoverageUpdateRequestFormProperties {
	}
	export function CreateRoutingAppCoverageUpdateRequestFormGroup() {
		return new FormGroup<RoutingAppCoverageUpdateRequestFormProperties>({
		});

	}

	export interface RoutingAppCoverageUpdateRequestData {
		attributes?: RoutingAppCoverageUpdateRequestDataAttributes;

		/** Required */
		id: string;

		/** Required */
		type: AppStoreVersionRelationshipsRoutingAppCoverageDataType;
	}
	export interface RoutingAppCoverageUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>,
	}
	export function CreateRoutingAppCoverageUpdateRequestDataFormGroup() {
		return new FormGroup<RoutingAppCoverageUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppStoreVersionRelationshipsRoutingAppCoverageDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoutingAppCoverageUpdateRequestDataAttributes {
		sourceFileChecksum?: string | null;
		uploaded?: boolean | null;
	}
	export interface RoutingAppCoverageUpdateRequestDataAttributesFormProperties {
		sourceFileChecksum: FormControl<string | null | undefined>,
		uploaded: FormControl<boolean | null | undefined>,
	}
	export function CreateRoutingAppCoverageUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<RoutingAppCoverageUpdateRequestDataAttributesFormProperties>({
			sourceFileChecksum: new FormControl<string | null | undefined>(undefined),
			uploaded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ScreenshotDisplayType { APP_IPHONE_65 = 0, APP_IPHONE_58 = 1, APP_IPHONE_55 = 2, APP_IPHONE_47 = 3, APP_IPHONE_40 = 4, APP_IPHONE_35 = 5, APP_IPAD_PRO_3GEN_129 = 6, APP_IPAD_PRO_3GEN_11 = 7, APP_IPAD_PRO_129 = 8, APP_IPAD_105 = 9, APP_IPAD_97 = 10, APP_DESKTOP = 11, APP_WATCH_SERIES_4 = 12, APP_WATCH_SERIES_3 = 13, APP_APPLE_TV = 14, IMESSAGE_APP_IPHONE_65 = 15, IMESSAGE_APP_IPHONE_58 = 16, IMESSAGE_APP_IPHONE_55 = 17, IMESSAGE_APP_IPHONE_47 = 18, IMESSAGE_APP_IPHONE_40 = 19, IMESSAGE_APP_IPAD_PRO_3GEN_129 = 20, IMESSAGE_APP_IPAD_PRO_3GEN_11 = 21, IMESSAGE_APP_IPAD_PRO_129 = 22, IMESSAGE_APP_IPAD_105 = 23, IMESSAGE_APP_IPAD_97 = 24 }

	export interface TerritoriesResponse {

		/** Required */
		data: Array<Territory>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface TerritoriesResponseFormProperties {
	}
	export function CreateTerritoriesResponseFormGroup() {
		return new FormGroup<TerritoriesResponseFormProperties>({
		});

	}

	export interface TerritoryResponse {

		/** Required */
		data: Territory;

		/** Required */
		links: DocumentLinks;
	}
	export interface TerritoryResponseFormProperties {
	}
	export function CreateTerritoryResponseFormGroup() {
		return new FormGroup<TerritoryResponseFormProperties>({
		});

	}

	export interface User {
		attributes?: UserAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: UserRelationships;

		/** Required */
		type: UserType;
	}
	export interface UserFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserAttributes {
		allAppsVisible?: boolean | null;
		firstName?: string | null;
		lastName?: string | null;
		provisioningAllowed?: boolean | null;
		roles?: Array<UserRole>;
		username?: string | null;
	}
	export interface UserAttributesFormProperties {
		allAppsVisible: FormControl<boolean | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		provisioningAllowed: FormControl<boolean | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserAttributesFormGroup() {
		return new FormGroup<UserAttributesFormProperties>({
			allAppsVisible: new FormControl<boolean | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			provisioningAllowed: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserRole { ADMIN = 0, FINANCE = 1, TECHNICAL = 2, ACCOUNT_HOLDER = 3, READ_ONLY = 4, SALES = 5, MARKETING = 6, APP_MANAGER = 7, DEVELOPER = 8, ACCESS_TO_REPORTS = 9, CUSTOMER_SUPPORT = 10, CREATE_APPS = 11, CLOUD_MANAGED_DEVELOPER_ID = 12, CLOUD_MANAGED_APP_DISTRIBUTION = 13 }

	export interface UserRelationships {
		visibleApps?: UserRelationshipsVisibleApps;
	}
	export interface UserRelationshipsFormProperties {
	}
	export function CreateUserRelationshipsFormGroup() {
		return new FormGroup<UserRelationshipsFormProperties>({
		});

	}

	export interface UserRelationshipsVisibleApps {
		UserRelationshipsVisibleAppsData?: Array<UserRelationshipsVisibleAppsData>;
		links?: UserRelationshipsVisibleAppsLinks;
		meta?: PagingInformation;
	}
	export interface UserRelationshipsVisibleAppsFormProperties {
	}
	export function CreateUserRelationshipsVisibleAppsFormGroup() {
		return new FormGroup<UserRelationshipsVisibleAppsFormProperties>({
		});

	}

	export interface UserRelationshipsVisibleAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserRelationshipsVisibleAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserRelationshipsVisibleAppsDataFormGroup() {
		return new FormGroup<UserRelationshipsVisibleAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserRelationshipsVisibleAppsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface UserRelationshipsVisibleAppsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateUserRelationshipsVisibleAppsLinksFormGroup() {
		return new FormGroup<UserRelationshipsVisibleAppsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserType { users = 0 }

	export interface UserInvitation {
		attributes?: UserInvitationAttributes;

		/** Required */
		id: string;

		/** Required */
		links: ResourceLinks;
		relationships?: UserInvitationRelationships;

		/** Required */
		type: UserInvitationType;
	}
	export interface UserInvitationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UserInvitationType | null | undefined>,
	}
	export function CreateUserInvitationFormGroup() {
		return new FormGroup<UserInvitationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UserInvitationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserInvitationAttributes {
		allAppsVisible?: boolean | null;
		email?: string | null;
		expirationDate?: Date | null;
		firstName?: string | null;
		lastName?: string | null;
		provisioningAllowed?: boolean | null;
		roles?: Array<UserRole>;
	}
	export interface UserInvitationAttributesFormProperties {
		allAppsVisible: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		provisioningAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUserInvitationAttributesFormGroup() {
		return new FormGroup<UserInvitationAttributesFormProperties>({
			allAppsVisible: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			provisioningAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserInvitationRelationships {
		visibleApps?: UserInvitationRelationshipsVisibleApps;
	}
	export interface UserInvitationRelationshipsFormProperties {
	}
	export function CreateUserInvitationRelationshipsFormGroup() {
		return new FormGroup<UserInvitationRelationshipsFormProperties>({
		});

	}

	export interface UserInvitationRelationshipsVisibleApps {
		UserInvitationRelationshipsVisibleAppsData?: Array<UserInvitationRelationshipsVisibleAppsData>;
		links?: UserInvitationRelationshipsVisibleAppsLinks;
		meta?: PagingInformation;
	}
	export interface UserInvitationRelationshipsVisibleAppsFormProperties {
	}
	export function CreateUserInvitationRelationshipsVisibleAppsFormGroup() {
		return new FormGroup<UserInvitationRelationshipsVisibleAppsFormProperties>({
		});

	}

	export interface UserInvitationRelationshipsVisibleAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserInvitationRelationshipsVisibleAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserInvitationRelationshipsVisibleAppsDataFormGroup() {
		return new FormGroup<UserInvitationRelationshipsVisibleAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserInvitationRelationshipsVisibleAppsLinks {
		related?: string | null;
		self?: string | null;
	}
	export interface UserInvitationRelationshipsVisibleAppsLinksFormProperties {
		related: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateUserInvitationRelationshipsVisibleAppsLinksFormGroup() {
		return new FormGroup<UserInvitationRelationshipsVisibleAppsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserInvitationType { userInvitations = 0 }

	export interface UserInvitationCreateRequest {

		/** Required */
		data: UserInvitationCreateRequestData;
	}
	export interface UserInvitationCreateRequestFormProperties {
	}
	export function CreateUserInvitationCreateRequestFormGroup() {
		return new FormGroup<UserInvitationCreateRequestFormProperties>({
		});

	}

	export interface UserInvitationCreateRequestData {

		/** Required */
		attributes: UserInvitationCreateRequestDataAttributes;
		relationships?: UserInvitationCreateRequestDataRelationships;

		/** Required */
		type: UserInvitationType;
	}
	export interface UserInvitationCreateRequestDataFormProperties {

		/** Required */
		type: FormControl<UserInvitationType | null | undefined>,
	}
	export function CreateUserInvitationCreateRequestDataFormGroup() {
		return new FormGroup<UserInvitationCreateRequestDataFormProperties>({
			type: new FormControl<UserInvitationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserInvitationCreateRequestDataAttributes {
		allAppsVisible?: boolean | null;

		/** Required */
		email: string;

		/** Required */
		firstName: string;

		/** Required */
		lastName: string;
		provisioningAllowed?: boolean | null;

		/** Required */
		roles: Array<UserRole>;
	}
	export interface UserInvitationCreateRequestDataAttributesFormProperties {
		allAppsVisible: FormControl<boolean | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,
		provisioningAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUserInvitationCreateRequestDataAttributesFormGroup() {
		return new FormGroup<UserInvitationCreateRequestDataAttributesFormProperties>({
			allAppsVisible: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserInvitationCreateRequestDataRelationships {
		visibleApps?: UserInvitationCreateRequestDataRelationshipsVisibleApps;
	}
	export interface UserInvitationCreateRequestDataRelationshipsFormProperties {
	}
	export function CreateUserInvitationCreateRequestDataRelationshipsFormGroup() {
		return new FormGroup<UserInvitationCreateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface UserInvitationCreateRequestDataRelationshipsVisibleApps {
		UserInvitationCreateRequestDataRelationshipsVisibleAppsData?: Array<UserInvitationCreateRequestDataRelationshipsVisibleAppsData>;
	}
	export interface UserInvitationCreateRequestDataRelationshipsVisibleAppsFormProperties {
	}
	export function CreateUserInvitationCreateRequestDataRelationshipsVisibleAppsFormGroup() {
		return new FormGroup<UserInvitationCreateRequestDataRelationshipsVisibleAppsFormProperties>({
		});

	}

	export interface UserInvitationCreateRequestDataRelationshipsVisibleAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserInvitationCreateRequestDataRelationshipsVisibleAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserInvitationCreateRequestDataRelationshipsVisibleAppsDataFormGroup() {
		return new FormGroup<UserInvitationCreateRequestDataRelationshipsVisibleAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserInvitationResponse {

		/** Required */
		data: UserInvitation;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface UserInvitationResponseFormProperties {
	}
	export function CreateUserInvitationResponseFormGroup() {
		return new FormGroup<UserInvitationResponseFormProperties>({
		});

	}

	export interface UserInvitationsResponse {

		/** Required */
		data: Array<UserInvitation>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface UserInvitationsResponseFormProperties {
	}
	export function CreateUserInvitationsResponseFormGroup() {
		return new FormGroup<UserInvitationsResponseFormProperties>({
		});

	}

	export interface UserResponse {

		/** Required */
		data: User;
		included?: Array<App>;

		/** Required */
		links: DocumentLinks;
	}
	export interface UserResponseFormProperties {
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
		});

	}

	export interface UserUpdateRequest {

		/** Required */
		data: UserUpdateRequestData;
	}
	export interface UserUpdateRequestFormProperties {
	}
	export function CreateUserUpdateRequestFormGroup() {
		return new FormGroup<UserUpdateRequestFormProperties>({
		});

	}

	export interface UserUpdateRequestData {
		attributes?: UserUpdateRequestDataAttributes;

		/** Required */
		id: string;
		relationships?: UserUpdateRequestDataRelationships;

		/** Required */
		type: UserType;
	}
	export interface UserUpdateRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserUpdateRequestDataFormGroup() {
		return new FormGroup<UserUpdateRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserUpdateRequestDataAttributes {
		allAppsVisible?: boolean | null;
		provisioningAllowed?: boolean | null;
		roles?: Array<UserRole>;
	}
	export interface UserUpdateRequestDataAttributesFormProperties {
		allAppsVisible: FormControl<boolean | null | undefined>,
		provisioningAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUserUpdateRequestDataAttributesFormGroup() {
		return new FormGroup<UserUpdateRequestDataAttributesFormProperties>({
			allAppsVisible: new FormControl<boolean | null | undefined>(undefined),
			provisioningAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserUpdateRequestDataRelationships {
		visibleApps?: UserUpdateRequestDataRelationshipsVisibleApps;
	}
	export interface UserUpdateRequestDataRelationshipsFormProperties {
	}
	export function CreateUserUpdateRequestDataRelationshipsFormGroup() {
		return new FormGroup<UserUpdateRequestDataRelationshipsFormProperties>({
		});

	}

	export interface UserUpdateRequestDataRelationshipsVisibleApps {
		UserUpdateRequestDataRelationshipsVisibleAppsData?: Array<UserUpdateRequestDataRelationshipsVisibleAppsData>;
	}
	export interface UserUpdateRequestDataRelationshipsVisibleAppsFormProperties {
	}
	export function CreateUserUpdateRequestDataRelationshipsVisibleAppsFormGroup() {
		return new FormGroup<UserUpdateRequestDataRelationshipsVisibleAppsFormProperties>({
		});

	}

	export interface UserUpdateRequestDataRelationshipsVisibleAppsData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserUpdateRequestDataRelationshipsVisibleAppsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserUpdateRequestDataRelationshipsVisibleAppsDataFormGroup() {
		return new FormGroup<UserUpdateRequestDataRelationshipsVisibleAppsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserVisibleAppsLinkagesRequest {

		/** Required */
		UserVisibleAppsLinkagesRequestData: Array<UserVisibleAppsLinkagesRequestData>;
	}
	export interface UserVisibleAppsLinkagesRequestFormProperties {
	}
	export function CreateUserVisibleAppsLinkagesRequestFormGroup() {
		return new FormGroup<UserVisibleAppsLinkagesRequestFormProperties>({
		});

	}

	export interface UserVisibleAppsLinkagesRequestData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserVisibleAppsLinkagesRequestDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserVisibleAppsLinkagesRequestDataFormGroup() {
		return new FormGroup<UserVisibleAppsLinkagesRequestDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserVisibleAppsLinkagesResponse {

		/** Required */
		UserVisibleAppsLinkagesResponseData: Array<UserVisibleAppsLinkagesResponseData>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface UserVisibleAppsLinkagesResponseFormProperties {
	}
	export function CreateUserVisibleAppsLinkagesResponseFormGroup() {
		return new FormGroup<UserVisibleAppsLinkagesResponseFormProperties>({
		});

	}

	export interface UserVisibleAppsLinkagesResponseData {

		/** Required */
		id: string;

		/** Required */
		type: AppType;
	}
	export interface UserVisibleAppsLinkagesResponseDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AppType | null | undefined>,
	}
	export function CreateUserVisibleAppsLinkagesResponseDataFormGroup() {
		return new FormGroup<UserVisibleAppsLinkagesResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsersResponse {

		/** Required */
		data: Array<User>;
		included?: Array<App>;

		/** Required */
		links: PagedDocumentLinks;
		meta?: PagingInformation;
	}
	export interface UsersResponseFormProperties {
	}
	export function CreateUsersResponseFormGroup() {
		return new FormGroup<UsersResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Patch v1/ageRatingDeclarations/{id}
		 * @param {AgeRatingDeclarationUpdateRequest} requestBody AgeRatingDeclaration representation
		 * @return {AgeRatingDeclarationResponse} Single AgeRatingDeclaration
		 */
		AgeRatingDeclarations_update_instance(requestBody: AgeRatingDeclarationUpdateRequest): Observable<AgeRatingDeclarationResponse> {
			return this.http.patch<AgeRatingDeclarationResponse>(this.baseUri + 'v1/ageRatingDeclarations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appCategories
		 * @param {Array<Platform>} filter_platforms filter by attribute 'platforms'
		 * @param {Array<string>} exists_parent filter by existence or non-existence of related 'parent'
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {number} limit_subcategories maximum number of related subcategories returned (when they are included)
		 * @return {AppCategoriesResponse} List of AppCategories
		 */
		AppCategories_get_collection(filter_platforms: Array<Platform> | null | undefined, exists_parent: Array<string> | null | undefined, fields_appCategories: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, limit_subcategories: number | null | undefined): Observable<AppCategoriesResponse> {
			return this.http.get<AppCategoriesResponse>(this.baseUri + 'v1/appCategories?' + filter_platforms?.map(z => `filter[platforms]=${z}`).join('&') + '&' + exists_parent?.map(z => `exists[parent]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&limit_subcategories=' + limit_subcategories, {});
		}

		/**
		 * Get v1/appCategories/{id}
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {number} limit_subcategories maximum number of related subcategories returned (when they are included)
		 * @return {AppCategoryResponse} Single AppCategory
		 */
		AppCategories_get_instance(fields_appCategories: Array<string> | null | undefined, include: Array<string> | null | undefined, limit_subcategories: number | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appCategories/{id}?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&limit_subcategories=' + limit_subcategories, {});
		}

		/**
		 * Get v1/appCategories/{id}/parent
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppCategories_parent_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appCategories/{id}/parent?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appCategories/{id}/subcategories
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @param {number} limit maximum resources per page
		 * @return {AppCategoriesResponse} List of related resources
		 */
		AppCategories_subcategories_get_to_many_related(fields_appCategories: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppCategoriesResponse> {
			return this.http.get<AppCategoriesResponse>(this.baseUri + 'v1/appCategories/{id}/subcategories?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/appEncryptionDeclarations
		 * @param {Array<Platform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} filter_builds filter by id(s) of related 'builds'
		 * @param {Array<string>} fields_appEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppEncryptionDeclarationsResponse} List of AppEncryptionDeclarations
		 */
		AppEncryptionDeclarations_get_collection(filter_platform: Array<Platform> | null | undefined, filter_app: Array<string> | null | undefined, filter_builds: Array<string> | null | undefined, fields_appEncryptionDeclarations: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<AppEncryptionDeclarationsResponse> {
			return this.http.get<AppEncryptionDeclarationsResponse>(this.baseUri + 'v1/appEncryptionDeclarations?' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + filter_builds?.map(z => `filter[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appEncryptionDeclarations?.map(z => `fields[appEncryptionDeclarations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appEncryptionDeclarations/{id}
		 * @param {Array<string>} fields_appEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppEncryptionDeclarationResponse} Single AppEncryptionDeclaration
		 */
		AppEncryptionDeclarations_get_instance(fields_appEncryptionDeclarations: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<AppEncryptionDeclarationResponse> {
			return this.http.get<AppEncryptionDeclarationResponse>(this.baseUri + 'v1/appEncryptionDeclarations/{id}?' + fields_appEncryptionDeclarations?.map(z => `fields[appEncryptionDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appEncryptionDeclarations/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		AppEncryptionDeclarations_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/appEncryptionDeclarations/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/appEncryptionDeclarations/{id}/relationships/builds
		 * @param {AppEncryptionDeclarationBuildsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		AppEncryptionDeclarations_builds_create_to_many_relationship(requestBody: AppEncryptionDeclarationBuildsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appEncryptionDeclarations/{id}/relationships/builds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/appInfoLocalizations
		 * @param {AppInfoLocalizationCreateRequest} requestBody AppInfoLocalization representation
		 * @return {void} 
		 */
		AppInfoLocalizations_create_instance(requestBody: AppInfoLocalizationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appInfoLocalizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appInfoLocalizations/{id}
		 * @return {void} 
		 */
		AppInfoLocalizations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appInfoLocalizations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appInfoLocalizations/{id}
		 * @param {Array<string>} fields_appInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppInfoLocalizationResponse} Single AppInfoLocalization
		 */
		AppInfoLocalizations_get_instance(fields_appInfoLocalizations: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppInfoLocalizationResponse> {
			return this.http.get<AppInfoLocalizationResponse>(this.baseUri + 'v1/appInfoLocalizations/{id}?' + fields_appInfoLocalizations?.map(z => `fields[appInfoLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/appInfoLocalizations/{id}
		 * @param {AppInfoLocalizationUpdateRequest} requestBody AppInfoLocalization representation
		 * @return {AppInfoLocalizationResponse} Single AppInfoLocalization
		 */
		AppInfoLocalizations_update_instance(requestBody: AppInfoLocalizationUpdateRequest): Observable<AppInfoLocalizationResponse> {
			return this.http.patch<AppInfoLocalizationResponse>(this.baseUri + 'v1/appInfoLocalizations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appInfos/{id}
		 * @param {Array<string>} fields_appInfos the fields to include for returned resources of type appInfos
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @param {Array<string>} fields_appInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
		 * @param {number} limit_appInfoLocalizations maximum number of related appInfoLocalizations returned (when they are included)
		 * @return {AppInfoResponse} Single AppInfo
		 */
		AppInfos_get_instance(fields_appInfos: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_ageRatingDeclarations: Array<string> | null | undefined, fields_appCategories: Array<string> | null | undefined, fields_appInfoLocalizations: Array<string> | null | undefined, limit_appInfoLocalizations: number | null | undefined): Observable<AppInfoResponse> {
			return this.http.get<AppInfoResponse>(this.baseUri + 'v1/appInfos/{id}?' + fields_appInfos?.map(z => `fields[appInfos]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfoLocalizations?.map(z => `fields[appInfoLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit_appInfoLocalizations=' + limit_appInfoLocalizations, {});
		}

		/**
		 * Patch v1/appInfos/{id}
		 * @param {AppInfoUpdateRequest} requestBody AppInfo representation
		 * @return {AppInfoResponse} Single AppInfo
		 */
		AppInfos_update_instance(requestBody: AppInfoUpdateRequest): Observable<AppInfoResponse> {
			return this.http.patch<AppInfoResponse>(this.baseUri + 'v1/appInfos/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appInfos/{id}/ageRatingDeclaration
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @return {AgeRatingDeclarationResponse} Related resource
		 */
		AppInfos_ageRatingDeclaration_get_to_one_related(fields_ageRatingDeclarations: Array<string> | null | undefined): Observable<AgeRatingDeclarationResponse> {
			return this.http.get<AgeRatingDeclarationResponse>(this.baseUri + 'v1/appInfos/{id}/ageRatingDeclaration?' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/appInfoLocalizations
		 * @param {Array<string>} filter_locale filter by attribute 'locale'
		 * @param {Array<string>} fields_appInfos the fields to include for returned resources of type appInfos
		 * @param {Array<string>} fields_appInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppInfoLocalizationsResponse} List of related resources
		 */
		AppInfos_appInfoLocalizations_get_to_many_related(filter_locale: Array<string> | null | undefined, fields_appInfos: Array<string> | null | undefined, fields_appInfoLocalizations: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppInfoLocalizationsResponse> {
			return this.http.get<AppInfoLocalizationsResponse>(this.baseUri + 'v1/appInfos/{id}/appInfoLocalizations?' + filter_locale?.map(z => `filter[locale]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfos?.map(z => `fields[appInfos]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfoLocalizations?.map(z => `fields[appInfoLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/primaryCategory
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_primaryCategory_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/primaryCategory?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/primarySubcategoryOne
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_primarySubcategoryOne_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/primarySubcategoryOne?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/primarySubcategoryTwo
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_primarySubcategoryTwo_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/primarySubcategoryTwo?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/secondaryCategory
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_secondaryCategory_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/secondaryCategory?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/secondarySubcategoryOne
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_secondarySubcategoryOne_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/secondarySubcategoryOne?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appInfos/{id}/secondarySubcategoryTwo
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @return {AppCategoryResponse} Related resource
		 */
		AppInfos_secondarySubcategoryTwo_get_to_one_related(fields_appCategories: Array<string> | null | undefined): Observable<AppCategoryResponse> {
			return this.http.get<AppCategoryResponse>(this.baseUri + 'v1/appInfos/{id}/secondarySubcategoryTwo?' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/appPreOrders
		 * @param {AppPreOrderCreateRequest} requestBody AppPreOrder representation
		 * @return {void} 
		 */
		AppPreOrders_create_instance(requestBody: AppPreOrderCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appPreOrders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appPreOrders/{id}
		 * @return {void} 
		 */
		AppPreOrders_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appPreOrders/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appPreOrders/{id}
		 * @param {Array<string>} fields_appPreOrders the fields to include for returned resources of type appPreOrders
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPreOrderResponse} Single AppPreOrder
		 */
		AppPreOrders_get_instance(fields_appPreOrders: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppPreOrderResponse> {
			return this.http.get<AppPreOrderResponse>(this.baseUri + 'v1/appPreOrders/{id}?' + fields_appPreOrders?.map(z => `fields[appPreOrders]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/appPreOrders/{id}
		 * @param {AppPreOrderUpdateRequest} requestBody AppPreOrder representation
		 * @return {AppPreOrderResponse} Single AppPreOrder
		 */
		AppPreOrders_update_instance(requestBody: AppPreOrderUpdateRequest): Observable<AppPreOrderResponse> {
			return this.http.patch<AppPreOrderResponse>(this.baseUri + 'v1/appPreOrders/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/appPreviewSets
		 * @param {AppPreviewSetCreateRequest} requestBody AppPreviewSet representation
		 * @return {void} 
		 */
		AppPreviewSets_create_instance(requestBody: AppPreviewSetCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appPreviewSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appPreviewSets/{id}
		 * @return {void} 
		 */
		AppPreviewSets_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appPreviewSets/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appPreviewSets/{id}
		 * @param {Array<string>} fields_appPreviewSets the fields to include for returned resources of type appPreviewSets
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appPreviews the fields to include for returned resources of type appPreviews
		 * @param {number} limit_appPreviews maximum number of related appPreviews returned (when they are included)
		 * @return {AppPreviewSetResponse} Single AppPreviewSet
		 */
		AppPreviewSets_get_instance(fields_appPreviewSets: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appPreviews: Array<string> | null | undefined, limit_appPreviews: number | null | undefined): Observable<AppPreviewSetResponse> {
			return this.http.get<AppPreviewSetResponse>(this.baseUri + 'v1/appPreviewSets/{id}?' + fields_appPreviewSets?.map(z => `fields[appPreviewSets]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreviews?.map(z => `fields[appPreviews]=${encodeURIComponent(z)}`).join('&') + '&limit_appPreviews=' + limit_appPreviews, {});
		}

		/**
		 * Get v1/appPreviewSets/{id}/appPreviews
		 * @param {Array<string>} fields_appPreviews the fields to include for returned resources of type appPreviews
		 * @param {Array<string>} fields_appPreviewSets the fields to include for returned resources of type appPreviewSets
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPreviewsResponse} List of related resources
		 */
		AppPreviewSets_appPreviews_get_to_many_related(fields_appPreviews: Array<string> | null | undefined, fields_appPreviewSets: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppPreviewsResponse> {
			return this.http.get<AppPreviewsResponse>(this.baseUri + 'v1/appPreviewSets/{id}/appPreviews?' + fields_appPreviews?.map(z => `fields[appPreviews]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreviewSets?.map(z => `fields[appPreviewSets]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appPreviewSets/{id}/relationships/appPreviews
		 * @param {number} limit maximum resources per page
		 * @return {AppPreviewSetAppPreviewsLinkagesResponse} List of related linkages
		 */
		AppPreviewSets_appPreviews_get_to_many_relationship(limit: number | null | undefined): Observable<AppPreviewSetAppPreviewsLinkagesResponse> {
			return this.http.get<AppPreviewSetAppPreviewsLinkagesResponse>(this.baseUri + 'v1/appPreviewSets/{id}/relationships/appPreviews?limit=' + limit, {});
		}

		/**
		 * Patch v1/appPreviewSets/{id}/relationships/appPreviews
		 * @param {AppPreviewSetAppPreviewsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		AppPreviewSets_appPreviews_replace_to_many_relationship(requestBody: AppPreviewSetAppPreviewsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/appPreviewSets/{id}/relationships/appPreviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/appPreviews
		 * @param {AppPreviewCreateRequest} requestBody AppPreview representation
		 * @return {void} 
		 */
		AppPreviews_create_instance(requestBody: AppPreviewCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appPreviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appPreviews/{id}
		 * @return {void} 
		 */
		AppPreviews_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appPreviews/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appPreviews/{id}
		 * @param {Array<string>} fields_appPreviews the fields to include for returned resources of type appPreviews
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPreviewResponse} Single AppPreview
		 */
		AppPreviews_get_instance(fields_appPreviews: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppPreviewResponse> {
			return this.http.get<AppPreviewResponse>(this.baseUri + 'v1/appPreviews/{id}?' + fields_appPreviews?.map(z => `fields[appPreviews]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/appPreviews/{id}
		 * @param {AppPreviewUpdateRequest} requestBody AppPreview representation
		 * @return {AppPreviewResponse} Single AppPreview
		 */
		AppPreviews_update_instance(requestBody: AppPreviewUpdateRequest): Observable<AppPreviewResponse> {
			return this.http.patch<AppPreviewResponse>(this.baseUri + 'v1/appPreviews/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appPricePoints
		 * @param {Array<string>} filter_priceTier filter by id(s) of related 'priceTier'
		 * @param {Array<string>} filter_territory filter by id(s) of related 'territory'
		 * @param {Array<string>} fields_appPricePoints the fields to include for returned resources of type appPricePoints
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @return {AppPricePointsResponse} List of AppPricePoints
		 */
		AppPricePoints_get_collection(filter_priceTier: Array<string> | null | undefined, filter_territory: Array<string> | null | undefined, fields_appPricePoints: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_territories: Array<string> | null | undefined): Observable<AppPricePointsResponse> {
			return this.http.get<AppPricePointsResponse>(this.baseUri + 'v1/appPricePoints?' + filter_priceTier?.map(z => `filter[priceTier]=${encodeURIComponent(z)}`).join('&') + '&' + filter_territory?.map(z => `filter[territory]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPricePoints?.map(z => `fields[appPricePoints]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appPricePoints/{id}
		 * @param {Array<string>} fields_appPricePoints the fields to include for returned resources of type appPricePoints
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @return {AppPricePointResponse} Single AppPricePoint
		 */
		AppPricePoints_get_instance(fields_appPricePoints: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_territories: Array<string> | null | undefined): Observable<AppPricePointResponse> {
			return this.http.get<AppPricePointResponse>(this.baseUri + 'v1/appPricePoints/{id}?' + fields_appPricePoints?.map(z => `fields[appPricePoints]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appPricePoints/{id}/territory
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @return {TerritoryResponse} Related resource
		 */
		AppPricePoints_territory_get_to_one_related(fields_territories: Array<string> | null | undefined): Observable<TerritoryResponse> {
			return this.http.get<TerritoryResponse>(this.baseUri + 'v1/appPricePoints/{id}/territory?' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appPriceTiers
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} fields_appPriceTiers the fields to include for returned resources of type appPriceTiers
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appPricePoints the fields to include for returned resources of type appPricePoints
		 * @param {number} limit_pricePoints maximum number of related pricePoints returned (when they are included)
		 * @return {AppPriceTiersResponse} List of AppPriceTiers
		 */
		AppPriceTiers_get_collection(filter_id: Array<string> | null | undefined, fields_appPriceTiers: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_appPricePoints: Array<string> | null | undefined, limit_pricePoints: number | null | undefined): Observable<AppPriceTiersResponse> {
			return this.http.get<AppPriceTiersResponse>(this.baseUri + 'v1/appPriceTiers?' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPriceTiers?.map(z => `fields[appPriceTiers]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPricePoints?.map(z => `fields[appPricePoints]=${encodeURIComponent(z)}`).join('&') + '&limit_pricePoints=' + limit_pricePoints, {});
		}

		/**
		 * Get v1/appPriceTiers/{id}
		 * @param {Array<string>} fields_appPriceTiers the fields to include for returned resources of type appPriceTiers
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appPricePoints the fields to include for returned resources of type appPricePoints
		 * @param {number} limit_pricePoints maximum number of related pricePoints returned (when they are included)
		 * @return {AppPriceTierResponse} Single AppPriceTier
		 */
		AppPriceTiers_get_instance(fields_appPriceTiers: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appPricePoints: Array<string> | null | undefined, limit_pricePoints: number | null | undefined): Observable<AppPriceTierResponse> {
			return this.http.get<AppPriceTierResponse>(this.baseUri + 'v1/appPriceTiers/{id}?' + fields_appPriceTiers?.map(z => `fields[appPriceTiers]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPricePoints?.map(z => `fields[appPricePoints]=${encodeURIComponent(z)}`).join('&') + '&limit_pricePoints=' + limit_pricePoints, {});
		}

		/**
		 * Get v1/appPriceTiers/{id}/pricePoints
		 * @param {Array<string>} fields_appPricePoints the fields to include for returned resources of type appPricePoints
		 * @param {number} limit maximum resources per page
		 * @return {AppPricePointsResponse} List of related resources
		 */
		AppPriceTiers_pricePoints_get_to_many_related(fields_appPricePoints: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppPricePointsResponse> {
			return this.http.get<AppPricePointsResponse>(this.baseUri + 'v1/appPriceTiers/{id}/pricePoints?' + fields_appPricePoints?.map(z => `fields[appPricePoints]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/appPrices/{id}
		 * @param {Array<string>} fields_appPrices the fields to include for returned resources of type appPrices
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPriceResponse} Single AppPrice
		 */
		AppPrices_get_instance(fields_appPrices: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppPriceResponse> {
			return this.http.get<AppPriceResponse>(this.baseUri + 'v1/appPrices/{id}?' + fields_appPrices?.map(z => `fields[appPrices]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/appScreenshotSets
		 * @param {AppScreenshotSetCreateRequest} requestBody AppScreenshotSet representation
		 * @return {void} 
		 */
		AppScreenshotSets_create_instance(requestBody: AppScreenshotSetCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appScreenshotSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appScreenshotSets/{id}
		 * @return {void} 
		 */
		AppScreenshotSets_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appScreenshotSets/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appScreenshotSets/{id}
		 * @param {Array<string>} fields_appScreenshotSets the fields to include for returned resources of type appScreenshotSets
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appScreenshots the fields to include for returned resources of type appScreenshots
		 * @param {number} limit_appScreenshots maximum number of related appScreenshots returned (when they are included)
		 * @return {AppScreenshotSetResponse} Single AppScreenshotSet
		 */
		AppScreenshotSets_get_instance(fields_appScreenshotSets: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appScreenshots: Array<string> | null | undefined, limit_appScreenshots: number | null | undefined): Observable<AppScreenshotSetResponse> {
			return this.http.get<AppScreenshotSetResponse>(this.baseUri + 'v1/appScreenshotSets/{id}?' + fields_appScreenshotSets?.map(z => `fields[appScreenshotSets]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appScreenshots?.map(z => `fields[appScreenshots]=${encodeURIComponent(z)}`).join('&') + '&limit_appScreenshots=' + limit_appScreenshots, {});
		}

		/**
		 * Get v1/appScreenshotSets/{id}/appScreenshots
		 * @param {Array<string>} fields_appScreenshotSets the fields to include for returned resources of type appScreenshotSets
		 * @param {Array<string>} fields_appScreenshots the fields to include for returned resources of type appScreenshots
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppScreenshotsResponse} List of related resources
		 */
		AppScreenshotSets_appScreenshots_get_to_many_related(fields_appScreenshotSets: Array<string> | null | undefined, fields_appScreenshots: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppScreenshotsResponse> {
			return this.http.get<AppScreenshotsResponse>(this.baseUri + 'v1/appScreenshotSets/{id}/appScreenshots?' + fields_appScreenshotSets?.map(z => `fields[appScreenshotSets]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appScreenshots?.map(z => `fields[appScreenshots]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appScreenshotSets/{id}/relationships/appScreenshots
		 * @param {number} limit maximum resources per page
		 * @return {AppScreenshotSetAppScreenshotsLinkagesResponse} List of related linkages
		 */
		AppScreenshotSets_appScreenshots_get_to_many_relationship(limit: number | null | undefined): Observable<AppScreenshotSetAppScreenshotsLinkagesResponse> {
			return this.http.get<AppScreenshotSetAppScreenshotsLinkagesResponse>(this.baseUri + 'v1/appScreenshotSets/{id}/relationships/appScreenshots?limit=' + limit, {});
		}

		/**
		 * Patch v1/appScreenshotSets/{id}/relationships/appScreenshots
		 * @param {AppScreenshotSetAppScreenshotsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		AppScreenshotSets_appScreenshots_replace_to_many_relationship(requestBody: AppScreenshotSetAppScreenshotsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/appScreenshotSets/{id}/relationships/appScreenshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/appScreenshots
		 * @param {AppScreenshotCreateRequest} requestBody AppScreenshot representation
		 * @return {void} 
		 */
		AppScreenshots_create_instance(requestBody: AppScreenshotCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appScreenshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appScreenshots/{id}
		 * @return {void} 
		 */
		AppScreenshots_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appScreenshots/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appScreenshots/{id}
		 * @param {Array<string>} fields_appScreenshots the fields to include for returned resources of type appScreenshots
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppScreenshotResponse} Single AppScreenshot
		 */
		AppScreenshots_get_instance(fields_appScreenshots: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppScreenshotResponse> {
			return this.http.get<AppScreenshotResponse>(this.baseUri + 'v1/appScreenshots/{id}?' + fields_appScreenshots?.map(z => `fields[appScreenshots]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/appScreenshots/{id}
		 * @param {AppScreenshotUpdateRequest} requestBody AppScreenshot representation
		 * @return {AppScreenshotResponse} Single AppScreenshot
		 */
		AppScreenshots_update_instance(requestBody: AppScreenshotUpdateRequest): Observable<AppScreenshotResponse> {
			return this.http.patch<AppScreenshotResponse>(this.baseUri + 'v1/appScreenshots/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/appStoreReviewAttachments
		 * @param {AppStoreReviewAttachmentCreateRequest} requestBody AppStoreReviewAttachment representation
		 * @return {void} 
		 */
		AppStoreReviewAttachments_create_instance(requestBody: AppStoreReviewAttachmentCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreReviewAttachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appStoreReviewAttachments/{id}
		 * @return {void} 
		 */
		AppStoreReviewAttachments_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appStoreReviewAttachments/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appStoreReviewAttachments/{id}
		 * @param {Array<string>} fields_appStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppStoreReviewAttachmentResponse} Single AppStoreReviewAttachment
		 */
		AppStoreReviewAttachments_get_instance(fields_appStoreReviewAttachments: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppStoreReviewAttachmentResponse> {
			return this.http.get<AppStoreReviewAttachmentResponse>(this.baseUri + 'v1/appStoreReviewAttachments/{id}?' + fields_appStoreReviewAttachments?.map(z => `fields[appStoreReviewAttachments]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/appStoreReviewAttachments/{id}
		 * @param {AppStoreReviewAttachmentUpdateRequest} requestBody AppStoreReviewAttachment representation
		 * @return {AppStoreReviewAttachmentResponse} Single AppStoreReviewAttachment
		 */
		AppStoreReviewAttachments_update_instance(requestBody: AppStoreReviewAttachmentUpdateRequest): Observable<AppStoreReviewAttachmentResponse> {
			return this.http.patch<AppStoreReviewAttachmentResponse>(this.baseUri + 'v1/appStoreReviewAttachments/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/appStoreReviewDetails
		 * @param {AppStoreReviewDetailCreateRequest} requestBody AppStoreReviewDetail representation
		 * @return {void} 
		 */
		AppStoreReviewDetails_create_instance(requestBody: AppStoreReviewDetailCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreReviewDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appStoreReviewDetails/{id}
		 * @param {Array<string>} fields_appStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
		 * @param {number} limit_appStoreReviewAttachments maximum number of related appStoreReviewAttachments returned (when they are included)
		 * @return {AppStoreReviewDetailResponse} Single AppStoreReviewDetail
		 */
		AppStoreReviewDetails_get_instance(fields_appStoreReviewDetails: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appStoreReviewAttachments: Array<string> | null | undefined, limit_appStoreReviewAttachments: number | null | undefined): Observable<AppStoreReviewDetailResponse> {
			return this.http.get<AppStoreReviewDetailResponse>(this.baseUri + 'v1/appStoreReviewDetails/{id}?' + fields_appStoreReviewDetails?.map(z => `fields[appStoreReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreReviewAttachments?.map(z => `fields[appStoreReviewAttachments]=${encodeURIComponent(z)}`).join('&') + '&limit_appStoreReviewAttachments=' + limit_appStoreReviewAttachments, {});
		}

		/**
		 * Patch v1/appStoreReviewDetails/{id}
		 * @param {AppStoreReviewDetailUpdateRequest} requestBody AppStoreReviewDetail representation
		 * @return {AppStoreReviewDetailResponse} Single AppStoreReviewDetail
		 */
		AppStoreReviewDetails_update_instance(requestBody: AppStoreReviewDetailUpdateRequest): Observable<AppStoreReviewDetailResponse> {
			return this.http.patch<AppStoreReviewDetailResponse>(this.baseUri + 'v1/appStoreReviewDetails/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appStoreReviewDetails/{id}/appStoreReviewAttachments
		 * @param {Array<string>} fields_appStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
		 * @param {Array<string>} fields_appStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppStoreReviewAttachmentsResponse} List of related resources
		 */
		AppStoreReviewDetails_appStoreReviewAttachments_get_to_many_related(fields_appStoreReviewDetails: Array<string> | null | undefined, fields_appStoreReviewAttachments: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppStoreReviewAttachmentsResponse> {
			return this.http.get<AppStoreReviewAttachmentsResponse>(this.baseUri + 'v1/appStoreReviewDetails/{id}/appStoreReviewAttachments?' + fields_appStoreReviewDetails?.map(z => `fields[appStoreReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreReviewAttachments?.map(z => `fields[appStoreReviewAttachments]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/appStoreVersionLocalizations
		 * @param {AppStoreVersionLocalizationCreateRequest} requestBody AppStoreVersionLocalization representation
		 * @return {void} 
		 */
		AppStoreVersionLocalizations_create_instance(requestBody: AppStoreVersionLocalizationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreVersionLocalizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appStoreVersionLocalizations/{id}
		 * @return {void} 
		 */
		AppStoreVersionLocalizations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appStoreVersionLocalizations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appStoreVersionLocalizations/{id}
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appScreenshotSets the fields to include for returned resources of type appScreenshotSets
		 * @param {Array<string>} fields_appPreviewSets the fields to include for returned resources of type appPreviewSets
		 * @param {number} limit_appPreviewSets maximum number of related appPreviewSets returned (when they are included)
		 * @param {number} limit_appScreenshotSets maximum number of related appScreenshotSets returned (when they are included)
		 * @return {AppStoreVersionLocalizationResponse} Single AppStoreVersionLocalization
		 */
		AppStoreVersionLocalizations_get_instance(fields_appStoreVersionLocalizations: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appScreenshotSets: Array<string> | null | undefined, fields_appPreviewSets: Array<string> | null | undefined, limit_appPreviewSets: number | null | undefined, limit_appScreenshotSets: number | null | undefined): Observable<AppStoreVersionLocalizationResponse> {
			return this.http.get<AppStoreVersionLocalizationResponse>(this.baseUri + 'v1/appStoreVersionLocalizations/{id}?' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appScreenshotSets?.map(z => `fields[appScreenshotSets]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreviewSets?.map(z => `fields[appPreviewSets]=${encodeURIComponent(z)}`).join('&') + '&limit_appPreviewSets=' + limit_appPreviewSets + '&limit_appScreenshotSets=' + limit_appScreenshotSets, {});
		}

		/**
		 * Patch v1/appStoreVersionLocalizations/{id}
		 * @param {AppStoreVersionLocalizationUpdateRequest} requestBody AppStoreVersionLocalization representation
		 * @return {AppStoreVersionLocalizationResponse} Single AppStoreVersionLocalization
		 */
		AppStoreVersionLocalizations_update_instance(requestBody: AppStoreVersionLocalizationUpdateRequest): Observable<AppStoreVersionLocalizationResponse> {
			return this.http.patch<AppStoreVersionLocalizationResponse>(this.baseUri + 'v1/appStoreVersionLocalizations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appStoreVersionLocalizations/{id}/appPreviewSets
		 * @param {Array<AppPreviewSetAttributesPreviewType>} filter_previewType filter by attribute 'previewType'
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {Array<string>} fields_appPreviews the fields to include for returned resources of type appPreviews
		 * @param {Array<string>} fields_appPreviewSets the fields to include for returned resources of type appPreviewSets
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPreviewSetsResponse} List of related resources
		 */
		AppStoreVersionLocalizations_appPreviewSets_get_to_many_related(filter_previewType: Array<AppPreviewSetAttributesPreviewType> | null | undefined, fields_appStoreVersionLocalizations: Array<string> | null | undefined, fields_appPreviews: Array<string> | null | undefined, fields_appPreviewSets: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppPreviewSetsResponse> {
			return this.http.get<AppPreviewSetsResponse>(this.baseUri + 'v1/appStoreVersionLocalizations/{id}/appPreviewSets?' + filter_previewType?.map(z => `filter[previewType]=${z}`).join('&') + '&' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreviews?.map(z => `fields[appPreviews]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreviewSets?.map(z => `fields[appPreviewSets]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersionLocalizations/{id}/appScreenshotSets
		 * @param {Array<AppScreenshotSetAttributesScreenshotDisplayType>} filter_screenshotDisplayType filter by attribute 'screenshotDisplayType'
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {Array<string>} fields_appScreenshotSets the fields to include for returned resources of type appScreenshotSets
		 * @param {Array<string>} fields_appScreenshots the fields to include for returned resources of type appScreenshots
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppScreenshotSetsResponse} List of related resources
		 */
		AppStoreVersionLocalizations_appScreenshotSets_get_to_many_related(filter_screenshotDisplayType: Array<AppScreenshotSetAttributesScreenshotDisplayType> | null | undefined, fields_appStoreVersionLocalizations: Array<string> | null | undefined, fields_appScreenshotSets: Array<string> | null | undefined, fields_appScreenshots: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppScreenshotSetsResponse> {
			return this.http.get<AppScreenshotSetsResponse>(this.baseUri + 'v1/appStoreVersionLocalizations/{id}/appScreenshotSets?' + filter_screenshotDisplayType?.map(z => `filter[screenshotDisplayType]=${z}`).join('&') + '&' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appScreenshotSets?.map(z => `fields[appScreenshotSets]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appScreenshots?.map(z => `fields[appScreenshots]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/appStoreVersionPhasedReleases
		 * @param {AppStoreVersionPhasedReleaseCreateRequest} requestBody AppStoreVersionPhasedRelease representation
		 * @return {void} 
		 */
		AppStoreVersionPhasedReleases_create_instance(requestBody: AppStoreVersionPhasedReleaseCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreVersionPhasedReleases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appStoreVersionPhasedReleases/{id}
		 * @return {void} 
		 */
		AppStoreVersionPhasedReleases_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appStoreVersionPhasedReleases/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch v1/appStoreVersionPhasedReleases/{id}
		 * @param {AppStoreVersionPhasedReleaseUpdateRequest} requestBody AppStoreVersionPhasedRelease representation
		 * @return {AppStoreVersionPhasedReleaseResponse} Single AppStoreVersionPhasedRelease
		 */
		AppStoreVersionPhasedReleases_update_instance(requestBody: AppStoreVersionPhasedReleaseUpdateRequest): Observable<AppStoreVersionPhasedReleaseResponse> {
			return this.http.patch<AppStoreVersionPhasedReleaseResponse>(this.baseUri + 'v1/appStoreVersionPhasedReleases/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/appStoreVersionSubmissions
		 * @param {AppStoreVersionSubmissionCreateRequest} requestBody AppStoreVersionSubmission representation
		 * @return {void} 
		 */
		AppStoreVersionSubmissions_create_instance(requestBody: AppStoreVersionSubmissionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreVersionSubmissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appStoreVersionSubmissions/{id}
		 * @return {void} 
		 */
		AppStoreVersionSubmissions_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appStoreVersionSubmissions/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/appStoreVersions
		 * @param {AppStoreVersionCreateRequest} requestBody AppStoreVersion representation
		 * @return {void} 
		 */
		AppStoreVersions_create_instance(requestBody: AppStoreVersionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/appStoreVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/appStoreVersions/{id}
		 * @return {void} 
		 */
		AppStoreVersions_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/appStoreVersions/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appStoreVersions/{id}
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {Array<string>} fields_idfaDeclarations the fields to include for returned resources of type idfaDeclarations
		 * @param {Array<string>} fields_routingAppCoverages the fields to include for returned resources of type routingAppCoverages
		 * @param {Array<string>} fields_appStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @param {Array<string>} fields_appStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_appStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
		 * @param {number} limit_appStoreVersionLocalizations maximum number of related appStoreVersionLocalizations returned (when they are included)
		 * @return {AppStoreVersionResponse} Single AppStoreVersion
		 */
		AppStoreVersions_get_instance(fields_appStoreVersions: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appStoreVersionLocalizations: Array<string> | null | undefined, fields_idfaDeclarations: Array<string> | null | undefined, fields_routingAppCoverages: Array<string> | null | undefined, fields_appStoreVersionPhasedReleases: Array<string> | null | undefined, fields_ageRatingDeclarations: Array<string> | null | undefined, fields_appStoreReviewDetails: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_appStoreVersionSubmissions: Array<string> | null | undefined, limit_appStoreVersionLocalizations: number | null | undefined): Observable<AppStoreVersionResponse> {
			return this.http.get<AppStoreVersionResponse>(this.baseUri + 'v1/appStoreVersions/{id}?' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_idfaDeclarations?.map(z => `fields[idfaDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_routingAppCoverages?.map(z => `fields[routingAppCoverages]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionPhasedReleases?.map(z => `fields[appStoreVersionPhasedReleases]=${encodeURIComponent(z)}`).join('&') + '&' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreReviewDetails?.map(z => `fields[appStoreReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionSubmissions?.map(z => `fields[appStoreVersionSubmissions]=${encodeURIComponent(z)}`).join('&') + '&limit_appStoreVersionLocalizations=' + limit_appStoreVersionLocalizations, {});
		}

		/**
		 * Patch v1/appStoreVersions/{id}
		 * @param {AppStoreVersionUpdateRequest} requestBody AppStoreVersion representation
		 * @return {AppStoreVersionResponse} Single AppStoreVersion
		 */
		AppStoreVersions_update_instance(requestBody: AppStoreVersionUpdateRequest): Observable<AppStoreVersionResponse> {
			return this.http.patch<AppStoreVersionResponse>(this.baseUri + 'v1/appStoreVersions/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/appStoreVersions/{id}/ageRatingDeclaration
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @return {AgeRatingDeclarationResponse} Related resource
		 */
		AppStoreVersions_ageRatingDeclaration_get_to_one_related(fields_ageRatingDeclarations: Array<string> | null | undefined): Observable<AgeRatingDeclarationResponse> {
			return this.http.get<AgeRatingDeclarationResponse>(this.baseUri + 'v1/appStoreVersions/{id}/ageRatingDeclaration?' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/appStoreReviewDetail
		 * @param {Array<string>} fields_appStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_appStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppStoreReviewDetailResponse} Related resource
		 */
		AppStoreVersions_appStoreReviewDetail_get_to_one_related(fields_appStoreReviewDetails: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_appStoreReviewAttachments: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppStoreReviewDetailResponse> {
			return this.http.get<AppStoreReviewDetailResponse>(this.baseUri + 'v1/appStoreVersions/{id}/appStoreReviewDetail?' + fields_appStoreReviewDetails?.map(z => `fields[appStoreReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreReviewAttachments?.map(z => `fields[appStoreReviewAttachments]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/appStoreVersionLocalizations
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {number} limit maximum resources per page
		 * @return {AppStoreVersionLocalizationsResponse} List of related resources
		 */
		AppStoreVersions_appStoreVersionLocalizations_get_to_many_related(fields_appStoreVersionLocalizations: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppStoreVersionLocalizationsResponse> {
			return this.http.get<AppStoreVersionLocalizationsResponse>(this.baseUri + 'v1/appStoreVersions/{id}/appStoreVersionLocalizations?' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/appStoreVersionPhasedRelease
		 * @param {Array<string>} fields_appStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
		 * @return {AppStoreVersionPhasedReleaseResponse} Related resource
		 */
		AppStoreVersions_appStoreVersionPhasedRelease_get_to_one_related(fields_appStoreVersionPhasedReleases: Array<string> | null | undefined): Observable<AppStoreVersionPhasedReleaseResponse> {
			return this.http.get<AppStoreVersionPhasedReleaseResponse>(this.baseUri + 'v1/appStoreVersions/{id}/appStoreVersionPhasedRelease?' + fields_appStoreVersionPhasedReleases?.map(z => `fields[appStoreVersionPhasedReleases]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/appStoreVersionSubmission
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_appStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppStoreVersionSubmissionResponse} Related resource
		 */
		AppStoreVersions_appStoreVersionSubmission_get_to_one_related(fields_appStoreVersions: Array<string> | null | undefined, fields_appStoreVersionSubmissions: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<AppStoreVersionSubmissionResponse> {
			return this.http.get<AppStoreVersionSubmissionResponse>(this.baseUri + 'v1/appStoreVersions/{id}/appStoreVersionSubmission?' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionSubmissions?.map(z => `fields[appStoreVersionSubmissions]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/build
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildResponse} Related resource
		 */
		AppStoreVersions_build_get_to_one_related(fields_builds: Array<string> | null | undefined): Observable<BuildResponse> {
			return this.http.get<BuildResponse>(this.baseUri + 'v1/appStoreVersions/{id}/build?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/idfaDeclaration
		 * @param {Array<string>} fields_idfaDeclarations the fields to include for returned resources of type idfaDeclarations
		 * @return {IdfaDeclarationResponse} Related resource
		 */
		AppStoreVersions_idfaDeclaration_get_to_one_related(fields_idfaDeclarations: Array<string> | null | undefined): Observable<IdfaDeclarationResponse> {
			return this.http.get<IdfaDeclarationResponse>(this.baseUri + 'v1/appStoreVersions/{id}/idfaDeclaration?' + fields_idfaDeclarations?.map(z => `fields[idfaDeclarations]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/appStoreVersions/{id}/relationships/build
		 * @return {AppStoreVersionBuildLinkageResponse} Related linkage
		 */
		AppStoreVersions_build_get_to_one_relationship(): Observable<AppStoreVersionBuildLinkageResponse> {
			return this.http.get<AppStoreVersionBuildLinkageResponse>(this.baseUri + 'v1/appStoreVersions/{id}/relationships/build', {});
		}

		/**
		 * Patch v1/appStoreVersions/{id}/relationships/build
		 * @param {AppStoreVersionBuildLinkageRequest} requestBody Related linkage
		 * @return {void} 
		 */
		AppStoreVersions_build_update_to_one_relationship(requestBody: AppStoreVersionBuildLinkageRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/appStoreVersions/{id}/relationships/build', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/appStoreVersions/{id}/routingAppCoverage
		 * @param {Array<string>} fields_routingAppCoverages the fields to include for returned resources of type routingAppCoverages
		 * @return {RoutingAppCoverageResponse} Related resource
		 */
		AppStoreVersions_routingAppCoverage_get_to_one_related(fields_routingAppCoverages: Array<string> | null | undefined): Observable<RoutingAppCoverageResponse> {
			return this.http.get<RoutingAppCoverageResponse>(this.baseUri + 'v1/appStoreVersions/{id}/routingAppCoverage?' + fields_routingAppCoverages?.map(z => `fields[routingAppCoverages]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps
		 * @param {Array<AppInfoAttributesAppStoreState>} filter_appStoreVersions_appStoreState filter by attribute 'appStoreVersions.appStoreState'
		 * @param {Array<Platform>} filter_appStoreVersions_platform filter by attribute 'appStoreVersions.platform'
		 * @param {Array<string>} filter_bundleId filter by attribute 'bundleId'
		 * @param {Array<string>} filter_name filter by attribute 'name'
		 * @param {Array<string>} filter_sku filter by attribute 'sku'
		 * @param {Array<string>} filter_appStoreVersions filter by id(s) of related 'appStoreVersions'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} exists_gameCenterEnabledVersions filter by existence or non-existence of related 'gameCenterEnabledVersions'
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {Array<string>} fields_perfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
		 * @param {Array<string>} fields_appInfos the fields to include for returned resources of type appInfos
		 * @param {Array<string>} fields_appPreOrders the fields to include for returned resources of type appPreOrders
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {Array<string>} fields_appPrices the fields to include for returned resources of type appPrices
		 * @param {Array<string>} fields_inAppPurchases the fields to include for returned resources of type inAppPurchases
		 * @param {Array<string>} fields_betaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {Array<string>} fields_gameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_betaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
		 * @param {Array<string>} fields_betaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
		 * @param {Array<string>} fields_endUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
		 * @param {number} limit_appInfos maximum number of related appInfos returned (when they are included)
		 * @param {number} limit_appStoreVersions maximum number of related appStoreVersions returned (when they are included)
		 * @param {number} limit_availableTerritories maximum number of related availableTerritories returned (when they are included)
		 * @param {number} limit_betaAppLocalizations maximum number of related betaAppLocalizations returned (when they are included)
		 * @param {number} limit_betaGroups maximum number of related betaGroups returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @param {number} limit_gameCenterEnabledVersions maximum number of related gameCenterEnabledVersions returned (when they are included)
		 * @param {number} limit_inAppPurchases maximum number of related inAppPurchases returned (when they are included)
		 * @param {number} limit_preReleaseVersions maximum number of related preReleaseVersions returned (when they are included)
		 * @param {number} limit_prices maximum number of related prices returned (when they are included)
		 * @return {AppsResponse} List of Apps
		 */
		Apps_get_collection(filter_appStoreVersions_appStoreState: Array<AppInfoAttributesAppStoreState> | null | undefined, filter_appStoreVersions_platform: Array<Platform> | null | undefined, filter_bundleId: Array<string> | null | undefined, filter_name: Array<string> | null | undefined, filter_sku: Array<string> | null | undefined, filter_appStoreVersions: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, exists_gameCenterEnabledVersions: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_betaGroups: Array<string> | null | undefined, fields_perfPowerMetrics: Array<string> | null | undefined, fields_appInfos: Array<string> | null | undefined, fields_appPreOrders: Array<string> | null | undefined, fields_preReleaseVersions: Array<string> | null | undefined, fields_appPrices: Array<string> | null | undefined, fields_inAppPurchases: Array<string> | null | undefined, fields_betaAppReviewDetails: Array<string> | null | undefined, fields_territories: Array<string> | null | undefined, fields_gameCenterEnabledVersions: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_betaAppLocalizations: Array<string> | null | undefined, fields_betaLicenseAgreements: Array<string> | null | undefined, fields_endUserLicenseAgreements: Array<string> | null | undefined, limit_appInfos: number | null | undefined, limit_appStoreVersions: number | null | undefined, limit_availableTerritories: number | null | undefined, limit_betaAppLocalizations: number | null | undefined, limit_betaGroups: number | null | undefined, limit_builds: number | null | undefined, limit_gameCenterEnabledVersions: number | null | undefined, limit_inAppPurchases: number | null | undefined, limit_preReleaseVersions: number | null | undefined, limit_prices: number | null | undefined): Observable<AppsResponse> {
			return this.http.get<AppsResponse>(this.baseUri + 'v1/apps?' + filter_appStoreVersions_appStoreState?.map(z => `filter[appStoreVersions.appStoreState]=${z}`).join('&') + '&' + filter_appStoreVersions_platform?.map(z => `filter[appStoreVersions.platform]=${z}`).join('&') + '&' + filter_bundleId?.map(z => `filter[bundleId]=${encodeURIComponent(z)}`).join('&') + '&' + filter_name?.map(z => `filter[name]=${encodeURIComponent(z)}`).join('&') + '&' + filter_sku?.map(z => `filter[sku]=${encodeURIComponent(z)}`).join('&') + '&' + filter_appStoreVersions?.map(z => `filter[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + exists_gameCenterEnabledVersions?.map(z => `exists[gameCenterEnabledVersions]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + fields_perfPowerMetrics?.map(z => `fields[perfPowerMetrics]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfos?.map(z => `fields[appInfos]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreOrders?.map(z => `fields[appPreOrders]=${encodeURIComponent(z)}`).join('&') + '&' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPrices?.map(z => `fields[appPrices]=${encodeURIComponent(z)}`).join('&') + '&' + fields_inAppPurchases?.map(z => `fields[inAppPurchases]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewDetails?.map(z => `fields[betaAppReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&' + fields_gameCenterEnabledVersions?.map(z => `fields[gameCenterEnabledVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppLocalizations?.map(z => `fields[betaAppLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaLicenseAgreements?.map(z => `fields[betaLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&' + fields_endUserLicenseAgreements?.map(z => `fields[endUserLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&limit_appInfos=' + limit_appInfos + '&limit_appStoreVersions=' + limit_appStoreVersions + '&limit_availableTerritories=' + limit_availableTerritories + '&limit_betaAppLocalizations=' + limit_betaAppLocalizations + '&limit_betaGroups=' + limit_betaGroups + '&limit_builds=' + limit_builds + '&limit_gameCenterEnabledVersions=' + limit_gameCenterEnabledVersions + '&limit_inAppPurchases=' + limit_inAppPurchases + '&limit_preReleaseVersions=' + limit_preReleaseVersions + '&limit_prices=' + limit_prices, {});
		}

		/**
		 * Get v1/apps/{id}
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {Array<string>} fields_perfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
		 * @param {Array<string>} fields_appInfos the fields to include for returned resources of type appInfos
		 * @param {Array<string>} fields_appPreOrders the fields to include for returned resources of type appPreOrders
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {Array<string>} fields_appPrices the fields to include for returned resources of type appPrices
		 * @param {Array<string>} fields_inAppPurchases the fields to include for returned resources of type inAppPurchases
		 * @param {Array<string>} fields_betaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {Array<string>} fields_gameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_betaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
		 * @param {Array<string>} fields_betaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
		 * @param {Array<string>} fields_endUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
		 * @param {number} limit_appInfos maximum number of related appInfos returned (when they are included)
		 * @param {number} limit_appStoreVersions maximum number of related appStoreVersions returned (when they are included)
		 * @param {number} limit_availableTerritories maximum number of related availableTerritories returned (when they are included)
		 * @param {number} limit_betaAppLocalizations maximum number of related betaAppLocalizations returned (when they are included)
		 * @param {number} limit_betaGroups maximum number of related betaGroups returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @param {number} limit_gameCenterEnabledVersions maximum number of related gameCenterEnabledVersions returned (when they are included)
		 * @param {number} limit_inAppPurchases maximum number of related inAppPurchases returned (when they are included)
		 * @param {number} limit_preReleaseVersions maximum number of related preReleaseVersions returned (when they are included)
		 * @param {number} limit_prices maximum number of related prices returned (when they are included)
		 * @return {AppResponse} Single App
		 */
		Apps_get_instance(fields_apps: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_betaGroups: Array<string> | null | undefined, fields_perfPowerMetrics: Array<string> | null | undefined, fields_appInfos: Array<string> | null | undefined, fields_appPreOrders: Array<string> | null | undefined, fields_preReleaseVersions: Array<string> | null | undefined, fields_appPrices: Array<string> | null | undefined, fields_inAppPurchases: Array<string> | null | undefined, fields_betaAppReviewDetails: Array<string> | null | undefined, fields_territories: Array<string> | null | undefined, fields_gameCenterEnabledVersions: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_betaAppLocalizations: Array<string> | null | undefined, fields_betaLicenseAgreements: Array<string> | null | undefined, fields_endUserLicenseAgreements: Array<string> | null | undefined, limit_appInfos: number | null | undefined, limit_appStoreVersions: number | null | undefined, limit_availableTerritories: number | null | undefined, limit_betaAppLocalizations: number | null | undefined, limit_betaGroups: number | null | undefined, limit_builds: number | null | undefined, limit_gameCenterEnabledVersions: number | null | undefined, limit_inAppPurchases: number | null | undefined, limit_preReleaseVersions: number | null | undefined, limit_prices: number | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/apps/{id}?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + fields_perfPowerMetrics?.map(z => `fields[perfPowerMetrics]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfos?.map(z => `fields[appInfos]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPreOrders?.map(z => `fields[appPreOrders]=${encodeURIComponent(z)}`).join('&') + '&' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPrices?.map(z => `fields[appPrices]=${encodeURIComponent(z)}`).join('&') + '&' + fields_inAppPurchases?.map(z => `fields[inAppPurchases]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewDetails?.map(z => `fields[betaAppReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&' + fields_gameCenterEnabledVersions?.map(z => `fields[gameCenterEnabledVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppLocalizations?.map(z => `fields[betaAppLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaLicenseAgreements?.map(z => `fields[betaLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&' + fields_endUserLicenseAgreements?.map(z => `fields[endUserLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&limit_appInfos=' + limit_appInfos + '&limit_appStoreVersions=' + limit_appStoreVersions + '&limit_availableTerritories=' + limit_availableTerritories + '&limit_betaAppLocalizations=' + limit_betaAppLocalizations + '&limit_betaGroups=' + limit_betaGroups + '&limit_builds=' + limit_builds + '&limit_gameCenterEnabledVersions=' + limit_gameCenterEnabledVersions + '&limit_inAppPurchases=' + limit_inAppPurchases + '&limit_preReleaseVersions=' + limit_preReleaseVersions + '&limit_prices=' + limit_prices, {});
		}

		/**
		 * Patch v1/apps/{id}
		 * @param {AppUpdateRequest} requestBody App representation
		 * @return {AppResponse} Single App
		 */
		Apps_update_instance(requestBody: AppUpdateRequest): Observable<AppResponse> {
			return this.http.patch<AppResponse>(this.baseUri + 'v1/apps/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/apps/{id}/appInfos
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @param {Array<string>} fields_appInfos the fields to include for returned resources of type appInfos
		 * @param {Array<string>} fields_appCategories the fields to include for returned resources of type appCategories
		 * @param {Array<string>} fields_appInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppInfosResponse} List of related resources
		 */
		Apps_appInfos_get_to_many_related(fields_ageRatingDeclarations: Array<string> | null | undefined, fields_appInfos: Array<string> | null | undefined, fields_appCategories: Array<string> | null | undefined, fields_appInfoLocalizations: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppInfosResponse> {
			return this.http.get<AppInfosResponse>(this.baseUri + 'v1/apps/{id}/appInfos?' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfos?.map(z => `fields[appInfos]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appCategories?.map(z => `fields[appCategories]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appInfoLocalizations?.map(z => `fields[appInfoLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/appStoreVersions
		 * @param {Array<AppInfoAttributesAppStoreState>} filter_appStoreState filter by attribute 'appStoreState'
		 * @param {Array<Platform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_versionString filter by attribute 'versionString'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} fields_idfaDeclarations the fields to include for returned resources of type idfaDeclarations
		 * @param {Array<string>} fields_appStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
		 * @param {Array<string>} fields_routingAppCoverages the fields to include for returned resources of type routingAppCoverages
		 * @param {Array<string>} fields_appStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
		 * @param {Array<string>} fields_ageRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
		 * @param {Array<string>} fields_appStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_appStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppStoreVersionsResponse} List of related resources
		 */
		Apps_appStoreVersions_get_to_many_related(filter_appStoreState: Array<AppInfoAttributesAppStoreState> | null | undefined, filter_platform: Array<Platform> | null | undefined, filter_versionString: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, fields_idfaDeclarations: Array<string> | null | undefined, fields_appStoreVersionLocalizations: Array<string> | null | undefined, fields_routingAppCoverages: Array<string> | null | undefined, fields_appStoreVersionPhasedReleases: Array<string> | null | undefined, fields_ageRatingDeclarations: Array<string> | null | undefined, fields_appStoreReviewDetails: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_appStoreVersionSubmissions: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppStoreVersionsResponse> {
			return this.http.get<AppStoreVersionsResponse>(this.baseUri + 'v1/apps/{id}/appStoreVersions?' + filter_appStoreState?.map(z => `filter[appStoreState]=${z}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_versionString?.map(z => `filter[versionString]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + fields_idfaDeclarations?.map(z => `fields[idfaDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionLocalizations?.map(z => `fields[appStoreVersionLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_routingAppCoverages?.map(z => `fields[routingAppCoverages]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionPhasedReleases?.map(z => `fields[appStoreVersionPhasedReleases]=${encodeURIComponent(z)}`).join('&') + '&' + fields_ageRatingDeclarations?.map(z => `fields[ageRatingDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreReviewDetails?.map(z => `fields[appStoreReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersionSubmissions?.map(z => `fields[appStoreVersionSubmissions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/availableTerritories
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {number} limit maximum resources per page
		 * @return {TerritoriesResponse} List of related resources
		 */
		Apps_availableTerritories_get_to_many_related(fields_territories: Array<string> | null | undefined, limit: number | null | undefined): Observable<TerritoriesResponse> {
			return this.http.get<TerritoriesResponse>(this.baseUri + 'v1/apps/{id}/availableTerritories?' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/apps/{id}/betaAppLocalizations
		 * @param {Array<string>} fields_betaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
		 * @param {number} limit maximum resources per page
		 * @return {BetaAppLocalizationsResponse} List of related resources
		 */
		Apps_betaAppLocalizations_get_to_many_related(fields_betaAppLocalizations: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaAppLocalizationsResponse> {
			return this.http.get<BetaAppLocalizationsResponse>(this.baseUri + 'v1/apps/{id}/betaAppLocalizations?' + fields_betaAppLocalizations?.map(z => `fields[betaAppLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/apps/{id}/betaAppReviewDetail
		 * @param {Array<string>} fields_betaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
		 * @return {BetaAppReviewDetailResponse} Related resource
		 */
		Apps_betaAppReviewDetail_get_to_one_related(fields_betaAppReviewDetails: Array<string> | null | undefined): Observable<BetaAppReviewDetailResponse> {
			return this.http.get<BetaAppReviewDetailResponse>(this.baseUri + 'v1/apps/{id}/betaAppReviewDetail?' + fields_betaAppReviewDetails?.map(z => `fields[betaAppReviewDetails]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/betaGroups
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {number} limit maximum resources per page
		 * @return {BetaGroupsResponse} List of related resources
		 */
		Apps_betaGroups_get_to_many_related(fields_betaGroups: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaGroupsResponse> {
			return this.http.get<BetaGroupsResponse>(this.baseUri + 'v1/apps/{id}/betaGroups?' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/apps/{id}/betaLicenseAgreement
		 * @param {Array<string>} fields_betaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
		 * @return {BetaLicenseAgreementResponse} Related resource
		 */
		Apps_betaLicenseAgreement_get_to_one_related(fields_betaLicenseAgreements: Array<string> | null | undefined): Observable<BetaLicenseAgreementResponse> {
			return this.http.get<BetaLicenseAgreementResponse>(this.baseUri + 'v1/apps/{id}/betaLicenseAgreement?' + fields_betaLicenseAgreements?.map(z => `fields[betaLicenseAgreements]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/builds
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {number} limit maximum resources per page
		 * @return {BuildsResponse} List of related resources
		 */
		Apps_builds_get_to_many_related(fields_builds: Array<string> | null | undefined, limit: number | null | undefined): Observable<BuildsResponse> {
			return this.http.get<BuildsResponse>(this.baseUri + 'v1/apps/{id}/builds?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/apps/{id}/endUserLicenseAgreement
		 * @param {Array<string>} fields_endUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
		 * @return {EndUserLicenseAgreementResponse} Related resource
		 */
		Apps_endUserLicenseAgreement_get_to_one_related(fields_endUserLicenseAgreements: Array<string> | null | undefined): Observable<EndUserLicenseAgreementResponse> {
			return this.http.get<EndUserLicenseAgreementResponse>(this.baseUri + 'v1/apps/{id}/endUserLicenseAgreement?' + fields_endUserLicenseAgreements?.map(z => `fields[endUserLicenseAgreements]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/gameCenterEnabledVersions
		 * @param {Array<Platform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_versionString filter by attribute 'versionString'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_gameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {GameCenterEnabledVersionsResponse} List of related resources
		 */
		Apps_gameCenterEnabledVersions_get_to_many_related(filter_platform: Array<Platform> | null | undefined, filter_versionString: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_gameCenterEnabledVersions: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<GameCenterEnabledVersionsResponse> {
			return this.http.get<GameCenterEnabledVersionsResponse>(this.baseUri + 'v1/apps/{id}/gameCenterEnabledVersions?' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_versionString?.map(z => `filter[versionString]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_gameCenterEnabledVersions?.map(z => `fields[gameCenterEnabledVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/inAppPurchases
		 * @param {Array<InAppPurchaseAttributesInAppPurchaseType>} filter_inAppPurchaseType filter by attribute 'inAppPurchaseType'
		 * @param {Array<string>} filter_canBeSubmitted filter by canBeSubmitted
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_inAppPurchases the fields to include for returned resources of type inAppPurchases
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<AppType>} include comma-separated list of relationships to include
		 * @return {InAppPurchasesResponse} List of related resources
		 */
		Apps_inAppPurchases_get_to_many_related(filter_inAppPurchaseType: Array<InAppPurchaseAttributesInAppPurchaseType> | null | undefined, filter_canBeSubmitted: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_inAppPurchases: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<AppType> | null | undefined): Observable<InAppPurchasesResponse> {
			return this.http.get<InAppPurchasesResponse>(this.baseUri + 'v1/apps/{id}/inAppPurchases?' + filter_inAppPurchaseType?.map(z => `filter[inAppPurchaseType]=${z}`).join('&') + '&' + filter_canBeSubmitted?.map(z => `filter[canBeSubmitted]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_inAppPurchases?.map(z => `fields[inAppPurchases]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${z}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/perfPowerMetrics
		 * @param {Array<string>} filter_deviceType filter by attribute 'deviceType'
		 * @param {Array<PerfPowerMetricAttributesMetricType>} filter_metricType filter by attribute 'metricType'
		 * @param {Array<PerfPowerMetricAttributesPlatform>} filter_platform filter by attribute 'platform'
		 * @return {PerfPowerMetricsResponse} List of related resources
		 */
		Apps_perfPowerMetrics_get_to_many_related(filter_deviceType: Array<string> | null | undefined, filter_metricType: Array<PerfPowerMetricAttributesMetricType> | null | undefined, filter_platform: Array<PerfPowerMetricAttributesPlatform> | null | undefined): Observable<PerfPowerMetricsResponse> {
			return this.http.get<PerfPowerMetricsResponse>(this.baseUri + 'v1/apps/{id}/perfPowerMetrics?' + filter_deviceType?.map(z => `filter[deviceType]=${encodeURIComponent(z)}`).join('&') + '&' + filter_metricType?.map(z => `filter[metricType]=${z}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/preOrder
		 * @param {Array<string>} fields_appPreOrders the fields to include for returned resources of type appPreOrders
		 * @return {AppPreOrderResponse} Related resource
		 */
		Apps_preOrder_get_to_one_related(fields_appPreOrders: Array<string> | null | undefined): Observable<AppPreOrderResponse> {
			return this.http.get<AppPreOrderResponse>(this.baseUri + 'v1/apps/{id}/preOrder?' + fields_appPreOrders?.map(z => `fields[appPreOrders]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/apps/{id}/preReleaseVersions
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {number} limit maximum resources per page
		 * @return {PreReleaseVersionsResponse} List of related resources
		 */
		Apps_preReleaseVersions_get_to_many_related(fields_preReleaseVersions: Array<string> | null | undefined, limit: number | null | undefined): Observable<PreReleaseVersionsResponse> {
			return this.http.get<PreReleaseVersionsResponse>(this.baseUri + 'v1/apps/{id}/preReleaseVersions?' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/apps/{id}/prices
		 * @param {Array<string>} fields_appPrices the fields to include for returned resources of type appPrices
		 * @param {Array<string>} fields_appPriceTiers the fields to include for returned resources of type appPriceTiers
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {AppPricesResponse} List of related resources
		 */
		Apps_prices_get_to_many_related(fields_appPrices: Array<string> | null | undefined, fields_appPriceTiers: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<AppPricesResponse> {
			return this.http.get<AppPricesResponse>(this.baseUri + 'v1/apps/{id}/prices?' + fields_appPrices?.map(z => `fields[appPrices]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appPriceTiers?.map(z => `fields[appPriceTiers]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete v1/apps/{id}/relationships/betaTesters
		 * @return {void} 
		 */
		Apps_betaTesters_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/{id}/relationships/betaTesters', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaAppLocalizations
		 * @param {Array<string>} filter_locale filter by attribute 'locale'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} fields_betaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaAppLocalizationsResponse} List of BetaAppLocalizations
		 */
		BetaAppLocalizations_get_collection(filter_locale: Array<string> | null | undefined, filter_app: Array<string> | null | undefined, fields_betaAppLocalizations: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaAppLocalizationsResponse> {
			return this.http.get<BetaAppLocalizationsResponse>(this.baseUri + 'v1/betaAppLocalizations?' + filter_locale?.map(z => `filter[locale]=${encodeURIComponent(z)}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppLocalizations?.map(z => `fields[betaAppLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/betaAppLocalizations
		 * @param {BetaAppLocalizationCreateRequest} requestBody BetaAppLocalization representation
		 * @return {void} 
		 */
		BetaAppLocalizations_create_instance(requestBody: BetaAppLocalizationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaAppLocalizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaAppLocalizations/{id}
		 * @return {void} 
		 */
		BetaAppLocalizations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaAppLocalizations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaAppLocalizations/{id}
		 * @param {Array<string>} fields_betaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaAppLocalizationResponse} Single BetaAppLocalization
		 */
		BetaAppLocalizations_get_instance(fields_betaAppLocalizations: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaAppLocalizationResponse> {
			return this.http.get<BetaAppLocalizationResponse>(this.baseUri + 'v1/betaAppLocalizations/{id}?' + fields_betaAppLocalizations?.map(z => `fields[betaAppLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/betaAppLocalizations/{id}
		 * @param {BetaAppLocalizationUpdateRequest} requestBody BetaAppLocalization representation
		 * @return {BetaAppLocalizationResponse} Single BetaAppLocalization
		 */
		BetaAppLocalizations_update_instance(requestBody: BetaAppLocalizationUpdateRequest): Observable<BetaAppLocalizationResponse> {
			return this.http.patch<BetaAppLocalizationResponse>(this.baseUri + 'v1/betaAppLocalizations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/betaAppLocalizations/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		BetaAppLocalizations_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/betaAppLocalizations/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaAppReviewDetails
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} fields_betaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaAppReviewDetailsResponse} List of BetaAppReviewDetails
		 */
		BetaAppReviewDetails_get_collection(filter_app: Array<string>, fields_betaAppReviewDetails: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaAppReviewDetailsResponse> {
			return this.http.get<BetaAppReviewDetailsResponse>(this.baseUri + 'v1/betaAppReviewDetails?' + filter_app.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewDetails?.map(z => `fields[betaAppReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaAppReviewDetails/{id}
		 * @param {Array<string>} fields_betaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaAppReviewDetailResponse} Single BetaAppReviewDetail
		 */
		BetaAppReviewDetails_get_instance(fields_betaAppReviewDetails: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaAppReviewDetailResponse> {
			return this.http.get<BetaAppReviewDetailResponse>(this.baseUri + 'v1/betaAppReviewDetails/{id}?' + fields_betaAppReviewDetails?.map(z => `fields[betaAppReviewDetails]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/betaAppReviewDetails/{id}
		 * @param {BetaAppReviewDetailUpdateRequest} requestBody BetaAppReviewDetail representation
		 * @return {BetaAppReviewDetailResponse} Single BetaAppReviewDetail
		 */
		BetaAppReviewDetails_update_instance(requestBody: BetaAppReviewDetailUpdateRequest): Observable<BetaAppReviewDetailResponse> {
			return this.http.patch<BetaAppReviewDetailResponse>(this.baseUri + 'v1/betaAppReviewDetails/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/betaAppReviewDetails/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		BetaAppReviewDetails_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/betaAppReviewDetails/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaAppReviewSubmissions
		 * @param {Array<BetaAppReviewSubmissionAttributesBetaReviewState>} filter_betaReviewState filter by attribute 'betaReviewState'
		 * @param {Array<string>} filter_build filter by id(s) of related 'build'
		 * @param {Array<string>} fields_betaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BetaAppReviewSubmissionsResponse} List of BetaAppReviewSubmissions
		 */
		BetaAppReviewSubmissions_get_collection(filter_betaReviewState: Array<BetaAppReviewSubmissionAttributesBetaReviewState> | null | undefined, filter_build: Array<string>, fields_betaAppReviewSubmissions: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BetaAppReviewSubmissionsResponse> {
			return this.http.get<BetaAppReviewSubmissionsResponse>(this.baseUri + 'v1/betaAppReviewSubmissions?' + filter_betaReviewState?.map(z => `filter[betaReviewState]=${z}`).join('&') + '&' + filter_build.map(z => `filter[build]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewSubmissions?.map(z => `fields[betaAppReviewSubmissions]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/betaAppReviewSubmissions
		 * @param {BetaAppReviewSubmissionCreateRequest} requestBody BetaAppReviewSubmission representation
		 * @return {void} 
		 */
		BetaAppReviewSubmissions_create_instance(requestBody: BetaAppReviewSubmissionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaAppReviewSubmissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaAppReviewSubmissions/{id}
		 * @param {Array<string>} fields_betaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BetaAppReviewSubmissionResponse} Single BetaAppReviewSubmission
		 */
		BetaAppReviewSubmissions_get_instance(fields_betaAppReviewSubmissions: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BetaAppReviewSubmissionResponse> {
			return this.http.get<BetaAppReviewSubmissionResponse>(this.baseUri + 'v1/betaAppReviewSubmissions/{id}?' + fields_betaAppReviewSubmissions?.map(z => `fields[betaAppReviewSubmissions]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaAppReviewSubmissions/{id}/build
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildResponse} Related resource
		 */
		BetaAppReviewSubmissions_build_get_to_one_related(fields_builds: Array<string> | null | undefined): Observable<BuildResponse> {
			return this.http.get<BuildResponse>(this.baseUri + 'v1/betaAppReviewSubmissions/{id}/build?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaBuildLocalizations
		 * @param {Array<string>} filter_locale filter by attribute 'locale'
		 * @param {Array<string>} filter_build filter by id(s) of related 'build'
		 * @param {Array<string>} fields_betaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BetaBuildLocalizationsResponse} List of BetaBuildLocalizations
		 */
		BetaBuildLocalizations_get_collection(filter_locale: Array<string> | null | undefined, filter_build: Array<string> | null | undefined, fields_betaBuildLocalizations: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BetaBuildLocalizationsResponse> {
			return this.http.get<BetaBuildLocalizationsResponse>(this.baseUri + 'v1/betaBuildLocalizations?' + filter_locale?.map(z => `filter[locale]=${encodeURIComponent(z)}`).join('&') + '&' + filter_build?.map(z => `filter[build]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaBuildLocalizations?.map(z => `fields[betaBuildLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/betaBuildLocalizations
		 * @param {BetaBuildLocalizationCreateRequest} requestBody BetaBuildLocalization representation
		 * @return {void} 
		 */
		BetaBuildLocalizations_create_instance(requestBody: BetaBuildLocalizationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaBuildLocalizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaBuildLocalizations/{id}
		 * @return {void} 
		 */
		BetaBuildLocalizations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaBuildLocalizations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaBuildLocalizations/{id}
		 * @param {Array<string>} fields_betaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BetaBuildLocalizationResponse} Single BetaBuildLocalization
		 */
		BetaBuildLocalizations_get_instance(fields_betaBuildLocalizations: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BetaBuildLocalizationResponse> {
			return this.http.get<BetaBuildLocalizationResponse>(this.baseUri + 'v1/betaBuildLocalizations/{id}?' + fields_betaBuildLocalizations?.map(z => `fields[betaBuildLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/betaBuildLocalizations/{id}
		 * @param {BetaBuildLocalizationUpdateRequest} requestBody BetaBuildLocalization representation
		 * @return {BetaBuildLocalizationResponse} Single BetaBuildLocalization
		 */
		BetaBuildLocalizations_update_instance(requestBody: BetaBuildLocalizationUpdateRequest): Observable<BetaBuildLocalizationResponse> {
			return this.http.patch<BetaBuildLocalizationResponse>(this.baseUri + 'v1/betaBuildLocalizations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/betaBuildLocalizations/{id}/build
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildResponse} Related resource
		 */
		BetaBuildLocalizations_build_get_to_one_related(fields_builds: Array<string> | null | undefined): Observable<BuildResponse> {
			return this.http.get<BuildResponse>(this.baseUri + 'v1/betaBuildLocalizations/{id}/build?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaGroups
		 * @param {Array<string>} filter_isInternalGroup filter by attribute 'isInternalGroup'
		 * @param {Array<string>} filter_name filter by attribute 'name'
		 * @param {Array<string>} filter_publicLink filter by attribute 'publicLink'
		 * @param {Array<string>} filter_publicLinkEnabled filter by attribute 'publicLinkEnabled'
		 * @param {Array<string>} filter_publicLinkLimitEnabled filter by attribute 'publicLinkLimitEnabled'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} filter_builds filter by id(s) of related 'builds'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_betaTesters maximum number of related betaTesters returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {BetaGroupsResponse} List of BetaGroups
		 */
		BetaGroups_get_collection(filter_isInternalGroup: Array<string> | null | undefined, filter_name: Array<string> | null | undefined, filter_publicLink: Array<string> | null | undefined, filter_publicLinkEnabled: Array<string> | null | undefined, filter_publicLinkLimitEnabled: Array<string> | null | undefined, filter_app: Array<string> | null | undefined, filter_builds: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_betaGroups: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_betaTesters: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_betaTesters: number | null | undefined, limit_builds: number | null | undefined): Observable<BetaGroupsResponse> {
			return this.http.get<BetaGroupsResponse>(this.baseUri + 'v1/betaGroups?' + filter_isInternalGroup?.map(z => `filter[isInternalGroup]=${encodeURIComponent(z)}`).join('&') + '&' + filter_name?.map(z => `filter[name]=${encodeURIComponent(z)}`).join('&') + '&' + filter_publicLink?.map(z => `filter[publicLink]=${encodeURIComponent(z)}`).join('&') + '&' + filter_publicLinkEnabled?.map(z => `filter[publicLinkEnabled]=${encodeURIComponent(z)}`).join('&') + '&' + filter_publicLinkLimitEnabled?.map(z => `filter[publicLinkLimitEnabled]=${encodeURIComponent(z)}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + filter_builds?.map(z => `filter[builds]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_betaTesters=' + limit_betaTesters + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Post v1/betaGroups
		 * @param {BetaGroupCreateRequest} requestBody BetaGroup representation
		 * @return {void} 
		 */
		BetaGroups_create_instance(requestBody: BetaGroupCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaGroups/{id}
		 * @return {void} 
		 */
		BetaGroups_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaGroups/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaGroups/{id}
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_betaTesters maximum number of related betaTesters returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {BetaGroupResponse} Single BetaGroup
		 */
		BetaGroups_get_instance(fields_betaGroups: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_betaTesters: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_betaTesters: number | null | undefined, limit_builds: number | null | undefined): Observable<BetaGroupResponse> {
			return this.http.get<BetaGroupResponse>(this.baseUri + 'v1/betaGroups/{id}?' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_betaTesters=' + limit_betaTesters + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Patch v1/betaGroups/{id}
		 * @param {BetaGroupUpdateRequest} requestBody BetaGroup representation
		 * @return {BetaGroupResponse} Single BetaGroup
		 */
		BetaGroups_update_instance(requestBody: BetaGroupUpdateRequest): Observable<BetaGroupResponse> {
			return this.http.patch<BetaGroupResponse>(this.baseUri + 'v1/betaGroups/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/betaGroups/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		BetaGroups_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/betaGroups/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaGroups/{id}/betaTesters
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {number} limit maximum resources per page
		 * @return {BetaTestersResponse} List of related resources
		 */
		BetaGroups_betaTesters_get_to_many_related(fields_betaTesters: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaTestersResponse> {
			return this.http.get<BetaTestersResponse>(this.baseUri + 'v1/betaGroups/{id}/betaTesters?' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/betaGroups/{id}/builds
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {number} limit maximum resources per page
		 * @return {BuildsResponse} List of related resources
		 */
		BetaGroups_builds_get_to_many_related(fields_builds: Array<string> | null | undefined, limit: number | null | undefined): Observable<BuildsResponse> {
			return this.http.get<BuildsResponse>(this.baseUri + 'v1/betaGroups/{id}/builds?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Delete v1/betaGroups/{id}/relationships/betaTesters
		 * @return {void} 
		 */
		BetaGroups_betaTesters_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaGroups/{id}/relationships/betaTesters', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaGroups/{id}/relationships/betaTesters
		 * @param {number} limit maximum resources per page
		 * @return {BetaGroupBetaTestersLinkagesResponse} List of related linkages
		 */
		BetaGroups_betaTesters_get_to_many_relationship(limit: number | null | undefined): Observable<BetaGroupBetaTestersLinkagesResponse> {
			return this.http.get<BetaGroupBetaTestersLinkagesResponse>(this.baseUri + 'v1/betaGroups/{id}/relationships/betaTesters?limit=' + limit, {});
		}

		/**
		 * Post v1/betaGroups/{id}/relationships/betaTesters
		 * @param {BetaGroupBetaTestersLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		BetaGroups_betaTesters_create_to_many_relationship(requestBody: BetaGroupBetaTestersLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaGroups/{id}/relationships/betaTesters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaGroups/{id}/relationships/builds
		 * @return {void} 
		 */
		BetaGroups_builds_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaGroups/{id}/relationships/builds', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaGroups/{id}/relationships/builds
		 * @param {number} limit maximum resources per page
		 * @return {BetaGroupBuildsLinkagesResponse} List of related linkages
		 */
		BetaGroups_builds_get_to_many_relationship(limit: number | null | undefined): Observable<BetaGroupBuildsLinkagesResponse> {
			return this.http.get<BetaGroupBuildsLinkagesResponse>(this.baseUri + 'v1/betaGroups/{id}/relationships/builds?limit=' + limit, {});
		}

		/**
		 * Post v1/betaGroups/{id}/relationships/builds
		 * @param {BetaGroupBuildsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		BetaGroups_builds_create_to_many_relationship(requestBody: BetaGroupBuildsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaGroups/{id}/relationships/builds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaLicenseAgreements
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} fields_betaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaLicenseAgreementsResponse} List of BetaLicenseAgreements
		 */
		BetaLicenseAgreements_get_collection(filter_app: Array<string> | null | undefined, fields_betaLicenseAgreements: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaLicenseAgreementsResponse> {
			return this.http.get<BetaLicenseAgreementsResponse>(this.baseUri + 'v1/betaLicenseAgreements?' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaLicenseAgreements?.map(z => `fields[betaLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/betaLicenseAgreements/{id}
		 * @param {Array<string>} fields_betaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {BetaLicenseAgreementResponse} Single BetaLicenseAgreement
		 */
		BetaLicenseAgreements_get_instance(fields_betaLicenseAgreements: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined): Observable<BetaLicenseAgreementResponse> {
			return this.http.get<BetaLicenseAgreementResponse>(this.baseUri + 'v1/betaLicenseAgreements/{id}?' + fields_betaLicenseAgreements?.map(z => `fields[betaLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/betaLicenseAgreements/{id}
		 * @param {BetaLicenseAgreementUpdateRequest} requestBody BetaLicenseAgreement representation
		 * @return {BetaLicenseAgreementResponse} Single BetaLicenseAgreement
		 */
		BetaLicenseAgreements_update_instance(requestBody: BetaLicenseAgreementUpdateRequest): Observable<BetaLicenseAgreementResponse> {
			return this.http.patch<BetaLicenseAgreementResponse>(this.baseUri + 'v1/betaLicenseAgreements/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/betaLicenseAgreements/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		BetaLicenseAgreements_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/betaLicenseAgreements/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/betaTesterInvitations
		 * @param {BetaTesterInvitationCreateRequest} requestBody BetaTesterInvitation representation
		 * @return {void} 
		 */
		BetaTesterInvitations_create_instance(requestBody: BetaTesterInvitationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaTesterInvitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaTesters
		 * @param {Array<string>} filter_email filter by attribute 'email'
		 * @param {Array<string>} filter_firstName filter by attribute 'firstName'
		 * @param {Array<BetaInviteType>} filter_inviteType filter by attribute 'inviteType'
		 * @param {Array<string>} filter_lastName filter by attribute 'lastName'
		 * @param {Array<string>} filter_apps filter by id(s) of related 'apps'
		 * @param {Array<string>} filter_betaGroups filter by id(s) of related 'betaGroups'
		 * @param {Array<string>} filter_builds filter by id(s) of related 'builds'
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_apps maximum number of related apps returned (when they are included)
		 * @param {number} limit_betaGroups maximum number of related betaGroups returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {BetaTestersResponse} List of BetaTesters
		 */
		BetaTesters_get_collection(filter_email: Array<string> | null | undefined, filter_firstName: Array<string> | null | undefined, filter_inviteType: Array<BetaInviteType> | null | undefined, filter_lastName: Array<string> | null | undefined, filter_apps: Array<string> | null | undefined, filter_betaGroups: Array<string> | null | undefined, filter_builds: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_betaTesters: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_betaGroups: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_apps: number | null | undefined, limit_betaGroups: number | null | undefined, limit_builds: number | null | undefined): Observable<BetaTestersResponse> {
			return this.http.get<BetaTestersResponse>(this.baseUri + 'v1/betaTesters?' + filter_email?.map(z => `filter[email]=${encodeURIComponent(z)}`).join('&') + '&' + filter_firstName?.map(z => `filter[firstName]=${encodeURIComponent(z)}`).join('&') + '&' + filter_inviteType?.map(z => `filter[inviteType]=${z}`).join('&') + '&' + filter_lastName?.map(z => `filter[lastName]=${encodeURIComponent(z)}`).join('&') + '&' + filter_apps?.map(z => `filter[apps]=${encodeURIComponent(z)}`).join('&') + '&' + filter_betaGroups?.map(z => `filter[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + filter_builds?.map(z => `filter[builds]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_apps=' + limit_apps + '&limit_betaGroups=' + limit_betaGroups + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Post v1/betaTesters
		 * @param {BetaTesterCreateRequest} requestBody BetaTester representation
		 * @return {void} 
		 */
		BetaTesters_create_instance(requestBody: BetaTesterCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaTesters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaTesters/{id}
		 * @return {void} 
		 */
		BetaTesters_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaTesters/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaTesters/{id}
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_apps maximum number of related apps returned (when they are included)
		 * @param {number} limit_betaGroups maximum number of related betaGroups returned (when they are included)
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {BetaTesterResponse} Single BetaTester
		 */
		BetaTesters_get_instance(fields_betaTesters: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_betaGroups: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_apps: number | null | undefined, limit_betaGroups: number | null | undefined, limit_builds: number | null | undefined): Observable<BetaTesterResponse> {
			return this.http.get<BetaTesterResponse>(this.baseUri + 'v1/betaTesters/{id}?' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_apps=' + limit_apps + '&limit_betaGroups=' + limit_betaGroups + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Get v1/betaTesters/{id}/apps
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @return {AppsResponse} List of related resources
		 */
		BetaTesters_apps_get_to_many_related(fields_apps: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppsResponse> {
			return this.http.get<AppsResponse>(this.baseUri + 'v1/betaTesters/{id}/apps?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/betaTesters/{id}/betaGroups
		 * @param {Array<string>} fields_betaGroups the fields to include for returned resources of type betaGroups
		 * @param {number} limit maximum resources per page
		 * @return {BetaGroupsResponse} List of related resources
		 */
		BetaTesters_betaGroups_get_to_many_related(fields_betaGroups: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaGroupsResponse> {
			return this.http.get<BetaGroupsResponse>(this.baseUri + 'v1/betaTesters/{id}/betaGroups?' + fields_betaGroups?.map(z => `fields[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/betaTesters/{id}/builds
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {number} limit maximum resources per page
		 * @return {BuildsResponse} List of related resources
		 */
		BetaTesters_builds_get_to_many_related(fields_builds: Array<string> | null | undefined, limit: number | null | undefined): Observable<BuildsResponse> {
			return this.http.get<BuildsResponse>(this.baseUri + 'v1/betaTesters/{id}/builds?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Delete v1/betaTesters/{id}/relationships/apps
		 * @return {void} 
		 */
		BetaTesters_apps_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaTesters/{id}/relationships/apps', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaTesters/{id}/relationships/apps
		 * @param {number} limit maximum resources per page
		 * @return {BetaTesterAppsLinkagesResponse} List of related linkages
		 */
		BetaTesters_apps_get_to_many_relationship(limit: number | null | undefined): Observable<BetaTesterAppsLinkagesResponse> {
			return this.http.get<BetaTesterAppsLinkagesResponse>(this.baseUri + 'v1/betaTesters/{id}/relationships/apps?limit=' + limit, {});
		}

		/**
		 * Delete v1/betaTesters/{id}/relationships/betaGroups
		 * @return {void} 
		 */
		BetaTesters_betaGroups_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaTesters/{id}/relationships/betaGroups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaTesters/{id}/relationships/betaGroups
		 * @param {number} limit maximum resources per page
		 * @return {BetaTesterBetaGroupsLinkagesResponse} List of related linkages
		 */
		BetaTesters_betaGroups_get_to_many_relationship(limit: number | null | undefined): Observable<BetaTesterBetaGroupsLinkagesResponse> {
			return this.http.get<BetaTesterBetaGroupsLinkagesResponse>(this.baseUri + 'v1/betaTesters/{id}/relationships/betaGroups?limit=' + limit, {});
		}

		/**
		 * Post v1/betaTesters/{id}/relationships/betaGroups
		 * @param {BetaTesterBetaGroupsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		BetaTesters_betaGroups_create_to_many_relationship(requestBody: BetaTesterBetaGroupsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaTesters/{id}/relationships/betaGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/betaTesters/{id}/relationships/builds
		 * @return {void} 
		 */
		BetaTesters_builds_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/betaTesters/{id}/relationships/builds', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/betaTesters/{id}/relationships/builds
		 * @param {number} limit maximum resources per page
		 * @return {BetaTesterBuildsLinkagesResponse} List of related linkages
		 */
		BetaTesters_builds_get_to_many_relationship(limit: number | null | undefined): Observable<BetaTesterBuildsLinkagesResponse> {
			return this.http.get<BetaTesterBuildsLinkagesResponse>(this.baseUri + 'v1/betaTesters/{id}/relationships/builds?limit=' + limit, {});
		}

		/**
		 * Post v1/betaTesters/{id}/relationships/builds
		 * @param {BetaTesterBuildsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		BetaTesters_builds_create_to_many_relationship(requestBody: BetaTesterBuildsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/betaTesters/{id}/relationships/builds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/buildBetaDetails
		 * @param {Array<string>} filter_build filter by id(s) of related 'build'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} fields_buildBetaDetails the fields to include for returned resources of type buildBetaDetails
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildBetaDetailsResponse} List of BuildBetaDetails
		 */
		BuildBetaDetails_get_collection(filter_build: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, fields_buildBetaDetails: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BuildBetaDetailsResponse> {
			return this.http.get<BuildBetaDetailsResponse>(this.baseUri + 'v1/buildBetaDetails?' + filter_build?.map(z => `filter[build]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + fields_buildBetaDetails?.map(z => `fields[buildBetaDetails]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/buildBetaDetails/{id}
		 * @param {Array<string>} fields_buildBetaDetails the fields to include for returned resources of type buildBetaDetails
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildBetaDetailResponse} Single BuildBetaDetail
		 */
		BuildBetaDetails_get_instance(fields_buildBetaDetails: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined): Observable<BuildBetaDetailResponse> {
			return this.http.get<BuildBetaDetailResponse>(this.baseUri + 'v1/buildBetaDetails/{id}?' + fields_buildBetaDetails?.map(z => `fields[buildBetaDetails]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/buildBetaDetails/{id}
		 * @param {BuildBetaDetailUpdateRequest} requestBody BuildBetaDetail representation
		 * @return {BuildBetaDetailResponse} Single BuildBetaDetail
		 */
		BuildBetaDetails_update_instance(requestBody: BuildBetaDetailUpdateRequest): Observable<BuildBetaDetailResponse> {
			return this.http.patch<BuildBetaDetailResponse>(this.baseUri + 'v1/buildBetaDetails/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/buildBetaDetails/{id}/build
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @return {BuildResponse} Related resource
		 */
		BuildBetaDetails_build_get_to_one_related(fields_builds: Array<string> | null | undefined): Observable<BuildResponse> {
			return this.http.get<BuildResponse>(this.baseUri + 'v1/buildBetaDetails/{id}/build?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Post v1/buildBetaNotifications
		 * @param {BuildBetaNotificationCreateRequest} requestBody BuildBetaNotification representation
		 * @return {void} 
		 */
		BuildBetaNotifications_create_instance(requestBody: BuildBetaNotificationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/buildBetaNotifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/builds
		 * @param {Array<BetaAppReviewSubmissionAttributesBetaReviewState>} filter_betaAppReviewSubmission_betaReviewState filter by attribute 'betaAppReviewSubmission.betaReviewState'
		 * @param {Array<string>} filter_expired filter by attribute 'expired'
		 * @param {Array<Platform>} filter_preReleaseVersion_platform filter by attribute 'preReleaseVersion.platform'
		 * @param {Array<string>} filter_preReleaseVersion_version filter by attribute 'preReleaseVersion.version'
		 * @param {Array<BuildAttributesProcessingState>} filter_processingState filter by attribute 'processingState'
		 * @param {Array<string>} filter_usesNonExemptEncryption filter by attribute 'usesNonExemptEncryption'
		 * @param {Array<string>} filter_version filter by attribute 'version'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} filter_appStoreVersion filter by id(s) of related 'appStoreVersion'
		 * @param {Array<string>} filter_betaGroups filter by id(s) of related 'betaGroups'
		 * @param {Array<string>} filter_preReleaseVersion filter by id(s) of related 'preReleaseVersion'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
		 * @param {Array<string>} fields_betaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
		 * @param {Array<string>} fields_buildBetaDetails the fields to include for returned resources of type buildBetaDetails
		 * @param {Array<string>} fields_buildIcons the fields to include for returned resources of type buildIcons
		 * @param {Array<string>} fields_perfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_diagnosticSignatures the fields to include for returned resources of type diagnosticSignatures
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {Array<string>} fields_betaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_betaBuildLocalizations maximum number of related betaBuildLocalizations returned (when they are included)
		 * @param {number} limit_icons maximum number of related icons returned (when they are included)
		 * @param {number} limit_individualTesters maximum number of related individualTesters returned (when they are included)
		 * @return {BuildsResponse} List of Builds
		 */
		Builds_get_collection(filter_betaAppReviewSubmission_betaReviewState: Array<BetaAppReviewSubmissionAttributesBetaReviewState> | null | undefined, filter_expired: Array<string> | null | undefined, filter_preReleaseVersion_platform: Array<Platform> | null | undefined, filter_preReleaseVersion_version: Array<string> | null | undefined, filter_processingState: Array<BuildAttributesProcessingState> | null | undefined, filter_usesNonExemptEncryption: Array<string> | null | undefined, filter_version: Array<string> | null | undefined, filter_app: Array<string> | null | undefined, filter_appStoreVersion: Array<string> | null | undefined, filter_betaGroups: Array<string> | null | undefined, filter_preReleaseVersion: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_appEncryptionDeclarations: Array<string> | null | undefined, fields_betaAppReviewSubmissions: Array<string> | null | undefined, fields_buildBetaDetails: Array<string> | null | undefined, fields_buildIcons: Array<string> | null | undefined, fields_perfPowerMetrics: Array<string> | null | undefined, fields_preReleaseVersions: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_diagnosticSignatures: Array<string> | null | undefined, fields_betaTesters: Array<string> | null | undefined, fields_betaBuildLocalizations: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_betaBuildLocalizations: number | null | undefined, limit_icons: number | null | undefined, limit_individualTesters: number | null | undefined): Observable<BuildsResponse> {
			return this.http.get<BuildsResponse>(this.baseUri + 'v1/builds?' + filter_betaAppReviewSubmission_betaReviewState?.map(z => `filter[betaAppReviewSubmission.betaReviewState]=${z}`).join('&') + '&' + filter_expired?.map(z => `filter[expired]=${encodeURIComponent(z)}`).join('&') + '&' + filter_preReleaseVersion_platform?.map(z => `filter[preReleaseVersion.platform]=${z}`).join('&') + '&' + filter_preReleaseVersion_version?.map(z => `filter[preReleaseVersion.version]=${encodeURIComponent(z)}`).join('&') + '&' + filter_processingState?.map(z => `filter[processingState]=${z}`).join('&') + '&' + filter_usesNonExemptEncryption?.map(z => `filter[usesNonExemptEncryption]=${encodeURIComponent(z)}`).join('&') + '&' + filter_version?.map(z => `filter[version]=${encodeURIComponent(z)}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + filter_appStoreVersion?.map(z => `filter[appStoreVersion]=${encodeURIComponent(z)}`).join('&') + '&' + filter_betaGroups?.map(z => `filter[betaGroups]=${encodeURIComponent(z)}`).join('&') + '&' + filter_preReleaseVersion?.map(z => `filter[preReleaseVersion]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appEncryptionDeclarations?.map(z => `fields[appEncryptionDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewSubmissions?.map(z => `fields[betaAppReviewSubmissions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_buildBetaDetails?.map(z => `fields[buildBetaDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_buildIcons?.map(z => `fields[buildIcons]=${encodeURIComponent(z)}`).join('&') + '&' + fields_perfPowerMetrics?.map(z => `fields[perfPowerMetrics]=${encodeURIComponent(z)}`).join('&') + '&' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_diagnosticSignatures?.map(z => `fields[diagnosticSignatures]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaBuildLocalizations?.map(z => `fields[betaBuildLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_betaBuildLocalizations=' + limit_betaBuildLocalizations + '&limit_icons=' + limit_icons + '&limit_individualTesters=' + limit_individualTesters, {});
		}

		/**
		 * Get v1/builds/{id}
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_appEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
		 * @param {Array<string>} fields_betaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
		 * @param {Array<string>} fields_buildBetaDetails the fields to include for returned resources of type buildBetaDetails
		 * @param {Array<string>} fields_buildIcons the fields to include for returned resources of type buildIcons
		 * @param {Array<string>} fields_perfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @param {Array<string>} fields_diagnosticSignatures the fields to include for returned resources of type diagnosticSignatures
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {Array<string>} fields_betaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_betaBuildLocalizations maximum number of related betaBuildLocalizations returned (when they are included)
		 * @param {number} limit_icons maximum number of related icons returned (when they are included)
		 * @param {number} limit_individualTesters maximum number of related individualTesters returned (when they are included)
		 * @return {BuildResponse} Single Build
		 */
		Builds_get_instance(fields_builds: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_appEncryptionDeclarations: Array<string> | null | undefined, fields_betaAppReviewSubmissions: Array<string> | null | undefined, fields_buildBetaDetails: Array<string> | null | undefined, fields_buildIcons: Array<string> | null | undefined, fields_perfPowerMetrics: Array<string> | null | undefined, fields_preReleaseVersions: Array<string> | null | undefined, fields_appStoreVersions: Array<string> | null | undefined, fields_diagnosticSignatures: Array<string> | null | undefined, fields_betaTesters: Array<string> | null | undefined, fields_betaBuildLocalizations: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_betaBuildLocalizations: number | null | undefined, limit_icons: number | null | undefined, limit_individualTesters: number | null | undefined): Observable<BuildResponse> {
			return this.http.get<BuildResponse>(this.baseUri + 'v1/builds/{id}?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_appEncryptionDeclarations?.map(z => `fields[appEncryptionDeclarations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaAppReviewSubmissions?.map(z => `fields[betaAppReviewSubmissions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_buildBetaDetails?.map(z => `fields[buildBetaDetails]=${encodeURIComponent(z)}`).join('&') + '&' + fields_buildIcons?.map(z => `fields[buildIcons]=${encodeURIComponent(z)}`).join('&') + '&' + fields_perfPowerMetrics?.map(z => `fields[perfPowerMetrics]=${encodeURIComponent(z)}`).join('&') + '&' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_diagnosticSignatures?.map(z => `fields[diagnosticSignatures]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&' + fields_betaBuildLocalizations?.map(z => `fields[betaBuildLocalizations]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_betaBuildLocalizations=' + limit_betaBuildLocalizations + '&limit_icons=' + limit_icons + '&limit_individualTesters=' + limit_individualTesters, {});
		}

		/**
		 * Patch v1/builds/{id}
		 * @param {BuildUpdateRequest} requestBody Build representation
		 * @return {BuildResponse} Single Build
		 */
		Builds_update_instance(requestBody: BuildUpdateRequest): Observable<BuildResponse> {
			return this.http.patch<BuildResponse>(this.baseUri + 'v1/builds/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/builds/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		Builds_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/builds/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/appEncryptionDeclaration
		 * @param {Array<string>} fields_appEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
		 * @return {AppEncryptionDeclarationResponse} Related resource
		 */
		Builds_appEncryptionDeclaration_get_to_one_related(fields_appEncryptionDeclarations: Array<string> | null | undefined): Observable<AppEncryptionDeclarationResponse> {
			return this.http.get<AppEncryptionDeclarationResponse>(this.baseUri + 'v1/builds/{id}/appEncryptionDeclaration?' + fields_appEncryptionDeclarations?.map(z => `fields[appEncryptionDeclarations]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/appStoreVersion
		 * @param {Array<string>} fields_appStoreVersions the fields to include for returned resources of type appStoreVersions
		 * @return {AppStoreVersionResponse} Related resource
		 */
		Builds_appStoreVersion_get_to_one_related(fields_appStoreVersions: Array<string> | null | undefined): Observable<AppStoreVersionResponse> {
			return this.http.get<AppStoreVersionResponse>(this.baseUri + 'v1/builds/{id}/appStoreVersion?' + fields_appStoreVersions?.map(z => `fields[appStoreVersions]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/betaAppReviewSubmission
		 * @param {Array<string>} fields_betaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
		 * @return {BetaAppReviewSubmissionResponse} Related resource
		 */
		Builds_betaAppReviewSubmission_get_to_one_related(fields_betaAppReviewSubmissions: Array<string> | null | undefined): Observable<BetaAppReviewSubmissionResponse> {
			return this.http.get<BetaAppReviewSubmissionResponse>(this.baseUri + 'v1/builds/{id}/betaAppReviewSubmission?' + fields_betaAppReviewSubmissions?.map(z => `fields[betaAppReviewSubmissions]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/betaBuildLocalizations
		 * @param {Array<string>} fields_betaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
		 * @param {number} limit maximum resources per page
		 * @return {BetaBuildLocalizationsResponse} List of related resources
		 */
		Builds_betaBuildLocalizations_get_to_many_related(fields_betaBuildLocalizations: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaBuildLocalizationsResponse> {
			return this.http.get<BetaBuildLocalizationsResponse>(this.baseUri + 'v1/builds/{id}/betaBuildLocalizations?' + fields_betaBuildLocalizations?.map(z => `fields[betaBuildLocalizations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/builds/{id}/buildBetaDetail
		 * @param {Array<string>} fields_buildBetaDetails the fields to include for returned resources of type buildBetaDetails
		 * @return {BuildBetaDetailResponse} Related resource
		 */
		Builds_buildBetaDetail_get_to_one_related(fields_buildBetaDetails: Array<string> | null | undefined): Observable<BuildBetaDetailResponse> {
			return this.http.get<BuildBetaDetailResponse>(this.baseUri + 'v1/builds/{id}/buildBetaDetail?' + fields_buildBetaDetails?.map(z => `fields[buildBetaDetails]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/diagnosticSignatures
		 * @param {Array<DiagnosticSignatureAttributesDiagnosticType>} filter_diagnosticType filter by attribute 'diagnosticType'
		 * @param {Array<string>} fields_diagnosticSignatures the fields to include for returned resources of type diagnosticSignatures
		 * @param {number} limit maximum resources per page
		 * @return {DiagnosticSignaturesResponse} List of related resources
		 */
		Builds_diagnosticSignatures_get_to_many_related(filter_diagnosticType: Array<DiagnosticSignatureAttributesDiagnosticType> | null | undefined, fields_diagnosticSignatures: Array<string> | null | undefined, limit: number | null | undefined): Observable<DiagnosticSignaturesResponse> {
			return this.http.get<DiagnosticSignaturesResponse>(this.baseUri + 'v1/builds/{id}/diagnosticSignatures?' + filter_diagnosticType?.map(z => `filter[diagnosticType]=${z}`).join('&') + '&' + fields_diagnosticSignatures?.map(z => `fields[diagnosticSignatures]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/builds/{id}/icons
		 * @param {Array<string>} fields_buildIcons the fields to include for returned resources of type buildIcons
		 * @param {number} limit maximum resources per page
		 * @return {BuildIconsResponse} List of related resources
		 */
		Builds_icons_get_to_many_related(fields_buildIcons: Array<string> | null | undefined, limit: number | null | undefined): Observable<BuildIconsResponse> {
			return this.http.get<BuildIconsResponse>(this.baseUri + 'v1/builds/{id}/icons?' + fields_buildIcons?.map(z => `fields[buildIcons]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/builds/{id}/individualTesters
		 * @param {Array<string>} fields_betaTesters the fields to include for returned resources of type betaTesters
		 * @param {number} limit maximum resources per page
		 * @return {BetaTestersResponse} List of related resources
		 */
		Builds_individualTesters_get_to_many_related(fields_betaTesters: Array<string> | null | undefined, limit: number | null | undefined): Observable<BetaTestersResponse> {
			return this.http.get<BetaTestersResponse>(this.baseUri + 'v1/builds/{id}/individualTesters?' + fields_betaTesters?.map(z => `fields[betaTesters]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/builds/{id}/perfPowerMetrics
		 * @param {Array<string>} filter_deviceType filter by attribute 'deviceType'
		 * @param {Array<PerfPowerMetricAttributesMetricType>} filter_metricType filter by attribute 'metricType'
		 * @param {Array<PerfPowerMetricAttributesPlatform>} filter_platform filter by attribute 'platform'
		 * @return {PerfPowerMetricsResponse} List of related resources
		 */
		Builds_perfPowerMetrics_get_to_many_related(filter_deviceType: Array<string> | null | undefined, filter_metricType: Array<PerfPowerMetricAttributesMetricType> | null | undefined, filter_platform: Array<PerfPowerMetricAttributesPlatform> | null | undefined): Observable<PerfPowerMetricsResponse> {
			return this.http.get<PerfPowerMetricsResponse>(this.baseUri + 'v1/builds/{id}/perfPowerMetrics?' + filter_deviceType?.map(z => `filter[deviceType]=${encodeURIComponent(z)}`).join('&') + '&' + filter_metricType?.map(z => `filter[metricType]=${z}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/preReleaseVersion
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @return {PrereleaseVersionResponse} Related resource
		 */
		Builds_preReleaseVersion_get_to_one_related(fields_preReleaseVersions: Array<string> | null | undefined): Observable<PrereleaseVersionResponse> {
			return this.http.get<PrereleaseVersionResponse>(this.baseUri + 'v1/builds/{id}/preReleaseVersion?' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/builds/{id}/relationships/appEncryptionDeclaration
		 * @return {BuildAppEncryptionDeclarationLinkageResponse} Related linkage
		 */
		Builds_appEncryptionDeclaration_get_to_one_relationship(): Observable<BuildAppEncryptionDeclarationLinkageResponse> {
			return this.http.get<BuildAppEncryptionDeclarationLinkageResponse>(this.baseUri + 'v1/builds/{id}/relationships/appEncryptionDeclaration', {});
		}

		/**
		 * Patch v1/builds/{id}/relationships/appEncryptionDeclaration
		 * @param {BuildAppEncryptionDeclarationLinkageRequest} requestBody Related linkage
		 * @return {void} 
		 */
		Builds_appEncryptionDeclaration_update_to_one_relationship(requestBody: BuildAppEncryptionDeclarationLinkageRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/builds/{id}/relationships/appEncryptionDeclaration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/builds/{id}/relationships/betaGroups
		 * @return {void} 
		 */
		Builds_betaGroups_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/builds/{id}/relationships/betaGroups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/builds/{id}/relationships/betaGroups
		 * @param {BuildBetaGroupsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		Builds_betaGroups_create_to_many_relationship(requestBody: BuildBetaGroupsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/builds/{id}/relationships/betaGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/builds/{id}/relationships/individualTesters
		 * @return {void} 
		 */
		Builds_individualTesters_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/builds/{id}/relationships/individualTesters', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/builds/{id}/relationships/individualTesters
		 * @param {number} limit maximum resources per page
		 * @return {BuildIndividualTestersLinkagesResponse} List of related linkages
		 */
		Builds_individualTesters_get_to_many_relationship(limit: number | null | undefined): Observable<BuildIndividualTestersLinkagesResponse> {
			return this.http.get<BuildIndividualTestersLinkagesResponse>(this.baseUri + 'v1/builds/{id}/relationships/individualTesters?limit=' + limit, {});
		}

		/**
		 * Post v1/builds/{id}/relationships/individualTesters
		 * @param {BuildIndividualTestersLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		Builds_individualTesters_create_to_many_relationship(requestBody: BuildIndividualTestersLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/builds/{id}/relationships/individualTesters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/bundleIdCapabilities
		 * @param {BundleIdCapabilityCreateRequest} requestBody BundleIdCapability representation
		 * @return {void} 
		 */
		BundleIdCapabilities_create_instance(requestBody: BundleIdCapabilityCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/bundleIdCapabilities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/bundleIdCapabilities/{id}
		 * @return {void} 
		 */
		BundleIdCapabilities_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/bundleIdCapabilities/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch v1/bundleIdCapabilities/{id}
		 * @param {BundleIdCapabilityUpdateRequest} requestBody BundleIdCapability representation
		 * @return {BundleIdCapabilityResponse} Single BundleIdCapability
		 */
		BundleIdCapabilities_update_instance(requestBody: BundleIdCapabilityUpdateRequest): Observable<BundleIdCapabilityResponse> {
			return this.http.patch<BundleIdCapabilityResponse>(this.baseUri + 'v1/bundleIdCapabilities/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/bundleIds
		 * @param {Array<string>} filter_identifier filter by attribute 'identifier'
		 * @param {Array<string>} filter_name filter by attribute 'name'
		 * @param {Array<BundleIdAttributesPlatform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_seedId filter by attribute 'seedId'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_bundleIds the fields to include for returned resources of type bundleIds
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_bundleIdCapabilities the fields to include for returned resources of type bundleIdCapabilities
		 * @param {Array<string>} fields_profiles the fields to include for returned resources of type profiles
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_bundleIdCapabilities maximum number of related bundleIdCapabilities returned (when they are included)
		 * @param {number} limit_profiles maximum number of related profiles returned (when they are included)
		 * @return {BundleIdsResponse} List of BundleIds
		 */
		BundleIds_get_collection(filter_identifier: Array<string> | null | undefined, filter_name: Array<string> | null | undefined, filter_platform: Array<BundleIdAttributesPlatform> | null | undefined, filter_seedId: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_bundleIds: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_bundleIdCapabilities: Array<string> | null | undefined, fields_profiles: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_bundleIdCapabilities: number | null | undefined, limit_profiles: number | null | undefined): Observable<BundleIdsResponse> {
			return this.http.get<BundleIdsResponse>(this.baseUri + 'v1/bundleIds?' + filter_identifier?.map(z => `filter[identifier]=${encodeURIComponent(z)}`).join('&') + '&' + filter_name?.map(z => `filter[name]=${encodeURIComponent(z)}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_seedId?.map(z => `filter[seedId]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_bundleIds?.map(z => `fields[bundleIds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_bundleIdCapabilities?.map(z => `fields[bundleIdCapabilities]=${encodeURIComponent(z)}`).join('&') + '&' + fields_profiles?.map(z => `fields[profiles]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_bundleIdCapabilities=' + limit_bundleIdCapabilities + '&limit_profiles=' + limit_profiles, {});
		}

		/**
		 * Post v1/bundleIds
		 * @param {BundleIdCreateRequest} requestBody BundleId representation
		 * @return {void} 
		 */
		BundleIds_create_instance(requestBody: BundleIdCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/bundleIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/bundleIds/{id}
		 * @return {void} 
		 */
		BundleIds_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/bundleIds/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/bundleIds/{id}
		 * @param {Array<string>} fields_bundleIds the fields to include for returned resources of type bundleIds
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_bundleIdCapabilities the fields to include for returned resources of type bundleIdCapabilities
		 * @param {Array<string>} fields_profiles the fields to include for returned resources of type profiles
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_bundleIdCapabilities maximum number of related bundleIdCapabilities returned (when they are included)
		 * @param {number} limit_profiles maximum number of related profiles returned (when they are included)
		 * @return {BundleIdResponse} Single BundleId
		 */
		BundleIds_get_instance(fields_bundleIds: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_bundleIdCapabilities: Array<string> | null | undefined, fields_profiles: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_bundleIdCapabilities: number | null | undefined, limit_profiles: number | null | undefined): Observable<BundleIdResponse> {
			return this.http.get<BundleIdResponse>(this.baseUri + 'v1/bundleIds/{id}?' + fields_bundleIds?.map(z => `fields[bundleIds]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_bundleIdCapabilities?.map(z => `fields[bundleIdCapabilities]=${encodeURIComponent(z)}`).join('&') + '&' + fields_profiles?.map(z => `fields[profiles]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_bundleIdCapabilities=' + limit_bundleIdCapabilities + '&limit_profiles=' + limit_profiles, {});
		}

		/**
		 * Patch v1/bundleIds/{id}
		 * @param {BundleIdUpdateRequest} requestBody BundleId representation
		 * @return {BundleIdResponse} Single BundleId
		 */
		BundleIds_update_instance(requestBody: BundleIdUpdateRequest): Observable<BundleIdResponse> {
			return this.http.patch<BundleIdResponse>(this.baseUri + 'v1/bundleIds/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/bundleIds/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		BundleIds_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/bundleIds/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/bundleIds/{id}/bundleIdCapabilities
		 * @param {Array<string>} fields_bundleIdCapabilities the fields to include for returned resources of type bundleIdCapabilities
		 * @param {number} limit maximum resources per page
		 * @return {BundleIdCapabilitiesResponse} List of related resources
		 */
		BundleIds_bundleIdCapabilities_get_to_many_related(fields_bundleIdCapabilities: Array<string> | null | undefined, limit: number | null | undefined): Observable<BundleIdCapabilitiesResponse> {
			return this.http.get<BundleIdCapabilitiesResponse>(this.baseUri + 'v1/bundleIds/{id}/bundleIdCapabilities?' + fields_bundleIdCapabilities?.map(z => `fields[bundleIdCapabilities]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/bundleIds/{id}/profiles
		 * @param {Array<string>} fields_profiles the fields to include for returned resources of type profiles
		 * @param {number} limit maximum resources per page
		 * @return {ProfilesResponse} List of related resources
		 */
		BundleIds_profiles_get_to_many_related(fields_profiles: Array<string> | null | undefined, limit: number | null | undefined): Observable<ProfilesResponse> {
			return this.http.get<ProfilesResponse>(this.baseUri + 'v1/bundleIds/{id}/profiles?' + fields_profiles?.map(z => `fields[profiles]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/certificates
		 * @param {Array<CertificateAttributesCertificateType>} filter_certificateType filter by attribute 'certificateType'
		 * @param {Array<string>} filter_displayName filter by attribute 'displayName'
		 * @param {Array<string>} filter_serialNumber filter by attribute 'serialNumber'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_certificates the fields to include for returned resources of type certificates
		 * @param {number} limit maximum resources per page
		 * @return {CertificatesResponse} List of Certificates
		 */
		Certificates_get_collection(filter_certificateType: Array<CertificateAttributesCertificateType> | null | undefined, filter_displayName: Array<string> | null | undefined, filter_serialNumber: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_certificates: Array<string> | null | undefined, limit: number | null | undefined): Observable<CertificatesResponse> {
			return this.http.get<CertificatesResponse>(this.baseUri + 'v1/certificates?' + filter_certificateType?.map(z => `filter[certificateType]=${z}`).join('&') + '&' + filter_displayName?.map(z => `filter[displayName]=${encodeURIComponent(z)}`).join('&') + '&' + filter_serialNumber?.map(z => `filter[serialNumber]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_certificates?.map(z => `fields[certificates]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Post v1/certificates
		 * @param {CertificateCreateRequest} requestBody Certificate representation
		 * @return {void} 
		 */
		Certificates_create_instance(requestBody: CertificateCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/certificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/certificates/{id}
		 * @return {void} 
		 */
		Certificates_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/certificates/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/certificates/{id}
		 * @param {Array<string>} fields_certificates the fields to include for returned resources of type certificates
		 * @return {CertificateResponse} Single Certificate
		 */
		Certificates_get_instance(fields_certificates: Array<string> | null | undefined): Observable<CertificateResponse> {
			return this.http.get<CertificateResponse>(this.baseUri + 'v1/certificates/{id}?' + fields_certificates?.map(z => `fields[certificates]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/devices
		 * @param {Array<string>} filter_name filter by attribute 'name'
		 * @param {Array<BundleIdAttributesPlatform>} filter_platform filter by attribute 'platform'
		 * @param {Array<DeviceAttributesStatus>} filter_status filter by attribute 'status'
		 * @param {Array<string>} filter_udid filter by attribute 'udid'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_devices the fields to include for returned resources of type devices
		 * @param {number} limit maximum resources per page
		 * @return {DevicesResponse} List of Devices
		 */
		Devices_get_collection(filter_name: Array<string> | null | undefined, filter_platform: Array<BundleIdAttributesPlatform> | null | undefined, filter_status: Array<DeviceAttributesStatus> | null | undefined, filter_udid: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_devices: Array<string> | null | undefined, limit: number | null | undefined): Observable<DevicesResponse> {
			return this.http.get<DevicesResponse>(this.baseUri + 'v1/devices?' + filter_name?.map(z => `filter[name]=${encodeURIComponent(z)}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_status?.map(z => `filter[status]=${z}`).join('&') + '&' + filter_udid?.map(z => `filter[udid]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_devices?.map(z => `fields[devices]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Post v1/devices
		 * @param {DeviceCreateRequest} requestBody Device representation
		 * @return {void} 
		 */
		Devices_create_instance(requestBody: DeviceCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/devices/{id}
		 * @param {Array<string>} fields_devices the fields to include for returned resources of type devices
		 * @return {DeviceResponse} Single Device
		 */
		Devices_get_instance(fields_devices: Array<string> | null | undefined): Observable<DeviceResponse> {
			return this.http.get<DeviceResponse>(this.baseUri + 'v1/devices/{id}?' + fields_devices?.map(z => `fields[devices]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/devices/{id}
		 * @param {DeviceUpdateRequest} requestBody Device representation
		 * @return {DeviceResponse} Single Device
		 */
		Devices_update_instance(requestBody: DeviceUpdateRequest): Observable<DeviceResponse> {
			return this.http.patch<DeviceResponse>(this.baseUri + 'v1/devices/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/diagnosticSignatures/{id}/logs
		 * @param {number} limit maximum resources per page
		 * @return {DiagnosticLogsResponse} List of related resources
		 */
		DiagnosticSignatures_logs_get_to_many_related(limit: number | null | undefined): Observable<DiagnosticLogsResponse> {
			return this.http.get<DiagnosticLogsResponse>(this.baseUri + 'v1/diagnosticSignatures/{id}/logs?limit=' + limit, {});
		}

		/**
		 * Post v1/endUserLicenseAgreements
		 * @param {EndUserLicenseAgreementCreateRequest} requestBody EndUserLicenseAgreement representation
		 * @return {void} 
		 */
		EndUserLicenseAgreements_create_instance(requestBody: EndUserLicenseAgreementCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/endUserLicenseAgreements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/endUserLicenseAgreements/{id}
		 * @return {void} 
		 */
		EndUserLicenseAgreements_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/endUserLicenseAgreements/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/endUserLicenseAgreements/{id}
		 * @param {Array<string>} fields_endUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {number} limit_territories maximum number of related territories returned (when they are included)
		 * @return {EndUserLicenseAgreementResponse} Single EndUserLicenseAgreement
		 */
		EndUserLicenseAgreements_get_instance(fields_endUserLicenseAgreements: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_territories: Array<string> | null | undefined, limit_territories: number | null | undefined): Observable<EndUserLicenseAgreementResponse> {
			return this.http.get<EndUserLicenseAgreementResponse>(this.baseUri + 'v1/endUserLicenseAgreements/{id}?' + fields_endUserLicenseAgreements?.map(z => `fields[endUserLicenseAgreements]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&limit_territories=' + limit_territories, {});
		}

		/**
		 * Patch v1/endUserLicenseAgreements/{id}
		 * @param {EndUserLicenseAgreementUpdateRequest} requestBody EndUserLicenseAgreement representation
		 * @return {EndUserLicenseAgreementResponse} Single EndUserLicenseAgreement
		 */
		EndUserLicenseAgreements_update_instance(requestBody: EndUserLicenseAgreementUpdateRequest): Observable<EndUserLicenseAgreementResponse> {
			return this.http.patch<EndUserLicenseAgreementResponse>(this.baseUri + 'v1/endUserLicenseAgreements/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/endUserLicenseAgreements/{id}/territories
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {number} limit maximum resources per page
		 * @return {TerritoriesResponse} List of related resources
		 */
		EndUserLicenseAgreements_territories_get_to_many_related(fields_territories: Array<string> | null | undefined, limit: number | null | undefined): Observable<TerritoriesResponse> {
			return this.http.get<TerritoriesResponse>(this.baseUri + 'v1/endUserLicenseAgreements/{id}/territories?' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/financeReports
		 * @param {Array<string>} filter_regionCode filter by attribute 'regionCode'
		 * @param {Array<string>} filter_reportDate filter by attribute 'reportDate'
		 * @param {Array<string>} filter_reportType filter by attribute 'reportType'
		 * @param {Array<string>} filter_vendorNumber filter by attribute 'vendorNumber'
		 * @return {void} List of FinanceReports
		 */
		FinanceReports_get_collection(filter_regionCode: Array<string>, filter_reportDate: Array<string>, filter_reportType: Array<string>, filter_vendorNumber: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/financeReports?' + filter_regionCode.map(z => `filter[regionCode]=${encodeURIComponent(z)}`).join('&') + '&' + filter_reportDate.map(z => `filter[reportDate]=${encodeURIComponent(z)}`).join('&') + '&' + filter_reportType.map(z => `filter[reportType]=${encodeURIComponent(z)}`).join('&') + '&' + filter_vendorNumber.map(z => `filter[vendorNumber]=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/gameCenterEnabledVersions/{id}/compatibleVersions
		 * @param {Array<Platform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_versionString filter by attribute 'versionString'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_gameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {GameCenterEnabledVersionsResponse} List of related resources
		 */
		GameCenterEnabledVersions_compatibleVersions_get_to_many_related(filter_platform: Array<Platform> | null | undefined, filter_versionString: Array<string> | null | undefined, filter_app: Array<string> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_gameCenterEnabledVersions: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined): Observable<GameCenterEnabledVersionsResponse> {
			return this.http.get<GameCenterEnabledVersionsResponse>(this.baseUri + 'v1/gameCenterEnabledVersions/{id}/compatibleVersions?' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_versionString?.map(z => `filter[versionString]=${encodeURIComponent(z)}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_gameCenterEnabledVersions?.map(z => `fields[gameCenterEnabledVersions]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
		 * @return {void} 
		 */
		GameCenterEnabledVersions_compatibleVersions_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
		 * @param {number} limit maximum resources per page
		 * @return {GameCenterEnabledVersionCompatibleVersionsLinkagesResponse} List of related linkages
		 */
		GameCenterEnabledVersions_compatibleVersions_get_to_many_relationship(limit: number | null | undefined): Observable<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse> {
			return this.http.get<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse>(this.baseUri + 'v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions?limit=' + limit, {});
		}

		/**
		 * Patch v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
		 * @param {GameCenterEnabledVersionCompatibleVersionsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		GameCenterEnabledVersions_compatibleVersions_replace_to_many_relationship(requestBody: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
		 * @param {GameCenterEnabledVersionCompatibleVersionsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		GameCenterEnabledVersions_compatibleVersions_create_to_many_relationship(requestBody: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/idfaDeclarations
		 * @param {IdfaDeclarationCreateRequest} requestBody IdfaDeclaration representation
		 * @return {void} 
		 */
		IdfaDeclarations_create_instance(requestBody: IdfaDeclarationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/idfaDeclarations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/idfaDeclarations/{id}
		 * @return {void} 
		 */
		IdfaDeclarations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/idfaDeclarations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch v1/idfaDeclarations/{id}
		 * @param {IdfaDeclarationUpdateRequest} requestBody IdfaDeclaration representation
		 * @return {IdfaDeclarationResponse} Single IdfaDeclaration
		 */
		IdfaDeclarations_update_instance(requestBody: IdfaDeclarationUpdateRequest): Observable<IdfaDeclarationResponse> {
			return this.http.patch<IdfaDeclarationResponse>(this.baseUri + 'v1/idfaDeclarations/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/inAppPurchases/{id}
		 * @param {Array<string>} fields_inAppPurchases the fields to include for returned resources of type inAppPurchases
		 * @param {Array<AppType>} include comma-separated list of relationships to include
		 * @param {number} limit_apps maximum number of related apps returned (when they are included)
		 * @return {InAppPurchaseResponse} Single InAppPurchase
		 */
		InAppPurchases_get_instance(fields_inAppPurchases: Array<string> | null | undefined, include: Array<AppType> | null | undefined, limit_apps: number | null | undefined): Observable<InAppPurchaseResponse> {
			return this.http.get<InAppPurchaseResponse>(this.baseUri + 'v1/inAppPurchases/{id}?' + fields_inAppPurchases?.map(z => `fields[inAppPurchases]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${z}`).join('&') + '&limit_apps=' + limit_apps, {});
		}

		/**
		 * Get v1/preReleaseVersions
		 * @param {Array<string>} filter_builds_expired filter by attribute 'builds.expired'
		 * @param {Array<BuildAttributesProcessingState>} filter_builds_processingState filter by attribute 'builds.processingState'
		 * @param {Array<Platform>} filter_platform filter by attribute 'platform'
		 * @param {Array<string>} filter_version filter by attribute 'version'
		 * @param {Array<string>} filter_app filter by id(s) of related 'app'
		 * @param {Array<string>} filter_builds filter by id(s) of related 'builds'
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {PreReleaseVersionsResponse} List of PreReleaseVersions
		 */
		PreReleaseVersions_get_collection(filter_builds_expired: Array<string> | null | undefined, filter_builds_processingState: Array<BuildAttributesProcessingState> | null | undefined, filter_platform: Array<Platform> | null | undefined, filter_version: Array<string> | null | undefined, filter_app: Array<string> | null | undefined, filter_builds: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_preReleaseVersions: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_builds: number | null | undefined): Observable<PreReleaseVersionsResponse> {
			return this.http.get<PreReleaseVersionsResponse>(this.baseUri + 'v1/preReleaseVersions?' + filter_builds_expired?.map(z => `filter[builds.expired]=${encodeURIComponent(z)}`).join('&') + '&' + filter_builds_processingState?.map(z => `filter[builds.processingState]=${z}`).join('&') + '&' + filter_platform?.map(z => `filter[platform]=${z}`).join('&') + '&' + filter_version?.map(z => `filter[version]=${encodeURIComponent(z)}`).join('&') + '&' + filter_app?.map(z => `filter[app]=${encodeURIComponent(z)}`).join('&') + '&' + filter_builds?.map(z => `filter[builds]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Get v1/preReleaseVersions/{id}
		 * @param {Array<string>} fields_preReleaseVersions the fields to include for returned resources of type preReleaseVersions
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_builds maximum number of related builds returned (when they are included)
		 * @return {PrereleaseVersionResponse} Single PrereleaseVersion
		 */
		PreReleaseVersions_get_instance(fields_preReleaseVersions: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_builds: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_builds: number | null | undefined): Observable<PrereleaseVersionResponse> {
			return this.http.get<PrereleaseVersionResponse>(this.baseUri + 'v1/preReleaseVersions/{id}?' + fields_preReleaseVersions?.map(z => `fields[preReleaseVersions]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_builds=' + limit_builds, {});
		}

		/**
		 * Get v1/preReleaseVersions/{id}/app
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @return {AppResponse} Related resource
		 */
		PreReleaseVersions_app_get_to_one_related(fields_apps: Array<string> | null | undefined): Observable<AppResponse> {
			return this.http.get<AppResponse>(this.baseUri + 'v1/preReleaseVersions/{id}/app?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/preReleaseVersions/{id}/builds
		 * @param {Array<string>} fields_builds the fields to include for returned resources of type builds
		 * @param {number} limit maximum resources per page
		 * @return {BuildsResponse} List of related resources
		 */
		PreReleaseVersions_builds_get_to_many_related(fields_builds: Array<string> | null | undefined, limit: number | null | undefined): Observable<BuildsResponse> {
			return this.http.get<BuildsResponse>(this.baseUri + 'v1/preReleaseVersions/{id}/builds?' + fields_builds?.map(z => `fields[builds]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/profiles
		 * @param {Array<string>} filter_name filter by attribute 'name'
		 * @param {Array<ProfileAttributesProfileState>} filter_profileState filter by attribute 'profileState'
		 * @param {Array<ProfileAttributesProfileType>} filter_profileType filter by attribute 'profileType'
		 * @param {Array<string>} filter_id filter by id(s)
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_profiles the fields to include for returned resources of type profiles
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_certificates the fields to include for returned resources of type certificates
		 * @param {Array<string>} fields_devices the fields to include for returned resources of type devices
		 * @param {Array<string>} fields_bundleIds the fields to include for returned resources of type bundleIds
		 * @param {number} limit_certificates maximum number of related certificates returned (when they are included)
		 * @param {number} limit_devices maximum number of related devices returned (when they are included)
		 * @return {ProfilesResponse} List of Profiles
		 */
		Profiles_get_collection(filter_name: Array<string> | null | undefined, filter_profileState: Array<ProfileAttributesProfileState> | null | undefined, filter_profileType: Array<ProfileAttributesProfileType> | null | undefined, filter_id: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_profiles: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_certificates: Array<string> | null | undefined, fields_devices: Array<string> | null | undefined, fields_bundleIds: Array<string> | null | undefined, limit_certificates: number | null | undefined, limit_devices: number | null | undefined): Observable<ProfilesResponse> {
			return this.http.get<ProfilesResponse>(this.baseUri + 'v1/profiles?' + filter_name?.map(z => `filter[name]=${encodeURIComponent(z)}`).join('&') + '&' + filter_profileState?.map(z => `filter[profileState]=${z}`).join('&') + '&' + filter_profileType?.map(z => `filter[profileType]=${z}`).join('&') + '&' + filter_id?.map(z => `filter[id]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_profiles?.map(z => `fields[profiles]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_certificates?.map(z => `fields[certificates]=${encodeURIComponent(z)}`).join('&') + '&' + fields_devices?.map(z => `fields[devices]=${encodeURIComponent(z)}`).join('&') + '&' + fields_bundleIds?.map(z => `fields[bundleIds]=${encodeURIComponent(z)}`).join('&') + '&limit_certificates=' + limit_certificates + '&limit_devices=' + limit_devices, {});
		}

		/**
		 * Post v1/profiles
		 * @param {ProfileCreateRequest} requestBody Profile representation
		 * @return {void} 
		 */
		Profiles_create_instance(requestBody: ProfileCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/profiles/{id}
		 * @return {void} 
		 */
		Profiles_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/profiles/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/profiles/{id}
		 * @param {Array<string>} fields_profiles the fields to include for returned resources of type profiles
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_certificates the fields to include for returned resources of type certificates
		 * @param {Array<string>} fields_devices the fields to include for returned resources of type devices
		 * @param {Array<string>} fields_bundleIds the fields to include for returned resources of type bundleIds
		 * @param {number} limit_certificates maximum number of related certificates returned (when they are included)
		 * @param {number} limit_devices maximum number of related devices returned (when they are included)
		 * @return {ProfileResponse} Single Profile
		 */
		Profiles_get_instance(fields_profiles: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_certificates: Array<string> | null | undefined, fields_devices: Array<string> | null | undefined, fields_bundleIds: Array<string> | null | undefined, limit_certificates: number | null | undefined, limit_devices: number | null | undefined): Observable<ProfileResponse> {
			return this.http.get<ProfileResponse>(this.baseUri + 'v1/profiles/{id}?' + fields_profiles?.map(z => `fields[profiles]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_certificates?.map(z => `fields[certificates]=${encodeURIComponent(z)}`).join('&') + '&' + fields_devices?.map(z => `fields[devices]=${encodeURIComponent(z)}`).join('&') + '&' + fields_bundleIds?.map(z => `fields[bundleIds]=${encodeURIComponent(z)}`).join('&') + '&limit_certificates=' + limit_certificates + '&limit_devices=' + limit_devices, {});
		}

		/**
		 * Get v1/profiles/{id}/bundleId
		 * @param {Array<string>} fields_bundleIds the fields to include for returned resources of type bundleIds
		 * @return {BundleIdResponse} Related resource
		 */
		Profiles_bundleId_get_to_one_related(fields_bundleIds: Array<string> | null | undefined): Observable<BundleIdResponse> {
			return this.http.get<BundleIdResponse>(this.baseUri + 'v1/profiles/{id}/bundleId?' + fields_bundleIds?.map(z => `fields[bundleIds]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get v1/profiles/{id}/certificates
		 * @param {Array<string>} fields_certificates the fields to include for returned resources of type certificates
		 * @param {number} limit maximum resources per page
		 * @return {CertificatesResponse} List of related resources
		 */
		Profiles_certificates_get_to_many_related(fields_certificates: Array<string> | null | undefined, limit: number | null | undefined): Observable<CertificatesResponse> {
			return this.http.get<CertificatesResponse>(this.baseUri + 'v1/profiles/{id}/certificates?' + fields_certificates?.map(z => `fields[certificates]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/profiles/{id}/devices
		 * @param {Array<string>} fields_devices the fields to include for returned resources of type devices
		 * @param {number} limit maximum resources per page
		 * @return {DevicesResponse} List of related resources
		 */
		Profiles_devices_get_to_many_related(fields_devices: Array<string> | null | undefined, limit: number | null | undefined): Observable<DevicesResponse> {
			return this.http.get<DevicesResponse>(this.baseUri + 'v1/profiles/{id}/devices?' + fields_devices?.map(z => `fields[devices]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Post v1/routingAppCoverages
		 * @param {RoutingAppCoverageCreateRequest} requestBody RoutingAppCoverage representation
		 * @return {void} 
		 */
		RoutingAppCoverages_create_instance(requestBody: RoutingAppCoverageCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/routingAppCoverages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/routingAppCoverages/{id}
		 * @return {void} 
		 */
		RoutingAppCoverages_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/routingAppCoverages/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/routingAppCoverages/{id}
		 * @param {Array<string>} fields_routingAppCoverages the fields to include for returned resources of type routingAppCoverages
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @return {RoutingAppCoverageResponse} Single RoutingAppCoverage
		 */
		RoutingAppCoverages_get_instance(fields_routingAppCoverages: Array<string> | null | undefined, include: Array<string> | null | undefined): Observable<RoutingAppCoverageResponse> {
			return this.http.get<RoutingAppCoverageResponse>(this.baseUri + 'v1/routingAppCoverages/{id}?' + fields_routingAppCoverages?.map(z => `fields[routingAppCoverages]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Patch v1/routingAppCoverages/{id}
		 * @param {RoutingAppCoverageUpdateRequest} requestBody RoutingAppCoverage representation
		 * @return {RoutingAppCoverageResponse} Single RoutingAppCoverage
		 */
		RoutingAppCoverages_update_instance(requestBody: RoutingAppCoverageUpdateRequest): Observable<RoutingAppCoverageResponse> {
			return this.http.patch<RoutingAppCoverageResponse>(this.baseUri + 'v1/routingAppCoverages/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/salesReports
		 * @param {Array<string>} filter_frequency filter by attribute 'frequency'
		 * @param {Array<string>} filter_reportDate filter by attribute 'reportDate'
		 * @param {Array<string>} filter_reportSubType filter by attribute 'reportSubType'
		 * @param {Array<string>} filter_reportType filter by attribute 'reportType'
		 * @param {Array<string>} filter_vendorNumber filter by attribute 'vendorNumber'
		 * @param {Array<string>} filter_version filter by attribute 'version'
		 * @return {void} List of SalesReports
		 */
		SalesReports_get_collection(filter_frequency: Array<string>, filter_reportDate: Array<string> | null | undefined, filter_reportSubType: Array<string>, filter_reportType: Array<string>, filter_vendorNumber: Array<string>, filter_version: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/salesReports?' + filter_frequency.map(z => `filter[frequency]=${encodeURIComponent(z)}`).join('&') + '&' + filter_reportDate?.map(z => `filter[reportDate]=${encodeURIComponent(z)}`).join('&') + '&' + filter_reportSubType.map(z => `filter[reportSubType]=${encodeURIComponent(z)}`).join('&') + '&' + filter_reportType.map(z => `filter[reportType]=${encodeURIComponent(z)}`).join('&') + '&' + filter_vendorNumber.map(z => `filter[vendorNumber]=${encodeURIComponent(z)}`).join('&') + '&' + filter_version?.map(z => `filter[version]=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/territories
		 * @param {Array<string>} fields_territories the fields to include for returned resources of type territories
		 * @param {number} limit maximum resources per page
		 * @return {TerritoriesResponse} List of Territories
		 */
		Territories_get_collection(fields_territories: Array<string> | null | undefined, limit: number | null | undefined): Observable<TerritoriesResponse> {
			return this.http.get<TerritoriesResponse>(this.baseUri + 'v1/territories?' + fields_territories?.map(z => `fields[territories]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/userInvitations
		 * @param {Array<string>} filter_email filter by attribute 'email'
		 * @param {Array<UserRole>} filter_roles filter by attribute 'roles'
		 * @param {Array<string>} filter_visibleApps filter by id(s) of related 'visibleApps'
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_userInvitations the fields to include for returned resources of type userInvitations
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_visibleApps maximum number of related visibleApps returned (when they are included)
		 * @return {UserInvitationsResponse} List of UserInvitations
		 */
		UserInvitations_get_collection(filter_email: Array<string> | null | undefined, filter_roles: Array<UserRole> | null | undefined, filter_visibleApps: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_userInvitations: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_visibleApps: number | null | undefined): Observable<UserInvitationsResponse> {
			return this.http.get<UserInvitationsResponse>(this.baseUri + 'v1/userInvitations?' + filter_email?.map(z => `filter[email]=${encodeURIComponent(z)}`).join('&') + '&' + filter_roles?.map(z => `filter[roles]=${z}`).join('&') + '&' + filter_visibleApps?.map(z => `filter[visibleApps]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_userInvitations?.map(z => `fields[userInvitations]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_visibleApps=' + limit_visibleApps, {});
		}

		/**
		 * Post v1/userInvitations
		 * @param {UserInvitationCreateRequest} requestBody UserInvitation representation
		 * @return {void} 
		 */
		UserInvitations_create_instance(requestBody: UserInvitationCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/userInvitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/userInvitations/{id}
		 * @return {void} 
		 */
		UserInvitations_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/userInvitations/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/userInvitations/{id}
		 * @param {Array<string>} fields_userInvitations the fields to include for returned resources of type userInvitations
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_visibleApps maximum number of related visibleApps returned (when they are included)
		 * @return {UserInvitationResponse} Single UserInvitation
		 */
		UserInvitations_get_instance(fields_userInvitations: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_visibleApps: number | null | undefined): Observable<UserInvitationResponse> {
			return this.http.get<UserInvitationResponse>(this.baseUri + 'v1/userInvitations/{id}?' + fields_userInvitations?.map(z => `fields[userInvitations]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_visibleApps=' + limit_visibleApps, {});
		}

		/**
		 * Get v1/userInvitations/{id}/visibleApps
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @return {AppsResponse} List of related resources
		 */
		UserInvitations_visibleApps_get_to_many_related(fields_apps: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppsResponse> {
			return this.http.get<AppsResponse>(this.baseUri + 'v1/userInvitations/{id}/visibleApps?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}

		/**
		 * Get v1/users
		 * @param {Array<UserRole>} filter_roles filter by attribute 'roles'
		 * @param {Array<string>} filter_username filter by attribute 'username'
		 * @param {Array<string>} filter_visibleApps filter by id(s) of related 'visibleApps'
		 * @param {Array<string>} sort comma-separated list of sort expressions; resources will be sorted as specified
		 * @param {Array<string>} fields_users the fields to include for returned resources of type users
		 * @param {number} limit maximum resources per page
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_visibleApps maximum number of related visibleApps returned (when they are included)
		 * @return {UsersResponse} List of Users
		 */
		Users_get_collection(filter_roles: Array<UserRole> | null | undefined, filter_username: Array<string> | null | undefined, filter_visibleApps: Array<string> | null | undefined, sort: Array<string> | null | undefined, fields_users: Array<string> | null | undefined, limit: number | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_visibleApps: number | null | undefined): Observable<UsersResponse> {
			return this.http.get<UsersResponse>(this.baseUri + 'v1/users?' + filter_roles?.map(z => `filter[roles]=${z}`).join('&') + '&' + filter_username?.map(z => `filter[username]=${encodeURIComponent(z)}`).join('&') + '&' + filter_visibleApps?.map(z => `filter[visibleApps]=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&' + fields_users?.map(z => `fields[users]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_visibleApps=' + limit_visibleApps, {});
		}

		/**
		 * Delete v1/users/{id}
		 * @return {void} 
		 */
		Users_delete_instance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/users/{id}
		 * @param {Array<string>} fields_users the fields to include for returned resources of type users
		 * @param {Array<string>} include comma-separated list of relationships to include
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit_visibleApps maximum number of related visibleApps returned (when they are included)
		 * @return {UserResponse} Single User
		 */
		Users_get_instance(fields_users: Array<string> | null | undefined, include: Array<string> | null | undefined, fields_apps: Array<string> | null | undefined, limit_visibleApps: number | null | undefined): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'v1/users/{id}?' + fields_users?.map(z => `fields[users]=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit_visibleApps=' + limit_visibleApps, {});
		}

		/**
		 * Patch v1/users/{id}
		 * @param {UserUpdateRequest} requestBody User representation
		 * @return {UserResponse} Single User
		 */
		Users_update_instance(requestBody: UserUpdateRequest): Observable<UserResponse> {
			return this.http.patch<UserResponse>(this.baseUri + 'v1/users/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete v1/users/{id}/relationships/visibleApps
		 * @return {void} 
		 */
		Users_visibleApps_delete_to_many_relationship(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/{id}/relationships/visibleApps', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/users/{id}/relationships/visibleApps
		 * @param {number} limit maximum resources per page
		 * @return {UserVisibleAppsLinkagesResponse} List of related linkages
		 */
		Users_visibleApps_get_to_many_relationship(limit: number | null | undefined): Observable<UserVisibleAppsLinkagesResponse> {
			return this.http.get<UserVisibleAppsLinkagesResponse>(this.baseUri + 'v1/users/{id}/relationships/visibleApps?limit=' + limit, {});
		}

		/**
		 * Patch v1/users/{id}/relationships/visibleApps
		 * @param {UserVisibleAppsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		Users_visibleApps_replace_to_many_relationship(requestBody: UserVisibleAppsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/users/{id}/relationships/visibleApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/users/{id}/relationships/visibleApps
		 * @param {UserVisibleAppsLinkagesRequest} requestBody List of related linkages
		 * @return {void} 
		 */
		Users_visibleApps_create_to_many_relationship(requestBody: UserVisibleAppsLinkagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users/{id}/relationships/visibleApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/users/{id}/visibleApps
		 * @param {Array<string>} fields_apps the fields to include for returned resources of type apps
		 * @param {number} limit maximum resources per page
		 * @return {AppsResponse} List of related resources
		 */
		Users_visibleApps_get_to_many_related(fields_apps: Array<string> | null | undefined, limit: number | null | undefined): Observable<AppsResponse> {
			return this.http.get<AppsResponse>(this.baseUri + 'v1/users/{id}/visibleApps?' + fields_apps?.map(z => `fields[apps]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, {});
		}
	}

}

