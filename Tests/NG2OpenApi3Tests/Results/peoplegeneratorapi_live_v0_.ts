import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {
		city?: string | null;
		country?: string | null;
		countryCode?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		geonameId?: number | null;
		ipAddress?: string | null;
		phoneNumber?: string | null;
		state?: string | null;
		streetAddress?: string | null;
		zip?: string | null;
	}
	export interface AddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		countryCode: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		geonameId: FormControl<number | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		streetAddress: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			geonameId: new FormControl<number | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Lifestory {
		lifestory?: string | null;
		person?: Person;
	}
	export interface LifestoryFormProperties {
		lifestory: FormControl<string | null | undefined>,
	}
	export function CreateLifestoryFormGroup() {
		return new FormGroup<LifestoryFormProperties>({
			lifestory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Person {
		address?: Address;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		age?: number | null;
		bloodType?: string | null;
		ccNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		creditScore?: number | null;
		doB?: string | null;
		email?: string | null;
		eyeColor?: string | null;
		gender?: string | null;

		/** Type: double */
		gpa?: number | null;
		hasChildren?: boolean | null;
		hasDegree?: boolean | null;

		/** Type: double */
		height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		incomeUSD?: number | null;
		job?: string | null;
		married?: boolean | null;
		name?: string | null;

		/** Type: double */
		politicalLeaning?: number | null;
		religion?: string | null;
		username?: string | null;

		/** Type: double */
		weight?: number | null;
	}
	export interface PersonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		age: FormControl<number | null | undefined>,
		bloodType: FormControl<string | null | undefined>,
		ccNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		creditScore: FormControl<number | null | undefined>,
		doB: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		eyeColor: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,

		/** Type: double */
		gpa: FormControl<number | null | undefined>,
		hasChildren: FormControl<boolean | null | undefined>,
		hasDegree: FormControl<boolean | null | undefined>,

		/** Type: double */
		height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		incomeUSD: FormControl<number | null | undefined>,
		job: FormControl<string | null | undefined>,
		married: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		politicalLeaning: FormControl<number | null | undefined>,
		religion: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,

		/** Type: double */
		weight: FormControl<number | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			bloodType: new FormControl<string | null | undefined>(undefined),
			ccNumber: new FormControl<string | null | undefined>(undefined),
			creditScore: new FormControl<number | null | undefined>(undefined),
			doB: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			eyeColor: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			gpa: new FormControl<number | null | undefined>(undefined),
			hasChildren: new FormControl<boolean | null | undefined>(undefined),
			hasDegree: new FormControl<boolean | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			incomeUSD: new FormControl<number | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			married: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			politicalLeaning: new FormControl<number | null | undefined>(undefined),
			religion: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get api/address
		 * @return {void} OK
		 */
		GenerateAddress(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/address', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/address/
		 * @return {void} OK
		 */
		GenerateAddress_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/address/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/lifestory
		 * @return {void} OK
		 */
		GenerateLifeStory_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/lifestory', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/lifestory/
		 * @return {void} OK
		 */
		GenerateLifeStory(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/lifestory/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person
		 * @return {void} OK
		 */
		GetPerson_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/
		 * @return {void} OK
		 */
		GetPerson(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/age
		 * @return {void} OK
		 */
		Age_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/age', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/age/
		 * @return {void} OK
		 */
		Age(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/age/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/bloodtype
		 * @return {void} OK
		 */
		Bloodtype_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/bloodtype', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/bloodtype/
		 * @return {void} OK
		 */
		Bloodtype(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/bloodtype/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/creditcardnumber
		 * @return {void} OK
		 */
		Creditcardnumber(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/creditcardnumber', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/creditcardnumber/
		 * @return {void} OK
		 */
		Creditcardnumber_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/creditcardnumber/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/creditscore
		 * @return {void} OK
		 */
		Creditscore_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/creditscore', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/creditscore/
		 * @return {void} OK
		 */
		Creditscore(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/creditscore/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/email
		 * @return {void} OK
		 */
		Email(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/email', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/email/
		 * @return {void} OK
		 */
		Email_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/email/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/eyecolor
		 * @return {void} OK
		 */
		Eyecolor_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/eyecolor', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/eyecolor/
		 * @return {void} OK
		 */
		Eyecolor(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/eyecolor/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/gender
		 * @return {void} OK
		 */
		Gender(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/gender', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/gender/
		 * @return {void} OK
		 */
		Gender_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/gender/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/gpa
		 * @return {void} OK
		 */
		Gpa(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/gpa', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/gpa/
		 * @return {void} OK
		 */
		Gpa_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/gpa/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/haschildren
		 * @return {void} OK
		 */
		Haschildren_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/haschildren', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/haschildren/
		 * @return {void} OK
		 */
		Haschildren(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/haschildren/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/hasdegree
		 * @return {void} OK
		 */
		Hasdegree(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/hasdegree', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/hasdegree/
		 * @return {void} OK
		 */
		Hasdegree_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/hasdegree/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/height
		 * @return {void} OK
		 */
		Height(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/height', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/height/
		 * @return {void} OK
		 */
		Height_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/height/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/income
		 * @return {void} OK
		 */
		Income(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/income', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/income/
		 * @return {void} OK
		 */
		Income_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/income/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/job
		 * @return {void} OK
		 */
		Job(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/job', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/job/
		 * @return {void} OK
		 */
		Job_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/job/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/maritalstatus
		 * @return {void} OK
		 */
		Maritalstatus_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/maritalstatus', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/maritalstatus/
		 * @return {void} OK
		 */
		Maritalstatus(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/maritalstatus/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/name
		 * @return {void} OK
		 */
		Name_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/name', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/name/
		 * @return {void} OK
		 */
		Name(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/name/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/politicalleaning
		 * @return {void} OK
		 */
		PoliticalLeaning(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/politicalleaning', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/politicalleaning/
		 * @return {void} OK
		 */
		PoliticalLeaning_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/politicalleaning/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/religion
		 * @return {void} OK
		 */
		Religion_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/religion', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/religion/
		 * @return {void} OK
		 */
		Religion(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/religion/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/username
		 * @return {void} OK
		 */
		Username_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/username', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/username/
		 * @return {void} OK
		 */
		Username(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/username/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/weight
		 * @return {void} OK
		 */
		Weight(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/weight', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/weight/
		 * @return {void} OK
		 */
		Weight_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/person/weight/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/person/{number}
		 * @param {number} number Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} OK
		 */
		GetCompressedPerson_1(number: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/person/' + number, {});
		}

		/**
		 * Get api/person/{number}/
		 * @param {number} number Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} OK
		 */
		GetCompressedPerson(number: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/person/' + number + '/', {});
		}
	}

}

