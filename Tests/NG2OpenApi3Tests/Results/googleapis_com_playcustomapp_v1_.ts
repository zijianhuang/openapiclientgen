import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a custom app. */
	export interface CustomApp {

		/** Default listing language in BCP 47 format. */
		languageCode?: string | null;

		/** Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account. */
		organizations?: Array<Organization>;

		/** Output only. Package name of the created Android app. Only present in the API response. */
		packageName?: string | null;

		/** Title for the Android app. */
		title?: string | null;
	}

	/** This resource represents a custom app. */
	export interface CustomAppFormProperties {

		/** Default listing language in BCP 47 format. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Package name of the created Android app. Only present in the API response. */
		packageName: FormControl<string | null | undefined>,

		/** Title for the Android app. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCustomAppFormGroup() {
		return new FormGroup<CustomAppFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an organization that can access a custom app. */
	export interface Organization {

		/** Required. ID of the organization. */
		organizationId?: string | null;

		/** Optional. A human-readable name of the organization, to help recognize the organization. */
		organizationName?: string | null;
	}

	/** Represents an organization that can access a custom app. */
	export interface OrganizationFormProperties {

		/** Required. ID of the organization. */
		organizationId: FormControl<string | null | undefined>,

		/** Optional. A human-readable name of the organization, to help recognize the organization. */
		organizationName: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			organizationId: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

