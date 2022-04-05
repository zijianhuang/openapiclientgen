using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class ComponentsToTsTypesTests
	{
		public ComponentsToTsTypesTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen));
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestSimplePet()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string;

		/** Type of a pet */
		petType?: string;
		BirthDate?: Date;

		/** The id of a pet */
		id?: string;
	}

}

";
			string s = helper.TranslateDefToCode("SwagMock\\SimplePet.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestSimplePetCat()
		{
			string expected = @"export namespace MyNS {
	export interface Pet {

		/** The name given to a pet */
		name?: string;

		/** Type of a pet */
		petType?: string;
	}


	/** A representation of a cat */
	export interface Cat extends Pet {

		/** The measured skill for hunting */
		huntingSkill?: string;
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
		name?: string;

		/** Type of a pet */
		petType?: string;

		/** Pet status in the store */
		status?: PetStatus;
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
		name?: string;

		/** Type of a pet */
		petType?: string;

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
		name?: string;

		/** Type of a pet */
		petType?: string;

		/**
		 * Tags attached to the pet
		 * Minimum items: 1
		 */
		tags?: Array<Tag>;
	}

	export interface Tag {

		/** Tag ID */
		id?: number;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string;
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
		quantity?: number;

		/** Estimated ship date */
		shipDate?: Date;

		/** Order Status */
		status?: OrderStatus;

		/** Indicates whenever order was completed or not */
		complete?: boolean;

		/** Unique Request Id */
		requestId?: string;
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
		id?: number;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string;
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
		petType?: string;
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
	}

}
