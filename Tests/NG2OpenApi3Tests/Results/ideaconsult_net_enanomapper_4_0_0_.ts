import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Dataset {
		dataEntry?: string | null;
		feature?: string | null;
		model_uri?: string | null;
		query?: string | null;
	}
	export interface DatasetFormProperties {
		dataEntry: FormControl<string | null | undefined>,
		feature: FormControl<string | null | undefined>,
		model_uri: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			dataEntry: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined),
			model_uri: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Facet {
		facet?: string | null;
	}
	export interface FacetFormProperties {
		facet: FormControl<string | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			facet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Investigation {
		_childDocuments_?: string | null;
		assay?: string | null;
		document_uuid?: string | null;
		effectendpoint?: string | null;
		endpoint?: string | null;
		endpointcategory?: string | null;
		err?: number | null;
		errQualifier?: string | null;
		guidance?: string | null;
		investigation?: string | null;
		loQualifier?: string | null;
		loValue?: number | null;
		name?: string | null;
		owner_name?: string | null;
		publicname?: string | null;
		reference?: string | null;
		reference_owner?: string | null;
		reference_year?: string | null;
		resulttype?: string | null;
		s_uuid?: string | null;
		studyResultType?: string | null;
		substanceType?: string | null;
		textValue?: string | null;
		topcategory?: string | null;
		type_s?: string | null;
		unit?: string | null;
		upQualifier?: string | null;
		upValue?: number | null;
		updated?: string | null;
	}
	export interface InvestigationFormProperties {
		_childDocuments_: FormControl<string | null | undefined>,
		assay: FormControl<string | null | undefined>,
		document_uuid: FormControl<string | null | undefined>,
		effectendpoint: FormControl<string | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
		endpointcategory: FormControl<string | null | undefined>,
		err: FormControl<number | null | undefined>,
		errQualifier: FormControl<string | null | undefined>,
		guidance: FormControl<string | null | undefined>,
		investigation: FormControl<string | null | undefined>,
		loQualifier: FormControl<string | null | undefined>,
		loValue: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner_name: FormControl<string | null | undefined>,
		publicname: FormControl<string | null | undefined>,
		reference: FormControl<string | null | undefined>,
		reference_owner: FormControl<string | null | undefined>,
		reference_year: FormControl<string | null | undefined>,
		resulttype: FormControl<string | null | undefined>,
		s_uuid: FormControl<string | null | undefined>,
		studyResultType: FormControl<string | null | undefined>,
		substanceType: FormControl<string | null | undefined>,
		textValue: FormControl<string | null | undefined>,
		topcategory: FormControl<string | null | undefined>,
		type_s: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		upQualifier: FormControl<string | null | undefined>,
		upValue: FormControl<number | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateInvestigationFormGroup() {
		return new FormGroup<InvestigationFormProperties>({
			_childDocuments_: new FormControl<string | null | undefined>(undefined),
			assay: new FormControl<string | null | undefined>(undefined),
			document_uuid: new FormControl<string | null | undefined>(undefined),
			effectendpoint: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			endpointcategory: new FormControl<string | null | undefined>(undefined),
			err: new FormControl<number | null | undefined>(undefined),
			errQualifier: new FormControl<string | null | undefined>(undefined),
			guidance: new FormControl<string | null | undefined>(undefined),
			investigation: new FormControl<string | null | undefined>(undefined),
			loQualifier: new FormControl<string | null | undefined>(undefined),
			loValue: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner_name: new FormControl<string | null | undefined>(undefined),
			publicname: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			reference_owner: new FormControl<string | null | undefined>(undefined),
			reference_year: new FormControl<string | null | undefined>(undefined),
			resulttype: new FormControl<string | null | undefined>(undefined),
			s_uuid: new FormControl<string | null | undefined>(undefined),
			studyResultType: new FormControl<string | null | undefined>(undefined),
			substanceType: new FormControl<string | null | undefined>(undefined),
			textValue: new FormControl<string | null | undefined>(undefined),
			topcategory: new FormControl<string | null | undefined>(undefined),
			type_s: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			upQualifier: new FormControl<string | null | undefined>(undefined),
			upValue: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SolrQuery {
		facet?: string | null;
		filter?: string | null;
		query?: string | null;
		rows?: number | null;
		sort?: boolean | null;
		start?: number | null;
	}
	export interface SolrQueryFormProperties {
		facet: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		rows: FormControl<number | null | undefined>,
		sort: FormControl<boolean | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreateSolrQueryFormGroup() {
		return new FormGroup<SolrQueryFormProperties>({
			facet: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
			sort: new FormControl<boolean | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SolrResponse {
		response?: SolrResponseResponse;
		responseHeader?: SolrResponseResponseHeader;
	}
	export interface SolrResponseFormProperties {
	}
	export function CreateSolrResponseFormGroup() {
		return new FormGroup<SolrResponseFormProperties>({
		});

	}

	export interface SolrResponseResponse {
		docs?: Array<string>;
		maxScore?: number | null;
		numFound?: number | null;
		start?: number | null;
	}
	export interface SolrResponseResponseFormProperties {
		maxScore: FormControl<number | null | undefined>,
		numFound: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreateSolrResponseResponseFormGroup() {
		return new FormGroup<SolrResponseResponseFormProperties>({
			maxScore: new FormControl<number | null | undefined>(undefined),
			numFound: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SolrResponseResponseHeader {
		QTime?: number | null;
		params?: string | null;
		status?: number | null;
		zkConnected?: boolean | null;
	}
	export interface SolrResponseResponseHeaderFormProperties {
		QTime: FormControl<number | null | undefined>,
		params: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		zkConnected: FormControl<boolean | null | undefined>,
	}
	export function CreateSolrResponseResponseHeaderFormGroup() {
		return new FormGroup<SolrResponseResponseHeaderFormProperties>({
			QTime: new FormControl<number | null | undefined>(undefined),
			params: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			zkConnected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Substance {
		substance?: string | null;
	}
	export interface SubstanceFormProperties {
		substance: FormControl<string | null | undefined>,
	}
	export function CreateSubstanceFormGroup() {
		return new FormGroup<SubstanceFormProperties>({
			substance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubstanceComposition {
		composition?: string | null;
		feature?: string | null;
	}
	export interface SubstanceCompositionFormProperties {
		composition: FormControl<string | null | undefined>,
		feature: FormControl<string | null | undefined>,
	}
	export function CreateSubstanceCompositionFormGroup() {
		return new FormGroup<SubstanceCompositionFormProperties>({
			composition: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubstanceStudy {
		study?: string | null;
	}
	export interface SubstanceStudyFormProperties {
		study: FormControl<string | null | undefined>,
	}
	export function CreateSubstanceStudyFormGroup() {
		return new FormGroup<SubstanceStudyFormProperties>({
			study: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubstanceStudySummary {
		facet?: string | null;
	}
	export interface SubstanceStudySummaryFormProperties {
		facet: FormControl<string | null | undefined>,
	}
	export function CreateSubstanceStudySummaryFormGroup() {
		return new FormGroup<SubstanceStudySummaryFormProperties>({
			facet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryBody {
		facet?: string | null;
		params?: QueryBodyParams;
	}
	export interface QueryBodyFormProperties {
		facet: FormControl<string | null | undefined>,
	}
	export function CreateQueryBodyFormGroup() {
		return new FormGroup<QueryBodyFormProperties>({
			facet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryBodyParams {
		fl?: Array<string>;
		rows?: number | null;
	}
	export interface QueryBodyParamsFormProperties {
		rows: FormControl<number | null | undefined>,
	}
	export function CreateQueryBodyParamsFormGroup() {
		return new FormGroup<QueryBodyParamsFormProperties>({
			rows: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Details of multiple studies
		 * Multiple studies in tabular form
		 * Get enm/{db}/investigation
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {GetInvestigationResultsType} type query type
		 * @param {string} search Search parameter, UUID of the investigation or a substance
		 * @param {string} inchikey Search parameter, InChI key(s) of the substance component(s), comma delimited
		 * @param {string} id Search parameter, chemical structure or substance identifier(s), comma delimited
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Investigation} OK. Entries found
		 */
		GetInvestigationResults(db: GetInvestigationResultsDb, type: GetInvestigationResultsType, search: string, inchikey: string | null | undefined, id: string | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Investigation> {
			return this.http.get<Investigation>(this.baseUri + 'enm/' + db + '/investigation?type=' + type + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&inchikey=' + (inchikey == null ? '' : encodeURIComponent(inchikey)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Exact chemical structure search
		 * Returns compounds found
		 * Get enm/{db}/query/compound/{term}/{representation}
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {SearchByIdentifierTerm} term search term type
		 * @param {string} search Compound identifier (SMILES, InChI, name, registry identifiers)
		 * @param {string} b64search Base64 encoded mol file; if included, will be used instead of the 'search' parameter
		 * @param {boolean} casesens Case sensitive search if yes
		 * @param {string} bundle_uri Bundle URI
		 * @param {string} sameas Ontology URI to define groups of columns
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Dataset} OK. Entries found
		 */
		SearchByIdentifier(db: GetInvestigationResultsDb, term: SearchByIdentifierTerm, representation: SearchByIdentifierRepresentation, search: string | null | undefined, b64search: string | null | undefined, casesens: boolean | null | undefined, bundle_uri: string | null | undefined, sameas: string | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'enm/' + db + '/query/compound/' + term + '/' + representation + '?search=' + (search == null ? '' : encodeURIComponent(search)) + '&b64search=' + (b64search == null ? '' : encodeURIComponent(b64search)) + '&casesens=' + casesens + '&bundle_uri=' + (bundle_uri == null ? '' : encodeURIComponent(bundle_uri)) + '&sameas=' + (sameas == null ? '' : encodeURIComponent(sameas)) + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Exact similarity search
		 * Returns similar compounds
		 * Get enm/{db}/query/similarity
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} search Compound identifier (SMILES, InChI, name, registry identifiers)
		 * @param {string} b64search Base64 encoded mol file; if included, will be used instead of the 'search' parameter
		 * @param {SearchBySimilarityType} type Defines the expected content of the search parameter
		 * @param {number} threshold Similarity threshold
		 * @param {string} dataset_uri Restrict the search within the AMBIT dataset specified with the URI
		 * @param {boolean} filterBySubstance Restrict the search within the set of structures with assigned substances
		 * @param {string} bundle_uri If the structure is used in the specified bundle URI, the selection tag will be returned
		 * @param {string} sameas Ontology URI to define groups of columns
		 * @param {boolean} mol Only for application/json; to include mol as JSON field
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Dataset} OK. Entries found
		 */
		SearchBySimilarity(db: GetInvestigationResultsDb, search: string | null | undefined, b64search: string | null | undefined, type: SearchBySimilarityType | null | undefined, threshold: number | null | undefined, dataset_uri: string | null | undefined, filterBySubstance: boolean | null | undefined, bundle_uri: string | null | undefined, sameas: string | null | undefined, mol: boolean | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'enm/' + db + '/query/similarity?search=' + (search == null ? '' : encodeURIComponent(search)) + '&b64search=' + (b64search == null ? '' : encodeURIComponent(b64search)) + '&type=' + type + '&threshold=' + threshold + '&dataset_uri=' + (dataset_uri == null ? '' : encodeURIComponent(dataset_uri)) + '&filterBySubstance=' + filterBySubstance + '&bundle_uri=' + (bundle_uri == null ? '' : encodeURIComponent(bundle_uri)) + '&sameas=' + (sameas == null ? '' : encodeURIComponent(sameas)) + '&mol=' + mol + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Substructure search
		 * Returns compounds with the specified substructure
		 * Get enm/{db}/query/smarts
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} search Compound identifier (SMILES, InChI, name, registry identifiers)
		 * @param {string} b64search Base64 encoded mol file; if included, will be used instead of the 'search' parameter
		 * @param {SearchBySimilarityType} type Defines the expected content of the search parameter
		 * @param {string} dataset_uri Restrict the search within the AMBIT dataset specified with the URI
		 * @param {boolean} filterBySubstance Restrict the search within the set of structures with assigned substances
		 * @param {string} bundle_uri If the structure is used in the specified bundle URI, the selection tag will be returned
		 * @param {string} sameas Ontology URI to define groups of columns
		 * @param {boolean} mol Only for application/json; to include mol as JSON field
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Dataset} OK. Entries found
		 */
		SearchBySmarts(db: GetInvestigationResultsDb, search: string | null | undefined, b64search: string | null | undefined, type: SearchBySimilarityType | null | undefined, dataset_uri: string | null | undefined, filterBySubstance: boolean | null | undefined, bundle_uri: string | null | undefined, sameas: string | null | undefined, mol: boolean | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'enm/' + db + '/query/smarts?search=' + (search == null ? '' : encodeURIComponent(search)) + '&b64search=' + (b64search == null ? '' : encodeURIComponent(b64search)) + '&type=' + type + '&dataset_uri=' + (dataset_uri == null ? '' : encodeURIComponent(dataset_uri)) + '&filterBySubstance=' + filterBySubstance + '&bundle_uri=' + (bundle_uri == null ? '' : encodeURIComponent(bundle_uri)) + '&sameas=' + (sameas == null ? '' : encodeURIComponent(sameas)) + '&mol=' + mol + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Search endpoint summary
		 * Returns endpoint summary
		 * Get enm/{db}/query/study
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {GetEndpointSummaryTop} top Top endpoint category
		 * @param {string} category Endpoint category (The value in the protocol.category.code field)
		 * @return {Facet} OK.
		 */
		GetEndpointSummary(db: GetInvestigationResultsDb, top: GetEndpointSummaryTop | null | undefined, category: string | null | undefined): Observable<Facet> {
			return this.http.get<Facet>(this.baseUri + 'enm/' + db + '/query/study?top=' + top + '&category=' + (category == null ? '' : encodeURIComponent(category)), {});
		}

		/**
		 * List substances
		 * Returns a list of substances, according to the search criteria
		 * Get enm/{db}/substance
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} search Search parameter
		 * @param {string} compound_uri If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure
		 * @param {string} bundle_uri Retrieves if selected in this bundle
		 * @param {boolean} addDummySubstance Adds a compound record as substance in JSON; only if type=related
		 * @param {boolean} studysummary If true retrieves study summary for each substance
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Substance} OK. Substances found
		 */
		GetSubstances(db: GetInvestigationResultsDb, search: string | null | undefined, type: GetSubstancesType | null | undefined, compound_uri: string | null | undefined, bundle_uri: string | null | undefined, addDummySubstance: boolean | null | undefined, studysummary: boolean | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Substance> {
			return this.http.get<Substance>(this.baseUri + 'enm/' + db + '/substance?search=' + (search == null ? '' : encodeURIComponent(search)) + '&type=' + type + '&compound_uri=' + (compound_uri == null ? '' : encodeURIComponent(compound_uri)) + '&bundle_uri=' + (bundle_uri == null ? '' : encodeURIComponent(bundle_uri)) + '&addDummySubstance=' + addDummySubstance + '&studysummary=' + studysummary + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Get a substance
		 * Returns substance representation
		 * Get enm/{db}/substance/{uuid}
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} uuid Substance UUID
		 * @param {string} property_uris_ Property URIs
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Substance} OK. Substances found
		 */
		GetSubstanceByUUID(db: GetInvestigationResultsDb, uuid: string, property_uris_: string | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<Substance> {
			return this.http.get<Substance>(this.baseUri + 'enm/' + db + '/substance/' + (uuid == null ? '' : encodeURIComponent(uuid)) + '&property_uris_=' + (property_uris_ == null ? '' : encodeURIComponent(property_uris_)) + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Substance composition
		 * Returns substance composition
		 * Get enm/{db}/substance/{uuid}/composition
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} uuid Substance UUID
		 * @param {boolean} all true (Show all compositions) false (do not show hidden compositions)
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {SubstanceComposition} OK. compositions found
		 */
		GetSubstanceComposition(db: GetInvestigationResultsDb, uuid: string, all: boolean | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<SubstanceComposition> {
			return this.http.get<SubstanceComposition>(this.baseUri + 'enm/' + db + '/substance/' + (uuid == null ? '' : encodeURIComponent(uuid)) + '/composition&all=' + all + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Get substance composition as a dataset
		 * Returns substance composition
		 * Get enm/{db}/substance/{uuid}/structures
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} uuid Substance UUID
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {Dataset} OK. compositions found
		 */
		GetSubstanceStructures(db: GetInvestigationResultsDb, uuid: string, page: number | null | undefined, pagesize: number | null | undefined): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'enm/' + db + '/substance/' + (uuid == null ? '' : encodeURIComponent(uuid)) + '/structures&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * get substance study
		 * Returns substance study representation
		 * Get enm/{db}/substance/{uuid}/study
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} uuid Substance UUID
		 * @param {GetEndpointSummaryTop} top Top endpoint category
		 * @param {string} category Endpoint category (The value in the protocol.category.code field)
		 * @param {string} property_uri Property URI https://data.enanomapper.net/property/{UUID} , see Property service
		 * @param {string} property Property UUID
		 * @param {string} investigation_uuid Investigation UUID, a code to link different studies
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {SubstanceStudy} OK. Substances found
		 */
		GetSubstanceStudy(db: GetInvestigationResultsDb, uuid: string, top: GetEndpointSummaryTop | null | undefined, category: string | null | undefined, property_uri: string | null | undefined, property: string | null | undefined, investigation_uuid: string | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<SubstanceStudy> {
			return this.http.get<SubstanceStudy>(this.baseUri + 'enm/' + db + '/substance/' + (uuid == null ? '' : encodeURIComponent(uuid)) + '/study&top=' + top + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&property_uri=' + (property_uri == null ? '' : encodeURIComponent(property_uri)) + '&property=' + (property == null ? '' : encodeURIComponent(property)) + '&investigation_uuid=' + (investigation_uuid == null ? '' : encodeURIComponent(investigation_uuid)) + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Get study summary for the substance
		 * Study summary
		 * Get enm/{db}/substance/{uuid}/studySummary
		 * @param {GetInvestigationResultsDb} db Database ID
		 * @param {string} uuid Substance UUID
		 * @param {GetEndpointSummaryTop} top Top endpoint category
		 * @param {string} category Endpoint category (The value in the protocol.category.code field)
		 * @param {string} property_uri Property URI https://data.enanomapper.net/property/{UUID} , see Property service
		 * @param {string} property Property UUID, see Property service
		 * @param {boolean} result If true will group by topcategory,endpointcategory,interpretation result
		 * @param {number} page Starting page
		 * @param {number} pagesize Page size
		 * @return {SubstanceStudySummary} OK.
		 */
		GetSubstanceStudySummary(db: GetInvestigationResultsDb, uuid: string, top: GetEndpointSummaryTop | null | undefined, category: string | null | undefined, property_uri: string | null | undefined, property: string | null | undefined, result: boolean | null | undefined, page: number | null | undefined, pagesize: number | null | undefined): Observable<SubstanceStudySummary> {
			return this.http.get<SubstanceStudySummary>(this.baseUri + 'enm/' + db + '/substance/' + (uuid == null ? '' : encodeURIComponent(uuid)) + '/studySummary&top=' + top + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&property_uri=' + (property_uri == null ? '' : encodeURIComponent(property_uri)) + '&property=' + (property == null ? '' : encodeURIComponent(property)) + '&result=' + result + '&page=' + page + '&pagesize=' + pagesize, {});
		}

		/**
		 * Apache Solr powered search
		 * GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.
		 * Get select
		 * @param {string} q The query
		 * @param {string} fq Filter query
		 * @param {string} fl Field list
		 * @param {number} start Starting page
		 * @param {number} rows Page size
		 * @param {Solrquery_getWt} wt Response format
		 * @return {SolrResponse} Query performed successfully
		 */
		Solrquery_get(q: string | null | undefined, fq: string | null | undefined, fl: string | null | undefined, start: number | null | undefined, rows: number | null | undefined, wt: Solrquery_getWt | null | undefined): Observable<SolrResponse> {
			return this.http.get<SolrResponse>(this.baseUri + 'select?q=' + (q == null ? '' : encodeURIComponent(q)) + '&fq=' + (fq == null ? '' : encodeURIComponent(fq)) + '&fl=' + (fl == null ? '' : encodeURIComponent(fl)) + '&start=' + start + '&rows=' + rows + '&wt=' + wt, {});
		}

		/**
		 * Apache Solr powered search
		 * POST is more complex to use, but also allows for much for complex and lengthy queries.
		 * Post select
		 * @param {Solrquery_postWt} wt Response format
		 * @param {QueryBody} requestBody a JSON object with Solr query parameters
		 * @return {SolrResponse} Query performed successfully
		 */
		Solrquery_post(wt: Solrquery_postWt | null | undefined, requestBody: QueryBody): Observable<SolrResponse> {
			return this.http.post<SolrResponse>(this.baseUri + 'select?wt=' + wt, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetInvestigationResultsDb { calibrate = 0, enanomapper = 1, enpra = 2, marina = 3, nanogenotox = 4, nanoinformatix = 5, nanoreg1 = 6, nanoreg2 = 7, nanotest = 8 }

	export enum GetInvestigationResultsType { byinvestigation = 0, byassay = 1, bysubstance = 2, byprovider = 3, bycitation = 4, bystudytype = 5, bystructure_inchikey = 6, bystructure_smiles = 7, bystructure_name = 8, bysubstance_name = 9, bysubstance_type = 10 }

	export enum SearchByIdentifierTerm { search = 0, url = 1, inchikey = 2 }

	export enum SearchByIdentifierRepresentation { all = 0, smiles = 1, reach = 2, stdinchi = 3, stdinchikey = 4, names = 5, iupac_name = 6, synonym = 7, cas = 8, einecs = 9 }

	export enum SearchBySimilarityType { smiles = 0, mol = 1, url = 2 }

	export enum GetEndpointSummaryTop { 'P-CHEM' = 0, ECOTOX = 1, 'ENV FATE' = 2, TOX = 3, EXPOSURE = 4 }

	export enum GetSubstancesType { substancetype = 0, name = 1, like = 2, regexp = 3, uuif = 4, CompTox = 5, DOI = 6, reliability = 7, purposeFlag = 8, studyResultType = 9, isRobustStudy = 10, citation = 11, citationowner = 12, topcategory = 13, endpointcategory = 14, params = 15, owner_name = 16, owner_uuid = 17, related = 18, reference = 19, facet = 20 }

	export enum Solrquery_getWt { json = 0, xml = 1, csv = 2 }

	export enum Solrquery_postWt { json = 0, xml = 1 }

}

