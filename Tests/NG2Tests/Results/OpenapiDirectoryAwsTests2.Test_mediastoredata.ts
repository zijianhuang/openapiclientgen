import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DeleteObjectResponse {
	}

	export interface ContainerNotFoundException {
	}

	export interface ObjectNotFoundException {
	}

	export interface InternalServerError {
	}

	export interface DescribeObjectResponse {
	}

	export interface GetObjectResponse {
		Body?: string;
		StatusCode?: number;
	}

	export interface RequestedRangeNotSatisfiableException {
	}

	export interface ListItemsResponse {
		Items?: Array<Item>;
		NextToken?: string;
	}


	/** A metadata entry for a folder or object. */
	export interface Item {
		Name?: string;
		Type?: ItemType;
		ETag?: string;
		LastModified?: Date;
		ContentType?: string;
		ContentLength?: number;
	}

	export enum ItemType { OBJECT = 0, FOLDER = 1 }

	export interface PutObjectResponse {
		ContentSHA256?: string;
		ETag?: string;
		StorageClass?: PutObjectResponseStorageClass;
	}

	export enum PutObjectResponseStorageClass { TEMPORAL = 0 }

	export interface DeleteObjectRequest {
	}

	export interface DescribeObjectRequest {
	}

	export interface GetObjectRequest {
	}

	export interface ListItemsRequest {
	}

	export enum StorageClass { TEMPORAL = 0 }

	export enum UploadAvailability { STANDARD = 0, STREAMING = 1 }

	export interface PutObjectRequest {
		Body: string;
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
		ListItems(Path: string, MaxResults: number, NextToken: string): Observable<ListItemsResponse> {
			return this.http.get<ListItemsResponse>(this.baseUri + '?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}
	}

	export interface PutObjectPutBody {

		/** The bytes to be stored. */
		Body: string;
	}

}

