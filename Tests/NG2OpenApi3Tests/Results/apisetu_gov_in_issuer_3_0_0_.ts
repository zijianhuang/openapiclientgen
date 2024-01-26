import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PullDocRequest {

		/** Required */
		DocDetails: PullDocRequestDocDetails;

		/**
		 * The certificate data in the response. Possible values of this attribute are:
		 * xml: for certificate data in machine readable xml format
		 * pdf: for certificate data in printable pdf format
		 * both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.
		 * Required
		 * Min length: 1
		 */
		format: string;

		/**
		 * Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.
		 * Required
		 */
		orgId: string;

		/**
		 * A timestamp value. This will be used to decode the keyHash element described below.
		 * Required
		 * Min length: 1
		 */
		ts: string;

		/**
		 * Transaction id.
		 * Required
		 */
		txn: string;

		/**
		 * API version.
		 * Required
		 * Min length: 1
		 */
		ver: string;
	}
	export interface PullDocRequestFormProperties {

		/**
		 * The certificate data in the response. Possible values of this attribute are:
		 * xml: for certificate data in machine readable xml format
		 * pdf: for certificate data in printable pdf format
		 * both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.
		 * Required
		 * Min length: 1
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.
		 * Required
		 */
		orgId: FormControl<string | null | undefined>,

		/**
		 * A timestamp value. This will be used to decode the keyHash element described below.
		 * Required
		 * Min length: 1
		 */
		ts: FormControl<string | null | undefined>,

		/**
		 * Transaction id.
		 * Required
		 */
		txn: FormControl<string | null | undefined>,

		/**
		 * API version.
		 * Required
		 * Min length: 1
		 */
		ver: FormControl<string | null | undefined>,
	}
	export function CreatePullDocRequestFormGroup() {
		return new FormGroup<PullDocRequestFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			orgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ver: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullDocRequestDocDetails {

		/**
		 * Date of birth of the DigiLocker user accessing the document/certificate as in Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		DOB: string;

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 * Min length: 1
		 */
		DigiLockerId: string;

		/**
		 * Name of the DigiLocker user accessing the document/certificate as in Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		FullName: string;

		/**
		 * Aadhaar number of the DigiLocker user accessing the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		UID: string;

		/**
		 * URI identifies the document uniquely.
		 * Required
		 * Min length: 1
		 */
		URI: string;
	}
	export interface PullDocRequestDocDetailsFormProperties {

		/**
		 * Date of birth of the DigiLocker user accessing the document/certificate as in Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		DOB: FormControl<string | null | undefined>,

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 * Min length: 1
		 */
		DigiLockerId: FormControl<string | null | undefined>,

		/**
		 * Name of the DigiLocker user accessing the document/certificate as in Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number of the DigiLocker user accessing the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 * Min length: 1
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * URI identifies the document uniquely.
		 * Required
		 * Min length: 1
		 */
		URI: FormControl<string | null | undefined>,
	}
	export function CreatePullDocRequestDocDetailsFormGroup() {
		return new FormGroup<PullDocRequestDocDetailsFormProperties>({
			DOB: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DigiLockerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			URI: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullDocResponse {

		/**
		 * Issuer can add meta content specific to document here.
		 * Required
		 */
		DocDetails: PullDocResponseDocDetails;

		/** Required */
		ResponseStatus: PullDocResponseResponseStatus;
	}
	export interface PullDocResponseFormProperties {
	}
	export function CreatePullDocResponseFormGroup() {
		return new FormGroup<PullDocResponseFormProperties>({
		});

	}

	export interface PullDocResponseDocDetails {

		/**
		 * Enclose the Base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.
		 * Required
		 * Min length: 1
		 */
		DataContent: string;

		/**
		 * Enclose the Base64 byte encoded contents of PDF file in this element. The DocContent element should be sent only if the format attribute in the original request is sent as “pdf” or “both” or is absent.
		 * Required
		 * Min length: 1
		 */
		DocContent: string;
	}
	export interface PullDocResponseDocDetailsFormProperties {

		/**
		 * Enclose the Base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.
		 * Required
		 * Min length: 1
		 */
		DataContent: FormControl<string | null | undefined>,

		/**
		 * Enclose the Base64 byte encoded contents of PDF file in this element. The DocContent element should be sent only if the format attribute in the original request is sent as “pdf” or “both” or is absent.
		 * Required
		 * Min length: 1
		 */
		DocContent: FormControl<string | null | undefined>,
	}
	export function CreatePullDocResponseDocDetailsFormGroup() {
		return new FormGroup<PullDocResponseDocDetailsFormProperties>({
			DataContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DocContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullDocResponseResponseStatus {

		/**
		 * 1 for success, 0 for error.
		 * Required
		 * Min length: 1
		 */
		Status: string;

		/**
		 * A timestamp value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		ts: string;

		/**
		 * Transaction id value as sent in the request.
		 * Required
		 */
		txn: string;
	}
	export interface PullDocResponseResponseStatusFormProperties {

		/**
		 * 1 for success, 0 for error.
		 * Required
		 * Min length: 1
		 */
		Status: FormControl<string | null | undefined>,

		/**
		 * A timestamp value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		ts: FormControl<string | null | undefined>,

		/**
		 * Transaction id value as sent in the request.
		 * Required
		 */
		txn: FormControl<string | null | undefined>,
	}
	export function CreatePullDocResponseResponseStatusFormGroup() {
		return new FormGroup<PullDocResponseResponseStatusFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PullURIRequest {

		/** Required */
		DocDetails: PullURIRequestDocDetails;

		/**
		 * Indicates the desired format of the certificate data in the response. Possible values of this attribute are:
		 * xml: for certificate data in machine readable xml format.
		 * pdf: for certificate data in printable pdf format
		 * both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details
		 * Required
		 * Min length: 1
		 */
		format: string;

		/**
		 * Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.
		 * Required
		 */
		orgId: string;

		/**
		 * A timestamp value. This will be used to decode the keyHash element described below.
		 * Required
		 * Min length: 1
		 */
		ts: string;

		/**
		 * Transaction id.
		 * Required
		 * Min length: 1
		 */
		txn: string;

		/**
		 * API version.
		 * Required
		 * Min length: 1
		 */
		ver: string;
	}
	export interface PullURIRequestFormProperties {

		/**
		 * Indicates the desired format of the certificate data in the response. Possible values of this attribute are:
		 * xml: for certificate data in machine readable xml format.
		 * pdf: for certificate data in printable pdf format
		 * both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details
		 * Required
		 * Min length: 1
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.
		 * Required
		 */
		orgId: FormControl<string | null | undefined>,

		/**
		 * A timestamp value. This will be used to decode the keyHash element described below.
		 * Required
		 * Min length: 1
		 */
		ts: FormControl<string | null | undefined>,

		/**
		 * Transaction id.
		 * Required
		 * Min length: 1
		 */
		txn: FormControl<string | null | undefined>,

		/**
		 * API version.
		 * Required
		 * Min length: 1
		 */
		ver: FormControl<string | null | undefined>,
	}
	export function CreatePullURIRequestFormGroup() {
		return new FormGroup<PullURIRequestFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			orgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ver: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullURIRequestDocDetails {

		/**
		 * Date of birth of the DigiLocker user searching for the document/certificate as on Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		DOB: string;

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		DigiLockerId: string;

		/**
		 * Digital Locker will pass the document type being searched in this parameter.
		 * Required
		 */
		DocType: string;

		/**
		 * Name of the DigiLocker user searching for the document/certificate as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		FullName: string;

		/**
		 * The base 64 encoded contents of JPEG photograph as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		Photo: string;

		/**
		 * User defined search parameters to search a unique document/certificate. The <UDF> may be <RollNo> for CBSE, <RegistrationNo> for Transportation Dept. and <PAN> for Income Tax Dept. The search parameters for the API will be configured in the issuer portal of Digital Locker while configuring this API.
		 * Required
		 */
		UDF1: string;

		/** Required */
		UDF2: string;

		/** Required */
		UDF3: string;

		/** Required */
		UDFn: string;

		/**
		 * Aadhaar number of the DigiLocker user searching for the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		UID: string;
	}
	export interface PullURIRequestDocDetailsFormProperties {

		/**
		 * Date of birth of the DigiLocker user searching for the document/certificate as on Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		DOB: FormControl<string | null | undefined>,

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		DigiLockerId: FormControl<string | null | undefined>,

		/**
		 * Digital Locker will pass the document type being searched in this parameter.
		 * Required
		 */
		DocType: FormControl<string | null | undefined>,

		/**
		 * Name of the DigiLocker user searching for the document/certificate as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * The base 64 encoded contents of JPEG photograph as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		Photo: FormControl<string | null | undefined>,

		/**
		 * User defined search parameters to search a unique document/certificate. The <UDF> may be <RollNo> for CBSE, <RegistrationNo> for Transportation Dept. and <PAN> for Income Tax Dept. The search parameters for the API will be configured in the issuer portal of Digital Locker while configuring this API.
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,

		/** Required */
		UDF2: FormControl<string | null | undefined>,

		/** Required */
		UDF3: FormControl<string | null | undefined>,

		/** Required */
		UDFn: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number of the DigiLocker user searching for the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
		 * Required
		 */
		UID: FormControl<string | null | undefined>,
	}
	export function CreatePullURIRequestDocDetailsFormGroup() {
		return new FormGroup<PullURIRequestDocDetailsFormProperties>({
			DOB: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DigiLockerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Photo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UDF2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UDF3: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UDFn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PullURIResponse {

		/**
		 * Issuer can add meta content specific to document here.
		 * Required
		 */
		DocDetails: PullURIResponseDocDetails;

		/** Required */
		ResponseStatus: PullURIResponseResponseStatus;
	}
	export interface PullURIResponseFormProperties {
	}
	export function CreatePullURIResponseFormGroup() {
		return new FormGroup<PullURIResponseFormProperties>({
		});

	}

	export interface PullURIResponseDocDetails {

		/**
		 * The date of birth if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DOB: string;

		/**
		 * Enclose the base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.
		 * Required
		 * Min length: 1
		 */
		DataContent: string;

		/**
		 * A unique 36 character DigiLocker Id as sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DigiLockerId: string;

		/**
		 * Enclose the Base64 byte encoded contents of PDF file in this element.
		 * Required
		 * Min length: 1
		 */
		DocContent: string;

		/**
		 * The document type sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DocType: string;

		/**
		 * The full name if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		FullName: string;

		/**
		 * Search parameters sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UDF1: string;

		/**
		 * Search parameters sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UDF2: string;

		/**
		 * The Aadhaar number if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UID: string;

		/**
		 * URI corresponding to the search criteria that identifies the document uniquely.
		 * Required
		 * Min length: 1
		 */
		URI: string;
	}
	export interface PullURIResponseDocDetailsFormProperties {

		/**
		 * The date of birth if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DOB: FormControl<string | null | undefined>,

		/**
		 * Enclose the base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.
		 * Required
		 * Min length: 1
		 */
		DataContent: FormControl<string | null | undefined>,

		/**
		 * A unique 36 character DigiLocker Id as sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DigiLockerId: FormControl<string | null | undefined>,

		/**
		 * Enclose the Base64 byte encoded contents of PDF file in this element.
		 * Required
		 * Min length: 1
		 */
		DocContent: FormControl<string | null | undefined>,

		/**
		 * The document type sent in the original request.
		 * Required
		 * Min length: 1
		 */
		DocType: FormControl<string | null | undefined>,

		/**
		 * The full name if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Search parameters sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UDF1: FormControl<string | null | undefined>,

		/**
		 * Search parameters sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UDF2: FormControl<string | null | undefined>,

		/**
		 * The Aadhaar number if sent in the original request.
		 * Required
		 * Min length: 1
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * URI corresponding to the search criteria that identifies the document uniquely.
		 * Required
		 * Min length: 1
		 */
		URI: FormControl<string | null | undefined>,
	}
	export function CreatePullURIResponseDocDetailsFormGroup() {
		return new FormGroup<PullURIResponseDocDetailsFormProperties>({
			DOB: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DataContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DigiLockerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DocContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			DocType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			UDF2: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			URI: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullURIResponseResponseStatus {

		/**
		 * 1 for success, 0 for error and 9 for pending.
		 * Required
		 * Min length: 1
		 */
		Status: string;

		/**
		 * A timestamp value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		ts: string;

		/**
		 * Transaction id value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		txn: string;
	}
	export interface PullURIResponseResponseStatusFormProperties {

		/**
		 * 1 for success, 0 for error and 9 for pending.
		 * Required
		 * Min length: 1
		 */
		Status: FormControl<string | null | undefined>,

		/**
		 * A timestamp value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		ts: FormControl<string | null | undefined>,

		/**
		 * Transaction id value as sent in the request.
		 * Required
		 * Min length: 1
		 */
		txn: FormControl<string | null | undefined>,
	}
	export function CreatePullURIResponseResponseStatusFormGroup() {
		return new FormGroup<PullURIResponseResponseStatusFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

