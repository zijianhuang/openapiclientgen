import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete a block
		 * Delete a block
		 * Delete v1/blocks/{id}
		 * @return {DeleteABlockReturn} 200 Success - Delete a block
		 */
		DeleteABlock(): Observable<DeleteABlockReturn> {
			return this.http.delete<DeleteABlockReturn>(this.baseUri + 'v1/blocks/{id}', {});
		}

		/**
		 * Retrieve a block
		 * Retrieve a block
		 * Get v1/blocks/{id}
		 * @return {RetrieveABlockReturn} 200 Success - Retrieve a block
		 */
		RetrieveABlock(): Observable<RetrieveABlockReturn> {
			return this.http.get<RetrieveABlockReturn>(this.baseUri + 'v1/blocks/{id}', {});
		}

		/**
		 * Update a block
		 * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
		 * Patch v1/blocks/{id}
		 * @return {UpdateABlockReturn} 200 Success - Update a block
		 */
		UpdateABlock(requestBody: UpdateABlockPatchBody): Observable<UpdateABlockReturn> {
			return this.http.patch<UpdateABlockReturn>(this.baseUri + 'v1/blocks/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve block children
		 * Retrieve block children
		 * Get v1/blocks/{id}/children
		 * @return {RetrieveBlockChildrenReturn} 200 Success - Retrieve block children
		 */
		RetrieveBlockChildren(page_size: string | null | undefined): Observable<RetrieveBlockChildrenReturn> {
			return this.http.get<RetrieveBlockChildrenReturn>(this.baseUri + 'v1/blocks/{id}/children?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Append block children
		 * Append block children
		 * Patch v1/blocks/{id}/children
		 * @return {AppendBlockChildrenReturn} 200 Success - Append block children
		 */
		AppendBlockChildren(requestBody: AppendBlockChildrenPatchBody): Observable<AppendBlockChildrenReturn> {
			return this.http.patch<AppendBlockChildrenReturn>(this.baseUri + 'v1/blocks/{id}/children', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve comments
		 * Retrieve a user object using the ID specified in the request path.
		 * Get v1/comments
		 * @return {RetrieveCommentsReturn} 200 Success - Retrieve a comment
		 */
		RetrieveComments(block_id: string | null | undefined, page_size: string | null | undefined): Observable<RetrieveCommentsReturn> {
			return this.http.get<RetrieveCommentsReturn>(this.baseUri + 'v1/comments?block_id=' + (block_id == null ? '' : encodeURIComponent(block_id)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieve a database
		 * Retrieves a database object using the ID specified in the request path.
		 * Get v1/databases/{id}
		 * @return {RetrieveADatabaseReturn} 200 Success - Retrieve a Database
		 */
		RetrieveADatabase(): Observable<RetrieveADatabaseReturn> {
			return this.http.get<RetrieveADatabaseReturn>(this.baseUri + 'v1/databases/{id}', {});
		}

		/**
		 * Update a database
		 * Update a database
		 * Patch v1/databases/{id}
		 * @return {UpdateADatabaseReturn} 200 Success - Update a Database
		 */
		UpdateADatabase(requestBody: UpdateADatabasePatchBody): Observable<UpdateADatabaseReturn> {
			return this.http.patch<UpdateADatabaseReturn>(this.baseUri + 'v1/databases/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query a database
		 * Query a database
		 * Post v1/databases/{id}/query
		 * @return {QueryADatabaseReturn} 200 Success - Query a Database (Single Filter)
		 */
		QueryADatabase(requestBody: QueryADatabasePostBody): Observable<QueryADatabaseReturn> {
			return this.http.post<QueryADatabaseReturn>(this.baseUri + 'v1/databases/{id}/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a Page
		 * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content.
		 * Get v1/pages/{id}
		 * @return {RetrieveAPageReturn} 200 Success - Retrieve a Page
		 */
		RetrieveAPage(): Observable<RetrieveAPageReturn> {
			return this.http.get<RetrieveAPageReturn>(this.baseUri + 'v1/pages/{id}', {});
		}

		/**
		 * Update Page properties
		 * Updates a page by setting the values of any properties specified in the JSON body of the request. Properties not updated via parameters will remain unchanged.
		 * Patch v1/pages/{id}
		 * @return {UpdatePagePropertiesReturn} 200 Success - Update Page properties
		 */
		UpdatePageProperties(requestBody: UpdatePagePropertiesPatchBody): Observable<UpdatePagePropertiesReturn> {
			return this.http.patch<UpdatePagePropertiesReturn>(this.baseUri + 'v1/pages/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a Page Property Item
		 * Retrieve a Page Property Item
		 * Get v1/pages/{page_id}/properties/{property_id}
		 * @return {RetrieveAPagePropertyItemReturn} 200 Success - Retrieve a Page Property Item
		 */
		RetrieveAPagePropertyItem(): Observable<RetrieveAPagePropertyItemReturn> {
			return this.http.get<RetrieveAPagePropertyItemReturn>(this.baseUri + 'v1/pages/{page_id}/properties/{property_id}', {});
		}

		/**
		 * Retrieve a user
		 * Retrieve a user object using the ID specified in the request path.
		 * Get v1/users/{id}
		 * @return {RetrieveAUserReturn} 200 Success - Retrieve a user
		 */
		RetrieveAUser(): Observable<RetrieveAUserReturn> {
			return this.http.get<RetrieveAUserReturn>(this.baseUri + 'v1/users/{id}', {});
		}
	}

	export interface DeleteABlockReturn {
		archived?: boolean | null;
		created_by?: DeleteABlockReturnCreated_by;
		created_time?: string | null;
		has_children?: boolean | null;
		id?: string | null;
		last_edited_by?: DeleteABlockReturnLast_edited_by;
		last_edited_time?: string | null;
		object?: string | null;
		paragraph?: DeleteABlockReturnParagraph;
		type?: string | null;
	}
	export interface DeleteABlockReturnFormProperties {
		archived: FormControl<boolean | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		has_children: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeleteABlockReturnFormGroup() {
		return new FormGroup<DeleteABlockReturnFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			has_children: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteABlockReturnCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface DeleteABlockReturnCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateDeleteABlockReturnCreated_byFormGroup() {
		return new FormGroup<DeleteABlockReturnCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteABlockReturnLast_edited_by {
		id?: string | null;
		object?: string | null;
	}
	export interface DeleteABlockReturnLast_edited_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateDeleteABlockReturnLast_edited_byFormGroup() {
		return new FormGroup<DeleteABlockReturnLast_edited_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteABlockReturnParagraph {
		DeleteABlockReturnParagraphText?: Array<DeleteABlockReturnParagraphText>;
	}
	export interface DeleteABlockReturnParagraphFormProperties {
	}
	export function CreateDeleteABlockReturnParagraphFormGroup() {
		return new FormGroup<DeleteABlockReturnParagraphFormProperties>({
		});

	}

	export interface DeleteABlockReturnParagraphText {
		annotations?: DeleteABlockReturnParagraphTextAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: DeleteABlockReturnParagraphTextText;
		type?: string | null;
	}
	export interface DeleteABlockReturnParagraphTextFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeleteABlockReturnParagraphTextFormGroup() {
		return new FormGroup<DeleteABlockReturnParagraphTextFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteABlockReturnParagraphTextAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface DeleteABlockReturnParagraphTextAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteABlockReturnParagraphTextAnnotationsFormGroup() {
		return new FormGroup<DeleteABlockReturnParagraphTextAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteABlockReturnParagraphTextText {
		content?: string | null;
		link?: any;
	}
	export interface DeleteABlockReturnParagraphTextTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateDeleteABlockReturnParagraphTextTextFormGroup() {
		return new FormGroup<DeleteABlockReturnParagraphTextTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RetrieveABlockReturn {
		created_time?: string | null;
		has_children?: boolean | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		paragraph?: RetrieveABlockReturnParagraph;
		type?: string | null;
	}
	export interface RetrieveABlockReturnFormProperties {
		created_time: FormControl<string | null | undefined>,
		has_children: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveABlockReturnFormGroup() {
		return new FormGroup<RetrieveABlockReturnFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			has_children: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveABlockReturnParagraph {
		RetrieveABlockReturnParagraphText?: Array<RetrieveABlockReturnParagraphText>;
	}
	export interface RetrieveABlockReturnParagraphFormProperties {
	}
	export function CreateRetrieveABlockReturnParagraphFormGroup() {
		return new FormGroup<RetrieveABlockReturnParagraphFormProperties>({
		});

	}

	export interface RetrieveABlockReturnParagraphText {
		annotations?: RetrieveABlockReturnParagraphTextAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: RetrieveABlockReturnParagraphTextText;
		type?: string | null;
	}
	export interface RetrieveABlockReturnParagraphTextFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveABlockReturnParagraphTextFormGroup() {
		return new FormGroup<RetrieveABlockReturnParagraphTextFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveABlockReturnParagraphTextAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface RetrieveABlockReturnParagraphTextAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveABlockReturnParagraphTextAnnotationsFormGroup() {
		return new FormGroup<RetrieveABlockReturnParagraphTextAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveABlockReturnParagraphTextText {
		content?: string | null;
		link?: any;
	}
	export interface RetrieveABlockReturnParagraphTextTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveABlockReturnParagraphTextTextFormGroup() {
		return new FormGroup<RetrieveABlockReturnParagraphTextTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockPatchBody {
		paragraph?: UpdateABlockPatchBodyParagraph;
	}
	export interface UpdateABlockPatchBodyFormProperties {
	}
	export function CreateUpdateABlockPatchBodyFormGroup() {
		return new FormGroup<UpdateABlockPatchBodyFormProperties>({
		});

	}

	export interface UpdateABlockPatchBodyParagraph {
		UpdateABlockPatchBodyParagraphRich_text?: Array<UpdateABlockPatchBodyParagraphRich_text>;
	}
	export interface UpdateABlockPatchBodyParagraphFormProperties {
	}
	export function CreateUpdateABlockPatchBodyParagraphFormGroup() {
		return new FormGroup<UpdateABlockPatchBodyParagraphFormProperties>({
		});

	}

	export interface UpdateABlockPatchBodyParagraphRich_text {
		text?: UpdateABlockPatchBodyParagraphRich_textText;
		type?: string | null;
	}
	export interface UpdateABlockPatchBodyParagraphRich_textFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateABlockPatchBodyParagraphRich_textFormGroup() {
		return new FormGroup<UpdateABlockPatchBodyParagraphRich_textFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockPatchBodyParagraphRich_textText {
		content?: string | null;
	}
	export interface UpdateABlockPatchBodyParagraphRich_textTextFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateABlockPatchBodyParagraphRich_textTextFormGroup() {
		return new FormGroup<UpdateABlockPatchBodyParagraphRich_textTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockReturn {
		created_time?: string | null;
		has_children?: boolean | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		paragraph?: UpdateABlockReturnParagraph;
		type?: string | null;
	}
	export interface UpdateABlockReturnFormProperties {
		created_time: FormControl<string | null | undefined>,
		has_children: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateABlockReturnFormGroup() {
		return new FormGroup<UpdateABlockReturnFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			has_children: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockReturnParagraph {
		UpdateABlockReturnParagraphText?: Array<UpdateABlockReturnParagraphText>;
	}
	export interface UpdateABlockReturnParagraphFormProperties {
	}
	export function CreateUpdateABlockReturnParagraphFormGroup() {
		return new FormGroup<UpdateABlockReturnParagraphFormProperties>({
		});

	}

	export interface UpdateABlockReturnParagraphText {
		annotations?: UpdateABlockReturnParagraphTextAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: UpdateABlockReturnParagraphTextText;
		type?: string | null;
	}
	export interface UpdateABlockReturnParagraphTextFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateABlockReturnParagraphTextFormGroup() {
		return new FormGroup<UpdateABlockReturnParagraphTextFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockReturnParagraphTextAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface UpdateABlockReturnParagraphTextAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateABlockReturnParagraphTextAnnotationsFormGroup() {
		return new FormGroup<UpdateABlockReturnParagraphTextAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateABlockReturnParagraphTextText {
		content?: string | null;
		link?: any;
	}
	export interface UpdateABlockReturnParagraphTextTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateUpdateABlockReturnParagraphTextTextFormGroup() {
		return new FormGroup<UpdateABlockReturnParagraphTextTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RetrieveBlockChildrenReturn {
		has_more?: boolean | null;
		next_cursor?: any;
		object?: string | null;
		RetrieveBlockChildrenReturnResults?: Array<RetrieveBlockChildrenReturnResults>;
	}
	export interface RetrieveBlockChildrenReturnFormProperties {
		has_more: FormControl<boolean | null | undefined>,
		next_cursor: FormControl<any | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveBlockChildrenReturnFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnFormProperties>({
			has_more: new FormControl<boolean | null | undefined>(undefined),
			next_cursor: new FormControl<any | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveBlockChildrenReturnResults {
		created_time?: string | null;
		has_children?: boolean | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		paragraph?: RetrieveBlockChildrenReturnResultsParagraph;
		type?: string | null;
		unsupported?: string | null;
	}
	export interface RetrieveBlockChildrenReturnResultsFormProperties {
		created_time: FormControl<string | null | undefined>,
		has_children: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		unsupported: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveBlockChildrenReturnResultsFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnResultsFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			has_children: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unsupported: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveBlockChildrenReturnResultsParagraph {
		RetrieveBlockChildrenReturnResultsParagraphText?: Array<RetrieveBlockChildrenReturnResultsParagraphText>;
	}
	export interface RetrieveBlockChildrenReturnResultsParagraphFormProperties {
	}
	export function CreateRetrieveBlockChildrenReturnResultsParagraphFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnResultsParagraphFormProperties>({
		});

	}

	export interface RetrieveBlockChildrenReturnResultsParagraphText {
		annotations?: RetrieveBlockChildrenReturnResultsParagraphTextAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: RetrieveBlockChildrenReturnResultsParagraphTextText;
		type?: string | null;
	}
	export interface RetrieveBlockChildrenReturnResultsParagraphTextFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveBlockChildrenReturnResultsParagraphTextFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnResultsParagraphTextFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveBlockChildrenReturnResultsParagraphTextAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface RetrieveBlockChildrenReturnResultsParagraphTextAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveBlockChildrenReturnResultsParagraphTextAnnotationsFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnResultsParagraphTextAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveBlockChildrenReturnResultsParagraphTextText {
		content?: string | null;
		link?: any;
	}
	export interface RetrieveBlockChildrenReturnResultsParagraphTextTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveBlockChildrenReturnResultsParagraphTextTextFormGroup() {
		return new FormGroup<RetrieveBlockChildrenReturnResultsParagraphTextTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBody {
		AppendBlockChildrenPatchBodyChildren?: Array<AppendBlockChildrenPatchBodyChildren>;
	}
	export interface AppendBlockChildrenPatchBodyFormProperties {
	}
	export function CreateAppendBlockChildrenPatchBodyFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyFormProperties>({
		});

	}

	export interface AppendBlockChildrenPatchBodyChildren {
		heading_2?: AppendBlockChildrenPatchBodyChildrenHeading_2;
		object?: string | null;
		paragraph?: AppendBlockChildrenPatchBodyChildrenParagraph;
		type?: string | null;
	}
	export interface AppendBlockChildrenPatchBodyChildrenFormProperties {
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenHeading_2 {
		AppendBlockChildrenPatchBodyChildrenHeading_2Text?: Array<AppendBlockChildrenPatchBodyChildrenHeading_2Text>;
	}
	export interface AppendBlockChildrenPatchBodyChildrenHeading_2FormProperties {
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenHeading_2FormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenHeading_2FormProperties>({
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenHeading_2Text {
		text?: AppendBlockChildrenPatchBodyChildrenHeading_2TextText;
		type?: string | null;
	}
	export interface AppendBlockChildrenPatchBodyChildrenHeading_2TextFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenHeading_2TextFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenHeading_2TextFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenHeading_2TextText {
		content?: string | null;
	}
	export interface AppendBlockChildrenPatchBodyChildrenHeading_2TextTextFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenHeading_2TextTextFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenHeading_2TextTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenParagraph {
		AppendBlockChildrenPatchBodyChildrenParagraphRich_text?: Array<AppendBlockChildrenPatchBodyChildrenParagraphRich_text>;
	}
	export interface AppendBlockChildrenPatchBodyChildrenParagraphFormProperties {
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenParagraphFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenParagraphFormProperties>({
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_text {
		text?: AppendBlockChildrenPatchBodyChildrenParagraphRich_textText;
		type?: string | null;
	}
	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_textFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenParagraphRich_textFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenParagraphRich_textFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_textText {
		content?: string | null;
		link?: AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextLink;
	}
	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenParagraphRich_textTextFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextLink {
		url?: string | null;
	}
	export interface AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextLinkFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenPatchBodyChildrenParagraphRich_textTextLinkFormGroup() {
		return new FormGroup<AppendBlockChildrenPatchBodyChildrenParagraphRich_textTextLinkFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenReturn {
		child_page?: AppendBlockChildrenReturnChild_page;
		created_time?: string | null;
		has_children?: boolean | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		type?: string | null;
	}
	export interface AppendBlockChildrenReturnFormProperties {
		created_time: FormControl<string | null | undefined>,
		has_children: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenReturnFormGroup() {
		return new FormGroup<AppendBlockChildrenReturnFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			has_children: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendBlockChildrenReturnChild_page {
		title?: string | null;
	}
	export interface AppendBlockChildrenReturnChild_pageFormProperties {
		title: FormControl<string | null | undefined>,
	}
	export function CreateAppendBlockChildrenReturnChild_pageFormGroup() {
		return new FormGroup<AppendBlockChildrenReturnChild_pageFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturn {
		comment?: string | null;
		has_more?: boolean | null;
		next_cursor?: any;
		object?: string | null;
		RetrieveCommentsReturnResults?: Array<RetrieveCommentsReturnResults>;
		type?: string | null;
	}
	export interface RetrieveCommentsReturnFormProperties {
		comment: FormControl<string | null | undefined>,
		has_more: FormControl<boolean | null | undefined>,
		next_cursor: FormControl<any | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnFormGroup() {
		return new FormGroup<RetrieveCommentsReturnFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			has_more: new FormControl<boolean | null | undefined>(undefined),
			next_cursor: new FormControl<any | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResults {
		created_by?: RetrieveCommentsReturnResultsCreated_by;
		created_time?: string | null;
		discussion_id?: string | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: RetrieveCommentsReturnResultsParent;
		RetrieveCommentsReturnResultsRich_text?: Array<RetrieveCommentsReturnResultsRich_text>;
	}
	export interface RetrieveCommentsReturnResultsFormProperties {
		created_time: FormControl<string | null | undefined>,
		discussion_id: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			discussion_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResultsCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface RetrieveCommentsReturnResultsCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsCreated_byFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResultsParent {
		block_id?: string | null;
		type?: string | null;
	}
	export interface RetrieveCommentsReturnResultsParentFormProperties {
		block_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsParentFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsParentFormProperties>({
			block_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResultsRich_text {
		annotations?: RetrieveCommentsReturnResultsRich_textAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: RetrieveCommentsReturnResultsRich_textText;
		type?: string | null;
	}
	export interface RetrieveCommentsReturnResultsRich_textFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsRich_textFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsRich_textFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResultsRich_textAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface RetrieveCommentsReturnResultsRich_textAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsRich_textAnnotationsFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsRich_textAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveCommentsReturnResultsRich_textText {
		content?: string | null;
		link?: any;
	}
	export interface RetrieveCommentsReturnResultsRich_textTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveCommentsReturnResultsRich_textTextFormGroup() {
		return new FormGroup<RetrieveCommentsReturnResultsRich_textTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturn {
		archived?: boolean | null;
		cover?: any;
		created_by?: RetrieveADatabaseReturnCreated_by;
		created_time?: string | null;
		icon?: any;
		id?: string | null;
		last_edited_by?: RetrieveADatabaseReturnLast_edited_by;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: RetrieveADatabaseReturnParent;
		properties?: RetrieveADatabaseReturnProperties;
		RetrieveADatabaseReturnTitle?: Array<RetrieveADatabaseReturnTitle>;
		url?: string | null;
	}
	export interface RetrieveADatabaseReturnFormProperties {
		archived: FormControl<boolean | null | undefined>,
		cover: FormControl<any | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		icon: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			cover: new FormControl<any | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface RetrieveADatabaseReturnCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnCreated_byFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnLast_edited_by {
		id?: string | null;
		object?: string | null;
	}
	export interface RetrieveADatabaseReturnLast_edited_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnLast_edited_byFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnLast_edited_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnParent {
		page_id?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnParentFormProperties {
		page_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnParentFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnParentFormProperties>({
			page_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnProperties {
		Author?: RetrieveADatabaseReturnPropertiesAuthor;
		Link?: RetrieveADatabaseReturnPropertiesLink;
		Name?: RetrieveADatabaseReturnPropertiesName;
		Publisher?: RetrieveADatabaseReturnPropertiesPublisher;
		'Publishing/Release Date'?: RetrieveADatabaseReturnProperties_PublishingSlashRelease_Date_;
		Read?: RetrieveADatabaseReturnPropertiesRead;
		'Score /5'?: RetrieveADatabaseReturnProperties_Score_Slash5_;
		Status?: RetrieveADatabaseReturnPropertiesStatus;
		Summary?: RetrieveADatabaseReturnPropertiesSummary;
		Type?: RetrieveADatabaseReturnPropertiesType;
	}
	export interface RetrieveADatabaseReturnPropertiesFormProperties {
	}
	export function CreateRetrieveADatabaseReturnPropertiesFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnPropertiesAuthor {
		id?: string | null;
		multi_select?: RetrieveADatabaseReturnPropertiesAuthorMulti_select;
		name?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesAuthorFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesAuthorFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesAuthorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesAuthorMulti_select {
		RetrieveADatabaseReturnPropertiesAuthorMulti_selectOptions?: Array<RetrieveADatabaseReturnPropertiesAuthorMulti_selectOptions>;
	}
	export interface RetrieveADatabaseReturnPropertiesAuthorMulti_selectFormProperties {
	}
	export function CreateRetrieveADatabaseReturnPropertiesAuthorMulti_selectFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesAuthorMulti_selectFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnPropertiesAuthorMulti_selectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesAuthorMulti_selectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesAuthorMulti_selectOptionsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesAuthorMulti_selectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesLink {
		id?: string | null;
		name?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesLinkFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesLinkFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesName {
		id?: string | null;
		name?: string | null;
		title?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesNameFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesNameFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesPublisher {
		id?: string | null;
		name?: string | null;
		select?: RetrieveADatabaseReturnPropertiesPublisherSelect;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesPublisherFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesPublisherFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesPublisherFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesPublisherSelect {
		RetrieveADatabaseReturnPropertiesPublisherSelectOptions?: Array<RetrieveADatabaseReturnPropertiesPublisherSelectOptions>;
	}
	export interface RetrieveADatabaseReturnPropertiesPublisherSelectFormProperties {
	}
	export function CreateRetrieveADatabaseReturnPropertiesPublisherSelectFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesPublisherSelectFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnPropertiesPublisherSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesPublisherSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesPublisherSelectOptionsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesPublisherSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnProperties_PublishingSlashRelease_Date_ {
		date?: string | null;
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnProperties_PublishingSlashRelease_Date_FormProperties {
		date: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnProperties_PublishingSlashRelease_Date_FormGroup() {
		return new FormGroup<RetrieveADatabaseReturnProperties_PublishingSlashRelease_Date_FormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesRead {
		checkbox?: string | null;
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesReadFormProperties {
		checkbox: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesReadFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesReadFormProperties>({
			checkbox: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnProperties_Score_Slash5_ {
		id?: string | null;
		name?: string | null;
		select?: RetrieveADatabaseReturnProperties_Score_Slash5_Select;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnProperties_Score_Slash5_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnProperties_Score_Slash5_FormGroup() {
		return new FormGroup<RetrieveADatabaseReturnProperties_Score_Slash5_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnProperties_Score_Slash5_Select {
		RetrieveADatabaseReturnProperties_Score_Slash5_SelectOptions?: Array<RetrieveADatabaseReturnProperties_Score_Slash5_SelectOptions>;
	}
	export interface RetrieveADatabaseReturnProperties_Score_Slash5_SelectFormProperties {
	}
	export function CreateRetrieveADatabaseReturnProperties_Score_Slash5_SelectFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnProperties_Score_Slash5_SelectFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnProperties_Score_Slash5_SelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveADatabaseReturnProperties_Score_Slash5_SelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnProperties_Score_Slash5_SelectOptionsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnProperties_Score_Slash5_SelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesStatus {
		id?: string | null;
		name?: string | null;
		select?: RetrieveADatabaseReturnPropertiesStatusSelect;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesStatusFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesStatusFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesStatusSelect {
		RetrieveADatabaseReturnPropertiesStatusSelectOptions?: Array<RetrieveADatabaseReturnPropertiesStatusSelectOptions>;
	}
	export interface RetrieveADatabaseReturnPropertiesStatusSelectFormProperties {
	}
	export function CreateRetrieveADatabaseReturnPropertiesStatusSelectFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesStatusSelectFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnPropertiesStatusSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesStatusSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesStatusSelectOptionsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesStatusSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesSummary {
		id?: string | null;
		name?: string | null;
		rich_text?: string | null;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		rich_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesSummaryFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rich_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesType {
		id?: string | null;
		name?: string | null;
		select?: RetrieveADatabaseReturnPropertiesTypeSelect;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesTypeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesTypeFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnPropertiesTypeSelect {
		RetrieveADatabaseReturnPropertiesTypeSelectOptions?: Array<RetrieveADatabaseReturnPropertiesTypeSelectOptions>;
	}
	export interface RetrieveADatabaseReturnPropertiesTypeSelectFormProperties {
	}
	export function CreateRetrieveADatabaseReturnPropertiesTypeSelectFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesTypeSelectFormProperties>({
		});

	}

	export interface RetrieveADatabaseReturnPropertiesTypeSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveADatabaseReturnPropertiesTypeSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnPropertiesTypeSelectOptionsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnPropertiesTypeSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnTitle {
		annotations?: RetrieveADatabaseReturnTitleAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: RetrieveADatabaseReturnTitleText;
		type?: string | null;
	}
	export interface RetrieveADatabaseReturnTitleFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnTitleFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnTitleFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnTitleAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface RetrieveADatabaseReturnTitleAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnTitleAnnotationsFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnTitleAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveADatabaseReturnTitleText {
		content?: string | null;
		link?: any;
	}
	export interface RetrieveADatabaseReturnTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveADatabaseReturnTitleTextFormGroup() {
		return new FormGroup<RetrieveADatabaseReturnTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabasePatchBody {
		properties?: UpdateADatabasePatchBodyProperties;
		UpdateADatabasePatchBodyTitle?: Array<UpdateADatabasePatchBodyTitle>;
	}
	export interface UpdateADatabasePatchBodyFormProperties {
	}
	export function CreateUpdateADatabasePatchBodyFormGroup() {
		return new FormGroup<UpdateADatabasePatchBodyFormProperties>({
		});

	}

	export interface UpdateADatabasePatchBodyProperties {
		'Wine Pairing'?: UpdateADatabasePatchBodyProperties_Wine_Pairing_;
	}
	export interface UpdateADatabasePatchBodyPropertiesFormProperties {
	}
	export function CreateUpdateADatabasePatchBodyPropertiesFormGroup() {
		return new FormGroup<UpdateADatabasePatchBodyPropertiesFormProperties>({
		});

	}

	export interface UpdateADatabasePatchBodyProperties_Wine_Pairing_ {
		rich_text?: string | null;
	}
	export interface UpdateADatabasePatchBodyProperties_Wine_Pairing_FormProperties {
		rich_text: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabasePatchBodyProperties_Wine_Pairing_FormGroup() {
		return new FormGroup<UpdateADatabasePatchBodyProperties_Wine_Pairing_FormProperties>({
			rich_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabasePatchBodyTitle {
		text?: UpdateADatabasePatchBodyTitleText;
	}
	export interface UpdateADatabasePatchBodyTitleFormProperties {
	}
	export function CreateUpdateADatabasePatchBodyTitleFormGroup() {
		return new FormGroup<UpdateADatabasePatchBodyTitleFormProperties>({
		});

	}

	export interface UpdateADatabasePatchBodyTitleText {
		content?: string | null;
	}
	export interface UpdateADatabasePatchBodyTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabasePatchBodyTitleTextFormGroup() {
		return new FormGroup<UpdateADatabasePatchBodyTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturn {
		archived?: boolean | null;
		cover?: any;
		created_by?: UpdateADatabaseReturnCreated_by;
		created_time?: string | null;
		icon?: any;
		id?: string | null;
		last_edited_by?: UpdateADatabaseReturnLast_edited_by;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: UpdateADatabaseReturnParent;
		properties?: UpdateADatabaseReturnProperties;
		UpdateADatabaseReturnTitle?: Array<UpdateADatabaseReturnTitle>;
		url?: string | null;
	}
	export interface UpdateADatabaseReturnFormProperties {
		archived: FormControl<boolean | null | undefined>,
		cover: FormControl<any | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		icon: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnFormGroup() {
		return new FormGroup<UpdateADatabaseReturnFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			cover: new FormControl<any | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface UpdateADatabaseReturnCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnCreated_byFormGroup() {
		return new FormGroup<UpdateADatabaseReturnCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnLast_edited_by {
		id?: string | null;
		object?: string | null;
	}
	export interface UpdateADatabaseReturnLast_edited_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnLast_edited_byFormGroup() {
		return new FormGroup<UpdateADatabaseReturnLast_edited_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnParent {
		page_id?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnParentFormProperties {
		page_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnParentFormGroup() {
		return new FormGroup<UpdateADatabaseReturnParentFormProperties>({
			page_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnProperties {
		Author?: UpdateADatabaseReturnPropertiesAuthor;
		Link?: UpdateADatabaseReturnPropertiesLink;
		Name?: UpdateADatabaseReturnPropertiesName;
		Publisher?: UpdateADatabaseReturnPropertiesPublisher;
		'Publishing/Release Date'?: UpdateADatabaseReturnProperties_PublishingSlashRelease_Date_;
		Read?: UpdateADatabaseReturnPropertiesRead;
		'Score /5'?: UpdateADatabaseReturnProperties_Score_Slash5_;
		Status?: UpdateADatabaseReturnPropertiesStatus;
		Summary?: UpdateADatabaseReturnPropertiesSummary;
		Type?: UpdateADatabaseReturnPropertiesType;
		'Wine Pairing'?: UpdateADatabaseReturnProperties_Wine_Pairing_;
	}
	export interface UpdateADatabaseReturnPropertiesFormProperties {
	}
	export function CreateUpdateADatabaseReturnPropertiesFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnPropertiesAuthor {
		id?: string | null;
		multi_select?: UpdateADatabaseReturnPropertiesAuthorMulti_select;
		name?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesAuthorFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesAuthorFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesAuthorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesAuthorMulti_select {
		UpdateADatabaseReturnPropertiesAuthorMulti_selectOptions?: Array<UpdateADatabaseReturnPropertiesAuthorMulti_selectOptions>;
	}
	export interface UpdateADatabaseReturnPropertiesAuthorMulti_selectFormProperties {
	}
	export function CreateUpdateADatabaseReturnPropertiesAuthorMulti_selectFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesAuthorMulti_selectFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnPropertiesAuthorMulti_selectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesAuthorMulti_selectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesAuthorMulti_selectOptionsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesAuthorMulti_selectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesLink {
		id?: string | null;
		name?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesLinkFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesLinkFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesName {
		id?: string | null;
		name?: string | null;
		title?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesNameFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesNameFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesPublisher {
		id?: string | null;
		name?: string | null;
		select?: UpdateADatabaseReturnPropertiesPublisherSelect;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesPublisherFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesPublisherFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesPublisherFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesPublisherSelect {
		UpdateADatabaseReturnPropertiesPublisherSelectOptions?: Array<UpdateADatabaseReturnPropertiesPublisherSelectOptions>;
	}
	export interface UpdateADatabaseReturnPropertiesPublisherSelectFormProperties {
	}
	export function CreateUpdateADatabaseReturnPropertiesPublisherSelectFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesPublisherSelectFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnPropertiesPublisherSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesPublisherSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesPublisherSelectOptionsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesPublisherSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnProperties_PublishingSlashRelease_Date_ {
		date?: string | null;
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnProperties_PublishingSlashRelease_Date_FormProperties {
		date: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnProperties_PublishingSlashRelease_Date_FormGroup() {
		return new FormGroup<UpdateADatabaseReturnProperties_PublishingSlashRelease_Date_FormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesRead {
		checkbox?: string | null;
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesReadFormProperties {
		checkbox: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesReadFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesReadFormProperties>({
			checkbox: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnProperties_Score_Slash5_ {
		id?: string | null;
		name?: string | null;
		select?: UpdateADatabaseReturnProperties_Score_Slash5_Select;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnProperties_Score_Slash5_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnProperties_Score_Slash5_FormGroup() {
		return new FormGroup<UpdateADatabaseReturnProperties_Score_Slash5_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnProperties_Score_Slash5_Select {
		UpdateADatabaseReturnProperties_Score_Slash5_SelectOptions?: Array<UpdateADatabaseReturnProperties_Score_Slash5_SelectOptions>;
	}
	export interface UpdateADatabaseReturnProperties_Score_Slash5_SelectFormProperties {
	}
	export function CreateUpdateADatabaseReturnProperties_Score_Slash5_SelectFormGroup() {
		return new FormGroup<UpdateADatabaseReturnProperties_Score_Slash5_SelectFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnProperties_Score_Slash5_SelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateADatabaseReturnProperties_Score_Slash5_SelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnProperties_Score_Slash5_SelectOptionsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnProperties_Score_Slash5_SelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesStatus {
		id?: string | null;
		name?: string | null;
		select?: UpdateADatabaseReturnPropertiesStatusSelect;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesStatusFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesStatusFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesStatusSelect {
		UpdateADatabaseReturnPropertiesStatusSelectOptions?: Array<UpdateADatabaseReturnPropertiesStatusSelectOptions>;
	}
	export interface UpdateADatabaseReturnPropertiesStatusSelectFormProperties {
	}
	export function CreateUpdateADatabaseReturnPropertiesStatusSelectFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesStatusSelectFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnPropertiesStatusSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesStatusSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesStatusSelectOptionsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesStatusSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesSummary {
		id?: string | null;
		name?: string | null;
		rich_text?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		rich_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesSummaryFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rich_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesType {
		id?: string | null;
		name?: string | null;
		select?: UpdateADatabaseReturnPropertiesTypeSelect;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesTypeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesTypeFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnPropertiesTypeSelect {
		UpdateADatabaseReturnPropertiesTypeSelectOptions?: Array<UpdateADatabaseReturnPropertiesTypeSelectOptions>;
	}
	export interface UpdateADatabaseReturnPropertiesTypeSelectFormProperties {
	}
	export function CreateUpdateADatabaseReturnPropertiesTypeSelectFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesTypeSelectFormProperties>({
		});

	}

	export interface UpdateADatabaseReturnPropertiesTypeSelectOptions {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateADatabaseReturnPropertiesTypeSelectOptionsFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnPropertiesTypeSelectOptionsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnPropertiesTypeSelectOptionsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnProperties_Wine_Pairing_ {
		id?: string | null;
		name?: string | null;
		rich_text?: string | null;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnProperties_Wine_Pairing_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		rich_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnProperties_Wine_Pairing_FormGroup() {
		return new FormGroup<UpdateADatabaseReturnProperties_Wine_Pairing_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rich_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnTitle {
		annotations?: UpdateADatabaseReturnTitleAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: UpdateADatabaseReturnTitleText;
		type?: string | null;
	}
	export interface UpdateADatabaseReturnTitleFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnTitleFormGroup() {
		return new FormGroup<UpdateADatabaseReturnTitleFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnTitleAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface UpdateADatabaseReturnTitleAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnTitleAnnotationsFormGroup() {
		return new FormGroup<UpdateADatabaseReturnTitleAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateADatabaseReturnTitleText {
		content?: string | null;
		link?: any;
	}
	export interface UpdateADatabaseReturnTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateUpdateADatabaseReturnTitleTextFormGroup() {
		return new FormGroup<UpdateADatabaseReturnTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface QueryADatabasePostBody {
		filter?: QueryADatabasePostBodyFilter;
	}
	export interface QueryADatabasePostBodyFormProperties {
	}
	export function CreateQueryADatabasePostBodyFormGroup() {
		return new FormGroup<QueryADatabasePostBodyFormProperties>({
		});

	}

	export interface QueryADatabasePostBodyFilter {
		property?: string | null;
		select?: QueryADatabasePostBodyFilterSelect;
	}
	export interface QueryADatabasePostBodyFilterFormProperties {
		property: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabasePostBodyFilterFormGroup() {
		return new FormGroup<QueryADatabasePostBodyFilterFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabasePostBodyFilterSelect {
		equals?: string | null;
	}
	export interface QueryADatabasePostBodyFilterSelectFormProperties {
		equals: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabasePostBodyFilterSelectFormGroup() {
		return new FormGroup<QueryADatabasePostBodyFilterSelectFormProperties>({
			equals: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturn {
		has_more?: boolean | null;
		next_cursor?: any;
		object?: string | null;
		QueryADatabaseReturnResults?: Array<QueryADatabaseReturnResults>;
	}
	export interface QueryADatabaseReturnFormProperties {
		has_more: FormControl<boolean | null | undefined>,
		next_cursor: FormControl<any | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnFormGroup() {
		return new FormGroup<QueryADatabaseReturnFormProperties>({
			has_more: new FormControl<boolean | null | undefined>(undefined),
			next_cursor: new FormControl<any | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResults {
		archived?: boolean | null;
		cover?: any;
		created_by?: QueryADatabaseReturnResultsCreated_by;
		created_time?: string | null;
		icon?: any;
		id?: string | null;
		last_edited_by?: QueryADatabaseReturnResultsLast_edited_by;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: QueryADatabaseReturnResultsParent;
		properties?: QueryADatabaseReturnResultsProperties;
		url?: string | null;
	}
	export interface QueryADatabaseReturnResultsFormProperties {
		archived: FormControl<boolean | null | undefined>,
		cover: FormControl<any | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		icon: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			cover: new FormControl<any | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface QueryADatabaseReturnResultsCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsCreated_byFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsLast_edited_by {
		id?: string | null;
		object?: string | null;
	}
	export interface QueryADatabaseReturnResultsLast_edited_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsLast_edited_byFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsLast_edited_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsParent {
		database_id?: string | null;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsParentFormProperties {
		database_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsParentFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsParentFormProperties>({
			database_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsProperties {
		Author?: QueryADatabaseReturnResultsPropertiesAuthor;
		Link?: QueryADatabaseReturnResultsPropertiesLink;
		Name?: QueryADatabaseReturnResultsPropertiesName;
		Publisher?: QueryADatabaseReturnResultsPropertiesPublisher;
		'Publishing/Release Date'?: QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_;
		Read?: QueryADatabaseReturnResultsPropertiesRead;
		'Score /5'?: QueryADatabaseReturnResultsProperties_Score_Slash5_;
		Status?: QueryADatabaseReturnResultsPropertiesStatus;
		Summary?: QueryADatabaseReturnResultsPropertiesSummary;
		Type?: QueryADatabaseReturnResultsPropertiesType;
	}
	export interface QueryADatabaseReturnResultsPropertiesFormProperties {
	}
	export function CreateQueryADatabaseReturnResultsPropertiesFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesFormProperties>({
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesAuthor {
		id?: string | null;
		QueryADatabaseReturnResultsPropertiesAuthorMulti_select?: Array<QueryADatabaseReturnResultsPropertiesAuthorMulti_select>;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesAuthorFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesAuthorFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesAuthorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesAuthorMulti_select {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesAuthorMulti_selectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesAuthorMulti_selectFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesAuthorMulti_selectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesLink {
		id?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesLinkFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesLinkFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesName {
		id?: string | null;
		QueryADatabaseReturnResultsPropertiesNameTitle?: Array<QueryADatabaseReturnResultsPropertiesNameTitle>;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesNameFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesNameFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesNameTitle {
		annotations?: QueryADatabaseReturnResultsPropertiesNameTitleAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: QueryADatabaseReturnResultsPropertiesNameTitleText;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesNameTitleFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesNameTitleFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesNameTitleFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesNameTitleAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesNameTitleAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesNameTitleAnnotationsFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesNameTitleAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesNameTitleText {
		content?: string | null;
		link?: any;
	}
	export interface QueryADatabaseReturnResultsPropertiesNameTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesNameTitleTextFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesNameTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesPublisher {
		id?: string | null;
		select?: QueryADatabaseReturnResultsPropertiesPublisherSelect;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesPublisherFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesPublisherFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesPublisherFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesPublisherSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesPublisherSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesPublisherSelectFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesPublisherSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_ {
		date?: QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_Date;
		id?: string | null;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_FormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_FormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_Date {
		end?: any;
		start?: string | null;
		time_zone?: any;
	}
	export interface QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_DateFormProperties {
		end: FormControl<any | null | undefined>,
		start: FormControl<string | null | undefined>,
		time_zone: FormControl<any | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_DateFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsProperties_PublishingSlashRelease_Date_DateFormProperties>({
			end: new FormControl<any | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesRead {
		checkbox?: boolean | null;
		id?: string | null;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesReadFormProperties {
		checkbox: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesReadFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesReadFormProperties>({
			checkbox: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsProperties_Score_Slash5_ {
		id?: string | null;
		select?: QueryADatabaseReturnResultsProperties_Score_Slash5_Select;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsProperties_Score_Slash5_FormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsProperties_Score_Slash5_FormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsProperties_Score_Slash5_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsProperties_Score_Slash5_Select {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface QueryADatabaseReturnResultsProperties_Score_Slash5_SelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsProperties_Score_Slash5_SelectFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsProperties_Score_Slash5_SelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesStatus {
		id?: string | null;
		select?: QueryADatabaseReturnResultsPropertiesStatusSelect;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesStatusFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesStatusFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesStatusSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesStatusSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesStatusSelectFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesStatusSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesSummary {
		id?: string | null;
		rich_text?: Array<string>;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesSummaryFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesType {
		id?: string | null;
		select?: QueryADatabaseReturnResultsPropertiesTypeSelect;
		type?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesTypeFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesTypeFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryADatabaseReturnResultsPropertiesTypeSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface QueryADatabaseReturnResultsPropertiesTypeSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryADatabaseReturnResultsPropertiesTypeSelectFormGroup() {
		return new FormGroup<QueryADatabaseReturnResultsPropertiesTypeSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturn {
		archived?: boolean | null;
		cover?: any;
		created_by?: RetrieveAPageReturnCreated_by;
		created_time?: string | null;
		icon?: RetrieveAPageReturnIcon;
		id?: string | null;
		last_edited_by?: RetrieveAPageReturnLast_edited_by;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: RetrieveAPageReturnParent;
		properties?: RetrieveAPageReturnProperties;
		url?: string | null;
	}
	export interface RetrieveAPageReturnFormProperties {
		archived: FormControl<boolean | null | undefined>,
		cover: FormControl<any | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnFormGroup() {
		return new FormGroup<RetrieveAPageReturnFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			cover: new FormControl<any | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnCreated_by {
		id?: string | null;
		object?: string | null;
	}
	export interface RetrieveAPageReturnCreated_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnCreated_byFormGroup() {
		return new FormGroup<RetrieveAPageReturnCreated_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnIcon {
		emoji?: string | null;
		type?: string | null;
	}
	export interface RetrieveAPageReturnIconFormProperties {
		emoji: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnIconFormGroup() {
		return new FormGroup<RetrieveAPageReturnIconFormProperties>({
			emoji: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnLast_edited_by {
		id?: string | null;
		object?: string | null;
	}
	export interface RetrieveAPageReturnLast_edited_byFormProperties {
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnLast_edited_byFormGroup() {
		return new FormGroup<RetrieveAPageReturnLast_edited_byFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnParent {
		page_id?: string | null;
		type?: string | null;
	}
	export interface RetrieveAPageReturnParentFormProperties {
		page_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnParentFormGroup() {
		return new FormGroup<RetrieveAPageReturnParentFormProperties>({
			page_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnProperties {
		title?: RetrieveAPageReturnPropertiesTitle;
	}
	export interface RetrieveAPageReturnPropertiesFormProperties {
	}
	export function CreateRetrieveAPageReturnPropertiesFormGroup() {
		return new FormGroup<RetrieveAPageReturnPropertiesFormProperties>({
		});

	}

	export interface RetrieveAPageReturnPropertiesTitle {
		id?: string | null;
		RetrieveAPageReturnPropertiesTitleTitle?: Array<RetrieveAPageReturnPropertiesTitleTitle>;
		type?: string | null;
	}
	export interface RetrieveAPageReturnPropertiesTitleFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnPropertiesTitleFormGroup() {
		return new FormGroup<RetrieveAPageReturnPropertiesTitleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnPropertiesTitleTitle {
		annotations?: RetrieveAPageReturnPropertiesTitleTitleAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: RetrieveAPageReturnPropertiesTitleTitleText;
		type?: string | null;
	}
	export interface RetrieveAPageReturnPropertiesTitleTitleFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPageReturnPropertiesTitleTitleFormGroup() {
		return new FormGroup<RetrieveAPageReturnPropertiesTitleTitleFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnPropertiesTitleTitleAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface RetrieveAPageReturnPropertiesTitleTitleAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveAPageReturnPropertiesTitleTitleAnnotationsFormGroup() {
		return new FormGroup<RetrieveAPageReturnPropertiesTitleTitleAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPageReturnPropertiesTitleTitleText {
		content?: string | null;
		link?: any;
	}
	export interface RetrieveAPageReturnPropertiesTitleTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveAPageReturnPropertiesTitleTitleTextFormGroup() {
		return new FormGroup<RetrieveAPageReturnPropertiesTitleTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesPatchBody {
		properties?: UpdatePagePropertiesPatchBodyProperties;
	}
	export interface UpdatePagePropertiesPatchBodyFormProperties {
	}
	export function CreateUpdatePagePropertiesPatchBodyFormGroup() {
		return new FormGroup<UpdatePagePropertiesPatchBodyFormProperties>({
		});

	}

	export interface UpdatePagePropertiesPatchBodyProperties {
		Status?: UpdatePagePropertiesPatchBodyPropertiesStatus;
	}
	export interface UpdatePagePropertiesPatchBodyPropertiesFormProperties {
	}
	export function CreateUpdatePagePropertiesPatchBodyPropertiesFormGroup() {
		return new FormGroup<UpdatePagePropertiesPatchBodyPropertiesFormProperties>({
		});

	}

	export interface UpdatePagePropertiesPatchBodyPropertiesStatus {
		select?: UpdatePagePropertiesPatchBodyPropertiesStatusSelect;
	}
	export interface UpdatePagePropertiesPatchBodyPropertiesStatusFormProperties {
	}
	export function CreateUpdatePagePropertiesPatchBodyPropertiesStatusFormGroup() {
		return new FormGroup<UpdatePagePropertiesPatchBodyPropertiesStatusFormProperties>({
		});

	}

	export interface UpdatePagePropertiesPatchBodyPropertiesStatusSelect {
		name?: string | null;
	}
	export interface UpdatePagePropertiesPatchBodyPropertiesStatusSelectFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesPatchBodyPropertiesStatusSelectFormGroup() {
		return new FormGroup<UpdatePagePropertiesPatchBodyPropertiesStatusSelectFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturn {
		archived?: boolean | null;
		created_time?: string | null;
		id?: string | null;
		last_edited_time?: string | null;
		object?: string | null;
		parent?: UpdatePagePropertiesReturnParent;
		properties?: UpdatePagePropertiesReturnProperties;
	}
	export interface UpdatePagePropertiesReturnFormProperties {
		archived: FormControl<boolean | null | undefined>,
		created_time: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_edited_time: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_edited_time: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnParent {
		database_id?: string | null;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnParentFormProperties {
		database_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnParentFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnParentFormProperties>({
			database_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnProperties {
		Author?: UpdatePagePropertiesReturnPropertiesAuthor;
		Link?: UpdatePagePropertiesReturnPropertiesLink;
		Name?: UpdatePagePropertiesReturnPropertiesName;
		Publisher?: UpdatePagePropertiesReturnPropertiesPublisher;
		'Publishing/Release Date'?: UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_;
		Read?: UpdatePagePropertiesReturnPropertiesRead;
		'Score /5'?: UpdatePagePropertiesReturnProperties_Score_Slash5_;
		Status?: UpdatePagePropertiesReturnPropertiesStatus;
		Summary?: UpdatePagePropertiesReturnPropertiesSummary;
		Type?: UpdatePagePropertiesReturnPropertiesType;
	}
	export interface UpdatePagePropertiesReturnPropertiesFormProperties {
	}
	export function CreateUpdatePagePropertiesReturnPropertiesFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesFormProperties>({
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesAuthor {
		id?: string | null;
		UpdatePagePropertiesReturnPropertiesAuthorMulti_select?: Array<UpdatePagePropertiesReturnPropertiesAuthorMulti_select>;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesAuthorFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesAuthorFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesAuthorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesAuthorMulti_select {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesAuthorMulti_selectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesAuthorMulti_selectFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesAuthorMulti_selectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesLink {
		id?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesLinkFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesLinkFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesName {
		id?: string | null;
		UpdatePagePropertiesReturnPropertiesNameTitle?: Array<UpdatePagePropertiesReturnPropertiesNameTitle>;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesNameFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesNameFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesNameTitle {
		annotations?: UpdatePagePropertiesReturnPropertiesNameTitleAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: UpdatePagePropertiesReturnPropertiesNameTitleText;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesNameTitleFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesNameTitleFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesNameTitleFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesNameTitleAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesNameTitleAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesNameTitleAnnotationsFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesNameTitleAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesNameTitleText {
		content?: string | null;
		link?: any;
	}
	export interface UpdatePagePropertiesReturnPropertiesNameTitleTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesNameTitleTextFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesNameTitleTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesPublisher {
		id?: string | null;
		select?: UpdatePagePropertiesReturnPropertiesPublisherSelect;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesPublisherFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesPublisherFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesPublisherFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesPublisherSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesPublisherSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesPublisherSelectFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesPublisherSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_ {
		date?: UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_Date;
		id?: string | null;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_FormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_FormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_Date {
		end?: any;
		start?: string | null;
	}
	export interface UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_DateFormProperties {
		end: FormControl<any | null | undefined>,
		start: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_DateFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnProperties_PublishingSlashRelease_Date_DateFormProperties>({
			end: new FormControl<any | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesRead {
		checkbox?: boolean | null;
		id?: string | null;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesReadFormProperties {
		checkbox: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesReadFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesReadFormProperties>({
			checkbox: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnProperties_Score_Slash5_ {
		id?: string | null;
		select?: UpdatePagePropertiesReturnProperties_Score_Slash5_Select;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnProperties_Score_Slash5_FormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnProperties_Score_Slash5_FormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnProperties_Score_Slash5_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnProperties_Score_Slash5_Select {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdatePagePropertiesReturnProperties_Score_Slash5_SelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnProperties_Score_Slash5_SelectFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnProperties_Score_Slash5_SelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesStatus {
		id?: string | null;
		select?: UpdatePagePropertiesReturnPropertiesStatusSelect;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesStatusFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesStatusFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesStatusSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesStatusSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesStatusSelectFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesStatusSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesSummary {
		id?: string | null;
		UpdatePagePropertiesReturnPropertiesSummaryRich_text?: Array<UpdatePagePropertiesReturnPropertiesSummaryRich_text>;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesSummaryFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_text {
		annotations?: UpdatePagePropertiesReturnPropertiesSummaryRich_textAnnotations;
		href?: any;
		plain_text?: string | null;
		text?: UpdatePagePropertiesReturnPropertiesSummaryRich_textText;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_textFormProperties {
		href: FormControl<any | null | undefined>,
		plain_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesSummaryRich_textFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesSummaryRich_textFormProperties>({
			href: new FormControl<any | null | undefined>(undefined),
			plain_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_textAnnotations {
		bold?: boolean | null;
		code?: boolean | null;
		color?: string | null;
		italic?: boolean | null;
		strikethrough?: boolean | null;
		underline?: boolean | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_textAnnotationsFormProperties {
		bold: FormControl<boolean | null | undefined>,
		code: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		italic: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesSummaryRich_textAnnotationsFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesSummaryRich_textAnnotationsFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_textText {
		content?: string | null;
		link?: any;
	}
	export interface UpdatePagePropertiesReturnPropertiesSummaryRich_textTextFormProperties {
		content: FormControl<string | null | undefined>,
		link: FormControl<any | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesSummaryRich_textTextFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesSummaryRich_textTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesType {
		id?: string | null;
		select?: UpdatePagePropertiesReturnPropertiesTypeSelect;
		type?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesTypeFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesTypeFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePagePropertiesReturnPropertiesTypeSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface UpdatePagePropertiesReturnPropertiesTypeSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesReturnPropertiesTypeSelectFormGroup() {
		return new FormGroup<UpdatePagePropertiesReturnPropertiesTypeSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPagePropertyItemReturn {
		object?: string | null;
		select?: RetrieveAPagePropertyItemReturnSelect;
		type?: string | null;
	}
	export interface RetrieveAPagePropertyItemReturnFormProperties {
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPagePropertyItemReturnFormGroup() {
		return new FormGroup<RetrieveAPagePropertyItemReturnFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAPagePropertyItemReturnSelect {
		color?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface RetrieveAPagePropertyItemReturnSelectFormProperties {
		color: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAPagePropertyItemReturnSelectFormGroup() {
		return new FormGroup<RetrieveAPagePropertyItemReturnSelectFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAUserReturn {
		avatar_url?: any;
		id?: string | null;
		name?: string | null;
		object?: string | null;
		person?: RetrieveAUserReturnPerson;
		type?: string | null;
	}
	export interface RetrieveAUserReturnFormProperties {
		avatar_url: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAUserReturnFormGroup() {
		return new FormGroup<RetrieveAUserReturnFormProperties>({
			avatar_url: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveAUserReturnPerson {
		email?: string | null;
	}
	export interface RetrieveAUserReturnPersonFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveAUserReturnPersonFormGroup() {
		return new FormGroup<RetrieveAUserReturnPersonFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

}

