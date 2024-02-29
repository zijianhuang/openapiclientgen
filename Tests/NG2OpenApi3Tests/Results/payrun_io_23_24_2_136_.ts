import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AEAssessment {
		AEAssessment1?: AEAssessmentAEAssessment1;
	}
	export interface AEAssessmentFormProperties {
	}
	export function CreateAEAssessmentFormGroup() {
		return new FormGroup<AEAssessmentFormProperties>({
		});

	}

	export interface AEAssessmentAEAssessment1 {

		/**
		 * The a e assessments' age
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Age?: number | null;

		/** The a e assessments' assessment code */
		AssessmentCode?: AEAssessmentAEAssessment1AssessmentCode | null;

		/**
		 * The a e assessments' assessment date
		 * Type: DateOnly
		 */
		AssessmentDate?: Date | null;

		/** The a e assessments' assessment event */
		AssessmentEvent?: AEAssessmentAEAssessment1AssessmentEvent | null;

		/** The a e assessments' assessment override */
		AssessmentOverride?: AEAssessmentAEAssessment1AssessmentOverride | null;

		/** The a e assessments' assessment result */
		AssessmentResult?: AEAssessmentAEAssessment1AssessmentResult | null;

		/** The a e assessments' is member of alternative pension scheme */
		IsMemberOfAlternativePensionScheme?: boolean | null;

		/**
		 * The a e assessments' opt out window end date
		 * Type: DateOnly
		 */
		OptOutWindowEndDate?: Date | null;

		/**
		 * The a e assessments' qualifying earnings
		 * Type: double
		 */
		QualifyingEarnings?: number | null;

		/**
		 * The a e assessments' reenrolment date
		 * Type: DateOnly
		 */
		ReenrolmentDate?: Date | null;

		/**
		 * The a e assessments' state pension age
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StatePensionAge?: number | null;

		/**
		 * The a e assessments' state pension date
		 * Type: DateOnly
		 */
		StatePensionDate?: Date | null;

		/**
		 * The a e assessments' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod?: number | null;

		/**
		 * The a e assessments' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;
	}
	export interface AEAssessmentAEAssessment1FormProperties {

		/**
		 * The a e assessments' age
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Age: FormControl<number | null | undefined>,

		/** The a e assessments' assessment code */
		AssessmentCode: FormControl<AEAssessmentAEAssessment1AssessmentCode | null | undefined>,

		/**
		 * The a e assessments' assessment date
		 * Type: DateOnly
		 */
		AssessmentDate: FormControl<Date | null | undefined>,

		/** The a e assessments' assessment event */
		AssessmentEvent: FormControl<AEAssessmentAEAssessment1AssessmentEvent | null | undefined>,

		/** The a e assessments' assessment override */
		AssessmentOverride: FormControl<AEAssessmentAEAssessment1AssessmentOverride | null | undefined>,

		/** The a e assessments' assessment result */
		AssessmentResult: FormControl<AEAssessmentAEAssessment1AssessmentResult | null | undefined>,

		/** The a e assessments' is member of alternative pension scheme */
		IsMemberOfAlternativePensionScheme: FormControl<boolean | null | undefined>,

		/**
		 * The a e assessments' opt out window end date
		 * Type: DateOnly
		 */
		OptOutWindowEndDate: FormControl<Date | null | undefined>,

		/**
		 * The a e assessments' qualifying earnings
		 * Type: double
		 */
		QualifyingEarnings: FormControl<number | null | undefined>,

		/**
		 * The a e assessments' reenrolment date
		 * Type: DateOnly
		 */
		ReenrolmentDate: FormControl<Date | null | undefined>,

		/**
		 * The a e assessments' state pension age
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StatePensionAge: FormControl<number | null | undefined>,

		/**
		 * The a e assessments' state pension date
		 * Type: DateOnly
		 */
		StatePensionDate: FormControl<Date | null | undefined>,

		/**
		 * The a e assessments' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod: FormControl<number | null | undefined>,

		/**
		 * The a e assessments' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,
	}
	export function CreateAEAssessmentAEAssessment1FormGroup() {
		return new FormGroup<AEAssessmentAEAssessment1FormProperties>({
			Age: new FormControl<number | null | undefined>(undefined),
			AssessmentCode: new FormControl<AEAssessmentAEAssessment1AssessmentCode | null | undefined>(undefined),
			AssessmentDate: new FormControl<Date | null | undefined>(undefined),
			AssessmentEvent: new FormControl<AEAssessmentAEAssessment1AssessmentEvent | null | undefined>(undefined),
			AssessmentOverride: new FormControl<AEAssessmentAEAssessment1AssessmentOverride | null | undefined>(undefined),
			AssessmentResult: new FormControl<AEAssessmentAEAssessment1AssessmentResult | null | undefined>(undefined),
			IsMemberOfAlternativePensionScheme: new FormControl<boolean | null | undefined>(undefined),
			OptOutWindowEndDate: new FormControl<Date | null | undefined>(undefined),
			QualifyingEarnings: new FormControl<number | null | undefined>(undefined),
			ReenrolmentDate: new FormControl<Date | null | undefined>(undefined),
			StatePensionAge: new FormControl<number | null | undefined>(undefined),
			StatePensionDate: new FormControl<Date | null | undefined>(undefined),
			TaxPeriod: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AEAssessmentAEAssessment1AssessmentCode { Excluded = 'Excluded', EligibleJobHolder = 'EligibleJobHolder', NonEligibleJobHolder = 'NonEligibleJobHolder', EntitledWorker = 'EntitledWorker' }

	export enum AEAssessmentAEAssessment1AssessmentEvent { NonEnrolmentEvent = 'NonEnrolmentEvent', AutomaticEnrolment = 'AutomaticEnrolment', OptIn = 'OptIn', VoluntaryJoiner = 'VoluntaryJoiner', ContractualEnrolment = 'ContractualEnrolment' }

	export enum AEAssessmentAEAssessment1AssessmentOverride { None = 'None', OptOut = 'OptOut', OptIn = 'OptIn', VoluntaryJoiner = 'VoluntaryJoiner', ContractualPension = 'ContractualPension', CeasedMembership = 'CeasedMembership', Leaver = 'Leaver', Excluded = 'Excluded' }

	export enum AEAssessmentAEAssessment1AssessmentResult { Inconclusive = 'Inconclusive', NoChange = 'NoChange', Enrol = 'Enrol', Exit = 'Exit' }

	export interface ApplicationSecret {
		ApplicationSecret1?: ApplicationSecretApplicationSecret1;
	}
	export interface ApplicationSecretFormProperties {
	}
	export function CreateApplicationSecretFormGroup() {
		return new FormGroup<ApplicationSecretFormProperties>({
		});

	}

	export interface ApplicationSecretApplicationSecret1 {

		/** The application secrets' created */
		Created?: Date | null;

		/** The application secrets' name */
		Name?: string | null;

		/** The application secrets' value */
		Value?: string | null;
	}
	export interface ApplicationSecretApplicationSecret1FormProperties {

		/** The application secrets' created */
		Created: FormControl<Date | null | undefined>,

		/** The application secrets' name */
		Name: FormControl<string | null | undefined>,

		/** The application secrets' value */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSecretApplicationSecret1FormGroup() {
		return new FormGroup<ApplicationSecretApplicationSecret1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchItemBase {
		BatchItemBase1?: BatchItemBaseBatchItemBase1;
	}
	export interface BatchItemBaseFormProperties {
	}
	export function CreateBatchItemBaseFormGroup() {
		return new FormGroup<BatchItemBaseFormProperties>({
		});

	}

	export interface BatchItemBaseBatchItemBase1 {

		/** The batch item bases' href */
		'@Href'?: string | null;
	}
	export interface BatchItemBaseBatchItemBase1FormProperties {

		/** The batch item bases' href */
		'@Href': FormControl<string | null | undefined>,
	}
	export function CreateBatchItemBaseBatchItemBase1FormGroup() {
		return new FormGroup<BatchItemBaseBatchItemBase1FormProperties>({
			'@Href': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchJobInstruction {
		BatchJobInstruction1?: BatchJobInstructionBatchJobInstruction1;
	}
	export interface BatchJobInstructionFormProperties {
	}
	export function CreateBatchJobInstructionFormGroup() {
		return new FormGroup<BatchJobInstructionFormProperties>({
		});

	}

	export interface BatchJobInstructionBatchJobInstruction1 {

		/** The batch job instructions' holding date */
		HoldingDate?: Date | null;

		/** The batch job instructions' instructions */
		Instructions?: BatchJobInstructionBatchJobInstruction1Instructions;

		/** The batch job instructions' validate only */
		ValidateOnly?: boolean | null;
	}
	export interface BatchJobInstructionBatchJobInstruction1FormProperties {

		/** The batch job instructions' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The batch job instructions' validate only */
		ValidateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchJobInstructionBatchJobInstruction1FormGroup() {
		return new FormGroup<BatchJobInstructionBatchJobInstruction1FormProperties>({
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			ValidateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchJobInstructionBatchJobInstruction1Instructions {
		BatchJobInstructionBatchJobInstruction1InstructionsDELETE?: Array<BatchJobInstructionBatchJobInstruction1InstructionsDELETE>;
	}
	export interface BatchJobInstructionBatchJobInstruction1InstructionsFormProperties {
	}
	export function CreateBatchJobInstructionBatchJobInstruction1InstructionsFormGroup() {
		return new FormGroup<BatchJobInstructionBatchJobInstruction1InstructionsFormProperties>({
		});

	}

	export interface BatchJobInstructionBatchJobInstruction1InstructionsDELETE {

		/** The batch item bases' href */
		'@Href'?: string | null;
	}
	export interface BatchJobInstructionBatchJobInstruction1InstructionsDELETEFormProperties {

		/** The batch item bases' href */
		'@Href': FormControl<string | null | undefined>,
	}
	export function CreateBatchJobInstructionBatchJobInstruction1InstructionsDELETEFormGroup() {
		return new FormGroup<BatchJobInstructionBatchJobInstruction1InstructionsDELETEFormProperties>({
			'@Href': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CisInstruction {
		CisInstruction1?: CisInstructionCisInstruction1;
	}
	export interface CisInstructionFormProperties {
	}
	export function CreateCisInstructionFormGroup() {
		return new FormGroup<CisInstructionFormProperties>({
		});

	}

	export interface CisInstructionCisInstruction1 {

		/** The cis instructions' cis line tag */
		CisLineTag?: string | null;

		/** The cis instructions' cis line type */
		CisLineType?: string | null;

		/** The cis instructions' description */
		Description?: string | null;

		/** The cis instructions' pay frequency */
		PayFrequency?: CisInstructionCisInstruction1PayFrequency | null;

		/**
		 * The cis instructions' period end
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PeriodEnd?: number | null;

		/**
		 * The cis instructions' period start
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PeriodStart?: number | null;

		/**
		 * The cis instructions' tax year end
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYearEnd?: number | null;

		/**
		 * The cis instructions' tax year start
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYearStart?: number | null;

		/** The cis instructions' u o m */
		UOM?: CisInstructionCisInstruction1UOM | null;

		/**
		 * The cis instructions' units
		 * Type: double
		 */
		Units?: number | null;

		/**
		 * The cis instructions' v a t
		 * Type: double
		 */
		VAT?: number | null;

		/**
		 * The cis instructions' value
		 * Type: double
		 */
		Value?: number | null;
	}
	export interface CisInstructionCisInstruction1FormProperties {

		/** The cis instructions' cis line tag */
		CisLineTag: FormControl<string | null | undefined>,

		/** The cis instructions' cis line type */
		CisLineType: FormControl<string | null | undefined>,

		/** The cis instructions' description */
		Description: FormControl<string | null | undefined>,

		/** The cis instructions' pay frequency */
		PayFrequency: FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>,

		/**
		 * The cis instructions' period end
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PeriodEnd: FormControl<number | null | undefined>,

		/**
		 * The cis instructions' period start
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PeriodStart: FormControl<number | null | undefined>,

		/**
		 * The cis instructions' tax year end
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYearEnd: FormControl<number | null | undefined>,

		/**
		 * The cis instructions' tax year start
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYearStart: FormControl<number | null | undefined>,

		/** The cis instructions' u o m */
		UOM: FormControl<CisInstructionCisInstruction1UOM | null | undefined>,

		/**
		 * The cis instructions' units
		 * Type: double
		 */
		Units: FormControl<number | null | undefined>,

		/**
		 * The cis instructions' v a t
		 * Type: double
		 */
		VAT: FormControl<number | null | undefined>,

		/**
		 * The cis instructions' value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateCisInstructionCisInstruction1FormGroup() {
		return new FormGroup<CisInstructionCisInstruction1FormProperties>({
			CisLineTag: new FormControl<string | null | undefined>(undefined),
			CisLineType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			PayFrequency: new FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>(undefined),
			PeriodEnd: new FormControl<number | null | undefined>(undefined),
			PeriodStart: new FormControl<number | null | undefined>(undefined),
			TaxYearEnd: new FormControl<number | null | undefined>(undefined),
			TaxYearStart: new FormControl<number | null | undefined>(undefined),
			UOM: new FormControl<CisInstructionCisInstruction1UOM | null | undefined>(undefined),
			Units: new FormControl<number | null | undefined>(undefined),
			VAT: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CisInstructionCisInstruction1PayFrequency { Monthly = 'Monthly', Weekly = 'Weekly' }

	export enum CisInstructionCisInstruction1UOM { NotSet = 'NotSet', Minute = 'Minute', Hour = 'Hour', Day = 'Day', Week = 'Week', Month = 'Month', Year = 'Year', Unit = 'Unit' }

	export interface CisJobInstructionBase {
		CisJobInstructionBase1?: CisJobInstructionBaseCisJobInstructionBase1;
	}
	export interface CisJobInstructionBaseFormProperties {
	}
	export function CreateCisJobInstructionBaseFormGroup() {
		return new FormGroup<CisJobInstructionBaseFormProperties>({
		});

	}

	export interface CisJobInstructionBaseCisJobInstructionBase1 {

		/** The cis job instruction bases' employer */
		Employer?: CisJobInstructionBaseCisJobInstructionBase1Employer;

		/** The cis job instruction bases' holding date */
		HoldingDate?: Date | null;

		/** The cis job instruction bases' sub contractors */
		SubContractors?: CisJobInstructionBaseCisJobInstructionBase1SubContractors;
	}
	export interface CisJobInstructionBaseCisJobInstructionBase1FormProperties {

		/** The cis job instruction bases' holding date */
		HoldingDate: FormControl<Date | null | undefined>,
	}
	export function CreateCisJobInstructionBaseCisJobInstructionBase1FormGroup() {
		return new FormGroup<CisJobInstructionBaseCisJobInstructionBase1FormProperties>({
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CisJobInstructionBaseCisJobInstructionBase1Employer {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CisJobInstructionBaseCisJobInstructionBase1EmployerFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCisJobInstructionBaseCisJobInstructionBase1EmployerFormGroup() {
		return new FormGroup<CisJobInstructionBaseCisJobInstructionBase1EmployerFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CisJobInstructionBaseCisJobInstructionBase1SubContractors {
		CisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractor?: Array<CisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractor>;
	}
	export interface CisJobInstructionBaseCisJobInstructionBase1SubContractorsFormProperties {
	}
	export function CreateCisJobInstructionBaseCisJobInstructionBase1SubContractorsFormGroup() {
		return new FormGroup<CisJobInstructionBaseCisJobInstructionBase1SubContractorsFormProperties>({
		});

	}

	export interface CisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractor {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractorFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractorFormGroup() {
		return new FormGroup<CisJobInstructionBaseCisJobInstructionBase1SubContractorsSubContractorFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CisLine {
		CisLine1?: CisLineCisLine1;
	}
	export interface CisLineFormProperties {
	}
	export function CreateCisLineFormGroup() {
		return new FormGroup<CisLineFormProperties>({
		});

	}

	export interface CisLineCisLine1 {

		/**
		 * The cis lines' cis deduction
		 * Type: double
		 */
		CisDeduction?: number | null;

		/** The cis lines' cis line type */
		CisLineType?: string | null;

		/** The cis lines' description */
		Description?: string | null;

		/** The cis lines' generated */
		Generated?: Date | null;

		/**
		 * The cis lines' gross pay
		 * Type: double
		 */
		GrossPay?: number | null;

		/** The cis lines' nominal code key */
		NominalCodeKey?: string | null;

		/** The cis lines' pay frequency */
		PayFrequency?: CisInstructionCisInstruction1PayFrequency | null;

		/**
		 * The cis lines' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth?: number | null;

		/**
		 * The cis lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod?: number | null;

		/** The cis lines' tax treatment */
		TaxTreatment?: CisLineCisLine1TaxTreatment | null;

		/**
		 * The cis lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/** The cis lines' u o m */
		UOM?: CisInstructionCisInstruction1UOM | null;

		/**
		 * The cis lines' unit rate
		 * Type: double
		 */
		UnitRate?: number | null;

		/**
		 * The cis lines' units
		 * Type: double
		 */
		Units?: number | null;

		/**
		 * The cis lines' v a t
		 * Type: double
		 */
		VAT?: number | null;
	}
	export interface CisLineCisLine1FormProperties {

		/**
		 * The cis lines' cis deduction
		 * Type: double
		 */
		CisDeduction: FormControl<number | null | undefined>,

		/** The cis lines' cis line type */
		CisLineType: FormControl<string | null | undefined>,

		/** The cis lines' description */
		Description: FormControl<string | null | undefined>,

		/** The cis lines' generated */
		Generated: FormControl<Date | null | undefined>,

		/**
		 * The cis lines' gross pay
		 * Type: double
		 */
		GrossPay: FormControl<number | null | undefined>,

		/** The cis lines' nominal code key */
		NominalCodeKey: FormControl<string | null | undefined>,

		/** The cis lines' pay frequency */
		PayFrequency: FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>,

		/**
		 * The cis lines' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth: FormControl<number | null | undefined>,

		/**
		 * The cis lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod: FormControl<number | null | undefined>,

		/** The cis lines' tax treatment */
		TaxTreatment: FormControl<CisLineCisLine1TaxTreatment | null | undefined>,

		/**
		 * The cis lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/** The cis lines' u o m */
		UOM: FormControl<CisInstructionCisInstruction1UOM | null | undefined>,

		/**
		 * The cis lines' unit rate
		 * Type: double
		 */
		UnitRate: FormControl<number | null | undefined>,

		/**
		 * The cis lines' units
		 * Type: double
		 */
		Units: FormControl<number | null | undefined>,

		/**
		 * The cis lines' v a t
		 * Type: double
		 */
		VAT: FormControl<number | null | undefined>,
	}
	export function CreateCisLineCisLine1FormGroup() {
		return new FormGroup<CisLineCisLine1FormProperties>({
			CisDeduction: new FormControl<number | null | undefined>(undefined),
			CisLineType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Generated: new FormControl<Date | null | undefined>(undefined),
			GrossPay: new FormControl<number | null | undefined>(undefined),
			NominalCodeKey: new FormControl<string | null | undefined>(undefined),
			PayFrequency: new FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>(undefined),
			TaxMonth: new FormControl<number | null | undefined>(undefined),
			TaxPeriod: new FormControl<number | null | undefined>(undefined),
			TaxTreatment: new FormControl<CisLineCisLine1TaxTreatment | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			UOM: new FormControl<CisInstructionCisInstruction1UOM | null | undefined>(undefined),
			UnitRate: new FormControl<number | null | undefined>(undefined),
			Units: new FormControl<number | null | undefined>(undefined),
			VAT: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CisLineCisLine1TaxTreatment { Taxable = 'Taxable', NonTaxable = 'NonTaxable', Notional = 'Notional', Materials = 'Materials' }

	export interface CisLineType {
		CisLineType1?: CisLineTypeCisLineType1;
	}
	export interface CisLineTypeFormProperties {
	}
	export function CreateCisLineTypeFormGroup() {
		return new FormGroup<CisLineTypeFormProperties>({
		});

	}

	export interface CisLineTypeCisLineType1 {

		/** The cis line types' description */
		Description?: string | null;

		/** The cis line types' line type */
		LineType?: string | null;

		/** The cis line types' nominal code */
		NominalCode?: CisLineTypeCisLineType1NominalCode;

		/** The cis line types' tax treatment */
		TaxTreatment?: CisLineCisLine1TaxTreatment | null;
	}
	export interface CisLineTypeCisLineType1FormProperties {

		/** The cis line types' description */
		Description: FormControl<string | null | undefined>,

		/** The cis line types' line type */
		LineType: FormControl<string | null | undefined>,

		/** The cis line types' tax treatment */
		TaxTreatment: FormControl<CisLineCisLine1TaxTreatment | null | undefined>,
	}
	export function CreateCisLineTypeCisLineType1FormGroup() {
		return new FormGroup<CisLineTypeCisLineType1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LineType: new FormControl<string | null | undefined>(undefined),
			TaxTreatment: new FormControl<CisLineCisLine1TaxTreatment | null | undefined>(undefined),
		});

	}

	export interface CisLineTypeCisLineType1NominalCode {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CisLineTypeCisLineType1NominalCodeFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCisLineTypeCisLineType1NominalCodeFormGroup() {
		return new FormGroup<CisLineTypeCisLineType1NominalCodeFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CisTransaction {
		CisTransaction1?: CisTransactionCisTransaction1;
	}
	export interface CisTransactionFormProperties {
	}
	export function CreateCisTransactionFormGroup() {
		return new FormGroup<CisTransactionFormProperties>({
		});

	}

	export interface CisTransactionCisTransaction1 {

		/** The cis transactions' cis message type */
		CisMessageType?: CisTransactionCisTransaction1CisMessageType | null;

		/** The cis transactions' employer core */
		EmployerCore?: CisTransactionCisTransaction1EmployerCore;

		/** The cis transactions' request data */
		RequestData?: string | null;

		/** The cis transactions' response data */
		ResponseData?: string | null;

		/**
		 * The cis transactions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/** The cis transactions' timestamp */
		Timestamp?: Date | null;

		/** The cis transactions' transaction status */
		TransactionStatus?: CisTransactionCisTransaction1TransactionStatus | null;

		/** The cis transactions' transmission date */
		TransmissionDate?: Date | null;
	}
	export interface CisTransactionCisTransaction1FormProperties {

		/** The cis transactions' cis message type */
		CisMessageType: FormControl<CisTransactionCisTransaction1CisMessageType | null | undefined>,

		/** The cis transactions' request data */
		RequestData: FormControl<string | null | undefined>,

		/** The cis transactions' response data */
		ResponseData: FormControl<string | null | undefined>,

		/**
		 * The cis transactions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/** The cis transactions' timestamp */
		Timestamp: FormControl<Date | null | undefined>,

		/** The cis transactions' transaction status */
		TransactionStatus: FormControl<CisTransactionCisTransaction1TransactionStatus | null | undefined>,

		/** The cis transactions' transmission date */
		TransmissionDate: FormControl<Date | null | undefined>,
	}
	export function CreateCisTransactionCisTransaction1FormGroup() {
		return new FormGroup<CisTransactionCisTransaction1FormProperties>({
			CisMessageType: new FormControl<CisTransactionCisTransaction1CisMessageType | null | undefined>(undefined),
			RequestData: new FormControl<string | null | undefined>(undefined),
			ResponseData: new FormControl<string | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			TransactionStatus: new FormControl<CisTransactionCisTransaction1TransactionStatus | null | undefined>(undefined),
			TransmissionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CisTransactionCisTransaction1CisMessageType { Verification = 'Verification', Return = 'Return' }

	export interface CisTransactionCisTransaction1EmployerCore {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CisTransactionCisTransaction1EmployerCoreFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCisTransactionCisTransaction1EmployerCoreFormGroup() {
		return new FormGroup<CisTransactionCisTransaction1EmployerCoreFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CisTransactionCisTransaction1TransactionStatus { New = 'New', RequestGenerated = 'RequestGenerated', CompletedWithError = 'CompletedWithError', CompletedWithSuccess = 'CompletedWithSuccess', TimeOut = 'TimeOut' }

	export interface Commentary {
		Commentary1?: CommentaryCommentary1;
	}
	export interface CommentaryFormProperties {
	}
	export function CreateCommentaryFormGroup() {
		return new FormGroup<CommentaryFormProperties>({
		});

	}

	export interface CommentaryCommentary1 {

		/** The commentarys' created */
		Created?: Date | null;

		/** The commentarys' detail */
		Detail?: string | null;

		/** The commentarys' employee */
		Employee?: CommentaryCommentary1Employee;

		/** The commentarys' pay run */
		PayRun?: CommentaryCommentary1PayRun;
	}
	export interface CommentaryCommentary1FormProperties {

		/** The commentarys' created */
		Created: FormControl<Date | null | undefined>,

		/** The commentarys' detail */
		Detail: FormControl<string | null | undefined>,
	}
	export function CreateCommentaryCommentary1FormGroup() {
		return new FormGroup<CommentaryCommentary1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentaryCommentary1Employee {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CommentaryCommentary1EmployeeFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCommentaryCommentary1EmployeeFormGroup() {
		return new FormGroup<CommentaryCommentary1EmployeeFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentaryCommentary1PayRun {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface CommentaryCommentary1PayRunFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateCommentaryCommentary1PayRunFormGroup() {
		return new FormGroup<CommentaryCommentary1PayRunFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DpsJobInstruction {
		DpsJobInstruction1?: DpsJobInstructionDpsJobInstruction1;
	}
	export interface DpsJobInstructionFormProperties {
	}
	export function CreateDpsJobInstructionFormGroup() {
		return new FormGroup<DpsJobInstructionFormProperties>({
		});

	}

	export interface DpsJobInstructionDpsJobInstruction1 {

		/** The dps job instructions' apply */
		Apply?: boolean | null;

		/** The dps job instructions' employer */
		Employer?: DpsJobInstructionDpsJobInstruction1Employer;

		/**
		 * The dps job instructions' from date
		 * Type: DateOnly
		 */
		FromDate?: Date | null;

		/** The dps job instructions' holding date */
		HoldingDate?: Date | null;

		/** The dps job instructions' message types */
		MessageTypes?: DpsJobInstructionDpsJobInstruction1MessageTypes;

		/** The dps job instructions' messages to process */
		MessagesToProcess?: DpsJobInstructionDpsJobInstruction1MessagesToProcess;

		/** The dps job instructions' retrieve */
		Retrieve?: boolean | null;
	}
	export interface DpsJobInstructionDpsJobInstruction1FormProperties {

		/** The dps job instructions' apply */
		Apply: FormControl<boolean | null | undefined>,

		/**
		 * The dps job instructions' from date
		 * Type: DateOnly
		 */
		FromDate: FormControl<Date | null | undefined>,

		/** The dps job instructions' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The dps job instructions' retrieve */
		Retrieve: FormControl<boolean | null | undefined>,
	}
	export function CreateDpsJobInstructionDpsJobInstruction1FormGroup() {
		return new FormGroup<DpsJobInstructionDpsJobInstruction1FormProperties>({
			Apply: new FormControl<boolean | null | undefined>(undefined),
			FromDate: new FormControl<Date | null | undefined>(undefined),
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			Retrieve: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DpsJobInstructionDpsJobInstruction1Employer {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface DpsJobInstructionDpsJobInstruction1EmployerFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateDpsJobInstructionDpsJobInstruction1EmployerFormGroup() {
		return new FormGroup<DpsJobInstructionDpsJobInstruction1EmployerFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DpsJobInstructionDpsJobInstruction1MessageTypes {
		Type?: Array<string>;
	}
	export interface DpsJobInstructionDpsJobInstruction1MessageTypesFormProperties {
	}
	export function CreateDpsJobInstructionDpsJobInstruction1MessageTypesFormGroup() {
		return new FormGroup<DpsJobInstructionDpsJobInstruction1MessageTypesFormProperties>({
		});

	}

	export interface DpsJobInstructionDpsJobInstruction1MessagesToProcess {
		DpsJobInstructionDpsJobInstruction1MessagesToProcessMessage?: Array<DpsJobInstructionDpsJobInstruction1MessagesToProcessMessage>;
	}
	export interface DpsJobInstructionDpsJobInstruction1MessagesToProcessFormProperties {
	}
	export function CreateDpsJobInstructionDpsJobInstruction1MessagesToProcessFormGroup() {
		return new FormGroup<DpsJobInstructionDpsJobInstruction1MessagesToProcessFormProperties>({
		});

	}

	export interface DpsJobInstructionDpsJobInstruction1MessagesToProcessMessage {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface DpsJobInstructionDpsJobInstruction1MessagesToProcessMessageFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateDpsJobInstructionDpsJobInstruction1MessagesToProcessMessageFormGroup() {
		return new FormGroup<DpsJobInstructionDpsJobInstruction1MessagesToProcessMessageFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DpsMessage {
		DpsMessage1?: DpsMessageDpsMessage1;
	}
	export interface DpsMessageFormProperties {
	}
	export function CreateDpsMessageFormGroup() {
		return new FormGroup<DpsMessageFormProperties>({
		});

	}

	export interface DpsMessageDpsMessage1 {

		/** The dps messages' form type */
		FormType?: string | null;

		/**
		 * The dps messages' issue date
		 * Type: DateOnly
		 */
		IssueDate?: Date | null;

		/** The dps messages' last updated */
		LastUpdated?: Date | null;

		/** The dps messages' message */
		Message?: string | null;

		/** The dps messages' message status */
		MessageStatus?: DpsMessageDpsMessage1MessageStatus | null;

		/** The dps messages' message type */
		MessageType?: string | null;

		/** The dps messages' processing result */
		ProcessingResult?: string | null;

		/** The dps messages' retrieve date */
		RetrieveDate?: Date | null;

		/**
		 * The dps messages' sequence number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SequenceNumber?: number | null;
	}
	export interface DpsMessageDpsMessage1FormProperties {

		/** The dps messages' form type */
		FormType: FormControl<string | null | undefined>,

		/**
		 * The dps messages' issue date
		 * Type: DateOnly
		 */
		IssueDate: FormControl<Date | null | undefined>,

		/** The dps messages' last updated */
		LastUpdated: FormControl<Date | null | undefined>,

		/** The dps messages' message */
		Message: FormControl<string | null | undefined>,

		/** The dps messages' message status */
		MessageStatus: FormControl<DpsMessageDpsMessage1MessageStatus | null | undefined>,

		/** The dps messages' message type */
		MessageType: FormControl<string | null | undefined>,

		/** The dps messages' processing result */
		ProcessingResult: FormControl<string | null | undefined>,

		/** The dps messages' retrieve date */
		RetrieveDate: FormControl<Date | null | undefined>,

		/**
		 * The dps messages' sequence number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SequenceNumber: FormControl<number | null | undefined>,
	}
	export function CreateDpsMessageDpsMessage1FormGroup() {
		return new FormGroup<DpsMessageDpsMessage1FormProperties>({
			FormType: new FormControl<string | null | undefined>(undefined),
			IssueDate: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			MessageStatus: new FormControl<DpsMessageDpsMessage1MessageStatus | null | undefined>(undefined),
			MessageType: new FormControl<string | null | undefined>(undefined),
			ProcessingResult: new FormControl<string | null | undefined>(undefined),
			RetrieveDate: new FormControl<Date | null | undefined>(undefined),
			SequenceNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DpsMessageDpsMessage1MessageStatus { Retrieved = 'Retrieved', Applied = 'Applied', Unresolved = 'Unresolved', Ignored = 'Ignored', Information = 'Information' }

	export interface Employee {
		Employee1?: EmployeeEmployee1;
	}
	export interface EmployeeFormProperties {
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
		});

	}

	export interface EmployeeEmployee1 {

		/** The employees' a e assessment override */
		AEAssessmentOverride?: AEAssessmentAEAssessment1AssessmentOverride | null;

		/**
		 * The employees' a e assessment override date
		 * Type: DateOnly
		 */
		AEAssessmentOverrideDate?: Date | null;

		/** The employees' a e exclusion reason code */
		AEExclusionReasonCode?: EmployeeEmployee1AEExclusionReasonCode | null;

		/**
		 * The employees' a e postponement date
		 * Type: DateOnly
		 */
		AEPostponementDate?: Date | null;

		/** The employees' address */
		Address?: EmployeeEmployee1Address;

		/** The employees' bank account */
		BankAccount?: EmployeeEmployee1BankAccount;

		/** The employees' code */
		Code?: string | null;

		/**
		 * The employees' date of birth
		 * Type: DateOnly
		 */
		DateOfBirth?: Date | null;

		/** The employees' deactivated */
		Deactivated?: boolean | null;

		/**
		 * The employees' directorship appointment date
		 * Type: DateOnly
		 */
		DirectorshipAppointmentDate?: Date | null;

		/** The employees' e e a citizen */
		EEACitizen?: boolean | null;

		/** The employees' e p m6 */
		EPM6?: boolean | null;

		/**
		 * The employees' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The employees' employee partner */
		EmployeePartner?: EmployeeEmployee1EmployeePartner;

		/** The employees' the first name */
		FirstName?: string | null;

		/** The employees' gender */
		Gender?: EmployeeEmployee1Gender | null;

		/**
		 * The employees' hours per week
		 * Type: double
		 */
		HoursPerWeek?: number | null;

		/** The employees' initials */
		Initials?: string | null;

		/** The employees' irregular employment */
		IrregularEmployment?: boolean | null;

		/** The employees' is agency worker */
		IsAgencyWorker?: boolean | null;

		/** The employees' last name */
		LastName?: string | null;

		/** The employees' leaver reason */
		LeaverReason?: EmployeeEmployee1LeaverReason | null;

		/**
		 * The employees' leaving date
		 * Type: DateOnly
		 */
		LeavingDate?: Date | null;

		/** The employees' marital status */
		MaritalStatus?: EmployeeEmployee1MaritalStatus | null;

		/** The employees' meta data */
		MetaData?: string | null;

		/** The employees' middle name */
		MiddleName?: string | null;

		/**
		 * The employees' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The employees' ni number */
		NiNumber?: string | null;

		/** The employees' nic liability */
		NicLiability?: EmployeeEmployee1NicLiability | null;

		/** The employees' off payroll worker */
		OffPayrollWorker?: boolean | null;

		/** The employees' on strike */
		OnStrike?: boolean | null;

		/**
		 * The employees' p45 issued date
		 * Type: DateOnly
		 */
		P45IssuedDate?: Date | null;

		/** The employees' passport number */
		PassportNumber?: string | null;

		/** The employees' pay schedule */
		PaySchedule?: EmployeeEmployee1PaySchedule;

		/** The employees' payment method */
		PaymentMethod?: EmployeeEmployee1PaymentMethod | null;

		/** The employees' payment to a non individual */
		PaymentToANonIndividual?: boolean | null;

		/** The employees' region */
		Region?: EmployeeEmployee1Region | null;

		/**
		 * The employees' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The employees' rule exclusions */
		RuleExclusions?: EmployeeEmployee1RuleExclusions | null;

		/** The employees' seconded */
		Seconded?: EmployeeEmployee1Seconded | null;

		/**
		 * The employees' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;

		/** The employees' starter declaration */
		StarterDeclaration?: EmployeeEmployee1StarterDeclaration | null;

		/** The employees' territory */
		Territory?: EmployeeEmployee1Territory | null;

		/** The employees' title */
		Title?: string | null;

		/**
		 * The employees' veteran period start date
		 * Type: DateOnly
		 */
		VeteranPeriodStartDate?: Date | null;

		/** The employees' working week */
		WorkingWeek?: EmployeeEmployee1WorkingWeek | null;
	}
	export interface EmployeeEmployee1FormProperties {

		/** The employees' a e assessment override */
		AEAssessmentOverride: FormControl<AEAssessmentAEAssessment1AssessmentOverride | null | undefined>,

		/**
		 * The employees' a e assessment override date
		 * Type: DateOnly
		 */
		AEAssessmentOverrideDate: FormControl<Date | null | undefined>,

		/** The employees' a e exclusion reason code */
		AEExclusionReasonCode: FormControl<EmployeeEmployee1AEExclusionReasonCode | null | undefined>,

		/**
		 * The employees' a e postponement date
		 * Type: DateOnly
		 */
		AEPostponementDate: FormControl<Date | null | undefined>,

		/** The employees' code */
		Code: FormControl<string | null | undefined>,

		/**
		 * The employees' date of birth
		 * Type: DateOnly
		 */
		DateOfBirth: FormControl<Date | null | undefined>,

		/** The employees' deactivated */
		Deactivated: FormControl<boolean | null | undefined>,

		/**
		 * The employees' directorship appointment date
		 * Type: DateOnly
		 */
		DirectorshipAppointmentDate: FormControl<Date | null | undefined>,

		/** The employees' e e a citizen */
		EEACitizen: FormControl<boolean | null | undefined>,

		/** The employees' e p m6 */
		EPM6: FormControl<boolean | null | undefined>,

		/**
		 * The employees' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The employees' the first name */
		FirstName: FormControl<string | null | undefined>,

		/** The employees' gender */
		Gender: FormControl<EmployeeEmployee1Gender | null | undefined>,

		/**
		 * The employees' hours per week
		 * Type: double
		 */
		HoursPerWeek: FormControl<number | null | undefined>,

		/** The employees' initials */
		Initials: FormControl<string | null | undefined>,

		/** The employees' irregular employment */
		IrregularEmployment: FormControl<boolean | null | undefined>,

		/** The employees' is agency worker */
		IsAgencyWorker: FormControl<boolean | null | undefined>,

		/** The employees' last name */
		LastName: FormControl<string | null | undefined>,

		/** The employees' leaver reason */
		LeaverReason: FormControl<EmployeeEmployee1LeaverReason | null | undefined>,

		/**
		 * The employees' leaving date
		 * Type: DateOnly
		 */
		LeavingDate: FormControl<Date | null | undefined>,

		/** The employees' marital status */
		MaritalStatus: FormControl<EmployeeEmployee1MaritalStatus | null | undefined>,

		/** The employees' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The employees' middle name */
		MiddleName: FormControl<string | null | undefined>,

		/**
		 * The employees' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The employees' ni number */
		NiNumber: FormControl<string | null | undefined>,

		/** The employees' nic liability */
		NicLiability: FormControl<EmployeeEmployee1NicLiability | null | undefined>,

		/** The employees' off payroll worker */
		OffPayrollWorker: FormControl<boolean | null | undefined>,

		/** The employees' on strike */
		OnStrike: FormControl<boolean | null | undefined>,

		/**
		 * The employees' p45 issued date
		 * Type: DateOnly
		 */
		P45IssuedDate: FormControl<Date | null | undefined>,

		/** The employees' passport number */
		PassportNumber: FormControl<string | null | undefined>,

		/** The employees' payment method */
		PaymentMethod: FormControl<EmployeeEmployee1PaymentMethod | null | undefined>,

		/** The employees' payment to a non individual */
		PaymentToANonIndividual: FormControl<boolean | null | undefined>,

		/** The employees' region */
		Region: FormControl<EmployeeEmployee1Region | null | undefined>,

		/**
		 * The employees' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The employees' rule exclusions */
		RuleExclusions: FormControl<EmployeeEmployee1RuleExclusions | null | undefined>,

		/** The employees' seconded */
		Seconded: FormControl<EmployeeEmployee1Seconded | null | undefined>,

		/**
		 * The employees' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,

		/** The employees' starter declaration */
		StarterDeclaration: FormControl<EmployeeEmployee1StarterDeclaration | null | undefined>,

		/** The employees' territory */
		Territory: FormControl<EmployeeEmployee1Territory | null | undefined>,

		/** The employees' title */
		Title: FormControl<string | null | undefined>,

		/**
		 * The employees' veteran period start date
		 * Type: DateOnly
		 */
		VeteranPeriodStartDate: FormControl<Date | null | undefined>,

		/** The employees' working week */
		WorkingWeek: FormControl<EmployeeEmployee1WorkingWeek | null | undefined>,
	}
	export function CreateEmployeeEmployee1FormGroup() {
		return new FormGroup<EmployeeEmployee1FormProperties>({
			AEAssessmentOverride: new FormControl<AEAssessmentAEAssessment1AssessmentOverride | null | undefined>(undefined),
			AEAssessmentOverrideDate: new FormControl<Date | null | undefined>(undefined),
			AEExclusionReasonCode: new FormControl<EmployeeEmployee1AEExclusionReasonCode | null | undefined>(undefined),
			AEPostponementDate: new FormControl<Date | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			DateOfBirth: new FormControl<Date | null | undefined>(undefined),
			Deactivated: new FormControl<boolean | null | undefined>(undefined),
			DirectorshipAppointmentDate: new FormControl<Date | null | undefined>(undefined),
			EEACitizen: new FormControl<boolean | null | undefined>(undefined),
			EPM6: new FormControl<boolean | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<EmployeeEmployee1Gender | null | undefined>(undefined),
			HoursPerWeek: new FormControl<number | null | undefined>(undefined),
			Initials: new FormControl<string | null | undefined>(undefined),
			IrregularEmployment: new FormControl<boolean | null | undefined>(undefined),
			IsAgencyWorker: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			LeaverReason: new FormControl<EmployeeEmployee1LeaverReason | null | undefined>(undefined),
			LeavingDate: new FormControl<Date | null | undefined>(undefined),
			MaritalStatus: new FormControl<EmployeeEmployee1MaritalStatus | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			NiNumber: new FormControl<string | null | undefined>(undefined),
			NicLiability: new FormControl<EmployeeEmployee1NicLiability | null | undefined>(undefined),
			OffPayrollWorker: new FormControl<boolean | null | undefined>(undefined),
			OnStrike: new FormControl<boolean | null | undefined>(undefined),
			P45IssuedDate: new FormControl<Date | null | undefined>(undefined),
			PassportNumber: new FormControl<string | null | undefined>(undefined),
			PaymentMethod: new FormControl<EmployeeEmployee1PaymentMethod | null | undefined>(undefined),
			PaymentToANonIndividual: new FormControl<boolean | null | undefined>(undefined),
			Region: new FormControl<EmployeeEmployee1Region | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			RuleExclusions: new FormControl<EmployeeEmployee1RuleExclusions | null | undefined>(undefined),
			Seconded: new FormControl<EmployeeEmployee1Seconded | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			StarterDeclaration: new FormControl<EmployeeEmployee1StarterDeclaration | null | undefined>(undefined),
			Territory: new FormControl<EmployeeEmployee1Territory | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			VeteranPeriodStartDate: new FormControl<Date | null | undefined>(undefined),
			WorkingWeek: new FormControl<EmployeeEmployee1WorkingWeek | null | undefined>(undefined),
		});

	}

	export enum EmployeeEmployee1AEExclusionReasonCode { OtherNotKnown = 'OtherNotKnown', NotAWorker = 'NotAWorker', NotUKWorker = 'NotUKWorker', TemporaryUKWorker = 'TemporaryUKWorker', OutsideAgeRange = 'OutsideAgeRange', SingleEmployeeDirector = 'SingleEmployeeDirector', CeasedMembershipWithin12Months = 'CeasedMembershipWithin12Months', CeasedMembershipBeyond12Months = 'CeasedMembershipBeyond12Months', WorkerWULSWithin12Month = 'WorkerWULSWithin12Month', WorkerWULSBeyond12Month = 'WorkerWULSBeyond12Month', WorkerInNoticePeriod = 'WorkerInNoticePeriod', WorkerTaxProtection = 'WorkerTaxProtection' }

	export interface EmployeeEmployee1Address {

		/** The addresss' line 1 */
		Address1?: string | null;

		/** The addresss' line 2 */
		Address2?: string | null;

		/** The addresss' line 3 */
		Address3?: string | null;

		/** The addresss' line 4 */
		Address4?: string | null;

		/** The addresss' country */
		Country?: string | null;

		/** The addresss' postcode */
		Postcode?: string | null;
	}
	export interface EmployeeEmployee1AddressFormProperties {

		/** The addresss' line 1 */
		Address1: FormControl<string | null | undefined>,

		/** The addresss' line 2 */
		Address2: FormControl<string | null | undefined>,

		/** The addresss' line 3 */
		Address3: FormControl<string | null | undefined>,

		/** The addresss' line 4 */
		Address4: FormControl<string | null | undefined>,

		/** The addresss' country */
		Country: FormControl<string | null | undefined>,

		/** The addresss' postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeEmployee1AddressFormGroup() {
		return new FormGroup<EmployeeEmployee1AddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeEmployee1BankAccount {

		/** The bank accounts' account name */
		AccountName?: string | null;

		/** The bank accounts' account number */
		AccountNumber?: string | null;

		/** The bank accounts' branch name */
		BranchName?: string | null;

		/** The bank accounts' reference */
		Reference?: string | null;

		/** The bank accounts' sort code */
		SortCode?: string | null;
	}
	export interface EmployeeEmployee1BankAccountFormProperties {

		/** The bank accounts' account name */
		AccountName: FormControl<string | null | undefined>,

		/** The bank accounts' account number */
		AccountNumber: FormControl<string | null | undefined>,

		/** The bank accounts' branch name */
		BranchName: FormControl<string | null | undefined>,

		/** The bank accounts' reference */
		Reference: FormControl<string | null | undefined>,

		/** The bank accounts' sort code */
		SortCode: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeEmployee1BankAccountFormGroup() {
		return new FormGroup<EmployeeEmployee1BankAccountFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			SortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeEmployee1EmployeePartner {

		/** The employee partners' first name */
		FirstName?: string | null;

		/** The employee partners' initials */
		Initials?: string | null;

		/** The employee partners' last name */
		LastName?: string | null;

		/** The employee partners' middle name */
		MiddleName?: string | null;

		/** The employee partners' ni number */
		NiNumber?: string | null;
	}
	export interface EmployeeEmployee1EmployeePartnerFormProperties {

		/** The employee partners' first name */
		FirstName: FormControl<string | null | undefined>,

		/** The employee partners' initials */
		Initials: FormControl<string | null | undefined>,

		/** The employee partners' last name */
		LastName: FormControl<string | null | undefined>,

		/** The employee partners' middle name */
		MiddleName: FormControl<string | null | undefined>,

		/** The employee partners' ni number */
		NiNumber: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeEmployee1EmployeePartnerFormGroup() {
		return new FormGroup<EmployeeEmployee1EmployeePartnerFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			Initials: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			NiNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeEmployee1Gender { Unknown = 'Unknown', Male = 'Male', Female = 'Female' }

	export enum EmployeeEmployee1LeaverReason { Resigned = 'Resigned', Dismissed = 'Dismissed', Redundant = 'Redundant', Retired = 'Retired', Deceased = 'Deceased', LegalCustody = 'LegalCustody', Other = 'Other' }

	export enum EmployeeEmployee1MaritalStatus { NotSet = 'NotSet', Single = 'Single', Married = 'Married', Divorced = 'Divorced', Widowed = 'Widowed' }

	export enum EmployeeEmployee1NicLiability { HasOtherJob = 'HasOtherJob', IsFemaleEntitledToReducedRate = 'IsFemaleEntitledToReducedRate', IsNotLiable = 'IsNotLiable', IsContractedOut = 'IsContractedOut', IsFullyLiable = 'IsFullyLiable', IsApprentice = 'IsApprentice', LeaverBeyond6Weeks = 'LeaverBeyond6Weeks', PaymentAfterLeavingIrregular = 'PaymentAfterLeavingIrregular', IsFreePortWorker = 'IsFreePortWorker', IsNotLiableForEmployerNi = 'IsNotLiableForEmployerNi' }

	export interface EmployeeEmployee1PaySchedule {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface EmployeeEmployee1PayScheduleFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateEmployeeEmployee1PayScheduleFormGroup() {
		return new FormGroup<EmployeeEmployee1PayScheduleFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeEmployee1PaymentMethod { NotSet = 'NotSet', Cash = 'Cash', Cheque = 'Cheque', BACS = 'BACS', FasterPayments = 'FasterPayments', Other = 'Other' }

	export enum EmployeeEmployee1Region { NotSet = 'NotSet', England = 'England', Scotland = 'Scotland', Wales = 'Wales' }

	export enum EmployeeEmployee1RuleExclusions { None = 'None', NiMissingPayInstructionRule = 'NiMissingPayInstructionRule', TaxMissingPayInstructionRule = 'TaxMissingPayInstructionRule', TaxCodeUpliftRule = 'TaxCodeUpliftRule', NiSetExpectedLetterRule = 'NiSetExpectedLetterRule', NiDateOfBirthChangeRetrospectiveCRule = 'NiDateOfBirthChangeRetrospectiveCRule', NiDefermentStatusChangeRule = 'NiDefermentStatusChangeRule', NiEndContractedOutTransferRule = 'NiEndContractedOutTransferRule', PaymentAfterLeavingTaxCodeRule = 'PaymentAfterLeavingTaxCodeRule', LeaverEndInstructionsRule = 'LeaverEndInstructionsRule', P45StudentLoanInstructionRule = 'P45StudentLoanInstructionRule', P45TaxInstructionRule = 'P45TaxInstructionRule', P45YtdTaxRule = 'P45YtdTaxRule', YtdInstructionRule = 'YtdInstructionRule', TaxCodeRegionChangeRule = 'TaxCodeRegionChangeRule', AutoEnrolmentStatusChangeRule = 'AutoEnrolmentStatusChangeRule', EmployeeDeceasedRule = 'EmployeeDeceasedRule', BenefitInstructionAutoEndRule = 'BenefitInstructionAutoEndRule' }

	export enum EmployeeEmployee1Seconded { NotSet = 'NotSet', Stay183DaysOrMore = 'Stay183DaysOrMore', StayLessThan183Days = 'StayLessThan183Days', InOutUk = 'InOutUk' }

	export enum EmployeeEmployee1StarterDeclaration { PreviouslyReported = 'PreviouslyReported', A = 'A', B = 'B', C = 'C' }

	export enum EmployeeEmployee1Territory { UnitedKingdom = 'UnitedKingdom' }

	export enum EmployeeEmployee1WorkingWeek { None = 'None', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', AllWeekDays = 'AllWeekDays', Saturday = 'Saturday', Sunday = 'Sunday', AllDays = 'AllDays' }

	export interface EmployeeSecret {
		EmployeeSecret1?: EmployeeSecretEmployeeSecret1;
	}
	export interface EmployeeSecretFormProperties {
	}
	export function CreateEmployeeSecretFormGroup() {
		return new FormGroup<EmployeeSecretFormProperties>({
		});

	}

	export interface EmployeeSecretEmployeeSecret1 {

		/** The employee secrets' created */
		Created?: Date | null;

		/** The employee secrets' name */
		Name?: string | null;

		/** The employee secrets' value */
		Value?: string | null;
	}
	export interface EmployeeSecretEmployeeSecret1FormProperties {

		/** The employee secrets' created */
		Created: FormControl<Date | null | undefined>,

		/** The employee secrets' name */
		Name: FormControl<string | null | undefined>,

		/** The employee secrets' value */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeSecretEmployeeSecret1FormGroup() {
		return new FormGroup<EmployeeSecretEmployeeSecret1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeSummary {
		EmployeeSummary1?: EmployeeSummaryEmployeeSummary1;
	}
	export interface EmployeeSummaryFormProperties {
	}
	export function CreateEmployeeSummaryFormGroup() {
		return new FormGroup<EmployeeSummaryFormProperties>({
		});

	}

	export interface EmployeeSummaryEmployeeSummary1 {

		/** The employee summarys' code */
		Code?: string | null;

		/**
		 * The employee summarys' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The employee summarys' employee link */
		EmployeeLink?: EmployeeSummaryEmployeeSummary1EmployeeLink;

		/** The employee summarys' employer link */
		EmployerLink?: EmployeeSummaryEmployeeSummary1EmployerLink;

		/** The employee summarys' first name */
		FirstName?: string | null;

		/** The employee summarys' initials */
		Initials?: string | null;

		/** The employee summarys' last name */
		LastName?: string | null;

		/**
		 * The employee summarys' last pay day
		 * Type: DateOnly
		 */
		LastPayDay?: Date | null;

		/** The employee summarys' last pay day schedule */
		LastPayDaySchedule?: string | null;

		/**
		 * The employee summarys' last pay day tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LastPayDayTaxYear?: number | null;

		/**
		 * The employee summarys' leaving date
		 * Type: DateOnly
		 */
		LeavingDate?: Date | null;

		/** The employee summarys' meta data */
		MetaData?: string | null;

		/**
		 * The employee summarys' next pay day
		 * Type: DateOnly
		 */
		NextPayDay?: Date | null;

		/**
		 * The employee summarys' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The employee summarys' ni letter */
		NiLetter?: string | null;

		/** The employee summarys' ni number */
		NiNumber?: string | null;

		/** The employee summarys' pay schedule link */
		PayScheduleLink?: EmployeeSummaryEmployeeSummary1PayScheduleLink;

		/** The employee summarys' pay schedule name */
		PayScheduleName?: string | null;

		/**
		 * The employee summarys' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/**
		 * The employee summarys' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;

		/** The employee summarys' status */
		Status?: string | null;

		/** The employee summarys' tax basis */
		TaxBasis?: EmployeeSummaryEmployeeSummary1TaxBasis | null;

		/** The employee summarys' tax code */
		TaxCode?: string | null;

		/** The employee summarys' title */
		Title?: string | null;

		/** The employee summarys' unique key */
		UniqueKey?: string | null;
	}
	export interface EmployeeSummaryEmployeeSummary1FormProperties {

		/** The employee summarys' code */
		Code: FormControl<string | null | undefined>,

		/**
		 * The employee summarys' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The employee summarys' first name */
		FirstName: FormControl<string | null | undefined>,

		/** The employee summarys' initials */
		Initials: FormControl<string | null | undefined>,

		/** The employee summarys' last name */
		LastName: FormControl<string | null | undefined>,

		/**
		 * The employee summarys' last pay day
		 * Type: DateOnly
		 */
		LastPayDay: FormControl<Date | null | undefined>,

		/** The employee summarys' last pay day schedule */
		LastPayDaySchedule: FormControl<string | null | undefined>,

		/**
		 * The employee summarys' last pay day tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LastPayDayTaxYear: FormControl<number | null | undefined>,

		/**
		 * The employee summarys' leaving date
		 * Type: DateOnly
		 */
		LeavingDate: FormControl<Date | null | undefined>,

		/** The employee summarys' meta data */
		MetaData: FormControl<string | null | undefined>,

		/**
		 * The employee summarys' next pay day
		 * Type: DateOnly
		 */
		NextPayDay: FormControl<Date | null | undefined>,

		/**
		 * The employee summarys' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The employee summarys' ni letter */
		NiLetter: FormControl<string | null | undefined>,

		/** The employee summarys' ni number */
		NiNumber: FormControl<string | null | undefined>,

		/** The employee summarys' pay schedule name */
		PayScheduleName: FormControl<string | null | undefined>,

		/**
		 * The employee summarys' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/**
		 * The employee summarys' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,

		/** The employee summarys' status */
		Status: FormControl<string | null | undefined>,

		/** The employee summarys' tax basis */
		TaxBasis: FormControl<EmployeeSummaryEmployeeSummary1TaxBasis | null | undefined>,

		/** The employee summarys' tax code */
		TaxCode: FormControl<string | null | undefined>,

		/** The employee summarys' title */
		Title: FormControl<string | null | undefined>,

		/** The employee summarys' unique key */
		UniqueKey: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeSummaryEmployeeSummary1FormGroup() {
		return new FormGroup<EmployeeSummaryEmployeeSummary1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Initials: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			LastPayDay: new FormControl<Date | null | undefined>(undefined),
			LastPayDaySchedule: new FormControl<string | null | undefined>(undefined),
			LastPayDayTaxYear: new FormControl<number | null | undefined>(undefined),
			LeavingDate: new FormControl<Date | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			NextPayDay: new FormControl<Date | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			NiLetter: new FormControl<string | null | undefined>(undefined),
			NiNumber: new FormControl<string | null | undefined>(undefined),
			PayScheduleName: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TaxBasis: new FormControl<EmployeeSummaryEmployeeSummary1TaxBasis | null | undefined>(undefined),
			TaxCode: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			UniqueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeSummaryEmployeeSummary1EmployeeLink {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface EmployeeSummaryEmployeeSummary1EmployeeLinkFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateEmployeeSummaryEmployeeSummary1EmployeeLinkFormGroup() {
		return new FormGroup<EmployeeSummaryEmployeeSummary1EmployeeLinkFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeSummaryEmployeeSummary1EmployerLink {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface EmployeeSummaryEmployeeSummary1EmployerLinkFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateEmployeeSummaryEmployeeSummary1EmployerLinkFormGroup() {
		return new FormGroup<EmployeeSummaryEmployeeSummary1EmployerLinkFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeSummaryEmployeeSummary1PayScheduleLink {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface EmployeeSummaryEmployeeSummary1PayScheduleLinkFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateEmployeeSummaryEmployeeSummary1PayScheduleLinkFormGroup() {
		return new FormGroup<EmployeeSummaryEmployeeSummary1PayScheduleLinkFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeSummaryEmployeeSummary1TaxBasis { Cumulative = 'Cumulative', Week1Month1 = 'Week1Month1' }

	export interface Employer {
		Employer1?: EmployerEmployer1;
	}
	export interface EmployerFormProperties {
	}
	export function CreateEmployerFormGroup() {
		return new FormGroup<EmployerFormProperties>({
		});

	}

	export interface EmployerEmployer1 {

		/** The employers' address */
		Address?: EmployerEmployer1Address;

		/**
		 * The employers' apprenticeship levy allowance
		 * Type: double
		 */
		ApprenticeshipLevyAllowance?: number | null;

		/** The employers' auto enrolment */
		AutoEnrolment?: EmployerEmployer1AutoEnrolment;

		/** The employers' bacs service user number */
		BacsServiceUserNumber?: string | null;

		/** The employers' bank account */
		BankAccount?: EmployerEmployer1BankAccount;

		/** The employers' calculate apprenticeship levy */
		CalculateApprenticeshipLevy?: boolean | null;

		/** The employers' claim employment allowance */
		ClaimEmploymentAllowance?: boolean | null;

		/** The employers' claim small employer relief */
		ClaimSmallEmployerRelief?: boolean | null;

		/**
		 * The employers' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The employers' hmrc settings */
		HmrcSettings?: EmployerEmployer1HmrcSettings;

		/** The employers' meta data */
		MetaData?: string | null;

		/** The employers' name */
		Name?: string | null;

		/**
		 * The employers' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The employers' region */
		Region?: EmployeeEmployee1Region | null;

		/**
		 * The employers' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The employers' rule exclusions */
		RuleExclusions?: EmployeeEmployee1RuleExclusions | null;

		/** The employers' territory */
		Territory?: EmployeeEmployee1Territory | null;
	}
	export interface EmployerEmployer1FormProperties {

		/**
		 * The employers' apprenticeship levy allowance
		 * Type: double
		 */
		ApprenticeshipLevyAllowance: FormControl<number | null | undefined>,

		/** The employers' bacs service user number */
		BacsServiceUserNumber: FormControl<string | null | undefined>,

		/** The employers' calculate apprenticeship levy */
		CalculateApprenticeshipLevy: FormControl<boolean | null | undefined>,

		/** The employers' claim employment allowance */
		ClaimEmploymentAllowance: FormControl<boolean | null | undefined>,

		/** The employers' claim small employer relief */
		ClaimSmallEmployerRelief: FormControl<boolean | null | undefined>,

		/**
		 * The employers' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The employers' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The employers' name */
		Name: FormControl<string | null | undefined>,

		/**
		 * The employers' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The employers' region */
		Region: FormControl<EmployeeEmployee1Region | null | undefined>,

		/**
		 * The employers' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The employers' rule exclusions */
		RuleExclusions: FormControl<EmployeeEmployee1RuleExclusions | null | undefined>,

		/** The employers' territory */
		Territory: FormControl<EmployeeEmployee1Territory | null | undefined>,
	}
	export function CreateEmployerEmployer1FormGroup() {
		return new FormGroup<EmployerEmployer1FormProperties>({
			ApprenticeshipLevyAllowance: new FormControl<number | null | undefined>(undefined),
			BacsServiceUserNumber: new FormControl<string | null | undefined>(undefined),
			CalculateApprenticeshipLevy: new FormControl<boolean | null | undefined>(undefined),
			ClaimEmploymentAllowance: new FormControl<boolean | null | undefined>(undefined),
			ClaimSmallEmployerRelief: new FormControl<boolean | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			Region: new FormControl<EmployeeEmployee1Region | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			RuleExclusions: new FormControl<EmployeeEmployee1RuleExclusions | null | undefined>(undefined),
			Territory: new FormControl<EmployeeEmployee1Territory | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1Address {

		/** The addresss' line 1 */
		Address1?: string | null;

		/** The addresss' line 2 */
		Address2?: string | null;

		/** The addresss' line 3 */
		Address3?: string | null;

		/** The addresss' line 4 */
		Address4?: string | null;

		/** The addresss' country */
		Country?: string | null;

		/** The addresss' postcode */
		Postcode?: string | null;
	}
	export interface EmployerEmployer1AddressFormProperties {

		/** The addresss' line 1 */
		Address1: FormControl<string | null | undefined>,

		/** The addresss' line 2 */
		Address2: FormControl<string | null | undefined>,

		/** The addresss' line 3 */
		Address3: FormControl<string | null | undefined>,

		/** The addresss' line 4 */
		Address4: FormControl<string | null | undefined>,

		/** The addresss' country */
		Country: FormControl<string | null | undefined>,

		/** The addresss' postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1AddressFormGroup() {
		return new FormGroup<EmployerEmployer1AddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1AutoEnrolment {

		/** The employer auto enrolments' pension */
		Pension?: EmployerEmployer1AutoEnrolmentPension;

		/**
		 * The employer auto enrolments' postponement date
		 * Type: DateOnly
		 */
		PostponementDate?: Date | null;

		/** The employer auto enrolments' primary address */
		PrimaryAddress?: EmployerEmployer1AutoEnrolmentPrimaryAddress;

		/** The employer auto enrolments' primary email */
		PrimaryEmail?: string | null;

		/** The employer auto enrolments' primary first name */
		PrimaryFirstName?: string | null;

		/** The employer auto enrolments' primary job title */
		PrimaryJobTitle?: string | null;

		/** The employer auto enrolments' primary last name */
		PrimaryLastName?: string | null;

		/** The employer auto enrolments' primary telephone */
		PrimaryTelephone?: string | null;

		/**
		 * The employer auto enrolments' re enrolment day offset
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReEnrolmentDayOffset?: number | null;

		/**
		 * The employer auto enrolments' re enrolment month offset
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReEnrolmentMonthOffset?: number | null;

		/** The employer auto enrolments' recent opt out re enrolment excluded */
		RecentOptOutReEnrolmentExcluded?: boolean | null;

		/** The employer auto enrolments' secondary address */
		SecondaryAddress?: EmployerEmployer1AutoEnrolmentSecondaryAddress;

		/** The employer auto enrolments' secondary email */
		SecondaryEmail?: string | null;

		/** The employer auto enrolments' secondary first name */
		SecondaryFirstName?: string | null;

		/** The employer auto enrolments' secondary job title */
		SecondaryJobTitle?: string | null;

		/** The employer auto enrolments' secondary last name */
		SecondaryLastName?: string | null;

		/** The employer auto enrolments' secondary telephone */
		SecondaryTelephone?: string | null;

		/**
		 * The employer auto enrolments' staging date
		 * Type: DateOnly
		 */
		StagingDate?: Date | null;
	}
	export interface EmployerEmployer1AutoEnrolmentFormProperties {

		/**
		 * The employer auto enrolments' postponement date
		 * Type: DateOnly
		 */
		PostponementDate: FormControl<Date | null | undefined>,

		/** The employer auto enrolments' primary email */
		PrimaryEmail: FormControl<string | null | undefined>,

		/** The employer auto enrolments' primary first name */
		PrimaryFirstName: FormControl<string | null | undefined>,

		/** The employer auto enrolments' primary job title */
		PrimaryJobTitle: FormControl<string | null | undefined>,

		/** The employer auto enrolments' primary last name */
		PrimaryLastName: FormControl<string | null | undefined>,

		/** The employer auto enrolments' primary telephone */
		PrimaryTelephone: FormControl<string | null | undefined>,

		/**
		 * The employer auto enrolments' re enrolment day offset
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReEnrolmentDayOffset: FormControl<number | null | undefined>,

		/**
		 * The employer auto enrolments' re enrolment month offset
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReEnrolmentMonthOffset: FormControl<number | null | undefined>,

		/** The employer auto enrolments' recent opt out re enrolment excluded */
		RecentOptOutReEnrolmentExcluded: FormControl<boolean | null | undefined>,

		/** The employer auto enrolments' secondary email */
		SecondaryEmail: FormControl<string | null | undefined>,

		/** The employer auto enrolments' secondary first name */
		SecondaryFirstName: FormControl<string | null | undefined>,

		/** The employer auto enrolments' secondary job title */
		SecondaryJobTitle: FormControl<string | null | undefined>,

		/** The employer auto enrolments' secondary last name */
		SecondaryLastName: FormControl<string | null | undefined>,

		/** The employer auto enrolments' secondary telephone */
		SecondaryTelephone: FormControl<string | null | undefined>,

		/**
		 * The employer auto enrolments' staging date
		 * Type: DateOnly
		 */
		StagingDate: FormControl<Date | null | undefined>,
	}
	export function CreateEmployerEmployer1AutoEnrolmentFormGroup() {
		return new FormGroup<EmployerEmployer1AutoEnrolmentFormProperties>({
			PostponementDate: new FormControl<Date | null | undefined>(undefined),
			PrimaryEmail: new FormControl<string | null | undefined>(undefined),
			PrimaryFirstName: new FormControl<string | null | undefined>(undefined),
			PrimaryJobTitle: new FormControl<string | null | undefined>(undefined),
			PrimaryLastName: new FormControl<string | null | undefined>(undefined),
			PrimaryTelephone: new FormControl<string | null | undefined>(undefined),
			ReEnrolmentDayOffset: new FormControl<number | null | undefined>(undefined),
			ReEnrolmentMonthOffset: new FormControl<number | null | undefined>(undefined),
			RecentOptOutReEnrolmentExcluded: new FormControl<boolean | null | undefined>(undefined),
			SecondaryEmail: new FormControl<string | null | undefined>(undefined),
			SecondaryFirstName: new FormControl<string | null | undefined>(undefined),
			SecondaryJobTitle: new FormControl<string | null | undefined>(undefined),
			SecondaryLastName: new FormControl<string | null | undefined>(undefined),
			SecondaryTelephone: new FormControl<string | null | undefined>(undefined),
			StagingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1AutoEnrolmentPension {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface EmployerEmployer1AutoEnrolmentPensionFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1AutoEnrolmentPensionFormGroup() {
		return new FormGroup<EmployerEmployer1AutoEnrolmentPensionFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1AutoEnrolmentPrimaryAddress {

		/** The addresss' line 1 */
		Address1?: string | null;

		/** The addresss' line 2 */
		Address2?: string | null;

		/** The addresss' line 3 */
		Address3?: string | null;

		/** The addresss' line 4 */
		Address4?: string | null;

		/** The addresss' country */
		Country?: string | null;

		/** The addresss' postcode */
		Postcode?: string | null;
	}
	export interface EmployerEmployer1AutoEnrolmentPrimaryAddressFormProperties {

		/** The addresss' line 1 */
		Address1: FormControl<string | null | undefined>,

		/** The addresss' line 2 */
		Address2: FormControl<string | null | undefined>,

		/** The addresss' line 3 */
		Address3: FormControl<string | null | undefined>,

		/** The addresss' line 4 */
		Address4: FormControl<string | null | undefined>,

		/** The addresss' country */
		Country: FormControl<string | null | undefined>,

		/** The addresss' postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1AutoEnrolmentPrimaryAddressFormGroup() {
		return new FormGroup<EmployerEmployer1AutoEnrolmentPrimaryAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1AutoEnrolmentSecondaryAddress {

		/** The addresss' line 1 */
		Address1?: string | null;

		/** The addresss' line 2 */
		Address2?: string | null;

		/** The addresss' line 3 */
		Address3?: string | null;

		/** The addresss' line 4 */
		Address4?: string | null;

		/** The addresss' country */
		Country?: string | null;

		/** The addresss' postcode */
		Postcode?: string | null;
	}
	export interface EmployerEmployer1AutoEnrolmentSecondaryAddressFormProperties {

		/** The addresss' line 1 */
		Address1: FormControl<string | null | undefined>,

		/** The addresss' line 2 */
		Address2: FormControl<string | null | undefined>,

		/** The addresss' line 3 */
		Address3: FormControl<string | null | undefined>,

		/** The addresss' line 4 */
		Address4: FormControl<string | null | undefined>,

		/** The addresss' country */
		Country: FormControl<string | null | undefined>,

		/** The addresss' postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1AutoEnrolmentSecondaryAddressFormGroup() {
		return new FormGroup<EmployerEmployer1AutoEnrolmentSecondaryAddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1BankAccount {

		/** The bank accounts' account name */
		AccountName?: string | null;

		/** The bank accounts' account number */
		AccountNumber?: string | null;

		/** The bank accounts' branch name */
		BranchName?: string | null;

		/** The bank accounts' reference */
		Reference?: string | null;

		/** The bank accounts' sort code */
		SortCode?: string | null;
	}
	export interface EmployerEmployer1BankAccountFormProperties {

		/** The bank accounts' account name */
		AccountName: FormControl<string | null | undefined>,

		/** The bank accounts' account number */
		AccountNumber: FormControl<string | null | undefined>,

		/** The bank accounts' branch name */
		BranchName: FormControl<string | null | undefined>,

		/** The bank accounts' reference */
		Reference: FormControl<string | null | undefined>,

		/** The bank accounts' sort code */
		SortCode: FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1BankAccountFormGroup() {
		return new FormGroup<EmployerEmployer1BankAccountFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			SortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerEmployer1HmrcSettings {

		/** The hmrc settingss' accounting office ref */
		AccountingOfficeRef?: string | null;

		/** The hmrc settingss' c o t a x ref */
		COTAXRef?: string | null;

		/** The hmrc settingss' contact email */
		ContactEmail?: string | null;

		/** The hmrc settingss' contact fax */
		ContactFax?: string | null;

		/** The hmrc settingss' contact first name */
		ContactFirstName?: string | null;

		/** The hmrc settingss' contact last name */
		ContactLastName?: string | null;

		/** The hmrc settingss' contact telephone */
		ContactTelephone?: string | null;

		/**
		 * The hmrc settingss' employment allowance override
		 * Type: double
		 */
		EmploymentAllowanceOverride?: number | null;

		/** The hmrc settingss' password */
		Password?: string | null;

		/** The hmrc settingss' s a u t r */
		SAUTR?: string | null;

		/** The hmrc settingss' sender */
		Sender?: EmployerEmployer1HmrcSettingsSender | null;

		/** The hmrc settingss' sender id */
		SenderId?: string | null;

		/** The hmrc settingss' state aid sector */
		StateAidSector?: EmployerEmployer1HmrcSettingsStateAidSector | null;

		/** The hmrc settingss' tax office number */
		TaxOfficeNumber?: string | null;

		/** The hmrc settingss' tax office reference */
		TaxOfficeReference?: string | null;
	}
	export interface EmployerEmployer1HmrcSettingsFormProperties {

		/** The hmrc settingss' accounting office ref */
		AccountingOfficeRef: FormControl<string | null | undefined>,

		/** The hmrc settingss' c o t a x ref */
		COTAXRef: FormControl<string | null | undefined>,

		/** The hmrc settingss' contact email */
		ContactEmail: FormControl<string | null | undefined>,

		/** The hmrc settingss' contact fax */
		ContactFax: FormControl<string | null | undefined>,

		/** The hmrc settingss' contact first name */
		ContactFirstName: FormControl<string | null | undefined>,

		/** The hmrc settingss' contact last name */
		ContactLastName: FormControl<string | null | undefined>,

		/** The hmrc settingss' contact telephone */
		ContactTelephone: FormControl<string | null | undefined>,

		/**
		 * The hmrc settingss' employment allowance override
		 * Type: double
		 */
		EmploymentAllowanceOverride: FormControl<number | null | undefined>,

		/** The hmrc settingss' password */
		Password: FormControl<string | null | undefined>,

		/** The hmrc settingss' s a u t r */
		SAUTR: FormControl<string | null | undefined>,

		/** The hmrc settingss' sender */
		Sender: FormControl<EmployerEmployer1HmrcSettingsSender | null | undefined>,

		/** The hmrc settingss' sender id */
		SenderId: FormControl<string | null | undefined>,

		/** The hmrc settingss' state aid sector */
		StateAidSector: FormControl<EmployerEmployer1HmrcSettingsStateAidSector | null | undefined>,

		/** The hmrc settingss' tax office number */
		TaxOfficeNumber: FormControl<string | null | undefined>,

		/** The hmrc settingss' tax office reference */
		TaxOfficeReference: FormControl<string | null | undefined>,
	}
	export function CreateEmployerEmployer1HmrcSettingsFormGroup() {
		return new FormGroup<EmployerEmployer1HmrcSettingsFormProperties>({
			AccountingOfficeRef: new FormControl<string | null | undefined>(undefined),
			COTAXRef: new FormControl<string | null | undefined>(undefined),
			ContactEmail: new FormControl<string | null | undefined>(undefined),
			ContactFax: new FormControl<string | null | undefined>(undefined),
			ContactFirstName: new FormControl<string | null | undefined>(undefined),
			ContactLastName: new FormControl<string | null | undefined>(undefined),
			ContactTelephone: new FormControl<string | null | undefined>(undefined),
			EmploymentAllowanceOverride: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			SAUTR: new FormControl<string | null | undefined>(undefined),
			Sender: new FormControl<EmployerEmployer1HmrcSettingsSender | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			StateAidSector: new FormControl<EmployerEmployer1HmrcSettingsStateAidSector | null | undefined>(undefined),
			TaxOfficeNumber: new FormControl<string | null | undefined>(undefined),
			TaxOfficeReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployerEmployer1HmrcSettingsSender { Employer = 'Employer', Individual = 'Individual', Company = 'Company', Agent = 'Agent', Bureau = 'Bureau', Partnership = 'Partnership', Trust = 'Trust', Government = 'Government', ActingInCapacity = 'ActingInCapacity', Other = 'Other' }

	export enum EmployerEmployer1HmrcSettingsStateAidSector { Agriculture = 'Agriculture', FisheriesAquaculture = 'FisheriesAquaculture', RoadTransport = 'RoadTransport', Industrial = 'Industrial', NotApplicable = 'NotApplicable' }

	export interface EmployerSecret {
		EmployerSecret1?: EmployerSecretEmployerSecret1;
	}
	export interface EmployerSecretFormProperties {
	}
	export function CreateEmployerSecretFormGroup() {
		return new FormGroup<EmployerSecretFormProperties>({
		});

	}

	export interface EmployerSecretEmployerSecret1 {

		/** The employer secrets' created */
		Created?: Date | null;

		/** The employer secrets' name */
		Name?: string | null;

		/** The employer secrets' value */
		Value?: string | null;
	}
	export interface EmployerSecretEmployerSecret1FormProperties {

		/** The employer secrets' created */
		Created: FormControl<Date | null | undefined>,

		/** The employer secrets' name */
		Name: FormControl<string | null | undefined>,

		/** The employer secrets' value */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEmployerSecretEmployerSecret1FormGroup() {
		return new FormGroup<EmployerSecretEmployerSecret1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployerSummary {
		EmployerSummary1?: EmployerSummaryEmployerSummary1;
	}
	export interface EmployerSummaryFormProperties {
	}
	export function CreateEmployerSummaryFormGroup() {
		return new FormGroup<EmployerSummaryFormProperties>({
		});

	}

	export interface EmployerSummaryEmployerSummary1 {

		/**
		 * The employer summarys' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The employer summarys' meta data */
		MetaData?: string | null;

		/** The employer summarys' name */
		Name?: string | null;

		/**
		 * The employer summarys' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/**
		 * The employer summarys' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The employer summarys' unique key */
		UniqueKey?: string | null;
	}
	export interface EmployerSummaryEmployerSummary1FormProperties {

		/**
		 * The employer summarys' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The employer summarys' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The employer summarys' name */
		Name: FormControl<string | null | undefined>,

		/**
		 * The employer summarys' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/**
		 * The employer summarys' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The employer summarys' unique key */
		UniqueKey: FormControl<string | null | undefined>,
	}
	export function CreateEmployerSummaryEmployerSummary1FormGroup() {
		return new FormGroup<EmployerSummaryEmployerSummary1FormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			UniqueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorModel {
		ErrorModel1?: ErrorModelErrorModel1;
	}
	export interface ErrorModelFormProperties {
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
		});

	}

	export interface ErrorModelErrorModel1 {

		/** The error models' description */
		Description?: string | null;

		/** The error models' error category */
		ErrorCategory?: ErrorModelErrorModel1ErrorCategory | null;

		/** The error models' errors */
		Errors?: ErrorModelErrorModel1Errors;
	}
	export interface ErrorModelErrorModel1FormProperties {

		/** The error models' description */
		Description: FormControl<string | null | undefined>,

		/** The error models' error category */
		ErrorCategory: FormControl<ErrorModelErrorModel1ErrorCategory | null | undefined>,
	}
	export function CreateErrorModelErrorModel1FormGroup() {
		return new FormGroup<ErrorModelErrorModel1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ErrorCategory: new FormControl<ErrorModelErrorModel1ErrorCategory | null | undefined>(undefined),
		});

	}

	export enum ErrorModelErrorModel1ErrorCategory { General = 'General', NotFound = 'NotFound', NotAuthorised = 'NotAuthorised', ValidationFailure = 'ValidationFailure' }

	export interface ErrorModelErrorModel1Errors {
		Error?: Array<string>;
	}
	export interface ErrorModelErrorModel1ErrorsFormProperties {
	}
	export function CreateErrorModelErrorModel1ErrorsFormGroup() {
		return new FormGroup<ErrorModelErrorModel1ErrorsFormProperties>({
		});

	}

	export interface HealthCheck {
		HealthCheck1?: HealthCheckHealthCheck1;
	}
	export interface HealthCheckFormProperties {
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
		});

	}

	export interface HealthCheckHealthCheck1 {

		/** The health checks' info */
		Info?: string | null;

		/** The health checks' version */
		Version?: string | null;
	}
	export interface HealthCheckHealthCheck1FormProperties {

		/** The health checks' info */
		Info: FormControl<string | null | undefined>,

		/** The health checks' version */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckHealthCheck1FormGroup() {
		return new FormGroup<HealthCheckHealthCheck1FormProperties>({
			Info: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HolidayScheme {
		HolidayScheme1?: HolidaySchemeHolidayScheme1;
	}
	export interface HolidaySchemeFormProperties {
	}
	export function CreateHolidaySchemeFormGroup() {
		return new FormGroup<HolidaySchemeFormProperties>({
		});

	}

	export interface HolidaySchemeHolidayScheme1 {

		/** The holiday schemes' accrual pay codes */
		AccrualPayCodes?: HolidaySchemeHolidayScheme1AccrualPayCodes;

		/** The holiday schemes' allow exceed annual entitlement */
		AllowExceedAnnualEntitlement?: boolean | null;

		/** The holiday schemes' allow negative balance */
		AllowNegativeBalance?: boolean | null;

		/**
		 * The holiday schemes' annual entitlement weeks
		 * Type: double
		 */
		AnnualEntitlementWeeks?: number | null;

		/** The holiday schemes' bank holiday inclusive */
		BankHolidayInclusive?: boolean | null;

		/** The holiday schemes' code */
		Code?: string | null;

		/**
		 * The holiday schemes' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/**
		 * The holiday schemes' max carry over days
		 * Type: double
		 */
		MaxCarryOverDays?: number | null;

		/**
		 * The holiday schemes' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The holiday schemes' offset payment */
		OffsetPayment?: boolean | null;

		/**
		 * The holiday schemes' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/**
		 * The holiday schemes' scheme ceased date
		 * Type: DateOnly
		 */
		SchemeCeasedDate?: Date | null;

		/** The holiday schemes' scheme key */
		SchemeKey?: string | null;

		/** The holiday schemes' scheme name */
		SchemeName?: string | null;

		/**
		 * The holiday schemes' year start day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		YearStartDay?: number | null;

		/**
		 * The holiday schemes' year start month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		YearStartMonth?: number | null;
	}
	export interface HolidaySchemeHolidayScheme1FormProperties {

		/** The holiday schemes' allow exceed annual entitlement */
		AllowExceedAnnualEntitlement: FormControl<boolean | null | undefined>,

		/** The holiday schemes' allow negative balance */
		AllowNegativeBalance: FormControl<boolean | null | undefined>,

		/**
		 * The holiday schemes' annual entitlement weeks
		 * Type: double
		 */
		AnnualEntitlementWeeks: FormControl<number | null | undefined>,

		/** The holiday schemes' bank holiday inclusive */
		BankHolidayInclusive: FormControl<boolean | null | undefined>,

		/** The holiday schemes' code */
		Code: FormControl<string | null | undefined>,

		/**
		 * The holiday schemes' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/**
		 * The holiday schemes' max carry over days
		 * Type: double
		 */
		MaxCarryOverDays: FormControl<number | null | undefined>,

		/**
		 * The holiday schemes' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The holiday schemes' offset payment */
		OffsetPayment: FormControl<boolean | null | undefined>,

		/**
		 * The holiday schemes' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/**
		 * The holiday schemes' scheme ceased date
		 * Type: DateOnly
		 */
		SchemeCeasedDate: FormControl<Date | null | undefined>,

		/** The holiday schemes' scheme key */
		SchemeKey: FormControl<string | null | undefined>,

		/** The holiday schemes' scheme name */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * The holiday schemes' year start day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		YearStartDay: FormControl<number | null | undefined>,

		/**
		 * The holiday schemes' year start month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		YearStartMonth: FormControl<number | null | undefined>,
	}
	export function CreateHolidaySchemeHolidayScheme1FormGroup() {
		return new FormGroup<HolidaySchemeHolidayScheme1FormProperties>({
			AllowExceedAnnualEntitlement: new FormControl<boolean | null | undefined>(undefined),
			AllowNegativeBalance: new FormControl<boolean | null | undefined>(undefined),
			AnnualEntitlementWeeks: new FormControl<number | null | undefined>(undefined),
			BankHolidayInclusive: new FormControl<boolean | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			MaxCarryOverDays: new FormControl<number | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			OffsetPayment: new FormControl<boolean | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			SchemeCeasedDate: new FormControl<Date | null | undefined>(undefined),
			SchemeKey: new FormControl<string | null | undefined>(undefined),
			SchemeName: new FormControl<string | null | undefined>(undefined),
			YearStartDay: new FormControl<number | null | undefined>(undefined),
			YearStartMonth: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface HolidaySchemeHolidayScheme1AccrualPayCodes {
		PayCode?: Array<string>;
	}
	export interface HolidaySchemeHolidayScheme1AccrualPayCodesFormProperties {
	}
	export function CreateHolidaySchemeHolidayScheme1AccrualPayCodesFormGroup() {
		return new FormGroup<HolidaySchemeHolidayScheme1AccrualPayCodesFormProperties>({
		});

	}

	export interface JobInfo {
		JobInfo1?: JobInfoJobInfo1;
	}
	export interface JobInfoFormProperties {
	}
	export function CreateJobInfoFormGroup() {
		return new FormGroup<JobInfoFormProperties>({
		});

	}

	export interface JobInfoJobInfo1 {

		/** The job infos' created */
		Created?: Date | null;

		/** The job infos' employer key */
		EmployerKey?: string | null;

		/** The job infos' errors */
		Errors?: JobInfoJobInfo1Errors;

		/** The job infos' holding date */
		HoldingDate?: Date | null;

		/** The job infos' job id */
		JobId?: string | null;

		/** The job infos' job status */
		JobStatus?: JobInfoJobInfo1JobStatus | null;

		/** The job infos' job type */
		JobType?: string | null;

		/** The job infos' last updated */
		LastUpdated?: Date | null;

		/**
		 * The job infos' progress
		 * Type: double
		 */
		Progress?: number | null;
	}
	export interface JobInfoJobInfo1FormProperties {

		/** The job infos' created */
		Created: FormControl<Date | null | undefined>,

		/** The job infos' employer key */
		EmployerKey: FormControl<string | null | undefined>,

		/** The job infos' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The job infos' job id */
		JobId: FormControl<string | null | undefined>,

		/** The job infos' job status */
		JobStatus: FormControl<JobInfoJobInfo1JobStatus | null | undefined>,

		/** The job infos' job type */
		JobType: FormControl<string | null | undefined>,

		/** The job infos' last updated */
		LastUpdated: FormControl<Date | null | undefined>,

		/**
		 * The job infos' progress
		 * Type: double
		 */
		Progress: FormControl<number | null | undefined>,
	}
	export function CreateJobInfoJobInfo1FormGroup() {
		return new FormGroup<JobInfoJobInfo1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			EmployerKey: new FormControl<string | null | undefined>(undefined),
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobInfoJobInfo1JobStatus | null | undefined>(undefined),
			JobType: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobInfoJobInfo1Errors {
		Error?: Array<string>;
	}
	export interface JobInfoJobInfo1ErrorsFormProperties {
	}
	export function CreateJobInfoJobInfo1ErrorsFormGroup() {
		return new FormGroup<JobInfoJobInfo1ErrorsFormProperties>({
		});

	}

	export enum JobInfoJobInfo1JobStatus { New = 'New', Pending = 'Pending', InProgress = 'InProgress', Success = 'Success', Failed = 'Failed', OnHold = 'OnHold' }

	export interface JournalExpressionDataTable {
		JournalExpressionDataTable1?: JournalExpressionDataTableJournalExpressionDataTable1;
	}
	export interface JournalExpressionDataTableFormProperties {
	}
	export function CreateJournalExpressionDataTableFormGroup() {
		return new FormGroup<JournalExpressionDataTableFormProperties>({
		});

	}

	export interface JournalExpressionDataTableJournalExpressionDataTable1 {

		/** The journal expression data tables' table name */
		TableName?: string | null;
	}
	export interface JournalExpressionDataTableJournalExpressionDataTable1FormProperties {

		/** The journal expression data tables' table name */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateJournalExpressionDataTableJournalExpressionDataTable1FormGroup() {
		return new FormGroup<JournalExpressionDataTableJournalExpressionDataTable1FormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JournalInstruction {
		JournalInstruction1?: JournalInstructionJournalInstruction1;
	}
	export interface JournalInstructionFormProperties {
	}
	export function CreateJournalInstructionFormGroup() {
		return new FormGroup<JournalInstructionFormProperties>({
		});

	}

	export interface JournalInstructionJournalInstruction1 {

		/** The journal instructions' accounting type */
		AccountingType?: JournalInstructionJournalInstruction1AccountingType | null;

		/** The journal instructions' description */
		Description?: string | null;

		/**
		 * The journal instructions' end date
		 * Type: DateOnly
		 */
		EndDate?: Date | null;

		/** The journal instructions' expression */
		Expression?: string | null;

		/** The journal instructions' journal line tag */
		JournalLineTag?: string | null;

		/** The journal instructions' ledger target */
		LedgerTarget?: string | null;

		/** The journal instructions' nom code */
		NomCode?: string | null;

		/**
		 * The journal instructions' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;

		/** The journal instructions' sub nom code */
		SubNomCode?: string | null;
	}
	export interface JournalInstructionJournalInstruction1FormProperties {

		/** The journal instructions' accounting type */
		AccountingType: FormControl<JournalInstructionJournalInstruction1AccountingType | null | undefined>,

		/** The journal instructions' description */
		Description: FormControl<string | null | undefined>,

		/**
		 * The journal instructions' end date
		 * Type: DateOnly
		 */
		EndDate: FormControl<Date | null | undefined>,

		/** The journal instructions' expression */
		Expression: FormControl<string | null | undefined>,

		/** The journal instructions' journal line tag */
		JournalLineTag: FormControl<string | null | undefined>,

		/** The journal instructions' ledger target */
		LedgerTarget: FormControl<string | null | undefined>,

		/** The journal instructions' nom code */
		NomCode: FormControl<string | null | undefined>,

		/**
		 * The journal instructions' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,

		/** The journal instructions' sub nom code */
		SubNomCode: FormControl<string | null | undefined>,
	}
	export function CreateJournalInstructionJournalInstruction1FormGroup() {
		return new FormGroup<JournalInstructionJournalInstruction1FormProperties>({
			AccountingType: new FormControl<JournalInstructionJournalInstruction1AccountingType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			JournalLineTag: new FormControl<string | null | undefined>(undefined),
			LedgerTarget: new FormControl<string | null | undefined>(undefined),
			NomCode: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			SubNomCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JournalInstructionJournalInstruction1AccountingType { Credit = 'Credit', Debit = 'Debit' }

	export interface JournalLine {
		JournalLine1?: JournalLineJournalLine1;
	}
	export interface JournalLineFormProperties {
	}
	export function CreateJournalLineFormGroup() {
		return new FormGroup<JournalLineFormProperties>({
		});

	}

	export interface JournalLineJournalLine1 {

		/**
		 * The journal lines' credit
		 * Type: double
		 */
		Credit?: number | null;

		/**
		 * The journal lines' debit
		 * Type: double
		 */
		Debit?: number | null;

		/** The journal lines' description */
		Description?: string | null;

		/** The journal lines' employee */
		Employee?: JournalLineJournalLine1Employee;

		/** The journal lines' generated */
		Generated?: Date | null;

		/** The journal lines' grouping */
		Grouping?: string | null;

		/** The journal lines' ledger target */
		LedgerTarget?: string | null;

		/** The journal lines' nom code */
		NomCode?: string | null;

		/** The journal lines' pay frequency */
		PayFrequency?: JournalLineJournalLine1PayFrequency | null;

		/** The journal lines' pay run */
		PayRun?: JournalLineJournalLine1PayRun;

		/** The journal lines' sub contractor */
		SubContractor?: JournalLineJournalLine1SubContractor;

		/** The journal lines' sub nom code */
		SubNomCode?: string | null;

		/**
		 * The journal lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod?: number | null;

		/**
		 * The journal lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;
	}
	export interface JournalLineJournalLine1FormProperties {

		/**
		 * The journal lines' credit
		 * Type: double
		 */
		Credit: FormControl<number | null | undefined>,

		/**
		 * The journal lines' debit
		 * Type: double
		 */
		Debit: FormControl<number | null | undefined>,

		/** The journal lines' description */
		Description: FormControl<string | null | undefined>,

		/** The journal lines' generated */
		Generated: FormControl<Date | null | undefined>,

		/** The journal lines' grouping */
		Grouping: FormControl<string | null | undefined>,

		/** The journal lines' ledger target */
		LedgerTarget: FormControl<string | null | undefined>,

		/** The journal lines' nom code */
		NomCode: FormControl<string | null | undefined>,

		/** The journal lines' pay frequency */
		PayFrequency: FormControl<JournalLineJournalLine1PayFrequency | null | undefined>,

		/** The journal lines' sub nom code */
		SubNomCode: FormControl<string | null | undefined>,

		/**
		 * The journal lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod: FormControl<number | null | undefined>,

		/**
		 * The journal lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,
	}
	export function CreateJournalLineJournalLine1FormGroup() {
		return new FormGroup<JournalLineJournalLine1FormProperties>({
			Credit: new FormControl<number | null | undefined>(undefined),
			Debit: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Generated: new FormControl<Date | null | undefined>(undefined),
			Grouping: new FormControl<string | null | undefined>(undefined),
			LedgerTarget: new FormControl<string | null | undefined>(undefined),
			NomCode: new FormControl<string | null | undefined>(undefined),
			PayFrequency: new FormControl<JournalLineJournalLine1PayFrequency | null | undefined>(undefined),
			SubNomCode: new FormControl<string | null | undefined>(undefined),
			TaxPeriod: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JournalLineJournalLine1Employee {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface JournalLineJournalLine1EmployeeFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateJournalLineJournalLine1EmployeeFormGroup() {
		return new FormGroup<JournalLineJournalLine1EmployeeFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JournalLineJournalLine1PayFrequency { Weekly = 'Weekly', Monthly = 'Monthly', TwoWeekly = 'TwoWeekly', FourWeekly = 'FourWeekly', Yearly = 'Yearly' }

	export interface JournalLineJournalLine1PayRun {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface JournalLineJournalLine1PayRunFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateJournalLineJournalLine1PayRunFormGroup() {
		return new FormGroup<JournalLineJournalLine1PayRunFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JournalLineJournalLine1SubContractor {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface JournalLineJournalLine1SubContractorFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateJournalLineJournalLine1SubContractorFormGroup() {
		return new FormGroup<JournalLineJournalLine1SubContractorFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Link {
		Link1?: LinkLink1;
	}
	export interface LinkFormProperties {
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
		});

	}

	export interface LinkLink1 {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface LinkLink1FormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateLinkLink1FormGroup() {
		return new FormGroup<LinkLink1FormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkCollection {
		LinkCollection1?: LinkCollectionLinkCollection1;
	}
	export interface LinkCollectionFormProperties {
	}
	export function CreateLinkCollectionFormGroup() {
		return new FormGroup<LinkCollectionFormProperties>({
		});

	}

	export interface LinkCollectionLinkCollection1 {

		/** The link collections' links */
		Links?: LinkCollectionLinkCollection1Links;
	}
	export interface LinkCollectionLinkCollection1FormProperties {
	}
	export function CreateLinkCollectionLinkCollection1FormGroup() {
		return new FormGroup<LinkCollectionLinkCollection1FormProperties>({
		});

	}

	export interface LinkCollectionLinkCollection1Links {
		LinkCollectionLinkCollection1LinksLink?: Array<LinkCollectionLinkCollection1LinksLink>;
	}
	export interface LinkCollectionLinkCollection1LinksFormProperties {
	}
	export function CreateLinkCollectionLinkCollection1LinksFormGroup() {
		return new FormGroup<LinkCollectionLinkCollection1LinksFormProperties>({
		});

	}

	export interface LinkCollectionLinkCollection1LinksLink {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface LinkCollectionLinkCollection1LinksLinkFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateLinkCollectionLinkCollection1LinksLinkFormGroup() {
		return new FormGroup<LinkCollectionLinkCollection1LinksLinkFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NominalCode {
		NominalCode1?: NominalCodeNominalCode1;
	}
	export interface NominalCodeFormProperties {
	}
	export function CreateNominalCodeFormGroup() {
		return new FormGroup<NominalCodeFormProperties>({
		});

	}

	export interface NominalCodeNominalCode1 {

		/** The nominal codes' description */
		Description?: string | null;

		/** The nominal codes' key */
		Key?: string | null;
	}
	export interface NominalCodeNominalCode1FormProperties {

		/** The nominal codes' description */
		Description: FormControl<string | null | undefined>,

		/** The nominal codes' key */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateNominalCodeNominalCode1FormGroup() {
		return new FormGroup<NominalCodeNominalCode1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayCode {
		PayCode1?: PayCodePayCode1;
	}
	export interface PayCodeFormProperties {
	}
	export function CreatePayCodeFormGroup() {
		return new FormGroup<PayCodeFormProperties>({
		});

	}

	export interface PayCodePayCode1 {

		/** The pay codes' benefit */
		Benefit?: boolean | null;

		/** The pay codes' code */
		Code?: string | null;

		/** The pay codes' description */
		Description?: string | null;

		/**
		 * The pay codes' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The pay codes' meta data */
		MetaData?: string | null;

		/**
		 * The pay codes' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The pay codes' niable */
		Niable?: boolean | null;

		/** The pay codes' nominal code */
		NominalCode?: PayCodePayCode1NominalCode;

		/** The pay codes' non arrestable */
		NonArrestable?: boolean | null;

		/** The pay codes' notional */
		Notional?: boolean | null;

		/** The pay codes' readonly */
		Readonly?: boolean | null;

		/** The pay codes' region */
		Region?: EmployeeEmployee1Region | null;

		/**
		 * The pay codes' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The pay codes' taxable */
		Taxable?: boolean | null;

		/** The pay codes' territory */
		Territory?: EmployeeEmployee1Territory | null;

		/** The pay codes' type */
		Type?: PayCodePayCode1Type | null;
	}
	export interface PayCodePayCode1FormProperties {

		/** The pay codes' benefit */
		Benefit: FormControl<boolean | null | undefined>,

		/** The pay codes' code */
		Code: FormControl<string | null | undefined>,

		/** The pay codes' description */
		Description: FormControl<string | null | undefined>,

		/**
		 * The pay codes' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The pay codes' meta data */
		MetaData: FormControl<string | null | undefined>,

		/**
		 * The pay codes' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The pay codes' niable */
		Niable: FormControl<boolean | null | undefined>,

		/** The pay codes' non arrestable */
		NonArrestable: FormControl<boolean | null | undefined>,

		/** The pay codes' notional */
		Notional: FormControl<boolean | null | undefined>,

		/** The pay codes' readonly */
		Readonly: FormControl<boolean | null | undefined>,

		/** The pay codes' region */
		Region: FormControl<EmployeeEmployee1Region | null | undefined>,

		/**
		 * The pay codes' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The pay codes' taxable */
		Taxable: FormControl<boolean | null | undefined>,

		/** The pay codes' territory */
		Territory: FormControl<EmployeeEmployee1Territory | null | undefined>,

		/** The pay codes' type */
		Type: FormControl<PayCodePayCode1Type | null | undefined>,
	}
	export function CreatePayCodePayCode1FormGroup() {
		return new FormGroup<PayCodePayCode1FormProperties>({
			Benefit: new FormControl<boolean | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			Niable: new FormControl<boolean | null | undefined>(undefined),
			NonArrestable: new FormControl<boolean | null | undefined>(undefined),
			Notional: new FormControl<boolean | null | undefined>(undefined),
			Readonly: new FormControl<boolean | null | undefined>(undefined),
			Region: new FormControl<EmployeeEmployee1Region | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			Taxable: new FormControl<boolean | null | undefined>(undefined),
			Territory: new FormControl<EmployeeEmployee1Territory | null | undefined>(undefined),
			Type: new FormControl<PayCodePayCode1Type | null | undefined>(undefined),
		});

	}

	export interface PayCodePayCode1NominalCode {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface PayCodePayCode1NominalCodeFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreatePayCodePayCode1NominalCodeFormGroup() {
		return new FormGroup<PayCodePayCode1NominalCodeFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PayCodePayCode1Type { NotSet = 'NotSet', Payment = 'Payment', Deduction = 'Deduction' }

	export interface PayInstruction {
		PayInstruction1?: PayInstructionPayInstruction1;
	}
	export interface PayInstructionFormProperties {
	}
	export function CreatePayInstructionFormGroup() {
		return new FormGroup<PayInstructionFormProperties>({
		});

	}

	export interface PayInstructionPayInstruction1 {

		/** The pay instructions' description */
		Description?: string | null;

		/**
		 * The pay instructions' end date
		 * Type: DateOnly
		 */
		EndDate?: Date | null;

		/** The pay instructions' pay line tag */
		PayLineTag?: string | null;

		/**
		 * The pay instructions' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;
	}
	export interface PayInstructionPayInstruction1FormProperties {

		/** The pay instructions' description */
		Description: FormControl<string | null | undefined>,

		/**
		 * The pay instructions' end date
		 * Type: DateOnly
		 */
		EndDate: FormControl<Date | null | undefined>,

		/** The pay instructions' pay line tag */
		PayLineTag: FormControl<string | null | undefined>,

		/**
		 * The pay instructions' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreatePayInstructionPayInstruction1FormGroup() {
		return new FormGroup<PayInstructionPayInstruction1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			PayLineTag: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PayLine {
		PayLine1?: PayLinePayLine1;
	}
	export interface PayLineFormProperties {
	}
	export function CreatePayLineFormGroup() {
		return new FormGroup<PayLineFormProperties>({
		});

	}

	export interface PayLinePayLine1 {

		/** The pay lines' calculator */
		Calculator?: string | null;

		/** The pay lines' description */
		Description?: string | null;

		/** The pay lines' generated */
		Generated?: Date | null;

		/** The pay lines' pay code */
		PayCode?: string | null;

		/** The pay lines' pay code type */
		PayCodeType?: PayCodePayCode1Type | null;

		/**
		 * The pay lines' pay run sequence
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PayRunSequence?: number | null;

		/**
		 * The pay lines' payment date
		 * Type: DateOnly
		 */
		PaymentDate?: Date | null;

		/**
		 * The pay lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod?: number | null;

		/**
		 * The pay lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/**
		 * The pay lines' value
		 * Type: double
		 */
		Value?: number | null;
	}
	export interface PayLinePayLine1FormProperties {

		/** The pay lines' calculator */
		Calculator: FormControl<string | null | undefined>,

		/** The pay lines' description */
		Description: FormControl<string | null | undefined>,

		/** The pay lines' generated */
		Generated: FormControl<Date | null | undefined>,

		/** The pay lines' pay code */
		PayCode: FormControl<string | null | undefined>,

		/** The pay lines' pay code type */
		PayCodeType: FormControl<PayCodePayCode1Type | null | undefined>,

		/**
		 * The pay lines' pay run sequence
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PayRunSequence: FormControl<number | null | undefined>,

		/**
		 * The pay lines' payment date
		 * Type: DateOnly
		 */
		PaymentDate: FormControl<Date | null | undefined>,

		/**
		 * The pay lines' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod: FormControl<number | null | undefined>,

		/**
		 * The pay lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/**
		 * The pay lines' value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreatePayLinePayLine1FormGroup() {
		return new FormGroup<PayLinePayLine1FormProperties>({
			Calculator: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Generated: new FormControl<Date | null | undefined>(undefined),
			PayCode: new FormControl<string | null | undefined>(undefined),
			PayCodeType: new FormControl<PayCodePayCode1Type | null | undefined>(undefined),
			PayRunSequence: new FormControl<number | null | undefined>(undefined),
			PaymentDate: new FormControl<Date | null | undefined>(undefined),
			TaxPeriod: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PayRun {
		PayRun1?: PayRunPayRun1;
	}
	export interface PayRunFormProperties {
	}
	export function CreatePayRunFormGroup() {
		return new FormGroup<PayRunFormProperties>({
		});

	}

	export interface PayRunPayRun1 {

		/** The pay runs' executed */
		Executed?: Date | null;

		/** The pay runs' is supplementary */
		IsSupplementary?: boolean | null;

		/** The pay runs' pay frequency */
		PayFrequency?: JournalLineJournalLine1PayFrequency | null;

		/** The pay runs' pay schedule */
		PaySchedule?: PayRunPayRun1PaySchedule;

		/**
		 * The pay runs' payment date
		 * Type: DateOnly
		 */
		PaymentDate?: Date | null;

		/**
		 * The pay runs' period end
		 * Type: DateOnly
		 */
		PeriodEnd?: Date | null;

		/**
		 * The pay runs' period start
		 * Type: DateOnly
		 */
		PeriodStart?: Date | null;

		/** The pay runs' proceeding pay run */
		ProceedingPayRun?: PayRunPayRun1ProceedingPayRun;

		/**
		 * The pay runs' sequence
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Sequence?: number | null;

		/**
		 * The pay runs' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod?: number | null;

		/**
		 * The pay runs' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;
	}
	export interface PayRunPayRun1FormProperties {

		/** The pay runs' executed */
		Executed: FormControl<Date | null | undefined>,

		/** The pay runs' is supplementary */
		IsSupplementary: FormControl<boolean | null | undefined>,

		/** The pay runs' pay frequency */
		PayFrequency: FormControl<JournalLineJournalLine1PayFrequency | null | undefined>,

		/**
		 * The pay runs' payment date
		 * Type: DateOnly
		 */
		PaymentDate: FormControl<Date | null | undefined>,

		/**
		 * The pay runs' period end
		 * Type: DateOnly
		 */
		PeriodEnd: FormControl<Date | null | undefined>,

		/**
		 * The pay runs' period start
		 * Type: DateOnly
		 */
		PeriodStart: FormControl<Date | null | undefined>,

		/**
		 * The pay runs' sequence
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Sequence: FormControl<number | null | undefined>,

		/**
		 * The pay runs' tax period
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxPeriod: FormControl<number | null | undefined>,

		/**
		 * The pay runs' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,
	}
	export function CreatePayRunPayRun1FormGroup() {
		return new FormGroup<PayRunPayRun1FormProperties>({
			Executed: new FormControl<Date | null | undefined>(undefined),
			IsSupplementary: new FormControl<boolean | null | undefined>(undefined),
			PayFrequency: new FormControl<JournalLineJournalLine1PayFrequency | null | undefined>(undefined),
			PaymentDate: new FormControl<Date | null | undefined>(undefined),
			PeriodEnd: new FormControl<Date | null | undefined>(undefined),
			PeriodStart: new FormControl<Date | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			TaxPeriod: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PayRunPayRun1PaySchedule {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface PayRunPayRun1PayScheduleFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreatePayRunPayRun1PayScheduleFormGroup() {
		return new FormGroup<PayRunPayRun1PayScheduleFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayRunPayRun1ProceedingPayRun {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface PayRunPayRun1ProceedingPayRunFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreatePayRunPayRun1ProceedingPayRunFormGroup() {
		return new FormGroup<PayRunPayRun1ProceedingPayRunFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayRunJobInstruction {
		PayRunJobInstruction1?: PayRunJobInstructionPayRunJobInstruction1;
	}
	export interface PayRunJobInstructionFormProperties {
	}
	export function CreatePayRunJobInstructionFormGroup() {
		return new FormGroup<PayRunJobInstructionFormProperties>({
		});

	}

	export interface PayRunJobInstructionPayRunJobInstruction1 {

		/** The pay run job instructions' employees */
		Employees?: PayRunJobInstructionPayRunJobInstruction1Employees;

		/**
		 * The pay run job instructions' end date
		 * Type: DateOnly
		 */
		EndDate?: Date | null;

		/** The pay run job instructions' holding date */
		HoldingDate?: Date | null;

		/** The pay run job instructions' is supplementary */
		IsSupplementary?: boolean | null;

		/** The pay run job instructions' pay schedule */
		PaySchedule?: PayRunJobInstructionPayRunJobInstruction1PaySchedule;

		/**
		 * The pay run job instructions' payment date
		 * Type: DateOnly
		 */
		PaymentDate?: Date | null;

		/**
		 * The pay run job instructions' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;
	}
	export interface PayRunJobInstructionPayRunJobInstruction1FormProperties {

		/**
		 * The pay run job instructions' end date
		 * Type: DateOnly
		 */
		EndDate: FormControl<Date | null | undefined>,

		/** The pay run job instructions' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The pay run job instructions' is supplementary */
		IsSupplementary: FormControl<boolean | null | undefined>,

		/**
		 * The pay run job instructions' payment date
		 * Type: DateOnly
		 */
		PaymentDate: FormControl<Date | null | undefined>,

		/**
		 * The pay run job instructions' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreatePayRunJobInstructionPayRunJobInstruction1FormGroup() {
		return new FormGroup<PayRunJobInstructionPayRunJobInstruction1FormProperties>({
			EndDate: new FormControl<Date | null | undefined>(undefined),
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			IsSupplementary: new FormControl<boolean | null | undefined>(undefined),
			PaymentDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PayRunJobInstructionPayRunJobInstruction1Employees {
		PayRunJobInstructionPayRunJobInstruction1EmployeesEmployee?: Array<PayRunJobInstructionPayRunJobInstruction1EmployeesEmployee>;
	}
	export interface PayRunJobInstructionPayRunJobInstruction1EmployeesFormProperties {
	}
	export function CreatePayRunJobInstructionPayRunJobInstruction1EmployeesFormGroup() {
		return new FormGroup<PayRunJobInstructionPayRunJobInstruction1EmployeesFormProperties>({
		});

	}

	export interface PayRunJobInstructionPayRunJobInstruction1EmployeesEmployee {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface PayRunJobInstructionPayRunJobInstruction1EmployeesEmployeeFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreatePayRunJobInstructionPayRunJobInstruction1EmployeesEmployeeFormGroup() {
		return new FormGroup<PayRunJobInstructionPayRunJobInstruction1EmployeesEmployeeFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayRunJobInstructionPayRunJobInstruction1PaySchedule {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface PayRunJobInstructionPayRunJobInstruction1PayScheduleFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreatePayRunJobInstructionPayRunJobInstruction1PayScheduleFormGroup() {
		return new FormGroup<PayRunJobInstructionPayRunJobInstruction1PayScheduleFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaySchedule {
		PaySchedule1?: PaySchedulePaySchedule1;
	}
	export interface PayScheduleFormProperties {
	}
	export function CreatePayScheduleFormGroup() {
		return new FormGroup<PayScheduleFormProperties>({
		});

	}

	export interface PaySchedulePaySchedule1 {

		/** The pay schedules' meta data */
		MetaData?: string | null;

		/** The pay schedules' name */
		Name?: string | null;

		/** The pay schedules' pay frequency */
		PayFrequency?: JournalLineJournalLine1PayFrequency | null;
	}
	export interface PaySchedulePaySchedule1FormProperties {

		/** The pay schedules' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The pay schedules' name */
		Name: FormControl<string | null | undefined>,

		/** The pay schedules' pay frequency */
		PayFrequency: FormControl<JournalLineJournalLine1PayFrequency | null | undefined>,
	}
	export function CreatePaySchedulePaySchedule1FormGroup() {
		return new FormGroup<PaySchedulePaySchedule1FormProperties>({
			MetaData: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PayFrequency: new FormControl<JournalLineJournalLine1PayFrequency | null | undefined>(undefined),
		});

	}

	export interface Pension {
		Pension1?: PensionPension1;
	}
	export interface PensionFormProperties {
	}
	export function CreatePensionFormGroup() {
		return new FormGroup<PensionFormProperties>({
		});

	}

	export interface PensionPension1 {

		/** The pensions' a e compatible */
		AECompatible?: boolean | null;

		/** The pensions' certification */
		Certification?: PensionPension1Certification | null;

		/** The pensions' code */
		Code?: string | null;

		/**
		 * The pensions' contribution deduction day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContributionDeductionDay?: number | null;

		/**
		 * The pensions' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/**
		 * The pensions' employee contribution cash
		 * Type: double
		 */
		EmployeeContributionCash?: number | null;

		/**
		 * The pensions' employee contribution percent
		 * Type: double
		 */
		EmployeeContributionPercent?: number | null;

		/**
		 * The pensions' employer contribution cash
		 * Type: double
		 */
		EmployerContributionCash?: number | null;

		/**
		 * The pensions' employer contribution percent
		 * Type: double
		 */
		EmployerContributionPercent?: number | null;

		/** The pensions' employer ni saving */
		EmployerNiSaving?: boolean | null;

		/**
		 * The pensions' employer ni saving percentage
		 * Type: double
		 */
		EmployerNiSavingPercentage?: number | null;

		/** The pensions' group */
		Group?: string | null;

		/**
		 * The pensions' lower threshold
		 * Type: double
		 */
		LowerThreshold?: number | null;

		/** The pensions' meta data */
		MetaData?: string | null;

		/**
		 * The pensions' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The pensions' pensionable pay codes */
		PensionablePayCodes?: PensionPension1PensionablePayCodes;

		/** The pensions' pro rata method */
		ProRataMethod?: PensionPension1ProRataMethod | null;

		/** The pensions' provider employer ref */
		ProviderEmployerRef?: string | null;

		/** The pensions' provider name */
		ProviderName?: string | null;

		/** The pensions' qualifying pay codes */
		QualifyingPayCodes?: PensionPension1QualifyingPayCodes;

		/** The pensions' ras rounding override */
		RasRoundingOverride?: PensionPension1RasRoundingOverride | null;

		/**
		 * The pensions' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The pensions' rounding option */
		RoundingOption?: PensionPension1RasRoundingOverride | null;

		/** The pensions' salary sacrifice */
		SalarySacrifice?: boolean | null;

		/** The pensions' scheme name */
		SchemeName?: string | null;

		/** The pensions' sub group */
		SubGroup?: string | null;

		/** The pensions' taxation method */
		TaxationMethod?: PensionPension1TaxationMethod | null;

		/**
		 * The pensions' upper threshold
		 * Type: double
		 */
		UpperThreshold?: number | null;

		/** The pensions' use a e thresholds */
		UseAEThresholds?: boolean | null;
	}
	export interface PensionPension1FormProperties {

		/** The pensions' a e compatible */
		AECompatible: FormControl<boolean | null | undefined>,

		/** The pensions' certification */
		Certification: FormControl<PensionPension1Certification | null | undefined>,

		/** The pensions' code */
		Code: FormControl<string | null | undefined>,

		/**
		 * The pensions' contribution deduction day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContributionDeductionDay: FormControl<number | null | undefined>,

		/**
		 * The pensions' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/**
		 * The pensions' employee contribution cash
		 * Type: double
		 */
		EmployeeContributionCash: FormControl<number | null | undefined>,

		/**
		 * The pensions' employee contribution percent
		 * Type: double
		 */
		EmployeeContributionPercent: FormControl<number | null | undefined>,

		/**
		 * The pensions' employer contribution cash
		 * Type: double
		 */
		EmployerContributionCash: FormControl<number | null | undefined>,

		/**
		 * The pensions' employer contribution percent
		 * Type: double
		 */
		EmployerContributionPercent: FormControl<number | null | undefined>,

		/** The pensions' employer ni saving */
		EmployerNiSaving: FormControl<boolean | null | undefined>,

		/**
		 * The pensions' employer ni saving percentage
		 * Type: double
		 */
		EmployerNiSavingPercentage: FormControl<number | null | undefined>,

		/** The pensions' group */
		Group: FormControl<string | null | undefined>,

		/**
		 * The pensions' lower threshold
		 * Type: double
		 */
		LowerThreshold: FormControl<number | null | undefined>,

		/** The pensions' meta data */
		MetaData: FormControl<string | null | undefined>,

		/**
		 * The pensions' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The pensions' pro rata method */
		ProRataMethod: FormControl<PensionPension1ProRataMethod | null | undefined>,

		/** The pensions' provider employer ref */
		ProviderEmployerRef: FormControl<string | null | undefined>,

		/** The pensions' provider name */
		ProviderName: FormControl<string | null | undefined>,

		/** The pensions' ras rounding override */
		RasRoundingOverride: FormControl<PensionPension1RasRoundingOverride | null | undefined>,

		/**
		 * The pensions' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The pensions' rounding option */
		RoundingOption: FormControl<PensionPension1RasRoundingOverride | null | undefined>,

		/** The pensions' salary sacrifice */
		SalarySacrifice: FormControl<boolean | null | undefined>,

		/** The pensions' scheme name */
		SchemeName: FormControl<string | null | undefined>,

		/** The pensions' sub group */
		SubGroup: FormControl<string | null | undefined>,

		/** The pensions' taxation method */
		TaxationMethod: FormControl<PensionPension1TaxationMethod | null | undefined>,

		/**
		 * The pensions' upper threshold
		 * Type: double
		 */
		UpperThreshold: FormControl<number | null | undefined>,

		/** The pensions' use a e thresholds */
		UseAEThresholds: FormControl<boolean | null | undefined>,
	}
	export function CreatePensionPension1FormGroup() {
		return new FormGroup<PensionPension1FormProperties>({
			AECompatible: new FormControl<boolean | null | undefined>(undefined),
			Certification: new FormControl<PensionPension1Certification | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			ContributionDeductionDay: new FormControl<number | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			EmployeeContributionCash: new FormControl<number | null | undefined>(undefined),
			EmployeeContributionPercent: new FormControl<number | null | undefined>(undefined),
			EmployerContributionCash: new FormControl<number | null | undefined>(undefined),
			EmployerContributionPercent: new FormControl<number | null | undefined>(undefined),
			EmployerNiSaving: new FormControl<boolean | null | undefined>(undefined),
			EmployerNiSavingPercentage: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			LowerThreshold: new FormControl<number | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			ProRataMethod: new FormControl<PensionPension1ProRataMethod | null | undefined>(undefined),
			ProviderEmployerRef: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			RasRoundingOverride: new FormControl<PensionPension1RasRoundingOverride | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			RoundingOption: new FormControl<PensionPension1RasRoundingOverride | null | undefined>(undefined),
			SalarySacrifice: new FormControl<boolean | null | undefined>(undefined),
			SchemeName: new FormControl<string | null | undefined>(undefined),
			SubGroup: new FormControl<string | null | undefined>(undefined),
			TaxationMethod: new FormControl<PensionPension1TaxationMethod | null | undefined>(undefined),
			UpperThreshold: new FormControl<number | null | undefined>(undefined),
			UseAEThresholds: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PensionPension1Certification { NotSet = 'NotSet', Set1 = 'Set1', Set2 = 'Set2', Set3 = 'Set3' }

	export interface PensionPension1PensionablePayCodes {
		PayCode?: Array<string>;
	}
	export interface PensionPension1PensionablePayCodesFormProperties {
	}
	export function CreatePensionPension1PensionablePayCodesFormGroup() {
		return new FormGroup<PensionPension1PensionablePayCodesFormProperties>({
		});

	}

	export enum PensionPension1ProRataMethod { NotSet = 'NotSet', Annual260Days = 'Annual260Days', Annual365Days = 'Annual365Days', AnnualQualifyingDays = 'AnnualQualifyingDays', DaysPerCalendarMonth = 'DaysPerCalendarMonth', DaysPerTaxPeriod = 'DaysPerTaxPeriod', WorkingDaysPerCalendarMonth = 'WorkingDaysPerCalendarMonth', WeekDaysPerCalendarMonth = 'WeekDaysPerCalendarMonth' }

	export interface PensionPension1QualifyingPayCodes {
		PayCode?: Array<string>;
	}
	export interface PensionPension1QualifyingPayCodesFormProperties {
	}
	export function CreatePensionPension1QualifyingPayCodesFormGroup() {
		return new FormGroup<PensionPension1QualifyingPayCodesFormProperties>({
		});

	}

	export enum PensionPension1RasRoundingOverride { NotSet = 'NotSet', PennyUp = 'PennyUp', PennyDown = 'PennyDown', Bankers = 'Bankers', FiveUp = 'FiveUp', FiveDown = 'FiveDown', Floor = 'Floor', Ceiling = 'Ceiling' }

	export enum PensionPension1TaxationMethod { NotSet = 'NotSet', NetBased = 'NetBased', ReliefAtSource = 'ReliefAtSource', TaxReliefExcluded = 'TaxReliefExcluded' }

	export interface Permission {
		Permission1?: PermissionPermission1;
	}
	export interface PermissionFormProperties {
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
		});

	}

	export interface PermissionPermission1 {

		/** The permissions' description */
		Description?: string | null;

		/** The permissions' expression */
		Expression?: string | null;

		/** The permissions' name */
		Name?: string | null;

		/** The permissions' policy */
		Policy?: PermissionPermission1Policy | null;

		/** The permissions' verbs */
		Verbs?: PermissionPermission1Verbs | null;
	}
	export interface PermissionPermission1FormProperties {

		/** The permissions' description */
		Description: FormControl<string | null | undefined>,

		/** The permissions' expression */
		Expression: FormControl<string | null | undefined>,

		/** The permissions' name */
		Name: FormControl<string | null | undefined>,

		/** The permissions' policy */
		Policy: FormControl<PermissionPermission1Policy | null | undefined>,

		/** The permissions' verbs */
		Verbs: FormControl<PermissionPermission1Verbs | null | undefined>,
	}
	export function CreatePermissionPermission1FormGroup() {
		return new FormGroup<PermissionPermission1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<PermissionPermission1Policy | null | undefined>(undefined),
			Verbs: new FormControl<PermissionPermission1Verbs | null | undefined>(undefined),
		});

	}

	export enum PermissionPermission1Policy { Allow = 'Allow', Deny = 'Deny' }

	export enum PermissionPermission1Verbs { Read = 'Read', Write = 'Write', Delete = 'Delete', All = 'All' }

	export interface Query {
		Query1?: QueryQuery1;
	}
	export interface QueryFormProperties {
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
		});

	}

	export interface QueryQuery1 {

		/** The querys' encoding */
		Encoding?: string | null;

		/** The querys' exclude null or empty elements */
		ExcludeNullOrEmptyElements?: boolean | null;

		/** The querys' groups */
		Groups?: QueryQuery1Groups;

		/** The querys' root node name */
		RootNodeName?: string | null;

		/** The querys' suppress metric attributes */
		SuppressMetricAttributes?: boolean | null;

		/** The querys' variables */
		Variables?: QueryQuery1Variables;
	}
	export interface QueryQuery1FormProperties {

		/** The querys' encoding */
		Encoding: FormControl<string | null | undefined>,

		/** The querys' exclude null or empty elements */
		ExcludeNullOrEmptyElements: FormControl<boolean | null | undefined>,

		/** The querys' root node name */
		RootNodeName: FormControl<string | null | undefined>,

		/** The querys' suppress metric attributes */
		SuppressMetricAttributes: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryQuery1FormGroup() {
		return new FormGroup<QueryQuery1FormProperties>({
			Encoding: new FormControl<string | null | undefined>(undefined),
			ExcludeNullOrEmptyElements: new FormControl<boolean | null | undefined>(undefined),
			RootNodeName: new FormControl<string | null | undefined>(undefined),
			SuppressMetricAttributes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface QueryQuery1Groups {
		QueryQuery1GroupsGroup?: Array<QueryQuery1GroupsGroup>;
	}
	export interface QueryQuery1GroupsFormProperties {
	}
	export function CreateQueryQuery1GroupsFormGroup() {
		return new FormGroup<QueryQuery1GroupsFormProperties>({
		});

	}

	export interface QueryQuery1GroupsGroup {

		/** The entity groups' group name */
		'@GroupName'?: string | null;

		/** The entity groups' item name */
		'@ItemName'?: string | null;

		/** The entity groups' loop expression */
		'@LoopExpression'?: string | null;

		/** The entity groups' predicate */
		'@Predicate'?: string | null;

		/** The entity groups' selector */
		'@Selector'?: string | null;

		/** The entity groups' unique key variable */
		'@UniqueKeyVariable'?: string | null;

		/** The entity groups' conditions */
		QueryQuery1GroupsGroupCondition?: Array<QueryQuery1GroupsGroupCondition>;

		/** The entity groups' filters */
		QueryQuery1GroupsGroupFilter?: Array<QueryQuery1GroupsGroupFilter>;

		/** The entity groups' ordering */
		QueryQuery1GroupsGroupOrder?: Array<QueryQuery1GroupsGroupOrder>;

		/** The entity groups' outputs */
		QueryQuery1GroupsGroupOutput?: Array<QueryQuery1GroupsGroupOutput>;
	}
	export interface QueryQuery1GroupsGroupFormProperties {

		/** The entity groups' group name */
		'@GroupName': FormControl<string | null | undefined>,

		/** The entity groups' item name */
		'@ItemName': FormControl<string | null | undefined>,

		/** The entity groups' loop expression */
		'@LoopExpression': FormControl<string | null | undefined>,

		/** The entity groups' predicate */
		'@Predicate': FormControl<string | null | undefined>,

		/** The entity groups' selector */
		'@Selector': FormControl<string | null | undefined>,

		/** The entity groups' unique key variable */
		'@UniqueKeyVariable': FormControl<string | null | undefined>,
	}
	export function CreateQueryQuery1GroupsGroupFormGroup() {
		return new FormGroup<QueryQuery1GroupsGroupFormProperties>({
			'@GroupName': new FormControl<string | null | undefined>(undefined),
			'@ItemName': new FormControl<string | null | undefined>(undefined),
			'@LoopExpression': new FormControl<string | null | undefined>(undefined),
			'@Predicate': new FormControl<string | null | undefined>(undefined),
			'@Selector': new FormControl<string | null | undefined>(undefined),
			'@UniqueKeyVariable': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryQuery1GroupsGroupCondition {

		/** The compare condition bases' value a */
		'@ValueA'?: string | null;

		/** The compare condition bases' value b */
		'@ValueB'?: string | null;
	}
	export interface QueryQuery1GroupsGroupConditionFormProperties {

		/** The compare condition bases' value a */
		'@ValueA': FormControl<string | null | undefined>,

		/** The compare condition bases' value b */
		'@ValueB': FormControl<string | null | undefined>,
	}
	export function CreateQueryQuery1GroupsGroupConditionFormGroup() {
		return new FormGroup<QueryQuery1GroupsGroupConditionFormProperties>({
			'@ValueA': new FormControl<string | null | undefined>(undefined),
			'@ValueB': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryQuery1GroupsGroupFilter {

		/** The filter bases' is or */
		'@IsOr'?: boolean | null;

		/** The filter bases' property */
		'@Property'?: string | null;

		/** The filter bases' value */
		'@Value'?: string | null;
	}
	export interface QueryQuery1GroupsGroupFilterFormProperties {

		/** The filter bases' is or */
		'@IsOr': FormControl<boolean | null | undefined>,

		/** The filter bases' property */
		'@Property': FormControl<string | null | undefined>,

		/** The filter bases' value */
		'@Value': FormControl<string | null | undefined>,
	}
	export function CreateQueryQuery1GroupsGroupFilterFormGroup() {
		return new FormGroup<QueryQuery1GroupsGroupFilterFormProperties>({
			'@IsOr': new FormControl<boolean | null | undefined>(undefined),
			'@Property': new FormControl<string | null | undefined>(undefined),
			'@Value': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryQuery1GroupsGroupOrder {

		/** The order by bases' property */
		'@Property'?: string | null;
	}
	export interface QueryQuery1GroupsGroupOrderFormProperties {

		/** The order by bases' property */
		'@Property': FormControl<string | null | undefined>,
	}
	export function CreateQueryQuery1GroupsGroupOrderFormGroup() {
		return new FormGroup<QueryQuery1GroupsGroupOrderFormProperties>({
			'@Property': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryQuery1GroupsGroupOutput {

		/** The output bases' max length */
		'@MaxLength'?: string | null;

		/** The output bases' output */
		'@Output'?: QueryQuery1GroupsGroupOutput_Output | null;
	}
	export interface QueryQuery1GroupsGroupOutputFormProperties {

		/** The output bases' max length */
		'@MaxLength': FormControl<string | null | undefined>,

		/** The output bases' output */
		'@Output': FormControl<QueryQuery1GroupsGroupOutput_Output | null | undefined>,
	}
	export function CreateQueryQuery1GroupsGroupOutputFormGroup() {
		return new FormGroup<QueryQuery1GroupsGroupOutputFormProperties>({
			'@MaxLength': new FormControl<string | null | undefined>(undefined),
			'@Output': new FormControl<QueryQuery1GroupsGroupOutput_Output | null | undefined>(undefined),
		});

	}

	export enum QueryQuery1GroupsGroupOutput_Output { Element = 'Element', Attribute = 'Attribute', Variable = 'Variable', VariableSum = 'VariableSum', VariableAppend = 'VariableAppend', VariablePrepend = 'VariablePrepend', ElementDatePart = 'ElementDatePart', InnerText = 'InnerText' }

	export interface QueryQuery1Variables {
		QueryQuery1VariablesVariable?: Array<QueryQuery1VariablesVariable>;
	}
	export interface QueryQuery1VariablesFormProperties {
	}
	export function CreateQueryQuery1VariablesFormGroup() {
		return new FormGroup<QueryQuery1VariablesFormProperties>({
		});

	}

	export interface QueryQuery1VariablesVariable {

		/** The name value pairs' name */
		'@Name'?: string | null;

		/** The name value pairs' value */
		'@Value'?: string | null;
	}
	export interface QueryQuery1VariablesVariableFormProperties {

		/** The name value pairs' name */
		'@Name': FormControl<string | null | undefined>,

		/** The name value pairs' value */
		'@Value': FormControl<string | null | undefined>,
	}
	export function CreateQueryQuery1VariablesVariableFormGroup() {
		return new FormGroup<QueryQuery1VariablesVariableFormProperties>({
			'@Name': new FormControl<string | null | undefined>(undefined),
			'@Value': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinition {
		ReportDefinition1?: ReportDefinitionReportDefinition1;
	}
	export interface ReportDefinitionFormProperties {
	}
	export function CreateReportDefinitionFormGroup() {
		return new FormGroup<ReportDefinitionFormProperties>({
		});

	}

	export interface ReportDefinitionReportDefinition1 {

		/** The report definitions' active */
		Active?: boolean | null;

		/** The report definitions' readonly */
		Readonly?: boolean | null;

		/** The report definitions' report query */
		ReportQuery?: ReportDefinitionReportDefinition1ReportQuery;

		/** The report definitions' supported transforms */
		SupportedTransforms?: string | null;

		/** The report definitions' title */
		Title?: string | null;

		/** The report definitions' version */
		Version?: string | null;
	}
	export interface ReportDefinitionReportDefinition1FormProperties {

		/** The report definitions' active */
		Active: FormControl<boolean | null | undefined>,

		/** The report definitions' readonly */
		Readonly: FormControl<boolean | null | undefined>,

		/** The report definitions' supported transforms */
		SupportedTransforms: FormControl<string | null | undefined>,

		/** The report definitions' title */
		Title: FormControl<string | null | undefined>,

		/** The report definitions' version */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1FormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1FormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Readonly: new FormControl<boolean | null | undefined>(undefined),
			SupportedTransforms: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQuery {

		/** The querys' encoding */
		Encoding?: string | null;

		/** The querys' exclude null or empty elements */
		ExcludeNullOrEmptyElements?: boolean | null;

		/** The querys' groups */
		Groups?: ReportDefinitionReportDefinition1ReportQueryGroups;

		/** The querys' root node name */
		RootNodeName?: string | null;

		/** The querys' suppress metric attributes */
		SuppressMetricAttributes?: boolean | null;

		/** The querys' variables */
		Variables?: ReportDefinitionReportDefinition1ReportQueryVariables;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryFormProperties {

		/** The querys' encoding */
		Encoding: FormControl<string | null | undefined>,

		/** The querys' exclude null or empty elements */
		ExcludeNullOrEmptyElements: FormControl<boolean | null | undefined>,

		/** The querys' root node name */
		RootNodeName: FormControl<string | null | undefined>,

		/** The querys' suppress metric attributes */
		SuppressMetricAttributes: FormControl<boolean | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryFormProperties>({
			Encoding: new FormControl<string | null | undefined>(undefined),
			ExcludeNullOrEmptyElements: new FormControl<boolean | null | undefined>(undefined),
			RootNodeName: new FormControl<string | null | undefined>(undefined),
			SuppressMetricAttributes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroups {
		ReportDefinitionReportDefinition1ReportQueryGroupsGroup?: Array<ReportDefinitionReportDefinition1ReportQueryGroupsGroup>;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsFormProperties {
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsFormProperties>({
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroup {

		/** The entity groups' group name */
		'@GroupName'?: string | null;

		/** The entity groups' item name */
		'@ItemName'?: string | null;

		/** The entity groups' loop expression */
		'@LoopExpression'?: string | null;

		/** The entity groups' predicate */
		'@Predicate'?: string | null;

		/** The entity groups' selector */
		'@Selector'?: string | null;

		/** The entity groups' unique key variable */
		'@UniqueKeyVariable'?: string | null;

		/** The entity groups' conditions */
		ReportDefinitionReportDefinition1ReportQueryGroupsGroupCondition?: Array<ReportDefinitionReportDefinition1ReportQueryGroupsGroupCondition>;

		/** The entity groups' filters */
		ReportDefinitionReportDefinition1ReportQueryGroupsGroupFilter?: Array<ReportDefinitionReportDefinition1ReportQueryGroupsGroupFilter>;

		/** The entity groups' ordering */
		ReportDefinitionReportDefinition1ReportQueryGroupsGroupOrder?: Array<ReportDefinitionReportDefinition1ReportQueryGroupsGroupOrder>;

		/** The entity groups' outputs */
		ReportDefinitionReportDefinition1ReportQueryGroupsGroupOutput?: Array<ReportDefinitionReportDefinition1ReportQueryGroupsGroupOutput>;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupFormProperties {

		/** The entity groups' group name */
		'@GroupName': FormControl<string | null | undefined>,

		/** The entity groups' item name */
		'@ItemName': FormControl<string | null | undefined>,

		/** The entity groups' loop expression */
		'@LoopExpression': FormControl<string | null | undefined>,

		/** The entity groups' predicate */
		'@Predicate': FormControl<string | null | undefined>,

		/** The entity groups' selector */
		'@Selector': FormControl<string | null | undefined>,

		/** The entity groups' unique key variable */
		'@UniqueKeyVariable': FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsGroupFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsGroupFormProperties>({
			'@GroupName': new FormControl<string | null | undefined>(undefined),
			'@ItemName': new FormControl<string | null | undefined>(undefined),
			'@LoopExpression': new FormControl<string | null | undefined>(undefined),
			'@Predicate': new FormControl<string | null | undefined>(undefined),
			'@Selector': new FormControl<string | null | undefined>(undefined),
			'@UniqueKeyVariable': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupCondition {

		/** The compare condition bases' value a */
		'@ValueA'?: string | null;

		/** The compare condition bases' value b */
		'@ValueB'?: string | null;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupConditionFormProperties {

		/** The compare condition bases' value a */
		'@ValueA': FormControl<string | null | undefined>,

		/** The compare condition bases' value b */
		'@ValueB': FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsGroupConditionFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsGroupConditionFormProperties>({
			'@ValueA': new FormControl<string | null | undefined>(undefined),
			'@ValueB': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupFilter {

		/** The filter bases' is or */
		'@IsOr'?: boolean | null;

		/** The filter bases' property */
		'@Property'?: string | null;

		/** The filter bases' value */
		'@Value'?: string | null;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupFilterFormProperties {

		/** The filter bases' is or */
		'@IsOr': FormControl<boolean | null | undefined>,

		/** The filter bases' property */
		'@Property': FormControl<string | null | undefined>,

		/** The filter bases' value */
		'@Value': FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsGroupFilterFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsGroupFilterFormProperties>({
			'@IsOr': new FormControl<boolean | null | undefined>(undefined),
			'@Property': new FormControl<string | null | undefined>(undefined),
			'@Value': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupOrder {

		/** The order by bases' property */
		'@Property'?: string | null;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupOrderFormProperties {

		/** The order by bases' property */
		'@Property': FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsGroupOrderFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsGroupOrderFormProperties>({
			'@Property': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupOutput {

		/** The output bases' max length */
		'@MaxLength'?: string | null;

		/** The output bases' output */
		'@Output'?: QueryQuery1GroupsGroupOutput_Output | null;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryGroupsGroupOutputFormProperties {

		/** The output bases' max length */
		'@MaxLength': FormControl<string | null | undefined>,

		/** The output bases' output */
		'@Output': FormControl<QueryQuery1GroupsGroupOutput_Output | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryGroupsGroupOutputFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryGroupsGroupOutputFormProperties>({
			'@MaxLength': new FormControl<string | null | undefined>(undefined),
			'@Output': new FormControl<QueryQuery1GroupsGroupOutput_Output | null | undefined>(undefined),
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryVariables {
		ReportDefinitionReportDefinition1ReportQueryVariablesVariable?: Array<ReportDefinitionReportDefinition1ReportQueryVariablesVariable>;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryVariablesFormProperties {
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryVariablesFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryVariablesFormProperties>({
		});

	}

	export interface ReportDefinitionReportDefinition1ReportQueryVariablesVariable {

		/** The name value pairs' name */
		'@Name'?: string | null;

		/** The name value pairs' value */
		'@Value'?: string | null;
	}
	export interface ReportDefinitionReportDefinition1ReportQueryVariablesVariableFormProperties {

		/** The name value pairs' name */
		'@Name': FormControl<string | null | undefined>,

		/** The name value pairs' value */
		'@Value': FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionReportDefinition1ReportQueryVariablesVariableFormGroup() {
		return new FormGroup<ReportDefinitionReportDefinition1ReportQueryVariablesVariableFormProperties>({
			'@Name': new FormControl<string | null | undefined>(undefined),
			'@Value': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportLine {
		ReportLine1?: ReportLineReportLine1;
	}
	export interface ReportLineFormProperties {
	}
	export function CreateReportLineFormGroup() {
		return new FormGroup<ReportLineFormProperties>({
		});

	}

	export interface ReportLineReportLine1 {

		/** The report lines' description */
		Description?: string | null;

		/** The report lines' generated */
		Generated?: Date | null;

		/**
		 * The report lines' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth?: number | null;

		/**
		 * The report lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/**
		 * The report lines' value
		 * Type: double
		 */
		Value?: number | null;
	}
	export interface ReportLineReportLine1FormProperties {

		/** The report lines' description */
		Description: FormControl<string | null | undefined>,

		/** The report lines' generated */
		Generated: FormControl<Date | null | undefined>,

		/**
		 * The report lines' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth: FormControl<number | null | undefined>,

		/**
		 * The report lines' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/**
		 * The report lines' value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateReportLineReportLine1FormGroup() {
		return new FormGroup<ReportLineReportLine1FormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Generated: new FormControl<Date | null | undefined>(undefined),
			TaxMonth: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReportingInstruction {
		ReportingInstruction1?: ReportingInstructionReportingInstruction1;
	}
	export interface ReportingInstructionFormProperties {
	}
	export function CreateReportingInstructionFormGroup() {
		return new FormGroup<ReportingInstructionFormProperties>({
		});

	}

	export interface ReportingInstructionReportingInstruction1 {

		/**
		 * The reporting instructions' end date
		 * Type: DateOnly
		 */
		EndDate?: Date | null;

		/**
		 * The reporting instructions' start date
		 * Type: DateOnly
		 */
		StartDate?: Date | null;

		/**
		 * The reporting instructions' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth?: number | null;

		/**
		 * The reporting instructions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/**
		 * The reporting instructions' value
		 * Type: double
		 */
		Value?: number | null;
	}
	export interface ReportingInstructionReportingInstruction1FormProperties {

		/**
		 * The reporting instructions' end date
		 * Type: DateOnly
		 */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * The reporting instructions' start date
		 * Type: DateOnly
		 */
		StartDate: FormControl<Date | null | undefined>,

		/**
		 * The reporting instructions' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth: FormControl<number | null | undefined>,

		/**
		 * The reporting instructions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/**
		 * The reporting instructions' value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateReportingInstructionReportingInstruction1FormGroup() {
		return new FormGroup<ReportingInstructionReportingInstruction1FormProperties>({
			EndDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			TaxMonth: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RtiJobInstruction {
		RtiJobInstruction1?: RtiJobInstructionRtiJobInstruction1;
	}
	export interface RtiJobInstructionFormProperties {
	}
	export function CreateRtiJobInstructionFormGroup() {
		return new FormGroup<RtiJobInstructionFormProperties>({
		});

	}

	export interface RtiJobInstructionRtiJobInstruction1 {

		/**
		 * The rti job instructions' earlier tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		EarlierTaxYear?: number | null;

		/** The rti job instructions' employer */
		Employer?: RtiJobInstructionRtiJobInstruction1Employer;

		/** The rti job instructions' final submission for year */
		FinalSubmissionForYear?: boolean | null;

		/** The rti job instructions' generate */
		Generate?: boolean | null;

		/** The rti job instructions' holding date */
		HoldingDate?: Date | null;

		/** The rti job instructions' late reason */
		LateReason?: RtiJobInstructionRtiJobInstruction1LateReason | null;

		/**
		 * The rti job instructions' no payment for period from
		 * Type: DateOnly
		 */
		NoPaymentForPeriodFrom?: Date | null;

		/**
		 * The rti job instructions' no payment for period to
		 * Type: DateOnly
		 */
		NoPaymentForPeriodTo?: Date | null;

		/** The rti job instructions' pay schedule */
		PaySchedule?: RtiJobInstructionRtiJobInstruction1PaySchedule;

		/**
		 * The rti job instructions' payment date
		 * Type: DateOnly
		 */
		PaymentDate?: Date | null;

		/**
		 * The rti job instructions' period of inactivity from
		 * Type: DateOnly
		 */
		PeriodOfInactivityFrom?: Date | null;

		/**
		 * The rti job instructions' period of inactivity to
		 * Type: DateOnly
		 */
		PeriodOfInactivityTo?: Date | null;

		/** The rti job instructions' rti transaction */
		RtiTransaction?: RtiJobInstructionRtiJobInstruction1RtiTransaction;

		/** The rti job instructions' rti type */
		RtiType?: string | null;

		/**
		 * The rti job instructions' scheme ceased
		 * Type: DateOnly
		 */
		SchemeCeased?: Date | null;

		/**
		 * The rti job instructions' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth?: number | null;

		/**
		 * The rti job instructions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/** The rti job instructions' timestamp */
		Timestamp?: Date | null;

		/** The rti job instructions' transmit */
		Transmit?: boolean | null;
	}
	export interface RtiJobInstructionRtiJobInstruction1FormProperties {

		/**
		 * The rti job instructions' earlier tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		EarlierTaxYear: FormControl<number | null | undefined>,

		/** The rti job instructions' final submission for year */
		FinalSubmissionForYear: FormControl<boolean | null | undefined>,

		/** The rti job instructions' generate */
		Generate: FormControl<boolean | null | undefined>,

		/** The rti job instructions' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The rti job instructions' late reason */
		LateReason: FormControl<RtiJobInstructionRtiJobInstruction1LateReason | null | undefined>,

		/**
		 * The rti job instructions' no payment for period from
		 * Type: DateOnly
		 */
		NoPaymentForPeriodFrom: FormControl<Date | null | undefined>,

		/**
		 * The rti job instructions' no payment for period to
		 * Type: DateOnly
		 */
		NoPaymentForPeriodTo: FormControl<Date | null | undefined>,

		/**
		 * The rti job instructions' payment date
		 * Type: DateOnly
		 */
		PaymentDate: FormControl<Date | null | undefined>,

		/**
		 * The rti job instructions' period of inactivity from
		 * Type: DateOnly
		 */
		PeriodOfInactivityFrom: FormControl<Date | null | undefined>,

		/**
		 * The rti job instructions' period of inactivity to
		 * Type: DateOnly
		 */
		PeriodOfInactivityTo: FormControl<Date | null | undefined>,

		/** The rti job instructions' rti type */
		RtiType: FormControl<string | null | undefined>,

		/**
		 * The rti job instructions' scheme ceased
		 * Type: DateOnly
		 */
		SchemeCeased: FormControl<Date | null | undefined>,

		/**
		 * The rti job instructions' tax month
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxMonth: FormControl<number | null | undefined>,

		/**
		 * The rti job instructions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/** The rti job instructions' timestamp */
		Timestamp: FormControl<Date | null | undefined>,

		/** The rti job instructions' transmit */
		Transmit: FormControl<boolean | null | undefined>,
	}
	export function CreateRtiJobInstructionRtiJobInstruction1FormGroup() {
		return new FormGroup<RtiJobInstructionRtiJobInstruction1FormProperties>({
			EarlierTaxYear: new FormControl<number | null | undefined>(undefined),
			FinalSubmissionForYear: new FormControl<boolean | null | undefined>(undefined),
			Generate: new FormControl<boolean | null | undefined>(undefined),
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			LateReason: new FormControl<RtiJobInstructionRtiJobInstruction1LateReason | null | undefined>(undefined),
			NoPaymentForPeriodFrom: new FormControl<Date | null | undefined>(undefined),
			NoPaymentForPeriodTo: new FormControl<Date | null | undefined>(undefined),
			PaymentDate: new FormControl<Date | null | undefined>(undefined),
			PeriodOfInactivityFrom: new FormControl<Date | null | undefined>(undefined),
			PeriodOfInactivityTo: new FormControl<Date | null | undefined>(undefined),
			RtiType: new FormControl<string | null | undefined>(undefined),
			SchemeCeased: new FormControl<Date | null | undefined>(undefined),
			TaxMonth: new FormControl<number | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Transmit: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RtiJobInstructionRtiJobInstruction1Employer {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface RtiJobInstructionRtiJobInstruction1EmployerFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateRtiJobInstructionRtiJobInstruction1EmployerFormGroup() {
		return new FormGroup<RtiJobInstructionRtiJobInstruction1EmployerFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RtiJobInstructionRtiJobInstruction1LateReason { A = 'A', B = 'B', C = 'C', D = 'D', F = 'F', G = 'G', H = 'H' }

	export interface RtiJobInstructionRtiJobInstruction1PaySchedule {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface RtiJobInstructionRtiJobInstruction1PayScheduleFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateRtiJobInstructionRtiJobInstruction1PayScheduleFormGroup() {
		return new FormGroup<RtiJobInstructionRtiJobInstruction1PayScheduleFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RtiJobInstructionRtiJobInstruction1RtiTransaction {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface RtiJobInstructionRtiJobInstruction1RtiTransactionFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateRtiJobInstructionRtiJobInstruction1RtiTransactionFormGroup() {
		return new FormGroup<RtiJobInstructionRtiJobInstruction1RtiTransactionFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RtiTransactionBase {
		RtiTransactionBase1?: RtiTransactionBaseRtiTransactionBase1;
	}
	export interface RtiTransactionBaseFormProperties {
	}
	export function CreateRtiTransactionBaseFormGroup() {
		return new FormGroup<RtiTransactionBaseFormProperties>({
		});

	}

	export interface RtiTransactionBaseRtiTransactionBase1 {

		/** The rti transaction bases' employer core */
		EmployerCore?: RtiTransactionBaseRtiTransactionBase1EmployerCore;

		/** The rti transaction bases' request data */
		RequestData?: string | null;

		/** The rti transaction bases' response data */
		ResponseData?: string | null;

		/** The rti transaction bases' rti type */
		RtiType?: string | null;

		/**
		 * The rti transaction bases' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/** The rti transaction bases' timestamp */
		Timestamp?: Date | null;

		/** The rti transaction bases' transaction status */
		TransactionStatus?: CisTransactionCisTransaction1TransactionStatus | null;

		/** The rti transaction bases' transmission date */
		TransmissionDate?: Date | null;
	}
	export interface RtiTransactionBaseRtiTransactionBase1FormProperties {

		/** The rti transaction bases' request data */
		RequestData: FormControl<string | null | undefined>,

		/** The rti transaction bases' response data */
		ResponseData: FormControl<string | null | undefined>,

		/** The rti transaction bases' rti type */
		RtiType: FormControl<string | null | undefined>,

		/**
		 * The rti transaction bases' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/** The rti transaction bases' timestamp */
		Timestamp: FormControl<Date | null | undefined>,

		/** The rti transaction bases' transaction status */
		TransactionStatus: FormControl<CisTransactionCisTransaction1TransactionStatus | null | undefined>,

		/** The rti transaction bases' transmission date */
		TransmissionDate: FormControl<Date | null | undefined>,
	}
	export function CreateRtiTransactionBaseRtiTransactionBase1FormGroup() {
		return new FormGroup<RtiTransactionBaseRtiTransactionBase1FormProperties>({
			RequestData: new FormControl<string | null | undefined>(undefined),
			ResponseData: new FormControl<string | null | undefined>(undefined),
			RtiType: new FormControl<string | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			TransactionStatus: new FormControl<CisTransactionCisTransaction1TransactionStatus | null | undefined>(undefined),
			TransmissionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RtiTransactionBaseRtiTransactionBase1EmployerCore {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface RtiTransactionBaseRtiTransactionBase1EmployerCoreFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateRtiTransactionBaseRtiTransactionBase1EmployerCoreFormGroup() {
		return new FormGroup<RtiTransactionBaseRtiTransactionBase1EmployerCoreFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubContractor {
		SubContractor1?: SubContractorSubContractor1;
	}
	export interface SubContractorFormProperties {
	}
	export function CreateSubContractorFormGroup() {
		return new FormGroup<SubContractorFormProperties>({
		});

	}

	export interface SubContractorSubContractor1 {

		/** The sub contractors' address */
		Address?: SubContractorSubContractor1Address;

		/** The sub contractors' bank account */
		BankAccount?: SubContractorSubContractor1BankAccount;

		/** The sub contractors' business type */
		BusinessType?: SubContractorSubContractor1BusinessType | null;

		/** The sub contractors' company name */
		CompanyName?: string | null;

		/** The sub contractors' company registration number */
		CompanyRegistrationNumber?: string | null;

		/** The sub contractors' deactivated */
		Deactivated?: boolean | null;

		/**
		 * The sub contractors' effective date
		 * Type: DateOnly
		 */
		EffectiveDate?: Date | null;

		/** The sub contractors' first name */
		FirstName?: string | null;

		/** The sub contractors' initials */
		Initials?: string | null;

		/** The sub contractors' last name */
		LastName?: string | null;

		/** The sub contractors' meta data */
		MetaData?: string | null;

		/** The sub contractors' middle name */
		MiddleName?: string | null;

		/**
		 * The sub contractors' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate?: Date | null;

		/** The sub contractors' ni number */
		NiNumber?: string | null;

		/** The sub contractors' partnership name */
		PartnershipName?: string | null;

		/** The sub contractors' partnership unique tax reference */
		PartnershipUniqueTaxReference?: string | null;

		/** The sub contractors' pay frequency */
		PayFrequency?: CisInstructionCisInstruction1PayFrequency | null;

		/** The sub contractors' payment method */
		PaymentMethod?: EmployeeEmployee1PaymentMethod | null;

		/** The sub contractors' region */
		Region?: EmployeeEmployee1Region | null;

		/**
		 * The sub contractors' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** The sub contractors' taxation status */
		TaxationStatus?: SubContractorSubContractor1TaxationStatus | null;

		/** The sub contractors' telephone */
		Telephone?: string | null;

		/** The sub contractors' territory */
		Territory?: EmployeeEmployee1Territory | null;

		/** The sub contractors' title */
		Title?: string | null;

		/** The sub contractors' trading name */
		TradingName?: string | null;

		/** The sub contractors' unique tax reference */
		UniqueTaxReference?: string | null;

		/** The sub contractors' vat registered */
		VatRegistered?: boolean | null;

		/** The sub contractors' vat registration number */
		VatRegistrationNumber?: string | null;

		/** The sub contractors' verification date */
		VerificationDate?: Date | null;

		/** The sub contractors' verification number */
		VerificationNumber?: string | null;

		/** The sub contractors' works number */
		WorksNumber?: string | null;
	}
	export interface SubContractorSubContractor1FormProperties {

		/** The sub contractors' business type */
		BusinessType: FormControl<SubContractorSubContractor1BusinessType | null | undefined>,

		/** The sub contractors' company name */
		CompanyName: FormControl<string | null | undefined>,

		/** The sub contractors' company registration number */
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/** The sub contractors' deactivated */
		Deactivated: FormControl<boolean | null | undefined>,

		/**
		 * The sub contractors' effective date
		 * Type: DateOnly
		 */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The sub contractors' first name */
		FirstName: FormControl<string | null | undefined>,

		/** The sub contractors' initials */
		Initials: FormControl<string | null | undefined>,

		/** The sub contractors' last name */
		LastName: FormControl<string | null | undefined>,

		/** The sub contractors' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The sub contractors' middle name */
		MiddleName: FormControl<string | null | undefined>,

		/**
		 * The sub contractors' next revision date
		 * Type: DateOnly
		 */
		NextRevisionDate: FormControl<Date | null | undefined>,

		/** The sub contractors' ni number */
		NiNumber: FormControl<string | null | undefined>,

		/** The sub contractors' partnership name */
		PartnershipName: FormControl<string | null | undefined>,

		/** The sub contractors' partnership unique tax reference */
		PartnershipUniqueTaxReference: FormControl<string | null | undefined>,

		/** The sub contractors' pay frequency */
		PayFrequency: FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>,

		/** The sub contractors' payment method */
		PaymentMethod: FormControl<EmployeeEmployee1PaymentMethod | null | undefined>,

		/** The sub contractors' region */
		Region: FormControl<EmployeeEmployee1Region | null | undefined>,

		/**
		 * The sub contractors' revision
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** The sub contractors' taxation status */
		TaxationStatus: FormControl<SubContractorSubContractor1TaxationStatus | null | undefined>,

		/** The sub contractors' telephone */
		Telephone: FormControl<string | null | undefined>,

		/** The sub contractors' territory */
		Territory: FormControl<EmployeeEmployee1Territory | null | undefined>,

		/** The sub contractors' title */
		Title: FormControl<string | null | undefined>,

		/** The sub contractors' trading name */
		TradingName: FormControl<string | null | undefined>,

		/** The sub contractors' unique tax reference */
		UniqueTaxReference: FormControl<string | null | undefined>,

		/** The sub contractors' vat registered */
		VatRegistered: FormControl<boolean | null | undefined>,

		/** The sub contractors' vat registration number */
		VatRegistrationNumber: FormControl<string | null | undefined>,

		/** The sub contractors' verification date */
		VerificationDate: FormControl<Date | null | undefined>,

		/** The sub contractors' verification number */
		VerificationNumber: FormControl<string | null | undefined>,

		/** The sub contractors' works number */
		WorksNumber: FormControl<string | null | undefined>,
	}
	export function CreateSubContractorSubContractor1FormGroup() {
		return new FormGroup<SubContractorSubContractor1FormProperties>({
			BusinessType: new FormControl<SubContractorSubContractor1BusinessType | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			Deactivated: new FormControl<boolean | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Initials: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			NextRevisionDate: new FormControl<Date | null | undefined>(undefined),
			NiNumber: new FormControl<string | null | undefined>(undefined),
			PartnershipName: new FormControl<string | null | undefined>(undefined),
			PartnershipUniqueTaxReference: new FormControl<string | null | undefined>(undefined),
			PayFrequency: new FormControl<CisInstructionCisInstruction1PayFrequency | null | undefined>(undefined),
			PaymentMethod: new FormControl<EmployeeEmployee1PaymentMethod | null | undefined>(undefined),
			Region: new FormControl<EmployeeEmployee1Region | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			TaxationStatus: new FormControl<SubContractorSubContractor1TaxationStatus | null | undefined>(undefined),
			Telephone: new FormControl<string | null | undefined>(undefined),
			Territory: new FormControl<EmployeeEmployee1Territory | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TradingName: new FormControl<string | null | undefined>(undefined),
			UniqueTaxReference: new FormControl<string | null | undefined>(undefined),
			VatRegistered: new FormControl<boolean | null | undefined>(undefined),
			VatRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			VerificationDate: new FormControl<Date | null | undefined>(undefined),
			VerificationNumber: new FormControl<string | null | undefined>(undefined),
			WorksNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubContractorSubContractor1Address {

		/** The addresss' line 1 */
		Address1?: string | null;

		/** The addresss' line 2 */
		Address2?: string | null;

		/** The addresss' line 3 */
		Address3?: string | null;

		/** The addresss' line 4 */
		Address4?: string | null;

		/** The addresss' country */
		Country?: string | null;

		/** The addresss' postcode */
		Postcode?: string | null;
	}
	export interface SubContractorSubContractor1AddressFormProperties {

		/** The addresss' line 1 */
		Address1: FormControl<string | null | undefined>,

		/** The addresss' line 2 */
		Address2: FormControl<string | null | undefined>,

		/** The addresss' line 3 */
		Address3: FormControl<string | null | undefined>,

		/** The addresss' line 4 */
		Address4: FormControl<string | null | undefined>,

		/** The addresss' country */
		Country: FormControl<string | null | undefined>,

		/** The addresss' postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateSubContractorSubContractor1AddressFormGroup() {
		return new FormGroup<SubContractorSubContractor1AddressFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubContractorSubContractor1BankAccount {

		/** The bank accounts' account name */
		AccountName?: string | null;

		/** The bank accounts' account number */
		AccountNumber?: string | null;

		/** The bank accounts' branch name */
		BranchName?: string | null;

		/** The bank accounts' reference */
		Reference?: string | null;

		/** The bank accounts' sort code */
		SortCode?: string | null;
	}
	export interface SubContractorSubContractor1BankAccountFormProperties {

		/** The bank accounts' account name */
		AccountName: FormControl<string | null | undefined>,

		/** The bank accounts' account number */
		AccountNumber: FormControl<string | null | undefined>,

		/** The bank accounts' branch name */
		BranchName: FormControl<string | null | undefined>,

		/** The bank accounts' reference */
		Reference: FormControl<string | null | undefined>,

		/** The bank accounts' sort code */
		SortCode: FormControl<string | null | undefined>,
	}
	export function CreateSubContractorSubContractor1BankAccountFormGroup() {
		return new FormGroup<SubContractorSubContractor1BankAccountFormProperties>({
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountNumber: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			SortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubContractorSubContractor1BusinessType { SoleTrader = 'SoleTrader', Company = 'Company', Partnership = 'Partnership', Trust = 'Trust' }

	export enum SubContractorSubContractor1TaxationStatus { Unmatched = 'Unmatched', Net = 'Net', Gross = 'Gross' }

	export interface Tag {
		Tag1?: TagTag1;
	}
	export interface TagFormProperties {
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
		});

	}

	export interface TagTag1 {

		/** The tags' created */
		Created?: Date | null;

		/** The tags' tagged item */
		TaggedItem?: TagTag1TaggedItem;

		/** The tags' text */
		Text?: string | null;
	}
	export interface TagTag1FormProperties {

		/** The tags' created */
		Created: FormControl<Date | null | undefined>,

		/** The tags' text */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateTagTag1FormGroup() {
		return new FormGroup<TagTag1FormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagTag1TaggedItem {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface TagTag1TaggedItemFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateTagTag1TaggedItemFormGroup() {
		return new FormGroup<TagTag1TaggedItemFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThirdPartyJobInstruction {
		ThirdPartyJobInstruction1?: ThirdPartyJobInstructionThirdPartyJobInstruction1;
	}
	export interface ThirdPartyJobInstructionFormProperties {
	}
	export function CreateThirdPartyJobInstructionFormGroup() {
		return new FormGroup<ThirdPartyJobInstructionFormProperties>({
		});

	}

	export interface ThirdPartyJobInstructionThirdPartyJobInstruction1 {

		/** The third party job instructions' employer href */
		EmployerHref?: string | null;

		/** The third party job instructions' holding date */
		HoldingDate?: Date | null;

		/** The third party job instructions' instruction type */
		InstructionType?: string | null;

		/** The third party job instructions' meta data */
		MetaData?: string | null;

		/** The third party job instructions' pay load */
		PayLoad?: string | null;
	}
	export interface ThirdPartyJobInstructionThirdPartyJobInstruction1FormProperties {

		/** The third party job instructions' employer href */
		EmployerHref: FormControl<string | null | undefined>,

		/** The third party job instructions' holding date */
		HoldingDate: FormControl<Date | null | undefined>,

		/** The third party job instructions' instruction type */
		InstructionType: FormControl<string | null | undefined>,

		/** The third party job instructions' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The third party job instructions' pay load */
		PayLoad: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyJobInstructionThirdPartyJobInstruction1FormGroup() {
		return new FormGroup<ThirdPartyJobInstructionThirdPartyJobInstruction1FormProperties>({
			EmployerHref: new FormControl<string | null | undefined>(undefined),
			HoldingDate: new FormControl<Date | null | undefined>(undefined),
			InstructionType: new FormControl<string | null | undefined>(undefined),
			MetaData: new FormControl<string | null | undefined>(undefined),
			PayLoad: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThirdPartyTransaction {
		ThirdPartyTransaction1?: ThirdPartyTransactionThirdPartyTransaction1;
	}
	export interface ThirdPartyTransactionFormProperties {
	}
	export function CreateThirdPartyTransactionFormGroup() {
		return new FormGroup<ThirdPartyTransactionFormProperties>({
		});

	}

	export interface ThirdPartyTransactionThirdPartyTransaction1 {

		/** The third party transactions' employer core */
		EmployerCore?: ThirdPartyTransactionThirdPartyTransaction1EmployerCore;

		/** The third party transactions' job type */
		JobType?: string | null;

		/** The third party transactions' request */
		Request?: string | null;

		/** The third party transactions' response */
		Response?: string | null;

		/** The third party transactions' transaction status */
		TransactionStatus?: ThirdPartyTransactionThirdPartyTransaction1TransactionStatus | null;

		/** The third party transactions' transmission date */
		TransmissionDate?: Date | null;
	}
	export interface ThirdPartyTransactionThirdPartyTransaction1FormProperties {

		/** The third party transactions' job type */
		JobType: FormControl<string | null | undefined>,

		/** The third party transactions' request */
		Request: FormControl<string | null | undefined>,

		/** The third party transactions' response */
		Response: FormControl<string | null | undefined>,

		/** The third party transactions' transaction status */
		TransactionStatus: FormControl<ThirdPartyTransactionThirdPartyTransaction1TransactionStatus | null | undefined>,

		/** The third party transactions' transmission date */
		TransmissionDate: FormControl<Date | null | undefined>,
	}
	export function CreateThirdPartyTransactionThirdPartyTransaction1FormGroup() {
		return new FormGroup<ThirdPartyTransactionThirdPartyTransaction1FormProperties>({
			JobType: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
			Response: new FormControl<string | null | undefined>(undefined),
			TransactionStatus: new FormControl<ThirdPartyTransactionThirdPartyTransaction1TransactionStatus | null | undefined>(undefined),
			TransmissionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ThirdPartyTransactionThirdPartyTransaction1EmployerCore {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface ThirdPartyTransactionThirdPartyTransaction1EmployerCoreFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyTransactionThirdPartyTransaction1EmployerCoreFormGroup() {
		return new FormGroup<ThirdPartyTransactionThirdPartyTransaction1EmployerCoreFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyTransactionThirdPartyTransaction1TransactionStatus { Unknown = 'Unknown', Success = 'Success', Failure = 'Failure' }

	export interface TransformDefinition {
		TransformDefinition1?: TransformDefinitionTransformDefinition1;
	}
	export interface TransformDefinitionFormProperties {
	}
	export function CreateTransformDefinitionFormGroup() {
		return new FormGroup<TransformDefinitionFormProperties>({
		});

	}

	export interface TransformDefinitionTransformDefinition1 {

		/** The transform definitions' active */
		Active?: boolean | null;

		/** The transform definitions' content type */
		ContentType?: string | null;

		/** The transform definitions' definition */
		Definition?: string | null;

		/** The transform definitions' definition type */
		DefinitionType?: string | null;

		/** The transform definitions' readonly */
		Readonly?: boolean | null;

		/** The transform definitions' supported reports */
		SupportedReports?: string | null;

		/**
		 * The transform definitions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear?: number | null;

		/** The transform definitions' title */
		Title?: string | null;

		/** The transform definitions' version */
		Version?: string | null;
	}
	export interface TransformDefinitionTransformDefinition1FormProperties {

		/** The transform definitions' active */
		Active: FormControl<boolean | null | undefined>,

		/** The transform definitions' content type */
		ContentType: FormControl<string | null | undefined>,

		/** The transform definitions' definition */
		Definition: FormControl<string | null | undefined>,

		/** The transform definitions' definition type */
		DefinitionType: FormControl<string | null | undefined>,

		/** The transform definitions' readonly */
		Readonly: FormControl<boolean | null | undefined>,

		/** The transform definitions' supported reports */
		SupportedReports: FormControl<string | null | undefined>,

		/**
		 * The transform definitions' tax year
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxYear: FormControl<number | null | undefined>,

		/** The transform definitions' title */
		Title: FormControl<string | null | undefined>,

		/** The transform definitions' version */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateTransformDefinitionTransformDefinition1FormGroup() {
		return new FormGroup<TransformDefinitionTransformDefinition1FormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			Definition: new FormControl<string | null | undefined>(undefined),
			DefinitionType: new FormControl<string | null | undefined>(undefined),
			Readonly: new FormControl<boolean | null | undefined>(undefined),
			SupportedReports: new FormControl<string | null | undefined>(undefined),
			TaxYear: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		User1?: UserUser1;
	}
	export interface UserFormProperties {
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
		});

	}

	export interface UserUser1 {

		/** The users' meta data */
		MetaData?: string | null;

		/** The users' permissions */
		Permissions?: UserUser1Permissions;

		/** The users' roles */
		Roles?: UserUser1Roles;

		/** The users' user identifier */
		UserIdentifier?: string | null;
	}
	export interface UserUser1FormProperties {

		/** The users' meta data */
		MetaData: FormControl<string | null | undefined>,

		/** The users' user identifier */
		UserIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUserUser1FormGroup() {
		return new FormGroup<UserUser1FormProperties>({
			MetaData: new FormControl<string | null | undefined>(undefined),
			UserIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUser1Permissions {
		UserUser1PermissionsPermission?: Array<UserUser1PermissionsPermission>;
	}
	export interface UserUser1PermissionsFormProperties {
	}
	export function CreateUserUser1PermissionsFormGroup() {
		return new FormGroup<UserUser1PermissionsFormProperties>({
		});

	}

	export interface UserUser1PermissionsPermission {

		/** The links' href */
		'@href'?: string | null;

		/** The links' target type */
		'@rel'?: string | null;

		/** The links' title */
		'@title'?: string | null;
	}
	export interface UserUser1PermissionsPermissionFormProperties {

		/** The links' href */
		'@href': FormControl<string | null | undefined>,

		/** The links' target type */
		'@rel': FormControl<string | null | undefined>,

		/** The links' title */
		'@title': FormControl<string | null | undefined>,
	}
	export function CreateUserUser1PermissionsPermissionFormGroup() {
		return new FormGroup<UserUser1PermissionsPermissionFormProperties>({
			'@href': new FormControl<string | null | undefined>(undefined),
			'@rel': new FormControl<string | null | undefined>(undefined),
			'@title': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUser1Roles {
		Role?: Array<string>;
	}
	export interface UserUser1RolesFormProperties {
	}
	export function CreateUserUser1RolesFormGroup() {
		return new FormGroup<UserUser1RolesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete an Employer
		 * Delete the specified employer
		 * Delete Employer/{EmployerId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {void} 
		 */
		DeleteEmployer(EmployerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the employer
		 * Get the specified employer object
		 * Get Employer/{EmployerId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {Employer} The employer object.
		 */
		GetEmployer(EmployerId: string): Observable<Employer> {
			return this.http.get<Employer>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)), {});
		}

		/**
		 * Patches the employer
		 * Patches the specified employer with the supplied values
		 * Patch Employer/{EmployerId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Employer} requestBody The employer object.
		 * @return {Employer} The employer object.
		 */
		PatchEmployer(EmployerId: string, requestBody: Employer): Observable<Employer> {
			return this.http.patch<Employer>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Employer
		 * Updates the existing specified employer object
		 * Put Employer/{EmployerId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Employer} requestBody The employer object.
		 * @return {Employer} The employer object.
		 */
		PutEmployer(EmployerId: string, requestBody: Employer): Observable<Employer> {
			return this.http.put<Employer>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an CIS line type
		 * Delete the specified CIS line type
		 * Delete Employer/{EmployerId}/CisLineType/{CisLineTypeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @return {void} 
		 */
		DeleteCisLineType(EmployerId: string, CisLineTypeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS line type from employer
		 * Gets the specified CIS line type from employer.
		 * Get Employer/{EmployerId}/CisLineType/{CisLineTypeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @return {CisLineType} The cis line type object.
		 */
		GetCisLineTypeFromEmployer(EmployerId: string, CisLineTypeId: string): Observable<CisLineType> {
			return this.http.get<CisLineType>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)), {});
		}

		/**
		 * Updates the CIS line type
		 * Updates the existing specified CIS line type object
		 * Put Employer/{EmployerId}/CisLineType/{CisLineTypeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @param {CisLineType} requestBody The CIS line type object.
		 * @return {CisLineType} The cis line type object.
		 */
		PutCisLineTypeIntoEmployer(EmployerId: string, CisLineTypeId: string, requestBody: CisLineType): Observable<CisLineType> {
			return this.http.put<CisLineType>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete CIS line type tag
		 * Deletes a tag from the CIS line type
		 * Delete Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteCisLineTypeTag(EmployerId: string, CisLineTypeId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS line type tag
		 * Gets the tag from the CIS line type
		 * Get Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromCisLineType(EmployerId: string, CisLineTypeId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert CIS line type tag
		 * Inserts a new tag on the CIS line type
		 * Put Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutCisLineTypeTag(EmployerId: string, CisLineTypeId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from the CIS line type
		 * Gets all the tags from the CIS line type
		 * Get Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisLineTypeId The CIS line type unique identifier. E.g. TYPEA
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromCisLineType(EmployerId: string, CisLineTypeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineType/' + (CisLineTypeId == null ? '' : encodeURIComponent(CisLineTypeId)) + '/Tags', {});
		}

		/**
		 * Get CIS line types from employer.
		 * Get links to all CIS line types for the specified employer.
		 * Get Employer/{EmployerId}/CisLineTypes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisLineTypesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineTypes', {});
		}

		/**
		 * Create a new CIS line type
		 * Create a new CIS line type object
		 * Post Employer/{EmployerId}/CisLineTypes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {CisLineType} requestBody The CIS line type object.
		 * @return {void} 
		 */
		PostCisLineTypeIntoEmployer(EmployerId: string, requestBody: CisLineType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS line types with tag
		 * Gets the CIS line type with the tag
		 * Get Employer/{EmployerId}/CisLineTypes/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisLineTypesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineTypes/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all CIS line type tags
		 * Gets all the CIS line type tags
		 * Get Employer/{EmployerId}/CisLineTypes/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllCisLineTypeTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisLineTypes/Tags', {});
		}

		/**
		 * Delete the CIS transaction
		 * Deletes the specified CIS transaction
		 * Delete Employer/{EmployerId}/CisTransaction/{CisTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisTransactionId The CIS transaction unique identifier. E.g. CISTRAN001
		 * @return {void} No Content
		 */
		DeleteCisTransaction(EmployerId: string, CisTransactionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisTransaction/' + (CisTransactionId == null ? '' : encodeURIComponent(CisTransactionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the CIS transaction
		 * Returns the specified CIS transaction
		 * Get Employer/{EmployerId}/CisTransaction/{CisTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} CisTransactionId The CIS transaction unique identifier. E.g. CISTRAN001
		 * @return {CisTransaction} The cis transaction object.
		 */
		GetCisTransactionFromEmployer(EmployerId: string, CisTransactionId: string): Observable<CisTransaction> {
			return this.http.get<CisTransaction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisTransaction/' + (CisTransactionId == null ? '' : encodeURIComponent(CisTransactionId)), {});
		}

		/**
		 * Get all CIS transactions for the employer
		 * Get links for all CIS transactions for the specified employer
		 * Get Employer/{EmployerId}/CisTransactions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisTransactionsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/CisTransactions', {});
		}

		/**
		 * Deletes the DPS message
		 * Deletes the DPS message
		 * Delete Employer/{EmployerId}/DpsMessage/{DpsMessageId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} DpsMessageId The DPS message unique identifier. E.g. DPS001
		 * @return {void} 
		 */
		DeleteDpsMessage(EmployerId: string, DpsMessageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessage/' + (DpsMessageId == null ? '' : encodeURIComponent(DpsMessageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the DPS message
		 * Gets the DPS message
		 * Get Employer/{EmployerId}/DpsMessage/{DpsMessageId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} DpsMessageId The DPS message unique identifier. E.g. DPS001
		 * @return {DpsMessage} The dps message object.
		 */
		GetDpsMessageFromEmployer(EmployerId: string, DpsMessageId: string): Observable<DpsMessage> {
			return this.http.get<DpsMessage>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessage/' + (DpsMessageId == null ? '' : encodeURIComponent(DpsMessageId)), {});
		}

		/**
		 * Patches the DPS message
		 * Patches the specified DPS message with the supplied values
		 * Patch Employer/{EmployerId}/DpsMessage/{DpsMessageId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} DpsMessageId The DPS message unique identifier. E.g. DPS001
		 * @return {DpsMessage} The dps message object.
		 */
		PatchDpsMessage(EmployerId: string, DpsMessageId: string): Observable<DpsMessage> {
			return this.http.patch<DpsMessage>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessage/' + (DpsMessageId == null ? '' : encodeURIComponent(DpsMessageId)), null, {});
		}

		/**
		 * Puts the DPS message
		 * Puts the DPS message
		 * Put Employer/{EmployerId}/DpsMessage/{DpsMessageId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} DpsMessageId The DPS message unique identifier. E.g. DPS001
		 * @return {void} 
		 */
		PutDpsMessage(EmployerId: string, DpsMessageId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessage/' + (DpsMessageId == null ? '' : encodeURIComponent(DpsMessageId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the DPS messages
		 * Gets the DPS message links
		 * Get Employer/{EmployerId}/DpsMessages
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetDpsMessagesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessages', {});
		}

		/**
		 * Posta the DPS message
		 * Insert new DPS message
		 * Post Employer/{EmployerId}/DpsMessages
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {void} 
		 */
		PostDpsMessage(EmployerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/DpsMessages', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an Employee
		 * Delete the specified employee
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {void} 
		 */
		DeleteEmployee(EmployerId: string, EmployeeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee from employer
		 * Gets the specified employee from employer by employee code.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {Employee} The employee object.
		 */
		GetEmployeeFromEmployer(EmployerId: string, EmployeeId: string): Observable<Employee> {
			return this.http.get<Employee>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), {});
		}

		/**
		 * Patches the employee
		 * Patches the specified employee with the supplied values
		 * Patch Employer/{EmployerId}/Employee/{EmployeeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Employee} requestBody The employee object.
		 * @return {Employee} The employee object.
		 */
		PatchEmployee(EmployerId: string, EmployeeId: string, requestBody: Employee): Observable<Employee> {
			return this.http.patch<Employee>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Employee
		 * Updates the existing specified employee object
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Employee} requestBody The employee object.
		 * @return {Employee} The employee object.
		 */
		PutEmployeeIntoEmployer(EmployerId: string, EmployeeId: string, requestBody: Employee): Observable<Employee> {
			return this.http.put<Employee>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete auto enrolment assessment
		 * Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} AEAssessmentId The auto enrolment assessment unique identifier. E.g. AE001
		 * @return {void} No Content
		 */
		DeleteAEAssessment(EmployerId: string, EmployeeId: string, AEAssessmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/AEAssessment/' + (AEAssessmentId == null ? '' : encodeURIComponent(AEAssessmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the auto enrolment assessment
		 * Gets the auto enrolment assessment from the specified employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} AEAssessmentId The auto enrolment assessment unique identifier. E.g. AE001
		 * @return {AEAssessment} The a e assessment object.
		 */
		GetAEAssessmentFromEmployee(EmployerId: string, EmployeeId: string, AEAssessmentId: string): Observable<AEAssessment> {
			return this.http.get<AEAssessment>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/AEAssessment/' + (AEAssessmentId == null ? '' : encodeURIComponent(AEAssessmentId)), {});
		}

		/**
		 * Insert new auto enrolment assessment
		 * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} AEAssessmentId The auto enrolment assessment unique identifier. E.g. AE001
		 * @param {AEAssessment} requestBody The auto enrolment assessment object.
		 * @return {AEAssessment} The a e assessment object.
		 */
		PutNewAEAssessment(EmployerId: string, EmployeeId: string, AEAssessmentId: string, requestBody: AEAssessment): Observable<AEAssessment> {
			return this.http.put<AEAssessment>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/AEAssessment/' + (AEAssessmentId == null ? '' : encodeURIComponent(AEAssessmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the auto enrolment assessments
		 * Gets all auto enrolment assessments from the specified employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessments
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAEAssessmentsFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/AEAssessments', {});
		}

		/**
		 * Insert new auto enrolment assessment
		 * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
		 * Post Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessments
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {AEAssessment} requestBody The auto enrolment assessment object.
		 * @return {Link} The link object.
		 */
		PostNewAEAssessment(EmployerId: string, EmployeeId: string, requestBody: AEAssessment): Observable<Link> {
			return this.http.post<Link>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/AEAssessments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get links to all commentaries for the specified employee
		 * Get links to all commentaries for the specified employee.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Commentaries
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCommentariesFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Commentaries', {});
		}

		/**
		 * Get commentary from employee
		 * Gets the specified commentary report from the employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Commentary/{CommentaryId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} CommentaryId The commentary unique identifier. E.g. C001
		 * @return {Commentary} The commentary object.
		 */
		GetCommentaryFromEmployee(EmployerId: string, EmployeeId: string, CommentaryId: string): Observable<Commentary> {
			return this.http.get<Commentary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Commentary/' + (CommentaryId == null ? '' : encodeURIComponent(CommentaryId)), {});
		}

		/**
		 * Gets the journal Lines from the specified employee
		 * Get links to all journal lines for the specified employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/JournalLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalLinesFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/JournalLines', {});
		}

		/**
		 * Deletes a pay instruction
		 * Delete the specified pay instruction
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @return {void} 
		 */
		DeletePayInstruction(EmployerId: string, EmployeeId: string, PayInstructionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified pay instruction from the employee
		 * Returns the specified pay instruction from employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @return {PayInstruction} The pay instruction object.
		 */
		GetPayInstructionFromEmployee(EmployerId: string, EmployeeId: string, PayInstructionId: string): Observable<PayInstruction> {
			return this.http.get<PayInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)), {});
		}

		/**
		 * Sparse Update of a Pay Instruction
		 * Patches the specified pay instruction with the supplied values
		 * Patch Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @param {PayInstruction} requestBody The pay instruction object.
		 * @return {PayInstruction} The pay instruction object.
		 */
		PatchPayInstruction(EmployerId: string, EmployeeId: string, PayInstructionId: string, requestBody: PayInstruction): Observable<PayInstruction> {
			return this.http.patch<PayInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a Pay Instruction
		 * Updates the existing specified pay instruction object
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @param {PayInstruction} requestBody The pay instruction object.
		 * @return {PayInstruction} The pay instruction object.
		 */
		PutPayInstruction(EmployerId: string, EmployeeId: string, PayInstructionId: string, requestBody: PayInstruction): Observable<PayInstruction> {
			return this.http.put<PayInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete pay instruction tag
		 * Deletes a tag from the pay instruction
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePayInstructionTag(EmployerId: string, EmployeeId: string, PayInstructionId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay instruction tag
		 * Gets the tag from the pay instruction
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPayInstruction(EmployerId: string, EmployeeId: string, PayInstructionId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert pay instruction tag
		 * Inserts a new tag on the pay instruction
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPayInstructionTag(EmployerId: string, EmployeeId: string, PayInstructionId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from the pay instruction
		 * Gets all the tags from the pay instruction
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstruction/{PayInstructionId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayInstructionId The pay instruction unique identifier. E.g. SAL001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPayInstruction(EmployerId: string, EmployeeId: string, PayInstructionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstruction/' + (PayInstructionId == null ? '' : encodeURIComponent(PayInstructionId)) + '/Tags', {});
		}

		/**
		 * Gets the pay instructions from the specified employee
		 * Get links to all pay instructions for the specified employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayInstructionsFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstructions', {});
		}

		/**
		 * Creates a new Pay Instruction
		 * Creates a new pay instruction object
		 * Post Employer/{EmployerId}/Employee/{EmployeeId}/PayInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {PayInstruction} requestBody The pay instruction object.
		 * @return {void} 
		 */
		PostPayInstruction(EmployerId: string, EmployeeId: string, requestBody: PayInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstructions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay instructions with tag
		 * Gets the pay instructions with the tag
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstructions/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayInstructionsWithTag(EmployerId: string, EmployeeId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstructions/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all pay instruction tags
		 * Gets all the pay instruction tags
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayInstructions/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPayInstructionTags(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayInstructions/Tags', {});
		}

		/**
		 * Gets the specified pay line from the employee
		 * Returns the specified pay line from employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayLineId The pay line unique identifier. E.g. PL001
		 * @return {PayLine} The pay line object.
		 */
		GetPayLineFromEmployee(EmployerId: string, EmployeeId: string, PayLineId: string): Observable<PayLine> {
			return this.http.get<PayLine>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLine/' + (PayLineId == null ? '' : encodeURIComponent(PayLineId)), {});
		}

		/**
		 * Delete pay line tag
		 * Deletes a tag from the pay line
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayLineId The pay line unique identifier. E.g. PL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePayLineTag(EmployerId: string, EmployeeId: string, PayLineId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLine/' + (PayLineId == null ? '' : encodeURIComponent(PayLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay line tag
		 * Gets the tag from the pay line
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayLineId The pay line unique identifier. E.g. PL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPayLine(EmployerId: string, EmployeeId: string, PayLineId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLine/' + (PayLineId == null ? '' : encodeURIComponent(PayLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert pay line tag
		 * Inserts a new tag on the pay line
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayLineId The pay line unique identifier. E.g. PL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPayLineTag(EmployerId: string, EmployeeId: string, PayLineId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLine/' + (PayLineId == null ? '' : encodeURIComponent(PayLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from the pay line
		 * Gets all the tags from the pay line
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} PayLineId The pay line unique identifier. E.g. PL001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPayLine(EmployerId: string, EmployeeId: string, PayLineId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLine/' + (PayLineId == null ? '' : encodeURIComponent(PayLineId)) + '/Tags', {});
		}

		/**
		 * Gets the pay lines from the specified employee
		 * Get links to all pay lines for the specified employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayLinesFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLines', {});
		}

		/**
		 * Get pay lines with tag
		 * Gets the pay line with the tag
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLines/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayLinesWithTag(EmployerId: string, EmployeeId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLines/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all pay line tags
		 * Gets all the pay line tags
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayLines/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPayLineTags(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayLines/Tags', {});
		}

		/**
		 * Gets the pay runs from the employee
		 * Get links to all pay runs for the specified employee.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/PayRuns
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayRunsFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayRuns', {});
		}

		/**
		 * Delete an Employee revision matching the specified revision number.
		 * Deletes the specified employee revision for the matching revision number
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeleteEmployeeRevisionByNumber(EmployerId: string, EmployeeId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the employee by revision number
		 * Get the employee revision matching the specified revision number
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {Employee} The employee object.
		 */
		GetEmployeeRevisionByNumber(EmployerId: string, EmployeeId: string, RevisionNumber: string): Observable<Employee> {
			return this.http.get<Employee>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Gets the employee summary by revision number
		 * Get the employee revision summary matching the specified revision number
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {EmployeeSummary} The employee summary object.
		 */
		GetEmployeeRevisionSummaryByNumber(EmployerId: string, EmployeeId: string, RevisionNumber: string): Observable<EmployeeSummary> {
			return this.http.get<EmployeeSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)) + '/Summary', {});
		}

		/**
		 * Get all employee revisions
		 * Gets links to all employee revisions
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeeRevisions(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Revisions', {});
		}

		/**
		 * Get all employee revision summaries
		 * Gets links to all employee revision summaries
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Revisions/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeeRevisionSummaries(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Revisions/Summary', {});
		}

		/**
		 * Deletes employee secret
		 * Deletes an employee secret from the given resource location
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		DeleteEmployeeSecret(EmployerId: string, EmployeeId: string, SecretId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee secret
		 * Get the public visible employee secret object
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {EmployeeSecret} The employee secret object.
		 */
		GetEmployeeSecret(EmployerId: string, EmployeeId: string, SecretId: string): Observable<EmployeeSecret> {
			return this.http.get<EmployeeSecret>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), {});
		}

		/**
		 * Create a new employee secret
		 * Create / update an employee secret at the given resource location
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		PutEmployeeSecret(EmployerId: string, EmployeeId: string, SecretId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all employee secret links
		 * Get all the employee secret links
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Secrets
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeeSecrets(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Secrets', {});
		}

		/**
		 * Create a new employee secret
		 * Create new employee secret using auto generated resource location key
		 * Post Employer/{EmployerId}/Employee/{EmployeeId}/Secrets
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {void} 
		 */
		PostEmployeeSecret(EmployerId: string, EmployeeId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Secrets', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee summary from employer
		 * Gets the specified employee summary data from employer by employee code.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {EmployeeSummary} The employee summary object.
		 */
		GetEmployeeSummaryFromEmployer(EmployerId: string, EmployeeId: string): Observable<EmployeeSummary> {
			return this.http.get<EmployeeSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Summary', {});
		}

		/**
		 * Delete employee tag
		 * Deletes a tag from the employee
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteEmployeeTag(EmployerId: string, EmployeeId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee tag
		 * Gets the tag from the employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromEmployee(EmployerId: string, EmployeeId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert employee tag
		 * Inserts a new tag on the employee
		 * Put Employer/{EmployerId}/Employee/{EmployeeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutEmployeeTag(EmployerId: string, EmployeeId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get employee revision tag
		 * Gets the tag from the employee revision
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Tag/{TagId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Tag} The tag object.
		 */
		GetTagFromEmployeeRevision(EmployerId: string, EmployeeId: string, TagId: string, EffectiveDate: Date): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get all employee tags
		 * Gets all the tags from the employee
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromEmployee(EmployerId: string, EmployeeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tags', {});
		}

		/**
		 * Get all employee revision tags
		 * Gets all the tags from the employee revision
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/Tags/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromEmployeeRevision(EmployerId: string, EmployeeId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tags/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Delete an Employee revision matching the specified revision date.
		 * Deletes the specified employee revision for the matching revision date
		 * Delete Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeleteEmployeeRevision(EmployerId: string, EmployeeId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee by effective date.
		 * Returns the employee's state at the specified effective date.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Employee} The employee object.
		 */
		GetEmployeeByEffectiveDate(EmployerId: string, EmployeeId: string, EffectiveDate: Date): Observable<Employee> {
			return this.http.get<Employee>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get employee summary by effective date.
		 * Gets the employee summary for the specified effective date.
		 * Get Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {EmployeeSummary} The employee summary object.
		 */
		GetEmployeeSummaryByEffectiveDate(EmployerId: string, EmployeeId: string, EffectiveDate: Date): Observable<EmployeeSummary> {
			return this.http.get<EmployeeSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/' + EffectiveDate.toISOString() + '/Summary', {});
		}

		/**
		 * Get employees from employer.
		 * Get links to all employees for the specified employer.
		 * Get Employer/{EmployerId}/Employees
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees', {});
		}

		/**
		 * Create a new Employee
		 * Create a new employee object
		 * Post Employer/{EmployerId}/Employees
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Employee} requestBody The employee object.
		 * @return {void} 
		 */
		PostEmployeeIntoEmployer(EmployerId: string, requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employee summaries from employer.
		 * Get links to all employee summaries for the specified employer.
		 * Get Employer/{EmployerId}/Employees/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeeSummariesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees/Summary', {});
		}

		/**
		 * Get employees with tag
		 * Gets the employees with the tag
		 * Get Employer/{EmployerId}/Employees/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all employee tags
		 * Gets all the employee tags
		 * Get Employer/{EmployerId}/Employees/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllEmployeeTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees/Tags', {});
		}

		/**
		 * Get employees from employer at a given effective date.
		 * Get links to all employees for the employer on specified effective date.
		 * Get Employer/{EmployerId}/Employees/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get employee summaries from employer at a given effective date.
		 * Get links to all employee summaries for the employer on specified effective date.
		 * Get Employer/{EmployerId}/Employees/{EffectiveDate}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeeSummariesByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Employees/' + EffectiveDate.toISOString() + '/Summary', {});
		}

		/**
		 * Delete an holiday scheme
		 * Delete the specified holiday scheme
		 * Delete Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @return {void} 
		 */
		DeleteHolidayScheme(EmployerId: string, HolidaySchemeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get holiday scheme from employer
		 * Gets the specified holiday scheme from employer.
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @return {HolidayScheme} The holiday scheme object.
		 */
		GetHolidaySchemeFromEmployer(EmployerId: string, HolidaySchemeId: string): Observable<HolidayScheme> {
			return this.http.get<HolidayScheme>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)), {});
		}

		/**
		 * Patches the holiday scheme
		 * Patches the specified holiday scheme with the supplied values
		 * Patch Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {HolidayScheme} requestBody The holiday scheme object.
		 * @return {HolidayScheme} The holiday scheme object.
		 */
		PatchHolidayScheme(EmployerId: string, HolidaySchemeId: string, requestBody: HolidayScheme): Observable<HolidayScheme> {
			return this.http.patch<HolidayScheme>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the holiday scheme
		 * Updates the existing specified holiday scheme object
		 * Put Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {HolidayScheme} requestBody The holiday scheme object.
		 * @return {HolidayScheme} The holiday scheme object.
		 */
		PutHolidaySchemeIntoEmployer(EmployerId: string, HolidaySchemeId: string, requestBody: HolidayScheme): Observable<HolidayScheme> {
			return this.http.put<HolidayScheme>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an HolidayScheme revision matching the specified revision number.
		 * Deletes the specified holiday scheme revision for the matching revision number
		 * Delete Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeleteHolidaySchemeRevisionByNumber(EmployerId: string, HolidaySchemeId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the holiday scheme revision by revision number
		 * Get the holiday scheme revision matching the specified revision number
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {HolidayScheme} The holiday scheme object.
		 */
		GetHolidaySchemeRevisionByNumber(EmployerId: string, HolidaySchemeId: string, RevisionNumber: string): Observable<HolidayScheme> {
			return this.http.get<HolidayScheme>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Get all holiday scheme revisions
		 * Gets links to all the holiday scheme revisions
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetHolidaySchemeRevisions(EmployerId: string, HolidaySchemeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Revisions', {});
		}

		/**
		 * Delete holiday scheme tag
		 * Deletes a tag from the holiday scheme
		 * Delete Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteHolidaySchemeTag(EmployerId: string, HolidaySchemeId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get holiday scheme tag
		 * Gets the tag from the holiday scheme
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromHolidayScheme(EmployerId: string, HolidaySchemeId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert holiday scheme tag
		 * Inserts a new tag on the holiday scheme
		 * Put Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutHolidaySchemeTag(EmployerId: string, HolidaySchemeId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get holiday scheme revision tag
		 * Gets the tag from the holiday scheme revision
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Tag} The tag object.
		 */
		GetTagFromHolidaySchemeRevision(EmployerId: string, HolidaySchemeId: string, TagId: string, EffectiveDate: Date): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get all tags from the holiday scheme
		 * Gets all the tags from the holiday scheme
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromHolidayScheme(EmployerId: string, HolidaySchemeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tags', {});
		}

		/**
		 * Get all holiday scheme revision tags
		 * Gets all the tags from the holiday scheme revision
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tags/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromHolidaySchemeRevision(EmployerId: string, HolidaySchemeId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/Tags/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Delete an holiday scheme revision matching the specified revision date.
		 * Deletes the specified holiday scheme revision for the matching revision date
		 * Delete Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeleteHolidaySchemeRevision(EmployerId: string, HolidaySchemeId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get holiday scheme by effective date.
		 * Returns the holiday scheme's state at the specified effective date.
		 * Get Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} HolidaySchemeId The holiday schemes' unique identifier. E.g HOLSCH001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {HolidayScheme} The holiday scheme object.
		 */
		GetHolidaySchemeByEffectiveDate(EmployerId: string, HolidaySchemeId: string, EffectiveDate: Date): Observable<HolidayScheme> {
			return this.http.get<HolidayScheme>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidayScheme/' + (HolidaySchemeId == null ? '' : encodeURIComponent(HolidaySchemeId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get holiday schemes from employer.
		 * Get links to all holiday schemes for the specified employer.
		 * Get Employer/{EmployerId}/HolidaySchemes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetHolidaySchemesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidaySchemes', {});
		}

		/**
		 * Create a new holiday scheme
		 * Create a new holiday scheme object
		 * Post Employer/{EmployerId}/HolidaySchemes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {HolidayScheme} requestBody The holiday scheme object.
		 * @return {void} 
		 */
		PostHolidaySchemeIntoEmployer(EmployerId: string, requestBody: HolidayScheme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidaySchemes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get holiday schemes with tag
		 * Gets the holiday scheme with the tag
		 * Get Employer/{EmployerId}/HolidaySchemes/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetHolidaySchemesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidaySchemes/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all holiday scheme tags
		 * Gets all the holiday scheme tags
		 * Get Employer/{EmployerId}/HolidaySchemes/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllHolidaySchemeTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidaySchemes/Tags', {});
		}

		/**
		 * Get holiday schemes from employer at a given effective date.
		 * Get links to all holiday schemes for the employer on specified effective date.
		 * Get Employer/{EmployerId}/HolidaySchemes/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetHolidaySchemesByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/HolidaySchemes/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Deletes a Journal instruction
		 * Delete the specified Journal instruction
		 * Delete Employer/{EmployerId}/JournalInstruction/{JournalInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {void} 
		 */
		DeleteJournalInstruction(EmployerId: string, JournalInstructionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified journal instruction from the employer
		 * Returns the specified journal instruction from employer
		 * Get Employer/{EmployerId}/JournalInstruction/{JournalInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {JournalInstruction} The journal instruction object.
		 */
		GetJournalInstructionFromEmployer(EmployerId: string, JournalInstructionId: string): Observable<JournalInstruction> {
			return this.http.get<JournalInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), {});
		}

		/**
		 * Update a Journal Instruction
		 * Updates the existing specified Journal instruction object
		 * Put Employer/{EmployerId}/JournalInstruction/{JournalInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {JournalInstruction} The journal instruction object.
		 */
		PutJournalInstruction(EmployerId: string, JournalInstructionId: string): Observable<JournalInstruction> {
			return this.http.put<JournalInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), null, {});
		}

		/**
		 * Gets the Journal instructions from the specified employer
		 * Get links to all journal instructions for the specified employer
		 * Get Employer/{EmployerId}/JournalInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalInstructionsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalInstructions', {});
		}

		/**
		 * Creates a new Journal Instruction
		 * Creates a new Journal instruction object
		 * Post Employer/{EmployerId}/JournalInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {void} 
		 */
		PostJournalInstruction(EmployerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalInstructions', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified journal Line from the employer
		 * Returns the specified journal Line from employer
		 * Get Employer/{EmployerId}/JournalLine/{JournalLineId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalLineId The journal line unique identifier. E.g JL001
		 * @return {JournalLine} The journal line object.
		 */
		GetJournalLineFromEmployer(EmployerId: string, JournalLineId: string): Observable<JournalLine> {
			return this.http.get<JournalLine>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLine/' + (JournalLineId == null ? '' : encodeURIComponent(JournalLineId)), {});
		}

		/**
		 * Delete journal line tag
		 * Deletes a tag from the journal line
		 * Delete Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalLineId The journal line unique identifier. E.g JL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteJournalLineTag(EmployerId: string, JournalLineId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLine/' + (JournalLineId == null ? '' : encodeURIComponent(JournalLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get journal line tag
		 * Gets a tag from the journal line
		 * Get Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalLineId The journal line unique identifier. E.g JL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromJournalLine(EmployerId: string, JournalLineId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLine/' + (JournalLineId == null ? '' : encodeURIComponent(JournalLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert journal line tag
		 * Inserts a tag on the journal line
		 * Put Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalLineId The journal line unique identifier. E.g JL001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutJournalLineTag(EmployerId: string, JournalLineId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLine/' + (JournalLineId == null ? '' : encodeURIComponent(JournalLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get tags from journal line
		 * Gets all tags from the journal line
		 * Get Employer/{EmployerId}/JournalLine/{JournalLineId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} JournalLineId The journal line unique identifier. E.g JL001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromJournalLine(EmployerId: string, JournalLineId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLine/' + (JournalLineId == null ? '' : encodeURIComponent(JournalLineId)) + '/Tags', {});
		}

		/**
		 * Gets the Journal Lines from the specified employer
		 * Get links to all journal Lines for the specified employer
		 * Get Employer/{EmployerId}/JournalLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalLinesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLines', {});
		}

		/**
		 * Get links to tagged journal lines
		 * Gets the journal lines with the specified tag
		 * Get Employer/{EmployerId}/JournalLines/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllJournalLinesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLines/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all journal line tags
		 * Gets all the journal line tags
		 * Get Employer/{EmployerId}/JournalLines/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllJournalLineTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/JournalLines/Tags', {});
		}

		/**
		 * Deletes the nominal codes
		 * Deletes the nominal code
		 * Delete Employer/{EmployerId}/NominalCode/{NominalCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} NominalCodeId The nominal code unique identifier. E.g. NOM001
		 * @return {void} 
		 */
		DeleteNominalCode(EmployerId: string, NominalCodeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCode/' + (NominalCodeId == null ? '' : encodeURIComponent(NominalCodeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the nominal code
		 * Gets the nominal code
		 * Get Employer/{EmployerId}/NominalCode/{NominalCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} NominalCodeId The nominal code unique identifier. E.g. NOM001
		 * @return {NominalCode} The nominal code object.
		 */
		GetNominalCodeFromEmployer(EmployerId: string, NominalCodeId: string): Observable<NominalCode> {
			return this.http.get<NominalCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCode/' + (NominalCodeId == null ? '' : encodeURIComponent(NominalCodeId)), {});
		}

		/**
		 * Insert nominal code
		 * Inserts a new nominal code at the specified resource location
		 * Put Employer/{EmployerId}/NominalCode/{NominalCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} NominalCodeId The nominal code unique identifier. E.g. NOM001
		 * @param {NominalCode} requestBody The nominal code object.
		 * @return {void} 
		 */
		PutNominalCode(EmployerId: string, NominalCodeId: string, requestBody: NominalCode): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCode/' + (NominalCodeId == null ? '' : encodeURIComponent(NominalCodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the pay codes by nominal code
		 * Get the pay codes that share the specified nominal code
		 * Get Employer/{EmployerId}/NominalCode/{NominalCodeId}/PayCodes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} NominalCodeId The nominal code unique identifier. E.g. NOM001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayCodesFromNominalCode(EmployerId: string, NominalCodeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCode/' + (NominalCodeId == null ? '' : encodeURIComponent(NominalCodeId)) + '/PayCodes', {});
		}

		/**
		 * Gets the nominal codes
		 * Gets the nominal code links
		 * Get Employer/{EmployerId}/NominalCodes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetNominalCodesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCodes', {});
		}

		/**
		 * Insert nominal code
		 * Inserts a new nominal code
		 * Post Employer/{EmployerId}/NominalCodes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {NominalCode} requestBody The nominal code object.
		 * @return {void} 
		 */
		PostNominalCode(EmployerId: string, requestBody: NominalCode): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/NominalCodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a pay code
		 * Delete the specified pay code
		 * Delete Employer/{EmployerId}/PayCode/{PayCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @return {void} 
		 */
		DeletePayCode(EmployerId: string, PayCodeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified pay code from the employer
		 * Returns the specified pay code from the employer
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @return {PayCode} The pay code object.
		 */
		GetPayCodeFromEmployer(EmployerId: string, PayCodeId: string): Observable<PayCode> {
			return this.http.get<PayCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)), {});
		}

		/**
		 * Patches the pay code
		 * Patches the specified pay code object with the supplied values
		 * Patch Employer/{EmployerId}/PayCode/{PayCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {PayCode} requestBody The pay code object.
		 * @return {PayCode} The pay code object.
		 */
		PatchPayCode(EmployerId: string, PayCodeId: string, requestBody: PayCode): Observable<PayCode> {
			return this.http.patch<PayCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a pay code
		 * Updates the existing specified pay code object
		 * Put Employer/{EmployerId}/PayCode/{PayCodeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {PayCode} requestBody The pay code object.
		 * @return {PayCode} The pay code object.
		 */
		PutPayCode(EmployerId: string, PayCodeId: string, requestBody: PayCode): Observable<PayCode> {
			return this.http.put<PayCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an PayCode revision matching the specified revision number.
		 * Deletes the specified pay code revision for the matching revision number
		 * Delete Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeletePayCodeRevisionByNumber(EmployerId: string, PayCodeId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the pay code by revision number
		 * Get the pay code revision matching the specified revision number
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {PayCode} The pay code object.
		 */
		GetPayCodeRevisionByNumber(EmployerId: string, PayCodeId: string, RevisionNumber: string): Observable<PayCode> {
			return this.http.get<PayCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Get all revisions of the Pay Code
		 * Returns links to all revisions of the pay code
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayCodeRevisions(EmployerId: string, PayCodeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Revisions', {});
		}

		/**
		 * Delete pay code tag
		 * Deletes a tag from the pay code
		 * Delete Employer/{EmployerId}/PayCode/{PayCodeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePayCodeTag(EmployerId: string, PayCodeId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay code tag
		 * Gets the tag from the pay code
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPayCode(EmployerId: string, PayCodeId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert pay code tag
		 * Inserts a new tag on the pay code
		 * Put Employer/{EmployerId}/PayCode/{PayCodeId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPayCodeTag(EmployerId: string, PayCodeId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all pay code tags
		 * Gets all the tags from the pay code
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPayCode(EmployerId: string, PayCodeId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/Tags', {});
		}

		/**
		 * Deletes a pay code revision
		 * Delete the pay code revision for the specified date
		 * Delete Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeletePayCodeRevision(EmployerId: string, PayCodeId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets pay code for specified date
		 * Gets the pay code revision for the specified effective date
		 * Get Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayCodeId The pay code unique identifier. E.g. BASIC
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {PayCode} The pay code object.
		 */
		GetPayCodeByEffectiveDate(EmployerId: string, PayCodeId: string, EffectiveDate: Date): Observable<PayCode> {
			return this.http.get<PayCode>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCode/' + (PayCodeId == null ? '' : encodeURIComponent(PayCodeId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Gets the pay codes from the employer
		 * Get links to all the pay codes for the specified employer
		 * Get Employer/{EmployerId}/PayCodes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayCodesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCodes', {});
		}

		/**
		 * Create a new pay code
		 * Create a new pay code object
		 * Post Employer/{EmployerId}/PayCodes
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {PayCode} requestBody The pay code object.
		 * @return {void} 
		 */
		PostPayCode(EmployerId: string, requestBody: PayCode): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay codes with tag
		 * Gets the pay codes with the tag
		 * Get Employer/{EmployerId}/PayCodes/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayCodesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCodes/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all pay code tags
		 * Gets all the pay code tags
		 * Get Employer/{EmployerId}/PayCodes/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPayCodeTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCodes/Tags', {});
		}

		/**
		 * Gets all pay codes for specified date
		 * Gets the effective pay code revision for the specified date
		 * Get Employer/{EmployerId}/PayCodes/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayCodesByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PayCodes/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Deletes a pay schedule
		 * Delete the specified pay schedule
		 * Delete Employer/{EmployerId}/PaySchedule/{PayScheduleId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {void} 
		 */
		DeletePaySchedule(EmployerId: string, PayScheduleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified pay schedule from the employer
		 * Returns the specified pay schedule object from employer
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {PaySchedule} The pay schedule object.
		 */
		GetPayScheduleFromEmployer(EmployerId: string, PayScheduleId: string): Observable<PaySchedule> {
			return this.http.get<PaySchedule>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)), {});
		}

		/**
		 * Updates a pay schedule
		 * Updates the existing specified pay schedule object
		 * Put Employer/{EmployerId}/PaySchedule/{PayScheduleId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {PaySchedule} requestBody The pay schedule object.
		 * @return {PaySchedule} The pay schedule object.
		 */
		PutPaySchedule(EmployerId: string, PayScheduleId: string, requestBody: PaySchedule): Observable<PaySchedule> {
			return this.http.put<PaySchedule>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all employees revisions from a pay schedule.
		 * Gets links to all employee revisions that have ever existed in the specified pay schedule.
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesFromPaySchedule(EmployerId: string, PayScheduleId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Employees', {});
		}

		/**
		 * Get employees from a pay schedule on effective date.
		 * Gets links to all employee revisions in the specified pay schedule for the given effective date.
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesFromPayScheduleOnEffectiveDate(EmployerId: string, PayScheduleId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Employees/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Deletes a pay run
		 * Delete the specified pay run
		 * Delete Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {void} 
		 */
		DeletePayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the pay run from the pay schedule
		 * Returns the pay run from the pay schedule
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {PayRun} The pay run object.
		 */
		GetPayRunFromPaySchedule(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<PayRun> {
			return this.http.get<PayRun>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)), {});
		}

		/**
		 * Get the auto enrolment assessments
		 * Gets all auto enrolment assessments from the specified pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/AEAssessments
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAEAssessmentsFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/AEAssessments', {});
		}

		/**
		 * Get links to all commentaries for the specified pay run
		 * Get links to all commentaries for the specified pay run.
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Commentaries
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCommentariesFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Commentaries', {});
		}

		/**
		 * Deletes a pay run employee
		 * Delete pay run results for a single employee
		 * Delete Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Employee/{EmployeeId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {void} 
		 */
		DeletePayRunEmployee(EmployerId: string, PayScheduleId: string, PayRunId: string, EmployeeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get commentary from payrun by specified employee.
		 * Get commentary from payrun by specified employee.
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Employee/{EmployeeId}/Commentary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @param {string} EmployeeId The employees' unique identifier. E.g EE001
		 * @return {Commentary} The commentary object.
		 */
		GetCommentaryFromPayRunByEmployee(EmployerId: string, PayScheduleId: string, PayRunId: string, EmployeeId: string): Observable<Commentary> {
			return this.http.get<Commentary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Employee/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Commentary', {});
		}

		/**
		 * Get employees from the pay run
		 * Gets links to all employees included in the specified pay run.
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Employees
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployeesFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Employees', {});
		}

		/**
		 * Gets the journal Lines from the specified pay run
		 * Get links to all journal lines for the specified pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/JournalLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalLinesFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/JournalLines', {});
		}

		/**
		 * Gets the pay lines from the specified pay run
		 * Get links to all pay lines for the specified pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/PayLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayLinesFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/PayLines', {});
		}

		/**
		 * Gets the report lines from the specified pay run
		 * Returns all report lines associated with the specified pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/ReportLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetReportLinesFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/ReportLines', {});
		}

		/**
		 * Delete pay run tag
		 * Deletes a tag from the pay run
		 * Delete Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePayRunTag(EmployerId: string, PayScheduleId: string, PayRunId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay run tag
		 * Gets the tag from the pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert pay run tag
		 * Inserts a new tag on the pay run
		 * Put Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPayRunTag(EmployerId: string, PayScheduleId: string, PayRunId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all pay run tags
		 * Gets all the tags from the pay run
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} PayRunId The pay runs' unique identifier. E.g. PR001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPayRun(EmployerId: string, PayScheduleId: string, PayRunId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRun/' + (PayRunId == null ? '' : encodeURIComponent(PayRunId)) + '/Tags', {});
		}

		/**
		 * Gets the pay runs from the pay schedule
		 * Get links to all pay runs for the specified pay schedule
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRuns
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayRunsFromPaySchedule(EmployerId: string, PayScheduleId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRuns', {});
		}

		/**
		 * Get pay runs with tag
		 * Gets the pay runs with the tag
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRuns/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayRunsWithTag(EmployerId: string, PayScheduleId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRuns/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all pay run tags
		 * Gets all the pay run tags
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRuns/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPayRunTags(EmployerId: string, PayScheduleId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/PayRuns/Tags', {});
		}

		/**
		 * Delete pay schedule tag
		 * Deletes a tag from the pay schedule
		 * Delete Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePayScheduleTag(EmployerId: string, PayScheduleId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay schedule tag
		 * Gets the tag from the pay schedule
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPaySchedule(EmployerId: string, PayScheduleId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert pay schedule tag
		 * Inserts a new tag on the pay schedule
		 * Put Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPayScheduleTag(EmployerId: string, PayScheduleId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all pay schedule tags
		 * Gets all the tags from the pay schedule
		 * Get Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PayScheduleId The pay schedules' unique identifier. E.g SCH001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPaySchedule(EmployerId: string, PayScheduleId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedule/' + (PayScheduleId == null ? '' : encodeURIComponent(PayScheduleId)) + '/Tags', {});
		}

		/**
		 * Gets the pay schedule from the specified employer
		 * Get links to all pay schedules for the specified employer
		 * Get Employer/{EmployerId}/PaySchedules
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPaySchedulesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedules', {});
		}

		/**
		 * Create a new pay schedule
		 * Create a new pay schedule object
		 * Post Employer/{EmployerId}/PaySchedules
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {PaySchedule} requestBody The pay schedule object.
		 * @return {void} 
		 */
		PostPaySchedule(EmployerId: string, requestBody: PaySchedule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pay schedule with tag
		 * Gets the pay schedules with the tag
		 * Get Employer/{EmployerId}/PaySchedules/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetPaySchedulesWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedules/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all pay schedule tags
		 * Gets all the pay schedule tags
		 * Get Employer/{EmployerId}/PaySchedules/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPayScheduleTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/PaySchedules/Tags', {});
		}

		/**
		 * Delete a Pension
		 * Delete the specified ppension
		 * Delete Employer/{EmployerId}/Pension/{PensionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @return {void} 
		 */
		DeletePension(EmployerId: string, PensionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pension from employer
		 * Gets the specified pension from employer by pension code.
		 * Get Employer/{EmployerId}/Pension/{PensionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @return {Pension} The pension object.
		 */
		GetPensionFromEmployer(EmployerId: string, PensionId: string): Observable<Pension> {
			return this.http.get<Pension>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)), {});
		}

		/**
		 * Patches the pension
		 * Patches the specified pension with the supplied values
		 * Patch Employer/{EmployerId}/Pension/{PensionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {Pension} requestBody The pension object.
		 * @return {Pension} The pension object.
		 */
		PatchPension(EmployerId: string, PensionId: string, requestBody: Pension): Observable<Pension> {
			return this.http.patch<Pension>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Pension
		 * Updates existing or inserts the specified pension object
		 * Put Employer/{EmployerId}/Pension/{PensionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {Pension} requestBody The pension object.
		 * @return {Pension} The pension object.
		 */
		PutPensionIntoEmployer(EmployerId: string, PensionId: string, requestBody: Pension): Observable<Pension> {
			return this.http.put<Pension>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an Pension revision matching the specified revision number.
		 * Deletes the specified pension revision for the matching revision number
		 * Delete Employer/{EmployerId}/Pension/{PensionId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeletePensionRevisionByNumber(EmployerId: string, PensionId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the pension by revision number
		 * Get the pension revision matching the specified revision number
		 * Get Employer/{EmployerId}/Pension/{PensionId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {Pension} The pension object.
		 */
		GetPensionRevisionByNumber(EmployerId: string, PensionId: string, RevisionNumber: string): Observable<Pension> {
			return this.http.get<Pension>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Get all pension revisions
		 * Returns links to all revisions of the pension
		 * Get Employer/{EmployerId}/Pension/{PensionId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPensionRevisions(EmployerId: string, PensionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)) + '/Revisions', {});
		}

		/**
		 * Delete an Pension revision matching the specified revision date.
		 * Deletes the specified pension revision for the matching revision date
		 * Delete Employer/{EmployerId}/Pension/{PensionId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeletePensionRevision(EmployerId: string, PensionId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pension by effective date.
		 * Returns the penion's state at the specified effective date.
		 * Get Employer/{EmployerId}/Pension/{PensionId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} PensionId The pensions' unique identifier. E.g PEN001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Pension} The pension object.
		 */
		GetPensionByEffectiveDate(EmployerId: string, PensionId: string, EffectiveDate: Date): Observable<Pension> {
			return this.http.get<Pension>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pension/' + (PensionId == null ? '' : encodeURIComponent(PensionId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get pensions from employer.
		 * Get links to all pensions for the specified employer.
		 * Get Employer/{EmployerId}/Pensions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetPensionsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pensions', {});
		}

		/**
		 * Create a new Pension
		 * Create a new pension object
		 * Post Employer/{EmployerId}/Pensions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Pension} requestBody The pension object.
		 * @return {void} 
		 */
		PostPensionIntoEmployer(EmployerId: string, requestBody: Pension): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pensions from employer at a given effective date.
		 * Get links to all pensions for the employer on specified effective date.
		 * Get Employer/{EmployerId}/Pensions/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetPensionsByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Pensions/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Gets the specified report line from the employer
		 * Returns the specified pay line from employee
		 * Get Employer/{EmployerId}/ReportLine/{ReportLineId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ReportLineId The report line unique identifier. E.g. RTL001
		 * @return {ReportLine} The report line object.
		 */
		GetReportLineFromEmployer(EmployerId: string, ReportLineId: string): Observable<ReportLine> {
			return this.http.get<ReportLine>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportLine/' + (ReportLineId == null ? '' : encodeURIComponent(ReportLineId)), {});
		}

		/**
		 * Gets the report lines from the specified employer
		 * Get links to all report lines for the specified employee
		 * Get Employer/{EmployerId}/ReportLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetReportLinesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportLines', {});
		}

		/**
		 * Deletes a reporting instruction
		 * Delete the specified reporting instruction
		 * Delete Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ReportingInstructionId The reporting instruction unique identifier. E.g. SERRPT001
		 * @return {void} 
		 */
		DeleteReportingInstruction(EmployerId: string, ReportingInstructionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportingInstruction/' + (ReportingInstructionId == null ? '' : encodeURIComponent(ReportingInstructionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified reporting instruction from the employer
		 * Returns the specified pay instruction from employee
		 * Get Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ReportingInstructionId The reporting instruction unique identifier. E.g. SERRPT001
		 * @return {ReportingInstruction} The reporting instruction object.
		 */
		GetReportingInstructionFromEmployer(EmployerId: string, ReportingInstructionId: string): Observable<ReportingInstruction> {
			return this.http.get<ReportingInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportingInstruction/' + (ReportingInstructionId == null ? '' : encodeURIComponent(ReportingInstructionId)), {});
		}

		/**
		 * Update a reporting Instruction
		 * Updates the existing specified reporting instruction object
		 * Put Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ReportingInstructionId The reporting instruction unique identifier. E.g. SERRPT001
		 * @param {ReportingInstruction} requestBody The reporting instruction object.
		 * @return {ReportingInstruction} The reporting instruction object.
		 */
		PutReportingInstruction(EmployerId: string, ReportingInstructionId: string, requestBody: ReportingInstruction): Observable<ReportingInstruction> {
			return this.http.put<ReportingInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportingInstruction/' + (ReportingInstructionId == null ? '' : encodeURIComponent(ReportingInstructionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the reporting instructions from the specified employer
		 * Get links to all pay instructions for the specified employee
		 * Get Employer/{EmployerId}/ReportingInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetReportingInstructionsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportingInstructions', {});
		}

		/**
		 * Creates a new Reporting Instruction
		 * Creates a new reporting instruction object
		 * Post Employer/{EmployerId}/ReportingInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {ReportingInstruction} requestBody The reporting instruction object.
		 * @return {void} 
		 */
		PostReportingInstruction(EmployerId: string, requestBody: ReportingInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ReportingInstructions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an Employer revision matching the specified revision number.
		 * Deletes the specified employer revision for the matching revision number
		 * Delete Employer/{EmployerId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeleteEmployerRevisionByNumber(EmployerId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the employer by revision number
		 * Get the employer revision matching the specified revision number
		 * Get Employer/{EmployerId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {Employer} The employer object.
		 */
		GetEmployerRevisionByNumber(EmployerId: string, RevisionNumber: string): Observable<Employer> {
			return this.http.get<Employer>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Gets the employer summary by revision number
		 * Get the employer revision summary matching the specified revision number
		 * Get Employer/{EmployerId}/Revision/{RevisionNumber}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {EmployerSummary} The employer summary object.
		 */
		GetEmployerRevisionSummaryByNumber(EmployerId: string, RevisionNumber: string): Observable<EmployerSummary> {
			return this.http.get<EmployerSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)) + '/Summary', {});
		}

		/**
		 * Gets the employer revisions
		 * Gets links to all the employer revisions
		 * Get Employer/{EmployerId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployerRevisions(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Revisions', {});
		}

		/**
		 * Get all employer revision summaries
		 * Gets links to all employer revision summaries
		 * Get Employer/{EmployerId}/Revisions/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployerRevisionSummaries(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Revisions/Summary', {});
		}

		/**
		 * Delete the RTI transaction
		 * Deletes the specified RTI transaction
		 * Delete Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @return {void} No Content
		 */
		DeleteRtiTransaction(EmployerId: string, RtiTransactionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the RTI transaction
		 * Returns the specified RTI transaction
		 * Get Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @return {RtiTransactionBase} The rti transaction base object.
		 */
		GetRtiTransactionFromEmployer(EmployerId: string, RtiTransactionId: string): Observable<RtiTransactionBase> {
			return this.http.get<RtiTransactionBase>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)), {});
		}

		/**
		 * Get the RTI transaction summary
		 * Returns the specified RTI transaction summary data excluding some poroperties
		 * Get Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @return {RtiTransactionBase} The rti transaction base object.
		 */
		GetRtiTransactionSummaryFromEmployer(EmployerId: string, RtiTransactionId: string): Observable<RtiTransactionBase> {
			return this.http.get<RtiTransactionBase>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)) + '/Summary', {});
		}

		/**
		 * Delete RTI transaction tag
		 * Deletes a tag from the RTI transaction
		 * Delete Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteRtiTransactionTag(EmployerId: string, RtiTransactionId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get RTI transaction tag
		 * Gets the tag from the RTI transaction
		 * Get Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromRtiTransaction(EmployerId: string, RtiTransactionId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert RTI transaction tag
		 * Inserts a new tag on the RTI transaction
		 * Put Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutRtiTransactionTag(EmployerId: string, RtiTransactionId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from RTI transaction
		 * Gets all the tags from the RTI transaction
		 * Get Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} RtiTransactionId The RTI transaction unique identifier. E.g. FPS001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromRtiTransaction(EmployerId: string, RtiTransactionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransaction/' + (RtiTransactionId == null ? '' : encodeURIComponent(RtiTransactionId)) + '/Tags', {});
		}

		/**
		 * Get all RTI transactions for the employer
		 * Get links for all RTI transactions for the specified employer
		 * Get Employer/{EmployerId}/RtiTransactions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetRtiTransactionsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransactions', {});
		}

		/**
		 * Get all RTI transaction summaries for the employer
		 * Get links for all RTI transaction summaries for the specified employer
		 * Get Employer/{EmployerId}/RtiTransactions/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetRtiTransactionSummariesFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransactions/Summary', {});
		}

		/**
		 * Get RTI transactions with tag
		 * Gets the RTI transactions with the tag
		 * Get Employer/{EmployerId}/RtiTransactions/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetRtiTransactionsWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransactions/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all RTI transaction tags
		 * Gets all the RTI transaction tags
		 * Get Employer/{EmployerId}/RtiTransactions/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllRtiTransactionTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/RtiTransactions/Tags', {});
		}

		/**
		 * Deletes employer secret
		 * Deletes an employer secret from the given resource location
		 * Delete Employer/{EmployerId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		DeleteEmployerSecret(EmployerId: string, SecretId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employer secret
		 * Get the public visible employer secret object
		 * Get Employer/{EmployerId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {EmployerSecret} The employer secret object.
		 */
		GetEmployerSecret(EmployerId: string, SecretId: string): Observable<EmployerSecret> {
			return this.http.get<EmployerSecret>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), {});
		}

		/**
		 * Create a new employer secret
		 * Create / update an employer secret at the given resource location
		 * Put Employer/{EmployerId}/Secret/{SecretId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		PutEmployerSecret(EmployerId: string, SecretId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all employer secret links
		 * Get all the employer secret links
		 * Get Employer/{EmployerId}/Secrets
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployerSecrets(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Secrets', {});
		}

		/**
		 * Create a new employer secret
		 * Create new employer secret using auto generated resource location key
		 * Post Employer/{EmployerId}/Secrets
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {void} 
		 */
		PostEmployerSecret(EmployerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Secrets', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an sub contractor
		 * Delete the specified sub contractor
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {void} 
		 */
		DeleteSubContractor(EmployerId: string, SubContractorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub contractor from employer
		 * Gets the specified sub contractor from employer.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {SubContractor} The sub contractor object.
		 */
		GetSubContractorFromEmployer(EmployerId: string, SubContractorId: string): Observable<SubContractor> {
			return this.http.get<SubContractor>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)), {});
		}

		/**
		 * Patches the sub contractor
		 * Patches the specified sub contractor with the supplied values
		 * Patch Employer/{EmployerId}/SubContractor/{SubContractorId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {SubContractor} requestBody The sub contractor object.
		 * @return {SubContractor} The sub contractor object.
		 */
		PatchSubContractor(EmployerId: string, SubContractorId: string, requestBody: SubContractor): Observable<SubContractor> {
			return this.http.patch<SubContractor>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the sub contractor
		 * Updates the existing specified sub contractor object
		 * Put Employer/{EmployerId}/SubContractor/{SubContractorId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {SubContractor} requestBody The sub contractor object.
		 * @return {SubContractor} The sub contractor object.
		 */
		PutSubContractorIntoEmployer(EmployerId: string, SubContractorId: string, requestBody: SubContractor): Observable<SubContractor> {
			return this.http.put<SubContractor>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a CIS instruction
		 * Delete the specified CIS instruction
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @return {void} 
		 */
		DeleteCisInstruction(EmployerId: string, SubContractorId: string, CisInstructionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS instruction from sub contractor
		 * Gets the specified CIS instruction from sub contractor.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @return {CisInstruction} The cis instruction object.
		 */
		GetCisInstructionFromSubContractor(EmployerId: string, SubContractorId: string, CisInstructionId: string): Observable<CisInstruction> {
			return this.http.get<CisInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)), {});
		}

		/**
		 * Patches the CIS instruction
		 * Update an existing CIS instruction object
		 * Patch Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @return {CisInstruction} The cis instruction object.
		 */
		PatchCisInstruction(EmployerId: string, SubContractorId: string, CisInstructionId: string): Observable<CisInstruction> {
			return this.http.patch<CisInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)), null, {});
		}

		/**
		 * Updates the CIS instruction
		 * Insert or update existing CIS instruction object
		 * Put Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @param {CisInstruction} requestBody The CIS instruction object.
		 * @return {CisInstruction} The cis instruction object.
		 */
		PutCisInstructionIntoSubContractor(EmployerId: string, SubContractorId: string, CisInstructionId: string, requestBody: CisInstruction): Observable<CisInstruction> {
			return this.http.put<CisInstruction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete CIS instruction tag
		 * Deletes a tag from the CIS instruction
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteCisInstructionTag(EmployerId: string, SubContractorId: string, CisInstructionId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS instruction tag
		 * Gets the tag from the CIS instruction
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromCisInstruction(EmployerId: string, SubContractorId: string, CisInstructionId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert CIS instruction tag
		 * Inserts a new tag on the CIS instruction
		 * Put Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutCisInstructionTag(EmployerId: string, SubContractorId: string, CisInstructionId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from the CIS instruction
		 * Gets all the tags from the CIS instruction
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisInstructionId The CIS instruction unique identifier. E.g. CIS001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromCisInstruction(EmployerId: string, SubContractorId: string, CisInstructionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstruction/' + (CisInstructionId == null ? '' : encodeURIComponent(CisInstructionId)) + '/Tags', {});
		}

		/**
		 * Get CIS instructions from sub contractor.
		 * Get links to all CIS instructions for the specified sub contractor.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisInstructionsFromSubContractor(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstructions', {});
		}

		/**
		 * Create a new CIS instruction
		 * Create a new CIS instruction object
		 * Post Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {CisInstruction} requestBody The CIS instruction object.
		 * @return {void} 
		 */
		PostCisInstructionIntoSubContractor(EmployerId: string, SubContractorId: string, requestBody: CisInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstructions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS instructions with tag
		 * Gets the CIS instruction with the tag
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisInstructionsWithTag(EmployerId: string, SubContractorId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstructions/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all CIS instruction tags
		 * Gets all the CIS instruction tags
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllCisInstructionTags(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisInstructions/Tags', {});
		}

		/**
		 * Delete a CIS line
		 * Delete the specified CIS line
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @return {void} 
		 */
		DeleteCisLine(EmployerId: string, SubContractorId: string, CisLineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS line from sub contractor
		 * Gets the specified CIS line from sub contractor.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @return {CisLine} The cis line object.
		 */
		GetCisLineFromSubContractor(EmployerId: string, SubContractorId: string, CisLineId: string): Observable<CisLine> {
			return this.http.get<CisLine>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)), {});
		}

		/**
		 * Delete CIS line tag
		 * Deletes a tag from the CIS line
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteCisLineTag(EmployerId: string, SubContractorId: string, CisLineId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get CIS line tag
		 * Gets the tag from the CIS line
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromCisLine(EmployerId: string, SubContractorId: string, CisLineId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert CIS line tag
		 * Inserts a new tag on the CIS line
		 * Put Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutCisLineTag(EmployerId: string, SubContractorId: string, CisLineId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get all tags from the CIS line
		 * Gets all the tags from the CIS line
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} CisLineId The CIS line unique identifier. E.g. CISLN001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromCisLine(EmployerId: string, SubContractorId: string, CisLineId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLine/' + (CisLineId == null ? '' : encodeURIComponent(CisLineId)) + '/Tags', {});
		}

		/**
		 * Get CIS lines from sub contractor.
		 * Get links to all CIS lines for the specified sub contractor.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisLinesFromSubContractor(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLines', {});
		}

		/**
		 * Get CIS lines with tag
		 * Gets the CIS line with the tag
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisLinesWithTag(EmployerId: string, SubContractorId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLines/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all CIS line tags
		 * Gets all the CIS line tags
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllCisLineTags(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/CisLines/Tags', {});
		}

		/**
		 * Gets the journal Lines from the specified sub contractor
		 * Get links to all journal lines for the specified sub contractor
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/JournalLines
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalLinesFromSubContractor(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/JournalLines', {});
		}

		/**
		 * Delete an SubContractor revision matching the specified revision number.
		 * Deletes the specified sub contractor revision for the matching revision number
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {void} 
		 */
		DeleteSubContractorRevisionByNumber(EmployerId: string, SubContractorId: string, RevisionNumber: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the sub contractor by revision number
		 * Get the sub contractor revision matching the specified revision number
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Revision/{RevisionNumber}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} RevisionNumber The revision number. E.g. 1
		 * @return {SubContractor} The sub contractor object.
		 */
		GetSubContractorRevisionByNumber(EmployerId: string, SubContractorId: string, RevisionNumber: string): Observable<SubContractor> {
			return this.http.get<SubContractor>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Revision/' + (RevisionNumber == null ? '' : encodeURIComponent(RevisionNumber)), {});
		}

		/**
		 * Get all sub contractor revisions
		 * Gets links to all the sub contractor revisions
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Revisions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetSubContractorRevisions(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Revisions', {});
		}

		/**
		 * Delete sub contractor tag
		 * Deletes a tag from the sub contractor
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteSubContractorTag(EmployerId: string, SubContractorId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub contractor tag
		 * Gets the tag from the sub contractor
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromSubContractor(EmployerId: string, SubContractorId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert sub contractor tag
		 * Inserts a new tag on the sub contractor
		 * Put Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutSubContractorTag(EmployerId: string, SubContractorId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get sub contractor revision tag
		 * Gets the tag from the sub contractor revision
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Tag} The tag object.
		 */
		GetTagFromSubContractorRevision(EmployerId: string, SubContractorId: string, TagId: string, EffectiveDate: Date): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get all tags from the sub contractor
		 * Gets all the tags from the sub contractor
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromSubContractor(EmployerId: string, SubContractorId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tags', {});
		}

		/**
		 * Get all sub contractor revision tags
		 * Gets all the tags from the sub contractor revision
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/Tags/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromSubContractorRevision(EmployerId: string, SubContractorId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/Tags/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Delete an sub contractor revision matching the specified revision date.
		 * Deletes the specified sub contractor revision for the matching revision date
		 * Delete Employer/{EmployerId}/SubContractor/{SubContractorId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeleteSubContractorRevision(EmployerId: string, SubContractorId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub contractor by effective date.
		 * Returns the sub contractor's state at the specified effective date.
		 * Get Employer/{EmployerId}/SubContractor/{SubContractorId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} SubContractorId The sub contractors' unique identifier. E.g SUB001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {SubContractor} The sub contractor object.
		 */
		GetSubContractorByEffectiveDate(EmployerId: string, SubContractorId: string, EffectiveDate: Date): Observable<SubContractor> {
			return this.http.get<SubContractor>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractor/' + (SubContractorId == null ? '' : encodeURIComponent(SubContractorId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get sub contractors from employer.
		 * Get links to all sub contractors for the specified employer.
		 * Get Employer/{EmployerId}/SubContractors
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetSubContractorsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractors', {});
		}

		/**
		 * Create a new sub contractor
		 * Create a new sub contractor object
		 * Post Employer/{EmployerId}/SubContractors
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {SubContractor} requestBody The sub contractor object.
		 * @return {void} 
		 */
		PostSubContractorIntoEmployer(EmployerId: string, requestBody: SubContractor): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub contractors with tag
		 * Gets the sub contractor with the tag
		 * Get Employer/{EmployerId}/SubContractors/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetSubContractorsWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractors/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all sub contractor tags
		 * Gets all the sub contractor tags
		 * Get Employer/{EmployerId}/SubContractors/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllSubContractorTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractors/Tags', {});
		}

		/**
		 * Get sub contractors from employer at a given effective date.
		 * Get links to all sub contractors for the employer on specified effective date.
		 * Get Employer/{EmployerId}/SubContractors/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetSubContractorsByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/SubContractors/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get employer summary
		 * Gets the specified employer summary data.
		 * Get Employer/{EmployerId}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {EmployerSummary} The employer summary object.
		 */
		GetEmployerSummary(EmployerId: string): Observable<EmployerSummary> {
			return this.http.get<EmployerSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Summary', {});
		}

		/**
		 * Delete employer tag
		 * Deletes a tag from the employer
		 * Delete Employer/{EmployerId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteEmployerTag(EmployerId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employer tag
		 * Gets the tag from the employer
		 * Get Employer/{EmployerId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromEmployer(EmployerId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert employer tag
		 * Inserts a new tag on the employer
		 * Put Employer/{EmployerId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutEmployerTag(EmployerId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get employer revision tag
		 * Gets the tag from the employer revision
		 * Get Employer/{EmployerId}/Tag/{TagId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Tag} The tag object.
		 */
		GetTagFromEmployerRevision(EmployerId: string, TagId: string, EffectiveDate: Date): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get all employer tags
		 * Gets all the tags from the employer
		 * Get Employer/{EmployerId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromEmployer(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tags', {});
		}

		/**
		 * Get all employer revision tags
		 * Gets all the tags from the employer revision
		 * Get Employer/{EmployerId}/Tags/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromEmployerRevision(EmployerId: string, EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/Tags/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Delete third party transaction
		 * Deletes a third party transaction record from the given resource location
		 * Delete Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @return {void} 
		 */
		DeleteThirdPartyTransaction(EmployerId: string, ThirdPartyTransactionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a third party transaction
		 * Get a third party transaction
		 * Get Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @return {ThirdPartyTransaction} The third party transaction object.
		 */
		GetThirdPartyTransaction(EmployerId: string, ThirdPartyTransactionId: string): Observable<ThirdPartyTransaction> {
			return this.http.get<ThirdPartyTransaction>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)), {});
		}

		/**
		 * Delete third party transaction tag
		 * Deletes a tag from the third party transaction
		 * Delete Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteThirdPartyTransactionTag(EmployerId: string, ThirdPartyTransactionId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get third party transaction tag
		 * Gets a tag from the third party transaction
		 * Get Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromThirdPartyTransaction(EmployerId: string, ThirdPartyTransactionId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * insert third party transaction tag
		 * Inserts a tag on the third party transaction
		 * Put Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutThirdPartyTransactionTag(EmployerId: string, ThirdPartyTransactionId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get tags from third party transaction
		 * Gets all tags from the third party transaction
		 * Get Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} ThirdPartyTransactionId The third party transaction unique identifier. E.g TP001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromThirdPartyTransaction(EmployerId: string, ThirdPartyTransactionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransaction/' + (ThirdPartyTransactionId == null ? '' : encodeURIComponent(ThirdPartyTransactionId)) + '/Tags', {});
		}

		/**
		 * Get all third party transaction links
		 * Get all third party transaction links
		 * Get Employer/{EmployerId}/ThirdPartyTransactions
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetThirdPartyTransactions(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransactions', {});
		}

		/**
		 * Get links to tagged third party transactions
		 * Gets the third party transactions with the specified tag
		 * Get Employer/{EmployerId}/ThirdPartyTransactions/Tag/{TagId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllThirdPartyTransactionsWithTag(EmployerId: string, TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransactions/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all third party transaction tags
		 * Gets all the third party transaction tags
		 * Get Employer/{EmployerId}/ThirdPartyTransactions/Tags
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllThirdPartyTransactionTags(EmployerId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/ThirdPartyTransactions/Tags', {});
		}

		/**
		 * Delete an Employer revision matching the specified revision date.
		 * Deletes the specified employer revision for the matching revision date
		 * Delete Employer/{EmployerId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {void} 
		 */
		DeleteEmployerRevision(EmployerId: string, EffectiveDate: Date): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/' + EffectiveDate.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the employer at the specified effective
		 * Returns the employer's state at the specified effective date.
		 * Get Employer/{EmployerId}/{EffectiveDate}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {Employer} The employer object.
		 */
		GetEmployerByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<Employer> {
			return this.http.get<Employer>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get employer summary by effective date.
		 * Gets the employer summary for the specified effective date.
		 * Get Employer/{EmployerId}/{EffectiveDate}/Summary
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {EmployerSummary} The employer summary object.
		 */
		GetEmployerSummaryByEffectiveDate(EmployerId: string, EffectiveDate: Date): Observable<EmployerSummary> {
			return this.http.get<EmployerSummary>(this.baseUri + 'Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)) + '/' + EffectiveDate.toISOString() + '/Summary', {});
		}

		/**
		 * Gets all employers
		 * Gets links to all employers contained under the authorised application scope
		 * Get Employers
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployers(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers', {});
		}

		/**
		 * Create a new Employer
		 * Create a new employer object
		 * Post Employers
		 * @param {Employer} requestBody The employer object.
		 * @return {void} 
		 */
		PostEmployer(requestBody: Employer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Employers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get employer summaries.
		 * Get links to all employer summaries.
		 * Get Employers/Summary
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployerSummaries(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers/Summary', {});
		}

		/**
		 * Get employers with tag
		 * Gets the employers with the tag
		 * Get Employers/Tag/{TagId}
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployersWithTag(TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all employer tags
		 * Gets all the employer tags
		 * Get Employers/Tags
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllEmployerTags(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers/Tags', {});
		}

		/**
		 * Gets all employers at the specified effective date
		 * Gets links to all employers contained under the authorised application scope for the specified effective date.
		 * Get Employers/{EffectiveDate}
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployersByEffectiveDate(EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers/' + EffectiveDate.toISOString(), {});
		}

		/**
		 * Get employer summaries at a given effective date.
		 * Get links to all employer summaries on specified effective date.
		 * Get Employers/{EffectiveDate}/Summary
		 * @param {Date} EffectiveDate The effective date to be applied. E.g 2016-04-06
		 *     Type: DateOnly
		 * @return {LinkCollection} The link collection object.
		 */
		GetEmployerSummariesByEffectiveDate(EffectiveDate: Date): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Employers/' + EffectiveDate.toISOString() + '/Summary', {});
		}

		/**
		 * Get health check status
		 * Returns the health status of the application
		 * Get Healthcheck
		 * @return {HealthCheck} The health check object.
		 */
		GetHealthCheck(): Observable<HealthCheck> {
			return this.http.get<HealthCheck>(this.baseUri + 'Healthcheck', {});
		}

		/**
		 * Get all Batch jobs
		 * Gets all the Batch jobs
		 * Get Jobs/Batch
		 * @return {LinkCollection} The link collection object.
		 */
		GetBatchJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/Batch', {});
		}

		/**
		 * Create new Batch job
		 * Adds a new Batch job to the queue and returns the job info
		 * Post Jobs/Batch
		 * @param {BatchJobInstruction} requestBody The the batch job instruction object.
		 * @return {void} 
		 */
		PostNewBatchJob(requestBody: BatchJobInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the Batch job
		 * Deletes the the Batch job
		 * Delete Jobs/Batch/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} No Content
		 */
		DeleteBatchJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/Batch/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Batch job information
		 * Return the the Batch job information
		 * Get Jobs/Batch/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetBatchJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/Batch/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the Batch job progress
		 * Return the the Batch job progress
		 * Get Jobs/Batch/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetBatchJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Batch/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Batch job status
		 * Return the the Batch job status
		 * Get Jobs/Batch/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetBatchJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Batch/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all CIS jobs
		 * Gets all the CIS jobs
		 * Get Jobs/Cis
		 * @return {LinkCollection} The link collection object.
		 */
		GetCisJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/Cis', {});
		}

		/**
		 * Create new CIS job
		 * Adds a new CIS job to the queue and returns the job info
		 * Post Jobs/Cis
		 * @param {CisJobInstructionBase} requestBody The the CIS job instruction object.
		 * @return {void} 
		 */
		PostNewCisJob(requestBody: CisJobInstructionBase): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/Cis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the CIS job
		 * Deletes the the CIS job
		 * Delete Jobs/Cis/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} No Content
		 */
		DeleteCisJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/Cis/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the CIS job information
		 * Return the the CIS job information
		 * Get Jobs/Cis/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetCisJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/Cis/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the CIS job progress
		 * Return the the CIS job progress
		 * Get Jobs/Cis/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetCisJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Cis/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the CIS job status
		 * Return the the CIS job status
		 * Get Jobs/Cis/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetCisJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Cis/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all DPS jobs
		 * Gets all the DPS jobs
		 * Get Jobs/Dps
		 * @return {LinkCollection} The link collection object.
		 */
		GetDpsJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/Dps', {});
		}

		/**
		 * Create new DPS job
		 * Creates the new DPS job to the queue and returns the job info
		 * Post Jobs/Dps
		 * @param {DpsJobInstruction} requestBody The the DPS job instruction object.
		 * @return {void} 
		 */
		PostNewDpsJob(requestBody: DpsJobInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/Dps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the DPS job
		 * Deletes the the DPS job
		 * Delete Jobs/Dps/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} No Content
		 */
		DeleteDpsJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/Dps/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the DPS job information
		 * Return the the DPS job information
		 * Get Jobs/Dps/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetDpsJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/Dps/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the DPS job progress
		 * Return the the DPS job progress
		 * Get Jobs/Dps/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetDpsJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Dps/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the DPS job status
		 * Return the the DPS job status
		 * Get Jobs/Dps/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetDpsJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Dps/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all jobs relating to the employer.
		 * Returns all job information objects for the specified employer.
		 * Get Jobs/Employer/{EmployerId}
		 * @param {string} EmployerId The employers' unique identifier. E.g ER001
		 * @return {string} The serialised array of JobInfo objects
		 */
		GetEmployerJobs(EmployerId: string): Observable<string> {
			return this.http.get(this.baseUri + 'Jobs/Employer/' + (EmployerId == null ? '' : encodeURIComponent(EmployerId)), { responseType: 'text' });
		}

		/**
		 * Get all PayRun jobs
		 * Gets all the pay run jobs
		 * Get Jobs/PayRuns
		 * @return {LinkCollection} The link collection object.
		 */
		GetPayRunJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/PayRuns', {});
		}

		/**
		 * Create new PayRun job
		 * Creates the new pay run job to the queue and returns the job info
		 * Post Jobs/PayRuns
		 * @param {PayRunJobInstruction} requestBody The pay run job instruction object.
		 * @return {void} 
		 */
		PostNewPayRunJob(requestBody: PayRunJobInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/PayRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the pay run job
		 * Deletes the the payrun job
		 * Delete Jobs/PayRuns/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} No Content
		 */
		DeletePayRunJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/PayRuns/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the pay run job information
		 * Return the the payrun job information
		 * Get Jobs/PayRuns/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetPayRunJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/PayRuns/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the pay run job progress
		 * Return the the payrun job progress
		 * Get Jobs/PayRuns/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetPayRunJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/PayRuns/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the pay run job status
		 * Return the the payrun job status
		 * Get Jobs/PayRuns/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetPayRunJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/PayRuns/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all RTI jobs
		 * Gets all the RTI jobs
		 * Get Jobs/Rti
		 * @return {LinkCollection} The link collection object.
		 */
		GetRtiJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/Rti', {});
		}

		/**
		 * Create new RTI job
		 * Creates the new RTI job to the queue and returns the job info
		 * Post Jobs/Rti
		 * @param {RtiJobInstruction} requestBody The the RTI job instruction object.
		 * @return {void} 
		 */
		PostNewRtiJob(requestBody: RtiJobInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/Rti', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the RTI job
		 * Deletes the the RTI job
		 * Delete Jobs/Rti/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} No Content
		 */
		DeleteRtiJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/Rti/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the RTI job information
		 * Return the the RTI job information
		 * Get Jobs/Rti/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetRtiJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/Rti/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the RTI job progress
		 * Return the the RTI job progress
		 * Get Jobs/Rti/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetRtiJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Rti/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the RTI job status
		 * Return the the RTI job status
		 * Get Jobs/Rti/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetRtiJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/Rti/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Third Party jobs
		 * Gets all the Third Party jobs
		 * Get Jobs/ThirdParty
		 * @return {LinkCollection} The link collection object.
		 */
		GetThirdPartyJobs(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Jobs/ThirdParty', {});
		}

		/**
		 * Create new Third Party job
		 * Adds a new Third Party job to the queue and returns the job info
		 * Post Jobs/ThirdParty
		 * @param {ThirdPartyJobInstruction} requestBody The the third party job instruction object.
		 * @return {void} 
		 */
		PostNewThirdPartyJob(requestBody: ThirdPartyJobInstruction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Jobs/ThirdParty', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the Third Party job
		 * Deletes the the Third Party job
		 * Delete Jobs/ThirdParty/{JobId}
		 * @param {string} JobId The job unique identifier.
		 * @return {void} 
		 */
		DeleteThirdPartyJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Jobs/ThirdParty/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Third Party job information
		 * Return the the Third Party job information
		 * Get Jobs/ThirdParty/{JobId}/Info
		 * @param {string} JobId The job unique identifier.
		 * @return {JobInfo} The job info object.
		 */
		GetThirdPartyJobInfo(JobId: string): Observable<JobInfo> {
			return this.http.get<JobInfo>(this.baseUri + 'Jobs/ThirdParty/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Info', {});
		}

		/**
		 * Get the Third Party job progress
		 * Return the the Third Party job progress
		 * Get Jobs/ThirdParty/{JobId}/Progress
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current progress of the job expressed as a percentage
		 */
		GetThirdPartyJobProgress(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/ThirdParty/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Progress', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Third Party job status
		 * Return the the Third Party job status
		 * Get Jobs/ThirdParty/{JobId}/Status
		 * @param {string} JobId The job unique identifier.
		 * @return {void} The current status of the job
		 */
		GetThirdPartyJobStatus(JobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Jobs/ThirdParty/' + (JobId == null ? '' : encodeURIComponent(JobId)) + '/Status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Journal instruction template
		 * Delete the specified Journal instruction template object
		 * Delete JournalInstruction/{JournalInstructionId}
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {void} 
		 */
		DeleteJournalInstructionTemplate(JournalInstructionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Journal instructions template for the application
		 * Retrurns the specified journal instruction from the application
		 * Get JournalInstruction/{JournalInstructionId}
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {JournalInstruction} The journal instruction object.
		 */
		GetJournalInstructionTemplate(JournalInstructionId: string): Observable<JournalInstruction> {
			return this.http.get<JournalInstruction>(this.baseUri + 'JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), {});
		}

		/**
		 * Update a Journal Instruction template
		 * Updates the existing specified Journal instruction template object
		 * Put JournalInstruction/{JournalInstructionId}
		 * @param {string} JournalInstructionId The journal instruction unique identifier. E.g JI001
		 * @return {JournalInstruction} The journal instruction object.
		 */
		PutJournalInstructionTemplate(JournalInstructionId: string): Observable<JournalInstruction> {
			return this.http.put<JournalInstruction>(this.baseUri + 'JournalInstruction/' + (JournalInstructionId == null ? '' : encodeURIComponent(JournalInstructionId)), null, {});
		}

		/**
		 * Gets the Journal instructions templates for the application
		 * Get links to all journal instruction templates for the application
		 * Get JournalInstructions
		 * @return {LinkCollection} The link collection object.
		 */
		GetJournalInstructionTemplates(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'JournalInstructions', {});
		}

		/**
		 * Creates a new Journal Instruction template
		 * Creates a new Journal instruction teamplte object
		 * Post JournalInstructions
		 * @return {void} 
		 */
		PostJournalInstructionTemplate(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'JournalInstructions', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the permission object
		 * Deletes the permission object from the application
		 * Delete Permission/{PermissionId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {void} No Content
		 */
		DeletePermission(PermissionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the permission object
		 * Gets the permission object for application
		 * Get Permission/{PermissionId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {Permission} The permission object.
		 */
		GetPermission(PermissionId: string): Observable<Permission> {
			return this.http.get<Permission>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)), {});
		}

		/**
		 * Patch permission object
		 * Patch the permission object at the specified resource location
		 * Patch Permission/{PermissionId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {Permission} The permission object.
		 */
		PatchPermission(PermissionId: string): Observable<Permission> {
			return this.http.patch<Permission>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)), null, {});
		}

		/**
		 * Puts permisson object
		 * Puts the permission object into the specified resource location
		 * Put Permission/{PermissionId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {Permission} The permission object.
		 */
		PutPermission(PermissionId: string): Observable<Permission> {
			return this.http.put<Permission>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)), null, {});
		}

		/**
		 * Delete Permission tag
		 * Deletes a tag from the Permission
		 * Delete Permission/{PermissionId}/Tag/{TagId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeletePermissionTag(PermissionId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Permission tag
		 * Gets a tag from the Permission
		 * Get Permission/{PermissionId}/Tag/{TagId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromPermission(PermissionId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert Permission tag
		 * Inserts a tag on the Permission
		 * Put Permission/{PermissionId}/Tag/{TagId}
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutPermissionTag(PermissionId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get tags from Permission
		 * Gets all tags from the Permission
		 * Get Permission/{PermissionId}/Tags
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromPermission(PermissionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)) + '/Tags', {});
		}

		/**
		 * Gets the users with the specified permission
		 * Gets the users with the specified permission
		 * Get Permission/{PermissionId}/Users
		 * @param {string} PermissionId The permission unique identifier. E.g PERM001
		 * @return {LinkCollection} The link collection object.
		 */
		GetUsersFromPermission(PermissionId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Permission/' + (PermissionId == null ? '' : encodeURIComponent(PermissionId)) + '/Users', {});
		}

		/**
		 * Gets all permission objects
		 * Gets all permission objects for application
		 * Get Permissions
		 * @return {LinkCollection} The link collection object.
		 */
		GetPermissions(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Permissions', {});
		}

		/**
		 * Post permisson object
		 * Post the new permission object into the application
		 * Post Permissions
		 * @return {Link} The link object.
		 */
		PostPermission(): Observable<Link> {
			return this.http.post<Link>(this.baseUri + 'Permissions', null, {});
		}

		/**
		 * Get links to tagged Permissions
		 * Gets the Permissions with the specified tag
		 * Get Permissions/Tag/{TagId}
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPermissionsWithTag(TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Permissions/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all Permission tags
		 * Get all tags from all Permissions
		 * Get Permissions/Tags
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllPermissionTags(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Permissions/Tags', {});
		}

		/**
		 * Get the query result
		 * Get the results for the specified query
		 * Post Query
		 * @param {Query} requestBody The query object to be executed against the application data.
		 * @return {string} The result of the query execution
		 */
		GetQueryResponse(requestBody: Query): Observable<string> {
			return this.http.post(this.baseUri + 'Query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Gets the journal expression data schema
		 * Gets the data schema for all available journal expression values. Includes table names, column names and data types.
		 * Get ReferenceData/JournalExpressionDataTable
		 * @return {JournalExpressionDataTable} The journal expression data table object.
		 */
		GetJournalExpressionSchema(): Observable<JournalExpressionDataTable> {
			return this.http.get<JournalExpressionDataTable>(this.baseUri + 'ReferenceData/JournalExpressionDataTable', {});
		}

		/**
		 * Runs the active pay instructions report
		 * Returns the result of the executed active pay instructions report for the given query parameters
		 * Get Report/ACTPAYINS/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} EmployeeKey The employee unique key. E.g. EE001
		 * @param {Date} ActiveOn The active date to consider. E.g 2017-04-05
		 *     Type: DateOnly
		 * @param {Date} FromDate The lower filter date. E.g 2016-04-06
		 *     Type: DateOnly
		 * @param {Date} ToDate The upper filter date. E.g 2017-04-05
		 *     Type: DateOnly
		 * @param {string} Type the data type to filter on. E.g. TaxPayInstruction
		 * @return {string} The result of the active pay instructions report execution
		 */
		GetActivePayInstructionsReportOutput(EmployerKey: string, EmployeeKey: string, ActiveOn: Date | null | undefined, FromDate: Date, ToDate: Date | null | undefined, Type: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/ACTPAYINS/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&EmployeeKey=' + (EmployeeKey == null ? '' : encodeURIComponent(EmployeeKey)) + '&ActiveOn=' + ActiveOn?.toISOString() + '&FromDate=' + FromDate.toISOString() + '&ToDate=' + ToDate?.toISOString() + '&Type=' + (Type == null ? '' : encodeURIComponent(Type)), { responseType: 'text' });
		}

		/**
		 * Runs the AOE liability report
		 * Returns the result of the executed AOE liability report for the given query parameters
		 * Get Report/AOELIABILITY/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} TaxPeriod The tax period number.
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @return {string} The result of the AOE liability report execution
		 */
		GetAoeLiabilityReportOuput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, TaxPeriod: string | null | undefined, TransformDefinitionKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/AOELIABILITY/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&TaxPeriod=' + (TaxPeriod == null ? '' : encodeURIComponent(TaxPeriod)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)), { responseType: 'text' });
		}

		/**
		 * Runs the DPS message report
		 * Returns the result of the executed DPS message report for the given query parameters
		 * Get Report/DPSMSG/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {Date} FromDate The lower filter date. E.g 2016-04-06
		 *     Type: DateOnly
		 * @param {Date} ToDate The upper filter date. E.g 2017-04-05
		 *     Type: DateOnly
		 * @param {string} MessageTypes The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2
		 * @param {string} MessageStatuses The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the DPS message report execution
		 */
		GetDpsMessageReportOutput(EmployerKey: string, FromDate: Date, ToDate: Date | null | undefined, MessageTypes: string | null | undefined, MessageStatuses: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/DPSMSG/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&FromDate=' + FromDate.toISOString() + '&ToDate=' + ToDate?.toISOString() + '&MessageTypes=' + (MessageTypes == null ? '' : encodeURIComponent(MessageTypes)) + '&MessageStatuses=' + (MessageStatuses == null ? '' : encodeURIComponent(MessageStatuses)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the employer summary report
		 * Returns the result of the employer summary report for the given query parameters
		 * Get Report/EMPSUM/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {Date} ContextDate The date context for the report. E.g. 2018-04-30
		 *     Type: DateOnly
		 * @return {string} The result of the employer summary report execution
		 */
		GetEmployerSummaryReportOuput(EmployerKey: string, ContextDate: Date): Observable<string> {
			return this.http.get(this.baseUri + 'Report/EMPSUM/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&ContextDate=' + ContextDate.toISOString(), { responseType: 'text' });
		}

		/**
		 * Runs the gross to net report
		 * Returns the result of the executed gross to net report for the given query parameters
		 * Get Report/GRO2NET/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} TaxPeriod The tax period number.
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the gross to net report execution
		 */
		GetGrossToNetReportOutput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, TaxPeriod: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/GRO2NET/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&TaxPeriod=' + (TaxPeriod == null ? '' : encodeURIComponent(TaxPeriod)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the holiday balance report
		 * Returns the result of the executed holiday balance report for the given query parameters
		 * Get Report/HOLBAL/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {Date} HolidayYearEnd The holiday year end for the report. E.g. 2018-12-31
		 *     Type: DateOnly
		 * @param {string} EmployeeCodes A comma separated list of the employee codes. E.g. EMP001,EMP002
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the holiday balance report execution
		 */
		GetHolidayBalanceReportOutput(EmployerKey: string, HolidayYearEnd: Date, EmployeeCodes: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/HOLBAL/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&HolidayYearEnd=' + HolidayYearEnd.toISOString() + '&EmployeeCodes=' + (EmployeeCodes == null ? '' : encodeURIComponent(EmployeeCodes)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the journal report
		 * Returns the result of the journal report for the given query parameters
		 * Get Report/JOURNAL/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayFrequency The pay frequency option. E.g. Monthly
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} TaxPeriod The tax period number.
		 * @param {string} LedgerTarget Specific to JOURNAL report, a filter used to select the journal lines for the specified ledger target. E.g. [Default]
		 * @return {string} The result of the journal report execution
		 */
		GetJournalReportOuput(EmployerKey: string, PayFrequency: string, TaxYear: string, TaxPeriod: string | null | undefined, LedgerTarget: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/JOURNAL/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayFrequency=' + (PayFrequency == null ? '' : encodeURIComponent(PayFrequency)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&TaxPeriod=' + (TaxPeriod == null ? '' : encodeURIComponent(TaxPeriod)) + '&LedgerTarget=' + (LedgerTarget == null ? '' : encodeURIComponent(LedgerTarget)), { responseType: 'text' });
		}

		/**
		 * Runs the last pay date report
		 * Returns the result of the executed last pay date report for the given query parameters
		 * Get Report/LASTPAYDATE/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} EmployeeKey The employee unique key. E.g. EE001
		 * @return {string} The result of the last pay date report execution
		 */
		GetLastPayDateReportOuput(EmployerKey: string, EmployeeKey: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/LASTPAYDATE/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&EmployeeKey=' + (EmployeeKey == null ? '' : encodeURIComponent(EmployeeKey)), { responseType: 'text' });
		}

		/**
		 * Runs the net pay report
		 * Returns the result of the executed net pay report for the given query parameters
		 * Get Report/NETPAY/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} TaxPeriod The tax period number.
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the net pay report execution
		 */
		GetNetPayReportOutput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, TaxPeriod: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/NETPAY/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&TaxPeriod=' + (TaxPeriod == null ? '' : encodeURIComponent(TaxPeriod)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the next pay period report
		 * Returns the result of the executed next pay period report for the given query parameters
		 * Get Report/NEXTPERIOD/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @return {string} The result of the next pay period report execution
		 */
		GetNextPayPeriodDatesReportOutput(EmployerKey: string, PayScheduleKey: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/NEXTPERIOD/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)), { responseType: 'text' });
		}

		/**
		 * Runs the P11 summary report
		 * Returns the result of the executed P11 summary report for the given query parameters
		 * Get Report/P11SUM/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the P11 report execution
		 */
		GetP11SummaryReportOutput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/P11SUM/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the P32 report
		 * Returns the result of the executed P32 report for the given query parameters
		 * Get Report/P32/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @return {string} The result of the P32 report execution
		 */
		GetP32NetReportOutput(EmployerKey: string, TaxYear: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/P32/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)), { responseType: 'text' });
		}

		/**
		 * Runs the P32 summary report
		 * Returns the result of the executed P32 summary report for the given query parameters
		 * Get Report/P32SUM/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @return {string} The result of the P32 summary report execution
		 */
		GetP32SummaryNetReportOutput(EmployerKey: string, TaxYear: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/P32SUM/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)), { responseType: 'text' });
		}

		/**
		 * Runs the P45 report
		 * Returns the result of the executed P45 report for the given query parameters
		 * Get Report/P45/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} EmployeeKey The employee unique key. E.g. EE001
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @return {string} The result of the P45 report execution
		 */
		GetP45ReportOutput(EmployerKey: string, EmployeeKey: string, TransformDefinitionKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/P45/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&EmployeeKey=' + (EmployeeKey == null ? '' : encodeURIComponent(EmployeeKey)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)), { responseType: 'text' });
		}

		/**
		 * Runs the P60 report
		 * Returns the result of the executed P60 report for the given query parameters
		 * Get Report/P60/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} EmployeeCodes A comma separated list of the employee codes. E.g. EMP001,EMP002
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @return {string} The result of the P60 report execution
		 */
		GetP60ReportOutput(EmployerKey: string, TaxYear: string, EmployeeCodes: string | null | undefined, TransformDefinitionKey: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/P60/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&EmployeeCodes=' + (EmployeeCodes == null ? '' : encodeURIComponent(EmployeeCodes)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)), { responseType: 'text' });
		}

		/**
		 * Runs the PAPDIS report
		 * Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/
		 * Get Report/PAPDIS/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {Date} PaymentDate The payment date context for the report. E.g. 2018-04-30
		 *     Type: DateOnly
		 * @param {string} PensionKey The pension scheme unique key. E.g. PENSCH001
		 * @param {string} MessageFunctionCode Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @return {string} The result of the PAPDIS report execution
		 */
		GetPapdisReportOuput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, PaymentDate: Date | null | undefined, PensionKey: string, MessageFunctionCode: string, TransformDefinitionKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/PAPDIS/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&PaymentDate=' + PaymentDate?.toISOString() + '&PensionKey=' + (PensionKey == null ? '' : encodeURIComponent(PensionKey)) + '&MessageFunctionCode=' + (MessageFunctionCode == null ? '' : encodeURIComponent(MessageFunctionCode)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)), { responseType: 'text' });
		}

		/**
		 * Runs the PASS report
		 * Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1
		 * Get Report/PASS/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {Date} PaymentDate The payment date context for the report. E.g. 2018-04-30
		 *     Type: DateOnly
		 * @param {string} PensionKey The pension scheme unique key. E.g. PENSCH001
		 * @param {string} MessageFunctionCode Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
		 * @param {string} IntermediaryId Specific to PensionSync PASS report, a unique identifier for the Intermediary who is acting on behalf of the employer.
		 * @param {string} DocumentId Specific to PensionSync PASS report, a document identifier unique for this document within the Intermediary.
		 * @return {string} The result of the PASS report execution
		 */
		GetPassReportOuput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, PaymentDate: Date | null | undefined, PensionKey: string, MessageFunctionCode: string, IntermediaryId: string, DocumentId: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/PASS/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&PaymentDate=' + PaymentDate?.toISOString() + '&PensionKey=' + (PensionKey == null ? '' : encodeURIComponent(PensionKey)) + '&MessageFunctionCode=' + (MessageFunctionCode == null ? '' : encodeURIComponent(MessageFunctionCode)) + '&IntermediaryId=' + (IntermediaryId == null ? '' : encodeURIComponent(IntermediaryId)) + '&DocumentId=' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), { responseType: 'text' });
		}

		/**
		 * Runs the Pay Dashboard payslips report
		 * Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.
		 * Get Report/PAYDASHBOARD/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} EmployeeCodes A comma separated list of the employee codes. E.g. EMP001,EMP002
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @param {Date} PaymentDate The payment date context for the report. E.g. 2018-04-30
		 *     Type: DateOnly
		 * @param {Date} PublicationDate Specific to the Pay Dashboard report, allows the specification of a future payslip publication date. E.g. 2018-12-31
		 *     Type: DateOnly
		 * @return {string} The result of the Pay Dashboard payslip report execution
		 */
		GetPayDashboardPayslipReportOuput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, EmployeeCodes: string | null | undefined, TransformDefinitionKey: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined, PaymentDate: Date | null | undefined, PublicationDate: Date): Observable<string> {
			return this.http.get(this.baseUri + 'Report/PAYDASHBOARD/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&EmployeeCodes=' + (EmployeeCodes == null ? '' : encodeURIComponent(EmployeeCodes)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)) + '&PaymentDate=' + PaymentDate?.toISOString() + '&PublicationDate=' + PublicationDate.toISOString(), { responseType: 'text' });
		}

		/**
		 * Runs the verbose payslip report
		 * Returns the result of the executed verbose payslip report for the given query parameters
		 * Get Report/PAYSLIP3/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} PayScheduleKey The pay schedule unique key. E.g. SCH001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} EmployeeCodes A comma separated list of the employee codes. E.g. EMP001,EMP002
		 * @param {string} TransformDefinitionKey The transform definition unique key. E.g. P45-Pdf
		 * @param {string} StartIndex The element index to begin the report. Used to control paging within large data sets. E.g. 1
		 * @param {string} MaxIndex The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
		 * @param {Date} PaymentDate The payment date context for the report. E.g. 2018-04-30
		 *     Type: DateOnly
		 * @return {string} The result of the verbose payslip report execution
		 */
		GetPayslip3ReportOutput(EmployerKey: string, PayScheduleKey: string, TaxYear: string, EmployeeCodes: string | null | undefined, TransformDefinitionKey: string | null | undefined, StartIndex: string | null | undefined, MaxIndex: string | null | undefined, PaymentDate: Date | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'Report/PAYSLIP3/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&PayScheduleKey=' + (PayScheduleKey == null ? '' : encodeURIComponent(PayScheduleKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&EmployeeCodes=' + (EmployeeCodes == null ? '' : encodeURIComponent(EmployeeCodes)) + '&TransformDefinitionKey=' + (TransformDefinitionKey == null ? '' : encodeURIComponent(TransformDefinitionKey)) + '&StartIndex=' + (StartIndex == null ? '' : encodeURIComponent(StartIndex)) + '&MaxIndex=' + (MaxIndex == null ? '' : encodeURIComponent(MaxIndex)) + '&PaymentDate=' + PaymentDate?.toISOString(), { responseType: 'text' });
		}

		/**
		 * Runs the pension liability report
		 * Returns the result of the executed pension liability report for the given query parameters
		 * Get Report/PENLIABILITY/run
		 * @param {string} EmployerKey The employer unique key. E.g. ER001
		 * @param {string} TaxYear The tax year. E.g. 2017 = 2017/18 year.
		 * @param {string} PensionKey The pension scheme unique key. E.g. PENSCH001
		 * @return {string} The result of the pension liability report execution
		 */
		GetPensionLiabilityReportOutput(EmployerKey: string, TaxYear: string, PensionKey: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/PENLIABILITY/run?EmployerKey=' + (EmployerKey == null ? '' : encodeURIComponent(EmployerKey)) + '&TaxYear=' + (TaxYear == null ? '' : encodeURIComponent(TaxYear)) + '&PensionKey=' + (PensionKey == null ? '' : encodeURIComponent(PensionKey)), { responseType: 'text' });
		}

		/**
		 * Deletes a report definition
		 * Delete the specified report definition
		 * Delete Report/{ReportDefinitionId}
		 * @param {string} ReportDefinitionId The report definition unique identifier.
		 * @return {void} 
		 */
		DeleteReportDefinition(ReportDefinitionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Report/' + (ReportDefinitionId == null ? '' : encodeURIComponent(ReportDefinitionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the report definition
		 * Returns the specified report definition from the authroised application
		 * Get Report/{ReportDefinitionId}
		 * @param {string} ReportDefinitionId The report definition unique identifier.
		 * @return {ReportDefinition} The report definition object.
		 */
		GetReportDefinitionFromApplication(ReportDefinitionId: string): Observable<ReportDefinition> {
			return this.http.get<ReportDefinition>(this.baseUri + 'Report/' + (ReportDefinitionId == null ? '' : encodeURIComponent(ReportDefinitionId)), {});
		}

		/**
		 * Updates a report definition
		 * Updates the existing specified report definition object
		 * Put Report/{ReportDefinitionId}
		 * @param {string} ReportDefinitionId The report definition unique identifier.
		 * @param {ReportDefinition} requestBody The report definition object.
		 * @return {ReportDefinition} The report definition object.
		 */
		PutReportDefinition(ReportDefinitionId: string, requestBody: ReportDefinition): Observable<ReportDefinition> {
			return this.http.put<ReportDefinition>(this.baseUri + 'Report/' + (ReportDefinitionId == null ? '' : encodeURIComponent(ReportDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs the specified report definition
		 * Returns the result of the executed report definition
		 * Get Report/{ReportDefinitionId}/run
		 * @param {string} ReportDefinitionId The report definition unique identifier.
		 * @return {string} The result of the report execution
		 */
		GetReportOutput(ReportDefinitionId: string): Observable<string> {
			return this.http.get(this.baseUri + 'Report/' + (ReportDefinitionId == null ? '' : encodeURIComponent(ReportDefinitionId)) + '/run', { responseType: 'text' });
		}

		/**
		 * Gets all reports
		 * Get links to all saved report definitions under authorised application
		 * Get Reports
		 * @return {LinkCollection} The link collection object.
		 */
		GetReportDefinitionsFromApplication(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Reports', {});
		}

		/**
		 * Create a new report definition
		 * Creates a new report defintion object
		 * Post Reports
		 * @param {ReportDefinition} requestBody The report definition object.
		 * @return {void} 
		 */
		PostReportDefinition(requestBody: ReportDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of all available schemas
		 * Returns a collection of links to all the available data object schemas
		 * Get Schemas
		 * @return {LinkCollection} The link collection object.
		 */
		GetSchemas(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Schemas', {});
		}

		/**
		 * Get XSD schema
		 * Returns the XSD schema for the specified data type
		 * Get Schemas/{DtoDataType}
		 * @param {string} DtoDataType The data transfer object type name. E.g PensionPayInstruction
		 * @return {string} The data type XSD schema
		 */
		GetSchema(DtoDataType: string): Observable<string> {
			return this.http.get(this.baseUri + 'Schemas/' + (DtoDataType == null ? '' : encodeURIComponent(DtoDataType)), { responseType: 'text' });
		}

		/**
		 * Deletes Application secret
		 * Deletes an Application secret from the given resource location
		 * Delete Secret/{SecretId}
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		DeleteApplicationSecret(SecretId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Application secret
		 * Get the public visible Application secret object
		 * Get Secret/{SecretId}
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {ApplicationSecret} The application secret object.
		 */
		GetApplicationSecret(SecretId: string): Observable<ApplicationSecret> {
			return this.http.get<ApplicationSecret>(this.baseUri + 'Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), {});
		}

		/**
		 * Create a new Application secret
		 * Create / update an Application secret at the given resource location
		 * Put Secret/{SecretId}
		 * @param {string} SecretId The secret unique identifier. E.g ERSEC001
		 * @return {void} 
		 */
		PutApplicationSecret(SecretId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Secret/' + (SecretId == null ? '' : encodeURIComponent(SecretId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Application secret links
		 * Get all the Application secret links
		 * Get Secrets
		 * @return {LinkCollection} The link collection object.
		 */
		GetApplicationSecrets(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Secrets', {});
		}

		/**
		 * Create a new Application secret
		 * Create new Application secret using auto generated resource location key
		 * Post Secrets
		 * @return {void} 
		 */
		PostApplicationSecret(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Secrets', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the object template
		 * Returns a template instance of the specified data type
		 * Get Template/{DtoDataType}
		 * @param {string} DtoDataType The data transfer object type name. E.g PensionPayInstruction
		 * @return {string} The data type template
		 */
		GetTemplateModel(DtoDataType: string): Observable<string> {
			return this.http.get(this.baseUri + 'Template/' + (DtoDataType == null ? '' : encodeURIComponent(DtoDataType)), { responseType: 'text' });
		}

		/**
		 * Get a list of all available data object tempaltes
		 * Returns a collection of links to all the available data object templates
		 * Get Templates
		 * @return {LinkCollection} The link collection object.
		 */
		GetTemplates(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Templates', {});
		}

		/**
		 * Deletes a transform definition
		 * Delete the specified transform definition
		 * Delete Transform/{TransformDefinitionId}
		 * @param {string} TransformDefinitionId The transform definition unique identifier.
		 * @return {void} 
		 */
		DeleteTransformDefinition(TransformDefinitionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Transform/' + (TransformDefinitionId == null ? '' : encodeURIComponent(TransformDefinitionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the transform definition
		 * Returns the specified transform definition from the authroised application
		 * Get Transform/{TransformDefinitionId}
		 * @param {string} TransformDefinitionId The transform definition unique identifier.
		 * @return {TransformDefinition} The transform definition object.
		 */
		GetTransformDefinitionFromApplication(TransformDefinitionId: string): Observable<TransformDefinition> {
			return this.http.get<TransformDefinition>(this.baseUri + 'Transform/' + (TransformDefinitionId == null ? '' : encodeURIComponent(TransformDefinitionId)), {});
		}

		/**
		 * Updates a transform definition
		 * Updates the existing specified transform definition object
		 * Put Transform/{TransformDefinitionId}
		 * @param {string} TransformDefinitionId The transform definition unique identifier.
		 * @param {TransformDefinition} requestBody The transform definition object to be executed against the report data.
		 * @return {TransformDefinition} The transform definition object.
		 */
		PutTransformDefinition(TransformDefinitionId: string, requestBody: TransformDefinition): Observable<TransformDefinition> {
			return this.http.put<TransformDefinition>(this.baseUri + 'Transform/' + (TransformDefinitionId == null ? '' : encodeURIComponent(TransformDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all transform definitions
		 * Get links to all saved transform definitions under authorised application
		 * Get Transforms
		 * @return {LinkCollection} The link collection object.
		 */
		GetTransformDefinitionsFromApplication(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Transforms', {});
		}

		/**
		 * Create a new transform definition
		 * Creates a new transform defintion object
		 * Post Transforms
		 * @param {TransformDefinition} requestBody The transform definition object to be executed against the report data.
		 * @return {void} 
		 */
		PostTransformDefinition(requestBody: TransformDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Transforms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the user object
		 * Deletes the user object from the application
		 * Delete User/{UserId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {void} No Content
		 */
		DeleteUser(UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the user object
		 * Gets the user object for application
		 * Get User/{UserId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {User} The user object.
		 */
		GetUser(UserId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)), {});
		}

		/**
		 * Patch user object
		 * Patch the user object at the specified resource location
		 * Patch User/{UserId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {User} The user object.
		 */
		PatchUser(UserId: string): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)), null, {});
		}

		/**
		 * Puts user object
		 * Puts the user object into the specified resource location
		 * Put User/{UserId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {User} The user object.
		 */
		PutUser(UserId: string): Observable<User> {
			return this.http.put<User>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)), null, {});
		}

		/**
		 * Gets the user permissions
		 * Gets the user permission instances
		 * Get User/{UserId}/Permissions
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetUserPermissions(UserId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/Permissions', {});
		}

		/**
		 * Delete user tag
		 * Deletes a tag from the user
		 * Delete User/{UserId}/Tag/{TagId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {void} No Content
		 */
		DeleteUserTag(UserId: string, TagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user tag
		 * Gets a tag from the user
		 * Get User/{UserId}/Tag/{TagId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		GetTagFromUser(UserId: string, TagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Insert user tag
		 * Inserts a tag on the user
		 * Put User/{UserId}/Tag/{TagId}
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {Tag} The tag object.
		 */
		PutUserTag(UserId: string, TagId: string): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), null, {});
		}

		/**
		 * Get tags from user
		 * Gets all tags from the user
		 * Get User/{UserId}/Tags
		 * @param {string} UserId The user unique identifier. E.g USER001
		 * @return {LinkCollection} The link collection object.
		 */
		GetTagsFromUser(UserId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'User/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/Tags', {});
		}

		/**
		 * Gets all user objects
		 * Gets all user objects for application
		 * Get Users
		 * @return {LinkCollection} The link collection object.
		 */
		GetUsers(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Users', {});
		}

		/**
		 * Post user object
		 * Post the new user object into the application
		 * Post Users
		 * @return {Link} The link object.
		 */
		PostUser(): Observable<Link> {
			return this.http.post<Link>(this.baseUri + 'Users', null, {});
		}

		/**
		 * Get links to tagged users
		 * Gets the users with the specified tag
		 * Get Users/Tag/{TagId}
		 * @param {string} TagId The tag unique identifier. E.g. MyTag
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllUsersWithTag(TagId: string): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Users/Tag/' + (TagId == null ? '' : encodeURIComponent(TagId)), {});
		}

		/**
		 * Get all user tags
		 * Get all tags from all users
		 * Get Users/Tags
		 * @return {LinkCollection} The link collection object.
		 */
		GetAllUserTags(): Observable<LinkCollection> {
			return this.http.get<LinkCollection>(this.baseUri + 'Users/Tags', {});
		}
	}

}

