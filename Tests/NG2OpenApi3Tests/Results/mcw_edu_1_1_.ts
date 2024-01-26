import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AnnotatedGeneRequest {
		accId?: string | null;
		evidenceCodes?: Array<string>;
		speciesTypeKeys?: Array<number>;
	}
	export interface AnnotatedGeneRequestFormProperties {
		accId: FormControl<string | null | undefined>,
	}
	export function CreateAnnotatedGeneRequestFormGroup() {
		return new FormGroup<AnnotatedGeneRequestFormProperties>({
			accId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Annotation {
		annotatedObjectRgdId?: number | null;
		annotationExtension?: string | null;
		aspect?: string | null;
		createdBy?: number | null;
		createdDate?: Date | null;
		dataSrc?: string | null;
		evidence?: string | null;
		geneProductFormId?: string | null;
		key?: number | null;
		lastModifiedBy?: number | null;
		lastModifiedDate?: Date | null;
		notes?: string | null;
		objectName?: string | null;
		objectSymbol?: string | null;
		originalCreatedDate?: Date | null;
		qualifier?: string | null;
		refRgdId?: number | null;
		relativeTo?: string | null;
		rgdObjectKey?: number | null;
		speciesTypeKey?: number | null;
		term?: string | null;
		termAcc?: string | null;
		withInfo?: string | null;
		xrefSource?: string | null;
	}
	export interface AnnotationFormProperties {
		annotatedObjectRgdId: FormControl<number | null | undefined>,
		annotationExtension: FormControl<string | null | undefined>,
		aspect: FormControl<string | null | undefined>,
		createdBy: FormControl<number | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		dataSrc: FormControl<string | null | undefined>,
		evidence: FormControl<string | null | undefined>,
		geneProductFormId: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		lastModifiedBy: FormControl<number | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
		objectName: FormControl<string | null | undefined>,
		objectSymbol: FormControl<string | null | undefined>,
		originalCreatedDate: FormControl<Date | null | undefined>,
		qualifier: FormControl<string | null | undefined>,
		refRgdId: FormControl<number | null | undefined>,
		relativeTo: FormControl<string | null | undefined>,
		rgdObjectKey: FormControl<number | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		term: FormControl<string | null | undefined>,
		termAcc: FormControl<string | null | undefined>,
		withInfo: FormControl<string | null | undefined>,
		xrefSource: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
			annotatedObjectRgdId: new FormControl<number | null | undefined>(undefined),
			annotationExtension: new FormControl<string | null | undefined>(undefined),
			aspect: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			dataSrc: new FormControl<string | null | undefined>(undefined),
			evidence: new FormControl<string | null | undefined>(undefined),
			geneProductFormId: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			lastModifiedBy: new FormControl<number | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectSymbol: new FormControl<string | null | undefined>(undefined),
			originalCreatedDate: new FormControl<Date | null | undefined>(undefined),
			qualifier: new FormControl<string | null | undefined>(undefined),
			refRgdId: new FormControl<number | null | undefined>(undefined),
			relativeTo: new FormControl<string | null | undefined>(undefined),
			rgdObjectKey: new FormControl<number | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
			termAcc: new FormControl<string | null | undefined>(undefined),
			withInfo: new FormControl<string | null | undefined>(undefined),
			xrefSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationRequest {
		evidenceCodes?: Array<string>;
		ids?: Array<string>;
		speciesTypeKeys?: Array<number>;
		termAcc?: string | null;
	}
	export interface AnnotationRequestFormProperties {
		termAcc: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationRequestFormGroup() {
		return new FormGroup<AnnotationRequestFormProperties>({
			termAcc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chromosome {
		chromosome?: string | null;
		contigCount?: number | null;
		gapCount?: number | null;
		gapLength?: number | null;
		genbankId?: string | null;
		mapKey?: number | null;
		ordinalNumber?: number | null;
		refseqId?: string | null;
		seqLength?: number | null;
	}
	export interface ChromosomeFormProperties {
		chromosome: FormControl<string | null | undefined>,
		contigCount: FormControl<number | null | undefined>,
		gapCount: FormControl<number | null | undefined>,
		gapLength: FormControl<number | null | undefined>,
		genbankId: FormControl<string | null | undefined>,
		mapKey: FormControl<number | null | undefined>,
		ordinalNumber: FormControl<number | null | undefined>,
		refseqId: FormControl<string | null | undefined>,
		seqLength: FormControl<number | null | undefined>,
	}
	export function CreateChromosomeFormGroup() {
		return new FormGroup<ChromosomeFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			contigCount: new FormControl<number | null | undefined>(undefined),
			gapCount: new FormControl<number | null | undefined>(undefined),
			gapLength: new FormControl<number | null | undefined>(undefined),
			genbankId: new FormControl<string | null | undefined>(undefined),
			mapKey: new FormControl<number | null | undefined>(undefined),
			ordinalNumber: new FormControl<number | null | undefined>(undefined),
			refseqId: new FormControl<string | null | undefined>(undefined),
			seqLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnrichmentGeneRequest {
		accId?: string | null;
		geneSymbols?: Array<string>;
		species?: string | null;
	}
	export interface EnrichmentGeneRequestFormProperties {
		accId: FormControl<string | null | undefined>,
		species: FormControl<string | null | undefined>,
	}
	export function CreateEnrichmentGeneRequestFormGroup() {
		return new FormGroup<EnrichmentGeneRequestFormProperties>({
			accId: new FormControl<string | null | undefined>(undefined),
			species: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnrichmentRequest {
		aspect?: string | null;
		genes?: Array<string>;
		species?: string | null;
	}
	export interface EnrichmentRequestFormProperties {
		aspect: FormControl<string | null | undefined>,
		species: FormControl<string | null | undefined>,
	}
	export function CreateEnrichmentRequestFormGroup() {
		return new FormGroup<EnrichmentRequestFormProperties>({
			aspect: new FormControl<string | null | undefined>(undefined),
			species: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gene {
		agrDescription?: string | null;
		description?: string | null;
		ensemblFullName?: string | null;
		ensemblGeneSymbol?: string | null;
		ensemblGeneType?: string | null;
		geneSource?: string | null;
		key?: number | null;
		mergedDescription?: string | null;
		name?: string | null;
		ncbiAnnotStatus?: string | null;
		nomenReviewDate?: Date | null;
		nomenSource?: string | null;
		notes?: string | null;
		refSeqStatus?: string | null;
		rgdId?: number | null;
		soAccId?: string | null;
		speciesTypeKey?: number | null;
		symbol?: string | null;
		type?: string | null;
		variant?: boolean | null;
	}
	export interface GeneFormProperties {
		agrDescription: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ensemblFullName: FormControl<string | null | undefined>,
		ensemblGeneSymbol: FormControl<string | null | undefined>,
		ensemblGeneType: FormControl<string | null | undefined>,
		geneSource: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		mergedDescription: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ncbiAnnotStatus: FormControl<string | null | undefined>,
		nomenReviewDate: FormControl<Date | null | undefined>,
		nomenSource: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		refSeqStatus: FormControl<string | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		soAccId: FormControl<string | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		variant: FormControl<boolean | null | undefined>,
	}
	export function CreateGeneFormGroup() {
		return new FormGroup<GeneFormProperties>({
			agrDescription: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ensemblFullName: new FormControl<string | null | undefined>(undefined),
			ensemblGeneSymbol: new FormControl<string | null | undefined>(undefined),
			ensemblGeneType: new FormControl<string | null | undefined>(undefined),
			geneSource: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			mergedDescription: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ncbiAnnotStatus: new FormControl<string | null | undefined>(undefined),
			nomenReviewDate: new FormControl<Date | null | undefined>(undefined),
			nomenSource: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			refSeqStatus: new FormControl<string | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			soAccId: new FormControl<string | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			variant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Map {
		dbsnpVersion?: string | null;
		description?: string | null;
		key?: number | null;
		methodKey?: number | null;
		name?: string | null;
		notes?: string | null;
		primaryRefAssembly?: boolean | null;
		rank?: number | null;
		refSeqAssemblyAcc?: string | null;
		refSeqAssemblyName?: string | null;
		rgdId?: number | null;
		source?: string | null;
		speciesTypeKey?: number | null;
		ucscAssemblyId?: string | null;
		unit?: string | null;
		version?: string | null;
	}
	export interface MapFormProperties {
		dbsnpVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		methodKey: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		primaryRefAssembly: FormControl<boolean | null | undefined>,
		rank: FormControl<number | null | undefined>,
		refSeqAssemblyAcc: FormControl<string | null | undefined>,
		refSeqAssemblyName: FormControl<string | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		ucscAssemblyId: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateMapFormGroup() {
		return new FormGroup<MapFormProperties>({
			dbsnpVersion: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			methodKey: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			primaryRefAssembly: new FormControl<boolean | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			refSeqAssemblyAcc: new FormControl<string | null | undefined>(undefined),
			refSeqAssemblyName: new FormControl<string | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			ucscAssemblyId: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapPair {
		keyValue?: string | null;
		stringValue?: string | null;
	}
	export interface MapPairFormProperties {
		keyValue: FormControl<string | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateMapPairFormGroup() {
		return new FormGroup<MapPairFormProperties>({
			keyValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MappedGene {
		chromosome?: string | null;
		gene?: Gene;
		mapKey?: number | null;
		start?: number | null;
		stop?: number | null;
		strand?: string | null;
	}
	export interface MappedGeneFormProperties {
		chromosome: FormControl<string | null | undefined>,
		mapKey: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		stop: FormControl<number | null | undefined>,
		strand: FormControl<string | null | undefined>,
	}
	export function CreateMappedGeneFormGroup() {
		return new FormGroup<MappedGeneFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			mapKey: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			stop: new FormControl<number | null | undefined>(undefined),
			strand: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MappedGenePosition {
		chromosome?: string | null;
		mapKey?: number | null;
		rgdId?: number | null;
		start?: number | null;
		stop?: number | null;
		strand?: string | null;
		symbol?: string | null;
	}
	export interface MappedGenePositionFormProperties {
		chromosome: FormControl<string | null | undefined>,
		mapKey: FormControl<number | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		stop: FormControl<number | null | undefined>,
		strand: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateMappedGenePositionFormGroup() {
		return new FormGroup<MappedGenePositionFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			mapKey: new FormControl<number | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			stop: new FormControl<number | null | undefined>(undefined),
			strand: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MappedQTL {
		chromosome?: string | null;
		mapKey?: number | null;
		qtl?: QTL;
		start?: number | null;
		stop?: number | null;
		strand?: string | null;
	}
	export interface MappedQTLFormProperties {
		chromosome: FormControl<string | null | undefined>,
		mapKey: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		stop: FormControl<number | null | undefined>,
		strand: FormControl<string | null | undefined>,
	}
	export function CreateMappedQTLFormGroup() {
		return new FormGroup<MappedQTLFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			mapKey: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			stop: new FormControl<number | null | undefined>(undefined),
			strand: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QTL {
		chromosome?: string | null;
		flank1RgdId?: number | null;
		flank2RgdId?: number | null;
		inheritanceType?: string | null;
		key?: number | null;
		linkageImage?: string | null;
		lod?: number | null;
		lodImage?: string | null;
		mostSignificantCmoTerm?: string | null;
		name?: string | null;
		notes?: string | null;
		peakOffset?: number | null;
		peakRgdId?: number | null;
		pvalue?: number | null;
		rgdId?: number | null;
		sourceUrl?: string | null;
		speciesTypeKey?: number | null;
		symbol?: string | null;
		variance?: number | null;
	}
	export interface QTLFormProperties {
		chromosome: FormControl<string | null | undefined>,
		flank1RgdId: FormControl<number | null | undefined>,
		flank2RgdId: FormControl<number | null | undefined>,
		inheritanceType: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		linkageImage: FormControl<string | null | undefined>,
		lod: FormControl<number | null | undefined>,
		lodImage: FormControl<string | null | undefined>,
		mostSignificantCmoTerm: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		peakOffset: FormControl<number | null | undefined>,
		peakRgdId: FormControl<number | null | undefined>,
		pvalue: FormControl<number | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		variance: FormControl<number | null | undefined>,
	}
	export function CreateQTLFormGroup() {
		return new FormGroup<QTLFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			flank1RgdId: new FormControl<number | null | undefined>(undefined),
			flank2RgdId: new FormControl<number | null | undefined>(undefined),
			inheritanceType: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			linkageImage: new FormControl<string | null | undefined>(undefined),
			lod: new FormControl<number | null | undefined>(undefined),
			lodImage: new FormControl<string | null | undefined>(undefined),
			mostSignificantCmoTerm: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			peakOffset: new FormControl<number | null | undefined>(undefined),
			peakRgdId: new FormControl<number | null | undefined>(undefined),
			pvalue: new FormControl<number | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			variance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MappedSSLP {
		chromosome?: string | null;
		mapKey?: number | null;
		sslp?: SSLP;
		start?: number | null;
		stop?: number | null;
		strand?: string | null;
	}
	export interface MappedSSLPFormProperties {
		chromosome: FormControl<string | null | undefined>,
		mapKey: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		stop: FormControl<number | null | undefined>,
		strand: FormControl<string | null | undefined>,
	}
	export function CreateMappedSSLPFormGroup() {
		return new FormGroup<MappedSSLPFormProperties>({
			chromosome: new FormControl<string | null | undefined>(undefined),
			mapKey: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			stop: new FormControl<number | null | undefined>(undefined),
			strand: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SSLP {
		expectedSize?: number | null;
		forwardSeq?: string | null;
		key?: number | null;
		name?: string | null;
		notes?: string | null;
		reverseSeq?: string | null;
		rgdId?: number | null;
		speciesTypeKey?: number | null;
		sslpType?: string | null;
		templateSeq?: string | null;
	}
	export interface SSLPFormProperties {
		expectedSize: FormControl<number | null | undefined>,
		forwardSeq: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		reverseSeq: FormControl<string | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		sslpType: FormControl<string | null | undefined>,
		templateSeq: FormControl<string | null | undefined>,
	}
	export function CreateSSLPFormGroup() {
		return new FormGroup<SSLPFormProperties>({
			expectedSize: new FormControl<number | null | undefined>(undefined),
			forwardSeq: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			reverseSeq: new FormControl<string | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			sslpType: new FormControl<string | null | undefined>(undefined),
			templateSeq: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrthologRequest {
		rgdIds?: Array<number>;
		speciesTypeKeys?: Array<number>;
	}
	export interface OrthologRequestFormProperties {
	}
	export function CreateOrthologRequestFormGroup() {
		return new FormGroup<OrthologRequestFormProperties>({
		});

	}

	export interface Pathway {
		description?: string | null;
		hasAlteredPath?: string | null;
		id?: string | null;
		name?: string | null;
		objectList?: Array<PathwayObject>;
		pathwayCategories?: Array<string>;
		referenceList?: Array<Reference>;
	}
	export interface PathwayFormProperties {
		description: FormControl<string | null | undefined>,
		hasAlteredPath: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePathwayFormGroup() {
		return new FormGroup<PathwayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			hasAlteredPath: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PathwayObject {
		accId?: string | null;
		id?: string | null;
		objDesc?: string | null;
		objName?: string | null;
		typeId?: number | null;
		typeName?: string | null;
		url?: string | null;
		xdb_key?: number | null;
	}
	export interface PathwayObjectFormProperties {
		accId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		objDesc: FormControl<string | null | undefined>,
		objName: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
		typeName: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		xdb_key: FormControl<number | null | undefined>,
	}
	export function CreatePathwayObjectFormGroup() {
		return new FormGroup<PathwayObjectFormProperties>({
			accId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			objDesc: new FormControl<string | null | undefined>(undefined),
			objName: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			xdb_key: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Reference {
		citation?: string | null;
		doi?: string | null;
		editors?: string | null;
		issue?: string | null;
		key?: number | null;
		notes?: string | null;
		pages?: string | null;
		pubDate?: Date | null;
		pubStatus?: string | null;
		publication?: string | null;
		publisher?: string | null;
		publisherCity?: string | null;
		refAbstract?: string | null;
		referenceType?: string | null;
		rgdId?: number | null;
		speciesTypeKey?: number | null;
		title?: string | null;
		urlWebReference?: string | null;
		volume?: string | null;
	}
	export interface ReferenceFormProperties {
		citation: FormControl<string | null | undefined>,
		doi: FormControl<string | null | undefined>,
		editors: FormControl<string | null | undefined>,
		issue: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		notes: FormControl<string | null | undefined>,
		pages: FormControl<string | null | undefined>,
		pubDate: FormControl<Date | null | undefined>,
		pubStatus: FormControl<string | null | undefined>,
		publication: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		publisherCity: FormControl<string | null | undefined>,
		refAbstract: FormControl<string | null | undefined>,
		referenceType: FormControl<string | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		urlWebReference: FormControl<string | null | undefined>,
		volume: FormControl<string | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			citation: new FormControl<string | null | undefined>(undefined),
			doi: new FormControl<string | null | undefined>(undefined),
			editors: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			pages: new FormControl<string | null | undefined>(undefined),
			pubDate: new FormControl<Date | null | undefined>(undefined),
			pubStatus: new FormControl<string | null | undefined>(undefined),
			publication: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			publisherCity: new FormControl<string | null | undefined>(undefined),
			refAbstract: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<string | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			urlWebReference: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RGDIDListRequest {
		rgdIds?: Array<number>;
	}
	export interface RGDIDListRequestFormProperties {
	}
	export function CreateRGDIDListRequestFormGroup() {
		return new FormGroup<RGDIDListRequestFormProperties>({
		});

	}

	export interface Status {
		cryopreservedEmbryo?: boolean | null;
		cryopreservedSperm?: boolean | null;
		cryorecovery?: boolean | null;
		key?: number | null;
		liveAnimals?: boolean | null;
		statusDate?: Date | null;
		strainRgdId?: number | null;
	}
	export interface StatusFormProperties {
		cryopreservedEmbryo: FormControl<boolean | null | undefined>,
		cryopreservedSperm: FormControl<boolean | null | undefined>,
		cryorecovery: FormControl<boolean | null | undefined>,
		key: FormControl<number | null | undefined>,
		liveAnimals: FormControl<boolean | null | undefined>,
		statusDate: FormControl<Date | null | undefined>,
		strainRgdId: FormControl<number | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			cryopreservedEmbryo: new FormControl<boolean | null | undefined>(undefined),
			cryopreservedSperm: new FormControl<boolean | null | undefined>(undefined),
			cryorecovery: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			liveAnimals: new FormControl<boolean | null | undefined>(undefined),
			statusDate: new FormControl<Date | null | undefined>(undefined),
			strainRgdId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Strain {
		backgroundStrainRgdId?: number | null;
		chrAltered?: string | null;
		color?: string | null;
		geneticStatus?: string | null;
		genetics?: string | null;
		imageUrl?: string | null;
		inbredGen?: string | null;
		key?: number | null;
		lastStatus?: string | null;
		lastStatusObject?: Status;
		modificationMethod?: string | null;
		name?: string | null;
		notes?: string | null;
		origin?: string | null;
		researchUse?: string | null;
		rgdId?: number | null;
		source?: string | null;
		speciesTypeKey?: number | null;
		statusLog?: Array<Status>;
		strain?: string | null;
		strainTypeName?: string | null;
		substrain?: string | null;
		symbol?: string | null;
	}
	export interface StrainFormProperties {
		backgroundStrainRgdId: FormControl<number | null | undefined>,
		chrAltered: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,
		geneticStatus: FormControl<string | null | undefined>,
		genetics: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		inbredGen: FormControl<string | null | undefined>,
		key: FormControl<number | null | undefined>,
		lastStatus: FormControl<string | null | undefined>,
		modificationMethod: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		researchUse: FormControl<string | null | undefined>,
		rgdId: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
		speciesTypeKey: FormControl<number | null | undefined>,
		strain: FormControl<string | null | undefined>,
		strainTypeName: FormControl<string | null | undefined>,
		substrain: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateStrainFormGroup() {
		return new FormGroup<StrainFormProperties>({
			backgroundStrainRgdId: new FormControl<number | null | undefined>(undefined),
			chrAltered: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			geneticStatus: new FormControl<string | null | undefined>(undefined),
			genetics: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			inbredGen: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			lastStatus: new FormControl<string | null | undefined>(undefined),
			modificationMethod: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			researchUse: new FormControl<string | null | undefined>(undefined),
			rgdId: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			speciesTypeKey: new FormControl<number | null | undefined>(undefined),
			strain: new FormControl<string | null | undefined>(undefined),
			strainTypeName: new FormControl<string | null | undefined>(undefined),
			substrain: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Term {
		accId?: string | null;
		comment?: string | null;
		createdBy?: string | null;
		creationDate?: Date | null;
		definition?: string | null;
		modificationDate?: Date | null;
		obsolete?: number | null;
		ontologyId?: string | null;
		term?: string | null;
		xrefs?: Array<TermXRef>;
	}
	export interface TermFormProperties {
		accId: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		definition: FormControl<string | null | undefined>,
		modificationDate: FormControl<Date | null | undefined>,
		obsolete: FormControl<number | null | undefined>,
		ontologyId: FormControl<string | null | undefined>,
		term: FormControl<string | null | undefined>,
	}
	export function CreateTermFormGroup() {
		return new FormGroup<TermFormProperties>({
			accId: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			modificationDate: new FormControl<Date | null | undefined>(undefined),
			obsolete: new FormControl<number | null | undefined>(undefined),
			ontologyId: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TermXRef {
		key?: number | null;
		termAcc?: string | null;
		xrefDescription?: string | null;
		xrefValue?: string | null;
	}
	export interface TermXRefFormProperties {
		key: FormControl<number | null | undefined>,
		termAcc: FormControl<string | null | undefined>,
		xrefDescription: FormControl<string | null | undefined>,
		xrefValue: FormControl<string | null | undefined>,
	}
	export function CreateTermXRefFormGroup() {
		return new FormGroup<TermXRefFormProperties>({
			key: new FormControl<number | null | undefined>(undefined),
			termAcc: new FormControl<string | null | undefined>(undefined),
			xrefDescription: new FormControl<string | null | undefined>(undefined),
			xrefValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
		 * Get agr/affectedGenomicModels/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetAffectedGenomicModelsUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/affectedGenomicModels/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get gene allele records submitted by RGD to AGR by taxonId
		 * Get agr/alleles/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetAllelesForTaxonUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/alleles/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get expression annotations submitted by RGD to AGR by taxonId
		 * Get agr/expression/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetExpressionForTaxonUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/expression/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get phenotype annotations submitted by RGD to AGR by taxonId
		 * Get agr/phenotypes/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetPhenotypesForTaxonUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/phenotypes/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get basic variant records submitted by RGD to AGR by taxonId
		 * Get agr/variants/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetVariantsForTaxonUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/variants/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get gene records submitted by RGD to AGR by taxonId
		 * Get agr/{taxonId}
		 * @param {string} taxonId The taxon ID for species
		 * @return {void} OK
		 */
		GetGenesForLatestAssemblyUsingGET(taxonId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agr/' + (taxonId == null ? '' : encodeURIComponent(taxonId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes annotated to an ontology term
		 * Post annotations/
		 * @param {AnnotationRequest} requestBody data
		 * @return {void} OK
		 */
		GetAnnotationsUsingPOST(requestBody: AnnotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'annotations/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list ontology term accession IDs annotated to an rgd object
		 * Get annotations/accId/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetTermAccIdsUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/accId/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns annotation count for ontology accession ID
		 * Get annotations/count/{accId}/{includeChildren}
		 * @param {string} accId Ontology term accession ID
		 * @param {boolean} includeChildren true: return annotations for the term and children, false: return annotations for the term only 
		 * @return {void} OK
		 */
		GetAnnotationCountByAccIdUsingGET(accId: string, includeChildren: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/count/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + includeChildren, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns annotation count for ontology accession ID and speicies
		 * Get annotations/count/{accId}/{speciesTypeKey}/{includeChildren}
		 * @param {string} accId Ontology term accession ID
		 * @param {number} speciesTypeKey A list of species type keys can be found using the lookup service
		 * @param {boolean} includeChildren true: return annotations for the term and children, false: return annotations for the term only 
		 * @return {void} OK
		 */
		GetAnnotationCountByAccIdAndSpeciesUsingGET(accId: string, speciesTypeKey: number, includeChildren: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/count/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + speciesTypeKey + '/' + includeChildren, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns annotation count for ontology accession ID and object type
		 * Get annotations/count/{accId}/{speciesTypeKey}/{includeChildren}/{objectType}
		 * @param {string} accId Ontology term accession ID
		 * @param {number} speciesTypeKey A list of species type keys can be found using the lookup service
		 * @param {boolean} includeChildren true: return annotations for the term and children, false: return annotations for the term only 
		 * @param {number} objectType A list of object types can be found using the lookup service
		 * @return {void} OK
		 */
		GetAnnotationCountByAccIdAndObjectTypeUsingGET(accId: string, speciesTypeKey: number, includeChildren: boolean, objectType: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/count/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + speciesTypeKey + '/' + includeChildren + '/' + objectType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of annotations for a reference
		 * Get annotations/reference/{refRgdId}
		 * @param {number} refRgdId Reference RGD ID
		 * @return {void} OK
		 */
		GetAnnotsByRefrerenceUsingGET(refRgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/reference/' + refRgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of annotations by RGD ID
		 * Get annotations/rgdId/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetAnnotationsByRgdIdUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/rgdId/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of annotations by RGD ID and ontology prefix
		 * Get annotations/rgdId/{rgdId}/{ontologyPrefix}
		 * @param {number} rgdId RGD ID
		 * @param {string} ontologyPrefix Ontology Prefix.  The prefix can be found left of the semicolon in an ontology term accession ID.  As an example, term accession PW:0000034 has the ontology prefix PW
		 * @return {void} OK
		 */
		GetAnnotationsByRgdIdAndOntologyUsingGET(rgdId: number, ontologyPrefix: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/rgdId/' + rgdId + '/' + (ontologyPrefix == null ? '' : encodeURIComponent(ontologyPrefix)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of annotations by RGD ID and ontology term accession ID
		 * Get annotations/{accId}/{rgdId}
		 * @param {string} accId Ontology Term Accession ID
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetAnnotationsByAccIdAndRgdIdUsingGET(accId: string, rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list annotations for an ontology term or a term and it's children
		 * Get annotations/{accId}/{speciesTypeKey}/{includeChildren}
		 * @param {string} accId Ontology term accession ID
		 * @param {number} speciesTypeKey A list of species type keys can be found using the lookup service
		 * @param {boolean} includeChildren true: return annotations for the term and children, false: return annotations for the term only 
		 * @return {void} OK
		 */
		GetAnnotationsUsingGET(accId: string, speciesTypeKey: number, includeChildren: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'annotations/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + speciesTypeKey + '/' + includeChildren, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
		 * Post enrichment/annotatedGenes
		 * @param {EnrichmentGeneRequest} requestBody geneRequest
		 * @return {void} OK
		 */
		GetEnrichmentDataUsingPOST(requestBody: EnrichmentGeneRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enrichment/annotatedGenes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
		 * Post enrichment/data
		 * @param {EnrichmentRequest} requestBody enrichmentRequest
		 * @return {void} OK
		 */
		GetEnrichmentDataUsingPOST_1(requestBody: EnrichmentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enrichment/data', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes for an affymetrix ID
		 * Get genes/affyId/{affyId}/{speciesTypeKey}
		 * @param {string} affyId Affymetrix ID
		 * @param {number} speciesTypeKey A list of RGD species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesByAffyIdUsingGET(affyId: string, speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/affyId/' + (affyId == null ? '' : encodeURIComponent(affyId)) + '/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes for an alias and species
		 * Get genes/alias/{aliasSymbol}/{speciesTypeKey}
		 * @param {string} aliasSymbol Gene alias symbol
		 * @param {number} speciesTypeKey A list of RGD species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesByAliasSymbolUsingGET(aliasSymbol: string, speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/alias/' + (aliasSymbol == null ? '' : encodeURIComponent(aliasSymbol)) + '/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of gene alleles
		 * Get genes/allele/{rgdId}
		 * @param {number} rgdId RGD ID of gene
		 * @return {void} OK
		 */
		GetGeneAllelesUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/allele/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes annotated to an ontology term
		 * Post genes/annotation
		 * @param {AnnotatedGeneRequest} requestBody data
		 * @return {void} OK
		 */
		GetAnnotatedGenesUsingPOST(requestBody: AnnotatedGeneRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'genes/annotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes annotated to an ontology term
		 * Get genes/annotation/{accId}
		 * @param {string} accId Accesstion ID
		 * @return {void} OK
		 */
		GetAllAnnotatedGenesUsingGET(accId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/annotation/' + (accId == null ? '' : encodeURIComponent(accId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes annotated to an ontology term
		 * Get genes/annotation/{accId}/{speciesTypeKey}
		 * @param {string} accId Ontology term accession ID
		 * @param {number} speciesTypeKey Species type key.  A list of species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesAnnotatedUsingGET(accId: string, speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/annotation/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes by keyword and species type key
		 * Get genes/keyword/{keyword}/{speciesTypeKey}
		 * @param {string} keyword Search keyword
		 * @param {number} speciesTypeKey Species type key.  A list of species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesByKeywordUsingGET(keyword: string, speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/keyword/' + (keyword == null ? '' : encodeURIComponent(keyword)) + '/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of all genes with position information for an assembly
		 * Get genes/map/{mapKey}
		 * @param {number} mapKey A list of RGD assembly map keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGeneByMapKeyUsingGET(mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/map/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes position and map key
		 * Get genes/mapped/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of RGD assembly map keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetMappedGenesByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/mapped/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of gene orthologs
		 * Post genes/orthologs
		 * @param {OrthologRequest} requestBody orthologRequest
		 * @return {void} OK
		 */
		GetOrthologsByListUsingPOST(requestBody: OrthologRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'genes/orthologs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of gene orthologs
		 * Get genes/orthologs/{rgdId}
		 * @param {number} rgdId RGD ID of a gene
		 * @return {void} OK
		 */
		GetGeneOrthologsUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/orthologs/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes in region
		 * Get genes/region/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of RGD assembly map keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesInRegionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/region/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of all genes for a species in RGD
		 * Get genes/species/{speciesTypeKey}
		 * @param {number} speciesTypeKey A list of RGD species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesBySpeciesUsingGET(speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/species/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of genes position and map key
		 * Get genes/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of RGD assembly map keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGenesByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a gene record by RGD ID
		 * Get genes/{rgdId}
		 * @param {number} rgdId The RGD ID of a Gene in RGD
		 * @return {void} OK
		 */
		GetGeneByRgdIdUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a gene record by symbol and species type key
		 * Get genes/{symbol}/{speciesTypeKey}
		 * @param {string} symbol Gene Symbol
		 * @param {number} speciesTypeKey Species type key.  A list of species type keys can be found in the lookup service
		 * @return {void} OK
		 */
		GetGeneBySymbolUsingGET(symbol: string, speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genes/' + (symbol == null ? '' : encodeURIComponent(symbol)) + '/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of gene types avialable in RGD
		 * Get lookup/geneTypes
		 * @return {void} OK
		 */
		GetGeneTypesUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/geneTypes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to Ensembl Gene IDs
		 * Post lookup/id/map/EnsemblGene
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetEnsemblGeneMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/EnsemblGene', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an Ensembl Gene  ID
		 * Get lookup/id/map/EnsemblGene/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetEnsemblGeneMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/EnsemblGene/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to Ensembl Protein IDs
		 * Post lookup/id/map/EnsemblProtein
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetEnsemblProteinMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/EnsemblProtein', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an Ensembl Protein ID
		 * Get lookup/id/map/EnsemblProtein/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetEnsemblProteinMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/EnsemblProtein/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to Ensembl Transcript IDs
		 * Post lookup/id/map/EnsemblTranscript
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetEnsemblTranscriptMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/EnsemblTranscript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an Ensembl Transcript ID
		 * Get lookup/id/map/EnsemblTranscript/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetEnsemblTranscriptMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/EnsemblTranscript/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to GTEx IDs
		 * Post lookup/id/map/GTEx
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetGTEXMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/GTEx', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an GTEx ID
		 * Get lookup/id/map/GTEx/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetGTEXMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/GTEx/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to GenBank Nucleotide IDs
		 * Post lookup/id/map/GenBankNucleotide
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetGenBankNucleotideMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/GenBankNucleotide', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to a GenBank Nucleotide ID
		 * Get lookup/id/map/GenBankNucleotide/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetGenBankNucleotideMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/GenBankNucleotide/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to GenBank Protein IDs
		 * Post lookup/id/map/GenBankProtein
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetGenBankProteinMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/GenBankProtein', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to a GenBank Protein ID
		 * Get lookup/id/map/GenBankProtein/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetGenBankProteinMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/GenBankProtein/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to HGNC IDs
		 * Post lookup/id/map/HGNC
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetHGNCMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/HGNC', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an HGNC ID
		 * Get lookup/id/map/HGNC/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetHGNCMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/HGNC/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to MGI IDs
		 * Post lookup/id/map/MGI
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetMGIMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/MGI', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an MGI ID
		 * Get lookup/id/map/MGI/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetMGIMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/MGI/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to NCBI Gene IDs
		 * Post lookup/id/map/NCBIGene
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetNCBIGeneMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/NCBIGene', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to an NCBI Gene ID
		 * Get lookup/id/map/NCBIGene/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetNCBIGeneMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/NCBIGene/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate RGD IDs to UniProt IDs
		 * Post lookup/id/map/UniProt
		 * @param {RGDIDListRequest} requestBody data
		 * @return {void} OK
		 */
		GetUniProtMappingUsingPOST(requestBody: RGDIDListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/id/map/UniProt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate an RGD ID to a UniProt ID
		 * Get lookup/id/map/UniProt/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetUniProtMappingUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/id/map/UniProt/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list assembly maps for a species
		 * Get lookup/maps/{speciesTypeKey}
		 * @param {number} speciesTypeKey RGD species type key. A full list of keys is available throught the lookup service.  1=human, 2=mouse, 3=rat,ect
		 * @return {void} OK
		 */
		GetMapsUsingGET(speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/maps/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a Map of species type keys available in RGD
		 * Get lookup/speciesTypeKeys
		 * @return {void} OK
		 */
		GetSpeciesTypesUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/speciesTypeKeys', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a standardUnit for an ontology if it exists
		 * Get lookup/standardUnit/{accId}
		 * @param {string} accId RGD term acc
		 * @return {void} OK
		 */
		GetMapsUsingGET_1(accId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/standardUnit/' + (accId == null ? '' : encodeURIComponent(accId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of chromosomes
		 * Get maps/chr/{chromosome}/{mapKey}
		 * @param {string} chromosome chromosome
		 * @param {number} mapKey mapKey
		 * @return {void} OK
		 */
		GetChromosomeByAssemblyUsingGET(chromosome: string, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'maps/chr/' + (chromosome == null ? '' : encodeURIComponent(chromosome)) + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of chromosomes
		 * Get maps/chr/{mapKey}
		 * @param {number} mapKey mapKey
		 * @return {void} OK
		 */
		GetChromosomesByAssemblyUsingGET(mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'maps/chr/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of assemblies
		 * Get maps/{speciesTypeKey}
		 * @param {number} speciesTypeKey species Key
		 * @return {void} OK
		 */
		GetMapsBySpeciesUsingGET(speciesTypeKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'maps/' + speciesTypeKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns child and parent terms for Accession ID
		 * Get ontology/ont/{accId}
		 * @param {string} accId Accession ID
		 * @return {void} OK
		 */
		GetOntDagsUsingGET(accId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/ont/' + (accId == null ? '' : encodeURIComponent(accId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns true or false for terms
		 * Get ontology/term/{accId1}/{accId2}
		 * @param {string} accId1 Child Term Accession ID
		 * @param {string} accId2 Parent Term Accession ID
		 * @return {void} OK
		 */
		IsDescendantOfUsingGET(accId1: string, accId2: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/' + (accId1 == null ? '' : encodeURIComponent(accId1)) + '/' + (accId2 == null ? '' : encodeURIComponent(accId2)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns term for Accession ID
		 * Get ontology/term/{accId}
		 * @param {string} accId Term Accession ID
		 * @return {void} OK
		 */
		GetTermUsingGET(accId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/' + (accId == null ? '' : encodeURIComponent(accId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of pathways based on search term
		 * Get pathways/diagrams/search/{searchString}
		 * @param {string} searchString Free text search string
		 * @return {void} OK
		 */
		SearchPathwaysUsingGET(searchString: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pathways/diagrams/search/' + (searchString == null ? '' : encodeURIComponent(searchString)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of pathways based on category provided
		 * Get pathways/diagramsForCategory/{category}
		 * @param {string} category Pathway Category
		 * @return {void} OK
		 */
		GetPathwaysWithDiagramsForCategoryUsingGET(category: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pathways/diagramsForCategory/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
		 * Get phenotype/phenominer/chart/{speciesTypeKey}/{refRgdId}/{termString}
		 * @param {number} speciesTypeKey Species Type Key - 3=rat 4=chinchilla 
		 * @param {number} refRgdId Reference RGD ID for a study
		 * @param {string} termString List of term accession IDs
		 * @return {void} OK
		 */
		GetChartInfoUsingGET(speciesTypeKey: number, refRgdId: number, termString: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'phenotype/phenominer/chart/' + speciesTypeKey + '/' + refRgdId + '/' + (termString == null ? '' : encodeURIComponent(termString)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
		 * Get phenotype/phenominer/chart/{speciesTypeKey}/{termString}
		 * @param {number} speciesTypeKey Species Type Key - 3=rat 4=chinchilla 
		 * @param {string} termString List of term accession IDs
		 * @return {void} OK
		 */
		GetChartInfoUsingGET_1(speciesTypeKey: number, termString: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'phenotype/phenominer/chart/' + speciesTypeKey + '/' + (termString == null ? '' : encodeURIComponent(termString)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list QTL for given position and assembly map
		 * Get qtls/mapped/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of assembly map keys can be found using the lookup service
		 * @return {void} OK
		 */
		GetMappedQTLByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qtls/mapped/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list QTL for given position and assembly map
		 * Get qtls/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of assembly map keys can be found using the lookup service
		 * @return {void} OK
		 */
		GetQtlListByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qtls/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a QTL for provided RGD ID
		 * Get qtls/{rgdId}
		 * @param {number} rgdId RGD ID
		 * @return {void} OK
		 */
		GetQTLByRgdIdUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qtls/' + rgdId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list SSLP for given position and assembly map
		 * Get sslps/mapped/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey A list of assembly map keys can be found using the lookup service
		 * @return {void} OK
		 */
		GetMappedSSLPByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sslps/mapped/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of active objects by type, for specified species and date
		 * Get stats/count/activeObject/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetActiveObjectCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/activeObject/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of gene types, for specified species and date
		 * Get stats/count/geneType/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetGeneTypeCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/geneType/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of objects with given status, for specified species and date
		 * Get stats/count/objectStatus/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectStatusCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/objectStatus/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of objects with reference sequence(s), by object type, for specified species and date
		 * Get stats/count/objectWithRefSeq/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithRefSeqCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/objectWithRefSeq/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of objects with reference, by object type, for specified species and date
		 * Get stats/count/objectWithReference/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithReferenceCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/objectWithReference/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of objects with external database ids, by database id, for specified species, object type and date
		 * Get stats/count/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {number} objectKey objectKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithXDBsCountUsingGET(speciesTypeKey: number, objectKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/objectWithXdb/' + speciesTypeKey + '/' + objectKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of protein interactions, for specified species and date
		 * Get stats/count/proteinInteraction/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetProteinInteractionCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/proteinInteraction/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of strains, by qtl inheritance type, for specified species and date
		 * Get stats/count/qtlInheritanceType/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetQtlInheritanceTypeCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/qtlInheritanceType/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of retired objects by type, for specified species and date
		 * Get stats/count/retiredObject/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetRetiredObjectCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/retiredObject/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of strain types, for specified species and date
		 * Get stats/count/strainType/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetStrainTypeCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/strainType/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of withdrawn objects by type, for specified species and date
		 * Get stats/count/withdrawnObject/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetWithdrawnObjectCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/withdrawnObject/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count of external database ids, for specied species and date
		 * Get stats/count/xdb/{speciesTypeKey}/{dateYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateYYYYMMDD dateYYYYMMDD
		 * @return {void} OK
		 */
		GetXdbsCountUsingGET(speciesTypeKey: number, dateYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/count/xdb/' + speciesTypeKey + '/' + (dateYYYYMMDD == null ? '' : encodeURIComponent(dateYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of active objects, by type, for specified species and date range
		 * Get stats/diff/activeObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetActiveObjectDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/activeObject/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of gene types, for specified species and date range
		 * Get stats/diff/geneType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetGeneTypeDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/geneType/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of objects with given status, for specified species and date range
		 * Get stats/diff/objectStatus/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectStatusDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/objectStatus/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of objects with reference sequence(s), by object type, for specified species and date range
		 * Get stats/diff/objectWithRefSeq/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithRefSeqDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/objectWithRefSeq/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of objects with reference, by object type, for specified species and date range
		 * Get stats/diff/objectWithReference/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithReferenceDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/objectWithReference/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of objects with external database ids, by database id, for specified species, object type and date range
		 * Get stats/diff/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {number} objectKey objectKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetObjectsWithXDBsDiffUsingGET(speciesTypeKey: number, objectKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/objectWithXdb/' + speciesTypeKey + '/' + objectKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of protein interactions, for specified species and date range
		 * Get stats/diff/proteinInteraction/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetProteinInteractionDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/proteinInteraction/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of strains, by qtl inheritance type, for specified species and date range
		 * Get stats/diff/qtlInheritanceType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetQtlInheritanceTypeDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/qtlInheritanceType/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of retired objects, by type, for specified species and date range
		 * Get stats/diff/retiredObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetRetiredObjectDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/retiredObject/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of strain types, for specified species and date range
		 * Get stats/diff/strainType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetStrainTypeDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/strainType/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of withdrawn objects, by type, for specified species and date range
		 * Get stats/diff/withdrawnObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetWithdrawnObjectDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/withdrawnObject/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Count difference of external database ids, for specified species and date range
		 * Get stats/diff/xdb/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}
		 * @param {number} speciesTypeKey speciesTypeKey
		 * @param {string} dateFromYYYYMMDD dateFromYYYYMMDD
		 * @param {string} dateToYYYYMMDD dateToYYYYMMDD
		 * @return {void} OK
		 */
		GetXdbsDiffUsingGET(speciesTypeKey: number, dateFromYYYYMMDD: string, dateToYYYYMMDD: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/diff/xdb/' + speciesTypeKey + '/' + (dateFromYYYYMMDD == null ? '' : encodeURIComponent(dateFromYYYYMMDD)) + '/' + (dateToYYYYMMDD == null ? '' : encodeURIComponent(dateToYYYYMMDD)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * getTermStats
		 * Get stats/term/{accId}/{filterAccId}
		 * @param {string} accId accId
		 * @param {string} filterAccId filterAccId
		 * @return {void} OK
		 */
		GetTermStatsUsingGET(accId: string, filterAccId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/term/' + (accId == null ? '' : encodeURIComponent(accId)) + '/' + (filterAccId == null ? '' : encodeURIComponent(filterAccId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all active strains in RGD
		 * Get strains/all
		 * @return {void} OK
		 */
		GetAllStrainsUsingGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'strains/all', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all active strains by position
		 * Get strains/{chr}/{start}/{stop}/{mapKey}
		 * @param {string} chr Chromosome
		 * @param {number} start Start Position
		 * @param {number} stop Stop Position
		 * @param {number} mapKey RGD Map Key (available through lookup service)
		 * @return {void} OK
		 */
		GetStrainsByPositionUsingGET(chr: string, start: number, stop: number, mapKey: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'strains/' + (chr == null ? '' : encodeURIComponent(chr)) + '/' + start + '/' + stop + '/' + mapKey, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a strain by RGD ID
		 * Get strains/{rgdId}
		 * @param {number} rgdId RGD ID of the strain
		 * @return {void} OK
		 */
		GetStrainByRgdIdUsingGET(rgdId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'strains/' + rgdId, { observe: 'response', responseType: 'text' });
		}
	}

}

