import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ProviderIdentifierType {

		/**
		 * Vaccination provider number such as Medicare provider number or AIR provider number.
		 * Max length: 8
		 * Min length: 6
		 */
		providerNumber: string;
		hpioNumber?: string;
		hpiiNumber?: string;
	}

	export interface AccessType {
		code: string;
		name?: string;
		hasAccess: boolean;
	}

	export interface AirAccessListRequestType {
		informationProvider: ProviderIdentifierType;
	}

	export interface AirAccessListResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		accessList?: Array<AccessType>;
		errors?: Array<ErrorMessageType>;
	}

	export interface ErrorMessageType {

		/**
		 * Error code
		 * Max length: 10
		 * Min length: 10
		 */
		code: string;

		/** Error field name */
		field?: string;

		/**
		 * Error message details
		 * Max length: 255
		 * Min length: 0
		 */
		message?: string;
	}

	export interface MedicareCardType {

		/**
		 * Individual's Medicare card number
		 * Max length: 10
		 * Min length: 10
		 */
		medicareCardNumber: string;

		/**
		 * Medicare Individual Reference Number
		 * Max length: 1
		 * Min length: 1
		 */
		medicareIRN?: string;
	}

	export interface PersonalDetailsType {

		/**
		 * Individual's date of birth in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dateOfBirth: string;

		/**
		 * Individual' First Name
		 * Max length: 40
		 * Min length: 1
		 */
		firstName?: string;

		/**
		 * Individual' Last Name
		 * Max length: 40
		 * Min length: 1
		 */
		lastName: string;

		/**
		 * Individual's gender
		 * Max length: 1
		 * Min length: 1
		 */
		gender?: string;
	}

	export interface SearchAddressType {
		postCode: string;
	}

	export interface AddressType {
		addressLineOne?: string;
		addressLineTwo?: string;
		locality?: string;
		postCode: string;
	}

	export interface IndividualType {
		personalDetails?: PersonalDetailsType;
		medicareCard?: MedicareCardType;
		address?: SearchAddressType;
		ihiNumber?: string;
	}

	export interface ResponseIndividualType {
		personalDetails?: PersonalDetailsType;
		medicareCard?: MedicareCardType;
		address?: AddressType;
	}

	export interface IndividualDetailsType {
		individualIdentifier?: string;
		individual?: ResponseIndividualType;

		/**
		 * Individual's catchup date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		catchupDate?: string;
		endDateCode?: string;
		indigenousStatus?: boolean;
		additionalVaccineIndicator?: boolean;
		medContraindicationIndicator?: boolean;
		naturalImmunityIndicator?: boolean;
		vaccineTrialIndicator?: boolean;
		actionRequiredIndicator?: boolean;
	}

	export interface IdentifyIndividualRequestType {
		individual: IndividualType;
		informationProvider: ProviderIdentifierType;
	}

	export interface IndividualDetailsResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		individualDetails?: IndividualDetailsType;
		errors?: Array<ErrorMessageType>;
	}

	export interface AdditionalVaccineIndicatorRequestType {
		individualIdentifier: string;
		acknowledgement: boolean;
		informationProvider: ProviderIdentifierType;
	}

	export interface AdditionalVaccineIndicatorResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		errors?: Array<ErrorMessageType>;
	}

	export interface DueVaccineType {
		disease?: string;
		vaccineDose?: string;

		/**
		 * Due date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dueDate?: string;
	}

	export interface EncounterHistoryType {

		/** Claim id of the encounter */
		claimId: string;

		/** Claim sequence number of the encounter */
		claimSeqNum: number;

		/** Immunisation encounter sequence number of the encounter */
		immEncSeqNum: number;
		episodes?: Array<EpisodeResponseType>;
		editable?: boolean;

		/**
		 * Date submitted in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dateOfService?: string;

		/**
		 * Date submitted in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dateSubmitted?: string;
		schoolId?: string;
	}

	export interface EpisodeResponseType {
		id: number;
		vaccineCode: string;
		vaccineDose?: string;
		vaccineBatch?: string;
		vaccineSerialNumber?: string;
		actionRequiredIndicator: boolean;
		editable: boolean;
		information?: InformationType;
	}

	export interface ImmunisationDetailsResponseType {
		dueList?: Array<DueVaccineType>;
		encounters?: Array<EncounterHistoryType>;
	}

	export interface AirHistoryRequestType {
		individualIdentifier: string;
		informationProvider: ProviderIdentifierType;
	}

	export interface ImmunisationHistoryResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		immunisationDetails?: ImmunisationDetailsResponseType;
		errors?: Array<ErrorMessageType>;
	}

	export interface InformationType {
		status: string;
		code?: string;
		text?: string;
		messageCode?: string;
		messageText?: string;
	}

	export interface ImmunisationHistoryStatementType {
		mimeType: ImmunisationHistoryStatementTypeMimeType;

		/** File name of the PDF immunisation history statement */
		fileName: string;

		/** Base64-encoded content of PDF immunisation history statement */
		fileContent: string;
	}

	export enum ImmunisationHistoryStatementTypeMimeType { application_pdf = 'application_pdf' }

	export interface ImmunisationHistoryStatementResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		immunisationHistoryStatement?: ImmunisationHistoryStatementType;
		errors?: Array<ErrorMessageType>;
	}

	export interface IndigenousStatusRequestType {
		individualIdentifier: string;
		indigenousStatus: boolean;
		informationProvider: ProviderIdentifierType;
	}

	export interface IndigenousStatusResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		errors?: Array<ErrorMessageType>;
	}

	export interface MedicalContraindiationResponseType {
		vaccineCode: string;
		typeCode: MedicalContraindiationResponseTypeTypeCode;

		/**
		 * Start date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		startDate: string;

		/**
		 * End date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		endDate?: string;
		reason: MedicalContraindiationResponseTypeReason;

		/**
		 * AnaphylaxisDate date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		anaphylaxisDate?: string;
	}

	export enum MedicalContraindiationResponseTypeTypeCode { P = 'P', T = 'T' }

	export enum MedicalContraindiationResponseTypeReason { M = 'M', S = 'S', P = 'P', I = 'I', A = 'A' }

	export interface MedicalContraindicationHistoryResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		medContraindicationList?: Array<MedicalContraindiationResponseType>;
		errors?: Array<ErrorMessageType>;
	}

	export interface MedicalContraindiationRequestType {
		vaccineCode: string;
		typeCode: MedicalContraindiationResponseTypeTypeCode;

		/**
		 * End date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		endDate?: string;
		reason: MedicalContraindiationResponseTypeReason;

		/**
		 * Previous anaphylaxis date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		anaphylaxisDate?: string;
	}

	export interface AddMedicalContraindicationRequestType {
		individualIdentifier: string;
		contraindication: MedicalContraindiationRequestType;
		informationProvider: ProviderIdentifierType;
	}

	export interface AddMedicalContraindicationResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		errors?: Array<ErrorMessageType>;
	}

	export interface NaturalImmunityResponseType {
		disease: string;

		/**
		 * Notification date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		notificationDate: string;

		/**
		 * Lab test date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		labTestDate?: string;

		/**
		 * Diagnosis date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		diagnosisDate?: string;
	}

	export interface NaturalImmunityHistoryResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		naturalImmunityList?: Array<NaturalImmunityResponseType>;
		errors?: Array<ErrorMessageType>;
	}

	export interface NaturalImmunityRequestType {
		disease: string;

		/**
		 * Lab test date in format DDMMYYYY - it is required if diagnosisDate is not provided
		 * Max length: 8
		 * Min length: 8
		 */
		labTestDate?: string;

		/**
		 * Diagnosis date in format DDMMYYYY - it is required if labTestDate is not provided
		 * Max length: 8
		 * Min length: 8
		 */
		diagnosisDate?: string;
	}

	export interface AddNaturalImmunityRequestType {
		individualIdentifier: string;
		immunity: NaturalImmunityRequestType;
		informationProvider: ProviderIdentifierType;
	}

	export interface AddNaturalImmunityResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		errors?: Array<ErrorMessageType>;
	}

	export interface VaccineTrialType {
		antigenCode?: string;
		dose?: string;

		/**
		 * Start date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		startDate?: string;

		/**
		 * End date in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		endDate?: string;
	}

	export interface VaccineTrialHistoryResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		vaccineTrialList?: Array<VaccineTrialType>;
		errors?: Array<ErrorMessageType>;
	}

	export interface IndividualIdentifierType {
		personalDetails?: PersonalDetailsType;
		medicareCard?: MedicareCardType;
		address?: AddressType;
		ihiNumber?: string;
		atsiIndicator?: IndividualIdentifierTypeAtsiIndicator;
		acceptAndConfirm?: string;
	}

	export enum IndividualIdentifierTypeAtsiIndicator { Y = 'Y', N = 'N' }

	export interface CatchupDateRequestType {
		individual: IndividualIdentifierType;
		informationProvider: ProviderIdentifierType;
	}

	export interface CatchupDateResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;

		/**
		 * Immunisation schedule catchup date in format ddMMyyyy
		 * Max length: 8
		 * Min length: 8
		 */
		catchupDate?: string;
		errors?: Array<ErrorMessageType>;
	}

	export interface EpisodeType {
		id: number;
		vaccineCode: string;
		vaccineDose?: string;
		vaccineBatch?: string;
		vaccineSerialNumber?: string;
	}

	export interface EncounterType {
		id: number;
		claimSequenceNumber?: string;
		episodes: Array<EpisodeType>;
		immunisationProvider?: ProviderIdentifierType;
		schoolId?: string;
		administeredOverseas?: boolean;
		acceptAndConfirm?: string;

		/**
		 * The date on which the Individual received the immunisation in format ddMMyyy
		 * Max length: 8
		 * Min length: 8
		 */
		dateOfService: string;
	}

	export interface EncounterResponseType {
		id: number;
		claimSequenceNumber: string;
		episodes: Array<EpisodeResponseType>;
		information?: InformationType;

		/**
		 * Claim id of the encounter
		 * Max length: 8
		 * Min length: 5
		 */
		claimId?: string;

		/** Claim sequence number of the encounter */
		claimSeqNum?: number;

		/** Immunisation encounter sequence number of the encounter */
		immEncSeqNum: number;
		schoolId?: string;

		/**
		 * Date of service in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dateOfService: string;
	}

	export interface ClaimDetailsResponseType {
		claimId?: string;
		encounters?: Array<EncounterResponseType>;
	}

	export interface AddEncounterRequestType {
		individual: IndividualIdentifierType;
		encounters: Array<EncounterType>;
		informationProvider: ProviderIdentifierType;
		claimId?: string;
	}

	export interface AddEncounterResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		claimDetails?: ClaimDetailsResponseType;
		errors?: Array<ErrorMessageType>;
	}

	export interface EncounterRequestType {

		/**
		 * Claim id of the encounter
		 * Max length: 8
		 * Min length: 5
		 */
		claimId: string;

		/** Claim sequence number of the encounter */
		claimSeqNum: number;

		/** Immunisation encounter sequence number of the encounter */
		immEncSeqNum: number;
		episodes: Array<EpisodeType>;
		schoolId?: string;

		/**
		 * Date of service in format DDMMYYYY
		 * Max length: 8
		 * Min length: 8
		 */
		dateOfService: string;
	}

	export interface UpdateEncounterRequestType {
		individualIdentifier: string;
		encounter: EncounterRequestType;
		informationProvider: ProviderIdentifierType;
	}

	export interface UpdateEncounterResponseType {
		statusCode: string;
		codeType?: string;
		message?: string;
		encounter?: EncounterResponseType;
		errors?: Array<ErrorMessageType>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get authorisation access list
		 * Post v1/authorisation/access/list
		 * @return {AirAccessListResponseType} 200 OK
		 */
		Air_authorisation_access_list(requestBody: AirAccessListRequestType): Observable<AirAccessListResponseType> {
			return this.http.post<AirAccessListResponseType>(this.baseUri + 'v1/authorisation/access/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify Individual details request
		 * Post v1/individual/details
		 * @return {IndividualDetailsResponseType} 200 OK
		 */
		Air_immunisation_individual_details(requestBody: IdentifyIndividualRequestType): Observable<IndividualDetailsResponseType> {
			return this.http.post<IndividualDetailsResponseType>(this.baseUri + 'v1/individual/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add additional vaccine indicator request
		 * Post v1/individual/additional-vaccine-indicator/add
		 * @return {AdditionalVaccineIndicatorResponseType} 200 OK
		 */
		Air_immunisation_additional_vaccine_indicator_add(requestBody: AdditionalVaccineIndicatorRequestType): Observable<AdditionalVaccineIndicatorResponseType> {
			return this.http.post<AdditionalVaccineIndicatorResponseType>(this.baseUri + 'v1/individual/additional-vaccine-indicator/add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove additional vaccine indicator request
		 * Post v1/individual/additional-vaccine-indicator/remove
		 * @return {AdditionalVaccineIndicatorResponseType} 200 OK
		 */
		Air_immunisation_additional_vaccine_indicator_remove(requestBody: AdditionalVaccineIndicatorRequestType): Observable<AdditionalVaccineIndicatorResponseType> {
			return this.http.post<AdditionalVaccineIndicatorResponseType>(this.baseUri + 'v1/individual/additional-vaccine-indicator/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get immunisation details request
		 * Post v1/individual/immunisation-history/details
		 * @return {ImmunisationHistoryResponseType} 200 OK
		 */
		Air_immunisation_history_details(requestBody: AirHistoryRequestType): Observable<ImmunisationHistoryResponseType> {
			return this.http.post<ImmunisationHistoryResponseType>(this.baseUri + 'v1/individual/immunisation-history/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Vaccine Trial History
		 * Post v1/individual/immunisation-history/statement
		 * @return {ImmunisationHistoryStatementResponseType} 200 OK
		 */
		Air_immunisation_history_statement(requestBody: AirHistoryRequestType): Observable<ImmunisationHistoryStatementResponseType> {
			return this.http.post<ImmunisationHistoryStatementResponseType>(this.baseUri + 'v1/individual/immunisation-history/statement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Indigenous Status request
		 * Post v1/individual/indigenous-status/update
		 * @return {IndigenousStatusResponseType} 200 OK
		 */
		Air_immunisation_indigenous_status_update(requestBody: IndigenousStatusRequestType): Observable<IndigenousStatusResponseType> {
			return this.http.post<IndigenousStatusResponseType>(this.baseUri + 'v1/individual/indigenous-status/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Medical Contraindication History
		 * Post v1/individual/medical-contraindication/history
		 * @return {MedicalContraindicationHistoryResponseType} 200 OK
		 */
		Air_immunisation_med_contraindication_history(requestBody: AirHistoryRequestType): Observable<MedicalContraindicationHistoryResponseType> {
			return this.http.post<MedicalContraindicationHistoryResponseType>(this.baseUri + 'v1/individual/medical-contraindication/history', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Record Medical Contraindication request
		 * Post v1/individual/medical-contraindication/record
		 * @return {AddMedicalContraindicationResponseType} 200 OK
		 */
		Air_immunisation_med_contraindication_record(requestBody: AddMedicalContraindicationRequestType): Observable<AddMedicalContraindicationResponseType> {
			return this.http.post<AddMedicalContraindicationResponseType>(this.baseUri + 'v1/individual/medical-contraindication/record', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Natural Immunity History
		 * Post v1/individual/natural-immunity/history
		 * @return {NaturalImmunityHistoryResponseType} 200 OK
		 */
		Air_immunisation_natural_immunity_history(requestBody: AirHistoryRequestType): Observable<NaturalImmunityHistoryResponseType> {
			return this.http.post<NaturalImmunityHistoryResponseType>(this.baseUri + 'v1/individual/natural-immunity/history', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Record Natural Immunity request
		 * Post v1/individual/natural-immunity/record
		 * @return {AddNaturalImmunityResponseType} 200 OK
		 */
		Air_immunisation_natural_immunity_record(requestBody: AddNaturalImmunityRequestType): Observable<AddNaturalImmunityResponseType> {
			return this.http.post<AddNaturalImmunityResponseType>(this.baseUri + 'v1/individual/natural-immunity/record', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Vaccine Trial History
		 * Post v1/individual/vaccine-trial/history
		 * @return {VaccineTrialHistoryResponseType} 200 OK
		 */
		Air_immunisation_vaccine_trial_history(requestBody: AirHistoryRequestType): Observable<VaccineTrialHistoryResponseType> {
			return this.http.post<VaccineTrialHistoryResponseType>(this.baseUri + 'v1/individual/vaccine-trial/history', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1.1/schedule/catchup
		 * @return {CatchupDateResponseType} 200 OK
		 */
		Air_immunisation_schedule_catchup(requestBody: CatchupDateRequestType): Observable<CatchupDateResponseType> {
			return this.http.post<CatchupDateResponseType>(this.baseUri + 'v1.1/schedule/catchup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Record Encounter request
		 * Post v1.1/encounters/record
		 * @return {AddEncounterResponseType} 200 OK
		 */
		Air_immunisation_encounter_record(requestBody: AddEncounterRequestType): Observable<AddEncounterResponseType> {
			return this.http.post<AddEncounterResponseType>(this.baseUri + 'v1.1/encounters/record', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Encounter request
		 * Post v1/encounter/update
		 * @return {UpdateEncounterResponseType} 200 OK
		 */
		Air_immunisation_encounter_update(requestBody: UpdateEncounterRequestType): Observable<UpdateEncounterResponseType> {
			return this.http.post<UpdateEncounterResponseType>(this.baseUri + 'v1/encounter/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

