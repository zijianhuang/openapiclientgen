import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApisJson {
		apis?: Array<ApisJsonApi>;
		created?: Date | null;
		description?: string | null;
		modified?: Date | null;
		name?: string | null;
		offset?: number | null;
		specificationVersion?: string | null;
		totalCount?: number | null;
		url?: string | null;
	}
	export interface ApisJsonFormProperties {
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<number | null | undefined>,
		specificationVersion: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateApisJsonFormGroup() {
		return new FormGroup<ApisJsonFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			specificationVersion: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApisJsonApi {
		description?: string | null;
		name?: string | null;
		properties?: Array<ApisJsonProperty>;
		tags?: Array<string>;
	}
	export interface ApisJsonApiFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApisJsonApiFormGroup() {
		return new FormGroup<ApisJsonApiFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** an API property */
	export interface ApisJsonProperty {
		type?: string | null;
	}

	/** an API property */
	export interface ApisJsonPropertyFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateApisJsonPropertyFormGroup() {
		return new FormGroup<ApisJsonPropertyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClosableComment extends Comment {

		/**
		 * The line number (zero-based) the comment is associated with. For example, if the comment is on line 7 in the editor, `position`=6.
		 */
		position?: number | null;

		/** A list of replies to this comment */
		replies?: Array<Comment>;

		/** Comment status */
		status?: ClosableCommentStatus | null;
	}
	export interface ClosableCommentFormProperties extends CommentFormProperties {

		/**
		 * The line number (zero-based) the comment is associated with. For example, if the comment is on line 7 in the editor, `position`=6.
		 */
		position: FormControl<number | null | undefined>,

		/** Comment status */
		status: FormControl<ClosableCommentStatus | null | undefined>,
	}
	export function CreateClosableCommentFormGroup() {
		return new FormGroup<ClosableCommentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified: new FormControl<Date | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ClosableCommentStatus | null | undefined>(undefined),
		});

	}

	export interface Comment {

		/**
		 * Markdown contents of the comment
		 * Required
		 */
		body: string;

		/**
		 * The UTC date and time when the comment was added
		 * Required
		 */
		created: Date;

		/**
		 * The unique ID of the comment
		 * Required
		 */
		id: string;

		/** The UTC date and time the when the comment was last edited */
		modified?: Date | null;

		/**
		 * The user who added a comment
		 * Required
		 */
		user: User;
	}
	export interface CommentFormProperties {

		/**
		 * Markdown contents of the comment
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The UTC date and time when the comment was added
		 * Required
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * The unique ID of the comment
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The UTC date and time the when the comment was last edited */
		modified: FormControl<Date | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The user who added a comment */
	export interface User {

		/**
		 * `true` means an existing user, `false` means the user is inactive (for example, deleted)
		 */
		active?: boolean | null;

		/** User name */
		id?: string | null;
	}

	/** The user who added a comment */
	export interface UserFormProperties {

		/**
		 * `true` means an existing user, `false` means the user is inactive (for example, deleted)
		 */
		active: FormControl<boolean | null | undefined>,

		/** User name */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClosableCommentStatus { OPEN = 0, RESOLVED = 1 }

	export interface Collaboration {

		/** Required */
		hint: CollaborationHint;
		members?: Array<CollaborationMembership>;
		owner?: string | null;
		owners?: Array<string>;
		pendingMembers?: Array<CollaborationMembership>;
		teams?: Array<CollaborationTeamMembership>;
	}
	export interface CollaborationFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreateCollaborationFormGroup() {
		return new FormGroup<CollaborationFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollaborationHint {

		/**
		 * type identifier of the managed entity
		 * Required
		 */
		type: string;
	}
	export interface CollaborationHintFormProperties {

		/**
		 * type identifier of the managed entity
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCollaborationHintFormGroup() {
		return new FormGroup<CollaborationHintFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollaborationMembership extends CollaborationMember {
		blocked?: boolean | null;
		donotdisturb?: boolean | null;

		/** Required */
		roles: Array<string>;
	}
	export interface CollaborationMembershipFormProperties extends CollaborationMemberFormProperties {
		blocked: FormControl<boolean | null | undefined>,
		donotdisturb: FormControl<boolean | null | undefined>,
	}
	export function CreateCollaborationMembershipFormGroup() {
		return new FormGroup<CollaborationMembershipFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			blocked: new FormControl<boolean | null | undefined>(undefined),
			donotdisturb: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CollaborationTeamMembership extends CollaborationMembership {
		members?: Array<CollaborationMember>;
	}
	export interface CollaborationTeamMembershipFormProperties extends CollaborationMembershipFormProperties {
	}
	export function CreateCollaborationTeamMembershipFormGroup() {
		return new FormGroup<CollaborationTeamMembershipFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			blocked: new FormControl<boolean | null | undefined>(undefined),
			donotdisturb: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CollaborationMember {

		/** Required */
		name: string;
		startTime?: Date | null;
		title?: string | null;
		uuid?: string | null;
	}
	export interface CollaborationMemberFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateCollaborationMemberFormGroup() {
		return new FormGroup<CollaborationMemberFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Page {
		items?: Array<string>;
		offset?: number | null;
		total?: number | null;
	}
	export interface PageFormProperties {
		offset: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of currently defined APIs in APIs.json format.
		 * Get apis
		 * @param {string} query Free text query to match
		 * @param {SearchApisState} state Matches against published state of the spec:
		 * * UNPUBLISHED - spec is a draft, a work in progress
		 * * PUBLISHED - spec is a stable version ready for consuming from client applications
		 * * ANY - either PUBLISHED or UNPUBLISHED
		 * @param {Array<string>} tag Matches against tags associated with an API
		 * @param {number} page Page to return
		 * @param {number} limit Number of results per page
		 * @param {SearchApisSort} sort Sort criteria or result set:
		 * * NAME
		 * * UPATED
		 * * CREATED
		 * * OWNER
		 * @param {SearchApisOrder} order Sort order
		 * @return {void} 
		 */
		SearchApis(query: string | null | undefined, state: SearchApisState | null | undefined, tag: Array<string> | null | undefined, page: number | null | undefined, limit: number | null | undefined, sort: SearchApisSort | null | undefined, order: SearchApisOrder | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis?query=' + (query == null ? '' : encodeURIComponent(query)) + '&state=' + state + '&' + tag?.map(z => `tag=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&limit=' + limit + '&sort=' + sort + '&order=' + order, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an APIs.json listing of all APIs defined for this owner
		 * Get apis/{owner}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {number} page Page to return
		 * @param {number} limit Number of results per page
		 * @param {SearchApisSort} sort Sort criteria or result set:
		 * * NAME
		 * * UPATED
		 * * CREATED
		 * * OWNER
		 * @param {SearchApisOrder} order Sort order
		 * @return {ApisJson} A list of APIs in APIs.json format
		 */
		GetOwnerApis(owner: string, page: number | null | undefined, limit: number | null | undefined, sort: SearchApisSort | null | undefined, order: SearchApisOrder | null | undefined): Observable<ApisJson> {
			return this.http.get<ApisJson>(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '&page=' + page + '&limit=' + limit + '&sort=' + sort + '&order=' + order, {});
		}

		/**
		 * Retrieves an APIs.json listing for all API versions for this owner and API
		 * Get apis/{owner}/{api}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @return {ApisJson} A list of API versions in APIs.json format
		 */
		GetApiVersions(owner: string, api: string): Observable<ApisJson> {
			return this.http.get<ApisJson>(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)), {});
		}

		/**
		 * Saves the provided Swagger definition
		 * Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definition itself.
		 * Post apis/{owner}/{api}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {boolean} isPrivate Defines whether the API has to be private
		 * @param {string} version API version
		 * @param {SaveDefinitionOas} oas The OpenApi Specification (OAS)
		 *   version.
		 * * 2.0 - For OAS2 (aka 'Swagger 2.0')
		 * * 3.0.X - For OAS3
		 * @param {boolean} force Force update
		 * @param {string} requestBody The Swagger definition of this API
		 * @return {void} The API was successfully saved
		 */
		SaveDefinition(owner: string, api: string, isPrivate: boolean | null | undefined, version: string | null | undefined, oas: SaveDefinitionOas | null | undefined, force: boolean | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '&isPrivate=' + isPrivate + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&oas=' + oas + '&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified API
		 * Delete apis/{owner}/{api}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @return {void} The API was successfully deleted
		 */
		DeleteApi(owner: string, api: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets API's collaboration
		 * Get apis/{owner}/{api}/.collaboration
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @return {Collaboration} The existing collaboration on an API
		 */
		GetCollaboration(owner: string, api: string, expandTeams: boolean | null | undefined): Observable<Collaboration> {
			return this.http.get<Collaboration>(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/.collaboration&expandTeams=' + expandTeams, {});
		}

		/**
		 * Updates API's collaboration
		 * Put apis/{owner}/{api}/.collaboration
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @return {void} 
		 */
		UpdateCollaboration(owner: string, api: string, requestBody: Collaboration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/.collaboration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes API's collaboration
		 * Delete apis/{owner}/{api}/.collaboration
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @return {void} 
		 */
		DeleteCollaboration(owner: string, api: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/.collaboration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the Swagger definition for the specified API and version
		 * Get apis/{owner}/{api}/{version}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {string} The Swagger API in requested format
		 */
		GetDefinition(owner: string, api: string, version: string): Observable<string> {
			return this.http.get(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)), { responseType: 'text' });
		}

		/**
		 * Deletes a particular version of the specified API
		 * Delete apis/{owner}/{api}/{version}
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {void} The API version was successfully deleted
		 */
		DeleteApiVersion(owner: string, api: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns comments for the specified API version
		 * Returns all the comments and replies added by collaborators in the specified API version.
		 * Get apis/{owner}/{api}/{version}/.comment
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {Array<ClosableComment>} A list of comments for the specified API version
		 */
		GetApiComments(owner: string, api: string, version: string): Observable<Array<ClosableComment>> {
			return this.http.get<Array<ClosableComment>>(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/.comment', {});
		}

		/**
		 * Retrieves the Swagger definition for the specified API and version in JSON format
		 * Get apis/{owner}/{api}/{version}/swagger.json
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {string} The Swagger API in JSON format
		 */
		GetJsonDefinition(owner: string, api: string, version: string): Observable<string> {
			return this.http.get(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/swagger.json', { responseType: 'text' });
		}

		/**
		 * Retrieves the Swagger definition for the specified API and version in YAML format
		 * Get apis/{owner}/{api}/{version}/swagger.yaml
		 * @param {string} owner API owner (user or organization, case-sensitive)
		 * @param {string} api API name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {void} The Swagger API in YAML format
		 */
		GetYamlDefinition(owner: string, api: string, version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/swagger.yaml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of currently defined domains in APIs.json format
		 * Get domains
		 * @param {string} query Free text query to match
		 * @param {SearchApisState} state Matches against published state of the spec:
		 * * UNPUBLISHED - spec is a draft, a work in progress
		 * * PUBLISHED - spec is a stable version ready for consuming from client applications
		 * * ANY - either PUBLISHED or UNPUBLISHED
		 * @param {Array<string>} tag Matches against tags associated with a domain
		 * @param {number} page Page to return
		 * @param {number} limit Number of results per page
		 * @param {SearchApisSort} sort Sort criteria or result set:
		 * * NAME
		 * * UPATED
		 * * CREATED
		 * * OWNER
		 * @param {SearchApisOrder} order Sort order
		 * @return {void} 
		 */
		SearchDomains(query: string | null | undefined, state: SearchApisState | null | undefined, tag: Array<string> | null | undefined, page: number | null | undefined, limit: number | null | undefined, sort: SearchApisSort | null | undefined, order: SearchApisOrder | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains?query=' + (query == null ? '' : encodeURIComponent(query)) + '&state=' + state + '&' + tag?.map(z => `tag=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&limit=' + limit + '&sort=' + sort + '&order=' + order, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an APIs.json listing of all domains defined for this owner
		 * Get domains/{owner}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {number} page Page to return
		 * @param {number} limit Number of results per page
		 * @param {SearchApisSort} sort Sort criteria or result set:
		 * * NAME
		 * * UPATED
		 * * CREATED
		 * * OWNER
		 * @param {SearchApisOrder} order Sort order
		 * @return {ApisJson} A list of domains in APIs.json format
		 */
		GetOwnerDomains(owner: string, page: number | null | undefined, limit: number | null | undefined, sort: SearchApisSort | null | undefined, order: SearchApisOrder | null | undefined): Observable<ApisJson> {
			return this.http.get<ApisJson>(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '&page=' + page + '&limit=' + limit + '&sort=' + sort + '&order=' + order, {});
		}

		/**
		 * Retrieves an APIs.json listing for all domain versions for this owner and domain
		 * Get domains/{owner}/{domain}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @return {ApisJson} A list of domain versions in APIs.json format
		 */
		GetDomainVersions(owner: string, domain: string): Observable<ApisJson> {
			return this.http.get<ApisJson>(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)), {});
		}

		/**
		 * Saves the provided Swagger definition of a domain
		 * Post domains/{owner}/{domain}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {boolean} isPrivate Specifies whether the domain has to be private
		 * @param {string} version Domain version
		 * @param {boolean} force Force update
		 * @param {string} requestBody The Swagger definition of this domain
		 * @return {void} The domain was successfully saved
		 */
		SaveDomainDefinition(owner: string, domain: string, isPrivate: boolean | null | undefined, version: string, force: boolean | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '&isPrivate=' + isPrivate + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified domain
		 * Delete domains/{owner}/{domain}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {boolean} force Force update
		 * @return {void} The domain was successfully deleted
		 */
		DeleteDomain(owner: string, domain: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the Swagger definition for the specified domain and version
		 * Get domains/{owner}/{domain}/{version}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {string} The Swagger domain in requested format
		 */
		GetDomainDefinition(owner: string, domain: string, version: string): Observable<string> {
			return this.http.get(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '/' + (version == null ? '' : encodeURIComponent(version)), { responseType: 'text' });
		}

		/**
		 * Deletes a particular version of the specified domain
		 * Delete domains/{owner}/{domain}/{version}
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @param {boolean} force Force update
		 * @return {void} The domain version was successfully deleted
		 */
		DeleteDomainVersion(owner: string, domain: string, version: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns comments for the specified domain version
		 * Returns all the comments and replies added by collaborators in the specified domain version.
		 * Get domains/{owner}/{domain}/{version}/.comment
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {Array<ClosableComment>} Comments for the specified domain
		 */
		GetDomainComments(owner: string, domain: string, version: string): Observable<Array<ClosableComment>> {
			return this.http.get<Array<ClosableComment>>(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/.comment', {});
		}

		/**
		 * Retrieves the definition for the specified domain and version in JSON format
		 * Get domains/{owner}/{domain}/{version}/domain.json
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {string} Definition in JSON format
		 */
		GetDomainJsonDefinition(owner: string, domain: string, version: string): Observable<string> {
			return this.http.get(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/domain.json', { responseType: 'text' });
		}

		/**
		 * Retrieves the definition for the specified domain and version in YAML format
		 * Get domains/{owner}/{domain}/{version}/domain.yaml
		 * @param {string} owner Domain owner (user or organization, case-sensitive)
		 * @param {string} domain Domain name (case-sensitive)
		 * @param {string} version Version identifier (case-sensitive)
		 * @return {void} Definition in YAML format
		 */
		GetDomainYamlDefinition(owner: string, domain: string, version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/' + (owner == null ? '' : encodeURIComponent(owner)) + '/' + (domain == null ? '' : encodeURIComponent(domain)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/domain.yaml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of currently defined APIs and Domains in APIs.json format
		 * Get specs
		 * @param {SearchApisAndDomainsSpecType} specType Type of Swagger specs to search:
		 * * API - APIs only
		 * * DOMAIN - Domains only
		 * * ANY - Both APIs and Domains
		 * @param {SearchApisAndDomainsVisibility} visibility The visibility of a spec in SwaggerHub:
		 * * PUBLIC - can be viewed by anyone
		 * * PRIVATE - can only be viewed by you or your Org and those that you are collaborating with or have shared it with
		 * * ANY - either PUBLIC or PRIVATE
		 * @param {SearchApisState} state Matches against published state of the spec:
		 * * UNPUBLISHED - spec is a draft, a work in progress
		 * * PUBLISHED - spec is a stable version ready for consuming from client applications
		 * * ANY - either PUBLISHED or UNPUBLISHED
		 * @param {string} owner API or Domain owner identifier. Can be username or organization name
		 * @param {string} query Free text query to match
		 * @param {number} page Page to return
		 * @param {number} limit Number of results per page
		 * @param {SearchApisSort} sort Sort criteria or result set:
		 * * NAME
		 * * UPATED
		 * * CREATED
		 * * OWNER
		 * @param {SearchApisOrder} order Sort order
		 * @return {ApisJson} A list of APIs and Domains in APIs.json format
		 */
		SearchApisAndDomains(specType: SearchApisAndDomainsSpecType | null | undefined, visibility: SearchApisAndDomainsVisibility | null | undefined, state: SearchApisState | null | undefined, owner: string | null | undefined, query: string | null | undefined, page: number | null | undefined, limit: number | null | undefined, sort: SearchApisSort | null | undefined, order: SearchApisOrder | null | undefined): Observable<ApisJson> {
			return this.http.get<ApisJson>(this.baseUri + 'specs?specType=' + specType + '&visibility=' + visibility + '&state=' + state + '&owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&page=' + page + '&limit=' + limit + '&sort=' + sort + '&order=' + order, {});
		}
	}

	export enum SearchApisState { ALL = 0, PUBLISHED = 1, UNPUBLISHED = 2 }

	export enum SearchApisSort { NAME = 0, UPDATED = 1, CREATED = 2, OWNER = 3 }

	export enum SearchApisOrder { ASC = 0, DESC = 1 }

	export enum SaveDefinitionOas { '2.0' = 0, '3.0.0' = 1, '3.0.1' = 2 }

	export enum SearchApisAndDomainsSpecType { API = 0, DOMAIN = 1, ANY = 2 }

	export enum SearchApisAndDomainsVisibility { PUBLIC = 0, PRIVATE = 1, ANY = 2 }

}

