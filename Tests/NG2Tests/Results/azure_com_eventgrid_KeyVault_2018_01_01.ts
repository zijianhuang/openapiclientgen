import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for an CertificateExpired event. */
	export interface KeyVaultCertificateExpiredEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an CertificateExpired event. */
	export interface KeyVaultCertificateExpiredEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultCertificateExpiredEventDataFormGroup() {
		return new FormGroup<KeyVaultCertificateExpiredEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an CertificateNearExpiry event. */
	export interface KeyVaultCertificateNearExpiryEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an CertificateNearExpiry event. */
	export interface KeyVaultCertificateNearExpiryEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultCertificateNearExpiryEventDataFormGroup() {
		return new FormGroup<KeyVaultCertificateNearExpiryEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an CertificateNewVersionCreated event. */
	export interface KeyVaultCertificateNewVersionCreatedEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an CertificateNewVersionCreated event. */
	export interface KeyVaultCertificateNewVersionCreatedEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultCertificateNewVersionCreatedEventDataFormGroup() {
		return new FormGroup<KeyVaultCertificateNewVersionCreatedEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an KeyExpired event. */
	export interface KeyVaultKeyExpiredEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an KeyExpired event. */
	export interface KeyVaultKeyExpiredEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyExpiredEventDataFormGroup() {
		return new FormGroup<KeyVaultKeyExpiredEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an KeyNearExpiry event. */
	export interface KeyVaultKeyNearExpiryEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an KeyNearExpiry event. */
	export interface KeyVaultKeyNearExpiryEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyNearExpiryEventDataFormGroup() {
		return new FormGroup<KeyVaultKeyNearExpiryEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an KeyNewVersionCreated event. */
	export interface KeyVaultKeyNewVersionCreatedEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an KeyNewVersionCreated event. */
	export interface KeyVaultKeyNewVersionCreatedEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyNewVersionCreatedEventDataFormGroup() {
		return new FormGroup<KeyVaultKeyNewVersionCreatedEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an SecretExpired event. */
	export interface KeyVaultSecretExpiredEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an SecretExpired event. */
	export interface KeyVaultSecretExpiredEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultSecretExpiredEventDataFormGroup() {
		return new FormGroup<KeyVaultSecretExpiredEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an SecretNearExpiry event. */
	export interface KeyVaultSecretNearExpiryEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an SecretNearExpiry event. */
	export interface KeyVaultSecretNearExpiryEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultSecretNearExpiryEventDataFormGroup() {
		return new FormGroup<KeyVaultSecretNearExpiryEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an SecretNewVersionCreated event. */
	export interface KeyVaultSecretNewVersionCreatedEventData {

		/** The expiration date of the object that triggered this event */
		exp?: number | null;

		/** The id of the object that triggered this event. */
		id?: string | null;

		/** Not before date of the object that triggered this event */
		nbf?: number | null;

		/** The name of the object that triggered this event */
		objectName?: string | null;

		/** The type of the object that triggered this event */
		objectType?: string | null;

		/** Key vault name of the object that triggered this event. */
		vaultName?: string | null;

		/** The version of the object that triggered this event */
		version?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an SecretNewVersionCreated event. */
	export interface KeyVaultSecretNewVersionCreatedEventDataFormProperties {

		/** The expiration date of the object that triggered this event */
		exp: FormControl<number | null | undefined>,

		/** The id of the object that triggered this event. */
		id: FormControl<string | null | undefined>,

		/** Not before date of the object that triggered this event */
		nbf: FormControl<number | null | undefined>,

		/** The name of the object that triggered this event */
		objectName: FormControl<string | null | undefined>,

		/** The type of the object that triggered this event */
		objectType: FormControl<string | null | undefined>,

		/** Key vault name of the object that triggered this event. */
		vaultName: FormControl<string | null | undefined>,

		/** The version of the object that triggered this event */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultSecretNewVersionCreatedEventDataFormGroup() {
		return new FormGroup<KeyVaultSecretNewVersionCreatedEventDataFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<number | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

