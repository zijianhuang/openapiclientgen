import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface API2ControllersWebAPIGroceryListControllerDepartmentModel {

		/** Gets or sets the items. */
		items?: string | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerDepartmentModelFormProperties {

		/** Gets or sets the items. */
		items: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerDepartmentModelFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerDepartmentModelFormProperties>({
			items: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest {

		/** Gets or sets the text. */
		text?: string | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestFormProperties {

		/** Gets or sets the text. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest {

		/** Gets or sets the mark as pending. */
		markAsPending?: boolean | null;

		/** Gets or sets the recipe identifier. */
		recipeId?: number | null;

		/** Gets or sets the scale. */
		scale?: number | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestFormProperties {

		/** Gets or sets the mark as pending. */
		markAsPending: FormControl<boolean | null | undefined>,

		/** Gets or sets the recipe identifier. */
		recipeId: FormControl<number | null | undefined>,

		/** Gets or sets the scale. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestFormProperties>({
			markAsPending: new FormControl<boolean | null | undefined>(undefined),
			recipeId: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest {
		list?: BigOvenModelAPIGroceryGroceryList;

		/** Gets or sets the since. */
		since?: string | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestFormProperties {

		/** Gets or sets the since. */
		since: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestFormProperties>({
			since: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIGroceryGroceryList {
		Items?: Array<BigOvenModelAPIGroceryItem>;
		LastModified?: Date | null;
		Recipes?: Array<BigOvenModelAPIRecipeInfo>;
		VersionGuid?: string | null;
	}
	export interface BigOvenModelAPIGroceryGroceryListFormProperties {
		LastModified: FormControl<Date | null | undefined>,
		VersionGuid: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIGroceryGroceryListFormGroup() {
		return new FormGroup<BigOvenModelAPIGroceryGroceryListFormProperties>({
			LastModified: new FormControl<Date | null | undefined>(undefined),
			VersionGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIGroceryItem {
		BigOvenObject?: string | null;
		CreationDate?: Date | null;
		Department?: string | null;
		DisplayQuantity?: string | null;
		GUID?: string | null;
		IsChecked?: boolean | null;
		ItemID?: number | null;
		LastModified?: Date | null;
		LocalStatus?: string | null;
		Name?: string | null;
		Notes?: string | null;
		RecipeID?: number | null;
		ThirdPartyURL?: string | null;
	}
	export interface BigOvenModelAPIGroceryItemFormProperties {
		BigOvenObject: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Department: FormControl<string | null | undefined>,
		DisplayQuantity: FormControl<string | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		IsChecked: FormControl<boolean | null | undefined>,
		ItemID: FormControl<number | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LocalStatus: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ThirdPartyURL: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIGroceryItemFormGroup() {
		return new FormGroup<BigOvenModelAPIGroceryItemFormProperties>({
			BigOvenObject: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Department: new FormControl<string | null | undefined>(undefined),
			DisplayQuantity: new FormControl<string | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			IsChecked: new FormControl<boolean | null | undefined>(undefined),
			ItemID: new FormControl<number | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LocalStatus: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ThirdPartyURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIRecipeInfo {
		BookmarkURL?: string | null;
		Category?: string | null;
		CreationDate?: Date | null;
		Cuisine?: string | null;
		HasVideos?: boolean | null;
		HeroPhotoUrl?: string | null;
		HideFromPublicSearch?: boolean | null;
		ImageURL?: string | null;
		ImageURL120?: string | null;
		IsBookmark?: boolean | null;
		IsPrivate?: boolean | null;
		MaxImageSquare?: number | null;
		Microcategory?: string | null;
		Poster?: BigOvenModelAPIUserInfo;
		QualityScore?: number | null;
		RecipeID?: number | null;
		ReviewCount?: number | null;
		StarRating?: number | null;
		StarRatingIMG?: string | null;
		Subcategory?: string | null;
		Title?: string | null;
		TotalTries?: number | null;
		WebURL?: string | null;
		YieldNumber?: number | null;
	}
	export interface BigOvenModelAPIRecipeInfoFormProperties {
		BookmarkURL: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Cuisine: FormControl<string | null | undefined>,
		HasVideos: FormControl<boolean | null | undefined>,
		HeroPhotoUrl: FormControl<string | null | undefined>,
		HideFromPublicSearch: FormControl<boolean | null | undefined>,
		ImageURL: FormControl<string | null | undefined>,
		ImageURL120: FormControl<string | null | undefined>,
		IsBookmark: FormControl<boolean | null | undefined>,
		IsPrivate: FormControl<boolean | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
		Microcategory: FormControl<string | null | undefined>,
		QualityScore: FormControl<number | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ReviewCount: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		StarRatingIMG: FormControl<string | null | undefined>,
		Subcategory: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TotalTries: FormControl<number | null | undefined>,
		WebURL: FormControl<string | null | undefined>,
		YieldNumber: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenModelAPIRecipeInfoFormGroup() {
		return new FormGroup<BigOvenModelAPIRecipeInfoFormProperties>({
			BookmarkURL: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Cuisine: new FormControl<string | null | undefined>(undefined),
			HasVideos: new FormControl<boolean | null | undefined>(undefined),
			HeroPhotoUrl: new FormControl<string | null | undefined>(undefined),
			HideFromPublicSearch: new FormControl<boolean | null | undefined>(undefined),
			ImageURL: new FormControl<string | null | undefined>(undefined),
			ImageURL120: new FormControl<string | null | undefined>(undefined),
			IsBookmark: new FormControl<boolean | null | undefined>(undefined),
			IsPrivate: new FormControl<boolean | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
			Microcategory: new FormControl<string | null | undefined>(undefined),
			QualityScore: new FormControl<number | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ReviewCount: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			StarRatingIMG: new FormControl<string | null | undefined>(undefined),
			Subcategory: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TotalTries: new FormControl<number | null | undefined>(undefined),
			WebURL: new FormControl<string | null | undefined>(undefined),
			YieldNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIUserInfo {
		FirstName?: string | null;
		ImageUrl48?: string | null;
		IsKitchenHelper?: boolean | null;
		IsPremium?: boolean | null;
		IsUsingRecurly?: boolean | null;
		LastName?: string | null;
		MemberSince?: Date | null;
		PhotoUrl?: string | null;
		PhotoUrl48?: string | null;
		PremiumExpiryDate?: Date | null;
		UserID?: number | null;
		UserName?: string | null;
		WebUrl?: string | null;
	}
	export interface BigOvenModelAPIUserInfoFormProperties {
		FirstName: FormControl<string | null | undefined>,
		ImageUrl48: FormControl<string | null | undefined>,
		IsKitchenHelper: FormControl<boolean | null | undefined>,
		IsPremium: FormControl<boolean | null | undefined>,
		IsUsingRecurly: FormControl<boolean | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		MemberSince: FormControl<Date | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PhotoUrl48: FormControl<string | null | undefined>,
		PremiumExpiryDate: FormControl<Date | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		WebUrl: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIUserInfoFormGroup() {
		return new FormGroup<BigOvenModelAPIUserInfoFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			ImageUrl48: new FormControl<string | null | undefined>(undefined),
			IsKitchenHelper: new FormControl<boolean | null | undefined>(undefined),
			IsPremium: new FormControl<boolean | null | undefined>(undefined),
			IsUsingRecurly: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MemberSince: new FormControl<Date | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PhotoUrl48: new FormControl<string | null | undefined>(undefined),
			PremiumExpiryDate: new FormControl<Date | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			WebUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest {

		/** Gets or sets the department. */
		department?: string | null;

		/** Gets or sets the name. */
		name?: string | null;

		/** Gets or sets the notes. */
		notes?: string | null;

		/** Gets or sets the quantity. */
		quantity?: string | null;

		/** Gets or sets the unit. */
		unit?: string | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestFormProperties {

		/** Gets or sets the department. */
		department: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the notes. */
		notes: FormControl<string | null | undefined>,

		/** Gets or sets the quantity. */
		quantity: FormControl<string | null | undefined>,

		/** Gets or sets the unit. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestFormProperties>({
			department: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest {

		/** Gets or sets the department. */
		department?: string | null;

		/** Gets or sets the unique identifier. */
		guid?: string | null;

		/** Gets or sets the ischecked. */
		ischecked?: boolean | null;

		/** Gets or sets the name. */
		name?: string | null;

		/** Gets or sets the notes. */
		notes?: string | null;

		/** Gets or sets the quantity. */
		quantity?: string | null;

		/** Gets or sets the unit. */
		unit?: string | null;
	}
	export interface API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestFormProperties {

		/** Gets or sets the department. */
		department: FormControl<string | null | undefined>,

		/** Gets or sets the unique identifier. */
		guid: FormControl<string | null | undefined>,

		/** Gets or sets the ischecked. */
		ischecked: FormControl<boolean | null | undefined>,

		/** Gets or sets the name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the notes. */
		notes: FormControl<string | null | undefined>,

		/** Gets or sets the quantity. */
		quantity: FormControl<string | null | undefined>,

		/** Gets or sets the unit. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestFormProperties>({
			department: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			ischecked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIImagesControllerRecipePhotosResponse {

		/** Gets or sets the result count. */
		ResultCount?: number | null;

		/** Gets or sets the results. */
		Results?: Array<BigOvenModelAPI2Photo>;
	}
	export interface API2ControllersWebAPIImagesControllerRecipePhotosResponseFormProperties {

		/** Gets or sets the result count. */
		ResultCount: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIImagesControllerRecipePhotosResponseFormGroup() {
		return new FormGroup<API2ControllersWebAPIImagesControllerRecipePhotosResponseFormProperties>({
			ResultCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2Photo {
		Caption?: string | null;
		CreationDate?: string | null;
		ImageID?: number | null;
		IsPrimary?: boolean | null;
		MaxImageSquare?: number | null;
		PhotoUrl?: string | null;
		Poster?: BigOvenModelAPI2UserInfoTinyx;
	}
	export interface BigOvenModelAPI2PhotoFormProperties {
		Caption: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		ImageID: FormControl<number | null | undefined>,
		IsPrimary: FormControl<boolean | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2PhotoFormGroup() {
		return new FormGroup<BigOvenModelAPI2PhotoFormProperties>({
			Caption: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			ImageID: new FormControl<number | null | undefined>(undefined),
			IsPrimary: new FormControl<boolean | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2UserInfoTinyx {
		FirstName?: string | null;
		LastName?: string | null;
		PhotoUrl?: string | null;
		UserID?: number | null;
		UserName?: string | null;
	}
	export interface BigOvenModelAPI2UserInfoTinyxFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2UserInfoTinyxFormGroup() {
		return new FormGroup<BigOvenModelAPI2UserInfoTinyxFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIMeControllerEatingStyle {

		/** Gets or sets the options. */
		Options?: Array<API2ControllersWebAPIMeControllerOption>;
	}
	export interface API2ControllersWebAPIMeControllerEatingStyleFormProperties {
	}
	export function CreateAPI2ControllersWebAPIMeControllerEatingStyleFormGroup() {
		return new FormGroup<API2ControllersWebAPIMeControllerEatingStyleFormProperties>({
		});

	}

	export interface API2ControllersWebAPIMeControllerOption {

		/** Gets or sets the description. */
		Description?: string | null;

		/** Gets or sets the key. */
		Key?: string | null;
	}
	export interface API2ControllersWebAPIMeControllerOptionFormProperties {

		/** Gets or sets the description. */
		Description: FormControl<string | null | undefined>,

		/** Gets or sets the key. */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIMeControllerOptionFormGroup() {
		return new FormGroup<API2ControllersWebAPIMeControllerOptionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ControllersWebAPIMeControllerPreferenceOptions {
		EatingStyle?: API2ControllersWebAPIMeControllerEatingStyle;
	}
	export interface API2ControllersWebAPIMeControllerPreferenceOptionsFormProperties {
	}
	export function CreateAPI2ControllersWebAPIMeControllerPreferenceOptionsFormGroup() {
		return new FormGroup<API2ControllersWebAPIMeControllerPreferenceOptionsFormProperties>({
		});

	}

	export interface API2ControllersWebAPINoteControllerNoteRequest {

		/** Gets or sets the creation date. */
		CreationDate?: Date | null;

		/** Gets or sets the date. */
		Date?: Date | null;

		/** Gets or sets the date dt. */
		DateDT?: string | null;

		/** Gets or sets the unique identifier. */
		GUID?: string | null;

		/** Gets or sets the identifier. */
		ID?: number | null;

		/** Gets or sets the notes. */
		Notes?: string | null;

		/** Gets or sets the people. */
		People?: string | null;

		/** Gets or sets the recipe identifier. */
		RecipeID?: number | null;

		/** Gets or sets the user identifier. */
		UserID?: number | null;

		/** Gets or sets the variations. */
		Variations?: string | null;
	}
	export interface API2ControllersWebAPINoteControllerNoteRequestFormProperties {

		/** Gets or sets the creation date. */
		CreationDate: FormControl<Date | null | undefined>,

		/** Gets or sets the date. */
		Date: FormControl<Date | null | undefined>,

		/** Gets or sets the date dt. */
		DateDT: FormControl<string | null | undefined>,

		/** Gets or sets the unique identifier. */
		GUID: FormControl<string | null | undefined>,

		/** Gets or sets the identifier. */
		ID: FormControl<number | null | undefined>,

		/** Gets or sets the notes. */
		Notes: FormControl<string | null | undefined>,

		/** Gets or sets the people. */
		People: FormControl<string | null | undefined>,

		/** Gets or sets the recipe identifier. */
		RecipeID: FormControl<number | null | undefined>,

		/** Gets or sets the user identifier. */
		UserID: FormControl<number | null | undefined>,

		/** Gets or sets the variations. */
		Variations: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPINoteControllerNoteRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPINoteControllerNoteRequestFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			DateDT: new FormControl<string | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			People: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Variations: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reply request parameters */
	export interface API2ControllersWebAPIReviewControllerPostReplyReq {

		/** The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames. */
		Comment?: string | null;
	}

	/** Reply request parameters */
	export interface API2ControllersWebAPIReviewControllerPostReplyReqFormProperties {

		/** The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames. */
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIReviewControllerPostReplyReqFormGroup() {
		return new FormGroup<API2ControllersWebAPIReviewControllerPostReplyReqFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload for reviews */
	export interface API2ControllersWebAPIReviewControllerReviewRequest {

		/**
		 * How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it
		 * demand of the cook? Optional.
		 */
		ActiveMinutes?: number | null;

		/** The notes */
		Comment?: string | null;

		/** "yes" or "no" */
		MakeAgain?: string | null;

		/** 1, 2, 3, 4, or 5 */
		StarRating?: number | null;

		/** How long, start to finish, in minutes (integer) did it take? Optional. */
		TotalMinutes?: number | null;
	}

	/** Payload for reviews */
	export interface API2ControllersWebAPIReviewControllerReviewRequestFormProperties {

		/**
		 * How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it
		 * demand of the cook? Optional.
		 */
		ActiveMinutes: FormControl<number | null | undefined>,

		/** The notes */
		Comment: FormControl<string | null | undefined>,

		/** "yes" or "no" */
		MakeAgain: FormControl<string | null | undefined>,

		/** 1, 2, 3, 4, or 5 */
		StarRating: FormControl<number | null | undefined>,

		/** How long, start to finish, in minutes (integer) did it take? Optional. */
		TotalMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIReviewControllerReviewRequestFormGroup() {
		return new FormGroup<API2ControllersWebAPIReviewControllerReviewRequestFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			MakeAgain: new FormControl<string | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development */
	export interface API2ControllersWebAPIReviewControllerReviewRequestLegacy {
		ActiveMinutes?: number | null;
		Comment?: string | null;
		GUID?: string | null;
		MakeAgain?: string | null;
		ParentID?: number | null;
		StarRating?: number | null;
		TotalMinutes?: number | null;
	}

	/** Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development */
	export interface API2ControllersWebAPIReviewControllerReviewRequestLegacyFormProperties {
		ActiveMinutes: FormControl<number | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		MakeAgain: FormControl<string | null | undefined>,
		ParentID: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		TotalMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ControllersWebAPIReviewControllerReviewRequestLegacyFormGroup() {
		return new FormGroup<API2ControllersWebAPIReviewControllerReviewRequestLegacyFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			MakeAgain: new FormControl<string | null | undefined>(undefined),
			ParentID: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface API2GroceryListDepartmentResult {

		/** Gets or sets the dept. */
		dept?: string | null;

		/** Gets or sets the item. */
		item?: string | null;
	}
	export interface API2GroceryListDepartmentResultFormProperties {

		/** Gets or sets the dept. */
		dept: FormControl<string | null | undefined>,

		/** Gets or sets the item. */
		item: FormControl<string | null | undefined>,
	}
	export function CreateAPI2GroceryListDepartmentResultFormGroup() {
		return new FormGroup<API2GroceryListDepartmentResultFormProperties>({
			dept: new FormControl<string | null | undefined>(undefined),
			item: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ModelsAccounting {
		CreditBalance?: number | null;
		MemberSince?: Date | null;
		PremiumExpiryDate?: Date | null;
		UserLevel?: string | null;
	}
	export interface API2ModelsAccountingFormProperties {
		CreditBalance: FormControl<number | null | undefined>,
		MemberSince: FormControl<Date | null | undefined>,
		PremiumExpiryDate: FormControl<Date | null | undefined>,
		UserLevel: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsAccountingFormGroup() {
		return new FormGroup<API2ModelsAccountingFormProperties>({
			CreditBalance: new FormControl<number | null | undefined>(undefined),
			MemberSince: new FormControl<Date | null | undefined>(undefined),
			PremiumExpiryDate: new FormControl<Date | null | undefined>(undefined),
			UserLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An API2 wrapper object for a user */
	export interface API2ModelsBigOvenUser {
		Accounting?: API2ModelsAccounting;

		/** The user-specific authentication token */
		BOAuthToken?: string | null;

		/** Last change log */
		LastChangeLogID?: string | null;

		/** Personal level info -- email, location, etc. */
		Personal?: API2ModelsPersonal;
		Preferences?: API2ModelsPreference;
		Profile?: API2ModelsProfile;
	}

	/** An API2 wrapper object for a user */
	export interface API2ModelsBigOvenUserFormProperties {

		/** The user-specific authentication token */
		BOAuthToken: FormControl<string | null | undefined>,

		/** Last change log */
		LastChangeLogID: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsBigOvenUserFormGroup() {
		return new FormGroup<API2ModelsBigOvenUserFormProperties>({
			BOAuthToken: new FormControl<string | null | undefined>(undefined),
			LastChangeLogID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Personal level info -- email, location, etc. */
	export interface API2ModelsPersonal {
		Email?: string | null;
		Location?: API2ModelsLocation;
	}

	/** Personal level info -- email, location, etc. */
	export interface API2ModelsPersonalFormProperties {
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsPersonalFormGroup() {
		return new FormGroup<API2ModelsPersonalFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ModelsLocation {
		City?: string | null;
		Country?: string | null;
		DMA?: number | null;
	}
	export interface API2ModelsLocationFormProperties {
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		DMA: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ModelsLocationFormGroup() {
		return new FormGroup<API2ModelsLocationFormProperties>({
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			DMA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface API2ModelsPreference {
		EatingStyle?: string | null;
	}
	export interface API2ModelsPreferenceFormProperties {
		EatingStyle: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsPreferenceFormGroup() {
		return new FormGroup<API2ModelsPreferenceFormProperties>({
			EatingStyle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ModelsProfile {
		AboutMe?: string | null;
		BackgroundUrl?: string | null;
		Counts?: API2ModelsCounts;
		FirstName?: string | null;
		FullName?: string | null;
		HomeUrl?: string | null;
		LastName?: string | null;
		PhotoUrl?: string | null;
		UserID?: number | null;
		UserName?: string | null;
	}
	export interface API2ModelsProfileFormProperties {
		AboutMe: FormControl<string | null | undefined>,
		BackgroundUrl: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		HomeUrl: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsProfileFormGroup() {
		return new FormGroup<API2ModelsProfileFormProperties>({
			AboutMe: new FormControl<string | null | undefined>(undefined),
			BackgroundUrl: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			HomeUrl: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface API2ModelsCounts {
		AddedCount?: number | null;
		FollowersCount?: number | null;
		FollowingCount?: number | null;
		PrivateRecipeCount?: number | null;
		PublicRecipeCount?: number | null;
		TotalRecipes?: number | null;
	}
	export interface API2ModelsCountsFormProperties {
		AddedCount: FormControl<number | null | undefined>,
		FollowersCount: FormControl<number | null | undefined>,
		FollowingCount: FormControl<number | null | undefined>,
		PrivateRecipeCount: FormControl<number | null | undefined>,
		PublicRecipeCount: FormControl<number | null | undefined>,
		TotalRecipes: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ModelsCountsFormGroup() {
		return new FormGroup<API2ModelsCountsFormProperties>({
			AddedCount: new FormControl<number | null | undefined>(undefined),
			FollowersCount: new FormControl<number | null | undefined>(undefined),
			FollowingCount: new FormControl<number | null | undefined>(undefined),
			PrivateRecipeCount: new FormControl<number | null | undefined>(undefined),
			PublicRecipeCount: new FormControl<number | null | undefined>(undefined),
			TotalRecipes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface API2ModelsRecipesFeedbackDTO {
		feedback?: string | null;
	}
	export interface API2ModelsRecipesFeedbackDTOFormProperties {
		feedback: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsRecipesFeedbackDTOFormGroup() {
		return new FormGroup<API2ModelsRecipesFeedbackDTOFormProperties>({
			feedback: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DTO used to return a recipe with videos */
	export interface API2ModelsRecipesRecipeResponse {
		ActiveMinutes?: number | null;
		AdTags?: string | null;
		AdminBoost?: number | null;
		AllCategoriesText?: string | null;
		BookmarkImageURL?: string | null;
		BookmarkSiteLogo?: string | null;
		BookmarkURL?: string | null;
		Category?: string | null;
		Collection?: string | null;
		CollectionID?: number | null;
		CreationDate?: Date | null;
		Cuisine?: string | null;
		Description?: string | null;
		FavoriteCount?: number | null;
		ImageSquares?: Array<number>;
		ImageURL?: string | null;
		Ingredients?: Array<BigOvenModelAPIIngredient>;
		IngredientsTextBlock?: string | null;
		Instructions?: string | null;
		IsBookmark?: boolean | null;
		IsPrivate?: boolean | null;
		IsRecipeScan?: boolean | null;
		IsSponsored?: boolean | null;
		LastModified?: Date | null;
		MaxImageSquare?: number | null;
		MedalCount?: number | null;
		MenuCount?: number | null;
		Microcategory?: string | null;
		NotesCount?: number | null;
		NutritionInfo?: BigOvenModelAPINutritionInfo;
		PhotoUrl?: string | null;
		Poster?: BigOvenModelAPIUserInfo;
		PrimaryIngredient?: string | null;
		RecipeID?: number | null;
		ReviewCount?: number | null;
		StarRating?: number | null;
		Steps?: Array<BigOvenModelInstructionStep>;
		Subcategory?: string | null;
		Title?: string | null;
		TotalMinutes?: number | null;
		VariantOfRecipeID?: number | null;
		VerifiedByClass?: string | null;
		VerifiedDateTime?: Date | null;

		/** Gets or sets the recipe videos, i.e. a list of type {API2.Models.Recipes.RecipeVideoResponse} */
		Videos?: Array<API2ModelsRecipesRecipeVideoResponse>;
		WebURL?: string | null;
		YieldNumber?: number | null;
		YieldUnit?: string | null;
	}

	/** DTO used to return a recipe with videos */
	export interface API2ModelsRecipesRecipeResponseFormProperties {
		ActiveMinutes: FormControl<number | null | undefined>,
		AdTags: FormControl<string | null | undefined>,
		AdminBoost: FormControl<number | null | undefined>,
		AllCategoriesText: FormControl<string | null | undefined>,
		BookmarkImageURL: FormControl<string | null | undefined>,
		BookmarkSiteLogo: FormControl<string | null | undefined>,
		BookmarkURL: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Collection: FormControl<string | null | undefined>,
		CollectionID: FormControl<number | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Cuisine: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FavoriteCount: FormControl<number | null | undefined>,
		ImageURL: FormControl<string | null | undefined>,
		IngredientsTextBlock: FormControl<string | null | undefined>,
		Instructions: FormControl<string | null | undefined>,
		IsBookmark: FormControl<boolean | null | undefined>,
		IsPrivate: FormControl<boolean | null | undefined>,
		IsRecipeScan: FormControl<boolean | null | undefined>,
		IsSponsored: FormControl<boolean | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
		MedalCount: FormControl<number | null | undefined>,
		MenuCount: FormControl<number | null | undefined>,
		Microcategory: FormControl<string | null | undefined>,
		NotesCount: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PrimaryIngredient: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ReviewCount: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		Subcategory: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TotalMinutes: FormControl<number | null | undefined>,
		VariantOfRecipeID: FormControl<number | null | undefined>,
		VerifiedByClass: FormControl<string | null | undefined>,
		VerifiedDateTime: FormControl<Date | null | undefined>,
		WebURL: FormControl<string | null | undefined>,
		YieldNumber: FormControl<number | null | undefined>,
		YieldUnit: FormControl<string | null | undefined>,
	}
	export function CreateAPI2ModelsRecipesRecipeResponseFormGroup() {
		return new FormGroup<API2ModelsRecipesRecipeResponseFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			AdTags: new FormControl<string | null | undefined>(undefined),
			AdminBoost: new FormControl<number | null | undefined>(undefined),
			AllCategoriesText: new FormControl<string | null | undefined>(undefined),
			BookmarkImageURL: new FormControl<string | null | undefined>(undefined),
			BookmarkSiteLogo: new FormControl<string | null | undefined>(undefined),
			BookmarkURL: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Collection: new FormControl<string | null | undefined>(undefined),
			CollectionID: new FormControl<number | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Cuisine: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FavoriteCount: new FormControl<number | null | undefined>(undefined),
			ImageURL: new FormControl<string | null | undefined>(undefined),
			IngredientsTextBlock: new FormControl<string | null | undefined>(undefined),
			Instructions: new FormControl<string | null | undefined>(undefined),
			IsBookmark: new FormControl<boolean | null | undefined>(undefined),
			IsPrivate: new FormControl<boolean | null | undefined>(undefined),
			IsRecipeScan: new FormControl<boolean | null | undefined>(undefined),
			IsSponsored: new FormControl<boolean | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
			MedalCount: new FormControl<number | null | undefined>(undefined),
			MenuCount: new FormControl<number | null | undefined>(undefined),
			Microcategory: new FormControl<string | null | undefined>(undefined),
			NotesCount: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PrimaryIngredient: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ReviewCount: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			Subcategory: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
			VariantOfRecipeID: new FormControl<number | null | undefined>(undefined),
			VerifiedByClass: new FormControl<string | null | undefined>(undefined),
			VerifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			WebURL: new FormControl<string | null | undefined>(undefined),
			YieldNumber: new FormControl<number | null | undefined>(undefined),
			YieldUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIIngredient {
		DisplayIndex?: number | null;
		DisplayQuantity?: string | null;
		HTMLName?: string | null;
		IngredientID?: number | null;
		IngredientInfo?: BigOvenModelAPIIngredientInfo;
		IsHeading?: boolean | null;
		IsLinked?: boolean | null;
		MetricDisplayQuantity?: string | null;
		MetricQuantity?: number | null;
		MetricUnit?: string | null;
		Name?: string | null;
		PreparationNotes?: string | null;
		Quantity?: number | null;
		Unit?: string | null;
	}
	export interface BigOvenModelAPIIngredientFormProperties {
		DisplayIndex: FormControl<number | null | undefined>,
		DisplayQuantity: FormControl<string | null | undefined>,
		HTMLName: FormControl<string | null | undefined>,
		IngredientID: FormControl<number | null | undefined>,
		IsHeading: FormControl<boolean | null | undefined>,
		IsLinked: FormControl<boolean | null | undefined>,
		MetricDisplayQuantity: FormControl<string | null | undefined>,
		MetricQuantity: FormControl<number | null | undefined>,
		MetricUnit: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PreparationNotes: FormControl<string | null | undefined>,
		Quantity: FormControl<number | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIIngredientFormGroup() {
		return new FormGroup<BigOvenModelAPIIngredientFormProperties>({
			DisplayIndex: new FormControl<number | null | undefined>(undefined),
			DisplayQuantity: new FormControl<string | null | undefined>(undefined),
			HTMLName: new FormControl<string | null | undefined>(undefined),
			IngredientID: new FormControl<number | null | undefined>(undefined),
			IsHeading: new FormControl<boolean | null | undefined>(undefined),
			IsLinked: new FormControl<boolean | null | undefined>(undefined),
			MetricDisplayQuantity: new FormControl<string | null | undefined>(undefined),
			MetricQuantity: new FormControl<number | null | undefined>(undefined),
			MetricUnit: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PreparationNotes: new FormControl<string | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIIngredientInfo {
		Department?: string | null;
		MasterIngredientID?: number | null;
		Name?: string | null;
		UsuallyOnHand?: boolean | null;
	}
	export interface BigOvenModelAPIIngredientInfoFormProperties {
		Department: FormControl<string | null | undefined>,
		MasterIngredientID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UsuallyOnHand: FormControl<boolean | null | undefined>,
	}
	export function CreateBigOvenModelAPIIngredientInfoFormGroup() {
		return new FormGroup<BigOvenModelAPIIngredientInfoFormProperties>({
			Department: new FormControl<string | null | undefined>(undefined),
			MasterIngredientID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UsuallyOnHand: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPINutritionInfo {
		CaloriesFromFat?: number | null;
		Cholesterol?: number | null;
		CholesterolPct?: number | null;
		DietaryFiber?: number | null;
		DietaryFiberPct?: number | null;
		MonoFat?: number | null;
		PolyFat?: number | null;
		Potassium?: number | null;
		PotassiumPct?: number | null;
		Protein?: number | null;
		ProteinPct?: number | null;
		SatFat?: number | null;
		SatFatPct?: number | null;
		SingularYieldUnit?: string | null;
		Sodium?: number | null;
		SodiumPct?: number | null;
		Sugar?: number | null;
		TotalCalories?: number | null;
		TotalCarbs?: number | null;
		TotalCarbsPct?: number | null;
		TotalFat?: number | null;
		TotalFatPct?: number | null;
		TransFat?: number | null;
	}
	export interface BigOvenModelAPINutritionInfoFormProperties {
		CaloriesFromFat: FormControl<number | null | undefined>,
		Cholesterol: FormControl<number | null | undefined>,
		CholesterolPct: FormControl<number | null | undefined>,
		DietaryFiber: FormControl<number | null | undefined>,
		DietaryFiberPct: FormControl<number | null | undefined>,
		MonoFat: FormControl<number | null | undefined>,
		PolyFat: FormControl<number | null | undefined>,
		Potassium: FormControl<number | null | undefined>,
		PotassiumPct: FormControl<number | null | undefined>,
		Protein: FormControl<number | null | undefined>,
		ProteinPct: FormControl<number | null | undefined>,
		SatFat: FormControl<number | null | undefined>,
		SatFatPct: FormControl<number | null | undefined>,
		SingularYieldUnit: FormControl<string | null | undefined>,
		Sodium: FormControl<number | null | undefined>,
		SodiumPct: FormControl<number | null | undefined>,
		Sugar: FormControl<number | null | undefined>,
		TotalCalories: FormControl<number | null | undefined>,
		TotalCarbs: FormControl<number | null | undefined>,
		TotalCarbsPct: FormControl<number | null | undefined>,
		TotalFat: FormControl<number | null | undefined>,
		TotalFatPct: FormControl<number | null | undefined>,
		TransFat: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenModelAPINutritionInfoFormGroup() {
		return new FormGroup<BigOvenModelAPINutritionInfoFormProperties>({
			CaloriesFromFat: new FormControl<number | null | undefined>(undefined),
			Cholesterol: new FormControl<number | null | undefined>(undefined),
			CholesterolPct: new FormControl<number | null | undefined>(undefined),
			DietaryFiber: new FormControl<number | null | undefined>(undefined),
			DietaryFiberPct: new FormControl<number | null | undefined>(undefined),
			MonoFat: new FormControl<number | null | undefined>(undefined),
			PolyFat: new FormControl<number | null | undefined>(undefined),
			Potassium: new FormControl<number | null | undefined>(undefined),
			PotassiumPct: new FormControl<number | null | undefined>(undefined),
			Protein: new FormControl<number | null | undefined>(undefined),
			ProteinPct: new FormControl<number | null | undefined>(undefined),
			SatFat: new FormControl<number | null | undefined>(undefined),
			SatFatPct: new FormControl<number | null | undefined>(undefined),
			SingularYieldUnit: new FormControl<string | null | undefined>(undefined),
			Sodium: new FormControl<number | null | undefined>(undefined),
			SodiumPct: new FormControl<number | null | undefined>(undefined),
			Sugar: new FormControl<number | null | undefined>(undefined),
			TotalCalories: new FormControl<number | null | undefined>(undefined),
			TotalCarbs: new FormControl<number | null | undefined>(undefined),
			TotalCarbsPct: new FormControl<number | null | undefined>(undefined),
			TotalFat: new FormControl<number | null | undefined>(undefined),
			TotalFatPct: new FormControl<number | null | undefined>(undefined),
			TransFat: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelInstructionStep {
		EndGantt?: number | null;
		StartGantt?: number | null;
		Text?: string | null;
	}
	export interface BigOvenModelInstructionStepFormProperties {
		EndGantt: FormControl<number | null | undefined>,
		StartGantt: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelInstructionStepFormGroup() {
		return new FormGroup<BigOvenModelInstructionStepFormProperties>({
			EndGantt: new FormControl<number | null | undefined>(undefined),
			StartGantt: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DTO used to return the details of a recipe video */
	export interface API2ModelsRecipesRecipeVideoResponse {

		/** Gets or sets the date the video was added. */
		InsertedOn?: Date | null;

		/** Gets or sets a value indicating whether the video is the primary video of the recipe. */
		IsPrimaryVideo?: boolean | null;

		/** Gets or sets the JWPlayer media id. */
		MediaId?: string | null;

		/** Gets or sets the video id. */
		VidId?: number | null;
	}

	/** DTO used to return the details of a recipe video */
	export interface API2ModelsRecipesRecipeVideoResponseFormProperties {

		/** Gets or sets the date the video was added. */
		InsertedOn: FormControl<Date | null | undefined>,

		/** Gets or sets a value indicating whether the video is the primary video of the recipe. */
		IsPrimaryVideo: FormControl<boolean | null | undefined>,

		/** Gets or sets the JWPlayer media id. */
		MediaId: FormControl<string | null | undefined>,

		/** Gets or sets the video id. */
		VidId: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ModelsRecipesRecipeVideoResponseFormGroup() {
		return new FormGroup<API2ModelsRecipesRecipeVideoResponseFormProperties>({
			InsertedOn: new FormControl<Date | null | undefined>(undefined),
			IsPrimaryVideo: new FormControl<boolean | null | undefined>(undefined),
			MediaId: new FormControl<string | null | undefined>(undefined),
			VidId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface API2Result {
		Data?: SystemObject;
		Message?: string | null;
		StatusCode?: number | null;
	}
	export interface API2ResultFormProperties {
		Message: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateAPI2ResultFormGroup() {
		return new FormGroup<API2ResultFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SystemObject {
	}
	export interface SystemObjectFormProperties {
	}
	export function CreateSystemObjectFormGroup() {
		return new FormGroup<SystemObjectFormProperties>({
		});

	}

	export interface BigOvenModelAPIImage {
		Caption?: string | null;
		CreationDate?: string | null;
		ImageID?: number | null;
		ImageSquares?: Array<number>;
		ImageURL?: string | null;
		ImageURL120?: string | null;
		ImageURL128?: string | null;
		ImageURL200?: string | null;
		ImageURL256?: string | null;
		ImageURL48?: string | null;
		ImageURL64?: string | null;
		IsPrimary?: boolean | null;
		MaxImageSquare?: number | null;
		Poster?: BigOvenModelAPIUserInfo;
	}
	export interface BigOvenModelAPIImageFormProperties {
		Caption: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		ImageID: FormControl<number | null | undefined>,
		ImageURL: FormControl<string | null | undefined>,
		ImageURL120: FormControl<string | null | undefined>,
		ImageURL128: FormControl<string | null | undefined>,
		ImageURL200: FormControl<string | null | undefined>,
		ImageURL256: FormControl<string | null | undefined>,
		ImageURL48: FormControl<string | null | undefined>,
		ImageURL64: FormControl<string | null | undefined>,
		IsPrimary: FormControl<boolean | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenModelAPIImageFormGroup() {
		return new FormGroup<BigOvenModelAPIImageFormProperties>({
			Caption: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			ImageID: new FormControl<number | null | undefined>(undefined),
			ImageURL: new FormControl<string | null | undefined>(undefined),
			ImageURL120: new FormControl<string | null | undefined>(undefined),
			ImageURL128: new FormControl<string | null | undefined>(undefined),
			ImageURL200: new FormControl<string | null | undefined>(undefined),
			ImageURL256: new FormControl<string | null | undefined>(undefined),
			ImageURL48: new FormControl<string | null | undefined>(undefined),
			ImageURL64: new FormControl<string | null | undefined>(undefined),
			IsPrimary: new FormControl<boolean | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIRecipe {
		ActiveMinutes?: number | null;
		AdTags?: string | null;
		AdminBoost?: number | null;
		AllCategoriesText?: string | null;
		BookmarkImageURL?: string | null;
		BookmarkSiteLogo?: string | null;
		BookmarkURL?: string | null;
		Category?: string | null;
		Collection?: string | null;
		CollectionID?: number | null;
		CreationDate?: Date | null;
		Cuisine?: string | null;
		Description?: string | null;
		FavoriteCount?: number | null;
		HeroPhotoUrl?: string | null;
		ImageSquares?: Array<number>;
		ImageURL?: string | null;
		Ingredients?: Array<BigOvenModelAPIIngredient>;
		IngredientsTextBlock?: string | null;
		Instructions?: string | null;
		IsBookmark?: boolean | null;
		IsPrivate?: boolean | null;
		IsRecipeScan?: boolean | null;
		IsSponsored?: boolean | null;
		LastModified?: Date | null;
		MaxImageSquare?: number | null;
		MedalCount?: number | null;
		MenuCount?: number | null;
		Microcategory?: string | null;
		NotesCount?: number | null;
		NutritionInfo?: BigOvenModelAPINutritionInfo;
		Poster?: BigOvenModelAPIUserInfo;
		PrimaryIngredient?: string | null;
		RecipeID?: number | null;
		ReviewCount?: number | null;
		StarRating?: number | null;
		Subcategory?: string | null;
		Title?: string | null;
		TotalMinutes?: number | null;
		VariantOfRecipeID?: number | null;
		VerifiedByClass?: string | null;
		VerifiedDateTime?: Date | null;
		WebURL?: string | null;
		YieldNumber?: number | null;
		YieldUnit?: string | null;
	}
	export interface BigOvenModelAPIRecipeFormProperties {
		ActiveMinutes: FormControl<number | null | undefined>,
		AdTags: FormControl<string | null | undefined>,
		AdminBoost: FormControl<number | null | undefined>,
		AllCategoriesText: FormControl<string | null | undefined>,
		BookmarkImageURL: FormControl<string | null | undefined>,
		BookmarkSiteLogo: FormControl<string | null | undefined>,
		BookmarkURL: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Collection: FormControl<string | null | undefined>,
		CollectionID: FormControl<number | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Cuisine: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FavoriteCount: FormControl<number | null | undefined>,
		HeroPhotoUrl: FormControl<string | null | undefined>,
		ImageURL: FormControl<string | null | undefined>,
		IngredientsTextBlock: FormControl<string | null | undefined>,
		Instructions: FormControl<string | null | undefined>,
		IsBookmark: FormControl<boolean | null | undefined>,
		IsPrivate: FormControl<boolean | null | undefined>,
		IsRecipeScan: FormControl<boolean | null | undefined>,
		IsSponsored: FormControl<boolean | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
		MedalCount: FormControl<number | null | undefined>,
		MenuCount: FormControl<number | null | undefined>,
		Microcategory: FormControl<string | null | undefined>,
		NotesCount: FormControl<number | null | undefined>,
		PrimaryIngredient: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ReviewCount: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		Subcategory: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TotalMinutes: FormControl<number | null | undefined>,
		VariantOfRecipeID: FormControl<number | null | undefined>,
		VerifiedByClass: FormControl<string | null | undefined>,
		VerifiedDateTime: FormControl<Date | null | undefined>,
		WebURL: FormControl<string | null | undefined>,
		YieldNumber: FormControl<number | null | undefined>,
		YieldUnit: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIRecipeFormGroup() {
		return new FormGroup<BigOvenModelAPIRecipeFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			AdTags: new FormControl<string | null | undefined>(undefined),
			AdminBoost: new FormControl<number | null | undefined>(undefined),
			AllCategoriesText: new FormControl<string | null | undefined>(undefined),
			BookmarkImageURL: new FormControl<string | null | undefined>(undefined),
			BookmarkSiteLogo: new FormControl<string | null | undefined>(undefined),
			BookmarkURL: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Collection: new FormControl<string | null | undefined>(undefined),
			CollectionID: new FormControl<number | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Cuisine: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FavoriteCount: new FormControl<number | null | undefined>(undefined),
			HeroPhotoUrl: new FormControl<string | null | undefined>(undefined),
			ImageURL: new FormControl<string | null | undefined>(undefined),
			IngredientsTextBlock: new FormControl<string | null | undefined>(undefined),
			Instructions: new FormControl<string | null | undefined>(undefined),
			IsBookmark: new FormControl<boolean | null | undefined>(undefined),
			IsPrivate: new FormControl<boolean | null | undefined>(undefined),
			IsRecipeScan: new FormControl<boolean | null | undefined>(undefined),
			IsSponsored: new FormControl<boolean | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
			MedalCount: new FormControl<number | null | undefined>(undefined),
			MenuCount: new FormControl<number | null | undefined>(undefined),
			Microcategory: new FormControl<string | null | undefined>(undefined),
			NotesCount: new FormControl<number | null | undefined>(undefined),
			PrimaryIngredient: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ReviewCount: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			Subcategory: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
			VariantOfRecipeID: new FormControl<number | null | undefined>(undefined),
			VerifiedByClass: new FormControl<string | null | undefined>(undefined),
			VerifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			WebURL: new FormControl<string | null | undefined>(undefined),
			YieldNumber: new FormControl<number | null | undefined>(undefined),
			YieldUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIRecipeNote {
		CreationDate?: Date | null;
		Date?: string | null;
		DateDT?: Date | null;
		GUID?: string | null;
		ID?: number | null;
		Notes?: string | null;
		People?: string | null;
		RecipeID?: number | null;
		UserID?: number | null;
		Variations?: string | null;
	}
	export interface BigOvenModelAPIRecipeNoteFormProperties {
		CreationDate: FormControl<Date | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateDT: FormControl<Date | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		ID: FormControl<number | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		People: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		Variations: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIRecipeNoteFormGroup() {
		return new FormGroup<BigOvenModelAPIRecipeNoteFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateDT: new FormControl<Date | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			People: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Variations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIRecipeNoteList {
		ResultCount?: number | null;
		Results?: Array<BigOvenModelAPIRecipeNote>;
	}
	export interface BigOvenModelAPIRecipeNoteListFormProperties {
		ResultCount: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenModelAPIRecipeNoteListFormGroup() {
		return new FormGroup<BigOvenModelAPIRecipeNoteListFormProperties>({
			ResultCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIReply {
		Comment?: string | null;
		CreationDate?: Date | null;
		ID?: string | null;
		LastModified?: Date | null;
		Poster?: BigOvenModelAPIUserInfoTiny;
		ReviewID?: string | null;
	}
	export interface BigOvenModelAPIReplyFormProperties {
		Comment: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ID: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		ReviewID: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIReplyFormGroup() {
		return new FormGroup<BigOvenModelAPIReplyFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			ReviewID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIUserInfoTiny {
		FirstName?: string | null;
		LastName?: string | null;
		PhotoUrl?: string | null;
		UserID?: number | null;
		UserName?: string | null;
	}
	export interface BigOvenModelAPIUserInfoTinyFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPIUserInfoTinyFormGroup() {
		return new FormGroup<BigOvenModelAPIUserInfoTinyFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPIReview {
		ActiveMinutes?: number | null;
		Comment?: string | null;
		CreationDate?: Date | null;
		FeaturedReply?: BigOvenModelAPIReply;
		GUID?: string | null;
		ID?: string | null;
		LastModified?: Date | null;
		ParentID?: number | null;
		Poster?: BigOvenModelAPIUserInfo;
		Replies?: Array<BigOvenModelAPIReview>;
		ReplyCount?: number | null;
		ReviewID?: number | null;
		StarRating?: number | null;
		TotalMinutes?: number | null;
	}
	export interface BigOvenModelAPIReviewFormProperties {
		ActiveMinutes: FormControl<number | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		ID: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		ParentID: FormControl<number | null | undefined>,
		ReplyCount: FormControl<number | null | undefined>,
		ReviewID: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		TotalMinutes: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenModelAPIReviewFormGroup() {
		return new FormGroup<BigOvenModelAPIReviewFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			ParentID: new FormControl<number | null | undefined>(undefined),
			ReplyCount: new FormControl<number | null | undefined>(undefined),
			ReviewID: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2CollectionInfo {
		Description?: string | null;
		ID?: number | null;
		IsFiltered?: boolean | null;
		IsSponsored?: boolean | null;
		MobileUrl?: string | null;
		PRO?: boolean | null;
		PhotoUrl?: string | null;
		Results?: Array<BigOvenModelAPI2RecipeInfox>;
		Title?: string | null;
		Token?: string | null;
		WebUrl?: string | null;
	}
	export interface BigOvenModelAPI2CollectionInfoFormProperties {
		Description: FormControl<string | null | undefined>,
		ID: FormControl<number | null | undefined>,
		IsFiltered: FormControl<boolean | null | undefined>,
		IsSponsored: FormControl<boolean | null | undefined>,
		MobileUrl: FormControl<string | null | undefined>,
		PRO: FormControl<boolean | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
		WebUrl: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2CollectionInfoFormGroup() {
		return new FormGroup<BigOvenModelAPI2CollectionInfoFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			IsFiltered: new FormControl<boolean | null | undefined>(undefined),
			IsSponsored: new FormControl<boolean | null | undefined>(undefined),
			MobileUrl: new FormControl<string | null | undefined>(undefined),
			PRO: new FormControl<boolean | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
			WebUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2RecipeInfox {
		Category?: string | null;
		CreationDate?: Date | null;
		Cuisine?: string | null;
		HasVideos?: boolean | null;
		IsBookmark?: boolean | null;
		IsPrivate?: boolean | null;
		IsRecipeScan?: boolean | null;
		Microcategory?: string | null;
		PhotoUrl?: string | null;
		Poster?: BigOvenModelAPI2UserInfoTinyx;
		RecipeID?: number | null;
		ReviewCount?: number | null;
		Servings?: number | null;
		StarRating?: number | null;
		Subcategory?: string | null;
		Title?: string | null;
		TotalTries?: number | null;
		WebURL?: string | null;
	}
	export interface BigOvenModelAPI2RecipeInfoxFormProperties {
		Category: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Cuisine: FormControl<string | null | undefined>,
		HasVideos: FormControl<boolean | null | undefined>,
		IsBookmark: FormControl<boolean | null | undefined>,
		IsPrivate: FormControl<boolean | null | undefined>,
		IsRecipeScan: FormControl<boolean | null | undefined>,
		Microcategory: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ReviewCount: FormControl<number | null | undefined>,
		Servings: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		Subcategory: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TotalTries: FormControl<number | null | undefined>,
		WebURL: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2RecipeInfoxFormGroup() {
		return new FormGroup<BigOvenModelAPI2RecipeInfoxFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Cuisine: new FormControl<string | null | undefined>(undefined),
			HasVideos: new FormControl<boolean | null | undefined>(undefined),
			IsBookmark: new FormControl<boolean | null | undefined>(undefined),
			IsPrivate: new FormControl<boolean | null | undefined>(undefined),
			IsRecipeScan: new FormControl<boolean | null | undefined>(undefined),
			Microcategory: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ReviewCount: new FormControl<number | null | undefined>(undefined),
			Servings: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			Subcategory: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TotalTries: new FormControl<number | null | undefined>(undefined),
			WebURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2GroceryList {
		Items?: Array<BigOvenModelAPIGroceryItem>;
		LastModified?: Date | null;
		Recipes?: Array<BigOvenModelAPI2RecipeInfox>;
		VersionGuid?: string | null;
	}
	export interface BigOvenModelAPI2GroceryListFormProperties {
		LastModified: FormControl<Date | null | undefined>,
		VersionGuid: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2GroceryListFormGroup() {
		return new FormGroup<BigOvenModelAPI2GroceryListFormProperties>({
			LastModified: new FormControl<Date | null | undefined>(undefined),
			VersionGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2Recipe {
		ActiveMinutes?: number | null;
		AdTags?: string | null;
		AdminBoost?: number | null;
		AllCategoriesText?: string | null;
		BookmarkImageURL?: string | null;
		BookmarkSiteLogo?: string | null;
		BookmarkURL?: string | null;
		Category?: string | null;
		Collection?: string | null;
		CollectionID?: number | null;
		CreationDate?: Date | null;
		Cuisine?: string | null;
		Description?: string | null;
		FavoriteCount?: number | null;
		ImageSquares?: Array<number>;
		ImageURL?: string | null;
		Ingredients?: Array<BigOvenModelAPIIngredient>;
		IngredientsTextBlock?: string | null;
		Instructions?: string | null;
		IsBookmark?: boolean | null;
		IsPrivate?: boolean | null;
		IsRecipeScan?: boolean | null;
		IsSponsored?: boolean | null;
		LastModified?: Date | null;
		MaxImageSquare?: number | null;
		MedalCount?: number | null;
		MenuCount?: number | null;
		Microcategory?: string | null;
		NotesCount?: number | null;
		NutritionInfo?: BigOvenModelAPINutritionInfo;
		PhotoUrl?: string | null;
		Poster?: BigOvenModelAPIUserInfo;
		PrimaryIngredient?: string | null;
		RecipeID?: number | null;
		ReviewCount?: number | null;
		StarRating?: number | null;
		Steps?: Array<BigOvenModelInstructionStep>;
		Subcategory?: string | null;
		Title?: string | null;
		TotalMinutes?: number | null;
		VariantOfRecipeID?: number | null;
		VerifiedByClass?: string | null;
		VerifiedDateTime?: Date | null;
		WebURL?: string | null;
		YieldNumber?: number | null;
		YieldUnit?: string | null;
	}
	export interface BigOvenModelAPI2RecipeFormProperties {
		ActiveMinutes: FormControl<number | null | undefined>,
		AdTags: FormControl<string | null | undefined>,
		AdminBoost: FormControl<number | null | undefined>,
		AllCategoriesText: FormControl<string | null | undefined>,
		BookmarkImageURL: FormControl<string | null | undefined>,
		BookmarkSiteLogo: FormControl<string | null | undefined>,
		BookmarkURL: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Collection: FormControl<string | null | undefined>,
		CollectionID: FormControl<number | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Cuisine: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FavoriteCount: FormControl<number | null | undefined>,
		ImageURL: FormControl<string | null | undefined>,
		IngredientsTextBlock: FormControl<string | null | undefined>,
		Instructions: FormControl<string | null | undefined>,
		IsBookmark: FormControl<boolean | null | undefined>,
		IsPrivate: FormControl<boolean | null | undefined>,
		IsRecipeScan: FormControl<boolean | null | undefined>,
		IsSponsored: FormControl<boolean | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		MaxImageSquare: FormControl<number | null | undefined>,
		MedalCount: FormControl<number | null | undefined>,
		MenuCount: FormControl<number | null | undefined>,
		Microcategory: FormControl<string | null | undefined>,
		NotesCount: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PrimaryIngredient: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ReviewCount: FormControl<number | null | undefined>,
		StarRating: FormControl<number | null | undefined>,
		Subcategory: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TotalMinutes: FormControl<number | null | undefined>,
		VariantOfRecipeID: FormControl<number | null | undefined>,
		VerifiedByClass: FormControl<string | null | undefined>,
		VerifiedDateTime: FormControl<Date | null | undefined>,
		WebURL: FormControl<string | null | undefined>,
		YieldNumber: FormControl<number | null | undefined>,
		YieldUnit: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2RecipeFormGroup() {
		return new FormGroup<BigOvenModelAPI2RecipeFormProperties>({
			ActiveMinutes: new FormControl<number | null | undefined>(undefined),
			AdTags: new FormControl<string | null | undefined>(undefined),
			AdminBoost: new FormControl<number | null | undefined>(undefined),
			AllCategoriesText: new FormControl<string | null | undefined>(undefined),
			BookmarkImageURL: new FormControl<string | null | undefined>(undefined),
			BookmarkSiteLogo: new FormControl<string | null | undefined>(undefined),
			BookmarkURL: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Collection: new FormControl<string | null | undefined>(undefined),
			CollectionID: new FormControl<number | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Cuisine: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FavoriteCount: new FormControl<number | null | undefined>(undefined),
			ImageURL: new FormControl<string | null | undefined>(undefined),
			IngredientsTextBlock: new FormControl<string | null | undefined>(undefined),
			Instructions: new FormControl<string | null | undefined>(undefined),
			IsBookmark: new FormControl<boolean | null | undefined>(undefined),
			IsPrivate: new FormControl<boolean | null | undefined>(undefined),
			IsRecipeScan: new FormControl<boolean | null | undefined>(undefined),
			IsSponsored: new FormControl<boolean | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			MaxImageSquare: new FormControl<number | null | undefined>(undefined),
			MedalCount: new FormControl<number | null | undefined>(undefined),
			MenuCount: new FormControl<number | null | undefined>(undefined),
			Microcategory: new FormControl<string | null | undefined>(undefined),
			NotesCount: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PrimaryIngredient: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ReviewCount: new FormControl<number | null | undefined>(undefined),
			StarRating: new FormControl<number | null | undefined>(undefined),
			Subcategory: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TotalMinutes: new FormControl<number | null | undefined>(undefined),
			VariantOfRecipeID: new FormControl<number | null | undefined>(undefined),
			VerifiedByClass: new FormControl<string | null | undefined>(undefined),
			VerifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			WebURL: new FormControl<string | null | undefined>(undefined),
			YieldNumber: new FormControl<number | null | undefined>(undefined),
			YieldUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2RecipeNote {
		CreationDate?: Date | null;
		Date?: string | null;
		DateDT?: Date | null;
		GUID?: string | null;
		ID?: number | null;
		Notes?: string | null;
		People?: string | null;
		RecipeID?: number | null;
		UserID?: number | null;
		Variations?: string | null;
	}
	export interface BigOvenModelAPI2RecipeNoteFormProperties {
		CreationDate: FormControl<Date | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateDT: FormControl<Date | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		ID: FormControl<number | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		People: FormControl<string | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		UserID: FormControl<number | null | undefined>,
		Variations: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2RecipeNoteFormGroup() {
		return new FormGroup<BigOvenModelAPI2RecipeNoteFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateDT: new FormControl<Date | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			People: new FormControl<string | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Variations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelAPI2RecipeSearchResult {
		ResultCount?: number | null;
		Results?: Array<BigOvenModelAPI2RecipeInfox>;
		SpellSuggest?: string | null;
	}
	export interface BigOvenModelAPI2RecipeSearchResultFormProperties {
		ResultCount: FormControl<number | null | undefined>,
		SpellSuggest: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelAPI2RecipeSearchResultFormGroup() {
		return new FormGroup<BigOvenModelAPI2RecipeSearchResultFormProperties>({
			ResultCount: new FormControl<number | null | undefined>(undefined),
			SpellSuggest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelRecipeCategory {
		Category?: string | null;
		DefaultActiveMinutes?: number | null;
		DefaultTotalMinutes?: number | null;
		ID?: number | null;
		ParentID?: number | null;
		PrimaryImage?: string | null;
		ShortDescription?: string | null;
	}
	export interface BigOvenModelRecipeCategoryFormProperties {
		Category: FormControl<string | null | undefined>,
		DefaultActiveMinutes: FormControl<number | null | undefined>,
		DefaultTotalMinutes: FormControl<number | null | undefined>,
		ID: FormControl<number | null | undefined>,
		ParentID: FormControl<number | null | undefined>,
		PrimaryImage: FormControl<string | null | undefined>,
		ShortDescription: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelRecipeCategoryFormGroup() {
		return new FormGroup<BigOvenModelRecipeCategoryFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			DefaultActiveMinutes: new FormControl<number | null | undefined>(undefined),
			DefaultTotalMinutes: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			ParentID: new FormControl<number | null | undefined>(undefined),
			PrimaryImage: new FormControl<string | null | undefined>(undefined),
			ShortDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelRecipeInfoDateTuple2 {
		date?: Date | null;
		recipeInfo?: BigOvenModelAPI2RecipeInfox;
	}
	export interface BigOvenModelRecipeInfoDateTuple2FormProperties {
		date: FormControl<Date | null | undefined>,
	}
	export function CreateBigOvenModelRecipeInfoDateTuple2FormGroup() {
		return new FormGroup<BigOvenModelRecipeInfoDateTuple2FormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelRecipeInfoReviewTuple2 {
		RecipeInfo?: BigOvenModelAPI2RecipeInfox;
		Review?: BigOvenModelAPIReview;
	}
	export interface BigOvenModelRecipeInfoReviewTuple2FormProperties {
	}
	export function CreateBigOvenModelRecipeInfoReviewTuple2FormGroup() {
		return new FormGroup<BigOvenModelRecipeInfoReviewTuple2FormProperties>({
		});

	}

	export interface BigOvenModelRecipeInfoTiny {
		ImageURL?: string | null;
		QualityScore?: number | null;
		RecipeID?: number | null;
		Servings?: number | null;
		Title?: string | null;
	}
	export interface BigOvenModelRecipeInfoTinyFormProperties {
		ImageURL: FormControl<string | null | undefined>,
		QualityScore: FormControl<number | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		Servings: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelRecipeInfoTinyFormGroup() {
		return new FormGroup<BigOvenModelRecipeInfoTinyFormProperties>({
			ImageURL: new FormControl<string | null | undefined>(undefined),
			QualityScore: new FormControl<number | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			Servings: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenModelShoppingListLine {
		DateAdded?: Date | null;
		Dept?: string | null;
		GUID?: string | null;
		HTMLItemName?: string | null;
		IsChecked?: boolean | null;
		ItemName?: string | null;
		LastModified?: Date | null;
		ListID?: number | null;
		MealPlanID?: number | null;
		MealPlanObjectType?: number | null;
		Notes?: string | null;
		PendingAddition?: boolean | null;
		RecipeID?: number | null;
		ShoppingListLineID?: number | null;
		Store?: string | null;
		TextAmt?: string | null;
		ThirdPartyHost?: string | null;
		ThirdPartyTitle?: string | null;
		ThirdPartyURL?: string | null;
	}
	export interface BigOvenModelShoppingListLineFormProperties {
		DateAdded: FormControl<Date | null | undefined>,
		Dept: FormControl<string | null | undefined>,
		GUID: FormControl<string | null | undefined>,
		HTMLItemName: FormControl<string | null | undefined>,
		IsChecked: FormControl<boolean | null | undefined>,
		ItemName: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		ListID: FormControl<number | null | undefined>,
		MealPlanID: FormControl<number | null | undefined>,
		MealPlanObjectType: FormControl<number | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		PendingAddition: FormControl<boolean | null | undefined>,
		RecipeID: FormControl<number | null | undefined>,
		ShoppingListLineID: FormControl<number | null | undefined>,
		Store: FormControl<string | null | undefined>,
		TextAmt: FormControl<string | null | undefined>,
		ThirdPartyHost: FormControl<string | null | undefined>,
		ThirdPartyTitle: FormControl<string | null | undefined>,
		ThirdPartyURL: FormControl<string | null | undefined>,
	}
	export function CreateBigOvenModelShoppingListLineFormGroup() {
		return new FormGroup<BigOvenModelShoppingListLineFormProperties>({
			DateAdded: new FormControl<Date | null | undefined>(undefined),
			Dept: new FormControl<string | null | undefined>(undefined),
			GUID: new FormControl<string | null | undefined>(undefined),
			HTMLItemName: new FormControl<string | null | undefined>(undefined),
			IsChecked: new FormControl<boolean | null | undefined>(undefined),
			ItemName: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			ListID: new FormControl<number | null | undefined>(undefined),
			MealPlanID: new FormControl<number | null | undefined>(undefined),
			MealPlanObjectType: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			PendingAddition: new FormControl<boolean | null | undefined>(undefined),
			RecipeID: new FormControl<number | null | undefined>(undefined),
			ShoppingListLineID: new FormControl<number | null | undefined>(undefined),
			Store: new FormControl<string | null | undefined>(undefined),
			TextAmt: new FormControl<string | null | undefined>(undefined),
			ThirdPartyHost: new FormControl<string | null | undefined>(undefined),
			ThirdPartyTitle: new FormControl<string | null | undefined>(undefined),
			ThirdPartyURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigOvenResult {
		Data?: SystemObject;
		Message?: string | null;
		StatusCode?: number | null;
	}
	export interface BigOvenResultFormProperties {
		Message: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateBigOvenResultFormGroup() {
		return new FormGroup<BigOvenResultFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a recipe collection. A recipe collection is a curated set of recipes.
		 * Get collection/{id}
		 * @param {number} id the collection identifier
		 * @param {number} rpp results per page
		 * @param {number} pg page number (starting with 1)
		 * @return {BigOvenModelAPI2RecipeSearchResult} OK
		 */
		Collection_idGetByRppAndPgAndTestAndSessionForLogging(id: number, rpp: number | null | undefined, pg: number | null | undefined, test: boolean | null | undefined, sessionForLogging: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2RecipeSearchResult> {
			return this.http.get<BigOvenModelAPI2RecipeSearchResult>(this.baseUri + 'collection/' + id + '?rpp=' + rpp + '&pg=' + pg + '&test=' + test + '&sessionForLogging=' + (sessionForLogging == null ? '' : encodeURIComponent(sessionForLogging)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
		 * Get collection/{id}/meta
		 * @param {number} id the collection identifier
		 * @return {BigOvenModelAPI2CollectionInfo} OK
		 */
		Collection_idMetaGet(id: number, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2CollectionInfo> {
			return this.http.get<BigOvenModelAPI2CollectionInfo>(this.baseUri + 'collection/' + id + '/meta', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
		 * Get collections
		 * @return {Array<BigOvenModelAPI2CollectionInfo>} OK
		 */
		CollectionsGetByTest(test: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelAPI2CollectionInfo>> {
			return this.http.get<Array<BigOvenModelAPI2CollectionInfo>>(this.baseUri + 'collections?test=' + (test == null ? '' : encodeURIComponent(test)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete all the items on a grocery list; faster operation than a sync with deleted items.
		 * Delete grocerylist
		 * @return {SystemObject} OK
		 */
		GrocerylistDelete(headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'grocerylist', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the user's grocery list.  User is determined by Basic Authentication.
		 * Get grocerylist
		 * @return {BigOvenModelAPI2GroceryList} OK
		 */
		GrocerylistGet(headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2GroceryList> {
			return this.http.get<BigOvenModelAPI2GroceryList>(this.baseUri + 'grocerylist', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Clears the checked lines.
		 * Post grocerylist/clearcheckedlines
		 * @return {BigOvenModelAPI2GroceryList} OK
		 */
		GrocerylistClearcheckedlinesPost(headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2GroceryList> {
			return this.http.post<BigOvenModelAPI2GroceryList>(this.baseUri + 'grocerylist/clearcheckedlines', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Departmentalize a list of strings -- used for ad-hoc grocery list item addition
		 * Post grocerylist/department
		 * @param {API2ControllersWebAPIGroceryListControllerDepartmentModel} requestBody see DepartmentModel for the request payload
		 * @return {Array<API2GroceryListDepartmentResult>} OK
		 */
		GrocerylistDepartmentPost(requestBody: API2ControllersWebAPIGroceryListControllerDepartmentModel, headersHandler?: () => HttpHeaders): Observable<Array<API2GroceryListDepartmentResult>> {
			return this.http.post<Array<API2GroceryListDepartmentResult>>(this.baseUri + 'grocerylist/department', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add a single line item to the grocery list
		 * Post grocerylist/item
		 * @param {API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest} requestBody name, quantity, unit, notes, department
		 * @return {BigOvenModelShoppingListLine} OK
		 */
		GrocerylistItemPost(requestBody: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest, headersHandler?: () => HttpHeaders): Observable<BigOvenModelShoppingListLine> {
			return this.http.post<BigOvenModelShoppingListLine>(this.baseUri + 'grocerylist/item', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
		 * Delete grocerylist/item/{guid}
		 * @return {SystemObject} OK
		 */
		GrocerylistItem_guidDelete(guid: string, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'grocerylist/item/' + (guid == null ? '' : encodeURIComponent(guid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a grocery item by GUID
		 * Put grocerylist/item/{guid}
		 * @return {SystemObject} OK
		 */
		GrocerylistItem_guidPut(guid: string, requestBody: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.put<SystemObject>(this.baseUri + 'grocerylist/item/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add a single line item to the grocery list
		 * Post grocerylist/line
		 * @param {API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest} requestBody name, quantity, unit, notes, department
		 * @return {BigOvenModelShoppingListLine} OK
		 */
		GrocerylistLinePost(requestBody: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest, headersHandler?: () => HttpHeaders): Observable<BigOvenModelShoppingListLine> {
			return this.http.post<BigOvenModelShoppingListLine>(this.baseUri + 'grocerylist/line', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
		 * the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
		 * Post grocerylist/recipe
		 * @return {SystemObject} OK
		 */
		GrocerylistRecipePost(requestBody: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'grocerylist/recipe', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Synchronize the grocery list.  Call this with a POST to /grocerylist/sync
		 * Post grocerylist/sync
		 * @return {SystemObject} OK
		 */
		GrocerylistSyncPost(requestBody: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'grocerylist/sync', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST: /image/avatar
		 * Testing with Postman (validated 11/20/2015):
		 * 1) Remove the Content-Type header; add authentication information
		 * 2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
		 * change the type of the input from Text to File.  Browse and choose a JPG.
		 * Post image/avatar
		 * @return {SystemObject} Success
		 */
		ImageAvatarPost(headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'image/avatar', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Indexes this instance.
		 * Get me
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MeGet(headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.get<API2ModelsBigOvenUser>(this.baseUri + 'me', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Puts me.
		 * Put me
		 * @param {API2ModelsBigOvenUser} requestBody The req.
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MePut(requestBody: API2ModelsBigOvenUser, headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.put<API2ModelsBigOvenUser>(this.baseUri + 'me', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Puts me personal.
		 * Put me/personal
		 * @param {API2ModelsPersonal} requestBody The req.
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MePersonalPut(requestBody: API2ModelsPersonal, headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.put<API2ModelsBigOvenUser>(this.baseUri + 'me/personal', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Puts me preferences.
		 * Put me/preferences
		 * @param {API2ModelsPreference} requestBody The req.
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MePreferencesPut(requestBody: API2ModelsPreference, headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.put<API2ModelsBigOvenUser>(this.baseUri + 'me/preferences', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the options.
		 * Get me/preferences/options
		 * @return {API2ControllersWebAPIMeControllerPreferenceOptions} OK
		 */
		MePreferencesOptionsGet(headersHandler?: () => HttpHeaders): Observable<API2ControllersWebAPIMeControllerPreferenceOptions> {
			return this.http.get<API2ControllersWebAPIMeControllerPreferenceOptions>(this.baseUri + 'me/preferences/options', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Puts me.
		 * Put me/profile
		 * @param {API2ModelsProfile} requestBody The req.
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MeProfilePut(requestBody: API2ModelsProfile, headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.put<API2ModelsBigOvenUser>(this.baseUri + 'me/profile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Skinnies this instance.
		 * Get me/skinny
		 * @return {API2ModelsBigOvenUser} OK
		 */
		MeSkinnyGet(headersHandler?: () => HttpHeaders): Observable<API2ModelsBigOvenUser> {
			return this.http.get<API2ModelsBigOvenUser>(this.baseUri + 'me/skinny', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new recipe
		 * Post recipe
		 * @return {BigOvenModelAPIRecipe} OK
		 */
		RecipePost(requestBody: BigOvenModelAPIRecipe, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipe> {
			return this.http.post<BigOvenModelAPIRecipe>(this.baseUri + 'recipe', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a recipe
		 * Put recipe
		 * @return {BigOvenModelAPIRecipe} OK
		 */
		RecipePut(requestBody: BigOvenModelAPIRecipe, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipe> {
			return this.http.put<BigOvenModelAPIRecipe>(this.baseUri + 'recipe', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
		 * Get recipe/autocomplete
		 * @return {Array<string>} OK
		 */
		RecipeAutocompleteGetByQueryAndLimit(query: string, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'recipe/autocomplete?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Automatics the complete all recipes.
		 * Get recipe/autocomplete/all
		 * @param {string} query The query.
		 * @param {number} limit The limit.
		 * @return {Array<BigOvenModelRecipeInfoTiny>} OK
		 */
		RecipeAutocompleteAllGetByQueryAndLimit(query: string, limit: number, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelRecipeInfoTiny>> {
			return this.http.get<Array<BigOvenModelRecipeInfoTiny>>(this.baseUri + 'recipe/autocomplete/all?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Automatics the complete my recipes.
		 * Get recipe/autocomplete/mine
		 * @param {string} query The query.
		 * @param {number} limit The limit.
		 * @return {Array<BigOvenModelRecipeInfoTiny>} OK
		 */
		RecipeAutocompleteMineGetByQueryAndLimit(query: string, limit: number, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelRecipeInfoTiny>> {
			return this.http.get<Array<BigOvenModelRecipeInfoTiny>>(this.baseUri + 'recipe/autocomplete/mine?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
		 * Get recipe/categories
		 * @return {Array<BigOvenModelRecipeCategory>} OK
		 */
		RecipeCategoriesGet(headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelRecipeCategory>> {
			return this.http.get<Array<BigOvenModelRecipeCategory>>(this.baseUri + 'recipe/categories', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns last active recipe for the user
		 * Get recipe/get/active/recipe
		 * @return {BigOvenResult} OK
		 */
		RecipeGetActiveRecipeGetByUserName(userName: string, headersHandler?: () => HttpHeaders): Observable<BigOvenResult> {
			return this.http.get<BigOvenResult>(this.baseUri + 'recipe/get/active/recipe?userName=' + (userName == null ? '' : encodeURIComponent(userName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets recipe single step as text
		 * Post recipe/get/saved/step
		 * @return {string} OK
		 */
		RecipeGetSavedStepPostByUserNameAndRecipeIdAndStepId(userName: string, recipeId: number, stepId: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'recipe/get/saved/step?userName=' + (userName == null ? '' : encodeURIComponent(userName)) + '&recipeId=' + recipeId + '&stepId=' + stepId, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Returns stored step number and number of steps in recipe
		 * Post recipe/get/step/number
		 * @return {API2Result} OK
		 */
		RecipeGetStepNumberPostByUserNameAndRecipeId(userName: string, recipeId: number, headersHandler?: () => HttpHeaders): Observable<API2Result> {
			return this.http.post<API2Result>(this.baseUri + 'recipe/get/step/number?userName=' + (userName == null ? '' : encodeURIComponent(userName)) + '&recipeId=' + recipeId, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the pending by user.
		 * Get recipe/photos/pending
		 * @return {API2ControllersWebAPIImagesControllerRecipePhotosResponse} OK
		 */
		RecipePhotosPendingGet(headersHandler?: () => HttpHeaders): Observable<API2ControllersWebAPIImagesControllerRecipePhotosResponse> {
			return this.http.get<API2ControllersWebAPIImagesControllerRecipePhotosResponse>(this.baseUri + 'recipe/photos/pending', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Stores recipe step number and returns saved step data
		 * Post recipe/post/step
		 * @return {BigOvenResult} OK
		 */
		RecipePostStepPostByUserNameAndRecipeIdAndStepId(userName: string, recipeId: number, stepId: number, headersHandler?: () => HttpHeaders): Observable<BigOvenResult> {
			return this.http.post<BigOvenResult>(this.baseUri + 'recipe/post/step?userName=' + (userName == null ? '' : encodeURIComponent(userName)) + '&recipeId=' + recipeId + '&stepId=' + stepId, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
		 * Delete recipe/review/replies/{replyId}
		 * @return {SystemObject} OK
		 */
		RecipeReviewReplies_replyIdDelete(replyId: string, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'recipe/review/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.
		 * Put recipe/review/replies/{replyId}
		 * @return {BigOvenModelAPIReply} OK
		 */
		RecipeReviewReplies_replyIdPut(replyId: string, requestBody: API2ControllersWebAPIReviewControllerPostReplyReq, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReply> {
			return this.http.put<BigOvenModelAPIReply>(this.baseUri + 'recipe/review/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
		 * Recommended display is to list top-level reviews with one featured reply underneath.
		 * Currently, the FeaturedReply is the most recent one for that rating.
		 * Get recipe/review/{reviewId}
		 * @return {BigOvenModelAPIReview} OK
		 */
		RecipeReview_reviewIdGet(reviewId: string, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReview> {
			return this.http.get<BigOvenModelAPIReview>(this.baseUri + 'recipe/review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a given top-level review.
		 * Put recipe/review/{reviewId}
		 * @return {BigOvenModelAPIReview} OK
		 */
		RecipeReview_reviewIdPut(reviewId: string, requestBody: API2ControllersWebAPIReviewControllerReviewRequest, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReview> {
			return this.http.put<BigOvenModelAPIReview>(this.baseUri + 'recipe/review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a paged list of replies for a given review.
		 * Get recipe/review/{reviewId}/replies
		 * @param {number} pg the page (int), starting with 1
		 * @param {number} rpp results per page (int)
		 * @return {Array<BigOvenModelAPIReply>} OK
		 */
		RecipeReview_reviewIdRepliesGetByPgAndRpp(reviewId: string, pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelAPIReply>> {
			return this.http.get<Array<BigOvenModelAPIReply>>(this.baseUri + 'recipe/review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '/replies&pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
		 * Post recipe/review/{reviewId}/replies
		 * @return {BigOvenModelAPIReply} OK
		 */
		RecipeReview_reviewIdRepliesPost(reviewId: string, requestBody: API2ControllersWebAPIReviewControllerPostReplyReq, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReply> {
			return this.http.post<BigOvenModelAPIReply>(this.baseUri + 'recipe/review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '/replies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST an image as a new RecipeScan request
		 * 1)  Fetch the filename -- DONE
		 * 2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
		 * 3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
		 * 4)  Insert the CloudTasks record
		 * 5)  Create the HIT
		 * 6)  Update the CloudTasks record with the HIT ID
		 * 7)  Email the requesing user
		 * 8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
		 * Post recipe/scan
		 * @return {void} 
		 */
		RecipeScanPostByTestAndDevicetypeAndLatAndLng(test: boolean | null | undefined, devicetype: string | null | undefined, lat: number | null | undefined, lng: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'recipe/scan?test=' + test + '&devicetype=' + (devicetype == null ? '' : encodeURIComponent(devicetype)) + '&lat=' + lat + '&lng=' + lng, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
		 * Get recipe/steps/{id}
		 * @param {number} id the Recipe ID to retrieve
		 * @return {BigOvenModelAPI2Recipe} OK
		 */
		RecipeSteps_idGetByPrefetch(id: number, prefetch: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2Recipe> {
			return this.http.get<BigOvenModelAPI2Recipe>(this.baseUri + 'recipe/steps/' + id + '?prefetch=' + prefetch, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Recipe (you must be authenticated as an owner of the recipe)
		 * Delete recipe/{id}
		 * @return {SystemObject} OK
		 */
		Recipe_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'recipe/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
		 * Get recipe/{id}
		 * @param {number} id The Recipe ID to retrieve
		 * @param {boolean} prefetch The prefetch.
		 * @return {BigOvenModelAPI2Recipe} OK
		 */
		Recipe_idGetByPrefetch(id: number, prefetch: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2Recipe> {
			return this.http.get<BigOvenModelAPI2Recipe>(this.baseUri + 'recipe/' + id + '?prefetch=' + prefetch, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Zaps the recipe.
		 * Get recipe/{id}/zap
		 * @param {number} id The identifier.
		 * @return {SystemObject} OK
		 */
		Recipe_idZapGet(id: number, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'recipe/' + id + '/zap', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Feedback on a Recipe -- for internal BigOven editors
		 * Post recipe/{recipeId}/feedback
		 * @param {API2ModelsRecipesFeedbackDTO} requestBody The payload for feedback, which includes the field "feedback"
		 * @return {SystemObject} OK
		 */
		Recipe_recipeIdFeedbackPost(recipeId: number, requestBody: API2ModelsRecipesFeedbackDTO, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'recipe/' + recipeId + '/feedback', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
		 * Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
		 * needs a multipart/mime content header and will not parse JSON in the body along with it.
		 * Testing with Postman (validated 11/20/2015):
		 * 1) Remove the Content-Type header; add authentication information
		 * 2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
		 * change the type of the input from Text to File.  Browse and choose a JPG.
		 * Post recipe/{recipeId}/image
		 * @return {SystemObject} Success
		 */
		Recipe_recipeIdImagePostByCaptionAndLatAndLng(recipeId: string, caption: string | null | undefined, lat: number | null | undefined, lng: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'recipe/' + (recipeId == null ? '' : encodeURIComponent(recipeId)) + '/image&caption=' + (caption == null ? '' : encodeURIComponent(caption)) + '&lat=' + lat + '&lng=' + lng, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
		 * Get recipe/{recipeId}/images
		 * @param {number} recipeId Recipe ID (required)
		 * @return {Array<BigOvenModelAPIImage>} OK
		 */
		Recipe_recipeIdImagesGet(recipeId: number, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelAPIImage>> {
			return this.http.get<Array<BigOvenModelAPIImage>>(this.baseUri + 'recipe/' + recipeId + '/images', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * HTTP POST a new note into the system.
		 * Post recipe/{recipeId}/note
		 * @param {number} recipeId recipeId (int)
		 * @param {API2ControllersWebAPINoteControllerNoteRequest} requestBody a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?)
		 * @return {BigOvenModelAPI2RecipeNote} OK
		 */
		Recipe_recipeIdNotePost(recipeId: number, requestBody: API2ControllersWebAPINoteControllerNoteRequest, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2RecipeNote> {
			return this.http.post<BigOvenModelAPI2RecipeNote>(this.baseUri + 'recipe/' + recipeId + '/note', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a review
		 * do a DELETE Http request of /note/{ID}
		 * Delete recipe/{recipeId}/note/{noteId}
		 * @param {number} recipeId recipeId (int)
		 * @param {number} noteId noteId (int)
		 * @return {SystemObject} OK
		 */
		Recipe_recipeIdNote_noteIdDelete(recipeId: number, noteId: number, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'recipe/' + recipeId + '/note/' + noteId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
		 * Get recipe/{recipeId}/note/{noteId}
		 * @param {number} recipeId recipe identifier (integer)
		 * @param {number} noteId The note ID (note -- it's not the RecipeID)
		 * @return {BigOvenModelAPIRecipeNote} OK
		 */
		Recipe_recipeIdNote_noteIdGet(recipeId: number, noteId: number, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipeNote> {
			return this.http.get<BigOvenModelAPIRecipeNote>(this.baseUri + 'recipe/' + recipeId + '/note/' + noteId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * HTTP PUT (update) a Recipe note (RecipeNote).
		 * Put recipe/{recipeId}/note/{noteId}
		 * @return {BigOvenModelAPIRecipeNote} OK
		 */
		Recipe_recipeIdNote_noteIdPut(recipeId: number, noteId: number, requestBody: API2ControllersWebAPINoteControllerNoteRequest, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipeNote> {
			return this.http.put<BigOvenModelAPIRecipeNote>(this.baseUri + 'recipe/' + recipeId + '/note/' + noteId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * recipe/100/notes
		 * Get recipe/{recipeId}/notes
		 * @param {number} recipeId recipeId (int)
		 * @param {number} pg page (int, starting from 1)
		 * @param {number} rpp recipeId
		 * @return {BigOvenModelAPIRecipeNoteList} OK
		 */
		Recipe_recipeIdNotesGetByPgAndRpp(recipeId: number, pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipeNoteList> {
			return this.http.get<BigOvenModelAPIRecipeNoteList>(this.baseUri + 'recipe/' + recipeId + '/notes?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all the photos for a recipe
		 * Get recipe/{recipeId}/photos
		 * @param {number} recipeId Recipe ID (required)
		 * @return {API2ControllersWebAPIImagesControllerRecipePhotosResponse} OK
		 */
		Recipe_recipeIdPhotosGetByPgAndRpp(recipeId: number, pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<API2ControllersWebAPIImagesControllerRecipePhotosResponse> {
			return this.http.get<API2ControllersWebAPIImagesControllerRecipePhotosResponse>(this.baseUri + 'recipe/' + recipeId + '/photos?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get recipes related to the given recipeId
		 * Get recipe/{recipeId}/related
		 * @param {number} recipeId The recipe id
		 * @param {number} pg The page
		 * @param {number} rpp The results per page
		 * @return {BigOvenModelAPI2RecipeSearchResult} OK
		 */
		Recipe_recipeIdRelatedGetByPgAndRpp(recipeId: number, pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2RecipeSearchResult> {
			return this.http.get<BigOvenModelAPI2RecipeSearchResult>(this.baseUri + 'recipe/' + recipeId + '/related?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers
		 * Get recipe/{recipeId}/review
		 * @return {BigOvenModelAPIReview} OK
		 */
		Recipe_recipeIdReviewGet(recipeId: number, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReview> {
			return this.http.get<BigOvenModelAPIReview>(this.baseUri + 'recipe/' + recipeId + '/review', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
		 * Post recipe/{recipeId}/review
		 * @return {SystemObject} OK
		 */
		Recipe_recipeIdReviewPost(recipeId: number, requestBody: API2ControllersWebAPIReviewControllerReviewRequest, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.post<SystemObject>(this.baseUri + 'recipe/' + recipeId + '/review', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
		 * Delete recipe/{recipeId}/review/{reviewId}
		 * @return {SystemObject} OK
		 */
		Recipe_recipeIdReview_reviewIdDelete(recipeId: number, reviewId: number, headersHandler?: () => HttpHeaders): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'recipe/' + recipeId + '/review/' + reviewId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
		 * Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
		 * We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
		 * an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review
		 * per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
		 * which do NOT carry the "DEPRECATED" flag.
		 * Get recipe/{recipeId}/review/{reviewId}
		 * @param {number} reviewId int
		 * @param {number} recipeId int
		 * @return {BigOvenModelAPIReview} OK
		 */
		Recipe_recipeIdReview_reviewIdGet(reviewId: number, recipeId: number, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReview> {
			return this.http.get<BigOvenModelAPIReview>(this.baseUri + 'recipe/' + recipeId + '/review/' + reviewId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
		 * We are moving to a string-based primary key system, no longer integers, for reviews and replies.
		 * Put recipe/{recipeId}/review/{reviewId}
		 * @param {number} reviewId reviewId (int)
		 * @param {number} recipeId recipeId (int)
		 * @return {BigOvenModelAPIReview} OK
		 */
		Recipe_recipeIdReview_reviewIdPut(reviewId: number, recipeId: number, requestBody: API2ControllersWebAPIReviewControllerReviewRequestLegacy, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIReview> {
			return this.http.put<BigOvenModelAPIReview>(this.baseUri + 'recipe/' + recipeId + '/review/' + reviewId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
		 * Get recipe/{recipeId}/reviews
		 * @param {number} recipeId recipe id (int)
		 * @param {number} pg the page (int), starting with 1
		 * @param {number} rpp results per page (int)
		 * @return {Array<BigOvenModelAPIReview>} OK
		 */
		Recipe_recipeIdReviewsGetByPgAndRpp(recipeId: number, pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelAPIReview>> {
			return this.http.get<Array<BigOvenModelAPIReview>>(this.baseUri + 'recipe/' + recipeId + '/reviews?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
		 * Get recipe/{recipeId}/scans
		 * @param {number} recipeId the recipe identifier (int)
		 * @return {Array<BigOvenModelAPIImage>} OK
		 */
		Recipe_recipeIdScansGet(recipeId: number, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelAPIImage>> {
			return this.http.get<Array<BigOvenModelAPIImage>>(this.baseUri + 'recipe/' + recipeId + '/scans', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
		 * Use any_kw to search across the entire recipe.
		 * If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
		 * If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
		 * If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
		 * To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
		 * To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
		 * All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
		 * So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
		 * If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
		 * Or, you can set username=theirusername
		 * vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
		 * cuisine
		 * photos
		 * filter=added,try,favorites,myrecipes\r\n\r\n
		 * folder=FolderNameCaseSensitive
		 * coll=ID of Collection
		 * Get recipes
		 * @param {string} any_kw Search anywhere in the recipe for the keyword
		 * @param {string} folder Search in a specific folder name for the authenticated user
		 * @param {number} coll Limit to a collection ID number
		 * @param {string} filter optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
		 * @param {string} title_kw Search just in the recipe title for the keyword
		 * @param {number} userId Set the target userid to search their public recipes
		 * @param {string} username Set the target username to search their public recipes
		 * @param {boolean} photos if set to true, limit search results to photos only
		 * @param {boolean} boostmine if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
		 * @param {string} include_cat integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
		 * @param {string} exclude_cat like include_cat, set this to an integer to exclude a specific category
		 * @param {string} include_primarycat csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
		 * @param {string} exclude_primarycat csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
		 * @param {string} include_ing A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
		 * @param {string} exclude_ing A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
		 * @param {string} cuisine Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
		 * @param {string} userset If set to a given username, it'll force the search to filter to just that username
		 * @param {number} servingsMin Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
		 * @param {number} totalMins Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
		 * @param {number} maxIngredients Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
		 * @param {number} minIngredients Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
		 * @param {number} rpp integer; results per page
		 * @param {number} pg integer: the page number
		 * @param {number} vtn when set to 1, limit to vegetarian (Powersearch-capable plan required)
		 * @param {number} vgn when set to 1, limit to vegan (Powersearch-capable plan required)
		 * @param {number} chs when set to 1, limit to contains-cheese (Powersearch-capable plan required)
		 * @param {number} glf when set to 1, limit to gluten-free (Powersearch-capable plan required)
		 * @param {number} ntf when set to 1, limit to nut-free (Powersearch-capable plan required)
		 * @param {number} dyf when set to 1, limit to dairy-free (Powersearch-capable plan required)
		 * @param {number} sff when set to 1, limit to seafood-free (Powersearch-capable plan required)
		 * @param {number} slf when set to 1, limit to shellfish-free (Powersearch-capable plan required)
		 * @param {number} tnf when set to 1, limit to tree-nut free (Powersearch-capable plan required)
		 * @param {number} wmf when set to 1, limit to white-meat free (Powersearch-capable plan required)
		 * @param {number} rmf when set to 1, limit to red-meat free (Powersearch-capable plan required)
		 * @param {number} cps when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
		 * @param {number} champion optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
		 * @param {boolean} synonyms optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)
		 * @return {BigOvenModelAPI2RecipeSearchResult} OK
		 */
		RecipesGetByAny_kwAndFolderAndCollAndFilterAndTitle_kwAndUserIdAndUsernameAndTokenAndPhotosAndBoostmineAndInclude_catAndExclude_catAndInclude_primarycatAndExclude_primarycatAndInclude_ingAndExclude_ingAndCuisineAndDbAndUsersetAndServingsMinAndTotalMinsAndMaxIngredientsAndMinIngredientsAndRppAndPgAndVtnAndVgnAndChsAndGlfAndNtfAndDyfAndSffAndSlfAndTnfAndWmfAndRmfAndCpsAndChampionAndSynonyms(any_kw: string | null | undefined, folder: string | null | undefined, coll: number | null | undefined, filter: string | null | undefined, title_kw: string | null | undefined, userId: number | null | undefined, username: string | null | undefined, token: string | null | undefined, photos: boolean | null | undefined, boostmine: boolean | null | undefined, include_cat: string | null | undefined, exclude_cat: string | null | undefined, include_primarycat: string | null | undefined, exclude_primarycat: string | null | undefined, include_ing: string | null | undefined, exclude_ing: string | null | undefined, cuisine: string | null | undefined, db: string | null | undefined, userset: string | null | undefined, servingsMin: number | null | undefined, totalMins: number | null | undefined, maxIngredients: number | null | undefined, minIngredients: number | null | undefined, rpp: number | null | undefined, pg: number | null | undefined, vtn: number | null | undefined, vgn: number | null | undefined, chs: number | null | undefined, glf: number | null | undefined, ntf: number | null | undefined, dyf: number | null | undefined, sff: number | null | undefined, slf: number | null | undefined, tnf: number | null | undefined, wmf: number | null | undefined, rmf: number | null | undefined, cps: number | null | undefined, champion: number | null | undefined, synonyms: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2RecipeSearchResult> {
			return this.http.get<BigOvenModelAPI2RecipeSearchResult>(this.baseUri + 'recipes?any_kw=' + (any_kw == null ? '' : encodeURIComponent(any_kw)) + '&folder=' + (folder == null ? '' : encodeURIComponent(folder)) + '&coll=' + coll + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&title_kw=' + (title_kw == null ? '' : encodeURIComponent(title_kw)) + '&userId=' + userId + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&photos=' + photos + '&boostmine=' + boostmine + '&include_cat=' + (include_cat == null ? '' : encodeURIComponent(include_cat)) + '&exclude_cat=' + (exclude_cat == null ? '' : encodeURIComponent(exclude_cat)) + '&include_primarycat=' + (include_primarycat == null ? '' : encodeURIComponent(include_primarycat)) + '&exclude_primarycat=' + (exclude_primarycat == null ? '' : encodeURIComponent(exclude_primarycat)) + '&include_ing=' + (include_ing == null ? '' : encodeURIComponent(include_ing)) + '&exclude_ing=' + (exclude_ing == null ? '' : encodeURIComponent(exclude_ing)) + '&cuisine=' + (cuisine == null ? '' : encodeURIComponent(cuisine)) + '&db=' + (db == null ? '' : encodeURIComponent(db)) + '&userset=' + (userset == null ? '' : encodeURIComponent(userset)) + '&servingsMin=' + servingsMin + '&totalMins=' + totalMins + '&maxIngredients=' + maxIngredients + '&minIngredients=' + minIngredients + '&rpp=' + rpp + '&pg=' + pg + '&vtn=' + vtn + '&vgn=' + vgn + '&chs=' + chs + '&glf=' + glf + '&ntf=' + ntf + '&dyf=' + dyf + '&sff=' + sff + '&slf=' + slf + '&tnf=' + tnf + '&wmf=' + wmf + '&rmf=' + rmf + '&cps=' + cps + '&champion=' + champion + '&synonyms=' + synonyms, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a random, home-page-quality Recipe.
		 * Get recipes/random
		 * @return {BigOvenModelAPIRecipe} OK
		 */
		RecipesRandomGet(headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPIRecipe> {
			return this.http.get<BigOvenModelAPIRecipe>(this.baseUri + 'recipes/random', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
		 * Get recipes/raves
		 * @param {number} pg page, starting with 1
		 * @param {number} rpp results per page
		 * @return {Array<BigOvenModelRecipeInfoReviewTuple2>} OK
		 */
		RecipesRavesGetByPgAndRpp(pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelRecipeInfoReviewTuple2>> {
			return this.http.get<Array<BigOvenModelRecipeInfoReviewTuple2>>(this.baseUri + 'recipes/raves?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of recipes that the authenticated user has most recently viewed
		 * Get recipes/recentviews
		 * @param {number} pg Page number starting with 1
		 * @param {number} rpp results per page
		 * @return {Array<BigOvenModelRecipeInfoDateTuple2>} OK
		 */
		RecipesRecentviewsGetByPgAndRpp(pg: number | null | undefined, rpp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<BigOvenModelRecipeInfoDateTuple2>> {
			return this.http.get<Array<BigOvenModelRecipeInfoDateTuple2>>(this.baseUri + 'recipes/recentviews?pg=' + pg + '&rpp=' + rpp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
		 * Use any_kw to search across the entire recipe.
		 * If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
		 * If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
		 * If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
		 * To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
		 * To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
		 * All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
		 * So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
		 * If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
		 * Or, you can set username=theirusername
		 * vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
		 * cuisine
		 * photos
		 * filter=added,try,favorites,myrecipes\r\n\r\n
		 * folder=FolderNameCaseSensitive
		 * coll=ID of Collection
		 * Get recipes/top25random
		 * @param {string} any_kw Search anywhere in the recipe for the keyword
		 * @param {string} folder Search in a specific folder name for the authenticated user
		 * @param {number} coll Limit to a collection ID number
		 * @param {string} filter optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
		 * @param {string} title_kw Search just in the recipe title for the keyword
		 * @param {number} userId Set the target userid to search their public recipes
		 * @param {string} username Set the target username to search their public recipes
		 * @param {boolean} photos if set to true, limit search results to photos only
		 * @param {boolean} boostmine if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
		 * @param {string} include_cat integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
		 * @param {string} exclude_cat like include_cat, set this to an integer to exclude a specific category
		 * @param {string} include_primarycat csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
		 * @param {string} exclude_primarycat csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
		 * @param {string} include_ing A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
		 * @param {string} exclude_ing A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
		 * @param {string} cuisine Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
		 * @param {string} userset If set to a given username, it'll force the search to filter to just that username
		 * @param {number} servingsMin Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
		 * @param {number} totalMins Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
		 * @param {number} maxIngredients Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
		 * @param {number} minIngredients Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
		 * @param {number} vtn when set to 1, limit to vegetarian (Powersearch-capable plan required)
		 * @param {number} vgn when set to 1, limit to vegan (Powersearch-capable plan required)
		 * @param {number} chs when set to 1, limit to contains-cheese (Powersearch-capable plan required)
		 * @param {number} glf when set to 1, limit to gluten-free (Powersearch-capable plan required)
		 * @param {number} ntf when set to 1, limit to nut-free (Powersearch-capable plan required)
		 * @param {number} dyf when set to 1, limit to dairy-free (Powersearch-capable plan required)
		 * @param {number} sff when set to 1, limit to seafood-free (Powersearch-capable plan required)
		 * @param {number} slf when set to 1, limit to shellfish-free (Powersearch-capable plan required)
		 * @param {number} tnf when set to 1, limit to tree-nut free (Powersearch-capable plan required)
		 * @param {number} wmf when set to 1, limit to white-meat free (Powersearch-capable plan required)
		 * @param {number} rmf when set to 1, limit to red-meat free (Powersearch-capable plan required)
		 * @param {number} cps when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
		 * @param {number} champion optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
		 * @param {boolean} synonyms optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)
		 * @return {BigOvenModelAPI2RecipeSearchResult} OK
		 */
		RecipesTop25randomGetByAny_kwAndFolderAndCollAndFilterAndTitle_kwAndUserIdAndUsernameAndTokenAndPhotosAndBoostmineAndInclude_catAndExclude_catAndInclude_primarycatAndExclude_primarycatAndInclude_ingAndExclude_ingAndCuisineAndDbAndUsersetAndServingsMinAndTotalMinsAndMaxIngredientsAndMinIngredientsAndVtnAndVgnAndChsAndGlfAndNtfAndDyfAndSffAndSlfAndTnfAndWmfAndRmfAndCpsAndChampionAndSynonyms(any_kw: string | null | undefined, folder: string | null | undefined, coll: number | null | undefined, filter: string | null | undefined, title_kw: string | null | undefined, userId: number | null | undefined, username: string | null | undefined, token: string | null | undefined, photos: boolean | null | undefined, boostmine: boolean | null | undefined, include_cat: string | null | undefined, exclude_cat: string | null | undefined, include_primarycat: string | null | undefined, exclude_primarycat: string | null | undefined, include_ing: string | null | undefined, exclude_ing: string | null | undefined, cuisine: string | null | undefined, db: string | null | undefined, userset: string | null | undefined, servingsMin: number | null | undefined, totalMins: number | null | undefined, maxIngredients: number | null | undefined, minIngredients: number | null | undefined, vtn: number | null | undefined, vgn: number | null | undefined, chs: number | null | undefined, glf: number | null | undefined, ntf: number | null | undefined, dyf: number | null | undefined, sff: number | null | undefined, slf: number | null | undefined, tnf: number | null | undefined, wmf: number | null | undefined, rmf: number | null | undefined, cps: number | null | undefined, champion: number | null | undefined, synonyms: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<BigOvenModelAPI2RecipeSearchResult> {
			return this.http.get<BigOvenModelAPI2RecipeSearchResult>(this.baseUri + 'recipes/top25random?any_kw=' + (any_kw == null ? '' : encodeURIComponent(any_kw)) + '&folder=' + (folder == null ? '' : encodeURIComponent(folder)) + '&coll=' + coll + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&title_kw=' + (title_kw == null ? '' : encodeURIComponent(title_kw)) + '&userId=' + userId + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&photos=' + photos + '&boostmine=' + boostmine + '&include_cat=' + (include_cat == null ? '' : encodeURIComponent(include_cat)) + '&exclude_cat=' + (exclude_cat == null ? '' : encodeURIComponent(exclude_cat)) + '&include_primarycat=' + (include_primarycat == null ? '' : encodeURIComponent(include_primarycat)) + '&exclude_primarycat=' + (exclude_primarycat == null ? '' : encodeURIComponent(exclude_primarycat)) + '&include_ing=' + (include_ing == null ? '' : encodeURIComponent(include_ing)) + '&exclude_ing=' + (exclude_ing == null ? '' : encodeURIComponent(exclude_ing)) + '&cuisine=' + (cuisine == null ? '' : encodeURIComponent(cuisine)) + '&db=' + (db == null ? '' : encodeURIComponent(db)) + '&userset=' + (userset == null ? '' : encodeURIComponent(userset)) + '&servingsMin=' + servingsMin + '&totalMins=' + totalMins + '&maxIngredients=' + maxIngredients + '&minIngredients=' + minIngredients + '&vtn=' + vtn + '&vgn=' + vgn + '&chs=' + chs + '&glf=' + glf + '&ntf=' + ntf + '&dyf=' + dyf + '&sff=' + sff + '&slf=' + slf + '&tnf=' + tnf + '&wmf=' + wmf + '&rmf=' + rmf + '&cps=' + cps + '&champion=' + champion + '&synonyms=' + synonyms, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Same as GET recipe but also includes the recipe videos (if any)
		 * Get recipes/{id}
		 * @param {number} id The Recipe ID to retrieve
		 * @param {boolean} prefetch The prefetch.
		 * @return {API2ModelsRecipesRecipeResponse} OK
		 */
		Recipes_idGetByPrefetch(id: number, prefetch: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<API2ModelsRecipesRecipeResponse> {
			return this.http.get<API2ModelsRecipesRecipeResponse>(this.baseUri + 'recipes/' + id + '?prefetch=' + prefetch, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

