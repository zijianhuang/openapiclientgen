import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface A_page_of_results {

		/** Number of this page of results */
		page?: number | null;

		/** Total number of pages of results */
		pages?: number | null;

		/** Number of items per page of results */
		per_page?: number | null;

		/** Total number of results */
		total?: number | null;
	}
	export interface A_page_of_resultsFormProperties {

		/** Number of this page of results */
		page: FormControl<number | null | undefined>,

		/** Total number of pages of results */
		pages: FormControl<number | null | undefined>,

		/** Number of items per page of results */
		per_page: FormControl<number | null | undefined>,

		/** Total number of results */
		total: FormControl<number | null | undefined>,
	}
	export function CreateA_page_of_resultsFormGroup() {
		return new FormGroup<A_page_of_resultsFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AbstractPropertyValue {

		/** predicate (attribute) part */
		pred?: string | null;

		/** value part */
		val?: string | null;

		/** Xrefs provenance for property-value */
		xrefs?: Array<string>;
	}
	export interface AbstractPropertyValueFormProperties {

		/** predicate (attribute) part */
		pred: FormControl<string | null | undefined>,

		/** value part */
		val: FormControl<string | null | undefined>,
	}
	export function CreateAbstractPropertyValueFormGroup() {
		return new FormGroup<AbstractPropertyValueFormProperties>({
			pred: new FormControl<string | null | undefined>(undefined),
			val: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationExtension {

		/** Extension interpreted as OWL expression (r1 some r2 some .. some filler). */
		filler?: NamedObject;

		/** Relationship type. If more than one value, interpreted as chain */
		relation_chain?: Array<Relation>;
	}
	export interface AnnotationExtensionFormProperties {
	}
	export function CreateAnnotationExtensionFormGroup() {
		return new FormGroup<AnnotationExtensionFormProperties>({
		});

	}

	export interface Relation extends NamedObject {
	}
	export interface RelationFormProperties extends NamedObjectFormProperties {
	}
	export function CreateRelationFormGroup() {
		return new FormGroup<RelationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Association {

		/** An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object */
		evidence_graph?: Graph;

		/** Evidence types (ECO classes) */
		evidence_types?: Array<EntityReference>;

		/**
		 * Association/annotation unique ID
		 * Required
		 */
		id: string;

		/** True if association is negated */
		negated?: boolean | null;

		/**
		 * Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
		 * Required
		 */
		object: BioObjectCore;

		/** Equivalent identifiers to object node */
		object_eq?: Array<string>;
		object_extensions?: Array<string>;

		/** Provider of association, e.g. Orphanet, ClinVar */
		provided_by?: Array<string>;

		/** Publications supporting association, extracted from evidence graph */
		publications?: Array<EntityReference>;

		/** Qualifier on the association */
		qualifiers?: Array<string>;

		/**
		 * Relationship type connecting subject and object
		 * Required
		 */
		relation: RelationRef;

		/** Objects mapped to a slim */
		slim?: Array<string>;

		/**
		 * Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
		 * Required
		 */
		subject: BioObjectCore;

		/** Equivalent identifiers to subject node */
		subject_eq?: Array<string>;
		subject_extensions?: Array<string>;

		/** Type of association, e.g. gene-phenotype */
		type?: string | null;
	}
	export interface AssociationFormProperties {

		/**
		 * Association/annotation unique ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** True if association is negated */
		negated: FormControl<boolean | null | undefined>,

		/** Type of association, e.g. gene-phenotype */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssociationFormGroup() {
		return new FormGroup<AssociationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			negated: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Graph {

		/** All edges in graph */
		edges?: Array<Edge>;

		/** All nodes in graph */
		nodes?: Array<Node>;
	}
	export interface GraphFormProperties {
	}
	export function CreateGraphFormGroup() {
		return new FormGroup<GraphFormProperties>({
		});

	}

	export interface Edge {

		/** metadata about the Edge */
		meta?: string | null;

		/** Object (target) Node ID */
		obj?: string | null;

		/** Predicate (relation) ID */
		pred?: string | null;

		/** Subject (source) Node ID */
		sub?: string | null;
	}
	export interface EdgeFormProperties {

		/** metadata about the Edge */
		meta: FormControl<string | null | undefined>,

		/** Object (target) Node ID */
		obj: FormControl<string | null | undefined>,

		/** Predicate (relation) ID */
		pred: FormControl<string | null | undefined>,

		/** Subject (source) Node ID */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateEdgeFormGroup() {
		return new FormGroup<EdgeFormProperties>({
			meta: new FormControl<string | null | undefined>(undefined),
			obj: new FormControl<string | null | undefined>(undefined),
			pred: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Node {

		/**
		 * ID or CURIE e.g. MGI:1201606
		 * Required
		 */
		id: string;

		/** RDFS Label */
		label?: string | null;
	}
	export interface NodeFormProperties {

		/**
		 * ID or CURIE e.g. MGI:1201606
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** RDFS Label */
		label: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityReference {

		/** ID or CURIE e.g. MGI:1201606 */
		id?: string | null;

		/** RDFS Label */
		label?: string | null;
	}
	export interface EntityReferenceFormProperties {

		/** ID or CURIE e.g. MGI:1201606 */
		id: FormControl<string | null | undefined>,

		/** RDFS Label */
		label: FormControl<string | null | undefined>,
	}
	export function CreateEntityReferenceFormGroup() {
		return new FormGroup<EntityReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociationResults extends SearchResult {

		/** Complete representation of full association object, plus evidence */
		associations?: Array<Association>;

		/** Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs */
		compact_associations?: Array<CompactAssociationSet>;

		/** List of distinct objects used */
		objects?: Array<string>;
	}
	export interface AssociationResultsFormProperties extends SearchResultFormProperties {
	}
	export function CreateAssociationResultsFormGroup() {
		return new FormGroup<AssociationResultsFormProperties>({
			facet_counts: new FormControl<string | null | undefined>(undefined),
			highlighting: new FormControl<string | null | undefined>(undefined),
			numFound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CompactAssociationSet {

		/**
		 * List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)
		 * Required
		 */
		objects: Array<string>;

		/**
		 * Relationship type connecting subject and object list
		 * Required
		 */
		relation: string;

		/**
		 * Subject of association (what it is about), e.g. MGI:1201606
		 * Required
		 */
		subject: string;
	}
	export interface CompactAssociationSetFormProperties {

		/**
		 * Relationship type connecting subject and object list
		 * Required
		 */
		relation: FormControl<string | null | undefined>,

		/**
		 * Subject of association (what it is about), e.g. MGI:1201606
		 * Required
		 */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCompactAssociationSetFormGroup() {
		return new FormGroup<CompactAssociationSetFormProperties>({
			relation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutocompleteResult {

		/** node categories */
		category?: Array<string>;

		/** Equivalent IDs */
		equivalent_ids?: Array<string>;

		/** True if highlight can be interpreted as html, else False */
		has_highlight?: boolean | null;

		/** solr highlight */
		highlight?: string | null;

		/** curie formatted id */
		id?: string | null;

		/** primary label (rdfs:label) */
		label?: Array<string>;

		/** matched part of document (may be primary label, synonym, id, etc) */
		match?: string | null;

		/** taxon as NCBITaxon curie */
		taxon?: string | null;

		/** taxon label */
		taxon_label?: string | null;
	}
	export interface AutocompleteResultFormProperties {

		/** True if highlight can be interpreted as html, else False */
		has_highlight: FormControl<boolean | null | undefined>,

		/** solr highlight */
		highlight: FormControl<string | null | undefined>,

		/** curie formatted id */
		id: FormControl<string | null | undefined>,

		/** matched part of document (may be primary label, synonym, id, etc) */
		match: FormControl<string | null | undefined>,

		/** taxon as NCBITaxon curie */
		taxon: FormControl<string | null | undefined>,

		/** taxon label */
		taxon_label: FormControl<string | null | undefined>,
	}
	export function CreateAutocompleteResultFormGroup() {
		return new FormGroup<AutocompleteResultFormProperties>({
			has_highlight: new FormControl<boolean | null | undefined>(undefined),
			highlight: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			match: new FormControl<string | null | undefined>(undefined),
			taxon: new FormControl<string | null | undefined>(undefined),
			taxon_label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutocompleteResults {

		/** list of AutocompleteResult docs */
		docs?: Array<AutocompleteResult>;
	}
	export interface AutocompleteResultsFormProperties {
	}
	export function CreateAutocompleteResultsFormGroup() {
		return new FormGroup<AutocompleteResultsFormProperties>({
		});

	}

	export interface BioObject extends NamedObject {

		/** association counts */
		association_counts?: string | null;

		/** Taxon to which the object belongs */
		taxon?: Taxon;

		/** Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 */
		xrefs?: Array<string>;
	}
	export interface BioObjectFormProperties extends NamedObjectFormProperties {

		/** association counts */
		association_counts: FormControl<string | null | undefined>,
	}
	export function CreateBioObjectFormGroup() {
		return new FormGroup<BioObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			association_counts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Taxon {

		/** CURIE ID, e.g. NCBITaxon:9606 */
		id?: string | null;

		/** RDFS Label */
		label?: string | null;
	}
	export interface TaxonFormProperties {

		/** CURIE ID, e.g. NCBITaxon:9606 */
		id: FormControl<string | null | undefined>,

		/** RDFS Label */
		label: FormControl<string | null | undefined>,
	}
	export function CreateTaxonFormGroup() {
		return new FormGroup<TaxonFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BioObjectCore extends NamedObjectCore {

		/** Taxon to which the object belongs */
		taxon?: Taxon;
	}
	export interface BioObjectCoreFormProperties extends NamedObjectCoreFormProperties {
	}
	export function CreateBioObjectCoreFormGroup() {
		return new FormGroup<BioObjectCoreFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompareInput {

		/** list of query profiles */
		query_ids?: Array<string>;

		/** list of ids */
		reference_ids?: Array<string>;
	}
	export interface CompareInputFormProperties {
	}
	export function CreateCompareInputFormGroup() {
		return new FormGroup<CompareInputFormProperties>({
		});

	}

	export interface D2PAssociation extends Association {

		/** Frequency of phenotype in patients with disease */
		frequency?: EntityReference;

		/** Onset of phenotype in disease process */
		onset?: EntityReference;
	}
	export interface D2PAssociationFormProperties extends AssociationFormProperties {
	}
	export function CreateD2PAssociationFormGroup() {
		return new FormGroup<D2PAssociationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			negated: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface D2PAssociationResults extends SearchResult {

		/** Complete representation of full disease to phenotype association, plus evidence */
		associations?: Array<D2PAssociation>;

		/** Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs */
		compact_associations?: Array<CompactAssociationSet>;

		/** List of distinct objects used */
		objects?: Array<string>;
	}
	export interface D2PAssociationResultsFormProperties extends SearchResultFormProperties {
	}
	export function CreateD2PAssociationResultsFormGroup() {
		return new FormGroup<D2PAssociationResultsFormProperties>({
			facet_counts: new FormControl<string | null | undefined>(undefined),
			highlighting: new FormControl<string | null | undefined>(undefined),
			numFound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EntityAnnotationResult {
		content?: string | null;

		/** A marked-up span of text */
		spans?: Array<Span>;
	}
	export interface EntityAnnotationResultFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateEntityAnnotationResultFormGroup() {
		return new FormGroup<EntityAnnotationResultFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Span {

		/** end of span text relative to content */
		end?: number | null;

		/** start of span text relative to content */
		start?: number | null;

		/** span text */
		text?: string | null;

		/** A token or entity extracted from the span text */
		token?: Array<Token>;
	}
	export interface SpanFormProperties {

		/** end of span text relative to content */
		end: FormControl<number | null | undefined>,

		/** start of span text relative to content */
		start: FormControl<number | null | undefined>,

		/** span text */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSpanFormGroup() {
		return new FormGroup<SpanFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Token {

		/** entity categories */
		categories?: Array<string>;

		/** The CURIE for the entity or token */
		id?: string | null;

		/** terms */
		terms?: Array<string>;
	}
	export interface TokenFormProperties {

		/** The CURIE for the entity or token */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Feature {

		/** curie formatted id */
		id?: string | null;

		/** is the feature present */
		isPresent?: boolean | null;

		/** curie formatted id */
		label?: string | null;

		/** feature type (only phenotype supported) */
		type?: string | null;
	}
	export interface FeatureFormProperties {

		/** curie formatted id */
		id: FormControl<string | null | undefined>,

		/** is the feature present */
		isPresent: FormControl<boolean | null | undefined>,

		/** curie formatted id */
		label: FormControl<string | null | undefined>,

		/** feature type (only phenotype supported) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isPresent: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IcNode extends Node {

		/** Information content */
		IC?: number | null;
	}
	export interface IcNodeFormProperties extends NodeFormProperties {

		/** Information content */
		IC: FormControl<number | null | undefined>,
	}
	export function CreateIcNodeFormGroup() {
		return new FormGroup<IcNodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			IC: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LayAutocomplete {

		/** solr highlight */
		highlight?: string | null;

		/** curie formatted id */
		id?: string | null;

		/** primary label (rdfs:label) */
		label?: string | null;

		/** matched synonym */
		matched_synonym?: string | null;
	}
	export interface LayAutocompleteFormProperties {

		/** solr highlight */
		highlight: FormControl<string | null | undefined>,

		/** curie formatted id */
		id: FormControl<string | null | undefined>,

		/** primary label (rdfs:label) */
		label: FormControl<string | null | undefined>,

		/** matched synonym */
		matched_synonym: FormControl<string | null | undefined>,
	}
	export function CreateLayAutocompleteFormGroup() {
		return new FormGroup<LayAutocompleteFormProperties>({
			highlight: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			matched_synonym: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LayResults {

		/** list of AutocompleteResult docs */
		results?: Array<LayAutocomplete>;
	}
	export interface LayResultsFormProperties {
	}
	export function CreateLayResultsFormGroup() {
		return new FormGroup<LayResultsFormProperties>({
		});

	}

	export interface NamedObject extends NamedObjectCore {
		consider?: Array<string>;

		/** True if the node is deprecated/obsoleted. */
		deprecated?: boolean | null;

		/** Descriptive text for the entity. For ontology classes, this will be a definition. */
		description?: string | null;
		replaced_by?: Array<string>;

		/** list of synonyms or alternate labels */
		synonyms?: Array<SynonymPropertyValue>;
		types?: Array<string>;
	}
	export interface NamedObjectFormProperties extends NamedObjectCoreFormProperties {

		/** True if the node is deprecated/obsoleted. */
		deprecated: FormControl<boolean | null | undefined>,

		/** Descriptive text for the entity. For ontology classes, this will be a definition. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateNamedObjectFormGroup() {
		return new FormGroup<NamedObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SynonymPropertyValue extends AbstractPropertyValue {
	}
	export interface SynonymPropertyValueFormProperties extends AbstractPropertyValueFormProperties {
	}
	export function CreateSynonymPropertyValueFormGroup() {
		return new FormGroup<SynonymPropertyValueFormProperties>({
			pred: new FormControl<string | null | undefined>(undefined),
			val: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NamedObjectCore {
		category?: Array<string>;

		/**
		 * ID or CURIE e.g. MGI:1201606
		 * Required
		 */
		id: string;

		/** IRI */
		iri?: string | null;

		/** RDFS Label */
		label?: string | null;
	}
	export interface NamedObjectCoreFormProperties {

		/**
		 * ID or CURIE e.g. MGI:1201606
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** IRI */
		iri: FormControl<string | null | undefined>,

		/** RDFS Label */
		label: FormControl<string | null | undefined>,
	}
	export function CreateNamedObjectCoreFormGroup() {
		return new FormGroup<NamedObjectCoreFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Page_of_variant_sets extends A_page_of_results {
		items?: Array<Variant_set>;
	}
	export interface Page_of_variant_setsFormProperties extends A_page_of_resultsFormProperties {
	}
	export function CreatePage_of_variant_setsFormGroup() {
		return new FormGroup<Page_of_variant_setsFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Variant_set {

		/**
		 * Article content
		 * Required
		 */
		body: string;
		category?: string | null;
		category_id?: number | null;

		/** The unique identifier of a variant set */
		id?: number | null;
		pub_date?: Date | null;

		/**
		 * Article title
		 * Required
		 */
		title: string;
	}
	export interface Variant_setFormProperties {

		/**
		 * Article content
		 * Required
		 */
		body: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		category_id: FormControl<number | null | undefined>,

		/** The unique identifier of a variant set */
		id: FormControl<number | null | undefined>,
		pub_date: FormControl<Date | null | undefined>,

		/**
		 * Article title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVariant_setFormGroup() {
		return new FormGroup<Variant_setFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category: new FormControl<string | null | undefined>(undefined),
			category_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			pub_date: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PairwiseMatch {

		/** lowest common subsumer */
		lcs?: IcNode;

		/** match id */
		match?: IcNode;

		/** reference id */
		reference?: IcNode;
	}
	export interface PairwiseMatchFormProperties {
	}
	export function CreatePairwiseMatchFormGroup() {
		return new FormGroup<PairwiseMatchFormProperties>({
		});

	}

	export interface RelationRef extends NamedObjectCore {

		/** is relation inverted */
		inverse?: boolean | null;
	}
	export interface RelationRefFormProperties extends NamedObjectCoreFormProperties {

		/** is relation inverted */
		inverse: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationRefFormGroup() {
		return new FormGroup<RelationRefFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			inverse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchResult {

		/** solr docs */
		docs?: Array<string>;

		/** Mapping between field names and association counts */
		facet_counts?: string | null;

		/** Mapping between id and solr highlight */
		highlighting?: string | null;

		/** total number of associations matching query */
		numFound?: number | null;
	}
	export interface SearchResultFormProperties {

		/** Mapping between field names and association counts */
		facet_counts: FormControl<string | null | undefined>,

		/** Mapping between id and solr highlight */
		highlighting: FormControl<string | null | undefined>,

		/** total number of associations matching query */
		numFound: FormControl<number | null | undefined>,
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
			facet_counts: new FormControl<string | null | undefined>(undefined),
			highlighting: new FormControl<string | null | undefined>(undefined),
			numFound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Seq extends BioObject {

		/** one of: DNA, RNA or AA */
		alphabet?: string | null;

		/** checksum */
		md5checksum?: string | null;

		/** string representing sequence of residues */
		residues?: string | null;

		/** length of sequence */
		seqlen?: string | null;
	}
	export interface SeqFormProperties extends BioObjectFormProperties {

		/** one of: DNA, RNA or AA */
		alphabet: FormControl<string | null | undefined>,

		/** checksum */
		md5checksum: FormControl<string | null | undefined>,

		/** string representing sequence of residues */
		residues: FormControl<string | null | undefined>,

		/** length of sequence */
		seqlen: FormControl<string | null | undefined>,
	}
	export function CreateSeqFormGroup() {
		return new FormGroup<SeqFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			association_counts: new FormControl<string | null | undefined>(undefined),
			alphabet: new FormControl<string | null | undefined>(undefined),
			md5checksum: new FormControl<string | null | undefined>(undefined),
			residues: new FormControl<string | null | undefined>(undefined),
			seqlen: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SequenceFeature extends BioObject {
		homology_associations?: Array<Association>;
		locations?: Array<SequenceLocation>;
		seq?: Seq;
	}
	export interface SequenceFeatureFormProperties extends BioObjectFormProperties {
	}
	export function CreateSequenceFeatureFormGroup() {
		return new FormGroup<SequenceFeatureFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			association_counts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SequenceLocation extends BioObject {
		end?: SequencePosition;
		phase?: number | null;
		score?: number | null;
		start?: SequencePosition;

		/** Strand direction: 1=='+', -1=='-', 0 or null infers unknown. */
		strand?: number | null;
	}
	export interface SequenceLocationFormProperties extends BioObjectFormProperties {
		phase: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,

		/** Strand direction: 1=='+', -1=='-', 0 or null infers unknown. */
		strand: FormControl<number | null | undefined>,
	}
	export function CreateSequenceLocationFormGroup() {
		return new FormGroup<SequenceLocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			association_counts: new FormControl<string | null | undefined>(undefined),
			phase: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			strand: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SequencePosition {
		position?: number | null;
		reference?: string | null;
	}
	export interface SequencePositionFormProperties {
		position: FormControl<number | null | undefined>,
		reference: FormControl<string | null | undefined>,
	}
	export function CreateSequencePositionFormGroup() {
		return new FormGroup<SequencePositionFormProperties>({
			position: new FormControl<number | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimMatch extends TypedNode {
		pairwise_match?: Array<string>;

		/** rank */
		rank?: string | null;

		/** sim score */
		score?: number | null;

		/** p-value */
		significance?: string | null;
	}
	export interface SimMatchFormProperties extends TypedNodeFormProperties {

		/** rank */
		rank: FormControl<string | null | undefined>,

		/** sim score */
		score: FormControl<number | null | undefined>,

		/** p-value */
		significance: FormControl<string | null | undefined>,
	}
	export function CreateSimMatchFormGroup() {
		return new FormGroup<SimMatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			significance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimMetadata {

		/** max IC */
		max_max_ic?: number | null;
	}
	export interface SimMetadataFormProperties {

		/** max IC */
		max_max_ic: FormControl<number | null | undefined>,
	}
	export function CreateSimMetadataFormGroup() {
		return new FormGroup<SimMetadataFormProperties>({
			max_max_ic: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SimQuery {
		ids?: Array<string>;
		negated_ids?: Array<string>;

		/** reference individual or class (eg gene, disease) */
		reference?: TypedNode;
		target_ids?: Array<string>;

		/** list of unresolved ids */
		unresolved_ids?: Array<string>;
	}
	export interface SimQueryFormProperties {
	}
	export function CreateSimQueryFormGroup() {
		return new FormGroup<SimQueryFormProperties>({
		});

	}

	export interface SimResult {
		matches?: Array<string>;
		metadata?: SimMetadata;
		query?: SimQuery;
	}
	export interface SimResultFormProperties {
	}
	export function CreateSimResultFormGroup() {
		return new FormGroup<SimResultFormProperties>({
		});

	}

	export interface SufficiencyOutput {

		/** categorical score */
		categorical_score?: number | null;

		/** scaled score */
		scaled_score?: number | null;

		/** simple score */
		simple_score?: number | null;
	}
	export interface SufficiencyOutputFormProperties {

		/** categorical score */
		categorical_score: FormControl<number | null | undefined>,

		/** scaled score */
		scaled_score: FormControl<number | null | undefined>,

		/** simple score */
		simple_score: FormControl<number | null | undefined>,
	}
	export function CreateSufficiencyOutputFormGroup() {
		return new FormGroup<SufficiencyOutputFormProperties>({
			categorical_score: new FormControl<number | null | undefined>(undefined),
			scaled_score: new FormControl<number | null | undefined>(undefined),
			simple_score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SufficiencyPostInput {

		/** list of features */
		features?: Array<Feature>;

		/** curie formatted id */
		id?: string | null;
	}
	export interface SufficiencyPostInputFormProperties {

		/** curie formatted id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSufficiencyPostInputFormGroup() {
		return new FormGroup<SufficiencyPostInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TypedNode extends Node {

		/** taxon */
		taxon?: Node;

		/** node type (eg phenotype, disease) */
		type?: string | null;
	}
	export interface TypedNodeFormProperties extends NodeFormProperties {

		/** node type (eg phenotype, disease) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTypedNodeFormGroup() {
		return new FormGroup<TypedNodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Mme {
	}
	export interface MmeFormProperties {
	}
	export function CreateMmeFormGroup() {
		return new FormGroup<MmeFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns associations connecting two entities
		 * Given two entities (e.g. a particular gene and a particular disease), if these two entities
		 * are connected (directly or indirectly), then return the association objects describing
		 * the connection.
		 * Get association/between/{subject}/{object}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @return {Array<AssociationResults>} Success
		 */
		Get_associations_between(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/between/{subject}/{object}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations, {});
		}

		/**
		 * Returns list of matching associations for a given subject category
		 * Get association/find/{subject_category}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {string} subject_taxon Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)
		 * @param {string} object_taxon Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
		 * @param {string} relation Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
		 * @return {Array<AssociationResults>} Success
		 */
		Get_association_by_subject_category_search(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined, subject_taxon: string | null | undefined, object_taxon: string | null | undefined, relation: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/find/{subject_category}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations + '&subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&object_taxon=' + (object_taxon == null ? '' : encodeURIComponent(object_taxon)) + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)), {});
		}

		/**
		 * Returns list of matching associations between a given subject and object category
		 * Get association/find/{subject_category}/{object_category}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {string} subject Subject CURIE
		 * @param {string} object Object CURIE
		 * @param {string} subject_taxon Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)
		 * @param {string} object_taxon Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
		 * @param {string} relation Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
		 * @return {Array<AssociationResults>} Success
		 */
		Get_association_by_subject_and_object_category_search(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined, subject: string | null | undefined, object: string | null | undefined, subject_taxon: string | null | undefined, object_taxon: string | null | undefined, relation: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/find/{subject_category}/{object_category}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations + '&subject=' + (subject == null ? '' : encodeURIComponent(subject)) + '&object=' + (object == null ? '' : encodeURIComponent(object)) + '&subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&object_taxon=' + (object_taxon == null ? '' : encodeURIComponent(object_taxon)) + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)), {});
		}

		/**
		 * Returns list of matching associations starting from a given subject (source)
		 * Get association/from/{subject}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {string} object_taxon Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
		 * @param {string} relation Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
		 * @return {Array<AssociationResults>} Success
		 */
		Get_associations_from(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined, object_taxon: string | null | undefined, relation: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/from/{subject}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations + '&object_taxon=' + (object_taxon == null ? '' : encodeURIComponent(object_taxon)) + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)), {});
		}

		/**
		 * Returns list of matching associations pointing to a given object (target)
		 * Get association/to/{object}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @return {Array<AssociationResults>} Success
		 */
		Get_associations_to(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/to/{object}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations, {});
		}

		/**
		 * Returns list of matching associations of a given type
		 * Get association/type/{association_type}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {string} subject Subject CURIE
		 * @param {string} object Object CURIE
		 * @return {Array<AssociationResults>} Success
		 */
		Get_association_by_subject_and_assoc_type(rows: number | null | undefined, start: number | null | undefined, evidence: string | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, use_compact_associations: boolean | null | undefined, subject: string | null | undefined, object: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/type/{association_type}?rows=' + rows + '&start=' + start + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&use_compact_associations=' + use_compact_associations + '&subject=' + (subject == null ? '' : encodeURIComponent(subject)) + '&object=' + (object == null ? '' : encodeURIComponent(object)), {});
		}

		/**
		 * Returns the association with a given identifier
		 * An association connects, at a minimum, two things, designated subject and object,
		 * via some relationship. Associations also include evidence, provenance etc.
		 * Get association/{id}
		 * @return {Array<AssociationResults>} Success
		 */
		Get_association_object(): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'association/{id}', {});
		}

		/**
		 * Returns genes associated with a given anatomy
		 * Get bioentity/anatomy/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_anatomy_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/anatomy/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
		 * For example, + NCBITaxon:10090 (mouse)
		 * Get bioentity/anatomy/{id}/genes/{taxid}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {void} Success
		 */
		Get_anatomy_gene_by_taxon_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/anatomy/{id}/genes/{taxid}?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns diseases associated with a case
		 * Get bioentity/case/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_case_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/case/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns genotypes associated with a case
		 * Get bioentity/case/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_case_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/case/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns models associated with a case
		 * Get bioentity/case/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_case_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/case/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns phenotypes associated with a case
		 * Get bioentity/case/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_case_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/case/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns variants associated with a case
		 * Get bioentity/case/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_case_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/case/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns cases associated with a disease
		 * Get bioentity/disease/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_disease_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns genes associated with a disease
		 * Get bioentity/disease/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @param {Get_disease_gene_associationsAssociation_type} association_type Additional filters: causal, non_causal, both
		 * @return {AssociationResults} Success
		 */
		Get_disease_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined, association_type: Get_disease_gene_associationsAssociation_type | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&association_type=' + association_type, {});
		}

		/**
		 * Returns genotypes associated with a disease
		 * Get bioentity/disease/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_disease_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns associations to models of the disease
		 * In the association object returned, the subject will be the disease, and the object will be the model.
		 * The model may be a gene or genetic element.
		 * If the query disease is a general class, the association subject may be to a specific disease.
		 * In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.
		 * In other cases, the association will be *indirect*, for
		 * example, chaining over orthology. In these cases the chain
		 * will be reflected in the *evidence graph*
		 * * TODO: provide hook into owlsim for dynamic computation of models by similarity
		 * Get bioentity/disease/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_disease_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns associations to models of the disease constrained by taxon
		 * See /disease/<id>/models route for full details
		 * Get bioentity/disease/{id}/models/{taxon}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_disease_model_taxon_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/models/{taxon}?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns pathways associated with a disease
		 * Get bioentity/disease/{id}/pathways
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_disease_pathway_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/pathways?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with disease
		 * Get bioentity/disease/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {D2PAssociationResults} Success
		 */
		Get_disease_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<D2PAssociationResults> {
			return this.http.get<D2PAssociationResults>(this.baseUri + 'bioentity/disease/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a disease
		 * Get bioentity/disease/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_disease_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns substances associated with a disease
		 * e.g. drugs or small molecules used to treat
		 * Get bioentity/disease/{id}/treatment
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {void} Success
		 */
		Get_disease_substance_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/disease/{id}/treatment?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns variants associated with a disease
		 * Get bioentity/disease/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_disease_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/disease/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns annotations associated to a function term
		 * Get bioentity/function/{id}
		 * @param {number} start beginning row
		 * @param {number} rows number of rows
		 * @param {Array<string>} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @return {void} Success
		 */
		Get_function_associations(start: number | null | undefined, rows: number | null | undefined, evidence: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/function/{id}?start=' + start + '&rows=' + rows + '&' + evidence?.map(z => `evidence=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns genes associated to a GO term
		 * Get bioentity/function/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @param {Get_function_gene_associationsRelationship_type} relationship_type relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')
		 * @return {AssociationResults} Success
		 */
		Get_function_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined, relationship_type: Get_function_gene_associationsRelationship_type | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/function/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&relationship_type=' + relationship_type, {});
		}

		/**
		 * Returns publications associated to a GO term
		 * Get bioentity/function/{id}/publications
		 * @param {number} start beginning row
		 * @param {number} rows number of rows
		 * @param {Array<string>} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @return {void} Success
		 */
		Get_function_publication_associations(start: number | null | undefined, rows: number | null | undefined, evidence: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/function/{id}/publications?start=' + start + '&rows=' + rows + '&' + evidence?.map(z => `evidence=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns taxons associated to a GO term
		 * Get bioentity/function/{id}/taxons
		 * @param {number} start beginning row
		 * @param {number} rows number of rows
		 * @param {Array<string>} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @return {void} Success
		 */
		Get_function_taxon_associations(start: number | null | undefined, rows: number | null | undefined, evidence: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/function/{id}/taxons?start=' + start + '&rows=' + rows + '&' + evidence?.map(z => `evidence=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns anatomical entities associated with a gene
		 * Get bioentity/gene/{id}/anatomy
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_anatomy_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/anatomy?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns cases associated with a gene
		 * Get bioentity/gene/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_gene_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns diseases associated with gene
		 * Get bioentity/gene/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @param {Get_disease_gene_associationsAssociation_type} association_type Additional filters: causal, non_causal, both
		 * @return {AssociationResults} Success
		 */
		Get_gene_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined, association_type: Get_disease_gene_associationsAssociation_type | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&association_type=' + association_type, {});
		}

		/**
		 * Returns expression events for a gene
		 * Get bioentity/gene/{id}/expression/anatomy
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_expression_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/expression/anatomy?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns function associations for a gene
		 * IMPLEMENTATION DETAILS
		 * ----------------------
		 * Note: currently this is implemented as a query to the GO/AmiGO solr instance.
		 * This directly supports IDs such as:
		 * - ZFIN e.g. ZFIN:ZDB-GENE-050417-357
		 * Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
		 * the standard for biolink is MGI:nnnn, so you should use this (will be transparently
		 * mapped to legacy ID)
		 * Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
		 * Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
		 * mapped behind the scenes for querying.
		 * Get bioentity/gene/{id}/function
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_gene_function_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/function?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns genotypes associated with a gene
		 * Get bioentity/gene/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns homologs for a gene
		 * Get bioentity/gene/{id}/homologs
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)
		 * @param {Get_gene_homolog_associationsHomology_type} homology_type P (paralog), O (Ortholog) or LDO (least-diverged ortholog)
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @return {AssociationResults} Success
		 */
		Get_gene_homolog_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, homology_type: Get_gene_homolog_associationsHomology_type | null | undefined, direct_taxon: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/homologs?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&homology_type=' + homology_type + '&direct_taxon=' + direct_taxon, {});
		}

		/**
		 * Returns interactions for a gene
		 * Get bioentity/gene/{id}/interactions
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_interactions(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/interactions?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns models associated with a gene
		 * Get bioentity/gene/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Return diseases associated with orthologs of a gene
		 * Get bioentity/gene/{id}/ortholog/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_ortholog_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/ortholog/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Return phenotypes associated with orthologs for a gene
		 * Get bioentity/gene/{id}/ortholog/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_ortholog_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/ortholog/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns pathways associated with gene
		 * Get bioentity/gene/{id}/pathways
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_pathway_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/pathways?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with gene
		 * Get bioentity/gene/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a gene
		 * Get bioentity/gene/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns variants associated with a gene
		 * Get bioentity/gene/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_gene_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/gene/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns cases associated with a genotype
		 * Get bioentity/genotype/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_genotype_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns diseases associated with a genotype
		 * Get bioentity/genotype/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genes associated with a genotype
		 * Get bioentity/genotype/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes-genotype associations
		 * Genotypes may be related to one another according to the GENO model
		 * Get bioentity/genotype/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns models associated with a genotype
		 * Get bioentity/genotype/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with a genotype
		 * Get bioentity/genotype/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a genotype
		 * Get bioentity/genotype/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes-variant associations
		 * Get bioentity/genotype/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_genotype_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/genotype/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns associations to GO terms for a gene
		 * Get bioentity/goterm/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Get_function_gene_associationsRelationship_type} relationship_type relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')
		 * @return {AssociationResults} Success
		 */
		Get_goterm_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, relationship_type: Get_function_gene_associationsRelationship_type | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/goterm/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&relationship_type=' + relationship_type, {});
		}

		/**
		 * Returns cases associated with a model
		 * Get bioentity/model/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_model_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns diseases associated with a model
		 * Get bioentity/model/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genes associated with a model
		 * Get bioentity/model/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes associated with a model
		 * Get bioentity/model/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with a model
		 * Get bioentity/model/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a model
		 * Get bioentity/model/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns variants associated with a model
		 * Get bioentity/model/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_model_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/model/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns diseases associated with a pathway
		 * Get bioentity/pathway/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_pathway_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/pathway/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genes associated with a pathway
		 * Get bioentity/pathway/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_pathway_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/pathway/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with a pathway
		 * Get bioentity/pathway/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_pathway_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/pathway/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns anatomical entities associated with a phenotype
		 * Example IDs:
		 * * MP:0008521 abnormal Bowman membrane
		 * Get bioentity/phenotype/{id}/anatomy
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {Array<NamedObject>} Success
		 */
		Get_phenotype_anatomy_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<Array<NamedObject>> {
			return this.http.get<Array<NamedObject>>(this.baseUri + 'bioentity/phenotype/{id}/anatomy?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns cases associated with a phenotype
		 * Get bioentity/phenotype/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns diseases associated with a phenotype
		 * Get bioentity/phenotype/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {D2PAssociationResults} Success
		 */
		Get_phenotype_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<D2PAssociationResults> {
			return this.http.get<D2PAssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
		 * For example, MP:0001569 + NCBITaxon:10090 (mouse)
		 * Get bioentity/phenotype/{id}/gene/{taxid}/ids
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {void} Success
		 */
		Get_phenotype_gene_by_taxon_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/phenotype/{id}/gene/{taxid}/ids?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns genes associated with a phenotype
		 * Get bioentity/phenotype/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes associated with a phenotype
		 * Get bioentity/phenotype/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns pathways associated with a phenotype
		 * Get bioentity/phenotype/{id}/pathways
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_pathway_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/pathways?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a phenotype
		 * Get bioentity/phenotype/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns variants associated with a phenotype
		 * Get bioentity/phenotype/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_phenotype_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/phenotype/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns diseases associated with a publication
		 * Get bioentity/publication/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genes associated with a publication
		 * Get bioentity/publication/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes associated with a publication
		 * Get bioentity/publication/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns models associated with a publication
		 * Get bioentity/publication/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns phenotypes associated with a publication
		 * Get bioentity/publication/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns variants associated with a publication
		 * Get bioentity/publication/{id}/variants
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_publication_variant_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/publication/{id}/variants?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns associations between an activity and process and the specified substance
		 * Examples relationships:
		 * * substance is a metabolite of a process
		 * * substance is synthesized by a process
		 * * substance is modified by an activity
		 * * substance elicits a response program/pathway
		 * * substance is transported by activity or pathway
		 * For example, CHEBI:40036 (amitrole)
		 * Get bioentity/substance/{id}/participant_in
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {Array<Association>} Success
		 */
		Get_substance_participant_in_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'bioentity/substance/{id}/participant_in?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns associations between given drug and roles
		 * Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)
		 * Get bioentity/substance/{id}/roles
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {Array<Association>} Success
		 */
		Get_substance_role_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'bioentity/substance/{id}/roles?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns substances associated with a disease
		 * e.g. drugs or small molecules used to treat
		 * Get bioentity/substance/{id}/treats
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {void} Success
		 */
		Get_substance_treats_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/substance/{id}/treats?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns cases associated with a variant
		 * Get bioentity/variant/{id}/cases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_variant_case_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/cases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns diseases associated with a variant
		 * Get bioentity/variant/{id}/diseases
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_variant_disease_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/diseases?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genes associated with a variant
		 * Get bioentity/variant/{id}/genes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_variant_gene_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/genes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns genotypes associated with a variant
		 * Get bioentity/variant/{id}/genotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_variant_genotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/genotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns models associated with a variant
		 * Get bioentity/variant/{id}/models
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {AssociationResults} Success
		 */
		Get_variant_model_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/models?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns phenotypes associated with a variant
		 * Get bioentity/variant/{id}/phenotypes
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_variant_phenotype_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/phenotypes?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns publications associated with a variant
		 * Get bioentity/variant/{id}/publications
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_variant_publication_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/variant/{id}/publications?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Returns basic info on object of any type
		 * Get bioentity/{id}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @return {BioObject} Success
		 */
		Get_generic_object(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined): Observable<BioObject> {
			return this.http.get<BioObject>(this.baseUri + 'bioentity/{id}?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct, {});
		}

		/**
		 * Returns associations for an entity regardless of the type
		 * Get bioentity/{id}/associations
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {Array<string>} taxon One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
		 * @param {boolean} direct_taxon Set true to exclude inferred taxa
		 * @param {string} relation A relation CURIE to filter associations
		 * @param {string} sort Sorting responses <field> <desc,asc>
		 * @param {string} q Query string to filter documents
		 * @return {AssociationResults} Success
		 */
		Get_generic_associations(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, taxon: Array<string> | null | undefined, direct_taxon: boolean | null | undefined, relation: string | null | undefined, sort: string | null | undefined, q: string | null | undefined): Observable<AssociationResults> {
			return this.http.get<AssociationResults>(this.baseUri + 'bioentity/{id}/associations?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&direct_taxon=' + direct_taxon + '&relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Return basic info on an object for a given type
		 * Get bioentity/{type}/{id}
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @param {boolean} facet Enable faceting
		 * @param {Array<string>} facet_fields Fields to facet on
		 * @param {boolean} unselect_evidence If true, excludes evidence objects in response
		 * @param {boolean} exclude_automatic_assertions If true, excludes associations that involve IEAs (ECO:0000501)
		 * @param {boolean} fetch_objects If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
		 * @param {boolean} use_compact_associations If true, returns results in compact associations format
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
		 * @param {boolean} direct Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
		 * @param {boolean} get_association_counts Get association counts
		 * @param {boolean} distinct_counts Get distinct counts for associations (to be used in conjunction with 'get_association_counts' parameter)
		 * @return {void} Success
		 */
		Get_generic_object_by_type(rows: number | null | undefined, start: number | null | undefined, facet: boolean | null | undefined, facet_fields: Array<string> | null | undefined, unselect_evidence: boolean | null | undefined, exclude_automatic_assertions: boolean | null | undefined, fetch_objects: boolean | null | undefined, use_compact_associations: boolean | null | undefined, slim: Array<string> | null | undefined, evidence: string | null | undefined, direct: boolean | null | undefined, get_association_counts: boolean | null | undefined, distinct_counts: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentity/{type}/{id}?rows=' + rows + '&start=' + start + '&facet=' + facet + '&' + facet_fields?.map(z => `facet_fields=${encodeURIComponent(z)}`).join('&') + '&unselect_evidence=' + unselect_evidence + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&fetch_objects=' + fetch_objects + '&use_compact_associations=' + use_compact_associations + '&' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)) + '&direct=' + direct + '&get_association_counts=' + get_association_counts + '&distinct_counts=' + distinct_counts, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns compact associations for a given input set
		 * Get bioentityset/associations
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} background Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
		 * @param {string} object_category E.g. phenotype, function
		 * @param {string} object_slim Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
		 * @return {Array<AssociationResults>} Success
		 */
		Get_entity_set_associations(subject: Array<string> | null | undefined, background: Array<string> | null | undefined, object_category: string | null | undefined, object_slim: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'bioentityset/associations?' + subject?.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + background?.map(z => `background=${encodeURIComponent(z)}`).join('&') + '&object_category=' + (object_category == null ? '' : encodeURIComponent(object_category)) + '&object_slim=' + (object_slim == null ? '' : encodeURIComponent(object_slim)), {});
		}

		/**
		 * Summary statistics for objects associated
		 * Get bioentityset/descriptor/counts
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} background Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
		 * @param {string} object_category E.g. phenotype, function
		 * @param {string} object_slim Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
		 * @return {void} Success
		 */
		Get_entity_set_summary(subject: Array<string> | null | undefined, background: Array<string> | null | undefined, object_category: string | null | undefined, object_slim: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/descriptor/counts?' + subject?.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + background?.map(z => `background=${encodeURIComponent(z)}`).join('&') + '&object_category=' + (object_category == null ? '' : encodeURIComponent(object_category)) + '&object_slim=' + (object_slim == null ? '' : encodeURIComponent(object_slim)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * TODO Graph object spanning all entities
		 * Get bioentityset/graph
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} background Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
		 * @param {string} object_category E.g. phenotype, function
		 * @param {string} object_slim Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
		 * @return {void} Success
		 */
		Get_entity_set_graph_resource(subject: Array<string> | null | undefined, background: Array<string> | null | undefined, object_category: string | null | undefined, object_slim: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/graph?' + subject?.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + background?.map(z => `background=${encodeURIComponent(z)}`).join('&') + '&object_category=' + (object_category == null ? '' : encodeURIComponent(object_category)) + '&object_slim=' + (object_slim == null ? '' : encodeURIComponent(object_slim)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns homology associations for a given input set of genes
		 * Get bioentityset/homologs/
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @return {Array<AssociationResults>} Success
		 */
		Get_entity_set_homologs(subject: Array<string> | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'bioentityset/homologs/?' + subject?.map(z => `subject=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Summary statistics for objects associated
		 * Get bioentityset/overrepresentation
		 * @param {string} object_category E.g. phenotype, function
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} background Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
		 * @param {string} subject_category Default: gene. Other types may be used e.g. disease but statistics may not make sense
		 * @param {string} max_p_value Exclude results with p-value greater than this
		 * @param {string} ontology ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)
		 * @param {string} taxon must be NCBITaxon CURIE. Example: NCBITaxon:9606
		 * @return {void} Success
		 */
		Get_over_representation(object_category: string | null | undefined, subject: Array<string> | null | undefined, background: Array<string> | null | undefined, subject_category: string | null | undefined, max_p_value: string | null | undefined, ontology: string | null | undefined, taxon: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/overrepresentation?object_category=' + (object_category == null ? '' : encodeURIComponent(object_category)) + '&' + subject?.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + background?.map(z => `background=${encodeURIComponent(z)}`).join('&') + '&subject_category=' + (subject_category == null ? '' : encodeURIComponent(subject_category)) + '&max_p_value=' + (max_p_value == null ? '' : encodeURIComponent(max_p_value)) + '&ontology=' + (ontology == null ? '' : encodeURIComponent(ontology)) + '&taxon=' + (taxon == null ? '' : encodeURIComponent(taxon)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * For a given gene(s), summarize its annotations over a defined set of slim
		 * Get bioentityset/slimmer/anatomy
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
		 * @param {boolean} exclude_automatic_assertions If set, excludes associations that involve IEAs (ECO:0000501)
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @return {void} Success
		 */
		Get_entity_set_anatomy_slimmer(subject: Array<string>, slim: Array<string>, exclude_automatic_assertions: boolean | null | undefined, rows: number | null | undefined, start: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/slimmer/anatomy?' + subject.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + slim.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&rows=' + rows + '&start=' + start, { observe: 'response', responseType: 'text' });
		}

		/**
		 * For a given gene(s), summarize its annotations over a defined set of slim
		 * Get bioentityset/slimmer/function
		 * @param {Get_entity_set_function_slimmerRelationship_type} relationship_type relationship type ('involved_in' or 'acts_upstream_of_or_within')
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
		 * @param {boolean} exclude_automatic_assertions If set, excludes associations that involve IEAs (ECO:0000501)
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @return {void} Success
		 */
		Get_entity_set_function_slimmer(relationship_type: Get_entity_set_function_slimmerRelationship_type | null | undefined, subject: Array<string>, slim: Array<string>, exclude_automatic_assertions: boolean | null | undefined, rows: number | null | undefined, start: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/slimmer/function?relationship_type=' + relationship_type + '&' + subject.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + slim.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&rows=' + rows + '&start=' + start, { observe: 'response', responseType: 'text' });
		}

		/**
		 * For a given gene(s), summarize its annotations over a defined set of slim
		 * Get bioentityset/slimmer/phenotype
		 * @param {Array<string>} subject Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
		 * @param {boolean} exclude_automatic_assertions If set, excludes associations that involve IEAs (ECO:0000501)
		 * @param {number} rows number of rows
		 * @param {number} start beginning row
		 * @return {void} Success
		 */
		Get_entity_set_phenotype_slimmer(subject: Array<string>, slim: Array<string>, exclude_automatic_assertions: boolean | null | undefined, rows: number | null | undefined, start: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bioentityset/slimmer/phenotype?' + subject.map(z => `subject=${encodeURIComponent(z)}`).join('&') + '&' + slim.map(z => `slim=${encodeURIComponent(z)}`).join('&') + '&exclude_automatic_assertions=' + exclude_automatic_assertions + '&rows=' + rows + '&start=' + start, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of models
		 * Get cam/activity
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {void} Success
		 */
		Get_activity_collection(title: string | null | undefined, contributor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/activity?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of matches
		 * Get cam/instance/{id}
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {Array<Association>} Success
		 */
		Get_instance_object(title: string | null | undefined, contributor: string | null | undefined): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'cam/instance/{id}?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), {});
		}

		/**
		 * Returns list of all instances
		 * Get cam/instances
		 * @return {void} Success
		 */
		Get_model_instances(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/instances', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of ALL models
		 * Get cam/model
		 * @return {void} Success
		 */
		Get_model_collection(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of all contributors across all models
		 * Get cam/model/contributors
		 * @return {void} Success
		 */
		Get_model_contributors(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model/contributors', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of all properties used across all models
		 * Get cam/model/properties
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {void} Success
		 */
		Get_model_properties(title: string | null | undefined, contributor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model/properties?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list property-values for all models
		 * Get cam/model/property_values
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {void} Success
		 */
		Get_model_property_values(title: string | null | undefined, contributor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model/property_values?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of models matching query
		 * Get cam/model/query
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {void} Success
		 */
		Get_model_query(title: string | null | undefined, contributor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model/query?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a complete model
		 * Get cam/model/{id}
		 * @return {void} Success
		 */
		Get_model_object(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/model/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of models
		 * Get cam/physical_interaction
		 * @param {string} title string to search for in title of model
		 * @param {string} contributor string to search for in contributor of model
		 * @return {void} Success
		 */
		Get_physical_interaction(title: string | null | undefined, contributor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cam/physical_interaction?title=' + (title == null ? '' : encodeURIComponent(title)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns evidence graph object for a given association
		 * Note that every association is assumed to have a unique ID
		 * Get evidence/graph/{id}
		 * @return {Array<Graph>} Success
		 */
		Get_evidence_graph_object(): Observable<Array<Graph>> {
			return this.http.get<Array<Graph>>(this.baseUri + 'evidence/graph/{id}', {});
		}

		/**
		 * Returns evidence as a association_results object given an association
		 * Note that every association is assumed to have a unique ID
		 * Get evidence/graph/{id}/table
		 * @param {boolean} is_publication If true, considers dc:source as edge
		 * @return {Array<AssociationResults>} Success
		 */
		Get_evidence_graph_table(is_publication: boolean | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'evidence/graph/{id}/table?is_publication=' + is_publication, {});
		}

		/**
		 * Returns list of matches
		 * Get genome/features/within/{build}/{reference}/{begin}/{end}
		 * @return {Array<SequenceFeature>} Success
		 */
		Get_features_within_resource(): Observable<Array<SequenceFeature>> {
			return this.http.get<Array<SequenceFeature>>(this.baseUri + 'genome/features/within/{build}/{reference}/{begin}/{end}', {});
		}

		/**
		 * Returns edges emanating from a given node
		 * Get graph/edges/from/{id}
		 * @param {number} depth How far to traverse for neighbors
		 * @param {Get_edge_resourceDirection} direction Which direction to traverse (used only if relationship_type is defined)
		 * @param {Array<string>} relationship_type Relationship type to traverse
		 * @param {boolean} entail Include sub-properties and equivalent properties
		 * @param {Get_edge_resourceGraph} graph Which monarch graph to query
		 * @return {Array<Graph>} Success
		 */
		Get_edge_resource(depth: number | null | undefined, direction: Get_edge_resourceDirection | null | undefined, relationship_type: Array<string> | null | undefined, entail: boolean | null | undefined, graph: Get_edge_resourceGraph | null | undefined): Observable<Array<Graph>> {
			return this.http.get<Array<Graph>>(this.baseUri + 'graph/edges/from/{id}?depth=' + depth + '&direction=' + direction + '&' + relationship_type?.map(z => `relationship_type=${encodeURIComponent(z)}`).join('&') + '&entail=' + entail + '&graph=' + graph, {});
		}

		/**
		 * Returns a graph node
		 * A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
		 * a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.
		 * Get graph/node/{id}
		 * @return {Array<BioObject>} Success
		 */
		Get_node_resource(): Observable<Array<BioObject>> {
			return this.http.get<Array<BioObject>>(this.baseUri + 'graph/node/{id}', {});
		}

		/**
		 * TODO maps a list of identifiers from a source to a target
		 * Get identifier/mapper/{source}/{target}/
		 * @return {Array<Association>} Success
		 */
		Get_identifier_mapper(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'identifier/mapper/{source}/{target}/', {});
		}

		/**
		 * Returns list of prefixes
		 * Get identifier/prefixes/
		 * @return {void} Success
		 */
		Get_prefix_collection(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'identifier/prefixes/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns contracted URI
		 * Get identifier/prefixes/contract/{uri}
		 * @return {void} Success
		 */
		Get_prefix_contract(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'identifier/prefixes/contract/{uri}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns expanded URI
		 * Get identifier/prefixes/expand/{id}
		 * @return {void} Success
		 */
		Get_prefix_expand(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'identifier/prefixes/expand/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of matches
		 * Get individual/pedigree/{id}
		 * @return {Array<Association>} Success
		 */
		Get_pedigree(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'individual/pedigree/{id}', {});
		}

		/**
		 * Returns list of matches
		 * Get individual/{id}
		 * @return {Array<Association>} Success
		 */
		Get_individual(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'individual/{id}', {});
		}

		/**
		 * Bulk download of case associations
		 * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
		 * Get mart/case/{object_category}/{taxon}
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @return {void} Success
		 */
		Get_mart_case_associations_resource(slim: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mart/case/{object_category}/{taxon}?' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk download of disease associations
		 * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
		 * Get mart/disease/{object_category}/{taxon}
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @return {void} Success
		 */
		Get_mart_disease_associations_resource(slim: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mart/disease/{object_category}/{taxon}?' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk download of gene associations
		 * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
		 * Get mart/gene/{object_category}/{taxon}
		 * @param {Array<string>} slim Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
		 * @return {void} Success
		 */
		Get_mart_gene_associations_resource(slim: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mart/gene/{object_category}/{taxon}?' + slim?.map(z => `slim=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk download of orthologs
		 * Get mart/ortholog/{taxon1}/{taxon2}
		 * @return {void} Success
		 */
		Get_mart_ortholog_associations_resource(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mart/ortholog/{taxon1}/{taxon2}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk download of paralogs
		 * Get mart/paralog/{taxon1}/{taxon2}
		 * @return {void} Success
		 */
		Get_mart_paralog_associations_resource(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mart/paralog/{taxon1}/{taxon2}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for all datasets from SciGraph
		 * Get metadata/datasets
		 * @return {void} Success
		 */
		Get_metadata_for_datasets(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'metadata/datasets', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Match a patient to diseases based on their phenotypes
		 * Post mme/disease
		 * @return {void} Success
		 */
		Post_disease_mme(requestBody: Mme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mme/disease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Match a patient to fruit fly genes based on similar phenotypes
		 * Post mme/fly
		 * @return {void} Success
		 */
		Post_fly_mme(requestBody: Mme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mme/fly', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Match a patient to mouse genes based on similar phenotypes
		 * Post mme/mouse
		 * @return {void} Success
		 */
		Post_mouse_mme(requestBody: Mme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mme/mouse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Match a patient to nematode genes based on similar phenotypes
		 * Post mme/nematode
		 * @return {void} Success
		 */
		Post_nematode_mme(requestBody: Mme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mme/nematode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Match a patient to zebrafish genes based on similar phenotypes
		 * Post mme/zebrafish
		 * @return {void} Success
		 */
		Post_zebrafish_mme(requestBody: Mme): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mme/zebrafish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Annotate a given text using SciGraph annotator
		 * Get nlp/annotate/
		 * @param {string} content The text content to annotate
		 * @param {Array<string>} include_category Categories to include for annotation
		 * @param {Array<string>} exclude_category Categories to exclude for annotation
		 * @param {string} min_length The minimum number of characters in the annotated entity
		 * @param {boolean} longest_only Should only the longest entity be returned for an overlapping group
		 * @param {boolean} include_abbreviation Should abbreviations be included
		 * @param {boolean} include_acronym Should acronyms be included
		 * @param {boolean} include_numbers Should numbers be included
		 * @return {void} Success
		 */
		Get_annotate(content: string | null | undefined, include_category: Array<string> | null | undefined, exclude_category: Array<string> | null | undefined, min_length: string | null | undefined, longest_only: boolean | null | undefined, include_abbreviation: boolean | null | undefined, include_acronym: boolean | null | undefined, include_numbers: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'nlp/annotate/?content=' + (content == null ? '' : encodeURIComponent(content)) + '&' + include_category?.map(z => `include_category=${encodeURIComponent(z)}`).join('&') + '&' + exclude_category?.map(z => `exclude_category=${encodeURIComponent(z)}`).join('&') + '&min_length=' + (min_length == null ? '' : encodeURIComponent(min_length)) + '&longest_only=' + longest_only + '&include_abbreviation=' + include_abbreviation + '&include_acronym=' + include_acronym + '&include_numbers=' + include_numbers, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Annotate a given text using SciGraph annotator
		 * Post nlp/annotate/
		 * @param {string} content The text content to annotate
		 * @param {Array<string>} include_category Categories to include for annotation
		 * @param {Array<string>} exclude_category Categories to exclude for annotation
		 * @param {string} min_length The minimum number of characters in the annotated entity
		 * @param {boolean} longest_only Should only the longest entity be returned for an overlapping group
		 * @param {boolean} include_abbreviation Should abbreviations be included
		 * @param {boolean} include_acronym Should acronyms be included
		 * @param {boolean} include_numbers Should numbers be included
		 * @return {void} Success
		 */
		Post_annotate(content: string | null | undefined, include_category: Array<string> | null | undefined, exclude_category: Array<string> | null | undefined, min_length: string | null | undefined, longest_only: boolean | null | undefined, include_abbreviation: boolean | null | undefined, include_acronym: boolean | null | undefined, include_numbers: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'nlp/annotate/?content=' + (content == null ? '' : encodeURIComponent(content)) + '&' + include_category?.map(z => `include_category=${encodeURIComponent(z)}`).join('&') + '&' + exclude_category?.map(z => `exclude_category=${encodeURIComponent(z)}`).join('&') + '&min_length=' + (min_length == null ? '' : encodeURIComponent(min_length)) + '&longest_only=' + longest_only + '&include_abbreviation=' + include_abbreviation + '&include_acronym=' + include_acronym + '&include_numbers=' + include_numbers, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Annotate a given content using SciGraph annotator and get all entities from content
		 * Get nlp/annotate/entities
		 * @param {string} content The text content to annotate
		 * @param {Array<string>} include_category Categories to include for annotation
		 * @param {Array<string>} exclude_category Categories to exclude for annotation
		 * @param {string} min_length The minimum number of characters in the annotated entity
		 * @param {boolean} longest_only Should only the longest entity be returned for an overlapping group
		 * @param {boolean} include_abbreviation Should abbreviations be included
		 * @param {boolean} include_acronym Should acronyms be included
		 * @param {boolean} include_numbers Should numbers be included
		 * @return {EntityAnnotationResult} Success
		 */
		Get_annotate_entities(content: string | null | undefined, include_category: Array<string> | null | undefined, exclude_category: Array<string> | null | undefined, min_length: string | null | undefined, longest_only: boolean | null | undefined, include_abbreviation: boolean | null | undefined, include_acronym: boolean | null | undefined, include_numbers: boolean | null | undefined): Observable<EntityAnnotationResult> {
			return this.http.get<EntityAnnotationResult>(this.baseUri + 'nlp/annotate/entities?content=' + (content == null ? '' : encodeURIComponent(content)) + '&' + include_category?.map(z => `include_category=${encodeURIComponent(z)}`).join('&') + '&' + exclude_category?.map(z => `exclude_category=${encodeURIComponent(z)}`).join('&') + '&min_length=' + (min_length == null ? '' : encodeURIComponent(min_length)) + '&longest_only=' + longest_only + '&include_abbreviation=' + include_abbreviation + '&include_acronym=' + include_acronym + '&include_numbers=' + include_numbers, {});
		}

		/**
		 * Annotate a given content using SciGraph annotator and get all entities from content
		 * Post nlp/annotate/entities
		 * @param {string} content The text content to annotate
		 * @param {Array<string>} include_category Categories to include for annotation
		 * @param {Array<string>} exclude_category Categories to exclude for annotation
		 * @param {string} min_length The minimum number of characters in the annotated entity
		 * @param {boolean} longest_only Should only the longest entity be returned for an overlapping group
		 * @param {boolean} include_abbreviation Should abbreviations be included
		 * @param {boolean} include_acronym Should acronyms be included
		 * @param {boolean} include_numbers Should numbers be included
		 * @return {EntityAnnotationResult} Success
		 */
		Post_annotate_entities(content: string | null | undefined, include_category: Array<string> | null | undefined, exclude_category: Array<string> | null | undefined, min_length: string | null | undefined, longest_only: boolean | null | undefined, include_abbreviation: boolean | null | undefined, include_acronym: boolean | null | undefined, include_numbers: boolean | null | undefined): Observable<EntityAnnotationResult> {
			return this.http.post<EntityAnnotationResult>(this.baseUri + 'nlp/annotate/entities?content=' + (content == null ? '' : encodeURIComponent(content)) + '&' + include_category?.map(z => `include_category=${encodeURIComponent(z)}`).join('&') + '&' + exclude_category?.map(z => `exclude_category=${encodeURIComponent(z)}`).join('&') + '&min_length=' + (min_length == null ? '' : encodeURIComponent(min_length)) + '&longest_only=' + longest_only + '&include_abbreviation=' + include_abbreviation + '&include_acronym=' + include_acronym + '&include_numbers=' + include_numbers, null, {});
		}

		/**
		 * Fetches a map from CURIEs/IDs to labels
		 * Get ontol/identifier/
		 * @param {Array<string>} label List of labels
		 * @return {void} Success
		 */
		Get_ontol_identifier_resource(label: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontol/identifier/?' + label.map(z => `label=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a map from CURIEs/IDs to labels
		 * Takes 'label' list argument either as a querystring argument or as a key
		 * in the POST body when content-type is application/json.
		 * Post ontol/identifier/
		 * @param {Array<string>} label List of labels
		 * @return {void} Success
		 */
		Post_ontol_identifier_resource(label: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ontol/identifier/?' + label.map(z => `label=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information content (IC) for a set of relevant ontology classes
		 * ```
		 * IC = -log2( freq(t) / popSize )
		 * ```
		 * Here the frequency and population is calculated for a particular dataset:
		 * e.g. all human disease-phenotype associations
		 * Get ontol/information_content/{subject_category}/{object_category}/{subject_taxon}
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
		 *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
		 *                     
		 * @return {void} Success
		 */
		Get_information_content_resource(evidence: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontol/information_content/{subject_category}/{object_category}/{subject_taxon}?evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a map from CURIEs/IDs to labels
		 * Get ontol/labeler/
		 * @param {Array<string>} id List of ids
		 * @return {void} Success
		 */
		Get_ontol_labeler_resource(id: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontol/labeler/?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Extract a subgraph from an ontology
		 * Get ontol/subgraph/{ontology}/{node}
		 * @param {Array<string>} cnode Additional classes
		 * @param {boolean} include_ancestors Include Ancestors
		 * @param {boolean} include_descendants Include Descendants
		 * @param {Array<string>} relation Additional classes
		 * @param {boolean} include_meta Include metadata in response
		 * @return {void} Success
		 */
		Get_extract_ontology_subgraph_resource(cnode: Array<string> | null | undefined, include_ancestors: boolean | null | undefined, include_descendants: boolean | null | undefined, relation: Array<string> | null | undefined, include_meta: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontol/subgraph/{ontology}/{node}?' + cnode?.map(z => `cnode=${encodeURIComponent(z)}`).join('&') + '&include_ancestors=' + include_ancestors + '&include_descendants=' + include_descendants + '&' + relation?.map(z => `relation=${encodeURIComponent(z)}`).join('&') + '&include_meta=' + include_meta, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Extract a subgraph from an ontology
		 * Post ontol/subgraph/{ontology}/{node}
		 * @param {Array<string>} cnode Additional classes
		 * @param {boolean} include_ancestors Include Ancestors
		 * @param {boolean} include_descendants Include Descendants
		 * @param {Array<string>} relation Additional classes
		 * @param {boolean} include_meta Include metadata in response
		 * @return {void} Success
		 */
		Post_extract_ontology_subgraph_resource(cnode: Array<string> | null | undefined, include_ancestors: boolean | null | undefined, include_descendants: boolean | null | undefined, relation: Array<string> | null | undefined, include_meta: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ontol/subgraph/{ontology}/{node}?' + cnode?.map(z => `cnode=${encodeURIComponent(z)}`).join('&') + '&include_ancestors=' + include_ancestors + '&include_descendants=' + include_descendants + '&' + relation?.map(z => `relation=${encodeURIComponent(z)}`).join('&') + '&include_meta=' + include_meta, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ancestor ontology terms shared by two ontology terms
		 * Get ontology/shared/{subject}/{object}
		 * @return {void} Success
		 */
		Get_ontology_terms_shared_ancestor(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/shared/{subject}/{object}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns meta data of an ontology subset (slim)
		 * Get ontology/subset/{id}
		 * @return {void} Success
		 */
		Get_ontology_subset(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/subset/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns meta data of an ontology term
		 * Get ontology/term/{id}
		 * @return {void} Success
		 */
		Get_ontology_term(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns graph of an ontology term
		 * Get ontology/term/{id}/graph
		 * @param {Get_ontology_term_graphGraph_type} graph_type graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')
		 * @return {void} Success
		 */
		Get_ontology_term_graph(graph_type: Get_ontology_term_graphGraph_type | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/{id}/graph?graph_type=' + graph_type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Extract a subgraph from an ontology term
		 * Get ontology/term/{id}/subgraph
		 * @param {Array<string>} cnode Additional classes
		 * @param {boolean} include_ancestors Include Ancestors
		 * @param {boolean} include_descendants Include Descendants
		 * @param {Array<string>} relation Additional classes
		 * @param {boolean} include_meta Include metadata in response
		 * @return {void} Success
		 */
		Get_ontology_term_subgraph(cnode: Array<string> | null | undefined, include_ancestors: boolean | null | undefined, include_descendants: boolean | null | undefined, relation: Array<string> | null | undefined, include_meta: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/{id}/subgraph?' + cnode?.map(z => `cnode=${encodeURIComponent(z)}`).join('&') + '&include_ancestors=' + include_ancestors + '&include_descendants=' + include_descendants + '&' + relation?.map(z => `relation=${encodeURIComponent(z)}`).join('&') + '&include_meta=' + include_meta, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns subsets (slims) associated to an ontology term
		 * Get ontology/term/{id}/subsets
		 * @return {void} Success
		 */
		Get_ontology_term_subsets(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ontology/term/{id}/subsets', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Placeholder - use OWLery for now
		 * Get owl/ontology/dlquery/{query}
		 * @return {Array<Association>} Success
		 */
		Get_dl_query(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'owl/ontology/dlquery/{query}', {});
		}

		/**
		 * Placeholder - use direct SPARQL endpoint for now
		 * Get owl/ontology/sparql/{query}
		 * @return {Array<Association>} Success
		 */
		Get_sparql_query(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'owl/ontology/sparql/{query}', {});
		}

		/**
		 * Get pairwise similarity
		 * Get pair/sim/jaccard/{id1}/{id2}
		 * @param {string} object_category e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category
		 * @return {void} Success
		 */
		Get_pair_sim_jaccard_resource(object_category: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pair/sim/jaccard/{id1}/{id2}?object_category=' + (object_category == null ? '' : encodeURIComponent(object_category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * All relations used plus count of associations
		 * Get relation/usage/
		 * @param {string} subject_taxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
		 *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
		 *                     
		 * @return {Array<AssociationResults>} Success
		 */
		Get_relation_usage_resource(subject_taxon: string | null | undefined, evidence: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'relation/usage/?subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)), {});
		}

		/**
		 * All relations used plus count of associations
		 * Get relation/usage/between/{subject_category}/{object_category}
		 * @param {string} subject_taxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
		 *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
		 *                     
		 * @return {Array<AssociationResults>} Success
		 */
		Get_relation_usage_between_resource(subject_taxon: string | null | undefined, evidence: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'relation/usage/between/{subject_category}/{object_category}?subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)), {});
		}

		/**
		 * Relation usage count for all subj x obj category combinations
		 * Get relation/usage/pivot
		 * @param {string} subject_taxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
		 *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
		 *                     
		 * @return {Array<AssociationResults>} Success
		 */
		Get_relation_usage_pivot_resource(subject_taxon: string | null | undefined, evidence: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'relation/usage/pivot?subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)), {});
		}

		/**
		 * Relation usage count for all subj x obj category combinations, showing label
		 * Get relation/usage/pivot/label
		 * @param {string} subject_taxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
		 * @param {string} evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
		 *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
		 *                     
		 * @return {Array<AssociationResults>} Success
		 */
		Get_relation_usage_pivot_label_resource(subject_taxon: string | null | undefined, evidence: string | null | undefined): Observable<Array<AssociationResults>> {
			return this.http.get<Array<AssociationResults>>(this.baseUri + 'relation/usage/pivot/label?subject_taxon=' + (subject_taxon == null ? '' : encodeURIComponent(subject_taxon)) + '&evidence=' + (evidence == null ? '' : encodeURIComponent(evidence)), {});
		}

		/**
		 * Returns list of matching concepts or entities using lexical search
		 * Get search/entity/autocomplete/{term}
		 * @param {Array<string>} fq fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.
		 * @param {Array<string>} category e.g. gene, disease
		 * @param {Array<string>} prefix ontology prefix: HP, -MONDO
		 * @param {boolean} include_eqs Include equivalent ids in prefix filter
		 * @param {Array<string>} boost_fx boost function e.g. pow(edges,0.334)
		 * @param {Array<string>} boost_q boost query e.g. category:genotype^-10
		 * @param {Array<string>} taxon taxon filter, eg NCBITaxon:9606, includes inferred taxa
		 * @param {number} rows number of rows
		 * @param {string} start row number to start from
		 * @param {string} highlight_class highlight class
		 * @param {string} min_match minimum should match parameter, see solr docs for details
		 * @param {boolean} exclude_groups Exclude grouping classes (classes with subclasses)
		 * @param {boolean} minimal_tokenizer set to true to use the minimal tokenizer, good for variants and genotypes
		 * @return {AutocompleteResults} Success
		 */
		Get_autocomplete(fq: Array<string> | null | undefined, category: Array<string> | null | undefined, prefix: Array<string> | null | undefined, include_eqs: boolean | null | undefined, boost_fx: Array<string> | null | undefined, boost_q: Array<string> | null | undefined, taxon: Array<string> | null | undefined, rows: number | null | undefined, start: string | null | undefined, highlight_class: string | null | undefined, min_match: string | null | undefined, exclude_groups: boolean | null | undefined, minimal_tokenizer: boolean | null | undefined): Observable<AutocompleteResults> {
			return this.http.get<AutocompleteResults>(this.baseUri + 'search/entity/autocomplete/{term}?' + fq?.map(z => `fq=${encodeURIComponent(z)}`).join('&') + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&' + prefix?.map(z => `prefix=${encodeURIComponent(z)}`).join('&') + '&include_eqs=' + include_eqs + '&' + boost_fx?.map(z => `boost_fx=${encodeURIComponent(z)}`).join('&') + '&' + boost_q?.map(z => `boost_q=${encodeURIComponent(z)}`).join('&') + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&rows=' + rows + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&highlight_class=' + (highlight_class == null ? '' : encodeURIComponent(highlight_class)) + '&min_match=' + (min_match == null ? '' : encodeURIComponent(min_match)) + '&exclude_groups=' + exclude_groups + '&minimal_tokenizer=' + minimal_tokenizer, {});
		}

		/**
		 * Returns list of matching concepts or entities using lexical search
		 * Get search/entity/hpo-pl/{term}
		 * @param {number} rows number of rows
		 * @param {string} start row number to start from
		 * @param {string} phenotype_group phenotype group id
		 * @param {string} phenotype_group_label phenotype group label
		 * @param {string} anatomical_system anatomical system id
		 * @param {string} anatomical_system_label anatomical system label
		 * @param {string} highlight_class highlight class
		 * @return {LayResults} Success
		 */
		Get_search_hpo_entities(rows: number | null | undefined, start: string | null | undefined, phenotype_group: string | null | undefined, phenotype_group_label: string | null | undefined, anatomical_system: string | null | undefined, anatomical_system_label: string | null | undefined, highlight_class: string | null | undefined): Observable<LayResults> {
			return this.http.get<LayResults>(this.baseUri + 'search/entity/hpo-pl/{term}?rows=' + rows + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&phenotype_group=' + (phenotype_group == null ? '' : encodeURIComponent(phenotype_group)) + '&phenotype_group_label=' + (phenotype_group_label == null ? '' : encodeURIComponent(phenotype_group_label)) + '&anatomical_system=' + (anatomical_system == null ? '' : encodeURIComponent(anatomical_system)) + '&anatomical_system_label=' + (anatomical_system_label == null ? '' : encodeURIComponent(anatomical_system_label)) + '&highlight_class=' + (highlight_class == null ? '' : encodeURIComponent(highlight_class)), {});
		}

		/**
		 * Returns list of matching concepts or entities using lexical search
		 * Get search/entity/{term}
		 * @param {Array<string>} fq fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.
		 * @param {Array<string>} category e.g. gene, disease
		 * @param {Array<string>} prefix ontology prefix: HP, -MONDO
		 * @param {boolean} include_eqs Include equivalent ids in prefix filter
		 * @param {Array<string>} boost_fx boost function e.g. pow(edges,0.334)
		 * @param {Array<string>} boost_q boost query e.g. category:genotype^-10
		 * @param {Array<string>} taxon taxon filter, eg NCBITaxon:9606, includes inferred taxa
		 * @param {number} rows number of rows
		 * @param {string} start row number to start from
		 * @param {string} highlight_class highlight class
		 * @param {string} min_match minimum should match parameter, see solr docs for details
		 * @param {boolean} exclude_groups Exclude grouping classes (classes with subclasses)
		 * @param {boolean} minimal_tokenizer set to true to use the minimal tokenizer, good for variants and genotypes
		 * @return {SearchResult} Success
		 */
		Get_search_entities(fq: Array<string> | null | undefined, category: Array<string> | null | undefined, prefix: Array<string> | null | undefined, include_eqs: boolean | null | undefined, boost_fx: Array<string> | null | undefined, boost_q: Array<string> | null | undefined, taxon: Array<string> | null | undefined, rows: number | null | undefined, start: string | null | undefined, highlight_class: string | null | undefined, min_match: string | null | undefined, exclude_groups: boolean | null | undefined, minimal_tokenizer: boolean | null | undefined): Observable<SearchResult> {
			return this.http.get<SearchResult>(this.baseUri + 'search/entity/{term}?' + fq?.map(z => `fq=${encodeURIComponent(z)}`).join('&') + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&' + prefix?.map(z => `prefix=${encodeURIComponent(z)}`).join('&') + '&include_eqs=' + include_eqs + '&' + boost_fx?.map(z => `boost_fx=${encodeURIComponent(z)}`).join('&') + '&' + boost_q?.map(z => `boost_q=${encodeURIComponent(z)}`).join('&') + '&' + taxon?.map(z => `taxon=${encodeURIComponent(z)}`).join('&') + '&rows=' + rows + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&highlight_class=' + (highlight_class == null ? '' : encodeURIComponent(highlight_class)) + '&min_match=' + (min_match == null ? '' : encodeURIComponent(min_match)) + '&exclude_groups=' + exclude_groups + '&minimal_tokenizer=' + minimal_tokenizer, {});
		}

		/**
		 * Compare a reference profile vs one profiles
		 * Get sim/compare
		 * @param {boolean} is_feature_set set to true if *all* input ids are phenotypic features, else set to false
		 * @param {Get_sim_compareMetric} metric Metric for computing similarity
		 * @param {Array<string>} ref_id A phenotype or identifier that is composed of phenotypes (eg disease, gene)
		 * @param {Array<string>} query_id A phenotype or identifier that is composed of phenotypes (eg disease, gene)
		 * @return {SimResult} Success
		 */
		Get_sim_compare(is_feature_set: boolean | null | undefined, metric: Get_sim_compareMetric | null | undefined, ref_id: Array<string> | null | undefined, query_id: Array<string> | null | undefined): Observable<SimResult> {
			return this.http.get<SimResult>(this.baseUri + 'sim/compare?is_feature_set=' + is_feature_set + '&metric=' + metric + '&' + ref_id?.map(z => `ref_id=${encodeURIComponent(z)}`).join('&') + '&' + query_id?.map(z => `query_id=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Compare a reference profile vs one or more profiles
		 * Post sim/compare
		 * @return {SimResult} Success
		 */
		Post_sim_compare(requestBody: CompareInput): Observable<SimResult> {
			return this.http.post<SimResult>(this.baseUri + 'sim/compare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get annotation score
		 * Get sim/score
		 * @param {Array<string>} id Phenotype identifier (eg HP:0004935)
		 * @param {Array<string>} absent_id absent phenotype (eg HP:0002828)
		 * @return {SufficiencyOutput} Success
		 */
		Get_annotation_score(id: Array<string> | null | undefined, absent_id: Array<string> | null | undefined): Observable<SufficiencyOutput> {
			return this.http.get<SufficiencyOutput>(this.baseUri + 'sim/score?' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&' + absent_id?.map(z => `absent_id=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get annotation score
		 * Post sim/score
		 * @return {SufficiencyOutput} Success
		 */
		Post_annotation_score(requestBody: SufficiencyPostInput): Observable<SufficiencyOutput> {
			return this.http.post<SufficiencyOutput>(this.baseUri + 'sim/score', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for phenotypically similar diseases or model genes
		 * Get sim/search
		 * @param {boolean} is_feature_set set to true if *all* input ids are phenotypic features, else set to false
		 * @param {Get_sim_compareMetric} metric Metric for computing similarity
		 * @param {Array<string>} id A phenotype or identifier that is composed of phenotypes (eg disease, gene)
		 * @param {number} limit number of rows, max 500
		 * @param {string} taxon ncbi taxon id
		 * @return {SimResult} Success
		 */
		Get_sim_search(is_feature_set: boolean | null | undefined, metric: Get_sim_compareMetric | null | undefined, id: Array<string> | null | undefined, limit: number | null | undefined, taxon: string | null | undefined): Observable<SimResult> {
			return this.http.get<SimResult>(this.baseUri + 'sim/search?is_feature_set=' + is_feature_set + '&metric=' + metric + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&taxon=' + (taxon == null ? '' : encodeURIComponent(taxon)), {});
		}

		/**
		 * Returns list of variant sets
		 * Get variation/set/
		 * @param {number} page Page number
		 * @param {Get_variant_sets_collectionPer_page} per_page Results per page {error_msg}
		 * @return {Page_of_variant_sets} Success
		 */
		Get_variant_sets_collection(page: number | null | undefined, per_page: Get_variant_sets_collectionPer_page | null | undefined): Observable<Page_of_variant_sets> {
			return this.http.get<Page_of_variant_sets>(this.baseUri + 'variation/set/?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Creates a new variant set
		 * Post variation/set/
		 * @return {void} Success
		 */
		Post_variant_sets_collection(requestBody: Variant_set): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'variation/set/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of matches
		 * Get variation/set/analyze/{id}
		 * @return {Array<Association>} Success
		 */
		Get_variant_analyze(): Observable<Array<Association>> {
			return this.http.get<Array<Association>>(this.baseUri + 'variation/set/analyze/{id}', {});
		}

		/**
		 * Returns list of variant sets from a specified time period
		 * Get variation/set/archive/{year}/{month}/{day}
		 * @param {number} page Page number
		 * @param {Get_variant_sets_archive_collectionPer_page} per_page Results per page {error_msg}
		 * @return {Page_of_variant_sets} Success
		 */
		Get_variant_sets_archive_collection(page: number | null | undefined, per_page: Get_variant_sets_archive_collectionPer_page | null | undefined): Observable<Page_of_variant_sets> {
			return this.http.get<Page_of_variant_sets>(this.baseUri + 'variation/set/archive/{year}/{month}/{day}?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Deletes variant set
		 * Delete variation/set/{id}
		 * @return {void} 
		 */
		Delete_variant_set_item(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'variation/set/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a variant set
		 * Get variation/set/{id}
		 * @return {Variant_set} Success
		 */
		Get_variant_set_item(): Observable<Variant_set> {
			return this.http.get<Variant_set>(this.baseUri + 'variation/set/{id}', {});
		}

		/**
		 * Updates a variant set
		 * Put variation/set/{id}
		 * @return {void} 
		 */
		Put_variant_set_item(requestBody: Variant_set): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'variation/set/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Get_disease_gene_associationsAssociation_type { causal = 0, non_causal = 1, both = 2 }

	export enum Get_function_gene_associationsRelationship_type { involved_in = 0, involved_in_regulation_of = 1, acts_upstream_of_or_within = 2 }

	export enum Get_gene_homolog_associationsHomology_type { P = 0, O = 1, LDO = 2 }

	export enum Get_entity_set_function_slimmerRelationship_type { involved_in = 0, acts_upstream_of_or_within = 1 }

	export enum Get_edge_resourceDirection { INCOMING = 0, OUTGOING = 1, BOTH = 2 }

	export enum Get_edge_resourceGraph { data = 0, ontology = 1 }

	export enum Get_ontology_term_graphGraph_type { topology_graph = 0, regulates_transitivity_graph = 1, neighborhood_graph = 2, neighborhood_limited_graph = 3 }

	export enum Get_sim_compareMetric { phenodigm = 0, jaccard = 1, simGIC = 2, resnik = 3, symmetric_resnik = 4 }

	export enum Get_variant_sets_collectionPer_page { _2 = 0, _10 = 1, _20 = 2, _30 = 3, _40 = 4, _50 = 5 }

	export enum Get_variant_sets_archive_collectionPer_page { _2 = 0, _10 = 1, _20 = 2, _30 = 3, _40 = 4, _50 = 5 }

}

