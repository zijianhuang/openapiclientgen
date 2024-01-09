import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateWebACLResponse {
	}
	export interface AssociateWebACLResponseFormProperties {
	}
	export function CreateAssociateWebACLResponseFormGroup() {
		return new FormGroup<AssociateWebACLResponseFormProperties>({
		});

	}

	export interface AssociateWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface AssociateWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebACLRequestFormGroup() {
		return new FormGroup<AssociateWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface WAFInternalErrorException {
	}
	export interface WAFInternalErrorExceptionFormProperties {
	}
	export function CreateWAFInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFInternalErrorExceptionFormProperties>({
		});

	}

	export interface WAFInvalidAccountException {
	}
	export interface WAFInvalidAccountExceptionFormProperties {
	}
	export function CreateWAFInvalidAccountExceptionFormGroup() {
		return new FormGroup<WAFInvalidAccountExceptionFormProperties>({
		});

	}

	export interface WAFInvalidParameterException {
	}
	export interface WAFInvalidParameterExceptionFormProperties {
	}
	export function CreateWAFInvalidParameterExceptionFormGroup() {
		return new FormGroup<WAFInvalidParameterExceptionFormProperties>({
		});

	}

	export interface WAFNonexistentItemException {
	}
	export interface WAFNonexistentItemExceptionFormProperties {
	}
	export function CreateWAFNonexistentItemExceptionFormGroup() {
		return new FormGroup<WAFNonexistentItemExceptionFormProperties>({
		});

	}

	export interface WAFUnavailableEntityException {
	}
	export interface WAFUnavailableEntityExceptionFormProperties {
	}
	export function CreateWAFUnavailableEntityExceptionFormGroup() {
		return new FormGroup<WAFUnavailableEntityExceptionFormProperties>({
		});

	}

	export interface CreateByteMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
		ByteMatchSet?: ByteMatchSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateByteMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateByteMatchSetResponseFormGroup() {
		return new FormGroup<CreateByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface ByteMatchSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		ByteMatchTuples: Array<ByteMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface ByteMatchSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateByteMatchSetFormGroup() {
		return new FormGroup<ByteMatchSetFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p> */
	export interface ByteMatchTuple {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;

		/** Required */
		TargetString: string;

		/** Required */
		TextTransformation: ByteMatchTupleTextTransformation;

		/** Required */
		PositionalConstraint: ByteMatchTuplePositionalConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p> */
	export interface ByteMatchTupleFormProperties {

		/** Required */
		TargetString: FormControl<string | null | undefined>,

		/** Required */
		TextTransformation: FormControl<ByteMatchTupleTextTransformation | null | undefined>,

		/** Required */
		PositionalConstraint: FormControl<ByteMatchTuplePositionalConstraint | null | undefined>,
	}
	export function CreateByteMatchTupleFormGroup() {
		return new FormGroup<ByteMatchTupleFormProperties>({
			TargetString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextTransformation: new FormControl<ByteMatchTupleTextTransformation | null | undefined>(undefined, [Validators.required]),
			PositionalConstraint: new FormControl<ByteMatchTuplePositionalConstraint | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p> */
	export interface FieldToMatch {

		/** Required */
		Type: FieldToMatchType;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Data?: string | null;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p> */
	export interface FieldToMatchFormProperties {

		/** Required */
		Type: FormControl<FieldToMatchType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateFieldToMatchFormGroup() {
		return new FormGroup<FieldToMatchFormProperties>({
			Type: new FormControl<FieldToMatchType | null | undefined>(undefined, [Validators.required]),
			Data: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export enum FieldToMatchType { URI = 0, QUERY_STRING = 1, HEADER = 2, METHOD = 3, BODY = 4, SINGLE_QUERY_ARG = 5, ALL_QUERY_ARGS = 6 }

	export enum ByteMatchTupleTextTransformation { NONE = 0, COMPRESS_WHITE_SPACE = 1, HTML_ENTITY_DECODE = 2, LOWERCASE = 3, CMD_LINE = 4, URL_DECODE = 5 }

	export enum ByteMatchTuplePositionalConstraint { EXACTLY = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CONTAINS_WORD = 4 }

	export interface CreateByteMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateByteMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateByteMatchSetRequestFormGroup() {
		return new FormGroup<CreateByteMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface WAFDisallowedNameException {
	}
	export interface WAFDisallowedNameExceptionFormProperties {
	}
	export function CreateWAFDisallowedNameExceptionFormGroup() {
		return new FormGroup<WAFDisallowedNameExceptionFormProperties>({
		});

	}

	export interface WAFStaleDataException {
	}
	export interface WAFStaleDataExceptionFormProperties {
	}
	export function CreateWAFStaleDataExceptionFormGroup() {
		return new FormGroup<WAFStaleDataExceptionFormProperties>({
		});

	}

	export interface WAFLimitsExceededException {
	}
	export interface WAFLimitsExceededExceptionFormProperties {
	}
	export function CreateWAFLimitsExceededExceptionFormGroup() {
		return new FormGroup<WAFLimitsExceededExceptionFormProperties>({
		});

	}

	export interface CreateGeoMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
		GeoMatchSet?: GeoMatchSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateGeoMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateGeoMatchSetResponseFormGroup() {
		return new FormGroup<CreateGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
	export interface GeoMatchSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		GeoMatchConstraints: Array<GeoMatchConstraint>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
	export interface GeoMatchSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchSetFormGroup() {
		return new FormGroup<GeoMatchSetFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p> */
	export interface GeoMatchConstraint {

		/** Required */
		Type: GeoMatchConstraintType;

		/** Required */
		Value: GeoMatchConstraintValue;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p> */
	export interface GeoMatchConstraintFormProperties {

		/** Required */
		Type: FormControl<GeoMatchConstraintType | null | undefined>,

		/** Required */
		Value: FormControl<GeoMatchConstraintValue | null | undefined>,
	}
	export function CreateGeoMatchConstraintFormGroup() {
		return new FormGroup<GeoMatchConstraintFormProperties>({
			Type: new FormControl<GeoMatchConstraintType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<GeoMatchConstraintValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoMatchConstraintType { Country = 0 }

	export enum GeoMatchConstraintValue { AF = 0, AX = 1, AL = 2, DZ = 3, AS = 4, AD = 5, AO = 6, AI = 7, AQ = 8, AG = 9, AR = 10, AM = 11, AW = 12, AU = 13, AT = 14, AZ = 15, BS = 16, BH = 17, BD = 18, BB = 19, BY = 20, BE = 21, BZ = 22, BJ = 23, BM = 24, BT = 25, BO = 26, BQ = 27, BA = 28, BW = 29, BV = 30, BR = 31, IO = 32, BN = 33, BG = 34, BF = 35, BI = 36, KH = 37, CM = 38, CA = 39, CV = 40, KY = 41, CF = 42, TD = 43, CL = 44, CN = 45, CX = 46, CC = 47, CO = 48, KM = 49, CG = 50, CD = 51, CK = 52, CR = 53, CI = 54, HR = 55, CU = 56, CW = 57, CY = 58, CZ = 59, DK = 60, DJ = 61, DM = 62, DO = 63, EC = 64, EG = 65, SV = 66, GQ = 67, ER = 68, EE = 69, ET = 70, FK = 71, FO = 72, FJ = 73, FI = 74, FR = 75, GF = 76, PF = 77, TF = 78, GA = 79, GM = 80, GE = 81, DE = 82, GH = 83, GI = 84, GR = 85, GL = 86, GD = 87, GP = 88, GU = 89, GT = 90, GG = 91, GN = 92, GW = 93, GY = 94, HT = 95, HM = 96, VA = 97, HN = 98, HK = 99, HU = 100, IS = 101, IN = 102, ID = 103, IR = 104, IQ = 105, IE = 106, IM = 107, IL = 108, IT = 109, JM = 110, JP = 111, JE = 112, JO = 113, KZ = 114, KE = 115, KI = 116, KP = 117, KR = 118, KW = 119, KG = 120, LA = 121, LV = 122, LB = 123, LS = 124, LR = 125, LY = 126, LI = 127, LT = 128, LU = 129, MO = 130, MK = 131, MG = 132, MW = 133, MY = 134, MV = 135, ML = 136, MT = 137, MH = 138, MQ = 139, MR = 140, MU = 141, YT = 142, MX = 143, FM = 144, MD = 145, MC = 146, MN = 147, ME = 148, MS = 149, MA = 150, MZ = 151, MM = 152, NA = 153, NR = 154, NP = 155, NL = 156, NC = 157, NZ = 158, NI = 159, NE = 160, NG = 161, NU = 162, NF = 163, MP = 164, NO = 165, OM = 166, PK = 167, PW = 168, PS = 169, PA = 170, PG = 171, PY = 172, PE = 173, PH = 174, PN = 175, PL = 176, PT = 177, PR = 178, QA = 179, RE = 180, RO = 181, RU = 182, RW = 183, BL = 184, SH = 185, KN = 186, LC = 187, MF = 188, PM = 189, VC = 190, WS = 191, SM = 192, ST = 193, SA = 194, SN = 195, RS = 196, SC = 197, SL = 198, SG = 199, SX = 200, SK = 201, SI = 202, SB = 203, SO = 204, ZA = 205, GS = 206, SS = 207, ES = 208, LK = 209, SD = 210, SR = 211, SJ = 212, SZ = 213, SE = 214, CH = 215, SY = 216, TW = 217, TJ = 218, TZ = 219, TH = 220, TL = 221, TG = 222, TK = 223, TO = 224, TT = 225, TN = 226, TR = 227, TM = 228, TC = 229, TV = 230, UG = 231, UA = 232, AE = 233, GB = 234, US = 235, UM = 236, UY = 237, UZ = 238, VU = 239, VE = 240, VN = 241, VG = 242, VI = 243, WF = 244, EH = 245, YE = 246, ZM = 247, ZW = 248 }

	export interface CreateGeoMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateGeoMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateGeoMatchSetRequestFormGroup() {
		return new FormGroup<CreateGeoMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateIPSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
		IPSet?: IPSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateIPSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetResponseFormGroup() {
		return new FormGroup<CreateIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
	export interface IPSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		IPSetDescriptors: Array<IPSetDescriptor>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
	export interface IPSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIPSetFormGroup() {
		return new FormGroup<IPSetFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p> */
	export interface IPSetDescriptor {

		/** Required */
		Type: IPSetDescriptorType;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Value: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p> */
	export interface IPSetDescriptorFormProperties {

		/** Required */
		Type: FormControl<IPSetDescriptorType | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateIPSetDescriptorFormGroup() {
		return new FormGroup<IPSetDescriptorFormProperties>({
			Type: new FormControl<IPSetDescriptorType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export enum IPSetDescriptorType { IPV4 = 0, IPV6 = 1 }

	export interface CreateIPSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateIPSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetRequestFormGroup() {
		return new FormGroup<CreateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRateBasedRuleResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
		Rule?: RateBasedRule;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateRateBasedRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRateBasedRuleResponseFormGroup() {
		return new FormGroup<CreateRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
	export interface RateBasedRule {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Required */
		MatchPredicates: Array<Predicate>;

		/** Required */
		RateKey: RateBasedRuleRateKey;

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: number;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
	export interface RateBasedRuleFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		RateKey: FormControl<RateBasedRuleRateKey | null | undefined>,

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: FormControl<number | null | undefined>,
	}
	export function CreateRateBasedRuleFormGroup() {
		return new FormGroup<RateBasedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			RateKey: new FormControl<RateBasedRuleRateKey | null | undefined>(undefined, [Validators.required]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(100), Validators.max(2000000000)]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p> */
	export interface Predicate {

		/** Required */
		Negated: boolean;

		/** Required */
		Type: PredicateType;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DataId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p> */
	export interface PredicateFormProperties {

		/** Required */
		Negated: FormControl<boolean | null | undefined>,

		/** Required */
		Type: FormControl<PredicateType | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DataId: FormControl<string | null | undefined>,
	}
	export function CreatePredicateFormGroup() {
		return new FormGroup<PredicateFormProperties>({
			Negated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PredicateType | null | undefined>(undefined, [Validators.required]),
			DataId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export enum PredicateType { IPMatch = 0, ByteMatch = 1, SqlInjectionMatch = 2, GeoMatch = 3, SizeConstraint = 4, XssMatch = 5, RegexMatch = 6 }

	export enum RateBasedRuleRateKey { IP = 0 }

	export interface CreateRateBasedRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: string;

		/** Required */
		RateKey: RateBasedRuleRateKey;

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Minimum items: 1 */
		Tags?: Array<Tag>;
	}
	export interface CreateRateBasedRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		RateKey: FormControl<RateBasedRuleRateKey | null | undefined>,

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRateBasedRuleRequestFormGroup() {
		return new FormGroup<CreateRateBasedRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			RateKey: new FormControl<RateBasedRuleRateKey | null | undefined>(undefined, [Validators.required]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(100), Validators.max(2000000000)]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('.*')]),
		});

	}

	export interface WAFTagOperationException {
	}
	export interface WAFTagOperationExceptionFormProperties {
	}
	export function CreateWAFTagOperationExceptionFormGroup() {
		return new FormGroup<WAFTagOperationExceptionFormProperties>({
		});

	}

	export interface WAFTagOperationInternalErrorException {
	}
	export interface WAFTagOperationInternalErrorExceptionFormProperties {
	}
	export function CreateWAFTagOperationInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFTagOperationInternalErrorExceptionFormProperties>({
		});

	}

	export interface WAFBadRequestException {
	}
	export interface WAFBadRequestExceptionFormProperties {
	}
	export function CreateWAFBadRequestExceptionFormGroup() {
		return new FormGroup<WAFBadRequestExceptionFormProperties>({
		});

	}

	export interface CreateRegexMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
		RegexMatchSet?: RegexMatchSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateRegexMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexMatchSetResponseFormGroup() {
		return new FormGroup<CreateRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface RegexMatchSet {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		RegexMatchTuples?: Array<RegexMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface RegexMatchSetFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchSetFormGroup() {
		return new FormGroup<RegexMatchSetFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> */
	export interface RegexMatchTuple {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: ByteMatchTupleTextTransformation;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> */
	export interface RegexMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<ByteMatchTupleTextTransformation | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchTupleFormGroup() {
		return new FormGroup<RegexMatchTupleFormProperties>({
			TextTransformation: new FormControl<ByteMatchTupleTextTransformation | null | undefined>(undefined, [Validators.required]),
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRegexMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateRegexMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexMatchSetRequestFormGroup() {
		return new FormGroup<CreateRegexMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRegexPatternSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
		RegexPatternSet?: RegexPatternSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateRegexPatternSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexPatternSetResponseFormGroup() {
		return new FormGroup<CreateRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
	export interface RegexPatternSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Required
		 * Maximum items: 10
		 */
		RegexPatternStrings: Array<string>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
	export interface RegexPatternSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetFormGroup() {
		return new FormGroup<RegexPatternSetFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRegexPatternSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateRegexPatternSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexPatternSetRequestFormGroup() {
		return new FormGroup<CreateRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRuleResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
		Rule?: Rule;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleResponseFormGroup() {
		return new FormGroup<CreateRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
	export interface Rule {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Required */
		Predicates: Array<Predicate>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
	export interface RuleFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Minimum items: 1 */
		Tags?: Array<Tag>;
	}
	export interface CreateRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRuleGroupResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
		RuleGroup?: RuleGroup;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateRuleGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupResponseFormGroup() {
		return new FormGroup<CreateRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
	export interface RuleGroup {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName?: string | null;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
	export interface RuleGroupFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupFormGroup() {
		return new FormGroup<RuleGroupFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateRuleGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Minimum items: 1 */
		Tags?: Array<Tag>;
	}
	export interface CreateRuleGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupRequestFormGroup() {
		return new FormGroup<CreateRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateSizeConstraintSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
		SizeConstraintSet?: SizeConstraintSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateSizeConstraintSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSizeConstraintSetResponseFormGroup() {
		return new FormGroup<CreateSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
	export interface SizeConstraintSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		SizeConstraints: Array<SizeConstraint>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
	export interface SizeConstraintSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSizeConstraintSetFormGroup() {
		return new FormGroup<SizeConstraintSetFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> */
	export interface SizeConstraint {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: ByteMatchTupleTextTransformation;

		/** Required */
		ComparisonOperator: SizeConstraintComparisonOperator;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 21474836480
		 */
		Size: number;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> */
	export interface SizeConstraintFormProperties {

		/** Required */
		TextTransformation: FormControl<ByteMatchTupleTextTransformation | null | undefined>,

		/** Required */
		ComparisonOperator: FormControl<SizeConstraintComparisonOperator | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 21474836480
		 */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateSizeConstraintFormGroup() {
		return new FormGroup<SizeConstraintFormProperties>({
			TextTransformation: new FormControl<ByteMatchTupleTextTransformation | null | undefined>(undefined, [Validators.required]),
			ComparisonOperator: new FormControl<SizeConstraintComparisonOperator | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(21474836480)]),
		});

	}

	export enum SizeConstraintComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5 }

	export interface CreateSizeConstraintSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface CreateSizeConstraintSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSizeConstraintSetRequestFormGroup() {
		return new FormGroup<CreateSizeConstraintSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** The response to a <code>CreateSqlInjectionMatchSet</code> request. */
	export interface CreateSqlInjectionMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
		SqlInjectionMatchSet?: SqlInjectionMatchSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to a <code>CreateSqlInjectionMatchSet</code> request. */
	export interface CreateSqlInjectionMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<CreateSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
	export interface SqlInjectionMatchSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		SqlInjectionMatchTuples: Array<SqlInjectionMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
	export interface SqlInjectionMatchSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetFormGroup() {
		return new FormGroup<SqlInjectionMatchSetFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface SqlInjectionMatchTuple {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: ByteMatchTupleTextTransformation;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface SqlInjectionMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<ByteMatchTupleTextTransformation | null | undefined>,
	}
	export function CreateSqlInjectionMatchTupleFormGroup() {
		return new FormGroup<SqlInjectionMatchTupleFormProperties>({
			TextTransformation: new FormControl<ByteMatchTupleTextTransformation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a <a>SqlInjectionMatchSet</a>. */
	export interface CreateSqlInjectionMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}

	/** A request to create a <a>SqlInjectionMatchSet</a>. */
	export interface CreateSqlInjectionMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<CreateSqlInjectionMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateWebACLResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
		WebACL?: WebACL;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface CreateWebACLResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLResponseFormGroup() {
		return new FormGroup<CreateWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
	export interface WebACL {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName?: string | null;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p>
		 * Required
		 */
		DefaultAction: WafAction;

		/** Required */
		Rules: Array<ActivatedRule>;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		WebACLArn?: string | null;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
	export interface WebACLFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		WebACLArn: FormControl<string | null | undefined>,
	}
	export function CreateWebACLFormGroup() {
		return new FormGroup<WebACLFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			WebACLArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
	export interface WafAction {

		/** Required */
		Type: WafActionType;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
	export interface WafActionFormProperties {

		/** Required */
		Type: FormControl<WafActionType | null | undefined>,
	}
	export function CreateWafActionFormGroup() {
		return new FormGroup<WafActionFormProperties>({
			Type: new FormControl<WafActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WafActionType { BLOCK = 0, ALLOW = 1, COUNT = 2 }


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p> */
	export interface ActivatedRule {

		/** Required */
		Priority: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
		Action?: WafAction;

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p> */
		OverrideAction?: WafOverrideAction;
		Type?: ActivatedRuleType | null;
		ExcludedRules?: Array<ExcludedRule>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p> */
	export interface ActivatedRuleFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<ActivatedRuleType | null | undefined>,
	}
	export function CreateActivatedRuleFormGroup() {
		return new FormGroup<ActivatedRuleFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Type: new FormControl<ActivatedRuleType | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p> */
	export interface WafOverrideAction {

		/** Required */
		Type: WafOverrideActionType;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p> */
	export interface WafOverrideActionFormProperties {

		/** Required */
		Type: FormControl<WafOverrideActionType | null | undefined>,
	}
	export function CreateWafOverrideActionFormGroup() {
		return new FormGroup<WafOverrideActionFormProperties>({
			Type: new FormControl<WafOverrideActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WafOverrideActionType { NONE = 0, COUNT = 1 }

	export enum ActivatedRuleType { REGULAR = 0, RATE_BASED = 1, GROUP = 2 }


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p> */
	export interface ExcludedRule {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p> */
	export interface ExcludedRuleFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateExcludedRuleFormGroup() {
		return new FormGroup<ExcludedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: string;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p>
		 * Required
		 */
		DefaultAction: WafAction;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Minimum items: 1 */
		Tags?: Array<Tag>;
	}
	export interface CreateWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLRequestFormGroup() {
		return new FormGroup<CreateWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateWebACLMigrationStackResponse {

		/**
		 * Required
		 * Min length: 1
		 */
		S3ObjectUrl: string;
	}
	export interface CreateWebACLMigrationStackResponseFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		S3ObjectUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLMigrationStackResponseFormGroup() {
		return new FormGroup<CreateWebACLMigrationStackResponseFormProperties>({
			S3ObjectUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CreateWebACLMigrationStackRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: string;

		/** Required */
		IgnoreUnsupportedType: boolean;
	}
	export interface CreateWebACLMigrationStackRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		IgnoreUnsupportedType: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateWebACLMigrationStackRequestFormGroup() {
		return new FormGroup<CreateWebACLMigrationStackRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^aws-waf-migration-[0-9A-Za-z\.\-_]*')]),
			IgnoreUnsupportedType: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInvalidOperationException {
	}
	export interface WAFInvalidOperationExceptionFormProperties {
	}
	export function CreateWAFInvalidOperationExceptionFormGroup() {
		return new FormGroup<WAFInvalidOperationExceptionFormProperties>({
		});

	}

	export interface WAFEntityMigrationException {
	}
	export interface WAFEntityMigrationExceptionFormProperties {
	}
	export function CreateWAFEntityMigrationExceptionFormGroup() {
		return new FormGroup<WAFEntityMigrationExceptionFormProperties>({
		});

	}


	/** The response to a <code>CreateXssMatchSet</code> request. */
	export interface CreateXssMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
		XssMatchSet?: XssMatchSet;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to a <code>CreateXssMatchSet</code> request. */
	export interface CreateXssMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateXssMatchSetResponseFormGroup() {
		return new FormGroup<CreateXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
	export interface XssMatchSet {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Required */
		XssMatchTuples: Array<XssMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
	export interface XssMatchSetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateXssMatchSetFormGroup() {
		return new FormGroup<XssMatchSetFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface XssMatchTuple {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: ByteMatchTupleTextTransformation;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface XssMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<ByteMatchTupleTextTransformation | null | undefined>,
	}
	export function CreateXssMatchTupleFormGroup() {
		return new FormGroup<XssMatchTupleFormProperties>({
			TextTransformation: new FormControl<ByteMatchTupleTextTransformation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create an <a>XssMatchSet</a>. */
	export interface CreateXssMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}

	/** A request to create an <a>XssMatchSet</a>. */
	export interface CreateXssMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateXssMatchSetRequestFormGroup() {
		return new FormGroup<CreateXssMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteByteMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteByteMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteByteMatchSetResponseFormGroup() {
		return new FormGroup<DeleteByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteByteMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteByteMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteByteMatchSetRequestFormGroup() {
		return new FormGroup<DeleteByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface WAFReferencedItemException {
	}
	export interface WAFReferencedItemExceptionFormProperties {
	}
	export function CreateWAFReferencedItemExceptionFormGroup() {
		return new FormGroup<WAFReferencedItemExceptionFormProperties>({
		});

	}

	export interface WAFNonEmptyEntityException {
	}
	export interface WAFNonEmptyEntityExceptionFormProperties {
	}
	export function CreateWAFNonEmptyEntityExceptionFormGroup() {
		return new FormGroup<WAFNonEmptyEntityExceptionFormProperties>({
		});

	}

	export interface DeleteGeoMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteGeoMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGeoMatchSetResponseFormGroup() {
		return new FormGroup<DeleteGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteGeoMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteGeoMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGeoMatchSetRequestFormGroup() {
		return new FormGroup<DeleteGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteIPSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteIPSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIPSetResponseFormGroup() {
		return new FormGroup<DeleteIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteIPSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteIPSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIPSetRequestFormGroup() {
		return new FormGroup<DeleteIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteLoggingConfigurationResponse {
	}
	export interface DeleteLoggingConfigurationResponseFormProperties {
	}
	export function CreateDeleteLoggingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteLoggingConfigurationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface DeleteLoggingConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeletePermissionPolicyResponse {
	}
	export interface DeletePermissionPolicyResponseFormProperties {
	}
	export function CreateDeletePermissionPolicyResponseFormGroup() {
		return new FormGroup<DeletePermissionPolicyResponseFormProperties>({
		});

	}

	export interface DeletePermissionPolicyRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface DeletePermissionPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionPolicyRequestFormGroup() {
		return new FormGroup<DeletePermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRateBasedRuleResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteRateBasedRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRateBasedRuleResponseFormGroup() {
		return new FormGroup<DeleteRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRateBasedRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteRateBasedRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRateBasedRuleRequestFormGroup() {
		return new FormGroup<DeleteRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRegexMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteRegexMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexMatchSetResponseFormGroup() {
		return new FormGroup<DeleteRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRegexMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteRegexMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexMatchSetRequestFormGroup() {
		return new FormGroup<DeleteRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRegexPatternSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteRegexPatternSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexPatternSetResponseFormGroup() {
		return new FormGroup<DeleteRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRegexPatternSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteRegexPatternSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexPatternSetRequestFormGroup() {
		return new FormGroup<DeleteRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRuleResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleResponseFormGroup() {
		return new FormGroup<DeleteRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRuleGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteRuleGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleGroupResponseFormGroup() {
		return new FormGroup<DeleteRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteRuleGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteRuleGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleGroupRequestFormGroup() {
		return new FormGroup<DeleteRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteSizeConstraintSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteSizeConstraintSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSizeConstraintSetResponseFormGroup() {
		return new FormGroup<DeleteSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteSizeConstraintSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteSizeConstraintSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSizeConstraintSetRequestFormGroup() {
		return new FormGroup<DeleteSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<DeleteSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}

	/** A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<DeleteSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteWebACLResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface DeleteWebACLResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebACLResponseFormGroup() {
		return new FormGroup<DeleteWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface DeleteWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebACLRequestFormGroup() {
		return new FormGroup<DeleteWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** The response to a request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to a request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteXssMatchSetResponseFormGroup() {
		return new FormGroup<DeleteXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}

	/** A request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteXssMatchSetRequestFormGroup() {
		return new FormGroup<DeleteXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DisassociateWebACLResponse {
	}
	export interface DisassociateWebACLResponseFormProperties {
	}
	export function CreateDisassociateWebACLResponseFormGroup() {
		return new FormGroup<DisassociateWebACLResponseFormProperties>({
		});

	}

	export interface DisassociateWebACLRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface DisassociateWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebACLRequestFormGroup() {
		return new FormGroup<DisassociateWebACLRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetByteMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
		ByteMatchSet?: ByteMatchSet;
	}
	export interface GetByteMatchSetResponseFormProperties {
	}
	export function CreateGetByteMatchSetResponseFormGroup() {
		return new FormGroup<GetByteMatchSetResponseFormProperties>({
		});

	}

	export interface GetByteMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: string;
	}
	export interface GetByteMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetByteMatchSetRequestFormGroup() {
		return new FormGroup<GetByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetChangeTokenResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface GetChangeTokenResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChangeTokenResponseFormGroup() {
		return new FormGroup<GetChangeTokenResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetChangeTokenRequest {
	}
	export interface GetChangeTokenRequestFormProperties {
	}
	export function CreateGetChangeTokenRequestFormGroup() {
		return new FormGroup<GetChangeTokenRequestFormProperties>({
		});

	}

	export interface GetChangeTokenStatusResponse {
		ChangeTokenStatus?: GetChangeTokenStatusResponseChangeTokenStatus | null;
	}
	export interface GetChangeTokenStatusResponseFormProperties {
		ChangeTokenStatus: FormControl<GetChangeTokenStatusResponseChangeTokenStatus | null | undefined>,
	}
	export function CreateGetChangeTokenStatusResponseFormGroup() {
		return new FormGroup<GetChangeTokenStatusResponseFormProperties>({
			ChangeTokenStatus: new FormControl<GetChangeTokenStatusResponseChangeTokenStatus | null | undefined>(undefined),
		});

	}

	export enum GetChangeTokenStatusResponseChangeTokenStatus { PROVISIONED = 0, PENDING = 1, INSYNC = 2 }

	export interface GetChangeTokenStatusRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface GetChangeTokenStatusRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChangeTokenStatusRequestFormGroup() {
		return new FormGroup<GetChangeTokenStatusRequestFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetGeoMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
		GeoMatchSet?: GeoMatchSet;
	}
	export interface GetGeoMatchSetResponseFormProperties {
	}
	export function CreateGetGeoMatchSetResponseFormGroup() {
		return new FormGroup<GetGeoMatchSetResponseFormProperties>({
		});

	}

	export interface GetGeoMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: string;
	}
	export interface GetGeoMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetGeoMatchSetRequestFormGroup() {
		return new FormGroup<GetGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetIPSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
		IPSet?: IPSet;
	}
	export interface GetIPSetResponseFormProperties {
	}
	export function CreateGetIPSetResponseFormGroup() {
		return new FormGroup<GetIPSetResponseFormProperties>({
		});

	}

	export interface GetIPSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: string;
	}
	export interface GetIPSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetIPSetRequestFormGroup() {
		return new FormGroup<GetIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetLoggingConfigurationResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface GetLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetLoggingConfigurationResponseFormProperties>({
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
	export interface LoggingConfiguration {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		LogDestinationConfigs: Array<string>;
		RedactedFields?: Array<FieldToMatch>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
	export interface LoggingConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetLoggingConfigurationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface GetLoggingConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetPermissionPolicyResponse {

		/**
		 * Max length: 395000
		 * Min length: 1
		 */
		Policy?: string | null;
	}
	export interface GetPermissionPolicyResponseFormProperties {

		/**
		 * Max length: 395000
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyResponseFormGroup() {
		return new FormGroup<GetPermissionPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(395000), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetPermissionPolicyRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface GetPermissionPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyRequestFormGroup() {
		return new FormGroup<GetPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRateBasedRuleResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
		Rule?: RateBasedRule;
	}
	export interface GetRateBasedRuleResponseFormProperties {
	}
	export function CreateGetRateBasedRuleResponseFormGroup() {
		return new FormGroup<GetRateBasedRuleResponseFormProperties>({
		});

	}

	export interface GetRateBasedRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;
	}
	export interface GetRateBasedRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleRequestFormGroup() {
		return new FormGroup<GetRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRateBasedRuleManagedKeysResponse {
		ManagedKeys?: Array<string>;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
	}
	export interface GetRateBasedRuleManagedKeysResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleManagedKeysResponseFormGroup() {
		return new FormGroup<GetRateBasedRuleManagedKeysResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRateBasedRuleManagedKeysRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
	}
	export interface GetRateBasedRuleManagedKeysRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleManagedKeysRequestFormGroup() {
		return new FormGroup<GetRateBasedRuleManagedKeysRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRegexMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
		RegexMatchSet?: RegexMatchSet;
	}
	export interface GetRegexMatchSetResponseFormProperties {
	}
	export function CreateGetRegexMatchSetResponseFormGroup() {
		return new FormGroup<GetRegexMatchSetResponseFormProperties>({
		});

	}

	export interface GetRegexMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: string;
	}
	export interface GetRegexMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexMatchSetRequestFormGroup() {
		return new FormGroup<GetRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRegexPatternSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
		RegexPatternSet?: RegexPatternSet;
	}
	export interface GetRegexPatternSetResponseFormProperties {
	}
	export function CreateGetRegexPatternSetResponseFormGroup() {
		return new FormGroup<GetRegexPatternSetResponseFormProperties>({
		});

	}

	export interface GetRegexPatternSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;
	}
	export interface GetRegexPatternSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexPatternSetRequestFormGroup() {
		return new FormGroup<GetRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRuleResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
		Rule?: Rule;
	}
	export interface GetRuleResponseFormProperties {
	}
	export function CreateGetRuleResponseFormGroup() {
		return new FormGroup<GetRuleResponseFormProperties>({
		});

	}

	export interface GetRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;
	}
	export interface GetRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleRequestFormGroup() {
		return new FormGroup<GetRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetRuleGroupResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
		RuleGroup?: RuleGroup;
	}
	export interface GetRuleGroupResponseFormProperties {
	}
	export function CreateGetRuleGroupResponseFormGroup() {
		return new FormGroup<GetRuleGroupResponseFormProperties>({
		});

	}

	export interface GetRuleGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;
	}
	export interface GetRuleGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleGroupRequestFormGroup() {
		return new FormGroup<GetRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetSampledRequestsResponse {
		SampledRequests?: Array<SampledHTTPRequest>;
		PopulationSize?: number | null;

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
		TimeWindow?: TimeWindow;
	}
	export interface GetSampledRequestsResponseFormProperties {
		PopulationSize: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsResponseFormGroup() {
		return new FormGroup<GetSampledRequestsResponseFormProperties>({
			PopulationSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p> */
	export interface SampledHTTPRequest {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
		 * Required
		 */
		Request: HTTPRequest;

		/**
		 * Required
		 * Minimum: 0
		 */
		Weight: number;
		Timestamp?: Date | null;
		Action?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RuleWithinRuleGroup?: string | null;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p> */
	export interface SampledHTTPRequestFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		Weight: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		Action: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RuleWithinRuleGroup: FormControl<string | null | undefined>,
	}
	export function CreateSampledHTTPRequestFormGroup() {
		return new FormGroup<SampledHTTPRequestFormProperties>({
			Weight: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			RuleWithinRuleGroup: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPRequest {
		ClientIP?: string | null;
		Country?: string | null;
		URI?: string | null;
		Method?: string | null;
		HTTPVersion?: string | null;
		Headers?: Array<HTTPHeader>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPRequestFormProperties {
		ClientIP: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		URI: FormControl<string | null | undefined>,
		Method: FormControl<string | null | undefined>,
		HTTPVersion: FormControl<string | null | undefined>,
	}
	export function CreateHTTPRequestFormGroup() {
		return new FormGroup<HTTPRequestFormProperties>({
			ClientIP: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
			Method: new FormControl<string | null | undefined>(undefined),
			HTTPVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPHeader {
		Name?: string | null;
		Value?: string | null;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPHeaderFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateHTTPHeaderFormGroup() {
		return new FormGroup<HTTPHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
	export interface TimeWindow {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
	export interface TimeWindowFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSampledRequestsRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebAclId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
		 * Required
		 */
		TimeWindow: TimeWindow;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxItems: number;
	}
	export interface GetSampledRequestsRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebAclId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsRequestFormGroup() {
		return new FormGroup<GetSampledRequestsRequestFormProperties>({
			WebAclId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetSizeConstraintSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
		SizeConstraintSet?: SizeConstraintSet;
	}
	export interface GetSizeConstraintSetResponseFormProperties {
	}
	export function CreateGetSizeConstraintSetResponseFormGroup() {
		return new FormGroup<GetSizeConstraintSetResponseFormProperties>({
		});

	}

	export interface GetSizeConstraintSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: string;
	}
	export interface GetSizeConstraintSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetSizeConstraintSetRequestFormGroup() {
		return new FormGroup<GetSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** The response to a <a>GetSqlInjectionMatchSet</a> request. */
	export interface GetSqlInjectionMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
		SqlInjectionMatchSet?: SqlInjectionMatchSet;
	}

	/** The response to a <a>GetSqlInjectionMatchSet</a> request. */
	export interface GetSqlInjectionMatchSetResponseFormProperties {
	}
	export function CreateGetSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<GetSqlInjectionMatchSetResponseFormProperties>({
		});

	}


	/** A request to get a <a>SqlInjectionMatchSet</a>. */
	export interface GetSqlInjectionMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: string;
	}

	/** A request to get a <a>SqlInjectionMatchSet</a>. */
	export interface GetSqlInjectionMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<GetSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetWebACLResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
		WebACL?: WebACL;
	}
	export interface GetWebACLResponseFormProperties {
	}
	export function CreateGetWebACLResponseFormGroup() {
		return new FormGroup<GetWebACLResponseFormProperties>({
		});

	}

	export interface GetWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;
	}
	export interface GetWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLRequestFormGroup() {
		return new FormGroup<GetWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetWebACLForResourceResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p> */
		WebACLSummary?: WebACLSummary;
	}
	export interface GetWebACLForResourceResponseFormProperties {
	}
	export function CreateGetWebACLForResourceResponseFormGroup() {
		return new FormGroup<GetWebACLForResourceResponseFormProperties>({
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p> */
	export interface WebACLSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p> */
	export interface WebACLSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateWebACLSummaryFormGroup() {
		return new FormGroup<WebACLSummaryFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetWebACLForResourceRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface GetWebACLForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLForResourceRequestFormGroup() {
		return new FormGroup<GetWebACLForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** The response to a <a>GetXssMatchSet</a> request. */
	export interface GetXssMatchSetResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
		XssMatchSet?: XssMatchSet;
	}

	/** The response to a <a>GetXssMatchSet</a> request. */
	export interface GetXssMatchSetResponseFormProperties {
	}
	export function CreateGetXssMatchSetResponseFormGroup() {
		return new FormGroup<GetXssMatchSetResponseFormProperties>({
		});

	}


	/** A request to get an <a>XssMatchSet</a>. */
	export interface GetXssMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: string;
	}

	/** A request to get an <a>XssMatchSet</a>. */
	export interface GetXssMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetXssMatchSetRequestFormGroup() {
		return new FormGroup<GetXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListActivatedRulesInRuleGroupResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		ActivatedRules?: Array<ActivatedRule>;
	}
	export interface ListActivatedRulesInRuleGroupResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListActivatedRulesInRuleGroupResponseFormGroup() {
		return new FormGroup<ListActivatedRulesInRuleGroupResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListActivatedRulesInRuleGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListActivatedRulesInRuleGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListActivatedRulesInRuleGroupRequestFormGroup() {
		return new FormGroup<ListActivatedRulesInRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListByteMatchSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		ByteMatchSets?: Array<ByteMatchSetSummary>;
	}
	export interface ListByteMatchSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListByteMatchSetsResponseFormGroup() {
		return new FormGroup<ListByteMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p> */
	export interface ByteMatchSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p> */
	export interface ByteMatchSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateByteMatchSetSummaryFormGroup() {
		return new FormGroup<ByteMatchSetSummaryFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListByteMatchSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListByteMatchSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListByteMatchSetsRequestFormGroup() {
		return new FormGroup<ListByteMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListGeoMatchSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		GeoMatchSets?: Array<GeoMatchSetSummary>;
	}
	export interface ListGeoMatchSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListGeoMatchSetsResponseFormGroup() {
		return new FormGroup<ListGeoMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p> */
	export interface GeoMatchSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p> */
	export interface GeoMatchSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchSetSummaryFormGroup() {
		return new FormGroup<GeoMatchSetSummaryFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListGeoMatchSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListGeoMatchSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListGeoMatchSetsRequestFormGroup() {
		return new FormGroup<ListGeoMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListIPSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		IPSets?: Array<IPSetSummary>;
	}
	export interface ListIPSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListIPSetsResponseFormGroup() {
		return new FormGroup<ListIPSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p> */
	export interface IPSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p> */
	export interface IPSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIPSetSummaryFormGroup() {
		return new FormGroup<IPSetSummaryFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListIPSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListIPSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListIPSetsRequestFormGroup() {
		return new FormGroup<ListIPSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListLoggingConfigurationsResponse {
		LoggingConfigurations?: Array<LoggingConfiguration>;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
	}
	export interface ListLoggingConfigurationsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsResponseFormGroup() {
		return new FormGroup<ListLoggingConfigurationsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListLoggingConfigurationsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListLoggingConfigurationsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListLoggingConfigurationsRequestFormGroup() {
		return new FormGroup<ListLoggingConfigurationsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListRateBasedRulesResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Rules?: Array<RuleSummary>;
	}
	export interface ListRateBasedRulesResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRateBasedRulesResponseFormGroup() {
		return new FormGroup<ListRateBasedRulesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p> */
	export interface RuleSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p> */
	export interface RuleSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListRateBasedRulesRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRateBasedRulesRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRateBasedRulesRequestFormGroup() {
		return new FormGroup<ListRateBasedRulesRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListRegexMatchSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		RegexMatchSets?: Array<RegexMatchSetSummary>;
	}
	export interface ListRegexMatchSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRegexMatchSetsResponseFormGroup() {
		return new FormGroup<ListRegexMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p> */
	export interface RegexMatchSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p> */
	export interface RegexMatchSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchSetSummaryFormGroup() {
		return new FormGroup<RegexMatchSetSummaryFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListRegexMatchSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRegexMatchSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRegexMatchSetsRequestFormGroup() {
		return new FormGroup<ListRegexMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListRegexPatternSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		RegexPatternSets?: Array<RegexPatternSetSummary>;
	}
	export interface ListRegexPatternSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRegexPatternSetsResponseFormGroup() {
		return new FormGroup<ListRegexPatternSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p> */
	export interface RegexPatternSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p> */
	export interface RegexPatternSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetSummaryFormGroup() {
		return new FormGroup<RegexPatternSetSummaryFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListRegexPatternSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRegexPatternSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRegexPatternSetsRequestFormGroup() {
		return new FormGroup<ListRegexPatternSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListResourcesForWebACLResponse {
		ResourceArns?: Array<string>;
	}
	export interface ListResourcesForWebACLResponseFormProperties {
	}
	export function CreateListResourcesForWebACLResponseFormGroup() {
		return new FormGroup<ListResourcesForWebACLResponseFormProperties>({
		});

	}

	export interface ListResourcesForWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;
		ResourceType?: ListResourcesForWebACLRequestResourceType | null;
	}
	export interface ListResourcesForWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,
		ResourceType: FormControl<ListResourcesForWebACLRequestResourceType | null | undefined>,
	}
	export function CreateListResourcesForWebACLRequestFormGroup() {
		return new FormGroup<ListResourcesForWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ResourceType: new FormControl<ListResourcesForWebACLRequestResourceType | null | undefined>(undefined),
		});

	}

	export enum ListResourcesForWebACLRequestResourceType { APPLICATION_LOAD_BALANCER = 0, API_GATEWAY = 1 }

	export interface ListRuleGroupsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		RuleGroups?: Array<RuleGroupSummary>;
	}
	export interface ListRuleGroupsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRuleGroupsResponseFormGroup() {
		return new FormGroup<ListRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p> */
	export interface RuleGroupSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p> */
	export interface RuleGroupSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSummaryFormGroup() {
		return new FormGroup<RuleGroupSummaryFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListRuleGroupsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRuleGroupsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRuleGroupsRequestFormGroup() {
		return new FormGroup<ListRuleGroupsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListRulesResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Rules?: Array<RuleSummary>;
	}
	export interface ListRulesResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListRulesRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRulesRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListSizeConstraintSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		SizeConstraintSets?: Array<SizeConstraintSetSummary>;
	}
	export interface ListSizeConstraintSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSizeConstraintSetsResponseFormGroup() {
		return new FormGroup<ListSizeConstraintSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSizeConstraintSetSummaryFormGroup() {
		return new FormGroup<SizeConstraintSetSummaryFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListSizeConstraintSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListSizeConstraintSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSizeConstraintSetsRequestFormGroup() {
		return new FormGroup<ListSizeConstraintSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** The response to a <a>ListSqlInjectionMatchSets</a> request. */
	export interface ListSqlInjectionMatchSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		SqlInjectionMatchSets?: Array<SqlInjectionMatchSetSummary>;
	}

	/** The response to a <a>ListSqlInjectionMatchSets</a> request. */
	export interface ListSqlInjectionMatchSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSqlInjectionMatchSetsResponseFormGroup() {
		return new FormGroup<ListSqlInjectionMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetSummaryFormGroup() {
		return new FormGroup<SqlInjectionMatchSetSummaryFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account. */
	export interface ListSqlInjectionMatchSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}

	/** A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account. */
	export interface ListSqlInjectionMatchSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSqlInjectionMatchSetsRequestFormGroup() {
		return new FormGroup<ListSqlInjectionMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListSubscribedRuleGroupsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		RuleGroups?: Array<SubscribedRuleGroupSummary>;
	}
	export interface ListSubscribedRuleGroupsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSubscribedRuleGroupsResponseFormGroup() {
		return new FormGroup<ListSubscribedRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p> */
	export interface SubscribedRuleGroupSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p> */
	export interface SubscribedRuleGroupSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateSubscribedRuleGroupSummaryFormGroup() {
		return new FormGroup<SubscribedRuleGroupSummaryFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListSubscribedRuleGroupsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListSubscribedRuleGroupsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSubscribedRuleGroupsRequestFormGroup() {
		return new FormGroup<ListSubscribedRuleGroupsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
		TagInfoForResource?: TagInfoForResource;
	}
	export interface ListTagsForResourceResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface TagInfoForResource {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN?: string | null;

		/** Minimum items: 1 */
		TagList?: Array<Tag>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface TagInfoForResourceFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagInfoForResourceFormGroup() {
		return new FormGroup<TagInfoForResourceFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListWebACLsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		WebACLs?: Array<WebACLSummary>;
	}
	export interface ListWebACLsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListWebACLsResponseFormGroup() {
		return new FormGroup<ListWebACLsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListWebACLsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListWebACLsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListWebACLsRequestFormGroup() {
		return new FormGroup<ListWebACLsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** The response to a <a>ListXssMatchSets</a> request. */
	export interface ListXssMatchSetsResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;
		XssMatchSets?: Array<XssMatchSetSummary>;
	}

	/** The response to a <a>ListXssMatchSets</a> request. */
	export interface ListXssMatchSetsResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListXssMatchSetsResponseFormGroup() {
		return new FormGroup<ListXssMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateXssMatchSetSummaryFormGroup() {
		return new FormGroup<XssMatchSetSummaryFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to list the <a>XssMatchSet</a> objects created by the current AWS account. */
	export interface ListXssMatchSetsRequest {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit?: number | null;
	}

	/** A request to list the <a>XssMatchSet</a> objects created by the current AWS account. */
	export interface ListXssMatchSetsRequestFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListXssMatchSetsRequestFormGroup() {
		return new FormGroup<ListXssMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface PutLoggingConfigurationResponse {

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutLoggingConfigurationRequest {

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
		 * Required
		 */
		LoggingConfiguration: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface WAFServiceLinkedRoleErrorException {
	}
	export interface WAFServiceLinkedRoleErrorExceptionFormProperties {
	}
	export function CreateWAFServiceLinkedRoleErrorExceptionFormGroup() {
		return new FormGroup<WAFServiceLinkedRoleErrorExceptionFormProperties>({
		});

	}

	export interface PutPermissionPolicyResponse {
	}
	export interface PutPermissionPolicyResponseFormProperties {
	}
	export function CreatePutPermissionPolicyResponseFormGroup() {
		return new FormGroup<PutPermissionPolicyResponseFormProperties>({
		});

	}

	export interface PutPermissionPolicyRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Max length: 395000
		 * Min length: 1
		 */
		Policy: string;
	}
	export interface PutPermissionPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 395000
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionPolicyRequestFormGroup() {
		return new FormGroup<PutPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(395000), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface WAFInvalidPermissionPolicyException {
	}
	export interface WAFInvalidPermissionPolicyExceptionFormProperties {
	}
	export function CreateWAFInvalidPermissionPolicyExceptionFormGroup() {
		return new FormGroup<WAFInvalidPermissionPolicyExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateByteMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateByteMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateByteMatchSetResponseFormGroup() {
		return new FormGroup<UpdateByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateByteMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<ByteMatchSetUpdate>;
	}
	export interface UpdateByteMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateByteMatchSetRequestFormGroup() {
		return new FormGroup<UpdateByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p> */
	export interface ByteMatchSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
		 * Required
		 */
		ByteMatchTuple: ByteMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p> */
	export interface ByteMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateByteMatchSetUpdateFormGroup() {
		return new FormGroup<ByteMatchSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ByteMatchSetUpdateAction { INSERT = 0, DELETE = 1 }

	export interface WAFNonexistentContainerException {
	}
	export interface WAFNonexistentContainerExceptionFormProperties {
	}
	export function CreateWAFNonexistentContainerExceptionFormGroup() {
		return new FormGroup<WAFNonexistentContainerExceptionFormProperties>({
		});

	}

	export interface UpdateGeoMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateGeoMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeoMatchSetResponseFormGroup() {
		return new FormGroup<UpdateGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateGeoMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<GeoMatchSetUpdate>;
	}
	export interface UpdateGeoMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeoMatchSetRequestFormGroup() {
		return new FormGroup<UpdateGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p> */
	export interface GeoMatchSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p>
		 * Required
		 */
		GeoMatchConstraint: GeoMatchConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p> */
	export interface GeoMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateGeoMatchSetUpdateFormGroup() {
		return new FormGroup<GeoMatchSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIPSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateIPSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetResponseFormGroup() {
		return new FormGroup<UpdateIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateIPSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<IPSetUpdate>;
	}
	export interface UpdateIPSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IPSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetRequestFormGroup() {
		return new FormGroup<UpdateIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p> */
	export interface IPSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>
		 * Required
		 */
		IPSetDescriptor: IPSetDescriptor;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p> */
	export interface IPSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateIPSetUpdateFormGroup() {
		return new FormGroup<IPSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRateBasedRuleResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateRateBasedRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRateBasedRuleResponseFormGroup() {
		return new FormGroup<UpdateRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRateBasedRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Required */
		Updates: Array<RuleUpdate>;

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: number;
	}
	export interface UpdateRateBasedRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 100
		 * Maximum: 2000000000
		 */
		RateLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRateBasedRuleRequestFormGroup() {
		return new FormGroup<UpdateRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(100), Validators.max(2000000000)]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p> */
	export interface RuleUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p>
		 * Required
		 */
		Predicate: Predicate;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p> */
	export interface RuleUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateRuleUpdateFormGroup() {
		return new FormGroup<RuleUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegexMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateRegexMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexMatchSetResponseFormGroup() {
		return new FormGroup<UpdateRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRegexMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<RegexMatchSetUpdate>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface UpdateRegexMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexMatchSetRequestFormGroup() {
		return new FormGroup<UpdateRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p> */
	export interface RegexMatchSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>
		 * Required
		 */
		RegexMatchTuple: RegexMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p> */
	export interface RegexMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateRegexMatchSetUpdateFormGroup() {
		return new FormGroup<RegexMatchSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegexPatternSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateRegexPatternSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetResponseFormGroup() {
		return new FormGroup<UpdateRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRegexPatternSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<RegexPatternSetUpdate>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface UpdateRegexPatternSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetRequestFormGroup() {
		return new FormGroup<UpdateRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p> */
	export interface RegexPatternSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RegexPatternString: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p> */
	export interface RegexPatternSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RegexPatternString: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetUpdateFormGroup() {
		return new FormGroup<RegexPatternSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
			RegexPatternString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1), Validators.pattern('.*')]),
		});

	}

	export interface WAFInvalidRegexPatternException {
	}
	export interface WAFInvalidRegexPatternExceptionFormProperties {
	}
	export function CreateWAFInvalidRegexPatternExceptionFormGroup() {
		return new FormGroup<WAFInvalidRegexPatternExceptionFormProperties>({
		});

	}

	export interface UpdateRuleResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateRuleResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleResponseFormGroup() {
		return new FormGroup<UpdateRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRuleRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/** Required */
		Updates: Array<RuleUpdate>;
	}
	export interface UpdateRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleRequestFormGroup() {
		return new FormGroup<UpdateRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRuleGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateRuleGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupResponseFormGroup() {
		return new FormGroup<UpdateRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateRuleGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<RuleGroupUpdate>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
	}
	export interface UpdateRuleGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleGroupId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupRequestFormGroup() {
		return new FormGroup<UpdateRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p> */
	export interface RuleGroupUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
		 * Required
		 */
		ActivatedRule: ActivatedRule;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p> */
	export interface RuleGroupUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateRuleGroupUpdateFormGroup() {
		return new FormGroup<RuleGroupUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSizeConstraintSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateSizeConstraintSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSizeConstraintSetResponseFormGroup() {
		return new FormGroup<UpdateSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateSizeConstraintSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<SizeConstraintSetUpdate>;
	}
	export interface UpdateSizeConstraintSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSizeConstraintSetRequestFormGroup() {
		return new FormGroup<UpdateSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
		 * Required
		 */
		SizeConstraint: SizeConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateSizeConstraintSetUpdateFormGroup() {
		return new FormGroup<SizeConstraintSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to an <a>UpdateSqlInjectionMatchSets</a> request. */
	export interface UpdateSqlInjectionMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to an <a>UpdateSqlInjectionMatchSets</a> request. */
	export interface UpdateSqlInjectionMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<UpdateSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to update a <a>SqlInjectionMatchSet</a>. */
	export interface UpdateSqlInjectionMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<SqlInjectionMatchSetUpdate>;
	}

	/** A request to update a <a>SqlInjectionMatchSet</a>. */
	export interface UpdateSqlInjectionMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<UpdateSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
		 * Required
		 */
		SqlInjectionMatchTuple: SqlInjectionMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetUpdateFormGroup() {
		return new FormGroup<SqlInjectionMatchSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWebACLResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}
	export interface UpdateWebACLResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLResponseFormGroup() {
		return new FormGroup<UpdateWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateWebACLRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;
		Updates?: Array<WebACLUpdate>;

		/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
		DefaultAction?: WafAction;
	}
	export interface UpdateWebACLRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		WebACLId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLRequestFormGroup() {
		return new FormGroup<UpdateWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p> */
	export interface WebACLUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
		 * Required
		 */
		ActivatedRule: ActivatedRule;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p> */
	export interface WebACLUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateWebACLUpdateFormGroup() {
		return new FormGroup<WebACLUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFSubscriptionNotFoundException {
	}
	export interface WAFSubscriptionNotFoundExceptionFormProperties {
	}
	export function CreateWAFSubscriptionNotFoundExceptionFormGroup() {
		return new FormGroup<WAFSubscriptionNotFoundExceptionFormProperties>({
		});

	}


	/** The response to an <a>UpdateXssMatchSets</a> request. */
	export interface UpdateXssMatchSetResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken?: string | null;
	}

	/** The response to an <a>UpdateXssMatchSets</a> request. */
	export interface UpdateXssMatchSetResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXssMatchSetResponseFormGroup() {
		return new FormGroup<UpdateXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** A request to update an <a>XssMatchSet</a>. */
	export interface UpdateXssMatchSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Updates: Array<XssMatchSetUpdate>;
	}

	/** A request to update an <a>XssMatchSet</a>. */
	export interface UpdateXssMatchSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		XssMatchSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXssMatchSetRequestFormGroup() {
		return new FormGroup<UpdateXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('.*\S.*')]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetUpdate {

		/** Required */
		Action: ByteMatchSetUpdateAction;

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
		 * Required
		 */
		XssMatchTuple: XssMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ByteMatchSetUpdateAction | null | undefined>,
	}
	export function CreateXssMatchSetUpdateFormGroup() {
		return new FormGroup<XssMatchSetUpdateFormProperties>({
			Action: new FormControl<ByteMatchSetUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WafRuleType { REGULAR = 0, RATE_BASED = 1, GROUP = 2 }

	export enum ChangeAction { INSERT = 0, DELETE = 1 }

	export enum TextTransformation { NONE = 0, COMPRESS_WHITE_SPACE = 1, HTML_ENTITY_DECODE = 2, LOWERCASE = 3, CMD_LINE = 4, URL_DECODE = 5 }

	export enum PositionalConstraint { EXACTLY = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CONTAINS_WORD = 4 }

	export enum ChangeTokenStatus { PROVISIONED = 0, PENDING = 1, INSYNC = 2 }

	export enum ComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5 }

	export enum RateKey { IP = 0 }

	export enum MatchFieldType { URI = 0, QUERY_STRING = 1, HEADER = 2, METHOD = 3, BODY = 4, SINGLE_QUERY_ARG = 5, ALL_QUERY_ARGS = 6 }

	export enum ResourceType { APPLICATION_LOAD_BALANCER = 0, API_GATEWAY = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL
		 * @return {AssociateWebACLResponse} Success
		 */
		AssociateWebACL(requestBody: AssociateWebACLRequest): Observable<AssociateWebACLResponse> {
			return this.http.post<AssociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet
		 * @return {CreateByteMatchSetResponse} Success
		 */
		CreateByteMatchSet(requestBody: CreateByteMatchSetRequest): Observable<CreateByteMatchSetResponse> {
			return this.http.post<CreateByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet
		 * @return {CreateGeoMatchSetResponse} Success
		 */
		CreateGeoMatchSet(requestBody: CreateGeoMatchSetRequest): Observable<CreateGeoMatchSetResponse> {
			return this.http.post<CreateGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(requestBody: CreateIPSetRequest): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule
		 * @return {CreateRateBasedRuleResponse} Success
		 */
		CreateRateBasedRule(requestBody: CreateRateBasedRuleRequest): Observable<CreateRateBasedRuleResponse> {
			return this.http.post<CreateRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet
		 * @return {CreateRegexMatchSetResponse} Success
		 */
		CreateRegexMatchSet(requestBody: CreateRegexMatchSetRequest): Observable<CreateRegexMatchSetResponse> {
			return this.http.post<CreateRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet
		 * @return {CreateRegexPatternSetResponse} Success
		 */
		CreateRegexPatternSet(requestBody: CreateRegexPatternSetRequest): Observable<CreateRegexPatternSetResponse> {
			return this.http.post<CreateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateRule
		 * @return {CreateRuleResponse} Success
		 */
		CreateRule(requestBody: CreateRuleRequest): Observable<CreateRuleResponse> {
			return this.http.post<CreateRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup
		 * @return {CreateRuleGroupResponse} Success
		 */
		CreateRuleGroup(requestBody: CreateRuleGroupRequest): Observable<CreateRuleGroupResponse> {
			return this.http.post<CreateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet
		 * @return {CreateSizeConstraintSetResponse} Success
		 */
		CreateSizeConstraintSet(requestBody: CreateSizeConstraintSetRequest): Observable<CreateSizeConstraintSetResponse> {
			return this.http.post<CreateSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet
		 * @return {CreateSqlInjectionMatchSetResponse} Success
		 */
		CreateSqlInjectionMatchSet(requestBody: CreateSqlInjectionMatchSetRequest): Observable<CreateSqlInjectionMatchSetResponse> {
			return this.http.post<CreateSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL
		 * @return {CreateWebACLResponse} Success
		 */
		CreateWebACL(requestBody: CreateWebACLRequest): Observable<CreateWebACLResponse> {
			return this.http.post<CreateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack
		 * @return {CreateWebACLMigrationStackResponse} Success
		 */
		CreateWebACLMigrationStack(requestBody: CreateWebACLMigrationStackRequest): Observable<CreateWebACLMigrationStackResponse> {
			return this.http.post<CreateWebACLMigrationStackResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet
		 * @return {CreateXssMatchSetResponse} Success
		 */
		CreateXssMatchSet(requestBody: CreateXssMatchSetRequest): Observable<CreateXssMatchSetResponse> {
			return this.http.post<CreateXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet
		 * @return {DeleteByteMatchSetResponse} Success
		 */
		DeleteByteMatchSet(requestBody: DeleteByteMatchSetRequest): Observable<DeleteByteMatchSetResponse> {
			return this.http.post<DeleteByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet
		 * @return {DeleteGeoMatchSetResponse} Success
		 */
		DeleteGeoMatchSet(requestBody: DeleteGeoMatchSetRequest): Observable<DeleteGeoMatchSetResponse> {
			return this.http.post<DeleteGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(requestBody: DeleteIPSetRequest): Observable<DeleteIPSetResponse> {
			return this.http.post<DeleteIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration
		 * @return {DeleteLoggingConfigurationResponse} Success
		 */
		DeleteLoggingConfiguration(requestBody: DeleteLoggingConfigurationRequest): Observable<DeleteLoggingConfigurationResponse> {
			return this.http.post<DeleteLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy
		 * @return {DeletePermissionPolicyResponse} Success
		 */
		DeletePermissionPolicy(requestBody: DeletePermissionPolicyRequest): Observable<DeletePermissionPolicyResponse> {
			return this.http.post<DeletePermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule
		 * @return {DeleteRateBasedRuleResponse} Success
		 */
		DeleteRateBasedRule(requestBody: DeleteRateBasedRuleRequest): Observable<DeleteRateBasedRuleResponse> {
			return this.http.post<DeleteRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet
		 * @return {DeleteRegexMatchSetResponse} Success
		 */
		DeleteRegexMatchSet(requestBody: DeleteRegexMatchSetRequest): Observable<DeleteRegexMatchSetResponse> {
			return this.http.post<DeleteRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet
		 * @return {DeleteRegexPatternSetResponse} Success
		 */
		DeleteRegexPatternSet(requestBody: DeleteRegexPatternSetRequest): Observable<DeleteRegexPatternSetResponse> {
			return this.http.post<DeleteRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule
		 * @return {DeleteRuleResponse} Success
		 */
		DeleteRule(requestBody: DeleteRuleRequest): Observable<DeleteRuleResponse> {
			return this.http.post<DeleteRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup
		 * @return {DeleteRuleGroupResponse} Success
		 */
		DeleteRuleGroup(requestBody: DeleteRuleGroupRequest): Observable<DeleteRuleGroupResponse> {
			return this.http.post<DeleteRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet
		 * @return {DeleteSizeConstraintSetResponse} Success
		 */
		DeleteSizeConstraintSet(requestBody: DeleteSizeConstraintSetRequest): Observable<DeleteSizeConstraintSetResponse> {
			return this.http.post<DeleteSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet
		 * @return {DeleteSqlInjectionMatchSetResponse} Success
		 */
		DeleteSqlInjectionMatchSet(requestBody: DeleteSqlInjectionMatchSetRequest): Observable<DeleteSqlInjectionMatchSetResponse> {
			return this.http.post<DeleteSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL
		 * @return {DeleteWebACLResponse} Success
		 */
		DeleteWebACL(requestBody: DeleteWebACLRequest): Observable<DeleteWebACLResponse> {
			return this.http.post<DeleteWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet
		 * @return {DeleteXssMatchSetResponse} Success
		 */
		DeleteXssMatchSet(requestBody: DeleteXssMatchSetRequest): Observable<DeleteXssMatchSetResponse> {
			return this.http.post<DeleteXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL
		 * @return {DisassociateWebACLResponse} Success
		 */
		DisassociateWebACL(requestBody: DisassociateWebACLRequest): Observable<DisassociateWebACLResponse> {
			return this.http.post<DisassociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet
		 * @return {GetByteMatchSetResponse} Success
		 */
		GetByteMatchSet(requestBody: GetByteMatchSetRequest): Observable<GetByteMatchSetResponse> {
			return this.http.post<GetByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken
		 * @return {GetChangeTokenResponse} Success
		 */
		GetChangeToken(requestBody: GetChangeTokenRequest): Observable<GetChangeTokenResponse> {
			return this.http.post<GetChangeTokenResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus
		 * @return {GetChangeTokenStatusResponse} Success
		 */
		GetChangeTokenStatus(requestBody: GetChangeTokenStatusRequest): Observable<GetChangeTokenStatusResponse> {
			return this.http.post<GetChangeTokenStatusResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet
		 * @return {GetGeoMatchSetResponse} Success
		 */
		GetGeoMatchSet(requestBody: GetGeoMatchSetRequest): Observable<GetGeoMatchSetResponse> {
			return this.http.post<GetGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(requestBody: GetIPSetRequest): Observable<GetIPSetResponse> {
			return this.http.post<GetIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration
		 * @return {GetLoggingConfigurationResponse} Success
		 */
		GetLoggingConfiguration(requestBody: GetLoggingConfigurationRequest): Observable<GetLoggingConfigurationResponse> {
			return this.http.post<GetLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy
		 * @return {GetPermissionPolicyResponse} Success
		 */
		GetPermissionPolicy(requestBody: GetPermissionPolicyRequest): Observable<GetPermissionPolicyResponse> {
			return this.http.post<GetPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule
		 * @return {GetRateBasedRuleResponse} Success
		 */
		GetRateBasedRule(requestBody: GetRateBasedRuleRequest): Observable<GetRateBasedRuleResponse> {
			return this.http.post<GetRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys
		 * @return {GetRateBasedRuleManagedKeysResponse} Success
		 */
		GetRateBasedRuleManagedKeys(requestBody: GetRateBasedRuleManagedKeysRequest): Observable<GetRateBasedRuleManagedKeysResponse> {
			return this.http.post<GetRateBasedRuleManagedKeysResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet
		 * @return {GetRegexMatchSetResponse} Success
		 */
		GetRegexMatchSet(requestBody: GetRegexMatchSetRequest): Observable<GetRegexMatchSetResponse> {
			return this.http.post<GetRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet
		 * @return {GetRegexPatternSetResponse} Success
		 */
		GetRegexPatternSet(requestBody: GetRegexPatternSetRequest): Observable<GetRegexPatternSetResponse> {
			return this.http.post<GetRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRule
		 * @return {GetRuleResponse} Success
		 */
		GetRule(requestBody: GetRuleRequest): Observable<GetRuleResponse> {
			return this.http.post<GetRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup
		 * @return {GetRuleGroupResponse} Success
		 */
		GetRuleGroup(requestBody: GetRuleGroupRequest): Observable<GetRuleGroupResponse> {
			return this.http.post<GetRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests
		 * @return {GetSampledRequestsResponse} Success
		 */
		GetSampledRequests(requestBody: GetSampledRequestsRequest): Observable<GetSampledRequestsResponse> {
			return this.http.post<GetSampledRequestsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet
		 * @return {GetSizeConstraintSetResponse} Success
		 */
		GetSizeConstraintSet(requestBody: GetSizeConstraintSetRequest): Observable<GetSizeConstraintSetResponse> {
			return this.http.post<GetSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet
		 * @return {GetSqlInjectionMatchSetResponse} Success
		 */
		GetSqlInjectionMatchSet(requestBody: GetSqlInjectionMatchSetRequest): Observable<GetSqlInjectionMatchSetResponse> {
			return this.http.post<GetSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL
		 * @return {GetWebACLResponse} Success
		 */
		GetWebACL(requestBody: GetWebACLRequest): Observable<GetWebACLResponse> {
			return this.http.post<GetWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the web ACL for the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource
		 * @return {GetWebACLForResourceResponse} Success
		 */
		GetWebACLForResource(requestBody: GetWebACLForResourceRequest): Observable<GetWebACLForResourceResponse> {
			return this.http.post<GetWebACLForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet
		 * @return {GetXssMatchSetResponse} Success
		 */
		GetXssMatchSet(requestBody: GetXssMatchSetRequest): Observable<GetXssMatchSetResponse> {
			return this.http.post<GetXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup
		 * @return {ListActivatedRulesInRuleGroupResponse} Success
		 */
		ListActivatedRulesInRuleGroup(requestBody: ListActivatedRulesInRuleGroupRequest): Observable<ListActivatedRulesInRuleGroupResponse> {
			return this.http.post<ListActivatedRulesInRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets
		 * @return {ListByteMatchSetsResponse} Success
		 */
		ListByteMatchSets(requestBody: ListByteMatchSetsRequest): Observable<ListByteMatchSetsResponse> {
			return this.http.post<ListByteMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets
		 * @return {ListGeoMatchSetsResponse} Success
		 */
		ListGeoMatchSets(requestBody: ListGeoMatchSetsRequest): Observable<ListGeoMatchSetsResponse> {
			return this.http.post<ListGeoMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(requestBody: ListIPSetsRequest): Observable<ListIPSetsResponse> {
			return this.http.post<ListIPSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations
		 * @return {ListLoggingConfigurationsResponse} Success
		 */
		ListLoggingConfigurations(requestBody: ListLoggingConfigurationsRequest): Observable<ListLoggingConfigurationsResponse> {
			return this.http.post<ListLoggingConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules
		 * @return {ListRateBasedRulesResponse} Success
		 */
		ListRateBasedRules(requestBody: ListRateBasedRulesRequest): Observable<ListRateBasedRulesResponse> {
			return this.http.post<ListRateBasedRulesResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets
		 * @return {ListRegexMatchSetsResponse} Success
		 */
		ListRegexMatchSets(requestBody: ListRegexMatchSetsRequest): Observable<ListRegexMatchSetsResponse> {
			return this.http.post<ListRegexMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets
		 * @return {ListRegexPatternSetsResponse} Success
		 */
		ListRegexPatternSets(requestBody: ListRegexPatternSetsRequest): Observable<ListRegexPatternSetsResponse> {
			return this.http.post<ListRegexPatternSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of resources associated with the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL
		 * @return {ListResourcesForWebACLResponse} Success
		 */
		ListResourcesForWebACL(requestBody: ListResourcesForWebACLRequest): Observable<ListResourcesForWebACLResponse> {
			return this.http.post<ListResourcesForWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups
		 * @return {ListRuleGroupsResponse} Success
		 */
		ListRuleGroups(requestBody: ListRuleGroupsRequest): Observable<ListRuleGroupsResponse> {
			return this.http.post<ListRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListRules
		 * @return {ListRulesResponse} Success
		 */
		ListRules(requestBody: ListRulesRequest): Observable<ListRulesResponse> {
			return this.http.post<ListRulesResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets
		 * @return {ListSizeConstraintSetsResponse} Success
		 */
		ListSizeConstraintSets(requestBody: ListSizeConstraintSetsRequest): Observable<ListSizeConstraintSetsResponse> {
			return this.http.post<ListSizeConstraintSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets
		 * @return {ListSqlInjectionMatchSetsResponse} Success
		 */
		ListSqlInjectionMatchSets(requestBody: ListSqlInjectionMatchSetsRequest): Observable<ListSqlInjectionMatchSetsResponse> {
			return this.http.post<ListSqlInjectionMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups
		 * @return {ListSubscribedRuleGroupsResponse} Success
		 */
		ListSubscribedRuleGroups(requestBody: ListSubscribedRuleGroupsRequest): Observable<ListSubscribedRuleGroupsResponse> {
			return this.http.post<ListSubscribedRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs
		 * @return {ListWebACLsResponse} Success
		 */
		ListWebACLs(requestBody: ListWebACLsRequest): Observable<ListWebACLsResponse> {
			return this.http.post<ListWebACLsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets
		 * @return {ListXssMatchSetsResponse} Success
		 */
		ListXssMatchSets(requestBody: ListXssMatchSetsRequest): Observable<ListXssMatchSetsResponse> {
			return this.http.post<ListXssMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration
		 * @return {PutLoggingConfigurationResponse} Success
		 */
		PutLoggingConfiguration(requestBody: PutLoggingConfigurationRequest): Observable<PutLoggingConfigurationResponse> {
			return this.http.post<PutLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy
		 * @return {PutPermissionPolicyResponse} Success
		 */
		PutPermissionPolicy(requestBody: PutPermissionPolicyRequest): Observable<PutPermissionPolicyResponse> {
			return this.http.post<PutPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet
		 * @return {UpdateByteMatchSetResponse} Success
		 */
		UpdateByteMatchSet(requestBody: UpdateByteMatchSetRequest): Observable<UpdateByteMatchSetResponse> {
			return this.http.post<UpdateByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet
		 * @return {UpdateGeoMatchSetResponse} Success
		 */
		UpdateGeoMatchSet(requestBody: UpdateGeoMatchSetRequest): Observable<UpdateGeoMatchSetResponse> {
			return this.http.post<UpdateGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(requestBody: UpdateIPSetRequest): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule
		 * @return {UpdateRateBasedRuleResponse} Success
		 */
		UpdateRateBasedRule(requestBody: UpdateRateBasedRuleRequest): Observable<UpdateRateBasedRuleResponse> {
			return this.http.post<UpdateRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet
		 * @return {UpdateRegexMatchSetResponse} Success
		 */
		UpdateRegexMatchSet(requestBody: UpdateRegexMatchSetRequest): Observable<UpdateRegexMatchSetResponse> {
			return this.http.post<UpdateRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet
		 * @return {UpdateRegexPatternSetResponse} Success
		 */
		UpdateRegexPatternSet(requestBody: UpdateRegexPatternSetRequest): Observable<UpdateRegexPatternSetResponse> {
			return this.http.post<UpdateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule
		 * @return {UpdateRuleResponse} Success
		 */
		UpdateRule(requestBody: UpdateRuleRequest): Observable<UpdateRuleResponse> {
			return this.http.post<UpdateRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup
		 * @return {UpdateRuleGroupResponse} Success
		 */
		UpdateRuleGroup(requestBody: UpdateRuleGroupRequest): Observable<UpdateRuleGroupResponse> {
			return this.http.post<UpdateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet
		 * @return {UpdateSizeConstraintSetResponse} Success
		 */
		UpdateSizeConstraintSet(requestBody: UpdateSizeConstraintSetRequest): Observable<UpdateSizeConstraintSetResponse> {
			return this.http.post<UpdateSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet
		 * @return {UpdateSqlInjectionMatchSetResponse} Success
		 */
		UpdateSqlInjectionMatchSet(requestBody: UpdateSqlInjectionMatchSetRequest): Observable<UpdateSqlInjectionMatchSetResponse> {
			return this.http.post<UpdateSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL
		 * @return {UpdateWebACLResponse} Success
		 */
		UpdateWebACL(requestBody: UpdateWebACLRequest): Observable<UpdateWebACLResponse> {
			return this.http.post<UpdateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet
		 * @return {UpdateXssMatchSetResponse} Success
		 */
		UpdateXssMatchSet(requestBody: UpdateXssMatchSetRequest): Observable<UpdateXssMatchSetResponse> {
			return this.http.post<UpdateXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateWebACLX_Amz_Target { AWSWAF_Regional_20161128_AssociateWebACL = 0 }

	export enum CreateByteMatchSetX_Amz_Target { AWSWAF_Regional_20161128_CreateByteMatchSet = 0 }

	export enum CreateGeoMatchSetX_Amz_Target { AWSWAF_Regional_20161128_CreateGeoMatchSet = 0 }

	export enum CreateIPSetX_Amz_Target { AWSWAF_Regional_20161128_CreateIPSet = 0 }

	export enum CreateRateBasedRuleX_Amz_Target { AWSWAF_Regional_20161128_CreateRateBasedRule = 0 }

	export enum CreateRegexMatchSetX_Amz_Target { AWSWAF_Regional_20161128_CreateRegexMatchSet = 0 }

	export enum CreateRegexPatternSetX_Amz_Target { AWSWAF_Regional_20161128_CreateRegexPatternSet = 0 }

	export enum CreateRuleX_Amz_Target { AWSWAF_Regional_20161128_CreateRule = 0 }

	export enum CreateRuleGroupX_Amz_Target { AWSWAF_Regional_20161128_CreateRuleGroup = 0 }

	export enum CreateSizeConstraintSetX_Amz_Target { AWSWAF_Regional_20161128_CreateSizeConstraintSet = 0 }

	export enum CreateSqlInjectionMatchSetX_Amz_Target { AWSWAF_Regional_20161128_CreateSqlInjectionMatchSet = 0 }

	export enum CreateWebACLX_Amz_Target { AWSWAF_Regional_20161128_CreateWebACL = 0 }

	export enum CreateWebACLMigrationStackX_Amz_Target { AWSWAF_Regional_20161128_CreateWebACLMigrationStack = 0 }

	export enum CreateXssMatchSetX_Amz_Target { AWSWAF_Regional_20161128_CreateXssMatchSet = 0 }

	export enum DeleteByteMatchSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteByteMatchSet = 0 }

	export enum DeleteGeoMatchSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteGeoMatchSet = 0 }

	export enum DeleteIPSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteIPSet = 0 }

	export enum DeleteLoggingConfigurationX_Amz_Target { AWSWAF_Regional_20161128_DeleteLoggingConfiguration = 0 }

	export enum DeletePermissionPolicyX_Amz_Target { AWSWAF_Regional_20161128_DeletePermissionPolicy = 0 }

	export enum DeleteRateBasedRuleX_Amz_Target { AWSWAF_Regional_20161128_DeleteRateBasedRule = 0 }

	export enum DeleteRegexMatchSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteRegexMatchSet = 0 }

	export enum DeleteRegexPatternSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteRegexPatternSet = 0 }

	export enum DeleteRuleX_Amz_Target { AWSWAF_Regional_20161128_DeleteRule = 0 }

	export enum DeleteRuleGroupX_Amz_Target { AWSWAF_Regional_20161128_DeleteRuleGroup = 0 }

	export enum DeleteSizeConstraintSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteSizeConstraintSet = 0 }

	export enum DeleteSqlInjectionMatchSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteSqlInjectionMatchSet = 0 }

	export enum DeleteWebACLX_Amz_Target { AWSWAF_Regional_20161128_DeleteWebACL = 0 }

	export enum DeleteXssMatchSetX_Amz_Target { AWSWAF_Regional_20161128_DeleteXssMatchSet = 0 }

	export enum DisassociateWebACLX_Amz_Target { AWSWAF_Regional_20161128_DisassociateWebACL = 0 }

	export enum GetByteMatchSetX_Amz_Target { AWSWAF_Regional_20161128_GetByteMatchSet = 0 }

	export enum GetChangeTokenX_Amz_Target { AWSWAF_Regional_20161128_GetChangeToken = 0 }

	export enum GetChangeTokenStatusX_Amz_Target { AWSWAF_Regional_20161128_GetChangeTokenStatus = 0 }

	export enum GetGeoMatchSetX_Amz_Target { AWSWAF_Regional_20161128_GetGeoMatchSet = 0 }

	export enum GetIPSetX_Amz_Target { AWSWAF_Regional_20161128_GetIPSet = 0 }

	export enum GetLoggingConfigurationX_Amz_Target { AWSWAF_Regional_20161128_GetLoggingConfiguration = 0 }

	export enum GetPermissionPolicyX_Amz_Target { AWSWAF_Regional_20161128_GetPermissionPolicy = 0 }

	export enum GetRateBasedRuleX_Amz_Target { AWSWAF_Regional_20161128_GetRateBasedRule = 0 }

	export enum GetRateBasedRuleManagedKeysX_Amz_Target { AWSWAF_Regional_20161128_GetRateBasedRuleManagedKeys = 0 }

	export enum GetRegexMatchSetX_Amz_Target { AWSWAF_Regional_20161128_GetRegexMatchSet = 0 }

	export enum GetRegexPatternSetX_Amz_Target { AWSWAF_Regional_20161128_GetRegexPatternSet = 0 }

	export enum GetRuleX_Amz_Target { AWSWAF_Regional_20161128_GetRule = 0 }

	export enum GetRuleGroupX_Amz_Target { AWSWAF_Regional_20161128_GetRuleGroup = 0 }

	export enum GetSampledRequestsX_Amz_Target { AWSWAF_Regional_20161128_GetSampledRequests = 0 }

	export enum GetSizeConstraintSetX_Amz_Target { AWSWAF_Regional_20161128_GetSizeConstraintSet = 0 }

	export enum GetSqlInjectionMatchSetX_Amz_Target { AWSWAF_Regional_20161128_GetSqlInjectionMatchSet = 0 }

	export enum GetWebACLX_Amz_Target { AWSWAF_Regional_20161128_GetWebACL = 0 }

	export enum GetWebACLForResourceX_Amz_Target { AWSWAF_Regional_20161128_GetWebACLForResource = 0 }

	export enum GetXssMatchSetX_Amz_Target { AWSWAF_Regional_20161128_GetXssMatchSet = 0 }

	export enum ListActivatedRulesInRuleGroupX_Amz_Target { AWSWAF_Regional_20161128_ListActivatedRulesInRuleGroup = 0 }

	export enum ListByteMatchSetsX_Amz_Target { AWSWAF_Regional_20161128_ListByteMatchSets = 0 }

	export enum ListGeoMatchSetsX_Amz_Target { AWSWAF_Regional_20161128_ListGeoMatchSets = 0 }

	export enum ListIPSetsX_Amz_Target { AWSWAF_Regional_20161128_ListIPSets = 0 }

	export enum ListLoggingConfigurationsX_Amz_Target { AWSWAF_Regional_20161128_ListLoggingConfigurations = 0 }

	export enum ListRateBasedRulesX_Amz_Target { AWSWAF_Regional_20161128_ListRateBasedRules = 0 }

	export enum ListRegexMatchSetsX_Amz_Target { AWSWAF_Regional_20161128_ListRegexMatchSets = 0 }

	export enum ListRegexPatternSetsX_Amz_Target { AWSWAF_Regional_20161128_ListRegexPatternSets = 0 }

	export enum ListResourcesForWebACLX_Amz_Target { AWSWAF_Regional_20161128_ListResourcesForWebACL = 0 }

	export enum ListRuleGroupsX_Amz_Target { AWSWAF_Regional_20161128_ListRuleGroups = 0 }

	export enum ListRulesX_Amz_Target { AWSWAF_Regional_20161128_ListRules = 0 }

	export enum ListSizeConstraintSetsX_Amz_Target { AWSWAF_Regional_20161128_ListSizeConstraintSets = 0 }

	export enum ListSqlInjectionMatchSetsX_Amz_Target { AWSWAF_Regional_20161128_ListSqlInjectionMatchSets = 0 }

	export enum ListSubscribedRuleGroupsX_Amz_Target { AWSWAF_Regional_20161128_ListSubscribedRuleGroups = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSWAF_Regional_20161128_ListTagsForResource = 0 }

	export enum ListWebACLsX_Amz_Target { AWSWAF_Regional_20161128_ListWebACLs = 0 }

	export enum ListXssMatchSetsX_Amz_Target { AWSWAF_Regional_20161128_ListXssMatchSets = 0 }

	export enum PutLoggingConfigurationX_Amz_Target { AWSWAF_Regional_20161128_PutLoggingConfiguration = 0 }

	export enum PutPermissionPolicyX_Amz_Target { AWSWAF_Regional_20161128_PutPermissionPolicy = 0 }

	export enum TagResourceX_Amz_Target { AWSWAF_Regional_20161128_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSWAF_Regional_20161128_UntagResource = 0 }

	export enum UpdateByteMatchSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateByteMatchSet = 0 }

	export enum UpdateGeoMatchSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateGeoMatchSet = 0 }

	export enum UpdateIPSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateIPSet = 0 }

	export enum UpdateRateBasedRuleX_Amz_Target { AWSWAF_Regional_20161128_UpdateRateBasedRule = 0 }

	export enum UpdateRegexMatchSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateRegexMatchSet = 0 }

	export enum UpdateRegexPatternSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateRegexPatternSet = 0 }

	export enum UpdateRuleX_Amz_Target { AWSWAF_Regional_20161128_UpdateRule = 0 }

	export enum UpdateRuleGroupX_Amz_Target { AWSWAF_Regional_20161128_UpdateRuleGroup = 0 }

	export enum UpdateSizeConstraintSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateSizeConstraintSet = 0 }

	export enum UpdateSqlInjectionMatchSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateSqlInjectionMatchSet = 0 }

	export enum UpdateWebACLX_Amz_Target { AWSWAF_Regional_20161128_UpdateWebACL = 0 }

	export enum UpdateXssMatchSetX_Amz_Target { AWSWAF_Regional_20161128_UpdateXssMatchSet = 0 }

}

