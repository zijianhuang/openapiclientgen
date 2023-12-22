using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class ComponentsToTsTypesFormGroupTests
	{
		public ComponentsToTsTypesFormGroupTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen));
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestSimplePet()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;
		BirthDate?: Date | null;

		/** The id of a pet */
		id?: string | null;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
		BirthDate: FormControl<Date | null | undefined>,

		/** The id of a pet */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimplePet.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestNestedComplex()
		{
			string expected = @"export namespace MyNS {
	export interface Category {

		/** Category ID */
		id?: number | null;

		/**
		 * Category name
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface CategoryFormProperties {

		/** Category ID */
		id: FormControl<number | null | undefined>,

		/**
		 * Category name
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface Pet {

		/** Categories this pet belongs to */
		category?: Category;

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;
		BirthDate?: Date | null;

		/** The id of a pet */
		id?: string | null;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
		BirthDate: FormControl<Date | null | undefined>,

		/** The id of a pet */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimplePetNestedComplex.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestSimplePetCat()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a cat */
	export interface Cat extends Pet {

		/** The measured skill for hunting */
		huntingSkill?: string | null;
	}

	/** A representation of a cat */
	export interface CatFormProperties extends PetFormProperties {

		/** The measured skill for hunting */
		huntingSkill: FormControl<string | null | undefined>,
	}
	export function CreateCatFormGroup() {
		return new FormGroup<CatFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
			huntingSkill: new FormControl<string | null | undefined>(undefined),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimplePetCat.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimpleEnum()
		{
			string expected = @"export namespace MyNS {

	/** Phone types */
	export enum PhoneType { Tel = 0, Mobile = 1, Skype = 2, Fax = 3 }

}

";
			string s = helper.TranslateDefToCode("SwagMock\\Enum.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimpleIntEnum()
		{
			string expected = @"export namespace MyNS {

	/** Integer enum types */
	export enum IntType { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

}

";
			string s = helper.TranslateDefToCode("SwagMock\\IntEnum.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestCasualEnum()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;

		/** Pet status in the store */
		status?: PetStatus | null;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,

		/** Pet status in the store */
		status: FormControl<PetStatus | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PetStatus | null | undefined>(undefined),
		});

	}

	export enum PetStatus { available = 0, pending = 1, sold = 2 }

}

";
			string s = helper.TranslateDefToCode("SwagMock\\CasualEnum.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestStringArray()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;

		/**
		 * The list of URL to a cute photos featuring pet
		 * Maximum items: 20
		 */
		photoUrls?: Array<string>;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\StringArray.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestCustomTypeArray()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string | null;

		/** Type of a pet */
		petType?: string | null;

		/**
		 * Tags attached to the pet
		 * Minimum items: 1
		 */
		tags?: Array<Tag>;
	}
	export interface PetFormProperties {

		/** The name given to a pet */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			petType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface TagFormProperties {

		/** Tag ID */
		id: FormControl<number | null | undefined>,

		/**
		 * Tag name
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\CustomTypeArray.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimpleOrder()
		{
			string expected = @"export namespace MyNS {
	export interface Order {

		/** Minimum: 1.0 */
		quantity?: number | null;

		/** Estimated ship date */
		shipDate?: Date | null;

		/** Order Status */
		status?: OrderStatus | null;

		/** Indicates whenever order was completed or not */
		complete?: boolean | null;

		/** Unique Request Id */
		requestId?: string | null;
	}
	export interface OrderFormProperties {

		/** Minimum: 1.0 */
		quantity: FormControl<number | null | undefined>,

		/** Estimated ship date */
		shipDate: FormControl<Date | null | undefined>,

		/** Order Status */
		status: FormControl<OrderStatus | null | undefined>,

		/** Indicates whenever order was completed or not */
		complete: FormControl<boolean | null | undefined>,

		/** Unique Request Id */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.min(1.0)]),
			shipDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OrderStatus | null | undefined>(undefined),
			complete: new FormControl<boolean | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimpleOrder.json");
			Assert.Equal(expected, s);
		}

		/// <summary>
		/// Validators.minLength
		/// </summary>
		[Fact]
		public void TestTypeAlias()
		{
			string expected = @"export namespace MyNS {
	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface TagFormProperties {

		/** Tag ID */
		id: FormControl<number | null | undefined>,

		/**
		 * Tag name
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\TypeAlias.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestRequired()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/**
		 * The name given to a pet
		 * Required
		 */
		name: string;

		/** Type of a pet */
		petType?: string | null;
	}
	export interface PetFormProperties {

		/**
		 * The name given to a pet
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Type of a pet */
		petType: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			petType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a cat */
	export interface Cat extends Pet {

		/**
		 * The measured skill for hunting
		 * Required
		 */
		huntingSkill: string;
	}

	/** A representation of a cat */
	export interface CatFormProperties extends PetFormProperties {

		/**
		 * The measured skill for hunting
		 * Required
		 */
		huntingSkill: FormControl<string | null | undefined>,
	}
	export function CreateCatFormGroup() {
		return new FormGroup<CatFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			petType: new FormControl<string | null | undefined>(undefined),
			huntingSkill: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\Required.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestDic()
		{
			string expected = @"import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Model information */
	export interface TestModel {
		stringDict?: {[id: string]: string };
		dateDict?: {[id: string]: Date };
		intDict?: {[id: string]: number };
		int32Dict?: {[id: string]: number };
		int64Dict?: {[id: string]: number };
		floatDict?: {[id: string]: number };
		doubleDict?: {[id: string]: number };
		numberDict?: {[id: string]: number };
		tagDict?: {[id: string]: Tag };
		objectDict?: {[id: string]: any };
	}

	/** Model information */
	export interface TestModelFormProperties {
		stringDict: FormControl<{[id: string]: string } | null | undefined>,
		dateDict: FormControl<{[id: string]: Date } | null | undefined>,
		intDict: FormControl<{[id: string]: number } | null | undefined>,
		int32Dict: FormControl<{[id: string]: number } | null | undefined>,
		int64Dict: FormControl<{[id: string]: number } | null | undefined>,
		floatDict: FormControl<{[id: string]: number } | null | undefined>,
		doubleDict: FormControl<{[id: string]: number } | null | undefined>,
		numberDict: FormControl<{[id: string]: number } | null | undefined>,
		tagDict: FormControl<{[id: string]: Tag } | null | undefined>,
		objectDict: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateTestModelFormGroup() {
		return new FormGroup<TestModelFormProperties>({
			stringDict: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			dateDict: new FormControl<{[id: string]: Date } | null | undefined>(undefined),
			intDict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			int32Dict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			int64Dict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			floatDict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			doubleDict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			numberDict: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			tagDict: new FormControl<{[id: string]: Tag } | null | undefined>(undefined),
			objectDict: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface TagFormProperties {

		/** Tag ID */
		id: FormControl<number | null | undefined>,

		/**
		 * Tag name
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	@Injectable()
	export class Misc {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get hello
		 * @return {TestModel} Success
		 */
		HelloGet(): Observable<TestModel> {
			return this.http.get<TestModel>(this.baseUri + 'hello', {});
		}
	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\dict_test.yaml", new Fonlow.OpenApiClientGen.ClientTypes.Settings
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy= Fonlow.OpenApiClientGen.ClientTypes.ActionNameStrategy.PathMethodQueryParameters,
				UseSystemTextJson = true,
				UsePascalCase = true,
				DecorateDataModelWithPropertyName = true,
				DataAnnotationsToComments = true,
			});
			Assert.Equal(expected, s);
		}


	}

}
