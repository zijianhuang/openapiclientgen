import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AadharNumberRequestPayload {
		aadhaar?: string | null;
	}
	export interface AadharNumberRequestPayloadFormProperties {
		aadhaar: FormControl<string | null | undefined>,
	}
	export function CreateAadharNumberRequestPayloadFormGroup() {
		return new FormGroup<AadharNumberRequestPayloadFormProperties>({
			aadhaar: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{12}|\d{16})*$')]),
		});

	}

	export interface AadharOtpGenerateRequestPayLoad {
		aadhaar?: string | null;
	}
	export interface AadharOtpGenerateRequestPayLoadFormProperties {
		aadhaar: FormControl<string | null | undefined>,
	}
	export function CreateAadharOtpGenerateRequestPayLoadFormGroup() {
		return new FormGroup<AadharOtpGenerateRequestPayLoadFormProperties>({
			aadhaar: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{12}|\d{16})*$')]),
		});

	}

	export interface AuthAccountAadhaarBioRequest {
		authType?: AuthAccountAadhaarBioRequestAuthType | null;
		bioType?: string | null;
		pid?: string | null;
		txnId?: string | null;
	}
	export interface AuthAccountAadhaarBioRequestFormProperties {
		authType: FormControl<AuthAccountAadhaarBioRequestAuthType | null | undefined>,
		bioType: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAuthAccountAadhaarBioRequestFormGroup() {
		return new FormGroup<AuthAccountAadhaarBioRequestFormProperties>({
			authType: new FormControl<AuthAccountAadhaarBioRequestAuthType | null | undefined>(undefined),
			bioType: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthAccountAadhaarBioRequestAuthType { FINGERSCAN = 'FINGERSCAN', IRIS = 'IRIS', OTP = 'OTP' }

	export interface AuthAccountAadhaarOTPRequest {

		/** Required */
		otp: string;

		/** Required */
		txnId: string;
	}
	export interface AuthAccountAadhaarOTPRequestFormProperties {

		/** Required */
		otp: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAuthAccountAadhaarOTPRequestFormGroup() {
		return new FormGroup<AuthAccountAadhaarOTPRequestFormProperties>({
			otp: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([1-9][0-9]*)$')]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthAccountMobileOTPRequest {
		otp?: string | null;
		txnId?: string | null;
	}
	export interface AuthAccountMobileOTPRequestFormProperties {
		otp: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAuthAccountMobileOTPRequestFormGroup() {
		return new FormGroup<AuthAccountMobileOTPRequestFormProperties>({
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthAccountWithDemographicsRequest {
		gender?: string | null;
		name?: string | null;

		/** Required */
		txnId: string;
		yearOfBirth?: string | null;
	}
	export interface AuthAccountWithDemographicsRequestFormProperties {
		gender: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateAuthAccountWithDemographicsRequestFormGroup() {
		return new FormGroup<AuthAccountWithDemographicsRequestFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|O|U)$')]),
			name: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{4})$')]),
		});

	}

	export interface AuthInitRequest {

		/** Required */
		authMethod: AuthInitRequestAuthMethod;
		healthid?: string | null;
	}
	export interface AuthInitRequestFormProperties {

		/** Required */
		authMethod: FormControl<AuthInitRequestAuthMethod | null | undefined>,
		healthid: FormControl<string | null | undefined>,
	}
	export function CreateAuthInitRequestFormGroup() {
		return new FormGroup<AuthInitRequestFormProperties>({
			authMethod: new FormControl<AuthInitRequestAuthMethod | null | undefined>(undefined, [Validators.required]),
			healthid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthInitRequestAuthMethod { AADHAAR_OTP = 'AADHAAR_OTP', MOBILE_OTP = 'MOBILE_OTP', PASSWORD = 'PASSWORD', DEMOGRAPHICS = 'DEMOGRAPHICS', AADHAAR_BIO = 'AADHAAR_BIO' }

	export interface AuthMobileOTPRequest {
		healthid?: string | null;
	}
	export interface AuthMobileOTPRequestFormProperties {
		healthid: FormControl<string | null | undefined>,
	}
	export function CreateAuthMobileOTPRequestFormGroup() {
		return new FormGroup<AuthMobileOTPRequestFormProperties>({
			healthid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthWithMobileTxnAndUserData {
		gender?: string | null;
		healthId?: string | null;
		name?: string | null;
		token?: string | null;

		/** Required */
		txnId: string;
		yearOfBirth?: string | null;
	}
	export interface AuthWithMobileTxnAndUserDataFormProperties {
		gender: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateAuthWithMobileTxnAndUserDataFormGroup() {
		return new FormGroup<AuthWithMobileTxnAndUserDataFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthWithPasswordRequest {

		/** Required */
		password: string;

		/** Required */
		txnId: string;
	}
	export interface AuthWithPasswordRequestFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAuthWithPasswordRequestFormGroup() {
		return new FormGroup<AuthWithPasswordRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BenefitDTO {
		benefitId?: string | null;
		benefitName?: string | null;
		description?: string | null;
		linkageDate?: Date | null;
		programName?: string | null;

		/** Type: DateOnly */
		validity?: Date | null;
	}
	export interface BenefitDTOFormProperties {
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		linkageDate: FormControl<Date | null | undefined>,
		programName: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		validity: FormControl<Date | null | undefined>,
	}
	export function CreateBenefitDTOFormGroup() {
		return new FormGroup<BenefitDTOFormProperties>({
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			linkageDate: new FormControl<Date | null | undefined>(undefined),
			programName: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ByteArrayResource {
		byteArray?: string | null;
		description?: string | null;
		file?: File;
		filename?: string | null;
		inputStream?: InputStream;
		open?: boolean | null;
		readable?: boolean | null;
		uri?: URI;
		url?: URL;
	}
	export interface ByteArrayResourceFormProperties {
		byteArray: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
		open: FormControl<boolean | null | undefined>,
		readable: FormControl<boolean | null | undefined>,
	}
	export function CreateByteArrayResourceFormGroup() {
		return new FormGroup<ByteArrayResourceFormProperties>({
			byteArray: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
			description: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			open: new FormControl<boolean | null | undefined>(undefined),
			readable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface File {
		absolute?: boolean | null;
		absoluteFile?: File;
		absolutePath?: string | null;
		canonicalFile?: File;
		canonicalPath?: string | null;
		directory?: boolean | null;
		file?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		freeSpace?: string | null;
		hidden?: boolean | null;
		name?: string | null;
		parent?: string | null;
		parentFile?: File;
		path?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalSpace?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		usableSpace?: string | null;
	}
	export interface FileFormProperties {
		absolute: FormControl<boolean | null | undefined>,
		absolutePath: FormControl<string | null | undefined>,
		canonicalPath: FormControl<string | null | undefined>,
		directory: FormControl<boolean | null | undefined>,
		file: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		freeSpace: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalSpace: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		usableSpace: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			absolute: new FormControl<boolean | null | undefined>(undefined),
			absolutePath: new FormControl<string | null | undefined>(undefined),
			canonicalPath: new FormControl<string | null | undefined>(undefined),
			directory: new FormControl<boolean | null | undefined>(undefined),
			file: new FormControl<boolean | null | undefined>(undefined),
			freeSpace: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			totalSpace: new FormControl<string | null | undefined>(undefined),
			usableSpace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputStream {
	}
	export interface InputStreamFormProperties {
	}
	export function CreateInputStreamFormGroup() {
		return new FormGroup<InputStreamFormProperties>({
		});

	}

	export interface URI {
		absolute?: boolean | null;
		authority?: string | null;
		fragment?: string | null;
		host?: string | null;
		opaque?: boolean | null;
		path?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		port?: number | null;
		query?: string | null;
		rawAuthority?: string | null;
		rawFragment?: string | null;
		rawPath?: string | null;
		rawQuery?: string | null;
		rawSchemeSpecificPart?: string | null;
		rawUserInfo?: string | null;
		scheme?: string | null;
		schemeSpecificPart?: string | null;
		userInfo?: string | null;
	}
	export interface URIFormProperties {
		absolute: FormControl<boolean | null | undefined>,
		authority: FormControl<string | null | undefined>,
		fragment: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		opaque: FormControl<boolean | null | undefined>,
		path: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		port: FormControl<number | null | undefined>,
		query: FormControl<string | null | undefined>,
		rawAuthority: FormControl<string | null | undefined>,
		rawFragment: FormControl<string | null | undefined>,
		rawPath: FormControl<string | null | undefined>,
		rawQuery: FormControl<string | null | undefined>,
		rawSchemeSpecificPart: FormControl<string | null | undefined>,
		rawUserInfo: FormControl<string | null | undefined>,
		scheme: FormControl<string | null | undefined>,
		schemeSpecificPart: FormControl<string | null | undefined>,
		userInfo: FormControl<string | null | undefined>,
	}
	export function CreateURIFormGroup() {
		return new FormGroup<URIFormProperties>({
			absolute: new FormControl<boolean | null | undefined>(undefined),
			authority: new FormControl<string | null | undefined>(undefined),
			fragment: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			opaque: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			rawAuthority: new FormControl<string | null | undefined>(undefined),
			rawFragment: new FormControl<string | null | undefined>(undefined),
			rawPath: new FormControl<string | null | undefined>(undefined),
			rawQuery: new FormControl<string | null | undefined>(undefined),
			rawSchemeSpecificPart: new FormControl<string | null | undefined>(undefined),
			rawUserInfo: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			schemeSpecificPart: new FormControl<string | null | undefined>(undefined),
			userInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface URL {
		authority?: string | null;
		content?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defaultPort?: number | null;
		file?: string | null;
		host?: string | null;
		path?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		port?: number | null;
		protocol?: string | null;
		query?: string | null;
		ref?: string | null;
		userInfo?: string | null;
	}
	export interface URLFormProperties {
		authority: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defaultPort: FormControl<number | null | undefined>,
		file: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		port: FormControl<number | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		ref: FormControl<string | null | undefined>,
		userInfo: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			authority: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			defaultPort: new FormControl<number | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			userInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CovinTxnResponse {
		mobileNumber?: string | null;
		txnId?: string | null;
	}
	export interface CovinTxnResponseFormProperties {
		mobileNumber: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCovinTxnResponseFormGroup() {
		return new FormGroup<CovinTxnResponseFormProperties>({
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccountByVerifiedMobileRequest {
		address?: string | null;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		email?: string | null;
		firstName?: string | null;
		gender?: string | null;
		healthId?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		monthOfBirth?: string | null;
		name?: string | null;
		password?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode?: number | null;
		profilePhoto?: string | null;
		restrictions?: string | null;
		stateCode?: string | null;
		subdistrictCode?: string | null;
		token?: string | null;
		townCode?: string | null;

		/** Required */
		txnId: string;
		villageCode?: string | null;
		wardCode?: string | null;
		yearOfBirth?: string | null;
	}
	export interface CreateAccountByVerifiedMobileRequestFormProperties {
		address: FormControl<string | null | undefined>,
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode: FormControl<number | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		restrictions: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		subdistrictCode: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		townCode: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
		villageCode: FormControl<string | null | undefined>,
		wardCode: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountByVerifiedMobileRequestFormGroup() {
		return new FormGroup<CreateAccountByVerifiedMobileRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			dayOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])$')]),
			districtCode: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|O|U)$')]),
			healthId: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|1[012])$')]),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pincode: new FormControl<number | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			restrictions: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			subdistrictCode: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			townCode: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			villageCode: new FormControl<string | null | undefined>(undefined),
			wardCode: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{4})$')]),
		});

	}

	export interface CreateAccountJwtResponse {
		authMethods?: Array<AuthInitRequestAuthMethod>;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		districtName?: string | null;
		email?: string | null;
		firstName?: string | null;
		gender?: string | null;
		healthId?: string | null;
		healthIdNumber?: string | null;
		kycPhoto?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		mobile?: string | null;
		monthOfBirth?: string | null;
		name?: string | null;
		new?: boolean | null;
		stateCode?: string | null;
		stateName?: string | null;
		tags?: {[id: string]: string };
		token?: string | null;
		yearOfBirth?: string | null;
	}
	export interface CreateAccountJwtResponseFormProperties {
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		districtName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		kycPhoto: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		new: FormControl<boolean | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		stateName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		token: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountJwtResponseFormGroup() {
		return new FormGroup<CreateAccountJwtResponseFormProperties>({
			dayOfBirth: new FormControl<string | null | undefined>(undefined),
			districtCode: new FormControl<string | null | undefined>(undefined),
			districtName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			kycPhoto: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<boolean | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			stateName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccountWithAadhaarOtp {
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		mobile?: string | null;
		otp?: string | null;
		password?: string | null;
		profilePhoto?: string | null;
		restrictions?: string | null;
		txnId?: string | null;
		username?: string | null;
	}
	export interface CreateAccountWithAadhaarOtpFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		restrictions: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountWithAadhaarOtpFormGroup() {
		return new FormGroup<CreateAccountWithAadhaarOtpFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			restrictions: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccountWithPreVerifiedAadhaar {
		email?: string | null;
		firstName?: string | null;
		healthId?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		password?: string | null;
		profilePhoto?: string | null;
		txnId?: string | null;
	}
	export interface CreateAccountWithPreVerifiedAadhaarFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountWithPreVerifiedAadhaarFormGroup() {
		return new FormGroup<CreateAccountWithPreVerifiedAadhaarFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHIdDemoAuthRequest {
		aadharNumber?: string | null;
		autoGeneratedBenefitId?: boolean | null;
		benefitId?: string | null;
		benefitName?: string | null;
		consentHealthId?: boolean | null;
		dateOfBirth?: string | null;
		gender?: string | null;
		mobileNumber?: string | null;
		name?: string | null;
		validity?: string | null;
	}
	export interface CreateHIdDemoAuthRequestFormProperties {
		aadharNumber: FormControl<string | null | undefined>,
		autoGeneratedBenefitId: FormControl<boolean | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		consentHealthId: FormControl<boolean | null | undefined>,
		dateOfBirth: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateCreateHIdDemoAuthRequestFormGroup() {
		return new FormGroup<CreateHIdDemoAuthRequestFormProperties>({
			aadharNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{12}|\d{16})*$')]),
			autoGeneratedBenefitId: new FormControl<boolean | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			consentHealthId: new FormControl<boolean | null | undefined>(undefined),
			dateOfBirth: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|T)$')]),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHealthIdOptRequest {
		autoGeneratedBenefitId?: boolean | null;
		benefitId?: string | null;
		benefitName?: string | null;
		consentHealthId?: boolean | null;
		mobileNumber?: string | null;
		otp?: string | null;
		txnId?: string | null;
		validity?: string | null;
	}
	export interface CreateHealthIdOptRequestFormProperties {
		autoGeneratedBenefitId: FormControl<boolean | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		consentHealthId: FormControl<boolean | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateCreateHealthIdOptRequestFormGroup() {
		return new FormGroup<CreateHealthIdOptRequestFormProperties>({
			autoGeneratedBenefitId: new FormControl<boolean | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			consentHealthId: new FormControl<boolean | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHidBiometricRequest {
		aadhaar?: string | null;
		autoGeneratedBenefitId?: boolean | null;
		benefitId?: string | null;
		benefitName?: string | null;
		bioType?: string | null;
		consentHealthId?: boolean | null;
		mobileNumber?: string | null;
		pid?: string | null;
		validity?: string | null;
	}
	export interface CreateHidBiometricRequestFormProperties {
		aadhaar: FormControl<string | null | undefined>,
		autoGeneratedBenefitId: FormControl<boolean | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		bioType: FormControl<string | null | undefined>,
		consentHealthId: FormControl<boolean | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateCreateHidBiometricRequestFormGroup() {
		return new FormGroup<CreateHidBiometricRequestFormProperties>({
			aadhaar: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{12}|\d{16})*$')]),
			autoGeneratedBenefitId: new FormControl<boolean | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			bioType: new FormControl<string | null | undefined>(undefined),
			consentHealthId: new FormControl<boolean | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHidMobileRequest {
		autoGeneratedBenefitId?: boolean | null;
		benefitDocType?: CreateHidMobileRequestBenefitDocType | null;
		benefitId?: string | null;
		benefitName?: string | null;
		consentHealthId?: boolean | null;
		dateOfBirth?: string | null;
		docNumber?: string | null;
		fileType?: string | null;
		gender?: string | null;
		name?: string | null;
		otp?: string | null;
		txnId?: string | null;
		uploadedDoc?: string | null;
		validity?: string | null;
	}
	export interface CreateHidMobileRequestFormProperties {
		autoGeneratedBenefitId: FormControl<boolean | null | undefined>,
		benefitDocType: FormControl<CreateHidMobileRequestBenefitDocType | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		consentHealthId: FormControl<boolean | null | undefined>,
		dateOfBirth: FormControl<string | null | undefined>,
		docNumber: FormControl<string | null | undefined>,
		fileType: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
		uploadedDoc: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateCreateHidMobileRequestFormGroup() {
		return new FormGroup<CreateHidMobileRequestFormProperties>({
			autoGeneratedBenefitId: new FormControl<boolean | null | undefined>(undefined),
			benefitDocType: new FormControl<CreateHidMobileRequestBenefitDocType | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			consentHealthId: new FormControl<boolean | null | undefined>(undefined),
			dateOfBirth: new FormControl<string | null | undefined>(undefined),
			docNumber: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|T)$')]),
			name: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
			uploadedDoc: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateHidMobileRequestBenefitDocType { VOTER_ID_CARD = 'VOTER_ID_CARD', RATION_CARD = 'RATION_CARD', PAN_CARD = 'PAN_CARD', DRIVING_LICENSE = 'DRIVING_LICENSE', PENSIONER_PHOTO_CARD = 'PENSIONER_PHOTO_CARD', KISSAN_PHOTO_PASSBOOK = 'KISSAN_PHOTO_PASSBOOK', FREEDOM_FIGHTER_PHOTO_CARD = 'FREEDOM_FIGHTER_PHOTO_CARD', CERTIFICATE_IDENTIFY = 'CERTIFICATE_IDENTIFY', DISABILITY_ID_CARD = 'DISABILITY_ID_CARD', MNREGA_JOB_CARD = 'MNREGA_JOB_CARD', BIRTH_CERTIFICATE = 'BIRTH_CERTIFICATE', MARRIAGE_CERTIFICATE = 'MARRIAGE_CERTIFICATE', OTHER_GOVERNMENT_ID = 'OTHER_GOVERNMENT_ID', ADOPTION_CERTIFICATE = 'ADOPTION_CERTIFICATE' }

	export interface CreateHidNotifyBenefitRequest {
		aadharNumberOrUidToken?: string | null;
		autoGeneratedBenefitId?: boolean | null;
		benefitId?: string | null;
		benefitName?: string | null;
		consentHealthId?: boolean | null;
		dateOfBirth?: string | null;
		gender?: string | null;
		mobileNumber?: string | null;
		name?: string | null;
		stateCode?: string | null;
		validity?: string | null;
	}
	export interface CreateHidNotifyBenefitRequestFormProperties {
		aadharNumberOrUidToken: FormControl<string | null | undefined>,
		autoGeneratedBenefitId: FormControl<boolean | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		consentHealthId: FormControl<boolean | null | undefined>,
		dateOfBirth: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateCreateHidNotifyBenefitRequestFormGroup() {
		return new FormGroup<CreateHidNotifyBenefitRequestFormProperties>({
			aadharNumberOrUidToken: new FormControl<string | null | undefined>(undefined),
			autoGeneratedBenefitId: new FormControl<boolean | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			consentHealthId: new FormControl<boolean | null | undefined>(undefined),
			dateOfBirth: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|T)$')]),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistrictDTO {
		code?: string | null;
		name?: string | null;
	}
	export interface DistrictDTOFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDistrictDTOFormGroup() {
		return new FormGroup<DistrictDTOFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateMobileOTPForTxnRequest {
		mobile?: string | null;
		txnId?: string | null;
	}
	export interface GenerateMobileOTPForTxnRequestFormProperties {
		mobile: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMobileOTPForTxnRequestFormGroup() {
		return new FormGroup<GenerateMobileOTPForTxnRequestFormProperties>({
			mobile: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateMobileOTPRequest {
		mobile?: string | null;
	}
	export interface GenerateMobileOTPRequestFormProperties {
		mobile: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMobileOTPRequestFormGroup() {
		return new FormGroup<GenerateMobileOTPRequestFormProperties>({
			mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthFacilityAuthenticationRequest {
		hfrUid?: string | null;
		password?: string | null;
	}
	export interface HealthFacilityAuthenticationRequestFormProperties {
		hfrUid: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateHealthFacilityAuthenticationRequestFormGroup() {
		return new FormGroup<HealthFacilityAuthenticationRequestFormProperties>({
			hfrUid: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthFacilityAuthenticationResponse {
		changePassword?: boolean | null;
		token?: string | null;
	}
	export interface HealthFacilityAuthenticationResponseFormProperties {
		changePassword: FormControl<boolean | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateHealthFacilityAuthenticationResponseFormGroup() {
		return new FormGroup<HealthFacilityAuthenticationResponseFormProperties>({
			changePassword: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthFacilityChangedPasswordRequest {
		hfrUid?: string | null;
		newPassword?: string | null;
		oldPassword?: string | null;
	}
	export interface HealthFacilityChangedPasswordRequestFormProperties {
		hfrUid: FormControl<string | null | undefined>,
		newPassword: FormControl<string | null | undefined>,
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateHealthFacilityChangedPasswordRequestFormGroup() {
		return new FormGroup<HealthFacilityChangedPasswordRequestFormProperties>({
			hfrUid: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined),
			oldPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthFacilityPasswordRequest {
		hfrUid?: string | null;
	}
	export interface HealthFacilityPasswordRequestFormProperties {
		hfrUid: FormControl<string | null | undefined>,
	}
	export function CreateHealthFacilityPasswordRequestFormGroup() {
		return new FormGroup<HealthFacilityPasswordRequestFormProperties>({
			hfrUid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthFacilityPasswordResponse {
		password?: string | null;
	}
	export interface HealthFacilityPasswordResponseFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateHealthFacilityPasswordResponseFormGroup() {
		return new FormGroup<HealthFacilityPasswordResponseFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitDelinkRequestPayload {
		benefitName?: string | null;
		uidToken?: string | null;
	}
	export interface HidBenefitDelinkRequestPayloadFormProperties {
		benefitName: FormControl<string | null | undefined>,
		uidToken: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitDelinkRequestPayloadFormGroup() {
		return new FormGroup<HidBenefitDelinkRequestPayloadFormProperties>({
			benefitName: new FormControl<string | null | undefined>(undefined),
			uidToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitLinkedRequestPayload {
		benefitId?: string | null;
		benefitName?: string | null;
		stateCode?: string | null;
		uidToken?: string | null;
		validity?: string | null;
	}
	export interface HidBenefitLinkedRequestPayloadFormProperties {
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		uidToken: FormControl<string | null | undefined>,
		validity: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitLinkedRequestPayloadFormGroup() {
		return new FormGroup<HidBenefitLinkedRequestPayloadFormProperties>({
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			uidToken: new FormControl<string | null | undefined>(undefined),
			validity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitLinkedResponsePayload {
		benefitName?: string | null;
		healthId?: string | null;
		status?: string | null;
	}
	export interface HidBenefitLinkedResponsePayloadFormProperties {
		benefitName: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitLinkedResponsePayloadFormGroup() {
		return new FormGroup<HidBenefitLinkedResponsePayloadFormProperties>({
			benefitName: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitNameSearchRequest {
		benefitId?: string | null;
		healthId?: string | null;
	}
	export interface HidBenefitNameSearchRequestFormProperties {
		benefitId: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitNameSearchRequestFormGroup() {
		return new FormGroup<HidBenefitNameSearchRequestFormProperties>({
			benefitId: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitRequestPayload {
		address?: string | null;
		authMethods?: Array<AuthInitRequestAuthMethod>;
		benefitId?: string | null;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		districtName?: string | null;
		email?: string | null;
		firstName?: string | null;
		gender?: string | null;
		healthId?: string | null;
		healthIdNumber?: string | null;
		kycPhoto?: string | null;
		kycVerified?: boolean | null;
		lastName?: string | null;
		middleName?: string | null;
		mobile?: string | null;
		monthOfBirth?: string | null;
		name?: string | null;
		new?: boolean | null;
		pincode?: string | null;
		profilePhoto?: string | null;
		stateCode?: string | null;
		stateName?: string | null;
		status?: string | null;
		subDistrictCode?: string | null;
		subdistrictName?: string | null;
		tags?: {[id: string]: string };
		token?: string | null;
		townCode?: string | null;
		townName?: string | null;
		villageCode?: string | null;
		villageName?: string | null;
		wardCode?: string | null;
		wardName?: string | null;
		yearOfBirth?: string | null;
	}
	export interface HidBenefitRequestPayloadFormProperties {
		address: FormControl<string | null | undefined>,
		benefitId: FormControl<string | null | undefined>,
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		districtName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		kycPhoto: FormControl<string | null | undefined>,
		kycVerified: FormControl<boolean | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		new: FormControl<boolean | null | undefined>,
		pincode: FormControl<string | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		stateName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		subDistrictCode: FormControl<string | null | undefined>,
		subdistrictName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		token: FormControl<string | null | undefined>,
		townCode: FormControl<string | null | undefined>,
		townName: FormControl<string | null | undefined>,
		villageCode: FormControl<string | null | undefined>,
		villageName: FormControl<string | null | undefined>,
		wardCode: FormControl<string | null | undefined>,
		wardName: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitRequestPayloadFormGroup() {
		return new FormGroup<HidBenefitRequestPayloadFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			benefitId: new FormControl<string | null | undefined>(undefined),
			dayOfBirth: new FormControl<string | null | undefined>(undefined),
			districtCode: new FormControl<string | null | undefined>(undefined),
			districtName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			kycPhoto: new FormControl<string | null | undefined>(undefined),
			kycVerified: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<boolean | null | undefined>(undefined),
			pincode: new FormControl<string | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			stateName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subDistrictCode: new FormControl<string | null | undefined>(undefined),
			subdistrictName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			townCode: new FormControl<string | null | undefined>(undefined),
			townName: new FormControl<string | null | undefined>(undefined),
			villageCode: new FormControl<string | null | undefined>(undefined),
			villageName: new FormControl<string | null | undefined>(undefined),
			wardCode: new FormControl<string | null | undefined>(undefined),
			wardName: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidBenefitSearchResponsePayload {
		benefitId?: string | null;
		benefitName?: string | null;
		healthIdNumber?: string | null;
		stateCode?: string | null;
	}
	export interface HidBenefitSearchResponsePayloadFormProperties {
		benefitId: FormControl<string | null | undefined>,
		benefitName: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
	}
	export function CreateHidBenefitSearchResponsePayloadFormGroup() {
		return new FormGroup<HidBenefitSearchResponsePayloadFormProperties>({
			benefitId: new FormControl<string | null | undefined>(undefined),
			benefitName: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidChangePasswordRequestPayload {
		newPassword?: string | null;
		oldPassword?: string | null;
	}
	export interface HidChangePasswordRequestPayloadFormProperties {
		newPassword: FormControl<string | null | undefined>,
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateHidChangePasswordRequestPayloadFormGroup() {
		return new FormGroup<HidChangePasswordRequestPayloadFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined),
			oldPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidOtpRequestPaylaod {
		newPassword?: string | null;
		otp?: string | null;
		txnId?: string | null;
	}
	export interface HidOtpRequestPaylaodFormProperties {
		newPassword: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateHidOtpRequestPaylaodFormGroup() {
		return new FormGroup<HidOtpRequestPaylaodFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidStatusRequestPayload {
		healthIdNumber?: string | null;
	}
	export interface HidStatusRequestPayloadFormProperties {
		healthIdNumber: FormControl<string | null | undefined>,
	}
	export function CreateHidStatusRequestPayloadFormGroup() {
		return new FormGroup<HidStatusRequestPayloadFormProperties>({
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidUpdateAccountRequest {
		address?: string | null;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		email?: string | null;
		firstName?: string | null;
		healthId?: string | null;
		healthIdNumber?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		monthOfBirth?: string | null;
		password?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode?: number | null;
		profilePhoto?: string | null;
		stateCode?: string | null;
		subdistrictCode?: string | null;
		townCode?: string | null;
		villageCode?: string | null;
		wardCode?: string | null;
		yearOfBirth?: string | null;
	}
	export interface HidUpdateAccountRequestFormProperties {
		address: FormControl<string | null | undefined>,
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode: FormControl<number | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		subdistrictCode: FormControl<string | null | undefined>,
		townCode: FormControl<string | null | undefined>,
		villageCode: FormControl<string | null | undefined>,
		wardCode: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateHidUpdateAccountRequestFormGroup() {
		return new FormGroup<HidUpdateAccountRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			dayOfBirth: new FormControl<string | null | undefined>(undefined),
			districtCode: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pincode: new FormControl<number | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			subdistrictCode: new FormControl<string | null | undefined>(undefined),
			townCode: new FormControl<string | null | undefined>(undefined),
			villageCode: new FormControl<string | null | undefined>(undefined),
			wardCode: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HidUpdateMobiletRequest {
		healthIdNumber?: string | null;
		mobile?: string | null;
	}
	export interface HidUpdateMobiletRequestFormProperties {
		healthIdNumber: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
	}
	export function CreateHidUpdateMobiletRequestFormGroup() {
		return new FormGroup<HidUpdateMobiletRequestFormProperties>({
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JwtRequest {
		healthId?: string | null;
		password?: string | null;
	}
	export interface JwtRequestFormProperties {
		healthId: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateJwtRequestFormGroup() {
		return new FormGroup<JwtRequestFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JwtResponse {
		token?: string | null;
	}
	export interface JwtResponseFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateJwtResponseFormGroup() {
		return new FormGroup<JwtResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileVerificationToken {
		token?: string | null;
	}
	export interface MobileVerificationTokenFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateMobileVerificationTokenFormGroup() {
		return new FormGroup<MobileVerificationTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResendOTPRequest {

		/** Required */
		txnId: string;
	}
	export interface ResendOTPRequestFormProperties {

		/** Required */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateResendOTPRequestFormGroup() {
		return new FormGroup<ResendOTPRequestFormProperties>({
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResponseEntity {
		body?: string | null;
		statusCode?: ResponseEntityStatusCode | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCodeValue?: number | null;
	}
	export interface ResponseEntityFormProperties {
		body: FormControl<string | null | undefined>,
		statusCode: FormControl<ResponseEntityStatusCode | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statusCodeValue: FormControl<number | null | undefined>,
	}
	export function CreateResponseEntityFormGroup() {
		return new FormGroup<ResponseEntityFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<ResponseEntityStatusCode | null | undefined>(undefined),
			statusCodeValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResponseEntityStatusCode { '100 CONTINUE' = '100 CONTINUE', '101 SWITCHING_PROTOCOLS' = '101 SWITCHING_PROTOCOLS', '102 PROCESSING' = '102 PROCESSING', '103 CHECKPOINT' = '103 CHECKPOINT', '200 OK' = '200 OK', '201 CREATED' = '201 CREATED', '202 ACCEPTED' = '202 ACCEPTED', '203 NON_AUTHORITATIVE_INFORMATION' = '203 NON_AUTHORITATIVE_INFORMATION', '204 NO_CONTENT' = '204 NO_CONTENT', '205 RESET_CONTENT' = '205 RESET_CONTENT', '206 PARTIAL_CONTENT' = '206 PARTIAL_CONTENT', '207 MULTI_STATUS' = '207 MULTI_STATUS', '208 ALREADY_REPORTED' = '208 ALREADY_REPORTED', '226 IM_USED' = '226 IM_USED', '300 MULTIPLE_CHOICES' = '300 MULTIPLE_CHOICES', '301 MOVED_PERMANENTLY' = '301 MOVED_PERMANENTLY', '302 FOUND' = '302 FOUND', '302 MOVED_TEMPORARILY' = '302 MOVED_TEMPORARILY', '303 SEE_OTHER' = '303 SEE_OTHER', '304 NOT_MODIFIED' = '304 NOT_MODIFIED', '305 USE_PROXY' = '305 USE_PROXY', '307 TEMPORARY_REDIRECT' = '307 TEMPORARY_REDIRECT', '308 PERMANENT_REDIRECT' = '308 PERMANENT_REDIRECT', '400 BAD_REQUEST' = '400 BAD_REQUEST', '401 UNAUTHORIZED' = '401 UNAUTHORIZED', '402 PAYMENT_REQUIRED' = '402 PAYMENT_REQUIRED', '403 FORBIDDEN' = '403 FORBIDDEN', '404 NOT_FOUND' = '404 NOT_FOUND', '405 METHOD_NOT_ALLOWED' = '405 METHOD_NOT_ALLOWED', '406 NOT_ACCEPTABLE' = '406 NOT_ACCEPTABLE', '407 PROXY_AUTHENTICATION_REQUIRED' = '407 PROXY_AUTHENTICATION_REQUIRED', '408 REQUEST_TIMEOUT' = '408 REQUEST_TIMEOUT', '409 CONFLICT' = '409 CONFLICT', '410 GONE' = '410 GONE', '411 LENGTH_REQUIRED' = '411 LENGTH_REQUIRED', '412 PRECONDITION_FAILED' = '412 PRECONDITION_FAILED', '413 PAYLOAD_TOO_LARGE' = '413 PAYLOAD_TOO_LARGE', '413 REQUEST_ENTITY_TOO_LARGE' = '413 REQUEST_ENTITY_TOO_LARGE', '414 URI_TOO_LONG' = '414 URI_TOO_LONG', '414 REQUEST_URI_TOO_LONG' = '414 REQUEST_URI_TOO_LONG', '415 UNSUPPORTED_MEDIA_TYPE' = '415 UNSUPPORTED_MEDIA_TYPE', '416 REQUESTED_RANGE_NOT_SATISFIABLE' = '416 REQUESTED_RANGE_NOT_SATISFIABLE', '417 EXPECTATION_FAILED' = '417 EXPECTATION_FAILED', '418 I_AM_A_TEAPOT' = '418 I_AM_A_TEAPOT', '419 INSUFFICIENT_SPACE_ON_RESOURCE' = '419 INSUFFICIENT_SPACE_ON_RESOURCE', '420 METHOD_FAILURE' = '420 METHOD_FAILURE', '421 DESTINATION_LOCKED' = '421 DESTINATION_LOCKED', '422 UNPROCESSABLE_ENTITY' = '422 UNPROCESSABLE_ENTITY', '423 LOCKED' = '423 LOCKED', '424 FAILED_DEPENDENCY' = '424 FAILED_DEPENDENCY', '426 UPGRADE_REQUIRED' = '426 UPGRADE_REQUIRED', '428 PRECONDITION_REQUIRED' = '428 PRECONDITION_REQUIRED', '429 TOO_MANY_REQUESTS' = '429 TOO_MANY_REQUESTS', '431 REQUEST_HEADER_FIELDS_TOO_LARGE' = '431 REQUEST_HEADER_FIELDS_TOO_LARGE', '451 UNAVAILABLE_FOR_LEGAL_REASONS' = '451 UNAVAILABLE_FOR_LEGAL_REASONS', '500 INTERNAL_SERVER_ERROR' = '500 INTERNAL_SERVER_ERROR', '501 NOT_IMPLEMENTED' = '501 NOT_IMPLEMENTED', '502 BAD_GATEWAY' = '502 BAD_GATEWAY', '503 SERVICE_UNAVAILABLE' = '503 SERVICE_UNAVAILABLE', '504 GATEWAY_TIMEOUT' = '504 GATEWAY_TIMEOUT', '505 HTTP_VERSION_NOT_SUPPORTED' = '505 HTTP_VERSION_NOT_SUPPORTED', '506 VARIANT_ALSO_NEGOTIATES' = '506 VARIANT_ALSO_NEGOTIATES', '507 INSUFFICIENT_STORAGE' = '507 INSUFFICIENT_STORAGE', '508 LOOP_DETECTED' = '508 LOOP_DETECTED', '509 BANDWIDTH_LIMIT_EXCEEDED' = '509 BANDWIDTH_LIMIT_EXCEEDED', '510 NOT_EXTENDED' = '510 NOT_EXTENDED', '511 NETWORK_AUTHENTICATION_REQUIRED' = '511 NETWORK_AUTHENTICATION_REQUIRED' }

	export interface RetrieveHealthIdPayloadResponse {
		healthId?: string | null;
		healthIdNumber?: string | null;
	}
	export interface RetrieveHealthIdPayloadResponseFormProperties {
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveHealthIdPayloadResponseFormGroup() {
		return new FormGroup<RetrieveHealthIdPayloadResponseFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetriveHealthIdMobilePayLoad {
		dayOfBirth?: string | null;
		firstName?: string | null;
		gender?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		monthOfBirth?: string | null;
		name?: string | null;
		otp?: string | null;

		/** Required */
		txnId: string;
		yearOfBirth?: string | null;
	}
	export interface RetriveHealthIdMobilePayLoadFormProperties {
		dayOfBirth: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,

		/** Required */
		txnId: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateRetriveHealthIdMobilePayLoadFormGroup() {
		return new FormGroup<RetriveHealthIdMobilePayLoadFormProperties>({
			dayOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])$')]),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(M|F|O|U)$')]),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(0?[1-9]|1[012])$')]),
			name: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{4})$')]),
		});

	}

	export interface SearchByHealthIdRequest {
		healthId?: string | null;
	}
	export interface SearchByHealthIdRequestFormProperties {
		healthId: FormControl<string | null | undefined>,
	}
	export function CreateSearchByHealthIdRequestFormGroup() {
		return new FormGroup<SearchByHealthIdRequestFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchByMobileRequest {
		gender?: string | null;
		mobile?: string | null;
		name?: string | null;
		yearOfBirth?: string | null;
	}
	export interface SearchByMobileRequestFormProperties {
		gender: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateSearchByMobileRequestFormGroup() {
		return new FormGroup<SearchByMobileRequestFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchResponseSingle {
		authMethods?: Array<AuthInitRequestAuthMethod>;
		healthId?: string | null;
		healthIdNumber?: string | null;
		name?: string | null;
		tags?: {[id: string]: string };
	}
	export interface SearchResponseSingleFormProperties {
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSearchResponseSingleFormGroup() {
		return new FormGroup<SearchResponseSingleFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StatesDTO {
		code?: string | null;
		districts?: Array<DistrictDTO>;
		name?: string | null;
	}
	export interface StatesDTOFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateStatesDTOFormGroup() {
		return new FormGroup<StatesDTOFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagRequest {
		healthId?: string | null;
		tags?: {[id: string]: string };
	}
	export interface TagRequestFormProperties {
		healthId: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagRequestFormGroup() {
		return new FormGroup<TagRequestFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TxnResponse {
		txnId?: string | null;
	}
	export interface TxnResponseFormProperties {
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateTxnResponseFormGroup() {
		return new FormGroup<TxnResponseFormProperties>({
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountRequest {
		address?: string | null;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		email?: string | null;
		firstName?: string | null;
		healthId?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		monthOfBirth?: string | null;
		password?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode?: number | null;
		profilePhoto?: string | null;
		stateCode?: string | null;
		subdistrictCode?: string | null;
		townCode?: string | null;
		villageCode?: string | null;
		wardCode?: string | null;
		yearOfBirth?: string | null;
	}
	export interface UpdateAccountRequestFormProperties {
		address: FormControl<string | null | undefined>,
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode: FormControl<number | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		subdistrictCode: FormControl<string | null | undefined>,
		townCode: FormControl<string | null | undefined>,
		villageCode: FormControl<string | null | undefined>,
		wardCode: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountRequestFormGroup() {
		return new FormGroup<UpdateAccountRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			dayOfBirth: new FormControl<string | null | undefined>(undefined),
			districtCode: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pincode: new FormControl<number | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			subdistrictCode: new FormControl<string | null | undefined>(undefined),
			townCode: new FormControl<string | null | undefined>(undefined),
			villageCode: new FormControl<string | null | undefined>(undefined),
			wardCode: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserDTO {
		address?: string | null;
		authMethods?: Array<AuthInitRequestAuthMethod>;
		dayOfBirth?: string | null;
		districtCode?: string | null;
		districtName?: string | null;
		email?: string | null;
		firstName?: string | null;
		gender?: string | null;
		healthId?: string | null;
		healthIdNumber?: string | null;
		kycPhoto?: string | null;
		kycVerified?: boolean | null;
		lastName?: string | null;
		middleName?: string | null;
		mobile?: string | null;
		monthOfBirth?: string | null;
		name?: string | null;
		new?: boolean | null;
		pincode?: string | null;
		profilePhoto?: string | null;
		stateCode?: string | null;
		stateName?: string | null;
		subDistrictCode?: string | null;
		subdistrictName?: string | null;
		tags?: {[id: string]: string };
		townCode?: string | null;
		townName?: string | null;
		villageCode?: string | null;
		villageName?: string | null;
		wardCode?: string | null;
		wardName?: string | null;
		yearOfBirth?: string | null;
	}
	export interface UserDTOFormProperties {
		address: FormControl<string | null | undefined>,
		dayOfBirth: FormControl<string | null | undefined>,
		districtCode: FormControl<string | null | undefined>,
		districtName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		healthId: FormControl<string | null | undefined>,
		healthIdNumber: FormControl<string | null | undefined>,
		kycPhoto: FormControl<string | null | undefined>,
		kycVerified: FormControl<boolean | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		new: FormControl<boolean | null | undefined>,
		pincode: FormControl<string | null | undefined>,
		profilePhoto: FormControl<string | null | undefined>,
		stateCode: FormControl<string | null | undefined>,
		stateName: FormControl<string | null | undefined>,
		subDistrictCode: FormControl<string | null | undefined>,
		subdistrictName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		townCode: FormControl<string | null | undefined>,
		townName: FormControl<string | null | undefined>,
		villageCode: FormControl<string | null | undefined>,
		villageName: FormControl<string | null | undefined>,
		wardCode: FormControl<string | null | undefined>,
		wardName: FormControl<string | null | undefined>,
		yearOfBirth: FormControl<string | null | undefined>,
	}
	export function CreateUserDTOFormGroup() {
		return new FormGroup<UserDTOFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			dayOfBirth: new FormControl<string | null | undefined>(undefined),
			districtCode: new FormControl<string | null | undefined>(undefined),
			districtName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			healthId: new FormControl<string | null | undefined>(undefined),
			healthIdNumber: new FormControl<string | null | undefined>(undefined),
			kycPhoto: new FormControl<string | null | undefined>(undefined),
			kycVerified: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			monthOfBirth: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<boolean | null | undefined>(undefined),
			pincode: new FormControl<string | null | undefined>(undefined),
			profilePhoto: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
			stateName: new FormControl<string | null | undefined>(undefined),
			subDistrictCode: new FormControl<string | null | undefined>(undefined),
			subdistrictName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			townCode: new FormControl<string | null | undefined>(undefined),
			townName: new FormControl<string | null | undefined>(undefined),
			villageCode: new FormControl<string | null | undefined>(undefined),
			villageName: new FormControl<string | null | undefined>(undefined),
			wardCode: new FormControl<string | null | undefined>(undefined),
			wardName: new FormControl<string | null | undefined>(undefined),
			yearOfBirth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateTokenRequest {
		authToken?: string | null;
	}
	export interface ValidateTokenRequestFormProperties {
		authToken: FormControl<string | null | undefined>,
	}
	export function CreateValidateTokenRequestFormGroup() {
		return new FormGroup<ValidateTokenRequestFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyAadhaarOtp {
		otp?: string | null;
		restrictions?: string | null;
		txnId?: string | null;
	}
	export interface VerifyAadhaarOtpFormProperties {
		otp: FormControl<string | null | undefined>,
		restrictions: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAadhaarOtpFormGroup() {
		return new FormGroup<VerifyAadhaarOtpFormProperties>({
			otp: new FormControl<string | null | undefined>(undefined),
			restrictions: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyAadhaarWithBio {
		aadhaar?: string | null;
		bioType?: string | null;
		pid?: string | null;
		restrictions?: string | null;
	}
	export interface VerifyAadhaarWithBioFormProperties {
		aadhaar: FormControl<string | null | undefined>,
		bioType: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		restrictions: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAadhaarWithBioFormGroup() {
		return new FormGroup<VerifyAadhaarWithBioFormProperties>({
			aadhaar: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\d{12}|\d{16})*$')]),
			bioType: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			restrictions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyMobileRequest {
		otp?: string | null;
		txnId?: string | null;
	}
	export interface VerifyMobileRequestFormProperties {
		otp: FormControl<string | null | undefined>,
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyMobileRequestFormGroup() {
		return new FormGroup<VerifyMobileRequestFormProperties>({
			otp: new FormControl<string | null | undefined>(undefined),
			txnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate Aadhaar OTP on registrered for link account with aadhar number
		 * Generate Aadhaar OTP on registrered for link account with aadhar number
		 * Post v1/account/aadhaar/generateOTP
		 * @return {void} OK
		 */
		GeneratereKycAadharOTPUsingPOST(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/aadhaar/generateOTP', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Aadhaar OTP to complete KYC/re-KYC verification.
		 * Verify Aadhaar OTP to complete KYC/re-KYC verification
		 * Post v1/account/aadhaar/verifyOTP
		 * @param {VerifyAadhaarOtp} requestBody verifyAadhaarOtp
		 * @return {void} OK
		 */
		VerifyAadharOTPOnlyUsingPOST_1(requestBody: VerifyAadhaarOtp): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/aadhaar/verifyOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Benefits associated with HealthID.
		 * Get v1/account/benefits
		 * @return {void} OK
		 */
		GetBenefitsUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/benefits', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password via Aadhar for heath id.
		 * Change password via Aadhar for heath id.
		 * Post v1/account/change/passwd/byAadhaar
		 * @param {HidOtpRequestPaylaod} requestBody hidOtpRequestPaylaod
		 * @return {void} OK
		 */
		ChangePasswordViaAadharUsingPOST(requestBody: HidOtpRequestPaylaod): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/change/passwd/byAadhaar', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password via mobile for heath id.
		 * Change password via mobile for heath id.
		 * Post v1/account/change/passwd/byMobile
		 * @param {HidOtpRequestPaylaod} requestBody hidOtpRequestPaylaod
		 * @return {void} OK
		 */
		ChangePasswordViaMobileUsingPOST(requestBody: HidOtpRequestPaylaod): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/change/passwd/byMobile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Aadhaar OTP on registrered mobile number.
		 * Generate Aadhaar OTP on registrered mobile number.
		 * Get v1/account/change/passwd/generateAadhaarOTP
		 * @return {void} OK
		 */
		GenerateAadharOTPUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/change/passwd/generateAadhaarOTP', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Mobile OTP to start registration.
		 * Generate Mobile OTP to start registration.
		 * Get v1/account/change/passwd/generateMobileOTP
		 * @return {void} OK
		 */
		GenerateMobileOTPUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/change/passwd/generateMobileOTP', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password via password for heath id.
		 * Change password via password for heath id.
		 * Post v1/account/change/password
		 * @param {HidChangePasswordRequestPayload} requestBody healthFacilityPasswordRequest
		 * @return {void} OK
		 */
		ChangePasswordViaUsingPOST(requestBody: HidChangePasswordRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/change/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Health ID card in PDF format
		 * Get v1/account/getCard
		 * @return {void} OK
		 */
		GenerateCardUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/getCard', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Health ID card PNG
		 * Get v1/account/getPngCard
		 * @return {void} OK
		 */
		GeneratePngCardUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/getPngCard', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Health ID card SVG
		 * Get v1/account/getSvgCard
		 * @return {void} OK
		 */
		GenerateSvgCardUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/getSvgCard', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete account
		 * Delete v1/account/profile
		 * @return {void} OK
		 */
		DeleteAccountUsingDELETE(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/account/profile', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get account information.
		 * Get v1/account/profile
		 * @return {void} OK
		 */
		GetAccountInformationUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/profile', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update account information
		 * Post v1/account/profile
		 * @param {UpdateAccountRequest} requestBody request
		 * @return {void} OK
		 */
		UpdateAccountInformationUsingPOST(requestBody: UpdateAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Quick Response code in PNG format for this account.
		 * Get v1/account/qrCode
		 * @return {void} OK
		 */
		GetQrCodeUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/account/qrCode', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate auth token
		 * Post v1/account/token
		 * @param {ValidateTokenRequest} requestBody request
		 * @return {void} OK
		 */
		ValidateTokenUsingPOST(requestBody: ValidateTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/account/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticate using Health ID number / Health ID and password
		 * Post v1/auth/authPassword
		 * @param {JwtRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		AuthenticateWithPasswordUsingPOST(requestBody: JwtRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/authPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticate request to generate Mobile OTP using Health ID number / Health ID
		 * Post v1/auth/authWithMobile
		 * @param {AuthMobileOTPRequest} requestBody authRequest
		 * @return {void} OK
		 */
		AuthenticateUserUsingPOST(requestBody: AuthMobileOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/authWithMobile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticate using verified Mobile Number and user data
		 * Post v1/auth/authWithMobileToken
		 * @param {AuthWithMobileTxnAndUserData} requestBody authRequest
		 * @return {void} OK
		 */
		AuthWithMobileTokenUsingPOST(requestBody: AuthWithMobileTxnAndUserData): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/authWithMobileToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Auth token public key.
		 * Get v1/auth/cert
		 * @return {void} OK
		 */
		CertUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/auth/cert', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authentication with Aadhaar Biometric based auth transaction.
		 * Post v1/auth/confirmWithAadhaarBio
		 * @param {AuthAccountAadhaarBioRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		ConfirmWithAadhaarBioUsingPOST(requestBody: AuthAccountAadhaarBioRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/confirmWithAadhaarBio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authentication with Aadhaar OTP based auth transaction.
		 * Post v1/auth/confirmWithAadhaarOtp
		 * @param {AuthAccountAadhaarOTPRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		ConfirmWithAadhaarOtpUsingPOST(requestBody: AuthAccountAadhaarOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/confirmWithAadhaarOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticate using demographic data of user.
		 * Post v1/auth/confirmWithDemographics
		 * @param {AuthAccountWithDemographicsRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		ConfirmWithDemographicsUsingPOST(requestBody: AuthAccountWithDemographicsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/confirmWithDemographics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authentication with Mobile OTP based auth transaction.
		 * Post v1/auth/confirmWithMobileOTP
		 * @param {AuthAccountMobileOTPRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		ConfirmWithMobileUsingPOST(requestBody: AuthAccountMobileOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/confirmWithMobileOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authentication with PASSWORD based auth transaction.
		 * Post v1/auth/confirmWithPassword
		 * @param {AuthWithPasswordRequest} requestBody authenticationRequest
		 * @return {void} OK
		 */
		AuthAccountPasswordRequestUsingPOST(requestBody: AuthWithPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/confirmWithPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiate authentication process for given Health ID
		 * Post v1/auth/init
		 * @param {AuthInitRequest} requestBody authRequest
		 * @return {void} OK
		 */
		InitiateAuthUsingPOST(requestBody: AuthInitRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/init', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend Aadhaar/Mobile OTP for Authentication Transaction.
		 * Post v1/auth/resendAuthOTP
		 * @param {ResendOTPRequest} requestBody resendOtpRequest
		 * @return {void} OK
		 */
		ResendAuthMobileOTPUsingPOST(requestBody: ResendOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/auth/resendAuthOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify aadhar OTP sent as part of forgetHealth id.
		 * Verify aadhar OTP sent as part of forgetHealth id.
		 * Post v1/forgot/healthId/aadhaar
		 * @param {AuthAccountAadhaarOTPRequest} requestBody authAccountAadhaarOTPRequest
		 * @return {void} OK
		 */
		RetrievalHealthIdByAadharUsingPOST(requestBody: AuthAccountAadhaarOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/forgot/healthId/aadhaar', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Aadhaar OTP on registrered mobile number
		 * Generate Aadhaar OTP on registrered mobile number
		 * Post v1/forgot/healthId/aadhaar/generateOtp
		 * @param {AadharOtpGenerateRequestPayLoad} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateAadharOTPUsingPOST_1(requestBody: AadharOtpGenerateRequestPayLoad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/forgot/healthId/aadhaar/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Mobile OTP sent as  part of forgetHealth id.
		 * Verify Mobile OTP sent as  part of forgetHealth id.
		 * Post v1/forgot/healthId/mobile
		 * @param {RetriveHealthIdMobilePayLoad} requestBody retriveHealthIdMobilePayLoad
		 * @return {void} OK
		 */
		RetrievalHealthIdByMobileUsingPOST(requestBody: RetriveHealthIdMobilePayLoad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/forgot/healthId/mobile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Mobile OTP to start registration
		 * Generate Mobile OTP to start registration transaction.
		 * Post v1/forgot/healthId/mobile/generateOtp
		 * @param {GenerateMobileOTPRequest} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateMobileOTPUsingPOST(requestBody: GenerateMobileOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/forgot/healthId/mobile/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of districts in a given  State as per LGD.
		 * Get v1/ha/lgd/districts
		 * @param {string} stateCode stateCode
		 * @return {void} OK
		 */
		GetDistrictsInStateUsingGET(stateCode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/ha/lgd/districts?stateCode=' + (stateCode == null ? '' : encodeURIComponent(stateCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of states as per LGD.
		 * Get v1/ha/lgd/states
		 * @return {void} OK
		 */
		GetStatesUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/ha/lgd/states', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete tag against HealthId.
		 * Delete v1/ha/tags
		 * @return {void} OK
		 */
		DeleteTagUsingDELETE(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/ha/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of Tags against HealthID.
		 * Get v1/ha/tags
		 * @return {void} OK
		 */
		GetTagsUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/ha/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add tag against HealthId.
		 * Post v1/ha/tags
		 * @param {TagRequest} requestBody tagRequest
		 * @return {void} OK
		 */
		AddTagUsingPOST(requestBody: TagRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ha/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate token for heath facility id.
		 * Generate token for heath facility id.
		 * Post v1/health/facility/authenticate
		 * @param {HealthFacilityAuthenticationRequest} requestBody healthFacilityAuthenticationRequest
		 * @return {void} OK
		 */
		AuthenticateHealthFacilityUsingPOST(requestBody: HealthFacilityAuthenticationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/authenticate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password for heath facility id.
		 * Change password for heath facility id.
		 * Post v1/health/facility/change/password
		 * @param {HealthFacilityChangedPasswordRequest} requestBody healthFacilityPasswordRequest
		 * @return {void} OK
		 */
		ChangePasswordUsingPOST(requestBody: HealthFacilityChangedPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/change/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Health ID card SVG
		 * Post v1/health/facility/createHealthIdWithPreVerified
		 * @param {CreateAccountWithPreVerifiedAadhaar} requestBody accountRequest
		 * @return {void} OK
		 */
		CreateAadhaarAccountUsingPOST_1(requestBody: CreateAccountWithPreVerifiedAadhaar): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/createHealthIdWithPreVerified', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates password for heath facility id.
		 * Generates password for heath facility id.
		 * Post v1/health/facility/generate/password
		 * @param {HealthFacilityPasswordRequest} requestBody healthFacilityPasswordRequest
		 * @return {void} OK
		 */
		GeneratePasswordUsingPOST(requestBody: HealthFacilityPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/generate/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate health hacility OTP on registrered mobile number
		 * Generate health facility OTP on registrered mobile number
		 * Post v1/health/facility/generateOtp
		 * @param {AadharOtpGenerateRequestPayLoad} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateFacilityOTPUsingPOST(requestBody: AadharOtpGenerateRequestPayLoad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * generateSvgCard
		 * Get v1/health/facility/getSvgCard
		 * @return {void} OK
		 */
		GenerateSvgCardUsingGET_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/health/facility/getSvgCard', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset password for heath facility id.
		 * Reset password for heath facility id.
		 * Post v1/health/facility/reset/password
		 * @param {HealthFacilityPasswordRequest} requestBody healthFacilityPasswordRequest
		 * @return {void} OK
		 */
		ResetPasswordUsingPOST(requestBody: HealthFacilityPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/health/facility/reset/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Aadhaar OTP on registrered mobile number
		 * Generate Aadhaar OTP on registrered mobile number
		 * Post v1/hid/benefit/aadhaar/generateOtp
		 * @param {AadharOtpGenerateRequestPayLoad} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateAadharOTPUsingPOST_2(requestBody: AadharOtpGenerateRequestPayLoad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/aadhaar/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create health id using Aadhaar Number Otp.
		 * Create health id using Aadhaar number opt
		 * Post v1/hid/benefit/aadhaar/verifyAadharOtp
		 * @param {CreateHealthIdOptRequest} requestBody createHealthIdOptRequest
		 * @return {void} OK
		 */
		VerifyAadharOtpUsingPOST(requestBody: CreateHealthIdOptRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/aadhaar/verifyAadharOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create health id using Biometric Authentication.
		 * Create health id using Biometric Authentication.
		 * Post v1/hid/benefit/aadhaar/verifyBio
		 * @param {CreateHidBiometricRequest} requestBody createHidBiometricRequest
		 * @return {void} OK
		 */
		VerifyBioUsingPOST(requestBody: CreateHidBiometricRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/aadhaar/verifyBio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create health id using Aadhaar Demo Auth.
		 * Create health id using Aadhaar Demo Auth.
		 * Post v1/hid/benefit/createHealthId/demo/auth
		 * @param {CreateHIdDemoAuthRequest} requestBody createHIdDemoAuthRequest
		 * @return {void} OK
		 */
		CreateHealthIdByDemoAuthUsingPOST(requestBody: CreateHIdDemoAuthRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/createHealthId/demo/auth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * De-Linked with hid.
		 * De-Linked with hid.
		 * Post v1/hid/benefit/delink
		 * @param {HidBenefitDelinkRequestPayload} requestBody hidBenefitLinkedRequestPayload
		 * @return {void} OK
		 */
		DelinkHidBenefitUsingPOST(requestBody: HidBenefitDelinkRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/delink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Linked with hid.
		 * Linked with hid.
		 * Post v1/hid/benefit/link
		 * @param {HidBenefitLinkedRequestPayload} requestBody hidBenefitLinkedRequestPayload
		 * @return {void} OK
		 */
		LinkHidBenefitUsingPOST(requestBody: HidBenefitLinkedRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/link', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create health id using mobile Authentication.
		 * Create health id using mobile Authentication.
		 * Post v1/hid/benefit/mobile/createHealthId
		 * @param {CreateHidMobileRequest} requestBody createHidMobileRequest
		 * @return {void} OK
		 */
		CreateHealthIdByMobileUsingPOST(requestBody: CreateHidMobileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/mobile/createHealthId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate mobile OTP on registrered mobile number
		 * Generate mobile OTP on registrered mobile number
		 * Post v1/hid/benefit/mobile/generateOtp
		 * @param {GenerateMobileOTPRequest} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateMobileOtpUsingPOST(requestBody: GenerateMobileOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/mobile/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create health id using notify Benefit.
		 * Create health id using notify Benefit.
		 * Post v1/hid/benefit/notify/benefit
		 * @param {CreateHidNotifyBenefitRequest} requestBody createHidNotifyBenefitRequest
		 * @return {void} OK
		 */
		NotifyBenefitUsingPOST(requestBody: CreateHidNotifyBenefitRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/notify/benefit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search health id number using aadhar or aadhar token.
		 * Search health id number using aadhar or aadhar token.
		 * Post v1/hid/benefit/search/aadhaar
		 * @param {AadharNumberRequestPayload} requestBody aadharNumberRequestPayload
		 * @return {void} OK
		 */
		FindByAadharUsingPOST(requestBody: AadharNumberRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/search/aadhaar', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search benefit using health id number.
		 * Search benefit using health id number
		 * Post v1/hid/benefit/search/healthIdNumber
		 * @param {HidBenefitNameSearchRequest} requestBody searchRequest
		 * @return {void} OK
		 */
		FindByHealthIdUsingPOST(requestBody: HidBenefitNameSearchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/search/healthIdNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update mobile number for account.
		 * Post v1/hid/benefit/update/mobile
		 * @param {HidUpdateMobiletRequest} requestBody request
		 * @return {void} OK
		 */
		UpdateMobileInformationUsingPOST(requestBody: HidUpdateMobiletRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/update/mobile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update account information
		 * Post v1/hid/benefit/update/profile
		 * @param {HidUpdateAccountRequest} requestBody request
		 * @return {void} OK
		 */
		UpdateAccountInformationUsingPOST_1(requestBody: HidUpdateAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/update/profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update health id status .
		 * Update health id status.
		 * Post v1/hid/benefit/update/status
		 * @param {HidStatusRequestPayload} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		UpdateStatusUsingPOST(requestBody: HidStatusRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/hid/benefit/update/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Aadhaar OTP on registrered mobile number to create Health ID.
		 * Verify Aadhar OTP received on registrered mobile number
		 * Post v1/registration/aadhaar/createHealthIdWithAadhaarOtp
		 * @param {CreateAccountWithAadhaarOtp} requestBody verifyAadharOtpRequest
		 * @return {void} OK
		 */
		VerifyAadharOTPUsingPOST(requestBody: CreateAccountWithAadhaarOtp): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/createHealthIdWithAadhaarOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Health ID using pre-verified Aadhaar & Mobile.
		 * Create Health ID using pre-verified Aadhaar & Mobile.
		 * Post v1/registration/aadhaar/createHealthIdWithPreVerified
		 * @param {CreateAccountWithPreVerifiedAadhaar} requestBody accountRequest
		 * @return {void} OK
		 */
		CreateAadhaarAccountUsingPOST(requestBody: CreateAccountWithPreVerifiedAadhaar): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/createHealthIdWithPreVerified', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Mobile OTP for verification.
		 * Generate Mobile OTP to verify mobile number.
		 * Post v1/registration/aadhaar/generateMobileOTP
		 * @param {GenerateMobileOTPForTxnRequest} requestBody request
		 * @return {void} OK
		 */
		GenerateMobileOTPForTxnUsingPOST(requestBody: GenerateMobileOTPForTxnRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/generateMobileOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Aadhaar OTP on registrered mobile number
		 * Generate Aadhaar OTP on registrered mobile number
		 * Post v1/registration/aadhaar/generateOtp
		 * @param {AadharOtpGenerateRequestPayLoad} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateAadharOTPUsingPOST(requestBody: AadharOtpGenerateRequestPayLoad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend Aadhaar OTP on registrered mobile number to create Health ID.
		 * Resend Aadhar OTP on registrered mobile number
		 * Post v1/registration/aadhaar/resendAadhaarOtp
		 * @param {ResendOTPRequest} requestBody request
		 * @return {void} OK
		 */
		ResendAadharOTPUsingPOST(requestBody: ResendOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/resendAadhaarOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search health id number using aadhar.
		 * Search health id number using aadhar.
		 * Post v1/registration/aadhaar/search/aadhar
		 * @param {AadharNumberRequestPayload} requestBody aadharNumberRequestPayload
		 * @return {void} OK
		 */
		GetHealthIdNumbersByAadharUsingPOST(requestBody: AadharNumberRequestPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/search/aadhar', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Aadhaar using biometrics.
		 * Verify Aadhaar using biometrics
		 * Post v1/registration/aadhaar/verifyBio
		 * @param {VerifyAadhaarWithBio} requestBody verifyAadharOtpRequest
		 * @return {void} OK
		 */
		VerifyAadharBioUsingPOST(requestBody: VerifyAadhaarWithBio): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/verifyBio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Mobile OTP in an existing transaction.
		 * Verify Mobile OTP in an existing transaction.
		 * Post v1/registration/aadhaar/verifyMobileOTP
		 * @param {VerifyMobileRequest} requestBody request
		 * @return {void} OK
		 */
		VerifyMobileOTPForTxnUsingPOST(requestBody: VerifyMobileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/verifyMobileOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Aadhaar OTP and continue for mobile verification.
		 * Verify Aadhaar OTP received on registrered mobile number
		 * Post v1/registration/aadhaar/verifyOTP
		 * @param {VerifyAadhaarOtp} requestBody verifyAadhaarOtp
		 * @return {void} OK
		 */
		VerifyAadharOTPOnlyUsingPOST(requestBody: VerifyAadhaarOtp): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/aadhaar/verifyOTP', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Health ID with verified mobile token
		 * Post v1/registration/mobile/createHealthId
		 * @param {CreateAccountByVerifiedMobileRequest} requestBody createAccountRequest
		 * @return {void} OK
		 */
		VerifyUserViaMobileUsingPOST(requestBody: CreateAccountByVerifiedMobileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/mobile/createHealthId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Mobile OTP to start registration
		 * Generate Mobile OTP to start registration transaction.
		 * Post v1/registration/mobile/generateOtp
		 * @param {GenerateMobileOTPRequest} requestBody generateOtpRequest
		 * @return {void} OK
		 */
		GenerateMobileOTPUsingPOST_1(requestBody: GenerateMobileOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/mobile/generateOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend Mobile OTP for Health ID registration
		 * Resend Mobile OTP in an existing transaction in case previous OTP is not received.
		 * Post v1/registration/mobile/resendOtp
		 * @param {ResendOTPRequest} requestBody resendRequest
		 * @return {void} OK
		 */
		ResentOtpUsingPOST(requestBody: ResendOTPRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/mobile/resendOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Mobile OTP sent as part of registration transaction.
		 * Verify Mobile OTP in current registration transaction.
		 * Post v1/registration/mobile/verifyOtp
		 * @param {VerifyMobileRequest} requestBody verifyOtpRequest
		 * @return {void} OK
		 */
		VerifyMobileOTPUsingPOST(requestBody: VerifyMobileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registration/mobile/verifyOtp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search a user by Health IDs.
		 * Post v1/search/existsByHealthId
		 * @param {SearchByHealthIdRequest} requestBody searchDTO
		 * @return {void} OK
		 */
		SearchUserByUseridUsingPOST(requestBody: SearchByHealthIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/search/existsByHealthId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search a user by Health ID Number.
		 * Post v1/search/searchByHealthId
		 * @param {SearchByHealthIdRequest} requestBody searchRequest
		 * @return {void} OK
		 */
		SearchUserByAccountUsingPOST(requestBody: SearchByHealthIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/search/searchByHealthId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search users with a mobile number.
		 * Post v1/search/searchByMobile
		 * @param {SearchByMobileRequest} requestBody searchRequest
		 * @return {void} OK
		 */
		SearchUserByMobileUsingPOST(requestBody: SearchByMobileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/search/searchByMobile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

