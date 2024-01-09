import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteObjectResponse {
	}
	export interface DeleteObjectResponseFormProperties {
	}
	export function CreateDeleteObjectResponseFormGroup() {
		return new FormGroup<DeleteObjectResponseFormProperties>({
		});

	}

	export interface ContainerNotFoundException {
	}
	export interface ContainerNotFoundExceptionFormProperties {
	}
	export function CreateContainerNotFoundExceptionFormGroup() {
		return new FormGroup<ContainerNotFoundExceptionFormProperties>({
		});

	}

	export interface ObjectNotFoundException {
	}
	export interface ObjectNotFoundExceptionFormProperties {
	}
	export function CreateObjectNotFoundExceptionFormGroup() {
		return new FormGroup<ObjectNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface DescribeObjectResponse {
	}
	export interface DescribeObjectResponseFormProperties {
	}
	export function CreateDescribeObjectResponseFormGroup() {
		return new FormGroup<DescribeObjectResponseFormProperties>({
		});

	}

	export interface GetObjectResponse {
		Body?: string | null;
		StatusCode?: number | null;
	}
	export interface GetObjectResponseFormProperties {
		Body: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateGetObjectResponseFormGroup() {
		return new FormGroup<GetObjectResponseFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RequestedRangeNotSatisfiableException {
	}
	export interface RequestedRangeNotSatisfiableExceptionFormProperties {
	}
	export function CreateRequestedRangeNotSatisfiableExceptionFormGroup() {
		return new FormGroup<RequestedRangeNotSatisfiableExceptionFormProperties>({
		});

	}

	export interface ListItemsResponse {
		Items?: Array<Item>;
		NextToken?: string | null;
	}
	export interface ListItemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListItemsResponseFormGroup() {
		return new FormGroup<ListItemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metadata entry for a folder or object. */
	export interface Item {
		Name?: string | null;
		Type?: ItemType | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ETag?: string | null;
		LastModified?: Date | null;
		ContentType?: string | null;

		/** Minimum: 0 */
		ContentLength?: number | null;
	}

	/** A metadata entry for a folder or object. */
	export interface ItemFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ItemType | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ETag: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		ContentType: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		ContentLength: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ItemType | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[0-9A-Fa-f]+')]),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			ContentLength: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum ItemType { OBJECT = 0, FOLDER = 1 }

	export interface PutObjectResponse {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		ContentSHA256?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ETag?: string | null;

		/**
		 * Max length: 16
		 * Min length: 1
		 */
		StorageClass?: PutObjectResponseStorageClass | null;
	}
	export interface PutObjectResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		ContentSHA256: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ETag: FormControl<string | null | undefined>,

		/**
		 * Max length: 16
		 * Min length: 1
		 */
		StorageClass: FormControl<PutObjectResponseStorageClass | null | undefined>,
	}
	export function CreatePutObjectResponseFormGroup() {
		return new FormGroup<PutObjectResponseFormProperties>({
			ContentSHA256: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(64), Validators.pattern('[0-9A-Fa-f]{64}')]),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[0-9A-Fa-f]+')]),
			StorageClass: new FormControl<PutObjectResponseStorageClass | null | undefined>(undefined, [Validators.maxLength(16), Validators.minLength(1)]),
		});

	}

	export enum PutObjectResponseStorageClass { TEMPORAL = 0 }

	export interface DeleteObjectRequest {
	}
	export interface DeleteObjectRequestFormProperties {
	}
	export function CreateDeleteObjectRequestFormGroup() {
		return new FormGroup<DeleteObjectRequestFormProperties>({
		});

	}

	export interface DescribeObjectRequest {
	}
	export interface DescribeObjectRequestFormProperties {
	}
	export function CreateDescribeObjectRequestFormGroup() {
		return new FormGroup<DescribeObjectRequestFormProperties>({
		});

	}

	export interface GetObjectRequest {
	}
	export interface GetObjectRequestFormProperties {
	}
	export function CreateGetObjectRequestFormGroup() {
		return new FormGroup<GetObjectRequestFormProperties>({
		});

	}

	export interface ListItemsRequest {
	}
	export interface ListItemsRequestFormProperties {
	}
	export function CreateListItemsRequestFormGroup() {
		return new FormGroup<ListItemsRequestFormProperties>({
		});

	}

	export enum StorageClass { TEMPORAL = 0 }

	export enum UploadAvailability { STANDARD = 0, STREAMING = 1 }

	export interface PutObjectRequest {

		/** Required */
		Body: string;
	}
	export interface PutObjectRequestFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreatePutObjectRequestFormGroup() {
		return new FormGroup<PutObjectRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an object at the specified path.
		 * Delete {Path}
		 * @param {string} Path The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
		 * @return {DeleteObjectResponse} Success
		 */
		DeleteObject(Path: string): Observable<DeleteObjectResponse> {
			return this.http.delete<DeleteObjectResponse>(this.baseUri + (Path == null ? '' : encodeURIComponent(Path)) + '', {});
		}

		/**
		 * Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
		 * Get {Path}
		 * @param {string} Path <p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>
		 * @return {GetObjectResponse} Success
		 */
		GetObject(Path: string): Observable<GetObjectResponse> {
			return this.http.get<GetObjectResponse>(this.baseUri + (Path == null ? '' : encodeURIComponent(Path)) + '', {});
		}

		/**
		 * Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
		 * Put {Path}
		 * @param {string} Path <p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>
		 * @return {PutObjectResponse} Success
		 */
		PutObject(Path: string, requestBody: PutObjectPutBody): Observable<PutObjectResponse> {
			return this.http.put<PutObjectResponse>(this.baseUri + (Path == null ? '' : encodeURIComponent(Path)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of metadata entries about folders and objects in the specified folder.
		 * Get 
		 * @param {string} Path The path in the container from which to retrieve items. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
		 * @param {number} MaxResults <p>The maximum number of results to return per API request. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. Although 2,000 items match your request, the service returns no more than the first 500 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) The service might return fewer results than the <code>MaxResults</code> value.</p> <p>If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 1,000 results per page.</p>
		 * @param {string} NextToken <p>The token that identifies which batch of results that you want to see. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. The service returns the first batch of results (up to 500) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListItems</code> request a second time and specify the <code>NextToken</code> value.</p> <p>Tokens expire after 15 minutes.</p>
		 * @return {ListItemsResponse} Success
		 */
		ListItems(Path: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListItemsResponse> {
			return this.http.get<ListItemsResponse>(this.baseUri + '?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}
	}

	export interface PutObjectPutBody {

		/**
		 * The bytes to be stored.
		 * Required
		 */
		Body: string;
	}
	export interface PutObjectPutBodyFormProperties {

		/**
		 * The bytes to be stored.
		 * Required
		 */
		Body: FormControl<string | null | undefined>,
	}
	export function CreatePutObjectPutBodyFormGroup() {
		return new FormGroup<PutObjectPutBodyFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

