import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes an android app asset. */
	export interface AndroidAppAsset {

		/** Describes an X509 certificate. */
		certificate?: CertificateInfo;

		/**
		 * Android App assets are naturally identified by their Java package name.
		 * For example, the Google Maps app uses the package name
		 * `com.google.android.apps.maps`.
		 * REQUIRED
		 */
		packageName?: string | null;
	}

	/** Describes an android app asset. */
	export interface AndroidAppAssetFormProperties {

		/**
		 * Android App assets are naturally identified by their Java package name.
		 * For example, the Google Maps app uses the package name
		 * `com.google.android.apps.maps`.
		 * REQUIRED
		 */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateAndroidAppAssetFormGroup() {
		return new FormGroup<AndroidAppAssetFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an X509 certificate. */
	export interface CertificateInfo {

		/**
		 * The uppercase SHA-265 fingerprint of the certificate.  From the PEM
		 * certificate, it can be acquired like this:
		 * $ keytool -printcert -file $CERTFILE | grep SHA256:
		 * SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \
		 * 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * or like this:
		 * $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256
		 * SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \
		 * 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * In this example, the contents of this field would be `14:6D:E9:83:C5:73:
		 * 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:
		 * 44:E5`.
		 * If these tools are not available to you, you can convert the PEM
		 * certificate into the DER format, compute the SHA-256 hash of that string
		 * and represent the result as a hexstring (that is, uppercase hexadecimal
		 * representations of each octet, separated by colons).
		 */
		sha256Fingerprint?: string | null;
	}

	/** Describes an X509 certificate. */
	export interface CertificateInfoFormProperties {

		/**
		 * The uppercase SHA-265 fingerprint of the certificate.  From the PEM
		 * certificate, it can be acquired like this:
		 * $ keytool -printcert -file $CERTFILE | grep SHA256:
		 * SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \
		 * 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * or like this:
		 * $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256
		 * SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \
		 * 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * In this example, the contents of this field would be `14:6D:E9:83:C5:73:
		 * 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:
		 * 44:E5`.
		 * If these tools are not available to you, you can convert the PEM
		 * certificate into the DER format, compute the SHA-256 hash of that string
		 * and represent the result as a hexstring (that is, uppercase hexadecimal
		 * representations of each octet, separated by colons).
		 */
		sha256Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificateInfoFormGroup() {
		return new FormGroup<CertificateInfoFormProperties>({
			sha256Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Uniquely identifies an asset.
	 * A digital asset is an identifiable and addressable online entity that
	 * typically provides some service or content.  Examples of assets are websites,
	 * Android apps, Twitter feeds, and Plus Pages.
	 */
	export interface Asset {

		/** Describes an android app asset. */
		androidApp?: AndroidAppAsset;

		/** Describes a web asset. */
		web?: WebAsset;
	}

	/**
	 * Uniquely identifies an asset.
	 * A digital asset is an identifiable and addressable online entity that
	 * typically provides some service or content.  Examples of assets are websites,
	 * Android apps, Twitter feeds, and Plus Pages.
	 */
	export interface AssetFormProperties {
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
		});

	}


	/** Describes a web asset. */
	export interface WebAsset {

		/**
		 * Web assets are identified by a URL that contains only the scheme, hostname
		 * and port parts.  The format is
		 * http[s]://<hostname>[:<port>]
		 * Hostnames must be fully qualified: they must end in a single period
		 * ("`.`").
		 * Only the schemes "http" and "https" are currently allowed.
		 * Port numbers are given as a decimal number, and they must be omitted if the
		 * standard port numbers are used: 80 for http and 443 for https.
		 * We call this limited URL the "site".  All URLs that share the same scheme,
		 * hostname and port are considered to be a part of the site and thus belong
		 * to the web asset.
		 * Example: the asset with the site `https://www.google.com` contains all
		 * these URLs:
		 * *   `https://www.google.com/`
		 * *   `https://www.google.com:443/`
		 * *   `https://www.google.com/foo`
		 * *   `https://www.google.com/foo?bar`
		 * *   `https://www.google.com/foo#bar`
		 * *   `https://user@password:www.google.com/`
		 * But it does not contain these URLs:
		 * *   `http://www.google.com/`       (wrong scheme)
		 * *   `https://google.com/`          (hostname does not match)
		 * *   `https://www.google.com:444/`  (port does not match)
		 * REQUIRED
		 */
		site?: string | null;
	}

	/** Describes a web asset. */
	export interface WebAssetFormProperties {

		/**
		 * Web assets are identified by a URL that contains only the scheme, hostname
		 * and port parts.  The format is
		 * http[s]://<hostname>[:<port>]
		 * Hostnames must be fully qualified: they must end in a single period
		 * ("`.`").
		 * Only the schemes "http" and "https" are currently allowed.
		 * Port numbers are given as a decimal number, and they must be omitted if the
		 * standard port numbers are used: 80 for http and 443 for https.
		 * We call this limited URL the "site".  All URLs that share the same scheme,
		 * hostname and port are considered to be a part of the site and thus belong
		 * to the web asset.
		 * Example: the asset with the site `https://www.google.com` contains all
		 * these URLs:
		 * *   `https://www.google.com/`
		 * *   `https://www.google.com:443/`
		 * *   `https://www.google.com/foo`
		 * *   `https://www.google.com/foo?bar`
		 * *   `https://www.google.com/foo#bar`
		 * *   `https://user@password:www.google.com/`
		 * But it does not contain these URLs:
		 * *   `http://www.google.com/`       (wrong scheme)
		 * *   `https://google.com/`          (hostname does not match)
		 * *   `https://www.google.com:444/`  (port does not match)
		 * REQUIRED
		 */
		site: FormControl<string | null | undefined>,
	}
	export function CreateWebAssetFormGroup() {
		return new FormGroup<WebAssetFormProperties>({
			site: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the CheckAssetLinks call. */
	export interface CheckResponse {

		/**
		 * Human-readable message containing information intended to help end users
		 * understand, reproduce and debug the result.
		 * The message will be in English and we are currently not planning to offer
		 * any translations.
		 * Please note that no guarantees are made about the contents or format of
		 * this string.  Any aspect of it may be subject to change without notice.
		 * You should not attempt to programmatically parse this data.  For
		 * programmatic access, use the error_code field below.
		 */
		debugString?: string | null;

		/** Error codes that describe the result of the Check operation. */
		errorCode?: Array<string>;

		/**
		 * Set to true if the assets specified in the request are linked by the
		 * relation specified in the request.
		 */
		linked?: boolean | null;

		/**
		 * From serving time, how much longer the response should be considered valid
		 * barring further updates.
		 * REQUIRED
		 */
		maxAge?: string | null;
	}

	/** Response message for the CheckAssetLinks call. */
	export interface CheckResponseFormProperties {

		/**
		 * Human-readable message containing information intended to help end users
		 * understand, reproduce and debug the result.
		 * The message will be in English and we are currently not planning to offer
		 * any translations.
		 * Please note that no guarantees are made about the contents or format of
		 * this string.  Any aspect of it may be subject to change without notice.
		 * You should not attempt to programmatically parse this data.  For
		 * programmatic access, use the error_code field below.
		 */
		debugString: FormControl<string | null | undefined>,

		/**
		 * Set to true if the assets specified in the request are linked by the
		 * relation specified in the request.
		 */
		linked: FormControl<boolean | null | undefined>,

		/**
		 * From serving time, how much longer the response should be considered valid
		 * barring further updates.
		 * REQUIRED
		 */
		maxAge: FormControl<string | null | undefined>,
	}
	export function CreateCheckResponseFormGroup() {
		return new FormGroup<CheckResponseFormProperties>({
			debugString: new FormControl<string | null | undefined>(undefined),
			linked: new FormControl<boolean | null | undefined>(undefined),
			maxAge: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the List call. */
	export interface ListResponse {

		/**
		 * Human-readable message containing information intended to help end users
		 * understand, reproduce and debug the result.
		 * The message will be in English and we are currently not planning to offer
		 * any translations.
		 * Please note that no guarantees are made about the contents or format of
		 * this string.  Any aspect of it may be subject to change without notice.
		 * You should not attempt to programmatically parse this data.  For
		 * programmatic access, use the error_code field below.
		 */
		debugString?: string | null;

		/** Error codes that describe the result of the List operation. */
		errorCode?: Array<string>;

		/**
		 * From serving time, how much longer the response should be considered valid
		 * barring further updates.
		 * REQUIRED
		 */
		maxAge?: string | null;

		/** A list of all the matching statements that have been found. */
		statements?: Array<Statement>;
	}

	/** Response message for the List call. */
	export interface ListResponseFormProperties {

		/**
		 * Human-readable message containing information intended to help end users
		 * understand, reproduce and debug the result.
		 * The message will be in English and we are currently not planning to offer
		 * any translations.
		 * Please note that no guarantees are made about the contents or format of
		 * this string.  Any aspect of it may be subject to change without notice.
		 * You should not attempt to programmatically parse this data.  For
		 * programmatic access, use the error_code field below.
		 */
		debugString: FormControl<string | null | undefined>,

		/**
		 * From serving time, how much longer the response should be considered valid
		 * barring further updates.
		 * REQUIRED
		 */
		maxAge: FormControl<string | null | undefined>,
	}
	export function CreateListResponseFormGroup() {
		return new FormGroup<ListResponseFormProperties>({
			debugString: new FormControl<string | null | undefined>(undefined),
			maxAge: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Describes a reliable statement that has been made about the relationship
	 * between a source asset and a target asset.
	 * Statements are always made by the source asset, either directly or by
	 * delegating to a statement list that is stored elsewhere.
	 * For more detailed definitions of statements and assets, please refer
	 * to our [API documentation landing
	 * page](/digital-asset-links/v1/getting-started).
	 */
	export interface Statement {

		/**
		 * The relation identifies the use of the statement as intended by the source
		 * asset's owner (that is, the person or entity who issued the statement).
		 * Every complete statement has a relation.
		 * We identify relations with strings of the format `<kind>/<detail>`, where
		 * `<kind>` must be one of a set of pre-defined purpose categories, and
		 * `<detail>` is a free-form lowercase alphanumeric string that describes the
		 * specific use case of the statement.
		 * Refer to [our API documentation](/digital-asset-links/v1/relation-strings)
		 * for the current list of supported relations.
		 * Example: `delegate_permission/common.handle_all_urls`
		 * REQUIRED
		 */
		relation?: string | null;

		/**
		 * Uniquely identifies an asset.
		 * A digital asset is an identifiable and addressable online entity that
		 * typically provides some service or content.  Examples of assets are websites,
		 * Android apps, Twitter feeds, and Plus Pages.
		 */
		source?: Asset;

		/**
		 * Uniquely identifies an asset.
		 * A digital asset is an identifiable and addressable online entity that
		 * typically provides some service or content.  Examples of assets are websites,
		 * Android apps, Twitter feeds, and Plus Pages.
		 */
		target?: Asset;
	}

	/**
	 * Describes a reliable statement that has been made about the relationship
	 * between a source asset and a target asset.
	 * Statements are always made by the source asset, either directly or by
	 * delegating to a statement list that is stored elsewhere.
	 * For more detailed definitions of statements and assets, please refer
	 * to our [API documentation landing
	 * page](/digital-asset-links/v1/getting-started).
	 */
	export interface StatementFormProperties {

		/**
		 * The relation identifies the use of the statement as intended by the source
		 * asset's owner (that is, the person or entity who issued the statement).
		 * Every complete statement has a relation.
		 * We identify relations with strings of the format `<kind>/<detail>`, where
		 * `<kind>` must be one of a set of pre-defined purpose categories, and
		 * `<detail>` is a free-form lowercase alphanumeric string that describes the
		 * specific use case of the statement.
		 * Refer to [our API documentation](/digital-asset-links/v1/relation-strings)
		 * for the current list of supported relations.
		 * Example: `delegate_permission/common.handle_all_urls`
		 * REQUIRED
		 */
		relation: FormControl<string | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			relation: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Determines whether the specified (directional) relationship exists between
		 * the specified source and target assets.
		 * The relation describes the intent of the link between the two assets as
		 * claimed by the source asset.  An example for such relationships is the
		 * delegation of privileges or permissions.
		 * This command is most often used by infrastructure systems to check
		 * preconditions for an action.  For example, a client may want to know if it
		 * is OK to send a web URL to a particular mobile app instead. The client can
		 * check for the relevant asset link from the website to the mobile app to
		 * decide if the operation should be allowed.
		 * A note about security: if you specify a secure asset as the source, such as
		 * an HTTPS website or an Android app, the API will ensure that any
		 * statements used to generate the response have been made in a secure way by
		 * the owner of that asset.  Conversely, if the source asset is an insecure
		 * HTTP website (that is, the URL starts with `http://` instead of
		 * `https://`), the API cannot verify its statements securely, and it is not
		 * possible to ensure that the website's statements have not been altered by a
		 * third party.  For more information, see the [Digital Asset Links technical
		 * design
		 * specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
		 * Get v1/assetlinks:check
		 * @param {string} relation Query string for the relation.
		 * We identify relations with strings of the format `<kind>/<detail>`, where
		 * `<kind>` must be one of a set of pre-defined purpose categories, and
		 * `<detail>` is a free-form lowercase alphanumeric string that describes the
		 * specific use case of the statement.
		 * Refer to [our API documentation](/digital-asset-links/v1/relation-strings)
		 * for the current list of supported relations.
		 * For a query to match an asset link, both the query's and the asset link's
		 * relation strings must match exactly.
		 * Example: A query with relation `delegate_permission/common.handle_all_urls`
		 * matches an asset link with relation
		 * `delegate_permission/common.handle_all_urls`.
		 * @param {string} source_androidApp_certificate_sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM
		 *  certificate, it can be acquired like this:
		 *     $ keytool -printcert -file $CERTFILE | grep SHA256:
		 *     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \
		 *         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * or like this:
		 *     $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256
		 *     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \
		 *         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * In this example, the contents of this field would be `14:6D:E9:83:C5:73:
		 * 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:
		 * 44:E5`.
		 * If these tools are not available to you, you can convert the PEM
		 * certificate into the DER format, compute the SHA-256 hash of that string
		 * and represent the result as a hexstring (that is, uppercase hexadecimal
		 * representations of each octet, separated by colons).
		 * @param {string} source_androidApp_packageName Android App assets are naturally identified by their Java package name.
		 * For example, the Google Maps app uses the package name
		 * `com.google.android.apps.maps`.
		 * REQUIRED
		 * @param {string} source_web_site Web assets are identified by a URL that contains only the scheme, hostname
		 * and port parts.  The format is
		 *     http[s]://<hostname>[:<port>]
		 * Hostnames must be fully qualified: they must end in a single period
		 * ("`.`").
		 * Only the schemes "http" and "https" are currently allowed.
		 * Port numbers are given as a decimal number, and they must be omitted if the
		 * standard port numbers are used: 80 for http and 443 for https.
		 * We call this limited URL the "site".  All URLs that share the same scheme,
		 * hostname and port are considered to be a part of the site and thus belong
		 * to the web asset.
		 * Example: the asset with the site `https://www.google.com` contains all
		 * these URLs:
		 *   *   `https://www.google.com/`
		 *   *   `https://www.google.com:443/`
		 *   *   `https://www.google.com/foo`
		 *   *   `https://www.google.com/foo?bar`
		 *   *   `https://www.google.com/foo#bar`
		 *   *   `https://user@password:www.google.com/`
		 * But it does not contain these URLs:
		 *   *   `http://www.google.com/`       (wrong scheme)
		 *   *   `https://google.com/`          (hostname does not match)
		 *   *   `https://www.google.com:444/`  (port does not match)
		 * REQUIRED
		 * @param {string} target_androidApp_certificate_sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM
		 *  certificate, it can be acquired like this:
		 *     $ keytool -printcert -file $CERTFILE | grep SHA256:
		 *     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \
		 *         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * or like this:
		 *     $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256
		 *     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \
		 *         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * In this example, the contents of this field would be `14:6D:E9:83:C5:73:
		 * 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:
		 * 44:E5`.
		 * If these tools are not available to you, you can convert the PEM
		 * certificate into the DER format, compute the SHA-256 hash of that string
		 * and represent the result as a hexstring (that is, uppercase hexadecimal
		 * representations of each octet, separated by colons).
		 * @param {string} target_androidApp_packageName Android App assets are naturally identified by their Java package name.
		 * For example, the Google Maps app uses the package name
		 * `com.google.android.apps.maps`.
		 * REQUIRED
		 * @param {string} target_web_site Web assets are identified by a URL that contains only the scheme, hostname
		 * and port parts.  The format is
		 *     http[s]://<hostname>[:<port>]
		 * Hostnames must be fully qualified: they must end in a single period
		 * ("`.`").
		 * Only the schemes "http" and "https" are currently allowed.
		 * Port numbers are given as a decimal number, and they must be omitted if the
		 * standard port numbers are used: 80 for http and 443 for https.
		 * We call this limited URL the "site".  All URLs that share the same scheme,
		 * hostname and port are considered to be a part of the site and thus belong
		 * to the web asset.
		 * Example: the asset with the site `https://www.google.com` contains all
		 * these URLs:
		 *   *   `https://www.google.com/`
		 *   *   `https://www.google.com:443/`
		 *   *   `https://www.google.com/foo`
		 *   *   `https://www.google.com/foo?bar`
		 *   *   `https://www.google.com/foo#bar`
		 *   *   `https://user@password:www.google.com/`
		 * But it does not contain these URLs:
		 *   *   `http://www.google.com/`       (wrong scheme)
		 *   *   `https://google.com/`          (hostname does not match)
		 *   *   `https://www.google.com:444/`  (port does not match)
		 * REQUIRED
		 * @return {void} Successful response
		 */
		Digitalassetlinks_assetlinks_check(relation: string | null | undefined, source_androidApp_certificate_sha256Fingerprint: string | null | undefined, source_androidApp_packageName: string | null | undefined, source_web_site: string | null | undefined, target_androidApp_certificate_sha256Fingerprint: string | null | undefined, target_androidApp_packageName: string | null | undefined, target_web_site: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/assetlinks:check?relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&source_androidApp_certificate_sha256Fingerprint=' + (source_androidApp_certificate_sha256Fingerprint == null ? '' : encodeURIComponent(source_androidApp_certificate_sha256Fingerprint)) + '&source_androidApp_packageName=' + (source_androidApp_packageName == null ? '' : encodeURIComponent(source_androidApp_packageName)) + '&source_web_site=' + (source_web_site == null ? '' : encodeURIComponent(source_web_site)) + '&target_androidApp_certificate_sha256Fingerprint=' + (target_androidApp_certificate_sha256Fingerprint == null ? '' : encodeURIComponent(target_androidApp_certificate_sha256Fingerprint)) + '&target_androidApp_packageName=' + (target_androidApp_packageName == null ? '' : encodeURIComponent(target_androidApp_packageName)) + '&target_web_site=' + (target_web_site == null ? '' : encodeURIComponent(target_web_site)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of all statements from a given source that match the
		 * specified target and statement string.
		 * The API guarantees that all statements with secure source assets, such as
		 * HTTPS websites or Android apps, have been made in a secure way by the owner
		 * of those assets, as described in the [Digital Asset Links technical design
		 * specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
		 * Specifically, you should consider that for insecure websites (that is,
		 * where the URL starts with `http://` instead of `https://`), this guarantee
		 * cannot be made.
		 * The `List` command is most useful in cases where the API client wants to
		 * know all the ways in which two assets are related, or enumerate all the
		 * relationships from a particular source asset.  Example: a feature that
		 * helps users navigate to related items.  When a mobile app is running on a
		 * device, the feature would make it easy to navigate to the corresponding web
		 * site or Google+ profile.
		 * Get v1/statements:list
		 * @param {string} relation Use only associations that match the specified relation.
		 * See the [`Statement`](#Statement) message for a detailed definition of
		 * relation strings.
		 * For a query to match a statement, one of the following must be true:
		 * *    both the query's and the statement's relation strings match exactly,
		 *      or
		 * *    the query's relation string is empty or missing.
		 * Example: A query with relation `delegate_permission/common.handle_all_urls`
		 * matches an asset link with relation
		 * `delegate_permission/common.handle_all_urls`.
		 * @param {string} source_androidApp_certificate_sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM
		 *  certificate, it can be acquired like this:
		 *     $ keytool -printcert -file $CERTFILE | grep SHA256:
		 *     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \
		 *         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * or like this:
		 *     $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256
		 *     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \
		 *         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5
		 * In this example, the contents of this field would be `14:6D:E9:83:C5:73:
		 * 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:
		 * 44:E5`.
		 * If these tools are not available to you, you can convert the PEM
		 * certificate into the DER format, compute the SHA-256 hash of that string
		 * and represent the result as a hexstring (that is, uppercase hexadecimal
		 * representations of each octet, separated by colons).
		 * @param {string} source_androidApp_packageName Android App assets are naturally identified by their Java package name.
		 * For example, the Google Maps app uses the package name
		 * `com.google.android.apps.maps`.
		 * REQUIRED
		 * @param {string} source_web_site Web assets are identified by a URL that contains only the scheme, hostname
		 * and port parts.  The format is
		 *     http[s]://<hostname>[:<port>]
		 * Hostnames must be fully qualified: they must end in a single period
		 * ("`.`").
		 * Only the schemes "http" and "https" are currently allowed.
		 * Port numbers are given as a decimal number, and they must be omitted if the
		 * standard port numbers are used: 80 for http and 443 for https.
		 * We call this limited URL the "site".  All URLs that share the same scheme,
		 * hostname and port are considered to be a part of the site and thus belong
		 * to the web asset.
		 * Example: the asset with the site `https://www.google.com` contains all
		 * these URLs:
		 *   *   `https://www.google.com/`
		 *   *   `https://www.google.com:443/`
		 *   *   `https://www.google.com/foo`
		 *   *   `https://www.google.com/foo?bar`
		 *   *   `https://www.google.com/foo#bar`
		 *   *   `https://user@password:www.google.com/`
		 * But it does not contain these URLs:
		 *   *   `http://www.google.com/`       (wrong scheme)
		 *   *   `https://google.com/`          (hostname does not match)
		 *   *   `https://www.google.com:444/`  (port does not match)
		 * REQUIRED
		 * @return {void} Successful response
		 */
		Digitalassetlinks_statements_list(relation: string | null | undefined, source_androidApp_certificate_sha256Fingerprint: string | null | undefined, source_androidApp_packageName: string | null | undefined, source_web_site: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/statements:list?relation=' + (relation == null ? '' : encodeURIComponent(relation)) + '&source_androidApp_certificate_sha256Fingerprint=' + (source_androidApp_certificate_sha256Fingerprint == null ? '' : encodeURIComponent(source_androidApp_certificate_sha256Fingerprint)) + '&source_androidApp_packageName=' + (source_androidApp_packageName == null ? '' : encodeURIComponent(source_androidApp_packageName)) + '&source_web_site=' + (source_web_site == null ? '' : encodeURIComponent(source_web_site)), { observe: 'response', responseType: 'text' });
		}
	}

}

