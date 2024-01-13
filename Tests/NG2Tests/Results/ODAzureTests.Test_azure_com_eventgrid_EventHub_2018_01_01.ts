import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for an Microsoft.EventHub.CaptureFileCreated event. */
	export interface EventHubCaptureFileCreatedEventData {

		/** The number of events in the file. */
		eventCount?: number | null;

		/** The file type of the capture file. */
		fileType?: string | null;

		/** The path to the capture file. */
		fileurl?: string | null;

		/** The first time from the queue. */
		firstEnqueueTime?: Date | null;

		/** The smallest sequence number from the queue. */
		firstSequenceNumber?: number | null;

		/** The last time from the queue. */
		lastEnqueueTime?: Date | null;

		/** The last sequence number from the queue. */
		lastSequenceNumber?: number | null;

		/** The shard ID. */
		partitionId?: string | null;

		/** The file size. */
		sizeInBytes?: number | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.EventHub.CaptureFileCreated event. */
	export interface EventHubCaptureFileCreatedEventDataFormProperties {

		/** The number of events in the file. */
		eventCount: FormControl<number | null | undefined>,

		/** The file type of the capture file. */
		fileType: FormControl<string | null | undefined>,

		/** The path to the capture file. */
		fileurl: FormControl<string | null | undefined>,

		/** The first time from the queue. */
		firstEnqueueTime: FormControl<Date | null | undefined>,

		/** The smallest sequence number from the queue. */
		firstSequenceNumber: FormControl<number | null | undefined>,

		/** The last time from the queue. */
		lastEnqueueTime: FormControl<Date | null | undefined>,

		/** The last sequence number from the queue. */
		lastSequenceNumber: FormControl<number | null | undefined>,

		/** The shard ID. */
		partitionId: FormControl<string | null | undefined>,

		/** The file size. */
		sizeInBytes: FormControl<number | null | undefined>,
	}
	export function CreateEventHubCaptureFileCreatedEventDataFormGroup() {
		return new FormGroup<EventHubCaptureFileCreatedEventDataFormProperties>({
			eventCount: new FormControl<number | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			fileurl: new FormControl<string | null | undefined>(undefined),
			firstEnqueueTime: new FormControl<Date | null | undefined>(undefined),
			firstSequenceNumber: new FormControl<number | null | undefined>(undefined),
			lastEnqueueTime: new FormControl<Date | null | undefined>(undefined),
			lastSequenceNumber: new FormControl<number | null | undefined>(undefined),
			partitionId: new FormControl<string | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

