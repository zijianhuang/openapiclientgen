using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class ComponentsToTsTypesTests
	{
		public ComponentsToTsTypesTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen), new TestHelpers.CasualTestingSettings(false, false));
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


	/** A representation of a cat */
	export interface Cat extends Pet {

		/** The measured skill for hunting */
		huntingSkill?: string | null;
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

	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string | null;
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

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimpleOrder.json");
			Assert.Equal(expected, s);
		}

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


	/** A representation of a cat */
	export interface Cat extends Pet {

		/**
		 * The measured skill for hunting
		 * Required
		 */
		huntingSkill: string;
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

	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/** Tag name */
		name?: string | null;
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
				DecorateDataModelWithPropertyName = true
			});
			Assert.Equal(expected, s);
		}


	}

}
