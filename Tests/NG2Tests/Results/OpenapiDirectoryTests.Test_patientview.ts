import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiKey {
		expired?: boolean | null;
		expiryDate?: Date | null;
		key?: string | null;
	}
	export interface ApiKeyFormProperties {
		expired: FormControl<boolean | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			expired: new FormControl<boolean | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseGroup {
		code?: string | null;
		groupType?: Lookup;
		id?: number | null;
		lastImportDate?: Date | null;
		name?: string | null;
		parentCodes?: Array<string>;
		shortName?: string | null;
		visible?: boolean | null;
		visibleToJoin?: boolean | null;
	}
	export interface BaseGroupFormProperties {
		code: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastImportDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		shortName: FormControl<string | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
		visibleToJoin: FormControl<boolean | null | undefined>,
	}
	export function CreateBaseGroupFormGroup() {
		return new FormGroup<BaseGroupFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastImportDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
			visibleToJoin: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Lookup {
		created?: Date | null;
		description?: string | null;
		descriptionFriendly?: string | null;
		displayOrder?: number | null;
		id?: number | null;
		lastUpdate?: Date | null;
		lookupType?: LookupType;
		value?: string | null;
	}
	export interface LookupFormProperties {
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		descriptionFriendly: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateLookupFormGroup() {
		return new FormGroup<LookupFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionFriendly: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LookupType {
		created?: Date | null;
		description?: string | null;
		id?: number | null;
		lastUpdate?: Date | null;
		type?: LookupTypeType | null;
	}
	export interface LookupTypeFormProperties {
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		type: FormControl<LookupTypeType | null | undefined>,
	}
	export function CreateLookupTypeFormGroup() {
		return new FormGroup<LookupTypeFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<LookupTypeType | null | undefined>(undefined),
		});

	}

	export enum LookupTypeType { GROUP = 0, MENU = 1, ROLE = 2, CODE_STANDARD = 3, CODE_TYPE = 4, FEATURE_TYPE = 5, RELATIONSHIP_TYPE = 6, IDENTIFIER = 7, CONTACT_POINT_TYPE = 8, STATISTIC_TYPE = 9, NEWS_TYPE = 10, GENDER = 11, IBD_CROHNSLOCATION = 12, IBD_CROHNSPROXIMALTERMINALILEUM = 13, IBD_CROHNSPERIANAL = 14, IBD_CROHNSBEHAVIOUR = 15, IBD_UCEXTENT = 16, IBD_EGIMCOMPLICATION = 17, IBD_SURGERYMAINPROCEDURE = 18, IBD_SMOKINGSTATUS = 19, IBD_FAMILYHISTORY = 20, LINK_TYPE = 21 }

	export interface Category {
		friendlyDescription?: string | null;
		hidden?: boolean | null;
		icd10Description?: string | null;
		id?: number | null;
		number?: number | null;
	}
	export interface CategoryFormProperties {
		friendlyDescription: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		icd10Description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			friendlyDescription: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			icd10Description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Code {
		code?: string | null;
		codeCategories?: Array<CodeCategory>;
		codeType?: Lookup;
		created?: Date | null;
		description?: string | null;
		displayOrder?: number | null;
		externalStandards?: Array<CodeExternalStandard>;
		fullDescription?: string | null;
		hideFromPatients?: boolean | null;
		id?: number | null;
		lastUpdate?: Date | null;
		links?: Array<Link>;
		patientFriendlyName?: string | null;
		removedExternally?: boolean | null;
		sourceType?: CodeSourceType | null;
		standardType?: Lookup;
	}
	export interface CodeFormProperties {
		code: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		fullDescription: FormControl<string | null | undefined>,
		hideFromPatients: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		patientFriendlyName: FormControl<string | null | undefined>,
		removedExternally: FormControl<boolean | null | undefined>,
		sourceType: FormControl<CodeSourceType | null | undefined>,
	}
	export function CreateCodeFormGroup() {
		return new FormGroup<CodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			fullDescription: new FormControl<string | null | undefined>(undefined),
			hideFromPatients: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			patientFriendlyName: new FormControl<string | null | undefined>(undefined),
			removedExternally: new FormControl<boolean | null | undefined>(undefined),
			sourceType: new FormControl<CodeSourceType | null | undefined>(undefined),
		});

	}

	export interface CodeCategory {
		category?: Category;
		id?: number | null;
	}
	export interface CodeCategoryFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateCodeCategoryFormGroup() {
		return new FormGroup<CodeCategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CodeExternalStandard {
		codeString?: string | null;
		externalStandard?: ExternalStandard;
		id?: number | null;
	}
	export interface CodeExternalStandardFormProperties {
		codeString: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateCodeExternalStandardFormGroup() {
		return new FormGroup<CodeExternalStandardFormProperties>({
			codeString: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExternalStandard {
		description?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface ExternalStandardFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateExternalStandardFormGroup() {
		return new FormGroup<ExternalStandardFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Link {
		created?: Date | null;
		displayOrder?: number | null;
		id?: number | null;
		lastUpdate?: Date | null;
		link?: string | null;
		linkType?: Lookup;
		name?: string | null;
	}
	export interface LinkFormProperties {
		created: FormControl<Date | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		link: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CodeSourceType { PATIENTVIEW = 0, NHS_CHOICES = 1 }

	export interface ContactPoint {
		contactPointType?: ContactPointType;
		content?: string | null;
		created?: Date | null;
		id?: number | null;
		lastUpdate?: Date | null;
	}
	export interface ContactPointFormProperties {
		content: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
	}
	export function CreateContactPointFormGroup() {
		return new FormGroup<ContactPointFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ContactPointType {
		description?: string | null;
		id?: number | null;
		lookupType?: LookupType;
		value?: ContactPointTypeValue | null;
	}
	export interface ContactPointTypeFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		value: FormControl<ContactPointTypeValue | null | undefined>,
	}
	export function CreateContactPointTypeFormGroup() {
		return new FormGroup<ContactPointTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<ContactPointTypeValue | null | undefined>(undefined),
		});

	}

	export enum ContactPointTypeValue { UNIT_WEB_ADDRESS = 0, TRUST_WEB_ADDRESS = 1, PV_ADMIN_NAME = 2, PV_ADMIN_PHONE = 3, PV_ADMIN_EMAIL = 4, UNIT_ENQUIRIES_PHONE = 5, UNIT_ENQUIRIES_EMAIL = 6, APPOINTMENT_PHONE = 7, APPOINTMENT_EMAIL = 8, OUT_OF_HOURS_INFO = 9 }

	export interface Credentials {
		apiKey?: string | null;
		password?: string | null;
		username?: string | null;
	}
	export interface CredentialsFormProperties {
		apiKey: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Entry_long_Map_string_List_FhirObservation_ {
		key?: Array<Entry_string_List_FhirObservation_>;
	}
	export interface Entry_long_Map_string_List_FhirObservation_FormProperties {
	}
	export function CreateEntry_long_Map_string_List_FhirObservation_FormGroup() {
		return new FormGroup<Entry_long_Map_string_List_FhirObservation_FormProperties>({
		});

	}

	export interface Entry_string_List_FhirObservation_ {
		key?: Array<FhirObservation>;
	}
	export interface Entry_string_List_FhirObservation_FormProperties {
	}
	export function CreateEntry_string_List_FhirObservation_FormGroup() {
		return new FormGroup<Entry_string_List_FhirObservation_FormProperties>({
		});

	}

	export interface FhirObservation {
		applies?: Date | null;
		bodySite?: string | null;
		comments?: string | null;
		comparator?: string | null;
		diagram?: string | null;
		group?: Group;
		id?: number | null;
		identifier?: string | null;
		location?: string | null;
		name?: string | null;
		temporaryUuid?: string | null;
		units?: string | null;
		value?: string | null;
	}
	export interface FhirObservationFormProperties {
		applies: FormControl<Date | null | undefined>,
		bodySite: FormControl<string | null | undefined>,
		comments: FormControl<string | null | undefined>,
		comparator: FormControl<string | null | undefined>,
		diagram: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		temporaryUuid: FormControl<string | null | undefined>,
		units: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFhirObservationFormGroup() {
		return new FormGroup<FhirObservationFormProperties>({
			applies: new FormControl<Date | null | undefined>(undefined),
			bodySite: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			comparator: new FormControl<string | null | undefined>(undefined),
			diagram: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			temporaryUuid: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		childGroups?: Array<Group>;
		code?: string | null;
		contactPoints?: Array<ContactPoint>;
		created?: Date | null;
		fhirResourceId?: string | null;
		groupFeatures?: Array<GroupFeature>;
		groupType?: Lookup;
		id?: number | null;
		lastImportDate?: Date | null;
		lastUpdate?: Date | null;
		links?: Array<Link>;
		locations?: Array<Location>;
		name?: string | null;
		parentGroups?: Array<Group>;
		postcode?: string | null;
		sftpUser?: string | null;
		shortName?: string | null;
		visible?: boolean | null;
		visibleToJoin?: boolean | null;
	}
	export interface GroupFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		fhirResourceId: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastImportDate: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		sftpUser: FormControl<string | null | undefined>,
		shortName: FormControl<string | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
		visibleToJoin: FormControl<boolean | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			fhirResourceId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastImportDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			sftpUser: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
			visibleToJoin: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GroupFeature {
		created?: Date | null;
		feature?: Feature;
		id?: number | null;
		lastUpdate?: Date | null;
	}
	export interface GroupFeatureFormProperties {
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFeatureFormGroup() {
		return new FormGroup<GroupFeatureFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Feature {
		created?: Date | null;
		description?: string | null;
		id?: number | null;
		lastUpdate?: Date | null;
		name?: string | null;
	}
	export interface FeatureFormProperties {
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		address?: string | null;
		created?: Date | null;
		email?: string | null;
		id?: number | null;
		label?: string | null;
		lastUpdate?: Date | null;
		name?: string | null;
		phone?: string | null;
		web?: string | null;
	}
	export interface LocationFormProperties {
		address: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		label: FormControl<string | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		web: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			web: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirAllergy {
		confidenceLevel?: string | null;
		group?: Group;
		id?: number | null;
		identifier?: string | null;
		infoSource?: string | null;
		reaction?: string | null;
		recordedDate?: Date | null;
		status?: string | null;
		substance?: string | null;
		type?: string | null;
	}
	export interface FhirAllergyFormProperties {
		confidenceLevel: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		infoSource: FormControl<string | null | undefined>,
		reaction: FormControl<string | null | undefined>,
		recordedDate: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		substance: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFhirAllergyFormGroup() {
		return new FormGroup<FhirAllergyFormProperties>({
			confidenceLevel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			infoSource: new FormControl<string | null | undefined>(undefined),
			reaction: new FormControl<string | null | undefined>(undefined),
			recordedDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			substance: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirCondition {
		asserter?: string | null;
		category?: string | null;
		code?: string | null;
		date?: Date | null;
		description?: string | null;
		fullDescription?: string | null;
		group?: Group;
		id?: number | null;
		identifier?: string | null;
		links?: Array<Link>;
		notes?: string | null;
		severity?: string | null;
		status?: string | null;
	}
	export interface FhirConditionFormProperties {
		asserter: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		date: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		fullDescription: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFhirConditionFormGroup() {
		return new FormGroup<FhirConditionFormProperties>({
			asserter: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fullDescription: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirContact {
		id?: number | null;
		system?: string | null;
		use?: string | null;
		value?: string | null;
	}
	export interface FhirContactFormProperties {
		id: FormControl<number | null | undefined>,
		system: FormControl<string | null | undefined>,
		use: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFhirContactFormGroup() {
		return new FormGroup<FhirContactFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			system: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirEncounter {
		date?: Date | null;
		encounterType?: string | null;
		group?: Group;
		id?: number | null;
		identifier?: string | null;
		links?: Array<Link>;
		observations?: Array<FhirObservation>;
		procedures?: Array<FhirProcedure>;
		status?: string | null;
	}
	export interface FhirEncounterFormProperties {
		date: FormControl<Date | null | undefined>,
		encounterType: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFhirEncounterFormGroup() {
		return new FormGroup<FhirEncounterFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			encounterType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirProcedure {
		bodySite?: string | null;
		id?: number | null;
		type?: string | null;
	}
	export interface FhirProcedureFormProperties {
		bodySite: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFhirProcedureFormGroup() {
		return new FormGroup<FhirProcedureFormProperties>({
			bodySite: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirIdentifier {
		id?: number | null;
		label?: string | null;
		value?: string | null;
	}
	export interface FhirIdentifierFormProperties {
		id: FormControl<number | null | undefined>,
		label: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFhirIdentifierFormGroup() {
		return new FormGroup<FhirIdentifierFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirObservationPage {
		data?: Array<Entry_long_Map_string_List_FhirObservation_>;
		totalElements?: number | null;
		totalPages?: number | null;
	}
	export interface FhirObservationPageFormProperties {
		totalElements: FormControl<number | null | undefined>,
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateFhirObservationPageFormGroup() {
		return new FormGroup<FhirObservationPageFormProperties>({
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FhirPatient {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		contacts?: Array<FhirContact>;
		dateOfBirth?: Date | null;
		dateOfBirthNoTime?: string | null;
		forename?: string | null;
		gender?: string | null;
		group?: Group;
		groupCode?: string | null;
		identifier?: string | null;
		identifiers?: Array<FhirIdentifier>;
		postcode?: string | null;
		practitioners?: Array<FhirPractitioner>;
		surname?: string | null;
	}
	export interface FhirPatientFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		address4: FormControl<string | null | undefined>,
		dateOfBirth: FormControl<Date | null | undefined>,
		dateOfBirthNoTime: FormControl<string | null | undefined>,
		forename: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		groupCode: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
	}
	export function CreateFhirPatientFormGroup() {
		return new FormGroup<FhirPatientFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			address4: new FormControl<string | null | undefined>(undefined),
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			dateOfBirthNoTime: new FormControl<string | null | undefined>(undefined),
			forename: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			groupCode: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FhirPractitioner {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		allowInviteGp?: boolean | null;
		contacts?: Array<FhirContact>;
		gender?: string | null;
		groupCode?: string | null;
		identifier?: string | null;
		inviteDate?: Date | null;
		name?: string | null;
		postcode?: string | null;
		role?: string | null;
	}
	export interface FhirPractitionerFormProperties {
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,
		address3: FormControl<string | null | undefined>,
		address4: FormControl<string | null | undefined>,
		allowInviteGp: FormControl<boolean | null | undefined>,
		gender: FormControl<string | null | undefined>,
		groupCode: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		inviteDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateFhirPractitionerFormGroup() {
		return new FormGroup<FhirPractitionerFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined),
			address2: new FormControl<string | null | undefined>(undefined),
			address3: new FormControl<string | null | undefined>(undefined),
			address4: new FormControl<string | null | undefined>(undefined),
			allowInviteGp: new FormControl<boolean | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			groupCode: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			inviteDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupRole {
		group?: Group;
		id?: number | null;
		role?: Role;
	}
	export interface GroupRoleFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateGroupRoleFormGroup() {
		return new FormGroup<GroupRoleFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Role {
		description?: string | null;
		id?: number | null;
		name?: RoleName | null;
		visible?: boolean | null;
	}
	export interface RoleFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<RoleName | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<RoleName | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RoleName { PATIENT = 0, UNIT_ADMIN = 1, STAFF_ADMIN = 2, DISEASE_GROUP_ADMIN = 3, SPECIALTY_ADMIN = 4, GLOBAL_ADMIN = 5, GP_ADMIN = 6, MEMBER = 7, PUBLIC = 8, UNIT_ADMIN_API = 9, IMPORTER = 10 }

	export interface ObservationHeading {
		code?: string | null;
		created?: Date | null;
		decimalPlaces?: number | null;
		defaultPanel?: number | null;
		defaultPanelOrder?: number | null;
		heading?: string | null;
		id?: number | null;
		infoLink?: string | null;
		lastUpdate?: Date | null;
		maxGraph?: number | null;
		minGraph?: number | null;
		name?: string | null;
		normalRange?: string | null;
		observationHeadingGroups?: Array<ObservationHeadingGroup>;
		units?: string | null;
	}
	export interface ObservationHeadingFormProperties {
		code: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		decimalPlaces: FormControl<number | null | undefined>,
		defaultPanel: FormControl<number | null | undefined>,
		defaultPanelOrder: FormControl<number | null | undefined>,
		heading: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		infoLink: FormControl<string | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		maxGraph: FormControl<number | null | undefined>,
		minGraph: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		normalRange: FormControl<string | null | undefined>,
		units: FormControl<string | null | undefined>,
	}
	export function CreateObservationHeadingFormGroup() {
		return new FormGroup<ObservationHeadingFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			decimalPlaces: new FormControl<number | null | undefined>(undefined),
			defaultPanel: new FormControl<number | null | undefined>(undefined),
			defaultPanelOrder: new FormControl<number | null | undefined>(undefined),
			heading: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			infoLink: new FormControl<string | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			maxGraph: new FormControl<number | null | undefined>(undefined),
			minGraph: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			normalRange: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ObservationHeadingGroup {
		created?: Date | null;
		group?: Group;
		id?: number | null;
		panel?: number | null;
		panelOrder?: number | null;
	}
	export interface ObservationHeadingGroupFormProperties {
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		panel: FormControl<number | null | undefined>,
		panelOrder: FormControl<number | null | undefined>,
	}
	export function CreateObservationHeadingGroupFormGroup() {
		return new FormGroup<ObservationHeadingGroupFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			panel: new FormControl<number | null | undefined>(undefined),
			panelOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Patient {
		diagnosisCodes?: Array<Code>;
		fhirAllergies?: Array<FhirAllergy>;
		fhirConditions?: Array<FhirCondition>;
		fhirEncounters?: Array<FhirEncounter>;
		fhirObservations?: Array<FhirObservation>;
		fhirPatient?: FhirPatient;
		fhirPractitioners?: Array<FhirPractitioner>;
		group?: Group;
		id?: number | null;
	}
	export interface PatientFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreatePatientFormGroup() {
		return new FormGroup<PatientFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PatientManagement {
		condition?: FhirCondition;
		encounters?: Array<FhirEncounter>;
		groupCode?: string | null;
		identifier?: string | null;
		observations?: Array<FhirObservation>;
		patient?: FhirPatient;
		practitioners?: Array<FhirPractitioner>;
	}
	export interface PatientManagementFormProperties {
		groupCode: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
	}
	export function CreatePatientManagementFormGroup() {
		return new FormGroup<PatientManagementFormProperties>({
			groupCode: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Route {
		controller?: string | null;
		created?: Date | null;
		displayOrder?: number | null;
		id?: number | null;
		lookup?: Lookup;
		templateUrl?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface RouteFormProperties {
		controller: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		templateUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			controller: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			templateUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UUID {
	}
	export interface UUIDFormProperties {
	}
	export function CreateUUIDFormGroup() {
		return new FormGroup<UUIDFormProperties>({
		});

	}

	export interface User {
		apiKey?: ApiKey;
		canSwitchUser?: boolean | null;
		changePassword?: boolean | null;
		contactNumber?: string | null;
		created?: Date | null;
		currentLogin?: Date | null;
		currentLoginIpAddress?: string | null;
		dateOfBirth?: Date | null;
		deleted?: boolean | null;
		dummy?: boolean | null;
		email?: string | null;
		emailVerified?: boolean | null;
		forename?: string | null;
		groupRoles?: Array<GroupRole>;
		hideSecretWordNotification?: boolean | null;
		id?: number | null;
		identifiers?: Array<string>;
		lastLogin?: Date | null;
		lastLoginIpAddress?: string | null;
		latestDataReceivedBy?: BaseGroup;
		latestDataReceivedDate?: Date | null;
		locked?: boolean | null;
		picture?: string | null;
		roleDescription?: string | null;
		secretWordIsSet?: boolean | null;
		surname?: string | null;
		userFeatures?: Array<UserFeature>;
		username?: string | null;
	}
	export interface UserFormProperties {
		canSwitchUser: FormControl<boolean | null | undefined>,
		changePassword: FormControl<boolean | null | undefined>,
		contactNumber: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		currentLogin: FormControl<Date | null | undefined>,
		currentLoginIpAddress: FormControl<string | null | undefined>,
		dateOfBirth: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		dummy: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailVerified: FormControl<boolean | null | undefined>,
		forename: FormControl<string | null | undefined>,
		hideSecretWordNotification: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastLogin: FormControl<Date | null | undefined>,
		lastLoginIpAddress: FormControl<string | null | undefined>,
		latestDataReceivedDate: FormControl<Date | null | undefined>,
		locked: FormControl<boolean | null | undefined>,
		picture: FormControl<string | null | undefined>,
		roleDescription: FormControl<string | null | undefined>,
		secretWordIsSet: FormControl<boolean | null | undefined>,
		surname: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			canSwitchUser: new FormControl<boolean | null | undefined>(undefined),
			changePassword: new FormControl<boolean | null | undefined>(undefined),
			contactNumber: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			currentLogin: new FormControl<Date | null | undefined>(undefined),
			currentLoginIpAddress: new FormControl<string | null | undefined>(undefined),
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			dummy: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			forename: new FormControl<string | null | undefined>(undefined),
			hideSecretWordNotification: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastLogin: new FormControl<Date | null | undefined>(undefined),
			lastLoginIpAddress: new FormControl<string | null | undefined>(undefined),
			latestDataReceivedDate: new FormControl<Date | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			roleDescription: new FormControl<string | null | undefined>(undefined),
			secretWordIsSet: new FormControl<boolean | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserFeature {
		created?: Date | null;
		feature?: Feature;
		id?: number | null;
		lastUpdate?: Date | null;
		optInDate?: Date | null;
		optInHidden?: boolean | null;
		optInStatus?: boolean | null;
		optOutHidden?: boolean | null;
	}
	export interface UserFeatureFormProperties {
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		optInDate: FormControl<Date | null | undefined>,
		optInHidden: FormControl<boolean | null | undefined>,
		optInStatus: FormControl<boolean | null | undefined>,
		optOutHidden: FormControl<boolean | null | undefined>,
	}
	export function CreateUserFeatureFormGroup() {
		return new FormGroup<UserFeatureFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			optInDate: new FormControl<Date | null | undefined>(undefined),
			optInHidden: new FormControl<boolean | null | undefined>(undefined),
			optInStatus: new FormControl<boolean | null | undefined>(undefined),
			optOutHidden: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserToken {
		auditActions?: Array<string>;
		checkSecretWord?: boolean | null;
		created?: Date | null;
		expiration?: Date | null;
		externalStandards?: Array<ExternalStandard>;
		groupFeatures?: Array<Feature>;
		groupMessagingEnabled?: boolean | null;
		mustSetSecretWord?: boolean | null;
		patientFeatures?: Array<Feature>;
		patientMessagingFeatureTypes?: Array<string>;
		patientRoles?: Array<Role>;
		routes?: Array<Route>;
		secretWord?: string | null;
		secretWordChoices?: string | null;
		secretWordIndexes?: Array<string>;
		secretWordSalt?: string | null;
		secretWordToken?: string | null;
		securityRoles?: Array<Role>;
		shouldEnterCondition?: boolean | null;
		staffFeatures?: Array<Feature>;
		staffRoles?: Array<Role>;
		token?: string | null;
		user?: User;
		userFeatures?: Array<Feature>;
		userGroups?: Array<BaseGroup>;
	}
	export interface UserTokenFormProperties {
		checkSecretWord: FormControl<boolean | null | undefined>,
		created: FormControl<Date | null | undefined>,
		expiration: FormControl<Date | null | undefined>,
		groupMessagingEnabled: FormControl<boolean | null | undefined>,
		mustSetSecretWord: FormControl<boolean | null | undefined>,
		secretWord: FormControl<string | null | undefined>,
		secretWordChoices: FormControl<string | null | undefined>,
		secretWordSalt: FormControl<string | null | undefined>,
		secretWordToken: FormControl<string | null | undefined>,
		shouldEnterCondition: FormControl<boolean | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateUserTokenFormGroup() {
		return new FormGroup<UserTokenFormProperties>({
			checkSecretWord: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			groupMessagingEnabled: new FormControl<boolean | null | undefined>(undefined),
			mustSetSecretWord: new FormControl<boolean | null | undefined>(undefined),
			secretWord: new FormControl<string | null | undefined>(undefined),
			secretWordChoices: new FormControl<string | null | undefined>(undefined),
			secretWordSalt: new FormControl<string | null | undefined>(undefined),
			secretWordToken: new FormControl<string | null | undefined>(undefined),
			shouldEnterCondition: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Log In
		 * Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests
		 * Post auth/login
		 * @param {Credentials} requestBody credentials
		 * @return {void} Description was not specified
		 */
		LogIn(requestBody: Credentials): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'auth/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Log Out
		 * Log Out
		 * Delete auth/logout/{token}
		 * @param {string} token token
		 * @return {void} Description was not specified
		 */
		LogOut(token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'auth/logout/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Basic User Information
		 * Once logged in and have a token, get basic user information including group role membership
		 * Get auth/{token}/basicuserinformation
		 * @param {string} token token
		 * @return {void} OK
		 */
		GetBasicUserInformation(token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'auth/' + (token == null ? '' : encodeURIComponent(token)) + '/basicuserinformation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Basic Patient Information
		 * Given a User ID, get basic patient information for a user from clinical data stored in FHIR
		 * Get patient/{userId}/basic
		 * @param {number} userId userId
		 * @return {void} OK
		 */
		GetBasicPatientDetails(userId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient/' + userId + '/basic', { observe: 'response', responseType: 'text' });
		}

		/**
		 * getPatientManagementDiagnoses
		 * getPatientManagementDiagnoses
		 * Get patientmanagement/diagnoses
		 * @return {Array<Code>} OK
		 */
		GetPatientManagementDiagnoses(): Observable<Array<Code>> {
			return this.http.get<Array<Code>>(this.baseUri + 'patientmanagement/diagnoses', {});
		}

		/**
		 * getPatientManagementLookupTypes
		 * getPatientManagementLookupTypes
		 * Get patientmanagement/lookuptypes
		 * @return {Array<LookupType>} OK
		 */
		GetPatientManagementLookupTypes(): Observable<Array<LookupType>> {
			return this.http.get<Array<LookupType>>(this.baseUri + 'patientmanagement/lookuptypes', {});
		}

		/**
		 * validatePatientManagement
		 * validatePatientManagement
		 * Post patientmanagement/validate
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		ValidatePatientManagement(requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPatientManagement
		 * getPatientManagement
		 * Get patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @return {PatientManagement} OK
		 */
		GetPatientManagement(userId: number, groupId: number, identifierId: number): Observable<PatientManagement> {
			return this.http.get<PatientManagement>(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId, {});
		}

		/**
		 * savePatientManagement
		 * savePatientManagement
		 * Post patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		SavePatientManagement(userId: number, groupId: number, identifierId: number, requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * savePatientManagementSurgeries
		 * savePatientManagementSurgeries
		 * Post patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		SavePatientManagementSurgeries(userId: number, groupId: number, identifierId: number, requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId + '/surgeries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Available Observations Types For a User
		 * Given a User ID retrieve a list of available observation types for that user (where they have observation data).
		 * Get user/{userId}/availableobservationheadings
		 * @param {number} userId userId
		 * @return {Array<ObservationHeading>} OK
		 */
		GetAvailableObservationHeadings(userId: number): Observable<Array<ObservationHeading>> {
			return this.http.get<Array<ObservationHeading>>(this.baseUri + 'user/' + userId + '/availableobservationheadings', {});
		}

		/**
		 * Get Observations of Multiple Types For a User
		 * Given a User ID and search parameters, retrieve a page of observations.
		 * Get user/{userId}/observations
		 * @param {number} userId userId
		 * @param {Array<string>} code code
		 * @param {number} limit limit
		 * @param {number} offset offset
		 * @param {string} orderDirection orderDirection
		 * @return {void} OK
		 */
		GetObservationsByCodes(userId: number, code: Array<string>, limit: number, offset: number, orderDirection: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations?' + code.map(z => `code=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&orderDirection=' + (orderDirection == null ? '' : encodeURIComponent(orderDirection)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Observations of a Certain Type For a User
		 * Given a User ID and observation code, retrieve all observations.
		 * Get user/{userId}/observations/{code}
		 * @param {number} userId userId
		 * @param {string} code code
		 * @return {void} OK
		 */
		GetObservationsByCode(userId: number, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations/' + (code == null ? '' : encodeURIComponent(code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get patient entered Observations of a Certain Type For a User
		 * Given a User ID and observation code, retrieve patient entered observations.
		 * Get user/{userId}/observations/{code}/patiententered
		 * @param {number} userId userId
		 * @param {string} code code
		 * @return {void} OK
		 */
		GetPatientEnteredObservationsByCode(userId: number, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations/' + (code == null ? '' : encodeURIComponent(code)) + '/patiententered', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Available Patient Entered Observations Types For a User
		 * Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).
		 * Get user/{userId}/patiententeredobservationheadings
		 * @param {number} userId userId
		 * @return {Array<ObservationHeading>} OK
		 */
		GetPatientEnteredObservationHeadings(userId: number): Observable<Array<ObservationHeading>> {
			return this.http.get<Array<ObservationHeading>>(this.baseUri + 'user/' + userId + '/patiententeredobservationheadings', {});
		}
	}

}

