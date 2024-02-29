import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiException extends Exception {
		customError?: any;
		errors?: Array<ValidationError>;
		isCustomErrorObject?: boolean | null;
		isModelValidatonError?: boolean | null;
		referenceDocumentLink?: string | null;
		referenceErrorCode?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCode?: number | null;
	}
	export interface ApiExceptionFormProperties extends ExceptionFormProperties {
		customError: FormControl<any | null | undefined>,
		isCustomErrorObject: FormControl<boolean | null | undefined>,
		isModelValidatonError: FormControl<boolean | null | undefined>,
		referenceDocumentLink: FormControl<string | null | undefined>,
		referenceErrorCode: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateApiExceptionFormGroup() {
		return new FormGroup<ApiExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			StackTrace: new FormControl<string | null | undefined>(undefined),
			customError: new FormControl<any | null | undefined>(undefined),
			isCustomErrorObject: new FormControl<boolean | null | undefined>(undefined),
			isModelValidatonError: new FormControl<boolean | null | undefined>(undefined),
			referenceDocumentLink: new FormControl<string | null | undefined>(undefined),
			referenceErrorCode: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ValidationError {
		field?: string | null;
		message?: string | null;
	}
	export interface ValidationErrorFormProperties {
		field: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiResponse {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: any;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCode?: number | null;
		version?: string | null;
	}
	export interface ApiResponseFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
		result: FormControl<any | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCode: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateApiResponseFormGroup() {
		return new FormGroup<ApiResponseFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
			result: new FormControl<any | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The ArticleDTO Class.
	 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
	 *             
	 */
	export interface ArticleDTO {

		/** Active Status */
		activeStatus?: boolean | null;
		applyForAllGyms?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId?: number | null;

		/** Required */
		availableGyms: Array<GymDTO>;

		/**
		 * Default AvailableQty
		 * Type: decimal
		 */
		availableQty?: number | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		barcode?: string | null;
		createdDate?: Date | null;
		createdUser?: string | null;

		/** Access Schedule CRON Expression */
		cronExpression?: string | null;
		description?: string | null;

		/** Type: decimal */
		discount?: number | null;

		/**
		 * Default EmployeeDiscount
		 * Type: decimal
		 */
		employeeDiscount?: number | null;

		/**
		 * Default EmployeePrice
		 * Type: decimal
		 */
		employeePrice?: number | null;

		/** Gym Customizations */
		gymArticles?: Array<GymArticleDetailsDTO>;
		isAddOn?: boolean | null;

		/** Default IsInventoryItem of the Article */
		isInventoryItem?: boolean | null;

		/** Default IsObsolete of the Article */
		isObsolete?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		measureUnit: string;
		modifiedDate?: Date | null;
		modifiedUser?: string | null;

		/**
		 * Required
		 * Min length: 0
		 * Max length: 100
		 */
		name: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;

		/**
		 * Required
		 * Type: decimal
		 */
		price: number;

		/**
		 * Deafault ReorderLevel
		 * Type: decimal
		 */
		reorderLevel?: number | null;

		/**
		 * Default Revenue account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revenueAccountId?: number | null;

		/**
		 * Default SellingPrice
		 * Type: decimal
		 */
		sellingPrice?: number | null;

		/**
		 * Min length: 0
		 * Max length: 200
		 */
		tags?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/** Type: decimal */
		vat?: number | null;

		/** VAT Applicable */
		vatApplicable?: boolean | null;
	}

	/**
	 * The ArticleDTO Class.
	 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
	 *             
	 */
	export interface ArticleDTOFormProperties {

		/** Active Status */
		activeStatus: FormControl<boolean | null | undefined>,
		applyForAllGyms: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId: FormControl<number | null | undefined>,

		/**
		 * Default AvailableQty
		 * Type: decimal
		 */
		availableQty: FormControl<number | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		barcode: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		createdUser: FormControl<string | null | undefined>,

		/** Access Schedule CRON Expression */
		cronExpression: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: decimal */
		discount: FormControl<number | null | undefined>,

		/**
		 * Default EmployeeDiscount
		 * Type: decimal
		 */
		employeeDiscount: FormControl<number | null | undefined>,

		/**
		 * Default EmployeePrice
		 * Type: decimal
		 */
		employeePrice: FormControl<number | null | undefined>,
		isAddOn: FormControl<boolean | null | undefined>,

		/** Default IsInventoryItem of the Article */
		isInventoryItem: FormControl<boolean | null | undefined>,

		/** Default IsObsolete of the Article */
		isObsolete: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		measureUnit: FormControl<string | null | undefined>,
		modifiedDate: FormControl<Date | null | undefined>,
		modifiedUser: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 0
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: decimal
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Deafault ReorderLevel
		 * Type: decimal
		 */
		reorderLevel: FormControl<number | null | undefined>,

		/**
		 * Default Revenue account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revenueAccountId: FormControl<number | null | undefined>,

		/**
		 * Default SellingPrice
		 * Type: decimal
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 200
		 */
		tags: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/** Type: decimal */
		vat: FormControl<number | null | undefined>,

		/** VAT Applicable */
		vatApplicable: FormControl<boolean | null | undefined>,
	}
	export function CreateArticleDTOFormGroup() {
		return new FormGroup<ArticleDTOFormProperties>({
			activeStatus: new FormControl<boolean | null | undefined>(undefined),
			applyForAllGyms: new FormControl<boolean | null | undefined>(undefined),
			articleId: new FormControl<number | null | undefined>(undefined),
			availableQty: new FormControl<number | null | undefined>(undefined),
			barcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			createdUser: new FormControl<string | null | undefined>(undefined),
			cronExpression: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined, [Validators.pattern('^\d+.\d{0,2}$|^\d')]),
			employeeDiscount: new FormControl<number | null | undefined>(undefined),
			employeePrice: new FormControl<number | null | undefined>(undefined),
			isAddOn: new FormControl<boolean | null | undefined>(undefined),
			isInventoryItem: new FormControl<boolean | null | undefined>(undefined),
			isObsolete: new FormControl<boolean | null | undefined>(undefined),
			measureUnit: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			modifiedUser: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			number: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d+.\d{0,2}$|^\d')]),
			reorderLevel: new FormControl<number | null | undefined>(undefined),
			revenueAccountId: new FormControl<number | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('item|service|access')]),
			vat: new FormControl<number | null | undefined>(undefined, [Validators.pattern('^\d+.\d{0,2}$|^\d')]),
			vatApplicable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * The GymDTO Class.
	 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
	 *             
	 */
	export interface GymDTO {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		externalGymNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gymId?: number | null;
		gymName?: string | null;
		location?: string | null;
	}

	/**
	 * The GymDTO Class.
	 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
	 *             
	 */
	export interface GymDTOFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		externalGymNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gymId: FormControl<number | null | undefined>,
		gymName: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
	}
	export function CreateGymDTOFormGroup() {
		return new FormGroup<GymDTOFormProperties>({
			externalGymNumber: new FormControl<number | null | undefined>(undefined),
			gymId: new FormControl<number | null | undefined>(undefined),
			gymName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The GymArticleDetailsDTO Class.
	 * Contains fields of GymArticleDetails DTO in application.
	 *             
	 */
	export interface GymArticleDetailsDTO {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId?: number | null;

		/** Type: decimal */
		availableQty?: number | null;

		/** Created User */
		createdUser?: string | null;

		/** Type: decimal */
		employeeDiscount?: number | null;

		/** Type: decimal */
		employeePrice?: number | null;

		/**
		 * Gym Id where article is related
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gymId?: number | null;

		/** GymId - Gym Id string with comma separated GymIds */
		gymIdList?: string | null;

		/** Gym Name */
		gymName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Set as the default values for the article */
		isDefault?: boolean | null;
		isInventoryItem?: boolean | null;
		isObsolete?: boolean | null;

		/** Modified user */
		modifiedUser?: string | null;

		/** Type: decimal */
		reorderLevel?: number | null;

		/**
		 * Revenue account Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revenueAccountId?: number | null;

		/** Type: decimal */
		sellingPrice?: number | null;
	}

	/**
	 * The GymArticleDetailsDTO Class.
	 * Contains fields of GymArticleDetails DTO in application.
	 *             
	 */
	export interface GymArticleDetailsDTOFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId: FormControl<number | null | undefined>,

		/** Type: decimal */
		availableQty: FormControl<number | null | undefined>,

		/** Created User */
		createdUser: FormControl<string | null | undefined>,

		/** Type: decimal */
		employeeDiscount: FormControl<number | null | undefined>,

		/** Type: decimal */
		employeePrice: FormControl<number | null | undefined>,

		/**
		 * Gym Id where article is related
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gymId: FormControl<number | null | undefined>,

		/** GymId - Gym Id string with comma separated GymIds */
		gymIdList: FormControl<string | null | undefined>,

		/** Gym Name */
		gymName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Set as the default values for the article */
		isDefault: FormControl<boolean | null | undefined>,
		isInventoryItem: FormControl<boolean | null | undefined>,
		isObsolete: FormControl<boolean | null | undefined>,

		/** Modified user */
		modifiedUser: FormControl<string | null | undefined>,

		/** Type: decimal */
		reorderLevel: FormControl<number | null | undefined>,

		/**
		 * Revenue account Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revenueAccountId: FormControl<number | null | undefined>,

		/** Type: decimal */
		sellingPrice: FormControl<number | null | undefined>,
	}
	export function CreateGymArticleDetailsDTOFormGroup() {
		return new FormGroup<GymArticleDetailsDTOFormProperties>({
			articleId: new FormControl<number | null | undefined>(undefined),
			availableQty: new FormControl<number | null | undefined>(undefined),
			createdUser: new FormControl<string | null | undefined>(undefined),
			employeeDiscount: new FormControl<number | null | undefined>(undefined),
			employeePrice: new FormControl<number | null | undefined>(undefined),
			gymId: new FormControl<number | null | undefined>(undefined),
			gymIdList: new FormControl<string | null | undefined>(undefined),
			gymName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isInventoryItem: new FormControl<boolean | null | undefined>(undefined),
			isObsolete: new FormControl<boolean | null | undefined>(undefined),
			modifiedUser: new FormControl<string | null | undefined>(undefined),
			reorderLevel: new FormControl<number | null | undefined>(undefined),
			revenueAccountId: new FormControl<number | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The ArticleSearchDTO Class.
	 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
	 *             
	 */
	export interface ArticleSearchDTO {

		/** Active Status */
		activeStatus?: boolean | null;
		applyForAllGyms?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId?: number | null;
		createdDate?: Date | null;
		createdUser?: string | null;
		description?: string | null;

		/** MeasureUnit */
		measureUnit?: string | null;
		modifiedDate?: Date | null;
		modifiedUser?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;

		/** Type: decimal */
		price?: number | null;

		/**
		 * Actual Selling price of the article
		 * Type: decimal
		 */
		sellingPrice?: number | null;
		tags?: string | null;

		/**
		 * total number of recode for particular search
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;

		/** article type */
		type?: string | null;
	}

	/**
	 * The ArticleSearchDTO Class.
	 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
	 *             
	 */
	export interface ArticleSearchDTOFormProperties {

		/** Active Status */
		activeStatus: FormControl<boolean | null | undefined>,
		applyForAllGyms: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		articleId: FormControl<number | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		createdUser: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** MeasureUnit */
		measureUnit: FormControl<string | null | undefined>,
		modifiedDate: FormControl<Date | null | undefined>,
		modifiedUser: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,

		/** Type: decimal */
		price: FormControl<number | null | undefined>,

		/**
		 * Actual Selling price of the article
		 * Type: decimal
		 */
		sellingPrice: FormControl<number | null | undefined>,
		tags: FormControl<string | null | undefined>,

		/**
		 * total number of recode for particular search
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,

		/** article type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateArticleSearchDTOFormGroup() {
		return new FormGroup<ArticleSearchDTOFormProperties>({
			activeStatus: new FormControl<boolean | null | undefined>(undefined),
			applyForAllGyms: new FormControl<boolean | null | undefined>(undefined),
			articleId: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			createdUser: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			measureUnit: new FormControl<string | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			modifiedUser: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfArticleDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: ArticleDTO;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfArticleDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfArticleDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfArticleDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfBoolean {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: boolean | null;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfBooleanFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
		result: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfBooleanFormGroup() {
		return new FormGroup<DefaultResponseDTOOfBooleanFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
			result: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfGymDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: GymDTO;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfGymDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfGymDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfGymDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfInteger {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result?: number | null;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfIntegerFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result: FormControl<number | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfIntegerFormGroup() {
		return new FormGroup<DefaultResponseDTOOfIntegerFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
			result: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfListOfArticleSearchDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: Array<ArticleSearchDTO>;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfListOfArticleSearchDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfListOfArticleSearchDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfListOfArticleSearchDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfListOfPackageSearchDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: Array<PackageSearchDTO>;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfListOfPackageSearchDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfListOfPackageSearchDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfListOfPackageSearchDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The PackageSearchDTO Class.
	 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
	 *                
	 */
	export interface PackageSearchDTO {

		/** Active Status */
		activeStatus?: boolean | null;

		/**
		 * sum of addon fees.
		 * incoming values for this filed will ignore.
		 * Type: decimal
		 */
		addonFee?: number | null;

		/**
		 * Boolean value to indicate wheather package is available in all the gyms.
		 */
		applyForAllGyms?: boolean | null;

		/**
		 * Range of period a member is bound to the contract if he/she choose this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bindingPeriod?: number | null;

		/**
		 * Package created DateTime.
		 */
		createdDate?: Date | null;

		/**
		 * Package created user.
		 */
		createdUser?: string | null;

		/**
		 * Common descriptions about package.If there are more instructions can be stored as comma separated values.
		 */
		description?: string | null;

		/**
		 * What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.
		 */
		features?: string | null;

		/**
		 * No of months gym member can come without payments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freeMonths?: number | null;

		/**
		 * Boolean value to indicate member can remove already added addons if he choose this package.
		 */
		memberCanRemoveAddOns?: boolean | null;

		/**
		 * Package last modified DateTime.
		 */
		modifiedDate?: Date | null;

		/**
		 * Package last modified user.
		 */
		modifiedUser?: string | null;

		/**
		 * Monthly installment fee if package is not fixed visit.
		 * addition of the servicefee and addon fees divided by binding period.
		 * Type: decimal
		 */
		monthlyFee?: number | null;

		/**
		 * No of visits for fixed package
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfVisits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageId?: number | null;
		packageName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageNumber?: number | null;

		/**
		 * Package type can be either fixed visit or unlimited.
		 */
		packageType?: string | null;

		/**
		 * Registartion fee for the package at a gym.
		 * Type: decimal
		 */
		registrationFee?: number | null;

		/**
		 * total Service charge of the package for entire period.
		 * Type: decimal
		 */
		serviceFee?: number | null;

		/**
		 * Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.
		 */
		tags?: string | null;

		/**
		 * total number of recode for particular search
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;

		/**
		 * total price for the package including Addon fees, service fee and registration fee.
		 * incoming values for this field will ignore.
		 * Type: decimal
		 */
		totalPrice?: number | null;
	}

	/**
	 * The PackageSearchDTO Class.
	 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
	 *                
	 */
	export interface PackageSearchDTOFormProperties {

		/** Active Status */
		activeStatus: FormControl<boolean | null | undefined>,

		/**
		 * sum of addon fees.
		 * incoming values for this filed will ignore.
		 * Type: decimal
		 */
		addonFee: FormControl<number | null | undefined>,

		/**
		 * Boolean value to indicate wheather package is available in all the gyms.
		 */
		applyForAllGyms: FormControl<boolean | null | undefined>,

		/**
		 * Range of period a member is bound to the contract if he/she choose this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bindingPeriod: FormControl<number | null | undefined>,

		/**
		 * Package created DateTime.
		 */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Package created user.
		 */
		createdUser: FormControl<string | null | undefined>,

		/**
		 * Common descriptions about package.If there are more instructions can be stored as comma separated values.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.
		 */
		features: FormControl<string | null | undefined>,

		/**
		 * No of months gym member can come without payments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freeMonths: FormControl<number | null | undefined>,

		/**
		 * Boolean value to indicate member can remove already added addons if he choose this package.
		 */
		memberCanRemoveAddOns: FormControl<boolean | null | undefined>,

		/**
		 * Package last modified DateTime.
		 */
		modifiedDate: FormControl<Date | null | undefined>,

		/**
		 * Package last modified user.
		 */
		modifiedUser: FormControl<string | null | undefined>,

		/**
		 * Monthly installment fee if package is not fixed visit.
		 * addition of the servicefee and addon fees divided by binding period.
		 * Type: decimal
		 */
		monthlyFee: FormControl<number | null | undefined>,

		/**
		 * No of visits for fixed package
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfVisits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageId: FormControl<number | null | undefined>,
		packageName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageNumber: FormControl<number | null | undefined>,

		/**
		 * Package type can be either fixed visit or unlimited.
		 */
		packageType: FormControl<string | null | undefined>,

		/**
		 * Registartion fee for the package at a gym.
		 * Type: decimal
		 */
		registrationFee: FormControl<number | null | undefined>,

		/**
		 * total Service charge of the package for entire period.
		 * Type: decimal
		 */
		serviceFee: FormControl<number | null | undefined>,

		/**
		 * Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.
		 */
		tags: FormControl<string | null | undefined>,

		/**
		 * total number of recode for particular search
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,

		/**
		 * total price for the package including Addon fees, service fee and registration fee.
		 * incoming values for this field will ignore.
		 * Type: decimal
		 */
		totalPrice: FormControl<number | null | undefined>,
	}
	export function CreatePackageSearchDTOFormGroup() {
		return new FormGroup<PackageSearchDTOFormProperties>({
			activeStatus: new FormControl<boolean | null | undefined>(undefined),
			addonFee: new FormControl<number | null | undefined>(undefined),
			applyForAllGyms: new FormControl<boolean | null | undefined>(undefined),
			bindingPeriod: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			createdUser: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			freeMonths: new FormControl<number | null | undefined>(undefined),
			memberCanRemoveAddOns: new FormControl<boolean | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			modifiedUser: new FormControl<string | null | undefined>(undefined),
			monthlyFee: new FormControl<number | null | undefined>(undefined),
			numberOfVisits: new FormControl<number | null | undefined>(undefined),
			packageId: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageNumber: new FormControl<number | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			registrationFee: new FormControl<number | null | undefined>(undefined),
			serviceFee: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			totalPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfPackageDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: PackageDTO;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfPackageDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfPackageDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfPackageDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The PackageDTO Class.
	 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
	 *             
	 */
	export interface PackageDTO {

		/**
		 * Extra articles list added to the given package.
		 */
		addOns?: Array<PackageItemDTO>;

		/**
		 * sum of addon fees.
		 * incoming values for this filed will ignore.
		 * Type: decimal
		 */
		addonFee?: number | null;

		/**
		 * Boolean value to indicate wheather package is available in all the gyms.
		 */
		applyForAllGyms?: boolean | null;

		/**
		 * Gyms list where this package is available.
		 */
		availableGyms?: Array<GymDTO>;

		/**
		 * Range of period a member is bound to the contract if he/she choose this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bindingPeriod?: number | null;

		/**
		 * Package created DateTime.
		 */
		createdDate?: Date | null;

		/**
		 * Package created user.
		 */
		createdUser?: string | null;

		/**
		 * Common descriptions about package.If there are more instructions
		 * can be stored as comma separated values.
		 */
		description?: string | null;

		/**
		 * End date of the package.After that package is not valid for use.
		 */
		endDate?: Date | null;

		/**
		 * No of months the fixed package is valid for sale
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expireInMonths?: number | null;

		/**
		 * What are the facilities, features available for package.ex:- wifi,
		 * ACm etc.Can be stored as comma seperated values.
		 */
		features?: string | null;

		/**
		 * No of months gym member can come without payments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freeMonths?: number | null;

		/**
		 * Instruction to the gym members relevant to the package.
		 * If there are more instructions can be stored as comma seperated values.
		 */
		instructionsToGymUsers?: string | null;

		/**
		 * Instruction to the MRM members relevant to the package.
		 * If there are more instructions can be stored as comma seperated values.
		 */
		instructionsToWebUsers?: string | null;

		/**
		 * Boolean value to indicate this package is still active or not.
		 */
		isActive?: boolean | null;

		/**
		 * Boolean value to indicate ATG transaction from bank is applicable or not.
		 */
		isAtg?: boolean | null;

		/**
		 * Boolean value to indicate the contract will auto renew after expiration
		 * if this package would be chosen.
		 */
		isAutoRenew?: boolean | null;

		/**
		 * Boolean value to indicate if the first month charges is free.
		 */
		isFirstMonthFree?: boolean | null;

		/**
		 * Boolean value to indicate this package has registration fee or not.
		 */
		isRegistrationFee?: boolean | null;

		/**
		 * Boolean value to indicate rest amount is applicable or not.
		 */
		isRestAmount?: boolean | null;

		/**
		 * Boolean value to indicate package is visible in Mobile App or not.
		 */
		isShownInMobile?: boolean | null;

		/**
		 * Boolean value to indicate package can be sponsored or not by other party.
		 */
		isSponsorPackage?: boolean | null;

		/**
		 * If a member join the gym middle of a month via this package,
		 * what is the maximum amount of price can be neglected from payment from the member.
		 * Type: decimal
		 */
		maximumGiveAwayRestAmount?: number | null;

		/**
		 * Boolean value to indicate member can add extra addons he wish if he choose this package.
		 */
		memberCanAddAddOns?: boolean | null;

		/**
		 * Boolean value to indicate if member can leave from contract within
		 * free period if he/she choose this package.
		 */
		memberCanLeaveWithinFreePeriod?: boolean | null;

		/**
		 * Boolean value to indicate member can remove already added addons if he choose this package.
		 */
		memberCanRemoveAddOns?: boolean | null;

		/**
		 * Package last modified DateTime.
		 */
		modifiedDate?: Date | null;

		/**
		 * Package last modified user.
		 */
		modifiedUser?: string | null;

		/**
		 * Monthly installment fee if package is not fixed visit.
		 * addition of the servicefee and addon fees divided by binding period.
		 * read only
		 * Type: decimal
		 */
		monthlyFee?: number | null;

		/**
		 * Next Package the contract continue after the binding period of this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextPackageNumber?: number | null;

		/**
		 * Maximum Number of installment a member can divide the package price/cost to pay.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfInstallments?: number | null;

		/**
		 * If package is fixed visit type, then how many visits are available for this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfVisits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageId?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		packageName: string;
		packageNumber?: string | null;

		/**
		 * Package type can be either fixed visit or unlimited.
		 * Required
		 * Min length: 1
		 */
		packageType: string;

		/**
		 * Cost/Price of the single visit to gym.
		 * Type: decimal
		 */
		perVisitPrice?: number | null;

		/**
		 * Registartion fee for the package at a gym.
		 * read only
		 * Required
		 * Type: decimal
		 */
		registrationFee: number;

		/**
		 * total Service charge of the package for entire period.
		 * Required
		 * Type: decimal
		 */
		serviceFee: number;

		/**
		 * Boolean value to show this package in MRM system or not.
		 */
		shownInWeb?: boolean | null;

		/**
		 * Start date of the package.
		 */
		startDate?: Date | null;

		/**
		 * Comma separated string values in case of need of maintain some labels kind of
		 * stuff relevant to the package.
		 */
		tags?: string | null;

		/**
		 * total price for the package including Addon fees, service fee and registration fee.
		 * incoming values for this field will ignore.
		 * Type: decimal
		 */
		totalPrice?: number | null;
	}

	/**
	 * The PackageDTO Class.
	 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
	 *             
	 */
	export interface PackageDTOFormProperties {

		/**
		 * sum of addon fees.
		 * incoming values for this filed will ignore.
		 * Type: decimal
		 */
		addonFee: FormControl<number | null | undefined>,

		/**
		 * Boolean value to indicate wheather package is available in all the gyms.
		 */
		applyForAllGyms: FormControl<boolean | null | undefined>,

		/**
		 * Range of period a member is bound to the contract if he/she choose this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bindingPeriod: FormControl<number | null | undefined>,

		/**
		 * Package created DateTime.
		 */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Package created user.
		 */
		createdUser: FormControl<string | null | undefined>,

		/**
		 * Common descriptions about package.If there are more instructions
		 * can be stored as comma separated values.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * End date of the package.After that package is not valid for use.
		 */
		endDate: FormControl<Date | null | undefined>,

		/**
		 * No of months the fixed package is valid for sale
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expireInMonths: FormControl<number | null | undefined>,

		/**
		 * What are the facilities, features available for package.ex:- wifi,
		 * ACm etc.Can be stored as comma seperated values.
		 */
		features: FormControl<string | null | undefined>,

		/**
		 * No of months gym member can come without payments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freeMonths: FormControl<number | null | undefined>,

		/**
		 * Instruction to the gym members relevant to the package.
		 * If there are more instructions can be stored as comma seperated values.
		 */
		instructionsToGymUsers: FormControl<string | null | undefined>,

		/**
		 * Instruction to the MRM members relevant to the package.
		 * If there are more instructions can be stored as comma seperated values.
		 */
		instructionsToWebUsers: FormControl<string | null | undefined>,

		/**
		 * Boolean value to indicate this package is still active or not.
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate ATG transaction from bank is applicable or not.
		 */
		isAtg: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate the contract will auto renew after expiration
		 * if this package would be chosen.
		 */
		isAutoRenew: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate if the first month charges is free.
		 */
		isFirstMonthFree: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate this package has registration fee or not.
		 */
		isRegistrationFee: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate rest amount is applicable or not.
		 */
		isRestAmount: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate package is visible in Mobile App or not.
		 */
		isShownInMobile: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate package can be sponsored or not by other party.
		 */
		isSponsorPackage: FormControl<boolean | null | undefined>,

		/**
		 * If a member join the gym middle of a month via this package,
		 * what is the maximum amount of price can be neglected from payment from the member.
		 * Type: decimal
		 */
		maximumGiveAwayRestAmount: FormControl<number | null | undefined>,

		/**
		 * Boolean value to indicate member can add extra addons he wish if he choose this package.
		 */
		memberCanAddAddOns: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate if member can leave from contract within
		 * free period if he/she choose this package.
		 */
		memberCanLeaveWithinFreePeriod: FormControl<boolean | null | undefined>,

		/**
		 * Boolean value to indicate member can remove already added addons if he choose this package.
		 */
		memberCanRemoveAddOns: FormControl<boolean | null | undefined>,

		/**
		 * Package last modified DateTime.
		 */
		modifiedDate: FormControl<Date | null | undefined>,

		/**
		 * Package last modified user.
		 */
		modifiedUser: FormControl<string | null | undefined>,

		/**
		 * Monthly installment fee if package is not fixed visit.
		 * addition of the servicefee and addon fees divided by binding period.
		 * read only
		 * Type: decimal
		 */
		monthlyFee: FormControl<number | null | undefined>,

		/**
		 * Next Package the contract continue after the binding period of this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextPackageNumber: FormControl<number | null | undefined>,

		/**
		 * Maximum Number of installment a member can divide the package price/cost to pay.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * If package is fixed visit type, then how many visits are available for this package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfVisits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		packageId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		packageName: FormControl<string | null | undefined>,
		packageNumber: FormControl<string | null | undefined>,

		/**
		 * Package type can be either fixed visit or unlimited.
		 * Required
		 * Min length: 1
		 */
		packageType: FormControl<string | null | undefined>,

		/**
		 * Cost/Price of the single visit to gym.
		 * Type: decimal
		 */
		perVisitPrice: FormControl<number | null | undefined>,

		/**
		 * Registartion fee for the package at a gym.
		 * read only
		 * Required
		 * Type: decimal
		 */
		registrationFee: FormControl<number | null | undefined>,

		/**
		 * total Service charge of the package for entire period.
		 * Required
		 * Type: decimal
		 */
		serviceFee: FormControl<number | null | undefined>,

		/**
		 * Boolean value to show this package in MRM system or not.
		 */
		shownInWeb: FormControl<boolean | null | undefined>,

		/**
		 * Start date of the package.
		 */
		startDate: FormControl<Date | null | undefined>,

		/**
		 * Comma separated string values in case of need of maintain some labels kind of
		 * stuff relevant to the package.
		 */
		tags: FormControl<string | null | undefined>,

		/**
		 * total price for the package including Addon fees, service fee and registration fee.
		 * incoming values for this field will ignore.
		 * Type: decimal
		 */
		totalPrice: FormControl<number | null | undefined>,
	}
	export function CreatePackageDTOFormGroup() {
		return new FormGroup<PackageDTOFormProperties>({
			addonFee: new FormControl<number | null | undefined>(undefined),
			applyForAllGyms: new FormControl<boolean | null | undefined>(undefined),
			bindingPeriod: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			createdUser: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			expireInMonths: new FormControl<number | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			freeMonths: new FormControl<number | null | undefined>(undefined),
			instructionsToGymUsers: new FormControl<string | null | undefined>(undefined),
			instructionsToWebUsers: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isAtg: new FormControl<boolean | null | undefined>(undefined),
			isAutoRenew: new FormControl<boolean | null | undefined>(undefined),
			isFirstMonthFree: new FormControl<boolean | null | undefined>(undefined),
			isRegistrationFee: new FormControl<boolean | null | undefined>(undefined),
			isRestAmount: new FormControl<boolean | null | undefined>(undefined),
			isShownInMobile: new FormControl<boolean | null | undefined>(undefined),
			isSponsorPackage: new FormControl<boolean | null | undefined>(undefined),
			maximumGiveAwayRestAmount: new FormControl<number | null | undefined>(undefined),
			memberCanAddAddOns: new FormControl<boolean | null | undefined>(undefined),
			memberCanLeaveWithinFreePeriod: new FormControl<boolean | null | undefined>(undefined),
			memberCanRemoveAddOns: new FormControl<boolean | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			modifiedUser: new FormControl<string | null | undefined>(undefined),
			monthlyFee: new FormControl<number | null | undefined>(undefined),
			nextPackageNumber: new FormControl<number | null | undefined>(undefined),
			numberOfInstallments: new FormControl<number | null | undefined>(undefined),
			numberOfVisits: new FormControl<number | null | undefined>(undefined),
			packageId: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			packageNumber: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('fixedvisit|unlimited')]),
			perVisitPrice: new FormControl<number | null | undefined>(undefined),
			registrationFee: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			serviceFee: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shownInWeb: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			totalPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The PackageItemDTO Class.
	 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
	 *             
	 */
	export interface PackageItemDTO {

		/**
		 * Refer to ArticleId in Article table in DB.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		articleId: number;

		/**
		 * Name of the article(Addon) in a particular package.
		 * read only
		 */
		articleName?: string | null;

		/**
		 * Number assigned the article(Addon) in a particular package.
		 * read only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		articleNumber?: number | null;

		/**
		 * Price of the article determined from that package.
		 * Price of a same article can be varied from package to package.
		 * Type: decimal
		 */
		articlePrice?: number | null;

		/**
		 * Number of the installment this article is available to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endOrder?: number | null;

		/** Is Included in service charge */
		isIncludeServiceInCharge?: boolean | null;
		measureUnit?: string | null;

		/**
		 * How many article(Addon) is available for that package from that type.
		 * Type: decimal
		 */
		numberOfItems?: number | null;

		/**
		 * Number of the installment this article is available from.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startOrder?: number | null;
	}

	/**
	 * The PackageItemDTO Class.
	 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
	 *             
	 */
	export interface PackageItemDTOFormProperties {

		/**
		 * Refer to ArticleId in Article table in DB.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		articleId: FormControl<number | null | undefined>,

		/**
		 * Name of the article(Addon) in a particular package.
		 * read only
		 */
		articleName: FormControl<string | null | undefined>,

		/**
		 * Number assigned the article(Addon) in a particular package.
		 * read only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		articleNumber: FormControl<number | null | undefined>,

		/**
		 * Price of the article determined from that package.
		 * Price of a same article can be varied from package to package.
		 * Type: decimal
		 */
		articlePrice: FormControl<number | null | undefined>,

		/**
		 * Number of the installment this article is available to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endOrder: FormControl<number | null | undefined>,

		/** Is Included in service charge */
		isIncludeServiceInCharge: FormControl<boolean | null | undefined>,
		measureUnit: FormControl<string | null | undefined>,

		/**
		 * How many article(Addon) is available for that package from that type.
		 * Type: decimal
		 */
		numberOfItems: FormControl<number | null | undefined>,

		/**
		 * Number of the installment this article is available from.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startOrder: FormControl<number | null | undefined>,
	}
	export function CreatePackageItemDTOFormGroup() {
		return new FormGroup<PackageItemDTOFormProperties>({
			articleId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			articleName: new FormControl<string | null | undefined>(undefined),
			articleNumber: new FormControl<number | null | undefined>(undefined),
			articlePrice: new FormControl<number | null | undefined>(undefined),
			endOrder: new FormControl<number | null | undefined>(undefined),
			isIncludeServiceInCharge: new FormControl<boolean | null | undefined>(undefined),
			measureUnit: new FormControl<string | null | undefined>(undefined),
			numberOfItems: new FormControl<number | null | undefined>(undefined),
			startOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfPackageSearchDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: PackageSearchDTO;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfPackageSearchDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfPackageSearchDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfPackageSearchDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfStatusDTO {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: StatusDTO;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfStatusDTOFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfStatusDTOFormGroup() {
		return new FormGroup<DefaultResponseDTOOfStatusDTOFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * Imideate response for long running api call.
	 *             
	 */
	export interface StatusDTO {

		/**
		 * Reference id for status endpoint
		 */
		messageId?: string | null;

		/**
		 * Status of API Call
		 */
		statusText?: string | null;

		/**
		 * Relative url for stauts check
		 */
		url?: string | null;
	}

	/**
	 * Imideate response for long running api call.
	 *             
	 */
	export interface StatusDTOFormProperties {

		/**
		 * Reference id for status endpoint
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * Status of API Call
		 */
		statusText: FormControl<string | null | undefined>,

		/**
		 * Relative url for stauts check
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStatusDTOFormGroup() {
		return new FormGroup<StatusDTOFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			statusText: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfString {
		isError?: boolean | null;
		message?: string | null;
		responseException?: any;
		result?: string | null;
	}

	/**
	 * The DefaultResponseDTO Class.
	 * Contains fields of DefaultResponse DTO in application.
	 *             
	 */
	export interface DefaultResponseDTOOfStringFormProperties {
		isError: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		responseException: FormControl<any | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreateDefaultResponseDTOOfStringFormGroup() {
		return new FormGroup<DefaultResponseDTOOfStringFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			responseException: new FormControl<any | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exception {
		InnerException?: Exception;
		Message?: string | null;
		Source?: string | null;
		StackTrace?: string | null;
	}
	export interface ExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		StackTrace: FormControl<string | null | undefined>,
	}
	export function CreateExceptionFormGroup() {
		return new FormGroup<ExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			StackTrace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The LoginDTO Class.
	 * Contains relevant fields of Login DTO.
	 *             
	 */
	export interface LoginDTO {
		password?: string | null;
		remember?: boolean | null;
		username?: string | null;
	}

	/**
	 * The LoginDTO Class.
	 * Contains relevant fields of Login DTO.
	 *             
	 */
	export interface LoginDTOFormProperties {
		password: FormControl<string | null | undefined>,
		remember: FormControl<boolean | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateLoginDTOFormGroup() {
		return new FormGroup<LoginDTOFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			remember: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mesure unit to represent article mesure unit  */
	export interface MeasureUnitDTO {

		/**
		 * Id of the table
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Mesure Unit Type */
		name?: string | null;

		/** Type of the article used with (all, service, item) */
		type?: string | null;
	}

	/** Mesure unit to represent article mesure unit  */
	export interface MeasureUnitDTOFormProperties {

		/**
		 * Id of the table
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Mesure Unit Type */
		name: FormControl<string | null | undefined>,

		/** Type of the article used with (all, service, item) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMeasureUnitDTOFormGroup() {
		return new FormGroup<MeasureUnitDTOFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The MemeberDTO Class.
	 * Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
	 *             
	 */
	export interface MemberDTO {
		name?: string | null;
	}

	/**
	 * The MemeberDTO Class.
	 * Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
	 *             
	 */
	export interface MemberDTOFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateMemberDTOFormGroup() {
		return new FormGroup<MemberDTOFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageStatus {
		messageId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		referenceId?: number | null;
		source?: any;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusId?: number | null;
		statusText?: string | null;
	}
	export interface MessageStatusFormProperties {
		messageId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		referenceId: FormControl<number | null | undefined>,
		source: FormControl<any | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusId: FormControl<number | null | undefined>,
		statusText: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusFormGroup() {
		return new FormGroup<MessageStatusFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<any | null | undefined>(undefined),
			statusId: new FormControl<number | null | undefined>(undefined),
			statusText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		extensions?: {[id: string]: any };
		instance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		extensions: FormControl<{[id: string]: any } | null | undefined>,
		instance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			extensions: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The TestDTO Class.
	 * Contains relevant fields of Test DTO by masking actual Test entity's fields in application.
	 *             
	 */
	export interface TestDTO {

		/**
		 * Id of the Test object
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
	}

	/**
	 * The TestDTO Class.
	 * Contains relevant fields of Test DTO by masking actual Test entity's fields in application.
	 *             
	 */
	export interface TestDTOFormProperties {

		/**
		 * Id of the Test object
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateTestDTOFormGroup() {
		return new FormGroup<TestDTOFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The UserDTO Class.
	 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
	 *             
	 */
	export interface UserDTO {

		/**
		 * Account number of the user.It can be any stakeholder of the application.even can be a gym.
		 */
		accountNumber?: string | null;

		/**
		 * Entity number that make a relationship with BOX API DB.
		 */
		externalEntityNumber?: string | null;

		/**
		 * Gaurdian of the this user if he/she is under 18 years old.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		guardian?: number | null;

		/**
		 * If this user is a gym, then the gym number.
		 */
		gymNumber?: string | null;

		/**
		 * If Someone introduced this user to the system, then that user's UserId.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		introduceBy?: number | null;

		/**
		 * Name of the user.
		 */
		name?: string | null;

		/**
		 * Unique number maintain by application to idenify user.
		 */
		number?: string | null;

		/**
		 * Type of the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		typeId?: number | null;

		/**
		 * Indentity number(primary key) for user object. Generated in DB table when inserting a record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId?: number | null;
	}

	/**
	 * The UserDTO Class.
	 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
	 *             
	 */
	export interface UserDTOFormProperties {

		/**
		 * Account number of the user.It can be any stakeholder of the application.even can be a gym.
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * Entity number that make a relationship with BOX API DB.
		 */
		externalEntityNumber: FormControl<string | null | undefined>,

		/**
		 * Gaurdian of the this user if he/she is under 18 years old.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		guardian: FormControl<number | null | undefined>,

		/**
		 * If this user is a gym, then the gym number.
		 */
		gymNumber: FormControl<string | null | undefined>,

		/**
		 * If Someone introduced this user to the system, then that user's UserId.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		introduceBy: FormControl<number | null | undefined>,

		/**
		 * Name of the user.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique number maintain by application to idenify user.
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Type of the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		typeId: FormControl<number | null | undefined>,

		/**
		 * Indentity number(primary key) for user object. Generated in DB table when inserting a record.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateUserDTOFormGroup() {
		return new FormGroup<UserDTOFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			externalEntityNumber: new FormControl<string | null | undefined>(undefined),
			guardian: new FormControl<number | null | undefined>(undefined),
			gymNumber: new FormControl<string | null | undefined>(undefined),
			introduceBy: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete article from the system
		 * Delete api/Article
		 * @param {number} ArticleId indentity number(primary key) for article object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfInteger} operation was success(true) or fail(false) 
		 */
		Article_Delete(ArticleId: number | null | undefined): Observable<DefaultResponseDTOOfInteger> {
			return this.http.delete<DefaultResponseDTOOfInteger>(this.baseUri + 'api/Article?ArticleId=' + ArticleId, {});
		}

		/**
		 * Add new article
		 * Post api/Article
		 * @param {ArticleDTO} requestBody article object
		 * @return {void} 
		 */
		Article_Post(requestBody: ArticleDTO): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Article', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * update existing article
		 * Put api/Article
		 * @param {ArticleDTO} requestBody article object
		 * @return {void} 
		 */
		Article_Put(requestBody: ArticleDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Article', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add article details that associate with a Gym
		 * Put api/Article/ArticleGymDetails
		 * @return {void} 
		 */
		Article_UpdateArticleGymDetails(requestBody: Array<GymArticleDetailsDTO>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Article/ArticleGymDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Article/GetAddons
		 * @param {string} searchText Search text - will be search by the name
		 * @param {string} gymIds Comma separated gymIds deafult "-1" for all gyms
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Article_GetAddons(searchText: string | null | undefined, gymIds: string | null | undefined, type: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<DefaultResponseDTOOfListOfArticleSearchDTO> {
			return this.http.get<DefaultResponseDTOOfListOfArticleSearchDTO>(this.baseUri + 'api/Article/GetAddons?searchText=' + (searchText == null ? '' : encodeURIComponent(searchText)) + '&gymIds=' + (gymIds == null ? '' : encodeURIComponent(gymIds)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Gym specific properties for article
		 * Get api/Article/GymArticle/{articleId}/{gymId}
		 * @param {number} articleId indentity number(primary key) for article object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} gymId indentity number(primary key) for gym object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GymArticleDetailsDTO} API Response with Article entity
		 */
		Article_GymArticleDetails(articleId: number, gymId: number): Observable<GymArticleDetailsDTO> {
			return this.http.get<GymArticleDetailsDTO>(this.baseUri + 'api/Article/GymArticle/' + articleId + '/' + gymId, {});
		}

		/**
		 * Add measure unit
		 * Post api/Article/MeasureUnit
		 * @param {Array<MeasureUnitDTO>} requestBody list of measureUnit
		 * @return {void} 
		 */
		Article_AddMeasureUnit(requestBody: Array<MeasureUnitDTO>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Article/MeasureUnit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mesure units
		 * Get api/Article/MeasureUnits
		 * @param {string} type type of the measure unit (all, item, service)
		 * @return {void} 
		 */
		Article_GetMeasureUnits(type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Article/MeasureUnits?type=' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Revenue Accounts
		 * Get api/Article/RevenueAccounts
		 * @return {void} 
		 */
		Article_GetRevenueAccounts(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Article/RevenueAccounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search articles
		 * It will only return basic information of article
		 * Get api/Article/Search
		 * @param {string} searchText part of article name
		 * @param {number} gymId -1 for all gyms 
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} type filter article type. default is 'all'
		 * @param {string} orderBy order by column.!-- invalid column will give internal server error
		 * @param {number} limit number of recode in result and default is 100. use negative numbers to order by desc
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset number of recodes to skip
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} activeStatus Active Status 1 : Active, 2: Inactive, 3: All, Default : 1
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfListOfArticleSearchDTO} API Response with set of a Article entities
		 */
		Article_Search(searchText: string | null | undefined, gymId: number | null | undefined, type: string | null | undefined, orderBy: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, activeStatus: number | null | undefined): Observable<DefaultResponseDTOOfListOfArticleSearchDTO> {
			return this.http.get<DefaultResponseDTOOfListOfArticleSearchDTO>(this.baseUri + 'api/Article/Search?searchText=' + (searchText == null ? '' : encodeURIComponent(searchText)) + '&gymId=' + gymId + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&limit=' + limit + '&offset=' + offset + '&activeStatus=' + activeStatus, {});
		}

		/**
		 * Deactivate existing article
		 * Put api/Article/UpdateStatus
		 * @param {number} ArticleId Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} status 1 : activate , 2 deactivate
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} userName Updating user
		 */
		Article_UpdateStatus(ArticleId: number | null | undefined, status: number | null | undefined, userName: string | null | undefined): Observable<DefaultResponseDTOOfInteger> {
			return this.http.put<DefaultResponseDTOOfInteger>(this.baseUri + 'api/Article/UpdateStatus?ArticleId=' + ArticleId + '&status=' + status + '&userName=' + (userName == null ? '' : encodeURIComponent(userName)), null, {});
		}

		/**
		 * Get article details
		 * This will return all properties related to article entity
		 * Get api/Article/{articleID}
		 * @param {number} articleID indentity number (primary key) for article object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfArticleDTO} API Response with Article entity
		 */
		Article_get(articleID: number): Observable<DefaultResponseDTOOfArticleDTO> {
			return this.http.get<DefaultResponseDTOOfArticleDTO>(this.baseUri + 'api/Article/' + articleID, {});
		}

		/**
		 * Authenticate and provide token for autherizations.
		 * Post api/Auth/login
		 * @param {LoginDTO} requestBody Login Credentials
		 * @return {void} Authorizized with a new token or unauthorized request.
		 */
		Auth_Login(requestBody: LoginDTO): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Auth/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get gym details
		 * This will return all properties related to gym entity
		 * Get api/Gym/{gymID}
		 * @param {number} gymID indentity number (primary key) for gym object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfGymDTO} API Response with Gym entity
		 */
		Gym_get(gymID: number): Observable<DefaultResponseDTOOfGymDTO> {
			return this.http.get<DefaultResponseDTOOfGymDTO>(this.baseUri + 'api/Gym/' + gymID, {});
		}

		/**
		 * Get all of the members details
		 * This will return all properties related to member entity
		 * Get api/Membership
		 * @return {Array<MemberDTO>} API Response with all Members entity as a list.
		 */
		Membership_Get(): Observable<Array<MemberDTO>> {
			return this.http.get<Array<MemberDTO>>(this.baseUri + 'api/Membership', {});
		}

		/**
		 * Add new Member
		 * Post api/Membership
		 * @param {MemberDTO} requestBody member object
		 * @return {boolean} newly created member entity
		 */
		Membership_Post(requestBody: MemberDTO): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/Membership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete existing package
		 * Delete api/Package
		 * @param {number} PackageId primary key of package entity
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfBoolean} status 1  : success, status 404 : package not found, status -2: package already in use 
		 */
		Package_Delete(PackageId: number | null | undefined): Observable<DefaultResponseDTOOfBoolean> {
			return this.http.delete<DefaultResponseDTOOfBoolean>(this.baseUri + 'api/Package?PackageId=' + PackageId, {});
		}

		/**
		 * Get package details by packageId
		 * Get api/Package
		 * @param {number} packageId primary key of package entity
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DefaultResponseDTOOfPackageDTO} all the fields that related to the package
		 */
		Package_Get(packageId: number | null | undefined): Observable<DefaultResponseDTOOfPackageDTO> {
			return this.http.get<DefaultResponseDTOOfPackageDTO>(this.baseUri + 'api/Package?packageId=' + packageId, {});
		}

		/**
		 * Insert new package into the system
		 * Post api/Package
		 * @param {PackageDTO} requestBody package object
		 * @return {void} 
		 */
		Package_Post(requestBody: PackageDTO): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Package', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update existing package by its ID
		 * Put api/Package
		 * @param {PackageDTO} requestBody package object
		 * @return {void} 
		 */
		Package_Put(requestBody: PackageDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Package', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search packages
		 * Get api/Package/Search
		 * @param {string} searchText part of package name
		 * @param {number} gymId primary key of TL gym entity
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} type filter package type.!-- default is 'all'
		 * @param {string} orderBy order by column.!-- invalid column will give internal server error
		 * @param {number} limit number of recode in result and default is 100. use negative numbers to order by desc
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset number of recodes to skip
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} activeStatus active status active : 1, inactive : 2, all 3, deafult : 1
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} categoryId Packge Category Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} startpPrice Start price of the price Range
		 *     Type: decimal
		 * @param {number} endPrice End Price of the price Range
		 *     Type: decimal
		 * @param {number} requestSource 1 : MRM, 2 : Mobile 
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<DefaultResponseDTOOfPackageSearchDTO>} basic information of package entity
		 */
		Package_Search(searchText: string | null | undefined, gymId: number | null | undefined, type: string | null | undefined, orderBy: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, activeStatus: number | null | undefined, categoryId: number | null | undefined, startpPrice: number | null | undefined, endPrice: number | null | undefined, requestSource: number | null | undefined): Observable<Array<DefaultResponseDTOOfPackageSearchDTO>> {
			return this.http.get<Array<DefaultResponseDTOOfPackageSearchDTO>>(this.baseUri + 'api/Package/Search?searchText=' + (searchText == null ? '' : encodeURIComponent(searchText)) + '&gymId=' + gymId + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&limit=' + limit + '&offset=' + offset + '&activeStatus=' + activeStatus + '&categoryId=' + categoryId + '&startpPrice=' + startpPrice + '&endPrice=' + endPrice + '&requestSource=' + requestSource, {});
		}

		/**
		 * Status update of existing package
		 * Put api/Package/UpdateStatus
		 * @param {number} packageId package Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} status status : 1 activate, 2 : deactivate
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} userName Status updated User
		 * @return {DefaultResponseDTOOfBoolean} status 1 : success, status 404 : package not found, status -2: package already in use 
		 */
		Package_UpdateStatus(packageId: number | null | undefined, status: number | null | undefined, userName: string | null | undefined): Observable<DefaultResponseDTOOfBoolean> {
			return this.http.put<DefaultResponseDTOOfBoolean>(this.baseUri + 'api/Package/UpdateStatus?packageId=' + packageId + '&status=' + status + '&userName=' + (userName == null ? '' : encodeURIComponent(userName)), null, {});
		}

		/**
		 * Get the current status of message
		 * Get api/Status
		 * @param {string} messageId respose of POST request
		 * @return {MessageStatus} same response result will retrun with different status and messageText
		 */
		Status_Get(messageId: string | null | undefined): Observable<MessageStatus> {
			return this.http.get<MessageStatus>(this.baseUri + 'api/Status?messageId=' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}

		/**
		 * Get the all Test objects.
		 * Get api/Test
		 * @return {TestDTO} API Response with test objects as a list.
		 */
		Test_get(): Observable<TestDTO> {
			return this.http.get<TestDTO>(this.baseUri + 'api/Test', {});
		}

		/**
		 * Get all Users detail
		 * This will return all properties related to User entity
		 * Get api/User
		 * @return {UserDTO} API Response with User entity
		 */
		User_Get(): Observable<UserDTO> {
			return this.http.get<UserDTO>(this.baseUri + 'api/User', {});
		}

		/**
		 * Register a new User
		 * Post api/User/registerUser
		 * @param {number} UserId Indentity number(primary key) for user object. Generated in DB table when inserting a record.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} AccountNumber Account number of the user.It can be any stakeholder of the application.even can be a gym.
		 *             
		 * @param {string} GymNumber If this user is a gym, then the gym number.
		 *             
		 * @param {string} ExternalEntityNumber Entity number that make a relationship with BOX API DB.
		 *             
		 * @param {string} Name Name of the user.
		 *             
		 * @param {string} Number Unique number maintain by application to idenify user.
		 *             
		 * @param {number} IntroduceBy If Someone introduced this user to the system, then that user's UserId.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} Guardian Gaurdian of the this user if he/she is under 18 years old.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} TypeId Type of the user.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} API Response
		 */
		User_registerUser(UserId: number | null | undefined, AccountNumber: string | null | undefined, GymNumber: string | null | undefined, ExternalEntityNumber: string | null | undefined, Name: string | null | undefined, Number: string | null | undefined, IntroduceBy: number | null | undefined, Guardian: number | null | undefined, TypeId: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/User/registerUser?UserId=' + UserId + '&AccountNumber=' + (AccountNumber == null ? '' : encodeURIComponent(AccountNumber)) + '&GymNumber=' + (GymNumber == null ? '' : encodeURIComponent(GymNumber)) + '&ExternalEntityNumber=' + (ExternalEntityNumber == null ? '' : encodeURIComponent(ExternalEntityNumber)) + '&Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Number=' + (Number == null ? '' : encodeURIComponent(Number)) + '&IntroduceBy=' + IntroduceBy + '&Guardian=' + Guardian + '&TypeId=' + TypeId, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an exsisting User
		 * Put api/User/updateuser
		 * @param {number} UserId Indentity number(primary key) for user object. Generated in DB table when inserting a record.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} AccountNumber Account number of the user.It can be any stakeholder of the application.even can be a gym.
		 *             
		 * @param {string} GymNumber If this user is a gym, then the gym number.
		 *             
		 * @param {string} ExternalEntityNumber Entity number that make a relationship with BOX API DB.
		 *             
		 * @param {string} Name Name of the user.
		 *             
		 * @param {string} Number Unique number maintain by application to idenify user.
		 *             
		 * @param {number} IntroduceBy If Someone introduced this user to the system, then that user's UserId.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} Guardian Gaurdian of the this user if he/she is under 18 years old.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} TypeId Type of the user.
		 *             
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} API Response true or false
		 */
		User_updateUser(UserId: number | null | undefined, AccountNumber: string | null | undefined, GymNumber: string | null | undefined, ExternalEntityNumber: string | null | undefined, Name: string | null | undefined, Number: string | null | undefined, IntroduceBy: number | null | undefined, Guardian: number | null | undefined, TypeId: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/User/updateuser?UserId=' + UserId + '&AccountNumber=' + (AccountNumber == null ? '' : encodeURIComponent(AccountNumber)) + '&GymNumber=' + (GymNumber == null ? '' : encodeURIComponent(GymNumber)) + '&ExternalEntityNumber=' + (ExternalEntityNumber == null ? '' : encodeURIComponent(ExternalEntityNumber)) + '&Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Number=' + (Number == null ? '' : encodeURIComponent(Number)) + '&IntroduceBy=' + IntroduceBy + '&Guardian=' + Guardian + '&TypeId=' + TypeId, null, { observe: 'response', responseType: 'text' });
		}
	}

}

