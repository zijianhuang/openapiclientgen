import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ServiceBus.ActiveMessagesAvailableWithNoListeners event. */
	export interface ServiceBusActiveMessagesAvailableWithNoListenersEventData {

		/** The entity type of the Microsoft.ServiceBus resource. Could be one of 'queue' or 'subscriber'. */
		entityType?: string | null;

		/** The namespace name of the Microsoft.ServiceBus resource. */
		namespaceName?: string | null;

		/** The name of the Microsoft.ServiceBus queue. If the entity type is of type 'subscriber', then this value will be null. */
		queueName?: string | null;

		/** The endpoint of the Microsoft.ServiceBus resource. */
		requestUri?: string | null;

		/** The name of the Microsoft.ServiceBus topic's subscription. If the entity type is of type 'queue', then this value will be null. */
		subscriptionName?: string | null;

		/** The name of the Microsoft.ServiceBus topic. If the entity type is of type 'queue', then this value will be null. */
		topicName?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ServiceBus.ActiveMessagesAvailableWithNoListeners event. */
	export interface ServiceBusActiveMessagesAvailableWithNoListenersEventDataFormProperties {

		/** The entity type of the Microsoft.ServiceBus resource. Could be one of 'queue' or 'subscriber'. */
		entityType: FormControl<string | null | undefined>,

		/** The namespace name of the Microsoft.ServiceBus resource. */
		namespaceName: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus queue. If the entity type is of type 'subscriber', then this value will be null. */
		queueName: FormControl<string | null | undefined>,

		/** The endpoint of the Microsoft.ServiceBus resource. */
		requestUri: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus topic's subscription. If the entity type is of type 'queue', then this value will be null. */
		subscriptionName: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus topic. If the entity type is of type 'queue', then this value will be null. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusActiveMessagesAvailableWithNoListenersEventDataFormGroup() {
		return new FormGroup<ServiceBusActiveMessagesAvailableWithNoListenersEventDataFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
			requestUri: new FormControl<string | null | undefined>(undefined),
			subscriptionName: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.ServiceBus.DeadletterMessagesAvailableWithNoListenersEvent event. */
	export interface ServiceBusDeadletterMessagesAvailableWithNoListenersEventData {

		/** The entity type of the Microsoft.ServiceBus resource. Could be one of 'queue' or 'subscriber'. */
		entityType?: string | null;

		/** The namespace name of the Microsoft.ServiceBus resource. */
		namespaceName?: string | null;

		/** The name of the Microsoft.ServiceBus queue. If the entity type is of type 'subscriber', then this value will be null. */
		queueName?: string | null;

		/** The endpoint of the Microsoft.ServiceBus resource. */
		requestUri?: string | null;

		/** The name of the Microsoft.ServiceBus topic's subscription. If the entity type is of type 'queue', then this value will be null. */
		subscriptionName?: string | null;

		/** The name of the Microsoft.ServiceBus topic. If the entity type is of type 'queue', then this value will be null. */
		topicName?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.ServiceBus.DeadletterMessagesAvailableWithNoListenersEvent event. */
	export interface ServiceBusDeadletterMessagesAvailableWithNoListenersEventDataFormProperties {

		/** The entity type of the Microsoft.ServiceBus resource. Could be one of 'queue' or 'subscriber'. */
		entityType: FormControl<string | null | undefined>,

		/** The namespace name of the Microsoft.ServiceBus resource. */
		namespaceName: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus queue. If the entity type is of type 'subscriber', then this value will be null. */
		queueName: FormControl<string | null | undefined>,

		/** The endpoint of the Microsoft.ServiceBus resource. */
		requestUri: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus topic's subscription. If the entity type is of type 'queue', then this value will be null. */
		subscriptionName: FormControl<string | null | undefined>,

		/** The name of the Microsoft.ServiceBus topic. If the entity type is of type 'queue', then this value will be null. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusDeadletterMessagesAvailableWithNoListenersEventDataFormGroup() {
		return new FormGroup<ServiceBusDeadletterMessagesAvailableWithNoListenersEventDataFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
			requestUri: new FormControl<string | null | undefined>(undefined),
			subscriptionName: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

