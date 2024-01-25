import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The content of the event request message. */
	export interface ContainerRegistryArtifactEventData {

		/** The action that encompasses the provided event. */
		action?: string | null;

		/** The event ID. */
		id?: string | null;

		/** The target of the event. */
		target?: ContainerRegistryArtifactEventTarget;

		/** The time at which the event occurred. */
		timestamp?: Date | null;
	}

	/** The content of the event request message. */
	export interface ContainerRegistryArtifactEventDataFormProperties {

		/** The action that encompasses the provided event. */
		action: FormControl<string | null | undefined>,

		/** The event ID. */
		id: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateContainerRegistryArtifactEventDataFormGroup() {
		return new FormGroup<ContainerRegistryArtifactEventDataFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The target of the event. */
	export interface ContainerRegistryArtifactEventTarget {

		/** The digest of the artifact. */
		digest?: string | null;

		/** The MIME type of the artifact. */
		mediaType?: string | null;

		/** The name of the artifact. */
		name?: string | null;

		/** The repository name of the artifact. */
		repository?: string | null;

		/** The size in bytes of the artifact. */
		size?: number | null;

		/** The tag of the artifact. */
		tag?: string | null;

		/** The version of the artifact. */
		version?: string | null;
	}

	/** The target of the event. */
	export interface ContainerRegistryArtifactEventTargetFormProperties {

		/** The digest of the artifact. */
		digest: FormControl<string | null | undefined>,

		/** The MIME type of the artifact. */
		mediaType: FormControl<string | null | undefined>,

		/** The name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** The repository name of the artifact. */
		repository: FormControl<string | null | undefined>,

		/** The size in bytes of the artifact. */
		size: FormControl<number | null | undefined>,

		/** The tag of the artifact. */
		tag: FormControl<string | null | undefined>,

		/** The version of the artifact. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryArtifactEventTargetFormGroup() {
		return new FormGroup<ContainerRegistryArtifactEventTargetFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartDeleted event. */
	export interface ContainerRegistryChartDeletedEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartDeleted event. */
	export interface ContainerRegistryChartDeletedEventDataFormProperties {
	}
	export function CreateContainerRegistryChartDeletedEventDataFormGroup() {
		return new FormGroup<ContainerRegistryChartDeletedEventDataFormProperties>({
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartPushed event. */
	export interface ContainerRegistryChartPushedEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartPushed event. */
	export interface ContainerRegistryChartPushedEventDataFormProperties {
	}
	export function CreateContainerRegistryChartPushedEventDataFormGroup() {
		return new FormGroup<ContainerRegistryChartPushedEventDataFormProperties>({
		});

	}


	/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
	export interface ContainerRegistryEventActor {

		/** The subject or username associated with the request context that generated the event. */
		name?: string | null;
	}

	/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
	export interface ContainerRegistryEventActorFormProperties {

		/** The subject or username associated with the request context that generated the event. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryEventActorFormGroup() {
		return new FormGroup<ContainerRegistryEventActorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content of the event request message. */
	export interface ContainerRegistryEventData {

		/** The action that encompasses the provided event. */
		action?: string | null;

		/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
		actor?: ContainerRegistryEventActor;

		/** The event ID. */
		id?: string | null;

		/** The request that generated the event. */
		request?: ContainerRegistryEventRequest;

		/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
		source?: ContainerRegistryEventSource;

		/** The target of the event. */
		target?: ContainerRegistryEventTarget;

		/** The time at which the event occurred. */
		timestamp?: Date | null;
	}

	/** The content of the event request message. */
	export interface ContainerRegistryEventDataFormProperties {

		/** The action that encompasses the provided event. */
		action: FormControl<string | null | undefined>,

		/** The event ID. */
		id: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateContainerRegistryEventDataFormGroup() {
		return new FormGroup<ContainerRegistryEventDataFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The request that generated the event. */
	export interface ContainerRegistryEventRequest {

		/** The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request. */
		addr?: string | null;

		/** The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests. */
		host?: string | null;

		/** The ID of the request that initiated the event. */
		id?: string | null;

		/** The request method that generated the event. */
		method?: string | null;

		/** The user agent header of the request. */
		useragent?: string | null;
	}

	/** The request that generated the event. */
	export interface ContainerRegistryEventRequestFormProperties {

		/** The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request. */
		addr: FormControl<string | null | undefined>,

		/** The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests. */
		host: FormControl<string | null | undefined>,

		/** The ID of the request that initiated the event. */
		id: FormControl<string | null | undefined>,

		/** The request method that generated the event. */
		method: FormControl<string | null | undefined>,

		/** The user agent header of the request. */
		useragent: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryEventRequestFormGroup() {
		return new FormGroup<ContainerRegistryEventRequestFormProperties>({
			addr: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			useragent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
	export interface ContainerRegistryEventSource {

		/** The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port. */
		addr?: string | null;

		/** The running instance of an application. Changes after each restart. */
		instanceID?: string | null;
	}

	/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
	export interface ContainerRegistryEventSourceFormProperties {

		/** The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port. */
		addr: FormControl<string | null | undefined>,

		/** The running instance of an application. Changes after each restart. */
		instanceID: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryEventSourceFormGroup() {
		return new FormGroup<ContainerRegistryEventSourceFormProperties>({
			addr: new FormControl<string | null | undefined>(undefined),
			instanceID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The target of the event. */
	export interface ContainerRegistryEventTarget {

		/** The digest of the content, as defined by the Registry V2 HTTP API Specification. */
		digest?: string | null;

		/** The number of bytes of the content. Same as Size field. */
		length?: number | null;

		/** The MIME type of the referenced object. */
		mediaType?: string | null;

		/** The repository name. */
		repository?: string | null;

		/** The number of bytes of the content. Same as Length field. */
		size?: number | null;

		/** The tag name. */
		tag?: string | null;

		/** The direct URL to the content. */
		url?: string | null;
	}

	/** The target of the event. */
	export interface ContainerRegistryEventTargetFormProperties {

		/** The digest of the content, as defined by the Registry V2 HTTP API Specification. */
		digest: FormControl<string | null | undefined>,

		/** The number of bytes of the content. Same as Size field. */
		length: FormControl<number | null | undefined>,

		/** The MIME type of the referenced object. */
		mediaType: FormControl<string | null | undefined>,

		/** The repository name. */
		repository: FormControl<string | null | undefined>,

		/** The number of bytes of the content. Same as Length field. */
		size: FormControl<number | null | undefined>,

		/** The tag name. */
		tag: FormControl<string | null | undefined>,

		/** The direct URL to the content. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryEventTargetFormGroup() {
		return new FormGroup<ContainerRegistryEventTargetFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImageDeleted event. */
	export interface ContainerRegistryImageDeletedEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImageDeleted event. */
	export interface ContainerRegistryImageDeletedEventDataFormProperties {
	}
	export function CreateContainerRegistryImageDeletedEventDataFormGroup() {
		return new FormGroup<ContainerRegistryImageDeletedEventDataFormProperties>({
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImagePushed event. */
	export interface ContainerRegistryImagePushedEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImagePushed event. */
	export interface ContainerRegistryImagePushedEventDataFormProperties {
	}
	export function CreateContainerRegistryImagePushedEventDataFormGroup() {
		return new FormGroup<ContainerRegistryImagePushedEventDataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

