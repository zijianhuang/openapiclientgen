import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GetMediaOutput {
		Payload?: string | null;
	}

	export enum StartSelectorType { FRAGMENT_NUMBER = 0, SERVER_TIMESTAMP = 1, PRODUCER_TIMESTAMP = 2, NOW = 3, EARLIEST = 4, CONTINUATION_TOKEN = 5 }

	export interface ResourceNotFoundException {
	}

	export interface NotAuthorizedException {
	}

	export interface InvalidEndpointException {
	}

	export interface ClientLimitExceededException {
	}

	export interface ConnectionLimitExceededException {
	}

	export interface InvalidArgumentException {
	}


	/** <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul> */
	export interface StartSelector {
		StartSelectorType: StartSelectorType;
		AfterFragmentNumber?: string | null;
		StartTimestamp?: Date | null;
		ContinuationToken?: string | null;
	}

	export interface GetMediaInput {
		StreamName?: string | null;
		StreamARN?: string | null;

		/**
		 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
		 * Required
		 */
		StartSelector: StartSelector;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMedia</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The <code>GetMedia</code> API returns a stream of these chunks starting from the chunk that you specify in the request. </p> <p>The following limits apply when using the <code>GetMedia</code> API:</p> <ul> <li> <p>A client can call <code>GetMedia</code> up to five times per second per stream. </p> </li> <li> <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a <code>GetMedia</code> session. </p> </li> </ul> <note> <p>If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </note>
		 * Post getMedia
		 * @return {GetMediaOutput} Success
		 */
		GetMedia(requestBody: GetMediaPostBody): Observable<GetMediaOutput> {
			return this.http.post<GetMediaOutput>(this.baseUri + 'getMedia', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetMediaPostBody {

		/**
		 * The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
		 * Required
		 */
		StartSelector: GetMediaPostBodyStartSelector;
	}

	export interface GetMediaPostBodyStartSelector {
		StartSelectorType?: StartSelectorType | null;
		AfterFragmentNumber?: string | null;
		StartTimestamp?: Date | null;
		ContinuationToken?: string | null;
	}

}

