import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Flexv2web_channel {

		/**
		 * The unique string representing the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) created.
		 * Min length: 34
		 * Max length: 34
		 */
		conversation_sid?: string | null;

		/** The unique string representing the User created and should be authorized to participate in the Conversation. For more details, see [User Identity & Access Tokens](https://www.twilio.com/docs/conversations/identity). */
		identity?: string | null;
	}
	export interface Flexv2web_channelFormProperties {

		/**
		 * The unique string representing the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) created.
		 * Min length: 34
		 * Max length: 34
		 */
		conversation_sid: FormControl<string | null | undefined>,

		/** The unique string representing the User created and should be authorized to participate in the Conversation. For more details, see [User Identity & Access Tokens](https://www.twilio.com/docs/conversations/identity). */
		identity: FormControl<string | null | undefined>,
	}
	export function CreateFlexv2web_channelFormGroup() {
		return new FormGroup<Flexv2web_channelFormProperties>({
			conversation_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

